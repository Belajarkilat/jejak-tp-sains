/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 13.0 Meteoroid, Asteroid,
   Komet.
   Jalankan `node bina.js t2b13` untuk menyemak dan menghasilkan bank-t2b13.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 91.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai meteoroid, asteroid dan komet.",
"Memahami meteoroid, asteroid dan komet dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai meteoroid, asteroid dan komet dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai meteoroid, asteroid dan komet dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai meteoroid, asteroid dan komet dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekacipta dengan menggunakan pengetahuan dan kemahiran sains mengenai meteoroid, asteroid dan komet dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_JASAD =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Jasad</th>'+
'<th>Saiz</th><th>Bahan utama</th><th>Ciri lain</th></tr></thead><tbody>'+
'<tr><td>E</td><td>Sebutir pasir hingga seketul batu</td><td>Batu atau logam</td><td>Bercahaya apabila memasuki atmosfera</td></tr>'+
'<tr><td>F</td><td>Beberapa meter hingga ratusan kilometer</td><td>Batu dan logam</td><td>Kebanyakannya di antara orbit Marikh dan Musytari</td></tr>'+
'<tr><td>G</td><td>Teras beberapa kilometer</td><td>Ais, debu dan batu</td><td>Mempunyai ekor panjang apabila menghampiri Matahari</td></tr>'+
'<tr><td>H</td><td>Beberapa gram hingga beberapa tan</td><td>Batu atau logam</td><td>Ditemui di permukaan Bumi</td></tr>'+
'</tbody></table></div><p class="qnote">Ciri empat jenis jasad kecil dalam Sistem Suria.</p>';

const T_HENTAMAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Peristiwa</th>'+
'<th class="n">Anggaran saiz jasad (m)</th><th>Kesan</th></tr></thead><tbody>'+
'<tr><td>Chelyabinsk, Rusia (2013)</td><td class="n">20</td><td>Meletup di udara; kaca tingkap pecah, lebih 1000 orang cedera ringan</td></tr>'+
'<tr><td>Tunguska, Rusia (1908)</td><td class="n">50</td><td>Meletup di udara; kira-kira 80 juta pokok tumbang di kawasan hutan</td></tr>'+
'<tr><td>Kawah Barringer, Amerika Syarikat (kira-kira 50 000 tahun dahulu)</td><td class="n">50</td><td>Menghentam tanah; kawah selebar lebih 1 km</td></tr>'+
'<tr><td>Chicxulub, Mexico (kira-kira 66 juta tahun dahulu)</td><td class="n">10 000</td><td>Kawah gergasi; dikaitkan dengan kepupusan dinosaur</td></tr>'+
'</tbody></table></div><p class="qnote">Anggaran daripada kajian saintifik. Saiz jasad ialah anggaran garis pusat.</p>';

