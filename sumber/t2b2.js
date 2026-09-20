/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 2.0 Ekosistem.
   Jalankan `node bina.js t2b2` untuk menyemak dan menghasilkan bank-t2b2.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 49.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai ekosistem.",
"Memahami ekosistem serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai ekosistem untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai ekosistem dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai ekosistem dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai ekosistem dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_RANTAI = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Padi",
    "Belalang",
    "Katak",
    "Ular",
    "Helang",
    "Pengurai"
  ],
  "kapsyen": "Rajah 1 · Rantai makanan di sawah padi.",
  "alt": "Rantai makanan menegak: padi dimakan belalang, belalang dimakan katak, katak dimakan ular, ular dimakan helang, dan akhirnya diuraikan oleh pengurai"
};

const R_KITARAIR = {
  "jenis": "aliran",
  "mod": "kitar",
  "nod": [
    "Air di laut & tasik",
    "Sejatan & transpirasi",
    "Awan terbentuk",
    "Hujan turun"
  ],
  "kapsyen": "Rajah 1 · Kitar air.",
  "alt": "Rajah kitaran empat kotak: air di laut dan tasik, sejatan dan transpirasi, awan terbentuk, hujan turun, kemudian kembali ke laut dan tasik"
};

const T_SIRATAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Organisma</th>'+
'<th>Memakan</th></tr></thead><tbody>'+
'<tr><td>Belalang</td><td>Padi</td></tr>'+
'<tr><td>Tikus</td><td>Padi</td></tr>'+
'<tr><td>Katak</td><td>Belalang</td></tr>'+
'<tr><td>Ular</td><td>Katak, tikus</td></tr>'+
'<tr><td>Burung helang</td><td>Ular, tikus</td></tr>'+
'</tbody></table></div><p class="qnote">Siratan makanan di sebuah sawah padi. Bakteria dan kulat menguraikan organisma yang mati.</p>';

const T_BURUNG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tahun</th>'+
'<th class="n">Pasangan burung hantu jelapang</th><th class="n">Anggaran tikus sehektar</th><th class="n">Hasil sawit (tan sehektar)</th></tr></thead><tbody>'+
'<tr><td>2020</td><td class="n">0</td><td class="n">300</td><td class="n">18</td></tr>'+
'<tr><td>2021</td><td class="n">10</td><td class="n">220</td><td class="n">19</td></tr>'+
'<tr><td>2022</td><td class="n">25</td><td class="n">120</td><td class="n">21</td></tr>'+
'<tr><td>2023</td><td class="n">30</td><td class="n">90</td><td class="n">22</td></tr>'+
'</tbody></table></div><p class="qnote">Sebuah ladang kelapa sawit memasang kotak sarang untuk burung hantu jelapang mulai 2021 dan berhenti menggunakan racun tikus. Data rekaan.</p>';

