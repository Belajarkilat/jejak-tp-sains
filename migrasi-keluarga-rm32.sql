-- Harga Anak NaikGred (14 Okt 2026): RM32 setahun Early Bird (dikunci selagi tidak terputus), RM59 setahun mulai 1 Jan 2027.
-- Premium keluarga 365 hari daripada tarikh tamat sedia ada (bukan sehingga 2031).
create or replace function lo_keluarga_aktif(p_guru uuid) returns timestamptz
language plpgsql security definer set search_path = public as $$
declare t timestamptz;
begin
  t := greatest(coalesce((select premium_rendah_tamat from lo_guru where id = p_guru), now()), now()) + interval '365 days';
  update lo_guru set keluarga = true,
    premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), t),
    premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), t) where id = p_guru;
  insert into lo_kelas (guru, nama) select p_guru, 'Keluarga' where not exists (select 1 from lo_kelas where guru = p_guru);
  return t;
end $$;
CREATE OR REPLACE FUNCTION public.lo_harga(p_guru uuid, p_peringkat text)
 RETURNS integer
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select case
    when p_peringkat = 'kelas' then 2300
    when p_peringkat = 'keluarga' then (case
      when now() < timestamptz '2027-01-01 00:00:00+08' then 3200
      when exists (select 1 from lo_bayaran b where b.guru = p_guru and b.peringkat = 'keluarga'
                   and b.status = 'berjaya' and b.dibayar < timestamptz '2027-01-01 00:00:00+08')
       and coalesce((select premium_rendah_tamat from lo_guru where id = p_guru), '-infinity') > now() - interval '30 days'
        then 3200
      else 5900 end)
    when now() < timestamptz '2027-01-01 00:00:00+08' then 2300
    when exists (select 1 from lo_bayaran b where b.guru = p_guru and b.peringkat = p_peringkat
                 and b.status = 'berjaya' and b.dibayar < timestamptz '2027-01-01 00:00:00+08')
     and coalesce((select case when p_peringkat = 'rendah' then premium_rendah_tamat else premium_atas_tamat end
                    from lo_guru where id = p_guru), '-infinity') > now() - interval '30 days'
      then 2300
    else 5900 end
$function$
;
revoke all on function lo_harga(uuid, text) from public, anon, authenticated;
grant execute on function lo_harga(uuid, text) to service_role;
revoke all on function lo_keluarga_aktif(uuid) from public, anon, authenticated;
grant execute on function lo_keluarga_aktif(uuid) to service_role;
