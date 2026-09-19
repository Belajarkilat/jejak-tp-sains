/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 6.0 Asid dan Alkali.
   Jalankan `node bina.js t2b6` untuk menyemak dan menghasilkan bank-t2b6.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 67.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai asid dan alkali.",
"Memahami asid dan alkali serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai asid dan alkali dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai asid dan alkali dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai asid dan alkali dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai asid dan alkali dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_PH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bahan</th>'+
'<th class="n">Nilai pH</th><th>Warna kertas litmus biru</th></tr></thead><tbody>'+
'<tr><td>Jus limau</td><td class="n">2</td><td>Merah</td></tr>'+
'<tr><td>Cuka</td><td class="n">3</td><td>Merah</td></tr>'+
'<tr><td>Air suling</td><td class="n">7</td><td>Biru</td></tr>'+
'<tr><td>Ubat gigi</td><td class="n">9</td><td>Biru</td></tr>'+
'<tr><td>Air sabun</td><td class="n">10</td><td>Biru</td></tr>'+
'<tr><td>Pencuci longkang</td><td class="n">14</td><td>Biru</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai pH diukur dengan meter pH. Kertas litmus biru bertukar merah dalam asid.</p>';

const T_TITRAT =
'<div class="scrollx"><table class="datatable"><thead><tr><th class="n">Isi padu natrium hidroksida ditambah (ml)</th>'+
'<th class="n">0</th><th class="n">5</th><th class="n">10</th><th class="n">15</th><th class="n">20</th><th class="n">25</th></tr></thead><tbody>'+
'<tr><td>pH campuran</td><td class="n">1</td><td class="n">1.5</td><td class="n">2</td><td class="n">3</td><td class="n">7</td><td class="n">12</td></tr>'+
'<tr><td>Warna fenolftalein</td><td>Tidak berwarna</td><td>Tidak berwarna</td><td>Tidak berwarna</td><td>Tidak berwarna</td><td>Tidak berwarna</td><td>Merah jambu</td></tr>'+
'</tbody></table></div><p class="qnote">Larutan natrium hidroksida ditambah sedikit demi sedikit dari buret ke dalam 20 ml asid hidroklorik. Fenolftalein tidak berwarna dalam asid dan larutan neutral, dan merah jambu dalam alkali.</p>';

const T_TANAH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Petak</th>'+
'<th class="n">pH tanah</th><th>Rawatan</th><th class="n">Hasil sayur (kg)</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">4.5</td><td>Tiada</td><td class="n">12</td></tr>'+
'<tr><td>2</td><td class="n">4.5 &rarr; 6.5</td><td>Kapur pertanian</td><td class="n">30</td></tr>'+
'<tr><td>3</td><td class="n">4.5 &rarr; 8.5</td><td>Kapur pertanian berlebihan</td><td class="n">15</td></tr>'+
'</tbody></table></div><p class="qnote">Tiga petak sayur sawi yang sama saiz di tanah gambut. Kebanyakan sayur tumbuh paling baik pada pH 6 hingga 7. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Dapur Rumah", sk:"6.1 Sifat asid dan alkali",
 kadNama:"Skala pH", kadEm:"\u{1F308}", kadFakta:"Skala pH bermula dari 0 hingga 14. pH 7 neutral, bawah 7 berasid dan atas 7 beralkali.",
 bosKadNama:"Asid Perut", bosKadEm:"\u{1F9EA}", bosKadFakta:"Perut manusia menghasilkan asid hidroklorik yang membantu membunuh kuman dalam makanan.",
 soalan:[
 {j:"pilih",t:"Bahan dengan nilai pH kurang daripada 7 ialah:",p:["Asid","Alkali","Neutral","Garam"],b:0,u:"Semakin rendah pH, semakin kuat asid."},
 {j:"pilih",t:"Asid menukarkan warna kertas litmus biru kepada:",p:["Merah","Biru","Hijau","Kuning"],b:0,u:"Alkali pula menukarkan litmus merah kepada biru."},
 {j:"pilih",t:"Sifat alkali ialah:",p:["Rasa pahit dan licin","Rasa masam","pH kurang daripada 7","Menukar litmus biru kepada merah"],b:0,u:"Jangan merasa bahan kimia di makmal."},
 {j:"pilih",t:"Contoh bahan berasid dalam dapur ialah:",p:["Cuka","Sabun","Ubat gigi","Soda penaik"],b:0,u:"Cuka mengandungi asid etanoik."},
 {j:"pilih",t:"Asid bertindak balas dengan logam magnesium untuk menghasilkan:",p:["Gas hidrogen","Gas oksigen","Gas klorin","Gas nitrogen"],b:0,u:"Gas hidrogen menghasilkan bunyi 'pop' dengan kayu uji menyala."},
 {j:"pilih",t:"Warna fenolftalein dalam alkali ialah:",p:["Merah jambu","Tidak berwarna","Kuning","Biru"],b:0,u:"Fenolftalein tidak berwarna dalam asid dan larutan neutral."},
 {j:"pilih",t:"Tindak balas antara asid dengan alkali dipanggil:",p:["Peneutralan","Pembakaran","Pengaratan","Penyejatan"],b:0,u:"Asid + alkali → garam + air."},
 {j:"banyak",t:"Pilih SEMUA bahan beralkali.",p:["Sabun","Ubat gigi","Air kapur","Jus limau","Cuka"],b:[0,1,2],u:"Jus limau dan cuka berasid."}],
 bos:{j:"pilih",t:"Hasil peneutralan asid hidroklorik dengan natrium hidroksida ialah:",p:["Natrium klorida dan air","Hidrogen dan oksigen","Karbon dioksida dan air","Natrium dan klorin"],b:0,u:"Natrium klorida ialah garam biasa."}},

