/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 3.0 Pengangkutan.
   Jalankan `node bina.js t3b3` untuk menyemak dan menghasilkan bank-t3b3.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 59.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai sistem pengangkutan.",
"Memahami sistem pengangkutan serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai sistem pengangkutan untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai sistem pengangkutan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai sistem pengangkutan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai sistem pengangkutan dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_NADI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Murid</th>'+
'<th class="n">Nadi rehat (min&#8315;&#185;)</th><th class="n">Sejurus selepas 3 minit berlari</th>'+
'<th class="n">Selepas 5 minit rehat</th><th>Latar</th></tr></thead><tbody>'+
'<tr><td>Farid</td><td class="n">72</td><td class="n">150</td><td class="n">78</td><td>Bersukan tiga kali seminggu</td></tr>'+
'<tr><td>Gayathri</td><td class="n">88</td><td class="n">168</td><td class="n">126</td><td>Jarang bersenam</td></tr>'+
'<tr><td>Hakim</td><td class="n">58</td><td class="n">140</td><td class="n">64</td><td>Ahli pasukan olahraga sekolah</td></tr>'+
'</tbody></table></div><p class="qnote">Masa pemulihan ialah tempoh nadi kembali menghampiri bacaan rehat. Pemulihan yang lebih cepat menunjukkan kecergasan jantung yang lebih baik.</p>';

const T_DARAH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kumpulan darah</th><th>Antigen pada sel darah merah</th>'+
'<th>Antibodi dalam plasma</th><th>Boleh menderma kepada</th><th>Boleh menerima daripada</th></tr></thead><tbody>'+
'<tr><td>A</td><td>A</td><td>anti-B</td><td>A, AB</td><td>A, O</td></tr>'+
'<tr><td>B</td><td>B</td><td>anti-A</td><td>B, AB</td><td>B, O</td></tr>'+
'<tr><td>AB</td><td>A dan B</td><td>tiada</td><td>AB</td><td>A, B, AB, O</td></tr>'+
'<tr><td>O</td><td>tiada</td><td>anti-A dan anti-B</td><td>A, B, AB, O</td><td>O</td></tr>'+
'</tbody></table></div><p class="qnote">Penggumpalan berlaku apabila antibodi dalam plasma penerima bertemu antigen yang sepadan pada sel darah merah penderma.</p>';

