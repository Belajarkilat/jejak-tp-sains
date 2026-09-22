/* Sumber kandungan — Sains KSSM Tingkatan 5, Bidang 2.0 Nutrisi dan Teknologi Makanan.
   Fail ini disunting tangan. Jalankan `node bina.js t5b2` untuk menyemaknya
   dan menghasilkan bank-t5b2.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 5, Bahagian Pembangunan Kurikulum, muka 122.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran saintifik mengenai nutrisi dan teknologi makanan.",
"Memahami nutrisi dan teknologi makanan dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai nutrisi dan teknologi makanan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai nutrisi dan teknologi makanan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai nutrisi dan teknologi makanan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai nutrisi dan teknologi makanan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_NITROGEN = {
  jenis:"aliran", mod:"kitar",
  nod:[
    {label:"Nitrogen di udara", isi:"kertas2"},
    {label:"Pengikatan oleh bakteria atau kilat", isi:"kuningLembut"},
    {label:"Serapan nitrat oleh akar tumbuhan", isi:"hijauLembut"},
    {label:"Nitrogen kembali ke udara", isi:"merahLembut"},
  ],
  kapsyen:"Rajah 1 · Kitar nitrogen dalam alam semula jadi.",
  alt:"Rajah kitar empat peringkat: nitrogen di udara, pengikatan oleh bakteria atau kilat, serapan oleh akar tumbuhan, denitrifikasi kembali ke udara"
};

const R_PEMPROSESAN = {
  jenis:"aliran", mod:"turun",
  nod:[
    {label:"Bahan mentah dituai atau ditangkap", isi:"hijauLembut", panah:"hijau"},
    {label:"Pembersihan dan pemeriksaan", isi:"kertas2", panah:"garis2"},
    {label:"Rawatan haba: pasteurisasi, pengetinan atau pengasapan", isi:"merahLembut", panah:"merah"},
    {label:"Pembungkusan kedap udara", isi:"lembayungLembut", panah:"lembayung"},
    {label:"Penyimpanan sejuk atau kering", isi:"hijauLembut"},
  ],
  kapsyen:"Rajah 2 · Aliran umum pemprosesan makanan daripada bahan mentah hingga simpanan.",
  alt:"Rajah aliran menegak lima langkah pemprosesan makanan: bahan mentah, pembersihan, rawatan haba, pembungkusan, penyimpanan"
};

const T_PINGGAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Individu</th><th>Jantina</th>'+
'<th class="n">Umur</th><th>Tahap Aktiviti</th><th class="n">Kalori (kkal/hari)</th></tr></thead><tbody>'+
'<tr><td>Aiman</td><td>Lelaki</td><td class="n">16</td><td>Aktif (atlet sekolah)</td><td class="n">2800</td></tr>'+
'<tr><td>Bella</td><td>Perempuan</td><td class="n">16</td><td>Sederhana aktif</td><td class="n">2000</td></tr>'+
'<tr><td>Cikgu Faizal</td><td>Lelaki</td><td class="n">40</td><td>Kurang aktif (kerja pejabat)</td><td class="n">2200</td></tr>'+
'<tr><td>Puan Wati</td><td>Perempuan</td><td class="n">65</td><td>Kurang aktif</td><td class="n">1600</td></tr>'+
'</tbody></table></div><p class="qnote">Konsep pinggan sihat "Suku Suku Separuh": suku pinggan karbohidrat, suku pinggan protein, separuh pinggan sayur dan buah.</p>';

const T_KEKURANGAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Nutrien</th><th>Simbol</th>'+
'<th>Fungsi Utama</th><th>Tanda Kekurangan</th></tr></thead><tbody>'+
'<tr><td>Nitrogen</td><td class="n">N</td><td>Pertumbuhan daun dan batang</td><td>Daun menguning, pertumbuhan terbantut</td></tr>'+
'<tr><td>Fosforus</td><td class="n">P</td><td>Pertumbuhan akar dan pembungaan</td><td>Akar lemah, bunga dan buah kurang</td></tr>'+
'<tr><td>Kalium</td><td class="n">K</td><td>Ketahanan penyakit, kekuatan batang</td><td>Tepi daun kecoklatan dan kering</td></tr>'+
'<tr><td>Magnesium</td><td class="n">Mg</td><td>Pembentukan klorofil</td><td>Daun menguning antara urat daun</td></tr>'+
'</tbody></table></div>';

const T_PENGELUARAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kaedah</th>'+
'<th class="n">Hasil (tan/hektar/tahun)</th><th>Penggunaan Air</th><th>Kawasan Diperlukan</th></tr></thead><tbody>'+
'<tr><td>Ladang konvensional</td><td class="n">5</td><td>Tinggi</td><td>Luas</td></tr>'+
'<tr><td>Hidroponik menegak</td><td class="n">20</td><td>Rendah (dikitar semula)</td><td>Kecil (menegak)</td></tr>'+
'<tr><td>Akuaponik</td><td class="n">15</td><td>Sederhana (dikitar semula)</td><td>Sederhana</td></tr>'+
'</tbody></table></div>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Pinggan Sihat", sk:"2.1 Gizi seimbang dan nilai kalori", lampiran:"pinggan",
 kadNama:"Pinggan Suku Suku Separuh", kadEm:"\u{1F37D}", kadFakta:"Konsep pinggan sihat kebangsaan membahagikan pinggan kepada suku karbohidrat, suku protein, dan separuh sayur serta buah.",
 bosKadNama:"Metabolisme Rehat", bosKadEm:"\u{1F525}", bosKadFakta:"Walaupun sedang berehat, badan tetap membakar kalori untuk mengekalkan degupan jantung, pernafasan dan suhu badan.",
 soalan:[
 {j:"pilih",t:"Gizi seimbang bermaksud:",p:["Pengambilan pelbagai jenis makanan mengikut kadar yang mencukupi keperluan tubuh","Hanya mengambil sayur dan buah sahaja tanpa sebarang sumber protein atau karbohidrat","Mengurangkan pengambilan semua jenis makanan kepada separuh jumlah biasa setiap hari","Makan sebanyak mungkin makanan berprotein sahaja tanpa mengira sumber nutrien lain"],b:0,u:"Gizi seimbang melibatkan kepelbagaian dan kadar yang sesuai, bukan sekatan kepada satu kumpulan makanan."},
 {j:"pilih",t:"Konsep pinggan sihat \"Suku Suku Separuh\" membahagikan pinggan kepada:",p:["Suku karbohidrat, suku protein, separuh sayur dan buah","Separuh karbohidrat, separuh protein sahaja dalam pinggan","Suku lemak, suku gula, separuh air dalam pinggan","Empat bahagian sama besar untuk empat jenis makanan berlainan"],b:0,u:"Sayur dan buah mengambil bahagian paling besar berbanding karbohidrat dan protein."},
 {j:"pilih",t:"Berdasarkan jadual, mengapakah Aiman memerlukan kalori paling tinggi?",p:["Dia atlet dengan tahap aktiviti fizikal tinggi, jadi memerlukan lebih tenaga","Dia paling muda antara keempat-empat individu","Lelaki sentiasa memerlukan kalori lebih daripada perempuan tidak kira aktiviti","Atlet perlu makan lebih untuk mengekalkan berat badan yang rendah"],b:0,u:"Aktiviti fizikal tinggi membakar lebih banyak tenaga, jadi keperluan kalori turut meningkat."},
 {j:"nombor",t:"Berdasarkan jadual, berapa kkal bezanya keperluan kalori antara Aiman dan Puan Wati?",b:1200,tol:5,suf:"kkal",u:"2800 tolak 1600 bersamaan 1200 kkal."},
 {j:"pilih",t:"Kekurangan protein dalam jangka panjang boleh menyebabkan:",p:["Pertumbuhan otot terbantut dan sistem imun yang lemah","Gigi menjadi rapuh akibat kekurangan kalsium dalam badan","Mata menjadi rabun warna akibat kekurangan vitamin A","Darah menjadi terlalu cair akibat kekurangan zat besi"],b:0,u:"Protein membina dan membaiki tisu badan, termasuk sel imun."},
 {j:"pilih",t:"Karbohidrat penting dalam diet terutamanya kerana ia:",p:["Sumber tenaga utama yang mudah digunakan badan","Membina dan membaiki tisu badan yang rosak","Mengangkut oksigen dalam darah ke seluruh badan","Mengawal suhu badan secara langsung dan berterusan"],b:0,u:"Karbohidrat dipecahkan kepada glukosa, sumber tenaga segera bagi sel."},
 {j:"susun",t:"Susun langkah merancang menu seimbang mengikut turutan yang betul.",p:["Kenal pasti keperluan kalori harian individu","Bahagikan pinggan ikut nisbah suku-suku-separuh","Pilih jenis makanan dalam setiap kumpulan","Sediakan hidangan mengikut sukatan"],b:[0,1,2,3],u:"Keperluan kalori mesti diketahui dahulu sebelum merancang sukatan hidangan."},
 {j:"pilih",t:"Cikgu Faizal (kerja pejabat, kurang aktif) tetap makan seperti semasa remaja dahulu. Apakah risiko paling mungkin?",p:["Berat badan meningkat kerana kalori melebihi keperluan","Beliau akan kekurangan kalori kerana usia meningkat secara mendadak","Metabolisme beliau akan menjadi lebih pantas secara automatik sahaja","Tiada risiko kerana jumlah makanan yang diambil tidak berubah"],b:0,u:"Keperluan kalori menurun apabila aktiviti fizikal berkurang, tetapi pengambilan yang sama menyebabkan lebihan tenaga disimpan sebagai lemak."}],
 bos:{j:"banyak",t:"Pilih SEMUA faktor yang mempengaruhi keperluan kalori harian seseorang.",p:["Tahap aktiviti fizikal","Umur","Berat badan","Warna mata","Jantina","Warna kulit"],b:[0,1,2,4],u:"Warna mata dan warna kulit tidak berkaitan dengan kadar metabolisme atau keperluan tenaga."}},

{n:2, tempat:"Ladang Nutrien", sk:"2.2 Keperluan nutrien oleh tumbuhan", lampiran:"kekurangan",
 kadNama:"Bintil Akar", kadEm:"\u{1F331}", kadFakta:"Bintil pada akar tumbuhan kekacang menempatkan bakteria pengikat nitrogen yang menyuburkan tanah secara semula jadi.",
 bosKadNama:"Klorosis", bosKadEm:"\u{1F343}", bosKadFakta:"Klorosis, iaitu daun menguning akibat kekurangan klorofil, selalunya tanda pertama kekurangan nutrien pada tumbuhan.",
 soalan:[
 {j:"pilih",t:"Fungsi utama nitrogen bagi tumbuhan ialah:",p:["Menggalakkan pertumbuhan daun dan batang tumbuhan","Menggalakkan pertumbuhan akar sahaja pada tumbuhan","Mengawal pembukaan stoma pada daun tumbuhan","Menguatkan dinding sel sahaja pada tisu tumbuhan"],b:0,u:"Nitrogen ialah komponen utama protein dan klorofil yang diperlukan untuk pertumbuhan daun dan batang."},
 {j:"pilih",t:"Berdasarkan jadual, daun tumbuhan yang menguning secara keseluruhan berkemungkinan kekurangan:",p:["Nitrogen","Fosforus","Kalium","Tiada nutrien, ia proses semula jadi"],b:0,u:"Kekurangan nitrogen menyebabkan klorosis kerana nitrogen komponen penting klorofil dan protein."},
 {j:"pilih",t:"Tumbuhan dengan bunga yang sedikit dan akar yang lemah berkemungkinan kekurangan:",p:["Fosforus","Nitrogen","Kalium","Karbon dioksida"],b:0,u:"Fosforus penting untuk pertumbuhan akar dan pembungaan mengikut jadual."},
 {j:"pilih",t:"Petani mendapati tepi daun tanaman menjadi coklat dan kering. Baja manakah paling sesuai ditambah?",p:["Baja kalium","Baja nitrogen","Baja fosforus","Baja kalsium karbonat"],b:0,u:"Tanda tepi daun kecoklatan dan kering sepadan dengan kekurangan kalium dalam jadual."},
 {j:"pilih",t:"Magnesium penting kepada tumbuhan kerana ia:",p:["Komponen penting dalam pembentukan klorofil untuk fotosintesis","Membina dinding sel yang tebal dan kukuh bagi menahan tekanan air","Mengawal kadar respirasi sel tumbuhan pada waktu malam","Menyimpan air dan mineral berlebihan di dalam vakuol sel"],b:0,u:"Tanpa magnesium, tumbuhan tidak dapat membentuk klorofil secukupnya untuk fotosintesis."},
 {j:"banyak",t:"Pilih SEMUA sumber nitrogen yang tumbuhan boleh gunakan.",p:["Nitrat dalam tanah hasil pengikatan bakteria","Baja nitrogen buatan","Gas nitrogen terus daripada udara oleh semua tumbuhan","Bahan reput daripada organisma mati"],b:[0,1,3],u:"Kebanyakan tumbuhan TIDAK boleh menggunakan gas nitrogen terus daripada udara; ia perlu ditukar dahulu oleh bakteria atau kilat."},
 {j:"pilih",t:"Mengapakah petani mengamalkan penanaman kekacang secara bergilir dengan tanaman lain?",p:["Akar kekacang mempunyai bintil yang mengandungi bakteria pengikat nitrogen","Ia tidak memerlukan sebarang nutrien daripada dalam tanah langsung","Ia mengeluarkan sejenis racun yang membunuh perosak dalam tanah","Ia menyerap semua nutrien supaya tanaman lain tidak dapat merebutnya"],b:0,u:"Ini kaedah semula jadi menyuburkan tanah tanpa bergantung sepenuhnya kepada baja kimia."},
 {j:"pilih",t:"Seorang pekebun menambah baja NPK secara berlebihan tanpa mengikut sukatan. Apakah kesan paling mungkin?",p:["Larut resap baja boleh mencemarkan sumber air berhampiran","Tumbuhan akan membesar dua kali lebih pantas tanpa sebarang kesan buruk","Tanah akan menjadi lebih subur selama-lamanya","Tiada kesan kerana tumbuhan hanya menyerap apa yang diperlukan sahaja"],b:0,u:"Baja berlebihan yang tidak diserap boleh larut resap ke sungai dan menyebabkan pencemaran."}],
 bos:{j:"pilih",t:"Seorang murid menanam dua pasu tomato: pasu A diberi baja NPK seimbang, pasu B tidak diberi baja langsung. Selepas sebulan, daun pasu B menguning dan kurus. Apakah kesimpulan paling wajar?",p:["Ketiadaan baja menyebabkan kekurangan nitrogen dan magnesium","Pasu B mendapat terlalu banyak cahaya matahari langsung","Pasu A tumbuh lebih baik kerana bekas pasunya lebih besar sedikit","Tiada kaitan langsung antara baja dengan warna daun"],b:0,u:"Perbezaan satu-satunya antara dua pasu ialah baja, jadi ia pemboleh ubah yang paling munasabah menerangkan perbezaan itu."}},

{n:3, tempat:"Kitar Nitrogen", sk:"2.3 Kitar Nitrogen", lampiran:"nitrogen",
 kadNama:"Pengikatan Nitrogen", kadEm:"\u{26A1}", kadFakta:"Kilat semasa ribut petir cukup panas untuk memaksa gas nitrogen bergabung dengan oksigen di udara, membentuk sebatian yang jatuh bersama hujan.",
 bosKadNama:"Denitrifikasi", bosKadEm:"\u{1F504}", bosKadFakta:"Bakteria denitrifikasi hidup dalam tanah yang kurang oksigen, seperti tanah lembap atau bertakung air.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah nitrogen di udara ditukar kepada bentuk yang boleh diserap tumbuhan?",p:["Melalui pengikatan oleh bakteria dalam tanah atau kilat","Tumbuhan menyerap terus gas nitrogen melalui daunnya","Air hujan melarutkan nitrogen terus menjadi protein tumbuhan","Haiwan memakan nitrogen terus daripada udara sekeliling"],b:0,u:"Gas nitrogen terlalu lengai untuk diserap terus; ia perlu diikat dahulu menjadi nitrat."},
 {j:"pilih",t:"Selepas tumbuhan menyerap nitrat daripada tanah, nitrogen itu digunakan untuk membina:",p:["Protein dan asid nukleik dalam sel tumbuhan itu","Gula ringkas untuk simpanan tenaga sahaja dalam sel","Klorofil sepenuhnya tanpa nutrien lain dalam daun","Lignin pada dinding sel sahaja bagi tumbuhan berkayu"],b:0,u:"Nitrogen ialah unsur teras dalam struktur protein dan asid nukleik."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah nitrogen kembali kepada atmosfera dalam kitaran ini?",p:["Melalui proses denitrifikasi oleh bakteria tertentu di tanah","Tumbuhan membebaskan gas nitrogen semasa proses fotosintesis","Haiwan menghembus gas nitrogen semasa bernafas setiap hari","Nitrogen menyejat terus daripada permukaan air sungai"],b:0,u:"Bakteria denitrifikasi menukar nitrat kembali kepada gas nitrogen yang dibebaskan ke udara."},
 {j:"susun",t:"Susun kitar nitrogen mengikut turutan yang betul bermula daripada nitrogen di udara.",p:["Nitrogen di udara","Pengikatan oleh bakteria atau kilat menjadi nitrat","Serapan nitrat oleh akar tumbuhan","Denitrifikasi mengembalikan nitrogen ke udara"],b:[0,1,2,3],u:"Kitaran ini bermula dan berakhir pada gas nitrogen di atmosfera."},
 {j:"pilih",t:"Mengapakah penanaman kekacang secara bergilir dianggap kaedah lestari berbanding hanya bergantung kepada baja kimia?",p:["Ia menyuburkan tanah secara semula jadi melalui bakteria pengikat nitrogen","Ia lebih cepat menghasilkan hasil tuaian berbanding kaedah baja kimia biasa","Ia menghapuskan sepenuhnya keperluan tumbuhan untuk fotosintesis","Ia menjadikan tanah kalis air sepenuhnya sepanjang musim penanaman"],b:0,u:"Kaedah ini mengurangkan pergantungan kepada baja kimia yang boleh mencemarkan sumber air."},
 {j:"pilih",t:"Apakah kesan denitrifikasi berlebihan terhadap kesuburan tanah?",p:["Kandungan nitrat berkurang, tanah kurang subur","Kandungan nitrat meningkat mendadak dalam tanah itu sekali gus","Tanah menjadi lebih berasid secara mendadak dan ketara sekali","Tiada kesan kerana denitrifikasi dianggap jarang sekali berlaku"],b:0,u:"Denitrifikasi membuang nitrat daripada tanah kembali ke udara sebagai gas."},
 {j:"pilih",t:"Kawasan hutan yang ditebang secara besar-besaran boleh mengganggu kitar nitrogen kerana:",p:["Kehilangan tumbuhan dan mikroorganisma tanah yang terlibat dalam kitar nitrogen","Kitar nitrogen hanya berlaku di kawasan berair, bukan di hutan sama sekali","Penebangan hutan meningkatkan kandungan nitrogen di udara secara terus dan mendadak","Nitrogen dalam tanah akan bertukar terus menjadi oksigen sepenuhnya"],b:0,u:"Akar dan mikroorganisma tanah memainkan peranan penting dalam kitaran ini; kehilangannya mengganggu keseluruhan proses."},
 {j:"pilih",t:"Kilat semasa ribut petir dikatakan membantu kesuburan tanah secara semula jadi kerana:",p:["Tenaga kilat memaksa nitrogen bergabung dengan oksigen membentuk nitrat dalam hujan","Ia membunuh bakteria berbahaya yang terdapat di dalam lapisan tanah","Ia memanaskan tanah dan mempercepatkan percambahan biji benih segera","Ia menambah kandungan air dalam tanah secara terus tanpa hujan"],b:0,u:"Ini salah satu cara semula jadi gas nitrogen lengai berubah menjadi bentuk yang boleh diserap tumbuhan."}],
 bos:{j:"pilih",t:"Seorang saintis mendapati tanah pertanian yang terlalu kerap dibajak dan tiada tanaman kekacang mempunyai kandungan nitrat yang semakin berkurang setiap tahun. Apakah cadangan paling wajar?",p:["Amalkan penanaman kekacang bergilir untuk pengikatan nitrogen","Tambah lebih banyak air sahaja tanpa mengubah amalan penanaman itu sedikit pun","Bajak tanah lebih kerap untuk menggemburkan tanah yang keras berbatu","Tanam hanya satu jenis tanaman sepanjang tahun demi kestabilan hasil kewangan"],b:0,u:"Kekacang membantu memulihkan kandungan nitrat tanah secara semula jadi melalui bakteria pengikat nitrogen pada akarnya."}},

{n:4, tempat:"Kilang Makanan", sk:"2.4 Teknologi pengeluaran makanan", lampiran:"pengeluaran",
 kadNama:"Hidroponik Menegak", kadEm:"\u{1F3E2}", kadFakta:"Sistem hidroponik menegak boleh menghasilkan sehingga empat kali ganda hasil ladang konvensional dalam kawasan yang sama.",
 bosKadNama:"Akuaponik", bosKadEm:"\u{1F41F}", bosKadFakta:"Dalam sistem akuaponik, sisa najis ikan dipecahkan oleh bakteria menjadi nitrat yang menjadi baja semula jadi untuk tumbuhan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, apakah kelebihan utama hidroponik menegak berbanding ladang konvensional?",p:["Hasil lebih tinggi dengan penggunaan air lebih rendah","Ia tidak memerlukan sebarang nutrien untuk tumbuhan langsung","Ia tidak memerlukan cahaya matahari langsung sama sekali walaupun","Kosnya sentiasa lebih murah tanpa sebarang peralatan tambahan diperlukan"],b:0,u:"Jadual menunjukkan hasil 20 tan/hektar/tahun dengan penggunaan air rendah, berbanding ladang konvensional 5 tan."},
 {j:"pilih",t:"Akuaponik menggabungkan penanaman tumbuhan dengan:",p:["Penternakan ikan dalam sistem sama, sisa ikan menjadi baja tumbuhan","Penternakan lembu di dalam kandang berhampiran kawasan ladang sayur itu","Penggunaan baja kimia sahaja tanpa sebarang bekalan air yang tambahan","Penanaman tumbuhan di dalam tanah berpasir tanpa sistem pengairan langsung"],b:0,u:"Sisa ikan menyediakan nutrien semula jadi untuk tumbuhan dalam sistem tertutup ini."},
 {j:"pilih",t:"Mengapakah hidroponik sesuai untuk kawasan bandar yang tanahnya terhad?",p:["Sistem menegak membolehkan lebih banyak tanaman kawasan kecil","Tumbuhan hidroponik tidak memerlukan sebarang cahaya langsung untuk tumbuh","Hidroponik tidak memerlukan sebarang penjagaan atau pemeriksaan rutin","Ia hanya boleh dijalankan di kawasan luar bandar sahaja bukan bandar besar"],b:0,u:"Susunan menegak memaksimumkan bilangan tanaman bagi setiap meter persegi lantai."},
 {j:"pilih",t:"Apakah kemungkinan kelemahan sistem hidroponik berbanding ladang konvensional?",p:["Kos permulaan dan peralatan seperti pam serta lampu tinggi","Ia menghasilkan hasil yang jauh lebih rendah daripada sepatutnya","Ia memerlukan kawasan tanah yang sangat luas untuk beroperasi","Ia tidak boleh digunakan untuk menanam sayur-sayuran sama sekali"],b:0,u:"Peralatan elektrik dan sistem kawalan menambah kos permulaan berbanding ladang biasa."},
 {j:"pilih",t:"Baka tumbuhan diubah suai secara genetik (GM) untuk tahan penyakit. Apakah kebaikan utamanya kepada pengeluaran makanan?",p:["Mengurangkan kehilangan hasil akibat penyakit","Menjadikan tumbuhan tidak lagi memerlukan air langsung sama sekali","Menjadikan buah menjadi lebih manis secara automatik sepenuhnya tanpa usaha","Menghapuskan keperluan untuk fotosintesis pada tumbuhan itu sepenuhnya"],b:0,u:"Ketahanan penyakit mengekalkan lebih banyak hasil tuaian yang boleh dijual atau digunakan."},
 {j:"pilih",t:"Apakah isu yang perlu dipertimbangkan sebelum meluaskan penggunaan tanaman ubah suai genetik (GM)?",p:["Kesan jangka panjang terhadap kesihatan dan alam sekitar masih dikaji","Ia sentiasa selamat sepenuhnya tanpa sebarang kajian yang diperlukan","Ia tidak memberi sebarang kesan kepada hasil tuaian petani","Ia hanya digunakan untuk haiwan sahaja, bukan tumbuhan"],b:0,u:"Kajian jangka panjang tentang kesan GM terhadap ekosistem dan kesihatan manusia masih diteruskan di serata dunia."},
 {j:"pilih",t:"Berdasarkan jadual, kaedah manakah paling sesuai bagi kawasan yang menghadapi kekurangan bekalan air?",p:["Hidroponik menegak, kerana ia mengitar semula air","Ladang konvensional, kerana ia paling murah","Akuaponik, kerana ia memerlukan air paling banyak","Semua kaedah memerlukan jumlah air yang sama"],b:0,u:"Jadual menunjukkan penggunaan air hidroponik menegak paling rendah kerana dikitar semula."},
 {j:"pilih",t:"Sebuah syarikat mahu mengeluarkan sayur secara mampan di bumbung bangunan bandar. Kaedah manakah paling sesuai dan mengapa?",p:["Hidroponik menegak, ruang kecil dan penggunaan air yang cekap","Ladang konvensional, kerana ia memerlukan kawasan yang paling luas","Akuaponik, kerana ia memerlukan kolam ikan yang cukup besar","Tiada kaedah yang sesuai untuk kawasan bandar sebegini"],b:0,u:"Ruang bumbung terhad menjadikan sistem menegak yang cekap air pilihan paling praktikal."}],
 bos:{j:"banyak",t:"Pilih SEMUA kebaikan teknologi pengeluaran makanan moden (hidroponik/akuaponik) berbanding kaedah konvensional bagi kawasan bandar.",p:["Penggunaan air lebih cekap","Keperluan kawasan lebih kecil","Hasil per kawasan lebih tinggi","Tidak memerlukan sebarang kos peralatan","Boleh dikawal sepanjang tahun tanpa bergantung cuaca"],b:[0,1,2,4],u:"Peralatan seperti pam dan lampu tetap memerlukan kos, jadi pernyataan 'tidak memerlukan sebarang kos' adalah salah."}},

{n:5, tempat:"Bilik Pemprosesan", sk:"2.5 Teknologi pemprosesan makanan", lampiran:"pemprosesan",
 kadNama:"Pasteurisasi", kadEm:"\u{1F9EA}", kadFakta:"Pasteurisasi dinamakan sempena Louis Pasteur, yang mula-mula membuktikan pemanasan boleh membunuh mikroorganisma dalam cecair tanpa memasaknya sepenuhnya.",
 bosKadNama:"Pembungkusan Aseptik", bosKadEm:"\u{1F4E6}", bosKadFakta:"Pembungkusan aseptik membolehkan jus dan susu kekal tahan lama pada suhu bilik tanpa peti sejuk, asalkan bungkusan tidak dibuka.",
 soalan:[
 {j:"pilih",t:"Pasteurisasi susu melibatkan proses memanaskan susu pada suhu tertentu untuk:",p:["Membunuh kebanyakan mikroorganisma berbahaya tanpa mengubah nilai pemakanan","Membekukan susu itu supaya tahan lebih lama untuk disimpan","Menambah kalsium tambahan ke dalam susu itu setiap hari","Menukar susu kepada serbuk kering sepenuhnya untuk kegunaan simpanan"],b:0,u:"Suhu pasteurisasi cukup untuk membunuh patogen tetapi tidak setinggi mensterilkan sepenuhnya."},
 {j:"pilih",t:"Mengapakah makanan dalam tin boleh disimpan lebih lama daripada makanan segar?",p:["Proses pengetinan membunuh mikroorganisma, tin kedap udara halang baharu","Tin diperbuat daripada bahan yang membunuh semua nutrien dalam makanan itu sepenuhnya","Makanan dalam tin itu tidak mengandungi air langsung sama sekali","Tin menghalang cahaya matahari sepenuhnya sahaja daripada masuk ke dalamnya"],b:0,u:"Kombinasi rawatan haba dan bekas kedap udara menghalang pertumbuhan mikroorganisma baharu."},
 {j:"pilih",t:"Nilaikan kaedah pengeringan makanan, seperti ikan masin atau buah kering, sebagai teknik pengawetan.",p:["Berkesan kerana ia mengurangkan air yang diperlukan mikroorganisma membiak","Tidak berkesan kerana mikroorganisma tidak memerlukan air untuk hidup langsung","Berkesan hanya untuk membunuh virus sahaja, bukan bakteria","Tidak berkesan kerana ia menambah kandungan air dalam makanan itu"],b:0,u:"Mikroorganisma memerlukan air untuk metabolisme; tanpanya pertumbuhan mereka terbantut."},
 {j:"pilih",t:"Sebuah kilang mempertimbangkan antara pembungkusan vakum dan pembungkusan biasa untuk produk daging beku. Pilihan manakah lebih wajar dan mengapa?",p:["Pembungkusan vakum, mengeluarkan udara dan melambatkan pertumbuhan mikrob","Pembungkusan biasa, kerana ia lebih murah tanpa sebarang kelemahan langsung","Pembungkusan vakum, kerana ia menambah oksigen untuk kesegaran produk","Kedua-duanya sama sahaja kesannya terhadap jangka hayat produk itu"],b:0,u:"Kebanyakan mikroorganisma perosak memerlukan oksigen; mengeluarkannya melambatkan kerosakan."},
 {j:"pilih",t:"Apakah risiko yang perlu dinilai apabila menggunakan bahan pengawet kimia dalam makanan diproses?",p:["Kesan kesihatan jangka panjang jika pengambilan melebihi had yang selamat","Bahan pengawet sentiasa meningkatkan nilai pemakanan makanan","Tiada risiko kerana semua bahan pengawet automatik selamat","Bahan pengawet menghapuskan keperluan pembungkusan"],b:0,u:"Had keselamatan bahan pengawet ditetapkan oleh pihak berkuasa, dan pengambilan berlebihan tetap membawa risiko."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah langkah pembersihan dan pemeriksaan penting sebelum rawatan haba?",p:["Menghalang bahan cemar dan bahan mentah rosak daripada meneruskan proses, menjaga kualiti akhir","Langkah itu hanya untuk tujuan estetik semata-mata","Rawatan haba boleh membunuh sebarang bahan cemar tanpa pembersihan awal","Langkah itu memanjangkan proses tanpa sebarang faedah"],b:0,u:"Sesetengah bahan cemar seperti logam atau toksin tidak dimusnahkan oleh haba, jadi pemeriksaan awal penting."},
 {j:"pilih",t:"Bandingkan jus buah segar dengan jus buah yang telah dipasteurisasi dan dibungkus aseptik dari segi jangka hayat.",p:["Jus dipasteurisasi bertahan lebih lama kerana mikroorganisma dimusnahkan","Jus segar sentiasa bertahan lebih lama tanpa sebarang rawatan","Kedua-duanya mempunyai jangka hayat yang sama tepat","Pasteurisasi memendekkan jangka hayat berbanding jus segar"],b:0,u:"Rawatan haba dan pembungkusan kedap udara ialah dua faktor utama yang memanjangkan jangka hayat."},
 {j:"pilih",t:"Seorang pengeluar makanan bayi perlu memilih antara kaedah pengetinan dan penyejukbekuan untuk mengekalkan nutrien. Apakah pertimbangan paling penting?",p:["Kaedah manakah mengekalkan lebih banyak nutrien sensitif haba seperti vitamin C","Kaedah manakah paling murah tanpa mengira kualiti nutrien","Warna kemasan produk yang paling menarik","Saiz bekas yang paling besar untuk nilai wang"],b:0,u:"Penyejukbekuan umumnya mengekalkan lebih banyak vitamin sensitif haba berbanding pengetinan."}],
 bos:{j:"pilih",t:"Sebuah kilang kecil ingin memasarkan jus tempatan yang tahan lama tanpa bahan pengawet kimia tambahan. Cadangan kaedah pemprosesan paling wajar?",p:["Pasteurisasi diikuti pembungkusan aseptik kedap udara, tanpa bahan pengawet kimia tambahan","Tambah bahan pengawet kimia maksimum untuk jangka hayat paling lama","Jual jus segar tanpa sebarang rawatan supaya kekal \"semula jadi\"","Simpan jus pada suhu bilik tanpa sebarang rawatan tambahan"],b:0,u:"Gabungan pasteurisasi dan pembungkusan kedap udara memanjangkan jangka hayat tanpa memerlukan bahan pengawet kimia."}},

{n:6, tempat:"Rak Suplemen", sk:"2.6 Makanan dan suplemen kesihatan",
 kadNama:"Vitamin Larut Lemak", kadEm:"\u{1F48A}", kadFakta:"Vitamin larut lemak (A, D, E, K) disimpan dalam tisu lemak badan, berbeza daripada vitamin larut air yang dikumuhkan dalam air kencing jika berlebihan.",
 bosKadNama:"Literasi Pengguna", bosKadEm:"\u{1F9E0}", bosKadFakta:"Kajian pengguna mendapati kebanyakan pembeli produk kesihatan lebih dipengaruhi oleh testimoni video berbanding label kandungan sebenar.",
 soalan:[
 {j:"pilih",t:"Sebuah iklan mendakwa produk suplemen X boleh \"menggantikan sepenuhnya keperluan pemakanan seimbang\". Nilaikan dakwaan ini.",p:["Tidak berasas, kerana suplemen menambah nutrien tertentu, tidak menggantikan makanan sebenar","Berasas, kerana suplemen mengandungi semua nutrien yang badan perlukan","Berasas, kerana suplemen lebih mudah dihadam berbanding makanan","Tidak berasas, kerana suplemen tidak mengandungi sebarang nutrien"],b:0,u:"Makanan sebenar membekalkan serat, air dan gabungan nutrien yang sukar ditiru sepenuhnya oleh satu produk suplemen."},
 {j:"pilih",t:"Mengapakah pengguna digalakkan menyemak label pemakanan sebelum membeli produk kesihatan?",p:["Untuk mengetahui kandungan nutrien dan mengelak pengambilan berlebihan","Label pemakanan hanya untuk tujuan hiasan pembungkusan","Semua produk berlabel \"semula jadi\" pasti selamat tanpa had","Label tidak memberi sebarang maklumat berguna kepada pengguna"],b:0,u:"Label membolehkan pengguna membuat keputusan berasaskan bukti, bukan sekadar dakwaan pengiklanan."},
 {j:"pilih",t:"Apakah risiko pengambilan suplemen vitamin larut lemak, contohnya vitamin A, secara berlebihan?",p:["Ia boleh terkumpul dalam badan dan menjadi toksik lama-kelamaan","Tiada risiko kerana semua vitamin dikumuhkan serta-merta","Ia akan hilang keberkesanan tanpa sebarang kesan","Ia hanya memberi kesan kepada haiwan, bukan manusia"],b:0,u:"Vitamin larut lemak disimpan dalam tisu badan, jadi pengambilan berlebihan boleh terkumpul ke tahap toksik."},
 {j:"pilih",t:"Seorang atlet remaja mempertimbangkan mengambil suplemen protein tambahan. Apakah nasihat paling wajar?",p:["Rujuk pengamal kesihatan dan utamakan sumber protein daripada makanan sebenar dahulu","Ambil sebanyak mungkin suplemen tanpa had kerana lebih protein sentiasa lebih baik","Gantikan semua makanan harian dengan suplemen sahaja","Suplemen protein wajib untuk semua remaja tanpa pengecualian"],b:0,u:"Nasihat profesional dan keutamaan makanan sebenar mengelakkan risiko pengambilan berlebihan."},
 {j:"banyak",t:"Pilih SEMUA faktor yang perlu dinilai sebelum memilih produk suplemen kesihatan.",p:["Kandungan dan dos bahan aktif pada label","Pensijilan atau kelulusan pihak berkuasa kesihatan","Keperluan pemakanan sebenar individu","Warna dan bentuk botol produk","Testimoni tanpa bukti saintifik di media sosial"],b:[0,1,2],u:"Warna botol dan testimoni tanpa bukti bukan penunjuk keberkesanan atau keselamatan sesuatu produk."},
 {j:"pilih",t:"Mengapakah golongan yang mempunyai keadaan perubatan tertentu, contohnya masalah buah pinggang, dinasihatkan berjumpa doktor sebelum mengambil suplemen tertentu?",p:["Sesetengah suplemen boleh membebankan organ tertentu atau berinteraksi dengan ubat yang diambil","Suplemen sentiasa selamat untuk semua keadaan kesihatan tanpa pengecualian","Doktor tidak mempunyai peranan dalam pengambilan suplemen","Suplemen tidak memberi sebarang kesan kepada organ badan"],b:0,u:"Buah pinggang memproses banyak bahan yang diserap badan, termasuk lebihan daripada suplemen."},
 {j:"pilih",t:"Bandingkan mendapatkan vitamin C daripada buah segar berbanding tablet suplemen.",p:["Buah segar turut membekalkan serat, manakala tablet hanya vitamin C tertumpu","Tablet sentiasa lebih baik kerana kandungan lebih tepat","Buah segar tidak mengandungi vitamin C secukupnya","Kedua-duanya memberi faedah yang sama sekali tanpa sebarang perbezaan"],b:0,u:"Makanan sebenar membawa nutrien tambahan yang tidak terkandung dalam satu tablet tertumpu."},
 {j:"pilih",t:"Nilaikan kenyataan \"produk semula jadi sentiasa lebih selamat daripada produk sintetik\".",p:["Tidak semestinya benar; bahan semula jadi juga boleh toksik pada dos tinggi","Sentiasa benar tanpa pengecualian langsung","Tidak berkaitan langsung dengan keselamatan pengguna","Hanya terpakai kepada ubat-ubatan, bukan suplemen"],b:0,u:"Sumber sesuatu bahan (semula jadi atau sintetik) tidak dengan sendirinya menentukan keselamatannya; dos dan kandungan yang menentukan."}],
 bos:{j:"buka",
  t:"Ramai remaja di sekolah awak tertarik dengan iklan suplemen \"pembakar lemak\" di media sosial yang menjanjikan hasil pantas. Reka satu kempen kesedaran ringkas untuk membantu rakan sekelas menilai dakwaan produk kesihatan sebelum membeli.",
  arahan:"Terangkan bentuk kempen (poster, video pendek atau perbincangan kelas), tiga soalan penilaian kritis yang perlu ditanya sebelum membeli produk kesihatan, dan bagaimana awak menyampaikannya supaya rakan sebaya benar-benar mengambil peduli.",
  u:"Jawapan TP6 yang kukuh menggabungkan literasi pemakanan, pemikiran kritis terhadap pengiklanan, dan cara penyampaian yang sesuai untuk khalayak remaja."}}
];

module.exports = {
  id:"t5b2", tingkatan:5, kod:"2.0 Nutrisi dan Teknologi Makanan",
  tajuk:"Laluan Pinggan",
  subtajuk:"Sains Ting. 5 · Bab 2 Nutrisi dan Teknologi Makanan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep gizi seimbang, keperluan nutrien tumbuhan dan langkah asas pemprosesan makanan. Langkah seterusnya ialah menerangkan sebab di sebalik setiap konsep, bukan sekadar menghafalnya.",
   2:"{n} memahami kitar nitrogen serta peranan teknologi pengeluaran dan pemprosesan makanan. Perlu lebih banyak latihan mengaitkan konsep ini dengan situasi harian sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan nutrisi dan teknologi makanan untuk menerangkan fenomena seperti kekurangan nutrien tumbuhan dan kitar nitrogen. Galakkan mentafsir data dan jadual dengan lebih yakin.",
   4:"{n} mampu menganalisis kelebihan dan kelemahan pelbagai kaedah pengeluaran makanan seperti hidroponik dan akuaponik berdasarkan data. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai kaedah pemprosesan makanan dan produk suplemen kesihatan secara kritis, disokong bukti dan pertimbangan risiko. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta kempen kesedaran yang praktikal tentang pemakanan dan produk kesihatan, lengkap dengan pertimbangan khalayak dan cara penyampaian. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nutrisi dan Teknologi Makanan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ pinggan:T_PINGGAN, kekurangan:T_KEKURANGAN, nitrogen:R_NITROGEN, pengeluaran:T_PENGELUARAN, pemprosesan:R_PEMPROSESAN },
  aras:ARAS
};
