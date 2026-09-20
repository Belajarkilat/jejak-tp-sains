/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 12.0 Sistem Suria.
   Jalankan `node bina.js t2b12` untuk menyemak dan menghasilkan bank-t2b12.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 89.

   1 a.u. diambil sebagai 150 juta km. Nilai planet ialah anggaran yang
   dibundarkan. Bilangan bulan Musytari dan Zuhal tidak ditanya kerana
   jumlahnya sering dikemas kini.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai sistem suria.",
"Memahami sistem suria dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai sistem suria dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai sistem suria dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai sistem suria dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekacipta dengan menggunakan pengetahuan dan kemahiran sains mengenai sistem suria dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_SUHUPLANET = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 5,
  "yMaks": 500,
  "bar": [
    {
      "label": "Utarid",
      "nilai": 167,
      "warna": "kuning"
    },
    {
      "label": "Zuhrah",
      "nilai": 464,
      "warna": "merah"
    },
    {
      "label": "Bumi",
      "nilai": 15,
      "warna": "hijau"
    }
  ],
  "xLabel": "Suhu purata permukaan (°C)",
  "kapsyen": "Rajah 1 · Suhu purata permukaan tiga planet dalam.",
  "alt": "Graf palang suhu purata permukaan: Utarid 167 darjah Celsius, Zuhrah 464, Bumi 15"
};

const R_ORBIT = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 4,
  "yMaks": 2,
  "bar": [
    {
      "label": "Utarid",
      "nilai": 0.24,
      "warna": "kuning"
    },
    {
      "label": "Zuhrah",
      "nilai": 0.62,
      "warna": "merah"
    },
    {
      "label": "Bumi",
      "nilai": 1,
      "warna": "hijau"
    },
    {
      "label": "Marikh",
      "nilai": 1.88,
      "warna": "ungu"
    }
  ],
  "xLabel": "Tempoh orbit (tahun Bumi)",
  "kapsyen": "Rajah 1 · Tempoh orbit empat planet dalam, disusun mengikut jarak dari Matahari.",
  "alt": "Graf palang tempoh orbit yang semakin panjang mengikut jarak: Utarid 0.24 tahun, Zuhrah 0.62, Bumi 1, Marikh 1.88"
};

const T_JARAK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Planet</th>'+
'<th class="n">Jarak purata dari Matahari (a.u.)</th><th class="n">Tempoh satu orbit (tahun Bumi)</th></tr></thead><tbody>'+
'<tr><td>Utarid</td><td class="n">0.4</td><td class="n">0.24</td></tr>'+
'<tr><td>Zuhrah</td><td class="n">0.7</td><td class="n">0.62</td></tr>'+
'<tr><td>Bumi</td><td class="n">1.0</td><td class="n">1</td></tr>'+
'<tr><td>Marikh</td><td class="n">1.5</td><td class="n">1.9</td></tr>'+
'<tr><td>Musytari</td><td class="n">5.2</td><td class="n">11.9</td></tr>'+
'<tr><td>Zuhal</td><td class="n">9.5</td><td class="n">29.5</td></tr>'+
'</tbody></table></div><p class="qnote">1 a.u. (unit astronomi) ialah jarak purata Bumi ke Matahari, kira-kira 150 juta km. Cahaya mengambil kira-kira 8 minit untuk bergerak sejauh 1 a.u.</p>';

const T_CIRI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Planet</th>'+
'<th class="n">Jarak (a.u.)</th><th class="n">Suhu purata (&deg;C)</th><th class="n">Ketumpatan (g/cm&sup3;)</th><th class="n">Graviti (Bumi = 1)</th><th>Atmosfera</th></tr></thead><tbody>'+
'<tr><td>Utarid</td><td class="n">0.4</td><td class="n">167</td><td class="n">5.4</td><td class="n">0.38</td><td>Hampir tiada</td></tr>'+
'<tr><td>Zuhrah</td><td class="n">0.7</td><td class="n">464</td><td class="n">5.2</td><td class="n">0.9</td><td>Sangat tebal, kebanyakan karbon dioksida</td></tr>'+
'<tr><td>Bumi</td><td class="n">1.0</td><td class="n">15</td><td class="n">5.5</td><td class="n">1.0</td><td>Nitrogen dan oksigen</td></tr>'+
'<tr><td>Marikh</td><td class="n">1.5</td><td class="n">&minus;65</td><td class="n">3.9</td><td class="n">0.38</td><td>Nipis, kebanyakan karbon dioksida</td></tr>'+
'<tr><td>Musytari</td><td class="n">5.2</td><td class="n">&minus;110</td><td class="n">1.3</td><td class="n">2.5</td><td>Hidrogen dan helium</td></tr>'+
'<tr><td>Zuhal</td><td class="n">9.5</td><td class="n">&minus;140</td><td class="n">0.7</td><td class="n">1.1</td><td>Hidrogen dan helium</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai anggaran yang dibundarkan. Ketumpatan air = 1 g/cm&sup3;.</p>';

