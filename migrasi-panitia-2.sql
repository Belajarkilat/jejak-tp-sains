-- (bahagian 2) fungsi panitia. Dijalankan selepas migrasi-panitia.sql.

-- sen. Perintis hingga 31 Dis 2026; peringkat kedua oleh ketua yang sama -30%.
create or replace function lo_harga_panitia(p_guru uuid, p_pakej text, p_peringkat text)
returns int language sql stable security definer set search_path = public as $$
  select round((case when now() < timestamptz '2027-01-01 00:00:00+08'
               then case p_pakej when 'kecil' then 9900 when 'standard' then 17900 else 29900 end
               else case p_pakej when 'kecil' then 19900 when 'standard' then 34900 else 59900 end end)
         * case when exists (select 1 from lo_panitia where ketua = p_guru and peringkat <> p_peringkat and tamat > now())
                then 0.7 else 1 end)::int
$$;

-- selaraskan Premium semua ahli dengan tarikh tamat panitia (tidak pernah memendekkan)
create or replace function lo_panitia_selaras(p_id uuid)
returns void language plpgsql security definer set search_path = public as $$
declare p lo_panitia%rowtype;
begin
  select * into p from lo_panitia where id = p_id;
  if p.id is null then return; end if;
  if p.peringkat = 'rendah' then
    update lo_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), p.tamat)
      where panitia_rendah = p.id;
  else
    update lo_guru set premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), p.tamat)
      where panitia_atas = p.id;
  end if;
end $$;

-- guru sertai panitia dengan kod
create or replace function lo_panitia_sertai(p_kod text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare p lo_panitia%rowtype; had int; ahli int; uid uuid := auth.uid();
begin
  if uid is null then return jsonb_build_object('ok', false, 'sebab', 'Sila log masuk'); end if;
  if not exists (select 1 from lo_guru where id = uid) then
    return jsonb_build_object('ok', false, 'sebab', 'Lengkapkan profil guru dahulu');
  end if;
  select * into p from lo_panitia where kod = upper(btrim(p_kod)) and tamat > now();
  if p.id is null then return jsonb_build_object('ok', false, 'sebab', 'Kod panitia tidak dijumpai atau sudah tamat'); end if;
  select (lo_pakej_had(p.pakej)).guru into had;
  select count(*) into ahli from lo_guru
    where (p.peringkat = 'rendah' and panitia_rendah = p.id) or (p.peringkat = 'atas' and panitia_atas = p.id);
  if ahli >= had and not exists (select 1 from lo_guru where id = uid
      and ((p.peringkat = 'rendah' and panitia_rendah = p.id) or (p.peringkat = 'atas' and panitia_atas = p.id))) then
    return jsonb_build_object('ok', false, 'sebab', 'Panitia ini sudah penuh (' || had || ' guru)');
  end if;
  if p.peringkat = 'rendah' then update lo_guru set panitia_rendah = p.id where id = uid;
  else update lo_guru set panitia_atas = p.id where id = uid; end if;
  perform lo_panitia_selaras(p.id);
  return jsonb_build_object('ok', true, 'sekolah', p.sekolah, 'peringkat', p.peringkat, 'pakej', p.pakej, 'tamat', p.tamat);
end $$;

-- panitia milik ketua + bilangan ahli dan kelas
create or replace function lo_panitia_saya()
returns jsonb language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id', p.id, 'sekolah', p.sekolah, 'pakej', p.pakej, 'peringkat', p.peringkat, 'kod', p.kod, 'tamat', p.tamat,
    'had_guru', (lo_pakej_had(p.pakej)).guru, 'had_kelas', (lo_pakej_had(p.pakej)).kelas,
    'ahli', (select count(*) from lo_guru g where (p.peringkat = 'rendah' and g.panitia_rendah = p.id) or (p.peringkat = 'atas' and g.panitia_atas = p.id)),
    'kelas', (select count(*) from lo_kelas k join lo_guru g on g.id = k.guru
              where (p.peringkat = 'rendah' and g.panitia_rendah = p.id) or (p.peringkat = 'atas' and g.panitia_atas = p.id))
  ) order by p.dicipta), '[]'::jsonb)
  from lo_panitia p where p.ketua = auth.uid()
$$;

-- had kelas: had individu ATAU kolam panitia aktif (jumlah kelas semua ahli)
create or replace function lo_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
declare g lo_guru%rowtype; sendiri int; pid uuid; p lo_panitia%rowtype; guna int;
begin
  if new.guru in ('88ee69f1-a6f8-4e53-9f40-be3c5ddfc383','14b0c5cf-0400-45ac-b3f3-26eb6a337f30') then
    return new;
  end if;
  select * into g from lo_guru where id = new.guru;
  select count(*) into sendiri from lo_kelas where guru = new.guru;
  if sendiri < 5 * (1 + coalesce(g.paket_kelas, 0)) then return new; end if;
  foreach pid in array array[g.panitia_rendah, g.panitia_atas] loop
    continue when pid is null;
    select * into p from lo_panitia where id = pid and tamat > now();
    continue when p.id is null;
    select count(*) into guna from lo_kelas k join lo_guru x on x.id = k.guru
      where (p.peringkat = 'rendah' and x.panitia_rendah = p.id) or (p.peringkat = 'atas' and x.panitia_atas = p.id);
    if guna < (lo_pakej_had(p.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $$;

-- bayaran berjaya: tambah cabang panitia
create or replace function lo_bayaran_berjaya(p_billcode text, p_refno text, p_saluran text, p_jumlah_sen int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare b lo_bayaran%rowtype; tamat timestamptz; paket int; per text; pan lo_panitia%rowtype; sk text;
begin
  select * into b from lo_bayaran where billcode = p_billcode for update;
  if b.id is null then return jsonb_build_object('ok', false, 'sebab', 'bil tiada'); end if;
  if b.status = 'berjaya' then return jsonb_build_object('ok', true, 'ulang', true, 'tamat', b.premium_tamat_baru); end if;
  if p_jumlah_sen < b.jumlah_sen then return jsonb_build_object('ok', false, 'sebab', 'jumlah kurang'); end if;
  if b.peringkat = 'kelas' then
    update lo_guru set paket_kelas = paket_kelas + 1 where id = b.guru returning paket_kelas into paket;
    if paket is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
    update lo_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran, dibayar = now() where id = b.id;
    return jsonb_build_object('ok', true, 'paket', paket);
  end if;
  if b.peringkat in ('panitia-rendah', 'panitia-atas') then
    per := substr(b.peringkat, 9);
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
    if per = 'rendah' then update lo_guru set panitia_rendah = pan.id where id = b.guru;
    else update lo_guru set panitia_atas = pan.id where id = b.guru; end if;
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
end $$;

revoke all on function lo_harga_panitia(uuid, text, text), lo_panitia_selaras(uuid) from public, anon, authenticated;
grant execute on function lo_harga_panitia(uuid, text, text) to service_role;
revoke all on function lo_panitia_sertai(text), lo_panitia_saya() from public, anon;
grant execute on function lo_panitia_sertai(text), lo_panitia_saya() to authenticated;
revoke all on function lo_bayaran_berjaya(text, text, text, int) from public, anon, authenticated;
grant execute on function lo_bayaran_berjaya(text, text, text, int) to service_role;
