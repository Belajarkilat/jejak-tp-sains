/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 8.0 Keradioaktifan.
   Jalankan `node bina.js t3b8` untuk menyemak dan menghasilkan bank-t3b8.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 87.
   Paras selamat sinaran latar belakang (kurang daripada 0.2 µSv/j)
   diambil daripada catatan DSKP 8.3.4.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai keradioaktifan.",
"Memahami keradioaktifan dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai keradioaktifan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai keradioaktifan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai keradioaktifan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Merekacipta dengan menggunakan pengetahuan dan kemahiran sains mengenai keradioaktifan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_REPUT =
'<div class="scrollx"><table class="datatable"><thead><tr><th class="n">Masa (jam)</th>'+
'<th class="n">Aktiviti bahan X (Bq)</th></tr></thead><tbody>'+
'<tr><td class="n">0</td><td class="n">800</td></tr>'+
'<tr><td class="n">2</td><td class="n">400</td></tr>'+
'<tr><td class="n">4</td><td class="n">200</td></tr>'+
'<tr><td class="n">6</td><td class="n">100</td></tr>'+
'<tr><td class="n">8</td><td class="n">50</td></tr>'+
'</tbody></table></div><p class="qnote">1 Bq bermaksud satu nukleus mereput setiap saat. Data rekaan untuk latihan.</p>';

const T_TEMBUS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sumber</th>'+
'<th class="n">Tanpa penghadang</th><th class="n">Sehelai kertas</th>'+
'<th class="n">Aluminium 5 mm</th><th class="n">Plumbum 5 cm</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">900</td><td class="n">20</td><td class="n">20</td><td class="n">20</td></tr>'+
'<tr><td>Q</td><td class="n">700</td><td class="n">690</td><td class="n">20</td><td class="n">20</td></tr>'+
'<tr><td>R</td><td class="n">500</td><td class="n">500</td><td class="n">480</td><td class="n">60</td></tr>'+
'</tbody></table></div><p class="qnote">Bacaan dalam bilangan seminit. Setiap sumber memancarkan satu jenis sinaran sahaja. Bacaan latar belakang ialah 20 bilangan seminit.</p>';

const T_DOS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Lokasi</th>'+
'<th class="n">Kadar dos (&micro;Sv/j)</th></tr></thead><tbody>'+
'<tr><td>Bilik darjah</td><td class="n">0.10</td></tr>'+
'<tr><td>Bilik menunggu klinik</td><td class="n">0.12</td></tr>'+
'<tr><td>Kawasan batuan granit</td><td class="n">0.25</td></tr>'+
'<tr><td>Tepi pagar tapak simpanan sisa radioaktif</td><td class="n">0.35</td></tr>'+
'<tr><td>Kabin kapal terbang pada ketinggian 11 km</td><td class="n">3.0</td></tr>'+
'</tbody></table></div><p class="qnote">Kadar dos kurang daripada 0.2 &micro;Sv/j dianggap selamat. Data rekaan untuk latihan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Makmal Curie", sk:"8.1 Sejarah penemuan keradioaktifan",
 kadNama:"Marie Curie", kadEm:"\u{1F52C}", kadFakta:"Marie Curie ialah orang pertama yang memenangi Hadiah Nobel dalam dua bidang sains berbeza, iaitu fizik dan kimia.",
 bosKadNama:"Sinar-X", bosKadEm:"\u{1F9B4}", bosKadFakta:"Wilhelm Roentgen menemui sinar-X pada tahun 1895. Imej sinar-X pertamanya menunjukkan tulang tangan isterinya.",
 soalan:[
 {j:"pilih",t:"Saintis yang menemui sinar-X ialah:",p:["Wilhelm Roentgen","Henri Becquerel","Marie Curie","Pierre Curie"],b:0,u:"Roentgen menemui sinar-X pada tahun 1895."},
 {j:"pilih",t:"Saintis yang pertama menemui keradioaktifan melalui garam uranium ialah:",p:["Henri Becquerel","Wilhelm Roentgen","John Dalton","Isaac Newton"],b:0,u:"Becquerel mendapati garam uranium menggelapkan plat fotografi walaupun tanpa cahaya."},
 {j:"pilih",t:"Unit bagi keradioaktifan ialah:",p:["Becquerel (Bq)","Joule (J)","Watt (W)","Kilowatt jam (kWj)"],b:0,u:"Curie (Ci) juga ialah unit keradioaktifan."},
 {j:"pilih",t:"Zarah yang bercas positif dalam nukleus ialah:",p:["Proton","Neutron","Elektron","Foton"],b:0,u:"Neutron tidak bercas, dan elektron bercas negatif serta berada di luar nukleus."},
 {j:"pilih",t:"Sinaran yang paling tinggi kuasa penembusannya ialah:",p:["Sinar gama","Zarah alfa","Zarah beta","Gelombang radio"],b:0,u:"Sinar gama hanya dapat dikurangkan oleh plumbum atau konkrit tebal."},
 {j:"pilih",t:"Contoh bahan radioaktif ialah:",p:["Uranium-235","Karbon-12","Oksigen-16","Natrium klorida"],b:0,u:"Karbon-12 dan oksigen-16 ialah atom yang stabil."},
 {j:"banyak",t:"Pilih SEMUA sinaran mengion.",p:["Zarah alfa","Zarah beta","Sinar gama","Gelombang radio","Cahaya nampak"],b:[0,1,2],u:"Sinar-X juga sinaran mengion. Gelombang radio dan cahaya nampak ialah sinaran tidak mengion."},
 {j:"pilih",t:"Separuh hayat ialah masa yang diambil untuk:",p:["Separuh daripada nukleus radioaktif mereput","Semua nukleus radioaktif mereput","Bahan radioaktif menjadi dua kali lebih aktif","Separuh daripada elektron keluar dari atom"],b:0,u:"Selepas satu separuh hayat, aktiviti sampel menjadi separuh."}],
 bos:{j:"pilih",t:"Keradioaktifan ialah:",p:["Pereputan spontan nukleus tidak stabil yang memancarkan sinaran","Pembakaran bahan api yang membebaskan cahaya dan haba dengan cepat","Pergerakan elektron dalam dawai yang menghasilkan arus","Pantulan cahaya matahari oleh bahan logam berkilat"],b:0,u:"Spontan bermaksud ia berlaku dengan sendiri tanpa dipengaruhi suhu atau tekanan."}},

