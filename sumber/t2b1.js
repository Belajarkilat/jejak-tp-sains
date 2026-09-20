/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 1.0 Biodiversiti.
   Jalankan `node bina.js t2b1` untuk menyemak dan menghasilkan bank-t2b1.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 43.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai biodiversiti.",
"Memahami biodiversiti serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai biodiversiti untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai biodiversiti dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai biodiversiti dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai biodiversiti dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_VERTEBRAT = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    {
      "id": "v",
      "label": "Vertebrat",
      "x": 1,
      "y": 0
    },
    {
      "id": "m",
      "label": "Mamalia",
      "x": 0,
      "y": 1
    },
    {
      "id": "r",
      "label": "Reptilia",
      "x": 1,
      "y": 1
    },
    {
      "id": "a",
      "label": "Amfibia",
      "x": 2,
      "y": 1
    },
    {
      "id": "m2",
      "label": "Kelawar",
      "x": 0,
      "y": 2
    },
    {
      "id": "r2",
      "label": "Penyu",
      "x": 1,
      "y": 2
    },
    {
      "id": "a2",
      "label": "Katak",
      "x": 2,
      "y": 2
    }
  ],
  "panah": [
    [
      "v",
      "m"
    ],
    [
      "v",
      "r"
    ],
    [
      "v",
      "a"
    ],
    [
      "m",
      "m2"
    ],
    [
      "r",
      "r2"
    ],
    [
      "a",
      "a2"
    ]
  ],
  "kapsyen": "Rajah 1 · Tiga kumpulan vertebrat dengan satu contoh setiap satu.",
  "alt": "Carta pengelasan vertebrat kepada mamalia dengan contoh kelawar, reptilia dengan contoh penyu, dan amfibia dengan contoh katak"
};

const R_ANCAM = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Pemburuan haram",
    "Bilangan spesies berkurang",
    "Rantai makanan terputus",
    "Ekosistem hilang keseimbangan"
  ],
  "kapsyen": "Rajah 1 · Kesan berantai pemburuan haram.",
  "alt": "Rajah aliran menegak: pemburuan haram menyebabkan bilangan spesies berkurang, rantai makanan terputus, dan ekosistem hilang keseimbangan"
};

const T_KEKUNCI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Langkah</th>'+
'<th>Soalan</th><th>Ya</th><th>Tidak</th></tr></thead><tbody>'+
'<tr><td>1</td><td>Mempunyai tulang belakang?</td><td>Pergi ke 2</td><td>Pergi ke 4</td></tr>'+
'<tr><td>2</td><td>Mempunyai bulu pelepah?</td><td>P</td><td>Pergi ke 3</td></tr>'+
'<tr><td>3</td><td>Menyusukan anak?</td><td>Q</td><td>R</td></tr>'+
'<tr><td>4</td><td>Mempunyai tiga pasang kaki?</td><td>S</td><td>T</td></tr>'+
'</tbody></table></div><p class="qnote">Kekunci dikotomi untuk mengenal pasti lima haiwan P, Q, R, S dan T yang ditemui semasa lawatan ke Taman Negara.</p>';

const T_SPESIES =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kawasan</th>'+
'<th>Jenis kawasan</th><th class="n">Spesies burung</th><th class="n">Spesies pokok</th><th class="n">Suhu purata (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Hutan hujan asli</td><td class="n">120</td><td class="n">210</td><td class="n">25</td></tr>'+
'<tr><td>B</td><td>Hutan dibalak 10 tahun lalu</td><td class="n">65</td><td class="n">90</td><td class="n">27</td></tr>'+
'<tr><td>C</td><td>Ladang kelapa sawit</td><td class="n">18</td><td class="n">3</td><td class="n">29</td></tr>'+
'<tr><td>D</td><td>Kawasan perumahan</td><td class="n">12</td><td class="n">15</td><td class="n">31</td></tr>'+
'</tbody></table></div><p class="qnote">Tinjauan di empat kawasan yang sama luas dalam satu daerah. Data rekaan.</p>';

