/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 9.0 Kimia Industri.
   Fail ini disunting tangan. Jalankan `node bina.js t4b7` untuk menyemaknya
   dan menghasilkan bank-t4b7.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4 dan 5, Bahagian Pembangunan Kurikulum, Modul Kimia Industri.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai kimia industri.",
"Memahami kimia industri dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai kimia industri dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai kimia industri dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai kimia industri dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai kimia industri dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_POLIMER = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Molekul monomer etilena (ikatan ganda dua)", isi:"hijauLembut", panah:"hijau" },
    { label:"Pemangkin membuka ikatan ganda dua monomer", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Unit monomer bergabung membentuk rantai", isi:"kuningLembut", panah:"kuning" },
    { label:"Polietilena (plastik) terbentuk", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 1 · Proses pempolimeran penambahan etilena menjadi polietilena.",
  alt:"Rajah aliran menegak empat peringkat pempolimeran penambahan, dari molekul monomer etilena hingga polietilena terbentuk"
};

const R_KEKERASAN = {
  jenis:"graf", mod:"mendatar",
  bar:[
    { label:"Kuprum tulen", nilai:35, warna:"hijau" },
    { label:"Gangsa (aloi kuprum)", nilai:70, warna:"lembayung" },
    { label:"Keluli (aloi besi)", nilai:120, warna:"kuning" },
  ],
  xLabel:"Kekerasan (skala Brinell, HB)",
  kapsyen:"Rajah 2 · Kekerasan logam tulen berbanding aloi dalam ujian makmal.",
  alt:"Graf palang mendatar membandingkan kekerasan kuprum tulen, gangsa dan keluli dalam skala Brinell"
};

const T_KACA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Jenis bahan</th>'+
'<th class="n">Takat lebur (°C)</th><th>Rintangan kejutan haba</th><th>Kegunaan biasa</th></tr></thead><tbody>'+
'<tr><td>Kaca biasa (soda-kapur)</td><td class="n">700</td><td>Rendah</td><td>Tingkap, botol</td></tr>'+
'<tr><td>Kaca borosilikat</td><td class="n">820</td><td>Tinggi</td><td>Radas makmal, bikar</td></tr>'+
'<tr><td>Seramik (porselin)</td><td class="n">1400</td><td>Sederhana</td><td>Penebat elektrik, pinggan mangkuk</td></tr>'+
'</tbody></table></div><p class="qnote">Rintangan kejutan haba menunjukkan keupayaan bahan mengekalkan bentuk tanpa retak apabila suhu berubah mendadak.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Relau Aloi", sk:"9.1 Aloi: definisi dan contoh",
 kadNama:"Gangsa", kadEm:"\u{1FA99}", kadFakta:"Gangsa ialah salah satu aloi pertama yang digunakan manusia, bermula lebih 5000 tahun lalu pada Zaman Gangsa.",
 bosKadNama:"Keluli Tahan Karat", bosKadEm:"\u{1F37D}", bosKadFakta:"Keluli tahan karat mengandungi kromium yang membentuk lapisan oksida nipis untuk menghalang karat.",
 soalan:[
 {j:"pilih",t:"Dalam bidang kimia industri, istilah aloi digunakan untuk merujuk kepada:",p:["Campuran homogen logam dengan unsur lain","Sebatian kimia antara dua bukan logam","Logam tulen yang dipanaskan semula","Larutan garam logam dalam air suling"],b:0,u:"Aloi dihasilkan dengan mencampurkan logam dengan unsur lain semasa cair, kemudian disejukkan menjadi pepejal."},
 {j:"pilih",t:"Gangsa ialah aloi yang terdiri daripada:",p:["Kuprum dan timah","Kuprum dan zink","Besi dan karbon","Aluminium dan magnesium"],b:0,u:"Loyang pula ialah kuprum dan zink."},
 {j:"pilih",t:"Loyang ialah aloi yang terdiri daripada:",p:["Kuprum dan zink","Kuprum dan timah","Besi dan kromium","Timah dan plumbum"],b:0,u:"Gangsa pula ialah kuprum dan timah."},
 {j:"pilih",t:"Keluli karbon terutamanya terdiri daripada:",p:["Besi dan karbon","Besi dan kromium","Kuprum dan timah","Aluminium dan kuprum"],b:0,u:"Kandungan karbon yang kecil dalam besi meningkatkan kekerasannya."},
 {j:"banyak",t:"Pilih SEMUA yang merupakan aloi.",p:["Gangsa","Loyang","Keluli","Kuprum tulen","Duralumin"],b:[0,1,2,4],u:"Kuprum tulen ialah logam tulen, bukan aloi, kerana tidak dicampur dengan unsur lain."},
 {j:"susun",t:"Susun langkah am menghasilkan sekeping aloi mengikut urutan yang betul.",p:["Logam utama dicairkan pada suhu tinggi","Unsur tambahan dicampurkan ke dalam logam cair","Campuran dikacau supaya sebati","Campuran disejukkan sehingga membeku"],b:[0,1,2,3],u:"Pencampuran mesti berlaku semasa cecair supaya unsur tersebar sekata sebelum pepejal terbentuk."},
 {j:"pilih",t:"Duralumin (aloi aluminium) digunakan meluas dalam badan pesawat terbang kerana ia:",p:["Kuat tetapi ringan berbanding aluminium tulen","Murah tetapi berat seperti keluli biasa","Mengalirkan elektrik lebih baik daripada tembaga","Tidak boleh dikitar semula selepas digunakan"],b:0,u:"Nisbah kekuatan-berat yang tinggi penting dalam pembinaan pesawat."},
 {j:"pilih",t:"Superkonduktor yang diperbuat daripada aloi tertentu digunakan untuk:",p:["Mengangkut elektrik dengan rintangan sangat rendah","Menyimpan tenaga suria dalam bentuk haba tinggi","Menapis air kumbahan secara automatik penuh","Mengukur suhu badan dengan tepat sekali"],b:0,u:"Superkonduktor hampir tiada rintangan elektrik pada suhu tertentu, jadi kurang tenaga terbuang sebagai haba."}],
 bos:{j:"pilih",t:"Manakah pasangan aloi dan unsur penyusunnya yang tepat?",p:["Gangsa: kuprum dan timah","Loyang: besi dan karbon","Keluli: kuprum dan zink","Duralumin: timah dan plumbum"],b:0,u:"Loyang ialah kuprum+zink, keluli ialah besi+karbon, duralumin ialah aluminium+kuprum+magnesium."}},