{n:2, tempat:"Bilik Air", sk:"6.1 / 6.2 Kekuatan asid, alkali dan peneutralan",
 kadNama:"Ubat Gastrik", kadEm:"\u{1F48A}", kadFakta:"Ubat gastrik mengandungi bes lemah seperti magnesium hidroksida yang meneutralkan asid perut berlebihan.",
 bosKadNama:"Kapur Pertanian", bosKadEm:"\u{1F33E}", bosKadFakta:"Petani menabur kapur pada tanah berasid untuk menaikkan pH tanah.",
 soalan:[
 {j:"pilih",t:"Asid yang mempunyai pH 1 berbanding asid pH 4 adalah:",p:["Lebih kuat","Lebih lemah","Sama kuat","Neutral"],b:0,u:"Semakin rendah pH, semakin kuat asid."},
 {j:"pilih",t:"Mengapakah asid kering tidak menukar warna kertas litmus biru yang kering?",p:["Asid perlu air untuk menunjukkan sifatnya","Litmus kering tidak berwarna biru sebenarnya","Asid kering ialah alkali yang sangat lemah","Litmus hanya bertindak balas dengan gas oksigen"],b:0,u:"Asid dan alkali memerlukan air untuk menunjukkan sifatnya."},
 {j:"pilih",t:"Mengapakah ubat gastrik meredakan pedih ulu hati?",p:["Ia meneutralkan asid perut berlebihan","Ia menambah asid dalam perut","Ia membunuh semua sel perut","Ia menukar makanan kepada air"],b:0,u:"Ubat gastrik bersifat alkali lemah."},
 {j:"pilih",t:"Sengatan lebah bersifat berasid. Rawatan pertolongan cemas yang sesuai ialah menyapu:",p:["Larutan soda penaik","Jus limau nipis","Cuka makan","Air garam pekat"],b:0,u:"Soda penaik beralkali lemah dan meneutralkan asid."},
 {j:"pilih",t:"Mengapakah ubat gigi beralkali?",p:["Meneutralkan asid daripada sisa makanan","Supaya gigi menjadi lebih putih serta-merta","Supaya ubat gigi berasa masam dan segar","Untuk menambah asid yang menguatkan gigi"],b:0,u:"Bakteria dalam mulut menghasilkan asid yang merosakkan enamel gigi."},
 {j:"pilih",t:"Penunjuk yang menunjukkan julat warna untuk setiap nilai pH ialah:",p:["Penunjuk universal","Kertas litmus biru","Fenolftalein","Metil jingga"],b:0,u:"Penunjuk universal berubah dari merah (asid kuat) ke ungu (alkali kuat)."},
 {j:"pilih",t:"Sisa asid dari kilang perlu dineutralkan sebelum dibuang ke sungai kerana:",p:["Asid boleh membunuh hidupan akuatik","Asid menjadikan air sungai lebih jernih","Asid menambah oksigen dalam air","Asid membantu ikan membiak"],b:0,u:"Perubahan pH yang besar memudaratkan ikan dan tumbuhan air."},
 {j:"pilih",t:"Pelembut fabrik digunakan selepas mencuci pakaian dengan sabun. Peranannya ialah:",p:["Meneutralkan sisa alkali sabun","Menambah alkali pada kain","Membunuh semua bakteria pada kain","Menukar warna pakaian"],b:0,u:"Pelembut fabrik bersifat berasid lemah."}],
 bos:{j:"susun",t:"Susun bahan mengikut kekuatan asid, bermula daripada yang PALING kuat.",p:["pH 1","pH 3","pH 5","pH 7"],b:[0,1,2,3],u:"pH 7 neutral."}},

