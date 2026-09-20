/* Rajah untuk t3b3 hingga t3b10.

   Peraturan yang dipegang semasa memilih rajah:
   - Rajah diletak pada H1 dan H2 sahaja, kerana H3-H5 sudah ada jadual.
   - Rajah menyokong SATU soalan dalam hentian itu, dan tidak boleh
     membocorkan jawapan soalan lain dalam hentian yang sama. Sebab itu
     siri kereaktifan tidak memasukkan karbon (hentian yang sama bertanya
     kesimpulan zink oksida dengan karbon), dan rajah aurora tidak menyebut
     kutub (hentian yang sama bertanya mengapa aurora di kutub). */
module.exports = [

/* ---------------- t3b3 Laluan Darah ---------------- */
{
  bab: "t3b3",
  rajah: [
    {
      nama: "R_RUANG", kunci: "ruangjantung",
      hentian: '{n:1, tempat:"Jantung", sk:"3.1 / 3.2 Sistem pengangkutan dan jantung",',
      spek: {
        jenis: "graf", mod: "mendatar", yMaks: 14,
        bar: [
          { label: "Ventrikel kiri", nilai: 12, warna: "merah" },
          { label: "Ventrikel kanan", nilai: 4, warna: "merah" },
          { label: "Atrium kanan", nilai: 2, warna: "ungu" },
          { label: "Atrium kiri", nilai: 3, warna: "ungu" },
        ],
        xLabel: "Ketebalan dinding otot (mm)",
        kapsyen: "Rajah 1 · Ketebalan dinding otot bagi empat ruang jantung manusia.",
        alt: "Graf palang: ventrikel kiri 12 mm, ventrikel kanan 4 mm, atrium kanan 2 mm dan atrium kiri 3 mm",
      },
    },
    {
      nama: "R_SALUR", kunci: "salurdarah",
      hentian: '{n:2, tempat:"Salur Darah", sk:"3.2 Struktur dan fungsi salur darah",',
      spek: {
        jenis: "struktur", mod: "label",
        bahagian: [
          { label: "Arteri", bentuk: "bulat", x: 30, y: 16, r: 13, anchorX: 39.5, isi: "merahLembut", garis: "merah" },
          { bentuk: "bulat", x: 30, y: 16, r: 6, isi: "kertas", garis: "merah" },
          { label: "Vena", bentuk: "bulat", x: 30, y: 50, r: 13, anchorX: 41.75, isi: "kertas2", garis: "ungu" },
          { bentuk: "bulat", x: 30, y: 50, r: 10.5, isi: "kertas", garis: "ungu" },
          { label: "Kapilari", bentuk: "bulat", x: 30, y: 84, r: 6, anchorX: 35, isi: "kertas2", garis: "garis2" },
          { bentuk: "bulat", x: 30, y: 84, r: 4, isi: "kertas", garis: "garis2" },
        ],
        kapsyen: "Rajah 1 · Keratan rentas tiga jenis salur darah dan tebal dindingnya.",
        alt: "Keratan rentas: arteri berdinding paling tebal, vena berdinding nipis dengan ruang dalam yang luas, dan kapilari yang jauh lebih kecil",
      },
    },
  ],
  tukar: [
    ['t:"Ruang jantung yang mempunyai dinding otot paling tebal ialah:"',
     't:"Berdasarkan Rajah 1, ruang jantung yang mempunyai dinding otot paling tebal ialah:"'],
    ['t:"Mengapakah dinding arteri lebih tebal dan lebih berotot berbanding vena?"',
     't:"Berdasarkan Rajah 1, mengapakah dinding arteri lebih tebal dan lebih berotot berbanding vena?"'],
  ],
},

/* ---------------- t3b4 Laluan Bijih ---------------- */
{
  bab: "t3b4",
  rajah: [
    {
      nama: "R_OKSIDA", kunci: "oksidalogam",
      hentian: '{n:1, tempat:"Kerak Bumi", sk:"4.1 Kepelbagaian mineral",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: ["Logam dipanaskan dalam oksigen",
              "Logam bergabung dengan oksigen",
              "Oksida logam terbentuk"],
        kapsyen: "Rajah 1 · Corak umum tindak balas logam dengan oksigen.",
        alt: "Rajah aliran menegak: logam dipanaskan dalam oksigen, logam bergabung dengan oksigen, lalu oksida logam terbentuk",
      },
    },
    {
      nama: "R_SIRI", kunci: "sirireaktif",
      hentian: '{n:2, tempat:"Siri Kereaktifan", sk:"4.2 Siri kereaktifan logam",',
      spek: {
        jenis: "struktur", mod: "label",
        bahagian: [
          { bentuk: "kotak", x: 94, y: 10, l: 80, t: 13, dalam: "Kalium", isi: "merahLembut", garis: "merah" },
          { bentuk: "kotak", x: 94, y: 29, l: 80, t: 13, dalam: "Magnesium", isi: "merahLembut", garis: "merah" },
          { bentuk: "kotak", x: 94, y: 48, l: 80, t: 13, dalam: "Zink", isi: "kuningLembut", garis: "kuning" },
          { bentuk: "kotak", x: 94, y: 67, l: 80, t: 13, dalam: "Ferum", isi: "kertas2", garis: "garis2" },
          { bentuk: "kotak", x: 94, y: 86, l: 80, t: 13, dalam: "Plumbum", isi: "kertas2", garis: "garis2" },
        ],
        kapsyen: "Rajah 1 · Siri kereaktifan: logam di atas lebih reaktif daripada logam di bawahnya.",
        alt: "Tangga menegak lima logam dari atas ke bawah: kalium, magnesium, zink, ferum dan plumbum",
      },
    },
  ],
  tukar: [
    ['t:"Hasil tindak balas apabila magnesium dipanaskan dalam oksigen ialah:"',
     't:"Berdasarkan Rajah 1, hasil tindak balas apabila magnesium dipanaskan dalam oksigen ialah:"'],
    ['t:"Mengapakah magnesium terbakar lebih terang daripada ferum apabila dipanaskan dalam oksigen?"',
     't:"Berdasarkan Rajah 1, mengapakah magnesium terbakar lebih terang daripada ferum apabila dipanaskan dalam oksigen?"'],
  ],
},