const T_TRANSPIRASI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Keadaan</th>'+
'<th class="n">Suhu (&deg;C)</th><th class="n">Kelembapan (%)</th><th>Angin</th>'+
'<th class="n">Kadar transpirasi (mm jam&#8315;&#185;)</th></tr></thead><tbody>'+
'<tr><td>Kawalan</td><td class="n">28</td><td class="n">70</td><td>Tiada</td><td class="n">12</td></tr>'+
'<tr><td>Set A</td><td class="n">28</td><td class="n">70</td><td>Kipas dihidupkan</td><td class="n">21</td></tr>'+
'<tr><td>Set B</td><td class="n">35</td><td class="n">70</td><td>Tiada</td><td class="n">19</td></tr>'+
'<tr><td>Set C</td><td class="n">28</td><td class="n">95</td><td>Tiada</td><td class="n">5</td></tr>'+
'</tbody></table></div><p class="qnote">Pucuk berdaun yang sama saiz digunakan bagi setiap set, diukur dengan fotometer selama satu jam.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Jantung", sk:"3.1 / 3.2 Sistem pengangkutan dan jantung",
 kadNama:"Ventrikel Kiri", kadEm:"\u{1FAC0}", kadFakta:"Dinding ventrikel kiri kira-kira tiga kali lebih tebal daripada ventrikel kanan, kerana ia memam darah ke seluruh badan.",
 bosKadNama:"Injap Jantung", bosKadEm:"\u{1F6AA}", bosKadFakta:"Bunyi lub dub yang didengar melalui stetoskop ialah bunyi injap jantung menutup, bukan bunyi otot mengecut.",
 soalan:[
 {j:"pilih",t:"Apakah fungsi utama sistem pengangkutan dalam organisma?",p:["Mengangkut bahan seperti nutrien, gas dan bahan kumuh ke dan dari setiap sel","Menghasilkan tenaga untuk pergerakan otot","Melindungi organ dalaman daripada kecederaan","Mengawal suhu badan sahaja"],b:0,u:"Sel yang jauh dari permukaan badan tidak dapat bergantung pada resapan sahaja."},
 {j:"pilih",t:"Ruang jantung yang mempunyai dinding otot paling tebal ialah:",p:["Ventrikel kiri","Ventrikel kanan","Atrium kiri","Atrium kanan"],b:0,u:"Ia perlu menjana tekanan yang cukup untuk menghantar darah ke seluruh badan."},
 {j:"pilih",t:"Komponen darah yang mengangkut oksigen ialah:",p:["Sel darah merah","Sel darah putih","Platelet","Plasma"],b:0,u:"Hemoglobin dalam sel darah merah mengikat oksigen."},
 {j:"susun",t:"Susun laluan darah dalam peredaran pulmonari mengikut urutan yang betul.",p:["Ventrikel kanan","Arteri pulmonari","Kapilari dalam peparu","Vena pulmonari","Atrium kiri"],b:[0,1,2,3,4],u:"Peredaran pulmonari membawa darah ke peparu dan kembali semula ke jantung."},
 {j:"pilih",t:"Salur darah yang membawa darah keluar dari jantung ialah:",p:["Arteri","Vena","Kapilari","Salur limfa"],b:0,u:"Arteri keluar, vena masuk, tanpa mengira kandungan oksigennya."},
 {j:"pilih",t:"Salur pengangkutan yang membawa air dan mineral dari akar ke daun ialah:",p:["Xilem","Floem","Kutikel","Stoma"],b:0,u:"Xilem juga memberi sokongan kepada batang kerana dindingnya berlignin."},
 {j:"pilih",t:"Komponen darah yang membantu pembekuan darah ialah:",p:["Platelet","Sel darah merah","Plasma","Hemoglobin"],b:0,u:"Platelet berkumpul di tempat luka dan memulakan proses pembekuan."},
 {j:"pilih",t:"Apakah fungsi injap dalam jantung dan vena?",p:["Memastikan darah mengalir dalam satu arah sahaja","Menapis bahan kumuh daripada darah","Menambah tekanan darah","Menukar darah terdeoksigen kepada beroksigen"],b:0,u:"Tanpa injap, darah akan mengalir semula ke belakang apabila tekanan turun."}],
 bos:{j:"banyak",t:"Pilih SEMUA yang merupakan bahan yang diangkut oleh darah manusia.",p:["Oksigen","Nutrien yang telah dicerna","Hormon","Bahan kumuh seperti urea","Cahaya matahari","Bunyi"],b:[0,1,2,3],u:"Darah ialah sistem penghantaran badan bagi bahan, bukan bagi tenaga cahaya atau bunyi."}},

