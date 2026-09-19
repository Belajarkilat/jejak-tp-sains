/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 10.0 Penerokaan Angkasa Lepas.
   Jalankan `node bina.js t3b10` untuk menyemak dan menghasilkan bank-t3b10.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 94.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai penerokaan angkasa lepas.",
"Memahami penerokaan angkasa lepas dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai penerokaan angkasa lepas dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai penerokaan angkasa lepas dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai penerokaan angkasa lepas dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekacipta dengan menggunakan pengetahuan dan kemahiran sains mengenai penerokaan angkasa lepas dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_ORBIT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Planet</th>'+
'<th class="n">Jarak purata dari Matahari (AU)</th><th class="n">Tempoh satu orbit (tahun Bumi)</th></tr></thead><tbody>'+
'<tr><td>Utarid</td><td class="n">0.39</td><td class="n">0.24</td></tr>'+
'<tr><td>Zuhrah</td><td class="n">0.72</td><td class="n">0.62</td></tr>'+
'<tr><td>Bumi</td><td class="n">1.00</td><td class="n">1.00</td></tr>'+
'<tr><td>Marikh</td><td class="n">1.52</td><td class="n">1.88</td></tr>'+
'<tr><td>Musytari</td><td class="n">5.20</td><td class="n">11.86</td></tr>'+
'</tbody></table></div><p class="qnote">1 AU (unit astronomi) ialah jarak purata Bumi ke Matahari, kira-kira 150 juta km.</p>';

const T_SATELIT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Jenis</th>'+
'<th class="n">Ketinggian orbit (km)</th><th>Tempoh satu orbit</th><th>Kegunaan utama</th></tr></thead><tbody>'+
'<tr><td>Stesen Angkasa Antarabangsa</td><td class="n">400</td><td>Kira-kira 90 minit</td><td>Makmal sains di angkasa</td></tr>'+
'<tr><td>Satelit penderiaan jauh</td><td class="n">700</td><td>Kira-kira 99 minit</td><td>Memantau tanaman, hutan dan banjir</td></tr>'+
'<tr><td>Satelit GPS</td><td class="n">20 200</td><td>Kira-kira 12 jam</td><td>Navigasi dan penentuan kedudukan</td></tr>'+
'<tr><td>Satelit komunikasi geopegun</td><td class="n">35 786</td><td>24 jam</td><td>Siaran TV dan telekomunikasi</td></tr>'+
'</tbody></table></div><p class="qnote">Nilai ketinggian dan tempoh ialah anggaran. Satelit geopegun ialah satelit yang mengorbit seiring putaran Bumi, jadi ia kelihatan kekal di atas tempat yang sama.</p>';

