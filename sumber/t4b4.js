/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 6.0 Sokongan, Pergerakan dan Pertumbuhan.
   Fail ini disunting tangan. Jalankan `node bina.js t4b4` untuk menyemaknya
   dan menghasilkan bank-t4b4.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4, Bahagian Pembangunan Kurikulum, muka 76.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai sokongan, pergerakan dan pertumbuhan manusia, haiwan dan tumbuhan.",
"Memahami sokongan, pergerakan dan pertumbuhan manusia, haiwan dan tumbuhan dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai sokongan, pergerakan dan pertumbuhan manusia, haiwan dan tumbuhan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai sokongan, pergerakan dan pertumbuhan manusia, haiwan dan tumbuhan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai sokongan, pergerakan dan pertumbuhan manusia, haiwan dan tumbuhan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai sokongan, pergerakan dan pertumbuhan manusia, haiwan dan tumbuhan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_RANGKA_MANUSIA = {
  jenis:"struktur", mod:"label", tinggiLukis:170, rangka:true,
  bahagian:[
    {label:"Kranium", bentuk:"bulat", x:50, y:8, r:14, isi:"lembayungLembut"},
    {label:"Tulang Rusuk", bentuk:"kotak", x:50, y:30, l:34, t:24, isi:"merahLembut"},
    {label:"Humerus", bentuk:"kotak", x:74, y:38, l:10, t:22, isi:"hijauLembut"},
    {label:"Radius-Ulna", bentuk:"kotak", x:74, y:58, l:9, t:20, isi:"hijauLembut"},
    {label:"Pelvis", bentuk:"kotak", x:50, y:66, l:28, t:14, isi:"merahLembut"},
    {label:"Femur", bentuk:"kotak", x:44, y:84, l:9, t:22, isi:"kuningLembut"},
    {label:"Patela", bentuk:"bulat", x:44, y:97, r:4, isi:"kuningLembut"},
    {label:"Tibia-Fibula", bentuk:"kotak", x:44, y:112, l:9, t:22, isi:"kuningLembut"}
  ],
  kapsyen:"Rajah 1 · Struktur rangka dalam manusia (skematik).",
  alt:"Rajah skematik rangka dalam manusia berlabel: kranium, tulang rusuk, humerus, radius-ulna, pelvis, femur, patela, tibia-fibula"
};

const R_OTOT = {
  jenis:"aliran", mod:"turun",
  nod:[
    {label:"Bisep mengecut, trisep melentur: lengan dibengkokkan", isi:"hijauLembut", panah:"hijau", nota:"berulang"},
    {label:"Trisep mengecut, bisep melentur: lengan diluruskan", isi:"lembayungLembut"}
  ],
  kapsyen:"Rajah 1 · Pasangan otot antagonistik bisep dan trisep.",
  alt:"Rajah aliran dua peringkat: bisep mengecut membengkokkan lengan, trisep mengecut meluruskan lengan semula"
};

const T_JENIS_RANGKA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Haiwan</th>'+
'<th>Jenis rangka</th><th>Lokasi rangka</th><th>Cara pertumbuhan</th></tr></thead><tbody>'+
'<tr><td>Ketam</td><td>Rangka luar</td><td>Di luar badan, keras</td><td>Perlu nyah kulit (ekdisis) untuk membesar</td></tr>'+
'<tr><td>Manusia</td><td>Rangka dalam</td><td>Di dalam badan</td><td>Tulang membesar bersama badan</td></tr>'+
'<tr><td>Cacing tanah</td><td>Rangka hidrostatik</td><td>Tiada tulang, cecair dalam rongga badan</td><td>Saiz berubah ikut tekanan cecair</td></tr>'+
'</tbody></table></div>';

const T_TULANG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Model tulang</th>'+
'<th class="n">Jisim (g)</th><th class="n">Beban patah (N)</th></tr></thead><tbody>'+
'<tr><td>Berongga (straw), tipis</td><td class="n">3.0</td><td class="n">9.6</td></tr>'+
'<tr><td>Padat (tanah liat), tipis</td><td class="n">3.0</td><td class="n">5.4</td></tr>'+
'<tr><td>Berongga (straw), tebal</td><td class="n">4.5</td><td class="n">13.2</td></tr>'+
'<tr><td>Padat (tanah liat), tebal</td><td class="n">4.5</td><td class="n">7.8</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap model diperbuat daripada jisim tanah liat yang sama, dibentuk sama ada berongga (seperti straw) atau padat, kemudian beban ditambah sehingga model patah.</p>';