{n:2, tempat:"Salur Darah", sk:"3.2 Struktur dan fungsi salur darah",
 kadNama:"Kapilari", kadEm:"\u{1FA78}", kadFakta:"Kapilari begitu halus sehingga sel darah merah terpaksa bergerak sebaris demi sebaris untuk melaluinya.",
 bosKadNama:"Organisma Ringkas", bosKadEm:"\u{1F9A0}", bosKadFakta:"Amoeba tidak mempunyai sistem pengangkutan langsung, kerana tiada satu pun bahagian selnya jauh daripada permukaan luarnya.",
 soalan:[
 {j:"pilih",t:"Mengapakah dinding arteri lebih tebal dan lebih berotot berbanding vena?",p:["Arteri menahan tekanan tinggi setiap kali jantung mengecut","Arteri membawa darah yang lebih pekat","Arteri terletak lebih dekat dengan kulit","Arteri perlu menyimpan oksigen berlebihan"],b:0,u:"Denyutan nadi yang boleh dirasa pada pergelangan tangan ialah gelombang tekanan itu."},
 {j:"pilih",t:"Mengapakah vena mempunyai injap tetapi kebanyakan arteri tidak?",p:["Tekanan darah dalam vena rendah, jadi injap diperlukan untuk menghalang aliran balik","Vena membawa darah yang lebih berat","Injap dalam arteri akan pecah kerana tekanan tinggi","Vena perlu menapis bahan kumuh"],b:0,u:"Pengecutan otot rangka di sekeliling vena membantu menolak darah kembali ke jantung."},
 {j:"pilih",t:"Mengapakah dinding kapilari setebal satu sel sahaja?",p:["Supaya jarak resapan pendek dan bahan cepat bertukar dengan sel di sekeliling","Supaya kapilari lebih ringan","Supaya darah mengalir lebih laju di dalamnya","Supaya kapilari mudah pecah apabila perlu"],b:0,u:"Kapilari ialah satu-satunya tempat pertukaran bahan benar-benar berlaku."},
 {j:"pilih",t:"Mengapakah arteri pulmonari dikira pengecualian kepada peraturan biasa?",p:["Ia arteri tetapi membawa darah terdeoksigen","Ia vena tetapi membawa darah beroksigen","Ia tidak mempunyai dinding berotot","Ia mengalir dalam dua arah"],b:0,u:"Peraturan sebenar ialah arteri membawa darah keluar dari jantung, bukan bahawa arteri sentiasa beroksigen."},
 {j:"pilih",t:"Apakah beza antara peredaran pulmonari dan peredaran sistemik?",p:["Pulmonari antara jantung dan peparu, sistemik antara jantung dan seluruh badan","Pulmonari berlaku waktu siang, sistemik waktu malam","Pulmonari hanya pada haiwan, sistemik hanya pada manusia","Tiada perbezaan, kedua-duanya sama"],b:0,u:"Sebab itu jantung manusia mempunyai empat ruang, iaitu dua laluan berasingan."},
 {j:"pilih",t:"Mengapakah organisma ringkas seperti amoeba tidak memerlukan sistem pengangkutan?",p:["Setiap bahagian selnya cukup dekat dengan permukaan luar untuk bergantung pada resapan","Ia tidak memerlukan oksigen langsung","Ia mengangkut bahan menggunakan angin","Ia menyimpan semua nutrien dalam nukleus"],b:0,u:"Apabila organisma bertambah besar, nisbah luas permukaan kepada isi padu jatuh dan resapan tidak lagi mencukupi."},
 {j:"pilih",t:"Apakah perbezaan utama antara xilem dan floem?",p:["Xilem mengangkut air ke atas sahaja, floem mengangkut hasil fotosintesis ke atas dan ke bawah","Xilem mengangkut makanan, floem mengangkut air","Xilem hidup, floem mati","Kedua-duanya mengangkut air dalam arah yang sama"],b:0,u:"Sel xilem sudah mati dan berongga, manakala sel floem masih hidup."},
 {j:"pilih",t:"Mengapakah sel darah merah manusia tidak mempunyai nukleus?",p:["Ruang itu digunakan untuk memuatkan lebih banyak hemoglobin","Supaya ia tidak boleh membiak dalam salur darah","Supaya ia lebih berat dan mudah tenggelam","Kerana nukleusnya dipindahkan ke plasma"],b:0,u:"Bentuk cakera dwicekungnya juga menambah luas permukaan untuk pertukaran gas."}],
 bos:{j:"pilih",t:"Apakah yang berlaku jika injap antara atrium kiri dan ventrikel kiri bocor?",p:["Sebahagian darah mengalir semula ke atrium, jadi jumlah darah yang sampai ke badan berkurang","Darah akan mengalir lebih laju ke seluruh badan","Peparu akan menerima darah beroksigen dua kali ganda","Tiada kesan kerana injap lain akan mengambil alih"],b:0,u:"Jantung terpaksa bekerja lebih kuat untuk menghantar jumlah darah yang sama, dan lama kelamaan ia keletihan."}},

