/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 5.0 Genetik.
   Fail ini disunting tangan. Jalankan `node bina.js t4b3` untuk menyemaknya
   dan menghasilkan bank-t4b3.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4, Bahagian Pembangunan Kurikulum, muka 70.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai genetik.",
"Memahami genetik dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai genetik dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai genetik dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai genetik dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai genetik dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_KROMOSOM = {
  jenis:"struktur", mod:"label",
  bahagian:[
    { bentuk:"kotak", x:35, y:50, l:16, t:80, isi:"lembayungLembut", garis:"lembayung" },
    { label:"Kromatid", bentuk:"kotak", x:65, y:50, l:16, t:80, isi:"lembayungLembut", garis:"lembayung" },
    { label:"Sentromer", bentuk:"bulat", x:50, y:50, r:8, isi:"kuningLembut", garis:"kuning" },
  ],
  kapsyen:"Rajah 1 · Struktur kromosom: dua kromatid kembar disambung oleh sentromer.",
  alt:"Rajah skematik kromosom menunjukkan dua kromatid kembar berlembayung disambung oleh sentromer kuning di tengah"
};

const R_MITOSIS = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Interfasa: DNA menggandakan diri", isi:"hijauLembut", panah:"hijau" },
    { label:"Profasa: kromosom memampat, membentuk kromatid kembar", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Metafasa: kromosom berbaris di tengah sel", isi:"kuningLembut", panah:"kuning" },
    { label:"Anafasa: kromatid kembar berpisah ke kutub bertentangan", isi:"merahLembut", panah:"merah" },
    { label:"Telofasa & Sitokinesis: dua sel anak terbentuk", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 1 · Peringkat mitosis dalam satu kitaran pembahagian sel.",
  alt:"Rajah aliran menegak lima peringkat mitosis iaitu interfasa, profasa, metafasa, anafasa dan telofasa, setiap peringkat berlainan warna"
};

const T_PUNNETT =
'<div class="scrollx"><table class="datatable"><thead><tr><th></th><th class="n">B</th><th class="n">b</th></tr></thead><tbody>'+
'<tr><td>B</td><td class="n">BB</td><td class="n">Bb</td></tr>'+
'<tr><td>b</td><td class="n">Bb</td><td class="n">bb</td></tr>'+
'</tbody></table></div><p class="qnote">Silang monohibrid antara dua induk heterozigot (Bb &times; Bb). B ialah alel dominan (bulu perang), b ialah alel resesif (bulu perang muda).</p>';

const R_VARIASI = {
  jenis:"graf", mod:"palang",
  bar:[
    { label:"140-149", nilai:4, warna:"hijau" },
    { label:"150-159", nilai:12, warna:"lembayung" },
    { label:"160-169", nilai:9, warna:"kuning" },
    { label:"170-179", nilai:3, warna:"merah" },
  ],
  xLabel:"Ketinggian murid (cm)",
  kapsyen:"Rajah 1 · Taburan ketinggian 28 orang murid mengikut julat 10 cm.",
  alt:"Graf palang menunjukkan taburan ketinggian murid berbentuk lengkung loceng memuncak pada julat 150 hingga 159 sentimeter"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Nukleus", sk:"5.1 Gen, DNA dan kromosom", lampiran:"kromosom",
 kadNama:"Heliks Ganda Dua", kadEm:"\u{1F9EC}", kadFakta:"Jika DNA dalam satu sel manusia diregangkan penuh, panjangnya boleh mencecah kira-kira 2 meter, tergulung rapi dalam nukleus yang hanya beberapa mikrometer lebarnya.",
 bosKadNama:"Kariotip", bosKadEm:"\u{1F52C}", bosKadFakta:"Kariotip pertama yang mengesahkan manusia mempunyai 46 kromosom (bukan 48 seperti disangka sebelumnya) hanya berjaya disahkan pada tahun 1956.",
 soalan:[
 {j:"pilih",t:"Molekul yang membawa maklumat genetik dalam bentuk turutan asas di dalam nukleus dipanggil:",p:["Asid deoksiribonukleik (DNA)","Asid ribonukleik (RNA)","Protein histon yang menyokong struktur DNA","Membran nukleus"],b:0,u:"DNA tersusun sebagai heliks berganda dua yang membawa kod genetik."},
 {j:"pilih",t:"Segmen DNA yang mengawal satu ciri baka dipanggil:",p:["Gen","Kromosom","Kromatid","Nukleotida"],b:0,u:"Gen ialah unit asas pewarisan; banyak gen tersusun membentuk satu kromosom."},
 {j:"pilih",t:"Struktur berbentuk seperti huruf X yang membawa DNA yang telah digandakan dipanggil:",p:["Kromosom","Nukleus","Ribosom","Sitoplasma"],b:0,u:"Sebelum pembahagian, DNA digandakan dan dipadatkan menjadi kromosom yang jelas di bawah mikroskop."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bahagian yang menyambungkan dua kromatid kembar ialah:",p:["Sentromer","Lengan kromosom","Telomer","Nukleoplasma"],b:0,u:"Sentromer ialah titik pertemuan dua kromatid sebelum ia berpisah semasa pembahagian sel."},
 {j:"banyak",t:"Pilih SEMUA yang terdapat pada set kromosom manusia normal.",p:["23 pasang kromosom","46 kromosom kesemuanya","Satu pasang kromosom seks","69 kromosom kesemuanya","Kromosom autosom dan seks"],b:[0,1,2,4],u:"Manusia mempunyai 46 kromosom (23 pasang): 22 pasang autosom dan satu pasang kromosom seks."},
 {j:"pilih",t:"Kariotip bermaksud:",p:["Susunan kromosom seseorang mengikut saiz dan bentuk berpasangan","Peta gen pada satu kromosom sahaja","Jujukan lengkap asid amino dalam protein","Nisbah genotip dan fenotip dalam satu populasi manusia"],b:0,u:"Kariotip membolehkan doktor mengesan bilangan atau bentuk kromosom yang tidak normal."},
 {j:"pilih",t:"Kromosom seks yang menentukan seseorang bayi itu lelaki ialah:",p:["XY","XX","YY","Autosom"],b:0,u:"Lelaki mempunyai gabungan XY, perempuan mempunyai gabungan XX."},
 {j:"susun",t:"Susun struktur berikut daripada yang paling kecil kepada paling besar.",p:["Gen","Kromatid","Kromosom","Nukleus"],b:[0,1,2,3],u:"Gen ialah segmen DNA, beberapa gen membentuk kromatid, dua kromatid membentuk kromosom, dan kromosom disimpan dalam nukleus."}],
 bos:{j:"pilih",t:"Mengapakah kromosom hanya kelihatan jelas berbentuk X semasa pembahagian sel, bukan sepanjang masa?",p:["DNA memampat dan bergulung ketat sebelum pembahagian berlaku","DNA hanya wujud semasa sel membahagi sahaja","Nukleus hilang sepenuhnya semasa waktu rehat sel","Kromosom bertukar sepenuhnya menjadi RNA di antara setiap pembahagian"],b:0,u:"Pada waktu rehat (interfasa), DNA berada dalam bentuk kromatin yang longgar; ia hanya memampat menjadi kromosom X apabila sel bersedia membahagi."}},

{n:2, tempat:"Gelendong", sk:"5.1 Mitosis dan meiosis", lampiran:"mitosis",
 kadNama:"Mitosis", kadEm:"\u{1F9EB}", kadFakta:"Sel kulit manusia mengalami mitosis berjuta-juta kali sehari untuk menggantikan sel yang terkelupas atau rosak.",
 bosKadNama:"Gamet", bosKadEm:"\u{1F423}", bosKadFakta:"Setiap ovum manusia membawa hampir kesemua sitoplasma yang diperlukan embrio awal, manakala sperma hanya menyumbang bahan genetik.",
 soalan:[
 {j:"pilih",t:"Mitosis menghasilkan:",p:["Dua sel anak yang serupa secara genetik dengan sel induk","Empat sel anak yang berbeza secara genetik","Satu sel sahaja dengan separuh bilangan kromosom","Empat gamet yang unik"],b:0,u:"Mitosis mengekalkan bilangan kromosom yang sama seperti sel induk."},
 {j:"pilih",t:"Meiosis menghasilkan:",p:["Empat sel gamet dengan separuh bilangan kromosom","Dua sel anak yang serupa sepenuhnya dengan sel induk asal","Satu sel sahaja tanpa nukleus","Dua sel dengan bilangan kromosom berganda"],b:0,u:"Meiosis mengurangkan bilangan kromosom kepada separuh supaya baka betul semasa persenyawaan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pada fasa manakah kromosom berbaris di tengah sel?",p:["Metafasa","Profasa","Anafasa","Telofasa"],b:0,u:"'Meta' bermaksud tengah; kromosom berbaris pada garis tengah sel semasa metafasa."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku semasa anafasa?",p:["Kromatid berpisah ke kutub bertentangan","DNA menggandakan diri lagi buat julung-julung kalinya","Membran nukleus mula terbentuk semula","Kromosom mula memampat dan memendek"],b:0,u:"Anafasa ialah fasa perpisahan kromatid, digerakkan oleh gentian gelendong."},
 {j:"banyak",t:"Pilih SEMUA kepentingan mitosis dalam badan manusia.",p:["Membaiki tisu yang rosak","Membolehkan pertumbuhan badan","Menghasilkan gamet untuk pembiakan","Menggantikan sel kulit yang terkelupas","Mengurangkan bilangan kromosom kepada separuh"],b:[0,1,3],u:"Penghasilan gamet dan pengurangan kromosom ialah fungsi meiosis, bukan mitosis."},
 {j:"pilih",t:"Fungsi gentian gelendong semasa pembahagian sel ialah:",p:["Menarik kromatid ke kutub sel yang bertentangan","Menggandakan DNA sebelum pembahagian","Membentuk membran sel yang baharu","Menyimpan tenaga tambahan untuk sel yang sedang membahagi"],b:0,u:"Gentian gelendong melekat pada sentromer dan menariknya semasa anafasa."},
 {j:"nombor",t:"Sel manusia normal mempunyai 46 kromosom. Selepas satu pembahagian meiosis penuh (dua peringkat), berapakah bilangan kromosom dalam setiap gamet?",b:23,tol:0.5,suf:"kromosom",u:"Meiosis mengurangkan bilangan kromosom kepada separuh: 46 bahagi 2 bersamaan 23."},
 {j:"pilih",t:"Apakah yang membezakan sitokinesis daripada mitosis?",p:["Sitokinesis ialah pembahagian sitoplasma, mitosis ialah pembahagian nukleus","Sitokinesis berlaku sebelum DNA digandakan","Sitokinesis hanya berlaku semasa meiosis","Sitokinesis dan mitosis sebenarnya proses yang sama dan berlaku serentak"],b:0,u:"Mitosis membahagikan bahan genetik; sitokinesis membahagikan sitoplasma menjadi dua sel berasingan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang membezakan mitosis daripada meiosis dengan betul.",p:["Mitosis menghasilkan 2 sel, meiosis menghasilkan 4 sel","Mitosis untuk pembiakan aseks, meiosis untuk penghasilan gamet","Sel hasil mitosis mempunyai bilangan kromosom yang sama dengan sel induk","Sel hasil meiosis mempunyai bilangan kromosom yang sama dengan sel induk","Meiosis melibatkan dua pusingan pembahagian, mitosis satu pusingan"],b:[0,1,2,4],u:"Sel hasil meiosis mempunyai separuh bilangan kromosom sel induk, bukan sama."}},

{n:3, tempat:"Papan Silang", sk:"5.2 Pewarisan", lampiran:"punnett",
 kadNama:"Hukum Mendel", kadEm:"\u{1F331}", kadFakta:"Gregor Mendel menjalankan eksperimen ke atas lebih 28,000 pokok kacang pis sebelum merumuskan hukum pewarisannya pada tahun 1866.",
 bosKadNama:"Alel", bosKadEm:"\u{1F9E9}", bosKadFakta:"Manusia mempunyai kira-kira 20,000 gen, tetapi variasi pada hanya segelintir daripadanya menentukan kepelbagaian ciri yang kita lihat.",
 soalan:[
 {j:"pilih",t:"Bentuk alternatif bagi satu gen yang menentukan ciri tertentu dipanggil:",p:["Alel","Genotip","Fenotip","Zigot"],b:0,u:"Alel ialah versi berbeza bagi gen yang sama, contohnya alel mata coklat dan mata biru."},
 {j:"pilih",t:"Alel yang ciri-cirinya terzahir walaupun hanya satu salinan hadir dipanggil:",p:["Alel dominan","Alel resesif","Alel heterozigot","Alel karier"],b:0,u:"Alel dominan biasanya ditulis dengan huruf besar, contohnya B."},
 {j:"pilih",t:"Berdasarkan jadual silang monohibrid, silang antara dua induk heterozigot Bb menghasilkan nisbah genotip:",p:["1 BB : 2 Bb : 1 bb","1 BB : 1 Bb : 1 bb : 1 BB","3 BB : 1 bb","2 BB : 2 bb"],b:0,u:"Jadual silang menunjukkan empat kombinasi genotip: 1 BB, 2 Bb, 1 bb."},
 {j:"pilih",t:"Berdasarkan jadual silang monohibrid, jika B (perang) dominan ke atas b (perang muda), berapakah nisbah fenotip generasi F2?",p:["3 perang : 1 perang muda","1 perang : 1 perang muda","1 perang : 3 perang muda","2 perang : 2 perang muda"],b:0,u:"BB dan kedua-dua Bb menunjukkan fenotip dominan (perang), hanya bb menunjukkan fenotip resesif."},
 {j:"pilih",t:"Genotip merujuk kepada:",p:["Susunan alel yang dimiliki oleh sesuatu organisma","Ciri fizikal luaran yang dapat dilihat jelas pada organisma","Bilangan kromosom dalam satu sel","Jenis kelamin sesuatu organisma"],b:0,u:"Fenotip pula ialah ciri yang zahir hasil daripada genotip itu."},
 {j:"banyak",t:"Pilih SEMUA genotip yang tergolong sebagai heterozigot.",p:["Bb","Aa","BB","aa","Cc"],b:[0,1,4],u:"Heterozigot bermaksud dua alel berbeza; BB dan aa ialah homozigot kerana kedua-dua alel sama."},
 {j:"nombor",t:"Dalam silang monohibrid Bb x Bb yang menghasilkan 200 anak, berapakah anggaran bilangan anak berfenotip resesif mengikut nisbah 3:1?",b:50,tol:5,suf:"anak",u:"Satu daripada empat bahagian bersifat resesif: 200 bahagi 4 bersamaan 50."},
 {j:"pilih",t:"Bapa bergenotip bb dan ibu bergenotip Bb. Apakah kemungkinan genotip anak mereka?",p:["Bb atau bb, nisbah 1:1","Hanya Bb sahaja","BB atau bb, dengan nisbah 1:1","Hanya bb sahaja"],b:0,u:"Bapa hanya boleh menyumbang alel b, ibu boleh menyumbang B atau b, menghasilkan Bb atau bb."}],
 bos:{j:"pilih",t:"Seorang bayi mempunyai golongan darah O, tetapi kedua-dua ibu bapanya bergolongan darah A. Apakah penjelasan paling wajar?",p:["Kedua-dua ibu bapa adalah heterozigot dan membawa alel resesif golongan darah O","Ujian darah bayi tersebut pasti silap dan perlu diulang","Golongan darah hanya diwarisi daripada ibu sahaja","Mutasi berlaku semasa persenyawaan menyebabkan golongan darah berubah"],b:0,u:"Alel golongan darah A boleh bersifat heterozigot, jadi kedua-dua ibu bapa boleh menyumbang alel resesif kepada anak, menghasilkan genotip golongan O."}},

{n:4, tempat:"Makmal Kariotip", sk:"5.3 Mutasi",
 kadNama:"Sindrom Down", kadEm:"\u{1FA7A}", kadFakta:"Sindrom Down berlaku kira-kira 1 dalam setiap 700 kelahiran hidup di seluruh dunia, tidak kira bangsa atau latar belakang.",
 bosKadNama:"Analisis Forensik", bosKadEm:"\u{1F50E}", bosKadFakta:"Hanya memerlukan segelintir sel daripada air liur atau rambut untuk mengekstrak DNA yang cukup bagi satu ujian forensik moden.",
 soalan:[
 {j:"pilih",t:"Perubahan kekal pada jujukan DNA atau struktur kromosom dipanggil:",p:["Mutasi","Replikasi","Transkripsi","Meiosis"],b:0,u:"Mutasi boleh berlaku secara semula jadi atau disebabkan agen mutagen."},
 {j:"pilih",t:"Buta warna dan hemofilia ialah contoh:",p:["Mutasi gen","Mutasi kromosom","Mutasi mitokondria","Variasi selanjar"],b:0,u:"Kedua-duanya disebabkan perubahan pada satu gen tunggal, bukan struktur keseluruhan kromosom."},
 {j:"pilih",t:"Sindrom Down disebabkan oleh:",p:["Kromosom 21 tambahan (trisomi 21)","Kekurangan satu kromosom seks","Mutasi pada gen tunggal sahaja","Jangkitan virus semasa tempoh awal kehamilan"],b:0,u:"Sindrom Down ialah contoh mutasi kromosom akibat kromosom 21 berlebihan."},
 {j:"pilih",t:"Kaedah yang digunakan doktor untuk mengesan kelainan bilangan atau bentuk kromosom janin ialah:",p:["Amniosintesis dan kariotip","Ujian darah rutin sahaja","Imbasan ultrabunyi luaran sahaja","Ujian air kencing ibu"],b:0,u:"Amniosintesis mengambil sampel cecair amnion untuk analisis kromosom janin."},
 {j:"banyak",t:"Pilih SEMUA faktor yang boleh menyebabkan mutasi.",p:["Pendedahan kepada sinaran ultraungu berlebihan","Bahan kimia mutagen","Kesilapan semasa replikasi DNA","Bersenam secara berkala","Tidur yang cukup setiap malam"],b:[0,1,2],u:"Sinaran, bahan kimia mutagen, dan kesilapan replikasi ialah punca mutasi; tabiat sihat tidak menyebabkan mutasi."},
 {j:"pilih",t:"Seorang bayi lelaki lahir dengan kariotip menunjukkan XXY, bukan XY biasa. Keadaan ini ialah:",p:["Sindrom Klinefelter, akibat mutasi kromosom seks","Sindrom Down, akibat kromosom 21 tambahan","Sindrom Turner, akibat kehilangan satu kromosom X sepenuhnya","Keadaan normal tanpa sebarang mutasi"],b:0,u:"Sindrom Klinefelter berlaku apabila lelaki mewarisi kromosom X tambahan."},
 {j:"pilih",t:"Mengapakah saintis forensik menggunakan analisis DNA untuk mengenal pasti individu?",p:["Jujukan DNA setiap individu (kecuali kembar seiras) adalah unik","Semua manusia mempunyai jujukan DNA yang sama","DNA berubah-ubah setiap hari mengikut aktiviti seharian seseorang","DNA hanya boleh diperoleh daripada darah sahaja"],b:0,u:"Variasi jujukan DNA antara individu menjadikannya sesuai sebagai cap jari genetik."},
 {j:"pilih",t:"Apakah kepentingan utama genealogi genetik, iaitu kajian salasilah menggunakan DNA?",p:["Mengesan hubungan kekeluargaan dan warisan etnik seseorang","Merawat serta menyembuhkan semua jenis penyakit genetik serta-merta","Menukar susunan DNA seseorang secara kekal","Menggantikan keperluan sijil kelahiran rasmi"],b:0,u:"Genealogi genetik membandingkan jujukan DNA untuk mengesan hubungan keturunan."}],
 bos:{j:"pilih",t:"Seorang jurutera genetik mendapati satu keluarga mempunyai sejarah anemia sel sabit yang tinggi. Tindakan yang paling wajar berdasarkan sains ialah:",p:["Cadangkan saringan genetik dan kaunseling praperkahwinan kepada ahli keluarga berisiko","Larang semua ahli keluarga itu daripada berkahwin","Abaikan sejarah itu kerana ia tidak akan berulang lagi","Rawat semua ahli keluarga dengan ubat yang sama tanpa ujian"],b:0,u:"Saringan genetik dan kaunseling membolehkan keluarga membuat keputusan termaklum tanpa melabel atau menyekat sesiapa."}},

{n:5, tempat:"Ladang Bioteknologi", sk:"5.4 Teknologi kejuruteraan genetik",
 kadNama:"Insulin Rekombinan", kadEm:"\u{1F489}", kadFakta:"Sebelum tahun 1982, insulin ubat hanya diperoleh daripada pankreas lembu dan babi; kini bakteria terubah suai menghasilkannya dalam kuantiti besar.",
 bosKadNama:"GMO", bosKadEm:"\u{1F33E}", bosKadFakta:"Tomato GMO pertama yang diluluskan untuk jualan, Flavr Savr, dipasarkan pada tahun 1994 dengan ciri tahan lambat lembik.",
 soalan:[
 {j:"pilih",t:"Kejuruteraan genetik melibatkan:",p:["Pengubahsuaian bahan genetik sesuatu organisma secara sengaja","Pembiakan baka semula jadi tanpa campur tangan manusia","Pemerhatian ciri baka tanpa sebarang eksperimen","Penyingkiran semua kromosom daripada sel"],b:0,u:"Kejuruteraan genetik memindahkan atau mengubah gen untuk tujuan tertentu."},
 {j:"pilih",t:"Organisma termodifikasi genetik (GMO) yang biasa dalam pertanian termasuk:",p:["Tomato dan kacang soya tahan serangga perosak","Hanya haiwan ternakan sahaja","Hanya mikroorganisma dalam makmal sahaja","Tumbuhan liar yang tidak pernah diusahakan oleh manusia"],b:0,u:"Tanaman GMO sering direka untuk tahan perosak atau herbisid, meningkatkan hasil."},
 {j:"pilih",t:"Insulin manusia kini dihasilkan secara komersial menggunakan:",p:["Bakteria yang telah dimasukkan gen insulin manusia (DNA rekombinan)","Ekstrak pankreas haiwan sahaja seperti dahulu","Sintesis kimia tanpa sebarang organisma hidup","Darah penderma manusia yang disaring"],b:0,u:"Teknik DNA rekombinan memasukkan gen insulin manusia ke dalam plasmid bakteria, membolehkan pengeluaran besar-besaran."},
 {j:"pilih",t:"Apakah kebaikan utama kejuruteraan genetik dalam bidang perubatan?",p:["Membolehkan penghasilan besar-besaran hormon dan enzim manusia","Menghapuskan sepenuhnya keperluan ubat-ubatan","Menjamin tiada kesan sampingan pada pesakit","Mengurangkan kos penyelidikan sains kepada sifar"],b:0,u:"Sebelum ini, hormon seperti insulin diperoleh dalam kuantiti terhad daripada haiwan; teknologi ini membolehkan pengeluaran besar-besaran yang tulen."},
 {j:"banyak",t:"Pilih SEMUA isu etika yang berkaitan dengan kejuruteraan genetik.",p:["Kebimbangan tentang pengklonan manusia","Risiko biohazard daripada organisma terubah suai","Kesan jangka panjang GMO terhadap ekosistem","Peningkatan hasil tuaian pertanian yang ketara","Kos pembelian baja kimia untuk sawah padi"],b:[0,1,2],u:"Peningkatan hasil tuaian ialah manfaat, bukan isu etika; kos baja tiada kaitan langsung dengan kejuruteraan genetik."},
 {j:"pilih",t:"Mengapakah plasmid bakteria sesuai digunakan sebagai vektor dalam DNA rekombinan?",p:["Ia boleh menerima dan menggandakan gen asing dengan mudah","Ia terlalu besar untuk dimasuki gen lain","Ia hanya wujud dalam sel manusia","Ia tidak boleh direplikasi sama sekali"],b:0,u:"Plasmid ialah DNA bulat kecil yang mudah dimanipulasi dan direplikasi oleh bakteria hos."},
 {j:"pilih",t:"Sebuah syarikat insurans mencadangkan menaikkan premium berdasarkan hasil saringan genetik pemohon. Penilaian paling wajar terhadap cadangan ini ialah:",p:["Berisiko mendiskriminasi individu atas faktor yang di luar kawalan mereka","Wajar sepenuhnya kerana data genetik sentiasa tepat","Tiada kaitan dengan etika kerana ia hanya urusan perniagaan","Patut dilaksanakan segera tanpa sebarang garis panduan"],b:0,u:"Maklumat genetik boleh disalahguna untuk mendiskriminasi individu berdasarkan risiko yang mereka tidak pilih sendiri; ini isu etika penting."},
 {j:"pilih",t:"Apakah kebimbangan utama berkaitan biohazard dalam kejuruteraan genetik?",p:["Organisma terubah suai boleh terlepas dan menjejaskan ekosistem semula jadi","Semua organisma terubah suai automatik menjadi toksik","Kejuruteraan genetik tidak mempunyai sebarang risiko","Biohazard hanya berlaku dalam kajian angkasa lepas"],b:0,u:"Pelepasan organisma terubah suai secara tidak sengaja boleh mengganggu keseimbangan ekosistem sedia ada."}],
 bos:{j:"pilih",t:"Sebuah negara membenarkan penjualan tomato GMO tanpa label khas, manakala negara lain mewajibkan label 'Diubah Suai Secara Genetik'. Analisis paling seimbang bagi kedua-dua dasar ini ialah:",p:["Pelabelan menghormati hak pengguna membuat pilihan termaklum, walaupun kajian belum buktikan bahaya kesihatan","Pelabelan sentiasa tidak perlu kerana GMO terbukti selamat sepenuhnya","Larangan penuh GMO ialah satu-satunya dasar yang beretika","Pengguna sebenarnya tidak pernah berhak mengetahui kandungan penuh makanan yang mereka beli setiap hari"],b:0,u:"Isu ini melibatkan pertimbangan sosial dan etika iaitu hak memilih, bukan semata-mata soal keselamatan saintifik yang sudah dikaji meluas."}},

{n:6, tempat:"Padang Ukur", sk:"5.5 Variasi", lampiran:"variasi",
 kadNama:"Variasi Selanjar", kadEm:"\u{1F4CF}", kadFakta:"Ketinggian manusia dipengaruhi oleh lebih 700 lokasi gen berbeza, menjadikannya salah satu ciri variasi selanjar paling kompleks.",
 bosKadNama:"Evolusi", bosKadEm:"\u{1F98B}", bosKadFakta:"Rama-rama Biston betularia di England bertukar warna dominan populasi dalam masa kurang 50 tahun akibat variasi warna sedia ada dan tekanan persekitaran.",
 soalan:[
 {j:"pilih",t:"Variasi yang menunjukkan julat selanjar nilai tanpa kategori tegas, seperti ketinggian, dipanggil:",p:["Variasi selanjar","Variasi tak selanjar","Variasi genetik sahaja","Variasi persekitaran sahaja"],b:0,u:"Variasi selanjar boleh diukur pada mana-mana titik dalam satu julat, contohnya 150.5 cm."},
 {j:"pilih",t:"Kebolehan menggulung lidah, iaitu boleh atau tidak boleh, ialah contoh:",p:["Variasi tak selanjar","Variasi selanjar","Variasi yang tidak diwarisi","Mutasi kromosom"],b:0,u:"Ciri ini hanya mempunyai dua kategori berbeza, tiada nilai perantaraan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bentuk taburan ketinggian murid yang ditunjukkan paling hampir menyerupai:",p:["Taburan normal berbentuk lengkung loceng, memuncak di tengah julat","Taburan rata, sama banyak di setiap kumpulan","Taburan condong sepenuhnya ke satu hujung sahaja tanpa simetri","Taburan tanpa sebarang corak"],b:0,u:"Ciri variasi selanjar seperti ketinggian biasanya membentuk lengkung loceng apabila diplot mengikut julat."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh variasi tak selanjar?",p:["Golongan darah (A, B, AB, O)","Berat badan seseorang individu","Ketinggian pokok di dalam hutan","Jisim buah-buahan tempatan"],b:0,u:"Golongan darah hanya mempunyai kategori tertentu, bukan julat berterusan."},
 {j:"banyak",t:"Pilih SEMUA faktor yang boleh menyebabkan variasi dalam sesuatu populasi.",p:["Baka (genetik) daripada ibu bapa","Persekitaran seperti pemakanan dan iklim","Mutasi gen","Semua individu dalam populasi adalah klon sempurna","Rekombinasi semasa meiosis"],b:[0,1,2,4],u:"Variasi timbul daripada gabungan baka, persekitaran, mutasi dan rekombinasi; populasi klon sempurna tidak akan menunjukkan variasi."},
 {j:"pilih",t:"Mengapakah histogram lebih sesuai berbanding graf palang berasingan untuk mempersembahkan data ketinggian murid?",p:["Kerana ketinggian ialah data selanjar yang berjulat, bukan kategori berasingan","Kerana histogram lebih mudah dilukis dengan tangan","Kerana graf palang hanya boleh digunakan untuk data negatif","Kerana histogram tidak pernah memerlukan sebarang skala paksi"],b:0,u:"Data selanjar diplot mengikut julat bersambung supaya taburan sebenar kelihatan, bukan kategori berasingan."},
 {j:"pilih",t:"Apakah kepentingan mengkaji variasi dalam sesuatu populasi?",p:["Membantu memahami bagaimana spesies menyesuaikan diri dan berevolusi","Membuktikan semua individu dalam spesies sama sepenuhnya","Menghapuskan keperluan kajian genetik lanjutan","Mengelakkan sebarang bentuk kajian persekitaran pada masa hadapan kelak"],b:0,u:"Variasi membekalkan bahan mentah untuk pemilihan semula jadi dan adaptasi populasi."},
 {j:"nombor",t:"Dalam satu kajian 40 murid, 8 murid boleh menggulung lidah manakala selebihnya tidak. Berapa peratuskah murid yang TIDAK boleh menggulung lidah?",b:80,tol:1,suf:"%",u:"40 tolak 8 bersamaan 32 murid; 32 bahagi 40 didarab 100 bersamaan 80%."}],
 bos:{j:"buka",
  t:"Kelas awak ingin menyiasat sama ada terdapat kaitan antara ketinggian ibu bapa dengan ketinggian anak sebagai contoh variasi selanjar yang diwarisi. Reka satu penyiasatan mudah untuk kelas awak jalankan.",
  arahan:"Nyatakan data yang perlu dikumpul, cara data itu dipersembahkan (jenis graf) supaya sesuai dengan jenis variasi ini, dan satu langkah untuk memastikan data yang dikumpul adil serta boleh dipercayai.",
  u:"Jawapan TP6 yang kukuh mengenal pasti variasi selanjar dengan betul, mencadangkan graf yang sesuai seperti graf serakan atau histogram, dan mengambil kira saiz sampel atau pemboleh ubah lain seperti pemakanan."}}
];

module.exports = {
  id:"t4b3", tingkatan:4, kod:"5.0 Genetik",
  tajuk:"Laluan Waris",
  subtajuk:"Sains Ting. 4 · Bab 5 Genetik",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur gen, DNA dan kromosom di dalam nukleus, termasuk nama fasa dalam mitosis dan meiosis. Langkah seterusnya ialah menerangkan bagaimana struktur ini berfungsi, bukan sekadar menamakannya.",
   2:"{n} memahami perbezaan antara mitosis dan meiosis serta konsep alel dominan dan resesif dalam pewarisan. Galakkan {n} mengaitkan konsep ini dengan situasi harian sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan Hukum Mendel untuk meramalkan nisbah genotip dan fenotip menggunakan silang monohibrid. Latih {n} mentafsir kariotip dan data kesihatan sebenar.",
   4:"{n} mampu menganalisis punca dan kesan mutasi gen serta mutasi kromosom, termasuk mengenal pasti sindrom daripada kariotip. Seterusnya latih {n} menimbang kepentingan penyelidikan genetik dalam konteks sebenar.",
   5:"{n} dapat menilai kebaikan dan keburukan kejuruteraan genetik daripada aspek ekonomi, etika dan sosial, disokong hujah yang munasabah. {n} sudah bersedia untuk tugasan mereka cipta penyiasatan sendiri.",
   6:"{n} berjaya mereka bentuk satu penyiasatan tentang variasi yang sesuai dengan jenis data yang dikumpul, lengkap dengan cara memastikan data adil dan boleh dipercayai. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Genetik. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ kromosom:R_KROMOSOM, mitosis:R_MITOSIS, punnett:T_PUNNETT, variasi:R_VARIASI },
  aras:ARAS
};