const T_MISI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Misi</th>'+
'<th class="n">Kos (RM juta)</th><th>Manfaat utama</th><th>Risiko</th></tr></thead><tbody>'+
'<tr><td>P: Satelit pemantau banjir dan jerebu</td><td class="n">300</td><td>Amaran bencana untuk jutaan penduduk</td><td>Rendah</td></tr>'+
'<tr><td>Q: Menghantar angkasawan ke stesen angkasa</td><td class="n">100</td><td>Inspirasi dan penyelidikan mikrograviti</td><td>Sederhana</td></tr>'+
'<tr><td>R: Kuar angkasa ke Marikh</td><td class="n">2500</td><td>Pengetahuan saintifik baharu</td><td>Tinggi</td></tr>'+
'</tbody></table></div><p class="qnote">Sebuah agensi angkasa mempunyai bajet RM500 juta. Data rekaan untuk latihan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Planetarium", sk:"10.1 / 10.2 Sejarah astronomi dan penerokaan angkasa",
 kadNama:"Planetarium Negara", kadEm:"\u{1F3DB}", kadFakta:"Planetarium Negara di Kuala Lumpur mempunyai teater kubah yang menayangkan langit malam serta pameran angkasa lepas.",
 bosKadNama:"Sputnik 1", bosKadEm:"\u{1F6F0}", bosKadFakta:"Sputnik 1 dilancarkan pada tahun 1957 dan menjadi satelit buatan manusia yang pertama.",
 soalan:[
 {j:"pilih",t:"Model Sistem Suria yang meletakkan Bumi di pusat ialah model:",p:["Geosentrik","Heliosentrik","Elips","Galaksi"],b:0,u:"Geo bermaksud Bumi, dan helio bermaksud Matahari."},
 {j:"pilih",t:"Ahli astronomi yang mencadangkan model geosentrik ialah:",p:["Ptolemy","Copernicus","Kepler","Newton"],b:0,u:"Model Ptolemy digunakan selama lebih seribu tahun."},
 {j:"pilih",t:"Ahli astronomi yang memperkenalkan model heliosentrik pada abad ke-16 ialah:",p:["Copernicus","Ptolemy","Aristotle","Newton"],b:0,u:"Copernicus meletakkan Matahari di pusat dengan planet mengorbit dalam bulatan."},
 {j:"pilih",t:"Kepler mendapati planet mengorbit Matahari dalam bentuk:",p:["Elips","Bulatan sempurna","Segi empat","Garis lurus"],b:0,u:"Matahari berada pada satu fokus elips itu."},
 {j:"pilih",t:"Satelit buatan manusia yang pertama ialah:",p:["Sputnik 1","Apollo 11","TiungSAT-1","Voyager 1"],b:0,u:"Sputnik 1 dilancarkan oleh Kesatuan Soviet pada tahun 1957."},
 {j:"pilih",t:"Angkasawan pertama Malaysia ialah:",p:["Sheikh Muszaphar Shukor","Neil Armstrong","Yuri Gagarin","Buzz Aldrin"],b:0,u:"Dato' Dr. Sheikh Muszaphar Shukor ke Stesen Angkasa Antarabangsa pada tahun 2007."},
 {j:"pilih",t:"Teknologi mengumpul maklumat tentang permukaan Bumi dari jauh menggunakan satelit dipanggil:",p:["Penderiaan jauh","Pelakuran nuklear","Elektrolisis","Fotosintesis"],b:0,u:"Di Malaysia, penderiaan jauh diuruskan oleh Agensi Remote Sensing Malaysia, kini sebahagian daripada Agensi Angkasa Malaysia (MYSA)."},
 {j:"banyak",t:"Pilih SEMUA contoh teknologi penerokaan angkasa lepas.",p:["Roket","Satelit","Kuar angkasa","Kapal selam","Kereta api laju"],b:[0,1,2],u:"Kapal selam dan kereta api laju digunakan di Bumi."}],
 bos:{j:"susun",t:"Susun peristiwa penerokaan angkasa lepas berikut mengikut urutan masa.",p:["Pelancaran Sputnik 1","Yuri Gagarin ke angkasa","Neil Armstrong mendarat di Bulan","Angkasawan Malaysia ke stesen angkasa"],b:[0,1,2,3],u:"1957, 1961, 1969 dan 2007."}},

