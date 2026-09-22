/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 4.0 Teknologi Hijau dalam Melestarikan Alam.
   Fail ini disunting tangan. Jalankan `node bina.js t4b2` untuk menyemaknya
   dan menghasilkan bank-t4b2.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4, Bahagian Pembangunan Kurikulum, muka 64.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai teknologi hijau dalam melestarikan alam.",
"Memahami teknologi hijau dalam melestarikan alam dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai teknologi hijau dalam melestarikan alam dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai teknologi hijau dalam melestarikan alam dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai teknologi hijau dalam melestarikan alam dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai teknologi hijau dalam melestarikan alam dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

/* Rajah ditulis sebagai spesifikasi, bukan SVG. bina.js menjananya. */

const R_TONGGAK = {
  jenis:"struktur", mod:"lapisan",
  lapisan:[
    { label:"Ekonomi", tebal:1, isi:"lembayungLembut" },
    { label:"Sosial", tebal:1, isi:"kuningLembut" },
    { label:"Alam Sekitar", tebal:1, isi:"hijauLembut" }
  ],
  kapsyen:"Rajah 1 · Tiga tonggak kelestarian; alam sekitar menjadi asas kepada sosial dan ekonomi.",
  alt:"Rajah tiga bulatan sepusat: alam sekitar di lapisan luar, sosial di tengah, ekonomi di dalam"
};

const R_SISA = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Pencegahan & pengurangan sisa", isi:"hijauLembut", panah:"hijau" },
    { label:"Pengasingan & kitar semula", isi:"kuningLembut", panah:"kuning" },
    { label:"Rawatan & pemprosesan (proses biologi)", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Kurangkan, guna semula, kitar semula (3R)", isi:"hijauLembut" }
  ],
  kapsyen:"Rajah 1 · Empat konsep pengurusan sisa dan air sisa mengikut DSKP.",
  alt:"Rajah aliran menegak empat konsep pengurusan sisa: pencegahan dan pengurangan, pengasingan dan kitar semula, rawatan dan pemprosesan, tiga R"
};

const T_HUTAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Daerah</th>'+
'<th class="n">Ditebang (ha/tahun)</th><th class="n">Ditanam Semula (ha/tahun)</th><th>Catatan</th></tr></thead><tbody>'+
'<tr><td>Daerah A</td><td class="n">120</td><td class="n">40</td><td>Ladang kelapa sawit baharu</td></tr>'+
'<tr><td>Daerah B</td><td class="n">60</td><td class="n">70</td><td>Program tanam semula komuniti</td></tr>'+
'<tr><td>Daerah C</td><td class="n">200</td><td class="n">30</td><td>Pembalakan komersial aktif</td></tr>'+
'<tr><td>Daerah D</td><td class="n">15</td><td class="n">25</td><td>Kawasan hutan simpan dilindungi</td></tr>'+
'</tbody></table></div><p class="qnote">Data anggaran tahunan bagi tujuan latihan. Kawasan ditebang termasuk pembukaan tanah untuk pertanian dan pembalakan.</p>';

