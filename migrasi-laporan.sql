-- Laporan bulanan NaikGred (26 Nov 2026).
-- Dijalankan di DUA projek: Sains (prefix lo) dan Matematik (jm, js, je, jk, jf, jb).
-- Hanya service_role (fungsi laporan) boleh memanggil; tiada data peribadi dipulangkan, hanya kiraan.
create or replace function ng_laporan(p_dari timestamptz, p_hingga timestamptz)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  p text; hasil jsonb := '{}'::jsonb; satu jsonb;
begin
  for p in select substr(table_name, 1, 2) from information_schema.tables
           where table_schema = 'public' and table_name ~ '^(lo|j[a-z])_bayaran$' order by 1 loop
    execute format($q$
      select jsonb_build_object(
        'lawatan', (select count(distinct peranti) from %1$I_ping where jenis = 'lawat' and masa >= $1 and masa < $2),
        'lawatan_sumber', (select coalesce(jsonb_object_agg(s, n), '{}') from (
            select coalesce(nullif(nota, ''), 'tiada') s, count(distinct peranti) n from %1$I_ping
            where jenis = 'lawat' and masa >= $1 and masa < $2 group by 1 order by 2 desc limit 8) x),
        'daftar_guru', (select count(*) from %1$I_guru where dicipta >= $1 and dicipta < $2 and not coalesce(keluarga, false)),
        'daftar_keluarga', (select count(*) from %1$I_guru where dicipta >= $1 and dicipta < $2 and coalesce(keluarga, false)),
        'daftar_sumber', (select coalesce(jsonb_object_agg(s, n), '{}') from (
            select coalesce(nullif(sumber, ''), 'tiada') s, count(*) n from %1$I_guru
            where dicipta >= $1 and dicipta < $2 group by 1 order by 2 desc limit 8) x),
        'bayar', (select count(*) from %1$I_bayaran where status = 'berjaya' and dibayar >= $1 and dibayar < $2),
        'bayar_sen', (select coalesce(sum(jumlah_sen), 0) from %1$I_bayaran where status = 'berjaya' and dibayar >= $1 and dibayar < $2),
        'bayar_sumber', (select coalesce(jsonb_object_agg(s, n), '{}') from (
            select coalesce(nullif(g.sumber, ''), 'tiada') s, count(*) n from %1$I_bayaran b left join %1$I_guru g on g.id = b.guru
            where b.status = 'berjaya' and b.dibayar >= $1 and b.dibayar < $2 group by 1 order by 2 desc limit 8) x))
    $q$, p) into satu using p_dari, p_hingga;
    hasil := hasil || jsonb_build_object(p, satu);
  end loop;
  return hasil;
end $$;
revoke all on function ng_laporan(timestamptz, timestamptz) from public, anon, authenticated;
grant execute on function ng_laporan(timestamptz, timestamptz) to service_role;