/* ---------------- t3b5 Laluan Haba ---------------- */
{
  bab: "t3b5",
  rajah: [
    {
      nama: "R_EKSO", kunci: "grafekso",
      hentian: '{n:1, tempat:"Termometer", sk:"5.1 Tindak balas endotermik dan eksotermik",',
      spek: {
        jenis: "graf", titik: true, petunjuk: true, grid: 4, yMin: 25, yMaks: 45,
        x: [0, 1, 2, 3, 4, 5],
        siri: [{ label: "Suhu campuran (°C)", warna: "merah", y: [28, 34, 39, 41, 41, 41] }],
        xLabel: "Masa (minit)",
        kapsyen: "Rajah 1 · Suhu campuran diukur semasa satu tindak balas berlaku.",
        alt: "Graf garis: suhu campuran naik dari 28 darjah Celsius kepada 41 darjah Celsius dalam tiga minit pertama, kemudian mendatar",
      },
    },
    {
      nama: "R_SEIMBANG", kunci: "grafseimbang",
      hentian: '{n:2, tempat:"Keseimbangan Terma", sk:"5.1 Menghubungkait haba dengan jenis tindak balas",',
      spek: {
        jenis: "graf", titik: true, grid: 4, yMin: 20, yMaks: 80,
        x: [0, 2, 4, 6, 8, 10],
        siri: [
          { label: "Air panas", warna: "merah", y: [80, 62, 50, 43, 38, 36] },
          { label: "Air sejuk", warna: "ungu", y: [28, 30, 32, 34, 35, 36] },
        ],
        xLabel: "Masa (minit)",
        kapsyen: "Rajah 1 · Suhu dua bekas air yang bersentuhan diukur setiap dua minit.",
        alt: "Graf dua garis: suhu air panas menurun dari 80 darjah Celsius manakala suhu air sejuk menaik dari 28 darjah Celsius sehingga kedua-duanya bertemu pada 36 darjah Celsius",
      },
    },
  ],
  tukar: [
    ['t:"Apakah yang berlaku kepada bacaan termometer semasa tindak balas eksotermik?"',
     't:"Berdasarkan Rajah 1, apakah yang berlaku kepada bacaan termometer semasa tindak balas eksotermik?"'],
    ['t:"Mengapakah tangan terasa sejuk apabila memegang bekas berisi tindak balas endotermik?"',
     't:"Berdasarkan Rajah 1, mengapakah tangan terasa sejuk apabila memegang bekas berisi tindak balas endotermik?"'],
  ],
},