{n:2, tempat:"Bengkel Perbandingan", sk:"9.1.2 Perbandingan ciri aloi dengan logam tulen", lampiran:"kekerasan",
 kadNama:"Struktur Zarah Aloi", kadEm:"\u{1F9E9}", kadFakta:"Dalam aloi, atom unsur lain yang berbeza saiz mengganggu susunan atom logam utama, menjadikannya lebih sukar untuk atom tergelincir antara satu sama lain.",
 bosKadNama:"Ujian Kekerasan Brinell", bosKadEm:"\u{1F528}", bosKadFakta:"Ujian kekerasan Brinell mengukur daya tahan permukaan logam terhadap kesan bebola keluli yang ditekan ke atasnya.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 2, aloi manakah paling keras?",p:["Keluli (aloi besi)","Gangsa (aloi kuprum)","Kuprum tulen","Ketiga-tiganya sama keras"],b:0,u:"Keluli mencatatkan nilai kekerasan Brinell tertinggi dalam graf, 120 HB."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa HB beza kekerasan antara gangsa dan kuprum tulen?",b:35,tol:2,suf:"HB",u:"70 tolak 35 bersamaan 35 HB."},
 {j:"pilih",t:"Mengapakah aloi secara umumnya lebih keras daripada logam tulen penyusunnya?",p:["Atom asing mengganggu lapisan atom logam tergelincir","Aloi mempunyai lebih banyak elektron bebas berbanding logam tulen","Atom aloi tersusun lebih kemas dan padat berbanding logam tulen","Aloi mempunyai takat lebur yang jauh lebih tinggi"],b:0,u:"Susunan atom logam tulen yang licin membolehkan lapisan tergelincir mudah; atom asing mengganggu kelicinan ini."},
 {j:"pilih",t:"Apakah kesan mencampurkan zink ke dalam kuprum untuk menghasilkan loyang?",p:["Loyang lebih keras dan tahan kakisan","Loyang lebih lembut dan mudah dibentuk","Loyang hilang keupayaan mengalirkan elektrik","Loyang menjadi lebih ringan"],b:0,u:"Sebab itulah loyang digunakan untuk alatan tahan lama seperti tombol pintu."},
 {j:"banyak",t:"Pilih SEMUA kesan yang biasanya berlaku apabila logam dialoikan.",p:["Kekerasan meningkat","Ketahanan kakisan bertambah baik","Susunan atom logam utama terganggu","Logam menjadi lebih lembut"],b:[0,1,2],u:"Aloi biasanya menjadi lebih keras, bukan lebih lembut."},
 {j:"pilih",t:"Kuprum tulen mudah dibengkokkan, tetapi gangsa saiz sama sukar dibengkokkan. Penjelasan terbaik?",p:["Atom timah menghalang lapisan atom kuprum tergelincir","Gangsa mempunyai lebih sedikit atom","Kuprum tulen berstruktur kristal berbeza sepenuhnya","Gangsa dipanaskan pada suhu lebih tinggi semasa dibuat"],b:0,u:"Ini prinsip yang sama menerangkan mengapa aloi secara am lebih keras."},
 {j:"pilih",t:"Jurutera memilih gangsa berbanding kuprum tulen untuk tombol pintu bangunan awam. Sebab paling munasabah:",p:["Gangsa lebih tahan haus dan kakisan","Gangsa lebih murah untuk dihasilkan","Gangsa mengalirkan elektrik lebih baik","Gangsa lebih ringan sehingga mudah dipasang"],b:0,u:"Tombol pintu awam disentuh berulang kali, jadi ketahanan haus penting."},
 {j:"pilih",t:"Manakah paling sesuai menerangkan mengapa keluli tahan karat mengandungi kromium?",p:["Kromium membentuk lapisan oksida yang menghalang karat","Kromium menjadikan keluli jauh lebih ringan","Kromium meningkatkan kekonduksian elektrik keluli","Kromium menurunkan takat lebur keluli dengan ketara"],b:0,u:"Lapisan oksida kromium melindungi lapisan besi di bawahnya daripada udara dan air."}],
 bos:{j:"pilih",t:"Jurutera perlu memilih bahan untuk gear jam tangan yang tahan haus tetapi tidak terlalu berat. Pilihan paling wajar?",p:["Gangsa, kerana keras tetapi tidak seberat keluli","Kuprum tulen, kerana paling murah","Keluli, kerana paling keras tanpa mengira faktor lain","Mana-mana logam sesuai kerana kekerasan tidak penting"],b:0,u:"Keluli lebih keras tetapi lebih tumpat; gangsa memberi keseimbangan kekerasan dan berat untuk komponen kecil."}},