const T_PULIHARA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Pilihan</th>'+
'<th class="n">Kos setahun (RM juta)</th><th>Kesan kepada harimau</th><th>Kesan kepada penduduk</th></tr></thead><tbody>'+
'<tr><td>1. Rondaan anti-pemburuan haram</td><td class="n">3</td><td>Kurang jerat dan pemburuan</td><td>Peluang kerja sebagai renjer</td></tr>'+
'<tr><td>2. Koridor hutan antara dua hutan simpan</td><td class="n">5</td><td>Kawasan jelajah lebih luas</td><td>Sebahagian tanah perlu dipindah milik</td></tr>'+
'<tr><td>3. Pusat pembiakan dalam kurungan</td><td class="n">4</td><td>Bilangan bertambah di pusat sahaja</td><td>Tarikan pelancong</td></tr>'+
'<tr><td>4. Pagar elektrik di sekeliling kampung</td><td class="n">1</td><td>Kurang konflik dengan manusia</td><td>Ternakan lebih selamat</td></tr>'+
'</tbody></table></div><p class="qnote">Pilihan untuk memulihara Harimau Malaya di sebuah negeri. Harimau Malaya disenaraikan sebagai terancam kritikal. Data kos rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Pintu Taman Negara", sk:"1.1 / 1.2 Biodiversiti dan kumpulan organisma", lampiran:"vertebrat",
 kadNama:"Mega Biodiversiti", kadEm:"\u{1F33F}", kadFakta:"Malaysia ialah salah satu daripada 12 negara mega biodiversiti di dunia.",
 bosKadNama:"Rafflesia", bosKadEm:"\u{1F33A}", bosKadFakta:"Rafflesia mempunyai bunga terbesar di dunia dan boleh ditemui di hutan Sabah, Sarawak dan Semenanjung.",
 soalan:[
 {j:"pilih",t:"Biodiversiti bermaksud:",p:["Kepelbagaian organisma hidup","Bilangan manusia di sesuatu kawasan","Jenis batuan dalam kerak Bumi","Keadaan cuaca di sesuatu tempat"],b:0,u:"Biodiversiti merangkumi kepelbagaian spesies, genetik dan ekosistem."},
 {j:"pilih",t:"Ciri utama yang membezakan mamalia daripada kumpulan haiwan lain ialah:",p:["Menyusukan anak","Bertelur","Mempunyai sisik","Bernafas melalui insang"],b:0,u:"Mamalia juga mempunyai rambut atau bulu roma."},
 {j:"pilih",t:"Haiwan yang berkulit lembap dan bertelur di dalam air ialah:",p:["Amfibia","Reptilia","Burung","Mamalia"],b:0,u:"Contohnya katak."},
 {j:"pilih",t:"Tumbuhan yang mempunyai urat daun selari dan akar serabut ialah:",p:["Monokotiledon","Dikotiledon","Paku-pakis","Lumut"],b:0,u:"Contohnya padi, jagung dan rumput."},
 {j:"pilih",t:"Paku-pakis dikelaskan sebagai tumbuhan:",p:["Tidak berbunga","Berbunga","Monokotiledon","Dikotiledon"],b:0,u:"Paku-pakis membiak melalui spora."},
 {j:"pilih",t:"Cendawan tidak dikelaskan sebagai tumbuhan kerana ia:",p:["Tiada klorofil","Tiada sel","Bergerak bebas","Bertulang belakang"],b:0,u:"Fungi mendapatkan makanan daripada bahan organik."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kelawar tergolong dalam kumpulan:",p:["Mamalia","Reptilia","Amfibia","Burung"],b:0,u:"Carta menunjukkan kelawar di bawah mamalia kerana ia menyusukan anaknya."},
 {j:"banyak",t:"Pilih SEMUA kepentingan biodiversiti kepada manusia.",p:["Sumber makanan","Sumber ubat-ubatan","Tarikan pelancongan","Punca banjir kilat","Sumber jerebu"],b:[0,1,2],u:"Hutan yang pelbagai sebenarnya membantu mengurangkan banjir."}],
 bos:{j:"pilih",t:"Spesies yang hanya ditemui secara semula jadi di satu kawasan tertentu dipanggil spesies:",p:["Endemik","Invasif","Pupus","Peliharaan"],b:0,u:"Contohnya monyet Belanda yang endemik di Borneo."}},

