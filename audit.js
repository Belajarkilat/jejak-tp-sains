/* Audit kandungan automatik, pelengkap kepada semakan dalam bina.js.
   Guna: node audit.js t1b1 t2b3      (atau tanpa hujah untuk semua sumber)

   bina.js menyemak struktur dan petunjuk panjang jawapan. Audit ini pula
   mencari masalah bahasa dan kandungan yang pernah ditemui guru:
   - istilah yang tiada dalam buku teks KSSM (semakan Cikgu, 19 Sep 2026)
   - perkataan Indonesia atau sapaan "anda" dalam teks murid
   - soalan berulang dalam bab yang sama atau merentas bab
   - soalan yang merujuk jadual/rajah tetapi hentiannya tiada lampiran
   - jawapan berangka yang tidak muncul dalam penjelasannya
   Keluar dengan kod 1 jika ada masalah. */
const fs = require("fs");
const path = require("path");

const ISTILAH = [
  [/presbiopia/i, "guna 'rabun dekat' (buku teks tiada presbiopia)"],
  [/platelet/i, "ejaan buku teks ialah 'platlet'"],
  [/proses endotermik|proses eksotermik/i, "buku teks guna 'tindak balas endotermik/eksotermik'"],
  [/lencana filem/i, "buku teks guna 'lencana dos'"],
  [/½kx|kx²/i, "buku teks guna ½Fx"],
];
const BAHASA = [
  [/\bkarena\b/i, "Indonesia: 'kerana' / 'sebab'"],
  [/\bbisa\b/i, "Indonesia: 'boleh'"],
  [/\bmengerti\b/i, "Indonesia: 'faham'"],
  [/\bsaja\b/i, "guna 'sahaja' / 'je'"],
  [/\banda\b/i, "sapaan murid ialah 'awak'"],
  [/\bkamu\b/i, "sapaan murid ialah 'awak'"],
  [/\bpraktis\b/i, "guna 'praktikal' atau 'latihan'"],
  [/\bsistim\b/i, "ejaan 'sistem'"],
  [/\bkwaliti\b/i, "ejaan 'kualiti'"],
  [/\bakhirnya\b.*\bakhirnya\b/i, "ulang kata"],
  [/  /, "jarak berganda"],
  [/\bmengenalpasti\b/i, "ejaan 'mengenal pasti'"],
  [/\bdiantara\b/i, "ejaan 'di antara'"],
];
const RUJUK = /\b(jadual(?! berkala)|rajah|graf|data di atas|berdasarkan data|lihat data)\b/i;

function teksSoalan(q){
  return [q.t, ...(q.p || []), q.u || "", q.arahan || ""].join(" │ ");
}

const hujah = process.argv.slice(2);
const senarai = hujah.length ? hujah
  : fs.readdirSync("sumber").filter(f => f.endsWith(".js") && !f.startsWith("_")).map(f => path.basename(f, ".js"));

const semuaTeks = new Map();   // teks soalan -> id
let jumlah = 0;
senarai.forEach(id => {
  const bab = require(path.resolve("sumber", id + ".js"));
  const m = [];
  const tambah = (di, x) => m.push(`${di}: ${x}`);
  const cek = (di, s) => {
    ISTILAH.concat(BAHASA).forEach(([re, sebab]) => { if(re.test(s)) tambah(di, `${sebab} — "${(s.match(re)||[""])[0]}"`); });
  };
  bab.aras.forEach(a => {
    const H = `H${a.n}`;
    cek(`${H} kad`, [a.kadNama, a.kadFakta, a.bosKadNama, a.bosKadFakta, a.tempat].join(" "));
    a.soalan.concat([a.bos]).forEach((q, k) => {
      const di = `${H} item ${k+1}`;
      cek(di, teksSoalan(q));
      if(RUJUK.test(q.t) && !a.lampiran && !/Rajah 1|jadual berikut/i.test(q.t))
        tambah(di, "merujuk jadual/rajah/data tetapi hentian ini tiada lampiran");
      const kunci = q.t.trim().toLowerCase();
      /* soalan generik pendek ("Pilih SEMUA kesimpulan yang disokong oleh data.")
         boleh berulang merentas bab kerana lampirannya berbeza */
      const lalu = semuaTeks.get(kunci);
      if(lalu && (lalu.startsWith(id + " ") || kunci.length > 60)) tambah(di, `soalan sama dengan ${lalu}`);
      else if(!lalu) semuaTeks.set(kunci, `${id} ${di}`);
      if(q.j === "nombor"){
        const bentuk = [String(q.b), q.b.toLocaleString("en-US").replace(/,/g, " "), String(q.b).replace(".", ",")];
        if(!bentuk.some(x => (q.u || "").includes(x))) tambah(di, `jawapan ${q.b} tidak muncul dalam penjelasan`);
        if(!q.suf) tambah(di, "jawapan berangka tiada unit (suf)");
      }
      if(q.j === "banyak" && q.b.length < 2) tambah(di, "soalan 'pilih SEMUA' dengan satu jawapan sahaja; guna 'pilih'");
      if(q.j === "banyak" && !/SEMUA/.test(q.t)) tambah(di, "soalan pelbagai jawapan patut ada perkataan SEMUA");
      if(q.j === "pilih" && q.p.some(x => /^(semua di atas|tiada di atas)/i.test(x))) tambah(di, "elak pilihan 'semua/tiada di atas'");
      /* petunjuk tatabahasa: semua pengganggu bermula dengan perkataan yang
         sama tetapi jawapan betul tidak (atau sebaliknya) */
      if(q.j === "pilih" && q.p.length >= 4){
        const awal = x => x.split(/[\s,]/)[0].toLowerCase();
        const lain = q.p.filter((_, i) => i !== q.b).map(awal);
        if(lain.every(w => w === lain[0]) && awal(q.p[q.b]) !== lain[0] && lain[0].length > 2)
          tambah(di, `semua pengganggu bermula "${lain[0]}" tetapi jawapan betul tidak`);
      }
    });
  });
  ["1","2","3","4","5","6","tiada"].forEach(k => cek(`ulasan ${k}`, bab.ulasan[k]));
  if(m.length){ jumlah += m.length; console.log(`\n✗ ${id} — ${m.length} isu`); m.forEach(x => console.log("   " + x)); }
  else console.log(`✓ ${id} audit lulus`);
});
if(jumlah) process.exit(1);