const T_KAWAL =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kaedah</th>'+
'<th>Kos permulaan</th><th>Masa berkesan</th><th>Kesan sampingan</th></tr></thead><tbody>'+
'<tr><td>Racun serangga kimia</td><td>Rendah</td><td>Serta-merta, perlu diulang</td><td>Membunuh serangga berguna, mencemarkan air</td></tr>'+
'<tr><td>Melepaskan pemangsa semula jadi</td><td>Sederhana</td><td>Beberapa bulan</td><td>Hampir tiada jika spesies tempatan</td></tr>'+
'<tr><td>Menanam bunga menarik serangga pemangsa di batas</td><td>Rendah</td><td>Satu musim</td><td>Menambah biodiversiti</td></tr>'+
'</tbody></table></div><p class="qnote">Pilihan untuk mengawal perosak di sebuah kawasan sawah padi.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Sawah Padi", sk:"2.1 / 2.3 Komponen ekosistem", lampiran:"rantai",
 kadNama:"Pengurai", kadEm:"\u{1F344}", kadFakta:"Tanpa bakteria dan kulat pengurai, daun dan bangkai akan bertimbun dan nutrien tidak kembali ke tanah.",
 bosKadNama:"Ekosistem", bosKadEm:"\u{1F30F}", bosKadFakta:"Ekosistem terdiri daripada komuniti organisma dan persekitaran fizikalnya seperti tanah, air dan udara.",
 soalan:[
 {j:"pilih",t:"Organisma yang menghasilkan makanan sendiri melalui fotosintesis dipanggil:",p:["Pengeluar","Pengguna primer","Pengurai","Karnivor"],b:0,u:"Tumbuhan hijau ialah pengeluar."},
 {j:"pilih",t:"Berdasarkan Rajah 1, belalang yang memakan daun padi ialah:",p:["Pengguna primer","Pengeluar","Karnivor sekunder","Pengurai"],b:0,u:"Pengguna primer ialah herbivor yang memakan pengeluar."},
 {j:"pilih",t:"Contoh pengurai ialah:",p:["Kulat","Rumput","Katak","Helang"],b:0,u:"Bakteria dan kulat menguraikan bahan organik."},
 {j:"pilih",t:"Sekumpulan organisma daripada spesies yang sama di satu habitat dipanggil:",p:["Populasi","Komuniti","Ekosistem","Biosfera"],b:0,u:"Komuniti pula terdiri daripada beberapa populasi yang berlainan."},
 {j:"pilih",t:"Hubungan antara lebah dengan bunga ialah:",p:["Mutualisme","Parasitisme","Komensalisme","Persaingan"],b:0,u:"Lebah mendapat nektar, bunga didebungakan."},
 {j:"pilih",t:"Kutu yang menghisap darah pada kepala manusia menunjukkan hubungan:",p:["Parasitisme","Mutualisme","Komensalisme","Mangsa-pemangsa"],b:0,u:"Kutu mendapat manfaat, manusia dirugikan."},
 {j:"pilih",t:"Proses tumbuhan membebaskan wap air ke udara dalam kitar air ialah:",p:["Transpirasi","Kondensasi","Kerpasan","Respirasi"],b:0,u:"Transpirasi berlaku melalui stoma pada daun."},
 {j:"banyak",t:"Pilih SEMUA contoh persaingan.",p:["Pokok di hutan berebut cahaya","Dua ekor kucing berebut makanan","Rumpai dan padi berebut nutrien","Lebah menghisap nektar bunga","Burung memakan ulat"],b:[0,1,2],u:"Lebah dan bunga ialah mutualisme; burung dan ulat ialah mangsa-pemangsa."}],
 bos:{j:"pilih",t:"Paku langsuyar tumbuh pada dahan pokok besar untuk mendapat cahaya tanpa merosakkan pokok itu. Hubungan ini ialah:",p:["Komensalisme","Parasitisme","Mutualisme","Persaingan"],b:0,u:"Satu pihak mendapat manfaat, pihak lain tidak terjejas."}},