const T_PERTAHANAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kaedah</th>'+
'<th>Masa amaran diperlukan</th><th>Kesesuaian</th><th>Risiko</th></tr></thead><tbody>'+
'<tr><td>Pelanggar kinetik (kapal angkasa melanggar asteroid)</td><td>Beberapa tahun</td><td>Asteroid kecil hingga sederhana</td><td>Rendah; telah diuji oleh misi DART pada 2022</td></tr>'+
'<tr><td>Traktor graviti (kapal angkasa terbang di sebelah asteroid)</td><td>Berpuluh tahun</td><td>Asteroid kecil</td><td>Sangat rendah tetapi sangat perlahan</td></tr>'+
'<tr><td>Meletupkan asteroid menjadi serpihan</td><td>Beberapa bulan</td><td>Pilihan terakhir</td><td>Tinggi; serpihan masih boleh menghentam Bumi</td></tr>'+
'</tbody></table></div><p class="qnote">Kaedah yang dicadangkan untuk mengelakkan asteroid berbahaya menghentam Bumi.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Langit Malam", sk:"13.1 Meteoroid, meteor, meteorit, asteroid dan komet",
 kadNama:"Tahi Bintang", kadEm:"\u{1F320}", kadFakta:"'Tahi bintang' sebenarnya meteor, iaitu meteoroid kecil yang terbakar di atmosfera kerana geseran.",
 bosKadNama:"Komet Halley", bosKadEm:"\u{2604}", bosKadFakta:"Komet Halley kelihatan dari Bumi kira-kira setiap 76 tahun. Ia dijangka muncul semula sekitar tahun 2061.",
 soalan:[
 {j:"pilih",t:"Meteoroid yang terbakar dan bercahaya di atmosfera Bumi dipanggil:",p:["Meteor","Meteorit","Asteroid","Komet"],b:0,u:"Ia juga dikenali sebagai tahi bintang."},
 {j:"pilih",t:"Meteoroid yang sampai ke permukaan Bumi dipanggil:",p:["Meteorit","Meteor","Komet","Nebula"],b:0,u:"Meteorit boleh dikaji untuk memahami asal usul Sistem Suria."},
 {j:"pilih",t:"Kebanyakan asteroid terletak di:",p:["Antara Marikh dan Musytari","Antara Bumi dan Bulan","Di tengah Matahari","Di luar galaksi"],b:0,u:"Kawasan ini dikenali sebagai lingkaran asteroid."},
 {j:"pilih",t:"Komet terdiri terutamanya daripada:",p:["Ais, debu dan batu","Logam cair panas","Gas hidrogen sahaja","Air laut beku"],b:0,u:"Komet sering digelar 'bola salji kotor'."},
 {j:"pilih",t:"Ekor komet terbentuk apabila komet:",p:["Menghampiri Matahari","Menjauhi Matahari","Berlanggar dengan planet","Masuk ke lohong hitam"],b:0,u:"Haba Matahari menyejatkan ais dan membebaskan gas serta debu."},
 {j:"pilih",t:"Ekor komet sentiasa menghala:",p:["Menjauhi Matahari","Ke arah Matahari","Ke arah Bumi","Ke arah Musytari"],b:0,u:"Angin suria menolak gas dan debu menjauhi Matahari."},
 {j:"pilih",t:"Antara berikut, yang manakah paling besar secara umum?",p:["Asteroid","Meteoroid","Meteor","Butir debu komet"],b:0,u:"Asteroid boleh mencapai ratusan kilometer."},
 {j:"banyak",t:"Pilih SEMUA jasad yang mengelilingi Matahari.",p:["Asteroid","Komet","Meteoroid","Galaksi Andromeda","Nebula Orion"],b:[0,1,2],u:"Andromeda dan Nebula Orion berada jauh di luar Sistem Suria."}],
 bos:{j:"pilih",t:"Hujan meteor berlaku apabila:",p:["Bumi melalui serpihan komet","Bulan berlanggar dengan asteroid","Matahari memancarkan batu","Awan hujan menjadi terlalu panas"],b:0,u:"Contohnya hujan meteor Perseid setiap Ogos."}},