const T_BAHANAPI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bahan Api</th>'+
'<th class="n">Anggaran CO2 (g/km)</th><th class="n">Kos Relatif</th><th>Ketersediaan Stesen</th></tr></thead><tbody>'+
'<tr><td>Petrol biasa (RON95)</td><td class="n">180</td><td class="n">Sederhana</td><td>Meluas di seluruh negara</td></tr>'+
'<tr><td>Biodiesel B10</td><td class="n">140</td><td class="n">Sederhana</td><td>Terhad di sesetengah stesen</td></tr>'+
'<tr><td>Gas asli termampat (CNG)</td><td class="n">120</td><td class="n">Rendah</td><td>Sangat terhad, perlu tangki khas</td></tr>'+
'<tr><td>Kenderaan elektrik (grid biasa)</td><td class="n">95</td><td class="n">Tinggi (kos awal)</td><td>Semakin bertambah di bandar</td></tr>'+
'</tbody></table></div><p class="qnote">Anggaran CO2 termasuk pengeluaran dan pembakaran bahan api. Kos relatif merujuk kos menukar kenderaan sedia ada.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Tapak Hijau", sk:"4.1 Kelestarian Alam Sekitar", lampiran:"tonggak",
 kadNama:"Panel Suria", kadEm:"☀️", kadFakta:"Panel suria moden dapat menukar lebih 20% tenaga cahaya matahari terus kepada elektrik, berbanding kurang 10% pada teknologi awal 1950-an.",
 bosKadNama:"Tonggak Kelestarian", bosKadEm:"⚖️", bosKadFakta:"Konsep 'triple bottom line' (ekonomi, sosial, alam sekitar) mula diperkenalkan oleh perunding perniagaan pada 1994 untuk mengukur kejayaan syarikat bukan sekadar dari segi keuntungan.",
 soalan:[
 {j:"pilih",t:"Teknologi Hijau boleh ditakrifkan sebagai teknologi yang:",p:["Mesra alam dan cekap tenaga berbanding teknologi konvensional","Menggunakan bahan buatan yang lebih murah berbanding bahan asli yang mahal","Menghasilkan lebih banyak tenaga menggunakan janakuasa arang batu yang besar","Membina bangunan menggunakan konkrit tanpa mengambil kira kesan alam sekitar"],b:0,u:"Teknologi Hijau memberi penekanan kepada kecekapan tenaga dan pengurangan kesan buruk terhadap alam sekitar."},
 {j:"pilih",t:"Tiga tonggak kelestarian yang menjadi asas Teknologi Hijau ialah:",p:["Alam sekitar, sosial dan ekonomi","Air bersih, udara segar dan tanah subur sahaja","Kerajaan, syarikat swasta dan pengguna individu","Tenaga suria, tenaga angin dan tenaga air"],b:0,u:"Ketiga-tiga aspek ini perlu seimbang supaya pembangunan kekal mampan untuk generasi akan datang."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah alam sekitar dilukis sebagai lapisan paling luar?",p:["Sosial dan ekonomi hanya berkembang jika alam sekitar terpelihara","Alam sekitar kurang penting berbanding sosial dan ekonomi","Alam sekitar sentiasa berubah lebih cepat berbanding sosial dan ekonomi","Kerajaan memberi lebih banyak peruntukan kepada alam sekitar"],b:0,u:"Tanpa alam sekitar yang sihat, aktiviti sosial dan ekonomi tidak dapat diteruskan dalam jangka panjang."},
 {j:"banyak",t:"Pilih SEMUA sektor yang tergolong dalam Teknologi Hijau mengikut DSKP.",p:["Tenaga","Pengurusan sisa dan air sisa","Pertanian dan perhutanan","Pengangkutan","Sukan"],b:[0,1,2,3],u:"Sukan bukan salah satu daripada tujuh sektor Teknologi Hijau; sektor lain termasuk bangunan, industri pembuatan dan TMK."},
 {j:"pilih",t:"Bangunan hijau (green building) tergolong dalam sektor:",p:["Bangunan","Pengangkutan","Pertanian dan perhutanan","Industri pembuatan"],b:0,u:"Sektor bangunan menekankan reka bentuk yang cekap tenaga dan mesra alam."},
 {j:"nombor",t:"Berapakah bilangan sektor dalam Teknologi Hijau mengikut DSKP?",b:7,tol:0.5,suf:"sektor",u:"7 sektor: tenaga, pengurusan sisa dan air sisa, pertanian dan perhutanan, pengangkutan, bangunan, industri pembuatan, dan TMK."},
 {j:"pilih",t:"Isu sosiosaintifik bermaksud:",p:["Isu sains yang turut memberi kesan sosial, ekonomi dan alam sekitar","Isu yang hanya boleh dibincangkan oleh ahli sains di dalam makmal sahaja","Isu sukan dan hiburan yang digemari oleh kebanyakan masyarakat setempat","Isu dasar kerajaan yang diputuskan tanpa melibatkan pandangan rakyat"],b:0,u:"Isu sosiosaintifik menghubungkan pengetahuan sains dengan kesan terhadap masyarakat dan alam sekitar."},
 {j:"pilih",t:"Mengapakah Teknologi Hijau penting untuk generasi akan datang?",p:["Ia memenuhi keperluan masa kini tanpa menjejaskan keperluan generasi akan datang","Ia menjamin harga tenaga kekal murah buat selama-lamanya tanpa sebarang kenaikan","Ia menghapuskan sepenuhnya keperluan menggunakan sebarang tenaga elektrik","Ia membenarkan penerokaan sumber asli tanpa had pada kadar yang sama sepanjang masa"],b:0,u:"Inilah takrif asas kemampanan: memenuhi keperluan kini tanpa menjejaskan generasi akan datang."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah BUKAN salah satu tonggak kelestarian dalam Teknologi Hijau?",p:["Teknologi","Alam sekitar","Sosial","Ekonomi"],b:0,u:"Tonggak kelestarian hanya tiga: alam sekitar, sosial dan ekonomi. Teknologi ialah alat untuk mencapai ketiga-tiganya, bukan tonggak itu sendiri."}},

{n:2, tempat:"Litar Tenaga", sk:"4.2 Sektor Tenaga",
 kadNama:"Lampu LED", kadEm:"💡", kadFakta:"Lampu LED menggunakan kira-kira 75% kurang tenaga berbanding mentol pijar biasa dan boleh bertahan sehingga 25 kali lebih lama.",
 bosKadNama:"Grid Pintar", bosKadEm:"🔌", bosKadFakta:"Grid pintar menggunakan sensor digital untuk mengagihkan elektrik dengan lebih cekap, mengurangkan kehilangan tenaga semasa penghantaran.",
 soalan:[
 {j:"pilih",t:"Kecekapan tenaga bermaksud:",p:["Menggunakan tenaga yang lebih sedikit untuk hasil output yang sama","Menghasilkan lebih banyak tenaga tanpa mengambil kira sebarang kos","Menyimpan semua tenaga elektrik di dalam bateri sebelum ia digunakan","Menukar semua stesen janakuasa kepada janakuasa arang batu sepenuhnya"],b:0,u:"Kecekapan tenaga mengurangkan pembaziran tanpa menjejaskan fungsi yang diperlukan."},
 {j:"pilih",t:"Antara berikut, isu sosiosaintifik dalam sektor tenaga ialah:",p:["Pergantungan tinggi kepada bahan api fosil yang lepaskan gas rumah hijau","Pelajar sekolah yang tidak memahami jadual waktu peperiksaan akhir tahun","Peningkatan harga buku teks sains di kedai buku setiap tahun persekolahan","Pengurangan bilangan hari cuti sekolah pada penggal persekolahan kedua"],b:0,u:"Isu ini melibatkan sains, ekonomi dan alam sekitar sekali gus."},
 {j:"pilih",t:"Mengapakah tenaga suria dianggap sebagai penyelesaian Teknologi Hijau bagi sektor tenaga?",p:["Ia sumber tenaga boleh diperbaharui yang tidak akan habis digunakan","Ia menghasilkan tenaga paling banyak berbanding semua sumber yang lain","Ia tidak memerlukan sebarang kos pemasangan awal walau di mana sahaja","Ia hanya boleh digunakan pada waktu malam sahaja sepanjang setahun"],b:0,u:"Matahari ialah sumber tenaga boleh diperbaharui yang berterusan, berbeza daripada bahan api fosil yang terhad."},
 {j:"pilih",t:"Panel suria menukarkan:",p:["Tenaga cahaya kepada tenaga elektrik","Tenaga elektrik kepada tenaga cahaya","Tenaga haba kepada tenaga kinetik","Tenaga bunyi kepada tenaga elektrik"],b:0,u:"Sel suria menggunakan kesan fotovoltan untuk menukar cahaya terus kepada arus elektrik."},
 {j:"banyak",t:"Pilih SEMUA contoh aplikasi Teknologi Hijau dalam sektor tenaga.",p:["Panel suria di atas bumbung rumah","Turbin angin di ladang angin","Janakuasa arang batu tanpa penapis","Sistem lampu LED cekap tenaga"],b:[0,1,3],u:"Janakuasa arang batu tanpa penapis mengeluarkan lebih banyak pencemaran, bukan penyelesaian Teknologi Hijau."},
 {j:"pilih",t:"Apakah maksud tenaga boleh diperbaharui?",p:["Sumber tenaga yang dapat diisi semula secara semula jadi dengan pantas","Sumber tenaga yang tidak pernah langsung digunakan oleh manusia","Sumber tenaga yang hanya terdapat di negara-negara maju sahaja","Sumber tenaga yang mesti disimpan dalam bateri sebelum ia digunakan"],b:0,u:"Matahari, angin dan air ialah antara sumber yang sentiasa diisi semula secara semula jadi."},
 {j:"pilih",t:"Mengapakah kereta elektrik dikaitkan dengan Teknologi Hijau dalam sektor tenaga?",p:["Ia mengurangkan pembakaran bahan api fosil secara terus semasa dipandu","Ia sentiasa lebih murah berbanding kereta berenjin petrol","Ia tidak memerlukan sebarang sumber elektrik untuk berfungsi","Ia hanya boleh digunakan di negara yang mempunyai matahari sepanjang tahun"],b:0,u:"Walaupun penjanaan elektriknya masih perlu diambil kira, kereta elektrik tidak membakar bahan api fosil secara terus semasa dipandu."},
 {j:"pilih",t:"Apakah kesan utama pergantungan tinggi kepada bahan api fosil terhadap alam sekitar?",p:["Peningkatan pelepasan gas rumah hijau yang menyumbang pemanasan global","Peningkatan bilangan pokok yang ditanam di kawasan bandar","Pengurangan suhu purata bumi secara berterusan dan ketara","Peningkatan kualiti udara di kawasan perindustrian besar"],b:0,u:"Pembakaran bahan api fosil melepaskan karbon dioksida, gas rumah hijau utama yang menyumbang kepada pemanasan global."}],
 bos:{j:"pilih",t:"Sebuah sekolah ingin mengurangkan penggunaan tenaga tanpa menjejaskan pembelajaran. Tindakan paling sesuai ialah:",p:["Menukar semua mentol kepada lampu LED cekap tenaga","Menutup semua bilik darjah pada waktu siang sepenuhnya","Memadamkan semua kipas walaupun cuaca panas terik","Menggunakan penjana kuasa diesel sepanjang hari bekerja"],b:0,u:"LED menggunakan tenaga yang jauh lebih sedikit berbanding mentol biasa tanpa menjejaskan keselesaan bilik darjah."}},

{n:3, tempat:"Kitaran Sisa", sk:"4.3 Sektor Pengurusan Sisa dan Air Sisa", lampiran:"sisa",
 kadNama:"Kompos", kadEm:"🌱", kadFakta:"Sisa makanan yang dikomposkan mengurangkan pelepasan gas metana daripada tapak pelupusan sampah, kerana metana terhasil apabila sisa organik reput tanpa oksigen.",
 bosKadNama:"Biogas", bosKadEm:"♻️", bosKadFakta:"Biogas daripada najis haiwan boleh digunakan terus untuk memasak atau dijana menjadi elektrik di sesetengah ladang ternakan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, langkah manakah datang SEBELUM 'Rawatan dan pemprosesan'?",p:["Pengasingan dan kitar semula","Prinsip 3R","Pencegahan dan pengurangan sisa","Tiada langkah sebelum itu"],b:0,u:"Mengikut Rajah 1, sisa diasingkan dan dikitar semula dahulu sebelum baki sisa dirawat dan diproses."},
 {j:"pilih",t:"Konsep 3R merujuk kepada:",p:["Kurangkan, guna semula, kitar semula","Rawat, rehat, rehabilitasi sepenuhnya","Kumpul, rekod, laporkan dengan teliti","Reka, ramal, rumus semula sepenuhnya"],b:0,u:"3R ialah singkatan bagi Reduce, Reuse, Recycle dalam bahasa Melayu: kurangkan, guna semula, kitar semula."},
 {j:"pilih",t:"Sebuah sekolah ingin mengurangkan sisa makanan di kantin. Tindakan yang paling sesuai dengan konsep 'pencegahan dan pengurangan' ialah:",p:["Menetapkan saiz hidangan yang sesuai supaya makanan tidak terbuang","Membina lebih banyak tong sampah baharu di kantin sekolah","Menghantar semua sisa makanan terus ke tapak pelupusan sampah","Menambah bilangan hari susu sekolah pada setiap minggu"],b:0,u:"Pencegahan bermaksud mengelakkan sisa terhasil pada peringkat awal, contohnya dengan mengagak saiz hidangan yang sesuai."},
 {j:"pilih",t:"Sisa organik yang dirawat melalui proses biologi biasanya diubah menjadi:",p:["Tenaga dan baja","Plastik dan getah","Kaca dan seramik","Simen dan konkrit"],b:0,u:"Proses biologi seperti pengkomposan dan penghadaman anaerobik menukar sisa organik kepada baja dan biogas."},
 {j:"banyak",t:"Pilih SEMUA amalan yang tergolong dalam 'pengasingan dan kitar semula'.",p:["Mengasingkan botol plastik daripada sisa makanan","Menghantar kertas terpakai ke pusat kitar semula","Membakar semua sisa tanpa sebarang pengasingan awal","Mengumpul tin aluminium berasingan untuk dijual"],b:[0,1,3],u:"Membakar semua sisa tanpa pengasingan bertentangan dengan konsep kitar semula."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan konsep utama dalam pengurusan sisa dan air sisa mengikut DSKP?",b:4,tol:0.5,suf:"konsep",u:"4 konsep: pencegahan dan pengurangan, pengasingan dan kitar semula, rawatan dan pemprosesan, serta 3R."},
 {j:"pilih",t:"Mengapakah pengasingan sisa di rumah penting sebelum kitar semula?",p:["Sisa bercampur sukar dan mahal untuk diasingkan semula di pusat kitar semula","Ia menjimatkan ruang di dalam tong sampah rumah itu sahaja","Ia diwajibkan oleh undang-undang di semua negara tanpa sebarang pengecualian","Ia menghalang sepenuhnya penghasilan sisa oleh setiap isi rumah"],b:0,u:"Sisa yang sudah bercampur memerlukan lebih banyak masa, tenaga dan kos untuk diasingkan semula di peringkat pusat kitar semula."},
 {j:"pilih",t:"Air sisa domestik yang dirawat dengan baik sebelum dilepaskan ke sungai bertujuan untuk:",p:["Mengelakkan pencemaran air dan menjaga hidupan akuatik","Menambah kandungan garam dalam air sungai itu","Meningkatkan suhu air sungai itu dengan cepat","Menghapuskan semua ikan dalam sungai berkenaan sepenuhnya"],b:0,u:"Rawatan air sisa mengurangkan bahan cemar sebelum ia dilepaskan, melindungi ekosistem sungai."}],
 bos:{j:"pilih",t:"Sebuah kilang membuang air sisa terus ke sungai tanpa rawatan kerana kos rawatan yang tinggi. Apakah kesan paling mungkin?",p:["Pencemaran air yang menjejaskan hidupan akuatik dan sumber air masyarakat sekitar","Peningkatan hasil tangkapan ikan oleh nelayan tempatan","Peningkatan kualiti air minuman berhampiran kilang","Tiada kesan kerana sungai sentiasa membersihkan dirinya serta-merta"],b:0,u:"Air sisa tidak dirawat membawa bahan cemar yang memudaratkan hidupan akuatik dan sumber air masyarakat."}},

{n:4, tempat:"Ladang Lestari", sk:"4.4 Sektor Pertanian dan Perhutanan", lampiran:"hutan",
 kadNama:"Tanaman Semula", kadEm:"🌳", kadFakta:"Sepohon pokok matang boleh menyerap purata 21 kg karbon dioksida setahun daripada atmosfera.",
 bosKadNama:"Imej Satelit", bosKadEm:"🛰️", bosKadFakta:"Saintis menggunakan imej satelit untuk mengesan perubahan kawasan hutan dari angkasa lepas, membolehkan pemantauan penebangan haram.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, daerah manakah menunjukkan kawasan hutan BERTAMBAH setiap tahun?",p:["Daerah B dan Daerah D","Daerah A dan Daerah C","Daerah A sahaja","Semua daerah dalam jadual"],b:0,u:"Daerah B (70 > 60) dan Daerah D (25 > 15) menanam semula lebih daripada kawasan yang ditebang."},
 {j:"pilih",t:"Daerah manakah paling berisiko mengalami kehilangan hutan yang besar mengikut jadual?",p:["Daerah C, kerana kawasan ditebang jauh melebihi kawasan ditanam semula","Daerah D, kerana kawasan ditebang paling sedikit","Daerah B, kerana program tanam semula komuniti aktif","Daerah A, kerana kawasan ditanam semula melebihi separuh kawasan ditebang"],b:0,u:"Daerah C menebang 200 hektar tetapi hanya menanam semula 30 hektar, iaitu jurang paling besar."},
 {j:"nombor",t:"Berapakah beza, dalam hektar, antara kawasan ditebang dan ditanam semula di Daerah A?",b:80,tol:2,suf:"hektar",u:"120 tolak 40 bersamaan 80 hektar."},
 {j:"pilih",t:"Mengapakah program tanam semula komuniti di Daerah B penting berdasarkan data?",p:["Ia membantu mengimbangi kawasan hutan yang hilang","Ia menghapuskan sepenuhnya keperluan untuk menebang pokok langsung","Ia menjamin Daerah B tidak akan mengalami sebarang penebangan lagi selamanya","Ia menggantikan keperluan haiwan liar untuk habitat semula jadi sepenuhnya"],b:0,u:"Penanaman semula yang hampir menyamai kawasan ditebang membantu mengekalkan jumlah kawasan hutan."},
 {j:"pilih",t:"Tenaga bio dalam sektor pertanian terutamanya dihasilkan daripada:",p:["Sisa pertanian seperti najis haiwan dan sisa tanaman","Panel suria yang dipasang di ladang berkenaan","Air terjun berhampiran kawasan pertanian itu","Angin yang bertiup kencang di kawasan terbuka"],b:0,u:"Sisa pertanian seperti najis haiwan boleh diproses melalui penghadaman anaerobik untuk menghasilkan biogas."},
 {j:"pilih",t:"Apakah kesan utama pembukaan hutan secara berlebihan untuk pertanian terhadap alam sekitar?",p:["Kehilangan habitat hidupan liar dan peningkatan hakisan tanah","Peningkatan kepelbagaian biologi hutan yang ketara","Peningkatan kualiti tanah secara automatik dan menyeluruh","Pengurangan suhu kawasan sekitar itu dengan ketara"],b:0,u:"Penebangan hutan besar-besaran memusnahkan habitat semula jadi dan mendedahkan tanah kepada hakisan."},
 {j:"banyak",t:"Berdasarkan jadual, pilih SEMUA pernyataan yang disokong oleh data.",p:["Daerah C mempunyai jurang terbesar antara penebangan dan penanaman semula","Daerah D menebang paling sedikit hutan berbanding daerah lain","Daerah A mengalami penambahan bersih kawasan hutan","Semua daerah menanam semula lebih daripada yang ditebang"],b:[0,1],u:"Daerah A mengalami pengurangan bersih (120 ditebang, hanya 40 ditanam semula), dan bukan semua daerah menanam semula lebih banyak."},
 {j:"pilih",t:"Kaedah paling sesuai untuk mengesahkan keberkesanan program tanam semula di sesebuah daerah ialah:",p:["Bandingkan kawasan hutan dari tahun ke tahun menggunakan imej satelit","Tanya pendapat penduduk setempat tanpa sebarang data sokongan","Kira bilangan pokok yang dijual di nurseri berhampiran sahaja","Anggarkan berdasarkan bilangan poster kempen yang telah diedarkan"],b:0,u:"Data objektif seperti imej satelit memberi bukti sebenar perubahan kawasan hutan berbanding pendapat semata-mata."}],
 bos:{j:"pilih",t:"Kerajaan ingin memilih SATU daerah untuk projek rintis tanam semula hutan berdasarkan keperluan paling mendesak. Daerah manakah paling wajar dipilih?",p:["Daerah C, kerana jurang antara penebangan dan penanaman paling besar","Daerah D, kerana kawasan hutan simpan itu sudah dilindungi","Daerah B, kerana program komuniti itu sudah berjalan dengan baik","Mana-mana daerah dipilih secara rawak tanpa mengira data"],b:0,u:"Sumber terhad patut disalurkan ke kawasan yang paling memerlukan campur tangan, iaitu Daerah C dengan jurang terbesar."}},