{n:3, tempat:"Kapilari & Tisu", sk:"3.2 / 3.3 Mengaplikasi dalam kehidupan", lampiran:"nadi",
 kadNama:"Kadar Nadi", kadEm:"\u{1F493}", kadFakta:"Nadi rehat atlet terlatih boleh serendah 40 denyutan seminit, kerana setiap denyutan memam lebih banyak darah.",
 bosKadNama:"Tekanan Darah", bosKadEm:"\u{1FA7A}", bosKadFakta:"Bacaan tekanan darah 120 per 80 bermaksud tekanan semasa jantung mengecut dan semasa jantung mengendur.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, mengapakah kadar nadi semua murid meningkat sejurus selepas berlari?",p:["Otot memerlukan lebih banyak oksigen dan pengeluaran karbon dioksida perlu dipercepatkan","Suhu badan yang naik menyebabkan darah mengembang","Jantung menjadi lebih besar semasa bersenam","Darah menjadi lebih pekat dan sukar mengalir"],b:0,u:"Kadar nadi ialah cara badan menambah kadar penghantaran, bukan menambah jumlah darah."},
 {j:"nombor",t:"Berapakah kenaikan kadar nadi Gayathri, dalam denyutan seminit, dari rehat kepada sejurus selepas berlari?",b:80,tol:0.5,suf:"min⁻¹",u:"168 tolak 88 bersamaan 80 denyutan seminit."},
 {j:"pilih",t:"Berdasarkan jadual, siapakah yang menunjukkan kecergasan jantung paling baik?",p:["Hakim, kerana nadi rehatnya paling rendah dan pulih paling hampir kepada bacaan rehat","Gayathri, kerana kenaikan nadinya paling tinggi","Farid, kerana bacaannya berada di tengah-tengah","Ketiga-tiganya sama kerana semua nadi meningkat"],b:0,u:"Nadi rehat rendah dan pemulihan cepat ialah dua petanda kecergasan jantung."},
 {j:"pilih",t:"Mengapakah luka kecil pada jari berhenti berdarah dengan sendirinya?",p:["Platelet berkumpul di tempat luka dan memulakan pembekuan darah","Sel darah merah menutup luka itu","Plasma mengeras apabila terkena udara","Kapilari menutup secara kekal"],b:0,u:"Tanpa platelet, luka kecil pun boleh menjadi bahaya, dan itulah masalah pesakit hemofilia."},
 {j:"pilih",t:"Mengapakah muka menjadi merah semasa bersenam kuat?",p:["Kapilari di kulit melebar untuk membuang haba berlebihan","Darah kehabisan oksigen dan bertukar warna","Sel darah putih berkumpul di permukaan kulit","Tekanan darah menolak sel darah merah keluar dari salur"],b:0,u:"Sistem peredaran juga berfungsi mengawal suhu badan."},
 {j:"pilih",t:"Mengapakah pesakit yang berdiri terlalu lama boleh pengsan?",p:["Darah berkumpul di kaki kerana graviti dan bekalan darah ke otak berkurang","Kaki menggunakan semua oksigen dalam badan","Jantung berhenti berdenyut sementara","Otak menghasilkan terlalu banyak karbon dioksida"],b:0,u:"Sebab itu askar dalam perbarisan dinasihatkan menggerakkan otot betis sedikit demi sedikit."},
 {j:"pilih",t:"Mengapakah daun tumbuhan layu pada tengah hari yang panas walaupun tanahnya lembap?",p:["Kadar transpirasi melebihi kadar air diserap oleh akar pada waktu itu","Akar berhenti berfungsi apabila panas","Xilem tersumbat oleh udara panas","Floem mengalirkan air keluar dari daun"],b:0,u:"Tumbuhan itu selalunya pulih pada waktu petang apabila suhu turun."},
 {j:"pilih",t:"Seorang pesakit anemia cepat letih walaupun bernafas dengan normal. Mengapa?",p:["Bilangan sel darah merah atau hemoglobin yang rendah mengurangkan oksigen yang sampai ke sel","Peparunya tidak dapat mengembang sepenuhnya","Jantungnya berdenyut terlalu perlahan","Salur darahnya terlalu lebar"],b:0,u:"Masalahnya bukan pada pengambilan oksigen, tetapi pada pengangkutannya."}],
 bos:{j:"nombor",t:"Jantung Farid memam kira-kira 70 ml darah setiap denyutan. Berapa liter darah dipam dalam satu minit semasa nadi rehatnya 72 denyutan seminit?",b:5.04,tol:0.05,suf:"L",u:"72 didarab 70 ml bersamaan 5040 ml, iaitu 5.04 liter seminit."}},

