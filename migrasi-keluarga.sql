-- Mod Keluarga / Anak NaikGred (14 Okt 2026). Akaun ibu bapa = akaun lo_guru bertanda keluarga.
-- Satu kelas 'Keluarga', sehingga 5 anak. Bayaran RM68 sekali (sebelum 1 Jan 2027) -> Premium T1-T5 hingga 31 Dis 2031;
-- selepas itu RM59 setahun. Bayaran masuk lo_bayaran (peringkat 'keluarga') jadi dikira dalam jualan.
alter table lo_guru add column if not exists keluarga boolean not null default false;
alter table lo_bayaran drop constraint if exists lo_bayaran_peringkat_check;
alter table lo_bayaran add constraint lo_bayaran_peringkat_check
  check (peringkat in ('rendah','atas','kelas','panitia','panitia-rendah','panitia-atas','keluarga'));

-- Tanda akaun sebagai keluarga (hanya jika belum ada kelas guru sebenar) dan sediakan kelas 'Keluarga'.
create or replace function lo_keluarga_tetap() returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from lo_guru where id = auth.uid()) then return false; end if;
  if exists (select 1 from lo_kelas where guru = auth.uid() and nama <> 'Keluarga') then return false; end if;
  update lo_guru set keluarga = true where id = auth.uid();
  insert into lo_kelas (guru, nama) select auth.uid(), 'Keluarga'
    where not exists (select 1 from lo_kelas where guru = auth.uid());
  return true;
end $$;
revoke all on function lo_keluarga_tetap() from public, anon;
grant execute on function lo_keluarga_tetap() to authenticated;

-- Aktifkan Premium keluarga selepas bayaran berjaya (dipanggil lo_bayaran_berjaya).
create or replace function lo_keluarga_aktif(p_guru uuid) returns timestamptz
language plpgsql security definer set search_path = public as $$
declare t timestamptz;
begin
  if now() < timestamptz '2027-01-01 00:00:00+08' then t := timestamptz '2031-12-31 23:59:59+08';
  else t := greatest(coalesce((select premium_rendah_tamat from lo_guru where id = p_guru), now()), now()) + interval '365 days'; end if;
  update lo_guru set keluarga = true,
    premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), t),
    premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), t) where id = p_guru;
  insert into lo_kelas (guru, nama) select p_guru, 'Keluarga' where not exists (select 1 from lo_kelas where guru = p_guru);
  return t;
end $$;
revoke all on function lo_keluarga_aktif(uuid) from public, anon, authenticated;
grant execute on function lo_keluarga_aktif(uuid) to service_role;