{n:5, tempat:"Jejak Pengangkutan", sk:"4.5 Sektor Pengangkutan", lampiran:"bahanapi",
 kadNama:"Kenderaan Elektrik", kadEm:"🔋", kadFakta:"Kenderaan elektrik tidak mengeluarkan sebarang gas ekzos semasa dipandu, walaupun penjanaan elektriknya masih bergantung kepada sumber grid.",
 bosKadNama:"Bahan Api Bio", bosKadEm:"🌾", bosKadFakta:"Biodiesel di Malaysia sering dihasilkan daripada minyak sawit terpakai atau minyak sawit mentah yang diproses.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, bahan api manakah mempunyai anggaran pelepasan CO2 paling rendah?",p:["Kenderaan elektrik (grid biasa)","Petrol biasa sahaja (RON95)","Biodiesel campuran (B10)","Gas asli termampat penuh (CNG)"],b:0,u:"95 g/km ialah nilai paling rendah dalam jadual berbanding pilihan lain."},
 {j:"pilih",t:"Sebuah keluarga berbajet sederhana mahu mengurangkan karbon segera. Pilihan paling wajar berdasarkan jadual ialah:",p:["Biodiesel B10, kos sederhana dan CO2 lebih rendah daripada petrol","Kenderaan elektrik, tanpa mengira kos awal yang sangat tinggi","Petrol biasa, kerana stesennya paling meluas di negara ini","CNG, walaupun ketersediaan stesennya sangat terhad sekali"],b:0,u:"Biodiesel B10 menawarkan pengurangan pelepasan berbanding petrol pada kos yang lebih mampu dimiliki berbanding kenderaan elektrik."},
 {j:"pilih",t:"Mengapakah ketersediaan stesen menjadi faktor penting dalam menilai pilihan bahan api alternatif?",p:["Bahan api sukar didapati menyukarkan penggunaan harian walaupun mesra alam","Ketersediaan stesen tidak memberi sebarang kesan kepada keputusan pengguna itu","Semua bahan api alternatif mempunyai ketersediaan stesen yang sama rata","Ketersediaan stesen hanya penting untuk kenderaan elektrik sahaja bukan lain"],b:0,u:"Bahan api yang sukar didapati akan menyukarkan penggunaan harian, walaupun ia lebih mesra alam dari segi pelepasan."},
 {j:"pilih",t:"Nilaikan dakwaan: 'Kenderaan elektrik langsung tidak menyumbang kepada pelepasan karbon.'",p:["Tidak tepat sepenuhnya, kerana penjanaan elektrik grid biasa masih menyumbang sejumlah pelepasan","Tepat sepenuhnya, kerana kenderaan elektrik tidak menggunakan sebarang bahan api","Tidak tepat, kerana kenderaan elektrik mengeluarkan lebih CO2 daripada petrol","Tepat sepenuhnya kerana grid elektrik tidak pernah menggunakan bahan api fosil"],b:0,u:"Jadual menunjukkan 95 g/km, bukan sifar, kerana bekalan grid biasa turut menghasilkan sebahagian tenaga daripada bahan api fosil."},
 {j:"pilih",t:"Gas asli termampat kurang popular berbanding petrol walaupun pelepasannya lebih rendah, terutamanya kerana:",p:["Ketersediaan stesen yang sangat terhad dan keperluan tangki khas","Ia menghasilkan pelepasan CO2 paling tinggi berbanding semua pilihan","Ia tidak boleh digunakan dalam sebarang jenis kenderaan","Kosnya jauh lebih tinggi berbanding kenderaan elektrik"],b:0,u:"Jadual menunjukkan ketersediaan stesen CNG sangat terhad dan memerlukan tangki khas, menyukarkan penggunaan meluas."},
 {j:"banyak",t:"Pilih SEMUA faktor yang wajar dipertimbangkan sebelum menukar kepada bahan api alternatif, berdasarkan jadual.",p:["Anggaran pelepasan CO2","Kos relatif menukar kenderaan","Ketersediaan stesen","Warna kenderaan yang dimiliki sekarang"],b:[0,1,2],u:"Warna kenderaan tidak berkaitan dengan pemilihan bahan api yang lebih mesra alam."},
 {j:"pilih",t:"Bahan api bio terutamanya dihasilkan daripada:",p:["Sumber tumbuhan atau bahan organik","Arang batu yang digali daripada perlombongan","Petroleum mentah yang disuling","Logam yang dilebur pada suhu tinggi"],b:0,u:"Biofuel dihasilkan daripada sumber biologi seperti minyak sawit, tebu atau sisa tumbuhan."},
 {j:"pilih",t:"Sebuah syarikat teksi mahu mengurangkan jejak karbon armadanya dalam dua tahun dengan bajet terhad. Cadangan paling seimbang ialah:",p:["Mula dengan biodiesel B10 sambil merancang peralihan berperingkat ke elektrik","Tukar semua kenderaan kepada elektrik serta-merta tanpa mengira kos","Kekal menggunakan petrol biasa kerana ia paling mudah didapati","Tunggu sehingga semua stesen CNG tersedia di seluruh negara ini"],b:0,u:"Peralihan berperingkat membolehkan pengurangan pelepasan segera pada kos yang boleh diurus, sambil merancang matlamat jangka panjang."}],
 bos:{j:"pilih",t:"Menteri Pengangkutan perlu memilih SATU dasar untuk digalakkan dahulu dengan bajet terhad tahun ini. Dasar paling praktikal untuk pelaksanaan segera ialah:",p:["Menggalakkan penggunaan biodiesel B10 kerana infrastruktur sedia ada boleh menampungnya","Mewajibkan semua kenderaan bertukar kepada elektrik serta-merta","Membina stesen CNG di seluruh negara dalam masa setahun","Mengekalkan status quo kerana semua pilihan sama sahaja"],b:0,u:"Biodiesel boleh dilaksanakan segera dengan infrastruktur sedia ada berbanding pilihan lain yang memerlukan pelaburan besar atau jangka masa panjang."}},