{n:2, tempat:"Model Suria", sk:"10.1 / 10.2 Memahami model dan teknologi angkasa",
 kadNama:"Kepler", kadEm:"\u{1FA90}", kadFakta:"Kepler mendapati planet bergerak lebih laju apabila berada lebih dekat dengan Matahari.",
 bosKadNama:"Galileo", bosKadEm:"\u{1F52D}", bosKadFakta:"Galileo menggunakan teleskop untuk menemui bulan-bulan Musytari, bukti bahawa bukan semua jasad mengorbit Bumi.",
 soalan:[
 {j:"pilih",t:"Mengapakah model geosentrik diterima selama lebih seribu tahun?",p:["Dari Bumi, langit kelihatan berputar mengelilingi kita","Model itu dibuktikan dengan teleskop moden","Semua planet memang mengorbit Bumi","Ptolemy mengambil gambar Sistem Suria dari angkasa lepas"],b:0,u:"Tanpa teleskop, pemerhatian harian kelihatan menyokong Bumi di pusat."},
 {j:"pilih",t:"Apakah kelebihan model Kepler berbanding model Copernicus?",p:["Model Kepler meramal kedudukan planet lebih tepat","Model Kepler meletakkan Bumi semula di pusat Sistem Suria","Model Kepler tidak memerlukan Matahari","Model Kepler menggunakan orbit segi empat"],b:0,u:"Ramalan orbit bulatan Copernicus tidak tepat sepenuhnya dengan pemerhatian."},
 {j:"pilih",t:"Mengapakah roket membawa oksigennya sendiri?",p:["Tiada oksigen di angkasa untuk membakar bahan api","Oksigen menjadikan roket lebih ringan","Angkasawan perlu bernafas melalui enjin roket","Oksigen menyejukkan badan roket semasa pelancaran"],b:0,u:"Pembakaran memerlukan oksigen, jadi roket membawa oksigen cecair."},
 {j:"pilih",t:"Bagaimanakah roket bergerak ke atas?",p:["Gas ditolak ke bawah, lalu gas menolak roket ke atas","Roket ditarik ke atas oleh graviti Bulan dan Matahari","Udara di atas roket menyedutnya ke atas","Roket menolak tanah dengan kaki besinya"],b:0,u:"Setiap tindakan mempunyai tindak balas yang sama besar dan bertentangan arah."},
 {j:"pilih",t:"Mengapakah roket dibina dalam beberapa peringkat?",p:["Peringkat kosong dibuang supaya jisim roket berkurang","Setiap peringkat membawa angkasawan yang berbeza","Supaya roket kelihatan lebih tinggi dan menarik","Peringkat itu digunakan semula di angkasa sebagai rumah"],b:0,u:"Roket yang lebih ringan memerlukan kurang bahan api untuk terus memecut."},
 {j:"pilih",t:"Mengapakah satelit komunikasi geopegun kelihatan tidak bergerak dari Bumi?",p:["Satelit itu mengorbit seiring putaran Bumi","Satelit itu terapung pegun tanpa bergerak","Satelit itu terlalu jauh untuk dilihat bergerak","Satelit itu diikat pada Bumi dengan kabel"],b:0,u:"Satelit dan Bumi berputar bersama, jadi satelit kekal di atas titik yang sama."},
 {j:"pilih",t:"Bagaimanakah penderiaan jauh membantu pengurusan bencana banjir?",p:["Imej satelit menunjukkan kawasan banjir dengan cepat","Satelit menyerap air banjir dari angkasa","Satelit menghalang hujan daripada turun","Imej satelit hanya boleh digunakan selepas air banjir surut"],b:0,u:"Pasukan penyelamat boleh merancang laluan dan keutamaan dengan lebih cepat."},
 {j:"pilih",t:"Mengapakah model heliosentrik dianggap lebih baik daripada model geosentrik?",p:["Ia menerangkan pergerakan planet dengan lebih mudah","Ia meletakkan Bumi sebagai pusat alam semesta","Ia tidak memerlukan sebarang pemerhatian","Ia dicadangkan lebih awal daripada model geosentrik"],b:0,u:"Model geosentrik memerlukan banyak bulatan kecil tambahan untuk menerangkan pergerakan planet."}],
 bos:{j:"pilih",t:"Mengapakah penerokaan angkasa lepas memerlukan kerjasama antarabangsa, seperti Stesen Angkasa Antarabangsa?",p:["Kosnya sangat tinggi dan kepakaran perlu dikongsi","Angkasa lepas milik satu negara sahaja","Roket hanya boleh dilancarkan dari satu negara","Angkasawan tidak dibenarkan bekerja seorang diri di angkasa"],b:0,u:"Stesen Angkasa Antarabangsa dibina dan dikendalikan bersama oleh beberapa agensi angkasa."}},

