/* Laporan bulanan NaikGred (26 Nov 2026) — e-mel kepada Hasfi pada 1hb setiap bulan, 9 pagi.

   Dicetus oleh pg_cron (projek Sains) melalui pg_net dengan pengepala x-laporan-rahsia.
   Data: fungsi SQL ng_laporan (migrasi-laporan.sql) di projek Sains (lo) dan projek
   Matematik (jm, js, je, jk, jf, jb). Hanya kiraan; tiada nama atau e-mel guru.
   Bulan lepas dibanding dengan bulan sebelumnya. ?bulan=2026-11 untuk bulan tertentu.

   Rahsia: LAPORAN_RAHSIA, LAPORAN_KEPADA, MATH_URL, MATH_SERVICE_KEY, SMTP_USER, SMTP_PASS
   Deploy:  supabase functions deploy laporan --project-ref <ref> --no-verify-jwt */
import { createClient } from "npm:@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer@6.9.16";

const env = (k: string, lalai = "") => Deno.env.get(k) ?? lalai;
const sains = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), { auth: { persistSession: false } });
const math = createClient(env("MATH_URL"), env("MATH_SERVICE_KEY"), { auth: { persistSession: false } });
const NAMA: Record<string, string> = { lo: "Sains", jm: "Matematik", js: "Sejarah", je: "English", jk: "Kimia", jf: "Fizik", jb: "Biologi" };
const BULAN = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];

type Data = Record<string, { lawatan: number; daftar_guru: number; daftar_keluarga: number; bayar: number; bayar_sen: number;
  lawatan_sumber: Record<string, number>; daftar_sumber: Record<string, number>; bayar_sumber: Record<string, number> }>;

/* sempadan bulan ikut waktu Malaysia (UTC+8) */
const mula = (t: number, b: number) => new Date(Date.UTC(t, b, 1) - 8 * 3600e3).toISOString();

async function ambil(dari: string, hingga: string): Promise<Data> {
  const [a, b] = await Promise.all([
    sains.rpc("ng_laporan", { p_dari: dari, p_hingga: hingga }),
    math.rpc("ng_laporan", { p_dari: dari, p_hingga: hingga }),
  ]);
  if (a.error || b.error) throw new Error("ng_laporan: " + (a.error?.message ?? b.error?.message));
  return { ...(a.data as Data), ...(b.data as Data) };
}

