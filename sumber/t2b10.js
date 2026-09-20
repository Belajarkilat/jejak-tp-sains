/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 10.0 Gelombang Bunyi.
   Jalankan `node bina.js t2b10` untuk menyemak dan menghasilkan bank-t2b10.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 85.

   Laju bunyi dalam air laut diambil sebagai 1500 m/s dalam lampiran.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai gelombang bunyi.",
"Memahami gelombang bunyi serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai gelombang bunyi untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai gelombang bunyi dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai gelombang bunyi dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai gelombang bunyi dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_AMPLITUD = {
  "jenis": "graf",
  "grid": 4,
  "yMin": -4,
  "yMaks": 4,
  "setiap": 3,
  "x": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "siri": [
    {
      "label": "Bunyi P (lebih nyaring)",
      "warna": "merah",
      "y": [
        0,
        3.5,
        3.5,
        0,
        -3.5,
        -3.5,
        0,
        3.5,
        3.5,
        0,
        -3.5,
        -3.5,
        0
      ]
    },
    {
      "label": "Bunyi Q (kurang nyaring)",
      "warna": "ungu",
      "y": [
        0,
        1.3,
        1.3,
        0,
        -1.3,
        -1.3,
        0,
        1.3,
        1.3,
        0,
        -1.3,
        -1.3,
        0
      ]
    }
  ],
  "xLabel": "Masa (milisaat)",
  "kapsyen": "Rajah 1 · Dua bunyi yang sama kelangsingan. Bunyi P lebih nyaring daripada bunyi Q.",
  "alt": "Dua gelombang dengan bilangan puncak yang sama, tetapi gelombang P mempunyai puncak yang jauh lebih tinggi daripada gelombang Q"
};

const R_GEMA = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Bunyi dari sumber",
    "Mengenai dinding keras",
    "Dipantulkan kembali",
    "Didengar semula sebagai gema"
  ],
  "kapsyen": "Rajah 1 · Bagaimana gema terbentuk dalam sebuah dewan.",
  "alt": "Rajah aliran menegak: bunyi dari sumber mengenai dinding keras, dipantulkan kembali, dan didengar semula sebagai gema"
};

const T_OSILO =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bunyi</th>'+
'<th class="n">Frekuensi (Hz)</th><th class="n">Tinggi gelombang pada skrin osiloskop (petak)</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">256</td><td class="n">2</td></tr>'+
'<tr><td>Q</td><td class="n">512</td><td class="n">2</td></tr>'+
'<tr><td>R</td><td class="n">256</td><td class="n">4</td></tr>'+
'<tr><td>S</td><td class="n">30 000</td><td class="n">3</td></tr>'+
'</tbody></table></div><p class="qnote">Tinggi gelombang pada skrin menunjukkan amplitud. Julat pendengaran manusia ialah kira-kira 20 Hz hingga 20 000 Hz.</p>';

const T_SONAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Lokasi</th>'+
'<th class="n">Masa gema kembali (s)</th></tr></thead><tbody>'+
'<tr><td>A: Dekat pantai</td><td class="n">0.02</td></tr>'+
'<tr><td>B: Selat</td><td class="n">0.08</td></tr>'+
'<tr><td>C: Laut dalam</td><td class="n">2.0</td></tr>'+
'<tr><td>D: Kawasan kapal karam</td><td class="n">0.05 dan 0.08</td></tr>'+
'</tbody></table></div><p class="qnote">Sebuah kapal menghantar denyut bunyi ke dasar laut. Laju bunyi dalam air laut = 1500 m/s. Kedalaman = (laju &times; masa) &divide; 2.</p>';