/* ---------------- t3b6 Laluan Arus ---------------- */
{
  bab: "t3b6",
  rajah: [
    {
      nama: "R_KWJ", kunci: "grafkwj",
      hentian: '{n:1, tempat:"Sumber Tenaga", sk:"6.1 Penjanaan tenaga elektrik",',
      spek: {
        jenis: "graf", mod: "mendatar", yMaks: 50,
        bar: [
          { label: "Peti sejuk", nilai: 45, warna: "ungu" },
          { label: "Kipas", nilai: 18, warna: "ungu" },
          { label: "Seterika", nilai: 9, warna: "hijau" },
          { label: "Lampu LED", nilai: 4, warna: "hijau" },
        ],
        xLabel: "Tenaga digunakan sebulan (kWj)",
        kapsyen: "Rajah 1 · Tenaga elektrik yang digunakan empat peralatan rumah dalam sebulan.",
        alt: "Graf palang: peti sejuk 45, kipas 18, seterika 9 dan lampu LED 4 kilowatt jam sebulan",
      },
    },
    {
      nama: "R_TERMAL", kunci: "stesenterma",
      hentian: '{n:2, tempat:"Generator", sk:"6.1 / 6.3 Penjanaan dan keselamatan elektrik",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: ["Bahan api dibakar", "Air mendidih menjadi stim",
              "Stim memutarkan turbin", "Turbin memutarkan generator",
              "Tenaga elektrik dijana"],
        kapsyen: "Rajah 1 · Urutan penjanaan elektrik di stesen janakuasa termal.",
        alt: "Rajah aliran menegak: bahan api dibakar, air mendidih menjadi stim, stim memutarkan turbin, turbin memutarkan generator, tenaga elektrik dijana",
      },
    },
  ],
  tukar: [
    ['t:"Unit tenaga elektrik yang digunakan dalam bil elektrik ialah:"',
     't:"Berdasarkan Rajah 1, unit tenaga elektrik yang digunakan dalam bil elektrik ialah:"'],
    ['t:"Di stesen janakuasa termal, apakah fungsi stim?"',
     't:"Berdasarkan Rajah 1, di stesen janakuasa termal, apakah fungsi stim?"'],
  ],
},

/* ---------------- t3b7 Laluan Tenaga ---------------- */
{
  bab: "t3b7",
  rajah: [
    {
      nama: "R_ANGKAT", kunci: "dayaangkat",
      hentian: '{n:1, tempat:"Padang Kerja", sk:"7.1 Kerja, tenaga dan kuasa",',
      spek: {
        jenis: "daya", mod: "objek", objek: "Peti",
        daya: [
          { arah: "atas", label: "Daya angkat 50 N", warna: "ungu" },
          { arah: "bawah", label: "Berat 50 N", warna: "merah" },
        ],
        kapsyen: "Rajah 1 · Peti diangkat dengan daya 50 N sejauh 2 m ke atas.",
        alt: "Rajah daya: sebuah peti dengan anak panah daya angkat 50 newton ke atas dan anak panah berat 50 newton ke bawah",
      },
    },
    {
      nama: "R_KINETIK", kunci: "grafkinetik",
      hentian: '{n:2, tempat:"Buaian", sk:"7.2 / 7.3 Tenaga keupayaan, kinetik dan keabadian",',
      spek: {
        jenis: "graf", titik: true, petunjuk: true, grid: 4, yMin: 0, yMaks: 200,
        x: [0, 5, 10, 15, 20],
        siri: [{ label: "Tenaga kinetik (kJ)", warna: "ungu", y: [0, 12.5, 50, 112.5, 200] }],
        xLabel: "Laju kereta (m/s)",
        kapsyen: "Rajah 1 · Tenaga kinetik sebuah kereta berjisim 1000 kg pada laju berbeza.",
        alt: "Graf lengkung menaik: tenaga kinetik 12.5 kilojoule pada 5 meter sesaat dan 50 kilojoule pada 10 meter sesaat, jadi laju berganda memberi tenaga empat kali ganda",
      },
    },
  ],
  tukar: [
    ['t:"Kerja ditakrifkan sebagai:"', 't:"Berdasarkan Rajah 1, kerja ditakrifkan sebagai:"'],
    ['t:"Sebuah kereta bergerak dua kali lebih laju tanpa perubahan jisim. Apakah yang berlaku kepada tenaga kinetiknya?"',
     't:"Berdasarkan Rajah 1, sebuah kereta bergerak dua kali lebih laju tanpa perubahan jisim. Apakah yang berlaku kepada tenaga kinetiknya?"'],
  ],
},

