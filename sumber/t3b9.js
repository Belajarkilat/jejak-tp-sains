/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 9.0 Cuaca Angkasa Lepas.
   Jalankan `node bina.js t3b9` untuk menyemak dan menghasilkan bank-t3b9.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 91.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai cuaca angkasa lepas.",
"Memahami cuaca angkasa lepas dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai cuaca angkasa lepas dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai cuaca angkasa lepas dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai cuaca angkasa lepas dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai cuaca angkasa lepas dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_LAPISAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Lapisan (dari dalam)</th>'+
'<th>Suhu anggaran (&deg;C)</th><th>Ciri</th></tr></thead><tbody>'+
'<tr><td>Teras</td><td>15 000 000</td><td>Tindak balas pelakuran nuklear berlaku</td></tr>'+
'<tr><td>Zon radiasi</td><td>7 000 000 hingga 2 000 000</td><td>Tenaga dipindahkan secara sinaran</td></tr>'+
'<tr><td>Zon perolakan</td><td>2 000 000 hingga 5 500</td><td>Gas panas naik, gas lebih sejuk turun</td></tr>'+
'<tr><td>Fotosfera</td><td>5 500</td><td>Permukaan yang kelihatan; ada granul dan tompok matahari</td></tr>'+
'<tr><td>Kromosfera</td><td>4 000 hingga 20 000</td><td>Lapisan nipis kemerahan</td></tr>'+
'<tr><td>Korona</td><td>Lebih 1 000 000</td><td>Lapisan luar yang jelas kelihatan semasa gerhana matahari penuh</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai suhu ialah anggaran kasar.</p>';

const T_KITARAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tahun</th>'+
'<th class="n">Purata bilangan tompok matahari</th><th class="n">Lentingan jisim korona setahun</th>'+
'<th class="n">Laporan gangguan GPS</th></tr></thead><tbody>'+
'<tr><td>2019</td><td class="n">4</td><td class="n">400</td><td class="n">3</td></tr>'+
'<tr><td>2020</td><td class="n">9</td><td class="n">500</td><td class="n">5</td></tr>'+
'<tr><td>2021</td><td class="n">30</td><td class="n">1100</td><td class="n">11</td></tr>'+
'<tr><td>2022</td><td class="n">83</td><td class="n">2200</td><td class="n">26</td></tr>'+
'<tr><td>2023</td><td class="n">125</td><td class="n">3000</td><td class="n">38</td></tr>'+
'<tr><td>2024</td><td class="n">155</td><td class="n">3500</td><td class="n">47</td></tr>'+
'</tbody></table></div><p class="qnote">Data rekaan untuk latihan, berdasarkan corak sebenar kitaran suria.</p>';

