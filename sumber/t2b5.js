/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 5.0 Air dan Larutan.
   Jalankan `node bina.js t2b5` untuk menyemak dan menghasilkan bank-t2b5.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 63.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai air dan larutan.",
"Memahami air dan larutan serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai air dan larutan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai air dan larutan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai air dan larutan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai air dan larutan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ ekonomi/ budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_MOLEKULAIR = {
  "jenis": "aliran", "mod": "turun",
  "nod": [
    { "label": "Gula (zat terlarut)", "nota": "dimasukkan" },
    "Air (pelarut)",
    "Air gula (larutan)"
  ],
  "kapsyen": "Rajah 1 · Gula dilarutkan ke dalam air.",
  "alt": "Rajah aliran menegak: gula sebagai zat terlarut dimasukkan ke dalam air sebagai pelarut, menghasilkan air gula iaitu larutan"
};


const R_JEMUR = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 4,
  "yMaks": 200,
  "bar": [
    {
      "label": "Berangin",
      "nilai": 60,
      "warna": "hijau"
    },
    {
      "label": "Tenang",
      "nilai": 110,
      "warna": "kuning"
    },
    {
      "label": "Lembap",
      "nilai": 180,
      "warna": "merah"
    }
  ],
  "xLabel": "Masa pakaian kering (minit)",
  "kapsyen": "Rajah 1 · Masa yang diambil untuk sehelai tuala kering pada tiga keadaan cuaca.",
  "alt": "Graf palang masa pengeringan: hari berangin 60 minit, hari tenang 110 minit, hari lembap 180 minit"
};

const T_SEJAT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Piring</th>'+
'<th>Keadaan</th><th class="n">Air yang tinggal selepas 3 jam (ml)</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Piring kecil, dalam bilik, tiada kipas</td><td class="n">42</td></tr>'+
'<tr><td>B</td><td>Piring lebar, dalam bilik, tiada kipas</td><td class="n">30</td></tr>'+
'<tr><td>C</td><td>Piring lebar, dalam bilik, di bawah kipas</td><td class="n">18</td></tr>'+
'<tr><td>D</td><td>Piring lebar, di bawah matahari, tiada angin</td><td class="n">12</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap piring diisi 50 ml air pada awal eksperimen. Data rekaan.</p>';

const T_LARUT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Ujian</th>'+
'<th class="n">Suhu air (&deg;C)</th><th>Jenis gula</th><th>Dikacau?</th><th class="n">Masa untuk 5 g gula larut (s)</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">30</td><td>Gula kasar</td><td>Tidak</td><td class="n">300</td></tr>'+
'<tr><td>2</td><td class="n">30</td><td>Gula kasar</td><td>Ya</td><td class="n">120</td></tr>'+
'<tr><td>3</td><td class="n">60</td><td>Gula kasar</td><td>Ya</td><td class="n">50</td></tr>'+
'<tr><td>4</td><td class="n">60</td><td>Gula halus</td><td>Ya</td><td class="n">20</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap ujian menggunakan 100 ml air. Data rekaan.</p>';