/* ---------------- t3b8 Laluan Sinaran ---------------- */
{
  bab: "t3b8",
  rajah: [
    {
      nama: "R_TEMBUSAN", kunci: "tembusan",
      hentian: '{n:1, tempat:"Makmal Curie", sk:"8.1 Sejarah penemuan keradioaktifan",',
      spek: {
        jenis: "aliran", mod: "siratan",
        nod: [
          { id: "a", label: "Alfa", x: 0, y: 0 },
          { id: "b", label: "Beta", x: 1, y: 0 },
          { id: "g", label: "Gama", x: 2, y: 0 },
          { id: "a2", label: "Kertas", x: 0, y: 1 },
          { id: "b2", label: "Aluminium", x: 1, y: 1 },
          { id: "g2", label: "Plumbum", x: 2, y: 1 },
        ],
        panah: [["a", "a2"], ["b", "b2"], ["g", "g2"]],
        kapsyen: "Rajah 1 · Bahan paling nipis yang dapat menghentikan setiap jenis sinaran.",
        alt: "Tiga lajur: zarah alfa dihentikan oleh kertas, zarah beta oleh aluminium, dan sinar gama hanya oleh plumbum",
      },
    },
    {
      nama: "R_ATOM", kunci: "atomlitium",
      hentian: '{n:2, tempat:"Nukleus", sk:"8.2 / 8.3 Atom, ion dan jenis sinaran",',
      spek: {
        jenis: "struktur", mod: "label",
        bahagian: [
          { bentuk: "bulat", x: 50, y: 50, r: 45, isi: "kertas2", garis: "garis" },
          { label: "Elektron (3)", bentuk: "bulat", x: 50, y: 11, r: 3.5, isi: "ungu", garis: "ungu" },
          { bentuk: "bulat", x: 11, y: 69.5, r: 3.5, isi: "ungu", garis: "ungu" },
          { bentuk: "bulat", x: 89, y: 69.5, r: 3.5, isi: "ungu", garis: "ungu" },
          { bentuk: "bulat", x: 50, y: 50, r: 15, isi: "kertas", garis: "garis2" },
          { label: "Proton (3)", bentuk: "bulat", x: 50, y: 43.3, r: 3.5, isi: "merah", garis: "merah" },
          { bentuk: "bulat", x: 43.1, y: 53.3, r: 3.5, isi: "merah", garis: "merah" },
          { bentuk: "bulat", x: 56.9, y: 53.3, r: 3.5, isi: "merah", garis: "merah" },
          { label: "Neutron (4)", bentuk: "bulat", x: 50, y: 56.7, r: 3.5, isi: "tinta3", garis: "tinta3" },
          { bentuk: "bulat", x: 43.1, y: 46.7, r: 3.5, isi: "tinta3", garis: "tinta3" },
          { bentuk: "bulat", x: 56.9, y: 46.7, r: 3.5, isi: "tinta3", garis: "tinta3" },
          { bentuk: "bulat", x: 50, y: 50, r: 3.5, isi: "tinta3", garis: "tinta3" },
        ],
        kapsyen: "Rajah 1 · Model atom litium yang neutral.",
        alt: "Model atom: nukleus mengandungi tiga proton dan empat neutron, dikelilingi tiga elektron di luar nukleus",
      },
    },
  ],
  tukar: [
    ['t:"Sinaran yang paling tinggi kuasa penembusannya ialah:"',
     't:"Berdasarkan Rajah 1, sinaran yang paling tinggi kuasa penembusannya ialah:"'],
    ['t:"Mengapakah atom neutral secara keseluruhan?"',
     't:"Berdasarkan Rajah 1, mengapakah atom neutral secara keseluruhan?"'],
  ],
},