const T_PERTUMBUHAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Minggu</th>'+
'<th class="n">Pasu A · cahaya penuh (cm)</th><th class="n">Pasu B · teduh (cm)</th></tr></thead><tbody>'+
'<tr><td>0</td><td class="n">4.0</td><td class="n">4.0</td></tr>'+
'<tr><td>2</td><td class="n">7.5</td><td class="n">6.0</td></tr>'+
'<tr><td>4</td><td class="n">12.0</td><td class="n">8.0</td></tr>'+
'<tr><td>6</td><td class="n">17.5</td><td class="n">10.5</td></tr>'+
'</tbody></table></div><p class="qnote">Kedua-dua pasu ditanam benih kacang hijau serupa dan disiram jumlah air yang sama setiap hari. Pasu A diletak di tempat cahaya matahari penuh, Pasu B di tempat teduh.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Cangkerang", sk:"6.1 Jenis sokongan pada haiwan", lampiran:"jenisRangka",
 kadNama:"Ekdisis", kadEm:"\u{1F980}", kadFakta:"Ketam nyah kulit lama (ekdisis) beberapa kali sepanjang hidupnya kerana rangka luarnya yang keras tidak boleh membesar bersama badannya.",
 bosKadNama:"Rangka Hidrostatik", bosKadEm:"\u{1FAB1}", bosKadFakta:"Cacing tanah tidak mempunyai tulang langsung; ia bergerak dengan mengubah tekanan cecair dalam rongga badannya.",
 soalan:[
 {j:"pilih",t:"Rangka yang terletak di luar badan dan melindungi bahagian dalam haiwan seperti ketam dipanggil:",p:["Rangka luar","Rangka dalam","Rangka hidrostatik","Rangka sinovial"],b:0,u:"Rangka luar (eksoskeleton) membentuk cengkerang keras di luar badan."},
 {j:"pilih",t:"Berdasarkan jadual, mengapakah ketam perlu menjalani ekdisis?",p:["Rangka luarnya yang keras tidak boleh membesar bersama badannya","Rangka luarnya terlalu nipis untuk melindungi organ dalaman daripada pemangsa","Ekdisis membantu ketam menukar warna cengkerangnya supaya lebih menyerlah","Rangka luar ketam reput dan perlu digantikan setiap tahun seperti daun pokok"],b:0,u:"Jadual menyatakan ketam perlu nyah kulit untuk membesar kerana rangka luarnya keras."},
 {j:"pilih",t:"Cacing tanah bergerak dengan cara:",p:["Mengubah tekanan cecair dalam rongga badannya","Mengecutkan tulang dalam badannya","Menggunakan rangka luar yang keras untuk menolak tanah","Menggunakan otot yang melekat pada cengkerang keras"],b:0,u:"Cacing tanah tiada tulang; pergerakannya bergantung pada tekanan cecair, iaitu rangka hidrostatik."},
 {j:"banyak",t:"Pilih SEMUA haiwan yang mempunyai rangka dalam (endoskeleton).",p:["Manusia","Ikan","Ketam","Udang","Burung"],b:[0,1,4],u:"Ketam dan udang mempunyai rangka luar (eksoskeleton), bukan rangka dalam."},
 {j:"pilih",t:"Apakah kelebihan rangka dalam berbanding rangka luar dari segi pertumbuhan?",p:["Tulang boleh membesar bersama badan tanpa perlu digantikan","Tulang dalam jauh lebih ringan berbanding rangka luar pada semua jenis haiwan","Tulang dalam tidak memerlukan sebarang otot untuk membolehkan pergerakan berlaku","Tulang dalam boleh menukar bentuk mengikut persekitaran seperti bunglon menukar warna"],b:0,u:"Tulang dalam membesar seiring pertumbuhan badan, tidak seperti rangka luar yang keras dan tetap."},
 {j:"susun",t:"Susun urutan kitaran hidup ketam berkaitan pertumbuhan rangka luarnya.",p:["Ketam membesar di dalam cengkerang lama","Cengkerang lama menjadi terlalu ketat","Ketam menjalani ekdisis, cengkerang lama tertanggal","Cengkerang baharu yang lebih besar mengeras"],b:[0,1,2,3],u:"Ekdisis berlaku secara berkitar sepanjang hayat ketam untuk membolehkan pertumbuhan berterusan."},
 {j:"pilih",t:"Obor-obor (jellyfish) tidak mempunyai tulang sama sekali. Jenis rangka yang paling tepat menerangkan cara ia bergerak ialah:",p:["Rangka hidrostatik","Rangka luar yang keras","Rangka dalam berlabel","Rangka sinovial berpelincir"],b:0,u:"Sama seperti cacing tanah, obor-obor menggunakan tekanan cecair dalam badannya untuk bergerak."},
 {j:"pilih",t:"Berdasarkan jadual, apakah perbezaan utama antara ketam dan manusia dari segi lokasi rangka?",p:["Rangka ketam di luar badan, rangka manusia di dalam badan","Rangka ketam lebih ringan berbanding rangka manusia","Rangka manusia tidak membesar, rangka ketam membesar","Rangka ketam dan manusia kedua-duanya terletak di dalam badan"],b:0,u:"Jadual menunjukkan lokasi rangka ketam di luar badan, manakala manusia di dalam badan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang rangka hidrostatik.",p:["Bergantung pada tekanan cecair dalam rongga badan","Terdapat pada haiwan seperti cacing tanah dan obor-obor","Membentuk cengkerang keras yang menutupi seluruh badan di luar","Membolehkan pergerakan tanpa sebarang tulang","Memerlukan proses ekdisis secara berkala untuk terus membesar"],b:[0,1,3],u:"Cengkerang keras ialah ciri rangka luar, dan ekdisis khusus untuk haiwan berangka luar seperti ketam, bukan rangka hidrostatik."}},