{n:3, tempat:"Orbit Planet", sk:"10.1 Mengaplikasi pengetahuan model Sistem Suria", lampiran:"orbit",
 kadNama:"Tahun Musytari", kadEm:"\u{1F4C5}", kadFakta:"Satu tahun di Musytari bersamaan hampir 12 tahun di Bumi.",
 bosKadNama:"Unit Astronomi", bosKadEm:"\u{1F4CF}", bosKadFakta:"Satu unit astronomi ialah jarak purata Bumi ke Matahari, kira-kira 150 juta km.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, apakah hubungan antara jarak planet dari Matahari dengan tempoh orbitnya?",p:["Semakin jauh, semakin lama tempoh orbit","Semakin jauh, semakin singkat tempoh orbit","Jarak tidak mempengaruhi tempoh orbit","Semua planet mempunyai tempoh orbit yang sama"],b:0,u:"Tempoh orbit meningkat dari 0.24 tahun bagi Utarid kepada 11.86 tahun bagi Musytari."},
 {j:"nombor",t:"Berapa hari Bumi dalam satu tahun Utarid? Gunakan 1 tahun = 365 hari dan bundarkan kepada nombor bulat.",b:88,tol:1,suf:"hari",u:"0.24 × 365 = 87.6, iaitu kira-kira 88 hari."},
 {j:"pilih",t:"Berapakah umur seorang murid berusia 15 tahun Bumi jika dikira dalam tahun Marikh?",p:["Kira-kira 8 tahun","Kira-kira 28 tahun","Kira-kira 15 tahun","Kira-kira 2 tahun"],b:0,u:"15 ÷ 1.88 ≈ 8 tahun Marikh."},
 {j:"pilih",t:"Planet manakah mengambil masa paling lama untuk melengkapkan satu orbit?",p:["Musytari","Utarid","Bumi","Marikh"],b:0,u:"Musytari paling jauh dalam jadual."},
 {j:"pilih",t:"Seorang murid mendakwa Zuhrah mempunyai tahun yang lebih panjang daripada Bumi. Semak dakwaan itu.",p:["Salah, kerana tempoh orbit Zuhrah hanya 0.62 tahun Bumi","Betul, kerana Zuhrah lebih besar dan lebih berat daripada Bumi","Betul, kerana Zuhrah lebih jauh dari Matahari","Salah, kerana Zuhrah tidak mengorbit Matahari"],b:0,u:"Zuhrah lebih dekat dengan Matahari, jadi tahunnya lebih singkat."},
 {j:"pilih",t:"Mengapakah model heliosentrik sesuai untuk menerangkan data dalam jadual?",p:["Semua orbit dalam jadual berpusat pada Matahari","Semua planet dalam jadual sebenarnya mengorbit Bumi","Jadual itu langsung tidak melibatkan Matahari","Tempoh orbit Bumi dalam jadual ialah sifar"],b:0,u:"Jarak dalam jadual diukur dari Matahari."},
 {j:"pilih",t:"Kapal angkasa ke Marikh biasanya dilancarkan hanya pada tempoh tertentu. Penjelasan paling munasabah?",p:["Kedudukan Bumi dan Marikh hanya sesuai sekali-sekala","Marikh hilang dari Sistem Suria pada masa lain","Roket hanya boleh dilancarkan pada waktu malam","Graviti Bumi terlalu kuat untuk dilawan pada kebanyakan masa"],b:0,u:"Tempoh orbit yang berbeza menyebabkan kedua-dua planet berada pada kedudukan terbaik lebih kurang setiap dua tahun."},
 {j:"pilih",t:"Seorang murid mahu melukis model Sistem Suria mengikut skala untuk kelas. Cara paling sesuai?",p:["Guna jarak dalam jadual sebagai nisbah, 1 AU = 10 cm","Letakkan semua planet pada jarak yang sama","Lukis Bumi di pusat seperti model Ptolemy yang terkenal","Lukis planet mengikut warna kegemaran sahaja"],b:0,u:"Nisbah yang tetap mengekalkan perbandingan jarak sebenar."}],
 bos:{j:"nombor",t:"Jika 1 AU diwakili oleh 10 cm, berapakah jarak Musytari dari Matahari dalam model itu, dalam cm?",b:52,tol:0.5,suf:"cm",u:"5.20 × 10 cm = 52 cm."}},

