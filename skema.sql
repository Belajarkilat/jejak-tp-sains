-- ============================================================
-- Cikgu Nani — skema rekod PBD, versi 3 (berbilang guru dan sekolah)
--
-- Prinsip:
-- * Guru log masuk dengan Supabase Auth (e-mel atau Google). Setiap guru
--   hanya nampak kelas miliknya. Sempadan itu ditegakkan oleh peraturan
--   baris (RLS) pada auth.uid(), bukan oleh skrin.
-- * Murid tiada akaun. Murid masuk dengan KOD KELAS (6 aksara rawak),
--   memilih namanya, dan memasukkan PIN 4 angka. Semua bacaan dan tulisan
--   murid melalui fungsi SECURITY DEFINER yang menyemak kod atau PIN dahulu.
-- * Kunci anon tidak boleh membaca atau menulis mana-mana jadual terus.
-- * Percubaan PERTAMA setiap murid bagi setiap hentian ditulis sekali
--   sahaja dan tidak pernah ditindih. Itulah bukti PBD.
--
-- Nama jadual masih berawalan lo_ daripada nama projek yang terdahulu.
-- Skrip ini MEMBUANG jadual versi 2 (satu kod cikgu untuk semua kelas).
-- Ia hanya selamat dijalankan semasa pangkalan data masih kosong.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- ---------- buang versi 2 ----------
drop function if exists lo_guru_ada();
drop function if exists lo_guru_tetap_kod(text, text);
drop function if exists lo_guru_data(text);
drop function if exists lo_guru_simpan_kelas(text, text, text, jsonb, jsonb);
drop function if exists lo_guru_buang_kelas(text, text);
drop function if exists lo_guru_simpan_tp(text, text, text, text, int, text);
drop function if exists lo_kod_guru_betul(text);
drop function if exists lo_masuk(text, text, text);
drop function if exists lo_simpan_cubaan(text, text, text, text, int, jsonb, jsonb);
drop function if exists lo_kod_murid_betul(text, text, text);
drop table if exists lo_rahsia, lo_nama, lo_tp, lo_cubaan, lo_murid, lo_gagal, lo_kelas, lo_guru cascade;

-- ---------- utiliti ----------

create or replace function lo_cap(p_teks text)
returns text language sql immutable set search_path = public, extensions as $$
  select encode(extensions.digest(p_teks, 'sha256'), 'hex')
$$;

-- Kod kelas: 6 aksara tanpa huruf yang mudah keliru (I, L, O, 0, 1).
-- 31^6 ialah kira-kira 887 juta kemungkinan.
create or replace function lo_jana_kod()
returns text language plpgsql volatile security definer
set search_path = public, extensions as $$
declare abjad text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; k text; b bytea; i int;
begin
  loop
    b := extensions.gen_random_bytes(6); k := '';
    for i in 0..5 loop
      k := k || substr(abjad, 1 + (get_byte(b, i) % length(abjad)), 1);
    end loop;
    exit when not exists (select 1 from lo_kelas where kod = k);
  end loop;
  return k;
end $$;

-- ---------- jadual ----------

create table lo_guru (
  id       uuid primary key references auth.users(id) on delete cascade,
  nama     text not null default '' check (length(nama) <= 80),
  sekolah  text not null default '' check (length(sekolah) <= 120),
  dicipta  timestamptz not null default now()
);

create table lo_kelas (
  id       text primary key default ('k' || encode(extensions.gen_random_bytes(6), 'hex')),
  guru     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nama     text not null check (length(nama) between 1 and 60),
  kod      text not null unique default lo_jana_kod(),
  dicipta  timestamptz not null default now()
);
create index lo_kelas_guru on lo_kelas(guru);

-- Nama penuh dan PIN murid. Hanya guru pemilik kelas boleh membacanya
-- terus. Murid yang tahu kod kelas mendapat senarai NAMA sahaja melalui
-- lo_kelas_buka, tidak pernah PIN.
create table lo_murid (
  kelas    text not null references lo_kelas(id) on delete cascade,
  no       text not null check (no ~ '^[0-9]{1,3}$'),
  nama     text not null check (length(nama) between 1 and 120),
  pin      text not null check (pin ~ '^[0-9]{4}$'),
  primary key (kelas, no)
);

-- Satu baris = satu murid, satu hentian, satu bab.
create table lo_cubaan (
  bab       text not null,
  kelas     text not null references lo_kelas(id) on delete cascade,
  no        text not null,
  aras      int  not null check (aras between 1 and 6),
  pertama   jsonb,
  terbaik   jsonb,
  kali      int not null default 0,
  karangan  jsonb,
  akhir     bigint,
  primary key (bab, kelas, no, aras)
);

create table lo_tp (
  bab     text not null,
  kelas   text not null references lo_kelas(id) on delete cascade,
  no      text not null,
  tp      int check (tp between 0 and 6),
  sebab   text not null default '' check (length(sebab) <= 2000),
  masa    timestamptz not null default now(),
  primary key (bab, kelas, no)
);