const T_AMARAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tahap amaran ribut</th><th>Kesan yang dijangka</th></tr></thead><tbody>'+
'<tr><td>G1 (kecil)</td><td>Turun naik kecil pada grid kuasa; aurora di kawasan kutub</td></tr>'+
'<tr><td>G3 (kuat)</td><td>Gangguan GPS dan radio frekuensi tinggi; satelit mungkin perlu pembetulan</td></tr>'+
'<tr><td>G5 (ekstrem)</td><td>Grid kuasa boleh terputus; komunikasi radio terputus berhari-hari; aurora kelihatan hingga latitud rendah</td></tr>'+
'</tbody></table></div><p class="qnote">Skala amaran ribut geomagnet yang diringkaskan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Teras Matahari", sk:"9.1 Struktur dan fenomena Matahari",
 kadNama:"Teras Matahari", kadEm:"\u{2600}", kadFakta:"Suhu teras Matahari mencecah kira-kira 15 juta °C. Di situ hidrogen bergabung menjadi helium.",
 bosKadNama:"Kitaran Suria", bosKadEm:"\u{1F504}", bosKadFakta:"Bilangan tompok matahari naik dan turun dalam kitaran kira-kira 11 tahun.",
 soalan:[
 {j:"pilih",t:"Lapisan paling dalam Matahari ialah:",p:["Teras","Korona","Fotosfera","Kromosfera"],b:0,u:"Tenaga Matahari dihasilkan di teras."},
 {j:"pilih",t:"Lapisan Matahari yang kita lihat sebagai permukaannya ialah:",p:["Fotosfera","Korona","Teras","Zon perolakan"],b:0,u:"Foto bermaksud cahaya. Fotosfera memancarkan cahaya yang kita lihat."},
 {j:"susun",t:"Susun lapisan Matahari dari DALAM ke LUAR.",p:["Teras","Zon radiasi","Zon perolakan","Fotosfera","Kromosfera","Korona"],b:[0,1,2,3,4,5],u:"Tiga lapisan pertama berada di dalam Matahari, manakala tiga lapisan terakhir membentuk atmosferanya."},
 {j:"pilih",t:"Kawasan gelap yang lebih sejuk di permukaan Matahari dipanggil:",p:["Tompok matahari","Semarak suria","Granul","Korona"],b:0,u:"Tompok matahari berkait dengan medan magnet yang kuat."},
 {j:"pilih",t:"Aliran zarah bercas yang berterusan dari Matahari dipanggil:",p:["Angin suria","Tompok matahari","Granul","Gerhana"],b:0,u:"Angin suria bertiup ke seluruh Sistem Suria."},
 {j:"pilih",t:"Kawasan di sekeliling Bumi yang dikawal oleh medan magnet Bumi dipanggil:",p:["Magnetosfera","Stratosfera","Kromosfera","Fotosfera"],b:0,u:"Kromosfera dan fotosfera ialah lapisan Matahari, dan stratosfera ialah lapisan atmosfera Bumi."},
 {j:"banyak",t:"Pilih SEMUA fenomena yang berlaku di permukaan atau atmosfera Matahari.",p:["Nyalaan suria","Semarak suria","Lentingan jisim korona","Gerhana bulan","Pasang surut laut"],b:[0,1,2],u:"Gerhana bulan dan pasang surut melibatkan Bumi dan Bulan."},
 {j:"pilih",t:"Cahaya berwarna-warni yang kelihatan di langit kawasan kutub dipanggil:",p:["Aurora","Pelangi","Meteor","Komet"],b:0,u:"Aurora di hemisfera utara dipanggil aurora borealis."}],
 bos:{j:"pilih",t:"Kitaran suria berulang lebih kurang setiap:",p:["11 tahun","1 tahun","100 tahun","28 hari"],b:0,u:"Aktiviti suria mencapai puncak lebih kurang sekali setiap 11 tahun."}},

