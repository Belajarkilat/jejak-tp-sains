/* Galeri semakan rajah.

   Guna: node tools/galeri-rajah.js  ->  _galeri.html

   Memaparkan setiap rajah dalam semua bab pada lebar telefon sebenar, dalam
   tema cerah dan tema gelap sebelah-menyebelah. Mata manusia menangkap
   perkara yang tidak ditangkap semakan automatik: panah menghala ke tempat
   salah, kotak yang kelihatan sama, label yang mengelirukan. */
const fs = require("fs");
const path = require("path");
const { lukisLampiran } = require("./lukis");

const sumberHtml = fs.readFileSync("index.html", "utf8");

/* Gaya diambil daripada <head> SAHAJA. Dua sebab:
   - pemboleh ubah warna berada dalam blok <style> kedua, jadi mengambil
     blok pertama sahaja meninggalkan setiap var(--...) tanpa nilai dan
     setiap bentuk dipaparkan hitam;
   - di dalam <body> ada kod JavaScript yang membina helaian gaya cetak
     sebagai rentetan, jadi mencari "<style>" merentas seluruh fail turut
     menarik masuk kod itu dan merosakkan semua CSS selepasnya. */
const kepala = sumberHtml.split(/<\/head>/i)[0];
const gaya = (kepala.match(/<style>[\s\S]*?<\/style>/g) || [])
  .map(b => b.replace(/^<style>/, "").replace(/<\/style>$/, ""))
  .join("\n");

/* Pemboleh ubah tema gelap ditakrif pada :root[data-theme="dark"], jadi ia
   tidak berkesan pada <div>. Kita salin isinya dan pasang semula pada .gelap
   supaya kedua-dua tema boleh dilihat serentak pada satu halaman. */
const gelap = (sumberHtml.match(/:root\[data-theme="dark"\]\{([\s\S]*?)\}/) || [])[1] || "";

const senarai = fs.readdirSync("sumber").filter(f => f.endsWith(".js") && !f.startsWith("_"))
  .map(f => path.basename(f, ".js"))
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

let kad = "";
let bil = 0;
for(const id of senarai){
  const bab = require(path.resolve("sumber", id + ".js"));
  for(const kunci of Object.keys(bab.lampiran || {})){
    const spek = bab.lampiran[kunci];
    if(typeof spek === "string") continue;
    const hentian = bab.aras.filter(a => a.lampiran === kunci).map(a => "H" + a.n).join(", ");
    const svg = lukisLampiran(spek);
    kad += `<div class="kad"><p class="tajuk">${id} ${hentian} &middot; ${kunci} &middot; ${spek.jenis}${spek.mod ? " " + spek.mod : ""}${spek.alat ? " " + spek.alat : ""}</p>` +
      `<div class="dua"><div class="sisi terang">${svg}</div>` +
      `<div class="sisi gelap">${svg}</div></div></div>`;
    bil++;
  }
}

fs.writeFileSync("_galeri.html", `<!doctype html>
<html lang="ms" data-theme="light"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Galeri rajah Jejak TP Sains</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Figtree:wght@400;600;700&display=swap">
<style>${gaya}
.gelap{${gelap}}
body{padding:20px;background:#e9e9ef}
.kad{margin:0 auto 26px;max-width:660px}
.tajuk{font-family:"DM Mono",monospace;font-size:12px;margin:0 0 6px;color:#333}
.dua{display:flex;gap:14px}
/* 286px = lebar .panel-bd pada telefon 360px, jadi rajah dipapar saiz sebenar */
.sisi{width:286px;padding:15px;border-radius:14px;background:var(--surface)}
.sisi .figure{margin-top:0}
</style></head><body>
<p style="max-width:660px;margin:0 auto 18px;font:600 14px Figtree,sans-serif">
${bil} rajah &middot; kiri tema cerah, kanan tema gelap &middot; lebar sama seperti telefon 360px</p>
${kad}</body></html>`, "utf8");
console.log(`${bil} rajah -> _galeri.html`);
