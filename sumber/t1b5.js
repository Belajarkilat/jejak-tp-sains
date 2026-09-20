/* Sumber kandungan — Sains KSSM Tingkatan 1, Bidang 5.0 Jirim.
   Jalankan `node bina.js t1b5` untuk menyemak dan menghasilkan bank-t1b5.js.

   Standard Prestasi disalin daripada DSKP KSSM Sains Tingkatan 1, muka 64
   (Tema Penerokaan Unsur dalam Alam). DSKP menulis satu Standard Prestasi
   untuk Bab 5 hingga 7 dengan senarai "jirim/jadual berkala/udara"; di sini
   hanya bahagian bab ini dikekalkan. Perkataan "dalam" yang tertinggal
   pada TP5 DSKP ditambah.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai jirim.",
"Memahami jirim serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan jirim untuk menerangkan kejadian atau fenomena alam dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai struktur jirim dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai jirim dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekabentuk persembahan pelbagai media/visual/folio/poster/main peranan/drama secara kreatif dan inovatif dengan menggunakan pengetahuan dan kemahiran sains mengenai jirim dalam konteks penyelesaian masalah dan membuat keputusan dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_PANAS_H1 = {
  "jenis": "graf",
  "setiap": 2,
  "grid": 6,
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
    12,
    13,
    14
  ],
  "y": null,
  "yMin": -20,
  "yMaks": 100,
  "siri": [
    {
      "label": "Suhu bahan",
      "warna": "merah",
      "y": [
        -20,
        -10,
        0,
        0,
        0,
        0,
        12,
        34,
        56,
        78,
        100,
        100,
        100,
        100,
        100
      ]
    }
  ],
  "xLabel": "Masa pemanasan (minit)",
  "kapsyen": "Rajah 1 · Ketulan ais dipanaskan sehingga mendidih.",
  "alt": "Graf suhu melawan masa: suhu naik dari negatif dua puluh ke sifar darjah, kekal sifar antara minit dua dan minit enam, naik semula ke seratus darjah, kemudian kekal seratus"
};

const R_ZARAH = {
  "jenis": "struktur", "mod": "label", "tinggiLukis": 160,
  "bahagian": [
    { "label": "Bekas P", "bentuk": "kotak", "x": 50, "y": 14, "l": 88, "t": 24, "bulat": 3, "isi": "kertas2", "anchorX": 93, "anchorY": 14 },
    { "bentuk": "bulat", "x": 22, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 38, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 54, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 70, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 30, "y": 19, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 46, "y": 19, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 62, "y": 19, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "label": "Bekas Q", "bentuk": "kotak", "x": 50, "y": 50, "l": 88, "t": 24, "bulat": 3, "isi": "kertas2", "anchorX": 93, "anchorY": 50 },
    { "bentuk": "bulat", "x": 20, "y": 45, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 40, "y": 47, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 58, "y": 44, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 30, "y": 55, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 52, "y": 56, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 72, "y": 53, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "label": "Bekas R", "bentuk": "kotak", "x": 50, "y": 86, "l": 88, "t": 24, "bulat": 3, "isi": "kertas2", "anchorX": 93, "anchorY": 86 },
    { "bentuk": "bulat", "x": 16, "y": 80, "r": 4, "isi": "merah", "garis": "merah" },
    { "bentuk": "bulat", "x": 48, "y": 90, "r": 4, "isi": "merah", "garis": "merah" },
    { "bentuk": "bulat", "x": 80, "y": 81, "r": 4, "isi": "merah", "garis": "merah" }
  ],
  "kapsyen": "Rajah 1 · Susunan zarah dalam tiga bekas tertutup yang sama saiz.",
  "alt": "Tiga bekas sama saiz: bekas P zarah tersusun rapat dan teratur, bekas Q zarah rapat tetapi tidak teratur, bekas R hanya tiga zarah yang berjauhan"
};


const T_TAKAT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bahan</th>'+
'<th class="n">Takat lebur (&deg;C)</th><th class="n">Takat didih (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">&minus;218</td><td class="n">&minus;183</td></tr>'+
'<tr><td>Q</td><td class="n">&minus;39</td><td class="n">357</td></tr>'+
'<tr><td>R</td><td class="n">80</td><td class="n">218</td></tr>'+
'<tr><td>S</td><td class="n">0</td><td class="n">100</td></tr>'+
'</tbody></table></div><p class="qnote">Suhu bilik diambil sebagai 27 &deg;C. Sesuatu bahan ialah pepejal di bawah takat leburnya, cecair antara takat lebur dan takat didih, dan gas di atas takat didihnya.</p>';

const T_PANAS =
'<div class="scrollx"><table class="datatable"><thead><tr><th class="n">Masa (min)</th>'+
'<th class="n">0</th><th class="n">2</th><th class="n">4</th><th class="n">6</th><th class="n">8</th><th class="n">10</th><th class="n">12</th><th class="n">14</th></tr></thead><tbody>'+
'<tr><td>Suhu (&deg;C)</td><td class="n">&minus;10</td><td class="n">0</td><td class="n">0</td><td class="n">0</td><td class="n">40</td><td class="n">80</td><td class="n">100</td><td class="n">100</td></tr>'+
'</tbody></table></div><p class="qnote">Ketulan ais dipanaskan secara berterusan dengan kadar yang sama di dalam bikar. Data rekaan.</p>';

const T_RESAP =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Ujian</th>'+
'<th>Bahan</th><th>Medium</th><th>Masa untuk sampai 5 cm</th></tr></thead><tbody>'+
'<tr><td>1</td><td>Hablur kuprum(II) sulfat</td><td>Air (cecair)</td><td>Kira-kira 1 hari</td></tr>'+
'<tr><td>2</td><td>Hablur kuprum(II) sulfat</td><td>Agar-agar (pepejal)</td><td>Kira-kira 5 hari</td></tr>'+
'<tr><td>3</td><td>Minyak wangi</td><td>Udara (gas)</td><td>Kurang daripada 1 minit</td></tr>'+
'</tbody></table></div><p class="qnote">Ujian 1 dan 2 dijalankan di dalam tabung uji tertutup pada suhu bilik. Ujian 3 dijalankan di dalam bilik yang tertutup. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Dapur Rumah", sk:"5.1 / 5.2 Jirim dan tiga keadaan jirim", lampiran:"lengkung",
 kadNama:"Zarah", kadEm:"\u{269B}", kadFakta:"Setitik air mengandungi lebih daripada satu sekstilion (10²¹) zarah air.",
 bosKadNama:"Ais Kering", bosKadEm:"\u{1F9CA}", bosKadFakta:"Ais kering ialah karbon dioksida pepejal. Ia terus bertukar menjadi gas tanpa menjadi cecair.",
 soalan:[
 {j:"pilih",t:"Jirim ialah apa-apa sahaja yang:",p:["Ada jisim dan memenuhi ruang","Boleh dilihat dengan mata kasar sahaja","Hanya wujud sebagai pepejal di Bumi","Boleh menghasilkan cahaya dan haba"],b:0,u:"Udara tidak kelihatan, tetapi ia jirim kerana mempunyai jisim dan memenuhi ruang."},
 {j:"pilih",t:"Antara berikut, yang manakah BUKAN jirim?",p:["Cahaya","Udara","Air","Batu"],b:0,u:"Cahaya ialah satu bentuk tenaga; ia tiada jisim."},
 {j:"pilih",t:"Semua jirim terdiri daripada:",p:["Zarah-zarah kecil yang diskrit","Satu bongkah yang berterusan","Tenaga cahaya dan haba","Cecair yang sangat pekat"],b:0,u:"Zarah terlalu kecil untuk dilihat, tetapi ada ruang di antaranya."},
 {j:"pilih",t:"Keadaan jirim yang mempunyai bentuk dan isi padu tetap ialah:",p:["Pepejal","Cecair","Gas","Wap"],b:0,u:"Zarah pepejal tersusun rapat dan hanya bergetar di kedudukan tetap."},
 {j:"pilih",t:"Perubahan keadaan daripada cecair kepada pepejal dipanggil:",p:["Pembekuan","Peleburan","Kondensasi","Penyejatan"],b:0,u:"Haba dibebaskan semasa pembekuan."},
 {j:"pilih",t:"Titisan air terbentuk pada dinding luar gelas berisi air sejuk. Proses ini dipanggil:",p:["Kondensasi","Penyejatan","Peleburan","Pemejalwapan"],b:0,u:"Wap air dalam udara menyejuk dan bertukar menjadi cecair."},
 {j:"pilih",t:"Berdasarkan Rajah 1, suhu bahan kekal pada 0 °C antara minit 2 dan minit 6. Apakah yang berlaku ketika itu?",p:["Ais sedang melebur","Suhu dapur sedang turun perlahan-lahan","Haba berhenti dibekalkan kepada bahan itu","Air sedang bertukar menjadi wap sepenuhnya"],b:0,u:"Semasa melebur, haba digunakan untuk merenggangkan zarah, bukan untuk menaikkan suhu."},
 {j:"banyak",t:"Pilih SEMUA contoh jirim.",p:["Udara di dalam belon","Wap air","Sebatang pensel","Bunyi guruh","Haba matahari"],b:[0,1,2],u:"Bunyi dan haba ialah tenaga, bukan jirim."}],
 bos:{j:"pilih",t:"Ubat gegat di dalam almari semakin mengecil tanpa meninggalkan cecair. Proses ini dipanggil:",p:["Pemejalwapan","Pendidihan","Peleburan","Kondensasi"],b:0,u:"Pepejal bertukar terus menjadi gas."}},

{n:2, tempat:"Makmal Zarah", sk:"5.2 Teori kinetik dan perubahan keadaan jirim", lampiran:"zarah",
 kadNama:"Teori Kinetik", kadEm:"\u{1F3C3}", kadFakta:"Menurut teori kinetik, zarah jirim sentiasa bergerak. Semakin tinggi suhu, semakin laju zarah bergerak.",
 bosKadNama:"Takat Didih", bosKadEm:"\u{2668}", bosKadFakta:"Di puncak Gunung Kinabalu, air mendidih di bawah 100 °C kerana tekanan udara lebih rendah.",
 soalan:[
 {j:"pilih",t:"Mengapakah gas mudah dimampatkan?",p:["Zarahnya berjauhan","Zarahnya sangat berat","Zarahnya tidak bergerak","Zarahnya tersusun rapat"],b:0,u:"Zarah gas boleh ditolak lebih rapat."},
 {j:"pilih",t:"Mengapakah cecair mengambil bentuk bekasnya?",p:["Zarahnya boleh menggelongsor antara satu sama lain","Zarahnya tersusun dalam kedudukan yang tetap dan teratur","Zarahnya berjauhan dan bergerak bebas ke semua arah","Zarahnya tidak mempunyai sebarang daya tarikan langsung"],b:0,u:"Zarah cecair rapat tetapi tidak dalam kedudukan tetap."},
 {j:"pilih",t:"Apakah yang berlaku kepada zarah semasa ais melebur?",p:["Zarah menyerap haba dan bergerak lebih bebas","Zarah membebaskan haba dan menjadi lebih rapat","Zarah menjadi lebih besar apabila dipanaskan","Zarah hilang sedikit demi sedikit ke udara"],b:0,u:"Haba memberi tenaga kepada zarah untuk meninggalkan kedudukan tetap."},
 {j:"pilih",t:"Mengapakah suhu air kekal 100 °C semasa mendidih walaupun terus dipanaskan?",p:["Haba digunakan untuk mengatasi daya tarikan antara zarah","Termometer tidak dapat membaca suhu melebihi 100 °C","Air kehilangan haba ke udara secepat ia menerima haba","Penunu mengurangkan nyalaannya secara automatik"],b:0,u:"Tenaga haba digunakan untuk menukar keadaan, bukan menaikkan suhu."},
 {j:"pilih",t:"Beza utama antara penyejatan dan pendidihan ialah penyejatan:",p:["Berlaku pada sebarang suhu di permukaan cecair","Hanya berlaku pada suhu 100 °C","Berlaku di seluruh cecair dengan gelembung","Membebaskan haba ke persekitaran"],b:0,u:"Pendidihan berlaku pada takat didih di seluruh cecair."},
 {j:"pilih",t:"Sebiji ais berjisim 50 g melebur sepenuhnya. Berapakah jisim air yang terhasil?",p:["50 g","Kurang daripada 50 g","Lebih daripada 50 g","Tidak dapat ditentukan"],b:0,u:"Jisim kekal semasa perubahan fizik."},
 {j:"pilih",t:"Mengapakah kain yang dijemur cepat kering pada hari panas dan berangin?",p:["Penyejatan berlaku dengan lebih cepat","Air di dalam kain mendidih pada 100 °C","Angin menukar air menjadi pepejal","Cahaya matahari memusnahkan air"],b:0,u:"Suhu tinggi dan angin mempercepat penyejatan."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun bekas mengikut jarak antara zarah, bermula daripada yang PALING rapat.",p:["Bekas P","Bekas Q","Bekas R"],b:[0,1,2],u:"Zarah dalam P tersusun rapat dan teratur, Q rapat tetapi bebas bergerak, R paling renggang."}],
 bos:{j:"banyak",t:"Pilih SEMUA perubahan keadaan yang MENYERAP haba.",p:["Peleburan","Pendidihan","Penyejatan","Pembekuan","Kondensasi"],b:[0,1,2],u:"Pembekuan dan kondensasi membebaskan haba."}},

{n:3, tempat:"Kedai Kimia", sk:"5.1 / 5.2 Mengelaskan bahan mengikut takat lebur dan takat didih", lampiran:"takat",
 kadNama:"Merkuri", kadEm:"\u{1F321}", kadFakta:"Merkuri ialah satu-satunya logam yang berada dalam keadaan cecair pada suhu bilik.",
 bosKadNama:"Naftalena", bosKadEm:"\u{1F9F4}", bosKadFakta:"Naftalena ialah bahan dalam ubat gegat. Takat leburnya ialah 80 °C.",
 soalan:[
 {j:"pilih",t:"Pada suhu bilik (27 °C), bahan P berada dalam keadaan:",p:["Gas","Pepejal","Cecair","Separa pepejal"],b:0,u:"27 °C lebih tinggi daripada takat didih P (−183 °C)."},
 {j:"pilih",t:"Pada suhu bilik, bahan Q berada dalam keadaan:",p:["Cecair","Pepejal","Gas","Plasma"],b:0,u:"27 °C berada antara −39 °C dan 357 °C."},
 {j:"pilih",t:"Pada suhu bilik, bahan R berada dalam keadaan:",p:["Pepejal","Cecair","Gas","Wap"],b:0,u:"27 °C lebih rendah daripada takat lebur R (80 °C)."},
 {j:"pilih",t:"Bahan manakah paling mungkin air?",p:["S","P","Q","R"],b:0,u:"Air melebur pada 0 °C dan mendidih pada 100 °C."},
 {j:"pilih",t:"Bahan R dipanaskan hingga 150 °C. Keadaannya ialah:",p:["Cecair","Pepejal","Gas","Pepejal dan gas"],b:0,u:"150 °C berada antara 80 °C dan 218 °C."},
 {j:"pilih",t:"Bahan manakah akan menjadi pepejal di dalam peti sejuk beku (−18 °C)?",p:["S dan R","P dan Q","Q sahaja","P sahaja"],b:0,u:"S membeku pada 0 °C dan R pada 80 °C. Q hanya membeku di bawah −39 °C."},
 {j:"pilih",t:"Bahan manakah wujud sebagai cecair dalam julat suhu paling luas?",p:["Q","S","R","P"],b:0,u:"Q ialah cecair dari −39 °C hingga 357 °C, iaitu julat 396 °C."},
 {j:"banyak",t:"Pilih SEMUA sifat fizik jirim.",p:["Takat lebur","Keterlarutan dalam air","Kekonduksian haba","Pengaratan","Kebolehbakaran"],b:[0,1,2],u:"Pengaratan dan kebolehbakaran ialah sifat kimia."}],
 bos:{j:"pilih",t:"Sebuah termometer perlu mengukur suhu dari −20 °C hingga 110 °C. Bahan manakah sesuai sebagai cecair di dalamnya?",p:["Q","S","R","P"],b:0,u:"Hanya Q kekal cecair sepanjang julat itu. S membeku pada 0 °C."}},

{n:4, tempat:"Periuk Mendidih", sk:"5.2 Menganalisis data pemanasan", lampiran:"panas",
 kadNama:"Takat Lebur", kadEm:"\u{1F9CA}", kadFakta:"Ais tulen melebur pada 0 °C. Garam yang ditabur pada jalan bersalji menurunkan takat lebur ais.",
 bosKadNama:"Wap Panas", bosKadEm:"\u{1F4A8}", bosKadFakta:"Lecur akibat wap panas lebih teruk daripada air mendidih kerana wap membebaskan haba tambahan semasa terkondensasi di kulit.",
 soalan:[
 {j:"pilih",t:"Antara minit ke-2 hingga ke-6, suhu kekal pada 0 °C. Apakah yang sedang berlaku?",p:["Ais sedang melebur","Air sedang mendidih","Air sedang membeku","Ais sedang memejalwap"],b:0,u:"Suhu kekal semasa peleburan."},
 {j:"pilih",t:"Pada minit ke-12 dan ke-14, suhu kekal pada 100 °C. Apakah yang sedang berlaku?",p:["Air sedang mendidih","Ais sedang melebur","Air sedang terkondensasi","Termometer sudah rosak"],b:0,u:"100 °C ialah takat didih air."},
 {j:"pilih",t:"Pada minit ke-4, keadaan bahan di dalam bikar ialah:",p:["Ais dan air","Ais sahaja","Air sahaja","Air dan wap"],b:0,u:"Semasa peleburan, pepejal dan cecair wujud bersama."},
 {j:"nombor",t:"Berapakah kenaikan suhu dari minit ke-6 hingga ke-10, dalam °C?",b:80,tol:0.5,suf:"°C",u:"80 − 0 = 80 °C."},
 {j:"pilih",t:"Mengapakah suhu naik antara minit ke-6 hingga ke-12?",p:["Semua ais telah melebur, jadi haba menaikkan suhu air","Haba berhenti dibekalkan kepada bikar","Air mula membeku semula","Zarah air bergerak lebih perlahan"],b:0,u:"Tiada lagi ais yang perlu dileburkan."},
 {j:"pilih",t:"Jika pemanasan diteruskan hingga minit ke-20, apakah bacaan suhu paling mungkin?",p:["100 °C","140 °C","0 °C","200 °C"],b:0,u:"Suhu kekal pada takat didih selagi masih ada air yang mendidih."},
 {j:"pilih",t:"Jika jumlah ais digandakan, apakah yang paling mungkin berubah?",p:["Tempoh suhu kekal pada 0 °C lebih lama","Takat lebur naik kepada 10 °C","Takat didih turun kepada 50 °C","Suhu awal menjadi −20 °C"],b:0,u:"Lebih banyak ais memerlukan lebih banyak haba untuk dileburkan, tetapi takat lebur tidak berubah."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Suhu kekal semasa peleburan","Suhu kekal semasa pendidihan","Takat lebur ais ialah 0 °C","Suhu naik semasa ais melebur","Air mendidih pada 80 °C"],b:[0,1,2],u:"Suhu kekal 0 °C semasa peleburan, dan air mendidih pada 100 °C."}],
 bos:{j:"pilih",t:"Seorang murid mendakwa haba 'hilang' semasa minit ke-2 hingga ke-6 kerana suhu tidak naik. Nilaikan dakwaan itu.",p:["Salah; haba digunakan untuk menukar keadaan","Betul; haba keluar ke udara sepanjang tempoh itu","Betul; penunu padam seketika semasa tempoh itu","Salah; haba itu digunakan untuk menyejukkan ais"],b:0,u:"Haba memberi tenaga kepada zarah untuk meninggalkan kedudukan tetapnya."}},

{n:5, tempat:"Pameran Bau", sk:"5.2 Menilai kadar resapan dalam tiga keadaan jirim", lampiran:"resap",
 kadNama:"Resapan", kadEm:"\u{1F338}", kadFakta:"Bau durian boleh sampai ke seluruh rumah kerana zarah gas meresap dengan cepat melalui udara.",
 bosKadNama:"Pewangi Udara", bosKadEm:"\u{1F32C}", bosKadFakta:"Pewangi udara gel membebaskan bau secara perlahan kerana zarahnya meresap keluar dari pepejal lembut.",
 soalan:[
 {j:"susun",t:"Susun medium mengikut kadar resapan, bermula daripada yang PALING cepat.",p:["Udara (gas)","Air (cecair)","Agar-agar (pepejal)"],b:[0,1,2],u:"Ruang antara zarah dan kelajuan zarah paling besar dalam gas."},
 {j:"pilih",t:"Mengapakah resapan dalam agar-agar paling perlahan?",p:["Zarah pepejal tersusun rapat","Kuprum(II) sulfat tidak larut","Agar-agar terlalu sejuk","Agar-agar tiada zarah"],b:0,u:"Zarah kuprum(II) sulfat sukar bergerak di celah zarah yang rapat."},
 {j:"pilih",t:"Seorang murid mendakwa Ujian 3 membuktikan minyak wangi lebih cepat meresap daripada kuprum(II) sulfat. Nilaikan dakwaan itu.",p:["Tidak adil; bahan dan medium kedua-duanya berbeza","Adil, kerana jarak yang diukur sama iaitu 5 cm","Adil, kerana semua ujian dijalankan pada suhu bilik","Tidak adil, kerana minyak wangi lebih mahal"],b:0,u:"Untuk membandingkan medium, bahan yang meresap mesti sama."},
 {j:"pilih",t:"Mengapakah tabung uji dalam Ujian 1 dan 2 perlu ditutup?",p:["Supaya air tidak menyejat dan tiada gangguan luar","Supaya kuprum(II) sulfat tidak bertukar warna","Supaya cahaya tidak masuk ke dalam tabung","Supaya suhu naik dengan lebih cepat"],b:0,u:"Pergerakan udara dan penyejatan boleh menjejaskan keputusan."},
 {j:"pilih",t:"Cara paling baik untuk menguji kesan suhu ke atas kadar resapan?",p:["Ulang Ujian 1 dalam air pada suhu berbeza","Ulang Ujian 3 dengan pelbagai jenis minyak wangi","Bandingkan Ujian 1 dengan Ujian 3 sahaja","Guna agar-agar yang berlainan warna"],b:0,u:"Hanya suhu patut berubah; bahan dan medium dikekalkan."},
 {j:"pilih",t:"Sebuah kedai mahu pewangi yang tahan lama di dalam kereta. Pilihan paling wajar berdasarkan data?",p:["Pewangi gel","Semburan wangi","Minyak wangi terbuka","Serbuk wangi terbuka"],b:0,u:"Resapan perlahan dari pepejal lembut menjadikan bau tahan lebih lama."},
 {j:"pilih",t:"Mengapakah bau makanan dari dapur lebih cepat sampai apabila makanan panas?",p:["Zarah bergerak lebih laju pada suhu tinggi","Makanan panas mempunyai lebih banyak zarah","Udara panas menghalang bau keluar","Hidung lebih peka pada suhu tinggi"],b:0,u:"Tenaga kinetik zarah bertambah dengan suhu."},
 {j:"pilih",t:"Kebocoran gas memasak berbau di rumah. Tindakan paling selamat berdasarkan konsep resapan?",p:["Buka tingkap dan pintu, jangan hidupkan suis elektrik","Tutup semua tingkap supaya gas tidak meresap keluar","Hidupkan kipas angin untuk menyebarkan gas","Nyalakan mancis untuk mencari punca kebocoran"],b:0,u:"Gas perlu meresap keluar. Percikan api daripada suis boleh menyebabkan letupan."}],
 bos:{j:"pilih",t:"Guru mahu menunjukkan resapan dalam masa satu waktu kelas (40 minit). Pilihan paling praktikal?",p:["Titis pewarna makanan ke dalam air panas","Letak hablur kuprum(II) sulfat dalam agar-agar","Letak hablur kuprum(II) sulfat dalam air sejuk","Tanam hablur garam di dalam pasir kering"],b:0,u:"Resapan dalam cecair panas cukup cepat untuk diperhatikan dalam satu waktu kelas."}},

{n:6, tempat:"Bengkel Rekaan", sk:"5.1 / 5.2 Mereka bentuk menggunakan pengetahuan jirim",
 kadNama:"Peti Ais Tanah Liat", kadEm:"\u{1F3FA}", kadFakta:"Peti ais tanah liat (zeer) menyejukkan makanan tanpa elektrik melalui penyejatan air dari pasir basah.",
 bosKadNama:"Penyulingan Suria", bosKadEm:"\u{2600}", bosKadFakta:"Alat penyulingan suria menggunakan haba matahari untuk menyejatkan air kotor, kemudian mengkondensasikan wapnya menjadi air bersih.",
 soalan:[
 {j:"pilih",t:"Awak mereka bekas untuk menyejukkan minuman tanpa elektrik di pasar malam. Prinsip paling sesuai?",p:["Balut bekas dengan kain basah","Letak bekas di bawah matahari","Balut bekas dengan plastik hitam","Isi bekas dengan pasir kering"],b:0,u:"Penyejatan air dari kain menyerap haba daripada bekas."},
 {j:"pilih",t:"Awak mereka alat untuk mendapatkan air minuman daripada air laut di pulau. Proses yang perlu berlaku?",p:["Penyejatan, kemudian kondensasi","Pembekuan, kemudian peleburan","Peleburan, kemudian pemejalwapan","Kondensasi, kemudian penyejatan"],b:0,u:"Garam tertinggal apabila air menyejat; wap air kemudian dikondensasikan."},
 {j:"pilih",t:"Dalam alat penyulingan suria, permukaan manakah perlu sejuk supaya wap air bertukar menjadi titisan?",p:["Penutup lutsinar di atas","Dasar bekas air kotor yang hitam","Air laut di dalam bekas","Pasir di sekeliling alat"],b:0,u:"Wap air menyentuh penutup yang lebih sejuk lalu terkondensasi."},
 {j:"pilih",t:"Awak mahu membuat ais krim tanpa peti sejuk untuk hari keusahawanan. Cara paling berkesan?",p:["Letak bekas adunan di dalam ais bercampur garam","Letak adunan di bawah kipas angin sahaja","Tutup adunan dengan kain tebal di dalam bilik","Kacau adunan dengan laju di bawah cahaya matahari"],b:0,u:"Ais bergaram mencapai suhu di bawah 0 °C, jadi adunan membeku."},
 {j:"pilih",t:"Awak mereka peti ais tanah liat untuk sayur di kampung. Di manakah ia patut diletakkan?",p:["Tempat teduh yang berangin","Bilik tertutup yang lembap","Di bawah terik matahari","Di dalam bekas plastik kedap"],b:0,u:"Angin mempercepat penyejatan; tempat lembap memperlahankannya."},
 {j:"pilih",t:"Rekaan pengering kain awak lambat mengeringkan pakaian. Pengubahsuaian paling berkesan?",p:["Tambah aliran udara dan sebarkan kain","Lipat kain supaya lebih padat","Tutup pengering dengan plastik","Letak pengering di dalam almari"],b:0,u:"Luas permukaan dan aliran udara mempercepat penyejatan."},
 {j:"pilih",t:"Kilang awak mahu mengangkut gas memasak dalam jumlah besar. Cara paling sesuai berdasarkan teori kinetik?",p:["Mampatkan gas ke dalam tong keluli","Panaskan gas supaya zarah lebih rapat","Simpan gas di dalam beg plastik terbuka","Sejukkan gas sehingga ia menjadi pepejal"],b:0,u:"Gas mudah dimampatkan kerana ruang antara zarahnya besar."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada peti ais tanah liat rekaan awak benar-benar menyejukkan?",p:["Bandingkan suhu di dalam peti dengan suhu bekas biasa","Rasa sayur di dalam peti selepas sehari","Tanya jiran sama ada peti itu kelihatan sejuk","Ukur berat peti sebelum dan selepas diisi"],b:0,u:"Termometer memberi data yang boleh dibandingkan."}],
 bos:{j:"buka",
  t:"Sebuah kampung pedalaman tiada bekalan elektrik dan peti sejuk. Reka satu alat yang menggunakan perubahan keadaan jirim untuk membantu penduduk menyimpan makanan atau mendapatkan air bersih.",
  arahan:"Terangkan rekaan alat, perubahan keadaan jirim yang digunakan dengan penjelasan teori kinetik, bahan yang mudah didapati, cara menguji keberkesanannya, serta kos dan kesesuaian dengan cara hidup penduduk.",
  u:"Jawapan TP6 yang kukuh menerangkan penyejatan atau kondensasi dari segi pergerakan zarah dan haba, memilih bahan tempatan yang murah, dan merancang ujian suhu atau isi padu air."}}
];

module.exports = {
  id:"t1b5", tingkatan:1, kod:"5.0 Jirim",
  tajuk:"Laluan Zarah",
  subtajuk:"Sains Ting. 1 · Bab 5 Jirim",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud jirim, tiga keadaan jirim dan nama perubahan keadaan jirim. Langkah seterusnya ialah menjelaskan perubahan itu menggunakan teori kinetik.",
   2:"{n} memahami susunan dan pergerakan zarah dalam pepejal, cecair dan gas serta dapat menjelaskan perubahan keadaan jirim. Perlu lebih banyak latihan mentafsir takat lebur dan takat didih.",
   3:"{n} boleh menentukan keadaan bahan pada suhu tertentu berdasarkan takat lebur dan takat didih. Galakkan menunjukkan langkah perbandingan suhu dengan jelas.",
   4:"{n} mampu menganalisis data pemanasan dan menerangkan mengapa suhu kekal semasa peleburan dan pendidihan. Seterusnya latih menilai reka bentuk eksperimen.",
   5:"{n} dapat menilai eksperimen resapan dan membuat keputusan yang wajar berdasarkan kadar resapan. Sudah bersedia untuk tugasan reka bentuk.",
   6:"{n} berjaya mereka bentuk alat yang menggunakan perubahan keadaan jirim secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Jirim. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ lengkung:R_PANAS_H1, zarah:R_ZARAH, takat:T_TAKAT, panas:T_PANAS, resap:T_RESAP },
  aras:ARAS
};