{n:2, tempat:"Rangka Manusia", sk:"6.1 Fungsi dan struktur rangka dalam manusia", lampiran:"rangkaManusia",
 kadNama:"Tulang Terpanjang", kadEm:"\u{1F9B4}", kadFakta:"Femur (tulang peha) ialah tulang terpanjang dan terkuat dalam badan manusia, mampu menanggung beban lebih 30 kali berat badan semasa berlari.",
 bosKadNama:"Burung Berongga", bosKadEm:"\u{1F985}", bosKadFakta:"Tulang burung berongga di bahagian dalam, membolehkan badan ringan tanpa mengorbankan kekuatan untuk terbang.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, tulang yang melindungi organ dalaman seperti jantung dan peparu ialah:",p:["Tulang Rusuk","Humerus di lengan atas","Pelvis di bahagian pinggul","Femur di bahagian peha"],b:0,u:"Tulang rusuk membentuk sangkar yang melindungi jantung dan peparu di rongga dada."},
 {j:"pilih",t:"Berdasarkan Rajah 1, tulang manakah yang menyokong berat badan semasa berdiri dan berjalan?",p:["Femur dan Tibia-Fibula","Humerus dan Radius-Ulna","Kranium sahaja","Tulang Rusuk sahaja"],b:0,u:"Femur dan Tibia-Fibula ialah tulang kaki yang menanggung berat badan."},
 {j:"pilih",t:"Apakah fungsi utama Kranium?",p:["Melindungi otak daripada kecederaan","Menyokong berat badan semasa berjalan","Membolehkan pergerakan lengan","Menghasilkan sel darah merah sahaja"],b:0,u:"Kranium ialah tulang tengkorak yang membungkus dan melindungi otak."},
 {j:"banyak",t:"Pilih SEMUA fungsi rangka dalam bagi haiwan vertebrata.",p:["Menyokong berat badan","Melindungi organ dalaman","Menjadi tempat lekapan otot untuk pergerakan","Menghasilkan bunyi untuk komunikasi","Mengawal suhu badan sepenuhnya"],b:[0,1,2],u:"Rangka tidak menghasilkan bunyi atau mengawal suhu badan sepenuhnya; kedua-dua itu bukan fungsi rangka."},
 {j:"pilih",t:"Bandingkan fungsi rangka bagi burung berbanding vertebrata darat seperti kucing. Apakah perbezaan utama?",p:["Rangka burung lebih ringan dan berongga untuk membolehkan terbang","Rangka burung lebih berat untuk memberi kestabilan semasa terbang","Rangka burung tiada tulang rusuk untuk melindungi jantung","Rangka burung tidak menyokong sebarang berat badan"],b:0,u:"Tulang burung berongga mengurangkan jisim badan, penting untuk penerbangan."},
 {j:"susun",t:"Susun tulang berikut daripada yang PALING DEKAT dengan bahu kepada yang PALING JAUH pada satu lengan.",p:["Humerus","Radius-Ulna"],b:[0,1],u:"Humerus ialah tulang lengan atas, manakala Radius-Ulna ialah tulang lengan bawah yang lebih jauh daripada bahu."},
 {j:"pilih",t:"Vertebrata akuatik seperti ikan paus mempunyai rangka dalam yang berbeza daripada vertebrata darat kerana:",p:["Air menyokong sebahagian berat badan, jadi rangka boleh lebih ringan","Air memerlukan rangka yang jauh lebih berat berbanding haiwan yang hidup sepenuhnya di darat","Ikan paus tidak memerlukan rangka dalam langsung kerana ia hidup terapung sepanjang masa","Rangka ikan paus perlu sekeras rangka luar ketam supaya kekal terapung di permukaan air"],b:0,u:"Daya apungan air mengurangkan keperluan rangka menanggung berat, berbeza dengan haiwan darat."},
 {j:"pilih",t:"Berdasarkan Rajah 1, Pelvis paling berkait rapat dengan fungsi:",p:["Menyambungkan tulang belakang dengan tulang kaki","Melindungi otak dan otak kecil daripada kecederaan","Membolehkan pergerakan bebas jari tangan kita","Menyokong pergerakan bebas bola mata"],b:0,u:"Pelvis ialah struktur yang menyambungkan bahagian bawah tulang belakang dengan kaki."}],
 bos:{j:"pilih",t:"Nyatakan SATU sebab mengapa struktur rangka dalam manusia (Rajah 1) berbeza daripada rangka dalam burung.",p:["Manusia berjalan tegak menanggung berat di dua kaki","Manusia tidak mempunyai tulang rusuk seperti burung","Manusia mempunyai lebih banyak tulang berongga berbanding burung","Rangka manusia tidak menyokong sebarang pergerakan"],b:0,u:"Struktur rangka berkait rapat dengan cara haiwan itu bergerak dan menanggung berat badannya."}},