{n:2, tempat:"Jejantas Kanopi", sk:"1.1 / 1.2 Ciri kumpulan taksonomi dan pengurusan biodiversiti", lampiran:"ancaman",
 kadNama:"Kera Belanda", kadEm:"\u{1F412}", kadFakta:"Monyet Belanda (bekantan) berhidung panjang ialah spesies endemik Borneo yang hidup di hutan paya bakau dan tepi sungai.",
 bosKadNama:"Kekunci Dikotomi", bosKadEm:"\u{1F511}", bosKadFakta:"Kekunci dikotomi mengenal pasti organisma melalui siri soalan yang setiap satunya ada dua pilihan jawapan.",
 soalan:[
 {j:"pilih",t:"Mengapakah kelawar dikelaskan sebagai mamalia walaupun boleh terbang?",p:["Ia menyusukan anak dan berbulu roma","Ia mempunyai bulu pelepah dan paruh","Ia bertelur di dalam sarang di pokok","Ia bernafas dengan insang semasa kecil"],b:0,u:"Kebolehan terbang bukan ciri yang menentukan kumpulan."},
 {j:"pilih",t:"Penyu dikelaskan sebagai reptilia kerana ia:",p:["Bersisik kering dan bertelur bercangkerang","Hidup di laut dan pandai berenang","Bernafas dengan insang di dalam air","Menyusukan anaknya selepas menetas"],b:0,u:"Penyu bernafas dengan peparu dan naik ke pantai untuk bertelur."},
 {j:"pilih",t:"Mengapakah kekunci dikotomi berguna kepada ahli sains?",p:["Mengenal pasti organisma secara teratur","Mengira bilangan organisma di hutan","Membiakkan organisma yang terancam","Menukar organisma kepada spesies lain"],b:0,u:"Setiap langkah menyingkirkan kumpulan yang tidak sepadan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah pemburuan haram menjejaskan biodiversiti?",p:["Bilangan spesies berkurang dan boleh pupus","Spesies baharu terbentuk dengan cepat","Hutan menjadi lebih luas dan subur","Tiada kesan kerana haiwan cepat membiak"],b:0,u:"Harimau Malaya dan tenggiling terancam akibat pemburuan haram."},
 {j:"pilih",t:"Mengapakah spesies asing invasif mengancam biodiversiti tempatan?",p:["Ia bersaing dan menggantikan spesies tempatan","Ia membantu spesies tempatan membiak lebih cepat","Ia hanya hidup di dalam zoo dan taman","Ia membersihkan sungai daripada semua sampah"],b:0,u:"Contohnya ikan bandaraya yang merebak dalam sungai-sungai di Malaysia."},
 {j:"pilih",t:"Tujuan utama taman negara ialah:",p:["Memulihara habitat dan spesies","Membina kawasan perumahan","Membuka ladang baharu","Membalak kayu balak"],b:0,u:"Taman negara juga digunakan untuk penyelidikan dan eko-pelancongan."},
 {j:"pilih",t:"Beza utama monokotiledon dengan dikotiledon ialah bilangan:",p:["Kotiledon dalam biji benih","Kelopak bunga yang berwarna","Daun pada setiap dahan","Akar yang tumbuh dari batang"],b:0,u:"Mono = satu, di = dua."},
 {j:"pilih",t:"Burung dan mamalia sama-sama:",p:["Berdarah panas","Bertelur","Berbulu pelepah","Bersisik"],b:0,u:"Suhu badan kedua-duanya kekal walaupun suhu persekitaran berubah."}],
 bos:{j:"banyak",t:"Pilih SEMUA langkah memulihara biodiversiti.",p:["Mewujudkan hutan simpan","Menguatkuasakan undang-undang perlindungan hidupan liar","Menanam semula pokok di kawasan terbiar","Membuka tanah hutan untuk ladang","Melepaskan ikan asing ke dalam sungai"],b:[0,1,2],u:"Membuka hutan dan melepaskan spesies asing mengancam biodiversiti."}},