{n:2, tempat:"Magnetosfera", sk:"9.1.2 / 9.2 Magnetosfera dan cuaca angkasa",
 kadNama:"Magnetosfera", kadEm:"\u{1F9F2}", kadFakta:"Magnetosfera memesongkan kebanyakan zarah bercas angin suria sebelum sampai ke permukaan Bumi.",
 bosKadNama:"Aurora", bosKadEm:"\u{1F30C}", bosKadFakta:"Warna hijau aurora biasanya dihasilkan oleh atom oksigen di atmosfera.",
 soalan:[
 {j:"pilih",t:"Mengapakah tompok matahari kelihatan gelap?",p:["Ia lebih sejuk daripada kawasan sekelilingnya","Ia ialah lubang yang menembusi Matahari","Ia bayang-bayang planet yang lalu di depan Matahari","Ia kawasan yang tidak mempunyai sebarang gas"],b:0,u:"Tompok matahari masih sangat panas, cuma kurang terang berbanding fotosfera di sekelilingnya."},
 {j:"pilih",t:"Mengapakah magnetosfera penting kepada hidupan di Bumi?",p:["Ia memesongkan zarah bercas angin suria daripada Bumi","Ia menghasilkan oksigen yang diperlukan untuk pernafasan","Ia memanaskan Bumi pada waktu malam","Ia menarik Bulan supaya terus mengorbit Bumi"],b:0,u:"Tanpa magnetosfera, angin suria boleh menghakis atmosfera dan membahayakan hidupan."},
 {j:"pilih",t:"Mengapakah bentuk magnetosfera tidak bulat sempurna?",p:["Angin suria menekan satu sisi dan memanjangkan sisi lain","Bumi berputar terlalu laju pada paksinya sehingga ia terherot","Bulan menarik magnetosfera ke satu arah semasa mengorbit","Atmosfera Bumi terlalu nipis di kawasan kutub utara"],b:0,u:"Sisi yang menghadap Matahari dimampatkan, manakala sisi malam memanjang seperti ekor."},
 {j:"pilih",t:"Mengapakah aurora lebih kerap kelihatan di kawasan kutub?",p:["Garis medan magnet menyalurkan zarah bercas ke kawasan kutub","Kawasan kutub lebih dekat dengan Matahari berbanding khatulistiwa","Ais di kutub memantulkan cahaya Matahari","Kutub mengalami malam sepanjang tahun"],b:0,u:"Garis medan magnet Bumi menumpu di kawasan berhampiran kutub."},
 {j:"pilih",t:"Bagaimanakah aurora terbentuk?",p:["Zarah bercas menghentam atom dan molekul gas di atmosfera","Cahaya Matahari dipantulkan oleh ais dan salji di kawasan kutub","Awan tebal memancarkan cahaya pada waktu malam","Kilat berlaku berterusan di kawasan kutub"],b:0,u:"Atom dan molekul yang dihentam memancarkan cahaya berwarna."},
 {j:"pilih",t:"Mengapakah lentingan jisim korona boleh mengganggu isyarat GPS?",p:["Zarah bercasnya mengganggu atmosfera yang dilalui isyarat","Ia menghalang cahaya Matahari daripada sampai ke Bumi","Ia menyebabkan Bumi berhenti berputar seketika","Ia menukar arah medan graviti Bumi buat sementara waktu"],b:0,u:"Isyarat GPS dari satelit perlu melalui atmosfera atas yang terganggu itu."},
 {j:"pilih",t:"Apakah hubungan antara bilangan tompok matahari dengan aktiviti suria?",p:["Lebih banyak tompok, lebih kerap nyalaan dan lentingan jisim korona","Lebih banyak tompok, Matahari menjadi lebih sejuk dan kurang aktif selamanya","Bilangan tompok tidak berkaitan dengan aktiviti suria","Tompok hanya muncul semasa gerhana matahari"],b:0,u:"Tompok matahari menandakan kawasan bermedan magnet kuat yang menjadi punca letusan."},
 {j:"pilih",t:"Mengapakah kita tidak boleh melihat Matahari secara terus walaupun semasa aktiviti suria menarik?",p:["Sinaran kuat boleh merosakkan retina mata secara kekal","Matahari terlalu jauh untuk dilihat dengan mata","Tompok matahari memancarkan sinaran radioaktif","Mata manusia hanya boleh melihat Matahari dengan selamat pada waktu senja"],b:0,u:"Kerosakan retina berlaku tanpa rasa sakit, jadi mangsa selalunya tidak sedar."}],
 bos:{j:"banyak",t:"Pilih SEMUA kesan cuaca angkasa lepas terhadap Bumi.",p:["Gangguan komunikasi radio","Gangguan sistem navigasi GPS","Arus berlebihan dalam talian kuasa","Gempa bumi di kawasan tropika","Hujan lebat di kawasan khatulistiwa"],b:[0,1,2],u:"Gempa bumi dan hujan lebat berpunca daripada proses di Bumi, bukan cuaca angkasa."}},