{n:3, tempat:"Sendi & Otot", sk:"6.2 Sendi, otot dan pergerakan", lampiran:"ototAntagonis",
 kadNama:"Otot Antagonistik", kadEm:"\u{1F4AA}", kadFakta:"Bisep dan trisep bekerja secara antagonistik: apabila satu mengecut, satu lagi melentur, membolehkan lengan dibengkokkan dan diluruskan.",
 bosKadNama:"Cecair Sinovial", bosKadEm:"\u{1F9F4}", bosKadFakta:"Cecair sinovial dalam sendi bertindak seperti minyak pelincir, mengurangkan geseran antara tulang semasa bergerak.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada trisep apabila bisep mengecut untuk membengkokkan lengan?",p:["Trisep melentur (relaks)","Trisep turut mengecut serentak","Trisep berhenti berfungsi sepenuhnya","Trisep bertukar menjadi tendon"],b:0,u:"Otot antagonistik bekerja bertentangan: apabila satu mengecut, pasangannya melentur."},
 {j:"pilih",t:"Apakah fungsi tendon dalam sistem pergerakan?",p:["Menyambungkan otot kepada tulang","Menyambungkan tulang kepada tulang","Melincirkan pergerakan dalam sendi","Menghasilkan tenaga untuk otot mengecut"],b:0,u:"Tendon ialah tisu penyambung yang menghubungkan otot dengan tulang."},
 {j:"pilih",t:"Apakah fungsi ligamen?",p:["Menyambungkan tulang kepada tulang pada sendi","Menyambungkan otot terus kepada tulang berdekatan","Menghasilkan cecair sinovial dalam sendi","Mengecut untuk menggerakkan tulang rangka"],b:0,u:"Ligamen menyambung tulang dengan tulang, menstabilkan sendi."},
 {j:"pilih",t:"Mengapakah cecair sinovial penting dalam sendi seperti sendi lutut?",p:["Mengurangkan geseran antara tulang semasa bergerak","Menggantikan fungsi tendon dengan sepenuhnya","Menghasilkan tenaga tambahan penuh untuk otot berfungsi","Menyambungkan otot terus kepada tulang rangka"],b:0,u:"Cecair sinovial melincirkan sendi, mengurangkan haus dan geseran."},
 {j:"banyak",t:"Warga tua sering mengadu sakit lutut. Pilih SEMUA faktor yang munasabah menyumbang kepada masalah ini.",p:["Kehausan rawan sendi akibat penggunaan bertahun-tahun","Pengurangan cecair sinovial dengan usia","Peningkatan bilangan tendon baharu terbentuk","Kelemahan otot sekeliling sendi akibat kurang aktif"],b:[0,1,3],u:"Tendon tidak bertambah dengan usia; masalah lutut warga tua lebih berkait dengan kehausan rawan, cecair sinovial berkurang dan otot lemah."},
 {j:"pilih",t:"Seorang atlet mengalami kecederaan yang menyebabkan sendi lututnya longgar dan tidak stabil. Tisu manakah paling mungkin tercedera?",p:["Ligamen","Tendon","Rawan","Cecair sinovial"],b:0,u:"Ligamen menstabilkan sendi; kecederaan ligamen menyebabkan sendi longgar."},
 {j:"pilih",t:"Apakah peranan rawan pada hujung tulang dalam sendi?",p:["Melapik hujung tulang supaya tidak bergesel","Menyambungkan otot kepada tulang berdekatan","Menghasilkan cecair sinovial di dalam sendi","Mengecut untuk menggerakkan sendi"],b:0,u:"Rawan bertindak sebagai lapisan pelindung supaya tulang tidak bergesel terus."},
 {j:"susun",t:"Susun urutan tindakan yang berlaku semasa seseorang membengkokkan siku.",p:["Otak menghantar isyarat kepada otot bisep","Bisep mengecut","Trisep melentur","Lengan bawah terangkat ke atas"],b:[0,1,2,3],u:"Isyarat saraf mencetuskan pengecutan bisep, diikuti relaksasi trisep, menghasilkan pergerakan."}],
 bos:{j:"pilih",t:"Seorang jurulatih ingin menerangkan mengapa senaman perlu melatih KEDUA-DUA bisep dan trisep, bukan bisep sahaja. Sebab paling tepat?",p:["Pasangan otot antagonistik perlu seimbang supaya sendi stabil","Trisep tidak mempunyai sebarang fungsi jika bisep sudah kuat","Melatih trisep sahaja sudah cukup untuk membengkokkan lengan","Bisep dan trisep tidak berkait langsung antara satu sama lain"],b:0,u:"Ketidakseimbangan antara pasangan otot antagonistik boleh menjejaskan kestabilan dan fungsi sendi."}},

