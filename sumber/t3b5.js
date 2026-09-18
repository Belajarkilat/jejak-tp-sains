/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 5.0 Termokimia.
   Jalankan `node bina.js t3b5` untuk menyemak dan menghasilkan bank-t3b5.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 67.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai termokimia.",
"Memahami termokimia serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai termokimia dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai termokimia dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai termokimia dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai termokimia dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_SUHU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Eksperimen</th><th>Bahan yang dicampurkan</th>'+
'<th class="n">Suhu awal (&deg;C)</th><th class="n">Suhu akhir (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>P</td><td>Natrium hidroksida pepejal + air</td><td class="n">29.0</td><td class="n">38.5</td></tr>'+
'<tr><td>Q</td><td>Ammonium nitrat + air</td><td class="n">29.0</td><td class="n">21.0</td></tr>'+
'<tr><td>R</td><td>Asid hidroklorik + larutan natrium hidroksida</td><td class="n">29.0</td><td class="n">35.5</td></tr>'+
'<tr><td>S</td><td>Soda penaik + larutan asid sitrik</td><td class="n">29.0</td><td class="n">25.5</td></tr>'+
'<tr><td>T</td><td>Kalsium oksida + air</td><td class="n">29.0</td><td class="n">45.0</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap eksperimen dijalankan dalam cawan polistirena dengan 50 ml air atau larutan. Data rekaan untuk latihan.</p>';

const T_PEK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Pek</th><th class="n">Ammonium nitrat (g)</th>'+
'<th class="n">Air (ml)</th><th class="n">Suhu terendah (&deg;C)</th><th class="n">Minit di bawah 15 &deg;C</th></tr></thead><tbody>'+
'<tr><td>A</td><td class="n">20</td><td class="n">100</td><td class="n">20</td><td class="n">0</td></tr>'+
'<tr><td>B</td><td class="n">40</td><td class="n">100</td><td class="n">12</td><td class="n">8</td></tr>'+
'<tr><td>C</td><td class="n">60</td><td class="n">100</td><td class="n">6</td><td class="n">15</td></tr>'+
'<tr><td>D</td><td class="n">60</td><td class="n">200</td><td class="n">13</td><td class="n">10</td></tr>'+
'</tbody></table></div><p class="qnote">Semua pek diuji pada suhu bilik 29 &deg;C. Data rekaan untuk latihan.</p>';