const T_KOLONI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Destinasi</th>'+
'<th>Masa perjalanan</th><th>Suhu permukaan</th><th>Air</th><th>Atmosfera</th></tr></thead><tbody>'+
'<tr><td>Bulan</td><td>Kira-kira 3 hari</td><td>&minus;170 &deg;C hingga 120 &deg;C</td><td>Ais di kawah kutub</td><td>Tiada</td></tr>'+
'<tr><td>Marikh</td><td>Kira-kira 7 bulan</td><td>Purata &minus;65 &deg;C</td><td>Ais di bawah permukaan</td><td>Nipis, tidak boleh dihirup</td></tr>'+
'<tr><td>Zuhrah</td><td>Kira-kira 4 bulan</td><td>Purata 464 &deg;C</td><td>Tiada</td><td>Sangat tebal, berasid</td></tr>'+
'</tbody></table></div><p class="qnote">Calon lokasi pangkalan manusia pertama di luar Bumi. Nilai anggaran.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Model Sistem Suria", sk:"12.1 Planet dan unit jarak angkasa", lampiran:"suhuplanet",
 kadNama:"Unit Astronomi", kadEm:"\u{1F4CF}", kadFakta:"Satu unit astronomi (a.u.) ialah jarak purata Bumi ke Matahari, kira-kira 150 juta kilometer.",
 bosKadNama:"Musytari", bosKadEm:"\u{1FA90}", bosKadFakta:"Musytari ialah planet terbesar. Lebih 1300 buah Bumi boleh dimuatkan di dalamnya.",
 soalan:[
 {j:"pilih",t:"Planet yang paling hampir dengan Matahari ialah:",p:["Utarid","Zuhrah","Bumi","Marikh"],b:0,u:"Utarid kira-kira 0.4 a.u. dari Matahari."},
 {j:"pilih",t:"Planet terbesar dalam Sistem Suria ialah:",p:["Musytari","Zuhal","Bumi","Neptun"],b:0,u:"Musytari ialah gergasi gas."},
 {j:"pilih",t:"Satu tahun cahaya ialah:",p:["Jarak dilalui cahaya dalam setahun","Masa cahaya sampai ke Bumi","Tempoh Bumi mengelilingi Matahari","Kecerahan bintang dalam setahun"],b:0,u:"Kira-kira 9.5 trilion kilometer."},
 {j:"pilih",t:"Planet yang dikenali sebagai 'planet merah' ialah:",p:["Marikh","Zuhrah","Musytari","Utarid"],b:0,u:"Tanahnya mengandungi ferum oksida."},
 {j:"pilih",t:"Planet yang mempunyai gelang yang paling jelas ialah:",p:["Zuhal","Bumi","Marikh","Utarid"],b:0,u:"Gelangnya terdiri daripada ais dan batu."},
 {j:"pilih",t:"Satelit semula jadi Bumi ialah:",p:["Bulan","Matahari","Marikh","Komet"],b:0,u:"Utarid dan Zuhrah tidak mempunyai bulan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, planet yang paling panas antara tiga planet ini ialah:",p:["Zuhrah","Utarid","Bumi","Marikh"],b:0,u:"Zuhrah lebih panas daripada Utarid walaupun lebih jauh dari Matahari."},
 {j:"banyak",t:"Pilih SEMUA ciri yang menjadikan Bumi sesuai untuk hidupan.",p:["Air dalam keadaan cecair","Atmosfera mengandungi oksigen","Jarak yang sesuai dari Matahari","Suhu purata permukaan 464 °C","Tiada atmosfera langsung di sekelilingnya"],b:[0,1,2],u:"Suhu 464 °C ialah suhu Zuhrah."}],
 bos:{j:"susun",t:"Susun planet mengikut jarak dari Matahari, bermula daripada yang PALING dekat.",p:["Utarid","Zuhrah","Bumi","Marikh","Musytari"],b:[0,1,2,3,4],u:"Selepas Musytari ialah Zuhal, Uranus dan Neptun."}},

