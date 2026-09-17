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

const T_BEKAS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bekas</th><th>Jenis</th>'+
'<th class="n">Ais tinggal selepas 3 jam (%)</th><th class="n">Harga (RM)</th><th>Catatan</th></tr></thead><tbody>'+
'<tr><td>P</td><td>Kotak polistirena tebal</td><td class="n">70</td><td class="n">18</td><td>Ringan tetapi mudah retak</td></tr>'+
'<tr><td>Q</td><td>Bekas plastik biasa</td><td class="n">35</td><td class="n">5</td><td>Tahan lasak</td></tr>'+
'<tr><td>R</td><td>Kelalang vakum</td><td class="n">85</td><td class="n">45</td><td>Dinding kaca dalaman boleh pecah</td></tr>'+
'<tr><td>S</td><td>Bekas plastik dibalut kain dan surat khabar</td><td class="n">60</td><td class="n">6</td><td>Menggunakan bahan terpakai</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap bekas diisi 1 kg ais dan disimpan di tempat yang sama. Data rekaan untuk latihan.</p>';

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

{n:5, tempat:"Bekas Penebat", sk:"5.1 Menilai bahan dan membuat keputusan", lampiran:"bekas",
 kadNama:"Kelalang Vakum", kadEm:"\u{1FAD9}", kadFakta:"Ruang vakum dalam kelalang menghalang pengaliran dan perolakan haba, manakala dinding berkilat mengurangkan sinaran.",
 bosKadNama:"Pek Panas Besi", bosKadEm:"\u{1F9E4}", bosKadFakta:"Pek pemanas tangan sekali guna menjadi panas apabila serbuk besi di dalamnya bergabung dengan oksigen.",
 soalan:[
 {j:"pilih",t:"Kantin sekolah perlu menyimpan ais untuk jualan petang dengan bajet yang kecil. Pilihan paling wajar?",p:["Bekas S, kerana murah dan ais masih banyak kekal","Bekas R, kerana ia mengekalkan ais paling banyak","Bekas Q, kerana harganya paling murah","Bekas P, kerana ia paling ringan untuk dibawa"],b:0,u:"Bekas S hanya RM1 lebih mahal daripada Q tetapi mengekalkan hampir dua kali ganda ais."},
 {j:"pilih",t:"Nilaikan dakwaan: \"Bekas R terbaik untuk semua kegunaan kerana ia menyimpan ais paling lama.\"",p:["Tidak tepat, kerana harga dan risiko pecah juga perlu dinilai","Tepat, kerana prestasi penebatan ialah satu-satunya ukuran penting","Tepat, kerana bekas yang mahal sentiasa lebih baik","Tidak tepat, kerana bekas R mengekalkan ais paling sedikit"],b:0,u:"Bekas terbaik bergantung pada kegunaan, bajet dan cara ia dikendalikan."},
 {j:"pilih",t:"Mengapakah Bekas S jauh lebih baik daripada Bekas Q walaupun kedua-duanya plastik?",p:["Lapisan kain memerangkap udara dan mengurangkan aliran haba","Kain dan surat khabar menghasilkan sejuk untuk ais itu","Surat khabar menyerap air daripada ais yang cair","Kain menjadikan bekas itu lebih berat dan stabil"],b:0,u:"Udara yang terperangkap ialah penebat haba yang baik."},
 {j:"pilih",t:"Sebuah syarikat mahu menjual pek panas untuk melegakan kekejangan otot. Pilihan: (X) pek serbuk besi sekali guna, (Y) pek natrium asetat boleh guna semula. Keputusan paling wajar untuk mengurangkan sampah?",p:["Y, kerana ia boleh dipulihkan dan digunakan berulang kali","X, kerana pek sekali guna lebih mesra alam sekitar","X, kerana serbuk besi tidak menghasilkan haba","Y, kerana ia tidak memerlukan sebarang tindak balas"],b:0,u:"Pek natrium asetat dipulihkan dengan merebusnya, jadi satu pek boleh menggantikan banyak pek sekali guna."},
 {j:"pilih",t:"Seorang pengguna mendakwa pek panas serbuk besi \"menghasilkan haba tanpa tindak balas kimia\". Nilaikan dakwaan itu.",p:["Salah, kerana besi bergabung dengan oksigen dan membebaskan haba","Betul, kerana haba datang daripada geseran semasa pek digoncang","Betul, kerana pek itu dipanaskan di kilang sebelum dijual","Salah, kerana haba datang daripada bateri kecil yang tersembunyi di dalam pek"],b:0,u:"Pek itu mula panas apabila pembalut kedap udaranya dibuka dan oksigen masuk."},
 {j:"pilih",t:"Pihak sekolah mahu mengurangkan penggunaan pek sejuk kimia sekali guna di bilik sukan. Keputusan paling wajar?",p:["Simpan pek gel boleh guna semula di dalam peti sejuk","Beli pek sejuk kimia dalam jumlah dua kali ganda","Hentikan rawatan sejuk bagi semua kecederaan","Minta murid membawa pek sejuk masing-masing"],b:0,u:"Pek gel boleh digunakan berulang kali selagi ada peti sejuk."},
 {j:"banyak",t:"Pilih SEMUA ciri yang wajar dinilai sebelum memilih pek panas untuk kanak-kanak.",p:["Suhu maksimum tidak melecurkan kulit","Bahan di dalamnya tidak beracun jika bocor","Pek tahan lasak dan tidak mudah koyak","Warna pek sama dengan jenama terkenal","Harganya paling mahal di pasaran"],b:[0,1,2],u:"Keselamatan pengguna lebih penting daripada rupa atau harga."},
 {j:"pilih",t:"Dua pasukan membina bekas penyimpan ais. Pasukan 1 menguji sekali, manakala Pasukan 2 menguji tiga kali dan mengambil purata. Dapatan pasukan manakah lebih boleh dipercayai?",p:["Pasukan 2, kerana ulangan mengurangkan kesan ralat","Pasukan 1, kerana ujian pertama paling tepat","Kedua-duanya sama kerana bekasnya sama jenis","Pasukan 1, kerana ais cair lebih cepat kali kedua"],b:0,u:"Satu bacaan yang tersilap tidak dapat dikesan tanpa ulangan."}],
 bos:{j:"pilih",t:"Klinik desa tanpa bekalan elektrik yang stabil perlu memastikan vaksin kekal sejuk semasa perjalanan selama 3 jam. Pilihan paling wajar?",p:["Bekas R dengan pek sejuk, dibalut kain supaya tidak pecah","Bekas Q kerana paling murah dibeli dalam jumlah besar","Bekas S kerana diperbuat daripada bahan terpakai","Bekas P tanpa pek sejuk kerana ia paling ringan"],b:0,u:"Vaksin yang rosak jauh lebih mahal daripada bekas. Penebat terbaik bersama pek sejuk dan perlindungan daripada hentakan paling selamat."}},

