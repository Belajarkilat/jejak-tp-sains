# Jejak TP Sains

Permainan pentaksiran bilik darjah untuk **Sains KSSM Tingkatan 1 hingga 3** (menengah rendah). Setiap bidang
pembelajaran menjadi satu perjalanan enam hentian yang dipetakan satu lawan satu
kepada Tahap Penguasaan 1 hingga 6 dalam DSKP.

| Bab | Perjalanan | Item |
|---|---|---|
| 1.0 Rangsangan dan Gerak Balas | Laluan Impuls, reseptor hingga tindakan | 54 |
| 2.0 Respirasi | Laluan Oksigen, hidung hingga sel badan | 54 |
| 3.0 Pengangkutan | Laluan Darah, jantung hingga seluruh organisma | 54 |
| 4.0 Kereaktifan Logam | Laluan Bijih, kerak bumi hingga tanah bekas lombong | 54 |
| 5.0 Termokimia | Laluan Haba, termometer hingga bengkel reka cipta | 54 |
| 6.0 Keelektrikan dan Kemagnetan | Laluan Arus, sumber tenaga hingga kampung pedalaman | 54 |
| 7.0 Tenaga dan Kuasa | Laluan Tenaga, padang kerja hingga taman permainan | 54 |
| 8.0 Keradioaktifan | Laluan Sinaran, makmal Curie hingga pameran sains | 54 |
| 9.0 Cuaca Angkasa Lepas | Laluan Suria, teras Matahari hingga stesen angkasa | 54 |
| 10.0 Penerokaan Angkasa Lepas | Laluan Angkasa, planetarium hingga pelancar roket | 54 |

Nama perjalanan itu milik babnya. Jenama produk ialah Jejak TP Sains (dahulu Cikgu Nani, dan sebelum itu Laluan Oksigen).

Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains Tingkatan 3,
terbitan Bahagian Pembangunan Kurikulum, April 2017.

## Fail

| Fail | Isi |
|---|---|
| `index.html` | Aplikasi. Tidak mengandungi sebarang soalan. |
| `sumber/*.js` | Kandungan bab yang disunting tangan. |
| `bank-*.js` | Bank soalan yang dijana. Jangan sunting terus. |
| `bina.js` | Menyemak sumber dan menjana bank. |
| `konfig.js` | Alamat pelayan dan kunci awam Supabase. |
| `skema.sql` | Jadual, peraturan baris dan fungsi pangkalan data. Nama jadual masih berawalan `lo_` daripada nama projek yang terdahulu. |
| `dskp/` | DSKP KSSM Sains Tingkatan 1 hingga 3 (rujukan, tidak diterbitkan). |

## Akaun guru dan kelas (skema versi 3)

Setiap guru mempunyai akaun sendiri (Supabase Auth, e-mel dan kata laluan, atau
Google) dan hanya nampak kelas miliknya. Ramai guru dari banyak sekolah boleh
menggunakan pautan yang sama.

### Menyediakan kelas

1. Buka aplikasi, tekan **Cikgu**, daftar atau log masuk.
2. Tekan **Import dari Excel** dan pilih fail senarai nama (xlsx, xls, csv,
   atau tampal jadual dari Excel). Lajur **Nama** dan **Kelas** dikenal pasti
   sendiri; jika tiada lajur Kelas, setiap helaian dijadikan satu kelas.
   Nama HURUF BESAR (APDM) ditukar kepada huruf nama biasa. Semua kelas,
   kod kelas dan PIN dijana sekali gus. Nama yang sudah ada dilangkau, jadi
   fail yang sama boleh dimuat naik semula.
   Tanpa fail: **Tambah kelas**, kemudian tampal nama dalam tab **Nama & PIN**.
3. **Cetak slip PIN semua kelas**, dan **Kongsi di WhatsApp** (pautan `?k=KOD`)
   bagi setiap kelas.
4. Murid buka pautan, ketik namanya, masukkan PIN pada pad nombor.

Pembaca Excel (SheetJS) hanya dimuatkan apabila guru memilih fail Excel.

Tab lain dalam satu kelas: **Keputusan murid** (TP setiap murid mengikut nama,
tindih TP, ulasan PBD, eksport SPPB), **Papan skor** (bernama, dengan suis sorok
nama untuk projektor), **Diagnostik** dan **Tangga TP**.

### Cara ia menjaga data murid

Sempadan ditegakkan di pelayan (`skema.sql`), bukan di skrin:

- Kunci awam tidak boleh membaca atau menulis mana-mana jadual `lo_` terus.
- Guru membaca dan menulis kelasnya melalui peraturan baris pada `auth.uid()`.
  Guru hanya boleh menukar **nama** kelas; kod kelas dijana pelayan.
