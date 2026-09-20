/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 3.0 Nutrisi.
   Jalankan `node bina.js t2b3` untuk menyemak dan menghasilkan bank-t2b3.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 52.

   Nilai kalori dalam lampiran ialah anggaran supaya murid boleh mengira;
   warna mendakan ujian Millon tidak ditanya kerana penerangan buku teks
   berbeza-beza.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai nutrisi.",
"Memahami nutrisi serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai nutrisi untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai nutrisi dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai nutrisi dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai nutrisi dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_HASILCERNA = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    {
      "id": "k",
      "label": "Karbohidrat",
      "x": 0,
      "y": 0
    },
    {
      "id": "k2",
      "label": "Glukosa",
      "x": 1,
      "y": 0
    },
    {
      "id": "p",
      "label": "Protein",
      "x": 0,
      "y": 1
    },
    {
      "id": "p2",
      "label": "Asid amino",
      "x": 1,
      "y": 1
    },
    {
      "id": "l",
      "label": "Lemak",
      "x": 0,
      "y": 2
    },
    {
      "id": "l2",
      "label": "Asid lemak & gliserol",
      "x": 1,
      "y": 2
    }
  ],
  "panah": [
    [
      "k",
      "k2"
    ],
    [
      "p",
      "p2"
    ],
    [
      "l",
      "l2"
    ]
  ],
  "kapsyen": "Rajah 1 · Hasil akhir pencernaan bagi tiga kelas makanan.",
  "alt": "Tiga baris: karbohidrat menjadi glukosa, protein menjadi asid amino, lemak menjadi asid lemak dan gliserol"
};

const R_HEMPEDU = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Titisan lemak besar",
    "Hempedu mengemulsikannya",
    "Banyak titisan lemak halus",
    "Enzim lipase bertindak",
    "Asid lemak dan gliserol"
  ],
  "kapsyen": "Rajah 1 · Peranan hempedu dalam pencernaan lemak.",
  "alt": "Rajah aliran menegak: titisan lemak besar dipecahkan oleh hempedu menjadi banyak titisan halus, kemudian enzim lipase menghasilkan asid lemak dan gliserol"
};

const T_UJI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sampel</th>'+
'<th>Larutan iodin</th><th>Larutan Benedict (dipanaskan)</th><th>Ujian alkohol-emulsi</th></tr></thead><tbody>'+
'<tr><td>W</td><td>Biru tua</td><td>Kekal biru</td><td>Jernih</td></tr>'+
'<tr><td>X</td><td>Perang</td><td>Mendakan merah bata</td><td>Jernih</td></tr>'+
'<tr><td>Y</td><td>Perang</td><td>Kekal biru</td><td>Emulsi putih keruh</td></tr>'+
'<tr><td>Z</td><td>Biru tua</td><td>Mendakan merah bata</td><td>Jernih</td></tr>'+
'</tbody></table></div><p class="qnote">Keputusan ujian makanan bagi empat sampel. Warna asal larutan iodin ialah perang dan larutan Benedict ialah biru.</p>';

const T_LIUR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tabung</th>'+
'<th>Kandungan</th><th class="n">Suhu (&deg;C)</th><th>Ujian iodin selepas 20 minit</th></tr></thead><tbody>'+
'<tr><td>P</td><td>Larutan kanji + air liur</td><td class="n">37</td><td>Perang (tiada kanji)</td></tr>'+
'<tr><td>Q</td><td>Larutan kanji + air suling</td><td class="n">37</td><td>Biru tua</td></tr>'+
'<tr><td>R</td><td>Larutan kanji + air liur</td><td class="n">5</td><td>Biru tua</td></tr>'+
'<tr><td>S</td><td>Larutan kanji + air liur yang telah dididih</td><td class="n">37</td><td>Biru tua</td></tr>'+
'</tbody></table></div><p class="qnote">Air liur mengandungi enzim amilase. Mendidih memusnahkan enzim.</p>';

