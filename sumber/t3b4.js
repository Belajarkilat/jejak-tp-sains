/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 4.0 Kereaktifan Logam.
   Jalankan `node bina.js t3b4` untuk menyemak dan menghasilkan bank-t3b4.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 64.

   Siri kereaktifan yang digunakan mengikut buku teks:
   K, Na, Ca, Mg, Al, C, Zn, H, Fe, Sn, Pb, Cu, Hg, Ag, Au.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai kereaktifan logam.",
"Memahami kereaktifan logam serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai kereaktifan logam dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai kereaktifan logam dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai kereaktifan logam dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai kereaktifan logam dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_BAKAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Logam</th><th>Pemerhatian</th>'+
'<th>Warna baki semasa panas</th><th>Warna baki apabila sejuk</th></tr></thead><tbody>'+
'<tr><td>Magnesium</td><td>Terbakar dengan nyalaan putih yang sangat terang</td><td>Putih</td><td>Putih</td></tr>'+
'<tr><td>Aluminium</td><td>Terbakar dengan terang</td><td>Putih</td><td>Putih</td></tr>'+
'<tr><td>Zink</td><td>Berbara terang</td><td>Kuning</td><td>Putih</td></tr>'+
'<tr><td>Ferum</td><td>Berbara malap</td><td>Perang</td><td>Perang</td></tr>'+
'<tr><td>Plumbum</td><td>Berbara sangat malap</td><td>Perang</td><td>Kuning</td></tr>'+
'</tbody></table></div><p class="qnote">Serbuk logam dipanaskan dengan kuat. Oksigen dibekalkan dengan memanaskan kalium manganat(VII) di dasar tabung didih.</p>';

const T_TURUN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Set</th><th>Campuran yang dipanaskan</th><th>Pemerhatian</th></tr></thead><tbody>'+
'<tr><td>1</td><td>Zink oksida + serbuk karbon</td><td>Berbara terang, baki kelabu terbentuk</td></tr>'+
'<tr><td>2</td><td>Aluminium oksida + serbuk karbon</td><td>Tiada perubahan</td></tr>'+
'<tr><td>3</td><td>Ferum oksida + serbuk karbon</td><td>Berbara, baki kelabu terbentuk</td></tr>'+
'<tr><td>4</td><td>Zink oksida + gas hidrogen</td><td>Tiada perubahan</td></tr>'+
'<tr><td>5</td><td>Ferum oksida + gas hidrogen</td><td>Berbara, baki kelabu dan titisan air terbentuk</td></tr>'+
'<tr><td>6</td><td>Kuprum(II) oksida + gas hidrogen</td><td>Berbara, pepejal hitam menjadi perang, titisan air terbentuk</td></tr>'+
'<tr><td>7</td><td>Oksida logam W + serbuk karbon</td><td>Tiada perubahan</td></tr>'+
'</tbody></table></div><p class="qnote">Jika unsur yang ditambah lebih reaktif daripada logam dalam oksida, ia menyingkirkan oksigen daripada oksida itu dan logam terbebas.</p>';