{n:3, tempat:"Makmal Penunjuk", sk:"6.1 Menentukan bahan berasid dan beralkali", lampiran:"ph",
 kadNama:"Meter pH", kadEm:"\u{1F4DF}", kadFakta:"Meter pH memberi bacaan pH yang lebih tepat berbanding kertas penunjuk.",
 bosKadNama:"Kubis Ungu", bosKadEm:"\u{1F96C}", bosKadFakta:"Jus kubis ungu boleh dijadikan penunjuk semula jadi kerana warnanya berubah dalam asid dan alkali.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, bahan manakah paling berasid?",p:["Jus limau","Cuka","Air suling","Ubat gigi"],b:0,u:"pH 2 paling rendah dalam jadual."},
 {j:"pilih",t:"Bahan manakah neutral?",p:["Air suling","Ubat gigi","Cuka","Air sabun"],b:0,u:"pH 7 ialah neutral."},
 {j:"pilih",t:"Bahan manakah alkali paling kuat?",p:["Pencuci longkang","Air sabun","Ubat gigi","Air suling"],b:0,u:"pH 14 paling tinggi."},
 {j:"pilih",t:"Mengapakah pencuci longkang perlu dikendalikan dengan sarung tangan?",p:["Alkali kuat mengakis kulit","Ia berbau wangi yang kuat","Ia bersifat neutral","Ia berwarna gelap"],b:0,u:"Alkali kuat seperti natrium hidroksida mengakis."},
 {j:"pilih",t:"Kertas litmus merah dicelup ke dalam air sabun. Warna yang dijangka ialah:",p:["Biru","Merah","Hijau","Tidak berubah"],b:0,u:"Air sabun beralkali."},
 {j:"pilih",t:"Air suling tidak menukar warna kertas litmus biru. Kesimpulannya:",p:["Air suling bukan asid","Air suling ialah asid kuat","Air suling ialah alkali kuat","Kertas litmus rosak"],b:0,u:"Litmus biru kekal biru dalam larutan neutral dan alkali."},
 {j:"pilih",t:"Kertas litmus biru kekal biru dalam ubat gigi dan air sabun. Mengapakah litmus biru sahaja tidak cukup untuk mengenal pasti alkali?",p:["Ia juga kekal biru dalam larutan neutral","Ia bertukar merah dalam alkali","Ia tidak berfungsi dalam air","Ia hanya mengesan gas"],b:0,u:"Gunakan litmus merah atau penunjuk universal untuk mengesahkan alkali."},
 {j:"banyak",t:"Pilih SEMUA bahan dalam jadual yang akan bertindak balas dengan magnesium untuk membebaskan gas hidrogen.",p:["Jus limau","Cuka","Asid hidroklorik cair","Air sabun","Ubat gigi"],b:[0,1,2],u:"Hanya asid bertindak balas dengan logam reaktif seperti magnesium."}],
 bos:{j:"pilih",t:"Sebotol cecair tanpa label memberi pH 9. Kesimpulan paling tepat?",p:["Ia alkali lemah","Ia asid kuat","Ia neutral","Ia alkali paling kuat"],b:0,u:"pH 9 sedikit di atas 7."}},