const T_MENU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Makanan atau minuman</th>'+
'<th class="n">Tenaga (kcal)</th><th>Kandungan utama</th></tr></thead><tbody>'+
'<tr><td>Nasi lemak biasa</td><td class="n">400</td><td>Karbohidrat, lemak</td></tr>'+
'<tr><td>Roti canai 2 keping</td><td class="n">600</td><td>Karbohidrat, lemak</td></tr>'+
'<tr><td>Nasi putih, ikan bakar dan sayur</td><td class="n">550</td><td>Karbohidrat, protein, serat</td></tr>'+
'<tr><td>Teh tarik</td><td class="n">150</td><td>Gula, lemak</td></tr>'+
'<tr><td>Air kosong</td><td class="n">0</td><td>Air</td></tr>'+
'<tr><td>Sebiji pisang</td><td class="n">100</td><td>Karbohidrat, serat, kalium</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai anggaran. Keperluan tenaga harian remaja berumur 14 tahun yang aktif adalah sekitar 2000 hingga 2400 kcal.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Pasar Tani", sk:"3.1 / 3.3 Kelas makanan dan sistem pencernaan", lampiran:"hasilcerna",
 kadNama:"Tujuh Kelas Makanan", kadEm:"\u{1F957}", kadFakta:"Tujuh kelas makanan ialah karbohidrat, protein, lemak, vitamin, mineral, pelawas dan air.",
 bosKadNama:"Enzim", bosKadEm:"\u{2702}", bosKadFakta:"Enzim mempercepat penguraian makanan tanpa berubah selepas tindak balas.",
 soalan:[
 {j:"pilih",t:"Kelas makanan yang menjadi sumber tenaga utama badan ialah:",p:["Karbohidrat","Vitamin","Mineral","Pelawas"],b:0,u:"Contohnya nasi, roti dan ubi."},
 {j:"pilih",t:"Kelas makanan yang diperlukan untuk pertumbuhan dan membaiki sel ialah:",p:["Protein","Lemak","Air","Pelawas"],b:0,u:"Sumbernya ikan, telur, daging dan kacang."},
 {j:"pilih",t:"Kekurangan vitamin C boleh menyebabkan:",p:["Skurvi","Riket","Goiter","Anemia"],b:0,u:"Gusi berdarah ialah tanda skurvi."},
 {j:"pilih",t:"Mineral yang diperlukan untuk membentuk hemoglobin ialah:",p:["Besi","Iodin","Natrium","Kalium"],b:0,u:"Kekurangan besi menyebabkan anemia."},
 {j:"pilih",t:"Larutan yang digunakan untuk menguji kehadiran glukosa ialah:",p:["Larutan Benedict","Larutan iodin","Bahan uji Millon","Alkohol"],b:0,u:"Mendakan merah bata terbentuk selepas dipanaskan."},
 {j:"pilih",t:"Organ yang menghasilkan hempedu ialah:",p:["Hati","Pankreas","Perut","Pundi hempedu"],b:0,u:"Hempedu disimpan dalam pundi hempedu dan mengemulsikan lemak."},
 {j:"pilih",t:"Tempat utama penyerapan makanan tercerna ialah:",p:["Usus kecil","Perut","Usus besar","Esofagus"],b:0,u:"Vilus pada dinding usus kecil menambah luas permukaan."},
 {j:"banyak",t:"Berdasarkan Rajah 1, pilih SEMUA hasil akhir pencernaan.",p:["Glukosa","Asid amino","Asid lemak dan gliserol","Kanji","Protein"],b:[0,1,2],u:"Kanji dan protein ialah molekul besar yang perlu dicernakan dahulu."}],
 bos:{j:"pilih",t:"Enzim amilase dalam air liur mencernakan:",p:["Kanji","Protein","Lemak","Vitamin"],b:0,u:"Kanji diuraikan kepada maltosa."}},

