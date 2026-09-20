/* Alat sekali guna untuk memasukkan rajah ke dalam sumber bab.

   Guna: node tools/tambah-rajah.js <fail-kerja.js>

   Fail kerja mengeksport senarai tugasan. Setiap tugasan menyatakan bab,
   spesifikasi rajah, hentian yang menerimanya, dan suntingan teks yang
   menyambungkan soalan kepada rajah itu. Semua suntingan adalah
   penggantian rentetan TEPAT: jika rentetan tidak dijumpai tepat sekali,
   alat ini berhenti dan tidak menulis apa-apa. Itu penting kerana kandungan
   bab sudah disemak cikgu dan tidak boleh berubah secara tidak sengaja. */
const fs = require("fs");
const path = require("path");

function sunting(fail, tugas){
  const p = path.resolve("sumber", fail + ".js");
  let s = fs.readFileSync(p, "utf8");
  const asal = s;

  /* 1. pemalar spesifikasi rajah, diletak selepas penanda lampiran */
  const penanda = "/* ---------- lampiran ---------- */";
  if(!s.includes(penanda)) throw new Error(`${fail}: tiada penanda lampiran`);
  const blok = tugas.rajah.map(r =>
    `\nconst ${r.nama} = ${JSON.stringify(r.spek, null, 2)};`).join("\n");
  s = s.replace(penanda, penanda + "\n" + blok);

  /* 2. daftar dalam objek lampiran bab.
     Kunci yang sudah wujud akan DITIMPA senyap-senyap oleh JavaScript, dan
     hentian itu akan memaparkan lampiran yang salah sambil soalannya tetap
     berkata "Berdasarkan Rajah 1". Jadi pertembungan nama dihentikan di sini. */
  const sediaAda = require(p);
  for(const r of tugas.rajah){
    if(sediaAda.lampiran && Object.prototype.hasOwnProperty.call(sediaAda.lampiran, r.kunci))
      throw new Error(`${fail}: kunci lampiran "${r.kunci}" sudah wujud; pilih nama lain`);
  }
  const daftar = tugas.rajah.map(r => `${r.kunci}:${r.nama}`).join(", ");
  const m = s.match(/\n(\s*)lampiran:\{([^}]*)\},/);
  if(m){
    s = s.replace(m[0], `\n${m[1]}lampiran:{ ${daftar}, ${m[2].trim()} },`);
  } else {
    /* bab tanpa sebarang lampiran sebelum ini */
    const m2 = s.match(/\n(\s*)aras:ARAS\n\};/);
    if(!m2) throw new Error(`${fail}: tidak jumpa tempat untuk mendaftar lampiran`);
    s = s.replace(m2[0], `\n${m2[1]}lampiran:{ ${daftar} },\n${m2[1]}aras:ARAS\n};`);
  }

  /* 3. sambungkan hentian kepada lampirannya */
  for(const r of tugas.rajah){
    const cari = r.hentian;
    if(s.split(cari).length - 1 !== 1) throw new Error(`${fail}: penanda hentian "${cari}" tidak unik`);
    s = s.replace(cari, cari + ` lampiran:"${r.kunci}",`);
  }

  /* 4. suntingan soalan */
  for(const [dari, ke] of tugas.tukar || []){
    const bil = s.split(dari).length - 1;
    if(bil !== 1) throw new Error(`${fail}: teks untuk ditukar dijumpai ${bil} kali, bukan sekali:\n  ${dari.slice(0, 90)}`);
    s = s.replace(dari, ke);
  }

  if(s === asal) throw new Error(`${fail}: tiada perubahan`);
  fs.writeFileSync(p, s, "utf8");
  return tugas.rajah.length;
}

const kerja = require(path.resolve(process.argv[2]));
let n = 0;
for(const t of kerja){
  const bil = sunting(t.bab, t);
  console.log(`✓ ${t.bab}: ${bil} rajah`);
  n += bil;
}
console.log(`\n${n} rajah ditambah. Jalankan: node bina.js`);