- Murid yang tahu kod kelas mendapat senarai **nama** kelas itu melalui
  `lo_kelas_buka`, tidak pernah PIN.
- Setiap bacaan rekod (`lo_papan`) dan tulisan (`lo_simpan_cubaan`) murid
  memerlukan PIN yang betul. Karangan murid lain tidak dipulangkan.
- Lapan PIN salah dalam 15 minit mengunci murid itu sementara. Butang
  **PIN baharu** dalam mod cikgu membuka kunci serta-merta.
- Percubaan **pertama** setiap murid bagi setiap hentian ditulis sekali sahaja
  dan tidak pernah ditindih. Itulah bukti PBD.
- Nombor murid tidak pernah diguna semula dalam satu kelas, supaya murid
  baharu tidak mewarisi rekod murid yang sudah dibuang.
- Had: 20 kelas setiap guru, 60 murid setiap kelas.

### Tetapan Supabase yang diperlukan

- Authentication → URL Configuration: Site URL dan Redirect URL mesti
  mengandungi alamat aplikasi (kini `https://belajarkilat.github.io/jejak-tp-sains/**`).
- Pengesahan e-mel dimatikan (`mailer_autoconfirm`) kerana pelayan e-mel
  terbina Supabase hanya membenarkan 2 e-mel sejam. Sambungkan SMTP sendiri
  (contohnya Resend) sebelum ia dihidupkan semula.
- Log masuk Google: Authentication → Providers → Google, isi Client ID dan
  Client Secret daripada Google Cloud Console. Butang Google hanya muncul
  selepas penyedia ini diaktifkan.

## Semak soalan (Mod Semak)

Guru yang log masuk boleh tekan **Semak soalan** di papan cikgu (`semak.html`).
Setiap item dipaparkan satu demi satu bersama jawapan betul, dan guru menanda
**Betul** atau **Ada masalah** dengan komen. Kad fakta juga disemak, jadi setiap
bab ada 66 item. Semakan disimpan dalam jadual `lo_semakan`; item yang disunting
selepas disemak ditanda "semak semula" secara automatik.

## Menambah bab baharu

Aplikasi tidak tahu apa-apa tentang respirasi atau mana-mana tajuk. Ia hanya
memainkan apa yang didaftarkan dalam `window.BANK`.

1. Salin `sumber/t3b2.js` kepada `sumber/<id baharu>.js` dan tulis kandungannya.
   Tulis jawapan betul pada indeks 0; pembina akan mengagihkannya.
2. Jalankan `node bina.js <id baharu>`. Ia gagal jika mana-mana semakan tidak lulus,
   supaya bank yang rosak tidak pernah sampai kepada murid.
3. Tambah id itu ke dalam `BAB_TERSEDIA` dan satu `<script src="bank-<id>.js">`
   dalam `index.html`.

Setiap bab perlukan tepat enam hentian dan lapan soalan campur satu soalan bos
bagi setiap hentian. Bentuk soalan: `pilih` satu jawapan, `banyak` beberapa
jawapan, `susun` urutan, `nombor` jawapan berangka dengan toleransi, dan `buka`
tugasan bertulis yang **tidak pernah** dinilai oleh mesin dan hanya dibenarkan
sebagai soalan bos pada hentian TP6.

`_uji-imbang.js` mengukur taburan kedudukan jawapan merentas ratusan muatan
halaman, supaya murid tidak dapat meneka corak.

`_ganti.py` menukar pilihan, teks atau penjelasan soalan tertentu dalam fail
sumber tanpa menyunting tangan, berdasarkan senarai pembetulan dalam JSON.

### Semakan petunjuk panjang jawapan

Pembina menolak bab di mana jawapan betul terlalu kerap menjadi pilihan yang
paling panjang. Tanpa semakan ini, murid yang sentiasa memilih ayat terpanjang
boleh lulus tanpa memahami sains. Sebelum semakan ini diperkenalkan, strategi
itu mendapat 79 hingga 90 peratus betul. Selepasnya, 21 hingga 34 peratus,
iaitu hampir sama dengan meneka.

- Jawapan betul paling panjang dalam tidak lebih 35% soalan satu jawapan.
- Purata panjang jawapan betul tidak lebih 1.20 kali purata pengganggu.
- Tiada jawapan betul melebihi 1.5 kali pengganggu terpanjangnya.

Cara membetulkan bab yang ditolak: pendekkan jawapan betul yang berlebihan,
dan jadikan setiap pengganggu satu salah faham yang lengkap dan munasabah,
dengan alasan yang salah jika jawapan betul mempunyai alasan.