{n:3, tempat:"Balai Cerap", sk:"9.1 Mengaplikasi pengetahuan struktur Matahari", lampiran:"lapisan",
 kadNama:"Gerhana Penuh", kadEm:"\u{1F311}", kadFakta:"Semasa gerhana matahari penuh, korona kelihatan seperti mahkota bercahaya di sekeliling Bulan.",
 bosKadNama:"Tompok Gergasi", bosKadEm:"\u{1F52D}", bosKadFakta:"Sesetengah tompok matahari lebih besar daripada Bumi, dan suhunya lebih rendah daripada fotosfera di sekelilingnya.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, lapisan manakah paling panas?",p:["Teras","Korona","Fotosfera","Kromosfera"],b:0,u:"Suhu teras kira-kira 15 000 000 °C."},
 {j:"pilih",t:"Mengapakah korona hanya jelas kelihatan semasa gerhana matahari penuh?",p:["Cahaya terang fotosfera dilindungi oleh Bulan","Korona hanya wujud semasa gerhana","Bulan memancarkan cahayanya sendiri ke atas korona semasa gerhana","Korona terletak di dalam teras Matahari"],b:0,u:"Korona sentiasa ada, tetapi cahayanya jauh lebih malap daripada fotosfera."},
 {j:"pilih",t:"Di lapisan manakah pelakuran nuklear berlaku?",p:["Teras","Korona","Kromosfera","Fotosfera"],b:0,u:"Suhu dan tekanan yang sangat tinggi di teras membolehkan pelakuran."},
 {j:"pilih",t:"Granul di fotosfera ialah bahagian atas sel perolakan. Apakah yang menyebabkannya?",p:["Gas panas naik dan gas lebih sejuk turun","Planet kecil jatuh ke permukaan Matahari","Angin suria meniup gas ke dalam teras","Bayang-bayang Bumi pada permukaan Matahari"],b:0,u:"Bahagian tengah granul yang cerah ialah gas panas yang naik."},
 {j:"pilih",t:"Seorang murid mahu memerhati tompok matahari di sekolah. Kaedah paling selamat?",p:["Unjurkan imej Matahari dari teleskop ke atas kertas putih","Lihat terus melalui teropong biasa tanpa sebarang penapis","Pakai cermin mata hitam biasa dan tenung Matahari","Lihat pantulan Matahari dalam air kolam"],b:0,u:"Kaedah unjuran membolehkan tompok dilihat tanpa memandang Matahari."},
 {j:"nombor",t:"Suhu teras kira-kira 15 000 000 °C dan suhu fotosfera kira-kira 5 500 °C. Berapa kali ganda suhu teras berbanding fotosfera? Bundarkan kepada nombor bulat.",b:2727,tol:1,suf:"kali",u:"15 000 000 ÷ 5 500 ≈ 2727 kali."},
 {j:"pilih",t:"Seorang murid di Kuala Lumpur tidak pernah melihat aurora. Penjelasan paling tepat?",p:["Malaysia terletak dekat khatulistiwa, jauh dari kawasan kutub","Aurora hanya berlaku sekali setiap seratus tahun","Aurora hanya kelihatan pada waktu tengah hari yang cerah dan panas","Langit Malaysia terlalu berawan sepanjang tahun"],b:0,u:"Aurora biasanya kelihatan di latitud tinggi."},
 {j:"pilih",t:"Sebuah syarikat penerbangan menerima amaran ribut suria. Tindakan paling wajar bagi penerbangan yang melalui kawasan kutub?",p:["Tukar laluan ke latitud lebih rendah","Terbang lebih tinggi untuk lebih dekat dengan aurora","Matikan semua sistem komunikasi","Teruskan seperti biasa tanpa pemantauan"],b:0,u:"Kawasan kutub menerima lebih banyak zarah bercas dan gangguan radio."}],
 bos:{j:"pilih",t:"Satu tompok matahari kelihatan bergerak merentasi permukaan Matahari dalam beberapa hari. Kesimpulan paling munasabah?",p:["Matahari berputar pada paksinya","Tompok itu jatuh ke dalam teras","Bumi berhenti mengorbit Matahari","Tompok itu ialah kapal angkasa"],b:0,u:"Pemerhatian tompok matahari membantu saintis awal membuktikan Matahari berputar."}},

