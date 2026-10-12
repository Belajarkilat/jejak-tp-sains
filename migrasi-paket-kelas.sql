-- 13 Okt 2026: 5 kelas setiap akaun; setiap RM23 tambahan = 5 kelas lagi (lo_guru.paket_kelas).
-- Guru tidak boleh ubah lajur ini (hanya lajur disenaraikan diberi UPDATE kepada authenticated).
alter table lo_guru add column if not exists paket_kelas int not null default 0 check (paket_kelas >= 0);
create or replace function lo_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.guru in ('88ee69f1-a6f8-4e53-9f40-be3c5ddfc383','14b0c5cf-0400-45ac-b3f3-26eb6a337f30') then
    return new;
  end if;
  if (select count(*) from lo_kelas where guru = new.guru)
     >= 5 * (1 + coalesce((select paket_kelas from lo_guru where id = new.guru), 0)) then
    raise exception 'had kelas bagi setiap guru';
  end if;
  return new;
end $$;
