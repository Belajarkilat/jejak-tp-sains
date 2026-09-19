/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 8.0 Daya dan Gerakan.
   Jalankan `node bina.js t2b8` untuk menyemak dan menghasilkan bank-t2b8.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 77.

   g diambil sebagai 10 N/kg.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai daya dan gerakan.",
"Memahami daya dan gerakan dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai daya dan gerakan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai daya dan gerakan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai daya dan gerakan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai daya dan gerakan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_TUAS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Situasi</th>'+
'<th class="n">Beban (N)</th><th class="n">Jarak beban dari fulkrum (m)</th><th class="n">Jarak daya dari fulkrum (m)</th></tr></thead><tbody>'+
'<tr><td>A: Jongkang-jongket</td><td class="n">400</td><td class="n">1.5</td><td class="n">2.0</td></tr>'+
'<tr><td>B: Kereta sorong</td><td class="n">600</td><td class="n">0.4</td><td class="n">1.2</td></tr>'+
'<tr><td>C: Batang pengungkit batu</td><td class="n">900</td><td class="n">0.2</td><td class="n">1.8</td></tr>'+
'</tbody></table></div><p class="qnote">Beban &times; jarak beban dari fulkrum = daya &times; jarak daya dari fulkrum. Abaikan berat tuas.</p>';

const T_APUNG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Objek</th>'+
'<th class="n">Berat di udara (N)</th><th class="n">Berat ketara di dalam air (N)</th></tr></thead><tbody>'+
'<tr><td>Blok aluminium</td><td class="n">5.4</td><td class="n">3.4</td></tr>'+
'<tr><td>Blok besi, saiz sama</td><td class="n">15.8</td><td class="n">13.8</td></tr>'+
'<tr><td>Batu</td><td class="n">6.0</td><td class="n">3.5</td></tr>'+
'<tr><td>Blok kayu</td><td class="n">1.2</td><td class="n">0 (terapung)</td></tr>'+
'</tbody></table></div><p class="qnote">Berat diukur dengan neraca spring. Daya apungan = berat di udara &minus; berat ketara di dalam air.</p>';

const T_TAYAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kenderaan</th>'+
'<th class="n">Berat (N)</th><th class="n">Jumlah luas sentuhan tayar dengan tanah (m&sup2;)</th><th class="n">Harga sewa sehari (RM)</th></tr></thead><tbody>'+
'<tr><td>Traktor biasa</td><td class="n">30 000</td><td class="n">0.3</td><td class="n">200</td></tr>'+
'<tr><td>Traktor tayar lebar</td><td class="n">32 000</td><td class="n">0.8</td><td class="n">280</td></tr>'+
'<tr><td>Jentera berantai</td><td class="n">60 000</td><td class="n">3.0</td><td class="n">500</td></tr>'+
'</tbody></table></div><p class="qnote">Tekanan = daya &divide; luas permukaan. Tanah sawah yang lembut hanya boleh menampung tekanan kira-kira 50 000 Pa tanpa jentera terbenam. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Taman Permainan", sk:"8.1 Jenis daya dan cirinya",
 kadNama:"Newton", kadEm:"\u{1F34E}", kadFakta:"Unit daya dinamakan sempena Isaac Newton. Daya 1 N lebih kurang berat sebiji epal kecil.",
 bosKadNama:"Daya Tindak Balas", bosKadEm:"\u{1F680}", bosKadFakta:"Roket bergerak ke atas kerana gas ditolak ke bawah; gas itu menolak roket ke atas dengan daya yang sama magnitud.",
 soalan:[
 {j:"pilih",t:"Apakah maksud daya?",p:["Tolakan atau tarikan","Jisim sesuatu objek","Isi padu sesuatu objek","Laju sesuatu objek"],b:0,u:"Daya boleh mengubah bentuk, kedudukan, laju dan arah objek."},
 {j:"pilih",t:"Unit S.I. bagi daya ialah:",p:["Newton (N)","Kilogram (kg)","Joule (J)","Pascal (Pa)"],b:0,u:"Daya diukur dengan neraca spring."},
 {j:"pilih",t:"Daya yang menentang gerakan antara dua permukaan dipanggil:",p:["Geseran","Graviti","Apungan","Kenyal"],b:0,u:"Geseran menghasilkan haba."},
 {j:"pilih",t:"Daya yang menolak objek ke atas apabila berada di dalam air dipanggil:",p:["Daya apungan","Daya normal","Daya graviti","Daya geseran"],b:0,u:"Daya apungan menyebabkan objek terasa lebih ringan di dalam air."},
 {j:"pilih",t:"Tiga ciri daya ialah magnitud, arah dan:",p:["Titik aplikasi","Warna","Suhu","Jisim"],b:0,u:"Kesan daya bergantung pada di mana ia dikenakan."},
 {j:"nombor",t:"Seorang murid berjisim 45 kg. Berapakah beratnya, dalam newton? (g = 10 N/kg)",b:450,tol:0.5,suf:"N",u:"W = mg = 45 × 10 = 450 N."},
 {j:"pilih",t:"Buku yang diletakkan di atas meja tidak jatuh kerana:",p:["Daya normal meja mengimbangi berat buku","Buku itu tiada berat langsung","Graviti tidak bertindak di atas meja","Geseran menarik buku ke atas"],b:0,u:"Berat (tindakan) sama dengan daya normal (tindak balas)."},
 {j:"banyak",t:"Pilih SEMUA contoh daya kenyal.",p:["Spring yang ditarik","Getah lastik yang diregang","Trampolin yang ditekan","Epal jatuh dari pokok","Bot terapung di sungai"],b:[0,1,2],u:"Epal jatuh kerana graviti dan bot terapung kerana daya apungan."}],
 bos:{j:"pilih",t:"Jika awak menolak dinding dengan daya 50 N, dinding menolak awak dengan daya:",p:["50 N ke arah bertentangan","0 N kerana dinding tidak bergerak","100 N ke arah yang sama","25 N ke arah bertentangan"],b:0,u:"Setiap daya tindakan mempunyai daya tindak balas yang sama magnitud tetapi bertentangan arah."}},

