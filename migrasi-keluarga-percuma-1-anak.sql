-- 14 Okt 2026: akaun keluarga PERCUMA dihadkan 1 anak dan Bab 1 setiap tingkatan (bab dikawal dalam app).
-- Keluarga berbayar kekal 5 anak. kelas_buka kini memulangkan 'keluarga' supaya app murid tahu.
-- Projek Sains (lo_) cqokowzzgseuvhcgpktj; Matematik (jm_) dan Sejarah (js_) noaeagitwklnpmyhhhtn.

-- lo
CREATE OR REPLACE FUNCTION public.lo_murid_maks(p_kelas text)
 RETURNS integer LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $function$
  select case
    when exists (select 1 from lo_kelas k join lo_guru g on g.id = k.guru where k.id = p_kelas and g.keluarga)
      then (case when lo_premium((select guru from lo_kelas where id = p_kelas)) then 5 else 1 end)
    when lo_premium((select guru from lo_kelas where id = p_kelas)) then 60 else 40 end
$function$;
CREATE OR REPLACE FUNCTION public.lo_kelas_buka(p_kod text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
    'keluarga', coalesce((select keluarga from lo_guru where id = k.guru), false),
    'murid', coalesce((select jsonb_agg(jsonb_build_object('no', no, 'nama', nama)
                        order by lpad(no, 3, '0')) from lo_murid where kelas = k.id), '[]'::jsonb)
  );
end $function$;

-- jm
CREATE OR REPLACE FUNCTION public.jm_murid_maks(p_kelas text)
 RETURNS integer LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $function$
  select case
    when exists (select 1 from jm_kelas k join jm_guru g on g.id = k.guru where k.id = p_kelas and g.keluarga)
      then (case when jm_premium((select guru from jm_kelas where id = p_kelas)) then 5 else 1 end)
    when jm_premium((select guru from jm_kelas where id = p_kelas)) then 60 else 40 end
$function$;
CREATE OR REPLACE FUNCTION public.jm_kelas_buka(p_kod text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare k jm_kelas%rowtype; bersih text;
begin
  bersih := upper(regexp_replace(coalesce(p_kod, ''), '[^A-Za-z0-9]', '', 'g'));
  select * into k from jm_kelas where kod = bersih;
  if k.id is null then
    perform pg_sleep(0.5);
    return null;
  end if;
  return jsonb_build_object(
    'id', k.id, 'nama', k.nama, 'kod', k.kod,
    'guru', coalesce((select nama from jm_guru where id = k.guru), ''),
    'sekolah', coalesce((select sekolah from jm_guru where id = k.guru), ''),
    'premium_rendah', coalesce((select premium_rendah_tamat > now() from jm_guru where id = k.guru), false),
    'premium_atas', coalesce((select premium_atas_tamat > now() from jm_guru where id = k.guru), false),
    'keluarga', coalesce((select keluarga from jm_guru where id = k.guru), false),
    'murid', coalesce((select jsonb_agg(jsonb_build_object('no', no, 'nama', nama)
                        order by lpad(no, 3, '0')) from jm_murid where kelas = k.id), '[]'::jsonb)
  );
end $function$;

-- js
CREATE OR REPLACE FUNCTION public.js_murid_maks(p_kelas text)
 RETURNS integer LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $function$
  select case
    when exists (select 1 from js_kelas k join js_guru g on g.id = k.guru where k.id = p_kelas and g.keluarga)
      then (case when js_premium((select guru from js_kelas where id = p_kelas)) then 5 else 1 end)
    when js_premium((select guru from js_kelas where id = p_kelas)) then 60 else 40 end
$function$;
CREATE OR REPLACE FUNCTION public.js_kelas_buka(p_kod text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare k js_kelas%rowtype; bersih text;
begin
  bersih := upper(regexp_replace(coalesce(p_kod, ''), '[^A-Za-z0-9]', '', 'g'));
  select * into k from js_kelas where kod = bersih;
  if k.id is null then
    perform pg_sleep(0.5);
    return null;
  end if;
  return jsonb_build_object(
    'id', k.id, 'nama', k.nama, 'kod', k.kod,
    'guru', coalesce((select nama from js_guru where id = k.guru), ''),
    'sekolah', coalesce((select sekolah from js_guru where id = k.guru), ''),
    'premium_rendah', coalesce((select premium_rendah_tamat > now() from js_guru where id = k.guru), false),
    'premium_atas', coalesce((select premium_atas_tamat > now() from js_guru where id = k.guru), false),
    'keluarga', coalesce((select keluarga from js_guru where id = k.guru), false),
    'murid', coalesce((select jsonb_agg(jsonb_build_object('no', no, 'nama', nama)
                        order by lpad(no, 3, '0')) from js_murid where kelas = k.id), '[]'::jsonb)
  );
end $function$;
