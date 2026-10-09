-- ============================================================
-- Migrasi 9 Okt 2026: buang pg_sleep daripada semakan PIN dan kod kelas.
--
-- pg_sleep memegang sambungan pangkalan data sepanjang tidur. Ratusan
-- permintaan salah serentak boleh menghabiskan sambungan dan menyekat
-- semua murid lain. Ia juga tidak menghalang penyerang yang menghantar
-- permintaan secara selari.
--
-- * PIN: kunci 8 kali salah dalam 15 minit bagi setiap murid (lo_gagal)
--   sudah mengehadkan tekaan. Tidur dibuang sahaja.
-- * Kod kelas: diganti dengan had kod salah bagi setiap IP. IP diambil
--   daripada cf-connecting-ip yang ditetapkan oleh Cloudflare Supabase
--   (klien tidak boleh memalsukannya). Had longgar (60 setiap 10 minit)
--   kerana satu sekolah biasanya berkongsi satu IP.
-- ============================================================

create table if not exists lo_had_ip (
  ip    text not null,
  jenis text not null,
  bil   int  not null default 0,
  mula  timestamptz not null default now(),
  primary key (ip, jenis)
);
alter table lo_had_ip enable row level security;
revoke all on lo_had_ip from anon, authenticated;

create or replace function lo_ip() returns text
language plpgsql stable set search_path = public as $$
declare h json;
begin
  begin
    h := nullif(current_setting('request.headers', true), '')::json;
  exception when others then
    return null;
  end;
  return left(coalesce(h->>'cf-connecting-ip', h->>'x-real-ip'), 64);
end $$;
revoke all on function lo_ip() from public, anon, authenticated;

-- Sudah melepasi had dalam tetingkap semasa? (tidak menambah kiraan)
create or replace function lo_had_ip_penuh(p_jenis text, p_maks int, p_tempoh interval)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from lo_had_ip
    where ip = lo_ip() and jenis = p_jenis and bil >= p_maks and mula > now() - p_tempoh);
$$;
revoke all on function lo_had_ip_penuh(text, int, interval) from public, anon, authenticated;

-- Tambah satu kiraan gagal bagi IP semasa.
create or replace function lo_had_ip_tambah(p_jenis text, p_tempoh interval)
returns void language plpgsql security definer set search_path = public as $$
declare v_ip text := lo_ip();
begin
  if v_ip is null then return; end if;
  insert into lo_had_ip(ip, jenis, bil, mula) values (v_ip, p_jenis, 1, now())
    on conflict (ip, jenis) do update set
      bil  = case when lo_had_ip.mula < now() - p_tempoh then 1 else lo_had_ip.bil + 1 end,
      mula = case when lo_had_ip.mula < now() - p_tempoh then now() else lo_had_ip.mula end;
  -- buang baris lama sekali-sekala supaya jadual kekal kecil
  if random() < 0.01 then delete from lo_had_ip where mula < now() - interval '1 day'; end if;
end $$;
revoke all on function lo_had_ip_tambah(text, interval) from public, anon, authenticated;

create or replace function lo_pin_betul(p_kelas text, p_no text, p_pin text)
returns boolean language plpgsql security definer set search_path = public as $$
declare simpan text; g lo_gagal%rowtype;
begin
  select * into g from lo_gagal where kelas = p_kelas and no = p_no;
  -- lapan kali salah dalam 15 minit: kunci sementara
  if g.kelas is not null and g.bil >= 8 and g.mula > now() - interval '15 minutes' then
    return false;
  end if;
  select pin into simpan from lo_murid where kelas = p_kelas and no = p_no;
  if simpan is not null and simpan = coalesce(p_pin, '') then
    if g.kelas is not null then delete from lo_gagal where kelas = p_kelas and no = p_no; end if;
    return true;
  end if;
  insert into lo_gagal(kelas, no, bil, mula) values (p_kelas, p_no, 1, now())
    on conflict (kelas, no) do update set
      bil  = case when lo_gagal.mula < now() - interval '15 minutes' then 1 else lo_gagal.bil + 1 end,
      mula = case when lo_gagal.mula < now() - interval '15 minutes' then now() else lo_gagal.mula end;
  return false;
end $$;

create or replace function lo_kelas_buka(p_kod text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare k lo_kelas%rowtype; bersih text;
begin
  -- 60 kod salah dalam 10 minit dari satu IP: tolak tanpa mencari
  if lo_had_ip_penuh('kod', 60, interval '10 minutes') then return null; end if;
  bersih := upper(regexp_replace(coalesce(p_kod, ''), '[^A-Za-z0-9]', '', 'g'));
  select * into k from lo_kelas where kod = bersih;
  if k.id is null then
    perform lo_had_ip_tambah('kod', interval '10 minutes');
    return null;
  end if;
  return jsonb_build_object(
    'id', k.id, 'nama', k.nama, 'kod', k.kod,
    'guru', coalesce((select nama from lo_guru where id = k.guru), ''),
    'sekolah', coalesce((select sekolah from lo_guru where id = k.guru), ''),
    'premium_rendah', coalesce((select premium_rendah_tamat > now() from lo_guru where id = k.guru), false),
    'premium_atas', coalesce((select premium_atas_tamat > now() from lo_guru where id = k.guru), false),
    'murid', coalesce((select jsonb_agg(jsonb_build_object('no', no, 'nama', nama)
                        order by lpad(no, 3, '0')) from lo_murid where kelas = k.id), '[]'::jsonb)
  );
end $$;

notify pgrst, 'reload schema';
