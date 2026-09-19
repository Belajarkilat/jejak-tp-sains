/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 9.0 Haba.
   Jalankan `node bina.js t2b9` untuk menyemak dan menghasilkan bank-t2b9.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 81.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai haba.",
"Memahami haba dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai haba dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai haba dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai haba dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekacipta dengan menggunakan pengetahuan dan kemahiran sains mengenai haba dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_ROD =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Rod</th>'+
'<th class="n">Masa paku lilin jatuh (s)</th></tr></thead><tbody>'+
'<tr><td>Kuprum</td><td class="n">25</td></tr>'+
'<tr><td>Aluminium</td><td class="n">40</td></tr>'+
'<tr><td>Besi</td><td class="n">110</td></tr>'+
'<tr><td>Kaca</td><td class="n">Tidak jatuh selepas 10 minit</td></tr>'+
'</tbody></table></div><p class="qnote">Rod yang sama panjang dan tebal dipanaskan di satu hujung. Sebatang paku dilekatkan dengan lilin di hujung satu lagi. Lilin cair apabila haba sampai.</p>';

const T_TIN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tin</th>'+
'<th>Permukaan luar</th><th class="n">Suhu air selepas 20 minit di bawah matahari (&deg;C)</th><th class="n">Suhu air 20 minit selepas dibawa ke tempat teduh (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>J</td><td>Hitam dan kusam</td><td class="n">48</td><td class="n">36</td></tr>'+
'<tr><td>K</td><td>Putih</td><td class="n">37</td><td class="n">33</td></tr>'+
'<tr><td>L</td><td>Perak berkilat</td><td class="n">34</td><td class="n">32</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap tin berisi 200 ml air pada suhu awal 28 &deg;C. Suhu tempat teduh ialah 28 &deg;C. Data rekaan.</p>';

const T_BUMBUNG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Pilihan bumbung</th>'+
'<th class="n">Kos (RM)</th><th class="n">Suhu dalam rumah pukul 2 petang (&deg;C)</th><th>Catatan</th></tr></thead><tbody>'+
'<tr><td>Zink biasa</td><td class="n">8 000</td><td class="n">36</td><td>Bising ketika hujan</td></tr>'+
'<tr><td>Zink dicat putih</td><td class="n">9 000</td><td class="n">33</td><td>Cat perlu diulang setiap 5 tahun</td></tr>'+
'<tr><td>Zink + lapisan penebat kerajang aluminium</td><td class="n">11 000</td><td class="n">31</td><td>Kurang bising</td></tr>'+
'<tr><td>Genting tanah liat</td><td class="n">15 000</td><td class="n">30</td><td>Tahan lama, lebih berat</td></tr>'+
'</tbody></table></div><p class="qnote">Pilihan bumbung untuk sebuah rumah teres satu tingkat. Suhu luar 33 &deg;C. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Pantai Petang", sk:"9.1 / 9.2 Suhu, haba dan pengaliran haba",
 kadNama:"Keseimbangan Terma", kadEm:"\u{2696}", kadFakta:"Secawan teh panas akhirnya mencapai suhu bilik kerana haba mengalir keluar sehingga suhu sama.",
 bosKadNama:"Bayu Laut", bosKadEm:"\u{1F30A}", bosKadFakta:"Bayu laut bertiup pada waktu siang kerana daratan menjadi panas lebih cepat daripada laut.",
 soalan:[
 {j:"pilih",t:"Unit S.I. bagi haba ialah:",p:["Joule (J)","Kelvin (K)","Darjah Celsius (°C)","Watt (W)"],b:0,u:"Haba ialah satu bentuk tenaga."},
 {j:"pilih",t:"Suhu ialah ukuran:",p:["Darjah kepanasan sesuatu objek","Jumlah tenaga haba dalam objek","Jisim sesuatu objek","Isi padu sesuatu objek"],b:0,u:"Suhu diukur dengan termometer."},
 {j:"pilih",t:"Haba sentiasa mengalir dari:",p:["Kawasan panas ke kawasan sejuk","Kawasan sejuk ke kawasan panas","Objek besar ke objek kecil","Objek ringan ke objek berat"],b:0,u:"Pengaliran berhenti apabila suhu sama."},
 {j:"pilih",t:"Pemindahan haba melalui pepejal dipanggil:",p:["Konduksi","Perolakan","Sinaran","Penyejatan"],b:0,u:"Zarah yang bergetar memindahkan tenaga kepada zarah bersebelahan."},
 {j:"pilih",t:"Pemindahan haba dari Matahari ke Bumi berlaku melalui:",p:["Sinaran","Konduksi","Perolakan","Pantulan"],b:0,u:"Sinaran tidak memerlukan medium."},
 {j:"pilih",t:"Contoh penebat haba ialah:",p:["Plastik","Kuprum","Aluminium","Besi"],b:0,u:"Logam ialah konduktor haba yang baik."},
 {j:"pilih",t:"Objek yang menyerap haba paling baik ialah objek:",p:["Hitam dan kusam","Putih dan berkilat","Perak berkilat","Lutsinar"],b:0,u:"Objek hitam dan kusam juga membebaskan haba paling baik."},
 {j:"banyak",t:"Pilih SEMUA contoh perolakan.",p:["Air di dalam cerek dipanaskan dari bawah","Bayu laut pada waktu siang","Udara panas naik dari api unggun","Sudu logam menjadi panas dalam sup","Cahaya matahari memanaskan kulit"],b:[0,1,2],u:"Sudu logam ialah konduksi, dan cahaya matahari ialah sinaran."}],
 bos:{j:"pilih",t:"Pada waktu malam, bayu darat bertiup kerana:",p:["Daratan menyejuk lebih cepat daripada laut","Laut menyejuk lebih cepat daripada daratan","Angin sentiasa bertiup ke laut","Bulan menarik udara ke laut"],b:0,u:"Udara di atas laut yang lebih panas naik, dan udara sejuk dari darat menggantikannya."}},

