/* Pembina bank soalan.
   Guna: node bina.js t3b1 t3b3        (atau tanpa hujah untuk semua)

   Mengambil sumber/<id>.js yang disunting tangan, menyemaknya, mengagihkan
   kedudukan jawapan supaya tidak semuanya A, dan menulis bank-<id>.js.
   Pembinaan gagal jika mana-mana semakan tidak lulus, supaya bank yang
   rosak tidak pernah sampai ke murid. */
const fs = require("fs");
const path = require("path");

const KKO = ["Mengingat","Memahami","Mengaplikasi","Menganalisis","Menilai","Mereka cipta"];

function semak(bab){
  const m = [];
  const lihat = (ada, mesej) => { if(!ada) m.push(mesej); };

  lihat(bab.id && /^[a-z0-9]+$/.test(bab.id), "id bab tidak sah");
  lihat(Array.isArray(bab.spi) && bab.spi.length === 6, "perlu tepat enam Standard Prestasi");
  lihat(Array.isArray(bab.aras) && bab.aras.length === 6, "perlu tepat enam hentian");
  if(m.length) return m;

  const idDilihat = new Set();
  bab.aras.forEach((a, i) => {
    const di = `H${i+1}`;
    lihat(a.n === i+1, `${di}: nombor hentian tidak sepadan dengan kedudukannya`);
    lihat(a.tempat && a.sk, `${di}: tempat atau standard kandungan tiada`);
    ["kadNama","kadEm","kadFakta","bosKadNama","bosKadEm","bosKadFakta"].forEach(k =>
      lihat(a[k], `${di}: medan kad ${k} tiada`));
    if(a.lampiran) lihat(bab.lampiran && bab.lampiran[a.lampiran],
      `${di}: merujuk lampiran "${a.lampiran}" yang tidak wujud`);
    lihat(Array.isArray(a.soalan) && a.soalan.length === 8,
      `${di}: ${a.soalan ? a.soalan.length : 0} soalan, sepatutnya 8`);
    lihat(a.bos, `${di}: tiada soalan bos`);

    (a.soalan || []).concat(a.bos ? [a.bos] : []).forEach((q, k) => {
      const id = `${di} item ${k+1}`;
      const kunci = `a${a.n}${k < 8 ? "q"+(k+1) : "bos"}`;
      lihat(!idDilihat.has(kunci), `${id}: id soalan berulang`);
      idDilihat.add(kunci);
      lihat(q.t && q.t.length > 15, `${id}: teks soalan terlalu pendek`);

      if(q.j === "pilih"){
        lihat(Array.isArray(q.p) && q.p.length >= 3, `${id}: kurang daripada tiga pilihan`);
        lihat(Number.isInteger(q.b) && q.b >= 0 && q.b < (q.p||[]).length, `${id}: indeks jawapan luar julat`);
        lihat(new Set(q.p||[]).size === (q.p||[]).length, `${id}: ada pilihan berulang`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "banyak"){
        lihat(Array.isArray(q.b) && q.b.length >= 1, `${id}: tiada jawapan betul`);
        lihat(new Set(q.b||[]).size === (q.b||[]).length, `${id}: indeks jawapan berulang`);
        (q.b||[]).forEach(x => lihat(x >= 0 && x < q.p.length, `${id}: indeks ${x} luar julat`));
        lihat((q.b||[]).length < (q.p||[]).length, `${id}: semua pilihan ditanda betul`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "susun"){
        const urut = (q.b||[]).slice().sort((x,y)=>x-y).join(",");
        lihat(urut === (q.p||[]).map((_,n)=>n).join(","), `${id}: susunan tidak meliputi setiap item tepat sekali`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "nombor"){
        lihat(typeof q.b === "number" && isFinite(q.b), `${id}: jawapan berangka tidak sah`);
        lihat(typeof q.tol === "number" && q.tol > 0, `${id}: toleransi tiada`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "buka"){
        lihat(k === 8, `${id}: tugasan bertulis hanya dibenarkan sebagai soalan bos`);
        lihat(a.n === 6, `${id}: tugasan bertulis hanya dibenarkan pada hentian TP6`);
        lihat(q.arahan, `${id}: tiada arahan tugasan`);
      } else {
        m.push(`${id}: jenis soalan tidak dikenali (${q.j})`);
      }
    });
  });
  return m;
}

/* Kedudukan jawapan dipusing merentas keseluruhan bab supaya fail sumber
   sendiri sudah seimbang. Pengocok dalam aplikasi mengagihkannya semula
   pada setiap muatan halaman. */
function imbang(bab){
  const taburan = {};
  let kaunter = 0;
  bab.aras.forEach(a => {
    a.soalan.concat([a.bos]).forEach(q => {
      if(q.j !== "pilih") return;
      const n = q.p.length;
      const sasaran = kaunter++ % n;
      const betul = q.p[q.b];
      const lain = q.p.filter((_, i) => i !== q.b);
      const baru = [];
      let c = 0;
      for(let i = 0; i < n; i++) baru.push(i === sasaran ? betul : lain[c++]);
      q.p = baru;
      q.b = sasaran;
      taburan[sasaran] = (taburan[sasaran] || 0) + 1;
    });
  });
  return taburan;
}

function tulis(bab){
  const keluar = {
    id: bab.id, tingkatan: bab.tingkatan, kod: bab.kod,
    tajuk: bab.tajuk, subtajuk: bab.subtajuk,
    spi: bab.spi, kko: KKO,
    lampiran: bab.lampiran || {},
    aras: bab.aras.map(a => ({
      n: a.n, tempat: a.tempat, sk: a.sk, lampiran: a.lampiran || null,
      kadNama: a.kadNama, kadEm: a.kadEm, kadFakta: a.kadFakta,
      bosKadNama: a.bosKadNama, bosKadEm: a.bosKadEm, bosKadFakta: a.bosKadFakta,
      soalan: a.soalan, bos: a.bos,
    })),
  };
  const kepala =
`/* Bank soalan — ${bab.subtajuk}.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/${bab.id}.js
   kemudian jalankan: node bina.js ${bab.id}

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan ${bab.tingkatan}, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK[${JSON.stringify(bab.id)}] =
`;
  const fail = `bank-${bab.id}.js`;
  fs.writeFileSync(fail, kepala + JSON.stringify(keluar, null, 1) + ";\n", "utf8");
  return fail;
}

const minta = process.argv.slice(2);
const senarai = minta.length ? minta
  : fs.readdirSync("sumber").filter(f => f.endsWith(".js")).map(f => path.basename(f, ".js"));

let gagal = 0;
senarai.forEach(id => {
  const bab = require(path.resolve("sumber", id + ".js"));
  const masalah = semak(bab);
  if(masalah.length){
    gagal++;
    console.log(`\n✗ ${id} — ${masalah.length} masalah`);
    masalah.forEach(x => console.log("   " + x));
    return;
  }
  const taburan = imbang(bab);
  const fail = tulis(bab);
  const item = bab.aras.reduce((n, a) => n + a.soalan.length + 1, 0);
  const kedudukan = Object.keys(taburan).sort().map(k => "ABCDEF"[k] + ":" + taburan[k]).join(" ");
  console.log(`✓ ${id}  ${item} item  ·  ${fail}  ${fs.statSync(fail).size} bait  ·  kedudukan ${kedudukan}`);
});

if(gagal) process.exit(1);
