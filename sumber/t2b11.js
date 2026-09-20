/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 11.0 Bintang dan Galaksi
   dalam Alam Semesta.
   Jalankan `node bina.js t2b11` untuk menyemak dan menghasilkan bank-t2b11.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 87.

   Nilai suhu dan jarak bintang dalam lampiran ialah anggaran yang dibundarkan.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai bintang dan galaksi dalam alam semesta.",
"Memahami bintang dan galaksi dalam alam semesta dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai bintang dan galaksi dalam alam semesta dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai bintang dan galaksi dalam alam semesta dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai bintang dan galaksi dalam alam semesta dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai bintang dan galaksi dalam alam semesta dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_SUHUBINTANG = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 5,
  "yMaks": 25000,
  "bar": [
    {
      "label": "Merah",
      "nilai": 3000,
      "warna": "merah"
    },
    {
      "label": "Kuning",
      "nilai": 5800,
      "warna": "kuning"
    },
    {
      "label": "Putih",
      "nilai": 10000,
      "warna": "hijau"
    },
    {
      "label": "Biru",
      "nilai": 25000,
      "warna": "ungu"
    }
  ],
  "xLabel": "Suhu permukaan bintang (K)",
  "kapsyen": "Rajah 1 · Suhu permukaan bintang mengikut warnanya.",
  "alt": "Graf palang suhu permukaan bintang: merah 3000 kelvin, kuning 5800, putih 10000, biru 25000"
};

const R_BIMASAKTI = {
  "jenis": "struktur",
  "mod": "label",
  "tinggiLukis": 150,
  "bahagian": [
    {
      "label": "Bima Sakti",
      "bentuk": "bulat",
      "x": 50,
      "y": 50,
      "r": 44,
      "isi": "kertas2",
      "garis": "garis2",
      "anchorX": 50,
      "anchorY": 6
    },
    {
      "label": "Teras galaksi",
      "bentuk": "bulat",
      "x": 50,
      "y": 50,
      "r": 11,
      "isi": "kuning",
      "garis": "kuning"
    },
    {
      "label": "Sistem Suria",
      "bentuk": "bulat",
      "x": 34,
      "y": 76,
      "r": 4,
      "isi": "merah",
      "garis": "merah"
    }
  ],
  "kapsyen": "Rajah 1 · Kedudukan Sistem Suria dalam galaksi Bima Sakti.",
  "alt": "Bulatan besar mewakili Bima Sakti dengan teras terang di tengah, dan satu titik kecil Sistem Suria jauh dari pusat, di bahagian luar galaksi"
};

const T_BINTANG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bintang</th>'+
'<th>Warna</th><th class="n">Suhu permukaan (&deg;C)</th><th class="n">Jarak dari Bumi (tahun cahaya)</th></tr></thead><tbody>'+
'<tr><td>Rigel</td><td>Putih kebiruan</td><td class="n">11 000</td><td class="n">860</td></tr>'+
'<tr><td>Sirius</td><td>Putih</td><td class="n">9 700</td><td class="n">8.6</td></tr>'+
'<tr><td>Matahari</td><td>Kuning</td><td class="n">5 500</td><td class="n">0.000016</td></tr>'+
'<tr><td>Betelgeuse</td><td>Merah</td><td class="n">3 300</td><td class="n">550</td></tr>'+
'<tr><td>Proxima Centauri</td><td>Merah</td><td class="n">2 800</td><td class="n">4.2</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai anggaran yang dibundarkan. Sirius ialah bintang paling terang di langit malam.</p>';

const T_KITAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bintang</th>'+
'<th class="n">Jisim (kali jisim Matahari)</th><th>Peringkat semasa</th></tr></thead><tbody>'+
'<tr><td>X</td><td class="n">1</td><td>Bintang jujukan utama</td></tr>'+
'<tr><td>Y</td><td class="n">15</td><td>Supergergasi merah</td></tr>'+
'<tr><td>Z</td><td class="n">0.8</td><td>Gergasi merah</td></tr>'+
'</tbody></table></div><p class="qnote">Bintang sederhana seperti Matahari: gergasi merah &rarr; nebula planet &rarr; kerdil putih. Bintang yang sangat besar: supergergasi merah &rarr; supernova &rarr; bintang neutron atau lohong hitam.</p>';