{n:3, tempat:"Kilang Kaca", sk:"9.2 Kaca dan seramik", lampiran:"kaca",
 kadNama:"Kaca Borosilikat", kadEm:"\u{1F9EA}", kadFakta:"Kaca borosilikat mengandungi boron oksida yang menjadikannya tahan kejutan haba mendadak, sesuai untuk radas makmal.",
 bosKadNama:"Seramik Kejuruteraan", bosKadEm:"\u{1F3FA}", bosKadFakta:"Seramik kejuruteraan moden digunakan sebagai jubin perisai haba kapal angkasa kerana ia tahan suhu melampau tanpa cair.",
 soalan:[
 {j:"pilih",t:"Bahan utama dalam pembuatan kaca ialah:",p:["Pasir silika (silikon dioksida)","Hanya batu kapur yang ditapis","Hanya tanah liat yang dibakar","Karbon tulen yang telah dibersihkan"],b:0,u:"Pasir silika dilebur pada suhu tinggi untuk menghasilkan kaca."},
 {j:"pilih",t:"Berdasarkan jadual, kaca manakah paling sesuai untuk bikar makmal yang dipanaskan berulang kali?",p:["Kaca borosilikat, rintangan kejutan haba tinggi","Kaca biasa, kerana takat leburnya paling rendah","Seramik, kerana ia paling tahan lasak","Ketiga-tiga bahan itu sama sesuai"],b:0,u:"Bikar dipanaskan dan disejukkan berulang kali, jadi rintangan kejutan haba tinggi jadi keutamaan."},
 {j:"nombor",t:"Berdasarkan jadual, berapa °C beza takat lebur antara seramik dan kaca biasa?",b:700,tol:20,suf:"°C",u:"1400 tolak 700 bersamaan 700°C."},
 {j:"pilih",t:"Mengapakah seramik digunakan sebagai penebat elektrik pada tiang bekalan elektrik?",p:["Seramik tidak mengalirkan elektrik dan tahan cuaca","Seramik ringan dan murah dihasilkan","Seramik mengalirkan elektrik dengan cekap","Seramik mudah dibentuk semula selepas dipasang"],b:0,u:"Sifat penebat (bukan pengalir) seramik penting untuk mengelakkan litar pintas."},
 {j:"banyak",t:"Pilih SEMUA kegunaan yang sesuai bagi kaca biasa (soda-kapur).",p:["Tingkap rumah","Botol minuman","Bikar dipanaskan berulang kali","Cermin"],b:[0,1,3],u:"Kaca biasa tidak tahan kejutan haba tinggi, jadi tidak sesuai untuk bikar."},
 {j:"pilih",t:"Kilang perlu memilih bekas untuk cecair kimia yang dipanaskan sehingga mendidih berulang kali. Pilihan paling wajar?",p:["Kaca borosilikat","Kaca biasa","Plastik polietilena","Seramik tanpa lapisan"],b:0,u:"Kaca borosilikat direka khusus untuk kegunaan makmal yang melibatkan perubahan suhu mendadak."},
 {j:"pilih",t:"Apakah yang membezakan komponen seramik daripada kaca?",p:["Seramik daripada tanah liat dibakar, kaca daripada pasir dilebur","Seramik sentiasa lut sinar sepenuhnya, kaca sentiasa legap","Seramik boleh mengalirkan elektrik, tetapi kaca tidak","Seramik bertakat lebur yang jauh lebih rendah"],b:0,u:"Proses dan bahan mentah kedua-duanya berbeza walaupun kedua-duanya bahan bukan logam."},
 {j:"pilih",t:"Mengapa jubin perisai haba kapal angkasa dibuat daripada seramik, bukan kaca borosilikat?",p:["Seramik tahan suhu jauh lebih tinggi tanpa cair","Seramik lebih murah untuk dihasilkan","Seramik lebih lut sinar berbanding kaca","Seramik lebih ringan berbanding kaca"],b:0,u:"Suhu semasa kemasukan semula ke atmosfera jauh melebihi takat lebur kaca borosilikat."}],
 bos:{j:"banyak",t:"Pilih SEMUA sebab kaca borosilikat lebih sesuai daripada kaca biasa untuk radas makmal.",p:["Rintangan kejutan haba lebih tinggi","Takat lebur lebih tinggi","Harga jauh lebih murah berbanding kaca borosilikat","Kurang mudah retak bila suhu berubah mendadak"],b:[0,1,3],u:"Harga bukan sebab utama pemilihan bahan radas makmal; faktor keselamatan terma yang utama."}},