{n:4, tempat:"Kitaran Suria", sk:"9.2 Menginterpretasi data cuaca angkasa", lampiran:"kitaran",
 kadNama:"Lentingan Jisim Korona", kadEm:"\u{1F4A5}", kadFakta:"Lentingan jisim korona melemparkan berbilion tan plasma ke angkasa. Sebahagiannya sampai ke Bumi dalam satu hingga tiga hari.",
 bosKadNama:"Peristiwa Carrington", bosKadEm:"\u{1F4E1}", bosKadFakta:"Ribut suria besar pada tahun 1859 mengganggu talian telegraf di banyak negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, apakah hubungan antara purata tompok matahari dengan lentingan jisim korona?",p:["Kedua-duanya meningkat bersama","Lentingan berkurang apabila tompok bertambah","Tiada hubungan antara kedua-duanya","Tompok berkurang apabila lentingan bertambah"],b:0,u:"Kedua-dua nilai naik setiap tahun dari 2019 hingga 2024."},
 {j:"nombor",t:"Berapakah pertambahan laporan gangguan GPS dari tahun 2019 hingga 2024?",b:44,tol:0.5,suf:"laporan",u:"47 tolak 3 bersamaan 44 laporan."},
 {j:"pilih",t:"Tahun manakah paling hampir dengan puncak kitaran suria dalam data ini?",p:["2024","2019","2021","2022"],b:0,u:"Bilangan tompok matahari paling tinggi pada tahun 2024."},
 {j:"pilih",t:"Mengapakah laporan gangguan GPS meningkat seiring dengan tompok matahari?",p:["Lebih banyak aktiviti suria menghantar zarah bercas ke Bumi","Lebih ramai orang membeli telefon setiap tahun","Satelit GPS semakin lama semakin berat","Tompok matahari menghalang isyarat radio dari satelit secara terus"],b:0,u:"Tompok yang banyak menandakan lebih banyak nyalaan dan lentingan jisim korona."},
 {j:"pilih",t:"Seorang murid meramalkan bilangan tompok matahari akan terus meningkat selama-lamanya. Analisis ramalan itu.",p:["Tidak tepat, kerana aktiviti suria berulang dalam kitaran","Tepat, kerana data enam tahun sentiasa meningkat","Tepat, kerana Matahari semakin panas setiap tahun","Tidak tepat, kerana tompok matahari tidak boleh dikira"],b:0,u:"Selepas puncak, bilangan tompok akan menurun semula dalam kitaran kira-kira 11 tahun."},
 {j:"pilih",t:"Berdasarkan pola ini, bilakah pengendali satelit paling perlu berwaspada?",p:["Semasa bilangan tompok matahari berada di puncak kitaran","Semasa bilangan tompok matahari paling rendah","Semasa gerhana bulan penuh berlaku pada waktu malam","Semasa musim tengkujuh di Malaysia"],b:0,u:"Letusan suria paling kerap berlaku sekitar puncak kitaran."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Aktiviti suria meningkat dari 2019 hingga 2024","Gangguan GPS berkait dengan aktiviti suria","Lentingan jisim korona lebih kerap pada tahun 2024","Tompok matahari menyebabkan gempa bumi","Gangguan GPS berlaku hanya pada tahun 2024"],b:[0,1,2],u:"Data tidak menyebut gempa bumi, dan gangguan GPS dilaporkan setiap tahun."},
 {j:"pilih",t:"Pada tahun 2019 masih ada 3 laporan gangguan GPS walaupun tompok matahari sangat sedikit. Penjelasan paling munasabah?",p:["Gangguan juga boleh berpunca daripada faktor lain","Data tahun 2019 pasti salah dan perlu dibuang","Tompok matahari tidak pernah menyebabkan gangguan","Satelit GPS belum wujud pada tahun 2019"],b:0,u:"Hubungan dalam data tidak bermakna aktiviti suria satu-satunya punca."}],
 bos:{j:"pilih",t:"Sebuah syarikat tenaga mahu menjadualkan penyelenggaraan besar transformer grid. Berdasarkan data, masa paling wajar ialah:",p:["Semasa aktiviti suria rendah, seperti sekitar tahun 2019","Semasa aktiviti suria tertinggi, seperti tahun 2024","Tidak penting kerana cuaca angkasa tidak menjejaskan grid","Semasa bilangan lentingan jisim korona paling banyak"],b:0,u:"Grid lebih mudah terjejas semasa ribut suria, jadi kerja besar sesuai dijalankan ketika risiko rendah."}},