{n:2, tempat:"Bilik Simulasi", sk:"12.1 Hubungan ciri planet dan situasi hipotetikal", lampiran:"tempohorbit",
 kadNama:"Zuhrah", kadEm:"\u{1F525}", kadFakta:"Atmosfera Zuhrah yang tebal memerangkap haba, menjadikan suhunya cukup panas untuk meleburkan plumbum.",
 bosKadNama:"Fasa Bumi", bosKadEm:"\u{1F317}", bosKadFakta:"Angkasawan di Bulan melihat Bumi mengalami fasa, sama seperti kita melihat fasa Bulan dari Bumi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah planet yang jauh dari Matahari mempunyai tempoh orbit yang lebih panjang?",p:["Orbitnya lebih panjang dan lebih perlahan","Planet yang jauh lebih berat daripada planet dekat","Matahari menolak planet yang jauh ke belakang","Planet yang jauh berputar pada paksinya lebih cepat"],b:0,u:"Tarikan graviti Matahari lebih lemah pada jarak jauh."},
 {j:"pilih",t:"Mengapakah Zuhrah lebih panas daripada Utarid?",p:["Atmosfera tebal memerangkap haba","Zuhrah lebih dekat dengan Matahari","Zuhrah mempunyai gunung berapi aktif sahaja","Utarid mempunyai lautan yang luas"],b:0,u:"Kesan rumah hijau yang melampau berlaku di Zuhrah."},
 {j:"pilih",t:"Jika Bumi berhenti berputar pada paksinya, apakah yang paling mungkin berlaku?",p:["Satu sisi siang sangat lama","Siang dan malam kekal 12 jam","Bumi berhenti mengelilingi Matahari","Bulan akan jatuh ke Bumi"],b:0,u:"Siang dan malam berlaku akibat putaran Bumi."},
 {j:"pilih",t:"Dari Bulan, Bumi kelihatan:",p:["Bulat dan mengalami fasa","Rata seperti cakera","Sentiasa gelap","Lebih kecil daripada bintang"],b:0,u:"Bahagian Bumi yang disinari Matahari berubah mengikut kedudukan."},
 {j:"pilih",t:"Bulan-bulan Marikh kecil dan tidak sekata bentuknya. Hipotesis paling munasabah tentang asal usulnya?",p:["Asteroid yang ditawan graviti Marikh","Pecahan Bumi yang tercampak ke Marikh","Serpihan Matahari yang telah menyejuk","Bintang kecil yang jatuh ke orbit Marikh"],b:0,u:"Salah satu hipotesis ialah Fobos dan Deimos ialah asteroid yang ditawan graviti."},
 {j:"pilih",t:"Mengapakah Bumi mempunyai suhu yang sesuai untuk hidupan?",p:["Jarak dan atmosferanya sesuai","Ia planet paling besar","Ia tiada atmosfera langsung","Ia planet paling jauh"],b:0,u:"Bumi berada dalam zon boleh didiami di sekeliling Matahari."},
 {j:"pilih",t:"Zuhrah dan Uranus berputar pada arah yang bertentangan dengan kebanyakan planet. Ini dianggap sebagai:",p:["Anomali","Hukum alam","Kesilapan data","Gerhana"],b:0,u:"Anomali ialah ciri yang tidak mengikut corak umum."},
 {j:"pilih",t:"Mengapakah manusia belum boleh berpindah ke planet lain jika sumber Bumi habis?",p:["Belum ada planet lain yang sesuai","Semua planet lain lebih kecil daripada Bulan","Planet lain tiada graviti langsung","Semua planet lain terlalu dekat dengan Matahari"],b:0,u:"Menjaga Bumi dan mengurangkan jejak ekologi ialah pilihan paling wajar."}],
 bos:{j:"banyak",t:"Pilih SEMUA planet gergasi gas.",p:["Musytari","Zuhal","Neptun","Marikh","Utarid"],b:[0,1,2],u:"Marikh dan Utarid ialah planet berbatu. Uranus juga gergasi gas."}},

