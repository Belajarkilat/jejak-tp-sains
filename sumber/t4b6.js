/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 8.0 Unsur dan Bahan.
   Fail ini disunting tangan. Jalankan `node bina.js t4b6` untuk menyemaknya
   dan menghasilkan bank-t4b6.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4 dan 5, Bahagian Pembangunan Kurikulum, muka 86.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai unsur dan bahan.",
"Memahami unsur dan bahan serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai unsur dan bahan serta dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai unsur dan bahan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai unsur dan bahan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai unsur dan bahan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_ATOM = {
  jenis:"struktur", mod:"lapisan",
  lapisan:[
    { label:"Nukleus", tebal:1, isi:"merahLembut" },
    { label:"Elektron", tebal:2, isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 1 · Struktur asas sebuah atom.",
  alt:"Rajah lapisan sepusat: nukleus mengandungi proton dan neutron di tengah, dikelilingi petala elektron"
};

const R_ION = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Atom natrium: 11 proton, 11 elektron, neutral", isi:"hijauLembut", panah:"hijau" },
    { label:"Menderma 1 elektron kepada atom klorin", isi:"kuningLembut", panah:"kuning" },
    { label:"Ion Na+: 11 proton, 10 elektron, cas positif", isi:"merahLembut" },
  ],
  kapsyen:"Rajah 1 · Pembentukan ion natrium melalui pemindahan elektron.",
  alt:"Rajah aliran menegak tiga langkah: atom natrium neutral, menderma satu elektron, terbentuk ion natrium bercas positif"
};

const T_ISOTOP =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Isotop</th>'+
'<th class="n">Bilangan Proton</th><th class="n">Bilangan Neutron</th><th class="n">Nombor Nukleon</th></tr></thead><tbody>'+
'<tr><td>Karbon-12</td><td class="n">6</td><td class="n">6</td><td class="n">12</td></tr>'+
'<tr><td>Karbon-13</td><td class="n">6</td><td class="n">7</td><td class="n">13</td></tr>'+
'<tr><td>Karbon-14</td><td class="n">6</td><td class="n">8</td><td class="n">14</td></tr>'+
'</tbody></table></div><p class="qnote">Ketiga-tiga isotop karbon ini mempunyai bilangan proton yang sama tetapi bilangan neutron yang berbeza.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Zarah", sk:"8.1 Asas Jirim",
 kadNama:"Atom Ferum", kadEm:"\u{1F9F2}", kadFakta:"Tukul besi dibina daripada berjuta atom ferum yang tersusun rapat sebagai bahan atom, tetapi karat pada permukaannya ialah bahan ion.",
 bosKadNama:"Molekul Air", bosKadEm:"\u{1F4A7}", bosKadFakta:"Air ialah bahan molekul: setiap molekulnya mengandungi dua atom hidrogen berikat dengan satu atom oksigen, tanpa sebarang cas.",
 soalan:[
 {j:"pilih",t:"Bahan yang terdiri daripada atom bagi satu unsur sahaja, tersusun rapat tanpa membentuk ikatan kimia berasingan, dipanggil:",p:["Bahan atom","Bahan molekul","Bahan ion","Bahan aloi"],b:0,u:"Ferum tulen dan karbon ialah contoh bahan atom."},
 {j:"pilih",t:"Gas hidrogen yang terdapat di udara wujud sebagai bahan:",p:["Molekul","Atom bebas","Ion positif","Ion negatif"],b:0,u:"Dua atom hidrogen berikat membentuk satu molekul H2, tanpa cas."},
 {j:"pilih",t:"Berdasarkan kad fakta, apakah yang membezakan karat daripada tukul besi dari segi jenis bahan?",p:["Karat ialah bahan ion manakala tukul besi ialah bahan atom","Karat ialah bahan atom manakala tukul besi ialah bahan molekul","Kedua-duanya ialah bahan atom tetapi berlainan warna","Karat ialah bahan molekul manakala tukul besi ialah bahan ion"],b:0,u:"Proses pengaratan mengubah ferum (bahan atom) kepada ferum oksida yang bercas, iaitu bahan ion."},
 {j:"pilih",t:"Jus limau mengandungi hidrogen dalam bentuk bahan:",p:["Ion","Atom bebas","Molekul gas","Aloi"],b:0,u:"Dalam larutan berasid, hidrogen wujud sebagai ion H+."},
 {j:"banyak",t:"Pilih SEMUA contoh bahan atom.",p:["Tukul besi","Wayar kuprum tulen","Karat besi","Garam biasa","Kepingan aluminium"],b:[0,1,4],u:"Karat dan garam ialah bahan ion, dibina daripada ion bercas, bukan atom neutral."},
 {j:"pilih",t:"Apakah persamaan antara bahan atom dan bahan molekul?",p:["Kedua-duanya tidak membawa sebarang cas elektrik","Kedua-duanya hanya terdiri daripada satu jenis unsur","Kedua-duanya hanya wujud dalam keadaan gas","Kedua-duanya terbentuk melalui pemindahan elektron"],b:0,u:"Bahan ion sahaja yang bercas; atom dan molekul adalah neutral."},
 {j:"pilih",t:"Manakah PALING tepat menerangkan bahan ion?",p:["Bahan yang dibina daripada ion positif dan ion negatif tersusun dalam kekisi","Bahan yang dibina daripada dua atau lebih atom unsur yang sama","Bahan yang hanya wujud dalam bentuk cecair pada suhu bilik","Bahan yang tidak boleh mengkonduksikan elektrik dalam sebarang keadaan"],b:0,u:"Ion positif dan ion negatif tersusun secara berselang-seli dalam kekisi bahan ion, contohnya natrium klorida."},
 {j:"pilih",t:"Mengapakah air tulen (H2O) dikelaskan sebagai bahan molekul dan bukan bahan ion?",p:["Molekulnya neutral secara keseluruhan","Ia hanya mengandungi satu jenis atom sahaja","Ia sentiasa mengkonduksikan elektrik dengan baik","Ia terbentuk daripada pemindahan elektron antara atom"],b:0,u:"Molekul air terbentuk melalui perkongsian elektron, bukan pemindahan, jadi ia kekal neutral."}],
 bos:{j:"pilih",t:"Sebatian ammonium klorida terdiri daripada ion ammonium (NH4+) dan ion klorida (Cl-). Berdasarkan takrif, bahan ini dikelaskan sebagai:",p:["Bahan ion, kerana dibina daripada ion bercas positif dan negatif","Bahan molekul, kerana mengandungi lebih daripada satu jenis atom","Bahan atom, kerana ammonium mengandungi atom nitrogen dan hidrogen","Bukan mana-mana kategori kerana ia sebatian, bukan unsur"],b:0,u:"Kehadiran ion NH4+ dan Cl- yang bercas mengelaskannya sebagai bahan ion, walaupun ia sebatian, bukan unsur tunggal."}},