{n:2, tempat:"Bengkel Kereta", sk:"8.2 Kesan daya, tuas, momen dan tekanan",
 kadNama:"Spanar", kadEm:"\u{1F527}", kadFakta:"Spanar yang panjang memudahkan nat longgar kerana momen daya bertambah apabila jarak dari pangsi bertambah.",
 bosKadNama:"Tekanan Atmosfera", bosKadEm:"\u{1F3D4}", bosKadFakta:"Tekanan atmosfera di puncak Gunung Kinabalu hanya kira-kira 60% daripada tekanan di aras laut.",
 soalan:[
 {j:"pilih",t:"Kereta sorong ialah tuas kelas:",p:["Kedua","Pertama","Ketiga","Keempat"],b:0,u:"Beban berada di antara fulkrum (roda) dan daya."},
 {j:"pilih",t:"Penyepit makanan ialah tuas kelas:",p:["Ketiga","Pertama","Kedua","Keempat"],b:0,u:"Daya berada di antara fulkrum dan beban."},
 {j:"pilih",t:"Mengapakah lebih mudah membuka pintu dengan menolak pada bahagian yang jauh dari engsel?",p:["Momen daya lebih besar","Pintu menjadi lebih ringan","Geseran pada engsel hilang","Graviti menarik pintu"],b:0,u:"Momen daya = daya × jarak tegak dari pangsi."},
 {j:"pilih",t:"Mengapakah pisau yang tajam lebih mudah memotong?",p:["Luas permukaan kecil, tekanan lebih besar","Pisau tajam lebih berat daripada pisau tumpul","Pisau tajam mengurangkan daya yang dikenakan","Luas permukaan besar, tekanan lebih besar"],b:0,u:"Tekanan = daya ÷ luas permukaan."},
 {j:"pilih",t:"Mengapakah tayar basikal lebih keras pada hari panas?",p:["Zarah udara lebih laju dan kerap berlanggar","Getah tayar mengecut apabila panas","Udara dalam tayar menjadi lebih sejuk","Bilangan zarah udara berkurang"],b:0,u:"Tekanan gas bertambah apabila suhu meningkat."},
 {j:"pilih",t:"Mengapakah dinding empangan lebih tebal di bahagian bawah?",p:["Tekanan air bertambah dengan kedalaman","Air di bawah lebih ringan","Batu lebih murah di bawah","Supaya empangan kelihatan cantik"],b:0,u:"Air di dasar menanggung berat air di atasnya."},
 {j:"pilih",t:"Minuman boleh disedut melalui penyedut minuman kerana:",p:["Tekanan atmosfera menolak minuman ke atas","Mulut menarik minuman terus dengan magnet","Minuman lebih ringan daripada udara","Graviti menolak minuman ke atas"],b:0,u:"Menyedut mengurangkan tekanan di dalam penyedut."},
 {j:"pilih",t:"Telinga terasa tersumbat semasa kapal terbang naik tinggi kerana:",p:["Tekanan udara di luar berkurang","Tekanan udara di luar bertambah","Suhu kabin terlalu tinggi","Bunyi enjin terlalu kuat"],b:0,u:"Tekanan atmosfera berkurang apabila altitud bertambah."}],
 bos:{j:"banyak",t:"Pilih SEMUA contoh tuas kelas pertama.",p:["Gunting","Jongkang-jongket","Playar","Kereta sorong","Penyepit"],b:[0,1,2],u:"Kereta sorong kelas kedua, penyepit kelas ketiga."}},