const T_PRODUK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Produk</th><th>Bahan aktif</th>'+
'<th>Perubahan haba</th><th class="n">Suhu (&deg;C)</th><th>Tempoh</th><th>Guna semula</th><th class="n">Harga (RM)</th></tr></thead><tbody>'+
'<tr><td>V</td><td>Serbuk besi + garam, bertindak balas dengan oksigen udara</td><td>Eksotermik</td><td class="n">55</td><td>6 jam</td><td>Tidak</td><td class="n">3</td></tr>'+
'<tr><td>W</td><td>Natrium asetat, menghablur apabila diaktifkan</td><td>Eksotermik</td><td class="n">54</td><td>30 minit</td><td>Ya, direbus</td><td class="n">15</td></tr>'+
'<tr><td>X</td><td>Kalsium klorida + air</td><td>Eksotermik</td><td class="n">70</td><td>20 minit</td><td>Tidak</td><td class="n">4</td></tr>'+
'<tr><td>Y</td><td>Ammonium nitrat + air</td><td>Endotermik</td><td class="n">3</td><td>20 minit</td><td>Tidak</td><td class="n">5</td></tr>'+
'<tr><td>Z</td><td>Gel air, disejukkan dalam peti sejuk</td><td>Tiada tindak balas</td><td class="n">5</td><td>20 minit</td><td>Ya, disejukkan semula</td><td class="n">12</td></tr>'+
'</tbody></table></div><p class="qnote">Suhu ialah suhu tertinggi atau terendah pada permukaan pek. Kulit boleh melecur jika bersentuhan lama dengan permukaan melebihi kira-kira 45 &deg;C. Data rekaan untuk latihan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Termometer", sk:"5.1 Tindak balas endotermik dan eksotermik",
 kadNama:"Api Unggun", kadEm:"\u{1F525}", kadFakta:"Pembakaran kayu ialah tindak balas eksotermik. Haba yang dibebaskan memanaskan kayu seterusnya supaya api terus menyala.",
 bosKadNama:"Fotosintesis", bosKadEm:"\u{1F33F}", bosKadFakta:"Fotosintesis ialah proses endotermik yang menyerap tenaga cahaya untuk menghasilkan glukosa.",
 soalan:[
 {j:"pilih",t:"Tindak balas eksotermik ialah tindak balas yang:",p:["Membebaskan haba ke persekitaran","Menyerap haba dari persekitaran","Tidak melibatkan sebarang haba","Hanya berlaku pada suhu yang tinggi"],b:0,u:"Ekso bermaksud keluar. Haba keluar ke persekitaran."},
 {j:"pilih",t:"Tindak balas endotermik ialah tindak balas yang:",p:["Menyerap haba dari persekitaran","Membebaskan haba ke persekitaran","Menghasilkan nyalaan api yang terang","Hanya berlaku di dalam badan hidupan"],b:0,u:"Endo bermaksud ke dalam. Haba diserap masuk daripada persekitaran."},
 {j:"pilih",t:"Apakah yang berlaku kepada bacaan termometer semasa tindak balas eksotermik?",p:["Bacaan meningkat","Bacaan menurun","Bacaan tidak berubah","Bacaan naik kemudian menjadi sifar"],b:0,u:"Haba yang dibebaskan menaikkan suhu campuran."},
 {j:"pilih",t:"Contoh tindak balas eksotermik ialah:",p:["Pembakaran kertas","Fotosintesis","Membuat kek","Penguraian batu kapur"],b:0,u:"Pembakaran membebaskan haba dan cahaya."},
 {j:"pilih",t:"Contoh tindak balas endotermik ialah:",p:["Fotosintesis","Respirasi","Letupan bom","Pembakaran kayu"],b:0,u:"Fotosintesis menyerap tenaga cahaya matahari."},
 {j:"banyak",t:"Pilih SEMUA tindak balas eksotermik.",p:["Respirasi sel","Letupan bunga api","Pembakaran petrol dalam enjin","Fotosintesis dalam daun","Penguraian terma kalsium karbonat"],b:[0,1,2],u:"Fotosintesis dan penguraian terma perlu menyerap tenaga untuk berlaku."},
 {j:"pilih",t:"Fotosintesis dikelaskan sebagai proses endotermik kerana ia:",p:["Menyerap tenaga cahaya matahari","Membebaskan oksigen ke udara","Menghasilkan glukosa yang manis","Berlaku di dalam kloroplas"],b:0,u:"Tanpa tenaga yang diserap, fotosintesis tidak dapat berlaku."},
 {j:"pilih",t:"Keseimbangan terma tercapai apabila:",p:["Dua objek yang bersentuhan mencapai suhu yang sama","Objek panas terus menjadi lebih panas","Haba terus mengalir dari objek sejuk ke objek panas","Kedua-dua objek kehilangan semua haba"],b:0,u:"Pada keseimbangan terma, tiada lagi pengaliran haba bersih antara kedua-dua objek."}],
 bos:{j:"pilih",t:"Seorang murid memegang bikar semasa tindak balas berlaku dan mendapati bikar itu menjadi sejuk. Tindak balas itu ialah:",p:["Endotermik, kerana haba diserap daripada tangannya","Eksotermik, kerana haba dibebaskan ke tangannya","Endotermik, kerana haba dibebaskan ke tangannya","Eksotermik, kerana haba diserap daripada tangannya"],b:0,u:"Rasa sejuk bermakna haba sedang mengalir keluar dari tangan ke dalam bikar."}},

