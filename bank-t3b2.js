/* Bank soalan — Sains KSSM Tingkatan 3, Bidang 2.0 Respirasi.
   Fail ini kandungan sahaja. Aplikasi tidak tahu apa-apa tentang respirasi;
   ia hanya memainkan apa yang didaftarkan di sini. Untuk menambah bab baharu,
   salin fail ini, tukar id dan isinya, dan muatkan bersama halaman.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains Tingkatan 3
   terbitan Bahagian Pembangunan Kurikulum, April 2017.

   Bentuk soalan:
     j:"pilih"  satu jawapan betul, b = indeks
     j:"banyak" beberapa jawapan betul, b = senarai indeks
     j:"susun"  urutan betul, b = senarai indeks mengikut turutan
     j:"nombor" jawapan berangka, b = nilai, tol = toleransi
     j:"buka"   tugasan bertulis, dinilai guru, tiada jawapan mesin
*/
window.BANK = window.BANK || {};
window.BANK["t3b2"] =
{
 "id": "t3b2",
 "tingkatan": 3,
 "kod": "2.0 Respirasi",
 "tajuk": "Laluan Oksigen",
 "subtajuk": "Sains Ting. 3 · Bab 2 Respirasi",
 "jenama": {
  "ikon": "🫁",
  "ringkas": "Laluan Oksigen"
 },
 "spi": [
  "Mengingat kembali pengetahuan dan kemahiran sains mengenai respirasi.",
  "Memahami respirasi serta dapat menjelaskan kefahaman tersebut.",
  "Mengaplikasikan pengetahuan mengenai respirasi untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
  "Menganalisis pengetahuan mengenai respirasi dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
  "Menilai pengetahuan mengenai respirasi dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
  "Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai respirasi dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."
 ],
 "kko": [
  "Mengingat",
  "Memahami",
  "Mengaplikasi",
  "Menganalisis",
  "Menilai",
  "Mereka cipta"
 ],
 "lampiran": {
  "gas": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Gas</th><th class=\"n\">Disedut (%)</th><th class=\"n\">Dihembus (%)</th></tr></thead><tbody><tr><td>Nitrogen</td><td class=\"n\">78.0</td><td class=\"n\">78.0</td></tr><tr><td>Oksigen</td><td class=\"n\">21.0</td><td class=\"n\">16.0</td></tr><tr><td>Karbon dioksida</td><td class=\"n\">0.04</td><td class=\"n\">4.0</td></tr><tr><td>Wap air</td><td class=\"n\">sedikit</td><td class=\"n\">tepu</td></tr></tbody></table></div>",
  "klinik": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Individu</th><th class=\"n\">Kapasiti vital (L)</th><th class=\"n\">Nafas rehat (min&#8315;&#185;)</th><th class=\"n\">PEFR (L min&#8315;&#185;)</th><th>Latar</th></tr></thead><tbody><tr><td>En. Fauzi, 45</td><td class=\"n\">2.6</td><td class=\"n\">22</td><td class=\"n\">290</td><td>Merokok 20 tahun</td></tr><tr><td>Mei Ling, 16</td><td class=\"n\">4.1</td><td class=\"n\">14</td><td class=\"n\">480</td><td>Atlet olahraga</td></tr><tr><td>Suriani, 15</td><td class=\"n\">3.0</td><td class=\"n\">18</td><td class=\"n\">340</td><td>Asma terkawal</td></tr></tbody></table></div><p class=\"qnote\">Julat sihat: kapasiti vital 3.5&ndash;4.8 L &middot; nafas rehat 12&ndash;18 &middot; PEFR 400&ndash;550.</p>",
  "tekanan": "<figure class=\"figure\"><svg viewBox=\"0 0 560 240\" role=\"img\" aria-label=\"Graf isi padu rongga toraks dan tekanan udara peparu melawan masa\"><rect x=\"52\" y=\"16\" width=\"122.5\" height=\"186\" fill=\"var(--arteri-soft)\"></rect><text x=\"113.25\" y=\"30\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\">FASA P</text><line x1=\"52\" y1=\"16\" x2=\"542\" y2=\"16\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"52\" y1=\"62.5\" x2=\"542\" y2=\"62.5\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"52\" y1=\"109\" x2=\"542\" y2=\"109\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"52\" y1=\"155.5\" x2=\"542\" y2=\"155.5\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"52\" y1=\"202\" x2=\"542\" y2=\"202\" stroke=\"var(--line)\" stroke-width=\"1\"></line><path d=\"M52.0 155.5 L113.3 97.4 L174.5 39.3 L235.8 27.6 L297.0 85.8 L358.3 143.9 L419.5 155.5 L480.8 97.4 L542.0 39.3 \" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\"></path><path d=\"M52.0 71.8 L113.3 127.6 L174.5 174.1 L235.8 155.5 L297.0 90.4 L358.3 34.6 L419.5 62.5 L480.8 118.3 L542.0 164.8 \" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\" stroke-linejoin=\"round\"></path><line x1=\"52\" y1=\"202\" x2=\"542\" y2=\"202\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"52\" y1=\"16\" x2=\"52\" y2=\"202\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><text x=\"45\" y=\"206\" text-anchor=\"end\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">2.0</text><text x=\"45\" y=\"159.5\" text-anchor=\"end\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">2.4</text><text x=\"45\" y=\"113.00000000000003\" text-anchor=\"end\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">2.8</text><text x=\"45\" y=\"66.49999999999997\" text-anchor=\"end\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">3.2</text><text x=\"45\" y=\"20\" text-anchor=\"end\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">3.6</text><text x=\"52\" y=\"219\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">0</text><text x=\"174.5\" y=\"219\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">2</text><text x=\"297\" y=\"219\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">4</text><text x=\"419.5\" y=\"219\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">6</text><text x=\"542\" y=\"219\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">8</text><text x=\"280\" y=\"235\" text-anchor=\"middle\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Masa (saat)</text><line x1=\"384\" y1=\"170\" x2=\"410\" y2=\"170\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><text x=\"416\" y=\"174\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Isi padu toraks (L)</text><line x1=\"384\" y1=\"189\" x2=\"410\" y2=\"189\" stroke=\"var(--arteri)\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"></line><text x=\"416\" y=\"193\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Tekanan peparu (kPa)</text></svg><figcaption>Rajah 1 &middot; Satu kitaran pernafasan semasa rehat.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Hidung & Trakea",
   "sk": "2.1 Sistem respirasi",
   "lampiran": null,
   "kadNama": "Silia",
   "kadEm": "🧹",
   "kadFakta": "Silia berdegup ke atas kira-kira 1000 kali seminit untuk menyapu mukus keluar dari salur udara.",
   "bosKadNama": "Gelang Rawan",
   "bosKadEm": "🦴",
   "bosKadFakta": "Trakea manusia ada 16 hingga 20 gelang rawan berbentuk C yang tak pernah membenarkannya kemek.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Salur udara yang disokong gelang rawan berbentuk C ialah:",
     "p": [
      "Trakea",
      "Esofagus",
      "Alveolus",
      "Diafragma"
     ],
     "b": 0,
     "u": "Gelang rawan menahan trakea daripada kemek."
    },
    {
     "j": "susun",
     "t": "Susun laluan udara dari luar badan ke tempat pertukaran gas.",
     "p": [
      "Rongga hidung",
      "Trakea",
      "Bronkus",
      "Bronkiol",
      "Alveolus"
     ],
     "b": [
      0,
      1,
      2,
      3,
      4
     ],
     "u": "Setiap cabang jadi lebih kecil sehingga berakhir di alveolus."
    },
    {
     "j": "pilih",
     "t": "Apakah fungsi silia pada dinding trakea?",
     "p": [
      "Menyerap oksigen terus ke dalam darah",
      "Menyapu mukus berhabuk keluar dari salur udara",
      "Menghasilkan tenaga untuk pergerakan udara",
      "Menapis karbon dioksida daripada darah"
     ],
     "b": 1,
     "u": "Mukus memerangkap, silia menyapu."
    },
    {
     "j": "pilih",
     "t": "Gas yang diperlukan untuk respirasi sel ialah:",
     "p": [
      "Nitrogen",
      "Karbon dioksida",
      "Oksigen",
      "Helium"
     ],
     "b": 2,
     "u": "Oksigen mengoksidakan glukosa untuk bebaskan tenaga."
    },
    {
     "j": "pilih",
     "t": "Otot berbentuk kubah di bawah peparu ialah:",
     "p": [
      "Otot interkosta",
      "Otot bisep",
      "Otot jantung",
      "Diafragma"
     ],
     "b": 3,
     "u": "Diafragma memisahkan rongga toraks daripada rongga abdomen."
    },
    {
     "j": "pilih",
     "t": "Unit terkecil tempat pertukaran gas berlaku ialah:",
     "p": [
      "Alveolus",
      "Bronkus",
      "Trakea",
      "Peparu"
     ],
     "b": 0,
     "u": "Kira-kira 300 juta alveolus dalam sepasang peparu."
    },
    {
     "j": "pilih",
     "t": "Hasil buangan respirasi sel ialah:",
     "p": [
      "Oksigen dan glukosa",
      "Karbon dioksida dan air",
      "Nitrogen dan air",
      "Glukosa dan tenaga"
     ],
     "b": 1,
     "u": "Glukosa dan oksigen masuk, karbon dioksida dan air keluar."
    },
    {
     "j": "pilih",
     "t": "Rambut halus dalam rongga hidung berfungsi untuk:",
     "p": [
      "Memanaskan darah",
      "Menghasilkan oksigen",
      "Menapis zarah habuk yang besar",
      "Mengecut semasa tarik nafas"
     ],
     "b": 2,
     "u": "Hidung menapis, memanaskan dan melembapkan udara."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA struktur yang merupakan sebahagian sistem respirasi manusia.",
    "p": [
     "Trakea",
     "Bronkiol",
     "Diafragma",
     "Alveolus",
     "Esofagus",
     "Aorta"
    ],
    "b": [
     0,
     1,
     2,
     3
    ],
    "u": "Esofagus salur makanan, aorta salur darah. Kedua-duanya bukan sistem respirasi."
   }
  },
  {
   "n": 2,
   "tempat": "Bronkus & Bronkiol",
   "sk": "2.1 Mekanisme pernafasan",
   "lampiran": null,
   "kadNama": "Diafragma",
   "kadEm": "🛡",
   "kadFakta": "Diafragma menyumbang kira-kira 75 peratus perubahan isi padu toraks semasa pernafasan rehat.",
   "bosKadNama": "Surfaktan",
   "bosKadEm": "🫧",
   "bosKadFakta": "Surfaktan melapisi alveolus supaya ia tidak melekat dan kuncup selepas setiap hembusan.",
   "soalan": [
    {
     "j": "susun",
     "t": "Susun proses tarik nafas mengikut urutan yang betul.",
     "p": [
      "Otot interkosta luar dan diafragma mengecut",
      "Sangkar rusuk naik, diafragma jadi mendatar",
      "Isi padu rongga toraks bertambah",
      "Tekanan udara dalam peparu turun",
      "Udara luar mengalir masuk"
     ],
     "b": [
      0,
      1,
      2,
      3,
      4
     ],
     "u": "Otot dulu, isi padu, tekanan, barulah udara bergerak."
    },
    {
     "j": "pilih",
     "t": "Mengapakah dinding alveolus setebal satu sel sahaja?",
     "p": [
      "Supaya alveolus lebih ringan",
      "Supaya darah boleh masuk ke dalam alveolus",
      "Supaya lebih banyak mukus terhasil",
      "Supaya jarak resapan pendek dan pertukaran gas cepat"
     ],
     "b": 3,
     "u": "Jarak pendek bermakna resapan laju."
    },
    {
     "j": "pilih",
     "t": "Apakah maksud respirasi sel?",
     "p": [
      "Pengoksidaan glukosa dalam sel untuk bebaskan tenaga",
      "Pergerakan udara masuk dan keluar peparu",
      "Resapan oksigen dari alveolus ke kapilari",
      "Pengangkutan oksigen oleh hemoglobin"
     ],
     "b": 0,
     "u": "Pernafasan ialah pergerakan udara, respirasi sel ialah tindak balas kimia."
    },
    {
     "j": "pilih",
     "t": "Mengapakah alveolus banyak dan kecil, bukan satu kantung besar?",
     "p": [
      "Supaya peparu lebih ringan",
      "Untuk memberi jumlah luas permukaan yang jauh lebih besar",
      "Supaya udara bergerak lebih perlahan",
      "Supaya mukus mudah terkumpul"
     ],
     "b": 1,
     "u": "Jumlah luas permukaan alveolus manusia hampir sebesar gelanggang badminton."
    },
    {
     "j": "pilih",
     "t": "Mengapakah permukaan dalam alveolus sentiasa lembap?",
     "p": [
      "Supaya bakteria tidak dapat hidup",
      "Supaya udara jadi lebih sejuk",
      "Supaya gas larut dahulu sebelum meresap merentasi dinding",
      "Supaya alveolus tidak pecah"
     ],
     "b": 2,
     "u": "Gas mesti larut dahulu baru boleh meresap."
    },
    {
     "j": "pilih",
     "t": "Apakah perbezaan utama antara pernafasan dan respirasi?",
     "p": [
      "Pernafasan berlaku waktu siang, respirasi waktu malam",
      "Pernafasan hanya pada manusia, respirasi hanya pada tumbuhan",
      "Tiada perbezaan, kedua-duanya sama",
      "Pernafasan ialah pergerakan udara, respirasi ialah tindak balas kimia dalam sel"
     ],
     "b": 3,
     "u": "Ini istilah yang paling kerap tertukar dalam bab ini."
    },
    {
     "j": "susun",
     "t": "Susun proses hembus nafas mengikut urutan yang betul.",
     "p": [
      "Otot interkosta luar dan diafragma mengendur",
      "Sangkar rusuk turun, diafragma melengkung ke atas",
      "Isi padu rongga toraks berkurang",
      "Tekanan udara dalam peparu naik",
      "Udara keluar dari peparu"
     ],
     "b": [
      0,
      1,
      2,
      3,
      4
     ],
     "u": "Hembusan rehat berlaku tanpa tenaga, otot hanya mengendur."
    },
    {
     "j": "pilih",
     "t": "Mengapakah alveolus dikelilingi rangkaian kapilari darah yang padat?",
     "p": [
      "Supaya oksigen cepat dibawa pergi dan kecerunan kepekatan kekal tinggi",
      "Supaya alveolus mendapat bekalan makanan",
      "Supaya suhu alveolus kekal rendah",
      "Supaya alveolus tidak kembang berlebihan"
     ],
     "b": 0,
     "u": "Darah yang sentiasa mengalir menjaga kecerunan supaya resapan tak berhenti."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Apakah yang berlaku jika permukaan alveolus dilapisi lapisan mukus yang tebal?",
    "p": [
     "Kadar resapan oksigen bertambah kerana gas lebih mudah larut",
     "Kadar resapan oksigen berkurang kerana jarak resapan bertambah",
     "Tiada kesan kerana oksigen meresap melalui darah",
     "Alveolus akan mengembang lebih besar"
    ],
    "b": 1,
    "u": "Inilah sebabnya jangkitan peparu menyebabkan sesak nafas."
   }
  },
  {
   "n": 3,
   "tempat": "Alveolus",
   "sk": "2.2 Pertukaran gas",
   "lampiran": "gas",
   "kadNama": "Air Kapur",
   "kadEm": "🧪",
   "kadFakta": "Air kapur bertukar keruh dengan udara hembus kerana kandungan karbon dioksidanya 100 kali ganda udara biasa.",
   "bosKadNama": "Isi Padu Tidal",
   "bosKadEm": "💨",
   "bosKadFakta": "Setiap nafas biasa membawa masuk kira-kira 500 ml udara, dipanggil isi padu tidal.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Berapa peratus oksigen yang digunakan badan daripada udara yang disedut?",
     "b": 5,
     "tol": 0.05,
     "suf": "%",
     "u": "21.0 tolak 16.0 bersamaan 5.0 peratus diserap."
    },
    {
     "j": "pilih",
     "t": "Mengapakah peratus nitrogen tidak berubah?",
     "p": [
      "Nitrogen terlalu besar untuk meresap",
      "Nitrogen dihasilkan semula oleh sel",
      "Nitrogen tidak digunakan dalam respirasi sel",
      "Nitrogen bergabung dengan hemoglobin"
     ],
     "b": 2,
     "u": "Nitrogen hanya penumpang, masuk dan keluar sama banyak."
    },
    {
     "j": "pilih",
     "t": "Selepas berlari 100 m, Danial bernafas lebih laju dan dalam. Mengapa?",
     "p": [
      "Suhu badan naik menyebabkan alveolus mengembang",
      "Otot memerlukan lebih banyak nitrogen",
      "Darah jadi pekat dan perlu wap air",
      "Respirasi sel meningkat, lebih banyak karbon dioksida perlu disingkirkan"
     ],
     "b": 3,
     "u": "Otak mengesan kenaikan karbon dioksida, bukan kekurangan oksigen."
    },
    {
     "j": "nombor",
     "t": "Berapa kali ganda peratus karbon dioksida meningkat dari udara disedut ke udara dihembus?",
     "b": 100,
     "tol": 1,
     "suf": "kali",
     "u": "0.04 peratus naik ke 4.0 peratus, iaitu 100 kali ganda."
    },
    {
     "j": "pilih",
     "t": "Mengapakah udara yang dihembus lebih panas dan lembap?",
     "p": [
      "Udara menyerap haba dan wap air dari permukaan alveolus yang lembap",
      "Karbon dioksida sendiri bersifat panas",
      "Udara termampat semasa hembusan",
      "Silia menghasilkan haba semasa bergerak"
     ],
     "b": 0,
     "u": "Sebab itu cermin berkabus bila awak hembus nafas padanya."
    },
    {
     "j": "pilih",
     "t": "Udara hembus ditiup ke dalam air kapur dan air kapur menjadi keruh. Ini membuktikan:",
     "p": [
      "Udara hembus mengandungi lebih banyak oksigen",
      "Udara hembus mengandungi lebih banyak karbon dioksida",
      "Udara hembus lebih panas",
      "Udara hembus mengandungi bakteria"
     ],
     "b": 1,
     "u": "Air kapur ialah ujian khusus untuk karbon dioksida."
    },
    {
     "j": "pilih",
     "t": "Pendaki di puncak gunung tinggi cepat tercungap walaupun sihat. Mengapa?",
     "p": [
      "Suhu sejuk menyekat pergerakan diafragma",
      "Angin kencang menolak udara keluar dari peparu",
      "Tekanan udara rendah, jadi kurang oksigen meresap masuk setiap nafas",
      "Nitrogen di kawasan tinggi lebih pekat"
     ],
     "b": 2,
     "u": "Peratus oksigen sama, tetapi tekanan separanya jauh lebih rendah."
    },
    {
     "j": "pilih",
     "t": "Mengapakah bayi baru lahir perlu menangis kuat pada kali pertama?",
     "p": [
      "Untuk membersihkan mukus dari mata",
      "Untuk memanaskan badan",
      "Untuk menguji pita suara",
      "Untuk mengembangkan alveolus supaya pertukaran gas boleh bermula"
     ],
     "b": 3,
     "u": "Tangisan pertama membuka alveolus yang sebelum ini kuncup."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Seseorang bernafas 15 kali seminit dan setiap nafas membawa 500 ml udara. Berapa liter udara masuk ke peparu dalam satu minit?",
    "b": 7.5,
    "tol": 0.05,
    "suf": "L",
    "u": "15 didarab 500 ml bersamaan 7500 ml, iaitu 7.5 liter."
   }
  },
  {
   "n": 4,
   "tempat": "Kapilari Darah",
   "sk": "2.2 / 2.3 Kesihatan respirasi",
   "lampiran": "tekanan",
   "kadNama": "Hemoglobin",
   "kadEm": "🩸",
   "kadFakta": "Satu molekul hemoglobin membawa empat molekul oksigen sekali jalan.",
   "bosKadNama": "Emfisema",
   "bosKadEm": "🚬",
   "bosKadFakta": "Dalam emfisema, dinding alveolus pecah dan bercantum sehingga luas permukaan pertukaran gas hilang secara kekal.",
   "soalan": [
    {
     "j": "banyak",
     "t": "Berdasarkan Rajah 1, pilih SEMUA yang betul tentang FASA P.",
     "p": [
      "Otot diafragma mengecut dan jadi mendatar",
      "Tekanan peparu lebih rendah daripada tekanan atmosfera",
      "Udara mengalir masuk ke peparu",
      "Otot interkosta dalam mengecut dan rusuk turun",
      "Isi padu rongga toraks berkurang"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Isi padu naik dan tekanan turun serentak. Itu tandatangan tarik nafas."
    },
    {
     "j": "pilih",
     "t": "Seorang pesakit alami kecederaan saraf frenik sehingga diafragma tak boleh mengecut. Kesan paling langsung?",
     "p": [
      "Isi padu udara setiap tarikan nafas berkurang",
      "Alveolus pecah kerana tekanan tinggi",
      "Hemoglobin tak dapat bergabung dengan oksigen",
      "Karbon dioksida keluar melalui kulit"
     ],
     "b": 0,
     "u": "Hilang diafragma bermakna hilang kedalaman nafas."
    },
    {
     "j": "banyak",
     "t": "Asap rokok mengandungi tar, nikotina dan karbon monoksida. Pilih SEMUA kesan yang betul.",
     "p": [
      "Tar melumpuhkan silia sehingga mukus terkumpul",
      "Karbon monoksida bergabung dengan hemoglobin membentuk karboksihemoglobin",
      "Dinding alveolus pecah sehingga luas permukaan berkurang",
      "Nikotina melebarkan salur darah",
      "Karbon monoksida menambah keupayaan darah membawa oksigen"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Karbon monoksida merampas tempat oksigen pada hemoglobin. Nikotina menyempitkan salur darah."
    },
    {
     "j": "pilih",
     "t": "Dalam serangan asma, otot pada dinding bronkiol mengecut. Kesannya?",
     "p": [
      "Luas permukaan alveolus bertambah",
      "Rintangan aliran udara meningkat, jadi PEFR menurun",
      "Kapasiti vital meningkat serta-merta",
      "Hemoglobin membawa lebih banyak oksigen"
     ],
     "b": 1,
     "u": "Salur menyempit bermakna udara sukar keluar dengan laju."
    },
    {
     "j": "pilih",
     "t": "Mengapakah karbon monoksida bahaya walaupun kepekatannya rendah?",
     "p": [
      "Ia melarutkan dinding alveolus",
      "Ia menghalang diafragma daripada mengecut",
      "Ia terikat pada hemoglobin jauh lebih kuat daripada oksigen",
      "Ia menukar oksigen kepada nitrogen"
     ],
     "b": 2,
     "u": "Ikatan itu hampir 200 kali lebih kuat daripada ikatan oksigen."
    },
    {
     "j": "pilih",
     "t": "Bacaan PEFR seorang pesakit asma: pagi 310, tengah hari 420, malam 300. Apakah tafsirannya?",
     "p": [
      "Alat pengukur rosak kerana bacaan tidak tetap",
      "Pesakit sudah sembuh sepenuhnya",
      "Pesakit bersenam terlalu banyak pada waktu tengah hari",
      "Gejala lebih teruk pada waktu pagi dan malam, jadi ubat pencegah patut diambil sebelum tidur"
     ],
     "b": 3,
     "u": "Corak bacaan sepanjang hari memberitahu bila perlindungan paling diperlukan."
    },
    {
     "j": "pilih",
     "t": "Seorang murid bernafas berulang kali ke dalam beg kertas. Apa yang berlaku?",
     "p": [
      "Kepekatan karbon dioksida udara yang disedut naik, jadi kadar pernafasan bertambah laju",
      "Oksigen bertambah, jadi dia rasa segar",
      "Tiada perubahan kerana udara sama",
      "Nitrogen dalam beg habis digunakan"
     ],
     "b": 0,
     "u": "Karbon dioksida yang terkumpul itulah pencetus pusat pernafasan."
    },
    {
     "j": "pilih",
     "t": "Mengapakah kapasiti vital perokok lama lebih rendah walaupun peparunya bersaiz sama?",
     "p": [
      "Rusuknya menjadi lebih pendek",
      "Dinding alveolus rosak, jadi peparu kurang kenyal dan kurang udara dapat ditukar",
      "Diafragmanya bertukar menjadi tulang",
      "Darahnya mengandungi lebih sedikit nitrogen"
     ],
     "b": 1,
     "u": "Kekenyalan peparu yang hilang tidak boleh dipulihkan."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Berdasarkan Rajah 1, pilih SEMUA yang betul tentang hubungan isi padu dan tekanan.",
    "p": [
     "Apabila isi padu toraks naik, tekanan peparu turun",
     "Udara masuk apabila tekanan peparu lebih rendah daripada atmosfera",
     "Tekanan tertinggi berlaku semasa hembus nafas",
     "Isi padu dan tekanan naik serentak",
     "Udara masuk apabila tekanan peparu lebih tinggi daripada atmosfera"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Isi padu dan tekanan sentiasa berubah secara songsang."
   }
  },
  {
   "n": 5,
   "tempat": "Aliran Darah",
   "sk": "2.3 Kesihatan sistem respirasi",
   "lampiran": "klinik",
   "kadNama": "PEFR",
   "kadEm": "📊",
   "kadFakta": "PEFR ialah kelajuan maksimum udara dihembus keluar, dan ia jatuh dahulu sebelum pesakit asma rasa sesak.",
   "bosKadNama": "Kapasiti Vital",
   "bosKadEm": "🫁",
   "bosKadFakta": "Kapasiti vital ialah isi padu udara terbanyak yang boleh dihembus selepas tarikan nafas paling dalam.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Siapakah paling berisiko mengalami kegagalan pertukaran gas semasa aktiviti berat?",
     "p": [
      "Mei Ling",
      "Suriani",
      "Encik Fauzi",
      "Risiko ketiga-tiganya sama"
     ],
     "b": 2,
     "u": "Ketiga-tiga bacaan Encik Fauzi berada di luar julat sihat serentak."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA bukti daripada jadual yang menunjukkan Encik Fauzi paling berisiko.",
     "p": [
      "Kapasiti vital 2.6 L, di bawah julat sihat",
      "PEFR 290, jauh di bawah julat sihat",
      "Nafas rehat 22, melebihi julat sihat",
      "Beliau paling tua antara ketiga-tiganya",
      "Suriani pesakit asma jadi datanya tak boleh dipercayai"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Umur ialah latar belakang, bukan bukti daripada jadual."
    },
    {
     "j": "pilih",
     "t": "Sekolah hanya mampu jalankan SATU program kesihatan respirasi. Pilihan paling wajar?",
     "p": [
      "Kelas senaman pagi, kerana semua murid akan capai kapasiti vital atlet",
      "Pemeriksaan PEFR sahaja, kerana ia mengesan semua penyakit",
      "Tiada program, kerana hanya seorang menunjukkan bacaan rendah",
      "Kempen bebas rokok, kerana kerosakan alveolus tidak boleh dipulihkan manakala asma boleh dikawal"
     ],
     "b": 3,
     "u": "Keputusan yang baik menimbang mana satu memberi pulangan terbesar bagi kos yang sama."
    },
    {
     "j": "pilih",
     "t": "Suriani mahu sertai merentas desa sekolah. Keputusan paling wajar?",
     "p": [
      "Benarkan dengan syarat bawa inhaler dan buat pemanasan badan, kerana asma terkawal tidak menghalang senaman",
      "Halang terus, kerana semua pesakit asma tidak boleh bersenam",
      "Benarkan tanpa sebarang persediaan",
      "Benarkan hanya jika dia berhenti guna inhaler"
     ],
     "b": 0,
     "u": "Senaman berkala sebenarnya membantu pesakit asma terkawal."
    },
    {
     "j": "pilih",
     "t": "Sekolah ada RM500 untuk kurangkan habuk pada waktu petang. Pilihan memberi kesan paling luas?",
     "p": [
      "Beli satu penapis udara untuk satu bilik darjah sahaja",
      "Pindahkan aktiviti luar ke waktu pagi dan tutup tingkap petang, kerana kosnya hampir sifar dan melindungi semua murid",
      "Beli topeng muka untuk tiga murid asma sahaja",
      "Simpan wang itu untuk tahun depan"
     ],
     "b": 1,
     "u": "Penyelesaian terbaik bukan selalu yang paling mahal."
    },
    {
     "j": "pilih",
     "t": "Seorang murid mengukur kapasiti vitalnya sekali sahaja. Nilaikan kesahan datanya.",
     "p": [
      "Sah, kerana alat sudah ditentukur",
      "Sah, kerana kapasiti vital tidak pernah berubah",
      "Tidak sah, ukuran perlu diulang sekurang-kurangnya tiga kali dan bacaan tertinggi diambil",
      "Tidak sah, kerana kapasiti vital tidak boleh diukur"
     ],
     "b": 2,
     "u": "Satu bacaan tunggal tidak boleh membezakan prestasi sebenar daripada percubaan yang lemah."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA ciri kempen anti-rokok yang berkesan untuk remaja.",
     "p": [
      "Tunjukkan kesan pada penampilan dan prestasi sukan sekarang",
      "Libatkan bekas perokok muda sebagai penceramah",
      "Sediakan khidmat bantuan berhenti merokok",
      "Paparkan gambar menakutkan sahaja tanpa sokongan",
      "Denda murid yang kedapatan merokok tanpa kaunseling"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Remaja bertindak balas pada kesan segera dan pada orang yang mereka percaya."
    },
    {
     "j": "pilih",
     "t": "Data manakah paling kukuh untuk membuktikan merokok merosakkan peparu?",
     "p": [
      "Pendapat seorang doktor terkenal",
      "Satu kes seorang perokok yang meninggal dunia",
      "Tinjauan dalam talian tentang perasaan orang terhadap rokok",
      "Kajian jangka panjang membandingkan kapasiti vital perokok dan bukan perokok yang sama umur dan jantina"
     ],
     "b": 3,
     "u": "Perbandingan terkawal jangka panjang mengasingkan kesan sebenar merokok."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Klinik hanya boleh menyaring 50 murid daripada 900. Kriteria pemilihan paling wajar?",
    "p": [
     "Murid yang melaporkan sesak nafas atau tinggal berdekatan sumber pencemaran",
     "Murid yang paling awal mendaftar",
     "Murid daripada kelas terbaik sahaja",
     "Pilih 50 nama secara rawak daripada senarai"
    ],
    "b": 0,
    "u": "Saringan bersumber terhad patut disasarkan pada kumpulan berisiko tertinggi."
   }
  },
  {
   "n": 6,
   "tempat": "Sel Badan",
   "sk": "2.3 / 2.4 Penyelesaian masalah",
   "lampiran": null,
   "kadNama": "Inhaler",
   "kadEm": "💉",
   "kadFakta": "Inhaler pelega melebarkan bronkiol dalam masa kurang lima minit semasa serangan asma.",
   "bosKadNama": "Udara Bersih",
   "bosKadEm": "💡",
   "bosKadFakta": "Menyiram tanah di tapak pembinaan boleh mengurangkan habuk terapung sehingga separuh, dan kosnya hampir sifar.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Awak reka alat amaran kualiti udara untuk sekolah. Ciri mana paling penting supaya murid asma benar-benar menggunakannya?",
     "p": [
      "Rekaan yang paling cantik",
      "Amaran yang boleh dilihat dari koridor tanpa perlu buka telefon",
      "Bacaan angka yang paling tepat sehingga tiga titik perpuluhan",
      "Laporan bulanan yang dihantar kepada guru besar"
     ],
     "b": 1,
     "u": "Reka cipta yang baik dinilai pada sama ada orang benar-benar menggunakannya."
    },
    {
     "j": "pilih",
     "t": "Kos bahan awak RM180 tetapi PIBG hanya luluskan RM100. Tindakan paling kreatif dan praktikal?",
     "p": [
      "Batalkan projek terus",
      "Kurangkan fungsi utama supaya muat bajet",
      "Guna penderia terpakai dari bengkel Reka Bentuk dan Teknologi serta kotak kitar semula, kekalkan fungsi utama",
      "Minta murid asma bayar sendiri bakinya"
     ],
     "b": 2,
     "u": "Kekangan kos menguji kreativiti, bukan menamatkan projek."
    },
    {
     "j": "pilih",
     "t": "Kontraktor tapak pembinaan enggan berhenti kerja. Pendekatan paling wajar mengambil kira nilai masyarakat?",
     "p": [
      "Buat aduan ke media sosial tanpa berbincang dahulu",
      "Halang lori masuk dengan menghalang jalan",
      "Abaikan sahaja kerana sekolah tiada kuasa",
      "Berbincang meminta mereka menyiram tanah waktu petang dan menutup lori, kerana ia murah bagi mereka dan mengurangkan habuk"
     ],
     "b": 3,
     "u": "Penyelesaian yang menang ialah yang murah bagi pihak satu lagi dan berkesan bagi awak."
    },
    {
     "j": "pilih",
     "t": "Awak reka topeng penapis habuk mudah untuk murid asma menggunakan bahan yang ada di sekolah. Kriteria reka bentuk mana paling menentukan sama ada ia benar-benar membantu?",
     "p": [
      "Ia menapis zarah halus tetapi masih membenarkan murid bernafas tanpa rasa sesak",
      "Ia dibuat daripada bahan yang paling murah di pasaran",
      "Ia boleh dibasuh dan diguna semula seratus kali",
      "Ia mempunyai logo sekolah yang jelas di hadapan"
     ],
     "b": 0,
     "u": "Penapis yang terlalu rapat menambah rintangan aliran udara. Reka bentuk yang berjaya mengimbangi penapisan dengan kemudahan bernafas."
    },
    {
     "j": "pilih",
     "t": "Selepas memasang penyelesaian awak, bagaimana awak buktikan ia benar-benar berkesan dan bukan sekadar nampak berguna?",
     "p": [
      "Tanya tiga orang kawan sama ada mereka suka reka cipta itu",
      "Rekod bilangan episod sesak nafas dan bacaan PEFR murid asma sebelum dan selepas, dalam tempoh yang sama panjang",
      "Kira berapa banyak habuk melekat pada penapis selepas seminggu",
      "Bandingkan dengan sekolah lain yang memang tiada masalah habuk"
     ],
     "b": 1,
     "u": "Perbandingan sebelum dan selepas pada orang yang sama, dalam tempoh yang setara, mengasingkan kesan penyelesaian awak daripada sebab lain."
    },
    {
     "j": "pilih",
     "t": "Sekolah luar bandar mahu meniru reka cipta awak tetapi bekalan elektrik di sana kerap terputus. Pengubahsuaian paling wajar?",
     "p": [
      "Beri arahan supaya mereka membeli janakuasa sendiri",
      "Kekalkan reka bentuk asal kerana ia sudah terbukti berkesan di sini",
      "Tukar kepada penunjuk yang tidak memerlukan kuasa, seperti kain penanda habuk yang diperiksa dua kali sehari",
      "Batalkan cadangan itu untuk sekolah tersebut"
     ],
     "b": 2,
     "u": "Reka cipta yang baik menyesuaikan diri dengan keadaan penggunanya, bukan menuntut pengguna menyesuaikan diri dengannya."
    },
    {
     "j": "pilih",
     "t": "Projek awak berjaya, tetapi awak akan tamat Tingkatan 3 hujung tahun ini. Langkah paling penting supaya ia kekal berfungsi?",
     "p": [
      "Simpan semua maklumat projek dalam telefon awak sendiri",
      "Minta guru besar mengumumkan kejayaan projek dalam perhimpunan",
      "Pasang seberapa banyak unit yang mampu sebelum awak tamat sekolah",
      "Tulis panduan penyelenggaraan ringkas dan latih ahli kelab sains Tingkatan 1 untuk mengambil alih"
     ],
     "b": 3,
     "u": "Penyelesaian yang bergantung pada seorang individu akan mati bersama penglibatan orang itu."
    },
    {
     "j": "pilih",
     "t": "Dua reka bentuk memberi perlindungan yang sama. Reka bentuk A berharga RM90 dan perlu penapis baharu setiap bulan pada RM15. Reka bentuk B berharga RM250 dan penapisnya boleh dibasuh. Pilihan paling wajar untuk sekolah?",
     "p": [
      "Reka bentuk B, kerana selepas kira-kira setahun jumlah kosnya lebih rendah dan ia tidak bergantung pada bekalan penapis",
      "Reka bentuk A, kerana harga permulaannya paling murah",
      "Reka bentuk A, kerana penapis sekali guna sentiasa lebih bersih",
      "Kedua-duanya sama sahaja kerana perlindungan yang diberi sama"
     ],
     "b": 0,
     "u": "A menelan RM90 campur RM180 dalam tahun pertama, iaitu RM270, sudah melebihi RM250 bagi B. Kos jangka panjang selalunya menentukan pilihan yang wajar."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Sekolah awak 300 m dari tapak pembinaan. Tiga murid asma dalam kelas awak kerap sesak nafas waktu petang. Reka satu penyelesaian yang sekolah awak benar-benar boleh laksanakan.",
    "arahan": "Terangkan cara ia berfungsi, bahan atau alat yang perlu, siapa yang jalankan, dan bagaimana awak ambil kira kos serta penerimaan kontraktor dan penduduk sekitar.",
    "u": "Jawapan TP6 yang kukuh menggabungkan sains respirasi, kos sebenar, dan penerimaan masyarakat."
   }
  }
 ]
};