{n:4, tempat:"Darah", sk:"3.3 Menganalisis kumpulan darah", lampiran:"darah",
 kadNama:"Penderma Universal", kadEm:"\u{1FA78}", kadFakta:"Kumpulan O tiada antigen pada sel darah merahnya, jadi sel itu tidak dikenali sebagai asing oleh sesiapa.",
 bosKadNama:"Penggumpalan", bosKadEm:"\u{26A0}", bosKadFakta:"Darah yang tidak sepadan menggumpal dalam beberapa minit dan boleh menyumbat kapilari kecil di organ penting.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, kumpulan darah manakah dipanggil penderma universal?",p:["O","AB","A","B"],b:0,u:"Kumpulan O boleh menderma kepada keempat-empat kumpulan kerana selnya tiada antigen A mahupun B."},
 {j:"pilih",t:"Berdasarkan jadual, kumpulan darah manakah dipanggil penerima universal?",p:["AB","O","A","B"],b:0,u:"Plasma AB tiada antibodi anti-A atau anti-B, jadi tiada sel penderma yang diserang."},
 {j:"banyak",t:"Seorang pesakit berkumpul darah B memerlukan pemindahan darah. Pilih SEMUA kumpulan yang selamat untuknya.",p:["B","O","A","AB"],b:[0,1],u:"Plasma pesakit B mengandungi anti-A, jadi mana-mana darah yang membawa antigen A akan menggumpal."},
 {j:"pilih",t:"Mengapakah penggumpalan berlaku apabila darah yang tidak sepadan dipindahkan?",p:["Antibodi dalam plasma penerima bertemu antigen sepadan pada sel darah merah penderma","Sel darah merah penderma terlalu besar untuk kapilari penerima","Plasma penderma membekukan darah penerima","Hemoglobin kedua-dua kumpulan bercampur dan mengeras"],b:0,u:"Antibodi mengikat banyak sel serentak sehingga membentuk ketulan."},
 {j:"pilih",t:"Seorang pesakit berkumpul darah A diberi darah kumpulan B secara tersilap. Kesan paling langsung?",p:["Anti-B dalam plasmanya menyerang sel darah B dan menyebabkan penggumpalan","Tiada kesan kerana kedua-duanya darah manusia","Kumpulan darahnya bertukar menjadi AB","Sel darah putihnya bertambah dua kali ganda"],b:0,u:"Ketulan yang terbentuk boleh menyumbat salur darah kecil di ginjal dan otak."},
 {j:"banyak",t:"Berdasarkan jadual, pilih SEMUA pernyataan yang BETUL.",p:["Plasma kumpulan O mengandungi kedua-dua anti-A dan anti-B","Kumpulan AB tidak mempunyai antibodi anti-A atau anti-B","Kumpulan A boleh menerima daripada kumpulan O","Kumpulan O boleh menerima daripada mana-mana kumpulan","Kumpulan AB boleh menderma kepada kumpulan A"],b:[0,1,2],u:"Kumpulan O hanya boleh menerima daripada O, dan AB hanya boleh menderma kepada AB."},
 {j:"pilih",t:"Sebuah hospital kehabisan stok darah kumpulan AB. Mengapa keadaan ini kurang mendesak berbanding kehabisan kumpulan O?",p:["Pesakit AB boleh menerima daripada mana-mana kumpulan, manakala pesakit O hanya boleh menerima O","Kumpulan AB jarang digunakan dalam pembedahan","Kumpulan AB boleh dihasilkan semula di makmal","Pesakit AB tidak memerlukan pemindahan darah"],b:0,u:"Itulah sebabnya bank darah paling risau apabila stok O menyusut."},
 {j:"pilih",t:"Bacaan tekanan darah seorang pesakit ialah 150 per 95 pada tiga lawatan berturut-turut. Tafsiran paling munasabah?",p:["Bacaan tinggi yang berulang menunjukkan tekanan darah tinggi yang perlu disiasat, bukan bacaan tersasar","Alat pengukur itu rosak kerana bacaannya tidak berubah","Pesakit itu sihat kerana bacaan konsisten","Bacaan 95 bermakna nadinya 95 denyutan seminit"],b:0,u:"Satu bacaan tinggi boleh disebabkan keresahan, tetapi tiga bacaan berulang ialah corak."}],
 bos:{j:"banyak",t:"Pilih SEMUA sebab kenapa bank darah lebih memerlukan penderma kumpulan O berbanding kumpulan lain.",p:["Darah O boleh diberi kepada pesakit mana-mana kumpulan dalam kecemasan","Dalam kecemasan tiada masa untuk menentukan kumpulan darah pesakit","Pesakit kumpulan O sendiri hanya boleh menerima darah O","Darah O bertahan lebih lama dalam simpanan berbanding kumpulan lain","Darah O mengandungi lebih banyak hemoglobin"],b:[0,1,2],u:"Tempoh simpanan dan kandungan hemoglobin tidak berbeza mengikut kumpulan darah."}},