{n:4, tempat:"Stesen Pentitratan", sk:"6.2 Menganalisis proses peneutralan", lampiran:"titrat",
 kadNama:"Buret", kadEm:"\u{1F9EA}", kadFakta:"Buret digunakan dalam pentitratan kerana ia boleh menambah larutan titis demi titis dengan tepat.",
 bosKadNama:"Takat Akhir", bosKadEm:"\u{1F3AF}", bosKadFakta:"Takat akhir ialah titik apabila penunjuk berubah warna, menandakan asid telah dineutralkan sepenuhnya.",
 soalan:[
 {j:"pilih",t:"Berapakah isi padu natrium hidroksida yang diperlukan untuk meneutralkan asid?",p:["20 ml","10 ml","15 ml","25 ml"],b:0,u:"pH mencapai 7 pada 20 ml."},
 {j:"pilih",t:"Apakah yang berlaku kepada pH semasa alkali ditambah?",p:["Meningkat","Menurun","Tidak berubah","Kekal 1"],b:0,u:"Asid semakin dineutralkan, kemudian alkali berlebihan."},
 {j:"pilih",t:"Mengapakah fenolftalein tidak berwarna pada 20 ml walaupun pH 7?",p:["Ia hanya merah jambu dalam alkali","Larutan masih sangat berasid pada ketika itu","Fenolftalein telah rosak semasa digunakan","Tiada alkali ditambah ke dalam kelalang"],b:0,u:"Fenolftalein tidak berwarna dalam larutan neutral."},
 {j:"pilih",t:"Pada 25 ml, larutan menjadi merah jambu. Apakah maksudnya?",p:["Alkali telah berlebihan","Asid telah berlebihan","Larutan neutral sepenuhnya","Garam telah tersejat"],b:0,u:"pH 12 bermakna larutan beralkali."},
 {j:"pilih",t:"Mengapakah alkali ditambah sedikit demi sedikit berhampiran takat akhir?",p:["Supaya takat akhir tidak terlepas","Supaya larutan lebih cepat panas","Supaya lebih banyak alkali digunakan","Supaya warna penunjuk hilang"],b:0,u:"Satu titis berlebihan boleh mengubah pH dengan besar."},
 {j:"pilih",t:"Apakah hasil tindak balas pada 20 ml?",p:["Natrium klorida dan air","Asid hidroklorik sahaja","Natrium hidroksida sahaja","Gas hidrogen"],b:0,u:"Asid + alkali → garam + air."},
 {j:"pilih",t:"Jika asid yang digunakan dua kali lebih pekat, isi padu alkali yang diperlukan ialah kira-kira:",p:["40 ml","10 ml","20 ml","5 ml"],b:0,u:"Asid yang lebih pekat memerlukan lebih banyak alkali untuk dineutralkan."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["pH meningkat apabila alkali ditambah","Peneutralan berlaku pada 20 ml","Fenolftalein menunjukkan alkali berlebihan","Asid lebih kuat selepas alkali ditambah","pH menurun apabila alkali ditambah"],b:[0,1,2],u:"pH meningkat dari 1 kepada 12."}],
 bos:{j:"pilih",t:"Seorang murid mencadangkan metil jingga digunakan sebagai ganti fenolftalein. Nilaikan cadangan itu.",p:["Boleh, kerana warnanya juga berubah antara asid dan alkali","Tidak boleh, kerana metil jingga tidak berwarna","Tidak boleh, kerana metil jingga hanya untuk gas","Boleh, tetapi larutan akan menjadi biru"],b:0,u:"Metil jingga merah dalam asid dan kuning dalam alkali."}},

