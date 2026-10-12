-- ============================================================
-- Migrasi 12 Okt 2026: e-mel sambutan sekali sahaja untuk guru baharu.
-- Pencetus pada lo_guru memanggil Edge Function "sambut" melalui pg_net.
-- Lajur sambut_hantar menghalang e-mel berganda. Guru sedia ada TIDAK
-- menerima apa-apa (pencetus hanya untuk INSERT).
-- Gantikan __RAHSIA__ dengan nilai SAMBUT_RAHSIA sebelum dijalankan.
-- ============================================================
create extension if not exists pg_net with schema extensions;

alter table lo_guru add column if not exists sambut_hantar timestamptz;

create or replace function lo_guru_sambut() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
begin
  perform net.http_post(
    url := 'https://cqokowzzgseuvhcgpktj.supabase.co/functions/v1/sambut',
    headers := jsonb_build_object('Content-Type','application/json','x-sambut-rahsia','__RAHSIA__'),
    body := jsonb_build_object('guru', new.id),
    timeout_milliseconds := 10000);
  return new;
exception when others then
  return new; -- jangan sekali-kali gagalkan pendaftaran guru kerana e-mel
end $$;
revoke all on function lo_guru_sambut() from public, anon, authenticated;

drop trigger if exists lo_guru_sambut_t on lo_guru;
create trigger lo_guru_sambut_t after insert on lo_guru
  for each row execute function lo_guru_sambut();