{n:2, tempat:"Jadual Berkala", sk:"8.2 Jadual Berkala Unsur Moden", lampiran:"atom",
 kadNama:"Nombor Proton", kadEm:"\u{269B}\u{FE0F}", kadFakta:"Kedudukan unsur dalam Jadual Berkala Unsur Moden disusun mengikut nombor proton yang semakin meningkat, bukan mengikut jisim atom seperti jadual awal abad ke-19.",
 bosKadNama:"Kumpulan dan Kala", bosKadEm:"\u{1F9EA}", bosKadFakta:"Unsur dalam kumpulan yang sama berkongsi bilangan elektron valens yang sama, itulah sebabnya mereka menunjukkan sifat kimia yang serupa.",
 soalan:[
 {j:"pilih",t:"Unsur dalam Jadual Berkala Unsur Moden disusun mengikut susunan menaik:",p:["Nombor proton","Nombor neutron","Nombor nukleon","Bilangan petala elektron"],b:0,u:"Nombor proton (nombor atom) menentukan identiti dan kedudukan unsur."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bahagian manakah atom yang mengandungi proton dan neutron?",p:["Nukleus di tengah atom","Petala elektron terluar","Kedua-dua petala elektron","Ruang kosong antara petala"],b:0,u:"Proton dan neutron terkumpul rapat di nukleus; elektron mengelilinginya pada petala."},
 {j:"pilih",t:"Unsur dalam kumpulan (lajur) yang sama dalam Jadual Berkala mempunyai persamaan:",p:["Bilangan elektron valens","Bilangan petala elektron","Nombor proton","Nombor nukleon"],b:0,u:"Elektron valens yang serupa menentukan sifat kimia yang serupa dalam satu kumpulan."},
 {j:"pilih",t:"Unsur dalam kala (baris) yang sama dalam Jadual Berkala mempunyai persamaan:",p:["Bilangan petala yang terisi","Bilangan elektron valens","Nombor proton","Jenis ikatan kimia"],b:0,u:"Semakin ke kanan dalam satu kala, petala yang sama diisi dengan lebih banyak elektron."},
 {j:"susun",t:"Susun unsur berikut mengikut nombor proton yang menaik: Karbon (6), Oksigen (8), Neon (10), Helium (2).",p:["Helium","Karbon","Oksigen","Neon"],b:[0,1,2,3],u:"2, 6, 8, 10 — nombor proton menaik menentukan kedudukan dalam Jadual Berkala."},
 {j:"pilih",t:"Mengapakah prinsip susunan Jadual Berkala Unsur Moden dianggap lebih tepat berbanding jadual berasaskan jisim atom?",p:["Nombor proton adalah unik dan tetap bagi setiap unsur","Nombor proton lebih mudah diukur secara eksperimen","Jisim atom tidak berkaitan dengan bilangan zarah","Susunan mengikut jisim menghasilkan lebih sedikit unsur"],b:0,u:"Sesetengah unsur mempunyai jisim atom yang bertindih walaupun nombor protonnya berbeza, jadi susunan mengikut nombor proton lebih konsisten."},
 {j:"pilih",t:"Unsur X mempunyai 12 proton dan 2 elektron valens. Dalam kumpulan manakah unsur X berkemungkinan berada?",p:["Kumpulan 2","Kumpulan 12","Kumpulan 18","Kumpulan 1"],b:0,u:"Bilangan elektron valens menentukan nombor kumpulan bagi unsur kumpulan utama."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang ditunjukkan oleh petala elektron terluar sesebuah atom?",p:["Bilangan elektron valens dalam ikatan","Bilangan neutron dalam nukleus atom","Jumlah keseluruhan jisim atom tersebut","Kestabilan nukleus atom terhadap pereputan"],b:0,u:"Elektron pada petala terluar (elektron valens) yang terlibat semasa pembentukan ikatan kimia."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang benar mengenai prinsip susunan Jadual Berkala Unsur Moden.",p:["Unsur disusun mengikut nombor proton yang menaik","Unsur dalam kumpulan yang sama mempunyai bilangan elektron valens yang sama","Unsur dalam kala yang sama mempunyai bilangan petala elektron yang sama","Semua unsur logam terletak di sebelah kanan jadual","Nombor proton dan bilangan elektron sentiasa berbeza bagi atom neutral"],b:[0,1,2],u:"Logam terletak di sebelah KIRI jadual, dan atom neutral mempunyai bilangan proton yang SAMA dengan bilangan elektron."}},

{n:3, tempat:"Petala Elektron", sk:"8.2 Susunan Elektron dan Pembentukan Ion", lampiran:"ion",
 kadNama:"Susunan Oktet", kadEm:"\u{2728}", kadFakta:"Unsur gas nadir seperti neon dan argon amat stabil kerana petala elektron terluarnya sudah lengkap dengan lapan elektron, susunan yang dipanggil oktet.",
 bosKadNama:"Ion Klorida", bosKadEm:"\u{1F9C2}", bosKadFakta:"Setiap butir garam dapur mengandungi berbilion pasangan ion Na+ dan Cl- yang tersusun kemas dalam kekisi kristal.",
 soalan:[
 {j:"pilih",t:"Atom natrium (nombor proton 11) mempunyai susunan elektron 2.8.1. Untuk mencapai susunan elektron stabil, atom ini akan:",p:["Menderma 1 elektron untuk membentuk ion Na+","Menerima 1 elektron untuk membentuk ion Na-","Menderma 7 elektron untuk membentuk ion Na7+","Menerima 7 elektron untuk membentuk ion Na7-"],b:0,u:"Menderma satu elektron pada petala terluar lebih mudah berbanding menerima tujuh, menghasilkan susunan oktet 2.8."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada bilangan proton atom natrium selepas ia menjadi ion Na+?",p:["Bilangan proton kekal sama seperti asal","Bilangan proton bertambah satu","Bilangan proton berkurang satu","Bilangan proton dan elektron berkurang"],b:0,u:"Pembentukan ion melibatkan pemindahan elektron sahaja; nukleus (proton) tidak berubah."},
 {j:"pilih",t:"Atom klorin (nombor proton 17, susunan elektron 2.8.7) akan mencapai susunan elektron stabil dengan cara:",p:["Menerima 1 elektron untuk membentuk ion Cl-","Menderma 1 elektron untuk membentuk ion Cl+","Menerima 7 elektron untuk membentuk ion Cl7-","Menderma 7 elektron untuk membentuk ion Cl7+"],b:0,u:"Menerima satu elektron menghasilkan susunan oktet 2.8.8, lebih mudah berbanding menderma tujuh."},
 {j:"pilih",t:"Unsur bukan logam cenderung membentuk ion negatif kerana:",p:["Ia menerima elektron untuk melengkapkan petala terluarnya","Ia menderma elektron untuk melengkapkan petala terluarnya","Ia mempunyai lebih banyak proton berbanding neutron","Nukleusnya terlalu kecil untuk memegang elektron tambahan"],b:0,u:"Unsur bukan logam biasanya mempunyai 5 hingga 7 elektron valens, jadi lebih mudah menerima beberapa elektron sahaja."},
 {j:"pilih",t:"Manakah pasangan unsur-ion yang PALING mungkin, berdasarkan kecenderungan mencapai susunan oktet?",p:["Magnesium (2.8.2) membentuk Mg2+","Magnesium (2.8.2) membentuk Mg2-","Oksigen (2.6) membentuk O2+","Oksigen (2.6) membentuk O6-"],b:0,u:"Magnesium menderma 2 elektron valens untuk mencapai susunan 2.8, lebih mudah berbanding menerima 6."},
 {j:"pilih",t:"Apakah maksud susunan elektron 'duplet' bagi atom helium?",p:["Petala pertama lengkap dengan 2 elektron sahaja","Petala pertama lengkap dengan 8 elektron","Atom helium mempunyai 2 petala elektron","Atom helium menderma 2 elektron untuk stabil"],b:0,u:"Petala pertama atom hanya boleh memegang maksimum 2 elektron, jadi ia sudah stabil dengan 2 sahaja."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah atom natrium 'menderma' dan bukan 'berkongsi' elektronnya kepada atom klorin?",p:["Perbezaan kecenderungan menarik elektron menghasilkan pemindahan penuh","Atom natrium tidak mempunyai cukup elektron untuk dikongsi","Perkongsian hanya berlaku antara dua atom bukan logam","Pemindahan penuh hanya berlaku pada suhu yang sangat tinggi"],b:0,u:"Ikatan ion terbentuk melalui pemindahan penuh elektron antara logam dan bukan logam, berbeza daripada ikatan kovalen yang berkongsi elektron."},
 {j:"nombor",t:"Atom kalsium (nombor proton 20, susunan elektron 2.8.8.2) menderma semua elektron valensnya untuk membentuk ion. Berapakah cas ion kalsium yang terhasil?",b:2,tol:0.1,suf:"+",u:"Kalsium menderma 2 elektron valens, menghasilkan ion Ca2+ bercas +2."}],
 bos:{j:"susun",t:"Susun langkah pembentukan ion Na+ dan Cl- daripada atom natrium dan atom klorin mengikut urutan yang betul.",p:["Atom natrium (2.8.1) dan atom klorin (2.8.7) berdekatan","Atom natrium menderma 1 elektron valensnya","Elektron itu diterima oleh atom klorin","Ion Na+ (2.8) dan ion Cl- (2.8.8) terbentuk, kedua-duanya stabil","Daya tarikan elektrostatik menyatukan ion Na+ dan Cl-"],b:[0,1,2,3,4],u:"Pemindahan elektron mendahului pembentukan cas, dan daya tarikan antara cas berlawanan berlaku selepas ion terbentuk."}},

{n:4, tempat:"Isotop", sk:"8.3 Isotop", lampiran:"isotop",
 kadNama:"Nombor Nukleon", kadEm:"\u{1F52C}", kadFakta:"Karbon-14 yang digunakan ahli arkeologi untuk menentukan usia fosil terbentuk secara semula jadi di atmosfera apabila sinar kosmik melanggar atom nitrogen.",
 bosKadNama:"Bilangan Neutron", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Walaupun isotop unsur yang sama mempunyai bilangan proton yang tetap, perbezaan sedikit bilangan neutron boleh menjadikan sesetengah isotop tidak stabil dan meradioaktif.",
 soalan:[
 {j:"pilih",t:"Isotop ialah atom bagi unsur yang sama yang mempunyai:",p:["Bilangan proton yang sama tetapi bilangan neutron yang berbeza","Bilangan neutron yang sama tetapi bilangan proton yang berbeza","Bilangan proton dan neutron yang kedua-duanya berbeza","Bilangan elektron yang berbeza tetapi bilangan proton yang sama"],b:0,u:"Bilangan proton menentukan identiti unsur, jadi ia mesti sama; hanya bilangan neutron berbeza antara isotop."},
 {j:"nombor",t:"Berdasarkan jadual, berapakah bilangan neutron dalam Karbon-14 jika ia mempunyai 6 proton dan nombor nukleon 14?",b:8,tol:0.1,suf:"neutron",u:"Bilangan neutron = nombor nukleon tolak bilangan proton = 14 - 6 = 8."},
 {j:"nombor",t:"Berdasarkan jadual, berapakah nombor nukleon bagi Karbon-13 jika ia mempunyai 6 proton dan 7 neutron?",b:13,tol:0.1,suf:"nukleon",u:"Nombor nukleon = bilangan proton tambah bilangan neutron = 6 + 7 = 13."},
 {j:"pilih",t:"Berdasarkan jadual, apakah persamaan antara Karbon-12, Karbon-13 dan Karbon-14?",p:["Ketiga-tiganya mempunyai 6 proton","Ketiga-tiganya mempunyai bilangan neutron yang sama","Ketiga-tiganya mempunyai nombor nukleon yang sama","Ketiga-tiganya mempunyai bilangan elektron yang berbeza"],b:0,u:"Semua isotop karbon mempunyai 6 proton; itulah yang mengekalkan identitinya sebagai karbon."},
 {j:"pilih",t:"Isotop Uranium-235 mempunyai 92 proton. Berapakah bilangan neutronnya?",p:["143","235","92","327"],b:0,u:"Bilangan neutron = 235 - 92 = 143."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang benar mengenai isotop karbon dalam jadual.",p:["Karbon-14 mempunyai bilangan neutron paling banyak antara ketiga-tiganya","Karbon-12 mempunyai bilangan neutron paling sedikit","Ketiga-tiga isotop mempunyai sifat kimia yang sama kerana bilangan proton sama","Karbon-13 mempunyai lebih banyak proton daripada Karbon-12"],b:[0,1,2],u:"Bilangan proton yang sama pada semua isotop bermakna sifat kimianya serupa; bilangan proton Karbon-13 SAMA dengan Karbon-12, bukan lebih banyak."},
 {j:"pilih",t:"Mengapakah isotop unsur yang sama mempunyai sifat KIMIA yang serupa walaupun jisimnya berbeza?",p:["Bilangan proton dan elektronnya sama, dan itulah yang menentukan sifat kimia","Bilangan neutronnya sama pada semua isotop","Jisim atom tidak memberi kesan kepada tindak balas kimia dalam apa jua keadaan","Semua isotop mempunyai bilangan petala elektron yang berbeza"],b:0,u:"Sifat kimia ditentukan oleh susunan elektron, yang bergantung kepada bilangan proton (sama bagi semua isotop unsur yang sama)."},
 {j:"pilih",t:"Isotop X mempunyai nombor nukleon 40 dan bilangan neutron 20. Apakah bilangan proton unsur X?",p:["20","40","60","10"],b:0,u:"Bilangan proton = nombor nukleon - bilangan neutron = 40 - 20 = 20."}],
 bos:{j:"pilih",t:"Dua sampel dikatakan isotop bagi unsur yang sama. Sampel A mempunyai 8 proton dan 8 neutron; Sampel B mempunyai 8 proton dan 10 neutron. Nilaikan dakwaan ini.",p:["Benar, kerana bilangan proton kedua-duanya sama iaitu 8, walaupun bilangan neutron berbeza","Salah, kerana bilangan neutron mesti sama untuk kedua-duanya dikira isotop","Salah, kerana nombor nukleon kedua-duanya berbeza","Benar, tetapi hanya jika kedua-dua sampel berada dalam keadaan gas"],b:0,u:"Isotop ditakrifkan oleh bilangan proton yang sama; bilangan neutron yang berbeza adalah ciri isotop, bukan alasan untuk menolaknya."}},

{n:5, tempat:"Kegunaan Isotop", sk:"8.3 Kegunaan Isotop dan Pengaratan",
 kadNama:"Karbon-14 Arkeologi", kadEm:"\u{1F3FA}", kadFakta:"Ahli arkeologi menganggarkan usia artifak purba dengan mengukur baki Karbon-14 yang mereput secara perlahan pada kadar yang boleh diramal.",
 bosKadNama:"Kobalt-60", bosKadEm:"\u{2622}\u{FE0F}", bosKadFakta:"Sinar gama daripada Kobalt-60 digunakan untuk mensterilkan peralatan perubatan tanpa perlu haba yang tinggi, jadi peralatan plastik sekali guna tidak cair.",
 soalan:[
 {j:"pilih",t:"Isotop Karbon-14 digunakan secara meluas dalam bidang arkeologi untuk:",p:["Menganggarkan usia fosil atau artifak purba","Membunuh bakteria pada peralatan perubatan","Mengesan kebocoran paip bawah tanah","Menjana tenaga elektrik di loji kuasa"],b:0,u:"Kadar reputan Karbon-14 yang tetap membolehkan usia bahan organik purba dianggarkan."},
 {j:"pilih",t:"Isotop Kobalt-60 sesuai digunakan dalam teknologi makanan untuk:",p:["Membunuh mikroorganisma pada makanan tanpa meninggalkan sisa kimia","Mewarnakan makanan supaya kelihatan lebih segar","Menambah nilai pemakanan makanan tersebut","Memanjangkan hayat makanan dengan menyejukkannya"],b:0,u:"Sinaran daripada Kobalt-60 membunuh mikroorganisma tanpa perlu bahan kimia tambahan, tidak seperti proses penyejukan biasa."},
 {j:"pilih",t:"Isotop Fosforus-32 digunakan dalam bidang pertanian terutamanya untuk:",p:["Mengesan pergerakan baja dalam tumbuhan","Membunuh serangga perosak secara terus","Mengukur kelembapan tanah ladang","Menentukan usia benih yang disimpan"],b:0,u:"Fosforus-32 boleh dikesan semasa ia bergerak melalui sistem tumbuhan, membantu kajian penyerapan baja."},
 {j:"pilih",t:"Sebuah jambatan besi menunjukkan tanda pengaratan pada bahagian yang terdedah kepada air laut. Berdasarkan konsep bahan atom dan ion, apakah yang berlaku?",p:["Ferum (bahan atom) bertukar menjadi ferum oksida (bahan ion) melalui tindak balas dengan oksigen dan air","Ferum bertukar menjadi bahan molekul kerana kehilangan proton","Karat terbentuk apabila ferum menyerap elektron tambahan tanpa sebarang tindak balas kimia","Air laut menukar susunan proton dalam atom ferum secara terus"],b:0,u:"Pengaratan melibatkan pengoksidaan ferum menjadi ion yang bergabung dengan oksigen dan air membentuk karat."},
 {j:"pilih",t:"Jurutera mencadangkan menyaduh jambatan besi dengan lapisan zink untuk mengurangkan pengaratan. Nilaikan kewajaran cadangan ini.",p:["Wajar, kerana zink menghalang ferum bersentuh dengan oksigen dan air","Kurang wajar, kerana zink akan mempercepatkan pengaratan ferum","Wajar, tetapi hanya berkesan pada struktur yang berada jauh daripada air","Kurang wajar, kerana zink tidak boleh bersentuh dengan logam lain"],b:0,u:"Lapisan pelindung menghalang sentuhan terus antara ferum dengan agen pengaratan, iaitu oksigen dan air."},
 {j:"pilih",t:"Manakah penggunaan isotop yang PALING sesuai untuk mengesan kebocoran pada paip bawah tanah yang panjang?",p:["Isotop yang memancarkan sinaran yang boleh dikesan dari permukaan tanah tanpa menggali","Isotop yang mempunyai jangka hayat yang sangat panjang, melebihi seribu tahun","Isotop yang stabil dan tidak memancarkan sebarang sinaran","Isotop yang hanya boleh dikesan dalam makmal tertutup"],b:0,u:"Sinaran yang boleh dikesan dari luar membolehkan kebocoran dikenal pasti tanpa menggali sepanjang paip."},
 {j:"pilih",t:"Mengapakah pemilihan isotop untuk kegunaan perubatan (contohnya Iodin-131) perlu mengambil kira jangka hayatnya?",p:["Jangka hayat yang sesuai memastikan sinaran cukup tetapi tidak berpanjangan dalam badan","Jangka hayat yang panjang sentiasa lebih selamat untuk pesakit","Jangka hayat tidak memberi kesan kepada keberkesanan rawatan","Isotop dengan jangka hayat pendek tidak boleh digunakan dalam perubatan langsung"],b:0,u:"Isotop dengan jangka hayat yang terlalu panjang akan terus meradioaktif dalam badan pesakit lebih lama daripada yang diperlukan untuk rawatan."},
 {j:"pilih",t:"Berdasarkan nota kegunaan isotop, manakah PALING tepat memadankan isotop dengan bidang penggunaannya?",p:["Uranium-235 untuk penjanaan tenaga elektrik","Karbon-14 untuk penjanaan tenaga elektrik","Kobalt-60 untuk arkeologi","Amerisium-241 untuk pertanian"],b:0,u:"Uranium-235 mengalami pembelahan nukleus yang melepaskan tenaga besar, digunakan dalam reaktor loji kuasa nuklear."}],
 bos:{j:"pilih",t:"Sebuah syarikat penerbangan mencadangkan menggunakan Amerisium-241 dalam pengesan asap berbanding kaedah pengesanan asap konvensional. Nilaikan cadangan ini.",p:["Wajar, kerana zarah alfa daripada Amerisium-241 amat sensitif mengesan zarah asap halus di udara","Kurang wajar, kerana Amerisium-241 hanya sesuai untuk industri kertas sahaja","Wajar, kerana ia menggantikan keperluan bekalan elektrik sepenuhnya pada semua peranti","Kurang wajar, kerana zarah alfa tidak berinteraksi dengan zarah asap"],b:0,u:"Zarah alfa daripada Amerisium-241 mengion udara di dalam pengesan; kehadiran asap mengganggu aliran ion ini dan mencetuskan penggera, prinsip yang telah digunakan secara meluas dalam pengesan asap isi rumah."}},

{n:6, tempat:"Reka Bentuk", sk:"8.1 / 8.2 / 8.3 Mereka Bentuk Penyelesaian Bahan",
 kadNama:"Reka Bentuk Bahan", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Sarkofagus keluli dan konkrit yang menyelubungi reaktor Chernobyl direka khusus untuk menahan sinaran daripada bahan radioaktif di dalamnya.",
 bosKadNama:"Penyelesaian Kejuruteraan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kejuruteraan bahan yang baik selalunya menggabungkan sifat beberapa bahan berlainan supaya kelemahan satu bahan diimbangi oleh kekuatan bahan yang lain.",
 soalan:[
 {j:"pilih",t:"Sebuah kilang mahu mereka bekas simpanan bahan kimia berasid. Bahan manakah PALING sesuai berdasarkan sifat tahan karat?",p:["Plastik polimer yang lengai","Ferum tulen tanpa sebarang lapisan pelindung","Kalium tulen kerana ia amat reaktif","Kayu yang dirawat dengan air"],b:0,u:"Polimer plastik yang lengai secara kimia tidak bertindak balas dengan asid, tidak seperti logam yang mudah terhakis."},
 {j:"pilih",t:"Seorang jurutera mereka bekas simpanan bahan buangan radioaktif berjangka hayat panjang. Ciri manakah PALING penting pada bahan pembungkusnya?",p:["Mampu menahan sinaran dan tidak terurai lama","Ringan dan murah supaya kos pengangkutan rendah","Boleh dikitar semula dalam tempoh setahun","Berwarna terang supaya mudah dikesan dari jauh"],b:0,u:"Bahan buangan radioaktif berjangka hayat panjang memerlukan pembungkusan yang stabil dan tahan lama, bukan sekadar murah atau ringan."},
 {j:"pilih",t:"Untuk mengurangkan kakisan pada tiang jambatan besi yang sentiasa terendam air, kaedah PALING praktikal ialah:",p:["Menyambungkan blok zink pada tiang itu sebagai anod korban","Menukar keseluruhan tiang kepada kalium tulen","Menyapu tiang dengan air garam secara berkala","Membiarkan karat terbentuk kerana ia melindungi ferum di bawahnya"],b:0,u:"Kaedah anod korban menggunakan logam yang lebih reaktif untuk teroksida dahulu, melindungi ferum di sebaliknya — prinsip yang digunakan pada kapal dan struktur marin sebenar."},
 {j:"pilih",t:"Sebuah makmal perlu memilih isotop untuk menjejak pergerakan cecair dalam paip industri tanpa mengganggu operasi. Ciri isotop yang PALING sesuai ialah:",p:["Memancarkan sinaran yang dikesan luar dan mereput munasabah","Amat stabil dan tidak pernah mereput","Mempunyai jangka hayat yang sangat panjang melebihi beribu tahun","Tidak memancarkan sebarang jenis sinaran"],b:0,u:"Isotop penjejak perlu dikesan dari luar tetapi mereput dalam tempoh munasabah supaya tidak mencemari sistem dalam jangka panjang."},
 {j:"pilih",t:"Sebuah syarikat mereka penutup tin makanan. Bahan manakah PALING sesuai untuk melapisi bahagian dalam tin ferum bagi mengelakkan tindak balas dengan makanan berasid?",p:["Timah, kerana ia kurang reaktif berbanding ferum","Kalium, kerana ia amat reaktif dan melindungi ferum","Karbon tulen tanpa sebarang rawatan","Tiada lapisan diperlukan kerana ferum tidak bertindak balas dengan makanan"],b:0,u:"Sadur timah yang kurang reaktif menghalang ferum daripada bersentuh terus dengan asid dalam makanan, mengekalkan rasa dan mengelakkan karat."},
 {j:"pilih",t:"Untuk membina rangka basikal yang ringan tetapi kukuh, jurutera bahan cenderung memilih:",p:["Aloi aluminium, ringan tapi kukuh","Ferum tulen, kerana ia paling murah","Bahan ion tulen, kerana ia paling ringan","Kalium tulen, kerana ia sangat reaktif dan kuat"],b:0,u:"Aloi aluminium menggabungkan kekuatan struktur dengan berat yang jauh lebih ringan berbanding ferum tulen."},
 {j:"pilih",t:"Sebuah hospital mahu mensterilkan peralatan pembedahan plastik tanpa merosakkannya dengan haba. Kaedah PALING sesuai ialah:",p:["Sinaran gama daripada isotop seperti Kobalt-60","Merebus peralatan pada suhu tinggi seperti biasa","Menyapu peralatan dengan logam kalium tulen","Menyimpan peralatan itu dalam bekas ferum tulen"],b:0,u:"Sinaran gama membunuh mikroorganisma tanpa haba tinggi yang boleh melelehkan plastik."},
 {j:"pilih",t:"Manakah pertimbangan PALING penting semasa mereka bentuk bekas pengangkutan bahan radioaktif untuk kegunaan perubatan?",p:["Keseimbangan antara perlindungan sinaran yang mencukupi dengan berat bekas yang masih praktikal diangkut","Bekas mesti seringan mungkin walaupun perlindungan sinaran berkurang","Bekas mesti diperbuat daripada bahan ion supaya mudah dikitar semula","Warna bekas adalah pertimbangan paling utama berbanding perlindungan sinaran"],b:0,u:"Reka bentuk kejuruteraan yang baik menimbangkan pelbagai keperluan serentak — keselamatan dan kebolehgunaan praktikal — bukan mengutamakan satu faktor sahaja."}],
 bos:{j:"buka",
  t:"Sekolah kau ingin memasang tanda amaran pintu kecemasan yang perlu kelihatan walaupun semasa bekalan elektrik terputus. Seorang rakan mencadangkan menggunakan cat yang mengandungi sedikit bahan radioaktif berjangka hayat pendek supaya ia bersinar dalam gelap. Nilaikan cadangan ini dan cadangkan penyelesaian awak sendiri.",
  arahan:"Bincangkan kebaikan dan risiko cadangan rakan awak (dari segi keselamatan dan kos penyelenggaraan), kemudian cadangkan bahan atau kaedah alternatif yang lebih sesuai untuk kegunaan sekolah, dengan alasan saintifik.",
  u:"Jawapan TP6 yang kukuh membincangkan risiko sinaran jangka panjang kepada pelajar, dan mencadangkan alternatif praktikal seperti bahan fosforesen bukan radioaktif atau lampu kecemasan bekalan bateri, disokong sebab saintifik dan pertimbangan kos serta keselamatan."}}
];

module.exports = {
  id:"t4b6", tingkatan:4, kod:"8.0 Unsur dan Bahan",
  tajuk:"Laluan Atom",
  subtajuk:"Sains Ting. 4 · Bab 6 Unsur dan Bahan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali jenis-jenis bahan (atom, molekul, ion) dan struktur asas jadual berkala. Langkah seterusnya ialah memahami sebab unsur disusun mengikut nombor proton, bukan sekadar menghafal contoh.",
   2:"{n} memahami prinsip susunan Jadual Berkala Unsur Moden serta kaitan antara kumpulan, kala dan susunan elektron. Perlu lebih banyak latihan mengaitkan susunan elektron dengan pembentukan ion sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan susunan elektron untuk menerangkan pembentukan ion positif dan ion negatif mengikut prinsip oktet. Galakkan mengira cas ion daripada bilangan elektron valens.",
   4:"{n} mampu menganalisis data isotop untuk mengira bilangan proton, neutron dan nombor nukleon dengan tepat. Seterusnya latih menghubungkaitkan struktur isotop dengan sifat kimianya.",
   5:"{n} dapat menilai kesesuaian pelbagai isotop untuk kegunaan sebenar dalam perubatan, pertanian, arkeologi dan industri, serta menilai kaedah mengurangkan pengaratan, disokong sebab yang munasabah. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya menilai dan mereka penyelesaian kejuruteraan yang menggunakan pengetahuan unsur, bahan dan isotop secara kreatif, lengkap dengan pertimbangan keselamatan dan kos. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Unsur dan Bahan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ atom:R_ATOM, ion:R_ION, isotop:T_ISOTOP },
  aras:ARAS
};
