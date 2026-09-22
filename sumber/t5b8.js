/* Sumber kandungan — Sains KSSM Tingkatan 5, Bidang 8.0 Daya dan Tekanan.
   Fail ini disunting tangan. Jalankan `node bina.js t5b8` untuk menyemaknya
   dan menghasilkan bank-t5b8.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4 dan 5, Bahagian Pembangunan Kurikulum, Terbitan 2018, muka 158.
   Skop kandungan (8.1.1–8.1.5) daripada muka 154–157: prinsip Pascal,
   aplikasi harian (jek, brek, kerusi pergigian), prinsip Bernoulli,
   aplikasi harian (sayap kapal terbang, tiub Venturi), dan reka bentuk alat.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran saintifik mengenai daya dan tekanan.",
"Memahami daya dan tekanan dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai daya dan tekanan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai daya dan tekanan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai daya dan tekanan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai daya dan tekanan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_HIDRAULIK = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Daya kecil dikenakan pada omboh kecil (A₁)", isi:"hijauLembut", panah:"hijau" },
    { label:"Tekanan tersebar sama rata melalui cecair (Prinsip Pascal)", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Omboh besar (A₂) menerima daya yang lebih besar", isi:"kuningLembut", panah:"kuning" },
    { label:"Objek berat terangkat dengan daya tangan yang kecil", isi:"merahLembut" },
  ],
  kapsyen:"Rajah 1 · Cara sistem hidraulik menggandakan daya melalui Prinsip Pascal.",
  alt:"Rajah aliran menegak empat peringkat: daya kecil pada omboh kecil, tekanan tersebar sama rata, omboh besar menerima daya lebih besar, objek berat terangkat"
};

const R_TOLOK = {
  jenis:"skala", alat:"dail", hingga:10, langkah:2, bacaan:6, label:"kPa",
  kapsyen:"Rajah 2 · Bacaan tolok tekanan pada omboh output sistem hidraulik.",
  alt:"Rajah dail bulat menunjukkan penunjuk tekanan pada bacaan 6 kPa daripada skala 0 hingga 10 kPa"
};

const R_BERNOULLI = {
  jenis:"graf",
  x:[10,20,30,40,50],
  siri:[{ label:"Tekanan (kPa)", y:[100,90,75,55,30] }],
  xLabel:"Halaju bendalir (m/s)", titik:true,
  kapsyen:"Rajah 3 · Hubungan antara halaju bendalir dan tekanan mengikut Prinsip Bernoulli.",
  alt:"Graf garis menurun: tekanan berkurang daripada 100 kPa kepada 30 kPa apabila halaju bendalir meningkat daripada 10 kepada 50 meter sesaat"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Omboh Kecil", sk:"8.1 Konsep tekanan dalam bendalir",
 kadNama:"Tekanan Bendalir", kadEm:"\u{1F4A7}", kadFakta:"Tekanan bendalir dalam sistem tertutup disebarkan sama rata ke semua arah, walaupun bentuk bekasnya tidak sekata.",
 bosKadNama:"Unit Pascal", bosKadEm:"\u{1F4D0}", bosKadFakta:"Unit tekanan iaitu pascal (Pa) dinamakan sempena Blaise Pascal, ahli sains Perancis yang menemui prinsip penyebaran tekanan dalam bendalir tertutup.",
 soalan:[
 {j:"pilih",t:"Tekanan ditakrifkan sebagai:",p:["Daya yang bertindak setiap unit luas","Daya yang bertindak pada suatu jisim","Jumlah daya yang dikenakan pada objek","Kelajuan perubahan momentum suatu objek"],b:0,u:"Formula tekanan ialah P = F ÷ A, iaitu daya bahagi luas permukaan."},
 {j:"pilih",t:"Unit SI bagi tekanan ialah:",p:["Pascal (Pa)","Newton per meter (N)","Joule per saat (J)","Watt per jam (W)"],b:0,u:"Newton ialah unit daya, bukan tekanan."},
 {j:"pilih",t:"Bendalir merujuk kepada:",p:["Cecair dan gas","Cecair sahaja","Pepejal dan cecair","Gas sahaja"],b:0,u:"Cecair dan gas sama-sama boleh mengalir dan mengambil bentuk bekasnya."},
 {j:"pilih",t:"Sistem tertutup dalam konteks tekanan bendalir bermaksud:",p:["Bendalir tidak dapat keluar atau masuk sistem itu","Bendalir sentiasa dalam keadaan pegun tanpa sebarang pergerakan langsung","Bekas yang tidak mempunyai omboh mahupun injap sama sekali","Sistem yang hanya menggunakan udara sebagai bendalirnya"],b:0,u:"Sistem hidraulik seperti brek kereta dan jek adalah sistem tertutup supaya tekanan tidak terlepas keluar."},
 {j:"pilih",t:"Dua bahagian utama dalam sistem hidraulik mudah ialah:",p:["Omboh kecil dan omboh besar disambung oleh cecair","Motor elektrik yang disambung terus kepada bateri kereta","Injap sehala dan get udara yang mengawal aliran gas","Silinder gas termampat dan pam angin bertekanan tinggi"],b:0,u:"Cecair hidraulik menghantar tekanan antara dua omboh yang berlainan luas."},
 {j:"banyak",t:"Pilih SEMUA sifat cecair yang membolehkannya digunakan dalam sistem hidraulik.",p:["Tidak boleh dimampatkan","Tidak mempunyai bentuk tetap","Boleh memindahkan tekanan ke semua arah","Sentiasa mendidih pada suhu bilik","Berubah menjadi gas apabila ditekan"],b:[0,1,2],u:"Cecair hidraulik mesti tegar terhadap mampatan supaya semua tekanan yang dikenakan dipindahkan, bukan diserap."},
 {j:"pilih",t:"Mengapakah gas TIDAK sesuai digunakan sebagai bendalir dalam sistem hidraulik?",p:["Gas boleh dimampatkan, jadi tenaga hilang semasa termampat","Gas terlalu likat untuk mengalir melalui tiub yang sempit sekalipun","Gas tidak dapat mengenakan sebarang jenis tekanan pada omboh itu","Gas hanya boleh wujud pada suhu yang amat sangat tinggi"],b:0,u:"Apabila gas dimampatkan, isi padunya berkurang dan sebahagian daya yang dikenakan menampung mampatan itu, bukan menggerakkan omboh."},
 {j:"pilih",t:"Siapakah ahli sains yang namanya menjadi asas kepada prinsip penyebaran tekanan dalam bendalir tertutup?",p:["Blaise Pascal","Isaac Newton","Daniel Bernoulli","Robert Boyle"],b:0,u:"Prinsip Pascal dinamakan sempena Blaise Pascal; prinsip Bernoulli pula berkaitan halaju dan tekanan, topik seterusnya dalam bab ini."}],
 bos:{j:"pilih",t:"Manakah antara berikut BUKAN contoh bendalir?",p:["Ketulan ais pepejal","Air dalam paip","Udara dalam tayar","Minyak hidraulik dalam brek"],b:0,u:"Ais ialah pepejal; ia tidak mengalir dan tidak mengambil bentuk bekasnya sehingga ia melebur."}},

{n:2, tempat:"Cecair Hidraulik", sk:"8.1.1 Prinsip Pascal", lampiran:"hidraulik",
 kadNama:"Prinsip Pascal", kadEm:"⚙️", kadFakta:"Prinsip Pascal menyatakan tekanan yang dikenakan pada bendalir dalam sistem tertutup disebarkan sama rata ke semua bahagian bendalir itu.",
 bosKadNama:"Get Hidraulik", bosKadEm:"\u{1F6A7}", bosKadFakta:"Get banjir raksasa seperti di Belanda menggunakan sistem hidraulik berkuasa tinggi untuk menggerakkan struktur besi yang beratnya beribu-ribu tan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku pada peringkat kedua laluan ini?",p:["Tekanan yang dikenakan tersebar sama rata","Cecair menjadi gas akibat peningkatan tekanan yang mendadak","Daya pada omboh kecil itu berkurang secara beransur-ansur","Omboh besar bergerak dahulu sebelum omboh kecil sempat ditekan"],b:0,u:"Itulah inti Prinsip Pascal: tekanan tersebar sama rata, bukan daya."},
 {j:"pilih",t:"Mengapakah omboh besar dapat menghasilkan daya yang lebih besar daripada omboh kecil?",p:["Tekanan yang sama dikenakan pada luas permukaan yang lebih besar","Omboh besar diperbuat daripada bahan yang lebih kukuh","Cecair bertambah banyak apabila sampai di omboh besar","Omboh besar bergerak lebih laju daripada omboh kecil"],b:0,u:"Daya = tekanan × luas. Tekanan sama tetapi luas lebih besar menghasilkan daya lebih besar."},
 {j:"pilih",t:"Apakah maksud tekanan 'tersebar sama rata ke semua arah' dalam Prinsip Pascal?",p:["Setiap dinding bekas dan omboh menerima tekanan yang sama","Cecair bergerak dengan kelajuan yang sama di setiap titik sistem","Isi padu cecair adalah sama di setiap bahagian bekas itu","Suhu cecair adalah sama sepenuhnya di seluruh sistem itu"],b:0,u:"Tekanan ialah kuantiti berskalar yang bertindak sama rata, walaupun bentuk bekas berbeza."},
 {j:"pilih",t:"Mengapakah cecair dipilih berbanding gas untuk memindahkan tekanan dalam sistem hidraulik?",p:["Cecair tidak boleh dimampatkan, jadi tiada tenaga yang hilang","Cecair lebih ringan berbanding gas pada isi padu yang sama","Cecair sentiasa berwarna supaya mudah dikesan sebarang kebocoran","Cecair tidak memerlukan bekas tertutup untuk ia berfungsi"],b:0,u:"Sifat tidak boleh dimampatkan memastikan semua tekanan yang dikenakan terus dipindahkan."},
 {j:"pilih",t:"Jika omboh kecil ditekan ke bawah dalam sistem hidraulik tertutup, apakah yang berlaku kepada omboh besar?",p:["Omboh besar bergerak ke atas kerana cecair yang disesarkan","Omboh besar kekal pegun kerana jauh daripada omboh kecil","Omboh besar bergerak ke bawah serentak dengan omboh kecil","Omboh besar berputar mengikut arah jam"],b:0,u:"Cecair yang disesarkan oleh omboh kecil mengalir dan menolak omboh besar ke atas."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL tentang Prinsip Pascal.",p:["Tekanan yang dikenakan disebarkan sama rata dalam bendalir tertutup","Daya output bergantung pada nisbah luas dua omboh","Prinsip ini hanya berfungsi jika kedua-dua omboh sama luas","Sistem mesti tertutup supaya tekanan tidak terlepas keluar"],b:[0,1,3],u:"Prinsip Pascal justeru paling berguna apabila luas dua omboh BERBEZA, kerana itulah yang menggandakan daya."},
 {j:"susun",t:"Susun urutan cara sistem hidraulik menggandakan daya mengikut Rajah 1.",p:["Daya kecil dikenakan pada omboh kecil","Tekanan tersebar sama rata melalui cecair","Omboh besar menerima daya yang lebih besar","Objek berat berjaya diangkat"],b:[0,1,2,3],u:"Urutan ini mengikut Rajah 1: daripada input hingga hasil akhir."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peranan cecair hidraulik dalam sistem ini?",p:["Membawa dan menyebarkan tekanan ke omboh besar","Melincirkan omboh supaya ia bergerak dengan lebih pantas","Menyejukkan sistem daripada menjadi terlalu panas semasa beroperasi","Menambah jisim keseluruhan sistem itu supaya lebih stabil"],b:0,u:"Cecair ialah medium pemindah tekanan dalam sistem tertutup ini."}],
 bos:{j:"pilih",t:"Manakah PALING tepat menerangkan mengapa sistem hidraulik memerlukan bekas yang tertutup rapat?",p:["Supaya tiada tekanan terlepas keluar dan seluruh tekanan dipindahkan ke omboh besar","Supaya cecair tidak menyejat pada suhu bilik","Supaya warna cecair hidraulik tidak pudar akibat cahaya matahari","Supaya omboh besar dan omboh kecil tidak bersentuhan antara satu sama lain"],b:0,u:"Kebocoran walaupun sedikit menyebabkan sebahagian tekanan hilang, dan daya output berkurang."}},

{n:3, tempat:"Jek Hidraulik", sk:"8.1.2 Aplikasi Prinsip Pascal", lampiran:"tolok",
 kadNama:"Jek Hidraulik", kadEm:"\u{1F527}", kadFakta:"Jek hidraulik kecil yang boleh digenggam tangan mampu mengangkat kereta seberat lebih 1 tan, hasil daripada nisbah luas omboh yang besar.",
 bosKadNama:"Brek Hidraulik", bosKadEm:"\u{1F697}", bosKadFakta:"Sistem brek hidraulik kereta menggunakan prinsip yang sama seperti jek, membolehkan tekanan kaki yang ringan menghasilkan daya brek yang kuat pada keempat-empat roda.",
 soalan:[
 {j:"nombor",t:"Seorang mekanik mengenakan daya 200 N pada omboh input berluas 5 cm². Berapakah tekanan, dalam N/cm², yang terhasil?",b:40,tol:0.5,suf:"N/cm²",u:"Tekanan = Daya ÷ Luas = 200 ÷ 5 = 40 N/cm²."},
 {j:"nombor",t:"Dalam jek hidraulik, omboh input berluas 5 cm² dikenakan daya 200 N. Omboh output berluas 25 cm². Berapakah daya, dalam N, yang dihasilkan pada omboh output?",b:1000,tol:5,suf:"N",u:"Tekanan sama di kedua-dua omboh: 40 N/cm² × 25 cm² = 1000 N."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah bacaan tekanan pada omboh output?",p:["6 kPa","4 kPa","8 kPa","10 kPa"],b:0,u:"Penunjuk pada dail menuding tepat pada tanda 6 kPa."},
 {j:"pilih",t:"Sebuah kerusi rawatan gigi menggunakan sistem hidraulik untuk naik dan turun. Mengapakah pergerakan kerusi itu licin dan tidak tersentak?",p:["Cecair hidraulik memindahkan tekanan secara berterusan","Kerusi itu digerakkan oleh angin yang bertekanan tinggi, bukan cecair","Motor elektrik memutarkan gear terus di bawah kerusi itu","Kerusi itu diperbuat daripada bahan yang amat sangat ringan"],b:0,u:"Cecair yang tidak boleh dimampatkan menghasilkan pergerakan yang licin berbanding gas."},
 {j:"nombor",t:"Sistem brek hidraulik kereta: omboh pedal berluas 2 cm² ditekan dengan daya 100 N. Omboh brek roda berluas 8 cm². Berapakah daya, dalam N, yang bertindak pada brek roda?",b:400,tol:5,suf:"N",u:"F2 = F1 × (A2 ÷ A1) = 100 × (8 ÷ 2) = 400 N."},
 {j:"banyak",t:"Pilih SEMUA contoh aplikasi harian Prinsip Pascal.",p:["Jek hidraulik untuk mengangkat kereta","Sistem brek hidraulik kenderaan","Kerusi rawatan pergigian","Kipas siling yang berputar","Payung terjun semasa mendarat"],b:[0,1,2],u:"Kipas siling menggunakan tork motor, dan payung terjun bergantung pada rintangan udara, bukan sistem hidraulik tertutup."},
 {j:"pilih",t:"Jika luas omboh output dikurangkan tetapi daya input dan luas omboh input dikekalkan, apakah kesannya pada daya output?",p:["Daya output akan berkurang","Daya output akan bertambah","Daya output tidak berubah","Daya output menjadi sifar"],b:0,u:"F2 = F1 × (A2 ÷ A1). Jika A2 mengecil, nisbah itu mengecil, jadi F2 turut berkurang."},
 {j:"pilih",t:"Berdasarkan Rajah 2, jika bacaan tolok meningkat daripada 6 kPa kepada 10 kPa tanpa mengubah luas omboh, apakah yang paling mungkin berlaku?",p:["Daya yang dikenakan pada omboh input telah ditambah","Luas omboh output telah dikurangkan sebanyak separuh","Cecair hidraulik itu telah ditukar sepenuhnya kepada gas","Sistem itu telah mengalami sedikit kebocoran"],b:0,u:"Tekanan meningkat apabila daya input bertambah pada luas yang sama; kebocoran pula akan MENURUNKAN bacaan, bukan menaikkannya."}],
 bos:{j:"nombor",t:"Sebuah jek hidraulik mempunyai omboh input berluas 4 cm² dan omboh output berluas 60 cm². Jika daya input ialah 150 N, berapakah daya output, dalam N?",b:2250,tol:10,suf:"N",u:"F2 = 150 × (60 ÷ 4) = 150 × 15 = 2250 N."}},

{n:4, tempat:"Tiub Venturi", sk:"8.1.3 Prinsip Bernoulli", lampiran:"bernoulli",
 kadNama:"Prinsip Bernoulli", kadEm:"\u{1F32C}️", kadFakta:"Prinsip Bernoulli menyatakan tekanan bendalir berkurang apabila halajunya meningkat, prinsip yang membolehkan pesawat terbang.",
 bosKadNama:"Tiub Venturi", bosKadEm:"\u{1F9EA}", bosKadFakta:"Tiub Venturi menyempitkan aliran bendalir untuk meningkatkan halajunya, satu kaedah yang digunakan dalam karburetor enjin lama untuk mencampur udara dan petrol.",
 soalan:[
 {j:"pilih",t:"Prinsip Bernoulli menerangkan hubungan antara:",p:["Halaju bendalir dan tekanan bendalir","Suhu bendalir dan isi padu bendalir","Jisim bendalir dan ketumpatan bendalir","Warna bendalir dan kelikatan bendalir"],b:0,u:"Bernoulli mengaitkan halaju dengan tekanan dalam aliran bendalir."},
 {j:"pilih",t:"Berdasarkan Rajah 3, apakah hubungan antara halaju bendalir dan tekanan?",p:["Apabila halaju meningkat, tekanan berkurang","Apabila halaju meningkat, tekanan turut meningkat","Halaju dan tekanan tidak mempunyai hubungan","Tekanan sentiasa malar tidak kira halaju"],b:0,u:"Graf menunjukkan garis menurun: tekanan jatuh daripada 100 kPa kepada 30 kPa apabila halaju meningkat daripada 10 kepada 50 m/s."},
 {j:"nombor",t:"Berdasarkan Rajah 3, berapakah tekanan, dalam kPa, ketika halaju bendalir ialah 30 m/s?",b:75,tol:1,suf:"kPa",u:"Baca terus pada graf: pada halaju 30 m/s, tekanan ialah 75 kPa."},
 {j:"nombor",t:"Berdasarkan Rajah 3, berapakah penurunan tekanan, dalam kPa, apabila halaju meningkat daripada 10 m/s kepada 50 m/s?",b:70,tol:1,suf:"kPa",u:"100 kPa tolak 30 kPa bersamaan 70 kPa."},
 {j:"pilih",t:"Tiub Venturi menyempitkan aliran bendalir. Apakah yang berlaku kepada halaju dan tekanan pada bahagian yang sempit itu?",p:["Halaju meningkat, tekanan berkurang","Halaju berkurang, tekanan meningkat","Kedua-dua halaju dan tekanan meningkat","Kedua-dua halaju dan tekanan berkurang"],b:0,u:"Ruang yang sempit memaksa bendalir bergerak lebih laju, dan menurut Bernoulli, tekanan pun berkurang."},
 {j:"pilih",t:"Mengapakah bumbung rumah kadangkala terangkat semasa ribut kuat?",p:["Angin laju di atas bumbung menghasilkan tekanan yang rendah","Angin membawa air hujan yang menambah berat pada bumbung itu","Bumbung menjadi lebih ringan akibat suhu yang menurun semasa ribut berlaku","Getaran daripada bunyi guruh menyebabkan struktur bumbung menjadi longgar"],b:0,u:"Beza tekanan antara atas (rendah, sebab angin laju) dan bawah bumbung (lebih tinggi) menghasilkan daya angkat ke atas."},
 {j:"banyak",t:"Pilih SEMUA yang merupakan aplikasi Prinsip Bernoulli dalam kehidupan harian.",p:["Daya angkat pada sayap kapal terbang","Aliran udara melalui tiub Venturi pada karburetor","Angkatan pada dron dan helikopter","Pemuaian bendalir apabila dipanaskan","Jek hidraulik untuk mengangkat kereta"],b:[0,1,2],u:"Pemuaian bendalir ialah kesan haba, dan jek hidraulik ialah aplikasi Prinsip Pascal, bukan Bernoulli."},
 {j:"susun",t:"Susun urutan sebab sayap kapal terbang menghasilkan daya angkat, bermula daripada bentuk sayap.",p:["Sayap berbentuk aerofoil, permukaan atas lebih melengkung","Udara di atas sayap bergerak lebih laju berbanding di bawah","Tekanan udara di atas sayap menjadi lebih rendah","Beza tekanan ini menghasilkan daya angkat ke atas"],b:[0,1,2,3],u:"Bentuk aerofoil ialah punca asal, dan daya angkat ialah kesan akhir rantaian sebab ini."}],
 bos:{j:"pilih",t:"Seorang jurutera mereka bentuk sayap kapal terbang dengan sudut serang (angle of attack) yang lebih curam semasa berlepas. Berdasarkan Prinsip Bernoulli, apakah kesan yang dijangka?",p:["Halaju udara di atas sayap meningkat lagi, menambah daya angkat","Halaju udara di atas sayap berkurang, mengurangkan daya angkat","Tekanan udara menjadi sama di atas dan di bawah sayap","Sudut serang tidak memberi sebarang kesan kepada daya angkat"],b:0,u:"Sudut serang yang lebih curam memanjangkan laluan udara di atas sayap, meningkatkan halaju dan menambah daya angkat, sehingga satu had sebelum aliran udara terganggu (stall)."}},

{n:5, tempat:"Landasan Keretapi", sk:"8.1.4 Menilai aplikasi Pascal dan Bernoulli",
 kadNama:"Garisan Keselamatan", kadEm:"\u{1F686}", kadFakta:"Garisan kuning di tepi landasan keretapi menandakan jarak selamat, kerana kelajuan tinggi keretapi yang lalu boleh menghasilkan kawasan bertekanan rendah yang menarik penumpang ke arahnya.",
 bosKadNama:"Reka Bentuk STEM", bosKadEm:"\u{1F3D7}️", bosKadFakta:"Projek pembelajaran berasaskan STEM sering menggunakan bahan mudah seperti picagari dan tiub untuk membina model sistem hidraulik yang berfungsi.",
 soalan:[
 {j:"pilih",t:"Seorang penumpang berdiri terlalu dekat dengan tepi platform semasa keretapi laju lalu. Nilaikan risiko ini berdasarkan Prinsip Bernoulli.",p:["Berisiko, kerana udara laju berhampiran keretapi mewujudkan tekanan rendah","Tidak berisiko, kerana keretapi itu tidak menyentuh penumpang secara langsung","Berisiko hanya jika penumpang itu membawa objek yang ringan sahaja","Tidak berisiko, kerana Prinsip Bernoulli hanya berlaku pada bendalir dalam tiub yang tertutup sepenuhnya"],b:0,u:"Udara di sekeliling keretapi turut menjadi 'bendalir' yang bergerak laju, menghasilkan tekanan rendah berhampiran badan keretapi."},
 {j:"pilih",t:"Sebuah syarikat mencadangkan menggunakan sistem hidraulik gas (bukan cecair) untuk brek kereta supaya lebih ringan. Nilaikan cadangan ini.",p:["Kurang wajar, kerana gas boleh dimampatkan dan brek kurang responsif","Wajar, kerana gas itu lebih murah dan mudah didapati di pasaran","Wajar, kerana gas tidak akan bocor keluar daripada sistem itu","Kurang wajar, kerana gas tidak boleh mengalir dalam tiub yang sempit sekalipun"],b:0,u:"Mampatan gas menyerap sebahagian daya yang dikenakan, menyebabkan lengahan dan brek terasa 'span'."},
 {j:"pilih",t:"Dua pelajar membina model jek hidraulik menggunakan picagari. Model A guna dua picagari saiz sama; Model B guna picagari kecil disambung picagari besar. Nilaikan model manakah akan menggandakan daya.",p:["Model B, kerana perbezaan luas omboh menghasilkan gandaan daya","Model A, kerana kedua-dua picagari sama besar jadi lebih stabil","Kedua-dua model sama sahaja, kerana jenis picagari tidak penting","Model A, kerana tekanan hanya bergantung pada bilangan picagari"],b:0,u:"Gandaan daya bergantung pada nisbah luas dua omboh; picagari sama saiz tidak menggandakan apa-apa."},
 {j:"pilih",t:"Seorang jurutera mendakwa daya angkat sayap kapal terbang akan terus bertambah tanpa had jika sudut serang terus dicurumkan. Nilaikan dakwaan ini.",p:["Tidak tepat, kerana pada sudut yang terlalu curam aliran udara terganggu dan daya angkat boleh hilang (stall)","Tepat, kerana daya angkat sentiasa berkadar terus dengan sudut serang","Tidak tepat, kerana sudut serang tidak memberi sebarang kesan kepada daya angkat","Tepat, tetapi hanya berlaku pada kelajuan yang sangat rendah sahaja"],b:0,u:"Sudut serang yang terlalu curam menyebabkan aliran udara terpisah daripada permukaan sayap (stall), dan daya angkat merudum."},
 {j:"pilih",t:"Bandingkan sistem brek hidraulik dengan brek kabel (mekanikal) dari segi kebolehpercayaan.",p:["Brek hidraulik mengagihkan daya sama rata tetapi terjejas bila bocor","Brek kabel lebih cekap kerana ia tidak memerlukan sebarang cecair","Kedua-dua sistem itu sama sekali tidak mempunyai sebarang kelemahan langsung","Brek hidraulik hanya berfungsi pada kereta yang besar sahaja saiznya"],b:0,u:"Kelebihan hidraulik (pengagihan sama rata) datang bersama kelemahan (sensitif kepada kebocoran udara/cecair)."},
 {j:"banyak",t:"Pilih SEMUA langkah yang akan meningkatkan kebolehpercayaan sistem brek hidraulik.",p:["Memastikan sistem kekal tertutup rapat tanpa kebocoran","Menggunakan cecair yang tidak mudah dimampatkan","Memeriksa dan menggantikan cecair brek secara berkala","Menggantikan cecair brek dengan udara supaya lebih ringan","Membiarkan sedikit gelembung udara dalam sistem untuk keanjalan"],b:[0,1,2],u:"Udara dan gelembung gas boleh dimampatkan, menjadikan brek terasa span dan kurang responsif — ini melemahkan sistem, bukan memperbaikinya."},
 {j:"pilih",t:"Seorang pereka mencadangkan tiub Venturi digunakan untuk MENGUKUR halaju bendalir dalam paip industri. Nilaikan kesesuaian cadangan ini.",p:["Sesuai, kerana beza tekanan pada bahagian sempit boleh dikaitkan dengan halaju bendalir","Tidak sesuai, kerana tiub Venturi hanya berfungsi pada udara, bukan cecair","Sesuai, tetapi hanya untuk bendalir yang tidak bergerak","Tidak sesuai, kerana Venturi tidak mempunyai kaitan dengan tekanan"],b:0,u:"Oleh sebab halaju dan tekanan berkait secara boleh diramal mengikut Bernoulli, mengukur beza tekanan membolehkan halaju dikira."},
 {j:"pilih",t:"Sebuah kilang mahu memilih antara sistem hidraulik atau sistem pneumatik (udara mampat) untuk mengangkat barang berat secara stabil dan tepat.",p:["Sistem hidraulik, kerana cecair tidak boleh dimampatkan","Sistem pneumatik, kerana udara lebih ringan dan lebih murah","Kedua-dua sistem adalah sama sahaja dari segi ketepatan","Sistem pneumatik, kerana ia tidak memerlukan penyelenggaraan"],b:0,u:"Ketepatan dan kestabilan mengangkat barang berat memerlukan bendalir yang tidak dimampatkan, iaitu cecair."}],
 bos:{j:"pilih",t:"Sebuah bengkel kecil ingin membina jek hidraulik mudah dengan sasaran menggandakan daya sekurang-kurangnya 10 kali ganda. Nilaikan reka bentuk manakah paling sesuai.",p:["Omboh input kecil (2 cm²) disambung omboh output besar (20 cm² atau lebih) melalui cecair tertutup","Dua omboh bersaiz sama (10 cm² setiap satu) disambung cecair tertutup","Omboh input besar (20 cm²) disambung omboh output kecil (2 cm²)","Omboh tunggal tanpa cecair, digerakkan terus oleh tangan"],b:0,u:"Nisbah luas 1:10 atau lebih (20÷2=10) memenuhi sasaran gandaan 10 kali; reka bentuk lain sama ada tidak menggandakan atau mengurangkan daya."}},

{n:6, tempat:"Bengkel STEM", sk:"8.1.5 Mereka bentuk alat menggunakan prinsip tekanan dalam bendalir",
 kadNama:"Reka Cipta Hijau", kadEm:"\u{1F331}", kadFakta:"Sistem pengangkat hijau menggunakan prinsip hidraulik dengan tenaga graviti atau suria, mengurangkan penggunaan bahan api fosil dalam industri pengangkatan.",
 bosKadNama:"Jurutera STEM", bosKadEm:"\u{1F6E0}️", bosKadFakta:"Ramai penyelesaian kejuruteraan besar seperti jambatan boleh naik dan pintu air bermula sebagai lakaran mudah di atas kertas sebelum menjadi struktur sebenar.",
 soalan:[
 {j:"pilih",t:"Seorang pelajar ingin mereka satu alat mudah untuk mengangkat beg berat guna Prinsip Pascal. Bahan paling sesuai untuk omboh ialah:",p:["Picagari plastik kedap air yang boleh disambung tiub","Span lembut yang boleh menyerap dan menahan air","Kotak kadbod nipis yang mudah dilipat dan dibentuk","Belon getah nipis yang mudah mengembang dan pecah"],b:0,u:"Omboh mesti kedap (tidak bocor) dan tegar supaya tekanan dapat dipindahkan dengan berkesan; span dan belon tidak kedap/tegar."},
 {j:"pilih",t:"Dalam reka bentuk sistem pengangkat hijau, mengapakah graviti atau suria digunakan berbanding motor elektrik berkuasa tinggi?",p:["Mengurangkan penggunaan tenaga daripada bahan api fosil, lebih mampan","Graviti dan suria menghasilkan daya yang jauh lebih besar daripada motor","Motor elektrik tidak boleh disambung kepada sistem hidraulik","Graviti dan suria tidak memerlukan sebarang penyelenggaraan"],b:0,u:"Matlamat 'teknologi hijau' ialah kemampanan tenaga, bukan semestinya daya yang lebih besar."},
 {j:"pilih",t:"Semasa mereka bentuk alat pengangkat hidraulik mudah, mengapakah penting untuk menguji kebocoran sebelum digunakan?",p:["Kebocoran menyebabkan sebahagian tekanan hilang dan alat gagal mengangkat beban sepenuhnya","Kebocoran menyebabkan alat menjadi terlalu berat untuk diangkat","Kebocoran hanya menjejaskan warna cecair hidraulik, bukan fungsi","Kebocoran menyebabkan omboh besar bertukar menjadi omboh kecil"],b:0,u:"Sistem yang bocor tidak lagi 'tertutup', jadi Prinsip Pascal tidak dapat dimanfaatkan sepenuhnya."},
 {j:"pilih",t:"Seorang pereka mahu alat pengangkatnya selamat digunakan kanak-kanak sekolah. Ciri reka bentuk PALING penting untuk diutamakan?",p:["Had daya maksimum dan injap keselamatan beban","Warna alat yang terang, menarik dan mudah dikenali","Saiz alat yang direka sekecil mungkin untuk mudah alih","Kelajuan pengangkatan yang paling laju walau apa jua keadaan"],b:0,u:"Keselamatan pengguna, terutamanya kanak-kanak, mengatasi kepentingan estetik atau kelajuan."},
 {j:"pilih",t:"Reka Bentuk X guna nisbah omboh 1:5, Reka Bentuk Y guna nisbah 1:15. Bagi mengangkat objek yang sangat berat dengan daya tangan paling ringan, reka bentuk manakah lebih sesuai?",p:["Reka Bentuk Y, kerana nisbah luas yang lebih besar menggandakan daya dengan lebih banyak","Reka Bentuk X, kerana nisbah yang lebih kecil lebih mudah dikawal","Kedua-duanya sama sahaja tidak kira nisbah","Reka Bentuk Y kurang sesuai kerana nisbah yang besar tidak berfungsi"],b:0,u:"Nisbah 1:15 menghasilkan gandaan daya yang lebih besar berbanding 1:5, sesuai untuk objek yang sangat berat."},
 {j:"banyak",t:"Pilih SEMUA faktor yang perlu dipertimbangkan semasa mereka bentuk alat pengangkat hidraulik untuk kegunaan sekolah.",p:["Keselamatan pengguna dan had beban","Kos bahan dan kemudahan mendapatkannya","Kekedapan sistem supaya tidak bocor","Warna kegemaran pereka bentuk semata-mata","Sama ada alat itu kelihatan mahal atau tidak"],b:[0,1,2],u:"Warna kegemaran dan rupa 'mahal' tidak menjejaskan fungsi atau keselamatan alat."},
 {j:"pilih",t:"Sebuah kumpulan projek STEM menghadapi masalah: omboh output bergerak terlalu perlahan walaupun daya yang dihasilkan besar. Apakah penjelasan paling munasabah?",p:["Omboh besar memerlukan isi padu cecair lebih banyak, jadi ia bergerak perlahan","Cecair hidraulik yang digunakan sudah lama dan tamat tempoh penggunaan","Omboh besar diperbuat daripada bahan yang jisimnya terlalu ringan","Sistem hidraulik itu sebenarnya rosak dan tidak berfungsi langsung"],b:0,u:"Terdapat pertukaran (trade-off): daya bertambah tetapi jarak/kelajuan omboh besar berkurang, kerana isi padu cecair yang disesarkan adalah malar."},
 {j:"pilih",t:"Apakah kepentingan menyediakan lakaran dan label sebelum membina prototaip sistem hidraulik sebenar?",p:["Membolehkan idea disemak dan kesilapan dikesan lebih awal","Ia adalah wajib mengikut undang-undang sains","Ia menggantikan keperluan untuk menguji prototaip","Ia hanya diperlukan untuk tujuan hiasan projek"],b:0,u:"Reka bentuk kejuruteraan yang baik menyemak idea di atas kertas dahulu untuk menjimatkan kos dan masa."}],
 bos:{j:"buka",
  t:"Kampung awak kerap mengalami banjir kilat, dan penduduk terpaksa mengangkat barang berat secara manual ke tempat tinggi semasa air mula naik. Reka satu alat mudah menggunakan prinsip tekanan dalam bendalir untuk membantu proses ini.",
  arahan:"Terangkan cara alat itu berfungsi (berdasarkan Prinsip Pascal atau Bernoulli), bahan yang diperlukan, nisbah luas omboh yang dicadangkan jika berkaitan, dan bagaimana awak memastikan alat itu selamat serta mampu dibina dengan kos rendah oleh penduduk kampung.",
  u:"Jawapan TP6 yang kukuh menggabungkan prinsip sains yang tepat (Pascal/Bernoulli), reka bentuk praktikal, pertimbangan kos, dan keselamatan pengguna dalam konteks sebenar."}}
];

module.exports = {
  id:"t5b8", tingkatan:5, kod:"8.0 Daya dan Tekanan",
  tajuk:"Laluan Hidraulik",
  subtajuk:"Sains Ting. 5 · Bab 8 Daya dan Tekanan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep asas tekanan bendalir, unit pascal, dan ciri cecair yang membolehkannya digunakan dalam sistem hidraulik. Langkah seterusnya ialah menerangkan BAGAIMANA Prinsip Pascal berfungsi, bukan sekadar menghafal definisi.",
   2:"{n} memahami Prinsip Pascal dan sebab cecair (bukan gas) digunakan dalam sistem hidraulik. Perlu lebih banyak latihan mengaitkan konsep penyebaran tekanan dengan gandaan daya sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan formula tekanan dan Prinsip Pascal untuk mengira daya atau tekanan dalam situasi sebenar seperti jek hidraulik dan brek kereta. Galakkan mentafsir bacaan alat pengukur tekanan dengan lebih pantas.",
   4:"{n} mampu menganalisis hubungan antara halaju bendalir dan tekanan menurut Prinsip Bernoulli, serta mengaitkannya dengan fenomena seperti daya angkat sayap kapal terbang dan bumbung terangkat semasa ribut. Seterusnya latih menilai kewajaran sesuatu dakwaan berasaskan prinsip ini.",
   5:"{n} dapat menilai kewajaran reka bentuk dan dakwaan berkaitan sistem hidraulik dan aerodinamik, disokong sebab yang munasabah. Sudah bersedia untuk tugasan mereka cipta.",
   6:"{n} berjaya mereka cipta penyelesaian praktikal menggunakan prinsip tekanan dalam bendalir, lengkap dengan pertimbangan bahan, kos dan keselamatan pengguna. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Daya dan Tekanan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ hidraulik:R_HIDRAULIK, tolok:R_TOLOK, bernoulli:R_BERNOULLI },
  aras:ARAS
};