{n:2, tempat:"Tepi Hutan", sk:"2.1 / 2.2 / 2.3 Aliran tenaga, kitar dan interaksi", lampiran:"kitarair",
 kadNama:"Rantai Makanan", kadEm:"\u{1F517}", kadFakta:"Hanya kira-kira 10% tenaga dipindahkan dari satu aras ke aras seterusnya dalam rantai makanan.",
 bosKadNama:"Kitar Karbon", bosKadEm:"\u{267B}", bosKadFakta:"Karbon bergerak antara udara, tumbuhan, haiwan dan tanah melalui fotosintesis, respirasi, penguraian dan pembakaran.",
 soalan:[
 {j:"pilih",t:"Mengapakah rantai makanan jarang melebihi lima aras?",p:["Tenaga berkurang di setiap aras","Pemangsa terakhir tidak perlu makan","Tumbuhan hanya boleh dimakan sekali","Pengurai memakan semua pemangsa"],b:0,u:"Sebahagian besar tenaga digunakan untuk hidup atau hilang sebagai haba."},
 {j:"pilih",t:"Dalam rantai makanan padi → tikus → ular → helang, helang ialah:",p:["Karnivor sekunder","Pengguna primer","Pengeluar","Pengurai"],b:0,u:"Ular ialah karnivor primer yang memakan herbivor; helang yang memakan ular ialah karnivor sekunder."},
 {j:"pilih",t:"Apakah peranan pengurai dalam kitar nutrien?",p:["Memulangkan nutrien ke tanah","Menghasilkan oksigen untuk haiwan","Memakan semua haiwan yang hidup","Menyerap cahaya matahari"],b:0,u:"Nutrien itu kemudian diserap semula oleh tumbuhan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah penebangan hutan mengganggu kitar air?",p:["Kurang transpirasi, jadi kurang wap air untuk hujan","Lebih banyak pokok menyerap air hujan ke dalam akar","Air hujan tidak lagi jatuh ke tanah di kawasan itu","Semua sungai menjadi lebih dalam dan lebih bersih"],b:0,u:"Tanah juga lebih mudah terhakis dan air cepat mengalir ke sungai."},
 {j:"pilih",t:"Bagaimanakah pembakaran bahan api fosil mengganggu kitar karbon?",p:["Menambah karbon dioksida di udara","Menambah bilangan pokok di hutan","Mengurangkan penguraian bangkai","Menukar oksigen menjadi nitrogen"],b:0,u:"Karbon yang tersimpan berjuta tahun dibebaskan dengan cepat."},
 {j:"pilih",t:"Unta mempunyai bulu mata yang panjang dan tebal. Penyesuaian ini membantunya:",p:["Melindungi mata daripada pasir","Menyimpan air di dalam badan","Melihat dengan jelas pada waktu malam","Menakutkan pemangsa"],b:0,u:"Ribut pasir kerap berlaku di gurun."},
 {j:"pilih",t:"Beruang kutub mempunyai lapisan lemak yang tebal. Penyesuaian ini membantunya:",p:["Kekal panas di tundra","Berenang lebih laju di laut","Menyimpan air untuk kemarau","Menarik perhatian pasangan"],b:0,u:"Lemak ialah penebat haba yang baik."},
 {j:"pilih",t:"Burung hantu jelapang digunakan di ladang sawit untuk mengawal tikus. Ini contoh:",p:["Kawalan biologi","Kawalan kimia","Persaingan","Komensalisme"],b:0,u:"Pemangsa semula jadi digunakan untuk mengawal perosak."}],
 bos:{j:"banyak",t:"Pilih SEMUA faktor yang boleh mengurangkan saiz populasi.",p:["Penyakit","Pertambahan pemangsa","Kemarau panjang","Makanan bertambah","Habitat diluaskan"],b:[0,1,2],u:"Makanan bertambah dan habitat yang lebih luas biasanya menambah saiz populasi."}},

