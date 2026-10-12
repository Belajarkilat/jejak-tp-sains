-- 13 Okt 2026: Pakej Panitia Sekolah.
-- Ketua bayar satu pakej (kecil/standard/besar) bagi satu peringkat; guru lain sertai dengan kod
-- dan mendapat Premium peringkat itu hingga tarikh tamat panitia. Kelas dikongsi dalam satu kolam.
create table if not exists lo_panitia (
  id       uuid primary key default gen_random_uuid(),
  ketua    uuid not null references auth.users(id) on delete restrict,
  sekolah  text not null default '',
  pakej    text not null check (pakej in ('kecil','standard','besar')),
  peringkat text not null check (peringkat in ('rendah','atas')),
  kod      text not null unique default upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8)),
  tamat    timestamptz not null,
  dicipta  timestamptz not null default now(),
  unique (ketua, peringkat)
);
alter table lo_panitia enable row level security;
revoke all on lo_panitia from anon, authenticated;

alter table lo_guru add column if not exists panitia_rendah uuid references lo_panitia(id) on delete set null;
alter table lo_guru add column if not exists panitia_atas   uuid references lo_panitia(id) on delete set null;

alter table lo_bayaran add column if not exists pakej text check (pakej in ('kecil','standard','besar'));
alter table lo_bayaran drop constraint if exists lo_bayaran_peringkat_check;
alter table lo_bayaran add constraint lo_bayaran_peringkat_check
  check (peringkat in ('rendah','atas','kelas','panitia-rendah','panitia-atas'));

-- had guru dan kelas bagi setiap pakej
create or replace function lo_pakej_had(p_pakej text, out guru int, out kelas int)
language sql immutable as $$
  select case p_pakej when 'kecil' then 5 when 'standard' then 10 else 20 end,
         case p_pakej when 'kecil' then 25 when 'standard' then 50 else 100 end
$$;