const T_BAHAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bahan dinding</th>'+
'<th class="n">Bunyi diserap (%)</th><th class="n">Kos semeter persegi (RM)</th><th>Tahan api?</th></tr></thead><tbody>'+
'<tr><td>Dinding simen dicat</td><td class="n">2</td><td class="n">0</td><td>Ya</td></tr>'+
'<tr><td>Panel span poliuretana</td><td class="n">70</td><td class="n">25</td><td>Tidak</td></tr>'+
'<tr><td>Panel gentian mineral</td><td class="n">80</td><td class="n">45</td><td>Ya</td></tr>'+
'<tr><td>Kotak telur kertas</td><td class="n">15</td><td class="n">2</td><td>Tidak</td></tr>'+
'</tbody></table></div><p class="qnote">Pilihan untuk bilik muzik sekolah yang terlalu bergema. Data anggaran untuk bunyi frekuensi sederhana.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bilik Muzik", sk:"10.1 / 10.2 Ciri gelombang bunyi", lampiran:"amplitud",
 kadNama:"Getaran", kadEm:"\u{1F3B8}", kadFakta:"Semua bunyi dihasilkan oleh getaran, sama ada tali gitar, kulit gendang atau pita suara.",
 bosKadNama:"Balang Vakum", bosKadEm:"\u{1F514}", bosKadFakta:"Loceng di dalam balang vakum tidak kedengaran walaupun ia masih bergetar, kerana bunyi memerlukan medium.",
 soalan:[
 {j:"pilih",t:"Bunyi dihasilkan oleh:",p:["Getaran","Cahaya","Haba","Magnet"],b:0,u:"Objek yang bergetar menggetarkan zarah medium di sekelilingnya."},
 {j:"pilih",t:"Bunyi TIDAK boleh merambat melalui:",p:["Vakum","Udara","Air","Keluli"],b:0,u:"Bunyi memerlukan medium."},
 {j:"pilih",t:"Unit S.I. bagi frekuensi ialah:",p:["Hertz (Hz)","Desibel (dB)","Meter (m)","Saat (s)"],b:0,u:"1 Hz = satu getaran sesaat."},
 {j:"pilih",t:"Kelangsingan bunyi bergantung pada:",p:["Frekuensi","Amplitud","Medium","Suhu"],b:0,u:"Frekuensi tinggi menghasilkan bunyi langsing."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kenyaringan bunyi bergantung pada:",p:["Amplitud","Frekuensi","Warna","Jisim"],b:0,u:"Amplitud besar menghasilkan bunyi nyaring."},
 {j:"pilih",t:"Bunyi merambat paling laju dalam:",p:["Keluli","Air","Udara","Vakum"],b:0,u:"Zarah pepejal paling rapat."},
 {j:"pilih",t:"Julat pendengaran manusia ialah kira-kira:",p:["20 Hz hingga 20 000 Hz","2 Hz hingga 200 Hz","200 Hz hingga 2 000 000 Hz","0 Hz hingga 20 Hz"],b:0,u:"Bunyi di atas 20 000 Hz dipanggil ultrasonik."},
 {j:"banyak",t:"Pilih SEMUA permukaan yang menyerap bunyi dengan baik.",p:["Langsir tebal","Karpet","Span","Dinding jubin","Cermin kaca"],b:[0,1,2],u:"Permukaan keras dan licin memantulkan bunyi."}],
 bos:{j:"pilih",t:"Bunyi yang dipantulkan kembali dan didengar semula dipanggil:",p:["Gema","Getaran","Frekuensi","Resonans"],b:0,u:"Gema jelas kedengaran di gua atau dewan kosong."}},