const T_SUNGAI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Stesen</th><th>Kedudukan</th>'+
'<th class="n">Kekeruhan (NTU)</th><th class="n">pH</th><th class="n">Spesies ikan</th></tr></thead><tbody>'+
'<tr><td>A</td><td>2 km di hulu lombong</td><td class="n">8</td><td class="n">6.9</td><td class="n">15</td></tr>'+
'<tr><td>B</td><td>Alur keluar air lombong</td><td class="n">390</td><td class="n">5.2</td><td class="n">3</td></tr>'+
'<tr><td>C</td><td>3 km di hilir lombong</td><td class="n">150</td><td class="n">6.1</td><td class="n">7</td></tr>'+
'<tr><td>D</td><td>8 km di hilir lombong</td><td class="n">40</td><td class="n">6.7</td><td class="n">12</td></tr>'+
'</tbody></table></div><p class="qnote">Data rekaan untuk latihan. Nilai kekeruhan yang tinggi bermakna air lebih berlumpur.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kerak Bumi", sk:"4.1 Kepelbagaian mineral",
 kadNama:"Emas", kadEm:"\u{1FA99}", kadFakta:"Emas sangat tidak reaktif, jadi ia ditemui sebagai unsur bebas dan kekal berkilat walaupun tertanam beratus-ratus tahun.",
 bosKadNama:"Bauksit", bosKadEm:"\u{1FAA8}", bosKadFakta:"Bauksit selalunya berwarna kemerahan kerana mengandungi sedikit ferum oksida bersama aluminium oksida.",
 soalan:[
 {j:"pilih",t:"Mineral yang wujud sebagai unsur dalam kerak bumi ialah:",p:["Emas","Bauksit","Hematit","Galena"],b:0,u:"Emas sangat tidak reaktif, jadi ia tidak bergabung dengan unsur lain."},
 {j:"pilih",t:"Bauksit ialah bijih bagi logam:",p:["Aluminium","Magnesium","Plumbum","Stanum"],b:0,u:"Bauksit mengandungi aluminium oksida, iaitu gabungan aluminium dan oksigen."},
 {j:"pilih",t:"Nama saintifik bagi galena ialah:",p:["Plumbum(II) sulfida","Plumbum(II) oksida","Ferum(III) oksida","Stanum(IV) oksida"],b:0,u:"Galena ialah gabungan plumbum dan sulfur."},
 {j:"pilih",t:"Kasiterit ialah bijih yang dilombong di Malaysia untuk mendapatkan logam:",p:["Stanum (timah)","Aluminium","Ferum (besi)","Kuprum (tembaga)"],b:0,u:"Kasiterit ialah stanum(IV) oksida. Malaysia pernah menjadi pengeluar bijih timah terbesar di dunia."},
 {j:"susun",t:"Susun logam berikut mengikut kereaktifan terhadap oksigen, bermula daripada yang PALING reaktif.",p:["Magnesium","Aluminium","Zink","Ferum","Plumbum"],b:[0,1,2,3,4],u:"Magnesium terbakar paling terang, manakala plumbum hanya berbara dengan sangat malap."},
 {j:"pilih",t:"Hasil tindak balas apabila magnesium dipanaskan dalam oksigen ialah:",p:["Magnesium oksida","Magnesium karbonat","Magnesium sulfida","Magnesium hidroksida"],b:0,u:"Logam yang bergabung dengan oksigen membentuk oksida logam."},
 {j:"banyak",t:"Pilih SEMUA unsur yang terdapat dalam hematit, iaitu ferum(III) oksida.",p:["Ferum","Oksigen","Sulfur","Karbon","Aluminium"],b:[0,1],u:"Nama sebatian memberitahu unsurnya: ferum dan oksida, iaitu oksigen."},
 {j:"pilih",t:"Logam yang diekstrak daripada bijihnya melalui elektrolisis, bukan dengan karbon, ialah:",p:["Aluminium","Ferum","Stanum","Plumbum"],b:0,u:"Aluminium lebih reaktif daripada karbon, jadi karbon tidak dapat menyingkirkan oksigen daripada aluminium oksida."}],
 bos:{j:"banyak",t:"Pilih SEMUA mineral yang merupakan sebatian, iaitu gabungan dua atau lebih unsur.",p:["Bauksit","Galena","Kasiterit","Emas","Perak"],b:[0,1,2],u:"Emas dan perak ialah unsur. Bauksit, galena dan kasiterit ialah sebatian logam dengan oksigen atau sulfur."}},