{n:5, tempat:"Pusat Amaran", sk:"9.2 Menilai kesan cuaca angkasa", lampiran:"amaran",
 kadNama:"Satelit", kadEm:"\u{1F6F0}", kadFakta:"Satelit boleh dimasukkan ke mod selamat semasa ribut suria untuk melindungi komponen elektroniknya.",
 bosKadNama:"Grid Kuasa", bosKadEm:"\u{26A1}", bosKadFakta:"Ribut geomagnet pada tahun 1989 menyebabkan bekalan elektrik di Quebec, Kanada terputus selama beberapa jam.",
 soalan:[
 {j:"pilih",t:"Amaran tahap G3 dikeluarkan. Keputusan paling wajar bagi nelayan laut dalam yang bergantung pada GPS?",p:["Sediakan kompas dan peta sebagai sandaran navigasi","Belayar lebih jauh kerana aurora akan kelihatan","Matikan semua lampu bot pada waktu malam","Abaikan amaran kerana GPS tidak pernah gagal"],b:0,u:"Amaran G3 menjangkakan gangguan GPS."},
 {j:"pilih",t:"Nilaikan dakwaan: \"Cuaca angkasa lepas tidak penting bagi Malaysia kerana aurora tidak kelihatan di sini.\"",p:["Tidak tepat, kerana GPS dan satelit di sini tetap boleh terjejas","Tepat, kerana satu-satunya kesan cuaca angkasa ialah aurora","Tepat, kerana Malaysia sentiasa dilindungi awan yang tebal","Tidak tepat, kerana aurora sebenarnya sering kelihatan di sini"],b:0,u:"Aurora hanya satu daripada banyak kesan cuaca angkasa."},
 {j:"pilih",t:"Amaran G5 dijangka dalam 24 jam. Tindakan paling wajar bagi syarikat pembekal elektrik?",p:["Pantau grid dan sediakan langkah melindungi transformer","Matikan terus bekalan elektrik seluruh negara selama seminggu penuh","Abaikan kerana amaran sering tidak tepat","Naikkan voltan grid supaya lebih kuat"],b:0,u:"Persediaan awal mengurangkan risiko kerosakan transformer tanpa menghentikan bekalan."},
 {j:"pilih",t:"Sebuah agensi angkasa perlu memilih antara (P) melancarkan angkasawan semasa amaran G5, atau (Q) menangguhkan pelancaran beberapa hari. Keputusan paling wajar?",p:["Q, kerana angkasawan terdedah kepada sinaran tinggi","P, kerana tarikh pelancaran tidak boleh diubah","P, kerana roket boleh mengelak zarah bercas","Q, kerana roket tidak boleh terbang pada waktu siang"],b:0,u:"Di luar atmosfera, angkasawan kurang terlindung daripada zarah bercas."},
 {j:"pilih",t:"Nilaikan cadangan: \"Negara tidak perlu memantau cuaca angkasa kerana ia tidak boleh dihalang.\"",p:["Tidak wajar, kerana amaran awal membolehkan persediaan","Wajar, kerana pemantauan terlalu mahal","Wajar, kerana ribut suria jarang berlaku","Tidak wajar, kerana pemantauan boleh menghentikan ribut suria"],b:0,u:"Seperti ramalan cuaca biasa, cuaca angkasa tidak boleh dihalang tetapi kesannya boleh dikurangkan."},
 {j:"pilih",t:"Sekolah awak mahu melihat aurora dalam lawatan sains. Destinasi dan masa paling wajar?",p:["Norway, semasa aktiviti suria sedang tinggi","Pantai timur Malaysia semasa musim tengkujuh","Kawasan khatulistiwa pada waktu tengah hari","Mana-mana tempat asalkan langit cerah"],b:0,u:"Aurora paling kerap di latitud tinggi dan semasa aktiviti suria tinggi."},
 {j:"banyak",t:"Pilih SEMUA langkah yang wajar untuk melindungi satelit daripada cuaca angkasa lepas.",p:["Pasang perisai pada komponen elektronik","Pantau amaran cuaca angkasa setiap hari","Masukkan mod selamat semasa ribut suria","Lancarkan satelit hanya pada waktu malam","Cat satelit dengan warna terang"],b:[0,1,2],u:"Waktu pelancaran dan warna cat tidak melindungi satelit daripada zarah bercas."},
 {j:"pilih",t:"Dua sumber berita melaporkan ribut suria. Sumber A memetik agensi cuaca angkasa rasmi, manakala sumber B hanya memetik hantaran media sosial. Keputusan paling wajar?",p:["Rujuk sumber A dan semak semula dengan laman agensi rasmi","Percaya sumber B kerana lebih cepat tular","Kongsi kedua-duanya tanpa menyemak","Abaikan kedua-duanya kerana ribut suria sebenarnya tidak pernah wujud"],b:0,u:"Maklumat saintifik perlu disemak dengan sumber yang berautoriti."}],
 bos:{j:"pilih",t:"Kerajaan hanya mampu membiayai SATU projek tahun ini. Pilihan paling wajar untuk mengurangkan kesan cuaca angkasa?",p:["Sistem amaran awal untuk syarikat elektrik dan penerbangan","Teleskop besar untuk merakam gambar aurora yang cantik","Kempen melarang orang ramai menggunakan GPS","Satelit baharu yang dilancarkan tanpa sebarang perisai"],b:0,u:"Amaran awal melindungi banyak sektor sekaligus."}},

