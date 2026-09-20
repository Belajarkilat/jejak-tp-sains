/* Rajah untuk t2b7 hingga t2b13. */
module.exports = [

/* ---------------- t2b7 Laluan Elektro ---------------- */
{
  bab: "t2b7",
  rajah: [
    {
      nama: "R_OHM", kunci: "grafohm",
      hentian: '{n:1, tempat:"Bilik Kawalan Elektrik", sk:"7.1 / 7.3 Cas, arus dan magnet",',
      spek: {
        jenis: "graf", titik: true, grid: 5, yMin: 0, yMaks: 7.5,
        x: [0, 0.5, 1, 1.5, 2, 2.5],
        siri: [{ label: "Voltan (V)", warna: "ungu", y: [0, 1.5, 3, 4.5, 6, 7.5] }],
        xLabel: "Arus melalui perintang (A)",
        kapsyen: "Rajah 1 · Voltan merentasi satu perintang melawan arus yang melaluinya.",
        alt: "Graf garis lurus melalui asalan: voltan naik sekata dari 0 hingga 7.5 volt apabila arus naik dari 0 hingga 2.5 ampere",
      },
    },
    {
      nama: "R_LITAR", kunci: "siriselari",
      hentian: '{n:2, tempat:"Rumah Pintar", sk:"7.1 / 7.2 / 7.3 Elektrostatik, litar dan elektromagnet",',
      spek: {
        jenis: "aliran", mod: "siratan",
        nod: [
          { id: "s", label: "Litar bersiri", x: 0, y: 0 },
          { id: "p", label: "Litar selari", x: 1, y: 0 },
          { id: "s2", label: "Satu laluan sahaja", x: 0, y: 1 },
          { id: "p2", label: "Banyak laluan", x: 1, y: 1 },
          { id: "s3", label: "Satu putus, semua padam", x: 0, y: 2 },
          { id: "p3", label: "Satu putus, lain menyala", x: 1, y: 2 },
        ],
        panah: [["s", "s2"], ["s2", "s3"], ["p", "p2"], ["p2", "p3"]],
        kapsyen: "Rajah 1 · Perbandingan litar bersiri dengan litar selari.",
        alt: "Dua lajur: litar bersiri hanya ada satu laluan dan semua mentol padam jika satu putus, litar selari ada banyak laluan dan mentol lain terus menyala",
      },
    },
  ],
  tukar: [
    ['t:"Hukum Ohm menyatakan bahawa:"', 't:"Berdasarkan Rajah 1, Hukum Ohm menyatakan bahawa:"'],
    ['t:"Mengapakah pendawaian rumah menggunakan litar selari?"',
     't:"Berdasarkan Rajah 1, mengapakah pendawaian rumah menggunakan litar selari?"'],
  ],
},

/* ---------------- t2b8 Laluan Daya ---------------- */
{
  bab: "t2b8",
  rajah: [
    {
      nama: "R_BUKU", kunci: "dayabuku",
      hentian: '{n:1, tempat:"Taman Permainan", sk:"8.1 Jenis daya dan cirinya",',
      spek: {
        jenis: "daya", mod: "objek", objek: "Buku",
        daya: [
          { arah: "atas", label: "Daya tindak balas meja", warna: "ungu" },
          { arah: "bawah", label: "Berat buku", warna: "merah" },
        ],
        kapsyen: "Rajah 1 · Daya yang bertindak pada sebuah buku yang diam di atas meja.",
        alt: "Rajah daya: sebuah buku dengan anak panah berat ke bawah dan anak panah daya tindak balas meja ke atas, kedua-duanya sama panjang",
      },
    },
    {
      nama: "R_SORONG", kunci: "tuassorong",
      hentian: '{n:2, tempat:"Bengkel Kereta", sk:"8.2 Kesan daya, tuas, momen dan tekanan",',
      spek: {
        jenis: "daya", mod: "tuas",
        fulkrum: 0.06, beban: 0.45, daya: 0.94, kelas: 2,
        labelBeban: "Beban", labelDaya: "Daya",
        kapsyen: "Rajah 1 · Kereta sorong: fulkrum pada roda, beban di tengah, daya pada pemegang.",
        alt: "Rajah tuas: fulkrum di hujung kiri rentang, beban di tengah menekan ke bawah, dan daya dikenakan ke atas di hujung kanan",
      },
    },
  ],
  tukar: [
    ['t:"Buku yang diletakkan di atas meja tidak jatuh kerana:"',
     't:"Berdasarkan Rajah 1, buku yang diletakkan di atas meja tidak jatuh kerana:"'],
    ['t:"Kereta sorong ialah tuas kelas:"',
     't:"Berdasarkan Rajah 1, kereta sorong ialah tuas kelas:"'],
  ],
},

/* ---------------- t2b9 Laluan Haba ---------------- */
{
  bab: "t2b9",
  rajah: [
    {
      nama: "R_PINDAH", kunci: "pindahhaba",
      hentian: '{n:1, tempat:"Pantai Petang", sk:"9.1 / 9.2 Suhu, haba dan pengaliran haba",',
      spek: {
        jenis: "aliran", mod: "siratan",
        nod: [
          { id: "k", label: "Konduksi", x: 0, y: 0 },
          { id: "p", label: "Perolakan", x: 1, y: 0 },
          { id: "s", label: "Sinaran", x: 2, y: 0 },
          { id: "k2", label: "Pepejal", x: 0, y: 1 },
          { id: "p2", label: "Cecair & gas", x: 1, y: 1 },
          { id: "s2", label: "Tanpa bahan", x: 2, y: 1 },
        ],
        panah: [["k", "k2"], ["p", "p2"], ["s", "s2"]],
        kapsyen: "Rajah 1 · Tiga cara haba merambat dan bahan yang diperlukannya.",
        alt: "Tiga lajur: konduksi melalui pepejal, perolakan melalui cecair dan gas, sinaran tanpa memerlukan bahan",
      },
    },
    {
      nama: "R_KEMBANG", kunci: "kembang",
      hentian: '{n:2, tempat:"Stesen Kereta Api", sk:"9.2 / 9.3 / 9.4 Konduktor, pengembangan dan penyerapan haba",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: ["Logam dipanaskan", "Zarah bergetar lebih kuat",
              "Jarak antara zarah bertambah", "Logam mengembang"],
        kapsyen: "Rajah 1 · Apa yang berlaku kepada zarah apabila logam dipanaskan.",
        alt: "Rajah aliran menegak: logam dipanaskan, zarah bergetar lebih kuat, jarak antara zarah bertambah, logam mengembang",
      },
    },
  ],
  tukar: [
    ['t:"Pemindahan haba melalui pepejal dipanggil:"',
     't:"Berdasarkan Rajah 1, pemindahan haba melalui pepejal dipanggil:"'],
    ['t:"Mengapakah ruang ditinggalkan antara landasan kereta api?"',
     't:"Berdasarkan Rajah 1, mengapakah ruang ditinggalkan antara landasan kereta api?"'],
  ],
},