{n:3, tempat:"Stesen Navigasi", sk:"12.1 Mengira jarak menggunakan a.u. dan tahun cahaya", lampiran:"jarak",
 kadNama:"8 Minit Cahaya", kadEm:"\u{2600}", kadFakta:"Jika Matahari tiba-tiba padam, kita hanya akan menyedarinya selepas kira-kira 8 minit.",
 bosKadNama:"Voyager 1", bosKadEm:"\u{1F6F0}", bosKadFakta:"Kapal angkasa Voyager 1 yang dilancarkan pada tahun 1977 kini berada lebih 160 a.u. dari Matahari.",
 soalan:[
 {j:"nombor",t:"Berapakah jarak Musytari dari Matahari, dalam juta km?",b:780,tol:0.5,suf:"juta km",u:"5.2 × 150 = 780 juta km."},
 {j:"nombor",t:"Berapakah jarak Marikh dari Matahari, dalam juta km?",b:225,tol:0.5,suf:"juta km",u:"1.5 × 150 = 225 juta km."},
 {j:"nombor",t:"Kira-kira berapa minit cahaya Matahari mengambil masa untuk sampai ke Zuhal?",b:76,tol:0.03,suf:"minit",u:"9.5 × 8 = 76 minit."},
 {j:"pilih",t:"Planet manakah mengelilingi Matahari dalam kurang daripada satu tahun Bumi?",p:["Utarid dan Zuhrah","Marikh dan Musytari","Musytari dan Zuhal","Bumi dan Marikh"],b:0,u:"Tempoh orbitnya 0.24 dan 0.62 tahun."},
 {j:"nombor",t:"Seorang murid berumur 13 tahun Bumi. Berapakah umurnya dalam tahun Musytari?",b:1.09,tol:0.03,suf:"tahun",u:"13 ÷ 11.9 ≈ 1.09 tahun Musytari."},
 {j:"pilih",t:"Mengapakah unit a.u. lebih sesuai daripada kilometer untuk jarak dalam Sistem Suria?",p:["Nombor menjadi lebih kecil dan mudah dibanding","Kilometer tidak boleh digunakan di angkasa","Unit a.u. lebih tepat daripada kilometer","Semua planet berjarak tepat 1 a.u."],b:0,u:"Menulis 780 juta km berbanding 5.2 a.u. lebih rumit."},
 {j:"pilih",t:"Mengapakah tahun cahaya digunakan untuk jarak bintang, bukan a.u.?",p:["Jarak bintang terlalu besar","Bintang lebih dekat daripada planet","Cahaya tidak bergerak di angkasa","Unit a.u. hanya untuk Bulan"],b:0,u:"Bintang terdekat kira-kira 270 000 a.u. dari Matahari."},
 {j:"pilih",t:"Berapakah jarak antara orbit Bumi dengan orbit Marikh jika kedua-duanya berada pada sisi Matahari yang sama?",p:["0.5 a.u.","2.5 a.u.","1.5 a.u.","1.0 a.u."],b:0,u:"1.5 − 1.0 = 0.5 a.u."}],
 bos:{j:"nombor",t:"Isyarat radio bergerak selaju cahaya. Berapakah masa isyarat dari Bumi sampai ke kapal angkasa di Musytari apabila jarak antara keduanya 4.2 a.u., dalam minit?",b:33.6,tol:0.03,suf:"minit",u:"4.2 × 8 = 33.6 minit."}},

