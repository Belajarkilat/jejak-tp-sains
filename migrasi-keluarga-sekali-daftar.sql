-- Anak NaikGred: daftar sekali, anak ditambah sekali (6 Nov 2026).
-- Dijalankan pada KEDUA-DUA projek: Sains (cqokow, app 'lo') dan noaeag (app 'jm','js','je').
-- kel_induk = rekod induk keluarga ikut e-mel (nama ibu bapa + senarai anak {no,nama,pin}).
-- Fungsi tepi 'keluarga' (projek Sains) memanggil kel_baca + kel_terap pada kedua-dua projek
-- setiap kali ibu bapa menyimpan profil atau senarai anak.
-- Hanya akaun guru.keluarga = true disentuh; akaun guru biasa tidak berubah.

create table if not exists kel_induk (
  emel text primary key,
  nama text not null default '',
  anak jsonb not null default '[]'::jsonb,
  dikemas timestamptz not null default now()
);
alter table kel_induk enable row level security;  -- tiada polisi: hanya fungsi security definer

create or replace function kel_app_sah(p_app text) returns boolean
language sql stable as $$
  select p_app = any (array['lo','jm','js','je']) and to_regclass(p_app || '_guru') is not null
$$;

-- Tulis senarai anak ke kelas Keluarga satu akaun (potong ikut had murid, kekalkan no supaya kemajuan kekal).
create or replace function kel_tulis_anak(p_app text, p_guru uuid, p_anak jsonb) returns int
language plpgsql security definer set search_path = public as $$
declare k text; maks int; n int;
begin
  execute format('select id from %I where guru = $1 order by dicipta limit 1', p_app || '_kelas') into k using p_guru;
  if k is null then
    execute format('insert into %I (guru, nama) values ($1, ''Keluarga'') returning id', p_app || '_kelas') into k using p_guru;
  end if;
  execute format('select %I($1)', p_app || '_murid_maks') into maks using k;
  execute format('delete from %I where kelas = $1', p_app || '_murid') using k;
  execute format('insert into %I (kelas, no, nama, pin)
    select $1, x->>''no'', x->>''nama'', x->>''pin''
    from jsonb_array_elements(coalesce($2, ''[]''::jsonb)) with ordinality t(x, i) where i <= $3', p_app || '_murid')
    using k, p_anak, maks;
  get diagnostics n = row_count;
  execute format('delete from %I where kelas = $1', p_app || '_gagal') using k;
  return n;
end $$;
revoke all on function kel_tulis_anak(text, uuid, jsonb) from public, anon, authenticated;

-- Baca nama + senarai anak semasa satu akaun keluarga dalam satu app (null jika bukan keluarga).
create or replace function kel_baca(p_emel text, p_app text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare g uuid; nm text; k text; a jsonb;
begin
  if not kel_app_sah(p_app) then raise exception 'app tidak sah'; end if;
  execute format('select g.id, g.nama from %I g join auth.users u on u.id = g.id
                  where lower(u.email) = lower($1) and g.keluarga', p_app || '_guru') into g, nm using p_emel;
  if g is null then return null; end if;
  execute format('select id from %I where guru = $1 order by dicipta limit 1', p_app || '_kelas') into k using g;
  execute format('select coalesce(jsonb_agg(jsonb_build_object(''no'', no, ''nama'', nama, ''pin'', pin) order by no::int), ''[]''::jsonb)
                  from %I where kelas = $1', p_app || '_murid') into a using k;
  return jsonb_build_object('nama', nm, 'anak', a);
end $$;

-- Terap rekod induk ke semua app keluarga dalam projek ini (dipanggil fungsi tepi dengan service role).
create or replace function kel_terap(p_emel text, p_nama text, p_anak jsonb) returns jsonb
language plpgsql security definer set search_path = public as $$
declare app text; g uuid; hasil jsonb := '{}'::jsonb; n int;
begin
  insert into kel_induk (emel, nama, anak) values (lower(p_emel), coalesce(p_nama, ''), coalesce(p_anak, '[]'::jsonb))
    on conflict (emel) do update set
      nama = case when coalesce(excluded.nama, '') <> '' then excluded.nama else kel_induk.nama end,
      anak = case when p_anak is not null then excluded.anak else kel_induk.anak end,
      dikemas = now();
  foreach app in array array['lo','jm','js','je'] loop
    continue when not kel_app_sah(app);
    execute format('select g.id from %I g join auth.users u on u.id = g.id
                    where lower(u.email) = lower($1) and g.keluarga', app || '_guru') into g using p_emel;
    continue when g is null;
    if coalesce(p_nama, '') <> '' then
      execute format('update %I set nama = $1 where id = $2', app || '_guru') using p_nama, g;
    end if;
    if p_anak is not null then
      n := kel_tulis_anak(app, g, p_anak);
      hasil := hasil || jsonb_build_object(app, n);
    end if;
  end loop;
  return hasil;
end $$;

-- Dipanggil app semasa log masuk: jika keluarga ini sudah berdaftar di subjek lain, terus cipta
-- profil + kelas Keluarga + anak di sini tanpa borang. Juga isi anak jika kelas masih kosong.
create or replace function kel_mula(p_app text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare i kel_induk%rowtype; ada boolean; kel boolean; v_emel text; k text; bil int; cipta boolean := false;
begin
  if not kel_app_sah(p_app) or auth.uid() is null then return jsonb_build_object('keluarga', false); end if;
  v_emel := lower(coalesce(auth.jwt() ->> 'email', ''));
  select * into i from kel_induk where kel_induk.emel = v_emel;
  execute format('select true, keluarga from %I where id = $1', p_app || '_guru') into ada, kel using auth.uid();
  if ada is null then
    if i.emel is null then return jsonb_build_object('keluarga', false); end if;
    execute format('insert into %I (id, nama, sekolah) values ($1, $2, ''Keluarga'')', p_app || '_guru')
      using auth.uid(), coalesce(nullif(i.nama, ''), split_part(v_emel, '@', 1));
    execute format('select %I()', p_app || '_keluarga_tetap');
    cipta := true;
  elsif not kel then
    return jsonb_build_object('keluarga', false);
  end if;
  if i.emel is not null and jsonb_array_length(i.anak) > 0 then
    execute format('select id from %I where guru = $1 order by dicipta limit 1', p_app || '_kelas') into k using auth.uid();
    execute format('select count(*) from %I where kelas = $1', p_app || '_murid') into bil using k;
    if k is null or bil = 0 then perform kel_tulis_anak(p_app, auth.uid(), i.anak); end if;
  end if;
  return jsonb_build_object('keluarga', true, 'cipta', cipta, 'induk', i.emel is not null);
end $$;

revoke all on function kel_baca(text, text), kel_terap(text, text, jsonb) from public, anon, authenticated;
grant execute on function kel_baca(text, text), kel_terap(text, text, jsonb) to service_role;
revoke all on function kel_mula(text) from public, anon;
grant execute on function kel_mula(text) to authenticated;
