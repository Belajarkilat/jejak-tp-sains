/* Sumber kandungan — Sains KSSM Tingkatan 1, Bidang 7.0 Udara.
   Jalankan `node bina.js t1b7` untuk menyemak dan menghasilkan bank-t1b7.js.

   Standard Prestasi disalin daripada DSKP KSSM Sains Tingkatan 1, muka 64.
   DSKP menulis satu Standard Prestasi untuk Bab 5 hingga 7; di sini hanya
   bahagian "udara" dikekalkan. Perkataan "dalam" yang tertinggal pada TP5
   DSKP ditambah.

   Peratus karbon dioksida tidak ditanya sebagai nombor tepat kerana buku
   teks lama menulis 0.03% manakala nilai semasa melebihi 0.04%.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai udara.",
"Memahami udara serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan udara untuk menerangkan kejadian atau fenomena alam dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai struktur udara dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai udara dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekabentuk persembahan pelbagai media/visual/folio/poster/main peranan/drama secara kreatif dan inovatif dengan menggunakan pengetahuan dan kemahiran sains mengenai udara dalam konteks penyelesaian masalah dan membuat keputusan dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_UDARA = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 4,
  "yMaks": 80,
  "bar": [
    {
      "label": "Nitrogen",
      "nilai": 78,
      "warna": "ungu"
    },
    {
      "label": "Oksigen",
      "nilai": 21,
      "warna": "merah"
    },
    {
      "label": "Lain-lain",
      "nilai": 1,
      "warna": "kuning"
    }
  ],
  "xLabel": "Peratus isi padu udara kering",
  "kapsyen": "Rajah 1 · Komposisi udara kering.",
  "alt": "Graf palang: nitrogen 78 peratus, oksigen 21 peratus, gas lain 1 peratus daripada isi padu udara kering"
};

const R_KARBON = {
  "jenis": "aliran",
  "mod": "kitar",
  "nod": [
    "Karbon dioksida di udara",
    "Fotosintesis",
    "Karbon dalam hidupan",
    "Respirasi & pembakaran"
  ],
  "kapsyen": "Rajah 1 · Kitar karbon.",
  "alt": "Rajah kitaran empat kotak: karbon dioksida di udara, fotosintesis, karbon dalam hidupan, respirasi dan pembakaran"
};

const T_LILIN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Balang</th>'+
'<th class="n">Isi padu udara (cm&sup3;)</th><th class="n">Masa lilin menyala (s)</th></tr></thead><tbody>'+
'<tr><td>A</td><td class="n">250</td><td class="n">8</td></tr>'+
'<tr><td>B</td><td class="n">500</td><td class="n">16</td></tr>'+
'<tr><td>C</td><td class="n">1000</td><td class="n">33</td></tr>'+
'</tbody></table></div><p class="qnote">Lilin yang sama saiz dinyalakan, kemudian ditelangkupkan dengan balang berlainan saiz. Data rekaan.</p>';

const T_IPU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Hari</th>'+
'<th class="n">Bacaan IPU</th><th>Peristiwa di kawasan itu</th></tr></thead><tbody>'+
'<tr><td>Isnin</td><td class="n">45</td><td>Hari biasa, angin kuat</td></tr>'+
'<tr><td>Selasa</td><td class="n">60</td><td>Kesesakan lalu lintas</td></tr>'+
'<tr><td>Rabu</td><td class="n">130</td><td>Pembakaran terbuka di ladang berhampiran</td></tr>'+
'<tr><td>Khamis</td><td class="n">185</td><td>Pembakaran berterusan, tiada angin</td></tr>'+
'<tr><td>Jumaat</td><td class="n">70</td><td>Hujan lebat pada waktu pagi</td></tr>'+
'</tbody></table></div><p class="qnote">Indeks Pencemar Udara (IPU): 0&ndash;50 baik, 51&ndash;100 sederhana, 101&ndash;200 tidak sihat, 201&ndash;300 sangat tidak sihat, lebih 300 berbahaya. Data rekaan.</p>';

const T_PADAM =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Jenis pemadam</th>'+
'<th>Cara memadam</th><th>Sesuai untuk</th><th>Tidak sesuai untuk</th></tr></thead><tbody>'+
'<tr><td>Air</td><td>Menyejukkan bahan api</td><td>Kertas, kayu, kain</td><td>Minyak, alat elektrik</td></tr>'+
'<tr><td>Karbon dioksida</td><td>Menyingkirkan oksigen</td><td>Alat elektrik, cecair mudah terbakar</td><td>Ruang terbuka berangin</td></tr>'+
'<tr><td>Serbuk kering</td><td>Menyelaputi bahan api</td><td>Kebanyakan jenis kebakaran</td><td>Meninggalkan serbuk pada peralatan</td></tr>'+
'<tr><td>Selimut api</td><td>Menyingkirkan oksigen</td><td>Kuali minyak kecil, pakaian terbakar</td><td>Kebakaran besar</td></tr>'+
'</tbody></table></div><p class="qnote">Ringkasan pemadam api yang biasa ditemui di sekolah dan rumah.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Langit Biru", sk:"7.1 Komposisi udara dan kepentingan gas", lampiran:"komposisi",
 kadNama:"Nitrogen", kadEm:"\u{1F32C}", kadFakta:"Hampir empat perlima udara ialah nitrogen, gas yang tidak berwarna dan tidak berbau.",
 bosKadNama:"Karbon Dioksida", bosKadEm:"\u{1F964}", bosKadFakta:"Buih dalam minuman berkarbonat ialah karbon dioksida yang dilarutkan di bawah tekanan.",
 soalan:[
 {j:"pilih",t:"Gas yang paling banyak dalam udara ialah:",p:["Nitrogen","Oksigen","Karbon dioksida","Argon"],b:0,u:"Nitrogen kira-kira 78% udara."},
 {j:"pilih",t:"Berdasarkan Rajah 1, peratus oksigen dalam udara kering ialah kira-kira:",p:["21%","78%","50%","1%"],b:0,u:"Kira-kira satu perlima udara ialah oksigen."},
 {j:"pilih",t:"Udara dikelaskan sebagai:",p:["Campuran","Sebatian","Unsur","Atom"],b:0,u:"Gas dalam udara tidak bergabung secara kimia, dan komposisinya boleh berubah."},
 {j:"pilih",t:"Gas yang diperlukan untuk respirasi dan pembakaran ialah:",p:["Oksigen","Nitrogen","Helium","Neon"],b:0,u:"Oksigen digunakan untuk membebaskan tenaga daripada glukosa dan bahan api."},
 {j:"pilih",t:"Gas yang digunakan oleh tumbuhan untuk fotosintesis ialah:",p:["Karbon dioksida","Oksigen","Nitrogen","Karbon monoksida"],b:0,u:"Karbon dioksida dan air digunakan untuk menghasilkan glukosa."},
 {j:"pilih",t:"Mengapakah paket keropok diisi dengan gas nitrogen?",p:["Nitrogen tidak merosakkan makanan","Nitrogen menjadikan keropok lebih manis","Nitrogen memberi warna kepada keropok","Nitrogen menjadikan paket lebih berat"],b:0,u:"Tanpa oksigen, keropok tidak mudah tengik. Gas juga melindungi keropok daripada hancur."},
 {j:"pilih",t:"Selain gas, udara juga mengandungi:",p:["Wap air dan habuk","Air sungai dan pasir pantai","Garam dan gula","Minyak dan lemak"],b:0,u:"Kandungan wap air dan habuk berubah mengikut tempat dan masa."},
 {j:"banyak",t:"Pilih SEMUA padanan gas dan kegunaan yang BETUL.",p:["Helium: mengisi belon","Karbon dioksida: pemadam api","Oksigen: rawatan pesakit di hospital","Nitrogen: bahan api kereta","Neon: bahan pengawet buah"],b:[0,1,2],u:"Nitrogen bukan bahan api, dan neon digunakan dalam lampu iklan."}],
 bos:{j:"pilih",t:"Dalam kitar karbon, proses yang MENGELUARKAN karbon dioksida daripada udara ialah:",p:["Fotosintesis","Respirasi sel","Pembakaran","Penguraian"],b:0,u:"Respirasi, pembakaran dan penguraian membebaskan karbon dioksida."}},

{n:2, tempat:"Dapur Api", sk:"7.1 / 7.2 / 7.3 Kitar gas, pembakaran dan pencemaran", lampiran:"kitarkarbon",
 kadNama:"Segi Tiga Api", kadEm:"\u{1F525}", kadFakta:"Api memerlukan tiga perkara: bahan api, oksigen dan haba. Buang satu, dan api akan padam.",
 bosKadNama:"Jerebu", bosKadEm:"\u{1F32B}", bosKadFakta:"Jerebu di Malaysia sering berpunca daripada pembakaran terbuka hutan dan tanah gambut, termasuk dari negara jiran.",
 soalan:[
 {j:"pilih",t:"Tiga syarat pembakaran ialah:",p:["Bahan api, oksigen dan haba","Air, oksigen dan cahaya","Nitrogen, haba dan bahan api","Karbon dioksida, air dan haba"],b:0,u:"Ini dikenali sebagai segi tiga api."},
 {j:"pilih",t:"Mengapakah air tidak boleh digunakan untuk memadam kebakaran minyak masak?",p:["Minyak terapung dan api merebak","Air bertukar menjadi minyak apabila panas","Api menyerap air dengan terlalu cepat","Air menambah oksigen kepada minyak"],b:0,u:"Air juga mendidih dengan cepat dan memercikkan minyak panas."},
 {j:"pilih",t:"Bagaimanakah selimut api memadamkan api?",p:["Menyekat bekalan oksigen","Menyejukkan bahan api dengan air","Menambah karbon dioksida ke dalam api","Menghilangkan bahan api terus"],b:0,u:"Tanpa oksigen, pembakaran tidak dapat diteruskan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah penebangan hutan secara besar-besaran meningkatkan karbon dioksida di udara?",p:["Kurang pokok untuk menyerap karbon dioksida","Pokok yang ditebang membebaskan oksigen tambahan ke udara","Tanah yang terdedah menyerap lebih banyak nitrogen","Hutan yang ditebang menghasilkan lebih banyak wap air"],b:0,u:"Pembakaran sisa pokok turut membebaskan karbon dioksida."},
 {j:"pilih",t:"Gas pencemar daripada ekzos kenderaan yang menghalang darah membawa oksigen ialah:",p:["Karbon monoksida","Nitrogen","Oksigen","Nitrogen dioksida"],b:0,u:"Karbon monoksida bergabung dengan hemoglobin lebih kuat daripada oksigen."},
 {j:"pilih",t:"Sulfur dioksida dari kilang boleh menyebabkan:",p:["Hujan asid","Penipisan salji","Gempa bumi","Air pasang besar"],b:0,u:"Sulfur dioksida larut dalam air hujan membentuk asid."},
 {j:"pilih",t:"Mengapakah peningkatan karbon dioksida di udara membimbangkan?",p:["Ia memerangkap haba dan menyebabkan pemanasan global","Ia menjadikan udara berwarna kelabu dan gelap","Ia menghalang semua tumbuhan daripada bernafas","Ia mengurangkan nitrogen dalam udara dengan banyak"],b:0,u:"Ini dikenali sebagai kesan rumah hijau yang dipertingkat."},
 {j:"pilih",t:"Pembakaran tidak lengkap dalam dapur gas yang kurang oksigen menghasilkan:",p:["Karbon monoksida dan jelaga","Oksigen dan wap air yang bersih","Nitrogen dan helium","Glukosa dan oksigen"],b:0,u:"Nyalaan kuning berjelaga ialah tanda pembakaran tidak lengkap."}],
 bos:{j:"banyak",t:"Pilih SEMUA langkah yang MENGURANGKAN pencemaran udara.",p:["Menggunakan pengangkutan awam","Memasang penapis pada cerobong kilang","Tidak melakukan pembakaran terbuka","Membakar sampah di belakang rumah","Menghidupkan enjin kereta ketika menunggu lama"],b:[0,1,2],u:"Membakar sampah dan enjin yang dibiarkan hidup membebaskan bahan pencemar."}},

{n:3, tempat:"Balang Lilin", sk:"7.1 / 7.2 Oksigen dan pembakaran", lampiran:"lilin",
 kadNama:"Lilin", kadEm:"\u{1F56F}", kadFakta:"Lilin padam di dalam balang tertutup kerana oksigen yang diperlukan untuk pembakaran semakin berkurangan.",
 bosKadNama:"Kayu Uji Berbara", bosKadEm:"\u{1FAB5}", bosKadFakta:"Kayu uji berbara menyala semula di dalam oksigen tulen. Ini ujian kehadiran oksigen.",
 soalan:[
 {j:"pilih",t:"Mengapakah lilin padam selepas beberapa saat?",p:["Oksigen di dalam balang berkurang","Lilin kehabisan lilin sepenuhnya","Balang menjadi terlalu sejuk","Nitrogen menyalakan lilin"],b:0,u:"Pembakaran menggunakan oksigen."},
 {j:"pilih",t:"Apakah hubungan yang ditunjukkan oleh data?",p:["Balang besar, lilin menyala lebih lama","Semakin besar balang, semakin cepat lilin padam","Isi padu udara tidak mempengaruhi masa menyala","Lilin menyala sama lama dalam semua balang"],b:0,u:"Balang besar mengandungi lebih banyak oksigen."},
 {j:"pilih",t:"Apakah pemboleh ubah dimanipulasi dalam eksperimen ini?",p:["Isi padu udara","Masa lilin menyala","Saiz lilin","Jenis lilin"],b:0,u:"Saiz lilin dimalarkan."},
 {j:"nombor",t:"Ramalkan masa lilin menyala di dalam balang 2000 cm³, dalam saat.",b:66,tol:0.1,suf:"s",u:"Masa lebih kurang berganda apabila isi padu berganda: 33 × 2 = 66 s."},
 {j:"pilih",t:"Jika balang A diisi oksigen tulen, apakah yang paling mungkin berlaku?",p:["Lilin menyala lebih lama dan lebih terang","Lilin padam dengan serta-merta","Lilin menyala sama seperti dalam udara","Lilin tidak dapat dinyalakan langsung"],b:0,u:"Oksigen tulen kira-kira lima kali lebih banyak oksigen daripada udara."},
 {j:"pilih",t:"Balang ditelangkupkan di atas air. Air naik kira-kira satu perlima ke dalam balang selepas lilin padam dan sejuk. Ini menunjukkan:",p:["Satu perlima udara ialah oksigen","Air menyerap semua nitrogen","Lilin menghasilkan air yang banyak","Udara di dalam balang bertambah"],b:0,u:"Air mengisi ruang oksigen yang telah digunakan."},
 {j:"pilih",t:"Api di dalam tong sampah besi padam apabila penutupnya ditutup. Syarat pembakaran yang disingkirkan ialah:",p:["Oksigen","Bahan api","Haba","Cahaya"],b:0,u:"Penutup menyekat udara daripada masuk."},
 {j:"banyak",t:"Pilih SEMUA cara yang berjaya menyingkirkan satu syarat pembakaran.",p:["Menyiram kayu terbakar dengan air","Menutup kuali terbakar dengan penutup","Membina jalur tanpa pokok di hutan","Mengipas api unggun dengan kuat","Menambah ranting kering ke dalam api"],b:[0,1,2],u:"Air menyejukkan, penutup menyekat oksigen, dan jalur tanpa pokok menyingkirkan bahan api."}],
 bos:{j:"pilih",t:"Seorang murid mendakwa lilin padam kerana karbon dioksida yang terhasil 'membunuh' api. Nilaikan dakwaan itu berdasarkan data.",p:["Kurang tepat; masa menyala berkadar dengan isi padu oksigen","Tepat; karbon dioksida sentiasa memadamkan api dengan serta-merta","Tepat; balang kecil menghasilkan lebih banyak karbon dioksida","Kurang tepat; lilin padam kerana balang menjadi terlalu panas"],b:0,u:"Karbon dioksida memang membantu, tetapi punca utama ialah oksigen yang semakin berkurang."}},

{n:4, tempat:"Stesen Cuaca", sk:"7.3 Menganalisis data pencemaran udara", lampiran:"ipu",
 kadNama:"IPU", kadEm:"\u{1F4CA}", kadFakta:"Indeks Pencemar Udara (IPU) di Malaysia dipantau oleh Jabatan Alam Sekitar dan boleh dilihat setiap jam dalam talian.",
 bosKadNama:"Topeng N95", bosKadEm:"\u{1F637}", bosKadFakta:"Topeng N95 menapis zarah halus jerebu dengan lebih berkesan daripada topeng kain biasa.",
 soalan:[
 {j:"pilih",t:"Pada hari manakah kualiti udara berada pada tahap 'baik'?",p:["Isnin","Selasa","Rabu","Jumaat"],b:0,u:"Hanya bacaan 45 berada dalam julat 0 hingga 50."},
 {j:"pilih",t:"Status IPU pada hari Khamis ialah:",p:["Tidak sihat","Baik","Sederhana","Berbahaya"],b:0,u:"185 berada dalam julat 101 hingga 200."},
 {j:"pilih",t:"Punca utama bacaan IPU yang tinggi pada Rabu dan Khamis ialah:",p:["Pembakaran terbuka","Hujan lebat","Angin kuat","Hari cuti umum"],b:0,u:"Asap pembakaran mengandungi zarah halus dan gas pencemar."},
 {j:"pilih",t:"Mengapakah bacaan Khamis lebih tinggi daripada Rabu walaupun sumbernya sama?",p:["Tiada angin untuk menyebarkan bahan pencemar","Pembakaran sudah berhenti pada hari Khamis","Hujan membawa bahan pencemar turun","Lebih banyak pokok ditanam pada hari Khamis"],b:0,u:"Tanpa angin, bahan pencemar terkumpul di kawasan itu."},
 {j:"pilih",t:"Mengapakah bacaan IPU turun pada hari Jumaat?",p:["Hujan membersihkan zarah dari udara","Jumaat hari cuti, jadi tiada kereta","Pembakaran terbuka menjadi lebih teruk","Suhu yang tinggi memusnahkan asap"],b:0,u:"Titisan hujan membawa zarah dan sebahagian gas pencemar ke tanah."},
 {j:"nombor",t:"Berapakah kenaikan bacaan IPU dari Isnin hingga Khamis?",b:140,tol:0.5,suf:"mata",u:"185 − 45 = 140."},
 {j:"pilih",t:"Kumpulan manakah paling berisiko pada hari Khamis?",p:["Murid yang menghidap asma","Murid yang memakai cermin mata","Murid yang tinggi","Murid yang suka membaca"],b:0,u:"Zarah halus merengsakan saluran pernafasan."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Pembakaran terbuka meningkatkan IPU","Angin membantu menyebarkan bahan pencemar","Hujan membantu mengurangkan IPU","Kesesakan lalu lintas tidak menambah pencemaran langsung","IPU sentiasa sama setiap hari"],b:[0,1,2],u:"IPU naik dari 45 ke 60 semasa kesesakan, jadi kenderaan turut menyumbang."}],
 bos:{j:"pilih",t:"Pengetua perlu memutuskan aktiviti sukan luar pada hari Khamis. Keputusan paling wajar?",p:["Pindahkan aktiviti ke dalam dewan","Teruskan kerana murid perlu bersenam","Teruskan tetapi tambah masa aktiviti","Batalkan sekolah sepanjang minggu"],b:0,u:"Pada tahap tidak sihat, aktiviti fizikal di luar patut dikurangkan."}},

{n:5, tempat:"Latihan Kebakaran", sk:"7.2 Menilai pilihan pemadam api", lampiran:"padam",
 kadNama:"Alat Pemadam Api", kadEm:"\u{1F9EF}", kadFakta:"Cara guna pemadam api: tarik pin, tuju muncung ke pangkal api, tekan pemegang, dan sapu dari sisi ke sisi.",
 bosKadNama:"Bomba", bosKadEm:"\u{1F692}", bosKadFakta:"Nombor kecemasan 999 di Malaysia menghubungkan pemanggil kepada bomba, polis dan ambulans.",
 soalan:[
 {j:"pilih",t:"Komputer di makmal ICT terbakar. Pemadam api paling sesuai?",p:["Karbon dioksida","Air","Selimut api","Pasir basah"],b:0,u:"Karbon dioksida tidak mengkonduksi elektrik dan tidak meninggalkan sisa."},
 {j:"pilih",t:"Kuali minyak kecil di kantin terbakar. Tindakan paling selamat?",p:["Tutup dengan selimut api","Siram dengan baldi air","Angkat kuali dan bawa keluar","Kipas api supaya padam"],b:0,u:"Air menyebabkan minyak panas memercik dan api merebak."},
 {j:"pilih",t:"Timbunan kertas di stor terbakar. Pemadam paling murah dan berkesan?",p:["Air","Karbon dioksida","Selimut api","Serbuk kering"],b:0,u:"Air menyejukkan kertas di bawah suhu nyalaan."},
 {j:"pilih",t:"Mengapakah pemadam karbon dioksida kurang berkesan di ruang terbuka yang berangin?",p:["Angin menyebarkan gas itu sebelum ia menyingkirkan oksigen","Karbon dioksida menjadi bahan api apabila ditiup angin","Angin menukar karbon dioksida menjadi oksigen","Karbon dioksida hanya berfungsi di dalam air"],b:0,u:"Gas perlu kekal di sekeliling api untuk menyekat oksigen."},
 {j:"pilih",t:"Seorang pengawal mencadangkan semua pemadam di sekolah ditukar kepada serbuk kering kerana sesuai untuk kebanyakan kebakaran. Nilaikan cadangan itu.",p:["Munasabah, kecuali untuk makmal komputer","Salah, kerana serbuk kering tidak berfungsi langsung","Tepat sepenuhnya, kerana tiada kelemahan sama sekali","Salah, kerana air sentiasa pilihan terbaik"],b:0,u:"Serbuk meninggalkan sisa yang boleh merosakkan peralatan elektronik."},
 {j:"pilih",t:"Baju seorang murid terbakar semasa amali. Tindakan paling wajar?",p:["Balut dengan selimut api, suruh berguling","Suruh murid lari ke sinki untuk mencari air","Sembur pemadam serbuk terus ke muka murid","Biarkan api padam sendiri"],b:0,u:"Berlari menambah oksigen kepada api."},
 {j:"pilih",t:"Kebakaran di bengkel sudah merebak ke siling. Tindakan paling wajar?",p:["Keluar segera dan hubungi 999","Cuba padam sendiri dengan selimut api","Kumpul barang berharga dahulu","Buka semua tingkap dan tunggu"],b:0,u:"Selimut api hanya untuk api kecil; nyawa lebih penting daripada harta."},
 {j:"pilih",t:"Makmal sains baharu perlu satu jenis pemadam api tambahan. Berdasarkan jadual, pilihan paling wajar?",p:["Karbon dioksida","Air","Selimut api sahaja","Tiada keperluan"],b:0,u:"Makmal ada alat elektrik dan cecair mudah terbakar seperti alkohol."}],
 bos:{j:"pilih",t:"Keluarga awak mahu membeli satu pemadam api untuk dapur rumah. Pilihan paling wajar?",p:["Selimut api dan pemadam serbuk kering kecil","Baldi air besar di tepi dapur","Pemadam karbon dioksida gergasi industri","Tidak perlu kerana rumah jarang terbakar"],b:0,u:"Selimut api untuk kuali, dan serbuk kering untuk kebanyakan jenis kebakaran."}},

{n:6, tempat:"Kempen Udara Bersih", sk:"7.1 / 7.2 / 7.3 Mereka bentuk menggunakan pengetahuan udara",
 kadNama:"Dinding Hijau", kadEm:"\u{1F33F}", kadFakta:"Tumbuhan pada dinding bangunan menyerap karbon dioksida, menapis sebahagian habuk dan menyejukkan bangunan.",
 bosKadNama:"Kereta Elektrik", bosKadEm:"\u{1F697}", bosKadFakta:"Kereta elektrik tidak mengeluarkan asap ekzos semasa bergerak, tetapi penjanaan elektriknya masih boleh mencemarkan udara.",
 soalan:[
 {j:"pilih",t:"Awak mereka kempen untuk mengurangkan asap kenderaan di hadapan sekolah semasa waktu pulang. Idea paling berkesan?",p:["Matikan enjin semasa menunggu","Tambah tempat letak kereta di hadapan pagar","Suruh ibu bapa datang lebih awal dan menunggu lama","Tanam rumput di tepi jalan sahaja"],b:0,u:"Enjin yang hidup semasa menunggu membebaskan karbon monoksida dan bahan pencemar lain."},
 {j:"pilih",t:"Awak mereka alat pengesan jerebu ringkas di kelas. Bahan paling sesuai untuk mengumpul zarah?",p:["Kertas putih bersalut vaselin di luar tingkap","Balang kaca tertutup rapat di dalam almari kelas","Cermin yang dilap setiap jam","Kain hitam yang dibasuh setiap hari"],b:0,u:"Zarah melekat pada vaselin dan jelas kelihatan pada kertas putih."},
 {j:"pilih",t:"Awak merancang pelan pemindahan kebakaran untuk kelas. Ciri paling penting?",p:["Laluan keluar dan tempat berkumpul","Nama penuh semua murid dalam kelas","Senarai buku teks yang perlu dibawa keluar","Warna cat dinding dan lantai kelas"],b:0,u:"Pelan yang baik membantu semua orang keluar dengan cepat dan selamat."},
 {j:"pilih",t:"Petani di kampung awak membakar jerami padi selepas menuai. Cadangan alternatif paling praktikal?",p:["Jadikan jerami baja kompos atau makanan ternakan","Bakar jerami pada waktu malam supaya tidak nampak","Buang jerami ke dalam sungai berhampiran","Tinggalkan jerami di jalan raya"],b:0,u:"Kompos mengembalikan nutrien kepada tanah tanpa asap."},
 {j:"pilih",t:"Awak mereka poster untuk hari jerebu. Nasihat paling tepat?",p:["Kurangkan aktiviti luar dan minum banyak air","Buka tingkap supaya udara segar masuk","Bersenam lebih lama di luar supaya peparu kuat","Bakar ubat nyamuk untuk menapis udara"],b:0,u:"Pada hari jerebu, tutup tingkap dan kurangkan pendedahan."},
 {j:"pilih",t:"Kelab alam sekitar mahu menanam pokok untuk menyerap karbon dioksida. Lokasi paling berkesan?",p:["Tepi jalan sibuk di sekolah","Di dalam stor yang gelap","Di atas bumbung tanpa air","Di dalam kelas berhawa dingin"],b:0,u:"Pokok memerlukan cahaya dan air, dan paling berguna dekat punca pencemaran."},
 {j:"pilih",t:"Awak mereka dapur memasak yang kurang asap untuk perkhemahan. Ciri paling penting?",p:["Lubang udara supaya pembakaran lengkap","Dinding tertutup rapat tanpa lubang","Guna kayu basah supaya api kecil","Letak dapur di dalam khemah"],b:0,u:"Bekalan oksigen yang cukup mengurangkan jelaga dan karbon monoksida."},
 {j:"pilih",t:"Bagaimanakah awak mengukur keberkesanan kempen 'matikan enjin' di sekolah?",p:["Kira kereta yang mematikan enjin sebelum dan selepas kempen","Tanya pengetua sama ada kempen itu bagus atau tidak","Kira bilangan poster yang dicetak","Ukur suhu di hadapan pagar sekolah sekali"],b:0,u:"Data sebelum dan selepas menunjukkan perubahan tingkah laku."}],
 bos:{j:"buka",
  t:"Kawasan sekolah awak sering dilanda jerebu dan asap kenderaan. Reka satu projek atau kempen untuk memperbaiki kualiti udara di sekolah dan kawasan sekitarnya.",
  arahan:"Terangkan projek atau kempen awak, bahan pencemar dan puncanya, bagaimana projek itu menggunakan pengetahuan tentang komposisi udara, kitar karbon atau pembakaran, bagaimana keberkesanannya diukur (contohnya bacaan IPU), serta kos dan penglibatan komuniti.",
  u:"Jawapan TP6 yang kukuh menamakan bahan pencemar yang betul dan puncanya, mengaitkan penyelesaian dengan konsep sains, dan merancang pengukuran yang realistik."}}
];

module.exports = {
  id:"t1b7", tingkatan:1, kod:"7.0 Udara",
  tajuk:"Laluan Udara",
  subtajuk:"Sains Ting. 1 · Bab 7 Udara",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali komposisi udara, kegunaan gas dan syarat pembakaran. Langkah seterusnya ialah menjelaskan kitar oksigen dan kitar karbon.",
   2:"{n} memahami kitar gas, prinsip pemadam api dan punca pencemaran udara serta dapat menjelaskannya. Perlu lebih banyak latihan mentafsir data eksperimen.",
   3:"{n} boleh mentafsir eksperimen lilin untuk mengaitkan oksigen dengan pembakaran dan membuat ramalan mudah. Galakkan menyatakan pemboleh ubah dengan jelas.",
   4:"{n} mampu menganalisis data IPU untuk mengenal pasti punca dan faktor yang mempengaruhi pencemaran udara. Seterusnya latih membuat keputusan berdasarkan data.",
   5:"{n} dapat menilai pilihan pemadam api untuk situasi berbeza dan membuat keputusan yang selamat. Sudah bersedia untuk tugasan reka bentuk.",
   6:"{n} berjaya mereka bentuk projek atau kempen udara bersih yang praktikal dan disokong konsep sains. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Udara. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ komposisi:R_UDARA, kitarkarbon:R_KARBON, lilin:T_LILIN, ipu:T_IPU, padam:T_PADAM },
  aras:ARAS
};