{n:2, tempat:"Pentas Orkestra", sk:"10.2 / 10.3 Kenyaringan, kelangsingan dan pantulan bunyi", lampiran:"gema",
 kadNama:"Kesan Doppler", kadEm:"\u{1F691}", kadFakta:"Bunyi siren ambulans kedengaran lebih langsing ketika menghampiri dan lebih rendah selepas melepasi kita.",
 bosKadNama:"Ekolokasi", bosKadEm:"\u{1F987}", bosKadFakta:"Kelawar menghasilkan bunyi ultrasonik dan mendengar gemanya untuk mengesan serangga dalam gelap.",
 soalan:[
 {j:"pilih",t:"Tali gitar yang dipetik dengan lebih kuat menghasilkan bunyi yang:",p:["Lebih nyaring","Lebih langsing","Lebih rendah","Lebih perlahan"],b:0,u:"Amplitud getaran bertambah."},
 {j:"pilih",t:"Tali gitar yang lebih pendek menghasilkan bunyi yang lebih:",p:["Langsing","Nyaring","Lembut","Rendah"],b:0,u:"Tali pendek bergetar dengan frekuensi lebih tinggi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah dewan kosong lebih bergema daripada dewan yang penuh dengan orang?",p:["Kurang permukaan lembut menyerap bunyi","Udara dalam dewan kosong lebih tumpat","Bunyi bergerak lebih laju dalam dewan kosong","Dinding menghasilkan bunyi sendiri"],b:0,u:"Badan dan pakaian manusia menyerap bunyi."},
 {j:"pilih",t:"Siren ambulans kedengaran semakin langsing apabila menghampiri. Fenomena ini dipanggil:",p:["Kesan Doppler","Gema","Resonans","Sonar"],b:0,u:"Frekuensi yang didengar bertambah apabila sumber menghampiri."},
 {j:"pilih",t:"Doktor menggunakan ultrabunyi untuk melihat fetus kerana:",p:["Ia selamat dan dipantulkan tisu","Ia menggunakan sinar-X yang kuat","Ia boleh didengar oleh ibu","Ia memanaskan fetus"],b:0,u:"Gema ultrasonik membentuk imej tanpa sinaran berbahaya."},
 {j:"pilih",t:"Bunyi kereta api yang jauh sampai lebih cepat melalui landasan keluli berbanding melalui udara. Mengapa?",p:["Bunyi lebih laju dalam pepejal","Keluli mengubah bunyi kepada cahaya","Bunyi tidak boleh melalui udara langsung","Landasan menghasilkan bunyinya sendiri"],b:0,u:"Zarah dalam pepejal rapat, jadi getaran dipindahkan dengan lebih cepat. Jangan sekali-kali mendekati landasan untuk menguji perkara ini."},
 {j:"pilih",t:"Gajah berkomunikasi menggunakan bunyi berfrekuensi di bawah 20 Hz. Bunyi ini dipanggil:",p:["Infrasonik","Ultrasonik","Gema","Frekuensi audio"],b:0,u:"Manusia tidak dapat mendengarnya."},
 {j:"pilih",t:"Alat yang membantu warga emas yang kurang pendengaran ialah:",p:["Alat bantu pendengaran","Kanta pembesar","Cermin cekung","Termometer digital"],b:0,u:"Alat itu menguatkan bunyi yang masuk ke telinga."}],
 bos:{j:"banyak",t:"Pilih SEMUA aplikasi pantulan gelombang bunyi.",p:["Sonar untuk mengesan kedalaman laut","Ultrabunyi untuk memeriksa fetus","Ekolokasi kelawar","Periskop untuk melihat dari kapal selam","Kanta cermin mata untuk rabun jauh"],b:[0,1,2],u:"Periskop dan kanta menggunakan cahaya, bukan bunyi."}},