{n:2, tempat:"Stesen Kereta Api", sk:"9.2 / 9.3 / 9.4 Konduktor, pengembangan dan penyerapan haba",
 kadNama:"Ruang Landasan", kadEm:"\u{1F6E4}", kadFakta:"Ruang kecil ditinggalkan antara landasan kereta api supaya landasan boleh mengembang pada hari panas tanpa bengkok.",
 bosKadNama:"Jalur Dwilogam", bosKadEm:"\u{1F514}", bosKadFakta:"Jalur dwilogam melengkung apabila panas kerana dua logamnya mengembang pada kadar berbeza.",
 soalan:[
 {j:"pilih",t:"Mengapakah ruang ditinggalkan antara landasan kereta api?",p:["Supaya landasan boleh mengembang","Supaya bunyi kereta api lebih kuat","Supaya air hujan mudah mengalir","Supaya landasan lebih murah"],b:0,u:"Tanpa ruang, landasan akan bengkok."},
 {j:"pilih",t:"Mengapakah kabel elektrik dipasang kendur di antara tiang?",p:["Kabel mengecut ketika sejuk","Kabel mengembang ketika sejuk","Supaya burung boleh hinggap","Supaya elektrik mengalir laju"],b:0,u:"Kabel yang terlalu tegang boleh putus apabila mengecut."},
 {j:"pilih",t:"Termometer merkuri berfungsi kerana merkuri:",p:["Mengembang apabila dipanaskan","Mengecut apabila dipanaskan","Berubah warna apabila panas","Menjadi pepejal pada suhu bilik"],b:0,u:"Paras merkuri naik apabila suhu meningkat."},
 {j:"pilih",t:"Penutup logam balang kaca yang ketat boleh dibuka dengan merendamnya dalam air panas kerana:",p:["Logam mengembang lebih banyak daripada kaca","Kaca mengembang lebih banyak daripada logam","Air panas melicinkan penutup","Haba melemahkan balang kaca"],b:0,u:"Penutup longgar sedikit apabila ia mengembang."},
 {j:"pilih",t:"Mengapakah pemegang kuali diperbuat daripada kayu atau plastik?",p:["Ia penebat haba","Ia konduktor haba","Ia lebih berat","Ia menyerap sinaran"],b:0,u:"Tangan tidak melecur apabila memegang kuali panas."},
 {j:"pilih",t:"Mengapakah pakaian berwarna cerah lebih selesa pada hari panas?",p:["Warna cerah menyerap kurang haba","Warna cerah menyerap lebih banyak haba","Warna cerah menghasilkan angin","Warna cerah lebih berat"],b:0,u:"Permukaan cerah memantulkan lebih banyak sinaran."},
 {j:"pilih",t:"Kelalang termos mempunyai dinding dalam yang berkilat. Fungsinya ialah:",p:["Mengurangkan kehilangan haba melalui sinaran","Menambah pemindahan haba melalui konduksi","Membolehkan perolakan berlaku lebih cepat","Menjadikan termos lebih cantik dilihat"],b:0,u:"Ruang vakum pula menghalang konduksi dan perolakan."},
 {j:"pilih",t:"Mengapakah jambatan keluli diletakkan di atas penggolek pada satu hujung?",p:["Supaya jambatan boleh mengembang dan mengecut","Supaya jambatan boleh dialihkan ke tempat lain","Supaya kenderaan bergerak lebih laju","Supaya jambatan menjadi lebih ringan"],b:0,u:"Penggolek membenarkan jambatan bergerak sedikit tanpa retak."}],
 bos:{j:"banyak",t:"Pilih SEMUA aplikasi pengembangan dan pengecutan jirim.",p:["Jalur dwilogam dalam penggera kebakaran","Ruang pada landasan kereta api","Merkuri dalam termometer","Pemegang plastik pada kuali","Baju putih pada hari panas"],b:[0,1,2],u:"Pemegang plastik ialah penebat, dan baju putih berkaitan pantulan sinaran."}},