{n:3, tempat:"Stesen Pengenalan", sk:"1.2 Mengaplikasi kekunci dikotomi", lampiran:"kekunci",
 kadNama:"Taksonomi", kadEm:"\u{1F4DA}", kadFakta:"Taksonomi ialah bidang sains yang menamakan dan mengelaskan organisma. Setiap spesies mempunyai nama saintifik yang unik.",
 bosKadNama:"Serangga", bosKadEm:"\u{1F41E}", bosKadFakta:"Serangga ialah kumpulan haiwan terbesar di dunia, dengan lebih sejuta spesies yang telah dinamakan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan kekunci, haiwan P paling mungkin:",p:["Burung enggang","Harimau","Ular sawa","Kupu-kupu"],b:0,u:"P bertulang belakang dan berbulu pelepah."},
 {j:"pilih",t:"Haiwan Q paling mungkin:",p:["Gajah","Burung merak","Katak","Semut"],b:0,u:"Q bertulang belakang, tiada bulu pelepah, dan menyusukan anak."},
 {j:"pilih",t:"Haiwan R bertulang belakang, tiada bulu pelepah dan tidak menyusukan anak. R mungkin:",p:["Biawak","Tapir","Burung pipit","Rama-rama"],b:0,u:"Reptilia, amfibia dan ikan akan sampai ke R."},
 {j:"pilih",t:"Haiwan S tidak bertulang belakang dan mempunyai tiga pasang kaki. S ialah:",p:["Serangga","Labah-labah","Cacing","Siput"],b:0,u:"Labah-labah mempunyai empat pasang kaki."},
 {j:"pilih",t:"Labah-labah akan dikelaskan sebagai:",p:["T","S","R","Q"],b:0,u:"Labah-labah tidak bertulang belakang dan mempunyai empat pasang kaki."},
 {j:"pilih",t:"Kekunci ini tidak dapat membezakan katak daripada ikan. Soalan tambahan paling sesuai selepas langkah 3?",p:["Mempunyai sirip?","Hidup di dalam air?","Berwarna hijau?","Bertelur?"],b:0,u:"Kedua-duanya bertelur dan boleh hidup di air, tetapi hanya ikan bersirip."},
 {j:"pilih",t:"Mengapakah soalan 'Berwarna cantik?' tidak sesuai dalam kekunci dikotomi?",p:["Jawapannya berbeza mengikut pendapat orang","Soalan itu terlalu pendek untuk kekunci","Warna tidak wujud pada haiwan liar","Kekunci hanya boleh bertanya tentang kaki"],b:0,u:"Soalan kekunci mesti berdasarkan ciri yang boleh diperhatikan dengan jelas."},
 {j:"susun",t:"Susun langkah yang dilalui untuk mengenal pasti seekor kucing menggunakan kekunci.",p:["Langkah 1: ada tulang belakang","Langkah 2: tiada bulu pelepah","Langkah 3: menyusukan anak","Dikenal pasti sebagai Q"],b:[0,1,2,3],u:"Kucing ialah mamalia."}],
 bos:{j:"pilih",t:"Murid menemui haiwan tidak bertulang belakang dengan lapan kaki. Mengikut kekunci, ia sampai ke:",p:["T","S","Q","P"],b:0,u:"Jawapan 'Tidak' pada langkah 4 membawa ke T."}},

