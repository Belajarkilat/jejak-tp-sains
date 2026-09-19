/* Bank soalan — Sains Ting. 2 · Bab 7 Keelektrikan dan Kemagnetan.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/t2b7.js
   kemudian jalankan: node bina.js t2b7

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["t2b7"] =
{
 "id": "t2b7",
 "tingkatan": 2,
 "kod": "7.0 Keelektrikan dan Kemagnetan",
 "tajuk": "Laluan Elektro",
 "subtajuk": "Sains Ting. 2 · Bab 7 Keelektrikan dan Kemagnetan",
 "spi": [
  "Mengingat kembali pengetahuan dan kemahiran sains mengenai keelektrikan dan kemagnetan.",
  "Memahami keelektrikan dan kemagnetan dan dapat menjelaskan kefahaman tersebut.",
  "Mengaplikasikan pengetahuan mengenai keelektrikan dan kemagnetan dan dapat melaksanakan tugasan mudah.",
  "Menganalisis pengetahuan mengenai keelektrikan dan kemagnetan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
  "Menilai pengetahuan mengenai keelektrikan dan kemagnetan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
  "Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai keelektrikan dan kemagnetan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."
 ],
 "kko": [
  "Mengingat",
  "Memahami",
  "Mengaplikasi",
  "Menganalisis",
  "Menilai",
  "Mereka cipta"
 ],
 "ulasan": {
  "1": "{n} dapat mengingat kembali cas elektrostatik, unit arus, voltan dan rintangan serta ciri magnet. Langkah seterusnya ialah menjelaskan litar bersiri dan selari.",
  "2": "{n} memahami elektrostatik, litar bersiri dan selari serta elektromagnet dan dapat menjelaskannya. Perlu lebih banyak latihan menggunakan Hukum Ohm.",
  "3": "{n} boleh menggunakan Hukum Ohm untuk mengira arus, voltan dan rintangan dalam litar bersiri dan selari. Galakkan menulis unit dalam setiap langkah.",
  "4": "{n} mampu menganalisis data eksperimen untuk menentukan faktor yang mempengaruhi kekuatan elektromagnet. Seterusnya latih menilai reka bentuk litar.",
  "5": "{n} dapat menilai reka bentuk litar berdasarkan kos, keselamatan dan kebolehpercayaan. Sudah bersedia untuk tugasan reka cipta.",
  "6": "{n} berjaya mereka cipta sistem elektrik atau elektromagnet yang selamat dan praktikal. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Keelektrikan dan Kemagnetan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "litar": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Litar</th><th>Susunan</th><th class=\"n\">Voltan bateri (V)</th><th class=\"n\">Rintangan setiap mentol (&Omega;)</th></tr></thead><tbody><tr><td>X</td><td>Dua mentol secara bersiri</td><td class=\"n\">6</td><td class=\"n\">6</td></tr><tr><td>Y</td><td>Dua mentol secara selari</td><td class=\"n\">6</td><td class=\"n\">6</td></tr></tbody></table></div><p class=\"qnote\">Hukum Ohm: V = IR. Dalam litar bersiri, jumlah rintangan ialah hasil tambah rintangan. Dalam litar selari, voltan merentasi setiap cabang sama dengan voltan bateri. Abaikan rintangan dawai dan bateri.</p>",
  "elektro": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Ujian</th><th class=\"n\">Bilangan lilitan</th><th class=\"n\">Arus (A)</th><th>Teras</th><th class=\"n\">Klip kertas diangkat</th></tr></thead><tbody><tr><td>1</td><td class=\"n\">20</td><td class=\"n\">1</td><td>Besi lembut</td><td class=\"n\">5</td></tr><tr><td>2</td><td class=\"n\">40</td><td class=\"n\">1</td><td>Besi lembut</td><td class=\"n\">11</td></tr><tr><td>3</td><td class=\"n\">40</td><td class=\"n\">2</td><td>Besi lembut</td><td class=\"n\">20</td></tr><tr><td>4</td><td class=\"n\">40</td><td class=\"n\">2</td><td>Tiada (udara)</td><td class=\"n\">2</td></tr></tbody></table></div><p class=\"qnote\">Elektromagnet ringkas dibina daripada dawai kuprum bertebat yang dililit. Data rekaan.</p>",
  "lampu": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Reka bentuk</th><th>Susunan 60 mentol LED</th><th>Jika satu mentol rosak</th><th class=\"n\">Kos (RM)</th></tr></thead><tbody><tr><td>P</td><td>Semua bersiri</td><td>Semua padam</td><td class=\"n\">15</td></tr><tr><td>Q</td><td>Semua selari</td><td>Yang lain terus menyala</td><td class=\"n\">40</td></tr><tr><td>R</td><td>6 cabang selari, 10 mentol bersiri setiap cabang</td><td>Hanya 10 mentol dalam cabang itu padam</td><td class=\"n\">25</td></tr></tbody></table></div><p class=\"qnote\">Tiga reka bentuk lampu hiasan perayaan. Kos rekaan.</p>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Bilik Kawalan Elektrik",
   "sk": "7.1 / 7.3 Cas, arus dan magnet",
   "lampiran": null,
   "kadNama": "Kilat",
   "kadEm": "⚡",
   "kadFakta": "Kilat ialah nyahcas elektrostatik yang sangat besar antara awan dengan Bumi atau antara awan.",
   "bosKadNama": "Kompas",
   "bosKadEm": "🧭",
   "bosKadFakta": "Jarum kompas ialah magnet kecil yang menunjuk ke arah utara kerana Bumi sendiri bertindak seperti magnet besar.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Unit S.I. bagi arus elektrik ialah:",
     "p": [
      "Ampere (A)",
      "Volt (V)",
      "Ohm (Ω)",
      "Watt (W)"
     ],
     "b": 0,
     "u": "Arus diukur dengan ammeter."
    },
    {
     "j": "pilih",
     "t": "Unit S.I. bagi rintangan ialah:",
     "p": [
      "Ampere (A)",
      "Ohm (Ω)",
      "Volt (V)",
      "Joule (J)"
     ],
     "b": 1,
     "u": "Rintangan menghalang pengaliran arus."
    },
    {
     "j": "pilih",
     "t": "Alat untuk mengukur voltan ialah:",
     "p": [
      "Ammeter",
      "Galvanometer",
      "Voltmeter",
      "Termometer"
     ],
     "b": 2,
     "u": "Voltmeter disambung secara selari dengan komponen."
    },
    {
     "j": "pilih",
     "t": "Dua cas yang sama jenis akan:",
     "p": [
      "Menarik antara satu sama lain",
      "Tidak bertindak balas",
      "Menjadi neutral",
      "Menolak antara satu sama lain"
     ],
     "b": 3,
     "u": "Cas berlainan jenis saling menarik."
    },
    {
     "j": "pilih",
     "t": "Rod politena digosok dengan kain bulu menjadi bercas negatif kerana:",
     "p": [
      "Elektron berpindah dari kain ke rod",
      "Proton berpindah dari rod ke kain",
      "Rod menghasilkan elektron baharu",
      "Kain menyerap semua cas"
     ],
     "b": 0,
     "u": "Hanya elektron yang berpindah semasa geseran."
    },
    {
     "j": "pilih",
     "t": "Kutub utara magnet didekatkan dengan kutub utara magnet lain. Apakah yang berlaku?",
     "p": [
      "Menarik",
      "Menolak",
      "Tiada kesan",
      "Berputar"
     ],
     "b": 1,
     "u": "Kutub sama menolak, kutub berlainan menarik."
    },
    {
     "j": "pilih",
     "t": "Garisan medan magnet paling rapat di:",
     "p": [
      "Tengah magnet",
      "Jauh dari magnet",
      "Kutub magnet",
      "Sisi magnet"
     ],
     "b": 2,
     "u": "Medan magnet paling kuat di kutub."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA kegunaan elektromagnet.",
     "p": [
      "Loceng elektrik",
      "Kren pengangkat besi buruk",
      "Kunci pintu elektrik",
      "Kompas pengakap",
      "Magnet peti sejuk"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Kompas dan magnet peti sejuk menggunakan magnet kekal."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Hukum Ohm menyatakan bahawa:",
    "p": [
     "V = I + R",
     "I = VR",
     "R = V + I",
     "V = IR"
    ],
    "b": 3,
    "u": "Voltan = arus × rintangan."
   }
  },
  {
   "n": 2,
   "tempat": "Rumah Pintar",
   "sk": "7.1 / 7.2 / 7.3 Elektrostatik, litar dan elektromagnet",
   "lampiran": null,
   "kadNama": "Sangkar Faraday",
   "kadEm": "🚗",
   "kadFakta": "Kereta berbumbung logam melindungi penumpang semasa ribut petir kerana cas mengalir di permukaan luar kereta.",
   "bosKadNama": "Solenoid",
   "bosKadEm": "🌀",
   "bosKadFakta": "Solenoid ialah gegelung dawai yang menghasilkan medan magnet seperti magnet bar apabila arus mengalir.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Mengapakah pendawaian rumah menggunakan litar selari?",
     "p": [
      "Setiap alat boleh dihidupkan secara berasingan",
      "Lebih sedikit dawai diperlukan untuk seluruh rumah",
      "Semua alat akan padam serentak jika satu rosak",
      "Voltan setiap alat menjadi lebih rendah"
     ],
     "b": 0,
     "u": "Setiap alat juga menerima voltan penuh."
    },
    {
     "j": "pilih",
     "t": "Dalam litar bersiri, jika satu mentol terbakar, mentol lain akan:",
     "p": [
      "Menyala lebih terang",
      "Padam",
      "Menyala seperti biasa",
      "Berkelip-kelip"
     ],
     "b": 1,
     "u": "Litar bersiri hanya mempunyai satu laluan arus."
    },
    {
     "j": "pilih",
     "t": "Mengapakah pakaian daripada kain sintetik lebih kerap 'memercik' pada cuaca kering?",
     "p": [
      "Ia mengkonduksi elektrik dengan sangat baik",
      "Ia mengandungi dawai logam halus",
      "Ia mudah mengumpul cas statik",
      "Ia menyerap lembapan dengan cepat"
     ],
     "b": 2,
     "u": "Udara kering menghalang cas daripada bocor."
    },
    {
     "j": "pilih",
     "t": "Mengapakah pekerja stesen minyak menasihatkan jangan masuk semula ke kereta semasa mengisi petrol?",
     "p": [
      "Petrol akan menjadi lebih mahal",
      "Kereta akan bergerak sendiri",
      "Pam petrol akan berhenti berfungsi",
      "Cas statik boleh menghasilkan percikan"
     ],
     "b": 3,
     "u": "Percikan api boleh menyalakan wap petrol."
    },
    {
     "j": "pilih",
     "t": "Semasa ribut petir di padang terbuka, tindakan paling selamat ialah:",
     "p": [
      "Masuk ke dalam kereta atau bangunan",
      "Berlindung di bawah pokok tinggi",
      "Berdiri di tengah padang",
      "Memegang payung logam tinggi"
     ],
     "b": 0,
     "u": "Objek tinggi seperti pokok lebih mudah dipanah petir."
    },
    {
     "j": "pilih",
     "t": "Bagaimanakah kekuatan elektromagnet boleh ditambah?",
     "p": [
      "Guna dawai plastik",
      "Tambah bilangan lilitan",
      "Kurangkan arus",
      "Keluarkan teras besi"
     ],
     "b": 1,
     "u": "Arus yang lebih besar dan teras besi lembut juga menguatkannya."
    },
    {
     "j": "pilih",
     "t": "Mengapakah besi lembut digunakan sebagai teras elektromagnet?",
     "p": [
      "Ia bahan paling murah yang ada",
      "Ia tidak dapat dimagnetkan sama sekali",
      "Kemagnetannya mudah hilang apabila arus dimatikan",
      "Ia mengkonduksi elektrik lebih baik daripada kuprum"
     ],
     "b": 2,
     "u": "Elektromagnet perlu 'dimatikan', contohnya kren melepaskan besi buruk."
    },
    {
     "j": "pilih",
     "t": "Dalam litar selari, voltan merentasi setiap cabang adalah:",
     "p": [
      "Dibahagi dua",
      "Sifar",
      "Dua kali ganda",
      "Sama"
     ],
     "b": 3,
     "u": "Arus pula dibahagi antara cabang."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BETUL tentang litar bersiri.",
    "p": [
     "Arus sama di semua titik",
     "Jumlah rintangan ialah hasil tambah rintangan",
     "Satu laluan sahaja untuk arus",
     "Voltan sama merentasi setiap mentol walaupun rintangan berbeza",
     "Mentol lain menyala jika satu terbakar"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Dalam litar bersiri, voltan dibahagi mengikut rintangan."
   }
  },
  {
   "n": 3,
   "tempat": "Makmal Litar",
   "sk": "7.1 / 7.2 Mengaplikasi Hukum Ohm",
   "lampiran": "litar",
   "kadNama": "Ammeter",
   "kadEm": "📟",
   "kadFakta": "Ammeter disambung secara bersiri supaya semua arus melaluinya.",
   "bosKadNama": "Hukum Ohm",
   "bosKadEm": "📐",
   "bosKadFakta": "Georg Ohm, ahli fizik Jerman, menunjukkan bahawa arus berkadar terus dengan voltan jika rintangan tetap.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Berapakah jumlah rintangan dalam litar X, dalam ohm?",
     "b": 12,
     "tol": 0.05,
     "suf": "Ω",
     "u": "6 + 6 = 12 Ω."
    },
    {
     "j": "nombor",
     "t": "Berapakah arus yang mengalir dalam litar X, dalam ampere?",
     "b": 0.5,
     "tol": 0.01,
     "suf": "A",
     "u": "I = V ÷ R = 6 ÷ 12 = 0.5 A."
    },
    {
     "j": "nombor",
     "t": "Berapakah voltan merentasi satu mentol dalam litar X, dalam volt?",
     "b": 3,
     "tol": 0.05,
     "suf": "V",
     "u": "V = IR = 0.5 × 6 = 3 V. Voltan bateri dibahagi dua."
    },
    {
     "j": "nombor",
     "t": "Berapakah arus yang mengalir melalui satu mentol dalam litar Y, dalam ampere?",
     "b": 1,
     "tol": 0.01,
     "suf": "A",
     "u": "Setiap mentol mendapat 6 V: I = 6 ÷ 6 = 1 A."
    },
    {
     "j": "nombor",
     "t": "Berapakah jumlah arus dari bateri dalam litar Y, dalam ampere?",
     "b": 2,
     "tol": 0.01,
     "suf": "A",
     "u": "1 A + 1 A = 2 A."
    },
    {
     "j": "pilih",
     "t": "Mentol dalam litar manakah menyala lebih terang?",
     "p": [
      "Y",
      "X",
      "Sama terang",
      "Tidak menyala"
     ],
     "b": 0,
     "u": "Setiap mentol dalam Y menerima 6 V dan 1 A."
    },
    {
     "j": "pilih",
     "t": "Bagaimanakah ammeter patut disambung untuk mengukur arus dalam litar X?",
     "p": [
      "Secara selari",
      "Secara bersiri",
      "Merentasi bateri",
      "Tanpa sambungan"
     ],
     "b": 1,
     "u": "Semua arus mesti melalui ammeter."
    },
    {
     "j": "pilih",
     "t": "Satu mentol dalam litar Y dicabut. Apakah yang berlaku kepada mentol yang tinggal?",
     "p": [
      "Padam serta-merta",
      "Menjadi dua kali lebih terang",
      "Terus menyala seperti biasa",
      "Menjadi malap"
     ],
     "b": 2,
     "u": "Cabang lain masih menerima 6 V."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah perintang 10 Ω disambung kepada bateri 3 V. Berapakah arusnya, dalam ampere?",
    "b": 0.3,
    "tol": 0.01,
    "suf": "A",
    "u": "I = 3 ÷ 10 = 0.3 A."
   }
  },
  {
   "n": 4,
   "tempat": "Bengkel Elektromagnet",
   "sk": "7.3 Menganalisis kekuatan elektromagnet",
   "lampiran": "elektro",
   "kadNama": "Kren Magnet",
   "kadEm": "🏗",
   "kadFakta": "Kren elektromagnet di tempat besi buruk boleh mengangkat berat bertan-tan dan melepaskannya dengan hanya memutuskan arus.",
   "bosKadNama": "Loceng Elektrik",
   "bosKadEm": "🔔",
   "bosKadFakta": "Loceng elektrik berbunyi kerana elektromagnetnya menarik dan melepaskan pemukul berulang kali dengan cepat.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Bandingkan ujian 1 dan 2. Faktor yang diuji ialah:",
     "p": [
      "Arus",
      "Jenis teras",
      "Jenis dawai",
      "Bilangan lilitan"
     ],
     "b": 3,
     "u": "Hanya bilangan lilitan berbeza."
    },
    {
     "j": "pilih",
     "t": "Bandingkan ujian 2 dan 3. Kesimpulan paling tepat?",
     "p": [
      "Arus lebih besar menguatkan elektromagnet",
      "Arus lebih besar melemahkan elektromagnet",
      "Arus tidak memberi kesan",
      "Lilitan lebih sedikit menguatkan elektromagnet"
     ],
     "b": 0,
     "u": "Klip diangkat bertambah dari 11 kepada 20."
    },
    {
     "j": "pilih",
     "t": "Bandingkan ujian 3 dan 4. Apakah peranan teras besi lembut?",
     "p": [
      "Melemahkan medan magnet",
      "Menguatkan medan magnet",
      "Mengurangkan arus",
      "Menebat dawai"
     ],
     "b": 1,
     "u": "Tanpa teras, hanya 2 klip diangkat."
    },
    {
     "j": "nombor",
     "t": "Berapakah pertambahan klip yang diangkat apabila arus digandakan dari ujian 2 ke ujian 3?",
     "b": 9,
     "tol": 0.05,
     "suf": "klip",
     "u": "20 − 11 = 9 klip."
    },
    {
     "j": "pilih",
     "t": "Ramalkan klip yang diangkat jika 80 lilitan, 2 A dan teras besi lembut digunakan.",
     "p": [
      "Kurang daripada 5",
      "Tepat 11",
      "Lebih daripada 20",
      "Tiada klip"
     ],
     "b": 2,
     "u": "Lilitan dan arus kedua-duanya meningkatkan kekuatan."
    },
    {
     "j": "pilih",
     "t": "Mengapakah dawai yang digunakan mesti bertebat?",
     "p": [
      "Supaya dawai menjadi lebih berat",
      "Supaya dawai tidak berkarat langsung",
      "Supaya elektromagnet menjadi kekal",
      "Supaya arus melalui setiap lilitan"
     ],
     "b": 3,
     "u": "Tanpa penebat, arus mengambil jalan pintas antara lilitan yang bersentuhan."
    },
    {
     "j": "pilih",
     "t": "Ujian 4 masih mengangkat 2 klip walaupun tanpa teras. Ini menunjukkan:",
     "p": [
      "Gegelung berarus juga bermagnet",
      "Klip kertas bercas elektrostatik",
      "Udara ialah magnet kekal",
      "Besi lembut masih ada di dalam gegelung"
     ],
     "b": 0,
     "u": "Arus dalam solenoid menghasilkan medan magnet walaupun tanpa teras."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA kesimpulan yang disokong oleh data.",
     "p": [
      "Lebih banyak lilitan, elektromagnet lebih kuat",
      "Arus lebih besar, elektromagnet lebih kuat",
      "Teras besi lembut menguatkan elektromagnet",
      "Teras udara lebih baik daripada besi lembut",
      "Arus tidak mempengaruhi kekuatan"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Ujian 4 dengan teras udara paling lemah."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Seorang murid menambah arus kepada 10 A untuk elektromagnet paling kuat. Nilaikan tindakan itu.",
    "p": [
     "Selamat, kerana arus tinggi sentiasa lebih baik",
     "Berisiko; dawai boleh menjadi terlalu panas",
     "Tidak memberi kesan kepada kekuatan",
     "Akan melemahkan elektromagnet itu"
    ],
    "b": 1,
    "u": "Arus besar memanaskan dawai dan boleh merosakkan penebat atau bateri."
   }
  },
  {
   "n": 5,
   "tempat": "Pasar Malam Perayaan",
   "sk": "7.2 Menilai reka bentuk litar",
   "lampiran": "lampu",
   "kadNama": "Lampu LED",
   "kadEm": "💡",
   "kadFakta": "Mentol LED menggunakan jauh lebih sedikit tenaga elektrik berbanding mentol berfilamen untuk kecerahan yang sama.",
   "bosKadNama": "Fius",
   "bosKadEm": "🧯",
   "bosKadFakta": "Fius mengandungi dawai halus yang lebur apabila arus terlalu besar, lalu memutuskan litar.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Reka bentuk manakah paling murah?",
     "p": [
      "Q",
      "R",
      "P",
      "Semua sama"
     ],
     "b": 2,
     "u": "RM15."
    },
    {
     "j": "pilih",
     "t": "Reka bentuk manakah paling mudah dibaiki jika satu mentol rosak?",
     "p": [
      "P",
      "R",
      "Semua sama",
      "Q"
     ],
     "b": 3,
     "u": "Hanya mentol yang rosak padam."
    },
    {
     "j": "pilih",
     "t": "Kelemahan utama reka bentuk P ialah:",
     "p": [
      "Satu mentol rosak, semuanya padam",
      "Kosnya paling tinggi",
      "Terlalu banyak dawai digunakan",
      "Mentol terlalu terang"
     ],
     "b": 0,
     "u": "Mencari satu mentol rosak antara 60 memakan masa."
    },
    {
     "j": "pilih",
     "t": "Mengapakah reka bentuk R dianggap kompromi yang baik?",
     "p": [
      "Paling murah antara ketiga-tiga reka bentuk",
      "Murah dan hanya sebahagian padam",
      "Tiada mentol akan padam langsung",
      "Semua mentol bersiri seperti P"
     ],
     "b": 1,
     "u": "RM25 berbanding RM40, dan hanya 10 mentol terjejas."
    },
    {
     "j": "pilih",
     "t": "Peniaga mahu lampu yang tahan lama untuk dipasang sepanjang bulan perayaan tanpa pemantauan. Pilihan paling wajar?",
     "p": [
      "P",
      "R",
      "Q",
      "Tiada lampu"
     ],
     "b": 2,
     "u": "Jika mentol rosak, yang lain tetap menyala."
    },
    {
     "j": "pilih",
     "t": "Pelajar mahu hiasan untuk pameran sehari sahaja dengan bajet paling rendah. Pilihan paling wajar?",
     "p": [
      "Q",
      "R",
      "Tiada lampu",
      "P"
     ],
     "b": 3,
     "u": "Risiko rosak dalam sehari rendah, dan kosnya paling murah."
    },
    {
     "j": "pilih",
     "t": "Seorang peniaga mahu menyambung 20 set lampu Q pada satu soket menggunakan penyambung berganda. Nilaikan tindakan itu.",
     "p": [
      "Berbahaya; arus berlebihan boleh memanaskan dawai",
      "Selamat, kerana lampu LED tidak menggunakan elektrik",
      "Selamat, kerana litar selari tiada had",
      "Tiada kesan kerana voltan tetap sama"
     ],
     "b": 0,
     "u": "Jumlah arus dalam litar selari bertambah dengan setiap beban."
    },
    {
     "j": "pilih",
     "t": "Mengapakah fius dipasang dalam palam lampu hiasan?",
     "p": [
      "Menambah kecerahan semua lampu hiasan",
      "Putuskan litar jika arus berlebihan",
      "Menukar arus kepada voltan",
      "Menyimpan tenaga elektrik"
     ],
     "b": 1,
     "u": "Fius mencegah dawai terlalu panas dan kebakaran."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Masjid kampung mahu memasang lampu hiasan di menara yang sukar dicapai untuk dibaiki. Pilihan paling wajar?",
    "p": [
     "P, kerana kosnya paling murah",
     "R, kerana dawainya paling sedikit",
     "Q, mentol lain tetap menyala",
     "P, kerana semua mentol mudah dilihat"
    ],
    "b": 2,
    "u": "Kos lebih tinggi berbaloi jika pembaikan sukar dan mahal."
   }
  },
  {
   "n": 6,
   "tempat": "Makmal Inovasi Elektrik",
   "sk": "7.1 / 7.2 / 7.3 Mereka cipta menggunakan elektrik dan magnet",
   "lampiran": null,
   "kadNama": "Van de Graaff",
   "kadEm": "🧑‍🔬",
   "kadFakta": "Penjana Van de Graaff mengumpul cas yang sangat banyak sehingga rambut orang yang menyentuhnya berdiri.",
   "bosKadNama": "Kereta Api Maglev",
   "bosKadEm": "🚄",
   "bosKadFakta": "Kereta api maglev terapung di atas landasan menggunakan daya magnet, jadi hampir tiada geseran.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Awak mereka penggera pintu ringkas menggunakan loceng dan bateri. Susunan paling berkesan?",
     "p": [
      "Loceng disambung terus tanpa suis",
      "Dua bateri disambung ke loceng tanpa dawai",
      "Suis yang sentiasa terbuka",
      "Suis yang menutup litar bila pintu dibuka"
     ],
     "b": 3,
     "u": "Litar lengkap hanya apabila pintu dibuka."
    },
    {
     "j": "pilih",
     "t": "Awak mereka alat pengasing sampah logam untuk pusat kitar semula sekolah. Komponen utama?",
     "p": [
      "Elektromagnet pada tali sawat",
      "Magnet kekal yang tidak boleh dimatikan",
      "Kipas angin yang kuat",
      "Penapis air"
     ],
     "b": 0,
     "u": "Elektromagnet boleh dimatikan untuk melepaskan tin besi ke dalam tong."
    },
    {
     "j": "pilih",
     "t": "Awak mereka lampu tidur untuk adik dengan dua mentol yang boleh dihidupkan berasingan. Susunan paling sesuai?",
     "p": [
      "Dua mentol bersiri dengan satu suis",
      "Mentol selari, setiap satu bersuis",
      "Satu mentol tanpa suis",
      "Dua mentol bersiri tanpa suis"
     ],
     "b": 1,
     "u": "Litar selari membolehkan setiap mentol dikawal berasingan."
    },
    {
     "j": "pilih",
     "t": "Kelas awak sering mengalami kejutan elektrik statik apabila menyentuh tombol pintu. Cadangan paling praktikal?",
     "p": [
      "Pakai lebih banyak pakaian sintetik",
      "Keringkan udara dengan pendingin hawa",
      "Sentuh dinding dahulu untuk menyahcas",
      "Gosok kasut pada karpet sebelum masuk"
     ],
     "b": 2,
     "u": "Menyentuh objek yang dibumikan membenarkan cas mengalir keluar perlahan."
    },
    {
     "j": "pilih",
     "t": "Awak mereka kompas kecemasan daripada jarum jahit. Langkah yang betul?",
     "p": [
      "Panaskan jarum dengan api lilin sehingga merah",
      "Ketuk jarum berulang kali dengan tukul besi",
      "Rendam jarum dalam air garam semalaman",
      "Gosok dengan magnet sehala, lalu apungkan"
     ],
     "b": 3,
     "u": "Jarum yang dimagnetkan menunjuk arah utara-selatan apabila terapung."
    },
    {
     "j": "pilih",
     "t": "Awak mencadangkan cara menjimatkan bil elektrik sekolah. Cadangan paling berkesan?",
     "p": [
      "Tukar mentol lama kepada LED",
      "Pasang lebih banyak mentol",
      "Biarkan kipas hidup",
      "Guna penyambung berganda"
     ],
     "b": 0,
     "u": "LED menggunakan kurang tenaga untuk kecerahan yang sama."
    },
    {
     "j": "pilih",
     "t": "Awak mereka pengangkat magnet untuk mengutip paku di tapak pembinaan. Cara paling berkesan untuk menambah kekuatannya?",
     "p": [
      "Guna dawai plastik tanpa kuprum langsung",
      "Tambah lilitan dan guna teras besi lembut",
      "Keluarkan teras besi supaya ringan",
      "Kurangkan bilangan bateri"
     ],
     "b": 1,
     "u": "Bilangan lilitan dan teras besi lembut menguatkan elektromagnet."
    },
    {
     "j": "pilih",
     "t": "Bagaimanakah awak menguji keberkesanan elektromagnet rekaan awak secara adil?",
     "p": [
      "Angkat objek berbeza setiap kali",
      "Uji sekali sahaja dan terus buat kesimpulan",
      "Guna arus dan klip yang sama",
      "Tanya rakan sama ada ia kelihatan kuat"
     ],
     "b": 2,
     "u": "Hanya satu pemboleh ubah diubah pada satu masa."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Sebuah surau di kampung awak mahu sistem lampu dan loceng yang menjimatkan elektrik dan selamat. Reka satu sistem menggunakan pengetahuan litar elektrik dan elektromagnet.",
    "arahan": "Lakarkan atau terangkan susunan litar (bersiri atau selari) dan sebabnya, komponen keselamatan seperti fius dan suis, cara elektromagnet digunakan (contohnya loceng), pengiraan mudah menggunakan V = IR, serta kos dan keselesaan jemaah.",
    "u": "Jawapan TP6 yang kukuh memilih litar selari untuk kawalan berasingan, menggunakan fius dan Hukum Ohm dengan betul, dan mengambil kira kos serta keselamatan."
   }
  }
 ]
};