{n:2, tempat:"Nukleus", sk:"8.2 / 8.3 Atom, ion dan jenis sinaran",
 kadNama:"Atom", kadEm:"\u{269B}", kadFakta:"Hampir semua jisim atom tertumpu dalam nukleus yang sangat kecil di tengahnya.",
 bosKadNama:"Ion", bosKadEm:"\u{2795}", bosKadFakta:"Atom yang kehilangan elektron menjadi ion positif, manakala atom yang menerima elektron menjadi ion negatif.",
 soalan:[
 {j:"pilih",t:"Mengapakah atom neutral secara keseluruhan?",p:["Bilangan proton sama dengan bilangan elektron","Bilangan proton sama dengan bilangan neutron dalam nukleus","Neutron meneutralkan semua cas elektron","Elektron tidak mempunyai sebarang cas"],b:0,u:"Cas positif proton diseimbangkan oleh cas negatif elektron."},
 {j:"pilih",t:"Bagaimanakah ion positif terbentuk?",p:["Atom kehilangan satu atau lebih elektron","Atom menerima satu atau lebih elektron daripada atom lain","Atom kehilangan satu atau lebih proton","Atom menerima satu atau lebih neutron"],b:0,u:"Selepas elektron hilang, bilangan proton melebihi bilangan elektron."},
 {j:"pilih",t:"Atom klorin menerima satu elektron. Apakah yang terbentuk?",p:["Ion negatif","Ion positif","Atom neutral","Nukleus baharu"],b:0,u:"Elektron kini melebihi proton sebanyak satu."},
 {j:"pilih",t:"Mengapakah zarah alfa dan zarah beta terpesong ke arah bertentangan dalam medan magnet?",p:["Kedua-duanya membawa cas yang berlawanan","Kedua-duanya tidak bercas","Zarah alfa lebih laju daripada zarah beta","Medan magnet menolak semua zarah ke kiri"],b:0,u:"Zarah alfa bercas positif, manakala zarah beta bercas negatif."},
 {j:"pilih",t:"Mengapakah sinar gama tidak terpesong dalam medan elektrik?",p:["Sinar gama tidak bercas","Sinar gama terlalu berat","Sinar gama bercas positif","Sinar gama bergerak terlalu perlahan"],b:0,u:"Sinar gama ialah gelombang elektromagnet, bukan zarah bercas."},
 {j:"pilih",t:"Mengapakah zarah alfa mempunyai kuasa pengionan paling tinggi?",p:["Ia besar dan bercas, jadi kerap berlanggar dengan atom","Ia paling kecil, jadi mudah menembusi semua bahan","Ia tidak bercas, jadi tidak ditarik oleh elektron","Ia bergerak pada laju cahaya melalui udara"],b:0,u:"Setiap perlanggaran mengionkan atom, dan itulah sebabnya alfa cepat kehabisan tenaga."},
 {j:"pilih",t:"Aktiviti suatu sampel ialah 400 Bq. Apakah maksudnya?",p:["400 nukleus mereput setiap saat","400 atom terbentuk setiap saat","Sampel itu berjisim 400 gram","Sampel itu akan habis dalam 400 saat"],b:0,u:"1 becquerel ialah satu pereputan sesaat."},
 {j:"pilih",t:"Mengapakah juruterbang dan kru kabin menerima dos sinaran yang lebih tinggi?",p:["Sinaran kosmik lebih kuat di altitud tinggi","Enjin kapal terbang memancarkan sinar gama","Makanan dalam penerbangan mengandungi uranium","Kabin kapal terbang diperbuat daripada plumbum"],b:0,u:"Di altitud tinggi, lapisan atmosfera yang melindungi daripada sinaran kosmik lebih nipis."}],
 bos:{j:"pilih",t:"Mengapakah zarah beta lebih terpesong berbanding zarah alfa dalam medan magnet?",p:["Zarah beta jauh lebih ringan","Zarah beta tidak bercas","Zarah beta lebih besar","Zarah beta bergerak lebih perlahan"],b:0,u:"Zarah beta ialah elektron, jauh lebih ringan daripada zarah alfa."}},