{n:2, tempat:"Siri Kereaktifan", sk:"4.2 Siri kereaktifan logam",
 kadNama:"Kalium", kadEm:"\u{1F9EA}", kadFakta:"Kalium begitu reaktif sehingga ia disimpan di dalam minyak parafin supaya tidak bertindak balas dengan udara dan wap air.",
 bosKadNama:"Elektrolisis", bosKadEm:"\u{26A1}", bosKadFakta:"Logam yang lebih reaktif daripada karbon, seperti aluminium, diekstrak menggunakan arus elektrik.",
 soalan:[
 {j:"pilih",t:"Mengapakah emas ditemui sebagai unsur bebas tetapi aluminium hanya ditemui sebagai sebatian?",p:["Emas sangat tidak reaktif, aluminium mudah bergabung dengan oksigen","Emas lebih berat, jadi ia tenggelam jauh ke dalam kerak bumi","Aluminium lebih lembut, jadi ia mudah pecah dan bercampur","Emas mempunyai takat lebur rendah, jadi ia mudah melebur semula jadi"],b:0,u:"Logam yang sangat reaktif sentiasa bergabung dengan unsur lain di alam semula jadi."},
 {j:"pilih",t:"Mengapakah magnesium terbakar lebih terang daripada ferum apabila dipanaskan dalam oksigen?",p:["Magnesium lebih reaktif, jadi tindak balasnya lebih cergas","Magnesium lebih ringan, jadi ia lebih mudah terapung dalam api","Ferum berwarna gelap, jadi ia menyerap cahaya nyalaan itu","Magnesium sudah mengandungi oksigen di dalam logamnya"],b:0,u:"Kecerahan nyalaan atau baraan menunjukkan betapa cergas logam itu bertindak balas dengan oksigen."},
 {j:"pilih",t:"Apakah maksud siri kereaktifan logam?",p:["Susunan logam mengikut kecergasan bertindak balas dengan oksigen","Susunan logam mengikut ketumpatan, dari paling berat ke paling ringan","Susunan logam mengikut harga pasaran semasa di seluruh dunia","Susunan logam mengikut tarikh logam itu mula-mula ditemui"],b:0,u:"Logam paling reaktif berada di atas siri, dan logam paling kurang reaktif di bawah."},
 {j:"pilih",t:"Mengapakah karbon dimasukkan dalam siri kereaktifan walaupun ia bukan logam?",p:["Kedudukannya menentukan logam yang boleh diekstrak dengan karbon","Karbon bersifat seperti logam kerana ia mengalirkan haba dengan baik","Karbon terdapat dalam semua bijih logam yang dilombong di Malaysia","Karbon ialah unsur paling reaktif, jadi ia diletakkan di bahagian atas"],b:0,u:"Karbon murah dan mudah didapati, jadi penting untuk mengetahui logam mana yang dapat diturunkannya."},
 {j:"pilih",t:"Zink oksida dipanaskan dengan serbuk karbon dan menghasilkan zink. Apakah yang dapat disimpulkan?",p:["Karbon lebih reaktif daripada zink","Zink lebih reaktif daripada karbon","Karbon dan zink sama reaktif","Zink oksida tidak mengandungi oksigen"],b:0,u:"Unsur yang lebih reaktif dapat menyingkirkan oksigen daripada oksida unsur yang kurang reaktif."},
 {j:"pilih",t:"Apakah yang berlaku kepada karbon apabila ia menyingkirkan oksigen daripada zink oksida?",p:["Karbon bergabung dengan oksigen membentuk karbon dioksida","Karbon bertukar menjadi zink kerana menerima oksigen","Karbon melebur dan bercampur dengan zink membentuk aloi","Karbon hilang sepenuhnya tanpa menghasilkan sebarang bahan"],b:0,u:"Zink oksida + karbon → zink + karbon dioksida."},
 {j:"pilih",t:"Pilih persamaan perkataan yang betul bagi pemanasan aluminium dalam oksigen.",p:["aluminium + oksigen → aluminium oksida","aluminium oksida → aluminium + oksigen","aluminium + karbon → aluminium karbida","aluminium + oksigen → aluminium dioksida"],b:0,u:"Bahan tindak balas ditulis di sebelah kiri anak panah dan hasil di sebelah kanan."},
 {j:"pilih",t:"Mengapakah logam di bawah karbon dalam siri kereaktifan boleh diekstrak dengan memanaskan bijihnya bersama karbon?",p:["Karbon dapat menyingkirkan oksigen daripada oksida logam itu","Karbon menambah oksigen kepada bijih supaya logam terbebas","Karbon melarutkan bijih logam itu menjadi cecair yang tulen","Karbon menyerap bendasing tetapi tidak menyentuh oksida logam"],b:0,u:"Proses menyingkirkan oksigen daripada oksida logam dipanggil penurunan."}],
 bos:{j:"pilih",t:"Oksida logam X tidak bertindak balas apabila dipanaskan dengan karbon. Kaedah pengekstrakan yang paling sesuai bagi X ialah:",p:["Elektrolisis sebatian lebur X","Pemanasan bijih X dengan karbon","Pemanasan bijih X dengan hidrogen","Mengutip X sebagai unsur bebas"],b:0,u:"X lebih reaktif daripada karbon. Logam sereaktif ini tidak ditemui sebagai unsur bebas, dan hidrogen yang lebih rendah daripada karbon juga tidak dapat menurunkannya."}},