{n:2, tempat:"Keseimbangan Terma", sk:"5.1 Menghubungkait haba dengan jenis tindak balas",
 kadNama:"Keseimbangan Terma", kadEm:"\u{2696}", kadFakta:"Haba sentiasa mengalir dari objek panas ke objek sejuk sehingga suhu kedua-duanya sama.",
 bosKadNama:"Kapur Tohor", bosKadEm:"\u{1F9F1}", bosKadFakta:"Kapur tohor (kalsium oksida) menjadi sangat panas apabila terkena air, jadi ia mesti disimpan di tempat kering.",
 soalan:[
 {j:"pilih",t:"Mengapakah bacaan termometer naik semasa tindak balas eksotermik?",p:["Haba yang dibebaskan diserap oleh larutan dan termometer","Termometer menghasilkan haba apabila menyentuh bahan kimia","Bahan tindak balas menyerap haba daripada termometer","Merkuri dalam termometer bertindak balas dengan larutan"],b:0,u:"Termometer menunjukkan suhu larutan yang menerima haba."},
 {j:"pilih",t:"Mengapakah tangan terasa sejuk apabila memegang bekas berisi tindak balas endotermik?",p:["Haba mengalir dari tangan ke bekas yang lebih sejuk","Tenaga sejuk mengalir keluar dari bekas ke dalam tangan","Tangan membebaskan air yang menyejat dengan cepat","Bekas itu menghasilkan ais yang sangat halus"],b:0,u:"Sejuk bukan sesuatu yang mengalir. Yang mengalir ialah haba, dan ia keluar dari tangan."},
 {j:"pilih",t:"Respirasi sel ialah tindak balas eksotermik. Apakah buktinya dalam kehidupan harian?",p:["Badan menjadi panas semasa bersenam","Badan menjadi sejuk semasa tidur","Kulit menjadi kering pada waktu panas","Nafas menjadi berwap pada waktu pagi"],b:0,u:"Semasa bersenam kadar respirasi meningkat, jadi lebih banyak haba dibebaskan."},
 {j:"pilih",t:"Apakah persamaan antara tindak balas eksotermik dan endotermik?",p:["Kedua-duanya melibatkan perubahan haba","Kedua-duanya meningkatkan suhu persekitaran","Kedua-duanya menurunkan suhu persekitaran","Kedua-duanya tidak melibatkan tenaga"],b:0,u:"Perbezaannya hanyalah arah pengaliran haba."},
 {j:"pilih",t:"Semasa kek dibakar di dalam ketuhar, adunan menyerap haba dan bertukar menjadi kek. Mengapakah proses ini endotermik?",p:["Adunan perlu terus menyerap haba untuk berubah","Kek membebaskan haba ke dalam ketuhar semasa dimasak","Ketuhar menjadi lebih panas selepas kek siap dibakar","Adunan kek mengandungi gula yang membebaskan haba"],b:0,u:"Jika ketuhar dimatikan, perubahan itu berhenti kerana tiada lagi haba diserap."},
 {j:"pilih",t:"Mengapakah sebatang mancis yang dinyalakan terus terbakar sehingga habis?",p:["Haba yang dibebaskan memanaskan bahagian kayu seterusnya","Kayu mancis menyerap haba dari udara sekeliling secara berterusan","Oksigen menyejukkan kayu supaya ia tidak padam","Api mancis tidak memerlukan bahan api untuk menyala"],b:0,u:"Tindak balas eksotermik boleh membekalkan haba untuk dirinya sendiri."},
 {j:"susun",t:"Susun langkah eksperimen untuk menentukan sama ada sesuatu tindak balas eksotermik atau endotermik.",p:["Sukat isi padu air dalam cawan polistirena","Catat suhu awal air","Masukkan bahan dan kacau","Catat suhu tertinggi atau terendah","Bandingkan suhu akhir dengan suhu awal"],b:[0,1,2,3,4],u:"Suhu awal mesti dicatat sebelum bahan dimasukkan supaya perubahannya dapat dikira."},
 {j:"pilih",t:"Apabila kalsium oksida (kapur tohor) ditambah kepada air, campuran menjadi sangat panas. Tindak balas ini ialah:",p:["Eksotermik","Endotermik","Tiada perubahan haba","Bukan tindak balas kimia"],b:0,u:"Kenaikan suhu menunjukkan haba dibebaskan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BETUL tentang tindak balas endotermik.",p:["Suhu campuran menurun","Haba diserap dari persekitaran","Fotosintesis ialah contohnya","Haba dibebaskan ke persekitaran","Bekas terasa panas apabila dipegang"],b:[0,1,2],u:"Dua pernyataan terakhir menerangkan tindak balas eksotermik."}},

{n:3, tempat:"Makmal Suhu", sk:"5.1 Membanding tindak balas melalui eksperimen", lampiran:"suhu",
 kadNama:"Tin Swa-Panas", kadEm:"\u{1F96B}", kadFakta:"Sesetengah tin makanan boleh memanaskan dirinya sendiri menggunakan tindak balas kalsium oksida dengan air.",
 bosKadNama:"Pek Sejuk", bosKadEm:"\u{1F9CA}", bosKadFakta:"Pek sejuk segera menjadi sejuk apabila ammonium nitrat di dalamnya larut dalam air.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, eksperimen manakah menunjukkan perubahan endotermik?",p:["Q dan S","P dan R","P, R dan T","Q, R dan S"],b:0,u:"Suhu akhir Q dan S lebih rendah daripada suhu awal."},
 {j:"nombor",t:"Berapakah perubahan suhu dalam Eksperimen T, dalam °C?",b:16,tol:0.05,suf:"°C",u:"45.0 tolak 29.0 bersamaan 16.0 °C."},
 {j:"pilih",t:"Eksperimen manakah menunjukkan kenaikan suhu paling besar?",p:["T","P","R","Q"],b:0,u:"Suhu dalam Eksperimen T naik sebanyak 16.0 °C."},
 {j:"pilih",t:"Bahan manakah paling sesuai untuk pek sejuk segera bagi merawat kecederaan sukan?",p:["Ammonium nitrat","Natrium hidroksida","Kalsium oksida","Asid hidroklorik"],b:0,u:"Hanya ammonium nitrat menurunkan suhu. Natrium hidroksida dan asid hidroklorik juga mengakis."},
 {j:"pilih",t:"Tin makanan swa-panas ada ruang berisi kalsium oksida dan air yang diasingkan. Apabila butang ditekan, kedua-duanya bercampur. Mengapa makanan menjadi panas?",p:["Tindak balas eksotermik membebaskan haba ke makanan","Tindak balas endotermik menyerap haba daripada makanan","Butang itu menyalakan api kecil di dasar tin","Air itu sudah dipanaskan sebelum tin dijual"],b:0,u:"Eksperimen T menunjukkan kalsium oksida dan air membebaskan banyak haba."},
 {j:"pilih",t:"Gula-gula serbuk yang mengandungi soda penaik dan asid sitrik terasa sejuk di lidah. Mengapa?",p:["Tindak balasnya menyerap haba dari lidah","Tindak balasnya membebaskan haba ke lidah","Serbuk itu disimpan di dalam peti sejuk","Gula dalam serbuk itu bersifat sejuk"],b:0,u:"Eksperimen S menunjukkan campuran ini menurunkan suhu."},
 {j:"pilih",t:"Seorang murid mahu membuktikan bahawa Eksperimen Q endotermik. Apakah pemboleh ubah bergerak balasnya?",p:["Perubahan suhu campuran","Jisim ammonium nitrat yang digunakan","Isi padu air","Jenis bekas"],b:0,u:"Pemboleh ubah bergerak balas ialah apa yang diukur untuk melihat kesannya."},
 {j:"pilih",t:"Mengapakah cawan polistirena lebih sesuai daripada bikar kaca untuk eksperimen ini?",p:["Polistirena mengurangkan haba yang hilang atau diserap dari luar","Polistirena bertindak balas dengan bahan kimia untuk menambah haba","Kaca akan cair apabila bersentuhan dengan larutan yang panas","Polistirena menjadikan bacaan termometer lebih cepat berubah"],b:0,u:"Polistirena ialah penebat haba, jadi perubahan suhu lebih tepat mewakili tindak balas itu."}],
 bos:{j:"pilih",t:"Jika jisim natrium hidroksida dalam Eksperimen P digandakan tetapi isi padu air kekal sama, ramalkan suhu akhirnya.",p:["Lebih tinggi daripada 38.5 °C","Sama dengan 38.5 °C","Lebih rendah daripada 38.5 °C","Kembali kepada 29.0 °C"],b:0,u:"Lebih banyak bahan membebaskan lebih banyak haba ke dalam jumlah air yang sama."}},