{n:4, tempat:"Makmal Tulang", sk:"6.1 Kekuatan tulang dan faktor kestabilan", lampiran:"tulangKekuatan",
 kadNama:"Model Tulang", kadEm:"\u{1F9EA}", kadFakta:"Model tulang berongga daripada straw plastik boleh menanggung beban lebih besar berbanding model padat berjisim sama, meniru struktur tulang burung sebenar.",
 bosKadNama:"Pusat Graviti", bosKadEm:"\u{1F992}", bosKadFakta:"Zirafah mengangkang kakinya semasa minum air untuk merendahkan pusat gravitinya dan mengelak terjatuh.",
 soalan:[
 {j:"nombor",t:"Berdasarkan jadual, kirakan nisbah beban:jisim bagi model Berongga tipis (jisim 3.0 g, beban 9.6 N). Bundarkan kepada satu tempat perpuluhan.",b:3.2,tol:0.1,suf:"N/g",u:"9.6 dibahagi 3.0 bersamaan 3.2."},
 {j:"pilih",t:"Berdasarkan jadual, model manakah mempunyai nisbah beban:jisim PALING TINGGI?",p:["Berongga tebal (4.5 g, 13.2 N)","Padat tipis (3.0 g, 5.4 N)","Padat tebal (4.5 g, 7.8 N)","Berongga tipis (3.0 g, 9.6 N)"],b:0,u:"13.2 dibahagi 4.5 bersamaan 2.93, tertinggi berbanding model lain dalam jadual."},
 {j:"pilih",t:"Mengapakah kedua-dua model diperbuat daripada jisim tanah liat yang SAMA sebelum dibentuk berongga atau padat?",p:["Supaya perbandingan kekuatan adil tanpa dipengaruhi jisim","Supaya kedua-dua model kelihatan sama saiz","Supaya ujian dapat dijalankan dengan lebih pantas","Supaya model tidak mudah patah semasa dibentuk"],b:0,u:"Memalarkan jisim ialah cara mengawal pemboleh ubah supaya perbandingan kekuatan adil."},
 {j:"pilih",t:"Apakah kesimpulan paling tepat yang disokong oleh jadual?",p:["Model berongga menanggung beban lebih besar berbanding model padat","Model padat sentiasa lebih kuat berbanding model berongga","Jisim tidak memberi kesan kepada beban maksimum","Model berongga dan padat mempunyai kekuatan yang sama"],b:0,u:"Kedua-dua pasangan data menunjukkan model berongga menanggung beban lebih besar berbanding model padat berjisim sama."},
 {j:"pilih",t:"Bagaimanakah dapatan eksperimen ini berkaitan dengan tulang burung sebenar?",p:["Tulang burung berongga membolehkan badan ringan tanpa mengorbankan kekuatan","Tulang burung padat sepenuhnya untuk memberi kekuatan maksimum","Tulang burung tidak memerlukan kekuatan kerana ia terbang","Tulang burung dan tulang gajah mempunyai struktur yang sama"],b:0,u:"Struktur berongga meniru tulang burung, membolehkan jisim badan yang ringan untuk terbang."},
 {j:"pilih",t:"Mengapakah tulang gajah padat, bukan berongga seperti tulang burung?",p:["Tulang padat menyokong berat badan gajah yang besar","Gajah memerlukan tulang ringan untuk berlari pantas","Tulang padat membolehkan gajah terapung di dalam air","Gajah tidak memerlukan sebarang sokongan rangka"],b:0,u:"Berat badan gajah yang besar memerlukan tulang padat yang kukuh untuk menyokongnya di darat."},
 {j:"pilih",t:"Berdasarkan kad fakta, apakah faktor yang mempengaruhi kestabilan seekor haiwan?",p:["Kedudukan pusat graviti dan keluasan tapak","Jenis rangka sahaja, sama ada luar atau dalam","Bilangan tulang dalam badan haiwan","Warna dan corak kulit haiwan"],b:0,u:"Kestabilan dipengaruhi oleh kedudukan pusat graviti dan keluasan tapak sokongan."},
 {j:"pilih",t:"Kangaroo menongkat badannya menggunakan ekor semasa berehat. Apakah kesan tindakan ini terhadap kestabilan?",p:["Menambah keluasan tapak sokongan, meningkatkan kestabilan","Meninggikan pusat graviti, mengurangkan kestabilan","Tidak memberi sebarang kesan kepada kestabilan","Mengurangkan keluasan tapak sokongan"],b:0,u:"Ekor yang menyentuh tanah menambah titik sokongan, memperluas tapak dan menstabilkan badan."}],
 bos:{j:"banyak",t:"Pilih SEMUA penambahbaikan yang akan menguatkan kesahan eksperimen model tulang ini.",p:["Uji beberapa model bagi setiap jenis dan ambil purata","Pastikan ketebalan dinding model berongga adalah sama setiap kali","Gunakan hanya SATU model bagi setiap jenis untuk jimat masa","Rekod jisim tepat sebelum ujian beban dijalankan"],b:[0,1,3],u:"Ujian tunggal tidak boleh mengesan ralat rawak; jisim dan ketebalan mesti dikawal serta direkod dengan konsisten."}},