{n:3, tempat:"Makmal Pembakaran", sk:"4.1 / 4.2 Mengaplikasi dalam kehidupan", lampiran:"bakar",
 kadNama:"Magnesium", kadEm:"\u{2728}", kadFakta:"Nyalaan magnesium sangat terang sehingga serbuknya pernah digunakan sebagai lampu kilat dalam fotografi awal.",
 bosKadNama:"Karat", bosKadEm:"\u{1F529}", bosKadFakta:"Karat ialah ferum oksida terhidrat. Ia terbentuk apabila ferum bertindak balas dengan oksigen dan air.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, logam manakah paling reaktif terhadap oksigen?",p:["Magnesium","Aluminium","Zink","Plumbum"],b:0,u:"Magnesium terbakar dengan nyalaan paling terang."},
 {j:"pilih",t:"Seorang murid mendapati bakinya kuning semasa panas dan putih apabila sejuk. Logam yang dipanaskan ialah:",p:["Zink","Plumbum","Magnesium","Ferum"],b:0,u:"Zink oksida kuning semasa panas dan putih apabila sejuk. Plumbum oksida pula perang semasa panas dan kuning apabila sejuk."},
 {j:"pilih",t:"Mengapakah kalium manganat(VII) dipanaskan dalam eksperimen ini?",p:["Untuk membebaskan gas oksigen","Untuk menyerap wap air dalam tabung","Untuk memanaskan serbuk logam","Untuk mengeringkan kapas kaca"],b:0,u:"Kalium manganat(VII) terurai apabila dipanaskan dan membebaskan oksigen yang diperlukan oleh logam."},
 {j:"pilih",t:"Mengapakah logam digunakan dalam bentuk serbuk, bukan ketulan?",p:["Luas permukaannya besar, jadi tindak balas mudah berlaku","Serbuk lebih ringan, jadi tidak jatuh ke dasar tabung didih","Serbuk tidak mengandungi bendasing seperti ketulan logam","Serbuk tidak berkarat walaupun disimpan lama di dalam makmal"],b:0,u:"Lebih banyak permukaan logam bersentuhan dengan oksigen pada masa yang sama."},
 {j:"pilih",t:"Petani menabur kalsium oksida (kapur) di sawah yang tanahnya berasid. Mengapa?",p:["Kalsium oksida bersifat bes dan meneutralkan keasidan tanah","Kalsium oksida bersifat asid, jadi ia menambah nutrien dalam tanah","Kalsium oksida menyerap air supaya sawah tidak dilanda banjir","Kalsium oksida membunuh semua serangga perosak di dalam tanah"],b:0,u:"Bes meneutralkan asid. Kebanyakan tanaman tumbuh dengan baik dalam tanah yang hampir neutral."},
 {j:"pilih",t:"Silikon dioksida (pasir) digunakan untuk membuat kaca. Sifat manakah yang menjadikannya sesuai?",p:["Takat leburnya tinggi","Mudah larut dalam air","Bersifat bes yang kuat","Mengalirkan elektrik"],b:0,u:"Kaca yang dibuat daripada silikon dioksida tahan haba dan tidak mudah melebur."},
 {j:"nombor",t:"Sampel bijih seberat 500 g mengandungi 60% kasiterit. Berapakah jisim kasiterit dalam sampel itu, dalam gram?",b:300,tol:0.5,suf:"g",u:"60 per 100 didarab 500 g bersamaan 300 g."},
 {j:"pilih",t:"Pemanasan kuprum(II) karbonat menghasilkan pepejal hitam dan gas yang mengeruhkan air kapur. Apakah hasilnya?",p:["Kuprum(II) oksida dan karbon dioksida","Kuprum(II) oksida dan gas hidrogen","Kuprum tulen dan karbon monoksida","Kuprum(II) sulfida dan gas oksigen"],b:0,u:"Karbonat logam terurai apabila dipanaskan kepada oksida logam dan karbon dioksida. Karbon dioksida mengeruhkan air kapur."}],
 bos:{j:"pilih",t:"Sebilah pisau keluli (ferum) dan sebentuk cincin emas tertinggal di pantai selama setahun. Ramalkan keadaan kedua-duanya.",p:["Pisau berkarat, cincin emas kekal berkilat","Kedua-duanya berkarat dengan kadar yang sama","Cincin emas berkarat, pisau kekal berkilat","Kedua-duanya kekal berkilat tanpa perubahan"],b:0,u:"Ferum jauh lebih reaktif daripada emas, jadi ia bergabung dengan oksigen dengan bantuan air membentuk karat. Emas hampir tidak bertindak balas."}},