{n:4, tempat:"Pek Sejuk", sk:"5.1 Menganalisis perubahan haba", lampiran:"pek",
 kadNama:"Tuaman Sejuk", kadEm:"\u{1F9B6}", kadFakta:"Pek sejuk pada tempat kecederaan membantu menyempitkan salur darah dan mengurangkan bengkak.",
 bosKadNama:"Termometer Digital", bosKadEm:"\u{1F321}", bosKadFakta:"Termometer digital boleh menunjukkan perubahan suhu sekecil 0.1 °C dalam eksperimen termokimia.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Pek A, B dan C, apakah hubungan antara jisim ammonium nitrat dengan suhu terendah?",p:["Semakin banyak jisim, semakin rendah suhu terendah","Semakin banyak jisim, semakin tinggi suhu terendah","Jisim tidak mempengaruhi suhu terendah","Suhu terendah hanya bergantung pada suhu bilik"],b:0,u:"Suhu terendah turun dari 20 °C kepada 6 °C apabila jisim bertambah."},
 {j:"pilih",t:"Mengapakah Pek D kurang sejuk berbanding Pek C walaupun jisim ammonium nitratnya sama?",p:["Haba diserap daripada isi padu air yang lebih besar","Pek D mengandungi kurang ammonium nitrat berbanding Pek C","Air yang lebih banyak membebaskan haba ke dalam pek","Pek D disimpan di tempat yang lebih panas"],b:0,u:"Jumlah haba yang diserap sama, tetapi ia diambil daripada dua kali ganda air, jadi setiap mililiter air kurang menyejuk."},
 {j:"pilih",t:"Pemboleh ubah dimanipulasi bagi perbandingan Pek A, B dan C ialah:",p:["Jisim ammonium nitrat","Suhu terendah yang dicatat","Isi padu air yang digunakan","Tempoh pek kekal sejuk"],b:0,u:"Isi padu air dimalarkan pada 100 ml dalam ketiga-tiga pek itu."},
 {j:"pilih",t:"Pengeluar mahu pek yang kekal di bawah 15 °C sekurang-kurangnya 10 minit, dan pek itu mesti seringan mungkin. Pilihan terbaik?",p:["Pek C","Pek D","Pek B","Pek A"],b:0,u:"Pek B dan A gagal syarat 10 minit. Pek D lulus tetapi membawa 100 ml air tambahan."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Lebih banyak bahan terlarut menghasilkan suhu lebih rendah","Menambah air mengurangkan penurunan suhu","Pek A tidak sesuai untuk tuaman sejuk","Ammonium nitrat membebaskan haba apabila larut","Pek D paling lama sejuk antara semua pek"],b:[0,1,2],u:"Ammonium nitrat menyerap haba, dan Pek C yang paling lama sejuk, iaitu 15 minit."},
 {j:"pilih",t:"Seorang murid mencadangkan air suam digunakan dalam pek sejuk supaya ammonium nitrat larut lebih cepat. Analisis cadangan itu.",p:["Kurang sesuai, kerana suhu awal tinggi menjadikan pek kurang sejuk","Sesuai, kerana pek akan menjadi lebih sejuk daripada biasa","Sesuai, kerana air suam menyerap lebih banyak haba","Kurang sesuai, kerana ammonium nitrat tidak larut dalam air suam"],b:0,u:"Penurunan suhu bermula dari suhu yang lebih tinggi, jadi suhu terendah juga lebih tinggi."},
 {j:"pilih",t:"Mengapakah suhu Pek C akhirnya naik semula ke suhu bilik?",p:["Haba dari persekitaran mengalir masuk hingga suhu seimbang","Ammonium nitrat mula membebaskan haba selepas 15 minit berlalu","Air di dalam pek menyejat dan membawa sejuk keluar","Pek itu bocor dan semua bahannya mengalir keluar"],b:0,u:"Selepas tindak balas tamat, pek menerima haba dari persekitaran sehingga keseimbangan terma tercapai."},
 {j:"pilih",t:"Seorang atlet terseliuh buku lali. Mengapakah pek sejuk sesuai digunakan pada beberapa minit pertama?",p:["Suhu rendah menyempitkan salur darah dan mengurangkan bengkak","Suhu rendah membekukan darah supaya luka cepat sembuh","Suhu rendah membunuh semua kuman di tempat kecederaan","Suhu rendah menguatkan otot supaya atlet boleh terus bermain segera"],b:0,u:"Kurang darah mengalir ke tempat cedera, jadi bengkak dan sakit berkurang."}],
 bos:{j:"pilih",t:"Pek E mengandungi 80 g ammonium nitrat dalam 100 ml air. Ramalan paling munasabah?",p:["Lebih sejuk dan lebih lama sejuk daripada Pek C","Suhu terendah sama dengan Pek C kerana air sama","Suhu terendah lebih tinggi daripada Pek B","Pek E membebaskan haba kerana terlalu banyak bahan"],b:0,u:"Corak Pek A hingga C menunjukkan lebih banyak bahan menyerap lebih banyak haba daripada air yang sama."}},