{n:3, tempat:"Makmal Konduksi", sk:"9.2 Mengenal pasti konduktor dan penebat haba", lampiran:"rod",
 kadNama:"Kuprum", kadEm:"\u{1F373}", kadFakta:"Sesetengah periuk mempunyai dasar kuprum supaya haba cepat tersebar ke seluruh dasar.",
 bosKadNama:"Polistirena", bosKadEm:"\u{1F4E6}", bosKadFakta:"Kotak polistirena menyimpan ikan sejuk lebih lama kerana ia mengandungi banyak udara yang terperangkap.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, rod manakah konduktor haba paling baik?",p:["Kuprum","Aluminium","Besi","Kaca"],b:0,u:"Paku jatuh paling cepat, dalam 25 s."},
 {j:"pilih",t:"Rod manakah penebat haba?",p:["Kaca","Kuprum","Aluminium","Besi"],b:0,u:"Paku tidak jatuh selepas 10 minit."},
 {j:"susun",t:"Susun rod mengikut kekonduksian haba, bermula daripada yang PALING baik.",p:["Kuprum","Aluminium","Besi","Kaca"],b:[0,1,2,3],u:"Semakin cepat paku jatuh, semakin baik konduktor."},
 {j:"pilih",t:"Mengapakah rod perlu sama panjang dan sama tebal?",p:["Supaya ujian adil","Supaya rod mudah dibawa","Supaya lilin lebih banyak","Supaya rod tidak bengkok"],b:0,u:"Hanya jenis bahan patut berbeza."},
 {j:"pilih",t:"Bahan manakah paling sesuai untuk dasar periuk?",p:["Kuprum","Kaca","Besi","Plastik"],b:0,u:"Kuprum mengalirkan haba paling cepat ke makanan."},
 {j:"nombor",t:"Berapa saat lebih lambat paku pada rod besi jatuh berbanding rod kuprum?",b:85,tol:0.5,suf:"s",u:"110 − 25 = 85 s."},
 {j:"pilih",t:"Seorang murid mahu mengulang ujian ini dengan rod kayu. Ramalan paling munasabah?",p:["Paku tidak jatuh atau sangat lambat jatuh","Paku jatuh lebih cepat daripada kuprum","Paku jatuh dalam 40 s seperti aluminium","Rod kayu akan menjadi konduktor terbaik"],b:0,u:"Kayu ialah penebat haba."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh keputusan ujian rod.",p:["Logam mengkonduksi haba lebih baik daripada kaca","Kuprum konduktor paling baik dalam ujian ini","Kekonduksian haba berbeza antara logam","Semua logam mengkonduksi haba sama laju","Kaca konduktor haba yang baik"],b:[0,1,2],u:"Masa paku jatuh berbeza bagi kuprum, aluminium dan besi."}],
 bos:{j:"pilih",t:"Peniaga ikan mahu kotak untuk menghantar ikan sejuk sejauh 200 km. Bahan paling sesuai?",p:["Polistirena","Aluminium nipis","Kuprum","Kaca"],b:0,u:"Polistirena penebat yang baik kerana udara terperangkap di dalamnya."}},