{n:4, tempat:"Karbon & Hidrogen", sk:"4.2 Kedudukan karbon dan hidrogen", lampiran:"turun",
 kadNama:"Karbon", kadEm:"\u{26AB}", kadFakta:"Karbon dalam bentuk kok digunakan untuk menurunkan bijih besi kerana karbon lebih reaktif daripada ferum.",
 bosKadNama:"Tindak Balas Termit", bosKadEm:"\u{1F525}", bosKadFakta:"Campuran serbuk aluminium dan ferum oksida yang dinyalakan menghasilkan besi lebur, dan pernah digunakan untuk menyambung landasan kereta api.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Set 1 dan Set 2, di manakah kedudukan karbon dalam siri kereaktifan?",p:["Di antara aluminium dan zink","Di atas aluminium dan zink","Di bawah zink dan ferum","Di antara zink dan ferum"],b:0,u:"Karbon dapat menurunkan zink oksida tetapi tidak aluminium oksida, jadi karbon lebih reaktif daripada zink tetapi kurang reaktif daripada aluminium."},
 {j:"pilih",t:"Berdasarkan Set 4 dan Set 5, di manakah kedudukan hidrogen?",p:["Di antara zink dan ferum","Di antara aluminium dan zink","Di atas zink dan aluminium","Di bawah kuprum dan ferum"],b:0,u:"Hidrogen menurunkan ferum oksida tetapi tidak zink oksida."},
 {j:"pilih",t:"Mengapakah titisan air terbentuk dalam Set 5 dan Set 6?",p:["Hidrogen bergabung dengan oksigen daripada oksida logam","Oksida logam itu sudah lembap sebelum dipanaskan","Gas hidrogen terkondensasi apabila menyentuh kaca sejuk","Logam yang terhasil membebaskan air semasa menyejuk"],b:0,u:"Kuprum(II) oksida + hidrogen → kuprum + air."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data Set 1 hingga Set 6.",p:["Karbon lebih reaktif daripada zink","Aluminium lebih reaktif daripada karbon","Hidrogen lebih reaktif daripada ferum","Hidrogen lebih reaktif daripada zink","Karbon kurang reaktif daripada ferum"],b:[0,1,2],u:"Set 4 menunjukkan hidrogen tidak dapat menurunkan zink oksida, dan Set 3 menunjukkan karbon dapat menurunkan ferum oksida."},
 {j:"pilih",t:"Oksida logam W tidak berubah apabila dipanaskan dengan karbon (Set 7). Logam W mungkin:",p:["Magnesium","Plumbum","Kuprum","Ferum"],b:0,u:"W mesti lebih reaktif daripada karbon. Antara pilihan, hanya magnesium berada di atas karbon."},
 {j:"pilih",t:"Oksida logam Y berubah apabila dipanaskan dengan karbon tetapi tidak berubah dengan hidrogen. Di manakah kedudukan Y?",p:["Di antara karbon dan hidrogen","Di atas aluminium dan karbon","Di bawah ferum dan kuprum","Di antara hidrogen dan ferum"],b:0,u:"Karbon lebih reaktif daripada Y, dan Y lebih reaktif daripada hidrogen. Zink ialah contoh logam sebegini."},
 {j:"pilih",t:"Seorang murid mendakwa Set 2 tidak berubah hanya kerana api tidak cukup panas. Cara terbaik menguji dakwaannya?",p:["Ulang Set 2 dengan pemanasan lebih kuat dan lebih lama","Tukar karbon dengan serbuk zink lalu ulang pemanasan","Ulang Set 1 sahaja kerana set itu sudah berjaya","Buat kesimpulan tanpa mengulang kerana data sudah ada"],b:0,u:"Hanya faktor yang dipersoalkan, iaitu kekuatan pemanasan, perlu diubah."},
 {j:"pilih",t:"Aluminium ialah logam paling banyak dalam kerak bumi, tetapi manusia menggunakannya jauh lebih lewat daripada ferum. Mengapa?",p:["Ia terlalu reaktif untuk diekstrak dengan karbon","Aluminium terlalu lembut untuk dibuat peralatan","Bijih aluminium hanya terdapat di dasar laut","Aluminium tidak wujud sebagai sebatian semula jadi"],b:0,u:"Aluminium hanya dapat diekstrak secara besar-besaran selepas elektrolisis ditemui."}],
 bos:{j:"pilih",t:"Data bagi logam M: karbon menurunkan oksida M; M menyingkirkan oksigen daripada ferum oksida; hidrogen tidak menurunkan oksida M. Susunan yang betul, dari PALING reaktif?",p:["Karbon, M, hidrogen, ferum","M, karbon, hidrogen, ferum","Karbon, hidrogen, M, ferum","Karbon, M, ferum, hidrogen"],b:0,u:"Karbon lebih reaktif daripada M, M lebih reaktif daripada ferum dan hidrogen, dan hidrogen berada di atas ferum."}},