{n:3, tempat:"Taman Tuas", sk:"8.2 Menyelesaikan masalah tuas dan momen daya", lampiran:"tuas",
 kadNama:"Archimedes", kadEm:"\u{1F30D}", kadFakta:"Archimedes pernah berkata: 'Beri saya tuas yang cukup panjang, dan saya akan menggerakkan dunia.'",
 bosKadNama:"Tuas Badan", bosKadEm:"\u{1F4AA}", bosKadFakta:"Lengan bawah manusia bertindak sebagai tuas kelas ketiga, dengan siku sebagai fulkrum.",
 soalan:[
 {j:"nombor",t:"Berapakah daya yang diperlukan dalam situasi A, dalam newton?",b:300,tol:0.5,suf:"N",u:"400 × 1.5 = F × 2.0, jadi F = 300 N."},
 {j:"nombor",t:"Berapakah daya yang diperlukan untuk mengangkat kereta sorong dalam situasi B, dalam newton?",b:200,tol:0.5,suf:"N",u:"600 × 0.4 = F × 1.2, jadi F = 200 N."},
 {j:"nombor",t:"Berapakah daya yang diperlukan untuk mengungkit batu dalam situasi C, dalam newton?",b:100,tol:0.5,suf:"N",u:"900 × 0.2 = F × 1.8, jadi F = 100 N."},
 {j:"pilih",t:"Situasi manakah memberi kelebihan paling besar, iaitu daya paling kecil berbanding beban?",p:["C","A","B","Semua sama"],b:0,u:"C mengangkat 900 N dengan 100 N sahaja."},
 {j:"pilih",t:"Dalam situasi B, bagaimanakah daya boleh dikurangkan lagi?",p:["Letak beban lebih dekat dengan roda","Letak beban lebih dekat dengan pemegang","Pendekkan pemegang kereta sorong","Tambah lebih banyak beban"],b:0,u:"Jarak beban dari fulkrum yang lebih kecil mengurangkan momen beban."},
 {j:"nombor",t:"Seorang mekanik mengenakan daya 40 N pada spanar sepanjang 0.25 m. Berapakah momen daya, dalam N m?",b:10,tol:0.05,suf:"N m",u:"Momen = 40 × 0.25 = 10 N m."},
 {j:"pilih",t:"Nat terlalu ketat untuk dilonggarkan dengan spanar 0.25 m. Tindakan paling berkesan?",p:["Guna spanar yang lebih panjang","Guna spanar yang lebih pendek","Tolak lebih dekat dengan nat","Sapu gam pada nat"],b:0,u:"Jarak lebih panjang menghasilkan momen lebih besar dengan daya yang sama."},
 {j:"pilih",t:"Dalam situasi A, jika kanak-kanak 400 N duduk 2.0 m dari fulkrum, di manakah kanak-kanak 500 N perlu duduk untuk mengimbanginya?",p:["1.6 m dari fulkrum","2.5 m dari fulkrum","2.0 m dari fulkrum","1.0 m dari fulkrum"],b:0,u:"400 × 2.0 = 500 × d, jadi d = 1.6 m."}],
 bos:{j:"susun",t:"Susun tuas mengikut kelas, bermula daripada kelas PERTAMA.",p:["Gunting","Pembuka botol","Penyapu"],b:[0,1,2],u:"Gunting kelas pertama, pembuka botol kelas kedua, penyapu kelas ketiga."}},