{n:4, tempat:"Makmal Polimer", sk:"9.3.1 / 9.3.2 Polimer semula jadi dan sintetik, pempolimeran penambahan", lampiran:"polimer",
 kadNama:"Monomer", kadEm:"⚛️", kadFakta:"Perkataan 'polimer' berasal daripada bahasa Yunani, 'poli' bermaksud banyak dan 'mer' bermaksud bahagian.",
 bosKadNama:"Getah Asli", bosKadEm:"\u{1F333}", bosKadFakta:"Getah asli ialah polimer semula jadi yang diperoleh daripada lateks pokok getah.",
 soalan:[
 {j:"pilih",t:"Dalam kimia industri, istilah polimer digunakan untuk merujuk kepada:",p:["Molekul besar daripada banyak unit monomer berulang","Sebatian yang hanya satu jenis atom sahaja","Campuran homogen antara dua logam berbeza","Larutan pekat yang mengandungi garam terlarut"],b:0,u:"Monomer bergabung berulang kali membentuk rantai panjang polimer."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku pada peringkat kedua pempolimeran penambahan?",p:["Ikatan ganda dua monomer dibuka pemangkin","Polietilena terbentuk sepenuhnya","Getah tervulkan dengan sulfur","Monomer dipanaskan sehingga cair"],b:0,u:"Pembukaan ikatan ganda dua membolehkan monomer bergabung antara satu sama lain."},
 {j:"banyak",t:"Pilih SEMUA yang merupakan polimer semula jadi.",p:["Getah asli","Sutera","Selulosa dalam kayu","Polietilena"],b:[0,1,2],u:"Polietilena ialah polimer sintetik yang dihasilkan manusia, bukan semula jadi."},
 {j:"pilih",t:"Apakah perbezaan utama antara polimer semula jadi dan polimer sintetik?",p:["Satu terbentuk dalam organisma, satu dihasilkan kilang","Bahan semula jadi sentiasa lebih kuat","Polimer sintetik sentiasa mudah terbiodegradasi","Rantai semula jadi tiada monomer berulang"],b:0,u:"Kedua-duanya mempunyai struktur monomer berulang; puncanya sahaja berbeza."},
 {j:"pilih",t:"Beg plastik yang dibuang di tanah pamah mengambil masa bertahun-tahun untuk terurai. Penjelasan paling tepat?",p:["Ikatan rantai polimer sintetik sukar dipecah mikroorganisma","Beg plastik tiada sebarang unsur karbon sama sekali","Beg plastik terlalu ringan untuk ditindas oleh tanah","Mikroorganisma tidak wujud langsung dalam tanah pamah"],b:0,u:"Struktur rantai panjang dan ikatan kimia polimer sintetik menjadikannya sukar dipecahkan secara biologi."},
 {j:"pilih",t:"Manakah paling tepat menerangkan pempolimeran penambahan?",p:["Monomer bergabung tanpa hasil sampingan","Dua monomer bergabung sambil bebaskan air","Polimer dipecah semula kepada monomer asal","Dua polimer berbeza dicampur menjadi aloi"],b:0,u:"Ini berbeza daripada pempolimeran kondensasi yang menghasilkan hasil sampingan seperti air."},
 {j:"pilih",t:"Mengapakah polietilena sesuai untuk beg tetapi tidak sesuai untuk cerek air panas?",p:["Rantainya melembut pada suhu agak rendah","Bahan itu terlalu keras dan rapuh dibentuk","Polietilena mengalirkan haba dengan sangat cekap","Ia bertindak balas terus dengan air panas"],b:0,u:"Takat lebur polietilena yang rendah menjadikannya lentur untuk beg tetapi tidak selamat berdekatan haba tinggi."},
 {j:"pilih",t:"Apakah kesan memanjangkan rantai polimer (tambah unit monomer) ke atas sifat plastik?",p:["Plastik biasanya lebih keras dan tinggi takat lebur","Plastik biasanya lebih cair dan kurang tumpat berbanding asal","Plastik hilang semua sifat kimianya secara keseluruhan","Plastik menjadi lut sinar sepenuhnya tanpa warna"],b:0,u:"Rantai lebih panjang menghasilkan lebih banyak daya tarikan antara rantai, menjadikan bahan lebih keras."}],
 bos:{j:"pilih",t:"Syarikat mahu menggantikan beg plastik dengan bahan lebih mesra alam tetapi masih tahan lasak. Cadangan paling wajar?",p:["Guna polimer semula jadi terbiodegradasi seperti kanji","Tambah unit monomer polietilena supaya tahan lasak","Guna polimer sintetik yang sama tetapi dicat hijau","Buang sepenuhnya penggunaan sebarang polimer"],b:0,u:"Polimer berasaskan bahan semula jadi seperti kanji direka untuk terurai lebih cepat berbanding polietilena biasa."}},

{n:5, tempat:"R&D Getah", sk:"9.3.3 Ciri dan proses pemvulkanan getah",
 kadNama:"Sulfur", kadEm:"\u{1F7E1}", kadFakta:"Charles Goodyear menemui proses pemvulkanan getah pada tahun 1839 secara tidak sengaja apabila getah bercampur sulfur tertumpah di atas dapur panas.",
 bosKadNama:"Rantai Silang", bosKadEm:"\u{1F517}", bosKadFakta:"Rantai silang sulfur antara molekul getah bertindak seperti jambatan kecil yang menghalang rantai polimer tergelincir antara satu sama lain.",
 soalan:[
 {j:"pilih",t:"Pemvulkanan getah ialah proses:",p:["Menambah sulfur untuk membentuk rantai silang","Melarutkan getah asli sepenuhnya dalam air panas","Membuang semua sulfur yang ada daripada lateks","Memanaskan getah tanpa sebarang bahan tambahan"],b:0,u:"Rantai silang sulfur inilah yang mengubah sifat getah secara ketara."},
 {j:"pilih",t:"Berbanding getah asli yang belum divulkan, getah tervulkan adalah:",p:["Lebih kuat, elastik dan kurang melekit","Lebih lembut dan mudah cair suhu bilik","Lebih ringan tetapi kurang tahan lasak","Sama sifat dalam semua keadaan"],b:0,u:"Rantai silang menjadikan struktur getah lebih stabil dan tahan lama."},
 {j:"pilih",t:"Mengapakah tayar kereta diperbuat daripada getah tervulkan, bukan getah asli?",p:["Getah tervulkan tahan haba geseran, tidak melekit","Getah asli murah tetapi tidak boleh dibentuk langsung","Getah tervulkan jauh lebih ringan, kereta lebih laju","Getah asli tidak mengandungi sebarang polimer sama sekali"],b:0,u:"Geseran jalan raya menghasilkan haba tinggi; getah asli akan melembut dan rosak dalam keadaan ini."},
 {j:"banyak",t:"Pilih SEMUA kesan penambahan sulfur semasa pemvulkanan getah.",p:["Kekuatan tegangan bertambah","Keanjalan bertambah baik","Kelekitan berkurangan","Getah mudah larut dalam air"],b:[0,1,2],u:"Getah tervulkan tetap tidak larut dalam air; sulfur tidak mengubah sifat itu."},
 {j:"pilih",t:"Jurutera memilih tahap pemvulkanan berbeza untuk gelang elastik berbanding tayar keras. Penjelasan paling wajar?",p:["Sulfur rendah anjal, sulfur tinggi keras","Kandungan sulfur tiada kesan kepada keanjalan","Sulfur tinggi sentiasa hasilkan getah paling anjal","Gelang getah tidak melalui pemvulkanan langsung"],b:0,u:"Tahap rantai silang berbeza menghasilkan kekerasan getah yang berbeza mengikut kegunaan."},
 {j:"pilih",t:"Nilaikan cadangan: 'Semakin banyak sulfur ditambah, semakin baik getah untuk semua kegunaan.'",p:["Tidak munasabah, sulfur berlebihan jadikan rapuh","Munasabah, lebih sulfur sentiasa lebih baik walau apa pun kegunaannya","Tidak munasabah, kerana sulfur tiada sebarang kesan langsung","Munasabah, kerana sulfur menjadikan getah jauh lebih murah"],b:0,u:"Kegunaan menentukan tahap pemvulkanan yang sesuai; lebih bukan semestinya lebih baik."},
 {j:"pilih",t:"Bekas lateks tidak divulkan mudah lekit dan lembut dalam cuaca panas. Bagaimana pemvulkanan mengatasi ini?",p:["Rantai silang halang polimer tergelincir dan melekat","Proses itu membuang semua air daripada lateks","Pemvulkanan tukar getah kepada logam tahan haba","Ia menjadikan getah mengalirkan elektrik"],b:0,u:"Kestabilan struktur inilah yang menjadikan getah tervulkan lebih boleh dipercayai dalam pelbagai suhu."},
 {j:"pilih",t:"Pereka mahu mencipta sarung tangan getah yang selesa (elastik) tetapi tahan lasak untuk kerja berat. Cadangan paling sesuai?",p:["Tahap pemvulkanan sederhana, tidak rendah atau tinggi","Getah asli tanpa sebarang pemvulkanan langsung","Tahap pemvulkanan yang setinggi tayar kereta","Elakkan getah dan gunakan plastik keras sahaja"],b:0,u:"Keseimbangan antara keanjalan dan ketahanan diperlukan untuk sarung tangan kerja."}],
 bos:{j:"pilih",t:"Nilaikan: 'Getah tervulkan lebih mesra alam berbanding plastik sintetik kerana berasal daripada sumber semula jadi.'",p:["Sebahagian tepat, tetapi rantai silang lambatkan penguraian","Tepat sepenuhnya, semua bahan semula jadi mesra alam","Tidak tepat, getah tervulkan sebenarnya polimer sintetik","Tepat, pemvulkanan mempercepatkan penguraian getah"],b:0,u:"Pemvulkanan mengubah struktur kimia getah, jadi ia tidak terurai secepat getah asli walaupun sumbernya semula jadi."}},

{n:6, tempat:"Inovasi Getah", sk:"9.3.4 Teknologi terkini berasaskan getah",
 kadNama:"Getah Termoplastik", kadEm:"\u{1F6DE}", kadFakta:"Getah termoplastik (TPE) menggabungkan sifat elastik getah dengan keupayaan plastik biasa untuk dilebur dan dibentuk semula.",
 bosKadNama:"Reka Bentuk Lestari", bosKadEm:"\u{1F331}", bosKadFakta:"Reka bentuk lestari mengambil kira kos, prestasi, dan kesan alam sekitar sepanjang kitaran hayat produk.",
 soalan:[
 {j:"pilih",t:"Syarikat kasut sukan mahu tapak kasut elastik tetapi mudah dikitar semula. Bahan paling sesuai?",p:["Getah termoplastik (TPE)","Getah tervulkan tahap tinggi seperti tayar","Kaca borosilikat","Aloi keluli tahan karat"],b:0,u:"TPE menggabungkan keanjalan getah dengan keupayaan plastik untuk dilebur semula bagi tujuan kitar semula."},
 {j:"pilih",t:"Manakah paling menunjukkan inovasi teknologi getah masa kini?",p:["TPE boleh dilebur dan dibentuk semula berulang kali","Penggunaan getah asli tanpa sebarang pemprosesan langsung","Penggantian getah sepenuhnya dengan aloi logam berat","Penghapusan sulfur dalam semua produk getah sedia ada"],b:0,u:"TPE menggabungkan kelebihan getah dan plastik, memudahkan kitar semula berbanding getah tervulkan tradisional."},
 {j:"pilih",t:"Kilang mahu kurangkan sisa getah tervulkan yang sukar terurai. Cadangan paling wajar?",p:["Beralih kepada TPE yang boleh dikitar semula","Menambah sulfur supaya getah lebih tahan","Membakar sisa getah tervulkan secara terbuka","Mengabaikan masalah kerana getah tidak dikitar"],b:0,u:"Pembakaran terbuka menghasilkan pencemaran udara; TPE menawarkan penyelesaian jangka panjang."},
 {j:"pilih",t:"Reka bentuk lestari mengambil kira faktor manakah sekali gus?",p:["Kos, prestasi bahan, dan kesan alam sekitar","Hanya kos pengeluaran yang paling rendah","Semata-mata rupa bentuk produk paling menarik","Hanya kelajuan pengeluaran di kilang"],b:0,u:"Reka bentuk lestari memerlukan pertimbangan menyeluruh, bukan satu faktor sahaja."},
 {j:"pilih",t:"Pasukan mencipta tayar basikal daripada gabungan getah tervulkan dan bahan kitar semula. Kelebihan utama?",p:["Kurangkan getah asli baharu, kekal prestasi","Tayar lebih ringan tanpa mengira ketahanan","Menghapuskan keperluan pemvulkanan sepenuhnya","Tayar mengalirkan elektrik lebih baik"],b:0,u:"Menggabungkan bahan kitar semula membantu kelestarian tanpa mengorbankan fungsi utama tayar."},
 {j:"pilih",t:"Cabaran utama mengkomersialkan getah termoplastik secara meluas?",p:["Kosnya lebih tinggi berbanding getah tervulkan biasa","Ia tidak boleh dibentuk menjadi sebarang produk","Ia tiada sebarang sifat elastik langsung","Ia hanya boleh digunakan sekali seperti getah tervulkan"],b:0,u:"Kos pengeluaran sering menjadi penghalang utama pengambilan teknologi baharu secara meluas."},
 {j:"pilih",t:"Sekolah mahu jalankan projek keusahawanan menghasilkan barangan daripada sisa tayar terpakai. Cadangan produk paling wajar?",p:["Tapak kasut atau bantal getah memanfaatkan keanjalan","Botol air minuman yang perlu lut sinar sepenuhnya","Radas makmal yang perlu tahan suhu sangat tinggi","Wayar elektrik yang perlu mengalirkan arus"],b:0,u:"Getah tervulkan terpakai masih elastik dan tahan lasak, sesuai untuk produk yang memanfaatkan sifat ini."},
 {j:"pilih",t:"Apakah pertimbangan paling penting semasa mereka bentuk produk getah baharu untuk pasaran masa depan?",p:["Imbangkan prestasi, kesan alam sekitar dan kos","Pilih bahan paling murah tanpa mengira prestasi","Pilih bahan paling tahan lama tanpa mengira kos","Abaikan kesan alam sekitar demi keuntungan"],b:0,u:"Reka bentuk lestari yang baik mengimbangi ketiga-tiga faktor, bukan mengutamakan satu sahaja."}],
 bos:{j:"buka",
  t:"Sebuah syarikat tempatan ingin menghasilkan produk baharu daripada getah asli yang ditanam di ladang keluarga awak, menggunakan teknologi pemvulkanan atau getah termoplastik yang telah dipelajari.",
  arahan:"Cadangkan SATU produk, terangkan jenis pemprosesan getah yang digunakan (tahap pemvulkanan atau TPE) dan sebabnya, serta bagaimana produk itu mengimbangi kos, prestasi dan kesan alam sekitar.",
  u:"Jawapan TP6 yang kukuh menggabungkan sains bahan getah dengan pertimbangan sosioekonomi dan alam sekitar, bukan sekadar idea produk."}}
];