const T_CERAP =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Lokasi</th>'+
'<th>Pencemaran cahaya</th><th class="n">Ketinggian (m)</th><th class="n">Malam cerah setahun</th><th>Akses jalan raya</th></tr></thead><tbody>'+
'<tr><td>P: Pinggir bandar besar</td><td>Tinggi</td><td class="n">50</td><td class="n">90</td><td>Sangat mudah</td></tr>'+
'<tr><td>Q: Puncak bukit di pulau</td><td>Rendah</td><td class="n">700</td><td class="n">150</td><td>Jalan berliku</td></tr>'+
'<tr><td>R: Tanah pamah di kampung</td><td>Sederhana</td><td class="n">30</td><td class="n">110</td><td>Mudah</td></tr>'+
'</tbody></table></div><p class="qnote">Tiga calon lokasi balai cerap baharu. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Planetarium", sk:"11.1 Objek angkasa dan ciri bintang", lampiran:"suhubintang",
 kadNama:"Bima Sakti", kadEm:"\u{1F30C}", kadFakta:"Galaksi Bima Sakti mengandungi lebih 100 bilion bintang, dan Matahari hanyalah salah satu daripadanya.",
 bosKadNama:"Nebula", bosKadEm:"\u{2601}", bosKadFakta:"Nebula ialah awan gas dan debu yang sangat besar tempat bintang-bintang baharu terbentuk.",
 soalan:[
 {j:"pilih",t:"Bintang yang paling hampir dengan Bumi ialah:",p:["Matahari","Sirius","Proxima Centauri","Rigel"],b:0,u:"Proxima Centauri ialah bintang terdekat selepas Matahari."},
 {j:"pilih",t:"Sekumpulan berbilion bintang, gas dan debu dipanggil:",p:["Galaksi","Nebula","Planet","Komet"],b:0,u:"Contohnya Galaksi Bima Sakti."},
 {j:"pilih",t:"Jenis galaksi Bima Sakti ialah:",p:["Berpilin","Elips","Tidak seragam","Bulat"],b:0,u:"Sistem Suria berada pada salah satu lengan pilinnya."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bintang yang paling panas berwarna:",p:["Biru","Merah","Kuning","Jingga"],b:0,u:"Bintang merah paling sejuk."},
 {j:"pilih",t:"Bintang menghasilkan cahaya dan haba melalui:",p:["Tindak balas nuklear","Pembakaran kayu","Pantulan cahaya","Geseran angin"],b:0,u:"Hidrogen dilakurkan menjadi helium di teras bintang."},
 {j:"pilih",t:"Tempat bintang baharu dilahirkan ialah:",p:["Nebula","Lohong hitam","Planet","Bulan"],b:0,u:"Graviti menarik gas dan debu dalam nebula menjadi bintang."},
 {j:"pilih",t:"Warna Matahari ialah:",p:["Kuning","Biru","Merah","Ungu"],b:0,u:"Matahari ialah bintang bersaiz sederhana."},
 {j:"banyak",t:"Pilih SEMUA ciri yang digunakan untuk membandingkan bintang.",p:["Suhu","Warna","Kecerahan","Bilangan planet yang dimiliki","Nama yang diberi manusia"],b:[0,1,2],u:"Saiz dan jarak juga digunakan."}],
 bos:{j:"susun",t:"Susun mengikut saiz, bermula daripada yang PALING kecil.",p:["Bumi","Matahari","Sistem Suria","Galaksi Bima Sakti","Alam semesta"],b:[0,1,2,3,4],u:"Matahari lebih besar daripada Bumi, tetapi Sistem Suria merangkumi semua planet."}},