{n:2, tempat:"Muzium Meteorit", sk:"13.1 Pergerakan dan kesan jasad angkasa terhadap Bumi",
 kadNama:"Meteorit", kadEm:"\u{1FAA8}", kadFakta:"Meteorit besi biasanya lebih berat daripada batu biasa yang sama saiz kerana banyak mengandungi besi dan nikel.",
 bosKadNama:"Kawah", bosKadEm:"\u{1F573}", bosKadFakta:"Permukaan Bulan penuh dengan kawah kerana tiada atmosfera untuk membakar meteoroid.",
 soalan:[
 {j:"pilih",t:"Mengapakah kebanyakan meteoroid tidak sampai ke permukaan Bumi?",p:["Terbakar di atmosfera","Ditolak oleh Bulan","Terlalu ringan untuk jatuh","Ditarik oleh Musytari"],b:0,u:"Geseran dengan udara menghasilkan haba yang sangat tinggi."},
 {j:"pilih",t:"Mengapakah Bulan mempunyai lebih banyak kawah daripada Bumi?",p:["Bulan tiada atmosfera dan hakisan","Bulan lebih besar daripada Bumi","Bulan lebih dekat dengan lingkaran asteroid","Bulan mempunyai lebih banyak gunung berapi"],b:0,u:"Di Bumi, hakisan dan kitar batuan memadamkan kebanyakan kawah lama."},
 {j:"pilih",t:"Mengapakah orbit komet biasanya sangat bujur?",p:["Ia datang dari jauh","Ia berputar di sekeliling Bumi sahaja","Ia ditolak oleh planet berbatu","Ia tidak dipengaruhi oleh graviti"],b:0,u:"Sebab itu komet hanya kelihatan sekali-sekala."},
 {j:"pilih",t:"Beza utama antara asteroid dengan komet ialah:",p:["Asteroid berbatu, komet berais","Asteroid berais, komet berbatu","Kedua-duanya sama","Asteroid mempunyai ekor panjang"],b:0,u:"Komet mengeluarkan ekor apabila aisnya menyejat."},
 {j:"pilih",t:"Kepupusan dinosaur dikaitkan dengan:",p:["Hentaman asteroid besar","Letupan bintang berhampiran","Banjir besar di seluruh dunia","Gerhana matahari yang panjang"],b:0,u:"Debu yang terhasil menghalang cahaya Matahari untuk tempoh yang lama."},
 {j:"pilih",t:"Meteorit penting kepada ahli sains kerana:",p:["Ia menyimpan bahan dari awal Sistem Suria","Ia boleh digunakan sebagai bahan api roket","Ia mengandungi hidupan dari planet lain","Ia menunjukkan cuaca pada masa depan"],b:0,u:"Kebanyakan meteorit hampir tidak berubah sejak Sistem Suria terbentuk."},
 {j:"pilih",t:"Apakah yang paling mungkin berlaku jika asteroid besar menghentam lautan?",p:["Tsunami besar","Laut terus kering","Air laut menjadi tawar","Tiada kesan langsung"],b:0,u:"Tenaga hentaman menolak air dalam jumlah yang sangat besar."},
 {j:"pilih",t:"Mengapakah ahli astronomi terus memantau asteroid dekat Bumi?",p:["Mengesan ancaman lebih awal","Mencari asteroid untuk dijual","Kerana asteroid mengeluarkan cahaya","Supaya asteroid berhenti bergerak"],b:0,u:"Amaran awal memberi masa untuk bertindak."}],
 bos:{j:"banyak",t:"Pilih SEMUA kesan yang mungkin jika asteroid besar menghentam Bumi.",p:["Kawah besar terbentuk","Debu menghalang cahaya Matahari","Suhu global menurun sementara","Bumi berhenti mengelilingi Matahari","Semua lautan hilang serta-merta"],b:[0,1,2],u:"Hentaman asteroid tidak menghentikan orbit Bumi."}},