{n:2, tempat:"Dapur Sekolah", sk:"3.2 / 3.3 / 3.4 Gizi seimbang, pencernaan dan penyahtinjaan", lampiran:"hempedu",
 kadNama:"Pinggan Sihat", kadEm:"\u{1F37D}", kadFakta:"Pinggan Sihat Malaysia: separuh sayur dan buah, suku nasi atau karbohidrat, suku protein.",
 bosKadNama:"Serat", bosKadEm:"\u{1F966}", bosKadFakta:"Serat tidak dicernakan, tetapi ia membantu najis bergerak lancar di dalam usus besar.",
 soalan:[
 {j:"pilih",t:"Mengapakah pelawas penting walaupun tidak dicernakan?",p:["Ia mengelakkan sembelit","Ia sumber tenaga utama","Ia membina otot","Ia membentuk hemoglobin"],b:0,u:"Pelawas menambah pukal najis dan merangsang pergerakan usus."},
 {j:"pilih",t:"Beza pencernaan fizikal dengan pencernaan kimia ialah pencernaan fizikal:",p:["Memecahkan makanan tanpa enzim","Menguraikan molekul besar dengan bantuan enzim","Hanya berlaku di dalam usus kecil sahaja","Menghasilkan glukosa daripada kanji terus"],b:0,u:"Contohnya gigi mengunyah dan perut mengisar makanan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah hempedu membantu pencernaan lemak?",p:["Ia memecahkan lemak kepada titisan kecil","Ia enzim yang menguraikan lemak kepada glukosa","Ia menukar lemak kepada protein","Ia menyerap lemak ke dalam darah"],b:0,u:"Titisan kecil mempunyai luas permukaan yang lebih besar untuk tindakan lipase."},
 {j:"pilih",t:"Fungsi utama usus besar ialah:",p:["Menyerap semula air","Mencernakan protein","Menghasilkan hempedu","Menyerap glukosa"],b:0,u:"Baki makanan menjadi najis dan disingkirkan melalui dubur."},
 {j:"pilih",t:"Mengapakah seorang pekerja binaan memerlukan lebih banyak tenaga daripada seorang kerani?",p:["Kerjanya lebih aktif secara fizikal","Dia lebih tinggi daripada kerani","Dia bekerja di dalam bangunan","Kerja kerani memerlukan lebih banyak protein"],b:0,u:"Pekerjaan ialah salah satu faktor yang mempengaruhi gizi seimbang."},
 {j:"pilih",t:"Hasil pencernaan diangkut ke seluruh badan oleh:",p:["Sistem peredaran darah","Sistem rangka badan","Sistem respirasi","Sistem otot rangka"],b:0,u:"Glukosa kemudian digunakan dalam respirasi sel dengan oksigen dari peparu."},
 {j:"pilih",t:"Mengapakah makan terlalu banyak makanan berlemak dan bergula boleh menyebabkan obesiti?",p:["Tenaga berlebihan disimpan sebagai lemak","Lemak dan gula menghalang pencernaan protein","Makanan itu tiada tenaga langsung","Makanan itu terus disingkirkan sebagai najis"],b:0,u:"Obesiti meningkatkan risiko kencing manis dan penyakit jantung."},
 {j:"pilih",t:"Kekurangan iodin dalam makanan boleh menyebabkan:",p:["Goiter","Skurvi","Riket","Rabun malam"],b:0,u:"Garam beriodin membantu mencegah goiter."}],
 bos:{j:"susun",t:"Susun organ mengikut laluan makanan dalam salur pencernaan.",p:["Mulut","Esofagus","Perut","Usus kecil","Usus besar","Dubur"],b:[0,1,2,3,4,5],u:"Hati, pankreas dan pundi hempedu membantu tetapi tidak dilalui makanan."}},