{n:6, tempat:"Bengkel Reka Cipta", sk:"5.1 Mereka bentuk bahan berasaskan termokimia",
 kadNama:"Kayu Cahaya", kadEm:"\u{1F4A1}", kadFakta:"Kayu cahaya menyala apabila dua bahan kimia di dalamnya bercampur selepas tiub kaca kecil di dalamnya dipatahkan.",
 bosKadNama:"Pek Natrium Asetat", bosKadEm:"\u{2668}", bosKadFakta:"Pek natrium asetat menjadi panas apabila hablur terbentuk di dalamnya, dan boleh digunakan semula selepas direbus.",
 soalan:[
 {j:"pilih",t:"Awak mereka bentuk pek panas untuk melegakan kekejangan otot atlet. Ciri paling penting?",p:["Suhunya cukup panas tetapi tidak melecurkan kulit","Pek itu sepanas mungkin supaya cepat berkesan","Pek itu berwarna terang supaya mudah dilihat","Pek itu paling murah walaupun mudah bocor"],b:0,u:"Pek yang melecurkan kulit mencederakan pengguna yang ingin dibantunya."},
 {j:"pilih",t:"Pek panas awak terlalu panas dalam ujian pertama. Pengubahsuaian paling wajar?",p:["Kurangkan bahan yang bertindak balas atau tambah lapisan kain","Tambah lebih banyak bahan supaya tindak balas cepat tamat","Buang pembalut pek supaya haba cepat keluar ke kulit","Simpan pek dalam peti sejuk dahulu sebelum diaktifkan setiap kali"],b:0,u:"Kurang bahan membebaskan kurang haba, dan lapisan kain memperlahankan pengaliran haba ke kulit."},
 {j:"pilih",t:"Awak mereka lampu kecemasan menggunakan kayu cahaya untuk rumah semasa bekalan elektrik terputus. Faktor keselamatan paling penting?",p:["Bahan kimianya tidak bocor dan jauh dari capaian kanak-kanak","Warna cahayanya sama dengan warna lampu biasa","Kayu cahaya dipatahkan lebih awal, sebelum bekalan elektrik terputus","Kayu cahaya dibuka dan cecairnya dituang ke dalam balang"],b:0,u:"Cecair kayu cahaya boleh merengsakan kulit dan mata."},
 {j:"pilih",t:"Awak mahu membina bekas yang mengekalkan air panas untuk dijual di pasar malam. Gabungan ciri paling berkesan?",p:["Dinding berlapis berisi udara dan penutup yang rapat","Dinding logam nipis dan penutup yang terbuka luas","Bekas kaca lutsinar tanpa penutup supaya mudah diisi","Bekas plastik nipis berwarna hitam di dalam dan luar"],b:0,u:"Udara terperangkap mengurangkan pengaliran haba, dan penutup menghalang haba hilang melalui perolakan dan penyejatan."},
 {j:"pilih",t:"Bajet awak hanya RM20 untuk membina bekas penyimpan ais. Cara paling kreatif?",p:["Guna semula kotak polistirena dan kain terpakai","Beli kelalang vakum yang paling mahal secara berhutang","Guna bekas plastik nipis tanpa sebarang lapisan","Batalkan projek kerana bajet tidak mencukupi"],b:0,u:"Bahan terpakai yang memerangkap udara murah dan berkesan."},
 {j:"pilih",t:"Pek sejuk rekaan awak menggunakan ammonium nitrat. Bagaimana pek yang sudah digunakan patut diuruskan?",p:["Ikut arahan label dan jangan buang isinya ke longkang","Buang terus ke dalam sungai kerana ia hanya air sejuk","Bakar pek itu supaya tiada sisa yang tertinggal","Simpan dan makan isinya kerana ia sama seperti garam"],b:0,u:"Ammonium nitrat tidak boleh dimakan atau dibakar, dan boleh mencemarkan air jika dibuang sesuka hati."},
 {j:"pilih",t:"Awak mahu membuktikan pek sejuk rekaan awak lebih baik daripada pek di pasaran. Cara paling adil?",p:["Uji kedua-dua pek pada suhu bilik sama dan catat suhu setiap minit","Uji pek awak di bilik berhawa dingin dan pek pasaran di luar","Minta rakan memilih pek yang kelihatan lebih cantik","Uji pek awak sahaja kerana pek pasaran sudah diuji"],b:0,u:"Ujian yang adil memalarkan semua keadaan kecuali pek yang dibandingkan."},
 {j:"pilih",t:"Pek panas awak akan dijual kepada warga emas di kampung. Pertimbangan paling wajar?",p:["Arahan dalam bahasa mudah dan pek mudah diaktifkan","Arahan dalam bahasa asing supaya kelihatan mewah","Pek yang memerlukan alat khas untuk dibuka","Harga paling tinggi supaya dianggap berkualiti"],b:0,u:"Reka bentuk yang baik bermula daripada keperluan penggunanya."}],
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
   5:"{n} dapat menilai bahan dan reka bentuk bekas penebat serta pek haba dan membuat keputusan yang wajar berdasarkan data, kos dan keselamatan. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka bentuk produk berasaskan tindak balas eksotermik dan endotermik yang selamat dan praktikal, dengan mengambil kira kos dan pengguna. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Termokimia. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ suhu:T_SUHU, pek:T_PEK, bekas:T_BEKAS },
  aras:ARAS
};