const RM = (sen: number) => "RM" + (sen / 100).toLocaleString("en-MY", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const beza = (k: number, l: number) => l === 0 ? (k ? "baharu" : "–") : ((k - l) / l * 100 >= 0 ? "+" : "") + Math.round((k - l) / l * 100) + "%";
function gabung(d: Data, kunci: "lawatan_sumber" | "daftar_sumber" | "bayar_sumber") {
  const m: Record<string, number> = {};
  for (const v of Object.values(d)) for (const [s, n] of Object.entries(v[kunci] ?? {})) m[s] = (m[s] ?? 0) + n;
  return Object.entries(m).sort((x, y) => y[1] - x[1]).slice(0, 8);
}

Deno.serve(async (req) => {
  if (!env("LAPORAN_RAHSIA") || req.headers.get("x-laporan-rahsia") !== env("LAPORAN_RAHSIA")) {
    return new Response("tidak dibenarkan", { status: 401 });
  }
  const q = new URL(req.url).searchParams.get("bulan");
  const kini = new Date(Date.now() + 8 * 3600e3);
  let t = kini.getUTCFullYear(), b = kini.getUTCMonth() - 1;
  if (q && /^\d{4}-\d{2}$/.test(q)) { t = +q.slice(0, 4); b = +q.slice(5) - 1; }
  if (b < 0) { b += 12; t -= 1; }
  const tl = b === 0 ? t - 1 : t, bl = b === 0 ? 11 : b - 1;

  try {
    const [ini, lalu] = await Promise.all([ambil(mula(t, b), mula(t, b + 1)), ambil(mula(tl, bl), mula(tl, bl + 1))]);
    const sum = (d: Data, k: "lawatan" | "daftar_guru" | "daftar_keluarga" | "bayar" | "bayar_sen") =>
      Object.values(d).reduce((a, v) => a + (v[k] ?? 0), 0);
    const tajuk = `Laporan NaikGred ${BULAN[b]} ${t}: ${RM(sum(ini, "bayar_sen"))}, ${sum(ini, "bayar")} bayaran, ${sum(ini, "daftar_guru")} guru baharu`;

    const td = 'style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:right"';
    const tdk = 'style="padding:6px 8px;border-bottom:1px solid #e5e7eb"';
    const baris = Object.keys(NAMA).filter((p) => ini[p]).map((p) => {
      const v = ini[p], l = lalu[p] ?? v;
      return `<tr><td ${tdk}>${NAMA[p]}</td><td ${td}>${v.lawatan}</td><td ${td}>${v.daftar_guru}</td><td ${td}>${v.daftar_keluarga}</td><td ${td}>${v.bayar}</td><td ${td}><b>${RM(v.bayar_sen)}</b><br><span style="color:#6b7280;font-size:12px">${beza(v.bayar_sen, l.bayar_sen)}</span></td></tr>`;
    }).join("");
    const jum = (k: "lawatan" | "daftar_guru" | "daftar_keluarga" | "bayar") => `<td ${td}><b>${sum(ini, k)}</b><br><span style="color:#6b7280;font-size:12px">${beza(sum(ini, k), sum(lalu, k))}</span></td>`;
    const senarai = (judul: string, x: [string, number][]) => x.length
      ? `<p style="margin:16px 0 4px"><b>${judul}</b></p><p style="margin:0;color:#374151">${x.map(([s, n]) => `${s === "tiada" ? "tidak diketahui" : s} ${n}`).join(" · ")}</p>` : "";

    const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1f2937;max-width:640px">
<h2 style="margin:0 0 4px">NaikGred, ${BULAN[b]} ${t}</h2>
<p style="margin:0 0 14px;color:#6b7280">Dibanding ${BULAN[bl]} ${tl}. Waktu Malaysia.</p>
<table style="border-collapse:collapse;width:100%"><tr style="background:#f3f4f6">
<th ${tdk}>Subjek</th><th ${td}>Pelawat landing</th><th ${td}>Guru baharu</th><th ${td}>Keluarga baharu</th><th ${td}>Bayaran</th><th ${td}>Hasil</th></tr>
${baris}
<tr style="background:#f9fafb"><td ${tdk}><b>Jumlah</b></td>${jum("lawatan")}${jum("daftar_guru")}${jum("daftar_keluarga")}${jum("bayar")}<td ${td}><b>${RM(sum(ini, "bayar_sen"))}</b><br><span style="color:#6b7280;font-size:12px">${beza(sum(ini, "bayar_sen"), sum(lalu, "bayar_sen"))}</span></td></tr></table>
${senarai("Sumber pembayar", gabung(ini, "bayar_sumber"))}
${senarai("Sumber guru baharu", gabung(ini, "daftar_sumber"))}
${senarai("Sumber pelawat landing", gabung(ini, "lawatan_sumber"))}
<p style="margin:18px 0 0;color:#6b7280;font-size:12px">Sumber: kod ?dari, utm_source, meta (iklan Facebook/Instagram), google (carian), google-iklan, seo (halaman bab). "Tidak diketahui" = guru mendaftar sebelum sumber automatik dipasang (26 Nov 2026) atau datang terus. Butiran pelawat: Google Analytics (G-Y0LFRMKCHB) dan Microsoft Clarity.</p></div>`;

    const teks = tajuk + "\n\n" + Object.keys(NAMA).filter((p) => ini[p]).map((p) =>
      `${NAMA[p]}: ${ini[p].lawatan} pelawat, ${ini[p].daftar_guru} guru, ${ini[p].daftar_keluarga} keluarga, ${ini[p].bayar} bayaran ${RM(ini[p].bayar_sen)}`).join("\n");

    const t2 = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true,
      auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") } });
    await t2.sendMail({ from: `"Laporan NaikGred" <${env("SMTP_USER")}>`, to: env("LAPORAN_KEPADA", env("SMTP_USER")),
      subject: tajuk, text: teks, html });
    return new Response("dihantar: " + tajuk, { status: 200 });
  } catch (e) {
    console.error("laporan gagal", String((e as Error).message ?? e));
    return new Response("gagal: " + String((e as Error).message ?? e).slice(0, 300), { status: 500 });
  }
});