{n:5, tempat:"Ladang Pertumbuhan", sk:"6.2 / 6.3 Pola pertumbuhan manusia dan tumbuhan", lampiran:"pertumbuhanTumbuhan",
 kadNama:"Gelang Tahunan", kadEm:"\u{1F333}", kadFakta:"Setiap gelang tahunan pada batang pokok berkayu mewakili lebih kurang satu tahun pertumbuhan, membolehkan usianya dianggarkan tanpa menebangnya sepenuhnya.",
 bosKadNama:"Lonjakan Remaja", bosKadEm:"\u{1F4C8}", bosKadFakta:"Lonjakan pertumbuhan ketinggian semasa remaja biasanya bermula lebih awal pada perempuan berbanding lelaki, walaupun lelaki akhirnya mencapai purata ketinggian dewasa yang lebih tinggi.",
 soalan:[
 {j:"nombor",t:"Berapakah peningkatan ketinggian Pasu A dari minggu 0 hingga minggu 6, dalam cm?",b:13.5,tol:0.5,suf:"cm",u:"17.5 tolak 4.0 bersamaan 13.5 cm."},
 {j:"pilih",t:"Berdasarkan jadual, apakah kesan cahaya matahari terhadap kadar pertumbuhan anak benih kacang hijau?",p:["Lebih banyak cahaya, lebih pantas pertumbuhan","Cahaya matahari tidak memberi sebarang kesan kepada pertumbuhan","Lebih banyak cahaya matahari melambatkan pertumbuhan","Pasu B sentiasa tumbuh lebih pantas daripada Pasu A"],b:0,u:"Pasu A yang menerima cahaya penuh menunjukkan pertambahan ketinggian yang lebih besar setiap minggu."},
 {j:"pilih",t:"Mengapakah kedua-dua pasu disiram jumlah air yang SAMA setiap hari?",p:["Supaya air bukan pemboleh ubah yang mengelirukan kesan","Supaya kedua-dua pasu kelihatan sama subur","Supaya benih bercambah pada masa yang sama","Supaya eksperimen dapat disiapkan dengan lebih cepat"],b:0,u:"Memalarkan air memastikan sebarang perbezaan pertumbuhan disebabkan oleh cahaya, bukan air."},
 {j:"pilih",t:"Seorang saintis mengira 15 gelang tahunan pada keratan rentas sebatang pokok. Anggaran usia pokok itu ialah:",p:["Lebih kurang 15 tahun","Lebih kurang 15 bulan","Lebih kurang 15 hari","Tidak boleh dianggarkan daripada gelang tahunan"],b:0,u:"Setiap gelang tahunan mewakili lebih kurang satu tahun pertumbuhan."},
 {j:"pilih",t:"Berdasarkan kad fakta, apakah perbezaan pola pertumbuhan antara lelaki dan perempuan semasa remaja?",p:["Lonjakan pertumbuhan perempuan bermula lebih awal berbanding lelaki","Lonjakan pertumbuhan lelaki bermula lebih awal berbanding perempuan","Lelaki dan perempuan mengalami lonjakan pertumbuhan pada masa yang sama","Hanya lelaki mengalami lonjakan pertumbuhan semasa remaja"],b:0,u:"Kad fakta menyatakan lonjakan pertumbuhan bermula lebih awal pada perempuan."},
 {j:"pilih",t:"Peringkat pertumbuhan manusia mengikut urutan yang betul ialah:",p:["Bayi, kanak-kanak, remaja, dewasa, tua","Kanak-kanak, bayi, dewasa, remaja, tua","Remaja, bayi, kanak-kanak, tua, dewasa","Dewasa, remaja, kanak-kanak, tua, bayi"],b:0,u:"Peringkat pertumbuhan manusia bermula daripada bayi sehingga tua secara berurutan."},
 {j:"pilih",t:"Jika data Pasu B menunjukkan pertumbuhan yang lebih perlahan, apakah kesimpulan yang PALING wajar?",p:["Cahaya matahari yang kurang mengehadkan pertumbuhan Pasu B","Pasu B mempunyai benih yang rosak sejak awal","Air yang diberi kepada Pasu B tidak mencukupi","Pasu B ditanam dalam tanah yang berbeza jenis"],b:0,u:"Memandangkan air dan tanah dimalarkan, cahaya ialah pemboleh ubah yang paling munasabah menyebabkan perbezaan itu."},
 {j:"pilih",t:"Apakah kelemahan jika eksperimen ini hanya menggunakan SATU anak benih bagi setiap pasu?",p:["Sukar membezakan variasi semula jadi benih dengan kesan cahaya","Eksperimen akan mengambil masa terlalu lama untuk disiapkan","Anak benih tunggal tidak dapat tumbuh langsung","Data daripada satu benih tidak boleh direkodkan dalam jadual"],b:0,u:"Ulangan (replikasi) penting untuk mengesan sama ada perbezaan disebabkan rawatan atau variasi semula jadi."}],
 bos:{j:"pilih",t:"Nilaikan dakwaan: ‘Cahaya matahari SAHAJA menentukan ketinggian akhir sepohon pokok.’ Adakah dakwaan ini wajar berdasarkan apa yang dipelajari?",p:["Kurang wajar, kerana faktor lain seperti air dan baka turut mempengaruhi","Wajar sepenuhnya, kerana data Pasu A dan B membuktikan cahaya sahaja penentunya","Wajar, kerana tumbuhan tidak memerlukan air untuk membesar","Kurang wajar, kerana cahaya matahari tidak memberi sebarang kesan kepada tumbuhan"],b:0,u:"Eksperimen ini hanya menguji kesan cahaya dengan faktor lain dimalarkan; ia tidak membuktikan cahaya sebagai satu-satunya penentu pertumbuhan."}},