{n:4, tempat:"Stesen Penyelidikan Hutan", sk:"1.1 Menganalisis kesan aktiviti manusia terhadap biodiversiti", lampiran:"spesies",
 kadNama:"Hutan Hujan Tropika", kadEm:"\u{1F333}", kadFakta:"Hutan hujan tropika Malaysia dianggarkan berusia kira-kira 130 juta tahun, antara yang tertua di dunia.",
 bosKadNama:"Koridor Hijau", bosKadEm:"\u{1F6E4}", bosKadFakta:"Koridor hutan membolehkan haiwan bergerak antara hutan yang terpisah untuk mencari makanan dan pasangan.",
 soalan:[
 {j:"pilih",t:"Kawasan manakah paling tinggi biodiversitinya?",p:["A","B","C","D"],b:0,u:"Hutan asli mempunyai 120 spesies burung dan 210 spesies pokok."},
 {j:"nombor",t:"Berapakah pengurangan spesies pokok dari kawasan A ke kawasan B?",b:120,tol:0.5,suf:"spesies",u:"210 − 90 = 120 spesies."},
 {j:"pilih",t:"Mengapakah bilangan spesies burung di ladang kelapa sawit sangat rendah?",p:["Kurang makanan dan tempat tinggal","Burung tidak suka warna daun sawit","Suhu ladang terlalu sejuk untuk burung","Ladang mempunyai terlalu banyak jenis pokok"],b:0,u:"Kepelbagaian tumbuhan menyokong kepelbagaian haiwan."},
 {j:"pilih",t:"Apakah hubungan antara bilangan spesies pokok dengan suhu purata?",p:["Kurang spesies pokok, suhu lebih tinggi","Kurang spesies pokok, suhu lebih rendah","Tiada sebarang hubungan","Suhu sentiasa sama di semua kawasan"],b:0,u:"Kanopi hutan yang tebal menyejukkan kawasan di bawahnya."},
 {j:"pilih",t:"Kawasan B masih mempunyai 65 spesies burung. Apakah maksudnya?",p:["Hutan boleh pulih sebahagiannya jika dibiarkan","Pembalakan tidak menjejaskan burung langsung","Hutan dibalak lebih baik daripada hutan asli","Burung hanya hidup di hutan yang dibalak"],b:0,u:"Pemulihan mengambil masa berpuluh tahun dan jarang kembali sepenuhnya."},
 {j:"pilih",t:"Kawasan perumahan D mempunyai 15 spesies pokok tetapi hanya 12 spesies burung. Penjelasan paling munasabah?",p:["Pokok hiasan kurang makanan burung","Burung takut dengan warna rumah","Burung tidak memerlukan pokok untuk hidup","Suhu yang tinggi menambah spesies burung"],b:0,u:"Pokok hiasan yang tidak berbuah atau berbunga kurang menyokong hidupan liar."},
 {j:"pilih",t:"Tinjauan ini dijalankan pada satu hari sahaja. Kelemahan utamanya ialah:",p:["Burung berhijrah mungkin terlepas","Pokok akan bergerak pada hari lain","Suhu purata tidak dapat diukur","Kawasan A akan hilang keesokan hari"],b:0,u:"Tinjauan berulang pada musim berbeza memberi gambaran lebih tepat."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Pembalakan mengurangkan bilangan spesies","Ladang satu jenis tanaman mempunyai biodiversiti rendah","Kawasan kurang pokok lebih panas","Kawasan perumahan paling tinggi biodiversitinya","Suhu tidak berkaitan dengan litupan hutan"],b:[0,1,2],u:"Kawasan D paling rendah bilangan spesies burung, dan suhu naik apabila hutan berkurang."}],
 bos:{j:"pilih",t:"Pemaju mahu membuka ladang baharu di sebelah kawasan A. Cadangan paling wajar berdasarkan data?",p:["Kekalkan zon penampan dan koridor hidupan liar","Tebang seluruh kawasan A supaya ladang lebih besar","Tanam satu jenis pokok hiasan di seluruh kawasan","Tiada tindakan kerana burung boleh berpindah"],b:0,u:"Zon penampan dan koridor mengurangkan kehilangan spesies."}},

{n:5, tempat:"Pusat Pemuliharaan", sk:"1.1 Menilai pengurusan biodiversiti", lampiran:"pulihara",
 kadNama:"Harimau Malaya", kadEm:"\u{1F405}", kadFakta:"Bilangan Harimau Malaya di hutan dianggarkan kurang daripada 150 ekor, jauh berkurang berbanding beberapa dekad lalu.",
 bosKadNama:"Renjer", bosKadEm:"\u{1F46E}", bosKadFakta:"Renjer hutan meronda untuk mengeluarkan jerat dan mengesan pemburu haram.",
 soalan:[
 {j:"pilih",t:"Pilihan manakah paling murah?",p:["Pagar elektrik","Rondaan","Koridor hutan","Pusat pembiakan"],b:0,u:"RM1 juta setahun."},
 {j:"pilih",t:"Pilihan manakah menangani punca utama harimau mati dibunuh di hutan?",p:["Rondaan anti-pemburuan haram","Pagar elektrik di sekeliling kampung","Pusat pembiakan dalam kurungan","Koridor hutan antara hutan simpan"],b:0,u:"Jerat dan pemburuan haram membunuh banyak harimau di habitat semula jadi."},
 {j:"pilih",t:"Nilaikan pusat pembiakan sebagai satu-satunya langkah pemuliharaan.",p:["Tidak cukup; harimau perlu habitat liar","Mencukupi, kerana bilangan harimau akan bertambah","Mencukupi, kerana ia menarik lebih ramai pelancong","Tidak perlu langsung, kerana harimau tidak terancam"],b:0,u:"Tanpa habitat dan perlindungan, harimau yang dilepaskan akan menghadapi ancaman yang sama."},
 {j:"pilih",t:"Kerajaan negeri hanya ada RM8 juta setahun. Gabungan paling wajar?",p:["Rondaan dan koridor hutan","Pusat pembiakan dan pagar","Pusat pembiakan sahaja","Pagar elektrik sahaja"],b:0,u:"RM3 juta + RM5 juta melindungi harimau di habitat asal dan meluaskan kawasan jelajahnya."},
 {j:"pilih",t:"Pilihan 2 memerlukan sebahagian tanah dipindah milik. Tindakan paling adil kepada penduduk?",p:["Libatkan penduduk dan beri pampasan","Ambil tanah tanpa memberitahu penduduk","Batalkan semua usaha pemuliharaan","Pindahkan harimau ke negara lain"],b:0,u:"Pemuliharaan berjaya apabila komuniti setempat turut mendapat manfaat."},
 {j:"pilih",t:"Mengapakah pagar elektrik juga membantu harimau, bukan hanya penduduk?",p:["Kurang harimau dibunuh sebagai balasan","Pagar menyediakan makanan tambahan untuk harimau","Harimau suka tinggal berdekatan pagar elektrik","Pagar memanaskan kawasan hutan untuk harimau"],b:0,u:"Konflik manusia-harimau sering berakhir dengan harimau dibunuh."},
 {j:"pilih",t:"Seorang ahli majlis mendakwa pemuliharaan harimau membazir wang kerana harimau tidak memberi manfaat. Nilaikan dakwaan itu.",p:["Salah; harimau menjaga keseimbangan hutan","Betul; harimau hanya membahayakan penduduk kampung","Betul; wang itu lebih baik untuk membuka ladang baharu","Salah; harimau menghasilkan kayu balak yang bernilai"],b:0,u:"Tanpa pemangsa, populasi babi hutan dan rusa boleh meningkat dan merosakkan hutan serta tanaman."},
 {j:"pilih",t:"Cara paling baik untuk mengukur kejayaan program ini selepas lima tahun?",p:["Kira harimau melalui kamera perangkap","Kira bilangan poster yang dicetak","Tanya pelancong sama ada mereka nampak harimau","Ukur panjang pagar yang dibina"],b:0,u:"Kamera perangkap memberi anggaran populasi yang boleh dibandingkan dari tahun ke tahun."}],
 bos:{j:"pilih",t:"Sebuah syarikat menawarkan dana jika namanya digunakan pada koridor hutan. Keputusan paling wajar?",p:["Terima jika syarat pemuliharaan dipatuhi","Tolak kerana syarikat tidak boleh terlibat","Terima dan benarkan syarikat membalak","Terima tetapi batalkan rondaan"],b:0,u:"Kerjasama swasta boleh membantu jika matlamat pemuliharaan tidak dikorbankan."}},

{n:6, tempat:"Makmal Eko-Inovasi", sk:"1.1 / 1.2 Mereka cipta menggunakan pengetahuan biodiversiti",
 kadNama:"Taman Rama-rama", kadEm:"\u{1F98B}", kadFakta:"Rama-rama Raja Brooke ialah rama-rama kebangsaan Malaysia, dinamakan sempena Rajah Sarawak.",
 bosKadNama:"Sains Warga", bosKadEm:"\u{1F4F7}", bosKadFakta:"Orang awam boleh membantu ahli sains dengan merekod pemerhatian hidupan liar melalui aplikasi telefon.",
 soalan:[
 {j:"pilih",t:"Awak mereka taman biodiversiti kecil di sekolah. Ciri paling penting untuk menarik pelbagai haiwan?",p:["Pokok tempatan yang pelbagai dan kolam kecil","Rumput tiruan yang sentiasa hijau tanpa perlu disiram","Satu jenis bunga hiasan import yang sangat cantik","Lantai simen supaya taman sentiasa bersih"],b:0,u:"Kepelbagaian habitat menyokong kepelbagaian spesies."},
 {j:"pilih",t:"Awak mereka aplikasi kekunci dikotomi untuk mengenal pasti pokok di sekolah. Soalan pertama paling sesuai?",p:["Adakah daunnya berurat selari?","Adakah pokok ini cantik?","Adakah pokok ini mahal?","Adakah pokok ini tumbuh cepat?"],b:0,u:"Ciri yang boleh diperhatikan dengan jelas memisahkan monokotiledon dan dikotiledon."},
 {j:"pilih",t:"Awak merancang kempen menentang pembelian produk hidupan liar haram. Mesej paling berkesan?",p:["Pembelian menggalakkan pemburuan haram","Produk hidupan liar sangat mahal di pasaran","Haiwan liar tidak cantik untuk dijadikan perhiasan","Hanya pelancong asing membeli produk ini"],b:0,u:"Permintaan pembeli mendorong pemburuan haram."},
 {j:"pilih",t:"Kampung awak mahu menjana pendapatan daripada hutan tanpa memusnahkannya. Idea paling mampan?",p:["Eko-pelancongan berpandu oleh penduduk tempatan","Menjual kayu balak secara besar-besaran","Membuka kilang di tengah hutan","Menjual anak burung liar kepada pelancong"],b:0,u:"Eko-pelancongan memberi insentif untuk menjaga hutan."},
 {j:"pilih",t:"Awak mereka projek memantau burung di sekolah. Kaedah pengumpulan data paling baik?",p:["Kira burung pada masa dan tempat sama","Kira burung sekali sahaja pada hari yang cerah","Tanya rakan berapa ekor burung yang mereka ingat","Ambil gambar burung paling cantik sahaja"],b:0,u:"Pemerhatian berulang yang konsisten membolehkan perbandingan."},
 {j:"pilih",t:"Sungai di kawasan awak dipenuhi ikan bandaraya. Cadangan paling wajar?",p:["Tangkap dan keluarkan ikan bandaraya secara berkala","Lepaskan lebih banyak ikan asing untuk memakannya","Racun seluruh sungai supaya semua ikan mati","Biarkan sahaja kerana ikan itu cantik"],b:0,u:"Mengawal spesies invasif membantu ikan tempatan pulih."},
 {j:"pilih",t:"Awak mereka poster tentang tumbuhan ubatan tempatan. Nasihat paling bertanggungjawab?",p:["Dapatkan nasihat pakar dahulu","Petik semua tumbuhan ubatan dari hutan","Gunakan tumbuhan ubatan untuk menggantikan semua ubat doktor","Jual benih tumbuhan ubatan tanpa label"],b:0,u:"Biodiversiti ialah sumber ubat, tetapi penggunaan mesti selamat dan mampan."},
 {j:"pilih",t:"Bagaimanakah awak menilai sama ada taman biodiversiti sekolah berjaya?",p:["Bandingkan bilangan spesies sebelum dan selepas taman dibina","Kira bilangan murid yang melawat taman setiap hari","Ukur kos membina taman sahaja","Tanya guru sama ada taman itu cantik"],b:0,u:"Pertambahan spesies menunjukkan taman menyokong biodiversiti."}],
 bos:{j:"buka",
  t:"Sekolah awak mempunyai sebidang tanah kosong di belakang bangunan. Reka satu projek untuk menjadikannya kawasan biodiversiti yang boleh digunakan untuk pembelajaran.",
  arahan:"Terangkan reka bentuk kawasan itu, spesies tumbuhan tempatan yang dipilih dan sebabnya, haiwan yang dijangka tertarik, cara murid mengelaskan organisma di situ (contohnya kekunci dikotomi), cara mengukur kejayaan projek, serta kos dan penglibatan komuniti.",
  u:"Jawapan TP6 yang kukuh memilih spesies tempatan yang pelbagai, mengaitkan habitat dengan kepelbagaian haiwan, dan merancang pengukuran bilangan spesies serta kos yang realistik."}}
];

module.exports = {
  id:"t2b1", tingkatan:2, kod:"1.0 Biodiversiti",
  tajuk:"Laluan Rimba",
  subtajuk:"Sains Ting. 2 · Bab 1 Biodiversiti",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud biodiversiti, kepentingannya dan ciri kumpulan organisma utama. Langkah seterusnya ialah menjelaskan asas pengelasan organisma.",
   2:"{n} memahami ciri kumpulan taksonomi dan kesan aktiviti manusia terhadap biodiversiti. Perlu lebih banyak latihan menggunakan kekunci dikotomi.",
   3:"{n} boleh menggunakan kekunci dikotomi untuk mengenal pasti organisma dan mencadangkan soalan tambahan. Galakkan memilih ciri yang boleh diperhatikan dengan jelas.",
   4:"{n} mampu menganalisis data tinjauan spesies untuk menerangkan kesan pembalakan dan pertanian terhadap biodiversiti. Seterusnya latih menilai pilihan pemuliharaan.",
   5:"{n} dapat menilai pilihan pemuliharaan berdasarkan kos, kesan kepada spesies dan komuniti. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta projek biodiversiti yang kreatif, praktikal dan mengambil kira komuniti. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Biodiversiti. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ vertebrat:R_VERTEBRAT, ancaman:R_ANCAM, kekunci:T_KEKUNCI, spesies:T_SPESIES, pulihara:T_PULIHARA },
  aras:ARAS
};
