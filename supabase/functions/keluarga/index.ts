/* Anak NaikGred: daftar sekali, anak ditambah sekali (6 Nov 2026).

   POST {app:"lo"|"jm"|"js"|"je"}  dengan Authorization: Bearer <token sesi ibu bapa di app itu>
     1. Token disahkan dengan projek app itu sendiri (Sains = projek ini, lain = projek noaeag).
     2. Nama + senarai anak semasa dibaca terus dari DB app itu (kel_baca), bukan daripada badan
        permintaan, jadi ibu bapa hanya boleh menyebarkan data keluarga sendiri.
     3. kel_terap dijalankan pada KEDUA-DUA projek: rekod induk dikemas kini dan setiap app keluarga
        lain dengan e-mel sama terus mendapat anak yang sama (nama + PIN + nombor sama).

   Rahsia: SEJARAH_URL, SEJARAH_KEY (projek noaeag, sudah ditetapkan untuk fungsi bayar).
   Deploy:  supabase functions deploy keluarga --project-ref cqokowzzgseuvhcgpktj --no-verify-jwt
   (--no-verify-jwt kerana token dari projek noaeag tidak sah di projek ini; token disemak sendiri.) */

const env = (k: string) => Deno.env.get(k) ?? "";
const SAINS = { url: env("SUPABASE_URL"), kunci: env("SUPABASE_SERVICE_ROLE_KEY") };
const NOAEAG = { url: env("SEJARAH_URL"), kunci: env("SEJARAH_KEY") };

const ASAL = [
  "https://jejaktpsains.naikgred.com", "https://jejaktpmath.naikgred.com",
  "https://jejaktpsejarah.naikgred.com", "https://jejaktpenglish.naikgred.com",
];
function cors(req: Request) {
  const o = req.headers.get("origin") ?? "";
  return {
    "Access-Control-Allow-Origin": ASAL.includes(o) || o.startsWith("http://localhost") ? o : ASAL[0],
    "Access-Control-Allow-Headers": "authorization, content-type, apikey, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

async function rpc(p: { url: string; kunci: string }, fn: string, badan: unknown) {
  const r = await fetch(p.url + "/rest/v1/rpc/" + fn, {
    method: "POST",
    headers: { apikey: p.kunci, Authorization: "Bearer " + p.kunci, "Content-Type": "application/json" },
    body: JSON.stringify(badan),
    signal: AbortSignal.timeout(15000),
  });
  const t = await r.text();
  if (!r.ok) throw new Error(fn + " " + r.status + " " + t.slice(0, 200));
  return t ? JSON.parse(t) : null;
}

Deno.serve(async (req) => {
  const h = { ...cors(req), "Content-Type": "application/json" };
  const jawab = (s: number, b: unknown) => new Response(JSON.stringify(b), { status: s, headers: h });
  if (req.method === "OPTIONS") return new Response(null, { headers: h });
  if (req.method !== "POST") return jawab(405, { ralat: "kaedah" });
  try {
    const { app } = await req.json().catch(() => ({}));
    if (!["lo", "jm", "js", "je"].includes(app)) return jawab(400, { ralat: "app" });
    const p = app === "lo" ? SAINS : NOAEAG;
    const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
    if (!token) return jawab(401, { ralat: "token" });
    const u = await fetch(p.url + "/auth/v1/user", {
      headers: { apikey: p.kunci, Authorization: "Bearer " + token }, signal: AbortSignal.timeout(10000),
    });
    if (!u.ok) return jawab(401, { ralat: "sesi" });
    const emel = String((await u.json()).email ?? "").toLowerCase();
    if (!emel) return jawab(401, { ralat: "emel" });

    const data = await rpc(p, "kel_baca", { p_emel: emel, p_app: app });
    if (!data) return jawab(403, { ralat: "bukan akaun keluarga" });

    const hasil: Record<string, unknown> = {};
    for (const [nama, proj] of [["sains", SAINS], ["noaeag", NOAEAG]] as const) {
      try { hasil[nama] = await rpc(proj, "kel_terap", { p_emel: emel, p_nama: data.nama, p_anak: data.anak }); }
      catch (e) { console.error("kel_terap", nama, String(e)); hasil[nama] = { ralat: String(e).slice(0, 120) }; }
    }
    return jawab(200, { ok: true, anak: data.anak.length, hasil });
  } catch (e) {
    console.error(e);
    return jawab(500, { ralat: "dalaman" });
  }
});
