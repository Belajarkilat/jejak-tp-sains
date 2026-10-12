
create or replace function lo_premium(p_guru uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select coalesce(premium_rendah_tamat, '-infinity') > now() or coalesce(premium_atas_tamat, '-infinity') > now()
                   from lo_guru where id = p_guru), false)
$$;
create or replace function lo_murid_maks(p_kelas text)
returns int language sql stable security definer set search_path = public as $$
  select case when lo_premium((select guru from lo_kelas where id = p_kelas)) then 60 else 40 end
$$;
create or replace function lo_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
declare g lo_guru%rowtype; sendiri int; had int; pid uuid; pan lo_panitia%rowtype; guna int;
begin
  if new.guru in ('88ee69f1-a6f8-4e53-9f40-be3c5ddfc383','14b0c5cf-0400-45ac-b3f3-26eb6a337f30') then return new; end if;
  select * into g from lo_guru where id = new.guru;
  select count(*) into sendiri from lo_kelas where guru = new.guru;
  had := (case when lo_premium(new.guru) then 5 else 2 end) + 5 * coalesce(g.paket_kelas, 0);
  if sendiri < had then return new; end if;
  foreach pid in array array[g.panitia_rendah, g.panitia_atas] loop
    continue when pid is null;
    select * into pan from lo_panitia where id = pid and tamat > now();
    continue when pan.id is null;
    select count(*) into guna from lo_kelas k join lo_guru x on x.id = k.guru
      where (pan.peringkat = 'rendah' and x.panitia_rendah = pan.id) or (pan.peringkat = 'atas' and x.panitia_atas = pan.id);
    if guna < (lo_pakej_had(pan.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $$;
create or replace function lo_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from lo_murid where kelas = new.kelas) >= lo_murid_maks(new.kelas) then
    raise exception 'had murid bagi setiap kelas';
  end if;
  return new;
end $$;
revoke all on function lo_premium(uuid), lo_murid_maks(text) from public, anon, authenticated;

CREATE OR REPLACE FUNCTION public.lo_guru_simpan_murid(p_kelas text, p_murid jsonb)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if not lo_milik(p_kelas) then raise exception 'bukan kelas anda'; end if;
  if jsonb_array_length(coalesce(p_murid, '[]'::jsonb)) > lo_murid_maks(p_kelas) then
    raise exception 'had murid bagi setiap kelas';
  end if;
  delete from lo_murid where kelas = p_kelas;
  insert into lo_murid(kelas, no, nama, pin)
    select p_kelas, x->>'no', x->>'nama', x->>'pin'
    from jsonb_array_elements(coalesce(p_murid, '[]'::jsonb)) x;
  delete from lo_gagal where kelas = p_kelas;
  return true;
end $function$
;