{n:5, tempat:"Kedai Farmasi", sk:"5.1 Menilai produk berasaskan tindak balas", lampiran:"produk",
 kadNama:"Kalsium Klorida", kadEm:"\u{1F9C2}", kadFakta:"Kalsium klorida membebaskan haba apabila larut dalam air, dan ia juga ditabur di jalan raya negara bersalji untuk mencairkan ais.",
 bosKadNama:"Pek Panas Besi", bosKadEm:"\u{1F9E4}", bosKadFakta:"Pek pemanas tangan sekali guna menjadi panas apabila serbuk besi di dalamnya bergabung dengan oksigen.",
 soalan:[
 {j:"pilih",t:"Seorang atlet terseliuh di padang yang jauh dari peti sejuk. Berdasarkan jadual, produk paling sesuai untuk tuaman sejuk segera?",p:["Y, kerana tindak balas endotermiknya menyejuk tanpa peti sejuk","Z, kerana gel air lebih sejuk daripada mana-mana pek kimia","X, kerana kalsium klorida menyejukkan kulit dengan cepat","W, kerana ia boleh digunakan semula berulang kali"],b:0,u:"Pek Y menyerap haba apabila ammonium nitrat larut. Gel Z hanya sejuk jika sudah disimpan dalam peti sejuk, dan X serta W membebaskan haba."},
 {j:"pilih",t:"Pek X mencapai 70 °C. Nilaikan kesesuaiannya untuk diletakkan terus pada kulit bagi melegakan kekejangan otot.",p:["Tidak sesuai, kerana suhunya jauh melebihi 45 °C","Sesuai, kerana suhu lebih tinggi melegakan otot dengan lebih cepat","Sesuai, kerana tindak balas eksotermik membebaskan haba ke udara sahaja","Tidak sesuai, kerana kalsium klorida menyerap haba daripada kulit"],b:0,u:"Catatan jadual menyatakan kulit boleh melecur melebihi kira-kira 45 °C. Pek X eksotermik, jadi ia membebaskan haba ke kulit, bukan menyerapnya."},
 {j:"pilih",t:"Seorang pendaki gunung memerlukan kehangatan tangan sepanjang malam tanpa dapur. Produk paling wajar?",p:["V","W, kerana ia boleh digunakan semula sepanjang pendakian","X, kerana suhunya paling tinggi antara semua produk","Z, kerana gel air menyimpan haba dengan sangat baik"],b:0,u:"Pek V kekal panas selama 6 jam. Pek W perlu direbus untuk digunakan semula, dan pek X hanya bertahan 20 minit."},
 {j:"pilih",t:"Seorang pengguna mendakwa pek V \"menghasilkan haba tanpa tindak balas kimia\". Nilaikan dakwaan itu.",p:["Salah, kerana besi bergabung dengan oksigen dan membebaskan haba","Betul, kerana haba datang daripada geseran semasa pek digoncang","Betul, kerana garam dalam pek itu menyimpan haba dari kilang","Salah, kerana besi menyerap haba daripada udara di sekelilingnya"],b:0,u:"Pengoksidaan besi ialah tindak balas eksotermik. Garam hanya mempercepatkan tindak balas itu."},
 {j:"pilih",t:"Mengapakah pek V hanya mula panas selepas pembalut kedap udaranya dibuka?",p:["Oksigen udara diperlukan untuk tindak balas","Cahaya matahari diperlukan untuk memulakan tindak balas","Pembalut itu menyerap semua haba yang dibebaskan","Wap air dalam pembalut menyejukkan serbuk besi"],b:0,u:"Tanpa oksigen, besi tidak dapat bertindak balas. Sebab itu pembalutnya kedap udara sehingga digunakan."},
 {j:"pilih",t:"Sebuah syarikat mahu mengurangkan sampah daripada pek panas. Pilihan paling wajar antara V dan W?",p:["W, kerana hablurnya boleh dilarutkan semula dengan merebus pek","V, kerana serbuk besi terurai menjadi baja selepas digunakan","W, kerana ia langsung tidak melibatkan perubahan haba","V, kerana pek sekali guna tidak perlu dibersihkan"],b:0,u:"Merebus pek W melarutkan semula hablur natrium asetat, jadi satu pek menggantikan banyak pek sekali guna. Pek W tetap eksotermik semasa menghablur."},
 {j:"banyak",t:"Pilih SEMUA ciri yang wajar dinilai sebelum memilih pek panas atau pek sejuk untuk kanak-kanak.",p:["Suhu permukaan tidak melecurkan atau membekukan kulit","Bahan di dalamnya tidak berbahaya jika pek bocor","Pembalut tahan lasak dan tidak mudah koyak","Pek panas sepanas mungkin supaya cepat berkesan","Bahan kimia yang paling reaktif supaya cepat bertindak"],b:[0,1,2],u:"Kulit kanak-kanak lebih nipis dan mudah cedera. Bahan yang paling reaktif selalunya juga paling berbahaya jika bocor."},
 {j:"pilih",t:"Sebuah pasukan menguji pek Y di bilik berhawa dingin dan pek Z di luar bangunan, lalu menyimpulkan Y lebih sejuk. Nilaikan kesimpulan itu.",p:["Tidak adil, kerana suhu persekitaran yang berbeza mempengaruhi bacaan","Adil, kerana kedua-dua pek diuji dalam tempoh 20 minit yang sama","Adil, kerana pek Y memang melibatkan tindak balas endotermik","Tidak adil, kerana pek Z tidak melibatkan sebarang tindak balas kimia"],b:0,u:"Haba mengalir dari persekitaran ke dalam pek. Persekitaran yang lebih panas menjadikan pek Z kelihatan kurang sejuk walaupun ia sama baik."}],
 bos:{j:"pilih",t:"Klinik desa tanpa peti sejuk perlu merawat kecederaan baharu dan kekejangan otot semasa kejohanan. Gabungan produk paling wajar?",p:["Y untuk kecederaan baharu, V untuk kekejangan, dibalut kain","X untuk kecederaan baharu kerana ia bertindak balas paling cepat","Z untuk kedua-dua keadaan kerana ia boleh digunakan semula","W untuk kecederaan baharu kerana hablurnya menyerap haba dari kulit"],b:0,u:"Kecederaan baharu memerlukan sejuk dan kekejangan memerlukan haba. Tanpa peti sejuk, gel Z tidak dapat disejukkan, dan W serta X membebaskan haba."}},