{n:5, tempat:"Xilem & Floem", sk:"3.4 / 3.5 Menilai pengangkutan tumbuhan", lampiran:"transpirasi",
 kadNama:"Transpirasi", kadEm:"\u{1F4A7}", kadFakta:"Sebatang pokok besar boleh kehilangan lebih tiga ratus liter air sehari melalui transpirasi pada hari yang panas.",
 bosKadNama:"Gutasi", bosKadEm:"\u{1F343}", bosKadFakta:"Titisan air pada hujung daun rumput pada waktu pagi selalunya gutasi, bukan embun.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, faktor manakah memberi kesan paling besar terhadap kadar transpirasi?",p:["Angin, kerana Set A menaikkan kadar daripada 12 kepada 21","Suhu, kerana Set B menaikkan kadar daripada 12 kepada 19","Kelembapan, kerana Set C menurunkan kadar kepada 5","Ketiga-tiganya memberi kesan yang sama besar"],b:0,u:"Kenaikan sembilan unit oleh angin lebih besar daripada kenaikan tujuh unit oleh suhu."},
 {j:"banyak",t:"Pilih SEMUA yang dimalarkan dalam eksperimen ini supaya perbandingan itu adil.",p:["Saiz pucuk berdaun yang digunakan","Tempoh pengukuran selama satu jam","Jenis alat yang digunakan untuk mengukur","Suhu bilik dalam setiap set","Kelembapan udara dalam setiap set"],b:[0,1,2],u:"Suhu dan kelembapan sengaja diubah dalam Set B dan Set C, jadi ia pemboleh ubah dimanipulasi, bukan dimalarkan."},
 {j:"pilih",t:"Mengapakah kadar transpirasi jatuh kepada 5 apabila kelembapan dinaikkan kepada 95 peratus?",p:["Udara di luar daun sudah hampir tepu, jadi kecerunan resapan wap air menjadi kecil","Stoma pecah apabila kelembapan terlalu tinggi","Air dalam xilem membeku pada kelembapan tinggi","Akar berhenti menyerap air apabila udara lembap"],b:0,u:"Transpirasi bergantung pada perbezaan kelembapan antara ruang dalam daun dan udara luar."},
 {j:"pilih",t:"Nilaikan kesahan dapatan ini jika setiap set dijalankan sekali sahaja.",p:["Belum kukuh, kerana setiap set perlu diulang untuk memastikan bacaan bukan kebetulan","Sudah kukuh, kerana perbezaan antara set jelas besar","Sudah kukuh, kerana fotometer sentiasa tepat","Belum kukuh, kerana transpirasi tidak boleh diukur di makmal"],b:0,u:"Perbezaan yang besar tetap boleh terhasil daripada satu ralat besar dalam satu bacaan."},
 {j:"pilih",t:"Seorang petani mahu mengurangkan kehilangan air anak benihnya yang baru dipindahkan. Langkah paling wajar berdasarkan data ini?",p:["Sediakan teduhan dan pengadang angin, kerana kedua-duanya menyerang faktor yang paling meningkatkan transpirasi","Siram lebih kerap pada tengah hari","Buang sebahagian besar akar supaya kurang air diserap","Tanam semula anak benih pada kawasan berangin"],b:0,u:"Mengurangkan kehilangan lebih murah dan lebih berkesan daripada menambah bekalan."},
 {j:"pilih",t:"Sebatang pokok dikelar kulitnya sekeliling batang sehingga floem terputus tetapi xilem masih utuh. Apakah yang akan berlaku?",p:["Daun masih menerima air, tetapi akar akhirnya mati kerana tidak menerima hasil fotosintesis","Pokok itu mati serta-merta kerana air tidak dapat naik","Tiada kesan kerana xilem boleh menggantikan fungsi floem","Akar akan tumbuh lebih cepat kerana kurang beban"],b:0,u:"Inilah sebabnya kulit pokok yang dikelar sekeliling batang membunuh pokok secara perlahan."},
 {j:"pilih",t:"Nilaikan dakwaan bahawa titisan air pada hujung daun rumput pada waktu pagi ialah embun.",p:["Belum tentu, kerana titisan pada hujung daun selalunya gutasi yang keluar dari dalam tumbuhan","Betul, kerana semua air pada daun berasal dari udara","Salah, kerana embun tidak pernah terbentuk di kawasan tropika","Tidak boleh dinilai kerana kedua-duanya kelihatan sama"],b:0,u:"Embun terbentuk merata pada permukaan daun, manakala gutasi keluar pada titik tertentu di tepi atau hujung daun."},
 {j:"banyak",t:"Pilih SEMUA ciri kempen derma darah sekolah yang berkemungkinan besar berjaya.",p:["Sediakan maklumat jelas tentang kriteria kelayakan sebelum hari kempen","Libatkan bekas penerima darah untuk berkongsi pengalaman","Sediakan tempat rehat dan minuman selepas menderma","Umumkan nama mereka yang enggan menderma","Sasarkan murid bawah umur tanpa kebenaran ibu bapa"],b:[0,1,2],u:"Mempermalukan orang dan mengabaikan syarat umur merosakkan kempen dan melanggar garis panduan Pusat Darah Negara."}],
 bos:{j:"pilih",t:"Sekolah hanya mampu menjalankan SATU program kesihatan jantung tahun ini. Pilihan paling wajar?",p:["Program senaman berkala untuk semua murid, kerana kesihatan jantung terbina daripada tabiat harian dan ia melindungi semua","Saringan tekanan darah sekali sahaja untuk semua murid","Ceramah sehari oleh pakar jantung","Membeli mesin tekanan darah untuk bilik rawatan"],b:0,u:"Saringan mengesan masalah, tetapi hanya perubahan tabiat yang mengurangkan risiko itu sendiri."}},