/* ---------------- t2b10 Laluan Bunyi ---------------- */
{
  bab: "t2b10",
  rajah: [
    {
      nama: "R_AMPLITUD", kunci: "amplitud",
      hentian: '{n:1, tempat:"Bilik Muzik", sk:"10.1 / 10.2 Ciri gelombang bunyi",',
      spek: {
        jenis: "graf", grid: 4, yMin: -4, yMaks: 4, setiap: 3,
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        siri: [
          { label: "Bunyi P (lebih nyaring)", warna: "merah",
            y: [0, 3.5, 3.5, 0, -3.5, -3.5, 0, 3.5, 3.5, 0, -3.5, -3.5, 0] },
          { label: "Bunyi Q (kurang nyaring)", warna: "ungu",
            y: [0, 1.3, 1.3, 0, -1.3, -1.3, 0, 1.3, 1.3, 0, -1.3, -1.3, 0] },
        ],
        xLabel: "Masa (milisaat)",
        kapsyen: "Rajah 1 · Dua bunyi yang sama kelangsingan. Bunyi P lebih nyaring daripada bunyi Q.",
        alt: "Dua gelombang dengan bilangan puncak yang sama, tetapi gelombang P mempunyai puncak yang jauh lebih tinggi daripada gelombang Q",
      },
    },
    {
      nama: "R_GEMA", kunci: "gema",
      hentian: '{n:2, tempat:"Pentas Orkestra", sk:"10.2 / 10.3 Kenyaringan, kelangsingan dan pantulan bunyi",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: ["Bunyi dari sumber", "Mengenai dinding keras",
              "Dipantulkan kembali", "Didengar semula sebagai gema"],
        kapsyen: "Rajah 1 · Bagaimana gema terbentuk dalam sebuah dewan.",
        alt: "Rajah aliran menegak: bunyi dari sumber mengenai dinding keras, dipantulkan kembali, dan didengar semula sebagai gema",
      },
    },
  ],
  tukar: [
    ['t:"Kenyaringan bunyi bergantung pada:"',
     't:"Berdasarkan Rajah 1, kenyaringan bunyi bergantung pada:"'],
    ['t:"Mengapakah dewan kosong lebih bergema daripada dewan yang penuh dengan orang?"',
     't:"Berdasarkan Rajah 1, mengapakah dewan kosong lebih bergema daripada dewan yang penuh dengan orang?"'],
  ],
},

