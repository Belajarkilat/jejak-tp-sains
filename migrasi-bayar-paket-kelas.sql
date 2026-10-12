-- 13 Okt 2026: bayaran paket kelas (RM23 = 5 kelas tambahan), melalui aliran toyyibPay sedia ada.
-- peringkat 'kelas' dalam lo_bayaran; lo_bayaran_berjaya tambah lo_guru.paket_kelas (bukan premium).
alter table lo_bayaran drop constraint if exists lo_bayaran_peringkat_check;
alter table lo_bayaran add constraint lo_bayaran_peringkat_check check (peringkat in ('rendah', 'atas', 'kelas'));

create or replace function lo_harga(p_guru uuid, p_peringkat text)
returns int language sql stable security definer set search_path = public as $$
  select case
    when p_peringkat = 'kelas' then 2300
    when now() < timestamptz '2027-01-01 00:00:00+08' then 2300
    when exists (select 1 from lo_bayaran b where b.guru = p_guru and b.peringkat = p_peringkat
                 and b.status = 'berjaya' and b.dibayar < timestamptz '2027-01-01 00:00:00+08')
     and coalesce((select case when p_peringkat = 'rendah' then premium_rendah_tamat else premium_atas_tamat end
                    from lo_guru where id = p_guru), '-infinity') > now() - interval '30 days'
      then 2300
    else 5900 end
$$;

create or replace function lo_bayaran_berjaya(p_billcode text, p_refno text, p_saluran text, p_jumlah_sen int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare b lo_bayaran%rowtype; tamat timestamptz; paket int;
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