{n:6, tempat:"Stesen Angkasa", sk:"9.2 Mereka cipta penyelesaian cuaca angkasa",
 kadNama:"CubeSat", kadEm:"\u{1F4E6}", kadFakta:"CubeSat ialah satelit kecil berbentuk kiub bersisi kira-kira 10 cm yang boleh dibina oleh pelajar universiti.",
 bosKadNama:"Angkasawan", bosKadEm:"\u{1F680}", bosKadFakta:"Semasa ribut suria kuat, angkasawan di stesen angkasa berlindung di bahagian yang lebih terlindung.",
 soalan:[
 {j:"pilih",t:"Awak mereka aplikasi amaran cuaca angkasa untuk nelayan. Ciri paling penting?",p:["Amaran ringkas dalam bahasa mudah beserta tindakan","Istilah saintifik yang panjang supaya kelihatan pakar","Gambar aurora yang cantik tanpa sebarang maklumat","Amaran hanya dihantar selepas ribut suria tamat"],b:0,u:"Amaran berguna hanya jika difahami dan diikuti."},
 {j:"pilih",t:"Awak mereka model magnetosfera untuk pameran. Bahan paling sesuai untuk menunjukkan garis medan magnet?",p:["Magnet bar dan serbuk besi","Bola plastik dan cat berwarna","Belon dan tali","Kapas dan gam"],b:0,u:"Serbuk besi menyusun diri mengikut garis medan magnet."},
 {j:"pilih",t:"Awak mereka perisai untuk melindungi satelit sekolah (CubeSat) daripada zarah bercas. Pertimbangan paling penting?",p:["Perisai berkesan tetapi cukup ringan untuk dilancarkan","Perisai setebal mungkin tanpa mengira jisim atau kos pelancarannya","Warna perisai sepadan dengan logo sekolah","Perisai daripada kertas supaya murah"],b:0,u:"Setiap gram tambahan meningkatkan kos pelancaran."},
 {j:"pilih",t:"Bajet awak terhad untuk membina alat pengesan aktiviti suria. Idea paling kreatif?",p:["Unjurkan Matahari dengan kanta murah dan kira tompoknya","Beli teleskop angkasa yang mahal","Tunggu gerhana matahari penuh seterusnya","Tenung Matahari setiap hari tanpa sebarang perlindungan mata"],b:0,u:"Kiraan tompok harian ialah data cuaca angkasa yang sebenar dan murah."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada aplikasi amaran awak benar-benar membantu nelayan?",p:["Bandingkan tindakan nelayan sebelum dan selepas guna aplikasi","Kira bilangan muat turun aplikasi itu sahaja","Tanya rakan sekelas sama ada logo dan warna aplikasi itu menarik","Uji aplikasi pada komputer sendiri sahaja"],b:0,u:"Kejayaan diukur daripada perubahan tindakan pengguna sebenar."},
 {j:"pilih",t:"Komuniti nelayan kurang mahir menggunakan telefon pintar. Pengubahsuaian paling wajar?",p:["Hantar amaran melalui SMS dan radio komuniti","Buang terus aplikasi itu","Minta nelayan membeli telefon baharu","Tambah lebih banyak menu dan ciri canggih dalam aplikasi itu"],b:0,u:"Saluran yang sudah biasa digunakan komuniti lebih berkesan."},
 {j:"pilih",t:"Awak mencadangkan projek pemerhatian tompok matahari untuk sekolah seluruh negeri. Cara paling berkesan mengumpul data yang boleh dipercayai?",p:["Gunakan kaedah dan borang rekod yang sama di semua sekolah","Setiap sekolah bebas memilih kaedah sendiri","Kumpul data sekali setahun sahaja","Hanya satu murid memerhati Matahari bagi mewakili seluruh negeri"],b:0,u:"Kaedah yang seragam membolehkan data dibandingkan."},
 {j:"pilih",t:"Poster awak tentang cuaca angkasa akan dipamerkan di kampung. Pendekatan paling wajar?",p:["Kaitkan dengan kehidupan harian seperti GPS dan telefon","Guna bahasa Inggeris sahaja untuk nampak saintifik","Tampal di tempat tersembunyi","Isi poster dengan formula fizik yang panjang"],b:0,u:"Orang lebih peduli apabila mereka nampak kaitannya dengan kehidupan sendiri."}],
 bos:{j:"buka",
  t:"Kerajaan negeri mahu melindungi komuniti nelayan dan pengguna GPS daripada gangguan cuaca angkasa lepas. Reka satu sistem amaran dan pendidikan yang sesuai untuk komuniti di negeri awak.",
  arahan:"Terangkan fenomena suria yang dipantau dan kesannya terhadap Bumi, cara amaran disampaikan, tindakan yang perlu diambil pengguna, dan bagaimana awak mengambil kira kos, bahasa serta kemudahan teknologi komuniti.",
  u:"Jawapan TP6 yang kukuh mengaitkan aktiviti suria dengan kesan sebenar, merancang saluran amaran yang sesuai dengan komuniti, dan realistik dari segi kos."}}
];

