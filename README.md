# Laluan Oksigen

Permainan pentaksiran bilik darjah untuk **Sains KSSM Tingkatan 3, Bidang 2.0 Respirasi**.
Murid mengembara sebagai molekul oksigen melalui enam hentian anatomi yang dipetakan
satu lawan satu kepada Tahap Penguasaan 1 hingga 6 dalam DSKP.

Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains Tingkatan 3,
terbitan Bahagian Pembangunan Kurikulum, April 2017.

## Fail

| Fail | Isi |
|---|---|
| `index.html` | Aplikasi. Tidak mengandungi sebarang soalan. |
| `bank-t3b2.js` | Kandungan bab: 54 item, standard prestasi, lampiran. |
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

Aplikasi tidak tahu apa-apa tentang respirasi. Ia hanya memainkan apa yang
didaftarkan dalam `window.BANK`.

1. Salin `bank-t3b2.js`, tukar `id`, tajuk, standard prestasi, lampiran dan soalan.
2. Tukar `BAB_ID` di bahagian atas skrip dalam `index.html`.
3. Tukar `<script src="...">` supaya menunjuk kepada fail bank yang baharu.

Bentuk soalan yang disokong: `pilih` satu jawapan, `banyak` beberapa jawapan,
`susun` urutan, `nombor` jawapan berangka dengan toleransi, dan `buka` tugasan
bertulis yang **tidak pernah** dinilai oleh mesin.

Skrip `_bina-bank.js` menyemak bank (indeks jawapan, pilihan berulang, penjelasan
yang tertinggal) dan mengimbangi kedudukan jawapan. `_uji-imbang.js` mengukur
taburan kedudukan jawapan merentas ratusan muatan halaman.

## Apa yang belum ada

- Cikgu belum boleh menulis soalan sendiri melalui skrin. Bank masih disunting
  sebagai fail.
- Tiada pra atau pasca ujian, jadi permainan ini belum boleh membuktikan bahawa
  murid benar-benar belajar, hanya bahawa mereka terlibat.
- Tiada mod luar talian penuh. Jawapan yang gagal dihantar disimpan pada peranti
  dan dicuba semula, tetapi halaman itu sendiri perlukan talian untuk dibuka.