{n:3, tempat:"Kebuk Awan", sk:"8.1 / 8.4 Separuh hayat dan kegunaan sinaran", lampiran:"reput",
 kadNama:"Karbon-14", kadEm:"\u{1F3FA}", kadFakta:"Karbon-14 mempunyai separuh hayat kira-kira 5730 tahun, jadi ia sesuai untuk menentukan umur bahan purba.",
 bosKadNama:"Pengesan Asap", bosKadEm:"\u{1F6A8}", bosKadFakta:"Kebanyakan pengesan asap mengandungi sedikit americium-241 yang memancarkan zarah alfa.",
 soalan:[
 {j:"nombor",t:"Berdasarkan jadual, berapakah separuh hayat bahan X, dalam jam?",b:2,tol:0.05,suf:"jam",u:"Aktiviti turun daripada 800 Bq kepada 400 Bq dalam 2 jam."},
 {j:"nombor",t:"Berapakah aktiviti bahan X selepas 10 jam, dalam Bq?",b:25,tol:0.5,suf:"Bq",u:"Selepas 8 jam aktivitinya 50 Bq. Satu separuh hayat lagi menjadikannya 25 Bq."},
 {j:"pilih",t:"Berapa lamakah masa yang diambil untuk aktiviti turun daripada 800 Bq kepada 100 Bq?",p:["6 jam","3 jam","8 jam","4 jam"],b:0,u:"800 → 400 → 200 → 100, iaitu tiga separuh hayat."},
 {j:"pilih",t:"Karbon-14 digunakan untuk menentukan umur tulang purba. Konsep yang digunakan ialah:",p:["Separuh hayat","Pengionan","Pembiasan","Kekonduksian"],b:0,u:"Baki karbon-14 dalam tulang menunjukkan berapa separuh hayat telah berlalu."},
 {j:"pilih",t:"Pengesan asap di rumah menggunakan sumber alfa. Mengapakah alfa dipilih dan bukan gama?",p:["Alfa mudah diserap, jadi tidak keluar dari pengesan","Alfa paling kuat menembusi dinding dan bumbung rumah kediaman","Alfa tidak mengionkan udara langsung","Alfa lebih murah kerana tidak pernah mereput"],b:0,u:"Alfa mengionkan udara di dalam pengesan tetapi dihalang oleh bekas pengesan itu sendiri."},
 {j:"pilih",t:"Sebuah kilang mengawal ketebalan kepingan kertas menggunakan sumber beta. Mengapakah beta sesuai?",p:["Bacaan beta berubah apabila ketebalan kertas berubah","Beta tidak dapat menembusi kertas walaupun nipis","Beta menembusi plumbum tebal dengan mudah","Beta tidak mengionkan bahan langsung"],b:0,u:"Alfa dihalang sepenuhnya oleh kertas, dan gama hampir tidak terjejas, jadi hanya beta yang peka terhadap ketebalan."},
 {j:"pilih",t:"Sinar gama digunakan untuk mengawet rempah dan makanan. Bagaimana?",p:["Sinar gama membunuh mikroorganisma dalam makanan","Sinar gama memasak makanan dengan haba yang tinggi","Sinar gama menjadikan makanan itu radioaktif","Sinar gama menambah vitamin dalam makanan"],b:0,u:"Makanan yang disinari tidak menjadi radioaktif."},
 {j:"pilih",t:"Doktor menggunakan sinar gama daripada kobalt-60 untuk:",p:["Membunuh sel kanser","Mengukur tekanan darah","Menguji penglihatan","Mengesan patah tulang"],b:0,u:"Patah tulang dikesan dengan sinar-X, bukan sinar gama kobalt-60."}],
 bos:{j:"pilih",t:"Seorang murid berkata bahan X akan habis mereput selepas 4 jam kerana separuh hayatnya 2 jam. Betulkan kenyataan itu.",p:["Selepas 4 jam, masih tinggal satu perempat aktiviti asal","Kenyataan itu betul kerana dua separuh hayat bersamaan satu","Selepas 4 jam, aktiviti menjadi dua kali ganda","Sampel itu habis mereput selepas 2 jam sahaja"],b:0,u:"Setiap separuh hayat membahagi dua aktiviti yang masih tinggal: ½ × ½ = ¼."}},