const T_BERSIH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kaedah</th>'+
'<th>Membunuh kuman?</th><th>Membuang garam?</th><th>Kos tenaga</th><th>Kesesuaian untuk banyak air</th></tr></thead><tbody>'+
'<tr><td>Pendidihan</td><td>Ya</td><td>Tidak</td><td>Sederhana</td><td>Sesuai untuk rumah</td></tr>'+
'<tr><td>Penurasan pasir dan arang</td><td>Tidak sepenuhnya</td><td>Tidak</td><td>Rendah</td><td>Sesuai</td></tr>'+
'<tr><td>Pengklorinan</td><td>Ya</td><td>Tidak</td><td>Rendah</td><td>Sangat sesuai</td></tr>'+
'<tr><td>Penyulingan</td><td>Ya</td><td>Ya</td><td>Sangat tinggi</td><td>Kurang sesuai</td></tr>'+
'</tbody></table></div><p class="qnote">Perbandingan kaedah pembersihan air untuk sebuah kampung.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Tebing Sungai", sk:"5.1 / 5.2 Sifat air dan larutan", lampiran:"molekulair",
 kadNama:"Tegangan Permukaan", kadEm:"\u{1F997}", kadFakta:"Serangga pelari air boleh berjalan di atas air kerana tegangan permukaan air.",
 bosKadNama:"Pelarut Universal", bosKadEm:"\u{1F4A7}", bosKadFakta:"Air digelar pelarut universal kerana ia boleh melarutkan lebih banyak bahan berbanding pelarut lain.",
 soalan:[
 {j:"pilih",t:"Air terdiri daripada unsur:",p:["Hidrogen dan oksigen","Karbon dan oksigen","Nitrogen dan hidrogen","Natrium dan klorin"],b:0,u:"Formula air ialah H₂O."},
 {j:"pilih",t:"Takat beku air tulen ialah:",p:["0 °C","100 °C","−10 °C","37 °C"],b:0,u:"Takat didihnya pula 100 °C pada tekanan biasa."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bahan yang larut dalam pelarut dipanggil:",p:["Zat terlarut","Pelarut","Ampaian","Larutan tepu"],b:0,u:"Zat terlarut + pelarut = larutan."},
 {j:"pilih",t:"Larutan yang tidak dapat melarutkan zat terlarut lagi pada suhu tertentu ialah:",p:["Larutan tepu","Larutan cair","Larutan pekat","Ampaian"],b:0,u:"Zat terlarut tambahan akan tertinggal di dasar."},
 {j:"pilih",t:"Pelarut yang digunakan untuk menanggalkan pengilat kuku ialah:",p:["Aseton","Air","Kerosin","Turpentin"],b:0,u:"Pengilat kuku tidak larut dalam air."},
 {j:"pilih",t:"Susu dan mayones ialah contoh:",p:["Koloid","Larutan tepu","Pelarut","Unsur"],b:0,u:"Ia sejenis emulsi, iaitu titisan halus satu cecair dalam cecair lain."},
 {j:"pilih",t:"Air naik di dalam tiub kaca halus. Fenomena ini dipanggil:",p:["Tindakan kapilari","Tegangan permukaan","Penyejatan","Elektrolisis"],b:0,u:"Tindakan kapilari juga membantu air naik dalam tumbuhan."},
 {j:"banyak",t:"Pilih SEMUA kaedah pembersihan air yang membunuh kuman.",p:["Pendidihan","Pengklorinan","Penyulingan","Penurasan dengan kain","Pengenapan"],b:[0,1,2],u:"Penurasan dan pengenapan membuang kotoran tetapi tidak membunuh kuman sepenuhnya."}],
 bos:{j:"pilih",t:"Dalam elektrolisis air, isi padu gas hidrogen yang terhasil berbanding gas oksigen ialah:",p:["Dua kali ganda","Separuh","Sama banyak","Tiga kali ganda"],b:0,u:"Nisbah hidrogen kepada oksigen ialah 2 : 1, sepadan dengan formula H₂O."}},

