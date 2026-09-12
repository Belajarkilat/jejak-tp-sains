# Laluan Oksigen

Permainan pentaksiran bilik darjah untuk **Sains KSSM Tingkatan 3**. Setiap bidang
pembelajaran menjadi satu perjalanan enam hentian yang dipetakan satu lawan satu
kepada Tahap Penguasaan 1 hingga 6 dalam DSKP.

| Bab | Perjalanan | Item |
|---|---|---|
| 1.0 Rangsangan dan Gerak Balas | Laluan Impuls, reseptor hingga tindakan | 54 |
| 2.0 Respirasi | Laluan Oksigen, hidung hingga sel badan | 54 |
| 3.0 Pengangkutan | Laluan Darah, jantung hingga seluruh organisma | 54 |

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
| `skema.sql` | Jadual, peraturan baris dan fungsi pangkalan data. |
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

## Apa yang belum ada

- Cikgu belum boleh menulis soalan sendiri melalui skrin. Bank masih disunting
  sebagai fail sumber.
- Tiga daripada tiga puluh dua bidang Sains menengah rendah sudah siap. Bidang
  Tingkatan 1 dan 2 belum dimulakan.
- Tiada pra atau pasca ujian, jadi permainan ini belum boleh membuktikan bahawa
  murid benar-benar belajar, hanya bahawa mereka terlibat.
- Tiada mod luar talian penuh. Jawapan yang gagal dihantar disimpan pada peranti
  dan dicuba semula, tetapi halaman itu sendiri perlukan talian untuk dibuka.
