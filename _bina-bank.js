/* Bina fail bank soalan daripada kandungan yang masih tertanam dalam aplikasi.
   Semua pembetulan kandungan dan pengimbangan kedudukan jawapan dibuat di sini,
   sekali sahaja, supaya tiada ralat salin tangan. */
const fs = require("fs");

const mentah = fs.readFileSync("_kandungan-mentah.js", "utf8");
const skop = {};
new Function("skop", mentah + "\nskop.SPI=SPI;skop.KKO=KKO;skop.T_GAS=T_GAS;skop.T_KLINIK=T_KLINIK;skop.G_TEKANAN=G_TEKANAN;skop.ARAS=ARAS;")(skop);

const { SPI, KKO, T_GAS, T_KLINIK, G_TEKANAN, ARAS } = skop;

/* ---------- pembetulan kandungan ---------- */
let pembetulan = 0;

/* Hentian 5 soalan 2 merujuk "keputusan itu", tetapi setiap pusingan hanya
   mengambil empat soalan secara rawak, jadi soalan rujukan itu selalunya tiada.
   Jadikan ia berdiri sendiri, dan soalan pertama tidak perlu lagi dikunci. */
const h5 = ARAS[4];
const s0 = h5.soalan[0], s1 = h5.soalan[1];
if (s0.tetap) { delete s0.tetap; pembetulan++; }
if (/keputusan itu/.test(s1.t)) {
  s1.t = "Pilih SEMUA bukti daripada jadual yang menunjukkan Encik Fauzi paling berisiko.";
  pembetulan++;
}

/* ---------- imbangan kedudukan jawapan dalam sumber ---------- */
/* Kedudukan jawapan betul dipusing secara berperingkat bagi setiap hentian,
   supaya fail sumber sendiri sudah seimbang walaupun sebelum dikocok. */
let kaunter = 0;
const taburan = {};
ARAS.forEach((a) => {
  const semua = a.soalan.concat([a.bos]).filter(Boolean);
  semua.forEach((q) => {
    if (q.j !== "pilih") return;
    const n = q.p.length;
    const sasaran = kaunter++ % n;
    const betul = q.p[q.b];
    const lain = q.p.filter((_, i) => i !== q.b);
    const baru = [];
    let k = 0;
    for (let i = 0; i < n; i++) baru.push(i === sasaran ? betul : lain[k++]);
    q.p = baru;
    q.b = sasaran;
    taburan[sasaran] = (taburan[sasaran] || 0) + 1;
  });
});

/* ---------- semakan waras ---------- */
const masalah = [];
let bilSoalan = 0;
ARAS.forEach((a) => {
  const semua = a.soalan.concat([a.bos]).filter(Boolean);
  if (a.soalan.length !== 8) masalah.push(`Hentian ${a.n}: ${a.soalan.length} soalan, sepatutnya 8`);
  semua.forEach((q, i) => {
    bilSoalan++;
    const di = `H${a.n} item ${i + 1}`;
    if (!q.t || q.t.length < 10) masalah.push(`${di}: teks soalan terlalu pendek`);
    if (q.j === "pilih") {
      if (!Array.isArray(q.p) || q.p.length < 3) masalah.push(`${di}: kurang pilihan`);
      if (typeof q.b !== "number" || q.b < 0 || q.b >= q.p.length) masalah.push(`${di}: indeks jawapan luar julat`);
      if (new Set(q.p).size !== q.p.length) masalah.push(`${di}: ada pilihan berulang`);
      if (!q.u) masalah.push(`${di}: tiada penjelasan`);
    } else if (q.j === "banyak") {
      if (!Array.isArray(q.b) || !q.b.length) masalah.push(`${di}: tiada jawapan betul`);
      q.b.forEach((x) => { if (x < 0 || x >= q.p.length) masalah.push(`${di}: indeks ${x} luar julat`); });
      if (new Set(q.b).size !== q.b.length) masalah.push(`${di}: indeks jawapan berulang`);
      if (q.b.length >= q.p.length) masalah.push(`${di}: semua pilihan ditanda betul`);
    } else if (q.j === "susun") {
      const urut = q.b.slice().sort((x, y) => x - y).join(",");
      const jangka = q.p.map((_, k) => k).join(",");
      if (urut !== jangka) masalah.push(`${di}: susunan tidak meliputi semua item`);
    } else if (q.j === "nombor") {
      if (typeof q.b !== "number" || !isFinite(q.b)) masalah.push(`${di}: jawapan berangka tidak sah`);
    } else if (q.j !== "buka") {
      masalah.push(`${di}: jenis soalan tidak dikenali (${q.j})`);
    }
  });
});

/* ---------- tulis fail bank ---------- */
const bank = {
  id: "t3b2",
  tingkatan: 3,
  kod: "2.0 Respirasi",
  tajuk: "Laluan Oksigen",
  subtajuk: "Sains Ting. 3 · Bab 2 Respirasi",
  jenama: { ikon: "🫁", ringkas: "Laluan Oksigen" },
  spi: SPI,
  kko: KKO,
  lampiran: { gas: T_GAS, klinik: T_KLINIK, tekanan: G_TEKANAN },
  aras: ARAS.map((a) => ({
    n: a.n, tempat: a.tempat, sk: a.sk,
    lampiran: a.lampiran === T_GAS ? "gas" : a.lampiran === T_KLINIK ? "klinik" : a.lampiran === G_TEKANAN ? "tekanan" : null,
    kadNama: a.kadNama, kadEm: a.kadEm, kadFakta: a.kadFakta,
    bosKadNama: a.bosKadNama, bosKadEm: a.bosKadEm, bosKadFakta: a.bosKadFakta,
    soalan: a.soalan, bos: a.bos,
  })),
};

const kepala =
`/* Bank soalan — Sains KSSM Tingkatan 3, Bidang 2.0 Respirasi.
   Fail ini kandungan sahaja. Aplikasi tidak tahu apa-apa tentang respirasi;
   ia hanya memainkan apa yang didaftarkan di sini. Untuk menambah bab baharu,
   salin fail ini, tukar id dan isinya, dan muatkan bersama halaman.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains Tingkatan 3
   terbitan Bahagian Pembangunan Kurikulum, April 2017.

   Bentuk soalan:
     j:"pilih"  satu jawapan betul, b = indeks
     j:"banyak" beberapa jawapan betul, b = senarai indeks
     j:"susun"  urutan betul, b = senarai indeks mengikut turutan
     j:"nombor" jawapan berangka, b = nilai, tol = toleransi
     j:"buka"   tugasan bertulis, dinilai guru, tiada jawapan mesin
*/
window.BANK = window.BANK || {};
window.BANK["t3b2"] =
`;

fs.writeFileSync("bank-t3b2.js", kepala + JSON.stringify(bank, null, 1) + ";\n", "utf8");

console.log("Pembetulan kandungan:", pembetulan);
console.log("Jumlah item:", bilSoalan);
console.log("Taburan kedudukan jawapan dalam sumber:", JSON.stringify(taburan));
console.log(masalah.length ? "MASALAH:\n" + masalah.join("\n") : "Semakan waras: tiada masalah");
console.log("Saiz fail bank:", fs.statSync("bank-t3b2.js").size, "bait");
