-- Planner Guru 2027 (18 Okt 2026): naikgred.com/planner.
-- 1) Langganan e-mel PILIHAN (guru tanda kotak persetujuan sendiri): wallpaper bulanan + peringatan tarikh.
--    Nama dan sekolah hanya dihantar jika guru menanda kotak itu; nama dalam PDF diproses dalam pelayar sahaja.
-- 2) Kiraan tanpa nama: planner-lawat (nota = kod ?dari) dan planner-muat (nota = gaya + peribadi/kosong).
create table if not exists ng_planner_langganan (
  id bigserial primary key,
  emel text not null unique check (length(emel) <= 200 and emel ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  nama text check (length(nama) <= 80),
  sekolah text check (length(sekolah) <= 120),
  gaya text check (gaya in ('korporat','comel')),
  sumber text check (length(sumber) <= 30),
  setuju_masa timestamptz not null default now(),
  dicipta timestamptz not null default now(),
  berhenti timestamptz
);
alter table ng_planner_langganan enable row level security;
revoke all on ng_planner_langganan from anon, authenticated;

create or replace function public.ng_planner_langgan(p_emel text, p_nama text default null, p_sekolah text default null, p_gaya text default null, p_sumber text default null)
 returns boolean
 language plpgsql
 security definer
 set search_path to 'public'
as $function$
declare e text := lower(trim(coalesce(p_emel, '')));
begin
  if length(e) > 200 or e !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' then return false; end if;
  if (select count(*) from ng_planner_langganan where dicipta > now() - interval '1 hour') >= 500 then return false; end if;
  insert into ng_planner_langganan (emel, nama, sekolah, gaya, sumber)
  values (e, nullif(left(trim(coalesce(p_nama, '')), 80), ''), nullif(left(trim(coalesce(p_sekolah, '')), 120), ''),
          case when p_gaya in ('korporat','comel') then p_gaya end,
          nullif(left(regexp_replace(lower(coalesce(p_sumber, '')), '[^a-z0-9-]', '', 'g'), 30), ''))
  on conflict (emel) do update set
    nama = coalesce(excluded.nama, ng_planner_langganan.nama),
    sekolah = coalesce(excluded.sekolah, ng_planner_langganan.sekolah),
    gaya = coalesce(excluded.gaya, ng_planner_langganan.gaya),
    setuju_masa = now(), berhenti = null;
  return true;
end $function$;
revoke all on function public.ng_planner_langgan(text, text, text, text, text) from public;
grant execute on function public.ng_planner_langgan(text, text, text, text, text) to anon, authenticated;

alter table lo_ping drop constraint lo_ping_jenis_check;
alter table lo_ping add constraint lo_ping_jenis_check
  check (jenis = any (array['buka','hentian','ralat','lawat','klik','anak-lawat','anak-klik','utama-lawat','utama-klik','planner-lawat','planner-muat']));

CREATE OR REPLACE FUNCTION public.lo_ping(p_jenis text, p_peranti text, p_bab text DEFAULT NULL::text, p_aras integer DEFAULT NULL::integer, p_nota text DEFAULT ''::text, p_rujuk text DEFAULT ''::text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if p_jenis not in ('buka','hentian','ralat','lawat','klik','anak-lawat','anak-klik','utama-lawat','utama-klik','planner-lawat','planner-muat') then return; end if;
  if p_peranti !~ '^[a-z0-9]{8}$' then return; end if;
  if p_bab is not null and p_bab !~ '^t[1-3]b[0-9]{1,2}$' then return; end if;
  if (select count(*) from lo_ping
      where peranti = p_peranti and masa > now() - interval '1 day') >= 300 then
    return;
  end if;
  insert into lo_ping (jenis, bab, aras, peranti, nota, rujuk)
  values (p_jenis, p_bab,
          case when p_aras between 1 and 6 then p_aras end,
          p_peranti, left(coalesce(p_nota,''), 300),
          left(regexp_replace(lower(coalesce(p_rujuk,'')), '[^a-z0-9.:|_-]', '', 'g'), 100));
end $function$;
notify pgrst, 'reload schema';