-- Kiraan PIN salah, supaya tekaan 10 000 PIN tidak boleh dicuba berterusan.
create table lo_gagal (
  kelas  text not null,
  no     text not null,
  bil    int not null default 0,
  mula   timestamptz not null default now(),
  primary key (kelas, no)
);

-- Had supaya satu akaun tidak boleh memenuhkan pangkalan data.
create or replace function lo_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from lo_kelas where guru = new.guru) >= 20 then
    raise exception 'had 20 kelas bagi setiap guru';
  end if;
  return new;
end $$;
create trigger lo_had_kelas before insert on lo_kelas
  for each row execute function lo_had_kelas();

-- ---------- peraturan baris ----------

alter table lo_guru   enable row level security;
alter table lo_kelas  enable row level security;
alter table lo_murid  enable row level security;
alter table lo_cubaan enable row level security;
alter table lo_tp     enable row level security;
alter table lo_gagal  enable row level security;

create or replace function lo_milik(p_kelas text)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from lo_kelas where id = p_kelas and guru = auth.uid())
$$;

create policy lo_guru_diri on lo_guru for all to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy lo_kelas_milik on lo_kelas for all to authenticated
  using (guru = auth.uid()) with check (guru = auth.uid());

create policy lo_murid_milik on lo_murid for all to authenticated
  using (lo_milik(kelas)) with check (lo_milik(kelas));

create policy lo_cubaan_milik on lo_cubaan for select to authenticated
  using (lo_milik(kelas));

create policy lo_tp_milik on lo_tp for all to authenticated
  using (lo_milik(kelas)) with check (lo_milik(kelas));

-- lo_gagal: tiada dasar langsung. Hanya fungsi yang menyentuhnya.

-- ---------- murid ----------

create or replace function lo_pin_betul(p_kelas text, p_no text, p_pin text)
returns boolean language plpgsql security definer set search_path = public as $$
declare simpan text; g lo_gagal%rowtype;
begin
  select * into g from lo_gagal where kelas = p_kelas and no = p_no;
  -- lapan kali salah dalam 15 minit: kunci sementara
  if g.kelas is not null and g.bil >= 8 and g.mula > now() - interval '15 minutes' then
    perform pg_sleep(0.5);
    return false;
  end if;
  select pin into simpan from lo_murid where kelas = p_kelas and no = p_no;
  if simpan is not null and simpan = coalesce(p_pin, '') then
    if g.kelas is not null then delete from lo_gagal where kelas = p_kelas and no = p_no; end if;
    return true;
  end if;
  insert into lo_gagal(kelas, no, bil, mula) values (p_kelas, p_no, 1, now())
    on conflict (kelas, no) do update set
      bil  = case when lo_gagal.mula < now() - interval '15 minutes' then 1 else lo_gagal.bil + 1 end,
      mula = case when lo_gagal.mula < now() - interval '15 minutes' then now() else lo_gagal.mula end;
  perform pg_sleep(0.3);
  return false;
end $$;