/* ---------------- t2b11 Laluan Galaksi ---------------- */
{
  bab: "t2b11",
  rajah: [
    {
      nama: "R_SUHUBINTANG", kunci: "suhubintang",
      hentian: '{n:1, tempat:"Planetarium", sk:"11.1 Objek angkasa dan ciri bintang",',
      spek: {
        jenis: "graf", mod: "palang", grid: 5, yMaks: 25000,
        bar: [
          { label: "Merah", nilai: 3000, warna: "merah" },
          { label: "Kuning", nilai: 5800, warna: "kuning" },
          { label: "Putih", nilai: 10000, warna: "hijau" },
          { label: "Biru", nilai: 25000, warna: "ungu" },
        ],
        xLabel: "Suhu permukaan bintang (K)",
        kapsyen: "Rajah 1 · Suhu permukaan bintang mengikut warnanya.",
        alt: "Graf palang suhu permukaan bintang: merah 3000 kelvin, kuning 5800, putih 10000, biru 25000",
      },
    },
    {
      nama: "R_BIMASAKTI", kunci: "bimasakti",
      hentian: '{n:2, tempat:"Balai Cerap", sk:"11.1 Kitar hidup bintang dan kedudukan Sistem Suria",',
      spek: {
        jenis: "struktur", mod: "label", tinggiLukis: 150,
        bahagian: [
          { label: "Bima Sakti", bentuk: "bulat", x: 50, y: 50, r: 44, isi: "kertas2", garis: "garis2", anchorX: 50, anchorY: 6 },
          { label: "Teras galaksi", bentuk: "bulat", x: 50, y: 50, r: 11, isi: "kuning", garis: "kuning" },
          { label: "Sistem Suria", bentuk: "bulat", x: 34, y: 76, r: 4, isi: "merah", garis: "merah" },
        ],
        kapsyen: "Rajah 1 · Kedudukan Sistem Suria dalam galaksi Bima Sakti.",
        alt: "Bulatan besar mewakili Bima Sakti dengan teras terang di tengah, dan satu titik kecil Sistem Suria jauh dari pusat, di bahagian luar galaksi",
      },
    },
  ],
  tukar: [
    ['t:"Bintang yang paling panas berwarna:"',
     't:"Berdasarkan Rajah 1, bintang yang paling panas berwarna:"'],
    ['t:"Di manakah kedudukan Sistem Suria dalam Bima Sakti?"',
     't:"Berdasarkan Rajah 1, di manakah kedudukan Sistem Suria dalam Bima Sakti?"'],
  ],
},