{n:4, tempat:"Penghadang", sk:"8.3 Membezakan sinaran alfa, beta dan gama", lampiran:"tembus",
 kadNama:"Plumbum", kadEm:"\u{1F9F1}", kadFakta:"Plumbum dan konkrit tebal digunakan untuk mengurangkan sinar gama di hospital dan loji nuklear.",
 bosKadNama:"Runut Kebuk Awan", bosKadEm:"\u{2601}", bosKadFakta:"Dalam kebuk awan, runut alfa pendek dan tebal, manakala runut beta nipis dan berliku.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, sumber P memancarkan:",p:["Zarah alfa","Zarah beta","Sinar gama","Sinar-X"],b:0,u:"Sinaran P dihalang sepenuhnya oleh sehelai kertas."},
 {j:"pilih",t:"Sumber manakah memancarkan zarah beta?",p:["Q","P","R","Tiada"],b:0,u:"Sinaran Q menembusi kertas tetapi dihalang oleh aluminium 5 mm."},
 {j:"pilih",t:"Mengapakah bacaan 20 masih dicatat walaupun sinaran P telah dihalang oleh kertas?",p:["Pengesan masih mengesan sinaran latar belakang","Sebahagian kecil zarah alfa masih menembusi kertas itu","Kertas itu sendiri memancarkan sinaran","Pengesan itu rosak dan perlu diganti"],b:0,u:"Sinaran latar belakang daripada tanah, batuan dan angkasa sentiasa ada."},
 {j:"pilih",t:"Mengapakah bacaan R hanya turun kepada 60, bukan 20, dengan plumbum 5 cm?",p:["Gama sangat menembusi, jadi plumbum hanya mengurangkannya","Plumbum itu sendiri memancarkan sinaran tambahan","Sumber R sebenarnya memancarkan zarah alfa yang kuat","Bacaan latar belakang meningkat semasa ujian"],b:0,u:"Plumbum yang lebih tebal diperlukan untuk mengurangkan gama ke paras latar belakang."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Sinaran P dihalang oleh sehelai kertas","Sinaran Q menembusi kertas tetapi dihalang aluminium","Sinaran R paling menembusi","Sinaran Q paling menembusi","Kertas menghalang semua jenis sinaran"],b:[0,1,2],u:"Sinaran R masih dikesan selepas melalui aluminium dan plumbum."},
 {j:"pilih",t:"Bekas simpanan sumber R di makmal sepatutnya diperbuat daripada:",p:["Plumbum tebal","Kertas tebal","Aluminium nipis","Plastik lutsinar"],b:0,u:"Hanya plumbum tebal mengurangkan sinar gama dengan ketara."},
 {j:"pilih",t:"Sumber manakah paling berbahaya jika tertelan atau terhidu ke dalam badan?",p:["P, kerana alfa sangat mengionkan sel dalaman","R, kerana sinar gama paling menembusi tisu badan","Q, kerana beta paling berat","Semuanya tidak berbahaya di dalam badan"],b:0,u:"Di luar badan, alfa dihalang oleh kulit. Di dalam badan, alfa terus merosakkan sel di sekelilingnya."},
 {j:"pilih",t:"Seorang murid mendakwa sumber R tidak memancarkan apa-apa kerana bacaannya melalui kertas sama seperti tanpa penghadang. Analisis dakwaan itu.",p:["Salah, kerana gama menembusi kertas tanpa berkurang","Betul, kerana kertas menghalang semua sinaran R","Betul, kerana bacaan 500 ialah bacaan latar belakang","Salah, kerana R sebenarnya memancarkan alfa"],b:0,u:"Bacaan 500 jauh melebihi latar belakang 20."}],
 bos:{j:"pilih",t:"Sebuah sumber memberi bacaan 800 tanpa penghadang, 790 dengan kertas, dan 20 dengan aluminium 5 mm. Sumber itu memancarkan:",p:["Zarah beta","Zarah alfa","Sinar gama","Gelombang mikro"],b:0,u:"Coraknya sama dengan sumber Q."}},