{n:3, tempat:"Stesen Pengenalan Jasad", sk:"13.1 Membezakan jasad kecil Sistem Suria", lampiran:"jasad",
 kadNama:"Lingkaran Asteroid", kadEm:"\u{1F311}", kadFakta:"Lingkaran asteroid mengandungi berjuta asteroid, tetapi jarak antara satu sama lain sangat jauh.",
 bosKadNama:"Angin Suria", bosKadEm:"\u{1F32C}", bosKadFakta:"Angin suria ialah aliran zarah bercas dari Matahari yang menolak ekor komet.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, jasad E ialah:",p:["Meteoroid","Asteroid","Komet","Meteorit"],b:0,u:"Kecil dan bercahaya apabila memasuki atmosfera sebagai meteor."},
 {j:"pilih",t:"Berdasarkan jadual, jasad F ialah:",p:["Asteroid","Komet","Meteor","Meteorit"],b:0,u:"Besar, berbatu, di antara orbit Marikh dan Musytari."},
 {j:"pilih",t:"Berdasarkan jadual, jasad G ialah:",p:["Komet","Asteroid","Meteoroid","Planet"],b:0,u:"Berais dan berekor apabila menghampiri Matahari."},
 {j:"pilih",t:"Berdasarkan jadual, jasad H ialah:",p:["Meteorit","Meteor","Komet","Asteroid"],b:0,u:"Ditemui di permukaan Bumi."},
 {j:"pilih",t:"Apakah persamaan antara E dan H?",p:["Kedua-duanya batu atau logam","Kedua-duanya berekor panjang","Kedua-duanya berais","Kedua-duanya planet kerdil"],b:0,u:"H ialah E yang berjaya sampai ke permukaan Bumi."},
 {j:"pilih",t:"Mengapakah G tidak berekor apabila jauh dari Matahari?",p:["Ais tidak menyejat pada suhu rendah","Ekornya patah semasa bergerak","Angin suria terlalu kuat","Ia bertukar menjadi asteroid"],b:0,u:"Ekor terbentuk hanya apabila haba Matahari menyejatkan ais."},
 {j:"pilih",t:"Seorang murid menemui batu yang sangat berat dan tertarik pada magnet. Kemungkinan paling munasabah?",p:["Meteorit besi","Serpihan komet","Batu kapur","Batu bata"],b:0,u:"Meteorit besi mengandungi besi dan nikel."},
 {j:"banyak",t:"Pilih SEMUA pasangan yang BETUL.",p:["E: boleh menjadi meteor","F: di lingkaran asteroid","G: berekor dekat Matahari","H: terbakar habis di atmosfera","F: diperbuat daripada ais sahaja"],b:[0,1,2],u:"H sampai ke permukaan, dan F berbatu."}],
 bos:{j:"susun",t:"Susun perjalanan seketul batu angkasa yang akhirnya ditemui di sawah.",p:["Meteoroid di angkasa","Meteor yang bercahaya di atmosfera","Meteorit di permukaan Bumi"],b:[0,1,2],u:"Nama jasad berubah mengikut lokasinya."}},

