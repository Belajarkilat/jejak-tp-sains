-- ============================================================
-- Laluan Oksigen — skema rekod PBD
--
-- Prinsip: tiada satu pun jadual boleh ditulis terus oleh pelayar.
-- Semua tulisan melalui fungsi SECURITY DEFINER yang menyemak kod dahulu.
-- Kunci anon hanya boleh MEMBACA apa yang murid memang patut nampak,
-- iaitu senarai nombor dan skor. Nama penuh murid tidak pernah terdedah
-- kepada kunci anon walau dalam keadaan apa sekalipun.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- ---------- jadual ----------

create table if not exists lo_kelas (
  id       text primary key,
  nama     text not null,
  nombor   jsonb not null default '[]'::jsonb,   -- [{no, cap}] cap = sha256(no:kod)
  dikemas  timestamptz not null default now()
);

-- Nama penuh murid. Tiada dasar SELECT untuk anon: jadual ini tidak
-- boleh dibaca dari pelayar langsung, hanya melalui fungsi kod cikgu.
create table if not exists lo_nama (
  kelas    text primary key references lo_kelas(id) on delete cascade,
  nama     jsonb not null default '{}'::jsonb,   -- {no: "Nama Penuh"}
  dikemas  timestamptz not null default now()
);

-- Satu baris = satu murid, satu hentian. Percubaan pertama ditulis
-- sekali sahaja; fungsi simpan tidak akan menyentuhnya lagi selepas itu.
-- `bab` memisahkan rekod setiap bidang pembelajaran. Tahap Penguasaan
-- dalam DSKP ditentukan bagi setiap bidang secara berasingan, jadi rekod
-- pun mesti berasingan.
create table if not exists lo_cubaan (
  bab       text not null,
  kelas     text not null,
  no        text not null,
  aras      int  not null check (aras between 1 and 6),
  pertama   jsonb,
  terbaik   jsonb,
  kali      int not null default 0,
  karangan  jsonb,
  akhir     bigint,
  primary key (bab, kelas, no, aras)
);

create table if not exists lo_tp (
  bab     text not null,
  kelas   text not null,
  no      text not null,
  tp      int check (tp between 0 and 6),
  sebab   text not null default '',
  masa    timestamptz not null default now(),
  primary key (bab, kelas, no)
);

create table if not exists lo_rahsia (
  k text primary key,
  v text not null
);

-- ---------- kunci semua jadual ----------

alter table lo_kelas   enable row level security;
alter table lo_nama    enable row level security;
alter table lo_cubaan  enable row level security;
alter table lo_tp      enable row level security;
alter table lo_rahsia  enable row level security;

-- Murid perlu nampak senarai nombor kelas untuk memilih nombornya.
drop policy if exists lo_kelas_baca on lo_kelas;
create policy lo_kelas_baca on lo_kelas for select to anon, authenticated using (true);

-- Skor perlu dibaca untuk papan pendahulu. Baris ini hanya mengandungi
-- nombor murid, bukan nama, jadi ia selamat dibaca.
drop policy if exists lo_cubaan_baca on lo_cubaan;
create policy lo_cubaan_baca on lo_cubaan for select to anon, authenticated using (true);

-- lo_nama, lo_tp dan lo_rahsia sengaja tiada sebarang dasar.
-- RLS tanpa dasar bermakna kunci anon tidak nampak apa-apa.

-- ---------- pembantu ----------

-- pgcrypto dipasang dalam skema extensions pada Supabase, jadi digest
-- mesti dipanggil dengan nama penuhnya. Fungsi lain menetapkan
-- search_path = public atas sebab keselamatan, jadi ia tidak akan jumpa
-- digest tanpa kelayakan skema ini.
create or replace function lo_cap(p_teks text)
returns text language sql immutable set search_path = public, extensions as $$
  select encode(extensions.digest(p_teks, 'sha256'), 'hex')
$$;