{n:2, tempat:"Balai Cerap", sk:"11.1 Kitar hidup bintang dan kedudukan Sistem Suria", lampiran:"bimasakti",
 kadNama:"Supernova", kadEm:"\u{1F4A5}", kadFakta:"Supernova ialah letupan bintang besar yang boleh bersinar lebih terang daripada seluruh galaksinya untuk beberapa minggu.",
 bosKadNama:"Tahun Cahaya", bosKadEm:"\u{1F4AB}", bosKadFakta:"Cahaya dari Matahari mengambil masa kira-kira 8 minit untuk sampai ke Bumi.",
 soalan:[
 {j:"pilih",t:"Mengapakah Matahari kelihatan jauh lebih besar dan terang daripada bintang lain?",p:["Ia jauh lebih dekat dengan Bumi","Ia bintang paling besar di alam semesta","Ia bintang paling panas di galaksi","Ia satu-satunya bintang yang bercahaya"],b:0,u:"Banyak bintang lain sebenarnya lebih besar daripada Matahari."},
 {j:"pilih",t:"Bintang seperti Matahari akan berakhir sebagai:",p:["Kerdil putih","Lohong hitam","Supernova","Bintang neutron"],b:0,u:"Matahari tidak cukup besar untuk meletup sebagai supernova."},
 {j:"pilih",t:"Bintang yang sangat besar boleh berakhir sebagai:",p:["Lohong hitam","Kerdil putih","Nebula planet sahaja","Planet baharu"],b:0,u:"Selepas supernova, teras yang tinggal menjadi bintang neutron atau lohong hitam."},
 {j:"pilih",t:"Berdasarkan Rajah 1, di manakah kedudukan Sistem Suria dalam Bima Sakti?",p:["Pada salah satu lengan pilin","Tepat di pusat galaksi","Di luar galaksi sepenuhnya","Di tengah lohong hitam"],b:0,u:"Kira-kira 26 000 tahun cahaya dari pusat galaksi."},
 {j:"pilih",t:"Bintang yang kelihatan paling terang di langit malam:",p:["Tidak semestinya paling besar","Sentiasa bintang paling besar","Pasti bintang paling panas","Tentu bintang paling jauh"],b:0,u:"Kecerahan yang dilihat bergantung pada saiz, suhu dan jarak."},
 {j:"pilih",t:"Tahun cahaya ialah unit bagi:",p:["Jarak","Masa","Kecerahan","Jisim"],b:0,u:"Ia jarak yang dilalui cahaya dalam setahun."},
 {j:"pilih",t:"Mengapakah bintang kelihatan seperti titik kecil walaupun sangat besar?",p:["Jaraknya sangat jauh","Saiz sebenarnya sangat kecil","Atmosfera mengecilkannya","Bintang hanya muncul pada waktu malam"],b:0,u:"Objek yang jauh kelihatan kecil."},
 {j:"pilih",t:"Galaksi Andromeda ialah galaksi berpilin besar yang terdekat dengan Bima Sakti. Cahayanya yang kita lihat hari ini:",p:["Bertolak berjuta tahun dahulu","Bertolak semalam","Bertolak lapan minit lalu","Bertolak tepat pada waktu kita melihat"],b:0,u:"Andromeda kira-kira 2.5 juta tahun cahaya dari Bumi."}],
 bos:{j:"susun",t:"Susun kitar hidup bintang bersaiz Matahari mengikut urutan.",p:["Nebula","Bintang jujukan utama","Gergasi merah","Nebula planet","Kerdil putih"],b:[0,1,2,3,4],u:"Matahari kini berada pada peringkat jujukan utama."}},