{n:6, tempat:"Reka Bentuk Sokongan", sk:"6.2 / 6.3 Sokongan tumbuhan dan penyelesaian masalah sendi",
 kadNama:"Akar Banir", kadEm:"\u{1F332}", kadFakta:"Akar banir pada pokok hutan hujan tropika melebar seperti papan di pangkal batang, menambah keluasan tapak sokongan pada tanah cetek yang lembap.",
 bosKadNama:"Fisioterapi", bosKadEm:"\u{1FA7A}", bosKadFakta:"Ahli fisioterapi membantu memulihkan kekuatan otot dan julat pergerakan sendi selepas kecederaan atau pembedahan.",
 soalan:[
 {j:"pilih",t:"Pokok yang tumbuh di tanah cetek dan lembap di hutan hujan sering mempunyai akar banir yang lebar. Apakah fungsi struktur ini?",p:["Menambah keluasan tapak sokongan pokok","Menyerap lebih banyak air daripada udara sekeliling","Melindungi batang pokok daripada serangan serangga","Membantu pokok menjalankan fotosintesis dengan lebih pantas"],b:0,u:"Akar banir yang lebar meningkatkan kestabilan pokok dengan menambah keluasan tapak sokongannya."},
 {j:"pilih",t:"Tumbuhan memanjat seperti sirih menggunakan sulur paut untuk:",p:["Berpaut pada struktur lain untuk menegak","Menyimpan air untuk musim kemarau","Menjalankan fotosintesis tambahan","Menghalang haiwan daripada memakannya"],b:0,u:"Sulur paut membolehkan tumbuhan memanjat memanfaatkan struktur lain untuk sokongan, tanpa perlu batang yang tebal."},
 {j:"banyak",t:"Pilih SEMUA struktur sokongan tumbuhan yang sesuai untuk tumbuhan AKUATIK.",p:["Batang berongga yang membantu keapungan","Akar banir yang lebar di pangkal batang","Duri yang tajam pada permukaan batang","Tisu udara dalam batang"],b:[0,3],u:"Akar banir dan duri lebih berkait dengan tumbuhan daratan; tumbuhan akuatik bergantung pada keapungan seperti batang berongga dan tisu udara."},
 {j:"pilih",t:"Tumbuhan herba (batang lembut) biasanya lebih pendek berbanding tumbuhan berkayu. Sebab paling tepat ialah:",p:["Batang lembut tidak dapat menyokong berat yang besar tanpa tumbang","Herba tidak memerlukan sokongan langsung","Tumbuhan berkayu tumbuh lebih perlahan berbanding herba","Tumbuhan herba mempunyai akar banir yang lebih kukuh"],b:0,u:"Batang lembut kekurangan kekuatan struktur untuk menyokong pertumbuhan yang tinggi."},
 {j:"pilih",t:"Seorang jurutera ingin mereka bangunan pencakar langit yang stabil. Konsep manakah daripada dunia haiwan dan tumbuhan paling relevan untuk ditiru?",p:["Memperluas tapak asas seperti akar banir","Menjadikan struktur seringan mungkin seperti rangka hidrostatik","Menjadikan keseluruhan struktur berongga seperti tulang burung","Menggunakan hanya satu tiang tunggal seperti sulur paut"],b:0,u:"Prinsip memperluas tapak asas untuk kestabilan, seperti akar banir, relevan untuk bangunan tinggi."},
 {j:"pilih",t:"Rakan sekelas awak mengalami kecederaan lutut semasa bermain bola sepak dan sukar melipat lutut. Tindakan paling wajar?",p:["Rujuk ahli fisioterapi atau pakar ortopedik untuk pemeriksaan","Terus bermain seperti biasa supaya sendi cepat pulih","Berehat sepenuhnya tanpa sebarang pergerakan selama-lamanya","Urut lutut sekuat mungkin tanpa nasihat pakar"],b:0,u:"Kecederaan sendi memerlukan pemeriksaan dan pemulihan berpandu oleh pakar seperti fisioterapi atau ortopedik."},
 {j:"pilih",t:"Warga emas sering dinasihatkan bersenam ringan seperti berjalan kaki. Bagaimanakah ini membantu sistem sokongan dan pergerakan mereka?",p:["Mengekalkan kekuatan otot sekeliling sendi","Menggantikan keperluan rawan pada sendi sepenuhnya","Menghasilkan cecair sinovial baharu dalam masa segera","Menukar rangka dalam menjadi rangka luar yang lebih kuat"],b:0,u:"Otot yang kuat menyokong sendi dengan lebih baik, mengurangkan beban terus pada rawan dan tulang."},
 {j:"susun",t:"Susun langkah reka bentuk penyelesaian bagi masalah sendi dan otot mengikut urutan yang wajar.",p:["Kenal pasti masalah pergerakan yang dihadapi pengguna","Kumpul maklumat tentang punca masalah itu","Reka dan uji penyelesaian yang sesuai","Dapatkan maklum balas daripada pengguna sebenar"],b:[0,1,2,3],u:"Reka bentuk penyelesaian yang baik bermula dengan mengenal pasti masalah sebelum reka dan uji, diakhiri dengan maklum balas pengguna."}],
 bos:{j:"buka",
  t:"Seorang atuk berusia 68 tahun sukar bangun daripada kerusi rendah kerana lututnya sakit, tetapi dia masih mahu bersiar-siar di taman setiap petang. Reka satu penyelesaian yang benar-benar membantunya.",
  arahan:"Terangkan cara penyelesaian itu berfungsi, bahan atau alat yang diperlukan, siapa yang boleh membantunya menggunakannya, dan bagaimana awak mengambil kira kos serta maruah atuk itu supaya dia tidak berasa terlalu bergantung.",
  u:"Jawapan TP6 yang kukuh menggabungkan sains sokongan/pergerakan, kos sebenar dan penerimaan sosial, sejajar dengan konsep yang dipelajari sepanjang bab ini."}}
];