{n:6, tempat:"Kempen Kita", sk:"4.6 Teknologi Hijau dan Kehidupan",
 kadNama:"Jejak Karbon", kadEm:"👣", kadFakta:"Purata jejak kaki karbon seorang rakyat Malaysia dianggarkan lebih tinggi daripada purata global, terutamanya disebabkan sektor tenaga dan pengangkutan.",
 bosKadNama:"Kempen Digital", bosKadEm:"📱", bosKadFakta:"Kempen kesedaran alam sekitar yang berjaya sering menggunakan cerita peribadi dan gambar sebelum-selepas untuk menarik perhatian audiens muda.",
 soalan:[
 {j:"pilih",t:"Jejak kaki karbon merujuk kepada:",p:["Jumlah gas rumah hijau yang dihasilkan langsung atau tidak langsung","Kesan tapak kaki manusia terhadap tanah di kawasan perkampungan itu","Jumlah wang yang dibelanjakan seseorang untuk tenaga elektrik sahaja","Bilangan pokok yang ditanam oleh seseorang sepanjang hayatnya"],b:0,u:"Jejak kaki karbon mengukur jumlah pelepasan gas rumah hijau yang berkaitan dengan gaya hidup seseorang."},
 {j:"pilih",t:"Antara berikut, tindakan individu yang paling berkesan mengurangkan jejak kaki karbon harian ialah:",p:["Menggunakan pengangkutan awam berbanding memandu seorang diri","Menggunakan penghawa dingin sepanjang malam tanpa had langsung","Membeli barangan baharu setiap minggu walaupun tidak diperlukan langsung","Membiarkan lampu dan peralatan elektronik menyala sepanjang hari penuh"],b:0,u:"Perkongsian kenderaan atau pengangkutan awam mengurangkan pelepasan karbon per kepala berbanding memandu bersendirian."},
 {j:"pilih",t:"Fenomena pemanasan global berkait rapat dengan peningkatan:",p:["Kepekatan gas rumah hijau di atmosfera","Bilangan pokok di kawasan hutan simpan negara ini","Kepekatan oksigen di atmosfera Bumi keseluruhannya sekali","Bilangan haiwan liar di kawasan bandar berkenaan sahaja"],b:0,u:"Gas rumah hijau memerangkap haba matahari, menyebabkan suhu purata Bumi meningkat."},
 {j:"pilih",t:"Mengapakah setiap individu, bukan hanya kerajaan atau syarikat besar, dianggap mempunyai peranan menangani perubahan iklim?",p:["Tindakan harian ramai individu terkumpul memberi kesan besar kepada jumlah pelepasan","Kerajaan tidak mempunyai sebarang kuasa untuk menguatkuasakan dasar alam sekitar negara","Syarikat besar tidak menyumbang sebarang pelepasan gas rumah hijau langsung","Perubahan iklim hanya disebabkan fenomena semula jadi tanpa campur tangan manusia sama sekali"],b:0,u:"Walaupun kesan seorang individu kecil, tindakan kolektif berjuta-juta orang memberi kesan besar terhadap jumlah pelepasan global."},
 {j:"banyak",t:"Pilih SEMUA tindakan harian yang membantu mengurangkan jejak kaki karbon.",p:["Mematikan suis lampu yang tidak digunakan","Berkongsi kenderaan ke sekolah atau tempat kerja","Membazir makanan yang masih elok setiap hari tanpa sebab","Menggunakan botol air terpakai berbanding botol plastik sekali guna"],b:[0,1,3],u:"Pembaziran makanan turut menyumbang kepada pelepasan gas rumah hijau semasa penghasilan dan pelupusan."},
 {j:"pilih",t:"Kempen kesedaran dalam talian tentang perubahan iklim paling berkesan apabila ia:",p:["Menyampaikan mesej jelas disertai tindakan konkrit sasaran kempen","Menggunakan istilah saintifik yang kompleks tanpa sebarang penjelasan","Hanya menyasarkan ahli sains dan jurutera sahaja tanpa pengecualian","Disiarkan sekali sahaja tanpa sebarang susulan lanjut"],b:0,u:"Kempen berkesan menyampaikan mesej mudah difahami dan memberi cadangan tindakan yang boleh dilaksanakan segera."},
 {j:"pilih",t:"Platform manakah paling sesuai untuk kempen kesedaran perubahan iklim yang menyasarkan remaja sekolah menengah?",p:["Media sosial yang kerap digunakan remaja seperti TikTok atau Instagram","Risalah kertas yang diedarkan di pejabat kerajaan sahaja","Iklan radio pada waktu pagi hari bekerja","Mesyuarat rasmi tertutup untuk pegawai kerajaan"],b:0,u:"Kempen yang menyasarkan remaja perlu menggunakan platform yang kerap mereka gunakan supaya mesej lebih berkesan."},
 {j:"pilih",t:"Apakah komponen paling penting dalam reka bentuk kempen kesedaran supaya ia berkesan mengubah tingkah laku?",p:["Cadangan tindakan khusus yang mudah dilaksanakan oleh sasaran kempen","Reka bentuk grafik yang paling berwarna-warni","Jumlah perkataan yang paling banyak dalam satu risalah","Penggunaan istilah teknikal yang canggih"],b:0,u:"Kempen yang hanya memberi maklumat tanpa cadangan tindakan konkrit kurang berkesan mengubah tingkah laku sasaran."}],
 bos:{j:"buka",
  t:"Sekolah kau ingin melancarkan kempen kesedaran dalam talian bagi menangani fenomena pemanasan global dan perubahan iklim demi kelestarian hidup di Bumi.",
  arahan:"Terangkan platform yang akan digunakan, mesej utama kempen, SATU tindakan konkrit yang disyorkan kepada pelajar, dan cara awak mengukur sama ada kempen itu berjaya mengubah tingkah laku pelajar.",
  u:"Jawapan TP6 yang kukuh menggabungkan pemilihan platform yang sesuai dengan sasaran, mesej jelas, tindakan konkrit yang boleh dilaksanakan, dan kaedah pengukuran kejayaan yang munasabah (contohnya tinjauan sebelum dan selepas kempen)."}}
];