{n:2, tempat:"Loji Air", sk:"5.1 / 5.2 / 5.3 Penyejatan, keterlarutan dan pembekalan air", lampiran:"jemur",
 kadNama:"Tawas", kadEm:"\u{1F9C2}", kadFakta:"Tawas (aluminium sulfat) ditambah di loji air supaya zarah kotoran bergumpal dan mudah mengenap.",
 bosKadNama:"Minamata", bosKadEm:"\u{26A0}", bosKadFakta:"Di Minamata, Jepun, sisa merkuri dari kilang mencemarkan laut dan meracuni penduduk yang memakan ikan.",
 soalan:[
 {j:"pilih",t:"Garam yang dilarutkan ke dalam air menyebabkan takat didih air:",p:["Meningkat","Menurun","Tidak berubah","Menjadi 0 °C"],b:0,u:"Bendasing meningkatkan takat didih dan menurunkan takat beku air."},
 {j:"pilih",t:"Pakaian cepat kering pada hari yang berangin kerana:",p:["Angin mempercepat penyejatan","Angin menukar air kepada ais","Angin menambah kelembapan udara","Angin memanaskan air hingga 100 °C"],b:0,u:"Angin membawa pergi wap air dari permukaan kain."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pakaian lambat kering pada hari yang lembap kerana:",p:["Udara sudah banyak wap air","Suhu udara terlalu tinggi","Angin bertiup terlalu kencang","Kain menyerap cahaya matahari"],b:0,u:"Kelembapan tinggi memperlahankan penyejatan."},
 {j:"pilih",t:"Mengapakah gula halus lebih cepat larut daripada gula kiub?",p:["Luas permukaannya lebih besar","Rasanya lebih manis","Jisimnya lebih berat","Suhunya lebih rendah"],b:0,u:"Lebih banyak zarah gula bersentuhan dengan air."},
 {j:"pilih",t:"Peringkat di loji air yang menambah klorin bertujuan untuk:",p:["Membunuh kuman","Menambah rasa manis","Menukar warna air","Membuang garam"],b:0,u:"Pengklorinan menjadikan air selamat diminum."},
 {j:"pilih",t:"Mengapakah fluorida ditambah ke dalam air paip?",p:["Menguatkan gigi","Membunuh semua kuman","Menjernihkan air keruh","Menambah rasa air"],b:0,u:"Fluorida membantu mencegah kerosakan gigi."},
 {j:"pilih",t:"Beza larutan dengan ampaian ialah ampaian:",p:["Keruh dan zarahnya mengenap","Jernih dan tiada zarah kelihatan","Tidak boleh dituras langsung","Hanya terbentuk pada suhu tinggi"],b:0,u:"Contohnya air lumpur. Zarahnya tertinggal pada kertas turas."},
 {j:"pilih",t:"Kerosin digunakan oleh mekanik untuk membersihkan tangan daripada gris kerana:",p:["Gris larut dalam kerosin","Kerosin membunuh semua kuman","Gris larut dengan cepat dalam air","Kerosin tidak mudah terbakar"],b:0,u:"Gris ialah bahan berminyak yang tidak larut dalam air. Kerosin mudah terbakar, jadi berhati-hati."}],
 bos:{j:"susun",t:"Susun peringkat pembersihan air di loji mengikut urutan.",p:["Penapisan","Penggumpalan","Pengenapan","Penurasan","Pengklorinan"],b:[0,1,2,3,4],u:"Pengoksidaan berlaku selepas penapisan, dan pengfluorinan selepas pengklorinan."}},

{n:3, tempat:"Ampaian Baju", sk:"5.1 Faktor yang mempengaruhi kadar penyejatan", lampiran:"sejat",
 kadNama:"Peti Sejuk", kadEm:"\u{2744}", kadFakta:"Peti sejuk menyejukkan makanan apabila cecair penyejuk di dalam paipnya menyejat dan menyerap haba.",
 bosKadNama:"Kelembapan", bosKadEm:"\u{1F32B}", bosKadFakta:"Kelembapan relatif di Malaysia selalunya melebihi 70%, sebab itu peluh lambat kering.",
 soalan:[
 {j:"nombor",t:"Berapakah isi padu air yang menyejat dari piring C, dalam ml?",b:32,tol:0.5,suf:"ml",u:"50 − 18 = 32 ml."},
 {j:"pilih",t:"Bandingkan piring A dan B. Faktor yang diuji ialah:",p:["Luas permukaan","Suhu","Gerakan udara","Kelembapan"],b:0,u:"Hanya saiz piring berbeza."},
 {j:"pilih",t:"Bandingkan piring B dan C. Faktor yang diuji ialah:",p:["Gerakan udara","Luas permukaan","Suhu","Isi padu air"],b:0,u:"C berada di bawah kipas."},
 {j:"pilih",t:"Piring manakah menunjukkan kadar penyejatan paling tinggi?",p:["D","C","B","A"],b:0,u:"D kehilangan 38 ml, paling banyak."},
 {j:"pilih",t:"Piring D dan C tidak sesuai dibandingkan untuk menguji satu faktor kerana:",p:["Suhu dan angin kedua-duanya berbeza","Isi padu air awal berbeza","Saiz piring berbeza","Kedua-duanya di dalam bilik"],b:0,u:"Ujian adil hanya mengubah satu pemboleh ubah."},
 {j:"pilih",t:"Petani mahu mengurangkan penyejatan air dari tanah di kebun sayur. Cara paling sesuai?",p:["Tutup tanah dengan sungkupan jerami","Siram pada tengah hari yang terik","Buang semua pokok teduhan di kebun","Bajak tanah setiap hari supaya gembur"],b:0,u:"Sungkupan mengurangkan pendedahan tanah kepada matahari dan angin."},
 {j:"pilih",t:"Ramalkan air yang tinggal jika piring lebar diletakkan di bawah matahari DAN kipas selama 3 jam.",p:["Kurang daripada 12 ml","Lebih daripada 30 ml","Tepat 18 ml","Tepat 42 ml"],b:0,u:"Gabungan suhu tinggi dan angin mempercepat penyejatan lagi."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Luas permukaan besar mempercepat penyejatan","Gerakan udara mempercepat penyejatan","Pancaran matahari mempercepat penyejatan","Piring kecil paling cepat menyejat","Kipas memperlahankan penyejatan"],b:[0,1,2],u:"Piring A yang kecil paling lambat menyejat."}],
 bos:{j:"pilih",t:"Kedai dobi mahu mengeringkan pakaian dengan paling cepat tanpa mesin pengering. Susunan paling berkesan?",p:["Jemur secara terbentang di tempat panas dan berangin","Lipat pakaian dan letak di dalam bilik tertutup","Jemur bertindan di tempat teduh","Gulung pakaian dan letak di dalam bakul"],b:0,u:"Luas permukaan, suhu dan angin semuanya mempercepat penyejatan."}},

{n:4, tempat:"Gerai Air", sk:"5.2 Menganalisis faktor kadar keterlarutan", lampiran:"larut",
 kadNama:"Air Sirap", kadEm:"\u{1F964}", kadFakta:"Peniaga air melarutkan gula dalam air panas dahulu untuk membuat sirap dengan cepat.",
 bosKadNama:"Gula Halus", bosKadEm:"\u{1F370}", bosKadFakta:"Gula halus digunakan dalam kek kerana ia lebih cepat larut dalam adunan.",
 soalan:[
 {j:"pilih",t:"Bandingkan ujian 1 dan 2. Faktor yang diuji ialah:",p:["Kacauan","Suhu air","Jenis gula","Isi padu air"],b:0,u:"Hanya kacauan berbeza."},
 {j:"pilih",t:"Bandingkan ujian 2 dan 3. Kesimpulan paling tepat?",p:["Suhu tinggi mempercepat gula larut","Suhu tinggi memperlahankan gula larut","Kacauan tidak memberi kesan","Gula halus larut paling lambat"],b:0,u:"Masa larut turun dari 120 s kepada 50 s."},
 {j:"pilih",t:"Bandingkan ujian 3 dan 4. Faktor yang diuji ialah:",p:["Saiz zat terlarut","Suhu air","Kacauan","Jenis pelarut"],b:0,u:"Gula halus mempunyai zarah lebih kecil."},
 {j:"nombor",t:"Berapa kali lebih cepat gula larut dalam ujian 4 berbanding ujian 1?",b:15,tol:0.05,suf:"kali",u:"300 ÷ 20 = 15 kali."},
 {j:"pilih",t:"Mengapakah suhu tinggi mempercepat gula larut?",p:["Zarah air bergerak lebih laju","Gula menjadi lebih kecil apabila panas","Air panas mempunyai lebih banyak zarah","Suhu tinggi menukar gula kepada garam"],b:0,u:"Zarah air yang laju lebih kerap berlanggar dengan zarah gula."},
 {j:"pilih",t:"Seorang murid mendakwa kacauan ialah faktor paling penting. Nilaikan dakwaan itu berdasarkan data.",p:["Belum tentu; suhu dan saiz juga penting","Tepat, kerana ujian 2 paling cepat","Tepat, kerana kacauan menukar suhu air","Salah, kerana kacauan tidak memberi kesan"],b:0,u:"Kacauan menjimatkan 180 s, tetapi suhu dan saiz juga menjimatkan banyak masa."},
 {j:"pilih",t:"Pemboleh ubah yang dimalarkan dalam semua ujian ialah:",p:["Isi padu air dan jisim gula","Suhu air dan jenis gula","Kacauan dan suhu air","Jenis gula dan kacauan"],b:0,u:"Setiap ujian menggunakan 100 ml air dan 5 g gula."},
 {j:"banyak",t:"Pilih SEMUA cara mempercepat gula larut berdasarkan data.",p:["Guna air lebih panas","Kacau larutan","Guna gula lebih halus","Guna air lebih sejuk","Guna gula kiub besar"],b:[0,1,2],u:"Air sejuk dan gula berketul besar memperlahankan kadar melarut."}],
 bos:{j:"pilih",t:"Gerai air mahu menyediakan sirap gula dengan paling cepat pada waktu puncak. Kaedah paling wajar?",p:["Larutkan gula halus dalam air panas sambil dikacau","Larutkan gula kasar dalam air sejuk tanpa dikacau","Masukkan gula kiub ke dalam air ais","Biarkan gula kasar di dalam air semalaman"],b:0,u:"Menggabungkan ketiga-tiga faktor memberi kadar paling cepat."}},

{n:5, tempat:"Kampung Hulu", sk:"5.3 Menilai kaedah pembersihan dan pembekalan air", lampiran:"bersih",
 kadNama:"Osmosis Berbalik", kadEm:"\u{1F30A}", kadFakta:"Osmosis berbalik menolak air laut melalui membran halus yang menahan garam untuk menghasilkan air tawar.",
 bosKadNama:"Audit Air", bosKadEm:"\u{1F4CF}", bosKadFakta:"Audit air merekod berapa banyak air digunakan di rumah atau sekolah supaya pembaziran dapat dikenal pasti.",
 soalan:[
 {j:"pilih",t:"Kaedah manakah membuang garam daripada air?",p:["Penyulingan","Pendidihan","Pengklorinan","Penurasan"],b:0,u:"Penyulingan mengumpul wap air tulen dan meninggalkan garam."},
 {j:"pilih",t:"Mengapakah penurasan sahaja tidak mencukupi untuk air minuman?",p:["Kuman tidak dibunuh sepenuhnya","Penurasan menambah garam","Penurasan memerlukan tenaga yang tinggi","Air menjadi terlalu panas"],b:0,u:"Air turasan masih perlu didih atau diklorinkan."},
 {j:"pilih",t:"Kampung mahu membekalkan air bersih untuk 300 rumah dari sungai tawar. Gabungan paling wajar?",p:["Penurasan dan pengklorinan","Penyulingan untuk semua air kampung","Pendidihan di setiap rumah sahaja","Pengenapan tanpa pengklorinan"],b:0,u:"Kaedah ini murah, sesuai untuk jumlah besar dan membunuh kuman."},
 {j:"pilih",t:"Mengapakah penyulingan kurang sesuai untuk kampung itu?",p:["Kos tenaga sangat tinggi","Ia tidak membunuh kuman","Ia tidak membuang kotoran","Air suling beracun"],b:0,u:"Air sungai tawar tidak perlu dibuang garamnya."},
 {j:"pilih",t:"Sebuah pulau hanya mempunyai air laut. Kaedah paling sesuai?",p:["Osmosis berbalik","Pengklorinan air laut sahaja","Penurasan melalui pasir sahaja","Pendidihan air laut sahaja"],b:0,u:"Hanya penyahgaraman membuang garam terlarut dalam jumlah besar."},
 {j:"pilih",t:"Semasa krisis air, penduduk diminta mendidih air paip sebelum diminum. Nilaikan arahan itu.",p:["Wajar, kerana pendidihan membunuh kuman","Tidak wajar, kerana pendidihan membuang garam","Tidak wajar, kerana air paip sentiasa bersih","Wajar, kerana pendidihan menambah fluorida"],b:0,u:"Paip yang rosak boleh membenarkan kuman masuk ke bekalan."},
 {j:"pilih",t:"Audit air di sekolah menunjukkan paip bocor membazirkan 500 liter sehari. Tindakan paling berkesan?",p:["Baiki paip dan pantau meter air","Pasang lebih banyak paip","Minum lebih banyak air setiap hari","Tutup tandas sekolah sepanjang masa"],b:0,u:"Kebocoran ialah pembaziran yang paling mudah diatasi."},
 {j:"pilih",t:"Kilang di hulu membuang sisa merkuri ke sungai. Kesan paling serius kepada penduduk hilir?",p:["Keracunan melalui ikan yang dimakan","Air sungai menjadi terlalu sejuk","Ikan membesar dengan lebih cepat","Tiada kesan kerana merkuri tenggelam"],b:0,u:"Seperti di Minamata, merkuri terkumpul dalam rantai makanan."}],
 bos:{j:"pilih",t:"Majlis daerah hanya mampu membiayai satu projek air. Projek manakah memberi manfaat terbesar kepada kampung hulu?",p:["Loji rawatan kecil","Loji penyulingan air laut yang besar","Kempen mendidih air tanpa loji","Kolam simpanan air tanpa rawatan"],b:0,u:"Kampung ada sungai tawar; rawatan asas yang cekap paling sesuai."}},

{n:6, tempat:"Makmal Air", sk:"5.2 / 5.3 Mereka cipta menggunakan pengetahuan air dan larutan",
 kadNama:"Penadah Kabus", kadEm:"\u{1F301}", kadFakta:"Di kawasan kering yang berkabus, jaring besar digunakan untuk menangkap titisan kabus sebagai sumber air.",
 bosKadNama:"Air Kelabu", bosKadEm:"\u{267B}", bosKadFakta:"Air kelabu ialah air terpakai daripada sinki dan mesin basuh yang boleh dirawat semula untuk menyiram pokok.",
 soalan:[
 {j:"pilih",t:"Awak mereka penuras air kecemasan untuk mangsa banjir. Susunan lapisan paling berkesan dari atas?",p:["Kerikil, pasir, arang, kapas","Kapas, arang, pasir, kerikil","Arang sahaja","Pasir halus sahaja"],b:0,u:"Air tetap perlu didihkan selepas dituras."},
 {j:"pilih",t:"Awak mereka sistem mengitar semula air wuduk atau sinki untuk menyiram pokok sekolah. Langkah penting?",p:["Tapis sisa pepejal sebelum digunakan","Minum air itu selepas ditapis","Campurkan air itu dengan sabun","Simpan air terbuka berminggu-minggu"],b:0,u:"Air kelabu sesuai untuk menyiram, bukan untuk diminum."},
 {j:"pilih",t:"Awak mereka kempen penjimatan air di rumah. Tindakan paling berkesan?",p:["Tutup paip semasa memberus gigi","Siram pokok pada tengah hari","Basuh kereta dengan hos setiap hari","Mandi lebih lama"],b:0,u:"Paip yang dibiarkan terbuka membazirkan banyak liter setiap minit."},
 {j:"pilih",t:"Awak mereka alat penyulingan suria untuk pulau kecil. Bahagian mana perlu hitam?",p:["Dasar bekas air","Penutup lutsinar","Saluran pengumpul","Bekas air tulen"],b:0,u:"Permukaan hitam menyerap haba dan mempercepat penyejatan."},
 {j:"pilih",t:"Awak mereka cat untuk projek seni sekolah menggunakan pelarut bukan air. Pelarut paling sesuai untuk cat minyak?",p:["Turpentin","Air suling","Garam","Cuka"],b:0,u:"Cat minyak larut dalam turpentin."},
 {j:"pilih",t:"Awak mahu mengajar murid kecil tentang tegangan permukaan. Aktiviti paling sesuai?",p:["Mengapungkan klip kertas di atas air","Mendidihkan air di dalam kuali","Melarutkan gula ke dalam teh","Membekukan air di dalam peti"],b:0,u:"Klip kertas terapung kerana tegangan permukaan, walaupun ia lebih tumpat daripada air."},
 {j:"pilih",t:"Sekolah mahu menadah air hujan untuk tandas. Ciri paling penting?",p:["Tangki bertutup dengan penapis daun","Tangki terbuka tanpa penutup","Tangki kecil di dalam kelas","Tangki di bawah tanah tanpa saluran"],b:0,u:"Penutup mengelak nyamuk membiak, dan penapis menghalang daun menyumbat paip."},
 {j:"pilih",t:"Bagaimanakah awak menguji keberkesanan penuras air rekaan awak?",p:["Bandingkan kekeruhan air sebelum dan selepas","Minum air itu terus","Timbang penuras sahaja","Tanya rakan sama ada penuras cantik"],b:0,u:"Kekeruhan boleh dinilai dengan alat atau skala warna."}],
 bos:{j:"buka",
  t:"Sekolah awak menghadapi catuan air semasa musim kemarau. Reka satu sistem atau kempen untuk memastikan sekolah mempunyai bekalan air yang mencukupi dan selamat.",
  arahan:"Terangkan rekaan awak, sumber air dan kaedah pembersihan yang digunakan, konsep sains berkaitan (contohnya penyejatan, penurasan atau pengklorinan), cara mengukur penjimatan atau kualiti air, serta kos dan penglibatan warga sekolah.",
  u:"Jawapan TP6 yang kukuh memilih kaedah pembersihan yang sesuai dengan sumber air, mengambil kira penyejatan dan penjimatan, dan merancang pengukuran yang realistik."}}
];

module.exports = {
  id:"t2b5", tingkatan:2, kod:"5.0 Air dan Larutan",
  tajuk:"Laluan Air",
  subtajuk:"Sains Ting. 2 · Bab 5 Air dan Larutan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali sifat fizik air, istilah larutan dan kaedah pembersihan air. Langkah seterusnya ialah menjelaskan faktor penyejatan dan keterlarutan.",
   2:"{n} memahami faktor penyejatan, keterlarutan dan peringkat pembekalan air serta dapat menjelaskannya. Perlu lebih banyak latihan mentafsir data eksperimen.",
   3:"{n} boleh mengenal pasti faktor yang mempengaruhi kadar penyejatan daripada data dan mengaplikasikannya dalam kehidupan harian. Galakkan membanding satu faktor pada satu masa.",
   4:"{n} mampu menganalisis data keterlarutan untuk menerangkan kesan suhu, kacauan dan saiz zat terlarut. Seterusnya latih menilai kaedah pembersihan air.",
   5:"{n} dapat menilai kaedah pembersihan dan pembekalan air berdasarkan keberkesanan dan kos. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta sistem atau kempen air yang kreatif, selamat dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Air dan Larutan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ molekulair:R_MOLEKULAIR, jemur:R_JEMUR, sejat:T_SEJAT, larut:T_LARUT, bersih:T_BERSIH },
  aras:ARAS
};
