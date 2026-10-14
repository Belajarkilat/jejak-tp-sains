-- Penjejak landing Anak NaikGred (14 Okt 2026): jenis berasingan supaya
-- lawatan landing guru ('lawat') tidak bercampur dengan lawatan ibu bapa.
-- anak-lawat: nota = kod ?dari (kosong jika tiada). anak-klik: nota = nama butang.
alter table lo_ping drop constraint lo_ping_jenis_check;
alter table lo_ping add constraint lo_ping_jenis_check
  check (jenis = any (array['buka','hentian','ralat','lawat','klik','anak-lawat','anak-klik']));

CREATE OR REPLACE FUNCTION public.lo_ping(p_jenis text, p_peranti text, p_bab text DEFAULT NULL::text, p_aras integer DEFAULT NULL::integer, p_nota text DEFAULT ''::text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if p_jenis not in ('buka','hentian','ralat','lawat','klik','anak-lawat','anak-klik') then return; end if;
  if p_peranti !~ '^[a-z0-9]{8}$' then return; end if;
  if p_bab is not null and p_bab !~ '^t[1-3]b[0-9]{1,2}$' then return; end if;
  if (select count(*) from lo_ping
      where peranti = p_peranti and masa > now() - interval '1 day') >= 300 then
    return;
  end if;
  insert into lo_ping (jenis, bab, aras, peranti, nota)
  values (p_jenis, p_bab,
          case when p_aras between 1 and 6 then p_aras end,
          p_peranti, left(coalesce(p_nota,''), 300));
end $function$;
