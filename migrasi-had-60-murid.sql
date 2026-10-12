-- 13 Okt 2026: had 60 murid setiap kelas dikuatkuasakan juga untuk INSERT terus ke lo_murid
-- (lo_guru_simpan_murid sudah menyemak, tetapi authenticated boleh insert terus).
create or replace function lo_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from lo_murid where kelas = new.kelas) >= 60 then
    raise exception 'had 60 murid bagi setiap kelas';
  end if;
  return new;
end $$;
drop trigger if exists lo_had_murid on lo_murid;
create trigger lo_had_murid before insert on lo_murid
  for each row execute function lo_had_murid();
revoke all on function lo_had_murid() from public, anon, authenticated;