{n:5, tempat:"Pusat Nuklear", sk:"8.3 / 8.4 Mengurus risiko sinaran", lampiran:"dos",
 kadNama:"Lencana Dos", kadEm:"\u{1FAAA}", kadFakta:"Pekerja yang mengendalikan bahan radioaktif memakai lencana dos untuk merekod jumlah sinaran yang diterima.",
 bosKadNama:"Radioterapi", bosKadEm:"\u{1F3E5}", bosKadFakta:"Sinar gama daripada kobalt-60 digunakan untuk memusnahkan sel kanser.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, lokasi manakah melebihi paras yang dianggap selamat?",p:["Kabin, tepi simpanan sisa dan kawasan granit","Bilik darjah dan bilik menunggu klinik sahaja","Kabin kapal terbang sahaja, bukan tempat lain","Semua lokasi yang disenaraikan dalam jadual"],b:0,u:"Ketiga-tiga lokasi itu mempunyai kadar dos 0.2 µSv/j atau lebih."},
 {j:"pilih",t:"Seorang kru kabin terbang 800 jam setahun. Keputusan paling wajar bagi syarikat penerbangan?",p:["Pantau dos setiap kru dan hadkan jam terbang tahunan","Hentikan semua penerbangan antarabangsa","Abaikan kerana sinaran kosmik tidak berbahaya","Beri kru makanan tambahan sebagai perlindungan"],b:0,u:"Risiko diurus dengan memantau dan mengehadkan pendedahan."},
 {j:"nombor",t:"Berapakah dos yang diterima seorang penumpang dalam penerbangan selama 5 jam, dalam µSv?",b:15,tol:0.05,suf:"µSv",u:"3.0 µSv/j × 5 jam = 15 µSv."},
 {j:"pilih",t:"Nilaikan dakwaan: \"Kawasan granit langsung tidak selamat didiami.\"",p:["Tidak tepat, kerana ia sedikit tinggi dan boleh dikurangkan","Tepat, kerana semua sinaran mengion sangat berbahaya walaupun sedikit","Tepat, kerana granit meletup apabila terdedah sinaran","Tidak tepat, kerana granit tidak memancarkan sinaran"],b:0,u:"Pengudaraan yang baik mengurangkan gas radon daripada batuan di dalam rumah."},
 {j:"pilih",t:"Sebuah syarikat mahu membina tapak simpanan sisa radioaktif. Lokasi paling wajar?",p:["Kawasan stabil yang jauh dari sumber air dan penduduk","Tepi sungai supaya sisa mudah diangkut dengan bot","Tengah bandar supaya mudah dipantau","Tanah paya kerana tanahnya lembut untuk digali"],b:0,u:"Sisa radioaktif boleh kekal aktif untuk tempoh yang sangat lama, jadi ia mesti diasingkan daripada air dan manusia."},
 {j:"pilih",t:"Sebuah hospital mahu membeli mesin radioterapi kobalt-60. Syarat paling penting untuk diwajibkan?",p:["Bilik berdinding konkrit tebal dan pekerja memakai lencana dos","Mesin diletakkan di ruang menunggu supaya mudah dicapai","Pekerja tidak perlu latihan kerana mesin itu beroperasi secara automatik","Sumber kobalt dibuang ke tong sampah selepas tamat guna"],b:0,u:"Sumber gama yang kuat memerlukan perisai dan pemantauan dos."},
 {j:"banyak",t:"Pilih SEMUA langkah yang wajar bagi pekerja yang mengendalikan bahan radioaktif.",p:["Gunakan penyepit berpemegang panjang","Pakai lencana dos untuk memantau pendedahan","Simpan sumber dalam bekas plumbum","Pegang sumber dengan tangan supaya lebih cepat","Makan di dalam makmal untuk menjimatkan masa"],b:[0,1,2],u:"Jarak, perisai dan pemantauan mengurangkan dos. Makan di makmal berisiko menelan bahan radioaktif."},
 {j:"pilih",t:"Sesetengah pengguna menolak makanan yang diawet dengan sinar gama kerana takut makanan itu radioaktif. Nilaikan kebimbangan itu.",p:["Tidak berasas, kerana makanan itu tidak menjadi radioaktif","Berasas, kerana semua makanan yang diawet dengan sinaran bercahaya","Berasas, kerana sinar gama kekal dalam makanan","Tidak berasas, kerana sinar gama tidak wujud"],b:0,u:"Sinar gama melalui makanan dan tidak tertinggal di dalamnya."}],
 bos:{j:"pilih",t:"Sebuah negara menimbang pembinaan loji tenaga nuklear untuk mengurangkan pembakaran arang batu. Pertimbangan paling wajar sebelum keputusan dibuat?",p:["Timbang tenaga bersih dengan risiko kemalangan dan sisa","Bina segera kerana tenaga nuklear tiada risiko langsung","Tolak kerana semua bahan radioaktif tiada kegunaan","Pilih lokasi di zon gempa bumi kerana tanahnya murah"],b:0,u:"Kemalangan Chernobyl dan Fukushima menunjukkan pentingnya lokasi dan pengurusan risiko."}},