create or replace function lo_kod_guru_betul(p_kod text)
returns boolean language plpgsql security definer set search_path = public as $$
declare simpan text; betul boolean;
begin
  select v into simpan from lo_rahsia where k = 'kod_guru';
  if simpan is null then return false; end if;
  betul := (simpan = lo_cap(coalesce(p_kod, '')));
  -- lengah pada percubaan yang gagal, supaya tekaan automatik jadi perlahan
  if not betul then perform pg_sleep(0.4); end if;
  return betul;
end $$;

create or replace function lo_kod_murid_betul(p_kelas text, p_no text, p_kod text)
returns boolean language plpgsql security definer set search_path = public as $$
declare rec jsonb; simpan text;
begin
  select nombor into rec from lo_kelas where id = p_kelas;
  if rec is null then return false; end if;
  select (x->>'cap') into simpan
    from jsonb_array_elements(rec) x where x->>'no' = p_no limit 1;
  -- nombor tanpa kod bermakna cikgu belum menjananya lagi
  if simpan is null then return true; end if;
  if simpan = lo_cap(p_no || ':' || coalesce(p_kod, '')) then return true; end if;
  perform pg_sleep(0.3);
  return false;
end $$;

-- ---------- kod cikgu ----------

create or replace function lo_guru_ada()
returns boolean language sql security definer set search_path = public as $$
  select exists (select 1 from lo_rahsia where k = 'kod_guru')
$$;

