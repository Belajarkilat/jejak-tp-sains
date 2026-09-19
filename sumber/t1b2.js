/* Sumber kandungan — Sains KSSM Tingkatan 1, Bidang 2.0 Sel sebagai Unit
   Asas Hidupan.
   Jalankan `node bina.js t1b2` untuk menyemak dan menghasilkan bank-t1b2.js.

   Standard Prestasi disalin daripada DSKP KSSM Sains Tingkatan 1, muka 56
   (Tema Penyenggaraan dan Kesinambungan Hidup). DSKP menulis satu Standard
   Prestasi untuk Bab 2 hingga 4 dengan senarai "sel sebagai unit asas
   kehidupan/koordinasi/gerakbalas/pembiakan"; di sini hanya bahagian bab
   ini dikekalkan. Ejaan "mengenai mengenai" dalam DSKP dibetulkan.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai sel sebagai unit asas kehidupan.",
"Memahami sel sebagai unit asas kehidupan serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan dan kemahiran sains mengenai sel sebagai unit asas kehidupan untuk melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai sel sebagai unit asas kehidupan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai sel sebagai unit asas kehidupan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekabentuk persembahan pelbagai media/visual/folio/poster/main peranan/drama secara kreatif dan inovatif dengan menggunakan pengetahuan dan kemahiran sains mengenai sel sebagai unit asas kehidupan dalam konteks penyelesaian masalah dan membuat keputusan dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_SEL =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sel</th>'+
'<th>Dinding sel</th><th>Kloroplas</th><th>Vakuol</th><th>Nukleus</th><th>Bentuk</th></tr></thead><tbody>'+
'<tr><td>J</td><td>Ada</td><td>Banyak</td><td>Besar</td><td>Ada</td><td>Tetap, panjang</td></tr>'+
'<tr><td>K</td><td>Tiada</td><td>Tiada</td><td>Tiada atau kecil</td><td>Ada</td><td>Tidak tetap</td></tr>'+
'<tr><td>L</td><td>Ada</td><td>Tiada</td><td>Besar</td><td>Ada</td><td>Tetap, ada unjuran panjang</td></tr>'+
'<tr><td>M</td><td>Tiada</td><td>Tiada</td><td>Tiada</td><td>Tiada</td><td>Cakera dwicekung</td></tr>'+
'</tbody></table></div><p class="qnote">Pemerhatian empat jenis sel di bawah mikroskop. Semua sel mempunyai membran sel dan sitoplasma.</p>';

const T_KANJI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Daun</th>'+
'<th>Keadaan pokok selama 2 hari</th><th>Warna selepas diuji dengan iodin</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Di bawah cahaya matahari</td><td>Biru tua</td></tr>'+
'<tr><td>B</td><td>Di dalam almari gelap</td><td>Perang</td></tr>'+
'<tr><td>C</td><td>Di bawah cahaya, dalam bekas dengan natrium hidroksida</td><td>Perang</td></tr>'+
'<tr><td>D (daun berbelang)</td><td>Di bawah cahaya matahari</td><td>Bahagian hijau biru tua, bahagian putih perang</td></tr>'+
'</tbody></table></div><p class="qnote">Semua pokok dinyahkanji dahulu dengan diletakkan di tempat gelap selama 48 jam. Natrium hidroksida menyerap karbon dioksida. Warna biru tua menunjukkan kehadiran kanji.</p>';

const T_HIDRILA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Jarak lampu dari tumbuhan (cm)</th>'+
'<th class="n">Bilangan gelembung seminit</th></tr></thead><tbody>'+
'<tr><td>10</td><td class="n">42</td></tr>'+
'<tr><td>20</td><td class="n">25</td></tr>'+
'<tr><td>30</td><td class="n">14</td></tr>'+
'<tr><td>40</td><td class="n">6</td></tr>'+
'</tbody></table></div><p class="qnote">Seorang murid meletakkan tumbuhan akuatik Hydrilla di dalam tabung didih berisi air dan mengira gelembung gas yang terbebas. Satu bacaan bagi setiap jarak. Bilik tidak digelapkan. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Lensa Mikroskop", sk:"2.1 Sel: struktur dan fungsi",
 kadNama:"Sel", kadEm:"\u{1F9EB}", kadFakta:"Badan manusia dewasa dianggarkan mengandungi kira-kira 37 trilion sel.",
 bosKadNama:"Robert Hooke", bosKadEm:"\u{1F52C}", bosKadFakta:"Pada tahun 1665, Robert Hooke memerhati petak-petak kecil dalam gabus dan menamakannya sel.",
 soalan:[
 {j:"pilih",t:"Unit asas yang membina semua benda hidup ialah:",p:["Sel","Tisu","Organ","Atom"],b:0,u:"Benda hidup dibina daripada satu atau banyak sel."},
 {j:"pilih",t:"Struktur sel yang mengawal semua aktiviti sel ialah:",p:["Nukleus","Sitoplasma","Vakuol","Dinding sel"],b:0,u:"Nukleus mengandungi kromosom yang membawa maklumat genetik (DNA)."},
 {j:"pilih",t:"Struktur yang mengawal keluar masuk bahan ke dalam sel ialah:",p:["Membran sel","Dinding sel","Kloroplas","Mitokondria"],b:0,u:"Dinding sel telap sepenuhnya; membran sel yang memilih bahan."},
 {j:"pilih",t:"Struktur yang menjalankan respirasi sel untuk membebaskan tenaga ialah:",p:["Mitokondria","Kloroplas","Nukleus","Vakuol"],b:0,u:"Mitokondria sering digelar 'penjana kuasa' sel."},
 {j:"pilih",t:"Struktur sel tumbuhan yang mengandungi klorofil ialah:",p:["Kloroplas","Mitokondria","Sitoplasma","Vakuol"],b:0,u:"Klorofil menyerap cahaya untuk fotosintesis."},
 {j:"pilih",t:"Pewarna yang digunakan untuk menyediakan slaid sel pipi ialah:",p:["Metilena biru","Larutan iodin","Larutan kanji","Air suling sahaja"],b:0,u:"Sel bawang biasanya diwarnakan dengan larutan iodin."},
 {j:"pilih",t:"Contoh organisma unisel ialah:",p:["Amoeba sp.","Hydra sp.","Spirogyra sp.","Cendawan tiram"],b:0,u:"Amoeba terdiri daripada satu sel sahaja."},
 {j:"banyak",t:"Pilih SEMUA struktur yang ada pada sel tumbuhan tetapi TIADA pada sel haiwan.",p:["Dinding sel","Kloroplas","Vakuol besar","Nukleus","Membran sel","Mitokondria"],b:[0,1,2],u:"Nukleus, membran sel dan mitokondria ada pada kedua-dua jenis sel."}],
 bos:{j:"susun",t:"Susun tahap organisasi hidupan bermula daripada yang PALING ringkas.",p:["Sel","Tisu","Organ","Sistem","Organisma"],b:[0,1,2,3,4],u:"Contoh: sel otot → tisu otot → jantung → sistem peredaran darah → manusia."}},

{n:2, tempat:"Kilang Sel", sk:"2.1 / 2.2 Jenis sel, respirasi sel dan fotosintesis",
 kadNama:"Sel Saraf", kadEm:"\u{26A1}", kadFakta:"Sesetengah sel saraf manusia boleh mencapai panjang lebih satu meter, dari tulang belakang ke hujung kaki.",
 bosKadNama:"Fotosintesis", bosKadEm:"\u{1F33F}", bosKadFakta:"Hampir semua oksigen di atmosfera dihasilkan oleh fotosintesis tumbuhan dan alga.",
 soalan:[
 {j:"pilih",t:"Mengapakah sel tumbuhan mempunyai bentuk yang tetap?",p:["Dinding sel yang kuat menyokongnya","Nukleusnya lebih besar daripada sel haiwan","Sitoplasmanya lebih pekat","Ia tidak mempunyai membran sel"],b:0,u:"Dinding sel diperbuat daripada selulosa yang kuat."},
 {j:"pilih",t:"Sel darah merah tidak mempunyai nukleus. Kelebihan ciri ini ialah:",p:["Sel ada lebih ruang untuk membawa oksigen","Sel boleh membiak dengan lebih cepat","Sel dapat hidup lebih lama daripada sel lain","Sel boleh menghasilkan tenaganya sendiri"],b:0,u:"Ruang itu diisi hemoglobin yang mengikat oksigen."},
 {j:"pilih",t:"Sel rerambut akar panjang dan halus. Ciri ini membantunya:",p:["Menyerap lebih banyak air","Menjalankan fotosintesis","Menyokong batang pokok","Menyimpan makanan"],b:0,u:"Bentuk panjang menambah luas permukaan untuk menyerap air dan garam mineral."},
 {j:"pilih",t:"Mengapakah sel palisad daun mengandungi banyak kloroplas?",p:["Menyerap lebih cahaya untuk fotosintesis","Mengawal bukaan stoma pada permukaan daun","Menyerap air daripada tanah","Menghantar makanan ke seluruh tumbuhan"],b:0,u:"Sel palisad terletak di bahagian atas daun yang paling banyak menerima cahaya."},
 {j:"pilih",t:"Hasil respirasi sel ialah:",p:["Tenaga, karbon dioksida dan air","Glukosa, oksigen dan cahaya matahari","Oksigen, air dan tenaga","Kanji dan karbon dioksida"],b:0,u:"Glukosa + oksigen → karbon dioksida + air + tenaga."},
 {j:"pilih",t:"Keperluan fotosintesis ialah:",p:["Cahaya, klorofil, karbon dioksida dan air","Oksigen, glukosa, cahaya matahari dan tanah","Karbon dioksida dan oksigen sahaja","Air, oksigen dan klorofil"],b:0,u:"Hasilnya ialah glukosa dan oksigen."},
 {j:"pilih",t:"Sel kanser berbeza daripada sel biasa kerana ia:",p:["Membahagi tanpa kawalan","Tidak mempunyai nukleus","Tidak dapat membahagi langsung","Hanya wujud pada tumbuhan"],b:0,u:"Pembahagian sel yang tidak terkawal membentuk ketumbuhan."},
 {j:"pilih",t:"Mengapakah respirasi sel dan fotosintesis dikatakan saling melengkapi?",p:["Hasil satu proses menjadi bahan proses lain","Kedua-duanya hanya berlaku pada waktu siang","Fotosintesis dan respirasi menghasilkan oksigen","Kedua-duanya berlaku di dalam kloroplas"],b:0,u:"Fotosintesis menghasilkan glukosa dan oksigen yang digunakan dalam respirasi, dan sebaliknya."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan sel dan fungsi yang BETUL.",p:["Sel saraf: menghantar impuls","Sel otot: mengecut untuk pergerakan","Sel pengawal: mengawal bukaan stoma","Sel darah merah: melawan kuman","Sel rerambut akar: menjalankan fotosintesis"],b:[0,1,2],u:"Sel darah putih yang melawan kuman. Sel rerambut akar menyerap air dan tidak mempunyai kloroplas."}},

{n:3, tempat:"Makmal Slaid", sk:"2.1 Mengenal pasti sel haiwan dan sel tumbuhan", lampiran:"sel",
 kadNama:"Slaid", kadEm:"\u{1F9EA}", kadFakta:"Kaca penutup diturunkan perlahan-lahan pada sudut condong supaya gelembung udara tidak terperangkap di atas sel.",
 bosKadNama:"Cakera Dwicekung", bosKadEm:"\u{1FA78}", bosKadFakta:"Bentuk cakera dwicekung menambah luas permukaan sel darah merah untuk menyerap oksigen.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, sel manakah paling mungkin sel palisad daun?",p:["J","K","L","M"],b:0,u:"J ada dinding sel, vakuol besar dan banyak kloroplas."},
 {j:"pilih",t:"Sel L ada dinding sel tetapi tiada kloroplas. Sel ini paling mungkin:",p:["Sel rerambut akar","Sel palisad daun","Sel otot","Sel darah merah"],b:0,u:"Akar di dalam tanah tidak menerima cahaya, jadi tiada kloroplas."},
 {j:"pilih",t:"Sel manakah dalam jadual ialah sel haiwan?",p:["K dan M","J dan L","J dan K","L dan M"],b:0,u:"K dan M tiada dinding sel."},
 {j:"pilih",t:"Sel M tiada nukleus dan berbentuk cakera dwicekung. Sel ini ialah:",p:["Sel darah merah","Sel saraf","Sel epitelium","Sel pengawal"],b:0,u:"Sel darah merah manusia tiada nukleus."},
 {j:"pilih",t:"Semasa menyediakan slaid sel bawang, banyak bulatan hitam kelihatan. Punca paling mungkin?",p:["Gelembung udara di bawah kaca penutup","Terlalu banyak larutan iodin digunakan","Kanta objek terlalu kotor","Sel bawang sudah mati"],b:0,u:"Turunkan kaca penutup perlahan-lahan dengan jarum pada sudut condong."},
 {j:"pilih",t:"Imej sel terlalu kecil di bawah kanta objek 4×. Langkah seterusnya yang betul?",p:["Tukar kepada kanta objek 10× dan fokus semula","Gerakkan slaid lebih dekat dengan mata","Tambah lebih banyak pewarna pada slaid","Tutup diafragma mikroskop sepenuhnya"],b:0,u:"Pembesaran dinaikkan secara berperingkat supaya imej kekal fokus."},
 {j:"pilih",t:"Mengapakah sel pipi perlu diwarnakan sebelum diperhatikan?",p:["Supaya nukleus lebih jelas kelihatan","Supaya sel tidak mati di atas slaid","Supaya sel menjadi lebih besar","Supaya sel melekat pada kaca slaid"],b:0,u:"Sel hampir lutsinar. Pewarna menjadikan struktur seperti nukleus lebih jelas."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL tentang sel K.",p:["Ia sel haiwan","Ia tidak menjalankan fotosintesis","Ia mempunyai nukleus","Ia mempunyai dinding sel","Ia sel darah merah"],b:[0,1,2],u:"K tiada dinding sel dan kloroplas tetapi ada nukleus, jadi ia bukan sel darah merah."}],
 bos:{j:"susun",t:"Susun langkah menyediakan slaid sel bawang mengikut urutan yang betul.",p:["Kupas lapisan epidermis nipis bawang","Letak epidermis di atas setitik air pada slaid","Turunkan kaca penutup pada sudut condong","Titiskan larutan iodin di tepi kaca penutup","Perhati di bawah mikroskop bermula dengan kanta 4×"],b:[0,1,2,3,4],u:"Iodin disedut ke bawah kaca penutup dengan kertas turas di sisi bertentangan."}},

{n:4, tempat:"Rumah Hijau", sk:"2.2 Menganalisis eksperimen fotosintesis", lampiran:"kanji",
 kadNama:"Ujian Kanji", kadEm:"\u{1F7E6}", kadFakta:"Daun direbus di dalam alkohol di atas kukus air untuk menyingkirkan klorofil supaya perubahan warna iodin mudah dilihat.",
 bosKadNama:"Daun Berbelang", bosKadEm:"\u{1F343}", bosKadFakta:"Bahagian putih pada daun berbelang tiada klorofil, jadi tiada kanji dihasilkan di situ.",
 soalan:[
 {j:"pilih",t:"Mengapakah semua pokok dinyahkanji dahulu?",p:["Supaya semua kanji yang dikesan ialah kanji baharu","Supaya pokok lebih cepat berfotosintesis selepas itu","Supaya daun menjadi lebih lembut untuk direbus","Supaya klorofil di dalam daun hilang"],b:0,u:"Kanji lama dari sebelum eksperimen akan mengelirukan keputusan."},
 {j:"pilih",t:"Bandingkan daun A dan B. Apakah kesimpulannya?",p:["Cahaya diperlukan untuk fotosintesis","Air diperlukan untuk fotosintesis","Klorofil diperlukan untuk fotosintesis","Oksigen diperlukan untuk fotosintesis"],b:0,u:"Satu-satunya perbezaan antara A dan B ialah cahaya."},
 {j:"pilih",t:"Bandingkan daun A dan C. Apakah fungsi natrium hidroksida?",p:["Menyerap karbon dioksida","Membekalkan air kepada daun","Menyerap cahaya daripada lampu","Membunuh kuman pada daun"],b:0,u:"Tanpa karbon dioksida, daun C tidak dapat menghasilkan kanji."},
 {j:"pilih",t:"Daun D menunjukkan bahawa fotosintesis memerlukan:",p:["Klorofil","Cahaya","Karbon dioksida","Suhu tinggi"],b:0,u:"Bahagian putih menerima cahaya dan karbon dioksida yang sama, tetapi tiada klorofil."},
 {j:"pilih",t:"Mengapakah daun direbus di dalam alkohol di atas kukus air, bukan terus di atas api?",p:["Alkohol mudah terbakar","Alkohol perlu kekal sejuk","Daun akan hangus jika kena api","Kukus air mempercepat ujian iodin"],b:0,u:"Wap alkohol boleh terbakar jika terkena nyalaan terus."},
 {j:"pilih",t:"Jika pokok B tidak dinyahkanji terlebih dahulu, keputusan daun B mungkin:",p:["Biru tua walaupun tiada cahaya","Perang kerana tiada fotosintesis","Tidak berubah daripada keputusan asal","Putih kerana klorofil telah hilang"],b:0,u:"Kanji lama akan memberi keputusan positif palsu."},
 {j:"pilih",t:"Seorang murid membuat kesimpulan: \"Daun C tiada kanji kerana ia kekurangan cahaya.\" Mengapa kesimpulan itu salah?",p:["Daun C menerima cahaya tetapi tiada karbon dioksida","Daun C tidak menerima air semasa eksperimen","Daun C tiada klorofil langsung","Natrium hidroksida menghalang cahaya sampai ke daun"],b:0,u:"Pemboleh ubah yang berbeza bagi daun C ialah karbon dioksida."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Cahaya diperlukan untuk menghasilkan kanji","Karbon dioksida diperlukan untuk menghasilkan kanji","Klorofil diperlukan untuk menghasilkan kanji","Oksigen diperlukan untuk menghasilkan kanji","Kanji dihasilkan pada waktu malam"],b:[0,1,2],u:"Eksperimen ini tidak menguji oksigen, dan daun B yang di dalam gelap tidak menghasilkan kanji."}],
 bos:{j:"pilih",t:"Pekebun sayur di Cameron Highlands mahu tanaman di rumah hijau membesar lebih cepat. Cadangan paling saintifik?",p:["Tambah pencahayaan dan pastikan udara cukup karbon dioksida","Tutup rumah hijau sepenuhnya supaya oksigen terkumpul","Kurangkan penyiraman supaya akar lebih kuat","Warnakan dinding hitam supaya rumah hijau lebih panas"],b:0,u:"Cahaya dan karbon dioksida ialah bahan fotosintesis yang boleh ditambah."}},

{n:5, tempat:"Akuarium Kelas", sk:"2.2 Menilai penyiasatan fotosintesis", lampiran:"hidrila",
 kadNama:"Hydrilla", kadEm:"\u{1FAB4}", kadFakta:"Gelembung gas yang terbebas daripada Hydrilla semasa fotosintesis kebanyakannya oksigen.",
 bosKadNama:"Akuarium Seimbang", bosKadEm:"\u{1F420}", bosKadFakta:"Tumbuhan akuatik membekalkan oksigen kepada ikan, manakala ikan membebaskan karbon dioksida untuk tumbuhan.",
 soalan:[
 {j:"pilih",t:"Apakah hubungan yang ditunjukkan oleh data?",p:["Semakin dekat lampu, semakin cepat fotosintesis","Semakin jauh lampu, semakin cepat fotosintesis","Jarak lampu tidak mempengaruhi fotosintesis","Semakin dekat lampu, semakin kurang oksigen terbebas"],b:0,u:"Gelembung bertambah dari 6 kepada 42 seminit apabila lampu didekatkan."},
 {j:"pilih",t:"Bilik tidak digelapkan. Apakah kesan kelemahan ini?",p:["Cahaya lain turut mempengaruhi bilangan gelembung","Hydrilla akan mati dengan lebih cepat","Gelembung menjadi lebih besar dan mudah dikira","Tiada kesan kerana lampu cukup terang"],b:0,u:"Cahaya dari tingkap ialah pemboleh ubah yang tidak dikawal."},
 {j:"pilih",t:"Lampu yang dekat juga memanaskan air. Mengapakah ini menjejaskan kesahan eksperimen?",p:["Suhu juga berubah, bukan hanya keamatan cahaya","Air panas menghentikan semua fotosintesis","Air panas menjadikan gelembung lebih kecil","Haba tidak mempunyai kesan langsung"],b:0,u:"Letak bikar air di antara lampu dan tabung sebagai penapis haba, atau guna lampu LED."},
 {j:"pilih",t:"Cara paling baik untuk menjadikan keputusan lebih boleh dipercayai?",p:["Ulang setiap jarak tiga kali dan kira purata","Kira gelembung selama lima saat sahaja","Guna Hydrilla berbeza bagi setiap jarak","Tambah lebih banyak jarak tanpa ulangan"],b:0,u:"Ulangan mengurangkan kesan ralat rawak."},
 {j:"pilih",t:"Seorang murid mendakwa gas yang terbebas ialah karbon dioksida. Nilaikan dakwaan itu.",p:["Salah, gas itu oksigen dan boleh diuji dengan kayu uji berbara","Betul, kerana tumbuhan membebaskan karbon dioksida pada siang hari","Betul, kerana gelembung itu keluar daripada air","Salah, gas itu wap air kerana air dipanaskan"],b:0,u:"Oksigen menyalakan semula kayu uji berbara."},
 {j:"pilih",t:"Guru mahu menggunakan data ini untuk membuat kesimpulan kelas. Keputusan paling wajar?",p:["Guna dengan berhati-hati kerana tiada ulangan","Terima sepenuhnya kerana trend sangat jelas","Tolak sepenuhnya kerana bilangan jarak terlalu sedikit","Terima kerana Hydrilla sentiasa memberi keputusan tepat"],b:0,u:"Trendnya jelas, tetapi tanpa ulangan dan kawalan cahaya, data ini hanya bukti awal."},
 {j:"pilih",t:"Akuarium kelas diletakkan di sudut gelap dan ikan sering tercungap di permukaan. Tindakan paling wajar?",p:["Alih akuarium ke tempat yang mendapat cahaya sederhana","Buang semua tumbuhan akuatik daripada akuarium","Tambah lebih banyak ikan supaya air bergerak","Tutup akuarium dengan kain supaya lebih tenang"],b:0,u:"Tumbuhan memerlukan cahaya untuk berfotosintesis dan membebaskan oksigen. Cahaya matahari terus boleh memanaskan air."},
 {j:"pilih",t:"Pada waktu malam, tumbuhan akuatik di dalam akuarium:",p:["Hanya menjalankan respirasi","Hanya menjalankan fotosintesis","Tidak menjalankan sebarang proses","Membebaskan lebih banyak oksigen"],b:0,u:"Respirasi berlaku sepanjang masa, tetapi fotosintesis memerlukan cahaya."}],
 bos:{j:"pilih",t:"Kelab Sains mahu menunjukkan fotosintesis kepada pelawat dalam masa 10 minit. Susunan paling berkesan?",p:["Hydrilla, lampu LED 10 cm dan sedikit natrium bikarbonat","Hydrilla di sudut dewan yang redup tanpa sebarang lampu tambahan","Hydrilla dengan lampu pijar yang sangat panas pada jarak 2 cm","Pokok bunga dalam pasu besar di bawah lampu kelas yang biasa"],b:0,u:"Lampu LED yang dekat memberi cahaya tanpa haba berlebihan, dan natrium bikarbonat membekalkan karbon dioksida."}},

{n:6, tempat:"Pameran Sel", sk:"2.1 / 2.2 Mereka bentuk menggunakan pengetahuan sel",
 kadNama:"Model Sel", kadEm:"\u{1F3A8}", kadFakta:"Model sel yang baik menunjukkan saiz relatif struktur, contohnya vakuol tumbuhan yang boleh memenuhi sebahagian besar sel.",
 bosKadNama:"Taman Vertikal", bosKadEm:"\u{1F3E2}", bosKadFakta:"Taman vertikal di bangunan bandar menyerap karbon dioksida dan menyejukkan bangunan secara semula jadi.",
 soalan:[
 {j:"pilih",t:"Awak membina model sel tumbuhan daripada bahan terpakai. Bahan paling sesuai untuk mewakili dinding sel?",p:["Kotak kadbod yang keras","Plastik lutsinar yang lembut","Bola getah kecil","Benang yang panjang"],b:0,u:"Dinding sel kuat dan memberi bentuk tetap kepada sel."},
 {j:"pilih",t:"Dalam model sel yang sama, apakah yang paling sesuai untuk mewakili kloroplas?",p:["Kacang hijau","Sebiji guli besar","Belon berisi air","Tali hitam"],b:0,u:"Kloroplas kecil, berbentuk bujur dan berwarna hijau, dan terdapat banyak dalam sel."},
 {j:"pilih",t:"Awak mahu menerangkan tahap organisasi kepada murid tahun 4. Analogi paling tepat?",p:["Bata → dinding → bilik → rumah → taman perumahan","Pensel → buku → beg → meja → sekolah","Epal → pisang → betik → nanas → pasar","Titik → garis → bulatan → segi tiga → kotak"],b:0,u:"Setiap tahap dibina daripada gabungan tahap sebelumnya, sama seperti sel → tisu → organ → sistem → organisma."},
 {j:"pilih",t:"Kawasan sekolah panas dan kurang pokok. Cadangan paling praktikal berdasarkan fotosintesis?",p:["Tanam pokok teduhan di sekitar sekolah","Pasang lebih banyak kipas di koridor","Cat bumbung sekolah dengan warna gelap","Tebang pokok supaya angin lebih kuat"],b:0,u:"Pokok menyerap karbon dioksida, membebaskan oksigen dan memberi teduhan."},
 {j:"pilih",t:"Awak mereka poster tentang kanser untuk hari kesihatan. Mesej paling tepat dari segi sains?",p:["Kanser boleh dicetuskan oleh asap rokok","Kanser berjangkit melalui sentuhan dengan pesakit","Kanser hanya berlaku kepada warga emas","Kanser boleh dicegah sepenuhnya dengan minum air"],b:0,u:"Bahan kimia dalam asap rokok boleh merosakkan DNA sel."},
 {j:"pilih",t:"Awak mereka terarium tertutup untuk pameran. Bahan paling penting supaya tumbuhan terus hidup berbulan-bulan?",p:["Tumbuhan yang sesuai, tanah lembap dan cahaya sederhana","Pasir kering dan lampu yang sentiasa terang","Tumbuhan besar supaya balang kelihatan penuh dan menarik","Balang gelap supaya air tidak menyejat"],b:0,u:"Air dan gas dikitar semula di dalam terarium, tetapi cahaya perlu datang dari luar."},
 {j:"pilih",t:"Sebuah kampung mahu mengurangkan kos makanan ikan dalam kolam. Cadangan paling wajar?",p:["Tanam tumbuhan akuatik yang boleh dimakan ikan","Tambah lebih banyak ikan supaya ia saling membantu","Tutup kolam dengan kanvas supaya air tidak panas","Keringkan kolam setiap minggu untuk membersihkannya"],b:0,u:"Tumbuhan akuatik menjadi makanan dan menghasilkan oksigen melalui fotosintesis."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada model sel awak mudah difahami?",p:["Minta rakan melabel model tanpa melihat nota","Tanya guru sama ada model itu cantik","Bandingkan warna model dengan model kumpulan lain","Ukur berat model dengan penimbang"],b:0,u:"Jika rakan dapat mengenal pasti struktur dengan betul, model itu berkesan."}],
 bos:{j:"buka",
  t:"Sekolah awak akan mengadakan hari terbuka. Reka satu persembahan atau model interaktif yang menerangkan bagaimana sel tumbuhan dan sel haiwan saling bergantung melalui fotosintesis dan respirasi sel.",
  arahan:"Terangkan bentuk persembahan atau model, bahan yang digunakan dan sebabnya, struktur sel yang ditunjukkan, bagaimana pelawat berinteraksi dengannya, dan bagaimana awak mengambil kira kos serta pelawat daripada pelbagai umur.",
  u:"Jawapan TP6 yang kukuh menunjukkan struktur sel dengan betul, menghubungkan hasil fotosintesis dengan bahan respirasi, dan praktikal dari segi kos serta penonton."}}
];

module.exports = {
  id:"t1b2", tingkatan:1, kod:"2.0 Sel sebagai Unit Asas Hidupan",
  tajuk:"Laluan Sel",
  subtajuk:"Sains Ting. 1 · Bab 2 Sel sebagai Unit Asas Hidupan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur sel dan fungsinya serta contoh organisma unisel dan multisel. Langkah seterusnya ialah menjelaskan perbezaan sel haiwan dan sel tumbuhan.",
   2:"{n} memahami jenis sel dan fungsinya serta proses respirasi sel dan fotosintesis. Perlu lebih banyak latihan mengenal pasti sel daripada pemerhatian mikroskop.",
   3:"{n} boleh mengenal pasti sel haiwan dan sel tumbuhan berdasarkan ciri strukturnya dan menyediakan slaid mengikut prosedur. Galakkan melukis dan melabel sel dengan tepat.",
   4:"{n} mampu menganalisis keputusan eksperimen fotosintesis dan mengenal pasti pemboleh ubah yang diuji. Seterusnya latih menilai kelemahan dalam penyiasatan.",
   5:"{n} dapat menilai penyiasatan fotosintesis dan membuat keputusan yang wajar tentang penjagaan tumbuhan dan akuarium. Sudah bersedia untuk tugasan reka bentuk.",
   6:"{n} berjaya mereka bentuk persembahan atau model yang menerangkan sel, fotosintesis dan respirasi sel secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sel sebagai Unit Asas Hidupan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ sel:T_SEL, kanji:T_KANJI, hidrila:T_HIDRILA },
  aras:ARAS
};