{n:5, tempat:"Ladang Sayur", sk:"6.1 / 6.2 Menilai penggunaan peneutralan dalam pertanian", lampiran:"tanah",
 kadNama:"Tanah Gambut", kadEm:"\u{1F7EB}", kadFakta:"Tanah gambut biasanya sangat berasid kerana bahan organik yang terurai secara perlahan.",
 bosKadNama:"Hujan Asid", bosKadEm:"\u{1F327}", bosKadFakta:"Hujan asid terbentuk apabila gas sulfur dioksida dan nitrogen dioksida larut dalam air hujan.",
 soalan:[
 {j:"pilih",t:"Petak manakah memberi hasil paling tinggi?",p:["2","1","3","Semua sama"],b:0,u:"30 kg pada pH 6.5."},
 {j:"pilih",t:"Mengapakah hasil petak 1 rendah?",p:["Tanah terlalu berasid","Tanah terlalu beralkali","Tanah terlalu kering","Sawi tidak disiram"],b:0,u:"pH 4.5 jauh di bawah julat sesuai."},
 {j:"pilih",t:"Apakah kesan kapur pertanian terhadap tanah?",p:["Menaikkan pH tanah","Menurunkan pH tanah","Tidak mengubah pH","Menjadikan tanah berasid"],b:0,u:"Kapur bersifat alkali dan meneutralkan asid."},
 {j:"pilih",t:"Mengapakah hasil petak 3 lebih rendah daripada petak 2?",p:["Kapur berlebihan menjadikan tanah beralkali","Kapur berlebihan menjadikan tanah lebih berasid","Petak 3 tidak diberi kapur langsung","Petak 3 lebih besar daripada petak 2"],b:0,u:"pH 8.5 melebihi julat sesuai."},
 {j:"nombor",t:"Berapakah pertambahan hasil petak 2 berbanding petak 1, dalam kg?",b:18,tol:0.5,suf:"kg",u:"30 − 12 = 18 kg."},
 {j:"pilih",t:"Seorang petani mendakwa 'lebih banyak kapur, lebih banyak hasil'. Nilaikan dakwaan itu.",p:["Salah; kapur berlebihan mengurangkan hasil","Betul, kerana petak 3 diberi kapur paling banyak","Betul, kerana kapur ialah baja utama","Salah, kerana kapur tidak memberi kesan"],b:0,u:"Petak 3 menghasilkan hanya 15 kg."},
 {j:"pilih",t:"Sebelum menabur kapur di kebun baharu, langkah pertama paling wajar?",p:["Uji pH tanah dahulu","Tabur kapur sebanyak mungkin","Tanam sayur terus","Siram tanah dengan cuka"],b:0,u:"Jumlah kapur bergantung pada pH asal tanah."},
 {j:"pilih",t:"Data hanya daripada satu musim. Kelemahan utama kesimpulan ini ialah:",p:["Cuaca musim itu mungkin mempengaruhi hasil","Terlalu banyak petak digunakan","pH tidak boleh diukur","Sawi tidak sesuai diuji"],b:0,u:"Ulangan beberapa musim memberi kesimpulan lebih kukuh."}],
 bos:{j:"pilih",t:"Koperasi petani mahu mengesyorkan rawatan tanah gambut untuk ahlinya. Keputusan paling wajar?",p:["Uji pH dan tambah kapur hingga pH 6 hingga 7","Tabur kapur berlebihan untuk semua kebun","Jangan tambah kapur langsung","Tambah cuka untuk menurunkan pH"],b:0,u:"Rawatan yang tepat mengikut ujian memberi hasil terbaik dengan kos minimum."}},