module.exports = {
  id:"t4b7", tingkatan:4, kod:"9.0 Kimia Industri",
  tajuk:"Laluan Kilang",
  subtajuk:"Sains Ting. 4 · Bab 9 Kimia Industri",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis aloi biasa dan unsur penyusunnya. Langkah seterusnya ialah menerangkan sifat aloi, bukan sekadar menamakannya.",
   2:"{n} memahami sifat aloi berbanding logam tulen serta komponen kaca dan seramik. Perlu lebih banyak latihan mengaitkan struktur zarah dengan sifat bahan.",
   3:"{n} boleh mengaplikasikan pengetahuan tentang kaca, seramik dan polimer untuk memilih bahan yang sesuai bagi kegunaan harian. Galakkan mentafsir jadual perbandingan bahan.",
   4:"{n} mampu menganalisis proses pempolimeran dan struktur polimer semula jadi berbanding sintetik. Seterusnya latih menimbang bukti untuk membuat keputusan tentang pemilihan bahan.",
   5:"{n} dapat menilai kesesuaian tahap pemvulkanan getah bagi kegunaan berbeza, disokong sebab yang munasabah. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mencadangkan produk baharu berasaskan getah dengan pertimbangan kos, prestasi dan alam sekitar. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kimia Industri. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ polimer:R_POLIMER, kekerasan:R_KEKERASAN, kaca:T_KACA },
  aras:ARAS
};