module.exports = {
  id:"t4b4", tingkatan:4, kod:"6.0 Sokongan, Pergerakan dan Pertumbuhan",
  tajuk:"Laluan Rangka",
  subtajuk:"Sains Ting. 4 · Bab 6 Sokongan, Pergerakan & Pertumbuhan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis-jenis rangka pada haiwan (rangka luar, rangka dalam, rangka hidrostatik) serta istilah asas struktur rangka manusia. Langkah seterusnya ialah menerangkan fungsi setiap struktur, bukan sekadar menamakannya.",
   2:"{n} memahami fungsi rangka dalam manusia serta peranan otot, tendon, ligamen dan cecair sinovial dalam pergerakan. Perlu lebih banyak latihan mengaitkan struktur ini dengan situasi sebenar sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan sokongan dan pergerakan untuk menerangkan fenomena harian seperti kerja otot antagonistik dan kestabilan haiwan. Galakkan mentafsir data eksperimen kekuatan tulang.",
   4:"{n} mampu menganalisis data eksperimen kekuatan tulang dan pertumbuhan tumbuhan, serta mengaitkan struktur rangka dengan fungsi sebenarnya di alam. Seterusnya latih menilai kesahan kesimpulan daripada data.",
   5:"{n} dapat menilai kesahan dakwaan saintifik tentang pertumbuhan dan kestabilan, disokong bukti daripada data eksperimen. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta penyelesaian praktikal bagi masalah sokongan dan pergerakan dalam kehidupan harian, lengkap dengan pertimbangan kos dan maruah pengguna. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sokongan, Pergerakan dan Pertumbuhan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ jenisRangka:T_JENIS_RANGKA, rangkaManusia:R_RANGKA_MANUSIA, ototAntagonis:R_OTOT, tulangKekuatan:T_TULANG, pertumbuhanTumbuhan:T_PERTUMBUHAN },
  aras:ARAS
};