{n:6, tempat:"Bengkel Reka Cipta", sk:"5.1 Mereka bentuk bahan berasaskan termokimia",
 kadNama:"Pek Sejuk Segera", kadEm:"\u{1F9CA}", kadFakta:"Dalam pek sejuk segera, ammonium nitrat dipisahkan daripada air oleh uncang nipis yang pecah apabila pek dipicit, lalu tindak balas endotermik bermula.",
 bosKadNama:"Pek Natrium Asetat", bosKadEm:"\u{2668}", bosKadFakta:"Pek natrium asetat menjadi panas apabila hablur terbentuk di dalamnya, dan boleh digunakan semula selepas direbus.",
 soalan:[
 {j:"pilih",t:"Awak mereka bentuk pek panas untuk melegakan kekejangan otot atlet. Ciri paling penting?",p:["Cukup panas tetapi tidak melebihi paras yang melecurkan kulit","Sepanas mungkin supaya tindak balas cepat tamat dan pek cepat dibuang","Tindak balasnya endotermik supaya otot menyerap lebih banyak haba","Kedap udara sepenuhnya walaupun bahan aktifnya ialah serbuk besi"],b:0,u:"Pek yang melecurkan kulit mencederakan pengguna. Serbuk besi memerlukan oksigen, jadi pek kedap udara sepenuhnya tidak akan panas."},
 {j:"pilih",t:"Pek panas awak terlalu panas dalam ujian pertama. Pengubahsuaian paling wajar?",p:["Kurangkan jisim bahan atau tambah lapisan kain penebat","Tambah lebih banyak bahan supaya tindak balas lebih cepat tamat","Campurkan sedikit ammonium nitrat supaya suhu turun sedikit","Buang pembalut supaya haba lebih cepat keluar ke kulit"],b:0,u:"Kurang bahan membebaskan kurang haba, dan kain memperlahankan pengaliran haba. Mencampurkan bahan kimia lain tanpa ujian boleh berbahaya."},
 {j:"pilih",t:"Awak mereka tin minuman swa-sejuk. Bahan manakah sesuai diletakkan dalam ruang berasingan di dasar tin?",p:["Ammonium nitrat dan air yang bercampur apabila butang ditekan","Kalsium oksida dan air yang bercampur apabila butang ditekan","Serbuk besi yang terdedah kepada udara apabila tin dibuka","Kalsium klorida kering yang menyerap haba daripada minuman"],b:0,u:"Pelarutan ammonium nitrat menyerap haba. Kalsium oksida, serbuk besi dan kalsium klorida semuanya membebaskan haba."},
 {j:"pilih",t:"Tin makanan swa-panas awak menggunakan kalsium oksida dan air, tetapi makanan di bahagian atas masih sejuk. Pengubahsuaian paling wajar?",p:["Tambah kalsium oksida dan besarkan permukaan sentuhan dengan makanan","Tukar kepada ammonium nitrat supaya lebih banyak haba terhasil","Simpan tin dalam peti sejuk dahulu supaya perbezaan suhu lebih besar","Buka penutup semasa memanaskan supaya haba mengalir ke atas"],b:0,u:"Lebih banyak bahan membebaskan lebih banyak haba, dan permukaan sentuhan yang besar memudahkan haba mengalir ke makanan."},
 {j:"pilih",t:"Awak mahu menguji sama ada jisim kalsium klorida mempengaruhi suhu pek panas. Reka bentuk eksperimen paling adil?",p:["Ubah jisim sahaja; isi padu dan suhu awal air dimalarkan","Ubah jisim dan isi padu air serentak supaya perbezaan lebih jelas","Gunakan air suam bagi jisim besar dan air sejuk bagi jisim kecil","Uji satu jisim sahaja tetapi ulang sepuluh kali"],b:0,u:"Hanya satu pemboleh ubah boleh diubah. Mengubah air serentak menjadikan kesan jisim tidak dapat dipisahkan."},
 {j:"pilih",t:"Pek sejuk rekaan awak menggunakan ammonium nitrat. Bagaimana pek terpakai patut diuruskan?",p:["Ikut arahan label, kerana ammonium nitrat menyuburkan alga di sungai","Buang ke longkang, kerana ammonium nitrat terurai menjadi air sahaja","Simpan pek terpakai kerana ia akan menjadi sejuk semula sendiri","Bakar pek terpakai supaya ammonium nitrat terurai dengan selamat"],b:0,u:"Ammonium nitrat ialah baja nitrogen yang menyebabkan alga membiak berlebihan di sungai. Ia juga berbahaya jika dipanaskan."},
 {j:"pilih",t:"Pek sejuk awak hanya kekal sejuk selama 5 minit. Pengubahsuaian paling berkesan?",p:["Tambah ammonium nitrat dan balut pek dengan lapisan penebat nipis","Gunakan air panas supaya ammonium nitrat larut dengan lebih cepat","Kurangkan ammonium nitrat supaya tindak balas berlaku lebih lama","Tukar kepada kalsium klorida kerana ia larut dengan lebih cepat"],b:0,u:"Lebih banyak bahan menyerap lebih banyak haba, dan penebat memperlahankan haba dari persekitaran. Air panas menaikkan suhu awal pek."},
 {j:"pilih",t:"Pek panas awak akan digunakan oleh warga emas yang kulitnya kurang peka. Pertimbangan paling penting?",p:["Hadkan suhu maksimum dan sertakan sarung kain","Pilih pek paling panas kerana kulit mereka kurang merasa haba","Gunakan pek sejuk sahaja kerana haba berbahaya kepada warga emas","Biarkan pengguna menentukan sendiri tempoh pek diletakkan"],b:0,u:"Kulit yang kurang peka tidak memberi amaran apabila terlalu panas, jadi had suhu perlu dibina ke dalam reka bentuk."}],
 bos:{j:"buka",
  t:"Pasukan bola sepak sekolah awak kerap mengalami kekejangan otot dan kecederaan semasa perlawanan di padang yang jauh dari kedai. Reka satu kit pek panas dan pek sejuk yang sesuai untuk mereka.",
  arahan:"Terangkan tindak balas eksotermik dan endotermik yang digunakan, bahan dan cara setiap pek diaktifkan, langkah keselamatan, dan bagaimana awak mengambil kira kos, sisa buangan serta kemudahan pengguna.",
  u:"Jawapan TP6 yang kukuh memadankan jenis tindak balas dengan kegunaan pek, menilai keselamatan bahan, dan mengambil kira kos serta sisa."}}
];