{n:5, tempat:"Relau & Lombong", sk:"4.3 Pengekstrakan logam dan kesan perlombongan", lampiran:"sungai",
 kadNama:"Relau Bagas", kadEm:"\u{1F3ED}", kadFakta:"Dalam relau bagas, sanga yang terbentuk daripada batu kapur terapung di atas besi lebur dan disalir keluar secara berasingan.",
 bosKadNama:"Kitar Semula", bosKadEm:"\u{267B}", bosKadFakta:"Mengitar semula aluminium hanya memerlukan kira-kira 5 peratus tenaga yang diperlukan untuk mengekstrak aluminium baharu.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, apakah bukti paling kukuh bahawa lombong menjejaskan sungai?",p:["Stesen B jauh lebih keruh dan berasid berbanding Stesen A di hulu","Stesen D mempunyai 12 spesies ikan, iaitu kurang daripada 15","Stesen C lebih keruh daripada Stesen D di hilir","Kekeruhan berkurang secara beransur dari Stesen B ke Stesen D"],b:0,u:"Stesen A di hulu menjadi kawalan. Perubahan besar tepat di alur keluar lombong menunjukkan punca pencemaran."},
 {j:"pilih",t:"Nilaikan dakwaan: \"Sungai itu pulih sepenuhnya 8 km dari lombong.\"",p:["Tidak tepat, kerana Stesen D masih lebih keruh dan kurang ikan daripada A","Tepat, kerana kekeruhan Stesen D jauh lebih rendah daripada Stesen B","Tepat, kerana pH Stesen D sudah melebihi 6.5 seperti air biasa","Tidak tepat, kerana pH Stesen D lebih berasid daripada Stesen B"],b:0,u:"Pulih sepenuhnya bermakna kembali seperti Stesen A. pH 6.7 kurang berasid daripada 5.2, bukan lebih berasid."},
 {j:"pilih",t:"Pihak berkuasa hanya mampu melaksanakan SATU langkah segera. Pilihan paling wajar?",p:["Bina kolam takungan supaya lumpur mendap","Lepaskan benih ikan baharu di Stesen B setiap bulan","Tambah kapur terus ke dalam sungai di Stesen D","Pasang papan tanda larangan memancing di sepanjang sungai"],b:0,u:"Kolam takungan menyerang punca di alur keluar. Kapur di Stesen D tidak mengurangkan kekeruhan dan diletakkan jauh dari punca."},
 {j:"pilih",t:"Seorang jurutera mencadangkan batu kapur dikeluarkan daripada relau bagas untuk menjimatkan kos. Nilaikan cadangan itu.",p:["Kurang wajar, kerana bendasing tidak lagi dapat disingkirkan sebagai sanga","Wajar, kerana batu kapur tidak terlibat dalam tindak balas di dalam relau","Wajar, kerana kok sudah cukup untuk menyingkirkan semua bendasing","Kurang wajar, kerana batu kapur ialah sumber utama besi dalam relau"],b:0,u:"Batu kapur terurai kepada kalsium oksida yang bergabung dengan pasir membentuk sanga. Besi datang daripada bijih besi, bukan batu kapur."},
 {j:"pilih",t:"Dua kaedah pengekstrakan aluminium dicadangkan: (P) panaskan bauksit dengan karbon, (Q) elektrolisis. Keputusan paling wajar?",p:["Q, kerana karbon tidak dapat menurunkan aluminium oksida","P, kerana pemanasan dengan karbon lebih murah daripada elektrolisis","P, kerana aluminium berada di bawah karbon dalam siri kereaktifan","Q, kerana elektrolisis menggunakan kurang tenaga daripada pemanasan"],b:0,u:"Aluminium lebih reaktif daripada karbon. Elektrolisis sebenarnya menggunakan banyak tenaga elektrik, tetapi hanya kaedah itu yang berfungsi."},
 {j:"pilih",t:"Bekas lombong timah di Lembah Klang telah dijadikan tasik rekreasi dan tanah lembap. Apakah kelebihan utama pendekatan ini?",p:["Tanah yang rosak diberi kegunaan baharu dan menjadi habitat","Bijih timah yang tinggal boleh terus dilombong dari dasar tasik","Air tasik bekas lombong sesuai terus diminum kerana ia air hujan","Kolam lombong tidak lagi perlu diuji untuk kandungan logam berat"],b:0,u:"Pemulihan memberi manfaat baharu, tetapi air bekas lombong masih perlu diuji kerana logam berat boleh kekal di dasar."},
 {j:"banyak",t:"Pilih SEMUA langkah yang wajar diwajibkan sebelum lombong bauksit baharu dibuka.",p:["Penilaian Kesan Alam Sekeliling yang diluluskan","Pelan pemulihan tanah selepas perlombongan tamat","Kawalan habuk semasa bijih diangkut dengan lori","Pampasan dibayar hanya selepas penduduk mengadu","Stok bijih disimpan terbuka di tebing sungai"],b:[0,1,2],u:"Pencemaran habuk bauksit di Kuantan pada 2015 menunjukkan akibat apabila kawalan ini diabaikan. Stok terbuka di tebing sungai dihanyutkan hujan ke dalam air."},
 {j:"pilih",t:"Mengitar semula aluminium hanya memerlukan kira-kira 5% tenaga pengekstrakan baharu. Mengapakah perbezaannya begitu besar?",p:["Aluminium terpakai sudah berbentuk logam, jadi elektrolisis tidak diperlukan","Tin aluminium lebih reaktif daripada bauksit, jadi ia melebur tanpa haba","Kitar semula menggunakan karbon, yang jauh lebih murah daripada elektrik","Tin terpakai tidak perlu dileburkan, cuma dipotong dan dibentuk semula"],b:0,u:"Tenaga paling banyak digunakan untuk memisahkan aluminium daripada oksigen melalui elektrolisis. Tin terpakai masih perlu dileburkan, tetapi itu jauh lebih murah."}],
 bos:{j:"pilih",t:"Sebuah kampung perlu memutuskan sama ada membenarkan lombong bauksit yang membuka 200 peluang pekerjaan, sedangkan sungai berhampiran ialah sumber air minum. Keputusan paling wajar?",p:["Benarkan hanya jika kawalan pencemaran dan pemulihan dikuatkuasakan","Benarkan tanpa syarat kerana 200 pekerjaan lebih penting","Benarkan, kerana bauksit tidak larut dan tidak menjejaskan sungai","Tolak, kerana semua lombong menjadikan air sungai radioaktif"],b:0,u:"Bauksit yang tidak larut tetap menjadikan sungai keruh dan mengubah pH. Keputusan yang baik menimbang ekonomi dengan keselamatan air melalui syarat yang boleh dipantau."}},