{n:4, tempat:"Makmal Tin", sk:"9.4 Menganalisis penyerapan dan pembebasan haba", lampiran:"tin",
 kadNama:"Sirip Peti Sejuk", kadEm:"\u{1F9CA}", kadFakta:"Paip di belakang peti sejuk dicat hitam supaya haba dibebaskan dengan cepat ke udara.",
 bosKadNama:"Tangki Minyak", bosKadEm:"\u{1F6E2}", bosKadFakta:"Tangki minyak di depot dicat putih atau perak supaya kurang menyerap haba matahari.",
 soalan:[
 {j:"pilih",t:"Tin manakah menyerap haba paling baik?",p:["J","K","L","Semua sama"],b:0,u:"Suhu naik paling tinggi, dari 28 °C ke 48 °C."},
 {j:"nombor",t:"Berapakah kenaikan suhu air dalam tin J selepas 20 minit di bawah matahari, dalam °C?",b:20,tol:0.05,suf:"°C",u:"48 − 28 = 20 °C."},
 {j:"nombor",t:"Berapakah penurunan suhu air dalam tin J selepas dibawa ke tempat teduh, dalam °C?",b:12,tol:0.05,suf:"°C",u:"48 − 36 = 12 °C."},
 {j:"pilih",t:"Tin manakah membebaskan haba paling cepat?",p:["J","K","L","Semua sama"],b:0,u:"Suhu turun paling banyak, 12 °C."},
 {j:"pilih",t:"Tin perak berkilat menyerap haba paling sedikit kerana:",p:["Ia memantulkan kebanyakan sinaran","Ia menyerap semua sinaran","Ia konduktor haba yang lemah","Air di dalamnya lebih sedikit"],b:0,u:"Permukaan berkilat pemantul yang baik."},
 {j:"pilih",t:"Mengapakah setiap tin diisi dengan isi padu air dan suhu awal yang sama?",p:["Supaya perbandingan adil","Supaya air cepat mendidih","Supaya tin tidak terbalik","Supaya suhu tidak berubah"],b:0,u:"Hanya jenis permukaan patut berbeza."},
 {j:"pilih",t:"Ramalkan suhu air dalam tin J jika dibiarkan di tempat teduh selama 3 jam.",p:["Hampir 28 °C","Kekal 36 °C","Naik semula ke 48 °C","Turun ke 10 °C"],b:0,u:"Air akhirnya mencapai keseimbangan terma dengan persekitaran."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Permukaan hitam kusam penyerap haba terbaik","Permukaan hitam kusam pembebas haba terbaik","Permukaan berkilat penyerap haba paling lemah","Permukaan putih menyerap haba lebih baik daripada hitam","Semua permukaan menyerap haba sama banyak"],b:[0,1,2],u:"Tin putih mencapai 37 °C sahaja, berbanding 48 °C bagi tin hitam."}],
 bos:{j:"pilih",t:"Pengeluar mahu mereka pemanas air suria yang murah untuk rumah. Warna panel penyerap paling sesuai berdasarkan data?",p:["Hitam kusam","Putih berkilat","Perak berkilat","Lutsinar"],b:0,u:"Permukaan hitam kusam menyerap paling banyak sinaran matahari."}},

{n:5, tempat:"Taman Perumahan Hijau", sk:"9.2 / 9.4 Menilai pilihan bahan binaan", lampiran:"bumbung",
 kadNama:"Bangunan Hijau", kadEm:"\u{1F3E1}", kadFakta:"Bangunan hijau direka untuk menjimatkan tenaga, contohnya dengan bumbung berpenebat dan tingkap yang membenarkan aliran udara.",
 bosKadNama:"Kerajang Aluminium", bosKadEm:"\u{2728}", bosKadFakta:"Lapisan kerajang aluminium di bawah bumbung memantulkan sinaran haba kembali ke atas.",
 soalan:[
 {j:"nombor",t:"Berapakah beza suhu dalam rumah antara bumbung zink biasa dengan genting tanah liat, dalam °C?",b:6,tol:0.05,suf:"°C",u:"36 − 30 = 6 °C. Genting paling sejuk walaupun kosnya paling tinggi."},
 {j:"pilih",t:"Mengapakah suhu dalam rumah dengan zink biasa melebihi suhu luar?",p:["Zink menyerap dan menyinarkan haba ke dalam rumah","Zink memantulkan semua haba ke langit","Zink ialah penebat haba yang sangat baik","Zink menghasilkan angin sejuk"],b:0,u:"Logam nipis cepat panas dan memindahkan haba ke dalam rumah."},
 {j:"pilih",t:"Mengapakah zink dicat putih lebih sejuk daripada zink biasa?",p:["Permukaan putih memantulkan lebih banyak sinaran","Cat putih menjadikan zink lebih tebal","Cat putih menghasilkan wap air","Putih konduktor haba yang lebih baik"],b:0,u:"Kurang sinaran diserap bermakna kurang haba masuk."},
 {j:"nombor",t:"Berapakah beza kos antara zink + penebat dengan genting tanah liat, dalam RM?",b:4000,tol:0.5,suf:"RM",u:"15 000 − 11 000 = RM4000."},
 {j:"pilih",t:"Keluarga berpendapatan sederhana mahu rumah yang sejuk dengan kos berpatutan. Pilihan paling wajar?",p:["Zink + penebat","Zink biasa","Genting tanah liat","Zink dicat putih"],b:0,u:"Hanya 1 °C lebih panas daripada genting tetapi RM4000 lebih murah."},
 {j:"pilih",t:"Seorang kontraktor mendakwa zink dicat putih paling berbaloi. Nilaikan dakwaan itu.",p:["Separuh betul; murah tetapi cat perlu diulang","Betul sepenuhnya; ia paling sejuk","Salah; ia lebih panas daripada zink biasa","Salah; cat putih menyerap lebih banyak haba"],b:0,u:"Kos jangka panjang termasuk mengecat semula perlu diambil kira."},
 {j:"pilih",t:"Selain bumbung, cara paling murah untuk menyejukkan rumah ialah:",p:["Tanam pokok teduhan","Tutup semua tingkap sepanjang hari","Cat dinding luar dengan warna hitam","Pasang langsir tebal berwarna gelap"],b:0,u:"Teduhan mengurangkan sinaran dan aliran udara membawa haba keluar."},
 {j:"pilih",t:"Data suhu diambil pada satu hari sahaja. Kelemahan utamanya ialah:",p:["Cuaca hari lain mungkin memberi keputusan berbeza","Terlalu banyak bumbung dibandingkan","Suhu tidak boleh diukur di dalam rumah","Kos tidak boleh dibandingkan"],b:0,u:"Pengukuran beberapa hari memberi gambaran lebih tepat."}],
 bos:{j:"pilih",t:"Sekolah di kawasan panas mahu mengurangkan penggunaan pendingin hawa di perpustakaan. Pelaburan paling wajar?",p:["Penebat bumbung dan pokok teduhan","Pendingin hawa tambahan","Tingkap kaca gelap tanpa pengudaraan","Lampu tambahan di siling"],b:0,u:"Mengurangkan haba masuk lebih jimat daripada membuang haba dengan elektrik."}},

{n:6, tempat:"Studio Reka Bentuk", sk:"9.4 Mereka cipta menggunakan konsep haba",
 kadNama:"Pemanas Air Suria", kadEm:"\u{2600}", kadFakta:"Pemanas air suria menggunakan panel hitam dan paip untuk memanaskan air dengan tenaga matahari percuma.",
 bosKadNama:"Rumah Tradisional", bosKadEm:"\u{1F3E0}", bosKadFakta:"Rumah tradisional Melayu berbumbung tinggi dan beranjung supaya udara panas naik dan keluar melalui ruang di bumbung.",
 soalan:[
 {j:"pilih",t:"Awak mereka bekas bekal makanan yang kekal panas hingga waktu rehat. Ciri paling penting?",p:["Dinding berlapis dengan udara atau penebat","Dinding logam nipis tanpa penutup","Bekas kaca lutsinar terbuka","Bekas hitam tanpa penutup"],b:0,u:"Penebat mengurangkan kehilangan haba melalui konduksi."},
 {j:"pilih",t:"Awak mereka pemasak suria untuk perkhemahan. Gabungan paling berkesan?",p:["Periuk hitam dengan pemantul perak","Periuk perak dengan pemantul hitam","Periuk putih tanpa pemantul","Periuk lutsinar di tempat teduh"],b:0,u:"Pemantul menumpukan sinaran dan periuk hitam menyerapnya."},
 {j:"pilih",t:"Awak mereka topi untuk petani di sawah. Bahan paling sesuai?",p:["Lebar, berwarna cerah dan berlubang udara","Kecil, hitam dan diperbuat daripada plastik tebal","Logam berkilat yang berat","Kain hitam tebal tanpa lubang"],b:0,u:"Warna cerah memantulkan sinaran dan lubang udara membenarkan perolakan."},
 {j:"pilih",t:"Awak mereka penggera kebakaran ringkas. Komponen utama yang bergerak apabila panas?",p:["Jalur dwilogam","Rod kaca","Kepingan plastik","Kain kapas"],b:0,u:"Jalur dwilogam melengkung dan menutup litar penggera."},
 {j:"pilih",t:"Awak mereka kandang ayam yang tidak terlalu panas pada tengah hari. Ciri paling berkesan?",p:["Bumbung berpenebat dan dinding berjaring","Bumbung zink hitam tanpa penebat","Dinding tertutup rapat tanpa lubang","Letak kandang di tengah padang"],b:0,u:"Penebat mengurangkan haba masuk, dan jaring membenarkan udara mengalir."},
 {j:"pilih",t:"Awak mahu menyimpan ais lebih lama semasa hari sukan tanpa elektrik. Cara paling berkesan?",p:["Simpan dalam kotak polistirena","Letak ais dalam baldi logam di bawah matahari","Pecahkan ais dan tabur di atas meja","Simpan ais dalam beg plastik hitam di tempat panas"],b:0,u:"Penebat berlapis mengurangkan pemindahan haba ke ais."},
 {j:"pilih",t:"Awak mereka poster penjimatan tenaga di rumah. Nasihat paling tepat berkaitan haba?",p:["Tutup periuk semasa memasak","Buka pintu peti sejuk lama-lama","Jemur kain di dalam rumah","Guna lampu mentol lama"],b:0,u:"Penutup mengurangkan kehilangan haba, jadi makanan masak lebih cepat."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada bekas bekal rekaan awak menyimpan haba lebih baik?",p:["Bandingkan penurunan suhu dengan bekas biasa","Timbang bekas sebelum dan selepas diisi","Tanya rakan sama ada bekas itu cantik","Uji sekali sahaja dengan makanan berbeza"],b:0,u:"Suhu awal, isi padu makanan dan masa mesti sama untuk perbandingan adil."}],
 bos:{j:"buka",
  t:"Keluarga awak mahu membina rumah kediaman hijau di kawasan yang panas supaya kurang bergantung pada pendingin hawa. Reka bentuk rumah itu menggunakan konsep haba.",
  arahan:"Terangkan reka bentuk rumah, bahan bumbung dan dinding serta sebabnya (konduksi, perolakan, sinaran, warna permukaan), cara aliran udara dirancang, cara mengukur keberkesanannya (contohnya suhu dalam rumah), serta kos dan kesesuaian dengan budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menggunakan konsep penyerapan dan pembebasan haba, penebat dan perolakan dengan betul, dan mengimbangi kos dengan keselesaan."}}
];

module.exports = {
  id:"t2b9", tingkatan:2, kod:"9.0 Haba",
  tajuk:"Laluan Haba",
  subtajuk:"Sains Ting. 2 · Bab 9 Haba",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud suhu dan haba serta tiga cara pengaliran haba. Langkah seterusnya ialah menjelaskan fenomena seperti bayu laut dan bayu darat.",
   2:"{n} memahami pengaliran haba, pengembangan jirim dan penyerapan haba oleh permukaan serta dapat menjelaskannya. Perlu lebih banyak latihan mentafsir data eksperimen.",
   3:"{n} boleh mengenal pasti konduktor dan penebat haba daripada data dan memilih bahan yang sesuai. Galakkan memberi sebab berdasarkan kekonduksian.",
   4:"{n} mampu menganalisis data penyerapan dan pembebasan haba oleh permukaan berbeza. Seterusnya latih menilai pilihan bahan binaan.",
   5:"{n} dapat menilai pilihan bahan binaan berdasarkan suhu, kos dan penyelenggaraan. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta reka bentuk rumah atau alat yang menggunakan konsep haba secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Haba. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ rod:T_ROD, tin:T_TIN, bumbung:T_BUMBUNG },
  aras:ARAS
};
