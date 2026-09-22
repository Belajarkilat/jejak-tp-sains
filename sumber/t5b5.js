/* Sumber kandungan — Sains KSSM Tingkatan 5, Bidang 5.0 Sebatian Karbon.
   Fail ini disunting tangan. Jalankan `node bina.js t5b5` untuk menyemaknya
   dan menghasilkan bank-t5b5.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4 dan 5, Bahagian Pembangunan Kurikulum, Terbitan 2018, muka 143.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran saintifik mengenai sebatian karbon.",
"Memahami sebatian karbon dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai sebatian karbon dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai sebatian karbon dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai sebatian karbon dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains sebatian karbon dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_KITAR_KARBON = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"CO2 di atmosfera diserap tumbuhan melalui fotosintesis", isi:"hijauLembut", panah:"hijau" },
    { label:"Karbon disimpan dalam tisu tumbuhan dan haiwan", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Respirasi dan pembakaran membebaskan CO2 semula", isi:"merahLembut", panah:"merah", nota:"↻ kembali" },
    { label:"CO2 kembali ke atmosfera, kitaran bersambung", isi:"kuningLembut" },
  ],
  kapsyen:"Rajah 1 · Kitar karbon dalam alam sekitar.",
  alt:"Rajah aliran menegak kitar karbon: karbon dioksida di atmosfera diserap tumbuhan, disimpan dalam tisu, dibebaskan semula melalui respirasi dan pembakaran"
};

const T_ALKANA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Alkana</th><th>Formula</th>'+
'<th class="n">Bil. atom C</th><th class="n">Takat didih (°C)</th></tr></thead><tbody>'+
'<tr><td>Metana</td><td>CH4</td><td class="n">1</td><td class="n">&minus;162</td></tr>'+
'<tr><td>Etana</td><td>C2H6</td><td class="n">2</td><td class="n">&minus;89</td></tr>'+
'<tr><td>Propana</td><td>C3H8</td><td class="n">3</td><td class="n">&minus;42</td></tr>'+
'<tr><td>Butana</td><td>C4H10</td><td class="n">4</td><td class="n">&minus;1</td></tr>'+
'<tr><td>Pentana</td><td>C5H12</td><td class="n">5</td><td class="n">36</td></tr>'+
'</tbody></table></div><p class="qnote">Data takat didih pada tekanan atmosfera piawai.</p>';

const T_LEMAK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sumber</th>'+
'<th class="n">Lemak tepu (%)</th><th class="n">Lemak tak tepu (%)</th><th class="n">Kolesterol (mg/100g)</th></tr></thead><tbody>'+
'<tr><td>Minyak kelapa</td><td class="n">87</td><td class="n">13</td><td class="n">0</td></tr>'+
'<tr><td>Minyak sawit</td><td class="n">50</td><td class="n">50</td><td class="n">0</td></tr>'+
'<tr><td>Minyak zaitun</td><td class="n">14</td><td class="n">86</td><td class="n">0</td></tr>'+
'<tr><td>Mentega</td><td class="n">63</td><td class="n">37</td><td class="n">215</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai per 100g bahan.</p>';

const R_EKSTRAK = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Buah tandan segar dituai dan dihantar ke kilang", isi:"hijauLembut", panah:"hijau" },
    { label:"Pengukusan melembutkan isi dan memusnahkan enzim", isi:"kuningLembut", panah:"kuning" },
    { label:"Pengempaan mengeluarkan minyak mentah daripada isi buah", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Penulenan membuang kekotoran dan air", isi:"merahLembut", panah:"merah" },
    { label:"Minyak sawit tulen siap diproses lanjut", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 1 · Proses pengekstrakan minyak sawit secara industri.",
  alt:"Rajah aliran menegak lima langkah pengekstrakan minyak sawit: penuaian, pengukusan, pengempaan, penulenan, minyak tulen"
};

const R_SAPONIFIKASI = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Minyak sawit dicampur dengan larutan alkali (NaOH)", isi:"kuningLembut", panah:"kuning" },
    { label:"Campuran dipanaskan sambil dikacau", isi:"merahLembut", panah:"merah" },
    { label:"Tindak balas saponifikasi berlaku", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Sabun dan gliserol terhasil", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 2 · Proses saponifikasi menghasilkan sabun daripada minyak sawit.",
  alt:"Rajah aliran menegak empat langkah saponifikasi: campur minyak dengan alkali, panaskan, tindak balas saponifikasi, hasil sabun dan gliserol"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Sumber Karbon", sk:"5.1 Pengenalan Sebatian Karbon", lampiran:"kitarkarbon",
 kadNama:"Grafit", kadEm:"⚫", kadFakta:"Grafit dan intan kedua-duanya dibina hanya daripada atom karbon, tetapi susunan atom yang berbeza menjadikan grafit lembut dan intan bahan paling keras yang wujud secara semula jadi.",
 bosKadNama:"Kitar Karbon", bosKadEm:"\u{1F30D}", bosKadFakta:"Setiap atom karbon dalam badan kita pernah menjadi sebahagian daripada atmosfera Bumi sebagai karbon dioksida, mungkin berjuta tahun dahulu.",
 soalan:[
 {j:"pilih",t:"Sebatian karbon organik ialah sebatian karbon yang:",p:["Kebanyakannya berasal daripada hidupan dan mengandungi ikatan karbon-hidrogen","Hanya terbentuk secara semula jadi di dalam bumi tanpa melibatkan hidupan langsung","Tidak mengandungi atom karbon langsung, hanya hidrogen dan oksigen sahaja","Sentiasa berbentuk gas pada suhu bilik tanpa sebarang pengecualian sekalipun"],b:0,u:"Sebatian bukan organik seperti karbon dioksida dan karbonat tidak memerlukan asal usul hidupan."},
 {j:"pilih",t:"Antara berikut, yang manakah CONTOH sebatian karbon bukan organik?",p:["Karbon dioksida","Glukosa ringkas semula jadi","Protein tulen berkualiti tinggi","Lemak tepu daripada haiwan"],b:0,u:"Karbon dioksida ialah sebatian karbon ringkas yang tidak dikelaskan sebagai organik walaupun mengandungi karbon."},
 {j:"pilih",t:"Dalam kitar karbon, proses manakah mengeluarkan karbon dioksida DARIPADA atmosfera?",p:["Fotosintesis oleh tumbuhan","Respirasi oleh haiwan","Pembakaran bahan api fosil","Pereputan bahan organik"],b:0,u:"Fotosintesis menggunakan CO2 untuk menghasilkan glukosa, jadi ia mengurangkan CO2 di atmosfera."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah karbon kembali ke atmosfera?",p:["Melalui respirasi dan pembakaran","Melalui fotosintesis sahaja","Karbon kekal selamanya dalam tisu hidupan","Melalui proses penyejatan air"],b:0,u:"Rajah menunjukkan respirasi dan pembakaran membebaskan semula CO2 yang tersimpan."},
 {j:"pilih",t:"Petroleum dan arang batu dikelaskan sebagai bahan api fosil kerana:",p:["Terbentuk daripada sisa hidupan purba yang termampat berjuta tahun","Diperbuat secara sintetik dalam kilang petrokimia moden","Mengandungi hanya unsur karbon tanpa hidrogen langsung","Dihasilkan daripada tumbuhan yang ditanam khas untuk tujuan itu sahaja"],b:0,u:"Bahan api fosil terbentuk daripada mampatan sisa organisma purba dalam tempoh geologi yang panjang."},
 {j:"pilih",t:"Mengapakah kitar karbon penting untuk kelangsungan hidupan di Bumi?",p:["Ia mengekalkan bekalan karbon yang boleh diguna semula","Ia menghapuskan semua karbon daripada atmosfera secara kekal dan total","Ia hanya melibatkan pergerakan karbon di dalam lautan sahaja tanpa darat","Ia menukar semua karbon kepada oksigen tulen sepenuhnya"],b:0,u:"Kitaran memastikan karbon sentiasa beredar dan boleh digunakan semula oleh tumbuhan dan haiwan."},
 {j:"susun",t:"Susun urutan peristiwa dalam kitar karbon bermula daripada karbon dioksida di atmosfera.",p:["CO2 di atmosfera diserap tumbuhan","Karbon disimpan dalam tisu tumbuhan","Haiwan memakan tumbuhan, karbon berpindah","Respirasi dan pembakaran membebaskan CO2 semula"],b:[0,1,2,3],u:"Kitaran bermula dengan penyerapan dan berakhir dengan pembebasan semula ke atmosfera."},
 {j:"pilih",t:"Intan dan grafit kedua-duanya dibina daripada atom karbon tulen. Mengapakah sifat fiziknya sangat berbeza?",p:["Susunan atom karbon dalam struktur kristalnya berbeza","Grafit mengandungi atom hidrogen tambahan, intan tidak","Intan sebenarnya bukan sebatian karbon","Grafit terbentuk daripada tumbuhan, intan daripada haiwan"],b:0,u:"Susunan atom yang berbeza (allotropi) menghasilkan sifat fizik yang jauh berbeza walaupun unsur sama."}],
 bos:{j:"banyak",t:"Pilih SEMUA yang merupakan sebatian karbon organik.",p:["Glukosa","Protein","Karbon dioksida","Lemak","Batu kapur (kalsium karbonat)"],b:[0,1,3],u:"Karbon dioksida dan batu kapur ialah sebatian karbon bukan organik walaupun mengandungi atom karbon."}},

{n:2, tempat:"Rantai Hidrokarbon", sk:"5.2 Hidrokarbon", lampiran:"alkana",
 kadNama:"Metana", kadEm:"\u{1F525}", kadFakta:"Metana ialah ahli paling ringkas dalam kumpulan alkana dan komponen utama gas asli yang digunakan untuk memasak.",
 bosKadNama:"Kumpulan Homolog", bosKadEm:"⛓", bosKadFakta:"Ahli kumpulan homolog mempunyai formula am yang sama dan sifat kimia yang serupa, walaupun bilangan atom karbonnya berbeza.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, apakah corak perubahan takat didih alkana apabila bilangan atom karbon bertambah?",p:["Takat didih meningkat secara konsisten","Takat didih menurun secara konsisten","Takat didih tidak berubah langsung","Takat didih meningkat kemudian menurun mendadak"],b:0,u:"Rantai karbon yang lebih panjang meningkatkan daya tarikan antara molekul, jadi lebih banyak tenaga diperlukan untuk mendidih."},
 {j:"pilih",t:"Formula am bagi kumpulan alkana ialah CnH2n+2. Apakah formula bagi heksana (C6)?",p:["C6H14","C6H12","C6H6","C6H18"],b:0,u:"Gantikan n=6: 2(6)+2 = 14 atom hidrogen."},
 {j:"pilih",t:"Apakah perbezaan utama antara alkana dan alkena?",p:["Alkena ada ikatan ganda dua karbon-karbon, alkana hanya ikatan tunggal","Alkena tidak mengandungi atom hidrogen langsung sama sekali","Alkana hanya wujud dalam keadaan gas, alkena dalam keadaan cecair sahaja","Alkena mempunyai lebih banyak atom karbon berbanding alkana sentiasa"],b:0,u:"Ikatan ganda dua menjadikan alkena tak tepu, manakala alkana ialah hidrokarbon tepu."},
 {j:"pilih",t:"Berdasarkan jadual, pada suhu bilik (kira-kira 25°C), yang manakah berkeadaan CECAIR?",p:["Pentana sahaja","Butana dan pentana","Metana, etana dan propana","Kesemua lima alkana dalam jadual"],b:0,u:"Pentana mendidih pada 36°C, lebih tinggi daripada suhu bilik, jadi ia masih cecair pada 25°C. Alkana lain sudah mendidih di bawah suhu bilik dan menjadi gas."},
 {j:"pilih",t:"Mengapakah gas asli (metana) sesuai digunakan sebagai bahan api masakan berbanding pentana?",p:["Metana kekal gas pada suhu bilik jadi mudah disalur melalui paip panjang","Metana lebih berat daripada pentana jadi lebih selamat digunakan","Pentana tidak boleh terbakar langsung dalam apa jua keadaan","Metana tidak mengandungi karbon jadi ia lebih bersih"],b:0,u:"Takat didih rendah metana bermakna ia sentiasa gas pada suhu bilik, sesuai untuk sistem penyaluran paip gas."},
 {j:"pilih",t:"Petroleum mentah dipisahkan kepada hidrokarbon berlainan melalui penyulingan berperingkat. Prinsip asas kaedah ini ialah:",p:["Setiap hidrokarbon mempunyai takat didih yang berbeza-beza","Setiap hidrokarbon mempunyai warna yang berbeza-beza","Hidrokarbon yang lebih ringan sentiasa lebih toksik berbanding lain","Semua hidrokarbon mempunyai ketumpatan yang sama tepat"],b:0,u:"Komponen dengan takat didih rendah termeruap dahulu dan dikumpul pada bahagian atas turus penyulingan."},
 {j:"susun",t:"Susun alkana berikut mengikut turutan takat didih MENINGKAT.",p:["Metana","Propana","Butana","Pentana"],b:[0,1,2,3],u:"Rantai karbon lebih panjang bermakna takat didih lebih tinggi, seperti dalam jadual."},
 {j:"nombor",t:"Berdasarkan jadual, berapa darjah Celsius bezanya antara takat didih pentana dan takat didih metana?",b:198,tol:2,suf:"°C",u:"36 tolak (-162) bersamaan 198°C."}],
 bos:{j:"pilih",t:"Berdasarkan corak dalam jadual, ramalkan keadaan jirim heksana (C6H14) pada suhu bilik (25°C).",p:["Cecair, kerana rantai lebih panjang daripada pentana bermakna takat didih lebih tinggi daripada 25°C","Gas, kerana heksana mempunyai lebih atom hidrogen berbanding pentana","Pepejal, kerana heksana ialah alkana paling besar dalam kumpulan homolog","Tidak dapat ditentukan kerana heksana bukan ahli kumpulan alkana"],b:0,u:"Mengikut trend jadual, takat didih heksana melebihi 36°C (anggaran ~69°C), jadi ia cecair pada suhu bilik."}},

{n:3, tempat:"Fermentasi ke Farmasi", sk:"5.3 Alkohol",
 kadNama:"Etanol", kadEm:"\u{1F9EA}", kadFakta:"Etanol yang dihasilkan melalui penapaian gula oleh yis telah digunakan manusia sejak lebih 7000 tahun untuk membuat minuman beralkohol.",
 bosKadNama:"Penyulingan", bosKadEm:"⚗", bosKadFakta:"Penyulingan memisahkan etanol dan air kerana etanol mendidih pada 78°C, lebih rendah daripada air pada 100°C.",
 soalan:[
 {j:"pilih",t:"Proses penapaian (fermentasi) menghasilkan etanol daripada gula dengan bantuan:",p:["Yis (sejenis kulat bersel tunggal)","Asid sulfurik pekat","Enzim daripada bakteria E. coli sahaja","Haba tanpa sebarang organisma"],b:0,u:"Yis menghasilkan enzim yang menukar gula kepada etanol dan karbon dioksida secara anaerobik."},
 {j:"pilih",t:"Selepas penapaian, mengapakah proses penyulingan diperlukan untuk menghasilkan etanol tulen?",p:["Campuran penapaian mengandungi etanol bercampur air dan bahan lain sekali","Penapaian menghasilkan etanol tulen 100% tanpa sebarang campuran langsung","Penyulingan menukar etanol kepada gula semula sepenuhnya","Penyulingan diperlukan untuk membunuh yis itu sahaja"],b:0,u:"Penyulingan memisahkan etanol daripada air dan baki bahan berdasarkan perbezaan takat didih."},
 {j:"pilih",t:"Antara berikut, yang manakah SIFAT FIZIK etanol?",p:["Cecair mudah meruap dengan bau yang khas pada suhu bilik itu","Pepejal keras pada suhu bilik yang sejuk","Tidak larut langsung dalam air sama sekali","Tidak berwarna tetapi sangat likat seperti madu lebah"],b:0,u:"Etanol ialah cecair jernih, mudah meruap, dan boleh bercampur sepenuhnya dengan air."},
 {j:"pilih",t:"Apakah hasil tindak balas apabila etanol DIBAKAR sepenuhnya dalam oksigen berlebihan?",p:["Karbon dioksida dan air","Karbon monoksida dan hidrogen","Hanya jelaga karbon tulen","Oksigen dan nitrogen"],b:0,u:"Pembakaran lengkap sebatian karbon menghasilkan karbon dioksida dan wap air."},
 {j:"pilih",t:"Tindak balas pengesteran antara etanol dan asid karboksilik menghasilkan:",p:["Ester yang berbau harum, digunakan dalam perisa dan minyak wangi mahal","Gas hidrogen yang mudah terbakar dengan cepat","Garam dan air sahaja seperti proses peneutralan","Etanol yang lebih tulen daripada bahan asal itu"],b:0,u:"Pengesteran antara alkohol dan asid menghasilkan ester dan air, ester sering berbau harum."},
 {j:"pilih",t:"Antara berikut, yang manakah kegunaan HARIAN etanol dalam perubatan?",p:["Sebagai antiseptik untuk membersihkan luka dan peralatan perubatan","Sebagai bahan pengawet makanan bertin yang tahan lama","Sebagai pemanis buatan dalam ubat kanak-kanak yang pahit","Sebagai bahan pewarna dalam kapsul ubat yang telus"],b:0,u:"Sifat etanol yang membunuh mikroorganisma menjadikannya antiseptik berkesan."},
 {j:"pilih",t:"Aiman meminum alkohol secara berlebihan setiap hujung minggu selama setahun. Kesan JANGKA PANJANG paling mungkin ialah:",p:["Kerosakan hati kerana organ itu memproses kebanyakan alkohol dalam badan kita","Peningkatan ketajaman penglihatan secara kekal dan berterusan","Pertumbuhan tulang yang lebih pantas daripada biasa","Tiada kesan kerana badan manusia tahan terhadap alkohol sepenuhnya"],b:0,u:"Hati ialah organ utama yang memetabolismekan alkohol, jadi pengambilan berlebihan berpanjangan merosakkannya."},
 {j:"susun",t:"Susun urutan langkah menghasilkan etanol tulen daripada jus buah-buahan.",p:["Tambah yis ke dalam jus buah yang mengandungi gula","Biarkan penapaian berlaku secara anaerobik","Panaskan campuran dalam radas penyulingan","Kumpul wap etanol pada 78°C dan sejukkan"],b:[0,1,2,3],u:"Penapaian menghasilkan campuran etanol-air, kemudian penyulingan memisahkan etanol tulen."}],
 bos:{j:"pilih",t:"Sebuah kilang mahu menghasilkan etanol untuk kegunaan industri daripada sisa tebu. Langkah paling wajar untuk memulakan proses ialah:",p:["Mengekstrak gula daripada sisa tebu, lalu menapaikannya dengan yis","Terus menyuling sisa tebu tanpa sebarang penapaian awal","Membakar sisa tebu untuk menghasilkan etanol secara terus dan cepat","Mencampur sisa tebu dengan asid sulfurik pekat sahaja tanpa lain"],b:0,u:"Etanol dihasilkan melalui penapaian gula, jadi gula perlu diekstrak dan ditapaikan dahulu sebelum disuling."}},

{n:4, tempat:"Lemak dalam Pinggan", sk:"5.4 Lemak", lampiran:"lemak",
 kadNama:"Lemak Tepu", kadEm:"\u{1F9C8}", kadFakta:"Lemak tepu biasanya berkeadaan pepejal pada suhu bilik kerana molekulnya tersusun rapat, manakala lemak tak tepu kekal cecair.",
 bosKadNama:"Kolesterol", bosKadEm:"❤", bosKadFakta:"Badan manusia sebenarnya menghasilkan kolesterol sendiri di hati; kolesterol daripada makanan hanyalah sebahagian daripada jumlah dalam badan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, minyak manakah mempunyai peratusan lemak TAK TEPU paling tinggi?",p:["Minyak zaitun","Minyak kelapa","Mentega","Minyak sawit"],b:0,u:"Minyak zaitun mencatatkan 86% lemak tak tepu, paling tinggi dalam jadual."},
 {j:"pilih",t:"Apakah perbezaan struktur molekul antara lemak tepu dan lemak tak tepu?",p:["Lemak tak tepu ada sekurang-kurangnya satu ikatan ganda dua karbon","Lemak tepu mengandungi lebih banyak atom oksigen berbanding tak tepu","Lemak tak tepu tidak mengandungi atom karbon langsung sama sekali","Lemak tepu sentiasa berasal daripada tumbuhan sahaja"],b:0,u:"Ikatan ganda dua menjadikan rantai lemak tak tepu kurang tersusun rapat, jadi ia kekal cecair pada suhu bilik."},
 {j:"pilih",t:"Berdasarkan jadual, hanya SATU sumber mengandungi kolesterol. Sumber itu ialah:",p:["Mentega, kerana ia berasal daripada haiwan","Sawit, kerana peratusan lemak tepunya tinggi","Kelapa, kerana ia berkeadaan pepejal","Zaitun, kerana ia paling banyak digunakan"],b:0,u:"Kolesterol hanya terdapat dalam lemak haiwan; minyak tumbuhan seperti kelapa, sawit dan zaitun tidak mengandungi kolesterol."},
 {j:"pilih",t:"Mengapakah pengambilan lemak tepu berlebihan dikaitkan dengan risiko penyakit jantung?",p:["Ia boleh meningkatkan kolesterol LDL yang menyumbat salur darah kita","Ia terus merosakkan otot jantung secara fizikal dan kekal","Ia menyebabkan jantung berhenti menghasilkan darah sepenuhnya","Ia tidak mempunyai kaitan langsung, hanya mitos semata-mata"],b:0,u:"Lemak tepu berlebihan boleh meningkatkan kolesterol LDL ('kolesterol jahat') yang mengumpul pada dinding salur darah."},
 {j:"pilih",t:"Berdasarkan jadual, susunan minyak daripada PALING TEPU kepada PALING TAK TEPU ialah:",p:["Minyak kelapa, mentega, minyak sawit, minyak zaitun","Minyak zaitun, minyak sawit, mentega, minyak kelapa","Mentega, minyak zaitun, minyak kelapa, minyak sawit","Minyak sawit, minyak kelapa, minyak zaitun, mentega"],b:0,u:"Ikut peratus lemak tepu: kelapa 87%, mentega 63%, sawit 50%, zaitun 14%."},
 {j:"pilih",t:"Seorang pemakan mahu mengurangkan risiko penyakit jantung tanpa berhenti menggunakan minyak masak. Pilihan paling wajar berdasarkan jadual ialah:",p:["Bertukar daripada mentega kepada minyak zaitun","Bertukar daripada minyak zaitun kepada minyak kelapa","Menggandakan penggunaan mentega untuk rasa lebih sedap","Menggunakan minyak kelapa kerana ia bebas kolesterol"],b:0,u:"Minyak zaitun mempunyai lemak tak tepu paling tinggi dan tiada kolesterol, jadi pertukaran ini paling menyihatkan berdasarkan data."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh jadual.",p:["Minyak sawit mempunyai lemak tepu dan tak tepu dalam nisbah hampir sama","Kesemua empat sumber itu bebas daripada kolesterol","Mentega ialah satu-satunya sumber haiwan dalam jadual","Minyak kelapa mempunyai peratusan lemak tepu tertinggi","Minyak zaitun mengandungi kolesterol yang paling tinggi"],b:[0,2,3],u:"Mentega mengandungi 215mg kolesterol (bukan bebas kolesterol), dan minyak zaitun tiada kolesterol langsung."},
 {j:"nombor",t:"Berapa peratus lebih tinggi kandungan lemak tepu minyak kelapa berbanding minyak sawit?",b:37,tol:1,suf:"%",u:"87% tolak 50% bersamaan 37 mata peratus."}],
 bos:{j:"banyak",t:"Sebuah restoran mahu menukar semua minyak masak kepada pilihan yang lebih menyihatkan berdasarkan jadual. Pilih SEMUA langkah yang disokong oleh data.",p:["Gantikan mentega dengan minyak zaitun untuk masakan sejuk","Kekalkan penggunaan minyak kelapa kerana ia bebas kolesterol","Elakkan mentega sepenuhnya dalam menu berisiko tinggi","Gunakan lebih banyak minyak sawit kerana nisbahnya seimbang"],b:[0,2],u:"Minyak kelapa masih tinggi lemak tepu (87%) walaupun bebas kolesterol, jadi ia bukan pilihan paling sihat; menambah kuantiti minyak sawit bukan strategi kesihatan yang disokong data."}},

{n:5, tempat:"Emas Cair Malaysia", sk:"5.5 Minyak Sawit", lampiran:"ekstrak",
 kadNama:"Buah Tandan Segar", kadEm:"\u{1F334}", kadFakta:"Satu tandan kelapa sawit boleh mengandungi lebih 1000 buah individu, dan Malaysia antara pengeluar minyak sawit terbesar dunia.",
 bosKadNama:"MPOB", bosKadEm:"\u{1F3ED}", bosKadFakta:"Lembaga Minyak Sawit Malaysia (MPOB) menyelidik cara mengurangkan sisa dan meningkatkan kelestarian industri sawit negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah buah kelapa sawit perlu DIKUKUS sebelum dikempa?",p:["Untuk melembutkan isi buah dan musnahkan enzim yang merosakkan minyak","Untuk terus menukar isi buah kepada minyak tanpa pengempaan langsung","Untuk membersihkan buah daripada tanah dan habuk sahaja tanpa lain","Untuk mewarnakan minyak supaya kelihatan lebih menarik di pasaran"],b:0,u:"Pengukusan melembutkan isi buah untuk memudahkan pengempaan, dan memusnahkan enzim lipase yang boleh merosakkan kualiti minyak."},
 {j:"pilih",t:"Nilaikan kenyataan: 'Penulenan tidak perlu kerana minyak mentah sudah cukup baik untuk dimakan.'",p:["Tidak tepat; minyak mentah masih mengandungi kekotoran dan air untuk dibuang","Tepat, kerana minyak mentah sentiasa steril selepas pengukusan itu","Tepat, kerana penulenan hanya untuk tujuan kosmetik warna sahaja","Tidak tepat, kerana pengukusan sudah menggantikan keperluan penulenan itu"],b:0,u:"Minyak mentah terus daripada pengempaan masih kotor dan mengandungi air, jadi penulenan penting untuk kualiti dan jangka hayat."},
 {j:"pilih",t:"Sebuah kilang mahu mengurangkan sisa dalam proses pengekstrakan minyak sawit. Cadangan PALING wajar berdasarkan konsep sifar sisa (zero waste)?",p:["Guna semula sisa isirung dan tandan kosong sebagai baja","Buang terus semua sisa ke sungai berdekatan untuk jimat kos operasi","Bakar semua sisa tanpa sebarang kawalan pencemaran udara sekitar","Hentikan sepenuhnya pengeluaran minyak sawit di negara ini"],b:0,u:"Konsep sifar sisa menggalakkan sisa diguna semula, bukan dibuang atau dibakar tanpa kawalan."},
 {j:"pilih",t:"Minyak sawit sering dikritik oleh sesetengah pihak antarabangsa atas isu alam sekitar. Penilaian paling adil berdasarkan bukti sains?",p:["Kritikan perlu ditimbang dengan usaha pengurusan lestari seperti guna sisa","Kritikan sentiasa tepat sepenuhnya tanpa sebarang pengecualian langsung","Kritikan sentiasa tidak berasas dan boleh diabaikan sepenuhnya begitu sahaja","Isu ini tidak berkaitan dengan sains langsung, hanya politik semata-mata"],b:0,u:"Penilaian saintifik yang adil menimbang kedua-dua bukti kesan alam sekitar dan usaha pengurusan lestari yang telah dilaksanakan."},
 {j:"pilih",t:"Apakah kepentingan MPOB (Lembaga Minyak Sawit Malaysia) dalam industri ini?",p:["Menyelidik dan tetapkan standard tingkat kualiti dan kelestarian sawit","Menghasilkan semua minyak sawit negara secara terus tanpa lain","Mengawal harga semua minyak masak di pasaran tempatan sahaja","Menggantikan peranan kilang persendirian sepenuhnya di negara ini"],b:0,u:"MPOB berperanan sebagai badan penyelidikan dan penetapan standard, bukan pengeluar langsung."},
 {j:"pilih",t:"Berdasarkan Rajah 1, jika langkah PENGUKUSAN dilangkau, apakah kesan paling mungkin terhadap minyak yang dihasilkan?",p:["Kualiti minyak menurun kerana enzim perosak minyak tidak dimusnahkan","Kuantiti minyak akan meningkat dua kali ganda daripada biasa","Warna minyak akan bertukar menjadi biru gelap","Tiada kesan langsung kerana pengukusan hanya langkah kosmetik semata-mata"],b:0,u:"Tanpa pengukusan, enzim lipase dalam buah akan terus memecahkan minyak dan menurunkan kualitinya."},
 {j:"pilih",t:"Bandingkan komposisi minyak sawit dengan minyak sayuran lain seperti minyak zaitun. Penilaian paling tepat ialah:",p:["Kedua-dua jenis ada nisbah lemak tepu dan tak tepu berbeza, sesuai kegunaan lain","Minyak sawit dan minyak zaitun mempunyai komposisi kimia yang serupa sepenuhnya sekali","Hanya minyak sawit mengandungi asid lemak, minyak lain tidak langsung","Minyak zaitun tidak boleh digunakan untuk memasak langsung, walau apa cara sekalipun"],b:0,u:"Setiap minyak sayuran mempunyai nisbah lemak tepu-tak tepu tersendiri, menjadikan setiap satu sesuai untuk kegunaan berbeza."},
 {j:"susun",t:"Susun urutan proses pengekstrakan minyak sawit mengikut Rajah 1.",p:["Penuaian buah tandan segar","Pengukusan buah","Pengempaan mengeluarkan minyak mentah","Penulenan minyak"],b:[0,1,2,3],u:"Urutan ini memastikan minyak yang dihasilkan berkualiti tinggi dan tahan lama."}],
 bos:{j:"pilih",t:"Sebuah kilang kecil ingin memasuki pasaran minyak sawit tetapi berhadapan tekanan daripada kempen antarabangsa yang mendakwa semua minyak sawit tidak lestari. Tindakan PALING wajar berdasarkan bukti sains dan pengurusan lestari?",p:["Mendapat pensijilan kelestarian dan amalkan pengurusan sisa telus buktikan amalan","Mengabaikan sepenuhnya kempen tersebut tanpa sebarang tindakan susulan","Berhenti terus daripada industri tanpa menyiasat dakwaan tersebut dahulu","Menafikan semua isu alam sekitar dalam sebarang kenyataan awam rasmi"],b:0,u:"Bukti dan ketelusan (pensijilan, pengurusan sisa) ialah respons paling berasaskan sains untuk menangani kritikan sambil terus beroperasi secara bertanggungjawab."}},

{n:6, tempat:"Sabun Tulen", sk:"5.5 Minyak Sawit · Saponifikasi", lampiran:"saponifikasi",
 kadNama:"Saponifikasi", kadEm:"\u{1F9FC}", kadFakta:"Perkataan 'saponifikasi' berasal daripada bahasa Latin 'sapo' yang bermaksud sabun, proses ini telah digunakan manusia sejak ribuan tahun dahulu.",
 bosKadNama:"Reka Bentuk Lestari", bosKadEm:"♻", bosKadFakta:"Sabun buatan sendiri daripada minyak terpakai bukan sahaja mengurangkan sisa tetapi juga mengelakkan minyak itu mencemarkan sistem perparitan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah DUA hasil utama tindak balas saponifikasi?",p:["Sabun dan gliserol","Minyak dan air sahaja","Alkali dan asid","Karbon dioksida dan wap air"],b:0,u:"Saponifikasi antara minyak/lemak dengan alkali menghasilkan sabun dan gliserol sebagai hasil sampingan."},
 {j:"pilih",t:"Bahagian molekul sabun manakah yang 'suka air' (hidrofilik)?",p:["Bahagian berkepala ion yang larut dalam air","Bahagian rantai karbon panjang yang menolak air","Kesemua molekul sabun menolak air sepenuhnya","Sabun tidak mempunyai sebarang bahagian yang berinteraksi dengan air"],b:0,u:"Kepala ion sabun larut dalam air (hidrofilik) manakala ekor hidrokarbon menolak air (hidrofobik) tetapi larut dalam minyak/kekotoran."},
 {j:"pilih",t:"Bagaimanakah molekul sabun membersihkan kekotoran berminyak daripada kain?",p:["Ekor hidrofobik melekat pada minyak, kepala hidrofilik menarik gumpalan itu ke dalam air","Ia menukar minyak kepada air secara kimia","Ia memusnahkan serat kain untuk melepaskan kekotoran","Ia hanya berfungsi melalui haba tanpa sebarang tindakan kimia"],b:0,u:"Struktur dwi-sifat sabun membentuk misel yang memerangkap minyak dan membawanya bersama air semasa dibilas."},
 {j:"pilih",t:"Reka bentuk sabun daripada minyak masak terpakai membantu kelestarian alam sekitar kerana:",p:["Ia mengelakkan minyak terpakai mencemarkan sistem perparitan dan sumber air","Ia menghasilkan lebih banyak sisa plastik berbanding sabun biasa","Ia memerlukan lebih banyak tenaga elektrik berbanding pembuatan sabun kilang","Ia tidak memberi sebarang kesan kepada alam sekitar"],b:0,u:"Minyak terpakai yang dibuang terus boleh menyumbat paip dan mencemari air; mengitarnya menjadi sabun mengurangkan masalah ini."},
 {j:"pilih",t:"Seorang murid mahu menghasilkan sabun berbau harum secara semula jadi. Cadangan PALING sesuai?",p:["Menambah bahan pewangi semula jadi seperti minyak pati semasa saponifikasi","Menambah lebih banyak alkali untuk menghasilkan bau harum tersebut","Memanaskan campuran pada suhu yang lebih tinggi sahaja tanpa lain","Mengurangkan jumlah minyak sawit dalam campuran itu sepenuhnya"],b:0,u:"Bahan pewangi semula jadi seperti minyak pati boleh ditambah semasa proses untuk menghasilkan bau harum tanpa bahan kimia sintetik."},
 {j:"pilih",t:"Apakah risiko keselamatan UTAMA semasa menjalankan proses saponifikasi di makmal sekolah?",p:["Larutan alkali (NaOH) bersifat kakisan, cederakan kulit dan mata","Minyak sawit boleh meletup secara spontan pada suhu bilik biasa","Gliserol yang terhasil bersifat sangat toksik jika tersentuh kulit kita","Proses ini tidak mempunyai sebarang risiko keselamatan langsung"],b:0,u:"Natrium hidroksida (alkali) bersifat kakisan kuat, jadi sarung tangan dan gogal perlu dipakai."},
 {j:"banyak",t:"Pilih SEMUA langkah keselamatan yang WAJAR semasa menjalankan aktiviti membuat sabun di makmal.",p:["Memakai gogal dan sarung tangan semasa mengendalikan alkali","Mengacau campuran alkali dan minyak di kawasan berventilasi baik","Merasa campuran untuk memastikan konsistensi betul","Membasuh serta-merta jika alkali tersentuh kulit"],b:[0,1,3],u:"Alkali tidak boleh dirasa kerana bersifat kakisan dan boleh mencederakan mulut serta tekak."},
 {j:"pilih",t:"Bandingkan sabun buatan sendiri daripada minyak sawit dengan sabun kilang berasaskan bahan petrokimia. Penilaian yang PALING seimbang?",p:["Sabun sawit boleh diperbaharui dan terbiodegradasi, kualiti bergantung kawalan proses","Sabun berasaskan sawit sentiasa lebih baik dalam SEMUA aspek tanpa sebarang kelemahan langsung","Sabun petrokimia sentiasa lebih murah dan lebih baik untuk alam sekitar sepenuhnya","Tiada perbezaan langsung antara kedua-dua jenis sabun itu"],b:0,u:"Penilaian saintifik yang seimbang mengakui kelebihan (boleh diperbaharui) tanpa mendakwa ia sempurna dalam semua aspek."}],
 bos:{j:"buka",
  t:"Sekolah awak mahu menganjurkan projek keusahawanan menghasilkan sabun daripada minyak masak terpakai kantin, untuk dijual bagi mengumpul dana kelas sambil mengurangkan sisa minyak.",
  arahan:"Terangkan bahan dan peralatan yang diperlukan, langkah proses saponifikasi yang akan diikuti, satu langkah keselamatan penting, dan bagaimana projek ini menyumbang kepada kelestarian alam sekitar serta nilai keusahawanan.",
  u:"Jawapan TP6 yang kukuh menggabungkan pemahaman proses saponifikasi, kesedaran keselamatan makmal, dan penaakulan kelestarian alam sekitar dengan elemen keusahawanan."}}
];

module.exports = {
  id:"t5b5", tingkatan:5, kod:"5.0 Sebatian Karbon",
  tajuk:"Laluan Karbon",
  subtajuk:"Sains Ting. 5 · Bab 5 Sebatian Karbon",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali pengetahuan asas tentang sebatian karbon organik dan bukan organik serta kitar karbon. Langkah seterusnya ialah memahami kumpulan homolog hidrokarbon, bukan sekadar menghafal takrifan.",
   2:"{n} memahami kumpulan homolog alkana dan alkena serta corak perubahan takat didih mengikut panjang rantai karbon. Galakkan lebih banyak latihan mengaitkan struktur molekul dengan sifat fizik.",
   3:"{n} boleh mengaplikasikan pengetahuan tentang penyediaan dan sifat alkohol untuk menerangkan proses harian seperti penapaian dan penyulingan. Seterusnya latih mentafsir data perbandingan pelbagai sumber lemak.",
   4:"{n} mampu menganalisis data perbandingan kandungan lemak dan kolesterol daripada pelbagai sumber, serta mengaitkannya dengan risiko kesihatan. Galakkan menilai pilihan berdasarkan bukti, bukan andaian.",
   5:"{n} dapat menilai proses pengekstrakan dan isu kelestarian industri minyak sawit berdasarkan bukti saintifik yang seimbang. Sudah bersedia untuk tugasan reka cipta melibatkan sebatian karbon.",
   6:"{n} berjaya mereka cipta cadangan projek keusahawanan berasaskan saponifikasi, lengkap dengan pertimbangan keselamatan dan kelestarian alam sekitar. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sebatian Karbon. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ kitarkarbon:R_KITAR_KARBON, alkana:T_ALKANA, lemak:T_LEMAK, ekstrak:R_EKSTRAK, saponifikasi:R_SAPONIFIKASI },
  aras:ARAS
};
