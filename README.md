# Cikgu Nani

Permainan pentaksiran bilik darjah untuk **Sains KSSM Tingkatan 3**. Setiap bidang
pembelajaran menjadi satu perjalanan enam hentian yang dipetakan satu lawan satu
kepada Tahap Penguasaan 1 hingga 6 dalam DSKP.

| Bab | Perjalanan | Item |
|---|---|---|
| 1.0 Rangsangan dan Gerak Balas | Laluan Impuls, reseptor hingga tindakan | 54 |
| 2.0 Respirasi | Laluan Oksigen, hidung hingga sel badan | 54 |
| 3.0 Pengangkutan | Laluan Darah, jantung hingga seluruh organisma | 54 |

Nama perjalanan itu milik babnya. Jenama produk ialah Cikgu Nani.

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

## Cara ia menjaga data murid

Nama penuh murid **tidak pernah** masuk ke pelayar tanpa kod cikgu. Murid memilih
nombor, bukan nama, dan papan pendahulu memaparkan nombor sahaja.

Sempadan itu ditegakkan di pelayan, bukan di skrin:

- Kunci awam tidak boleh membaca `lo_nama`, `lo_tp` atau `lo_rahsia` langsung.
  Tiada dasar baris diberikan kepadanya, jadi jadual itu tidak wujud baginya.
- Tiada satu pun jadual boleh **ditulis** terus. Setiap tulisan melalui fungsi
  yang menyemak kod murid atau kod cikgu terlebih dahulu.
- Percubaan **pertama** setiap murid bagi setiap hentian ditulis sekali sahaja
  dan tidak pernah ditindih, walaupun oleh murid itu sendiri. Itulah bukti PBD.
- Rekod dan Tahap Penguasaan diasingkan mengikut bab, kerana DSKP menentukan
  TP bagi setiap bidang pembelajaran secara berasingan.
- Percubaan gagal pada kod dilengahkan, supaya tekaan automatik jadi mahal.

Yang **boleh** dibaca umum: nombor murid, skor, dan teks tugasan reka cipta.
Tiada nama padanya.

## Menyediakan kelas

1. Buka aplikasi, tekan **Cikgu**, masukkan kod cikgu.
2. Tab **Senarai kelas** → tampal nama kelas, satu nama satu baris → **Simpan senarai**.
3. Cetak jadual nombor, nama dan kod. Berikan setiap murid nombor dan kodnya sahaja.
4. Murid buka pautan yang sama, pilih nombornya, masukkan kodnya.

Tukar kod cikgu di bahagian bawah tab yang sama. Kod itu membuka nama semua murid,
jadi ia perlu lapan aksara atau lebih.

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
- Tiga daripada tiga puluh dua bidang Sains menengah rendah sudah siap. Bidang
  Tingkatan 1 dan 2 belum dimulakan.
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