Setiap bab juga mesti ada ulasan PBD sendiri bagi TP1 hingga TP6, kerana cikgu
menyalinnya terus ke SPPB.

## Apa yang belum ada

- Cikgu belum boleh menulis soalan sendiri melalui skrin. Bank masih disunting
  sebagai fail sumber.
- Kesemua sepuluh bidang Tingkatan 3 sudah siap. Bab 4 hingga 10 (17 Sep 2026)
  belum disemak oleh guru. Bidang Tingkatan 1 dan 2 belum dimulakan.
- Tiada pra atau pasca ujian, jadi permainan ini belum boleh membuktikan bahawa
  murid benar-benar belajar, hanya bahawa mereka terlibat.
- Tiada mod luar talian penuh. Halaman perlukan talian untuk dibuka kali pertama.

## Keadilan dan ketahanan semasa kelas

- **Masa membaca.** Meter nafas tidak berkurang sehingga murid sempat membaca
  soalan, pilihan dan lampirannya, pada kira-kira dua setengah perkataan sesaat.
  Soalan ingatan ringkas mendapat 6 saat, soalan berjadual sehingga 45 saat.
  Pemasa soalan bos hanya bermula selepas itu.
- **Wifi tersekat.** Jawapan yang gagal dihantar disimpan pada telefon dan
  dihantar sendiri sebaik talian pulih, tanpa perlu memuat semula halaman.
  Pada telefon, jalur amaran muncul di atas soalan selagi ada jawapan tertunggak.
- **Kelas contoh** hanya kelihatan dalam mod cikgu. Rekodnya tidak pernah
  disimpan, jadi murid tidak boleh memilihnya.
- **Seluruh kelas serentak.** Diuji dengan 40 penghantaran serentak; kesemuanya
  berjaya dan sampai ke pangkalan data dalam kira-kira dua setengah saat.

## Tingkatan 1 dan 2 (siap 19 Sep 2026)

| Tingkatan | Bab | Perjalanan |
|---|---|---|
| 1 | 1.0 Pengenalan kepada Penyiasatan Saintifik | Laluan Makmal |
| 1 | 2.0 Sel sebagai Unit Asas Hidupan | Laluan Sel |
| 1 | 3.0 Koordinasi dan Gerak Balas | Laluan Seimbang |
| 1 | 4.0 Pembiakan | Laluan Benih |
| 1 | 5.0 Jirim | Laluan Zarah |
| 1 | 6.0 Jadual Berkala | Laluan Unsur |
| 1 | 7.0 Udara | Laluan Udara |
| 1 | 8.0 Cahaya dan Optik | Laluan Cahaya |
| 1 | 9.0 Bumi | Laluan Bumi |
| 2 | 1.0 Biodiversiti | Laluan Rimba |
| 2 | 2.0 Ekosistem | Laluan Ekosistem |
| 2 | 3.0 Nutrisi | Laluan Nutrisi |
| 2 | 4.0 Kesihatan Manusia | Laluan Imun |
| 2 | 5.0 Air dan Larutan | Laluan Air |
| 2 | 6.0 Asid dan Alkali | Laluan pH |
| 2 | 7.0 Keelektrikan dan Kemagnetan | Laluan Elektro |
| 2 | 8.0 Daya dan Gerakan | Laluan Daya |
| 2 | 9.0 Haba | Laluan Haba |
| 2 | 10.0 Gelombang Bunyi | Laluan Bunyi |
| 2 | 11.0 Bintang dan Galaksi dalam Alam Semesta | Laluan Galaksi |
| 2 | 12.0 Sistem Suria | Laluan Planet |
| 2 | 13.0 Meteoroid, Asteroid, Komet | Laluan Komet |

Setiap bab 54 item. DSKP Tingkatan 1 menulis Standard Prestasi mengikut tema;
setiap bab T1 mengambil ayat tema itu dan menghadkannya kepada topik bab.

**Bab yang dibuka** ditetapkan dalam `BAB_TERSEDIA` (index.html) bersama tag
skrip bank. Kini Bab 1 hingga 3 bagi setiap tingkatan dibuka; bab lain
dipaparkan sebagai "akan datang". Untuk membuka bab, tambah tag skrip bank
dan id dalam `BAB_TERSEDIA` (dan dalam `semak.html`).

**Audit kandungan:** `node bina.js` (struktur dan petunjuk panjang jawapan),
`node audit.js` (istilah buku teks, bahasa, soalan berulang, rujukan jadual,
jawapan berangka, petunjuk tatabahasa). Alat penulis: `_panjang.js <id>`
(soalan yang jawapan betulnya paling panjang) dan `_ringkas.js <id>`
(soalan dan jawapan untuk semakan manual).