{n:3, tempat:"Teleskop Kelab", sk:"11.1 Membandingkan ciri bintang", lampiran:"bintang",
 kadNama:"Betelgeuse", kadEm:"\u{1F534}", kadFakta:"Betelgeuse ialah bintang supergergasi merah dalam buruj Orion. Jika diletakkan di tempat Matahari, permukaannya akan melepasi orbit Marikh.",
 bosKadNama:"Sirius", bosKadEm:"\u{2B50}", bosKadFakta:"Sirius kelihatan paling terang di langit malam kerana ia agak dekat dan lebih panas daripada Matahari.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, bintang manakah paling panas?",p:["Rigel","Sirius","Matahari","Betelgeuse"],b:0,u:"11 000 °C, berwarna putih kebiruan."},
 {j:"pilih",t:"Bintang manakah paling sejuk?",p:["Proxima Centauri","Betelgeuse","Matahari","Sirius"],b:0,u:"2800 °C, berwarna merah."},
 {j:"pilih",t:"Apakah hubungan antara warna bintang dengan suhu?",p:["Semakin biru, semakin panas","Semakin merah, semakin panas","Warna tidak berkaitan dengan suhu","Bintang kuning paling panas"],b:0,u:"Urutan dari panas ke sejuk: biru, putih, kuning, jingga, merah."},
 {j:"pilih",t:"Bintang manakah paling jauh dari Bumi?",p:["Rigel","Betelgeuse","Sirius","Proxima Centauri"],b:0,u:"860 tahun cahaya."},
 {j:"pilih",t:"Rigel kelihatan terang walaupun sangat jauh. Kesimpulan paling munasabah?",p:["Rigel sebenarnya sangat besar dan terang","Rigel lebih dekat daripada Sirius","Rigel bintang paling sejuk","Rigel memantulkan cahaya Matahari"],b:0,u:"Bintang yang jauh tetapi terang mesti memancarkan tenaga yang sangat banyak."},
 {j:"nombor",t:"Berapa tahunkah cahaya dari Sirius mengambil masa untuk sampai ke Bumi?",b:8.6,tol:0.01,suf:"tahun",u:"Jaraknya 8.6 tahun cahaya, jadi cahaya mengambil 8.6 tahun."},
 {j:"pilih",t:"Proxima Centauri lebih dekat daripada Sirius tetapi tidak kelihatan dengan mata kasar. Sebab paling munasabah?",p:["Ia kecil dan malap","Ia terlalu panas untuk dilihat","Ia berada di galaksi lain","Ia tidak memancarkan cahaya"],b:0,u:"Proxima ialah bintang kerdil merah yang malap."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL berdasarkan jadual.",p:["Matahari lebih panas daripada Betelgeuse","Bintang merah dalam jadual paling sejuk","Sirius lebih dekat daripada Rigel","Betelgeuse paling panas antara semua bintang","Proxima Centauri paling jauh dari Bumi"],b:[0,1,2],u:"Rigel paling panas dan paling jauh."}],
 bos:{j:"pilih",t:"Seorang murid mendakwa bintang yang paling terang di langit ialah bintang paling panas. Nilaikan dakwaan itu berdasarkan data.",p:["Kurang tepat; Rigel lebih panas daripada Sirius","Tepat; Sirius paling panas dalam jadual","Tepat; semua bintang terang berwarna merah","Kurang tepat; bintang terang sentiasa paling sejuk"],b:0,u:"Kecerahan bergantung juga pada jarak dan saiz."}},