{n:6, tempat:"Tanah Bekas Lombong", sk:"4.3 Mereka cipta penyelesaian",
 kadNama:"Tanah Lembap", kadEm:"\u{1F986}", kadFakta:"Paya Indah Wetlands di Selangor dibina di atas bekas kawasan perlombongan bijih timah dan kini menjadi habitat burung air.",
 bosKadNama:"Lembah Kinta", bosKadEm:"\u{26CF}", bosKadFakta:"Lembah Kinta di Perak pernah menjadi antara kawasan perlombongan bijih timah terkaya di dunia.",
 soalan:[
 {j:"pilih",t:"Awak mereka bentuk pelan memulihkan tanah bekas lombong di kampung awak. Langkah pertama paling penting?",p:["Uji pH tanah dan kandungan logam berat","Tanam pokok buah-buahan segera kerana akar mengikat tanah","Tabur baja kimia sebanyak mungkin untuk menyuburkan pasir","Timbus kolam dengan tanah liat supaya air tidak bertakung"],b:0,u:"Pelan yang baik bermula dengan data. Buah daripada tanah yang mengandungi logam berat mungkin tidak selamat dimakan."},
 {j:"pilih",t:"Ujian menunjukkan tanah bekas lombong itu berasid. Bahan manakah paling sesuai ditambah sebelum menanam?",p:["Kapur pertanian","Serbuk sulfur","Baja ammonium sulfat","Pasir sungai"],b:0,u:"Kapur bersifat bes dan meneutralkan tanah berasid. Sulfur dan ammonium sulfat menambah lagi keasidan tanah."},
 {j:"pilih",t:"Kolam bekas lombong mahu dijadikan tempat ternakan ikan. Syarat paling penting sebelum ia dimulakan?",p:["Air kolam diuji bebas daripada logam berat","Air kolam dijernihkan supaya ikan mudah dilihat","Spesies ikan yang dipilih tahan air berasid","Kolam didalamkan supaya airnya lebih sejuk"],b:0,u:"Logam berat terkumpul dalam badan ikan dan akhirnya dalam badan orang yang memakannya. Ikan yang tahan asid tetap boleh mengumpul logam berat."},
 {j:"pilih",t:"Tanah bekas lombong berpasir, miskin nutrien dan cepat kering. Tanaman perintis paling sesuai?",p:["Pokok kekacang tahan kering yang menambah nitrogen tanah","Sayur-sayuran berdaun lebar kerana ia cepat membesar","Padi sawah kerana tanah bekas lombong sentiasa berair","Pokok hiasan import yang biasa ditanam di taman bandar"],b:0,u:"Pokok kekacang seperti akasia hidup dalam tanah miskin dan menyuburkannya, lalu memudahkan spesies lain tumbuh kemudian."},
 {j:"pilih",t:"Awak mahu membuktikan pelan pemulihan berjaya selepas setahun. Bukti paling meyakinkan?",p:["Bandingkan bilangan spesies dan kualiti air sebelum dan selepas","Ukur ketinggian satu pokok yang paling cepat membesar","Tanya penduduk sama ada kawasan itu kelihatan lebih hijau","Kira bilangan anak pokok yang ditanam pada hari pertama"],b:0,u:"Ukuran yang sama sebelum dan selepas memberi bukti yang boleh dibandingkan. Satu pokok terbaik tidak mewakili seluruh kawasan."},
 {j:"pilih",t:"Tebing tasik bekas lombong kerap runtuh. Reka bentuk paling berkesan?",p:["Tanam rumput vetiver yang berakar dalam","Siram tebing setiap hari supaya tanahnya lebih padat","Buang semua tumbuhan di tebing supaya air mengalir lancar","Tabur kapur di tebing kerana kapur mengeras seperti simen"],b:0,u:"Akar yang dalam dan rapat mengikat tanah. Tanah yang sentiasa basah lebih mudah runtuh, bukan lebih padat."},
 {j:"pilih",t:"Awak mereka dulang untuk memisahkan bijih timah daripada pasir. Prinsip sains yang digunakan?",p:["Bijih timah lebih tumpat, jadi ia mendap dahulu","Bijih timah lebih ringan, jadi ia terapung di atas air","Bijih timah bermagnet, jadi ia melekat pada dasar dulang","Bijih timah larut dalam air, jadi pasir yang tertinggal dibuang"],b:0,u:"Kasiterit jauh lebih tumpat daripada pasir, jadi air yang digoncang membawa pasir pergi dahulu."},
 {j:"pilih",t:"Masyarakat Orang Asli bergantung pada sungai berhampiran kawasan yang ingin dipulihkan. Pendekatan paling wajar?",p:["Libatkan mereka dan gunakan pengetahuan tempatan tentang tumbuhan dan air","Minta mereka berpindah sementara projek dijalankan","Laksanakan pelan pakar dahulu, kemudian maklumkan hasilnya","Beri pampasan wang supaya mereka berhenti menggunakan sungai"],b:0,u:"Masyarakat yang paling lama mengenali kawasan itu selalunya tahu tumbuhan dan corak air yang sesuai."}],
 bos:{j:"buka",
  t:"Sebuah tasik bekas lombong timah berhampiran sekolah awak terbiar, airnya keruh dan tebingnya runtuh. Reka satu pelan untuk menjadikannya kawasan yang selamat dan bermanfaat kepada masyarakat.",
  arahan:"Terangkan masalah sains yang perlu diatasi (contohnya keasidan tanah, logam berat dan hakisan), langkah serta bahan yang digunakan, siapa yang terlibat, dan bagaimana awak mengambil kira kos serta keperluan penduduk setempat.",
  u:"Jawapan TP6 yang kukuh mengaitkan sifat bahan dan tindak balas kimia dengan langkah pemulihan, kos sebenar, dan peranan masyarakat."}}
];