create or replace function lo_guru_tetap_kod(p_kod_lama text, p_kod_baru text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  -- kod cikgu membuka nama penuh semua murid, jadi ia mesti lebih panjang
  -- daripada kod murid. Lapan aksara menjadikan tekaan automatik tidak
  -- berbaloi apabila digabung dengan lengah di bawah.
  if length(coalesce(p_kod_baru,'')) < 8 then return false; end if;
  if exists (select 1 from lo_rahsia where k = 'kod_guru') then
    if not lo_kod_guru_betul(p_kod_lama) then return false; end if;
  end if;
  insert into lo_rahsia(k, v) values ('kod_guru', lo_cap(p_kod_baru))
    on conflict (k) do update set v = excluded.v;
  return true;
end $$;

-- ---------- murid ----------

create or replace function lo_masuk(p_kelas text, p_no text, p_kod text)
returns boolean language sql security definer set search_path = public as $$
  select lo_kod_murid_betul(p_kelas, p_no, p_kod)
$$;

-- Simpan satu percubaan. Percubaan pertama tidak pernah ditindih.
-- Tulisan cikgu berada dalam jadual lain, jadi ia tidak boleh berlanggar.
create or replace function lo_simpan_cubaan(
  p_bab text, p_kelas text, p_no text, p_kod text, p_aras int,
  p_kini jsonb, p_karangan jsonb default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare ada lo_cubaan%rowtype; hasil lo_cubaan%rowtype;
begin
  if not lo_kod_murid_betul(p_kelas, p_no, p_kod) then
    raise exception 'kod tidak sah';
  end if;
  if p_aras is null or p_aras < 1 or p_aras > 6 then
    raise exception 'aras tidak sah';
  end if;

  if coalesce(p_bab,'') = '' then raise exception 'bab tidak dinyatakan'; end if;

  select * into ada from lo_cubaan
    where bab = p_bab and kelas = p_kelas and no = p_no and aras = p_aras for update;

  if ada.kelas is null then
    insert into lo_cubaan(bab, kelas, no, aras, pertama, terbaik, kali, karangan, akhir)
      values (p_bab, p_kelas, p_no, p_aras, p_kini, p_kini, 1, p_karangan,
              (p_kini->>'masa')::bigint)
      returning * into hasil;
  else
    update lo_cubaan set
      -- pertama ditulis sekali sahaja, selamanya
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

-- ---------- cikgu ----------

create or replace function lo_guru_data(p_kod text)
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if not lo_kod_guru_betul(p_kod) then raise exception 'kod cikgu tidak sah'; end if;
  return jsonb_build_object(
    'kelas',  coalesce((select jsonb_agg(jsonb_build_object('id',id,'nama',nama,'nombor',nombor) order by id) from lo_kelas), '[]'::jsonb),
    'nama',   coalesce((select jsonb_object_agg(kelas, nama) from lo_nama), '{}'::jsonb),
    'cubaan', coalesce((select jsonb_agg(to_jsonb(c)) from lo_cubaan c), '[]'::jsonb),
    'tp',     coalesce((select jsonb_agg(to_jsonb(t)) from lo_tp t), '[]'::jsonb)
  );
end $$;

-- p_nombor menerima [{no, kod}] dengan kod MENTAH, atau [{no, cap}] dengan
-- cincangan sedia ada. Kod mentah dicincang di sini supaya pelayar tidak
-- perlu melaksanakan kriptografi sendiri, dan supaya hanya ada satu cara
-- mencincang dalam keseluruhan sistem.
create or replace function lo_guru_simpan_kelas(
  p_kod text, p_id text, p_nama text, p_nombor jsonb, p_nama_murid jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
declare siap jsonb;
begin
  if not lo_kod_guru_betul(p_kod) then raise exception 'kod cikgu tidak sah'; end if;
  select coalesce(jsonb_agg(jsonb_build_object(
           'no', x->>'no',
           'cap', case when nullif(x->>'kod','') is not null
                       then lo_cap((x->>'no') || ':' || (x->>'kod'))
                       else nullif(x->>'cap','') end)), '[]'::jsonb)
    into siap
    from jsonb_array_elements(coalesce(p_nombor,'[]'::jsonb)) x;
  insert into lo_kelas(id, nama, nombor, dikemas)
    values (p_id, p_nama, siap, now())
    on conflict (id) do update
      set nama = excluded.nama, nombor = excluded.nombor, dikemas = now();
  insert into lo_nama(kelas, nama, dikemas)
    values (p_id, coalesce(p_nama_murid,'{}'::jsonb), now())
    on conflict (kelas) do update
      set nama = excluded.nama, dikemas = now();
  return true;
end $$;

create or replace function lo_guru_buang_kelas(p_kod text, p_id text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not lo_kod_guru_betul(p_kod) then raise exception 'kod cikgu tidak sah'; end if;
  delete from lo_cubaan where kelas = p_id;
  delete from lo_tp     where kelas = p_id;
  delete from lo_kelas  where id    = p_id;
  return true;
end $$;

create or replace function lo_guru_simpan_tp(
  p_kod text, p_bab text, p_kelas text, p_no text, p_tp int, p_sebab text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not lo_kod_guru_betul(p_kod) then raise exception 'kod cikgu tidak sah'; end if;
  insert into lo_tp(bab, kelas, no, tp, sebab, masa)
    values (p_bab, p_kelas, p_no, p_tp, coalesce(p_sebab,''), now())
    on conflict (bab, kelas, no) do update
      set tp = excluded.tp, sebab = excluded.sebab, masa = now();
  return true;
end $$;

-- ---------- kebenaran ----------

revoke all on lo_kelas, lo_nama, lo_cubaan, lo_tp, lo_rahsia from anon, authenticated;
grant select on lo_kelas, lo_cubaan to anon, authenticated;

revoke all on function lo_cap(text) from anon, authenticated;
revoke all on function lo_kod_guru_betul(text) from anon, authenticated;
revoke all on function lo_kod_murid_betul(text, text, text) from anon, authenticated;

grant execute on function lo_guru_ada() to anon, authenticated;
grant execute on function lo_guru_tetap_kod(text, text) to anon, authenticated;
grant execute on function lo_masuk(text, text, text) to anon, authenticated;
grant execute on function lo_simpan_cubaan(text, text, text, text, int, jsonb, jsonb) to anon, authenticated;
grant execute on function lo_guru_data(text) to anon, authenticated;
grant execute on function lo_guru_simpan_kelas(text, text, text, jsonb, jsonb) to anon, authenticated;
grant execute on function lo_guru_buang_kelas(text, text) to anon, authenticated;
grant execute on function lo_guru_simpan_tp(text, text, text, text, int, text) to anon, authenticated;