{n:6, tempat:"Makmal Rekaan", sk:"6.1 / 6.2 Mereka cipta menggunakan pengetahuan asid dan alkali",
 kadNama:"Penunjuk Semula Jadi", kadEm:"\u{1F33A}", kadFakta:"Kelopak bunga telang dan kubis ungu mengandungi pigmen yang berubah warna mengikut pH.",
 bosKadNama:"Sabun Buatan Sendiri", bosKadEm:"\u{1F9FC}", bosKadFakta:"Sabun dihasilkan melalui tindak balas minyak dengan alkali kuat. Proses ini mesti dijalankan dengan pengawasan.",
 soalan:[
 {j:"pilih",t:"Awak mereka kit penunjuk pH murah untuk sekolah rendah. Bahan paling sesuai?",p:["Jus kubis ungu atau bunga telang","Air paip biasa","Minyak masak","Garam halus"],b:0,u:"Pigmen semula jadi berubah warna dalam asid dan alkali."},
 {j:"pilih",t:"Awak mereka poster pertolongan cemas untuk sengatan tebuan yang beralkali. Rawatan paling sesuai?",p:["Sapu cuka","Sapu sabun","Sapu soda penaik","Sapu ubat gigi"],b:0,u:"Cuka berasid lemah dan meneutralkan alkali."},
 {j:"pilih",t:"Awak mereka ubat kumur untuk mengurangkan kerosakan gigi. Sifat paling sesuai?",p:["Sedikit beralkali untuk meneutralkan asid","Sangat berasid supaya lebih segar","Mengandungi gula untuk rasa manis","Mengandungi asid kuat untuk memutihkan gigi"],b:0,u:"Asid daripada bakteria merosakkan enamel gigi."},
 {j:"pilih",t:"Kilang kecil di kampung membuang air sisa berasid. Cadangan rawatan paling praktikal?",p:["Neutralkan dengan kapur sebelum dibuang","Buang terus ke sungai pada waktu malam","Tambah lebih banyak asid supaya cair","Simpan dalam tong terbuka selama-lamanya"],b:0,u:"Kapur murah dan meneutralkan asid."},
 {j:"pilih",t:"Awak mereka baja cecair daripada sisa dapur dan mendapati pH-nya 4. Tindakan paling wajar sebelum digunakan?",p:["Tambah sedikit kapur","Tambah cuka","Tambah jus limau","Tambah asid bateri"],b:0,u:"Pokok sayur tumbuh baik pada pH hampir neutral."},
 {j:"pilih",t:"Awak mahu menunjukkan peneutralan kepada murid kecil tanpa bahan berbahaya. Pasangan paling selamat?",p:["Cuka dan soda penaik","Natrium hidroksida dan asid hidroklorik pekat","Pencuci longkang dan asid bateri","Ammonia pekat dan asid sulfurik"],b:0,u:"Kedua-duanya bahan dapur yang lemah dan selamat jika dikawal."},
 {j:"pilih",t:"Awak mereka label amaran untuk pencuci longkang. Maklumat paling penting?",p:["Mengakis; pakai sarung tangan","Wangi dan sesuai untuk semua kegunaan","Selamat untuk dimakan dalam kuantiti kecil","Boleh dicampur dengan semua bahan pencuci lain"],b:0,u:"Alkali kuat boleh menyebabkan lecur kimia."},
 {j:"pilih",t:"Bagaimanakah awak menguji keberkesanan penunjuk kubis ungu rekaan awak?",p:["Uji dengan bahan yang pH-nya sudah diketahui","Rasa bahan untuk mengesahkan keputusan","Uji dengan air paip sahaja","Tanya rakan warna kegemaran mereka"],b:0,u:"Perbandingan dengan bahan piawai mengesahkan julat warna penunjuk."}],
 bos:{j:"buka",
  t:"Sungai berhampiran sekolah awak menjadi berasid akibat sisa kilang dan hujan asid, dan ikan semakin berkurang. Reka satu penyelesaian menggunakan pengetahuan asid, alkali dan peneutralan.",
  arahan:"Terangkan punca keasidan, cara mengukur pH sungai, bahan dan kaedah peneutralan yang dicadangkan, langkah keselamatan, cara memantau kejayaan, serta kos dan peranan kilang, penduduk dan pihak berkuasa.",
  u:"Jawapan TP6 yang kukuh menggunakan pengukuran pH, memilih bahan peneutralan yang sesuai dan selamat, dan merancang pemantauan serta kerjasama komuniti."}}
];

module.exports = {
  id:"t2b6", tingkatan:2, kod:"6.0 Asid dan Alkali",
  tajuk:"Laluan pH",
  subtajuk:"Sains Ting. 2 · Bab 6 Asid dan Alkali",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali sifat asid dan alkali, skala pH dan penunjuk. Langkah seterusnya ialah menjelaskan kekuatan asid dan alkali.",
   2:"{n} memahami hubungan pH dengan kekuatan asid dan alkali serta kegunaan peneutralan. Perlu lebih banyak latihan mentafsir keputusan penunjuk.",
   3:"{n} boleh mengelaskan bahan harian sebagai asid, alkali atau neutral berdasarkan pH dan penunjuk. Galakkan menggunakan lebih daripada satu penunjuk.",
   4:"{n} mampu menganalisis data pentitratan untuk menentukan takat peneutralan. Seterusnya latih menilai penggunaan peneutralan dalam kehidupan.",
   5:"{n} dapat menilai rawatan tanah berasid berdasarkan data dan membuat keputusan yang wajar. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta penyelesaian menggunakan peneutralan yang selamat dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Asid dan Alkali. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ ph:T_PH, titrat:T_TITRAT, tanah:T_TANAH },
  aras:ARAS
};