module.exports = {
  id:"t3b9", tingkatan:3, kod:"9.0 Cuaca Angkasa Lepas",
  tajuk:"Laluan Suria",
  subtajuk:"Sains Ting. 3 · Bab 9 Cuaca Angkasa Lepas",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali struktur Matahari, fenomena di permukaannya dan maksud magnetosfera. Langkah seterusnya ialah menerangkan kaitan aktiviti suria dengan kesannya di Bumi.",
   2:"{n} memahami kepentingan magnetosfera serta pembentukan aurora dan gangguan akibat cuaca angkasa. Perlu lebih banyak latihan mentafsir data aktiviti suria sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan struktur Matahari dan cuaca angkasa untuk menerangkan fenomena dan memilih kaedah pemerhatian yang selamat. Galakkan mengaitkan data dengan penerangan.",
   4:"{n} mampu menganalisis data kitaran suria untuk mengenal pasti hubungan antara tompok matahari, lentingan jisim korona dan gangguan teknologi. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai tahap amaran cuaca angkasa dan membuat keputusan yang wajar untuk melindungi manusia dan teknologi. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka sistem amaran dan pendidikan cuaca angkasa yang praktikal dan sesuai dengan komuniti. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Cuaca Angkasa Lepas. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ lapisan:T_LAPISAN, kitaran:T_KITARAN, amaran:T_AMARAN },
  aras:ARAS
};