module.exports = {
  id:"t3b4", tingkatan:3, kod:"4.0 Kereaktifan Logam",
  tajuk:"Laluan Bijih",
  subtajuk:"Sains Ting. 3 · Bab 4 Kereaktifan Logam",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali contoh mineral dalam kerak bumi, bijih logam utama dan susunan asas siri kereaktifan. Langkah seterusnya ialah menerangkan sebab sesuatu logam lebih reaktif daripada yang lain.",
   2:"{n} memahami siri kereaktifan logam dan boleh menjelaskan kedudukan karbon serta kaedah pengekstrakan yang sesuai. Perlu lebih banyak latihan mentafsir pemerhatian eksperimen sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan kereaktifan logam untuk mentafsir pemerhatian pemanasan logam dan menerangkan kegunaan mineral dalam kehidupan harian. Galakkan mengaitkan data dengan kesimpulan.",
   4:"{n} mampu menganalisis data penurunan oksida logam untuk menentukan kedudukan karbon, hidrogen dan logam yang tidak diketahui. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai kesan perlombongan dan kaedah pengekstrakan logam serta membuat keputusan yang wajar berdasarkan data. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta pelan pemulihan kawasan bekas lombong yang praktikal, dengan mengambil kira sains, kos dan keperluan masyarakat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kereaktifan Logam. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ bakar:T_BAKAR, turun:T_TURUN, sungai:T_SUNGAI },
  aras:ARAS
};