CREATE OR REPLACE FUNCTION public.lo_had_kelas()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare g lo_guru%rowtype; sendiri int; had int; pid uuid; pan lo_panitia%rowtype; guna int;
begin
  if new.guru in ('88ee69f1-a6f8-4e53-9f40-be3c5ddfc383','14b0c5cf-0400-45ac-b3f3-26eb6a337f30') then return new; end if;
  select * into g from lo_guru where id = new.guru;
  if coalesce(g.keluarga, false) then
    if (select count(*) from lo_kelas where guru = new.guru) >= 1 then raise exception 'had kelas bagi setiap guru'; end if;
    return new;
  end if;
  select count(*) into sendiri from lo_kelas where guru = new.guru;
  had := (case when lo_premium(new.guru) then 5 else 2 end) + 5 * coalesce(g.paket_kelas, 0);
  if sendiri < had then return new; end if;
  foreach pid in array array[g.panitia_rendah, g.panitia_atas] loop
    continue when pid is null;
    select * into pan from lo_panitia where id = pid and tamat > now();
    continue when pan.id is null;
    select count(*) into guna from lo_kelas k join lo_guru x on x.id = k.guru
      where x.panitia_rendah = pan.id or x.panitia_atas = pan.id;
    if guna < (lo_pakej_had(pan.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $function$

;
CREATE OR REPLACE FUNCTION public.lo_murid_maks(p_kelas text)
 RETURNS integer
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select case when exists (select 1 from lo_kelas k join lo_guru g on g.id = k.guru where k.id = p_kelas and g.keluarga) then 5 when lo_premium((select guru from lo_kelas where id = p_kelas)) then 60 else 40 end
$function$

;
CREATE OR REPLACE FUNCTION public.lo_harga(p_guru uuid, p_peringkat text)
 RETURNS integer
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select case
    when p_peringkat = 'kelas' then 2300
    when p_peringkat = 'keluarga' then (case when now() < timestamptz '2027-01-01 00:00:00+08' then 6800 else 5900 end)
    when now() < timestamptz '2027-01-01 00:00:00+08' then 2300
    when exists (select 1 from lo_bayaran b where b.guru = p_guru and b.peringkat = p_peringkat
                 and b.status = 'berjaya' and b.dibayar < timestamptz '2027-01-01 00:00:00+08')
     and coalesce((select case when p_peringkat = 'rendah' then premium_rendah_tamat else premium_atas_tamat end
                    from lo_guru where id = p_guru), '-infinity') > now() - interval '30 days'
      then 2300
    else 5900 end
$function$

;
CREATE OR REPLACE FUNCTION public.lo_bayaran_berjaya(p_billcode text, p_refno text, p_saluran text, p_jumlah_sen integer)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare b lo_bayaran%rowtype; tamat timestamptz; paket int; per text; pan lo_panitia%rowtype; sk text;
begin
  select * into b from lo_bayaran where billcode = p_billcode for update;
  if b.id is null then return jsonb_build_object('ok', false, 'sebab', 'bil tiada'); end if;
  if b.status = 'berjaya' then return jsonb_build_object('ok', true, 'ulang', true, 'tamat', b.premium_tamat_baru); end if;
  if p_jumlah_sen < b.jumlah_sen then return jsonb_build_object('ok', false, 'sebab', 'jumlah kurang'); end if;
  if b.peringkat = 'keluarga' then
    tamat := lo_keluarga_aktif(b.guru);
    update lo_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran, dibayar = now(), premium_tamat_baru = tamat where id = b.id;
    return jsonb_build_object('ok', true, 'tamat', tamat);
  end if;
  if b.peringkat = 'kelas' then
    update lo_guru set paket_kelas = paket_kelas + 1 where id = b.guru returning paket_kelas into paket;
    if paket is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
    update lo_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran, dibayar = now() where id = b.id;
    return jsonb_build_object('ok', true, 'paket', paket);
  end if;
  if b.peringkat like 'panitia%' then
    per := case when b.peringkat = 'panitia-rendah' then 'rendah' when b.peringkat = 'panitia-atas' then 'atas' else 'semua' end;
    select sekolah into sk from lo_guru where id = b.guru;
    if sk is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
    select * into pan from lo_panitia where ketua = b.guru and peringkat = per for update;
    if pan.id is null then
      insert into lo_panitia (ketua, sekolah, pakej, peringkat, tamat)
        values (b.guru, sk, b.pakej, per, now() + interval '365 days') returning * into pan;
    else
      update lo_panitia set pakej = b.pakej,
             tamat = greatest(tamat, now()) + interval '365 days' where id = pan.id returning * into pan;
    end if;
    if per in ('rendah', 'semua') then update lo_guru set panitia_rendah = pan.id where id = b.guru; end if;
    if per in ('atas', 'semua') then update lo_guru set panitia_atas = pan.id where id = b.guru; end if;
    perform lo_panitia_selaras(pan.id);
    update lo_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran,
           dibayar = now(), premium_tamat_baru = pan.tamat where id = b.id;
    return jsonb_build_object('ok', true, 'tamat', pan.tamat, 'kod', pan.kod);
  end if;
  if b.peringkat = 'rendah' then
    update lo_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, now()), now()) + interval '365 days'
      where id = b.guru returning premium_rendah_tamat into tamat;
  else
    update lo_guru set premium_atas_tamat = greatest(coalesce(premium_atas_tamat, now()), now()) + interval '365 days'
      where id = b.guru returning premium_atas_tamat into tamat;
  end if;
  if tamat is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
  update lo_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran,
         dibayar = now(), premium_tamat_baru = tamat where id = b.id;
  return jsonb_build_object('ok', true, 'tamat', tamat);
end $function$

;
revoke all on function lo_harga(uuid, text) from public, anon, authenticated;
revoke all on function lo_bayaran_berjaya(text, text, text, int) from public, anon, authenticated;
grant execute on function lo_harga(uuid, text) to service_role;
grant execute on function lo_bayaran_berjaya(text, text, text, int) to service_role;
revoke all on function lo_murid_maks(text) from public, anon, authenticated;