{n:4, tempat:"Makmal Perbandingan Planet", sk:"12.1 Menganalisis hubungan ciri planet dan anomali", lampiran:"ciri",
 kadNama:"Zuhal", kadEm:"\u{1FA90}", kadFakta:"Ketumpatan Zuhal kurang daripada air. Jika ada lautan yang cukup besar, Zuhal akan terapung.",
 bosKadNama:"Zon Boleh Didiami", bosKadEm:"\u{1F30E}", bosKadFakta:"Zon boleh didiami ialah kawasan di sekeliling bintang yang suhunya membolehkan air wujud sebagai cecair.",
 soalan:[
 {j:"pilih",t:"Secara umum, apakah hubungan antara jarak dari Matahari dengan suhu planet?",p:["Semakin jauh, semakin sejuk","Semakin jauh, semakin panas","Tiada hubungan","Semakin dekat, semakin sejuk"],b:0,u:"Planet jauh menerima kurang tenaga Matahari."},
 {j:"pilih",t:"Planet manakah ialah anomali bagi hubungan jarak dan suhu?",p:["Zuhrah","Utarid","Marikh","Zuhal"],b:0,u:"Zuhrah lebih jauh daripada Utarid tetapi lebih panas."},
 {j:"pilih",t:"Planet manakah kurang tumpat daripada air?",p:["Zuhal","Musytari","Marikh","Bumi"],b:0,u:"0.7 g/cm³, kurang daripada 1 g/cm³."},
 {j:"pilih",t:"Utarid dan Marikh mempunyai graviti yang sama walaupun Marikh lebih besar. Penjelasan paling munasabah?",p:["Utarid lebih tumpat","Marikh lebih tumpat","Utarid lebih jauh","Marikh lebih panas"],b:0,u:"Graviti bergantung pada jisim dan saiz; Utarid lebih kecil tetapi lebih tumpat."},
 {j:"pilih",t:"Planet berbatu dalam jadual mempunyai ketumpatan:",p:["Lebih tinggi daripada gergasi gas","Lebih rendah daripada gergasi gas","Sama dengan gergasi gas","Kurang daripada air"],b:0,u:"Utarid, Zuhrah, Bumi dan Marikh terdiri daripada batu dan logam."},
 {j:"nombor",t:"Seorang angkasawan mempunyai berat 600 N di Bumi. Berapakah beratnya di Musytari, dalam newton?",b:1500,tol:0.5,suf:"N",u:"600 × 2.5 = 1500 N."},
 {j:"nombor",t:"Berapakah berat angkasawan yang sama di Marikh, dalam newton?",b:228,tol:0.5,suf:"N",u:"600 × 0.38 = 228 N."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Atmosfera tebal memanaskan planet","Gergasi gas kurang tumpat","Hanya Bumi beratmosfera nitrogen dan oksigen","Semua planet yang jauh lebih tumpat","Graviti semua planet sama dengan Bumi"],b:[0,1,2],u:"Ketumpatan Musytari dan Zuhal lebih rendah."}],
 bos:{j:"pilih",t:"Seorang murid mendakwa Utarid pasti planet paling panas kerana paling dekat dengan Matahari. Nilaikan dakwaan itu.",p:["Salah; Zuhrah lebih panas kerana atmosferanya","Betul; jarak ialah satu-satunya faktor suhu","Betul; Utarid mempunyai atmosfera paling tebal","Salah; Zuhal paling panas antara semua planet"],b:0,u:"Utarid hampir tiada atmosfera untuk memerangkap haba."}},

{n:5, tempat:"Agensi Angkasa", sk:"12.1 Menilai kesesuaian planet untuk penerokaan", lampiran:"koloni",
 kadNama:"Marikh", kadEm:"\u{1F534}", kadFakta:"Robot penjelajah seperti Perseverance sedang mengkaji tanah Marikh untuk mencari tanda hidupan purba.",
 bosKadNama:"Jejak Ekologi", bosKadEm:"\u{1F463}", bosKadFakta:"Jejak ekologi mengukur berapa banyak sumber Bumi yang digunakan oleh seseorang atau sesebuah negara.",
 soalan:[
 {j:"pilih",t:"Destinasi manakah paling dekat dari segi masa perjalanan?",p:["Bulan","Marikh","Zuhrah","Semua sama"],b:0,u:"Kira-kira 3 hari."},
 {j:"pilih",t:"Mengapakah Zuhrah paling tidak sesuai untuk pangkalan manusia?",p:["Terlalu panas dan berasid","Terlalu jauh dari Bumi","Terlalu sejuk untuk manusia","Tiada graviti langsung"],b:0,u:"Suhu 464 °C dan atmosfera berasid memusnahkan peralatan."},
 {j:"pilih",t:"Kelebihan utama Marikh berbanding Bulan untuk penempatan jangka panjang?",p:["Ada atmosfera nipis dan ais","Masa perjalanan lebih singkat","Suhu lebih panas daripada Bumi","Udaranya boleh terus dihirup"],b:0,u:"Atmosfera nipis sedikit melindungi, dan ais ialah sumber air serta oksigen."},
 {j:"pilih",t:"Kelebihan utama Bulan sebagai langkah pertama?",p:["Dekat dan mudah dibantu","Udaranya boleh dihirup","Suhunya sentiasa selesa","Terdapat sungai yang mengalir"],b:0,u:"Bantuan dan bekalan boleh sampai dalam beberapa hari."},
 {j:"pilih",t:"Agensi mahu menguji teknologi penempatan sebelum misi jauh. Keputusan paling wajar?",p:["Uji di Bulan dahulu, kemudian ke Marikh","Terus ke Zuhrah kerana lebih dekat daripada Marikh","Terus ke Marikh tanpa sebarang ujian","Batalkan semua misi angkasa"],b:0,u:"Bulan membolehkan ujian dengan risiko lebih rendah."},
 {j:"pilih",t:"Seorang ahli politik mencadangkan penempatan di Marikh sebagai jalan keluar apabila Bumi rosak. Nilaikan cadangan itu.",p:["Kurang wajar; menjaga Bumi jauh lebih praktikal","Sangat wajar kerana Marikh sama seperti Bumi","Wajar kerana semua orang boleh berpindah dengan mudah","Kurang wajar kerana Marikh lebih panas daripada Zuhrah"],b:0,u:"Marikh sangat sejuk dan udaranya tidak boleh dihirup; kos memindahkan manusia sangat tinggi."},
 {j:"pilih",t:"Mengapakah air penting dalam memilih lokasi pangkalan?",p:["Air diperlukan untuk minum dan oksigen","Air menjadikan planet lebih berat","Air diperlukan untuk menghasilkan graviti","Air membuatkan perjalanan lebih cepat"],b:0,u:"Elektrolisis air menghasilkan oksigen dan hidrogen."},
 {j:"pilih",t:"Masalah utama pangkalan di Bulan yang tiada atmosfera ialah:",p:["Tiada pelindung sinaran","Terlalu banyak hujan","Terlalu banyak oksigen","Angin kencang setiap hari"],b:0,u:"Pangkalan mungkin perlu dibina di bawah tanah."}],
 bos:{j:"pilih",t:"Malaysia mahu menyertai misi antarabangsa ke Bulan dengan bajet terhad. Sumbangan paling wajar?",p:["Instrumen sains kecil atau satelit","Membina roket gergasi sendiri dengan segera","Menghantar angkasawan tanpa latihan","Tidak menyertai langsung"],b:0,u:"Sumbangan khusus dan berskala kecil lebih realistik untuk bajet terhad."}},

{n:6, tempat:"Pusat Sains Negara", sk:"12.1 Mereka cipta menggunakan pengetahuan Sistem Suria",
 kadNama:"Model Skala", kadEm:"\u{1F3D0}", kadFakta:"Jika Matahari sebesar bola sepak di tengah padang, Bumi hanya sebesar biji lada kira-kira 25 m jauhnya.",
 bosKadNama:"Rumah Angkasa", bosKadEm:"\u{1F3E0}", bosKadFakta:"Habitat angkasa perlu mengitar semula udara dan air kerana bekalan dari Bumi sangat mahal.",
 soalan:[
 {j:"pilih",t:"Awak membina model Sistem Suria di padang sekolah. Perkara paling sukar ditunjukkan dengan tepat?",p:["Saiz dan jarak pada skala sama","Warna sebenar permukaan setiap planet","Nama saintifik setiap planet","Susunan planet dari Matahari"],b:0,u:"Jarak sangat besar berbanding saiz planet."},
 {j:"pilih",t:"Awak mereka habitat untuk angkasawan di Marikh. Ciri paling penting?",p:["Dinding kedap udara dan pelindung sinaran","Tingkap kaca besar tanpa perlindungan","Kolam renang terbuka di luar","Taman bunga di permukaan tanpa pelindung"],b:0,u:"Atmosfera nipis tidak boleh dihirup dan kurang melindungi daripada sinaran."},
 {j:"pilih",t:"Awak mereka sistem air untuk pangkalan di Bulan. Sumber paling praktikal?",p:["Cairkan ais kutub dan kitar semula","Bawa semua air yang diperlukan dari Bumi","Tunggu hujan turun di Bulan","Ambil air dari sungai Bulan"],b:0,u:"Membawa air dari Bumi sangat mahal."},
 {j:"pilih",t:"Awak mereka permainan papan tentang Sistem Suria. Cabaran paling sesuai untuk konsep graviti?",p:["Kira berat pemain di planet berbeza","Hafal nama semua bulan","Warnakan planet mengikut kegemaran","Kira bilangan bintang di langit"],b:0,u:"Berat berubah mengikut graviti planet."},
 {j:"pilih",t:"Awak mencadangkan kempen mengurangkan jejak ekologi di sekolah. Idea paling berkesan?",p:["Kurangkan sisa dan elektrik","Cetak lebih banyak kertas setiap minggu","Guna plastik sekali guna","Biarkan lampu menyala"],b:0,u:"Menjaga Bumi lebih penting daripada mencari planet baharu."},
 {j:"pilih",t:"Awak mereka kalendar untuk penduduk Marikh. Perkara paling penting diambil kira?",p:["Setahun Marikh hampir 2 tahun Bumi","Marikh tiada siang dan malam","Setahun Marikh sama dengan Bumi","Marikh tidak mengelilingi Matahari"],b:0,u:"Tempoh orbit Marikh kira-kira 1.9 tahun Bumi."},
 {j:"pilih",t:"Awak mereka alat untuk menunjukkan mengapa planet jauh lebih sejuk. Demonstrasi paling berkesan?",p:["Ukur suhu pada jarak berbeza","Warnakan bola dengan cat berbeza","Timbang bola pelbagai saiz","Pusingkan bola dalam gelap"],b:0,u:"Tenaga yang diterima berkurang apabila jarak dari sumber bertambah."},
 {j:"pilih",t:"Bagaimanakah awak menilai model Sistem Suria rekaan awak?",p:["Semak nisbah dengan data sebenar","Tanya rakan sama ada model itu berwarna-warni","Timbang model dengan penimbang","Kira bilangan cat yang digunakan"],b:0,u:"Ketepatan skala ialah ukuran kualiti model sains."}],
 bos:{j:"buka",
  t:"Pusat sains negara mahu sebuah pameran interaktif yang menunjukkan mengapa Bumi ialah planet paling sesuai untuk hidupan. Reka pameran itu.",
  arahan:"Terangkan reka bentuk pameran, data planet yang digunakan (jarak, suhu, atmosfera, graviti atau ketumpatan), cara pelawat berinteraksi, cara menunjukkan skala jarak atau saiz dengan jelas, cara mengukur kefahaman pelawat, serta kos dan mesej tentang kehidupan lestari.",
  u:"Jawapan TP6 yang kukuh menggunakan data planet dengan betul untuk membanding dengan Bumi, menunjukkan skala secara kreatif, dan mengaitkan pameran dengan kelestarian Bumi."}}
];

module.exports = {
  id:"t2b12", tingkatan:2, kod:"12.0 Sistem Suria",
  tajuk:"Laluan Planet",
  subtajuk:"Sains Ting. 2 · Bab 12 Sistem Suria",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali susunan planet, unit a.u. dan tahun cahaya serta ciri Bumi yang sesuai untuk hidupan. Langkah seterusnya ialah menjelaskan hubungan antara ciri planet.",
   2:"{n} memahami hubungan antara ciri planet dan dapat menjelaskan situasi hipotetikal dalam Sistem Suria. Perlu lebih banyak latihan menukar unit jarak.",
   3:"{n} boleh menukar jarak dalam a.u. kepada kilometer dan mengira masa perjalanan cahaya. Galakkan menunjukkan langkah pengiraan.",
   4:"{n} mampu menganalisis data planet untuk mengenal pasti corak dan anomali seperti Zuhrah dan Zuhal. Seterusnya latih menilai kesesuaian planet untuk penerokaan.",
   5:"{n} dapat menilai lokasi penerokaan berdasarkan data dan membuat keputusan yang wajar. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta pameran atau rekaan Sistem Suria yang tepat, kreatif dan bermakna. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sistem Suria. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ suhuplanet:R_SUHUPLANET, tempohorbit:R_ORBIT, jarak:T_JARAK, ciri:T_CIRI, koloni:T_KOLONI },
  aras:ARAS
};