{n:3, tempat:"Pondok Petani", sk:"2.1 Mentafsir siratan makanan", lampiran:"siratan",
 kadNama:"Siratan Makanan", kadEm:"\u{1F578}", kadFakta:"Siratan makanan terdiri daripada beberapa rantai makanan yang saling berkait dalam satu ekosistem.",
 bosKadNama:"Burung Helang", bosKadEm:"\u{1F985}", bosKadFakta:"Helang berada di aras tertinggi siratan makanan dan tiada pemangsa semula jadi apabila dewasa.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, pengeluar dalam siratan makanan ini ialah:",p:["Padi","Belalang","Tikus","Katak"],b:0,u:"Padi menghasilkan makanan melalui fotosintesis."},
 {j:"nombor",t:"Berapakah bilangan rantai makanan dalam siratan ini?",b:3,tol:0.05,suf:"rantai",u:"Padi → belalang → katak → ular → helang; padi → tikus → ular → helang; padi → tikus → helang. Jumlahnya 3 rantai."},
 {j:"pilih",t:"Organisma manakah pengguna primer?",p:["Belalang dan tikus","Katak dan ular","Ular dan helang","Padi dan belalang"],b:0,u:"Kedua-duanya memakan padi."},
 {j:"pilih",t:"Dalam rantai padi → tikus → helang, helang ialah:",p:["Karnivor primer","Karnivor sekunder","Pengguna primer","Pengurai"],b:0,u:"Di sini helang memakan herbivor secara terus. Aras organisma bergantung pada rantai."},
 {j:"pilih",t:"Petani membunuh semua ular. Apakah kesan paling awal terhadap populasi katak?",p:["Bertambah","Berkurang","Tidak berubah","Pupus serta-merta"],b:0,u:"Ular ialah pemangsa katak."},
 {j:"pilih",t:"Jika semua ular dibunuh, mengapakah populasi tikus mungkin bertambah dan merosakkan padi?",p:["Pemangsa utamanya berkurang","Tikus makan lebih sedikit padi","Helang menjadi lebih ramai","Belalang pula memakan tikus"],b:0,u:"Helang masih memakan tikus, tetapi tekanan pemangsaan berkurang."},
 {j:"pilih",t:"Racun serangga disembur dan membunuh belalang. Organisma manakah paling terjejas secara langsung?",p:["Katak","Tikus","Padi","Helang"],b:0,u:"Katak dalam siratan ini hanya memakan belalang."},
 {j:"banyak",t:"Pilih SEMUA organisma yang menjadi karnivor dalam siratan ini.",p:["Katak","Ular","Burung helang","Tikus","Belalang"],b:[0,1,2],u:"Tikus dan belalang memakan padi, jadi mereka herbivor."}],
 bos:{j:"pilih",t:"Mengapakah siratan makanan yang mempunyai banyak rantai lebih stabil?",p:["Pemangsa ada makanan lain","Semua organisma memakan padi","Tiada organisma yang mati","Pengurai tidak diperlukan"],b:0,u:"Jika satu mangsa berkurang, pemangsa masih boleh bergantung pada mangsa lain."}},

