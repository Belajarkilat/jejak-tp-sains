/* Sumber kandungan — Sains KSSM Tingkatan 1, Bidang 9.0 Bumi.
   Jalankan `node bina.js t1b9` untuk menyemak dan menghasilkan bank-t1b9.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 1, muka 77 (Tema Penerokaan Bumi dan Angkasa Lepas).

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai struktur bumi/geobencana/sumber Bumi.",
"Memahami struktur bumi/geobencana/sumber Bumi serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan dan kemahiran sains mengenai struktur bumi/geobencana/sumber Bumi untuk melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai struktur bumi/geobencana/sumber Bumi dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai struktur bumi/geobencana/sumber Bumi dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekabentuk persembahan pelbagai media/visual/folio/poster/main peranan/drama secara kreatif dan inovatif dengan menggunakan pengetahuan dan kemahiran sains mengenai struktur bumi/geobencana/sumber Bumi dalam konteks penyelesaian masalah dan membuat keputusan dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_BUMI = {
  "jenis": "struktur",
  "mod": "lapisan",
  "lapisan": [
    {
      "label": "Teras dalam",
      "tebal": 1250,
      "isi": "kuningLembut"
    },
    {
      "label": "Teras luar",
      "tebal": 2200,
      "isi": "merahLembut"
    },
    {
      "label": "Mantel",
      "tebal": 2900,
      "isi": "kertas2"
    },
    {
      "label": "Kerak",
      "tebal": 260,
      "isi": "hijauLembut"
    }
  ],
  "kapsyen": "Rajah 1 · Keratan Bumi. Tebal kerak dibesarkan supaya kelihatan.",
  "alt": "Keratan Bumi menunjukkan empat lapisan dari tengah ke luar: teras dalam, teras luar, mantel yang paling tebal, dan kerak yang paling nipis"
};

const R_BATU = {
  "jenis": "aliran",
  "mod": "kitar",
  "nod": [
    "Magma",
    "Batuan igneus",
    "Batuan enapan",
    "Batuan metamorf"
  ],
  "kapsyen": "Rajah 1 · Kitar batuan.",
  "alt": "Rajah kitaran empat kotak: magma, batuan igneus, batuan enapan, batuan metamorf, kemudian kembali kepada magma"
};

const T_BATU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sampel</th>'+
'<th>Saiz hablur</th><th>Berlapis?</th><th>Ada fosil?</th><th>Catatan</th></tr></thead><tbody>'+
'<tr><td>E</td><td>Besar, jelas kelihatan</td><td>Tidak</td><td>Tidak</td><td>Keras, dari kawasan pergunungan</td></tr>'+
'<tr><td>F</td><td>Tiada hablur</td><td>Ya</td><td>Ya, cengkerang</td><td>Berbuih apabila dititis asid cair</td></tr>'+
'<tr><td>G</td><td>Sangat kecil</td><td>Tidak</td><td>Tidak</td><td>Gelap, dari aliran lava lama</td></tr>'+
'<tr><td>H</td><td>Hablur tersusun semula</td><td>Tidak</td><td>Tidak</td><td>Putih berkilat, terbentuk daripada batu kapur</td></tr>'+
'</tbody></table></div><p class="qnote">Pemerhatian empat sampel batuan di makmal sekolah.</p>';

const T_CERUN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Cerun</th>'+
'<th class="n">Kecuraman (&deg;)</th><th>Litupan tumbuhan</th><th class="n">Hujan tahunan (mm)</th><th>Tanah runtuh dalam 10 tahun</th></tr></thead><tbody>'+
'<tr><td>J</td><td class="n">15</td><td>Hutan tebal</td><td class="n">2500</td><td>Tiada</td></tr>'+
'<tr><td>K</td><td class="n">40</td><td>Hutan tebal</td><td class="n">2500</td><td>1 kali</td></tr>'+
'<tr><td>L</td><td class="n">40</td><td>Ditarah, tiada pokok</td><td class="n">2500</td><td>6 kali</td></tr>'+
'<tr><td>M</td><td class="n">40</td><td>Ditarah, tiada pokok</td><td class="n">1200</td><td>2 kali</td></tr>'+
'</tbody></table></div><p class="qnote">Rekod empat cerun di sebuah daerah tanah tinggi. Data rekaan.</p>';

const T_AIR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sumber air</th>'+
'<th class="n">Kos pemasangan (RM ribu)</th><th>Bekalan musim kemarau</th><th>Risiko utama</th></tr></thead><tbody>'+
'<tr><td>Sungai berhampiran</td><td class="n">80</td><td>Berkurang banyak</td><td>Tercemar oleh ladang dan kilang di hulu</td></tr>'+
'<tr><td>Telaga tiub ke akuifer</td><td class="n">150</td><td>Stabil</td><td>Tanah mendap jika dipam berlebihan</td></tr>'+
'<tr><td>Tangki tadahan hujan</td><td class="n">40</td><td>Hampir kering</td><td>Nyamuk membiak jika tidak ditutup</td></tr>'+
'</tbody></table></div><p class="qnote">Pilihan sumber air untuk sebuah kampung baharu berpenduduk 500 orang. Air daripada semua sumber perlu dirawat sebelum diminum. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Puncak Gunung", sk:"9.1 / 9.2 Sistem Bumi, struktur Bumi dan batuan", lampiran:"strukturbumi",
 kadNama:"Teras Bumi", kadEm:"\u{1F30D}", kadFakta:"Suhu teras dalam Bumi dianggarkan melebihi 5000 °C, hampir sepanas permukaan Matahari.",
 bosKadNama:"Granit", bosKadEm:"\u{1FAA8}", bosKadFakta:"Banyak bukit di Semenanjung Malaysia, termasuk Banjaran Titiwangsa, terdiri daripada batuan granit.",
 soalan:[
 {j:"pilih",t:"Komponen sistem Bumi yang merangkumi semua air di Bumi ialah:",p:["Hidrosfera","Atmosfera","Biosfera","Geosfera"],b:0,u:"Hidrosfera termasuk lautan, sungai, glasier, awan dan air bawah tanah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, lapisan Bumi yang paling nipis ialah:",p:["Kerak","Mantel","Teras luar","Teras dalam"],b:0,u:"Kerak ialah lapisan luar tempat kita tinggal."},
 {j:"pilih",t:"Lapisan Bumi yang paling tebal ialah:",p:["Mantel","Kerak","Teras dalam","Teras luar"],b:0,u:"Mantel kira-kira 2900 km tebal."},
 {j:"pilih",t:"Batuan yang terbentuk apabila magma atau lava menyejuk dan membeku ialah:",p:["Batuan igneus","Batuan sedimen","Batuan metamorfik","Batu kapur"],b:0,u:"Contohnya granit dan basalt."},
 {j:"pilih",t:"Lapisan atmosfera yang mengandungi lapisan ozon ialah:",p:["Stratosfera","Troposfera","Mesosfera","Termosfera"],b:0,u:"Ozon menyerap sinaran ultraungu yang berbahaya."},
 {j:"pilih",t:"Lapisan atmosfera tempat cuaca berlaku ialah:",p:["Troposfera","Stratosfera","Mesosfera","Termosfera"],b:0,u:"Hampir semua wap air dan awan berada di troposfera."},
 {j:"pilih",t:"Usia Bumi dianggarkan kira-kira:",p:["4.6 bilion tahun","4600 tahun","46 juta tahun","460 bilion tahun"],b:0,u:"Usia ini ditentukan melalui kaedah pentarikhan radioaktif batuan dan meteorit."},
 {j:"banyak",t:"Pilih SEMUA contoh geobencana.",p:["Gempa bumi","Tsunami","Tanah runtuh","Gerhana bulan","Pelangi"],b:[0,1,2],u:"Gerhana dan pelangi bukan bencana."}],
 bos:{j:"pilih",t:"Kebanyakan fosil ditemui dalam batuan:",p:["Sedimen","Igneus","Metamorfik","Lava"],b:0,u:"Batuan sedimen terbentuk perlahan-lahan daripada lapisan enapan yang boleh menimbus sisa organisma."}},

{n:2, tempat:"Gua Batu Kapur", sk:"9.2 / 9.3 / 9.4 / 9.6 Proses Bumi, geobencana dan sumber Bumi", lampiran:"kitarbatu",
 kadNama:"Gua Batu Kapur", kadEm:"\u{1F987}", kadFakta:"Gua Batu Kapur seperti Gua Niah dan Gua Tempurung terbentuk apabila air hujan berasid melarutkan batu kapur selama ribuan tahun.",
 bosKadNama:"Kolam Air Panas", bosKadEm:"\u{2668}", bosKadFakta:"Kolam air panas Poring di Sabah dipanaskan oleh batuan panas di bawah tanah.",
 soalan:[
 {j:"pilih",t:"Luluhawa dan hakisan dikelaskan sebagai proses:",p:["Eksogen","Endogen","Metamorfik","Magma"],b:0,u:"Proses eksogen berlaku di permukaan Bumi."},
 {j:"pilih",t:"Pergerakan kepingan kerak Bumi dikenali sebagai:",p:["Tektonik keping","Luluhawa kimia","Pengenapan","Susutan jisim"],b:0,u:"Ini proses endogen yang digerakkan oleh olakan mantel."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah batuan metamorfik terbentuk?",p:["Batuan sedia ada diubah oleh haba dan tekanan tinggi","Magma menyejuk dengan cepat di permukaan Bumi","Lapisan pasir dan lumpur dimampatkan di dasar sungai","Sisa tumbuhan tertimbus di kawasan paya"],b:0,u:"Contohnya batu kapur berubah menjadi marmar."},
 {j:"pilih",t:"Tsunami biasanya berpunca daripada:",p:["Gempa bumi di dasar laut","Angin kencang di pantai","Hujan lebat berterusan","Air pasang besar bulanan"],b:0,u:"Gempa bumi menolak air laut dalam jumlah yang sangat besar."},
 {j:"pilih",t:"Petroleum terbentuk daripada:",p:["Sisa organisma laut yang tertimbus","Lava yang menyejuk di dasar laut","Air hujan yang meresap ke dalam batu","Batu kapur yang dilarutkan oleh asid"],b:0,u:"Haba dan tekanan menukar sisa itu kepada minyak dan gas."},
 {j:"pilih",t:"Mengapakah lubang benam sering berlaku di kawasan batu kapur?",p:["Batu kapur larut dalam air berasid","Batu kapur ialah batuan paling keras di Bumi","Kawasan batu kapur tidak pernah menerima hujan","Batu kapur mengembang apabila panas"],b:0,u:"Rongga di bawah tanah boleh runtuh secara tiba-tiba."},
 {j:"pilih",t:"Apakah maksud akuifer?",p:["Lapisan batuan yang menyimpan air","Lapisan ozon di stratosfera","Kawasan air cetek di tepi pantai yang berpasir","Awan tebal yang membawa hujan"],b:0,u:"Air dari akuifer boleh dipam melalui telaga tiub."},
 {j:"pilih",t:"Mineral ekonomi yang menjadi bijih timah ialah:",p:["Kasiterit","Hematit","Bauksit","Kaolin"],b:0,u:"Hematit ialah bijih besi, bauksit bijih aluminium, dan kaolin tanah liat putih."}],
 bos:{j:"banyak",t:"Pilih SEMUA teknologi yang membantu manusia menghadapi geobencana.",p:["Seismograf untuk mengesan gempa bumi","Sistem amaran awal tsunami","Sensor pergerakan tanah di cerun","Teleskop untuk melihat planet","Mikroskop untuk melihat sel"],b:[0,1,2],u:"Teleskop dan mikroskop tidak berkaitan dengan geobencana."}},

{n:3, tempat:"Muzium Geologi", sk:"9.2 / 9.5 Mengenal pasti batuan dan fosil", lampiran:"batu",
 kadNama:"Marmar", kadEm:"\u{1F3DB}", kadFakta:"Marmar ialah batuan metamorfik yang terbentuk daripada batu kapur. Ia digunakan untuk lantai dan patung.",
 bosKadNama:"Fosil Ammonit", bosKadEm:"\u{1F41A}", bosKadFakta:"Ammonit ialah haiwan laut bercengkerang yang pupus bersama dinosaur kira-kira 66 juta tahun dahulu.",
 soalan:[
 {j:"pilih",t:"Sampel manakah batuan sedimen?",p:["F","E","G","H"],b:0,u:"F berlapis dan mengandungi fosil."},
 {j:"pilih",t:"Sampel E mempunyai hablur besar. Ini menunjukkan magma menyejuk:",p:["Dengan perlahan di dalam Bumi","Dengan cepat di permukaan Bumi","Di dalam air laut yang sejuk","Tanpa sebarang haba"],b:0,u:"Hablur mempunyai masa untuk membesar apabila penyejukan perlahan. E paling mungkin granit."},
 {j:"pilih",t:"Sampel G berhablur sangat kecil dan berasal daripada lava. G paling mungkin:",p:["Basalt","Granit","Marmar","Batu pasir"],b:0,u:"Lava menyejuk dengan cepat di permukaan, jadi hablur tidak sempat membesar."},
 {j:"pilih",t:"Sampel H ialah batuan:",p:["Metamorfik","Igneus","Sedimen","Lava"],b:0,u:"Batu kapur yang dikenakan haba dan tekanan menjadi marmar."},
 {j:"pilih",t:"Sampel F berbuih apabila dititis asid. F paling mungkin:",p:["Batu kapur","Granit","Basalt","Kuarza"],b:0,u:"Batu kapur bertindak balas dengan asid dan membebaskan karbon dioksida."},
 {j:"pilih",t:"Fosil cengkerang dalam sampel F ditemui di puncak bukit. Kesimpulan paling munasabah?",p:["Kawasan itu dahulu dasar laut","Seseorang meninggalkan cengkerang itu di situ","Cengkerang itu terbentuk di dalam magma","Burung membawa cengkerang ke puncak bukit"],b:0,u:"Pergerakan kerak Bumi boleh menaikkan dasar laut menjadi daratan."},
 {j:"pilih",t:"Sampel manakah paling tahan untuk dijadikan tangga bangunan di kawasan hujan berasid?",p:["E","F","H","Semua sama tahan"],b:0,u:"Granit keras dan tidak bertindak balas dengan asid seperti batu kapur dan marmar."},
 {j:"susun",t:"Susun peristiwa pembentukan sampel F mengikut urutan.",p:["Organisma laut mati dan tenggelam","Enapan menimbus sisa organisma","Lapisan enapan dimampatkan","Batuan sedimen berfosil terbentuk"],b:[0,1,2,3],u:"Proses ini mengambil masa berjuta tahun."}],
 bos:{j:"pilih",t:"Dalam jujukan batuan sedimen yang tidak terganggu, lapisan manakah paling tua?",p:["Lapisan paling bawah","Lapisan paling atas","Lapisan di tengah","Semua sama usia"],b:0,u:"Lapisan baharu mengenap di atas lapisan yang lebih lama."}},

{n:4, tempat:"Cerun Tanah Tinggi", sk:"9.4 Menganalisis faktor geobencana", lampiran:"cerun",
 kadNama:"Tanah Runtuh", kadEm:"\u{26F0}", kadFakta:"Akar pokok mengikat tanah pada cerun dan membantu air hujan meresap dengan perlahan.",
 bosKadNama:"Tembok Penahan", bosKadEm:"\u{1F9F1}", bosKadFakta:"Tembok penahan dan sistem saliran membantu menstabilkan cerun di tepi lebuh raya.",
 soalan:[
 {j:"pilih",t:"Bandingkan cerun J dan K. Faktor yang diuji ialah:",p:["Kecuraman","Litupan tumbuhan","Hujan tahunan","Jenis tanah"],b:0,u:"J dan K hanya berbeza dari segi kecuraman."},
 {j:"pilih",t:"Bandingkan cerun K dan L. Kesimpulan paling tepat?",p:["Menarah pokok menambah risiko","Kecuraman tidak mempengaruhi tanah runtuh","Hujan tidak mempengaruhi tanah runtuh","Hutan meningkatkan risiko tanah runtuh"],b:0,u:"L yang ditarah mengalami 6 kali tanah runtuh berbanding 1 kali bagi K."},
 {j:"pilih",t:"Bandingkan cerun L dan M. Faktor yang diuji ialah:",p:["Hujan tahunan","Kecuraman","Litupan tumbuhan","Kedudukan cerun"],b:0,u:"L dan M sama curam dan sama-sama ditarah."},
 {j:"pilih",t:"Cerun manakah paling berisiko?",p:["L","J","K","M"],b:0,u:"L curam, tiada pokok dan menerima hujan lebat."},
 {j:"pilih",t:"Mengapakah cerun tanpa pokok lebih mudah runtuh?",p:["Tiada akar untuk mengikat tanah","Tanah menjadi terlalu kering","Tanah menjadi lebih ringan","Pokok menarik hujan ke cerun"],b:0,u:"Air hujan juga mengalir dan menghakis tanah dengan lebih cepat."},
 {j:"pilih",t:"Tanah runtuh paling kerap berlaku selepas:",p:["Hujan lebat berpanjangan","Musim kemarau panjang","Cuaca redup tanpa angin","Kebakaran kecil di hutan"],b:0,u:"Air menjadikan tanah berat dan licin."},
 {j:"pilih",t:"Seorang pemaju mahu membina rumah di cerun L. Berdasarkan data, nasihat paling wajar?",p:["Stabilkan cerun dan tanam semula pokok dahulu","Bina segera kerana cerun sudah bersih daripada pokok","Bina di cerun M kerana tiada risiko langsung","Tambah lebih banyak rumah untuk menekan tanah"],b:0,u:"Cerun L paling kerap runtuh. Cerun M masih runtuh 2 kali."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Cerun curam lebih kerap runtuh","Menarah pokok meningkatkan tanah runtuh","Hujan lebih banyak meningkatkan tanah runtuh","Hutan tebal menghapuskan semua risiko","Kecuraman 15° lebih berbahaya daripada 40°"],b:[0,1,2],u:"Cerun K berhutan tebal masih runtuh sekali, jadi risikonya tidak hilang sepenuhnya."}],
 bos:{j:"pilih",t:"Tanda amaran awal yang paling perlu dilaporkan oleh penduduk di kaki cerun ialah:",p:["Rekahan baharu pada tanah dan dinding rumah","Burung berkicau lebih kuat pada waktu pagi","Rumput tumbuh lebih cepat selepas hujan","Langit berwarna merah pada waktu senja"],b:0,u:"Rekahan, pokok condong dan air keruh keluar dari cerun ialah tanda tanah sedang bergerak."}},

{n:5, tempat:"Kampung Baharu", sk:"9.6 Menilai sumber air permukaan dan air bawah tanah", lampiran:"air",
 kadNama:"Air Tawar", kadEm:"\u{1F4A7}", kadFakta:"Kira-kira 97% air di Bumi ialah air laut. Kebanyakan air tawar pula terperangkap dalam glasier dan ais.",
 bosKadNama:"Telaga Tiub", bosKadEm:"\u{1F6B0}", bosKadFakta:"Telaga tiub dipam dari akuifer dalam tanah dan kurang terjejas oleh kemarau jangka pendek.",
 soalan:[
 {j:"pilih",t:"Sumber manakah paling stabil pada musim kemarau?",p:["Telaga tiub ke akuifer","Sungai berhampiran","Tangki tadahan hujan","Semua sama stabil"],b:0,u:"Air bawah tanah kurang dipengaruhi oleh cuaca jangka pendek."},
 {j:"pilih",t:"Sumber manakah paling murah untuk dipasang?",p:["Tangki tadahan hujan","Telaga tiub","Sungai","Semua sama"],b:0,u:"RM40 ribu, tetapi bekalannya hampir kering semasa kemarau."},
 {j:"pilih",t:"Mengapakah air sungai berisiko tercemar?",p:["Bahan dari ladang dan kilang di hulu","Air sungai sentiasa mengalir","Sungai terlalu dekat dengan kampung","Air sungai lebih masin daripada air laut"],b:0,u:"Baja, racun perosak dan sisa kilang boleh mengalir ke sungai."},
 {j:"pilih",t:"Mengapakah pengepaman air bawah tanah secara berlebihan boleh menyebabkan tanah mendap?",p:["Akuifer kosong dan tanah di atas turun","Air bawah tanah menjadi terlalu panas","Pam menarik tanah bersama air","Akuifer bertukar menjadi batuan igneus"],b:0,u:"Tanah mendap boleh meretakkan bangunan dan jalan."},
 {j:"pilih",t:"Ketua kampung mahu satu sumber sahaja kerana bajet terhad RM100 ribu. Nilaikan pilihan terbaik.",p:["Sungai, dengan rawatan air","Telaga tiub, walaupun melebihi bajet","Tangki tadahan hujan sahaja untuk 500 orang","Tidak membina apa-apa sumber air"],b:0,u:"Telaga tiub melebihi bajet, dan tadahan hujan tidak mencukupi semasa kemarau."},
 {j:"pilih",t:"Jika bajet ditambah, gabungan paling wajar untuk bekalan sepanjang tahun?",p:["Telaga tiub dan tangki tadahan hujan","Dua tangki tadahan hujan","Sungai sahaja tanpa rawatan","Tiga telaga tiub yang dipam sepenuhnya"],b:0,u:"Telaga tiub stabil, dan tadahan hujan mengurangkan pengepaman berlebihan."},
 {j:"pilih",t:"Bagaimanakah risiko nyamuk pada tangki tadahan hujan boleh dikurangkan?",p:["Tutup tangki dengan jaring halus","Biarkan tangki terbuka supaya air segar","Tambah minyak masak ke dalam tangki","Kosongkan tangki setiap hari"],b:0,u:"Jaring menghalang nyamuk bertelur di dalam air."},
 {j:"pilih",t:"Penduduk mendakwa air telaga tiub selamat diminum terus kerana ia dari bawah tanah. Nilaikan dakwaan itu.",p:["Belum tentu; air bawah tanah juga boleh tercemar","Tepat; tanah menapis semua bahan pencemar","Tepat; air bawah tanah sentiasa steril","Salah; air bawah tanah tidak boleh diminum langsung"],b:0,u:"Air bawah tanah boleh tercemar oleh tangki najis, baja atau tapak pelupusan sampah."}],
 bos:{j:"pilih",t:"Kilang baharu dirancang di hulu sungai kampung itu. Keputusan paling wajar oleh majlis daerah?",p:["Wajibkan kajian alam sekitar dan rawatan sisa","Luluskan segera kerana kilang membawa pekerjaan","Tolak sebarang pembangunan di daerah itu","Pindahkan semua penduduk kampung ke bandar"],b:0,u:"Pembangunan boleh diteruskan jika risiko pencemaran dikawal dengan betul."}},

{n:6, tempat:"Pusat Kesiapsiagaan Bencana", sk:"9.4 / 9.6 Mereka bentuk penyelesaian geobencana dan sumber Bumi",
 kadNama:"Seismograf", kadEm:"\u{1F4C8}", kadFakta:"Seismograf merekod gegaran bumi sebagai garis bergelombang. Semakin besar gelombang, semakin kuat gempa.",
 bosKadNama:"Nadir Bumi", bosKadEm:"\u{1F4F1}", bosKadFakta:"Unsur nadir bumi digunakan dalam magnet kecil yang kuat untuk telefon pintar dan turbin angin.",
 soalan:[
 {j:"pilih",t:"Awak mereka poster kesiapsiagaan gempa bumi untuk sekolah di Ranau, Sabah. Arahan paling penting semasa gegaran?",p:["Berlindung di bawah meja yang kukuh","Berlari keluar menggunakan lif","Berdiri di tepi tingkap kaca","Menaiki tangga ke tingkat atas"],b:0,u:"Lindungi kepala daripada objek yang jatuh; elak lif dan kaca."},
 {j:"pilih",t:"Awak mereka sistem amaran tanah runtuh murah untuk kampung di kaki bukit. Komponen paling berguna?",p:["Sensor tolok hujan dengan siren","Kamera cantik di puncak bukit","Lampu hiasan di tepi jalan","Papan tanda nama kampung"],b:0,u:"Hujan lebat yang berpanjangan ialah pencetus utama tanah runtuh."},
 {j:"pilih",t:"Kawasan pantai awak berisiko tsunami. Cadangan paling praktikal?",p:["Laluan pemindahan ke kawasan tinggi","Bina rumah betul-betul di tepi pantai","Tebang semua pokok bakau di pantai","Tunggu air laut surut untuk melihat ikan"],b:0,u:"Bakau membantu melemahkan ombak; air laut surut tiba-tiba ialah tanda amaran tsunami."},
 {j:"pilih",t:"Awak mereka model 3D lapisan Bumi untuk pameran. Nisbah ketebalan paling tepat?",p:["Kerak sangat nipis, mantel paling tebal","Kerak paling tebal, teras sangat nipis","Semua lapisan sama tebal","Teras luar paling nipis, kerak paling tebal"],b:0,u:"Kerak hanya puluhan kilometer, manakala mantel kira-kira 2900 km."},
 {j:"pilih",t:"Kampung awak mempunyai kolam air panas semula jadi. Cadangan ekonomi paling mampan?",p:["Eko-pelancongan berpandu","Tutup kolam dengan konkrit","Buang sisa ke dalam kolam","Bina kilang di sebelah kolam"],b:0,u:"Hidroterma boleh menjana pendapatan tanpa memusnahkan kawasan itu."},
 {j:"pilih",t:"Awak mahu mengurangkan pembaziran telefon lama yang mengandungi unsur nadir bumi. Cadangan paling wajar?",p:["Program kitar semula telefon lama","Buang telefon lama ke dalam tong sampah","Tanam telefon lama di belakang rumah","Bakar telefon lama untuk mengambil logam"],b:0,u:"Kitar semula mengurangkan keperluan melombong sumber baharu."},
 {j:"pilih",t:"Awak mereka simulasi gempa bumi di kelas untuk menguji model bangunan. Cara paling sesuai?",p:["Goncang dulang model dengan kekuatan sama","Tolak setiap model dengan jari pada kekuatan berbeza","Jatuhkan model dari atas meja ke lantai","Tiup model dengan kipas angin besar"],b:0,u:"Goncangan yang sama bagi setiap model menjadikan perbandingan adil."},
 {j:"pilih",t:"Bagaimanakah awak menilai keberkesanan latihan kecemasan gempa bumi di sekolah?",p:["Rekod masa murid sampai ke tempat berkumpul","Kira bilangan poster yang ditampal","Tanya murid sama ada mereka suka latihan itu","Ukur ketinggian bangunan sekolah"],b:0,u:"Masa yang direkod boleh dibandingkan antara latihan untuk melihat penambahbaikan."}],
 bos:{j:"buka",
  t:"Sebuah kampung di kaki bukit berhampiran sungai sering mengalami tanah runtuh dan kekurangan air bersih semasa kemarau. Reka satu pelan untuk kampung itu menggunakan pengetahuan tentang geobencana dan sumber Bumi.",
  arahan:"Terangkan punca tanah runtuh dan cara mengurangkan risikonya, sumber air yang dicadangkan beserta kelebihan dan risikonya, teknologi atau sistem amaran yang digunakan, bagaimana keberkesanan pelan diukur, serta kos dan penglibatan penduduk.",
  u:"Jawapan TP6 yang kukuh mengaitkan litupan tumbuhan, kecuraman dan hujan dengan tanah runtuh, memilih sumber air dengan pertimbangan risiko, dan merancang pelan yang realistik."}}
];

module.exports = {
  id:"t1b9", tingkatan:1, kod:"9.0 Bumi",
  tajuk:"Laluan Bumi",
  subtajuk:"Sains Ting. 1 · Bab 9 Bumi",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali sistem Bumi, lapisan Bumi, jenis batuan dan contoh geobencana. Langkah seterusnya ialah menjelaskan proses pembentukan batuan.",
   2:"{n} memahami proses eksogen dan endogen, geobencana dan pembentukan sumber Bumi serta dapat menjelaskannya. Perlu lebih banyak latihan mengenal pasti batuan daripada pemerhatian.",
   3:"{n} boleh mengelaskan batuan berdasarkan ciri hablur, lapisan dan fosil serta mentafsir sejarah Bumi. Galakkan memberi bukti daripada pemerhatian.",
   4:"{n} mampu menganalisis data cerun untuk mengenal pasti faktor tanah runtuh. Seterusnya latih menilai pilihan sumber Bumi.",
   5:"{n} dapat menilai sumber air permukaan dan air bawah tanah serta membuat keputusan yang mengambil kira kos dan risiko. Sudah bersedia untuk tugasan reka bentuk.",
   6:"{n} berjaya mereka bentuk pelan menghadapi geobencana dan mengurus sumber Bumi secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bumi. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ strukturbumi:R_BUMI, kitarbatu:R_BATU, batu:T_BATU, cerun:T_CERUN, air:T_AIR },
  aras:ARAS
};