{n:4, tempat:"Orbit Satelit", sk:"10.2 Menganalisis teknologi satelit", lampiran:"satelit",
 kadNama:"Stesen Angkasa", kadEm:"\u{1F30D}", kadFakta:"Stesen Angkasa Antarabangsa mengorbit Bumi kira-kira 16 kali sehari.",
 bosKadNama:"Geopegun", bosKadEm:"\u{1F4E1}", bosKadFakta:"Satelit geopegun berada kira-kira 36 000 km di atas khatulistiwa dan mengorbit sekali setiap 24 jam, seiring putaran Bumi, jadi ia kelihatan tidak bergerak dari Bumi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, apakah hubungan antara ketinggian orbit dengan tempoh satu orbit?",p:["Semakin tinggi, semakin lama tempoh orbit","Semakin tinggi, semakin singkat tempoh orbit","Ketinggian tidak mempengaruhi tempoh orbit","Semua satelit mengambil masa 24 jam"],b:0,u:"Tempoh bertambah dari 90 minit pada 400 km kepada 24 jam pada 35 786 km."},
 {j:"pilih",t:"Mengapakah piring satelit TV di rumah tidak perlu dipusingkan untuk mengikut satelit?",p:["Satelit geopegun sentiasa berada di atas titik yang sama","Satelit bergerak terlalu laju untuk dikesan","Piring satelit sebenarnya menerima isyarat dari menara di tanah sahaja","Satelit komunikasi berada pada ketinggian 400 km"],b:0,u:"Tempoh orbitnya 24 jam, sama dengan putaran Bumi."},
 {j:"nombor",t:"Berapa kali Stesen Angkasa Antarabangsa mengorbit Bumi dalam 24 jam? Bundarkan kepada nombor bulat.",b:16,tol:0.5,suf:"kali",u:"24 jam = 1440 minit. 1440 ÷ 90 = 16 kali."},
 {j:"pilih",t:"Satelit manakah paling sesuai untuk mengambil imej terperinci ladang sawit?",p:["Satelit penderiaan jauh","Satelit komunikasi geopegun","Satelit GPS","Semua sama sesuai"],b:0,u:"Satelit penderiaan jauh dibina khas untuk memerhati permukaan Bumi."},
 {j:"pilih",t:"Mengapakah satelit penderiaan jauh diletakkan lebih rendah daripada satelit geopegun?",p:["Lebih dekat dengan Bumi, jadi imej lebih terperinci","Lebih murah kerana satelit rendah tidak perlu bahan api langsung","Satelit rendah tidak terjejas oleh graviti","Satelit tinggi tidak boleh mengambil gambar"],b:0,u:"Jarak yang dekat membolehkan butiran kecil di permukaan dirakam."},
 {j:"pilih",t:"Penerima GPS memerlukan isyarat daripada sekurang-kurangnya empat satelit. Mengapakah terdapat banyak satelit GPS di angkasa?",p:["Supaya cukup satelit kelihatan dari mana-mana tempat","Supaya setiap negara mempunyai satelit sendiri","Kerana satelit GPS cepat rosak setiap minggu","Supaya satelit dapat saling berlanggar dengan selamat"],b:0,u:"Satelit GPS sentiasa bergerak, jadi banyak satelit diperlukan untuk liputan seluruh dunia."},
 {j:"banyak",t:"Pilih SEMUA kegunaan penderiaan jauh.",p:["Memantau kesihatan tanaman","Mengesan kawasan banjir","Memetakan kawasan hutan","Menyiarkan rancangan televisyen","Menentukan kedudukan kereta dengan tepat"],b:[0,1,2],u:"Siaran TV ialah kerja satelit komunikasi, dan kedudukan kereta ditentukan oleh GPS."},
 {j:"pilih",t:"Sampah angkasa semakin banyak di orbit rendah. Analisis risiko terbesarnya.",p:["Sampah angkasa boleh merosakkan satelit dan stesen angkasa","Sampah angkasa jatuh ke Bumi setiap hari dan memusnahkan banyak bandar","Sampah angkasa menghalang cahaya Matahari sampai ke Bumi","Sampah angkasa tidak mempunyai sebarang kesan"],b:0,u:"Kebanyakan serpihan kecil terbakar di atmosfera, tetapi di orbit ia bergerak sangat laju."}],
 bos:{j:"pilih",t:"Sebuah satelit baharu perlu memberi liputan televisyen berterusan ke seluruh Malaysia. Orbit paling sesuai?",p:["Orbit geopegun pada kira-kira 35 786 km","Orbit rendah pada kira-kira 400 km","Orbit GPS pada kira-kira 20 200 km","Mana-mana orbit kerana semuanya sama"],b:0,u:"Hanya satelit geopegun kekal di atas kawasan yang sama sepanjang masa."}},