{n:3, tempat:"Makmal Osiloskop", sk:"10.2 Mentafsir frekuensi dan amplitud", lampiran:"osilo",
 kadNama:"Osiloskop", kadEm:"\u{1F4FA}", kadFakta:"Osiloskop memaparkan bunyi sebagai gelombang supaya frekuensi dan amplitudnya boleh dibandingkan.",
 bosKadNama:"Ultrasonik", bosKadEm:"\u{1F415}", bosKadFakta:"Wisel anjing menghasilkan bunyi ultrasonik yang boleh didengar anjing tetapi tidak oleh manusia.",
 soalan:[
 {j:"pilih",t:"Bunyi manakah paling nyaring?",p:["R","P","Q","S"],b:0,u:"R mempunyai amplitud paling besar, 4 petak."},
 {j:"pilih",t:"Bunyi manakah paling langsing antara yang boleh didengar manusia?",p:["Q","P","R","S"],b:0,u:"Q ialah 512 Hz; S tidak dapat didengar."},
 {j:"pilih",t:"Bunyi P dan R mempunyai frekuensi sama. Apakah beza yang didengar?",p:["R lebih nyaring","R lebih langsing","P lebih nyaring","Tiada beza langsung"],b:0,u:"Kelangsingan sama, tetapi amplitud R lebih besar."},
 {j:"pilih",t:"Bunyi P dan Q mempunyai amplitud sama. Apakah beza yang didengar?",p:["Q lebih langsing","Q lebih nyaring","P lebih langsing","Tiada beza langsung"],b:0,u:"Q mempunyai frekuensi dua kali ganda P."},
 {j:"pilih",t:"Mengapakah bunyi S tidak dapat didengar oleh manusia?",p:["Frekuensinya melebihi 20 000 Hz","Amplitudnya terlalu kecil","Ia tidak bergetar langsung","Ia merambat dalam vakum"],b:0,u:"S ialah bunyi ultrasonik."},
 {j:"pilih",t:"Haiwan manakah paling mungkin dapat mendengar bunyi S?",p:["Kelawar","Gajah","Ikan emas","Siput"],b:0,u:"Kelawar menggunakan ultrasonik untuk ekolokasi."},
 {j:"nombor",t:"Berapa kali ganda frekuensi Q berbanding P?",b:2,tol:0.05,suf:"kali",u:"512 ÷ 256 = 2."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL berdasarkan jadual.",p:["P dan R sama kelangsingan","P dan Q sama kenyaringan","S ialah bunyi ultrasonik","R lebih langsing daripada P","Q paling nyaring"],b:[0,1,2],u:"R sama langsing dengan P kerana frekuensinya sama, dan R paling nyaring."}],
 bos:{j:"pilih",t:"Pemain seruling meniup lebih kuat tanpa mengubah jari. Paparan osiloskop akan menunjukkan:",p:["Gelombang lebih tinggi","Gelombang lebih rapat, tinggi sama","Gelombang lebih rendah dan jarang","Tiada gelombang langsung"],b:0,u:"Tiupan kuat menambah amplitud; kedudukan jari menentukan frekuensi."}},

{n:4, tempat:"Kapal Penyelidikan", sk:"10.3 Menganalisis aplikasi sonar", lampiran:"sonar",
 kadNama:"Sonar", kadEm:"\u{1F6A2}", kadFakta:"Sonar menghantar denyut bunyi ke dalam air dan mengukur masa gema kembali untuk mengira jarak.",
 bosKadNama:"Nelayan Moden", bosKadEm:"\u{1F3A3}", bosKadFakta:"Nelayan menggunakan pengesan ikan sonar untuk mengesan kumpulan ikan di bawah bot.",
 soalan:[
 {j:"nombor",t:"Berapakah kedalaman laut di lokasi A, dalam meter?",b:15,tol:0.05,suf:"m",u:"(1500 × 0.02) ÷ 2 = 15 m."},
 {j:"nombor",t:"Berapakah kedalaman laut di lokasi B, dalam meter?",b:60,tol:0.5,suf:"m",u:"(1500 × 0.08) ÷ 2 = 60 m."},
 {j:"nombor",t:"Berapakah kedalaman laut di lokasi C, dalam meter?",b:1500,tol:0.5,suf:"m",u:"(1500 × 2.0) ÷ 2 = 1500 m."},
 {j:"pilih",t:"Mengapakah jumlah laju × masa perlu dibahagi dua?",p:["Bunyi pergi ke dasar dan kembali","Bunyi bergerak separuh laju dalam air","Kapal bergerak semasa bunyi dihantar","Dasar laut menyerap separuh bunyi"],b:0,u:"Masa yang direkod ialah masa perjalanan pergi dan balik."},
 {j:"pilih",t:"Di lokasi D, dua gema diterima. Penjelasan paling munasabah?",p:["Gema dari bangkai kapal, kemudian dasar laut","Kedua-duanya dari dasar laut pada masa berbeza","Bunyi terbahagi dua kerana air terlalu sejuk","Kapal menghantar dua bunyi serentak"],b:0,u:"Objek yang lebih dekat memantulkan bunyi lebih awal."},
 {j:"nombor",t:"Berapakah kedalaman bangkai kapal di lokasi D, dalam meter?",b:37.5,tol:0.05,suf:"m",u:"(1500 × 0.05) ÷ 2 = 37.5 m."},
 {j:"pilih",t:"Kapal selam bergerak ke lokasi C. Maklumat daripada sonar paling berguna untuk:",p:["Mengelak berlanggar","Mengukur suhu air laut","Menentukan warna ikan","Mengira masa matahari terbenam"],b:0,u:"Sonar mengukur jarak ke objek dan dasar."},
 {j:"pilih",t:"Jika laju bunyi dalam air diambil sebagai 340 m/s secara tersilap, kedalaman yang dikira akan:",p:["Terlalu kecil","Terlalu besar","Sama sahaja","Menjadi sifar"],b:0,u:"340 m/s ialah laju bunyi di udara; bunyi jauh lebih laju dalam air."}],
 bos:{j:"pilih",t:"Pelabuhan mahu memastikan kapal besar yang memerlukan kedalaman 20 m boleh berlabuh. Lokasi manakah sesuai?",p:["B","A","A dan B","Tiada"],b:0,u:"A hanya 15 m; B sedalam 60 m."}},

{n:5, tempat:"Bilik Muzik Baharu", sk:"10.1 / 10.3 Menilai bahan penyerap bunyi", lampiran:"bahan",
 kadNama:"Akustik", kadEm:"\u{1F3B5}", kadFakta:"Dewan konsert direka dengan permukaan yang menyerap dan memantulkan bunyi secara seimbang supaya muzik jelas didengar.",
 bosKadNama:"Pencemaran Bunyi", bosKadEm:"\u{1F4E2}", bosKadFakta:"Bunyi yang sangat kuat untuk tempoh lama boleh merosakkan pendengaran secara kekal.",
 soalan:[
 {j:"pilih",t:"Bahan manakah menyerap bunyi paling banyak?",p:["Panel gentian mineral","Panel span poliuretana","Kotak telur kertas","Dinding simen dicat"],b:0,u:"80% bunyi diserap."},
 {j:"pilih",t:"Mengapakah bilik muzik bergema dengan dinding simen dicat?",p:["Permukaan keras memantulkan bunyi","Simen menghasilkan bunyi tambahan","Cat menyerap semua bunyi","Simen memperlahankan bunyi dengan banyak"],b:0,u:"Hanya 2% diserap."},
 {j:"pilih",t:"Seorang guru mencadangkan kotak telur kerana paling murah. Nilaikan cadangan itu.",p:["Kurang sesuai; serapan rendah, tidak tahan api","Sangat sesuai kerana ia menyerap paling banyak bunyi","Sesuai kerana ia tahan api","Kurang sesuai kerana ia terlalu berat"],b:0,u:"Hanya 15% diserap, dan bahan mudah terbakar berbahaya di sekolah."},
 {j:"pilih",t:"Mengapakah span poliuretana, walaupun menyerap banyak bunyi, perlu dipertimbangkan dengan teliti?",p:["Ia tidak tahan api","Ia terlalu mahal","Ia memantulkan bunyi","Ia tiada kesan"],b:0,u:"Keselamatan kebakaran penting di bilik yang digunakan ramai murid."},
 {j:"nombor",t:"Berapakah kos memasang panel gentian mineral seluas 40 m², dalam RM?",b:1800,tol:0.5,suf:"RM",u:"40 × 45 = RM1800."},
 {j:"pilih",t:"Sekolah mempunyai bajet RM1000 untuk 40 m². Pilihan paling wajar?",p:["Span poliuretana","Gentian mineral walaupun melebihi bajet","Kotak telur untuk seluruh bilik","Tiada perubahan pada dinding"],b:0,u:"40 × 25 = RM1000; gentian mineral RM1800 melebihi bajet."},
 {j:"pilih",t:"Jika bajet ditambah kepada RM2000, pilihan paling wajar ialah:",p:["Panel gentian mineral","Kotak telur kertas","Span poliuretana","Dinding simen dicat semula"],b:0,u:"Paling banyak menyerap bunyi dan tahan api."},
 {j:"pilih",t:"Selain panel dinding, cara murah mengurangkan gema di bilik muzik ialah:",p:["Pasang karpet dan langsir tebal","Tambah cermin besar pada dinding","Cat dinding dengan cat berkilat","Buang semua perabot lembut"],b:0,u:"Permukaan lembut menyerap bunyi."}],
 bos:{j:"pilih",t:"Pengetua perlu memilih bahan untuk dewan besar yang digunakan untuk perhimpunan dan konsert. Keputusan paling wajar?",p:["Gentian mineral pada sebahagian dinding","Span di semua permukaan termasuk lantai","Dinding simen tanpa sebarang rawatan","Kotak telur di semua dinding"],b:0,u:"Dewan memerlukan keseimbangan antara serapan dan pantulan, serta bahan tahan api."}},

{n:6, tempat:"Studio Inovasi Bunyi", sk:"10.2 / 10.3 Mereka cipta menggunakan konsep bunyi",
 kadNama:"Stetoskop", kadEm:"\u{1FA7A}", kadFakta:"Stetoskop menyalurkan bunyi jantung melalui tiub sehingga doktor dapat mendengarnya dengan jelas.",
 bosKadNama:"Tongkat Pintar", bosKadEm:"\u{1F9AF}", bosKadFakta:"Tongkat pintar untuk orang cacat penglihatan menggunakan sensor ultrasonik untuk mengesan halangan di hadapan.",
 soalan:[
 {j:"pilih",t:"Awak mereka alat muzik daripada botol kaca berisi air. Cara menghasilkan nada lebih langsing apabila botol diketuk?",p:["Kurangkan air dalam botol","Tambah air ke dalam botol","Guna botol yang lebih besar","Ketuk botol dengan lebih kuat"],b:0,u:"Apabila botol diketuk, kurang air menjadikan getaran lebih cepat, jadi nadanya lebih langsing. Jika botol ditiup, kesannya terbalik. Ketukan kuat hanya menambah kenyaringan."},
 {j:"pilih",t:"Awak mereka telefon tin untuk bermain. Mengapakah tali perlu tegang?",p:["Getaran merambat baik melalui tali tegang","Tali kendur menghasilkan bunyi lebih nyaring","Tali tegang menyerap semua bunyi","Tin memerlukan tali yang panjang"],b:0,u:"Tali kendur menyerap getaran."},
 {j:"pilih",t:"Awak mereka tongkat pintar untuk orang cacat penglihatan. Sensor paling sesuai?",p:["Sensor ultrasonik yang mengukur gema","Sensor cahaya yang mengukur warna","Termometer yang mengukur suhu","Kompas yang mengukur arah"],b:0,u:"Masa gema memberi jarak ke halangan."},
 {j:"pilih",t:"Rumah awak berhampiran jalan raya yang bising. Cadangan paling berkesan?",p:["Tanam pokok dan pasang langsir tebal","Buka semua tingkap sepanjang hari","Cat dinding luar dengan warna putih berkilat","Pasang jubin pada semua dinding"],b:0,u:"Pokok dan kain tebal menyerap bunyi."},
 {j:"pilih",t:"Awak mereka stetoskop ringkas daripada corong dan tiub. Ciri paling penting?",p:["Tiub tertutup rapat","Tiub berlubang supaya udara segar masuk","Corong kecil sebesar hujung jari","Tiub sepanjang sepuluh meter"],b:0,u:"Bunyi disalurkan terus ke telinga melalui udara dalam tiub."},
 {j:"pilih",t:"Awak mereka penggera kecemasan untuk murid di padang yang luas. Bunyi paling sesuai?",p:["Nyaring dan mudah didengar","Sangat perlahan supaya tidak menakutkan","Ultrasonik supaya tidak bising","Infrasonik supaya bergetar di tanah"],b:0,u:"Bunyi mesti berada dalam julat pendengaran dan cukup kuat."},
 {j:"pilih",t:"Awak mereka gitar kotak daripada bahan terpakai. Cara menghasilkan nada berbeza pada satu tali?",p:["Tekan tali pada panjang berbeza","Warnakan tali dengan warna lain","Letak kotak di bawah matahari","Guna kotak yang lebih berat"],b:0,u:"Tali lebih pendek menghasilkan frekuensi lebih tinggi."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada penyerap bunyi rekaan awak berkesan?",p:["Ukur desibel sebelum dan selepas","Tanya rakan sama ada bilik itu cantik","Timbang bahan penyerap","Ukur suhu bilik"],b:0,u:"Meter bunyi atau aplikasi telefon memberi bacaan dalam desibel."}],
 bos:{j:"buka",
  t:"Kelas awak terletak di sebelah bengkel yang bising sehingga murid sukar memberi tumpuan. Reka satu penyelesaian menggunakan pengetahuan gelombang bunyi.",
  arahan:"Terangkan punca masalah, konsep bunyi yang digunakan (penyerapan, pantulan, medium), bahan yang dipilih beserta sebabnya termasuk keselamatan kebakaran, cara mengukur keberkesanan (contohnya bacaan desibel), serta kos dan kesan kepada kelas lain.",
  u:"Jawapan TP6 yang kukuh memilih bahan penyerap yang selamat berdasarkan data, menerangkan pantulan dan penyerapan bunyi, dan merancang pengukuran desibel."}}
];

module.exports = {
  id:"t2b10", tingkatan:2, kod:"10.0 Gelombang Bunyi",
  tajuk:"Laluan Bunyi",
  subtajuk:"Sains Ting. 2 · Bab 10 Gelombang Bunyi",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali ciri gelombang bunyi, unit frekuensi dan julat pendengaran manusia. Langkah seterusnya ialah menjelaskan kaitan frekuensi dan amplitud dengan bunyi yang didengar.",
   2:"{n} memahami kenyaringan, kelangsingan, gema dan kesan Doppler serta dapat menjelaskannya. Perlu lebih banyak latihan mentafsir paparan osiloskop.",
   3:"{n} boleh mentafsir data frekuensi dan amplitud untuk membandingkan bunyi. Galakkan menggunakan istilah kenyaringan dan kelangsingan dengan tepat.",
   4:"{n} mampu menganalisis data sonar untuk mengira kedalaman dan mengenal pasti objek di dasar laut. Seterusnya latih menilai bahan penyerap bunyi.",
   5:"{n} dapat menilai bahan penyerap bunyi berdasarkan keberkesanan, kos dan keselamatan. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta penyelesaian masalah bunyi yang kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Gelombang Bunyi. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ amplitud:R_AMPLITUD, gema:R_GEMA, osilo:T_OSILO, sonar:T_SONAR, bahan:T_BAHAN },
  aras:ARAS
};