{n:3, tempat:"Makmal Ujian Makanan", sk:"3.1 Mengaplikasi ujian makanan", lampiran:"uji",
 kadNama:"Larutan Benedict", kadEm:"\u{1F9EA}", kadFakta:"Larutan Benedict yang biru bertukar kepada mendakan merah bata apabila dipanaskan bersama glukosa.",
 bosKadNama:"Emulsi", bosKadEm:"\u{1F95B}", bosKadFakta:"Dalam ujian alkohol-emulsi, lemak membentuk emulsi putih keruh apabila larutan alkohol dituang ke dalam air.",
 soalan:[
 {j:"pilih",t:"Sampel W mengandungi:",p:["Kanji sahaja","Glukosa sahaja","Lemak sahaja","Kanji dan glukosa"],b:0,u:"Iodin menjadi biru tua; ujian lain negatif."},
 {j:"pilih",t:"Sampel X mengandungi:",p:["Glukosa","Kanji","Lemak","Kanji dan lemak"],b:0,u:"Benedict membentuk mendakan merah bata."},
 {j:"pilih",t:"Sampel Y paling mungkin:",p:["Minyak masak","Air gula","Larutan kanji","Air kosong"],b:0,u:"Hanya ujian alkohol-emulsi positif."},
 {j:"pilih",t:"Sampel manakah mengandungi lebih daripada satu kelas makanan yang diuji?",p:["Z","W","X","Y"],b:0,u:"Z positif bagi kanji dan glukosa."},
 {j:"pilih",t:"Sampel Z paling mungkin:",p:["Pisang masak","Minyak masak","Air gula","Mentega"],b:0,u:"Pisang mengandungi kanji dan gula."},
 {j:"pilih",t:"Mengapakah tabung berisi larutan Benedict perlu dipanaskan dalam kukus air?",p:["Supaya tindak balas berlaku","Supaya warna iodin hilang","Supaya kanji bertukar kepada lemak","Supaya larutan menjadi sejuk"],b:0,u:"Tanpa pemanasan, perubahan warna tidak berlaku."},
 {j:"pilih",t:"Bahan uji yang digunakan untuk menguji protein ialah:",p:["Bahan uji Millon","Larutan Benedict","Larutan iodin","Alkohol"],b:0,u:"Bahan uji Millon dipanaskan bersama sampel."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL berdasarkan jadual.",p:["W dan Z mengandungi kanji","X dan Z mengandungi glukosa","Hanya Y mengandungi lemak","W mengandungi glukosa","Semua sampel mengandungi lemak"],b:[0,1,2],u:"W hanya mengandungi kanji, dan hanya Y membentuk emulsi."}],
 bos:{j:"pilih",t:"Seorang murid menguji air tebu dan mendapat mendakan merah bata. Kesimpulan paling tepat?",p:["Air tebu mengandungi gula penurun","Air tebu mengandungi kanji yang banyak","Air tebu mengandungi lemak","Air tebu tidak mengandungi gula"],b:0,u:"Larutan Benedict mengesan glukosa dan gula penurun yang lain."}},

{n:4, tempat:"Makmal Enzim", sk:"3.3 / 3.4 Menganalisis tindakan enzim dan penyerapan", lampiran:"liur",
 kadNama:"Amilase", kadEm:"\u{1F444}", kadFakta:"Nasi yang dikunyah lama terasa manis kerana amilase dalam air liur menguraikan kanji kepada gula.",
 bosKadNama:"Tiub Visking", bosKadEm:"\u{1F9EA}", bosKadFakta:"Tiub Visking bertindak seperti dinding usus kecil: molekul kecil boleh melaluinya tetapi molekul besar tidak.",
 soalan:[
 {j:"pilih",t:"Mengapakah tabung P tidak lagi mengandungi kanji?",p:["Amilase mencernakan kanji","Kanji menyejat pada 37 °C","Iodin memusnahkan kanji","Air liur menukar kanji kepada lemak"],b:0,u:"Kanji diuraikan kepada maltosa."},
 {j:"pilih",t:"Apakah fungsi tabung Q dalam eksperimen ini?",p:["Untuk kawalan","Untuk menambah kanji","Untuk memanaskan air liur","Untuk mengukur suhu badan"],b:0,u:"Q menunjukkan kanji tidak hilang tanpa air liur."},
 {j:"pilih",t:"Bandingkan tabung P dan R. Kesimpulan paling tepat?",p:["Amilase kurang aktif pada suhu rendah","Amilase paling aktif pada 5 °C","Suhu tidak mempengaruhi enzim","Kanji tidak larut pada 5 °C"],b:0,u:"Pada 5 °C, kanji masih ada selepas 20 minit."},
 {j:"pilih",t:"Mengapakah kanji masih ada dalam tabung S?",p:["Enzim telah musnah apabila dididih","Air liur yang dididih mengandungi lebih banyak kanji","Suhu 37 °C terlalu panas untuk enzim","Iodin tidak berfungsi dengan air liur"],b:0,u:"Pemanasan pada suhu tinggi memusnahkan enzim."},
 {j:"pilih",t:"Mengapakah suhu 37 °C dipilih untuk tabung P?",p:["Ia suhu badan manusia","Ia suhu air mendidih","Ia suhu bilik biasa","Ia suhu peti sejuk"],b:0,u:"Enzim badan manusia paling aktif pada suhu badan."},
 {j:"pilih",t:"Dalam eksperimen tiub Visking berisi larutan kanji dan glukosa, air di luar tiub diuji selepas 30 minit. Keputusan yang dijangka?",p:["Glukosa dikesan, kanji tidak","Kanji dikesan, glukosa tidak","Kedua-duanya dikesan","Tiada apa-apa yang dikesan"],b:0,u:"Molekul glukosa kecil boleh meresap keluar; molekul kanji terlalu besar."},
 {j:"pilih",t:"Keputusan tiub Visking membantu menerangkan mengapa:",p:["Kanji perlu dicernakan sebelum diserap","Glukosa tidak diperlukan oleh badan","Usus besar menyerap semua kanji","Protein tidak perlu dicernakan"],b:0,u:"Hanya molekul kecil boleh melalui dinding usus kecil ke dalam darah."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Air liur mencernakan kanji","Suhu rendah memperlahankan tindakan enzim","Enzim yang dididih tidak lagi berfungsi","Air suling mencernakan kanji","Enzim paling aktif pada 5 °C"],b:[0,1,2],u:"Tabung Q menunjukkan air suling tidak mencernakan kanji."}],
 bos:{j:"pilih",t:"Seorang murid mencadangkan tabung P diuji selepas 2 minit sahaja untuk menjimatkan masa. Nilaikan cadangan itu.",p:["Kurang sesuai; pencernaan belum selesai","Sesuai, kerana enzim bertindak serta-merta","Sesuai, kerana suhu tidak penting","Kurang sesuai, kerana air liur akan mendidih"],b:0,u:"Masa yang terlalu singkat boleh memberi keputusan yang mengelirukan."}},

{n:5, tempat:"Kantin Sihat", sk:"3.2 Menilai gizi seimbang", lampiran:"menu",
 kadNama:"Kalori", kadEm:"\u{1F525}", kadFakta:"Kalori ialah ukuran tenaga dalam makanan. 1 kcal bersamaan kira-kira 4.2 kJ.",
 bosKadNama:"Gula Tersembunyi", bosKadEm:"\u{1F9CB}", bosKadFakta:"Segelas teh tarik boleh mengandungi beberapa sudu teh gula.",
 soalan:[
 {j:"nombor",t:"Aiman bersarapan nasi lemak biasa dan teh tarik. Berapakah jumlah tenaga yang diambil, dalam kcal?",b:550,tol:0.5,suf:"kcal",u:"400 + 150 = 550 kcal."},
 {j:"nombor",t:"Mei Ling makan roti canai 2 keping dan teh tarik. Berapakah jumlah tenaganya, dalam kcal?",b:750,tol:0.5,suf:"kcal",u:"600 + 150 = 750 kcal."},
 {j:"pilih",t:"Hidangan tengah hari manakah paling seimbang?",p:["Nasi putih, ikan bakar dan sayur","Roti canai 2 keping dan teh tarik","Nasi lemak biasa dengan teh tarik","Teh tarik dan sebiji pisang"],b:0,u:"Ia mengandungi karbohidrat, protein dan serat."},
 {j:"pilih",t:"Minuman paling sesuai untuk murid yang mahu mengurangkan gula?",p:["Air kosong","Teh tarik","Air sirap","Air tin berkarbonat"],b:0,u:"Air kosong tiada gula dan tiada kalori."},
 {j:"pilih",t:"Kantin mahu mengurangkan obesiti murid. Cadangan paling berkesan berdasarkan jadual?",p:["Kurangkan roti canai, tambah nasi, ikan, sayur","Jual lebih banyak teh tarik kerana murid menyukainya","Haramkan semua makanan berkarbohidrat","Tutup kantin supaya murid tidak makan"],b:0,u:"Menu seimbang dengan kurang lemak dan gula membantu."},
 {j:"pilih",t:"Seorang murid mendakwa sarapan roti canai sesuai kerana memberi paling banyak tenaga. Nilaikan dakwaan itu.",p:["Belum tentu; banyak lemak, kurang serat","Tepat; lebih banyak tenaga sentiasa lebih baik","Tepat; roti canai mengandungi semua kelas makanan","Salah; roti canai tiada tenaga langsung"],b:0,u:"Kandungan zat, bukan jumlah tenaga sahaja, menentukan hidangan seimbang."},
 {j:"pilih",t:"Pemain bola sepak sekolah berlatih dua jam sehari. Keperluan tenaganya berbanding murid biasa:",p:["Lebih tinggi","Lebih rendah","Sama sahaja","Tidak diperlukan"],b:0,u:"Aktiviti fizikal meningkatkan keperluan tenaga."},
 {j:"pilih",t:"Mengapakah pisang ialah snek yang lebih baik daripada teh tarik untuk waktu rehat?",p:["Ia ada serat dan kalium, dan kurang gula tambahan","Ia mempunyai lebih banyak lemak daripada teh tarik","Ia tiada tenaga langsung","Ia mengandungi lebih banyak protein daripada ikan"],b:0,u:"Pisang memberi tenaga bersama zat lain."}],
 bos:{j:"pilih",t:"Guru mahu merancang menu kantin seminggu untuk murid. Pendekatan paling wajar?",p:["Guna konsep Pinggan Sihat","Pilih makanan paling murah sahaja","Hidangkan menu sama setiap hari","Tanya murid makanan kegemaran sahaja"],b:0,u:"Kepelbagaian memastikan semua kelas makanan diperoleh."}},

{n:6, tempat:"Dapur Inovasi", sk:"3.2 / 3.4 Mereka cipta gizi seimbang",
 kadNama:"Makanan Tempatan", kadEm:"\u{1F35B}", kadFakta:"Ulam-ulaman tempatan seperti pegaga dan ulam raja kaya dengan serat dan vitamin.",
 bosKadNama:"Label Pemakanan", bosKadEm:"\u{1F3F7}", bosKadFakta:"Label maklumat pemakanan pada bungkusan menunjukkan tenaga, lemak, gula dan garam setiap hidangan.",
 soalan:[
 {j:"pilih",t:"Awak mereka menu sarapan murah untuk murid asrama. Gabungan paling seimbang?",p:["Roti gandum, telur rebus, pisang dan susu","Mi segera, keropok dan air bergas","Roti manis, kuih goreng dan teh manis","Nasi lemak dua bungkus dan sirap"],b:0,u:"Ada karbohidrat, protein, vitamin, mineral dan serat."},
 {j:"pilih",t:"Awak mereka poster mencegah sembelit. Nasihat paling tepat?",p:["Makan sayur, buah dan minum air","Makan lebih banyak daging merah setiap hari","Kurangkan minum air supaya najis keras","Elakkan semua makanan berserat"],b:0,u:"Serat dan air memudahkan pergerakan najis."},
 {j:"pilih",t:"Awak mereka produk minuman untuk hari keusahawanan yang lebih sihat. Idea paling sesuai?",p:["Jus buah tempatan tanpa gula tambahan","Air berkarbonat dengan gula tinggi","Minuman berkrim dengan sirap","Minuman bertenaga berkafein"],b:0,u:"Buah tempatan memberi vitamin tanpa gula berlebihan."},
 {j:"pilih",t:"Awak merancang kajian obesiti di sekolah. Data paling berguna untuk dikumpul?",p:["Berat, tabiat makan dan aktiviti fizikal","Warna baju sekolah kegemaran setiap murid","Bilangan buku di perpustakaan","Jarak rumah murid ke pasar raya"],b:0,u:"Data berkaitan pemakanan dan gaya hidup membantu mengenal pasti punca."},
 {j:"pilih",t:"Awak mereka kempen 'Kurangkan Gula' di kantin. Langkah paling praktikal?",p:["Sediakan pilihan kurang manis","Haramkan semua minuman di kantin","Naikkan harga air kosong","Jual gula dalam paket besar"],b:0,u:"Pilihan yang mudah dan tidak lebih mahal menggalakkan perubahan."},
 {j:"pilih",t:"Awak mereka model sistem pencernaan untuk murid tahun enam. Bahan paling sesuai untuk mewakili usus kecil yang panjang?",p:["Tiub getah panjang","Bekas plastik kecil","Sebatang pensel","Bola pingpong"],b:0,u:"Usus kecil sangat panjang dan berlingkar di dalam abdomen."},
 {j:"pilih",t:"Keluarga awak mahu makan lebih sihat dengan bajet terhad. Cadangan paling praktikal?",p:["Guna bahan tempatan bermusim","Beli makanan import yang mahal","Makan di restoran makanan segera","Kurangkan makan sayur kerana mahal"],b:0,u:"Bahan tempatan bermusim lebih murah dan segar."},
 {j:"pilih",t:"Bagaimanakah awak menilai sama ada kempen pemakanan sihat di sekolah berjaya?",p:["Bandingkan jualan menu sihat","Kira bilangan poster yang ditampal","Tanya pengusaha kantin sama ada dia suka kempen itu","Ukur saiz kantin"],b:0,u:"Perubahan pilihan makanan menunjukkan kesan kempen."}],
 bos:{j:"buka",
  t:"Kadar obesiti dalam kalangan murid di sekolah awak semakin meningkat. Reka satu program atau produk untuk membantu murid mengamalkan gizi seimbang.",
  arahan:"Terangkan rekaan program atau produk awak, kelas makanan dan anggaran nilai kalori yang terlibat, bagaimana ia mengambil kira faktor seperti umur dan aktiviti fizikal, cara mengukur kejayaannya, serta kos dan kesesuaian dengan budaya makan murid.",
  u:"Jawapan TP6 yang kukuh menggunakan konsep gizi seimbang dan nilai kalori dengan betul, mengambil kira faktor individu, dan merancang pengukuran yang realistik."}}
];

module.exports = {
  id:"t2b3", tingkatan:2, kod:"3.0 Nutrisi",
  tajuk:"Laluan Nutrisi",
  subtajuk:"Sains Ting. 2 · Bab 3 Nutrisi",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali kelas makanan, fungsinya dan organ sistem pencernaan. Langkah seterusnya ialah menjelaskan proses pencernaan dan penyerapan.",
   2:"{n} memahami gizi seimbang, pencernaan dan penyahtinjaan serta dapat menjelaskannya. Perlu lebih banyak latihan mentafsir keputusan ujian makanan.",
   3:"{n} boleh mengenal pasti kandungan makanan berdasarkan keputusan ujian iodin, Benedict dan alkohol-emulsi. Galakkan menyatakan perubahan warna dengan tepat.",
   4:"{n} mampu menganalisis eksperimen enzim dan tiub Visking untuk menerangkan pencernaan dan penyerapan. Seterusnya latih menilai menu makanan.",
   5:"{n} dapat menilai menu berdasarkan nilai kalori dan kandungan zat serta membuat keputusan yang wajar. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta program atau produk pemakanan sihat yang kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nutrisi. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ hasilcerna:R_HASILCERNA, hempedu:R_HEMPEDU, uji:T_UJI, liur:T_LIUR, menu:T_MENU },
  aras:ARAS
};