{n:5, tempat:"Agensi Angkasa", sk:"10.2.2 Mewajarkan penerokaan angkasa lepas", lampiran:"misi",
 kadNama:"TiungSAT-1", kadEm:"\u{1F6F0}", kadFakta:"TiungSAT-1 yang dilancarkan pada tahun 2000 ialah satelit mikro pertama Malaysia.",
 bosKadNama:"Sampah Angkasa", bosKadEm:"\u{1F5D1}", bosKadFakta:"Serpihan sekecil kepingan cat pun boleh merosakkan kapal angkasa kerana bergerak pada kelajuan yang sangat tinggi.",
 soalan:[
 {j:"pilih",t:"Dengan bajet RM500 juta, gabungan misi manakah boleh dilaksanakan?",p:["P dan Q","R sahaja","P dan R","Q dan R"],b:0,u:"P dan Q berjumlah RM400 juta. Misi R sahaja sudah RM2500 juta, lima kali ganda bajet."},
 {j:"pilih",t:"Dalam bajet itu, misi manakah memberi manfaat paling langsung kepada rakyat?",p:["Misi P, kerana amaran bencana melindungi jutaan penduduk","Misi Q, kerana penyelidikan mikrograviti terus menghasilkan ubat baharu","Misi R, kerana pengetahuan baharu tentang Marikh paling bernilai","Misi Q, kerana ia paling murah dan risikonya hanya sederhana"],b:0,u:"Misi R di luar bajet. Penyelidikan mikrograviti bernilai tetapi manfaatnya mengambil masa bertahun-tahun."},
 {j:"pilih",t:"Nilaikan dakwaan: \"Wang penerokaan angkasa lebih baik digunakan untuk masalah di Bumi sahaja.\"",p:["Tidak sepenuhnya tepat, kerana teknologi angkasa turut membantu Bumi","Tepat, kerana penerokaan angkasa tiada kaitan dengan masalah di Bumi","Tepat, kerana satelit hanya berguna untuk kegunaan ketenteraan","Tidak tepat, kerana masalah di Bumi boleh diselesaikan di angkasa"],b:0,u:"Ramalan cuaca, GPS dan pemantauan bencana semuanya bergantung pada teknologi angkasa. Tetapi kos dan manfaat setiap misi tetap perlu ditimbang."},
 {j:"pilih",t:"Satelit pemantau jerebu (Misi P) memerlukan data tanah untuk pengesahan. Keputusan paling wajar?",p:["Gabungkan data satelit dengan stesen kualiti udara di tanah","Gunakan data satelit sahaja kerana satelit melihat seluruh negara","Tutup stesen di tanah kerana satelit lebih jitu","Gunakan stesen di tanah sahaja kerana satelit terhalang oleh awan"],b:0,u:"Satelit meliputi kawasan luas, manakala stesen di tanah mengukur udara yang benar-benar disedut. Dua sumber saling mengesahkan."},
 {j:"pilih",t:"Sebuah syarikat menawarkan pelancaran murah tetapi rekod keselamatannya lemah. Keputusan paling wajar bagi Misi P?",p:["Pilih pelancar yang lebih selamat walaupun mahal sedikit","Pilih pelancar murah dan guna baki wang untuk satelit kedua","Batalkan Misi P kerana setiap pelancaran ada risiko","Guna pelancar murah tetapi tambah perisai pada satelit"],b:0,u:"Kehilangan satelit RM300 juta jauh lebih mahal daripada perbezaan harga pelancaran. Perisai tidak menyelamatkan satelit jika roket gagal."},
 {j:"banyak",t:"Pilih SEMUA langkah yang wajar untuk mengurangkan sampah angkasa daripada misi baharu.",p:["Rancang satelit jatuh ke atmosfera selepas tamat hayat","Kurangkan serpihan yang terlepas semasa pelancaran","Kongsi data orbit dengan agensi lain","Letupkan satelit lama supaya serpihannya lebih kecil","Tinggalkan peringkat roket lama di orbit sebagai perisai"],b:[0,1,2],u:"Serpihan kecil pun bergerak sangat laju dan berbahaya. Peringkat roket yang ditinggalkan menjadi sampah angkasa, bukan perisai."},
 {j:"pilih",t:"Negara mahu murid lebih berminat dengan sains angkasa. Pilihan paling wajar dengan kos rendah?",p:["Program membina CubeSat bersama universiti","Hantar murid terbaik melawat pusat angkasa di luar negara","Beli teleskop mahal untuk setiap sekolah menengah","Bina tapak pelancaran roket kecil di setiap negeri"],b:0,u:"CubeSat murah dan memberi ramai murid pengalaman membina satelit sebenar."},
 {j:"pilih",t:"Selepas banjir besar, agensi bantuan ada imej satelit sehari selepas banjir dan laporan penduduk seminggu kemudian. Keputusan paling wajar?",p:["Guna imej satelit dahulu, kemudian sahkan dengan laporan penduduk","Tunggu laporan penduduk kerana imej satelit mungkin salah","Guna imej satelit sahaja kerana ia menunjukkan semua butiran","Tunggu imej satelit kedua seminggu kemudian untuk perbandingan"],b:0,u:"Bantuan perlu bergerak cepat, dan laporan penduduk menambah butiran yang tidak dilihat satelit, seperti keadaan di bawah bumbung."}],
 bos:{j:"pilih",t:"Negara mempertimbangkan untuk meneruskan program angkasa walaupun ekonomi perlahan. Hujah paling kukuh untuk meneruskannya?",p:["Data satelit membantu pertanian, cuaca dan bencana","Program angkasa menjadikan negara kelihatan lebih hebat","Negara jiran juga mempunyai program angkasa sendiri","Penerokaan Marikh akan menyediakan tempat tinggal baharu"],b:0,u:"Hujah yang kukuh menunjukkan manfaat sebenar kepada rakyat. Marikh belum boleh didiami manusia dalam masa terdekat."}},