module.exports = {
  id:"t4b2", tingkatan:4, kod:"4.0 Teknologi Hijau dalam Melestarikan Alam",
  tajuk:"Laluan Hijau",
  subtajuk:"Sains Ting. 4 · Bab 4 Teknologi Hijau dalam Melestarikan Alam",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali konsep asas Teknologi Hijau, tiga tonggak kelestarian dan tujuh sektornya. Langkah seterusnya ialah menerangkan kepentingan setiap sektor, bukan sekadar menyenaraikannya.",
   2:"{n} memahami kecekapan tenaga dan isu sosiosaintifik dalam sektor tenaga serta sebab aplikasi Teknologi Hijau digalakkan. Perlu lebih banyak latihan mengaitkan konsep ini dengan situasi harian sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan konsep pengurusan sisa dan air sisa seperti 3R dalam situasi mudah, contohnya menentukan tindakan yang sesuai di kantin sekolah. Galakkan mengaitkan konsep ini dengan sektor lain seperti pertanian.",
   4:"{n} mampu menganalisis data berkaitan pertanian dan perhutanan, termasuk mengesan daerah yang berisiko kehilangan hutan berdasarkan jadual. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai pilihan bahan api pengangkutan berdasarkan data pelepasan, kos dan ketersediaan, serta membuat cadangan yang seimbang. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta kempen kesedaran perubahan iklim yang lengkap dengan platform, mesej, tindakan konkrit dan kaedah pengukuran. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Teknologi Hijau dalam Melestarikan Alam. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ tonggak:R_TONGGAK, sisa:R_SISA, hutan:T_HUTAN, bahanapi:T_BAHANAPI },
  aras:ARAS
};