{n:6, tempat:"Pameran Sains", sk:"8.4 Mereka cipta untuk kesejahteraan hidup",
 kadNama:"Padi Mutan", kadEm:"\u{1F33E}", kadFakta:"Agensi Nuklear Malaysia menggunakan teknik mutasi sinaran untuk membangunkan varieti padi baharu.",
 bosKadNama:"Radon", bosKadEm:"\u{1F3E0}", bosKadFakta:"Radon ialah gas radioaktif semula jadi dari tanah dan batuan. Pengudaraan yang baik mengurangkannya di dalam rumah.",
 soalan:[
 {j:"pilih",t:"Awak mereka poster untuk mendidik penduduk tentang gas radon di rumah. Mesej paling berkesan?",p:["Buka tingkap untuk pengudaraan dan uji paras radon jika risau","Pindah rumah serta-merta jika tinggal di kawasan berbatu","Radon tidak wujud, jadi tiada tindakan diperlukan","Tutup semua tingkap rapat-rapat supaya gas radon tidak dapat masuk"],b:0,u:"Radon datang dari tanah di bawah rumah, jadi menutup tingkap memerangkapnya di dalam."},
 {j:"pilih",t:"Awak membina model kebuk awan untuk pameran. Apakah tujuan utamanya?",p:["Menunjukkan runut yang dihasilkan oleh sinaran","Menghasilkan hujan buatan di dalam kelas","Menyimpan bahan radioaktif dengan selamat","Mengukur separuh hayat dengan tepat"],b:0,u:"Sinaran tidak kelihatan, tetapi runutnya dalam kebuk awan boleh dilihat."},
 {j:"pilih",t:"Pameran awak akan dilawati kanak-kanak. Langkah keselamatan paling penting?",p:["Guna gambar dan model, bukan sumber radioaktif sebenar","Benarkan kanak-kanak memegang sumber radioaktif sebentar sahaja","Letakkan sumber radioaktif di atas meja terbuka","Tiada langkah diperlukan kerana pameran singkat"],b:0,u:"Konsep boleh diajar tanpa mendedahkan pengunjung kepada sinaran."},
 {j:"pilih",t:"Awak mereka kempen tentang kegunaan radioisotop dalam pertanian. Contoh yang paling tepat?",p:["Menghasilkan varieti padi baharu melalui mutasi","Menjadikan buah-buahan bercahaya pada waktu malam","Menggantikan semua baja dengan bahan radioaktif","Menyiram tanaman dengan air radioaktif setiap hari"],b:0,u:"Sinaran mengubah bahan genetik benih dan menghasilkan varieti yang boleh dipilih."},
 {j:"pilih",t:"Bajet pameran terhad. Cara paling kreatif untuk menunjukkan konsep separuh hayat?",p:["Simulasi dengan melambung 100 syiling berulang kali","Beli sumber radioaktif sebenar dari luar negara","Tulis definisi separuh hayat pada kad besar","Tunjukkan video tanpa sebarang aktiviti"],b:0,u:"Kira-kira separuh syiling dibuang setiap pusingan, sama seperti separuh nukleus mereput setiap separuh hayat."},
 {j:"pilih",t:"Bagaimanakah awak menilai sama ada pameran berjaya meningkatkan kefahaman pengunjung?",p:["Beri kuiz ringkas sebelum dan selepas lawatan","Kira bilangan gambar yang diambil pengunjung","Tanya pengunjung sama ada poster cantik","Lihat berapa lama pengunjung berdiri"],b:0,u:"Perbandingan sebelum dan selepas menunjukkan perubahan kefahaman."},
 {j:"pilih",t:"Penduduk berhampiran sebuah kilang nadir bumi bimbang tentang sisa radioaktif. Pendekatan komunikasi paling wajar?",p:["Kongsi data pemantauan secara terbuka kepada penduduk","Rahsiakan maklumat supaya penduduk tidak panik","Ejek kebimbangan penduduk sebagai tidak saintifik dan tidak berasas","Minta penduduk berpindah tanpa penjelasan"],b:0,u:"Ketelusan membina kepercayaan dan membolehkan penduduk menilai sendiri risikonya."},
 {j:"pilih",t:"Awak mahu menerangkan sinaran mengion kepada warga emas yang tidak biasa dengan istilah sains. Cara paling sesuai?",p:["Guna analogi mudah dan contoh seperti X-ray di klinik","Guna istilah teknikal sahaja supaya kelihatan pakar","Beri buku teks universiti untuk dibaca sendiri","Elakkan terus topik itu kerana terlalu sukar difahami"],b:0,u:"Mesej yang baik disesuaikan dengan pendengarnya."}],
 bos:{j:"buka",
  t:"Kampung awak terletak berhampiran tapak cadangan sebuah kemudahan yang menggunakan bahan radioaktif. Penduduk keliru antara maklumat benar dan khabar angin. Reka satu program untuk membantu penduduk membuat keputusan berdasarkan fakta.",
  arahan:"Terangkan konsep sains yang perlu difahami penduduk (jenis sinaran, dos selamat dan separuh hayat), aktiviti atau bahan yang akan digunakan, langkah keselamatan yang patut dituntut daripada pengendali, dan bagaimana awak mengambil kira budaya, bahasa serta kebimbangan masyarakat.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta sinaran yang tepat, merancang aktiviti yang sesuai dengan penduduk, dan menekankan ketelusan serta keselamatan."}}
];