{n:4, tempat:"Pusat Kajian Hentaman", sk:"13.1 Menganalisis data hentaman jasad angkasa", lampiran:"hentaman",
 kadNama:"Chelyabinsk", kadEm:"\u{1F4A5}", kadFakta:"Pada 2013, sebiji meteor meletup di atas Chelyabinsk, Rusia. Gelombang kejutan memecahkan kaca tingkap beribu bangunan.",
 bosKadNama:"Chicxulub", bosKadEm:"\u{1F996}", bosKadFakta:"Kawah Chicxulub di Mexico kini tertimbus di bawah tanah dan laut, tetapi dikesan melalui kajian geologi.",
 soalan:[
 {j:"pilih",t:"Peristiwa manakah melibatkan jasad paling besar?",p:["Chicxulub","Tunguska","Chelyabinsk","Kawah Barringer"],b:0,u:"Kira-kira 10 km garis pusat."},
 {j:"pilih",t:"Apakah hubungan umum antara saiz jasad dengan kesannya?",p:["Semakin besar jasad, semakin besar kesan","Semakin kecil jasad, semakin besar kesan","Saiz tidak berkaitan dengan kesan","Semua jasad memberi kesan sama"],b:0,u:"Jasad besar membawa lebih banyak tenaga."},
 {j:"pilih",t:"Tunguska dan Barringer melibatkan jasad sama saiz tetapi hanya Barringer membentuk kawah. Sebab paling munasabah?",p:["Tunguska meletup di udara","Tunguska jatuh ke dalam laut","Barringer lebih ringan daripada Tunguska","Tunguska berlaku pada waktu malam"],b:0,u:"Letupan di udara tidak meninggalkan kawah besar, tetapi tetap merosakkan hutan."},
 {j:"nombor",t:"Berapa kali ganda saiz jasad Chicxulub berbanding jasad Chelyabinsk?",b:500,tol:0.5,suf:"kali",u:"10 000 ÷ 20 = 500 kali."},
 {j:"pilih",t:"Mengapakah kebanyakan kecederaan di Chelyabinsk disebabkan oleh kaca pecah?",p:["Ramai sedang melihat ke tingkap","Meteorit jatuh tepat pada setiap rumah","Kaca menarik meteorit","Gempa bumi berlaku serentak"],b:0,u:"Gelombang kejutan tiba selepas cahaya, ketika ramai sedang melihat."},
 {j:"pilih",t:"Berdasarkan data, peristiwa kecil seperti Chelyabinsk berlaku:",p:["Lebih kerap daripada peristiwa besar","Kurang kerap daripada peristiwa besar","Tidak pernah berlaku lagi","Hanya di Amerika Syarikat"],b:0,u:"Jasad kecil jauh lebih banyak daripada jasad besar."},
 {j:"pilih",t:"Pelajaran keselamatan paling penting daripada peristiwa Chelyabinsk ialah:",p:["Jauhi tingkap selepas nampak kilatan terang","Berlari ke luar untuk melihat meteor","Berdiri dekat kaca untuk mendapat pandangan jelas","Abaikan kerana meteor tidak berbahaya"],b:0,u:"Seperti kilat dan guruh, gelombang kejutan tiba lewat daripada cahaya."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Jasad besar menyebabkan kesan lebih besar","Letupan di udara juga boleh menyebabkan kerosakan","Hentaman besar pernah berlaku dalam sejarah Bumi","Semua jasad angkasa membentuk kawah","Hentaman hanya berlaku berjuta tahun dahulu"],b:[0,1,2],u:"Chelyabinsk dan Tunguska tidak membentuk kawah besar, dan Chelyabinsk berlaku pada 2013."}],
 bos:{j:"pilih",t:"Seorang pengguna media sosial mendakwa asteroid kecil tidak perlu dipantau. Nilaikan dakwaan itu berdasarkan data.",p:["Salah; jasad 20 m pun berbahaya","Betul; hanya asteroid 10 km berbahaya","Betul; jasad kecil tidak pernah sampai ke Bumi","Salah; asteroid kecil lebih besar daripada Bumi"],b:0,u:"Chelyabinsk hanya 20 m tetapi mencederakan lebih 1000 orang."}},

{n:5, tempat:"Bilik Pertahanan Planet", sk:"13.1 Menilai cara mengelakkan perlanggaran asteroid", lampiran:"pertahanan",
 kadNama:"Misi DART", kadEm:"\u{1F680}", kadFakta:"Pada tahun 2022, kapal angkasa DART sengaja melanggar asteroid Dimorphos dan berjaya mengubah orbitnya.",
 bosKadNama:"Teleskop Tinjauan", bosKadEm:"\u{1F52D}", bosKadFakta:"Teleskop tinjauan mengimbas langit setiap malam untuk mengesan asteroid dekat Bumi yang belum ditemui.",
 soalan:[
 {j:"pilih",t:"Kaedah manakah telah diuji secara sebenar di angkasa?",p:["Pelanggar kinetik","Traktor graviti","Meletupkan asteroid","Tiada kaedah"],b:0,u:"Misi DART pada 2022."},
 {j:"pilih",t:"Mengapakah meletupkan asteroid dianggap pilihan terakhir?",p:["Serpihan masih boleh menghentam Bumi","Ia kaedah yang paling perlahan","Ia memerlukan berpuluh tahun","Ia tidak memerlukan roket"],b:0,u:"Satu asteroid besar boleh menjadi banyak serpihan berbahaya."},
 {j:"pilih",t:"Asteroid kecil dikesan 30 tahun sebelum hentaman. Kaedah paling selamat?",p:["Traktor graviti","Meletupkan asteroid","Tiada tindakan","Pelanggar kinetik berulang kali setiap bulan"],b:0,u:"Masa yang panjang membolehkan kaedah paling selamat walaupun perlahan."},
 {j:"pilih",t:"Asteroid sederhana dikesan 5 tahun sebelum hentaman. Kaedah paling wajar?",p:["Pelanggar kinetik","Traktor graviti","Tiada tindakan","Tunggu sehingga ia dekat"],b:0,u:"Traktor graviti memerlukan berpuluh tahun."},
 {j:"pilih",t:"Apakah faktor paling penting untuk semua kaedah pertahanan?",p:["Pengesanan awal","Warna asteroid","Nama asteroid","Suhu asteroid"],b:0,u:"Tanpa amaran awal, pilihan yang ada sangat terhad."},
 {j:"pilih",t:"Sebuah negara mencadangkan semua negara berkongsi data pemantauan asteroid. Nilaikan cadangan itu.",p:["Wajar; ancaman asteroid melibatkan seluruh dunia","Tidak wajar, kerana setiap negara perlu merahsiakan data","Tidak wajar, kerana asteroid hanya menghentam negara besar","Wajar tetapi hanya untuk negara yang mempunyai roket"],b:0,u:"Asteroid tidak mengenal sempadan negara."},
 {j:"pilih",t:"Mengapakah perubahan kecil pada orbit asteroid yang jauh boleh mengelakkan hentaman?",p:["Perubahan kecil menjadi besar selepas lama","Asteroid berhenti bergerak selepas dilanggar","Bumi bergerak ke tepi apabila asteroid dilanggar","Asteroid terus kembali ke lingkaran asteroid"],b:0,u:"Semakin awal ditolak, semakin jauh asteroid itu tersasar."},
 {j:"pilih",t:"Malaysia mahu menyumbang kepada pertahanan planet dengan kos rendah. Sumbangan paling realistik?",p:["Pemerhatian dan perkongsian data asteroid","Membina roket pelanggar sendiri dalam setahun","Mengabaikan isu asteroid sepenuhnya","Membina bunker bawah tanah untuk semua rakyat"],b:0,u:"Balai cerap boleh membantu rangkaian pemantauan antarabangsa."}],
 bos:{j:"pilih",t:"Asteroid 300 m dijangka menghampiri Bumi dalam 15 tahun dengan peluang hentaman kecil. Keputusan paling wajar oleh agensi angkasa?",p:["Pantau dan sediakan misi pelanggar","Letupkan asteroid itu dengan segera","Abaikan kerana peluangnya kecil","Umumkan pemindahan seluruh penduduk dunia"],b:0,u:"Pemantauan memperbaiki ramalan, dan misi boleh dilancarkan jika risiko meningkat."}},

{n:6, tempat:"Bengkel Pertahanan Bumi", sk:"13.1 Mereka cipta idea mengurangkan risiko perlanggaran",
 kadNama:"Hujan Meteor", kadEm:"\u{1F320}", kadFakta:"Hujan meteor Geminid pada bulan Disember boleh menghasilkan lebih 100 meteor sejam di tempat yang gelap.",
 bosKadNama:"Pertahanan Planet", bosKadEm:"\u{1F6E1}", bosKadFakta:"Pertahanan planet ialah usaha antarabangsa untuk mengesan dan mengelakkan hentaman asteroid dan komet.",
 soalan:[
 {j:"pilih",t:"Awak mereka simulasi hentaman meteorit di kelas. Bahan paling sesuai?",p:["Dulang tepung dan guli pelbagai saiz","Kolam renang dan batu bata","Kertas dan pensel sahaja","Tanah liat keras tanpa objek dijatuhkan"],b:0,u:"Kawah pada tepung menunjukkan kesan saiz dan laju objek."},
 {j:"pilih",t:"Dalam simulasi itu, pemboleh ubah yang dimanipulasi untuk menguji kesan saiz ialah:",p:["Saiz guli","Kedalaman tepung","Jenis dulang","Warna guli"],b:0,u:"Tinggi jatuhan dan tepung mesti dimalarkan."},
 {j:"pilih",t:"Awak merancang malam cerap hujan meteor untuk kelab sains. Keperluan paling penting?",p:["Tempat gelap jauh dari lampu bandar","Teleskop paling mahal","Lampu suluh yang sangat terang","Bilik tertutup berhawa dingin"],b:0,u:"Meteor paling mudah dilihat dengan mata kasar di tempat gelap."},
 {j:"pilih",t:"Awak mereka poster keselamatan jika meteor terang kelihatan dan meletup. Nasihat paling tepat?",p:["Jauhi tingkap dan berlindung","Keluar melihat dengan dekat","Rakam video di tepi tingkap","Sentuh meteorit yang panas"],b:0,u:"Gelombang kejutan boleh memecahkan kaca."},
 {j:"pilih",t:"Awak mereka model komet untuk pameran. Cara paling tepat menunjukkan ekornya?",p:["Ekor menghala menjauhi Matahari","Ekor sentiasa di belakang komet","Ekor menghala ke arah Matahari","Komet tanpa ekor langsung"],b:0,u:"Ekor ditolak oleh angin suria, bukan mengikut arah gerakan."},
 {j:"pilih",t:"Awak mereka aplikasi untuk melaporkan pemerhatian meteor terang. Data paling berguna?",p:["Masa, lokasi dan arah pergerakan","Warna baju pemerhati","Nama sekolah pemerhati sahaja","Harga telefon pemerhati"],b:0,u:"Data daripada ramai pemerhati membantu mengira laluan meteor."},
 {j:"pilih",t:"Awak mencadangkan cara mencari meteorit yang jatuh. Kaedah paling sesuai?",p:["Guna magnet di kawasan jatuhan","Gali di tempat rawak","Tunggu meteorit datang semula","Cari di dalam air sungai sahaja"],b:0,u:"Banyak meteorit mengandungi besi dan tertarik pada magnet."},
 {j:"pilih",t:"Bagaimanakah awak menilai simulasi hentaman meteorit rekaan awak?",p:["Ulang setiap saiz dan ukur kawah","Jatuhkan guli sekali sahaja","Guna tinggi jatuhan berbeza setiap kali","Hanya ambil gambar tanpa ukuran"],b:0,u:"Ulangan dan ukuran menjadikan keputusan boleh dipercayai."}],
 bos:{j:"buka",
  t:"Agensi angkasa antarabangsa meminta idea daripada murid untuk mengesan dan mengelakkan asteroid berbahaya. Reka satu sistem atau misi pertahanan planet.",
  arahan:"Terangkan beza meteoroid, asteroid dan komet yang berkaitan dengan rekaan awak, cara pengesanan awal dijalankan, kaedah mengubah laluan asteroid yang dipilih dan sebabnya, risiko serta langkah keselamatan, dan bagaimana negara-negara boleh bekerjasama dengan kos yang berpatutan.",
  u:"Jawapan TP6 yang kukuh membezakan jasad dengan betul, menekankan pengesanan awal, memilih kaedah yang sesuai dengan masa amaran, dan mengambil kira kerjasama antarabangsa."}}
];

module.exports = {
  id:"t2b13", tingkatan:2, kod:"13.0 Meteoroid, Asteroid, Komet",
  tajuk:"Laluan Komet",
  subtajuk:"Sains Ting. 2 · Bab 13 Meteoroid, Asteroid, Komet",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud meteoroid, meteor, meteorit, asteroid dan komet. Langkah seterusnya ialah menjelaskan pergerakan dan kesannya terhadap Bumi.",
   2:"{n} memahami pergerakan jasad kecil Sistem Suria dan kesannya terhadap Bumi serta dapat menjelaskannya. Perlu lebih banyak latihan membezakan jasad daripada cirinya.",
   3:"{n} boleh mengenal pasti meteoroid, asteroid, komet dan meteorit berdasarkan ciri. Galakkan menerangkan sebab setiap pengelasan.",
   4:"{n} mampu menganalisis data hentaman untuk mengaitkan saiz jasad dengan kesannya. Seterusnya latih menilai kaedah pertahanan planet.",
   5:"{n} dapat menilai kaedah mengelakkan perlanggaran asteroid berdasarkan masa amaran dan risiko. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta sistem atau misi pertahanan planet yang kreatif dan realistik. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Meteoroid, Asteroid, Komet. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ jasad:T_JASAD, hentaman:T_HENTAMAN, pertahanan:T_PERTAHANAN },
  aras:ARAS
};