{n:4, tempat:"Pusat Astrofizik", sk:"11.1 Menganalisis kitar hidup bintang", lampiran:"kitar",
 kadNama:"Kerdil Putih", kadEm:"\u{26AA}", kadFakta:"Kerdil putih ialah teras bintang yang sudah mati. Saiznya hampir sama dengan Bumi tetapi sangat tumpat.",
 bosKadNama:"Lohong Hitam", bosKadEm:"\u{26AB}", bosKadFakta:"Graviti lohong hitam begitu kuat sehingga cahaya pun tidak dapat keluar daripadanya.",
 soalan:[
 {j:"pilih",t:"Bintang manakah paling mungkin menghasilkan supernova?",p:["Y","X","Z","Semua sama"],b:0,u:"Hanya bintang yang sangat besar meletup sebagai supernova."},
 {j:"pilih",t:"Apakah peringkat seterusnya bagi bintang Z?",p:["Nebula planet","Supernova","Lohong hitam","Nebula baharu"],b:0,u:"Z bersaiz sederhana dan sudah menjadi gergasi merah."},
 {j:"pilih",t:"Peringkat akhir yang paling mungkin bagi bintang X ialah:",p:["Kerdil putih","Lohong hitam","Bintang neutron","Supergergasi merah"],b:0,u:"X mempunyai jisim sama seperti Matahari."},
 {j:"pilih",t:"Apakah faktor utama yang menentukan bagaimana sesebuah bintang berakhir?",p:["Jisim bintang","Warna bintang semasa lahir","Jarak bintang dari Bumi","Nama bintang"],b:0,u:"Bintang yang lebih besar melalui peringkat yang berbeza."},
 {j:"pilih",t:"Bintang Y berada pada peringkat supergergasi merah. Ramalkan peringkat seterusnya.",p:["Supernova","Kerdil putih","Nebula planet","Jujukan utama semula"],b:0,u:"Supergergasi merah yang sangat besar meletup sebagai supernova."},
 {j:"pilih",t:"Mengapakah bintang yang lebih besar hidup lebih singkat walaupun bahan apinya lebih banyak?",p:["Ia membakar bahan api dengan jauh lebih cepat","Ia mempunyai bahan api yang lebih sedikit","Ia terlalu sejuk untuk terus bersinar","Ia berada lebih jauh dari pusat galaksi"],b:0,u:"Graviti yang kuat menjadikan teras sangat panas, jadi tindak balas nuklear berlaku lebih laju."},
 {j:"pilih",t:"Unsur berat seperti emas dan besi dalam badan dan Bumi dipercayai terhasil daripada:",p:["Letupan bintang besar","Gunung berapi di Bumi","Tindak balas di dalam laut","Kilang pada zaman purba"],b:0,u:"Kita dibina daripada unsur yang terbentuk di dalam bintang."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh maklumat jadual.",p:["Jisim menentukan peringkat akhir bintang","Bintang X dan Z akan menjadi kerdil putih","Bintang Y boleh menjadi lohong hitam atau bintang neutron","Semua bintang berakhir sebagai lohong hitam","Bintang Z akan meletup sebagai supernova"],b:[0,1,2],u:"Z terlalu kecil untuk supernova."}],
 bos:{j:"pilih",t:"Mengapakah ahli astronomi dapat mengkaji kitar hidup bintang walaupun satu kitar mengambil masa berbilion tahun?",p:["Mereka memerhati banyak bintang pada peringkat berbeza","Mereka memerhati satu bintang selama berbilion tahun","Mereka mencipta bintang di makmal","Mereka meneka tanpa sebarang pemerhatian"],b:0,u:"Seperti mengkaji ramai manusia pada umur berbeza untuk memahami kitar hidup manusia."}},

{n:5, tempat:"Jawatankuasa Balai Cerap", sk:"11.1 Menilai lokasi pemerhatian bintang", lampiran:"cerap",
 kadNama:"Pencemaran Cahaya", kadEm:"\u{1F303}", kadFakta:"Lampu bandar yang terang menyebabkan kebanyakan bintang tidak kelihatan dari kawasan bandar.",
 bosKadNama:"Balai Cerap Langkawi", bosKadEm:"\u{1F52D}", bosKadFakta:"Malaysia mempunyai balai cerap di beberapa lokasi, termasuk di Langkawi, untuk pemerhatian astronomi dan anak bulan.",
 soalan:[
 {j:"pilih",t:"Lokasi manakah paling kurang pencemaran cahaya?",p:["Q","P","R","Semua sama"],b:0,u:"Q di puncak bukit di pulau."},
 {j:"pilih",t:"Lokasi manakah mempunyai paling banyak malam cerah?",p:["Q","P","R","Semua sama"],b:0,u:"150 malam setahun."},
 {j:"pilih",t:"Mengapakah ketinggian lokasi penting untuk balai cerap?",p:["Kurang udara berjerebu di atas pemerhati","Lebih dekat dengan bintang secara ketara","Suhu lebih panas untuk teleskop","Bunyi lebih sedikit di tempat tinggi"],b:0,u:"Udara di tempat tinggi lebih nipis dan bersih."},
 {j:"pilih",t:"Kelemahan utama lokasi P ialah:",p:["Pencemaran cahaya tinggi","Terlalu tinggi dari aras laut","Tiada jalan raya","Terlalu banyak malam cerah"],b:0,u:"Cahaya bandar menenggelamkan bintang yang malap."},
 {j:"pilih",t:"Majlis mahu balai cerap untuk penyelidikan serius. Pilihan paling wajar?",p:["Q","P","R","Bina di ketiga-tiga lokasi"],b:0,u:"Pemerhatian terbaik walaupun akses lebih sukar."},
 {j:"pilih",t:"Majlis mahu pusat astronomi untuk lawatan pelajar sekolah pada waktu petang. Pilihan paling wajar?",p:["R","Q","P","Tiada"],b:0,u:"R mudah diakses dengan pencemaran cahaya sederhana, sesuai untuk pendidikan."},
 {j:"pilih",t:"Seorang ahli majlis mencadangkan lokasi P kerana paling mudah dikunjungi. Nilaikan cadangan itu untuk penyelidikan.",p:["Kurang sesuai; cahaya bandar merosakkan pemerhatian","Sangat sesuai kerana akses paling mudah","Sesuai kerana ia paling tinggi","Kurang sesuai kerana terlalu banyak malam cerah"],b:0,u:"Kemudahan akses tidak menggantikan kualiti langit."},
 {j:"pilih",t:"Cara paling berkesan mengurangkan pencemaran cahaya di sekitar balai cerap baharu ialah:",p:["Lampu jalan yang menghala ke bawah","Tambah lampu jalan yang lebih terang","Pasang lampu neon di sekitar balai cerap","Nyalakan lampu sepanjang malam"],b:0,u:"Lampu yang terlindung mengurangkan cahaya yang tersebar ke langit."}],
 bos:{j:"pilih",t:"Kerajaan negeri hanya mampu membina satu balai cerap yang digunakan oleh penyelidik dan pelajar. Keputusan paling wajar?",p:["Q, dengan program pengangkutan untuk pelajar","P, kerana dekat dengan sekolah bandar","R, walaupun kualiti pemerhatian sederhana","Tidak membina apa-apa"],b:0,u:"Kualiti langit paling penting; masalah akses boleh diatasi dengan pengangkutan."}},

{n:6, tempat:"Karnival Angkasa", sk:"11.1 Mereka cipta menggunakan pengetahuan bintang dan galaksi",
 kadNama:"Buruj", kadEm:"\u{2728}", kadFakta:"Buruj ialah corak bintang yang dilihat dari Bumi. Pelaut Melayu dahulu menggunakan bintang untuk menentukan arah.",
 bosKadNama:"Stellarium", bosKadEm:"\u{1F4BB}", bosKadFakta:"Perisian percuma seperti Stellarium menunjukkan kedudukan bintang di langit dari mana-mana lokasi dan masa.",
 soalan:[
 {j:"pilih",t:"Awak mereka model Galaksi Bima Sakti untuk pameran. Bentuk paling tepat?",p:["Cakera berpilin","Bebola bulat padat","Kiub berwarna-warni","Garis lurus bintang"],b:0,u:"Bima Sakti ialah galaksi berpilin."},
 {j:"pilih",t:"Awak mereka poster kitar hidup bintang. Cara paling jelas menunjukkan dua laluan?",p:["Carta alir bercabang","Satu senarai tanpa urutan","Gambar satu bintang sahaja","Jadual warna bintang sahaja"],b:0,u:"Carta bercabang menunjukkan laluan bintang sederhana dan bintang besar."},
 {j:"pilih",t:"Awak merancang malam cerap bintang di sekolah. Masa paling sesuai?",p:["Malam gelap tanpa bulan","Malam bulan purnama yang terang","Siang hari yang cerah","Malam hujan lebat"],b:0,u:"Cahaya bulan purnama menenggelamkan bintang yang malap."},
 {j:"pilih",t:"Awak mereka model skala jarak untuk menunjukkan betapa jauhnya bintang. Pendekatan paling berkesan?",p:["Guna skala masa perjalanan cahaya","Letak semua bintang pada jarak sama","Guna saiz bintang yang sama","Guna warna yang sama untuk semua bintang"],b:0,u:"Masa perjalanan cahaya membantu menggambarkan jarak yang sangat jauh."},
 {j:"pilih",t:"Awak mencadangkan cara murid bandar dapat melihat lebih banyak bintang. Cadangan paling praktikal?",p:["Padamkan lampu luar sekolah semasa aktiviti","Pasang lampu lebih terang di padang","Cerap bintang pada tengah hari","Guna cermin kereta untuk melihat bintang"],b:0,u:"Mengurangkan cahaya setempat meningkatkan penglihatan bintang."},
 {j:"pilih",t:"Awak mereka permainan kad bintang. Ciri paling bermakna untuk dibandingkan?",p:["Suhu, warna dan jarak","Nama dan tarikh ditemui sahaja","Harga teleskop","Bilangan huruf dalam nama"],b:0,u:"Ciri ini ialah ciri sains yang boleh dibandingkan."},
 {j:"pilih",t:"Awak mahu mengaitkan astronomi dengan budaya tempatan. Idea paling sesuai?",p:["Kaji penggunaan bintang oleh pelaut dahulu","Salin buku astronomi asing tanpa perubahan","Abaikan pengetahuan tempatan","Hanya tunjuk gambar dari internet"],b:0,u:"Masyarakat Melayu dahulu menggunakan kedudukan bintang untuk pelayaran dan musim menanam."},
 {j:"pilih",t:"Bagaimanakah awak menilai sama ada pameran angkasa awak berjaya?",p:["Uji kefahaman pelawat sebelum dan selepas","Kira bilangan belon yang digunakan","Tanya sama ada pameran berwarna-warni","Ukur saiz dewan pameran"],b:0,u:"Perubahan kefahaman menunjukkan pameran itu berkesan."}],
 bos:{j:"buka",
  t:"Sekolah awak mahu menarik minat murid terhadap astronomi walaupun berada di kawasan bandar yang terang. Reka satu projek, pameran atau alat untuk memperkenalkan bintang dan galaksi.",
  arahan:"Terangkan rekaan awak, konsep yang ditunjukkan (ciri bintang, kitar hidup bintang atau kedudukan Sistem Suria dalam Bima Sakti), cara mengatasi pencemaran cahaya atau menggunakan teknologi, cara mengukur kejayaan projek, serta kos dan kaitan dengan budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan ciri dan kitar hidup bintang dengan betul, mengatasi kekangan pencemaran cahaya secara kreatif, dan merancang penilaian yang realistik."}}
];

module.exports = {
  id:"t2b11", tingkatan:2, kod:"11.0 Bintang dan Galaksi dalam Alam Semesta",
  tajuk:"Laluan Galaksi",
  subtajuk:"Sains Ting. 2 · Bab 11 Bintang dan Galaksi",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud bintang, galaksi dan nebula serta jenis galaksi. Langkah seterusnya ialah menjelaskan kitar hidup bintang.",
   2:"{n} memahami kitar hidup bintang dan kedudukan Sistem Suria dalam Bima Sakti serta dapat menjelaskannya. Perlu lebih banyak latihan membandingkan ciri bintang.",
   3:"{n} boleh membandingkan bintang berdasarkan suhu, warna dan jarak daripada data. Galakkan mengaitkan warna dengan suhu.",
   4:"{n} mampu menganalisis maklumat jisim bintang untuk meramal peringkat akhir kitar hidupnya. Seterusnya latih menilai keputusan berkaitan pemerhatian bintang.",
   5:"{n} dapat menilai lokasi balai cerap berdasarkan pencemaran cahaya, ketinggian dan akses. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta projek astronomi yang kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bintang dan Galaksi dalam Alam Semesta. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ suhubintang:R_SUHUBINTANG, bimasakti:R_BIMASAKTI, bintang:T_BINTANG, kitar:T_KITAR, cerap:T_CERAP },
  aras:ARAS
};