{n:6, tempat:"Seluruh Organisma", sk:"3.3 / 3.5 Mereka cipta penyelesaian",
 kadNama:"Derma Darah", kadEm:"\u{1F3E5}", kadFakta:"Satu unit darah yang diderma boleh dipecahkan kepada tiga komponen dan membantu tiga orang pesakit berbeza.",
 bosKadNama:"Sistem Pengairan", bosKadEm:"\u{1F331}", bosKadFakta:"Pengairan titisan menghantar air terus ke akar dan boleh menjimatkan lebih separuh air berbanding penyiraman biasa.",
 soalan:[
 {j:"pilih",t:"Awak mereka cipta sistem pengairan mudah untuk kebun sekolah. Ciri manakah paling menentukan sama ada ia benar-benar menjimatkan air?",p:["Air dihantar terus ke pangkal akar pada waktu pagi atau petang, bukan disembur pada tengah hari","Paip yang digunakan berwarna cerah dan menarik","Sistem itu boleh menyiram seluruh kebun dalam masa lima minit","Tangki air diletakkan setinggi mungkin"],b:0,u:"Air yang tersejat sebelum sampai ke akar ialah air yang terbuang."},
 {j:"pilih",t:"Kos bahan sistem awak RM220 tetapi kelab alam sekitar hanya ada RM90. Tindakan paling kreatif dan praktikal?",p:["Guna botol plastik terpakai sebagai penitis dan hos lama dari bilik pekerja, kekalkan fungsi menghantar air ke akar","Batalkan projek kerana dana tidak mencukupi","Siram separuh kebun sahaja supaya muat dengan bajet","Minta setiap murid membawa air dari rumah"],b:0,u:"Kekangan kos menguji kreativiti, bukan menamatkan projek."},
 {j:"pilih",t:"Awak mahu membuktikan sistem awak benar-benar menjimatkan air. Cara paling meyakinkan?",p:["Ukur jumlah air digunakan dan tinggi pokok pada dua petak serupa, satu dengan sistem dan satu tanpa, dalam tempoh sama","Tanya ahli kelab sama ada mereka rasa air berkurang","Kira berapa lama sistem itu boleh berjalan tanpa rosak","Bandingkan dengan kebun sekolah lain yang tanahnya berbeza"],b:0,u:"Petak kawalan yang serupa ialah satu-satunya cara memisahkan kesan sistem awak daripada cuaca."},
 {j:"pilih",t:"Kelas awak mahu menganjurkan kempen derma darah. Langkah pertama paling wajar?",p:["Berhubung dengan Pusat Darah Negara untuk mengetahui kriteria penderma dan keperluan logistik sebenar","Cetak poster secantik mungkin dan tampal di seluruh sekolah","Tetapkan sasaran seratus penderma dahulu","Kumpul nama semua murid tingkatan tiga sebagai penderma"],b:0,u:"Ramai murid tingkatan tiga belum cukup umur, dan itu perlu diketahui sebelum sebarang janji dibuat."},
 {j:"pilih",t:"Kempen awak menarik ramai orang tetapi ramai ditolak kerana berat badan atau umur tidak layak. Pembetulan paling wajar untuk kali seterusnya?",p:["Sediakan semakan kelayakan ringkas sebelum hari kempen supaya masa dan harapan orang tidak terbuang","Turunkan syarat kelayakan supaya lebih ramai layak","Terima semua orang dan biarkan pihak klinik menolak di tempat","Hentikan kempen kerana terlalu sukar"],b:0,u:"Syarat kelayakan wujud untuk melindungi penderma dan penerima, jadi ia diuruskan lebih awal, bukan dilonggarkan."},
 {j:"pilih",t:"Sekolah luar bandar mahu meniru sistem pengairan awak tetapi tiada bekalan air paip yang tetap. Pengubahsuaian paling wajar?",p:["Tambah tong menuai air hujan sebagai sumber, kerana ia bebas dan sesuai dengan keadaan mereka","Minta mereka memasang paip baharu terlebih dahulu","Kekalkan rekaan asal kerana ia sudah terbukti berkesan","Cadangkan mereka menanam pokok yang tidak perlukan air"],b:0,u:"Reka cipta yang baik menyesuaikan diri dengan keadaan penggunanya."},
 {j:"pilih",t:"Awak akan tamat persekolahan tahun ini. Langkah paling penting supaya kebun dan sistem itu terus hidup?",p:["Latih kelab tingkatan bawah dan tinggalkan jadual penyelenggaraan yang ringkas dan bertulis","Pasang sistem yang lebih besar sebelum awak pergi","Simpan semua reka bentuk dalam telefon awak","Minta guru menjaga kebun itu sendiri"],b:0,u:"Penyelesaian yang bergantung pada seorang individu akan berhenti bersama orang itu."},
 {j:"pilih",t:"Jiran sekolah mengadu air dari sistem awak membanjiri laluan mereka. Pendekatan paling wajar mengambil kira nilai masyarakat?",p:["Berbincang dengan mereka, alihkan penitis dan tambah parit kecil, kerana kos pembetulannya rendah dan hubungan itu berbaloi dijaga","Abaikan aduan kerana kebun itu di dalam kawasan sekolah","Hentikan sistem itu terus tanpa berbincang","Salahkan hujan dan teruskan seperti biasa"],b:0,u:"Penyelesaian yang menang ialah yang murah bagi awak dan menghormati pihak sebelah."}],
 bos:{j:"buka",
  t:"Kebun sayur sekolah awak layu setiap kali cuti penggal kerana tiada sesiapa menyiramnya selama seminggu. Reka satu penyelesaian pengangkutan air yang sekolah awak benar-benar boleh laksanakan.",
  arahan:"Terangkan cara ia berfungsi dari segi pengangkutan air dalam tumbuhan, bahan yang perlu, siapa yang memasang dan menyelenggara, dan bagaimana awak mengambil kira kos serta keadaan sekolah semasa cuti.",
  u:"Jawapan TP6 yang kukuh menggabungkan sains transpirasi dan serapan akar, kos sebenar, dan siapa yang akan menjaganya."}}
];

module.exports = {
  id:"t3b3", tingkatan:3, kod:"3.0 Pengangkutan",
  tajuk:"Laluan Darah",
  subtajuk:"Sains Ting. 3 · Bab 3 Pengangkutan",
  spi:SPI,
  lampiran:{ nadi:T_NADI, darah:T_DARAH, transpirasi:T_TRANSPIRASI },
  aras:ARAS
};