{n:6, tempat:"Pelancar Roket", sk:"10.2 Mereka cipta dalam penerokaan angkasa",
 kadNama:"Roket Air", kadEm:"\u{1F4A6}", kadFakta:"Roket air terbang kerana air ditolak keluar ke bawah, lalu air menolak roket ke atas.",
 bosKadNama:"Voyager 1", bosKadEm:"\u{1F680}", bosKadFakta:"Voyager 1 yang dilancarkan pada tahun 1977 ialah objek buatan manusia yang paling jauh dari Bumi.",
 soalan:[
 {j:"pilih",t:"Awak mereka roket air untuk pertandingan sekolah. Faktor paling penting untuk ketinggian maksimum?",p:["Isi padu air dan tekanan yang sesuai","Botol diisi penuh dengan air supaya tujahan maksimum","Botol paling berat supaya roket lebih stabil","Tekanan serendah mungkin supaya botol tidak pecah"],b:0,u:"Air ditolak ke bawah dan menolak roket ke atas. Terlalu banyak air menambah jisim dan tiada ruang untuk udara bertekanan; terlalu sedikit mengurangkan tujahan."},
 {j:"pilih",t:"Roket air awak terbang tidak lurus. Pengubahsuaian paling wajar?",p:["Pasang sirip sama saiz secara simetri di bahagian bawah","Pasang sirip di bahagian hidung roket","Tambah air sehingga botol hampir penuh","Pasang satu sirip besar di satu sisi sahaja"],b:0,u:"Sirip simetri di bahagian belakang menstabilkan arah penerbangan, seperti bulu pada anak panah."},
 {j:"pilih",t:"Awak mereka cadangan satelit kecil untuk Malaysia. Kegunaan paling sesuai dan bermanfaat?",p:["Memantau banjir, jerebu dan kesihatan tanaman","Menyiarkan televisyen berterusan dari orbit 400 km","Mengawal hujan supaya banjir tidak berlaku","Menentukan kedudukan kereta seperti sistem GPS"],b:0,u:"Satelit di orbit rendah bergerak melintasi langit, jadi tidak sesuai untuk siaran berterusan. GPS memerlukan banyak satelit, dan satelit tidak mengawal cuaca."},
 {j:"pilih",t:"Bajet projek roket air awak terhad. Bahan paling sesuai dan selamat untuk badan roket?",p:["Botol plastik minuman berkarbonat terpakai","Botol kaca terpakai kerana lebih kukuh","Botol air mineral nipis kerana lebih ringan","Tin aluminium kerana ia logam yang kuat"],b:0,u:"Botol minuman berkarbonat direka untuk menahan tekanan. Kaca boleh pecah berkecai, dan botol nipis serta tin boleh terkoyak di bawah tekanan."},
 {j:"pilih",t:"Bagaimanakah awak menentukan reka bentuk sirip terbaik secara adil?",p:["Uji setiap sirip berulang kali dengan tekanan dan air yang sama","Uji sekali sahaja bagi setiap reka bentuk sirip","Tukar isi padu air setiap kali supaya lebih banyak data diperoleh","Uji setiap reka bentuk pada hari yang berbeza cuacanya"],b:0,u:"Hanya reka bentuk sirip yang patut berubah. Angin pada hari berbeza menambah pemboleh ubah yang tidak dikawal."},
 {j:"pilih",t:"Kawasan pelancaran roket air awak berhampiran bangunan dan orang ramai. Keputusan paling wajar?",p:["Padang terbuka dengan zon selamat","Tepi bangunan supaya roket tidak dibawa angin","Dalam dewan tertutup supaya tiada angin","Jalan sekolah kerana ruangnya panjang dan lurus"],b:0,u:"Roket air yang laju boleh mencederakan orang dan memecahkan tingkap."},
 {j:"pilih",t:"Model satelit awak akan dipamerkan kepada murid sekolah rendah. Pendekatan paling berkesan?",p:["Tunjuk cara imej satelit membantu kehidupan mereka","Terangkan persamaan orbit dengan terperinci","Tunjukkan model tanpa penerangan supaya mereka meneka","Fokus pada sejarah pelancaran Sputnik sahaja"],b:0,u:"Kanak-kanak lebih berminat apabila nampak kaitan dengan kehidupan sendiri, seperti ramalan cuaca dan peta."},
 {j:"pilih",t:"Awak mencadangkan pusat pelancaran roket kecil di sebuah negeri. Pertimbangan paling wajar?",p:["Kaji kesan kepada penduduk, alam dan keselamatan","Tapak berhampiran pusat bandar supaya mudah dikunjungi","Pilih tanah tinggi di tengah semenanjung supaya roket lebih tinggi","Pilih tapak jauh dari laut supaya roket tidak jatuh ke dalam air"],b:0,u:"Kebanyakan pusat pelancaran dibina di tepi laut supaya peringkat roket yang terpisah jatuh jauh dari penduduk."}],
 bos:{j:"buka",
  t:"Malaysia mahu melancarkan satelit kecil yang dibina oleh pelajar untuk membantu menyelesaikan satu masalah tempatan. Reka satu misi untuk satelit itu.",
  arahan:"Terangkan masalah yang ingin diselesaikan, jenis orbit dan data yang dikumpul, cara data sampai kepada pengguna, dan bagaimana awak mengambil kira kos, sampah angkasa serta manfaat kepada masyarakat.",
  u:"Jawapan TP6 yang kukuh memilih orbit yang sesuai dengan tujuan misi, menerangkan aliran data kepada pengguna, dan mengambil kira kos serta kelestarian angkasa."}}
];

