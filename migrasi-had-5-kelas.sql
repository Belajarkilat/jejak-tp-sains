-- 13 Okt 2026: had kelas setiap guru diturunkan daripada 20 kepada 5.
-- Kelas sedia ada tidak disentuh; hanya kelas BAHARU disekat. Akaun pemilik/ujian dikecualikan.
create or replace function lo_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.guru in ('88ee69f1-a6f8-4e53-9f40-be3c5ddfc383','14b0c5cf-0400-45ac-b3f3-26eb6a337f30') then
    return new;
  end if;
  if (select count(*) from lo_kelas where guru = new.guru) >= 5 then
    raise exception 'had 5 kelas bagi setiap guru';
  end if;
  return new;
end $$;