{n:4, tempat:"Ladang Sawit", sk:"2.3 Menganalisis perubahan populasi", lampiran:"burung",
 kadNama:"Burung Hantu Jelapang", kadEm:"\u{1F989}", kadFakta:"Sepasang burung hantu jelapang dan anak-anaknya boleh memakan ribuan ekor tikus setahun.",
 bosKadNama:"Kawalan Biologi", bosKadEm:"\u{1F33E}", bosKadFakta:"Kawalan biologi menggunakan pemangsa semula jadi untuk mengurangkan perosak tanpa racun kimia.",
 soalan:[
 {j:"pilih",t:"Apakah hubungan antara bilangan burung hantu dengan bilangan tikus?",p:["Burung hantu bertambah, tikus berkurang","Burung hantu bertambah, tikus bertambah","Tiada hubungan antara keduanya","Tikus bertambah, burung hantu berkurang"],b:0,u:"Burung hantu ialah pemangsa tikus."},
 {j:"nombor",t:"Berapakah pengurangan bilangan tikus sehektar dari 2020 hingga 2023?",b:210,tol:0.5,suf:"ekor",u:"300 − 90 = 210 ekor sehektar."},
 {j:"pilih",t:"Mengapakah hasil sawit meningkat dari 2020 hingga 2023?",p:["Kurang tikus merosakkan buah sawit","Burung hantu menyuburkan pokok sawit","Racun tikus digunakan dengan lebih banyak","Pokok sawit ditanam semula setiap tahun"],b:0,u:"Tikus memakan buah sawit dan merosakkan hasil."},
 {j:"pilih",t:"Mengapakah bilangan tikus tidak turun kepada sifar walaupun burung hantu bertambah?",p:["Pemangsa jarang menghapuskan semua mangsa","Burung hantu tidak memakan tikus langsung","Tikus menjadi pemangsa burung hantu","Racun tikus masih digunakan"],b:0,u:"Apabila mangsa berkurang, pemangsa sukar mencarinya dan populasi mencapai keseimbangan."},
 {j:"pilih",t:"Mengapakah ladang itu berhenti menggunakan racun tikus?",p:["Burung hantu mati jika makan tikus beracun","Racun tikus menambah hasil buah sawit","Tikus tidak terkesan langsung oleh racun","Racun tikus menarik lebih banyak burung hantu"],b:0,u:"Racun bergerak ke atas rantai makanan."},
 {j:"pilih",t:"Ramalkan bilangan burung hantu jika tikus hampir tiada di ladang itu.",p:["Berkurang","Bertambah dengan cepat","Tidak berubah langsung","Menjadi dua kali ganda"],b:0,u:"Saiz populasi pemangsa bergantung pada sumber makanan."},
 {j:"pilih",t:"Kotak sarang dipasang pada 2021. Apakah faktor yang dihadkan sebelum itu?",p:["Tempat bersarang","Bilangan tikus","Hasil buah sawit","Cahaya matahari"],b:0,u:"Burung hantu jelapang memerlukan tempat bersarang yang sesuai untuk membiak."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Burung hantu membantu mengawal tikus","Kurang tikus dikaitkan dengan hasil sawit lebih tinggi","Kawalan biologi boleh menggantikan racun tikus","Burung hantu merosakkan pokok sawit","Tikus bertambah selepas kotak sarang dipasang"],b:[0,1,2],u:"Bilangan tikus berkurang setiap tahun selepas 2021."}],
 bos:{j:"pilih",t:"Ladang jiran mahu meniru kaedah ini tetapi masih mahu menggunakan racun tikus. Nasihat paling wajar?",p:["Kurangkan racun; ia membunuh burung hantu","Guna lebih banyak racun supaya lebih cepat","Guna kedua-duanya tanpa sebarang had","Buang kotak sarang dan guna racun sahaja"],b:0,u:"Burung hantu yang memakan tikus beracun juga akan mati."}},

{n:5, tempat:"Jabatan Pertanian", sk:"2.3 / 2.4 Menilai kaedah kawalan perosak", lampiran:"kawal",
 kadNama:"Ikan Gapi", kadEm:"\u{1F41F}", kadFakta:"Ikan gapi memakan jentik-jentik nyamuk dan pernah digunakan untuk membantu mengawal nyamuk di longkang.",
 bosKadNama:"Keseimbangan Alam", bosKadEm:"\u{2696}", bosKadFakta:"Ekosistem seimbang apabila populasi setiap organisma kekal stabil dalam jangka masa panjang.",
 soalan:[
 {j:"pilih",t:"Kaedah manakah paling cepat berkesan?",p:["Racun kimia","Pemangsa semula jadi","Bunga di batas","Semua sama cepat"],b:0,u:"Racun berkesan serta-merta tetapi perlu diulang."},
 {j:"pilih",t:"Mengapakah racun serangga perlu disembur berulang kali?",p:["Perosak kembali, dan pemangsanya turut terbunuh","Racun menambah bilangan perosak dengan serta-merta","Padi memerlukan racun untuk tumbuh","Racun menarik lebih banyak burung pemangsa"],b:0,u:"Tanpa pemangsa, perosak yang tinggal cepat membiak semula."},
 {j:"pilih",t:"Petani mahu kaedah jangka panjang yang murah dan tidak mencemarkan air. Pilihan paling wajar?",p:["Tanam bunga di batas","Racun serangga kimia","Tiada kawalan langsung","Racun setiap hari"],b:0,u:"Kosnya rendah, menambah biodiversiti dan tiada racun."},
 {j:"pilih",t:"Serangan perosak sangat teruk dan padi akan musnah dalam seminggu. Keputusan paling wajar?",p:["Racun terkawal dahulu, kemudian kawalan biologi","Tunggu pemangsa semula jadi membiak selama beberapa bulan","Tanam bunga di batas dan tunggu musim hadapan","Bakar seluruh sawah untuk membunuh semua perosak"],b:0,u:"Situasi kecemasan memerlukan tindakan cepat, tetapi strategi jangka panjang tetap penting."},
 {j:"pilih",t:"Mengapakah pemangsa yang dilepaskan mestilah spesies tempatan?",p:["Spesies asing boleh menjadi perosak baharu","Spesies tempatan lebih mahal harganya","Spesies asing tidak memakan apa-apa","Spesies tempatan membiak lebih perlahan"],b:0,u:"Spesies asing yang dilepaskan boleh mengganggu keseimbangan ekosistem."},
 {j:"pilih",t:"Seorang petani mendakwa kawalan biologi lemah kerana mengambil masa berbulan-bulan. Nilaikan dakwaan itu.",p:["Separuh betul; ia lambat tetapi kesannya berpanjangan","Betul sepenuhnya; racun sentiasa pilihan terbaik","Salah; kawalan biologi berkesan dalam sehari","Salah; kawalan biologi tidak memerlukan masa langsung"],b:0,u:"Kelebihan kawalan biologi ialah kesan jangka panjang dan kurang pencemaran."},
 {j:"pilih",t:"Racun serangga mengalir ke sungai berhampiran. Kesan paling mungkin kepada ekosistem sungai?",p:["Ikan dan serangga air mati","Ikan membesar lebih cepat","Air menjadi lebih jernih","Tiada kesan kepada sungai"],b:0,u:"Pencemaran merebak melalui kitar air ke ekosistem lain."},
 {j:"pilih",t:"Cara paling adil untuk membandingkan keberkesanan kaedah pemangsa semula jadi dengan racun?",p:["Guna petak sawah yang sama saiz dan jenis padi","Guna petak besar untuk racun dan kecil untuk pemangsa","Uji racun pada musim kemarau, pemangsa pada musim hujan","Uji setiap kaedah di negeri yang berbeza"],b:0,u:"Hanya kaedah kawalan patut berbeza."}],
 bos:{j:"pilih",t:"Jabatan Pertanian mahu membantu 200 petani mengurangkan penggunaan racun. Tindakan paling berkesan?",p:["Latihan kawalan biologi untuk petani","Haramkan semua racun tanpa bantuan lain","Beri racun percuma kepada semua petani","Biarkan petani memilih tanpa maklumat"],b:0,u:"Petani perlukan pengetahuan dan sokongan untuk berubah."}},

{n:6, tempat:"Makmal Ekosistem", sk:"2.3 / 2.4 Mereka cipta ekosistem yang seimbang",
 kadNama:"Akuaponik", kadEm:"\u{1F96C}", kadFakta:"Dalam akuaponik, najis ikan menjadi nutrien untuk sayur, dan akar sayur membersihkan air untuk ikan.",
 bosKadNama:"Paya Bakau", bosKadEm:"\u{1F334}", bosKadFakta:"Paya bakau menjadi tempat pembiakan ikan dan udang, dan melindungi pantai daripada hakisan.",
 soalan:[
 {j:"pilih",t:"Awak mereka sistem akuaponik untuk sekolah. Hubungan utama yang digunakan ialah:",p:["Kitar nutrien antara ikan dan tumbuhan","Persaingan antara ikan dan tumbuhan","Parasitisme antara ikan dan sayur","Pemangsaan tumbuhan ke atas ikan"],b:0,u:"Bahan kumuh ikan diuraikan menjadi nutrien untuk tumbuhan."},
 {j:"pilih",t:"Awak mereka terarium tertutup yang boleh bertahan lama. Komponen paling penting?",p:["Tumbuhan, tanah, pengurai dan cahaya","Tumbuhan sahaja tanpa tanah","Haiwan besar tanpa tumbuhan","Pasir kering dan lampu yang sangat panas"],b:0,u:"Ekosistem kecil memerlukan pengeluar, pengurai dan tenaga cahaya."},
 {j:"pilih",t:"Kawasan awak dilanda nyamuk. Cadangan kawalan biologi paling sesuai?",p:["Lepaskan ikan gapi ke longkang","Sembur racun di seluruh kawasan setiap hari","Tebang semua pokok di sekitar rumah","Tutup semua longkang dengan simen"],b:0,u:"Ikan gapi memakan jentik-jentik tanpa racun."},
 {j:"pilih",t:"Awak mereka kempen memulihara paya bakau di pantai kampung. Hujah paling kuat untuk nelayan?",p:["Bakau tempat pembiakan ikan dan udang","Bakau cantik untuk diambil gambar","Bakau mudah dijadikan kayu api","Bakau menghalang angin sejuk"],b:0,u:"Nelayan mendapat manfaat ekonomi langsung daripada bakau yang sihat."},
 {j:"pilih",t:"Awak mahu mengurangkan sisa makanan kantin sambil membantu kebun sekolah. Idea paling sesuai?",p:["Kompos dengan cacing","Buang sisa ke dalam longkang","Bakar sisa makanan setiap petang","Tanam sisa di dalam beg plastik"],b:0,u:"Pengurai menukar sisa kepada baja."},
 {j:"pilih",t:"Kelab sains mahu memindahkan ikan dari kolam sekolah ke kolam baharu. Langkah paling penting?",p:["Sediakan tumbuhan air dan air yang sesuai","Pindahkan semua ikan sekali gus tanpa sebarang persediaan","Isi kolam baharu dengan air paip terus dari hos","Masukkan sebanyak mungkin ikan ke dalam kolam kecil"],b:0,u:"Ikan memerlukan oksigen, makanan dan air yang bersih."},
 {j:"pilih",t:"Awak mereka rancangan main peranan tentang peranan manusia dalam ekosistem. Watak paling penting untuk menyelesaikan konflik?",p:["Pegawai alam sekitar yang berunding","Pemaju yang membina tanpa berunding","Pemburu yang menjual hidupan liar","Penonton yang tidak berbuat apa-apa"],b:0,u:"Isu alam sekitar diselesaikan melalui kerjasama pihak berkuasa dan komuniti."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada sistem akuaponik rekaan awak seimbang?",p:["Pantau ikan dan pertumbuhan sayur","Tanya rakan sama ada sistem itu kelihatan menarik","Timbang tangki kosong sebelum dipasang","Kira bilangan paip yang digunakan"],b:0,u:"Ikan yang sihat dan sayur yang membesar menunjukkan kitar nutrien berfungsi."}],
 bos:{j:"buka",
  t:"Sebuah sungai di kawasan awak tercemar dan bilangan ikan semakin berkurang. Reka satu projek untuk memulihkan ekosistem sungai itu.",
  arahan:"Terangkan punca masalah, organisma dan interaksi yang terlibat (contohnya rantai makanan), langkah pemulihan yang dicadangkan, peranan penduduk dan agensi kerajaan, cara mengukur kejayaan projek, serta kos dan kesan kepada ekonomi setempat.",
  u:"Jawapan TP6 yang kukuh mengaitkan pencemaran dengan gangguan rantai makanan, mencadangkan langkah yang realistik, dan merancang pengukuran populasi atau kualiti air."}}
];

module.exports = {
  id:"t2b2", tingkatan:2, kod:"2.0 Ekosistem",
  tajuk:"Laluan Ekosistem",
  subtajuk:"Sains Ting. 2 · Bab 2 Ekosistem",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali pengeluar, pengguna, pengurai dan jenis interaksi antara organisma. Langkah seterusnya ialah menjelaskan aliran tenaga dalam rantai makanan.",
   2:"{n} memahami aliran tenaga, kitar nutrien dan penyesuaian organisma serta dapat menjelaskannya. Perlu lebih banyak latihan mentafsir siratan makanan.",
   3:"{n} boleh mentafsir siratan makanan dan meramal kesan perubahan populasi. Galakkan menerangkan sebab setiap ramalan.",
   4:"{n} mampu menganalisis data populasi pemangsa dan mangsa untuk menerangkan kawalan biologi. Seterusnya latih menilai kaedah kawalan perosak.",
   5:"{n} dapat menilai kaedah kawalan perosak berdasarkan kos, masa dan kesan kepada ekosistem. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta projek yang mengekalkan atau memulihkan keseimbangan ekosistem secara kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ekosistem. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ rantai:R_RANTAI, kitarair:R_KITARAIR, siratan:T_SIRATAN, burung:T_BURUNG, kawal:T_KAWAL },
  aras:ARAS
};