-- Buka kelas dengan kod. Memulangkan nama kelas, nama guru dan senarai
-- nama murid (tanpa PIN), atau null jika kod tiada.
create or replace function lo_kelas_buka(p_kod text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare k lo_kelas%rowtype; bersih text;
begin
  bersih := upper(regexp_replace(coalesce(p_kod, ''), '[^A-Za-z0-9]', '', 'g'));
  select * into k from lo_kelas where kod = bersih;
  if k.id is null then
    perform pg_sleep(0.5);
    return null;
  end if;
  return jsonb_build_object(
    'id', k.id, 'nama', k.nama, 'kod', k.kod,
    'guru', coalesce((select nama from lo_guru where id = k.guru), ''),
    'sekolah', coalesce((select sekolah from lo_guru where id = k.guru), ''),
    'murid', coalesce((select jsonb_agg(jsonb_build_object('no', no, 'nama', nama)
                        order by lpad(no, 3, '0')) from lo_murid where kelas = k.id), '[]'::jsonb)
  );
end $$;

create or replace function lo_masuk(p_kelas text, p_no text, p_pin text)
returns boolean language sql security definer set search_path = public as $$
  select lo_pin_betul(p_kelas, p_no, p_pin)
$$;

-- Rekod kelas untuk papan skor murid. Karangan murid lain tidak dipulangkan.
create or replace function lo_papan(p_bab text, p_kelas text, p_no text, p_pin text)
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if not lo_pin_betul(p_kelas, p_no, p_pin) then return null; end if;
  return jsonb_build_object(
    'cubaan', coalesce((select jsonb_agg(jsonb_build_object(
        'bab', bab, 'kelas', kelas, 'no', no, 'aras', aras,
        'pertama', case when no = p_no then pertama else null end,
        'terbaik', terbaik, 'kali', kali, 'akhir', akhir,
        'karangan', case when no = p_no then karangan else null end))
      from lo_cubaan where bab = p_bab and kelas = p_kelas), '[]'::jsonb),
    'tp', (select to_jsonb(t) from lo_tp t where bab = p_bab and kelas = p_kelas and no = p_no)
  );
end $$;

-- Simpan satu percubaan. Percubaan pertama tidak pernah ditindih.
-- PIN salah memulangkan {ralat} dan tidak membatalkan transaksi, supaya
-- kiraan PIN salah tetap direkod.
create or replace function lo_simpan_cubaan(
  p_bab text, p_kelas text, p_no text, p_kod text, p_aras int,
  p_kini jsonb, p_karangan jsonb default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare ada lo_cubaan%rowtype; hasil lo_cubaan%rowtype;
begin
  if not lo_pin_betul(p_kelas, p_no, p_kod) then
    return jsonb_build_object('ralat', 'pin');
  end if;
  if p_aras is null or p_aras < 1 or p_aras > 6 then raise exception 'aras tidak sah'; end if;
  if coalesce(p_bab,'') = '' or length(p_bab) > 20 then raise exception 'bab tidak sah'; end if;
  if length(coalesce(p_kini::text, '')) > 20000 then raise exception 'rekod terlalu besar'; end if;
  if p_karangan is not null and length(p_karangan::text) > 9000 then raise exception 'karangan terlalu panjang'; end if;

  select * into ada from lo_cubaan
    where bab = p_bab and kelas = p_kelas and no = p_no and aras = p_aras for update;

  if ada.kelas is null then
    insert into lo_cubaan(bab, kelas, no, aras, pertama, terbaik, kali, karangan, akhir)
      values (p_bab, p_kelas, p_no, p_aras, p_kini, p_kini, 1, p_karangan,
              (p_kini->>'masa')::bigint)
      returning * into hasil;
  else
    update lo_cubaan set
      pertama  = coalesce(ada.pertama, p_kini),
      terbaik  = case
                   when ada.terbaik is null then p_kini
                   when (p_kini->>'betul')::int > (ada.terbaik->>'betul')::int then p_kini
                   when (p_kini->>'lulus')::boolean and not (ada.terbaik->>'lulus')::boolean then p_kini
                   else ada.terbaik
                 end,
      kali     = ada.kali + 1,
      karangan = coalesce(p_karangan, ada.karangan),
      akhir    = (p_kini->>'masa')::bigint
      where bab = p_bab and kelas = p_kelas and no = p_no and aras = p_aras
      returning * into hasil;
  end if;

  return to_jsonb(hasil);
end $$;

-- ---------- guru ----------

-- Ganti senarai murid satu kelas sekali gus. Pemilikan kelas disemak
-- dengan auth.uid() sebelum apa-apa ditulis.
create or replace function lo_guru_simpan_murid(p_kelas text, p_murid jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not lo_milik(p_kelas) then raise exception 'bukan kelas anda'; end if;
  if jsonb_array_length(coalesce(p_murid, '[]'::jsonb)) > 60 then
    raise exception 'had 60 murid bagi setiap kelas';
  end if;
  delete from lo_murid where kelas = p_kelas;
  insert into lo_murid(kelas, no, nama, pin)
    select p_kelas, x->>'no', x->>'nama', x->>'pin'
    from jsonb_array_elements(coalesce(p_murid, '[]'::jsonb)) x;
  delete from lo_gagal where kelas = p_kelas;
  return true;
end $$;

-- ---------- kebenaran ----------

revoke all on lo_guru, lo_kelas, lo_murid, lo_cubaan, lo_tp, lo_gagal from anon, authenticated;
grant select, insert, update on lo_guru to authenticated;
-- kod kelas dijana pelayan dan tidak boleh ditukar kepada kod yang mudah diteka
grant select, insert (nama), update (nama), delete on lo_kelas to authenticated;
grant select, insert, update, delete on lo_murid to authenticated;
grant select on lo_cubaan to authenticated;
grant select, insert, update, delete on lo_tp to authenticated;

revoke all on function lo_cap(text) from public, anon, authenticated;
revoke all on function lo_jana_kod() from public, anon;
grant execute on function lo_jana_kod() to authenticated;
revoke all on function lo_pin_betul(text, text, text) from public, anon, authenticated;
revoke all on function lo_had_kelas() from public, anon, authenticated;
revoke all on function lo_milik(text) from public, anon;
grant execute on function lo_milik(text) to authenticated;

grant execute on function lo_kelas_buka(text) to anon, authenticated;
grant execute on function lo_masuk(text, text, text) to anon, authenticated;
grant execute on function lo_papan(text, text, text, text) to anon, authenticated;
grant execute on function lo_simpan_cubaan(text, text, text, text, int, jsonb, jsonb) to anon, authenticated;
revoke all on function lo_guru_simpan_murid(text, jsonb) from public, anon;
grant execute on function lo_guru_simpan_murid(text, jsonb) to authenticated;