/* ---------------- t3b9 Laluan Suria ---------------- */
{
  bab: "t3b9",
  rajah: [
    {
      nama: "R_TOMPOK", kunci: "graftompok",
      hentian: '{n:1, tempat:"Teras Matahari", sk:"9.1 Struktur dan fenomena Matahari",',
      spek: {
        jenis: "graf", petunjuk: true, grid: 4, yMin: 0, yMaks: 100, setiap: 2,
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        siri: [{ label: "Bilangan tompok", warna: "kuning",
                 y: [98, 90, 70, 43, 19, 4, 4, 19, 43, 70, 90, 98, 90, 70, 43, 19, 4, 4, 19, 43, 70, 90, 98] }],
        xLabel: "Tahun",
        kapsyen: "Rajah 1 · Bilangan tompok matahari yang direkod selama 22 tahun.",
        alt: "Graf gelombang: bilangan tompok matahari memuncak pada tahun sifar, tahun ke-11 dan tahun ke-22, dengan nilai terendah di pertengahan antara setiap puncak",
      },
    },
    {
      nama: "R_AURORA", kunci: "auroraaliran",
      hentian: '{n:2, tempat:"Magnetosfera", sk:"9.1.2 / 9.2 Magnetosfera dan cuaca angkasa",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: ["Angin suria membawa zarah bercas",
              "Zarah menghentam atom gas atmosfera",
              "Atom gas memancarkan cahaya",
              "Aurora kelihatan di langit"],
        kapsyen: "Rajah 1 · Urutan kejadian yang menghasilkan aurora.",
        alt: "Rajah aliran menegak: angin suria membawa zarah bercas, zarah menghentam atom gas atmosfera, atom gas memancarkan cahaya, lalu aurora kelihatan di langit",
      },
    },
  ],
  tukar: [
    ['t:"Kitaran suria berulang lebih kurang setiap:"',
     't:"Berdasarkan Rajah 1, kitaran suria berulang lebih kurang setiap:"'],
    ['t:"Bagaimanakah aurora terbentuk?"',
     't:"Berdasarkan Rajah 1, bagaimanakah aurora terbentuk?"'],
  ],
},

/* ---------------- t3b10 Laluan Angkasa ---------------- */
{
  bab: "t3b10",
  rajah: [
    {
      nama: "R_GEO", kunci: "geosentrik",
      hentian: '{n:1, tempat:"Planetarium", sk:"10.1 / 10.2 Sejarah astronomi dan penerokaan angkasa",',
      spek: {
        jenis: "struktur", mod: "label",
        bahagian: [
          { bentuk: "bulat", x: 50, y: 50, r: 40, isi: "kertas2", garis: "garis" },
          { label: "Matahari", bentuk: "bulat", x: 50, y: 11, r: 6, isi: "kuning", garis: "kuning" },
          { label: "Bumi", bentuk: "bulat", x: 50, y: 50, r: 8, isi: "hijau", garis: "hijau" },
          { label: "Bulan", bentuk: "bulat", x: 11, y: 69.5, r: 4.5, isi: "kertas", garis: "garis2" },
          { label: "Planet", bentuk: "bulat", x: 89, y: 69.5, r: 5, isi: "ungu", garis: "ungu" },
        ],
        kapsyen: "Rajah 1 · Model Sistem Suria yang diterima sebelum abad ke-16.",
        alt: "Bumi berada di tengah satu bulatan, manakala Matahari, Bulan dan sebuah planet terletak pada bulatan yang mengelilingi Bumi",
      },
    },
    {
      nama: "R_ROKET", kunci: "roketaliran",
      hentian: '{n:2, tempat:"Model Suria", sk:"10.1 / 10.2 Memahami model dan teknologi angkasa",',
      spek: {
        jenis: "aliran", mod: "turun",
        nod: ["Bahan api dibakar dalam enjin",
              "Gas panas ditolak ke bawah",
              "Gas menolak roket ke atas",
              "Roket memecut ke angkasa"],
        kapsyen: "Rajah 1 · Urutan daya yang menaikkan sebuah roket.",
        alt: "Rajah aliran menegak: bahan api dibakar dalam enjin, gas panas ditolak ke bawah, gas menolak roket ke atas, roket memecut ke angkasa",
      },
    },
  ],
  tukar: [
    ['t:"Model Sistem Suria yang meletakkan Bumi di pusat ialah model:"',
     't:"Berdasarkan Rajah 1, model Sistem Suria yang meletakkan Bumi di pusat ialah model:"'],
    ['t:"Bagaimanakah roket bergerak ke atas?"',
     't:"Berdasarkan Rajah 1, bagaimanakah roket bergerak ke atas?"'],
  ],
},

];
