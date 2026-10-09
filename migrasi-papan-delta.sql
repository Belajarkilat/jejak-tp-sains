-- ============================================================
-- Migrasi 9 Okt 2026: papan skor murid hanya menarik baris yang berubah.
--
-- Murid di skrin peta memanggil lo_papan setiap 60 saat. Dahulu setiap
-- panggilan memulangkan seluruh rekod kelas (~40-50 KB), iaitu trafik
-- terbesar pangkalan data. Kini klien menghantar kursor daripada jawapan
-- sebelumnya dan hanya baris yang dikemas kini selepas itu dipulangkan.
--
-- Kursor ialah masa PELAYAN (lajur dikemas), bukan lajur akhir, kerana
-- akhir datang daripada jam peranti murid yang mungkin salah. Kursor
-- dipulangkan 15 saat ke belakang supaya transaksi yang sedang berjalan
-- semasa bacaan tidak tercicir; baris berulang digabung semula oleh klien.
--
-- Serasi ke belakang: klien lama yang tidak menghantar p_sejak masih
-- mendapat seluruh rekod kelas seperti dahulu.
-- ============================================================

alter table lo_cubaan add column if not exists dikemas timestamptz not null default now();

drop function if exists lo_papan(text, text, text, text);

create or replace function lo_papan(p_bab text, p_kelas text, p_no text, p_pin text,
                                    p_sejak timestamptz default null)
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if not lo_pin_betul(p_kelas, p_no, p_pin) then return null; end if;
  return jsonb_build_object(
    'cubaan', coalesce((select jsonb_agg(jsonb_build_object(
        'bab', bab, 'kelas', kelas, 'no', no, 'aras', aras,
        'pertama', case when no = p_no then pertama else null end,
        'terbaik', terbaik, 'kali', kali, 'akhir', akhir,
        'karangan', case when no = p_no then karangan else null end))
      from lo_cubaan where bab = p_bab and kelas = p_kelas
        and (p_sejak is null or dikemas > p_sejak)), '[]'::jsonb),
    'tp', (select to_jsonb(t) from lo_tp t where bab = p_bab and kelas = p_kelas and no = p_no),
    'kursor', now() - interval '15 seconds'
  );
end $$;

revoke all on function lo_papan(text, text, text, text, timestamptz) from public;
grant execute on function lo_papan(text, text, text, text, timestamptz) to anon, authenticated;

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
      akhir    = (p_kini->>'masa')::bigint,
      dikemas  = now()
      where bab = p_bab and kelas = p_kelas and no = p_no and aras = p_aras
      returning * into hasil;
  end if;

  return to_jsonb(hasil);
end $$;

notify pgrst, 'reload schema';