module.exports = {
  id:"t3b5", tingkatan:3, kod:"5.0 Termokimia",
  tajuk:"Laluan Haba",
  subtajuk:"Sains Ting. 3 · Bab 5 Termokimia",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali maksud tindak balas eksotermik dan endotermik serta menyatakan contohnya. Langkah seterusnya ialah menerangkan arah pengaliran haba dalam setiap tindak balas.",
   2:"{n} memahami perubahan haba dalam tindak balas eksotermik dan endotermik serta mengaitkannya dengan keseimbangan terma. Perlu lebih banyak latihan mentafsir data suhu sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan termokimia untuk mentafsir data eksperimen dan menerangkan kegunaan seperti pek sejuk dan tin swa-panas. Galakkan mengaitkan perubahan suhu dengan jenis tindak balas.",
   4:"{n} mampu menganalisis data pek sejuk untuk mengenal pasti hubungan antara pemboleh ubah dan membuat ramalan. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai produk pek panas dan pek sejuk berdasarkan jenis tindak balas, suhu, keselamatan dan kos, serta membuat keputusan yang wajar berdasarkan data. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka bentuk produk berasaskan tindak balas eksotermik dan endotermik yang selamat dan praktikal, dengan mengambil kira kos dan pengguna. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Termokimia. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ suhu:T_SUHU, pek:T_PEK, produk:T_PRODUK },
  aras:ARAS
};