{n:4, tempat:"Kolam Ujian", sk:"8.2 Menganalisis daya apungan", lampiran:"apung",
 kadNama:"Garis Plimsoll", kadEm:"\u{1F6A2}", kadFakta:"Garis Plimsoll pada badan kapal menunjukkan had muatan selamat bagi air yang berlainan jenis dan suhu.",
 bosKadNama:"Kapal Selam", bosKadEm:"\u{1F988}", bosKadFakta:"Kapal selam tenggelam dengan mengisi tangki dengan air laut dan timbul dengan menolak air keluar menggunakan udara mampat.",
 soalan:[
 {j:"nombor",t:"Berapakah daya apungan ke atas blok aluminium, dalam newton?",b:2,tol:0.05,suf:"N",u:"5.4 − 3.4 = 2.0 N."},
 {j:"nombor",t:"Berapakah daya apungan ke atas batu, dalam newton?",b:2.5,tol:0.05,suf:"N",u:"6.0 − 3.5 = 2.5 N."},
 {j:"pilih",t:"Blok aluminium dan blok besi sama saiz mendapat daya apungan yang sama. Mengapa?",p:["Isi padu air yang disesarkan sama","Jisim kedua-dua blok sama","Kedua-duanya diperbuat daripada logam","Daya apungan tidak bergantung pada air"],b:0,u:"Daya apungan bergantung pada isi padu cecair yang disesarkan."},
 {j:"pilih",t:"Mengapakah blok kayu terapung?",p:["Daya apungan mengimbangi beratnya","Kayu tiada berat langsung","Air menarik kayu ke atas","Graviti tidak bertindak pada kayu"],b:0,u:"Kayu kurang tumpat daripada air."},
 {j:"nombor",t:"Berapakah daya apungan ke atas blok kayu yang terapung, dalam newton?",b:1.2,tol:0.05,suf:"N",u:"Objek terapung: daya apungan = beratnya = 1.2 N."},
 {j:"pilih",t:"Jika blok aluminium direndam dalam air laut yang lebih tumpat, berat ketaranya akan:",p:["Berkurang","Bertambah","Kekal 3.4 N","Menjadi 5.4 N"],b:0,u:"Air laut yang lebih tumpat memberi daya apungan lebih besar."},
 {j:"pilih",t:"Kapal kargo belayar dari laut ke sungai air tawar. Apakah yang berlaku?",p:["Kapal tenggelam lebih dalam","Kapal timbul lebih tinggi","Tiada perubahan","Kapal terus karam"],b:0,u:"Air tawar kurang tumpat, jadi lebih banyak air perlu disesarkan."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Semua objek mengalami daya apungan dalam air","Objek sama saiz disesarkan air yang sama","Objek terapung apabila daya apungan sama dengan berat","Objek yang berat tidak mengalami daya apungan","Daya apungan besi lebih besar kerana ia berat"],b:[0,1,2],u:"Besi dan aluminium sama saiz mendapat daya apungan yang sama, 2.0 N."}],
 bos:{j:"pilih",t:"Mengapakah had muatan kapal dalam air tawar tropika lebih rendah pada garis Plimsoll?",p:["Air tawar hangat kurang tumpat, jadi kapal tenggelam lebih dalam","Air tawar hangat lebih tumpat dan menolak kapal ke atas","Kapal lebih ringan dalam air tawar","Garis Plimsoll hanya untuk hiasan"],b:0,u:"Kapal mesti dimuatkan lebih sedikit supaya tidak tenggelam melepasi paras selamat."}},

{n:5, tempat:"Sawah Bendang", sk:"8.2 Menilai aplikasi tekanan", lampiran:"tayar",
 kadNama:"Pascal", kadEm:"\u{1F4CF}", kadFakta:"Unit tekanan ialah pascal (Pa). 1 Pa ialah daya 1 N yang bertindak ke atas luas 1 m².",
 bosKadNama:"Kasut Salji", bosKadEm:"\u{1F97E}", bosKadFakta:"Kasut salji yang lebar menyebarkan berat badan supaya pemakainya tidak terbenam dalam salji.",
 soalan:[
 {j:"nombor",t:"Berapakah tekanan traktor biasa ke atas tanah, dalam pascal?",b:100000,tol:0.5,suf:"Pa",u:"30 000 ÷ 0.3 = 100 000 Pa."},
 {j:"nombor",t:"Berapakah tekanan traktor tayar lebar ke atas tanah, dalam pascal?",b:40000,tol:0.5,suf:"Pa",u:"32 000 ÷ 0.8 = 40 000 Pa."},
 {j:"nombor",t:"Berapakah tekanan jentera berantai ke atas tanah, dalam pascal?",b:20000,tol:0.5,suf:"Pa",u:"60 000 ÷ 3.0 = 20 000 Pa."},
 {j:"pilih",t:"Kenderaan manakah akan terbenam di tanah sawah?",p:["Traktor biasa","Traktor tayar lebar","Jentera berantai","Tiada yang terbenam"],b:0,u:"100 000 Pa melebihi had 50 000 Pa."},
 {j:"pilih",t:"Jentera berantai paling berat tetapi tekanannya paling rendah. Mengapa?",p:["Luas sentuhannya paling besar","Beratnya diabaikan di sawah","Rantainya terapung di air","Tanah menjadi lebih keras"],b:0,u:"Tekanan bergantung pada daya dan luas permukaan."},
 {j:"pilih",t:"Petani mahu kenderaan yang tidak terbenam dengan kos sewa paling rendah. Pilihan paling wajar?",p:["Traktor tayar lebar","Traktor biasa","Jentera berantai","Sewa kedua-dua traktor"],b:0,u:"Tekanannya di bawah had, dan RM280 lebih murah daripada RM500."},
 {j:"pilih",t:"Seorang pekerja mencadangkan traktor biasa kerana paling murah. Nilaikan cadangan itu.",p:["Tidak wajar; ia terbenam dan menambah kos kerja","Wajar, kerana harga sewa paling penting","Wajar, kerana traktor biasa paling ringan","Tidak wajar, kerana traktor biasa paling berat"],b:0,u:"Kos menarik traktor yang terbenam dan kerja yang tertangguh lebih mahal."},
 {j:"pilih",t:"Pada musim kering, tanah sawah boleh menampung 150 000 Pa. Pilihan paling jimat ketika itu?",p:["Traktor biasa","Traktor tayar lebar","Jentera berantai","Tiada kenderaan"],b:0,u:"Semua tekanan di bawah had, jadi pilih yang paling murah."}],
 bos:{j:"pilih",t:"Kilang mahu mereka jentera penuai padi baharu untuk sawah lembut. Keutamaan reka bentuk paling wajar?",p:["Luas sentuhan besar supaya tekanan rendah","Tayar kecil supaya jentera ringan","Berat ditambah supaya jentera stabil","Tayar sempit supaya mudah dipandu"],b:0,u:"Tekanan rendah menghalang jentera terbenam."}},

{n:6, tempat:"Makmal Reka Bentuk", sk:"8.1 / 8.2 Mereka cipta menggunakan konsep daya",
 kadNama:"Sifon", kadEm:"\u{1F6B0}", kadFakta:"Sifon memindahkan cecair dari bekas tinggi ke bekas rendah melalui tiub tanpa pam, dibantu oleh tekanan atmosfera.",
 bosKadNama:"Bot Terapung", bosKadEm:"\u{1F6F6}", bosKadFakta:"Bot dengan badan yang lebar menyesarkan lebih banyak air dan boleh membawa lebih banyak muatan.",
 soalan:[
 {j:"pilih",t:"Awak mereka bot daripada aluminium foil untuk membawa guli sebanyak mungkin. Bentuk paling berkesan?",p:["Lebar dengan dinding rendah","Bebola padat","Sempit dan tinggi","Kepingan rata tanpa dinding"],b:0,u:"Badan lebar menyesarkan lebih banyak air."},
 {j:"pilih",t:"Awak mereka alat mengangkat tong gas untuk warga emas. Prinsip paling sesuai?",p:["Tuas dengan jarak daya yang panjang","Tuas dengan jarak daya yang pendek","Tali tanpa sebarang takal","Mengangkat terus tanpa bantuan"],b:0,u:"Jarak daya yang panjang mengurangkan daya yang diperlukan."},
 {j:"pilih",t:"Awak mereka kasut untuk berjalan di pantai berpasir lembut. Ciri paling penting?",p:["Tapak yang lebar","Tumit yang tinggi dan tirus","Tapak yang sempit dan runcing","Paku di bawah tapak"],b:0,u:"Tapak lebar mengurangkan tekanan."},
 {j:"pilih",t:"Awak mahu mengosongkan akuarium tanpa mengangkatnya. Cara paling berkesan?",p:["Guna sifon ke baldi yang lebih rendah","Letak baldi lebih tinggi daripada akuarium","Guna penyedut minuman pendek","Tiup udara ke dalam akuarium"],b:0,u:"Sifon berfungsi jika hujung keluar lebih rendah daripada paras air."},
 {j:"pilih",t:"Awak mereka rak buku dinding yang tidak mudah tercabut. Di manakah skru patut dipasang?",p:["Berjarak jauh antara satu sama lain","Rapat di tengah-tengah rak sahaja","Satu skru sahaja di hujung rak yang berat","Di bawah rak sahaja"],b:0,u:"Jarak lebih jauh antara skru mengurangkan daya yang perlu ditanggung setiap skru."},
 {j:"pilih",t:"Awak mereka bekas air minuman untuk pendaki gunung. Masalah yang perlu diambil kira?",p:["Botol mengembang kerana tekanan luar rendah","Air membeku serta-merta sebaik sampai di puncak","Botol menjadi lebih berat di puncak","Air mendidih pada 150 °C di puncak"],b:0,u:"Tekanan atmosfera berkurang dengan altitud."},
 {j:"pilih",t:"Awak mencadangkan cara mengurangkan geseran pada pintu gelangsar kelas. Cadangan paling berkesan?",p:["Sapu gris pada landasan","Tambah pasir pada landasan","Pasang pemberat pada pintu","Tolak pintu lebih kuat"],b:0,u:"Pelincir mengurangkan geseran antara permukaan."},
 {j:"pilih",t:"Bagaimanakah awak menguji reka bentuk bot aluminium foil secara adil?",p:["Saiz foil dan jenis guli yang sama","Guna foil berbeza saiz bagi setiap bot","Uji di dalam air laut dan air paip","Tambah guli sekali gus tanpa mengira"],b:0,u:"Hanya bentuk bot patut berbeza."}],
 bos:{j:"buka",
  t:"Kampung awak kerap dilanda banjir dan penduduk perlu memindahkan barang dengan cepat. Reka satu alat atau rakit yang menggunakan konsep daya, tuas dan keapungan.",
  arahan:"Terangkan rekaan awak, daya yang terlibat (berat, daya apungan atau daya tuas), pengiraan mudah seperti daya apungan atau beban × jarak = daya × jarak, bahan yang digunakan, cara mengujinya dengan selamat, serta kos dan kesesuaian untuk penduduk.",
  u:"Jawapan TP6 yang kukuh menggunakan konsep keapungan dan tuas dengan pengiraan yang betul, memilih bahan tempatan yang sesuai, dan merancang ujian keselamatan."}}
];

module.exports = {
  id:"t2b8", tingkatan:2, kod:"8.0 Daya dan Gerakan",
  tajuk:"Laluan Daya",
  subtajuk:"Sains Ting. 2 · Bab 8 Daya dan Gerakan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis daya, unit daya dan ciri daya. Langkah seterusnya ialah menjelaskan kesan daya dan contoh tuas.",
   2:"{n} memahami kesan daya, kelas tuas, momen daya dan tekanan serta dapat menjelaskannya. Perlu lebih banyak latihan menggunakan rumus.",
   3:"{n} boleh menyelesaikan masalah tuas dan momen daya menggunakan rumus. Galakkan menulis unit dalam setiap langkah pengiraan.",
   4:"{n} mampu menganalisis data berat ketara untuk menentukan daya apungan dan menerangkan keapungan. Seterusnya latih menilai aplikasi tekanan.",
   5:"{n} dapat menilai pilihan kenderaan dan reka bentuk berdasarkan tekanan dan kos. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta alat yang menggunakan konsep daya, tuas dan keapungan secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Daya dan Gerakan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ tuas:T_TUAS, apung:T_APUNG, tayar:T_TAYAR },
  aras:ARAS
};
