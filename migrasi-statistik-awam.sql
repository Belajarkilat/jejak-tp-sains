-- Pengira hidup di landing.html (13 Okt 2026).
-- Memulangkan dua nombor sahaja (tiada data murid): murid berbeza yang bermain
-- dalam 24 jam lepas, dan jumlah murid yang pernah bermain.
create or replace function lo_statistik_awam() returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'bermain_24j', count(distinct (kelas, no)) filter (where akhir >= (extract(epoch from now()) - 86400) * 1000),
    'bermain_semua', count(distinct (kelas, no))
  ) from lo_cubaan;
$$;
grant execute on function lo_statistik_awam() to anon, authenticated;