module.exports = {
  id:"t3b10", tingkatan:3, kod:"10.0 Penerokaan Angkasa Lepas",
  tajuk:"Laluan Angkasa",
  subtajuk:"Sains Ting. 3 · Bab 10 Penerokaan Angkasa Lepas",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali model Sistem Suria oleh Ptolemy, Copernicus dan Kepler serta peristiwa penting penerokaan angkasa. Langkah seterusnya ialah menerangkan perbezaan antara model tersebut.",
   2:"{n} memahami perkembangan model Sistem Suria serta prinsip roket dan satelit. Perlu lebih banyak latihan mentafsir data orbit sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan model Sistem Suria untuk mentafsir data orbit planet dan membina model berskala. Galakkan mengaitkan pengiraan dengan fenomena sebenar.",
   4:"{n} mampu menganalisis data orbit satelit untuk memilih jenis satelit yang sesuai bagi sesuatu kegunaan. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai dan mewajarkan pilihan misi angkasa berdasarkan kos, risiko dan manfaat kepada masyarakat. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka misi atau alat penerokaan angkasa yang praktikal, dengan mengambil kira kos, keselamatan dan manfaat kepada masyarakat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Penerokaan Angkasa Lepas. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ orbit:T_ORBIT, satelit:T_SATELIT, misi:T_MISI },
  aras:ARAS
};
