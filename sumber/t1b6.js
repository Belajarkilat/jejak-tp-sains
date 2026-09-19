/* Sumber kandungan — Sains KSSM Tingkatan 1, Bidang 6.0 Jadual Berkala.
   Jalankan `node bina.js t1b6` untuk menyemak dan menghasilkan bank-t1b6.js.

   Standard Prestasi disalin daripada DSKP KSSM Sains Tingkatan 1, muka 64.
   DSKP menulis satu Standard Prestasi untuk Bab 5 hingga 7; di sini hanya
   bahagian "jadual berkala" dikekalkan. Perkataan "dalam" yang tertinggal
   pada TP5 DSKP ditambah.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai jadual berkala.",
"Memahami jadual berkala serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan jadual berkala untuk menerangkan kejadian atau fenomena alam dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai jadual berkala dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai jadual berkala dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekabentuk persembahan pelbagai media/visual/folio/poster/main peranan/drama secara kreatif dan inovatif dengan menggunakan pengetahuan dan kemahiran sains mengenai jadual berkala dalam konteks penyelesaian masalah dan membuat keputusan dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_UNSUR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Unsur</th>'+
'<th>Permukaan</th><th>Mengkonduksi elektrik</th><th>Apabila diketuk</th><th class="n">Takat lebur (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>W</td><td>Berkilat</td><td>Ya</td><td>Menjadi kepingan nipis</td><td class="n">1085</td></tr>'+
'<tr><td>X</td><td>Pudar, kuning</td><td>Tidak</td><td>Hancur menjadi serbuk</td><td class="n">115</td></tr>'+
'<tr><td>Y</td><td>Berkilat</td><td>Ya</td><td>Menjadi kepingan nipis</td><td class="n">660</td></tr>'+
'<tr><td>Z</td><td>Gas tidak berwarna</td><td>Tidak</td><td>&mdash;</td><td class="n">&minus;249</td></tr>'+
'</tbody></table></div><p class="qnote">Pemerhatian empat unsur di makmal. Z tidak bertindak balas dengan bahan lain.</p>';

const T_JISIM =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Eksperimen</th>'+
'<th class="n">Jisim sebelum (g)</th><th class="n">Jisim selepas (g)</th><th>Pemerhatian</th></tr></thead><tbody>'+
'<tr><td>A: Pita magnesium dibakar dalam mangkuk pijar, penutup dibuka sedikit-sedikit</td><td class="n">2.4</td><td class="n">4.0</td><td>Serbuk putih terhasil</td></tr>'+
'<tr><td>B: Serbuk besi dan sulfur dipanaskan dalam tabung tertutup</td><td class="n">8.8</td><td class="n">8.8</td><td>Pepejal hitam terhasil, tidak tertarik magnet</td></tr>'+
'<tr><td>C: Ais dileburkan dalam bikar bertutup</td><td class="n">50.0</td><td class="n">50.0</td><td>Air terhasil</td></tr>'+
'</tbody></table></div><p class="qnote">Jisim diukur dengan penimbang elektronik. Dalam A, jisim tidak termasuk mangkuk pijar. Data rekaan berdasarkan nilai sebenar.</p>';

const T_ASING =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Campuran</th>'+
'<th>Cadangan kaedah oleh Kumpulan Jaya</th></tr></thead><tbody>'+
'<tr><td>1. Pasir dan air</td><td>Penurasan</td></tr>'+
'<tr><td>2. Serbuk besi dan serbuk sulfur</td><td>Penyulingan</td></tr>'+
'<tr><td>3. Garam terlarut dalam air, garam diperlukan</td><td>Penyejatan</td></tr>'+
'<tr><td>4. Beberapa pewarna dalam dakwat hitam</td><td>Kromatografi</td></tr>'+
'<tr><td>5. Air daripada air laut, air diperlukan</td><td>Penurasan</td></tr>'+
'</tbody></table></div><p class="qnote">Kumpulan Jaya diberi lima campuran untuk diasingkan dalam pertandingan kelab sains.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Dinding Jadual", sk:"6.1 Atom, molekul, unsur dan sebatian",
 kadNama:"Atom", kadEm:"\u{269B}", kadFakta:"Atom sangat kecil: kira-kira 500 000 atom karbon yang disusun sebaris hanya selebar sehelai rambut.",
 bosKadNama:"Jadual Berkala", bosKadEm:"\u{1F5C2}", bosKadFakta:"Dmitri Mendeleev menyusun jadual berkala pada tahun 1869 dan meninggalkan ruang kosong untuk unsur yang belum ditemui.",
 soalan:[
 {j:"pilih",t:"Zarah sub-atom yang bercas negatif ialah:",p:["Elektron","Proton","Neutron","Nukleus"],b:0,u:"Elektron bergerak mengelilingi nukleus."},
 {j:"pilih",t:"Zarah sub-atom yang tidak bercas ialah:",p:["Neutron","Proton","Elektron","Ion"],b:0,u:"Neutron dan proton berada di dalam nukleus."},
 {j:"pilih",t:"Bahan yang terdiri daripada satu jenis atom sahaja dipanggil:",p:["Unsur","Sebatian","Campuran","Larutan"],b:0,u:"Contohnya besi, oksigen dan karbon."},
 {j:"pilih",t:"Air (H₂O) dikelaskan sebagai:",p:["Sebatian","Unsur","Campuran","Atom"],b:0,u:"Hidrogen dan oksigen bergabung secara kimia."},
 {j:"pilih",t:"Dua atau lebih atom yang bergabung secara kimia membentuk:",p:["Molekul","Proton","Elektron","Unsur baharu"],b:0,u:"Contohnya molekul oksigen (O₂) mengandungi dua atom oksigen."},
 {j:"pilih",t:"Dalam jadual berkala, gas nadir terletak di:",p:["Lajur paling kanan","Lajur paling kiri","Baris paling atas","Bahagian tengah"],b:0,u:"Gas nadir seperti helium, neon dan argon berada di Kumpulan 18."},
 {j:"pilih",t:"Kebanyakan unsur dalam jadual berkala ialah:",p:["Logam","Bukan logam","Gas nadir","Cecair"],b:0,u:"Logam memenuhi bahagian kiri dan tengah jadual."},
 {j:"banyak",t:"Pilih SEMUA contoh sebatian.",p:["Garam biasa (natrium klorida)","Karbon dioksida","Air","Emas","Oksigen"],b:[0,1,2],u:"Emas dan oksigen ialah unsur."}],
 bos:{j:"pilih",t:"Gas nadir yang digunakan dalam lampu iklan berwarna ialah:",p:["Neon","Oksigen","Nitrogen","Klorin"],b:0,u:"Neon bercahaya jingga-merah apabila elektrik mengalir melaluinya."}},

{n:2, tempat:"Bengkel Logam", sk:"6.1 / 6.2 / 6.3 Logam, bukan logam, campuran dan sebatian",
 kadNama:"Kuprum", kadEm:"\u{1F50C}", kadFakta:"Kuprum digunakan dalam dawai elektrik kerana ia konduktor yang baik dan mudah ditarik menjadi dawai halus.",
 bosKadNama:"Helium", bosKadEm:"\u{1F388}", bosKadFakta:"Helium digunakan dalam belon kerana ia kurang tumpat daripada udara dan tidak mudah terbakar.",
 soalan:[
 {j:"pilih",t:"Logam boleh ditarik menjadi dawai. Sifat ini dipanggil:",p:["Kemuluran","Kebolehtempaan","Kekonduksian","Kerapuhan"],b:0,u:"Kebolehtempaan pula ialah sifat boleh diketuk menjadi kepingan."},
 {j:"pilih",t:"Mengapakah periuk dibuat daripada logam tetapi pemegangnya daripada plastik?",p:["Logam konduktor haba, plastik penebat haba","Logam penebat haba, plastik konduktor haba","Plastik lebih berkilat daripada logam","Logam lebih ringan daripada plastik"],b:0,u:"Haba cepat sampai ke makanan tetapi tangan tidak melecur."},
 {j:"pilih",t:"Mengapakah gas nadir digunakan dalam mentol lampu?",p:["Ia tidak reaktif","Ia sangat berat","Ia mudah terbakar","Ia berwarna terang"],b:0,u:"Argon tidak bertindak balas dengan filamen yang panas."},
 {j:"pilih",t:"Beza utama campuran dengan sebatian ialah campuran:",p:["Boleh diasingkan dengan kaedah fizik","Terbentuk melalui tindak balas kimia","Mempunyai komposisi yang tetap","Menghasilkan bahan baharu"],b:0,u:"Sebatian hanya boleh diasingkan dengan kaedah kimia."},
 {j:"pilih",t:"Serbuk besi dan serbuk sulfur dicampur tanpa dipanaskan. Bagaimanakah besi boleh diasingkan?",p:["Guna magnet","Penurasan","Penyulingan","Kromatografi"],b:0,u:"Dalam campuran, besi masih bersifat magnet."},
 {j:"pilih",t:"Kaedah paling sesuai untuk mengasingkan pewarna dalam dakwat ialah:",p:["Kromatografi","Penurasan","Pengenapan","Pemisahan magnet"],b:0,u:"Pewarna bergerak pada kadar berbeza di atas kertas turas."},
 {j:"pilih",t:"Mengapakah perubahan besi berkarat dikelaskan sebagai perubahan kimia?",p:["Bahan baharu terbentuk","Bentuk besi berubah","Besi menjadi lebih ringan","Warnanya boleh dicuci"],b:0,u:"Karat ialah ferum oksida, bahan yang berbeza daripada besi."},
 {j:"pilih",t:"Air boleh diuraikan kepada hidrogen dan oksigen melalui:",p:["Elektrolisis","Penurasan","Penyejatan","Pemisahan magnet"],b:0,u:"Sebatian hanya boleh diasingkan melalui kaedah kimia seperti elektrolisis."}],
 bos:{j:"banyak",t:"Pilih SEMUA sifat logam.",p:["Permukaan berkilat","Konduktor elektrik yang baik","Boleh ditempa menjadi kepingan","Rapuh dan mudah hancur","Penebat haba yang baik"],b:[0,1,2],u:"Rapuh dan penebat ialah sifat bukan logam."}},

{n:3, tempat:"Makmal Unsur", sk:"6.1 Mengelaskan unsur berdasarkan sifat", lampiran:"unsur",
 kadNama:"Sulfur", kadEm:"\u{1F7E1}", kadFakta:"Sulfur ialah bukan logam berwarna kuning yang sering ditemui di sekitar kawasan gunung berapi.",
 bosKadNama:"Hidrogen", bosKadEm:"\u{1F4A7}", bosKadFakta:"Hidrogen ialah unsur paling ringan. Walaupun terletak di sebelah kiri jadual berkala, ia bukan logam.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, unsur manakah logam?",p:["W dan Y","X dan Z","W dan X","Y dan Z"],b:0,u:"W dan Y berkilat, mengkonduksi elektrik dan boleh ditempa."},
 {j:"pilih",t:"Unsur X paling mungkin:",p:["Sulfur","Kuprum","Aluminium","Neon"],b:0,u:"Sulfur berwarna kuning, rapuh dan tidak mengkonduksi elektrik."},
 {j:"pilih",t:"Unsur Z tidak bertindak balas dengan bahan lain. Z paling mungkin:",p:["Gas nadir","Logam","Sulfur","Sebatian"],b:0,u:"Gas nadir sangat tidak reaktif."},
 {j:"pilih",t:"Unsur W paling sesuai digunakan untuk:",p:["Dawai elektrik","Pemegang periuk","Belon terapung","Serbuk ubat"],b:0,u:"W logam yang mengkonduksi elektrik; takat lebur 1085 °C sepadan dengan kuprum."},
 {j:"pilih",t:"Mengapakah X hancur apabila diketuk?",p:["Bukan logam bersifat rapuh","X mempunyai takat lebur tinggi","X ialah campuran","X mengkonduksi elektrik"],b:0,u:"Bukan logam pepejal biasanya rapuh."},
 {j:"pilih",t:"Unsur Y mempunyai takat lebur 660 °C. Y paling mungkin:",p:["Aluminium","Merkuri","Oksigen","Karbon"],b:0,u:"Aluminium ialah logam ringan yang berkilat."},
 {j:"pilih",t:"Di manakah unsur X terletak dalam jadual berkala?",p:["Sebelah kanan, bersama bukan logam","Sebelah kiri, bersama logam reaktif","Bahagian tengah, bersama logam peralihan","Lajur terakhir, bersama gas nadir"],b:0,u:"Bukan logam terletak di sebelah kanan jadual berkala."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL berdasarkan jadual.",p:["W dan Y boleh ditempa","X tidak mengkonduksi elektrik","Z berada dalam keadaan gas pada suhu bilik","W mempunyai takat lebur paling rendah","Y ialah bukan logam"],b:[0,1,2],u:"Z mempunyai takat lebur paling rendah, dan Y ialah logam."}],
 bos:{j:"pilih",t:"Tukang masak mahu periuk yang cepat panas, ringan dan tidak berkarat. Unsur manakah paling sesuai?",p:["Y","W","X","Z"],b:0,u:"Y (aluminium) ringan, konduktor haba dan tidak berkarat seperti besi."}},

{n:4, tempat:"Mangkuk Pijar", sk:"6.3 Menganalisis jisim semasa perubahan kimia dan fizik", lampiran:"jisim",
 kadNama:"Magnesium", kadEm:"\u{2728}", kadFakta:"Magnesium terbakar dengan nyalaan putih yang sangat terang. Jangan memandangnya terus.",
 bosKadNama:"Lavoisier", bosKadEm:"\u{2696}", bosKadFakta:"Antoine Lavoisier menunjukkan bahawa jisim diabadikan dalam tindak balas kimia dengan menimbang bahan dalam bekas tertutup.",
 soalan:[
 {j:"pilih",t:"Dalam Eksperimen A, mengapakah jisim bertambah?",p:["Oksigen dari udara bergabung dengan magnesium","Magnesium menyerap haba daripada penunu","Serbuk putih lebih tumpat daripada magnesium","Mangkuk pijar menjadi lebih berat"],b:0,u:"Magnesium + oksigen → magnesium oksida."},
 {j:"nombor",t:"Berapakah jisim oksigen yang bergabung dengan magnesium dalam Eksperimen A, dalam gram?",b:1.6,tol:0.01,suf:"g",u:"4.0 − 2.4 = 1.6 g."},
 {j:"pilih",t:"Dalam Eksperimen B, mengapakah jisim tidak berubah?",p:["Tabung tertutup; tiada bahan keluar masuk","Tiada tindak balas kimia berlaku","Besi dan sulfur tidak mempunyai jisim","Penimbang tidak berfungsi"],b:0,u:"Jisim diabadikan semasa perubahan kimia dalam sistem tertutup."},
 {j:"pilih",t:"Pepejal hitam dalam Eksperimen B tidak tertarik magnet. Ini menunjukkan:",p:["Sebatian baharu terbentuk","Besi telah hilang","Sulfur bersifat magnet","Campuran masih ada"],b:0,u:"Ferum sulfida mempunyai sifat berbeza daripada besi."},
 {j:"pilih",t:"Eksperimen manakah menunjukkan perubahan fizik?",p:["C","A","B","A dan B"],b:0,u:"Ais yang melebur tidak membentuk bahan baharu."},
 {j:"pilih",t:"Seorang murid mendakwa Eksperimen A membuktikan jisim tidak diabadikan. Mengapa dakwaan itu salah?",p:["Mangkuk dibuka, jadi oksigen udara turut ditimbang","Magnesium mencipta jisim baharu semasa terbakar","Jisim diabadikan hanya dalam perubahan fizik","Penimbang elektronik sentiasa memberi bacaan tinggi"],b:0,u:"Jika oksigen yang bergabung diambil kira, jumlah jisim tetap sama."},
 {j:"pilih",t:"Mengapakah penutup mangkuk pijar dibuka sedikit-sedikit semasa magnesium dibakar?",p:["Supaya oksigen masuk tanpa asap putih terlepas","Supaya magnesium cepat sejuk","Supaya cahaya terang dapat dilihat","Supaya jisim mangkuk berkurang"],b:0,u:"Jika asap magnesium oksida terlepas, jisim yang dicatat menjadi lebih rendah."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Magnesium bergabung dengan oksigen","Jisim kekal dalam sistem tertutup","Perubahan kimia menghasilkan bahan baharu","Jisim selalu bertambah semasa perubahan fizik","Ais berubah menjadi sebatian baharu"],b:[0,1,2],u:"Eksperimen C menunjukkan jisim kekal semasa perubahan fizik, dan air bukan bahan baharu."}],
 bos:{j:"pilih",t:"Jika Eksperimen A dijalankan dalam bekas tertutup rapat berisi udara, apakah jumlah jisim bekas dan kandungannya selepas pembakaran?",p:["Sama seperti sebelum","Bertambah 1.6 g","Berkurang 1.6 g","Menjadi sifar"],b:0,u:"Oksigen yang bergabung sudah berada di dalam bekas."}},

{n:5, tempat:"Pusat Kitar Semula", sk:"6.2 Menilai kaedah pengasingan campuran", lampiran:"asing",
 kadNama:"Penyulingan", kadEm:"\u{1F52C}", kadFakta:"Penyulingan mengasingkan cecair dengan memanaskan campuran dan mengkondensasikan wap yang terhasil.",
 bosKadNama:"Magnet Besar", bosKadEm:"\u{1F9F2}", bosKadFakta:"Pusat kitar semula menggunakan magnet besar untuk mengasingkan tin besi daripada tin aluminium.",
 soalan:[
 {j:"pilih",t:"Kumpulan Jaya mencadangkan penyulingan bagi campuran 2. Nilaikan cadangan itu.",p:["Penyulingan; magnet lebih sesuai","Penyulingan; penurasan lebih sesuai","Penyulingan; kromatografi lebih sesuai","Tiada kesalahan; penyulingan sesuai"],b:0,u:"Besi bersifat magnet tetapi sulfur tidak."},
 {j:"pilih",t:"Cadangan untuk campuran 5 ialah penurasan. Nilaikan cadangan itu.",p:["Salah; garam terlarut melalui kertas turas","Betul; kertas turas menapis semua garam","Betul; air laut sama seperti pasir dan air","Salah; kromatografi paling sesuai"],b:0,u:"Penyulingan diperlukan untuk mendapatkan air tulen daripada air laut."},
 {j:"pilih",t:"Mengapakah penyejatan sesuai untuk campuran 3?",p:["Garam tertinggal apabila air menyejat","Garam menyejat dan air tertinggal","Garam tertarik pada magnet","Garam tidak larut dalam air"],b:0,u:"Takat didih garam jauh lebih tinggi daripada air."},
 {j:"pilih",t:"Berapakah cadangan Kumpulan Jaya yang betul?",p:["3","5","2","4"],b:0,u:"Campuran 1, 3 dan 4 betul; campuran 2 dan 5 salah."},
 {j:"pilih",t:"Pusat kitar semula menerima tin besi dan tin aluminium bercampur. Kaedah paling cekap?",p:["Magnet besar","Penurasan","Penyulingan","Kromatografi"],b:0,u:"Besi tertarik pada magnet, aluminium tidak."},
 {j:"pilih",t:"Beras bercampur sekam ringan. Kaedah pengasingan paling praktikal di kampung?",p:["Pengapungan dalam air","Pemisahan magnet","Penyulingan","Kromatografi"],b:0,u:"Sekam terapung manakala beras tenggelam."},
 {j:"pilih",t:"Air perigi keruh dengan lumpur halus. Langkah pertama paling wajar sebelum penurasan?",p:["Biarkan lumpur mengenap","Didihkan air sehingga kering","Tambah magnet ke dalam air","Bekukan air di dalam peti"],b:0,u:"Pengenapan mengurangkan lumpur supaya penurasan lebih cepat."},
 {j:"pilih",t:"Seorang murid mendakwa garam boleh diasingkan daripada air laut dengan penurasan kerana garam ialah pepejal. Nilaikan dakwaan itu.",p:["Salah; garam terlarut sebagai zarah halus","Betul; semua pepejal tertinggal pada kertas turas","Betul; garam lebih tumpat daripada air","Salah; garam sebenarnya satu gas"],b:0,u:"Zarah garam terlarut boleh melalui liang kertas turas."}],
 bos:{j:"pilih",t:"Majlis daerah mahu membekalkan air minuman kepada pulau kecil yang hanya ada air laut. Kaedah paling wajar?",p:["Penyulingan atau penyahgaraman","Penurasan dengan kertas turas","Pemisahan magnet","Pengenapan semalaman"],b:0,u:"Hanya penyulingan atau penyahgaraman mengeluarkan garam terlarut."}},

{n:6, tempat:"Makmal Inovasi", sk:"6.1 / 6.2 Mereka bentuk menggunakan pengetahuan unsur dan campuran",
 kadNama:"Timah", kadEm:"\u{26CF}", kadFakta:"Malaysia pernah menjadi pengeluar timah terbesar dunia, terutamanya dari Lembah Kinta di Perak.",
 bosKadNama:"Aloi", bosKadEm:"\u{1F52A}", bosKadFakta:"Aloi ialah campuran logam. Keluli tahan karat mengandungi besi, kromium dan nikel.",
 soalan:[
 {j:"pilih",t:"Awak mereka penapis air ringkas untuk perkhemahan. Susunan lapisan paling berkesan dari atas ke bawah?",p:["Batu kerikil, pasir kasar, pasir halus, kapas","Kapas, pasir halus, pasir kasar, batu kerikil","Pasir halus, kapas, batu kerikil, pasir kasar","Batu kerikil sahaja setebal satu meter"],b:0,u:"Zarah besar ditapis dahulu supaya lapisan halus tidak cepat tersumbat. Air tetap perlu dididih sebelum diminum."},
 {j:"pilih",t:"Awak mereka alat untuk mengumpul skru besi yang bertaburan di bengkel. Bahan paling sesuai?",p:["Magnet pada batang","Penapis kain halus","Kertas turas","Penyedut minuman"],b:0,u:"Skru besi tertarik pada magnet."},
 {j:"pilih",t:"Awak mereka poster jadual berkala untuk kelas. Cara paling membantu murid mengingat?",p:["Warna berbeza untuk logam, bukan logam dan gas nadir","Semua unsur ditulis dengan warna hitam yang sama","Susun unsur mengikut abjad nama","Hanya tunjukkan unsur yang mahal"],b:0,u:"Pengelasan warna membantu murid melihat corak kedudukan unsur."},
 {j:"pilih",t:"Awak memilih bahan untuk wayar pengecas telefon. Gabungan paling sesuai?",p:["Kuprum di dalam, plastik di luar","Plastik di dalam, kuprum di luar","Sulfur di dalam, kuprum di luar","Kuprum di dalam dan di luar"],b:0,u:"Kuprum mengkonduksi elektrik; plastik penebat untuk keselamatan."},
 {j:"pilih",t:"Kelab Sains mahu menunjukkan kromatografi menggunakan bahan dapur. Pilihan paling praktikal?",p:["Kertas penapis kopi dan pen berdakwat","Kertas surat khabar dan cat minyak","Plastik lutsinar dan pewarna kek","Kain tebal dan kicap"],b:0,u:"Kertas penapis kopi menyerap air dan memisahkan pewarna dakwat."},
 {j:"pilih",t:"Awak mencadangkan logam untuk bingkai basikal yang ringan dan tidak berkarat. Pilihan paling wajar?",p:["Aloi aluminium","Besi tulen","Plumbum","Kuprum tulen"],b:0,u:"Aloi aluminium ringan, kuat dan tahan karat."},
 {j:"pilih",t:"Sekolah awak mahu mengurangkan sampah tin di kantin. Cadangan paling praktikal?",p:["Tong berasingan untuk tin besi dan aluminium","Bakar semua tin di belakang sekolah","Tanam tin di dalam tanah","Campurkan tin dengan sisa makanan"],b:0,u:"Pengasingan di punca memudahkan kitar semula."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada penapis air rekaan awak berkesan?",p:["Bandingkan kejernihan air sebelum dan selepas","Minum air itu terus tanpa menyemak","Ukur berat penapis sahaja","Tanya rakan sama ada penapis kelihatan cantik"],b:0,u:"Kejernihan boleh dibandingkan dengan mata atau alat pengukur kekeruhan."}],
 bos:{j:"buka",
  t:"Sebuah kampung mempunyai banyak sisa campuran seperti tin, botol kaca, plastik dan sisa makanan. Reka satu sistem pengasingan sisa untuk pusat kitar semula kampung itu.",
  arahan:"Terangkan langkah pengasingan yang dicadangkan dan kaedah fizik yang digunakan pada setiap langkah (contohnya magnet, pengapungan atau penapisan), sifat bahan yang dimanfaatkan, langkah keselamatan, dan bagaimana sistem itu menjimatkan kos serta melibatkan penduduk.",
  u:"Jawapan TP6 yang kukuh memadankan setiap kaedah pengasingan dengan sifat bahan yang betul, menyusun langkah secara logik, dan mengambil kira kos serta keselamatan."}}
];

module.exports = {
  id:"t1b6", tingkatan:1, kod:"6.0 Jadual Berkala",
  tajuk:"Laluan Unsur",
  subtajuk:"Sains Ting. 1 · Bab 6 Jadual Berkala",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali zarah sub-atom, maksud unsur, sebatian dan molekul serta kedudukan logam dan gas nadir. Langkah seterusnya ialah menjelaskan sifat logam dan bukan logam.",
   2:"{n} memahami sifat logam dan bukan logam serta perbezaan campuran dengan sebatian. Perlu lebih banyak latihan mengelaskan unsur daripada data.",
   3:"{n} boleh mengelaskan unsur berdasarkan sifatnya dan memilih unsur yang sesuai untuk kegunaan tertentu. Galakkan memberi sebab berdasarkan sifat.",
   4:"{n} mampu menganalisis data jisim untuk menunjukkan jisim diabadikan dan membezakan perubahan fizik dengan perubahan kimia. Seterusnya latih menilai kaedah pengasingan.",
   5:"{n} dapat menilai kaedah pengasingan campuran dan membuat keputusan yang wajar untuk situasi sebenar. Sudah bersedia untuk tugasan reka bentuk.",
   6:"{n} berjaya mereka bentuk sistem atau alat menggunakan sifat unsur dan kaedah pengasingan secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Jadual Berkala. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ unsur:T_UNSUR, jisim:T_JISIM, asing:T_ASING },
  aras:ARAS
};