/* ---------------- t2b12 Laluan Planet ---------------- */
{
  bab: "t2b12",
  rajah: [
    {
      nama: "R_SUHUPLANET", kunci: "suhuplanet",
      hentian: '{n:1, tempat:"Model Sistem Suria", sk:"12.1 Planet dan unit jarak angkasa",',
      spek: {
        jenis: "graf", mod: "palang", grid: 5, yMaks: 500,
        bar: [
          { label: "Utarid", nilai: 167, warna: "kuning" },
          { label: "Zuhrah", nilai: 464, warna: "merah" },
          { label: "Bumi", nilai: 15, warna: "hijau" },
        ],
        xLabel: "Suhu purata permukaan (°C)",
        kapsyen: "Rajah 1 · Suhu purata permukaan tiga planet dalam.",
        alt: "Graf palang suhu purata permukaan: Utarid 167 darjah Celsius, Zuhrah 464, Bumi 15",
      },
    },
    {
      nama: "R_ORBIT", kunci: "tempohorbit",
      hentian: '{n:2, tempat:"Bilik Simulasi", sk:"12.1 Hubungan ciri planet dan situasi hipotetikal",',
      spek: {
        jenis: "graf", mod: "palang", grid: 4, yMaks: 2,
        bar: [
          { label: "Utarid", nilai: 0.24, warna: "kuning" },
          { label: "Zuhrah", nilai: 0.62, warna: "merah" },
          { label: "Bumi", nilai: 1, warna: "hijau" },
          { label: "Marikh", nilai: 1.88, warna: "ungu" },
        ],
        xLabel: "Tempoh orbit (tahun Bumi), disusun dari yang terdekat",
        kapsyen: "Rajah 1 · Tempoh orbit empat planet dalam, disusun mengikut jarak dari Matahari.",
        alt: "Graf palang tempoh orbit yang semakin panjang mengikut jarak: Utarid 0.24 tahun, Zuhrah 0.62, Bumi 1, Marikh 1.88",
      },
    },
  ],
  tukar: [
    ['t:"Planet yang paling panas dalam Sistem Suria ialah:"',
     't:"Berdasarkan Rajah 1, planet yang paling panas antara tiga planet ini ialah:"'],
    ['t:"Mengapakah planet yang jauh dari Matahari mempunyai tempoh orbit yang lebih panjang?"',
     't:"Berdasarkan Rajah 1, mengapakah planet yang jauh dari Matahari mempunyai tempoh orbit yang lebih panjang?"'],
  ],
},

/* ---------------- t2b13 Laluan Komet ---------------- */
{
  bab: "t2b13",
  rajah: [
    {
      nama: "R_METEOR", kunci: "meteor",
      hentian: '{n:1, tempat:"Langit Malam", sk:"13.1 Meteoroid, meteor, meteorit, asteroid dan komet",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: [
          { label: "Meteoroid di angkasa lepas", nota: "masuk atmosfera" },
          "Meteor: terbakar dan bercahaya",
          "Meteorit: sampai ke permukaan Bumi",
        ],
        kapsyen: "Rajah 1 · Satu ketulan batu angkasa bertukar nama mengikut tempatnya.",
        alt: "Rajah aliran menegak: meteoroid di angkasa lepas, meteor apabila terbakar dan bercahaya di atmosfera, meteorit apabila sampai ke permukaan Bumi",
      },
    },
    {
      nama: "R_JASADBEZA", kunci: "jasadbeza",
      hentian: '{n:2, tempat:"Muzium Meteorit", sk:"13.1 Pergerakan dan kesan jasad angkasa terhadap Bumi",',
      spek: {
        jenis: "aliran", mod: "siratan",
        nod: [
          { id: "a", label: "Asteroid", x: 0, y: 0 },
          { id: "k", label: "Komet", x: 1, y: 0 },
          { id: "a2", label: "Batu dan logam", x: 0, y: 1 },
          { id: "k2", label: "Ais dan debu", x: 1, y: 1 },
          { id: "a3", label: "Tiada ekor", x: 0, y: 2 },
          { id: "k3", label: "Ada ekor", x: 1, y: 2 },
        ],
        panah: [["a", "a2"], ["a2", "a3"], ["k", "k2"], ["k2", "k3"]],
        kapsyen: "Rajah 1 · Perbandingan asteroid dengan komet.",
        alt: "Dua lajur: asteroid diperbuat daripada batu dan logam serta tiada ekor, komet diperbuat daripada ais dan debu serta ada ekor",
      },
    },
  ],
  tukar: [
    ['t:"Meteoroid yang terbakar dan bercahaya di atmosfera Bumi dipanggil:"',
     't:"Berdasarkan Rajah 1, meteoroid yang terbakar dan bercahaya di atmosfera Bumi dipanggil:"'],
    ['t:"Beza utama antara asteroid dengan komet ialah:"',
     't:"Berdasarkan Rajah 1, beza utama antara asteroid dengan komet ialah:"'],
  ],
},

];