module.exports = {
  id:"t3b8", tingkatan:3, kod:"8.0 Keradioaktifan",
  tajuk:"Laluan Sinaran",
  subtajuk:"Sains Ting. 3 · Bab 8 Keradioaktifan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali tokoh penemuan keradioaktifan, struktur atom dan jenis sinaran mengion. Langkah seterusnya ialah menerangkan perbezaan sifat sinaran alfa, beta dan gama.",
   2:"{n} memahami pembentukan ion serta perbezaan kuasa pengionan dan penembusan sinaran alfa, beta dan gama. Perlu lebih banyak latihan mentafsir data pereputan sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan konsep separuh hayat untuk mentafsir data pereputan dan menerangkan kegunaan sinaran dalam perubatan, industri dan pengawetan makanan. Galakkan mengaitkan jenis sinaran dengan kegunaannya.",
   4:"{n} mampu menganalisis data penembusan untuk mengenal pasti jenis sinaran dan memilih penghadang yang sesuai. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai risiko pendedahan sinaran berdasarkan data kadar dos dan membuat keputusan yang wajar tentang pengendalian bahan dan sisa radioaktif. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka program atau bahan pendidikan tentang keradioaktifan yang tepat, selamat dan sesuai dengan masyarakat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Keradioaktifan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ reput:T_REPUT, tembus:T_TEMBUS, dos:T_DOS },
  aras:ARAS
};
