/* E-mel sambutan untuk guru baharu (sekali sahaja).

   Dicetus oleh pencetus pangkalan data lo_guru_sambut (migrasi-sambut.sql)
   melalui pg_net sebaik sahaja baris lo_guru dicipta. Tiada token guru:
   pencetus menghantar rahsia kongsi SAMBUT_RAHSIA dalam pengepala, dan
   lajur lo_guru.sambut_hantar memastikan e-mel tidak pernah dihantar dua kali.

   Rahsia (supabase secrets set ...):
     SAMBUT_RAHSIA   sama dengan nilai dalam fungsi SQL lo_guru_sambut
     SMTP_USER       akaun Gmail penghantar
     SMTP_PASS       App Password Gmail
     APP_URL         https://jejaktpsains.naikgred.com/
     WA_NOMBOR       60193686146
   Deploy:  supabase functions deploy sambut --project-ref <ref> --no-verify-jwt */
import { createClient } from "npm:@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer@6.9.16";

const env = (k: string, lalai = "") => Deno.env.get(k) ?? lalai;
const sb = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), {
  auth: { persistSession: false },
});
const APP_URL = env("APP_URL", "https://jejaktpsains.naikgred.com/");
const WA = env("WA_NOMBOR", "60193686146");
const wa = "https://wa.me/" + WA + "?text=" + encodeURIComponent(
  "Salam, saya guru yang baru mendaftar di Jejak TP Sains. Saya ada soalan:");

const subjek = "Akaun guru Jejak TP Sains anda sudah sedia";
const teks = `Salam sejahtera,

Terima kasih kerana mendaftar di Jejak TP Sains. Akaun guru anda sudah sedia. Untuk mula, ikut tiga langkah ini:

1. Cipta kelas. Buka ${APP_URL}, log masuk, kemudian cipta kelas anda. Anda akan mendapat kod kelas.
2. Masukkan senarai murid. Anda boleh menaip nama atau mengimport daripada Excel. Setiap murid mendapat nombor dan PIN.
3. Beri kod kelas dan PIN kepada murid. Murid masuk melalui telefon atau komputer di sekolah, tanpa perlu mendaftar e-mel.

Bab 1 dan Bab 2 percuma untuk dicuba. Anda boleh melihat tahap penguasaan (TP) setiap murid bagi setiap bab dalam papan guru.

Ada soalan? Hantar mesej WhatsApp kepada kami: ${wa}
Kami akan membalas secepat mungkin pada waktu bekerja.

E-mel ini dihantar sekali sahaja kerana anda baru mendaftar akaun guru.
Jejak TP Sains oleh NaikGred`;
const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.55;color:#1f2937;max-width:560px">
<p>Salam sejahtera,</p>
<p>Terima kasih kerana mendaftar di <b>Jejak TP Sains</b>. Akaun guru anda sudah sedia. Untuk mula, ikut tiga langkah ini:</p>
<ol style="padding-left:20px">
<li><b>Cipta kelas.</b> Buka <a href="${APP_URL}">${APP_URL.replace(/^https?:\/\//, "")}</a>, log masuk, kemudian cipta kelas anda. Anda akan mendapat kod kelas.</li>
<li><b>Masukkan senarai murid.</b> Anda boleh menaip nama atau mengimport daripada Excel. Setiap murid mendapat nombor dan PIN.</li>
<li><b>Beri kod kelas dan PIN kepada murid.</b> Murid masuk melalui telefon atau komputer di sekolah, tanpa perlu mendaftar e-mel.</li>
</ol>
<p>Bab 1 dan Bab 2 percuma untuk dicuba. Anda boleh melihat tahap penguasaan (TP) setiap murid bagi setiap bab dalam papan guru.</p>
<p><a href="${wa}" style="display:inline-block;background:#16a34a;color:#fff;text-decoration:none;padding:11px 18px;border-radius:8px;font-weight:bold">Ada soalan? WhatsApp kami</a></p>
<p style="color:#4b5563;font-size:14px">Kami akan membalas secepat mungkin pada waktu bekerja.</p>
<hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
<p style="color:#6b7280;font-size:13px">E-mel ini dihantar sekali sahaja kerana anda baru mendaftar akaun guru.<br>Jejak TP Sains oleh NaikGred</p></div>`;

Deno.serve(async (req) => {
  if (req.headers.get("x-sambut-rahsia") !== env("SAMBUT_RAHSIA") || !env("SAMBUT_RAHSIA")) {
    return new Response("tidak dibenarkan", { status: 401 });
  }
  const { guru } = await req.json().catch(() => ({}));
  if (!guru) return new Response("tiada guru", { status: 400 });

  // tuntut baris dahulu: hanya satu panggilan boleh menang, jadi tiada e-mel berganda
  const { data: tuntut } = await sb.from("lo_guru").update({ sambut_hantar: new Date().toISOString() })
    .eq("id", guru).is("sambut_hantar", null).select("id");
  if (!tuntut?.length) return new Response("sudah dihantar", { status: 200 });

  const { data: u } = await sb.auth.admin.getUserById(guru);
  const emel = u?.user?.email;
  if (!emel) {
    await sb.from("lo_guru").update({ sambut_hantar: null }).eq("id", guru);
    console.error("sambut: tiada e-mel untuk", guru);
    return new Response("tiada e-mel", { status: 500 });
  }

  try {
    const t = nodemailer.createTransport({
      host: "smtp.gmail.com", port: 465, secure: true,
      auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
    });
    await t.sendMail({
      from: `"Jejak TP Sains" <${env("SMTP_USER")}>`,
      to: emel, subject: subjek, text: teks, html,
    });
    return new Response("dihantar", { status: 200 });
  } catch (e) {
    // gagal hantar: buka semula tuntutan supaya boleh dicuba semula secara manual
    await sb.from("lo_guru").update({ sambut_hantar: null }).eq("id", guru);
    console.error("sambut gagal", String(e));
    return new Response("gagal hantar", { status: 500 });
  }
});
