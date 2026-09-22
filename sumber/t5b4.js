/* Sumber kandungan — Sains KSSM Tingkatan 5, Bidang 4.0 Kadar Tindak Balas.
   Fail ini disunting tangan. Jalankan `node bina.js t5b4` untuk menyemaknya
   dan menghasilkan bank-t5b4.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 5, Bahagian Pembangunan Kurikulum, muka 134.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran saintifik mengenai kadar tindak balas.",
"Memahami kadar tindak balas dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai kadar tindak balas dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai kadar tindak balas dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai kadar tindak balas dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains berkaitan kadar tindak balas dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_GAS = {
  jenis:"graf",
  x:[0,10,20,30,40,50,60],
  siri:[{label:"Gas karbon dioksida", y:[0,18,30,38,42,44,44], warna:"hijau"}],
  titik:true,
  xLabel:"Masa (s)",
  kapsyen:"Rajah 1 · Isi padu gas karbon dioksida terhasil lawan masa apabila kalsium karbonat berlebihan bertindak balas dengan asid hidroklorik.",
  alt:"Graf garis isi padu gas lawan masa, meningkat curam pada mulanya kemudian mendatar selepas 50 saat pada 44 sentimeter padu"
};

const R_SUHU = {
  jenis:"graf",
  x:[0,10,20,30,40,50,60],
  siri:[
    {label:"Suhu 50°C", y:[0,30,42,46,47,47,47], warna:"merah"},
    {label:"Suhu 25°C", y:[0,15,26,34,39,43,45], warna:"hijau"}
  ],
  xLabel:"Masa (s)",
  kapsyen:"Rajah 1 · Isi padu gas terhasil lawan masa bagi tindak balas yang sama pada dua suhu berbeza.",
  alt:"Graf garis dua keluk isi padu gas lawan masa, keluk suhu 50 darjah Celsius naik lebih curam dan mendatar lebih awal berbanding keluk suhu 25 darjah Celsius"
};

const R_MANGKIN = {
  jenis:"graf", mod:"mendatar",
  bar:[
    {label:"Tanpa mangkin", nilai:120, warna:"merah"},
    {label:"Dengan mangkin", nilai:15, warna:"hijau"}
  ],
  xLabel:"Masa kumpul 50 cm³ oksigen (s)",
  kapsyen:"Rajah 1 · Masa yang diambil untuk mengumpul 50 cm³ gas oksigen daripada penguraian hidrogen peroksida, dengan dan tanpa mangkin mangan(IV) oksida.",
  alt:"Graf palang mendatar membandingkan masa tindak balas, 120 saat tanpa mangkin berbanding 15 saat dengan mangkin"
};

const T_EKSPERIMEN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Eksperimen</th>'+
'<th>Kepekatan HCl</th><th>Bentuk magnesium</th><th class="n">Masa gas berhenti terhasil (s)</th></tr></thead><tbody>'+
'<tr><td>A</td><td>2.0 mol/dm³</td><td>Pita (ribbon)</td><td class="n">40</td></tr>'+
'<tr><td>B</td><td>1.0 mol/dm³</td><td>Pita (ribbon)</td><td class="n">80</td></tr>'+
'<tr><td>C</td><td>2.0 mol/dm³</td><td>Serbuk (powder)</td><td class="n">15</td></tr>'+
'<tr><td>D</td><td>1.0 mol/dm³</td><td>Serbuk (powder)</td><td class="n">35</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap eksperimen menggunakan jisim magnesium yang sama, direndam dalam 50 cm³ asid hidroklorik berlebihan pada suhu bilik.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Makmal", sk:"4.1 Pengenalan kadar tindak balas",
 kadNama:"Tindak Balas Pantas", kadEm:"⚡", kadFakta:"Letupan ialah salah satu tindak balas paling pantas yang wujud, selesai dalam kurang daripada sepersepuluh saat.",
 bosKadNama:"Tindak Balas Perlahan", bosKadEm:"\u{1F529}", bosKadFakta:"Karat pada paku besi boleh mengambil masa berbulan-bulan kerana ia tindak balas yang sangat perlahan dengan oksigen dan wap air.",
 soalan:[
 {j:"pilih",t:"Kadar tindak balas ditakrifkan sebagai:",p:["Ukuran kelajuan bahan tindak balas ditukar kepada hasil","Jumlah tenaga yang dibebaskan oleh sesuatu tindak balas kimia itu","Jisim bahan tindak balas yang digunakan sepenuhnya dalam eksperimen","Suhu maksimum yang dicapai semasa tindak balas itu berlaku"],b:0,u:"Kadar mengukur perubahan kuantiti per unit masa, bukan tenaga, jisim atau suhu semata-mata."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh tindak balas PANTAS?",p:["Letupan mercun semasa perayaan","Karat yang terbentuk pada pagar besi","Pereputan sisa sayur di dalam kompos","Pengewapan air laut di kolam garam"],b:0,u:"Letupan selesai dalam sepersekian saat, jauh lebih pantas daripada tindak balas lain yang disenaraikan."},
 {j:"pilih",t:"Antara berikut, tindak balas manakah paling PERLAHAN?",p:["Karat besi terbentuk pada pagar luar rumah","Gas asli terbakar pada dapur gas","Asid dineutralkan oleh alkali dalam kelalang kon","Magnesium bertindak balas dengan asid hidroklorik"],b:0,u:"Karat mengambil masa berbulan-bulan hingga bertahun, manakala tiga pilihan lain selesai dalam saat atau minit."},
 {j:"pilih",t:"Unit yang lazim digunakan untuk kadar tindak balas ialah:",p:["cm³ per saat atau gram per saat, bergantung kaedah","Sentimeter padu sahaja, tanpa mengira masa yang diambil","Saat sahaja, tanpa mengira kuantiti yang telah berubah","Mol per liter, iaitu unit kepekatan larutan itu"],b:0,u:"Kadar sentiasa kuantiti per masa; unit bergantung pada apa yang diukur (isi padu gas atau jisim)."},
 {j:"susun",t:"Susun langkah AM untuk menjalankan eksperimen mengkaji kadar tindak balas mengikut urutan yang betul.",p:["Kenal pasti pemboleh ubah dimanipulasi, dikawal dan bergerak balas","Sediakan bahan dan radas yang diperlukan","Jalankan eksperimen dan catat bacaan pada selang masa tetap","Plot graf dan tentukan kadar tindak balas daripada graf itu"],b:[0,1,2,3],u:"Pemboleh ubah mesti dikenal pasti dahulu sebelum radas disediakan dan data dikumpul."},
 {j:"pilih",t:"Antara berikut, yang manakah BUKAN faktor yang mempengaruhi kadar tindak balas?",p:["Warna bekas kaca yang digunakan","Suhu bahan tindak balas","Kepekatan larutan yang digunakan","Saiz zarah bahan pepejal"],b:0,u:"Warna bekas tidak mengubah tenaga atau kekerapan perlanggaran zarah, jadi ia bukan faktor kadar tindak balas."},
 {j:"pilih",t:"Kepekatan sesuatu larutan merujuk kepada:",p:["Jumlah zarah terlarut dalam setiap unit isi padu","Jumlah isi padu larutan di dalam sesuatu bekas tertentu","Jisim keseluruhan larutan termasuk pelarutnya sekali","Suhu larutan semasa ia disediakan oleh murid"],b:0,u:"Kepekatan ialah nisbah bilangan zarah terlarut kepada isi padu larutan, bukan isi padu atau jisim sahaja."},
 {j:"pilih",t:"Mengapakah ahli kimia perindustrian perlu mengkaji kadar tindak balas sesuatu proses?",p:["Untuk menentukan masa optimum dan kos pengeluaran produk","Untuk menentukan warna akhir produk yang dihasilkan","Untuk mengelakkan penggunaan sebarang bahan tindak balas","Untuk memastikan tindak balas berlaku hanya pada waktu malam"],b:0,u:"Kadar tindak balas menentukan berapa lama pengeluaran mengambil masa, yang secara langsung menjejaskan kos."}],
 bos:{j:"banyak",t:"Pilih SEMUA yang merupakan perubahan KIMIA (bukan perubahan fizik).",p:["Karat terbentuk pada paku besi","Ais mencair menjadi air","Kayu terbakar menjadi abu","Wap air terpeluwap menjadi titisan air","Susu menjadi masam (basi)"],b:[0,2,4],u:"Karat, pembakaran dan susu basi menghasilkan bahan baharu (tindak balas kimia); ais mencair dan wap terpeluwap hanya menukar keadaan jirim (perubahan fizik)."}},

{n:2, tempat:"Jam Randik", sk:"4.1 Menentukan kadar tindak balas", lampiran:"gas",
 kadNama:"Kaedah Pengumpulan Gas", kadEm:"\u{1F9EA}", kadFakta:"Picagari gas boleh mengukur isi padu gas sehingga ketepatan 1 cm³, jauh lebih tepat daripada silinder penyukat biasa.",
 bosKadNama:"Kaedah Kehilangan Jisim", kadEm2:"⚖", bosKadEm:"⚖", bosKadFakta:"Kaedah kehilangan jisim kurang sesuai untuk gas hidrogen kerana jisimnya terlalu kecil untuk dikesan oleh kebanyakan neraca makmal.",
 soalan:[
 {j:"pilih",t:"Formula kadar purata tindak balas ialah:",p:["Perubahan kuantiti bahagi masa yang diambil","Masa yang diambil bahagi perubahan kuantiti","Perubahan kuantiti darab masa yang diambil","Kuantiti akhir bahagi kuantiti awal"],b:0,u:"Kadar purata sentiasa perubahan kuantiti (isi padu atau jisim) dibahagi dengan masa yang diambil untuk perubahan itu."},
 {j:"pilih",t:"Tiga kaedah lazim untuk menentukan kadar tindak balas ialah:",p:["Pengumpulan gas, kehilangan jisim, dan kekeruhan","Pengumpulan gas, perubahan warna kertas litmus, dan bau yang terhasil","Kehilangan jisim, suhu bilik, dan tekanan udara ketika itu","Kekeruhan larutan, pH akhir, dan jumlah wang bahan yang digunakan"],b:0,u:"Ketiga-tiga kaedah ini mengukur perubahan kuantiti yang boleh dikesan sepanjang tindak balas berlaku."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapakah isi padu gas yang terhasil selepas 20 saat?",p:["30 cm³","18 cm³","38 cm³","44 cm³"],b:0,u:"Titik pada graf bagi masa 20 saat menunjukkan paksi-y pada 30 cm³."},
 {j:"nombor",t:"Berdasarkan Rajah 1, kirakan kadar purata tindak balas bagi 20 saat pertama, dalam cm³ per saat.",b:1.5,tol:0.1,suf:"cm³/s",u:"30 cm³ dibahagi 20 saat bersamaan 1.5 cm³ per saat."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah tindak balas boleh dianggap selesai?",p:["Selepas kira-kira 50 saat, bila graf menjadi mendatar","Selepas tepat 20 saat, apabila graf paling curam sekali","Selepas 60 saat sahaja, iaitu di hujung graf itu","Tindak balas ini tidak pernah selesai sepenuhnya"],b:0,u:"Graf menjadi mendatar bermula kira-kira 50 saat, menunjukkan tiada lagi gas terhasil selepas itu."},
 {j:"pilih",t:"Mengapakah graf dalam Rajah 1 menjadi mendatar selepas 50 saat?",p:["Salah satu bahan tindak balas telah habis digunakan","Gas yang terhasil telah bocor keluar daripada radas","Jam randik yang digunakan telah rosak","Suhu makmal menurun secara mendadak"],b:0,u:"Apabila salah satu bahan tindak balas habis, tindak balas berhenti dan tiada gas tambahan terhasil."},
 {j:"pilih",t:"Bahagian graf dalam Rajah 1 yang paling curam menunjukkan:",p:["Kadar tindak balas paling tinggi","Kadar tindak balas paling rendah","Isi padu gas paling banyak terhasil","Masa tindak balas paling lama"],b:0,u:"Kecuraman graf isi padu-masa mewakili kadar; lebih curam bermakna kadar lebih tinggi."},
 {j:"pilih",t:"Kaedah kekeruhan larutan paling sesuai digunakan untuk tindak balas yang:",p:["Menghasilkan mendakan yang mengeruhkan larutan secara beransur","Membebaskan gas yang boleh dikumpul dalam picagari gas itu","Kehilangan jisim yang jelas kerana gas telah terbebas","Menukar warna larutan daripada biru kepada tidak berwarna langsung"],b:0,u:"Kekeruhan diukur berdasarkan sejauh mana tanda X di bawah bikar tidak lagi kelihatan apabila mendakan terbentuk."}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, berapakah kadar tindak balas antara saat ke-40 hingga saat ke-60?",b:0.1,tol:0.05,suf:"cm³/s",u:"Perubahan isi padu ialah 44 tolak 42 bersamaan 2 cm³, dibahagi 20 saat bersamaan 0.1 cm³ per saat — hampir mendatar kerana tindak balas hampir selesai."}},

{n:3, tempat:"Ketuhar", sk:"4.2 Kesan suhu ke atas kadar tindak balas", lampiran:"suhu",
 kadNama:"Teori Perlanggaran", kadEm:"\u{1F4A5}", kadFakta:"Bukan semua perlanggaran zarah menghasilkan tindak balas; hanya perlanggaran berkesan dengan tenaga dan orientasi yang betul yang berjaya.",
 bosKadNama:"Tenaga Pengaktifan", bosKadEm:"\u{1F525}", bosKadFakta:"Tenaga pengaktifan ialah tenaga minimum yang diperlukan sebelum perlanggaran zarah boleh menghasilkan tindak balas.",
 soalan:[
 {j:"pilih",t:"Mengapakah menaikkan suhu meningkatkan kadar tindak balas?",p:["Zarah bergerak lebih pantas dan lebih kerap berlanggar dengan tenaga cukup","Zarah menjadi lebih besar sehingga lebih mudah berlanggar antara satu sama lain","Bilangan zarah bahan tindak balas bertambah secara automatik dengan sendiri","Suhu tinggi menukar hasil tindak balas kepada bentuk yang lain"],b:0,u:"Suhu tinggi memberi zarah lebih tenaga kinetik, meningkatkan kelajuan dan kekerapan perlanggaran berkesan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah ciri keluk suhu 50°C berbanding keluk suhu 25°C?",p:["Naik lebih curam dan menjadi mendatar dengan lebih awal","Naik lebih perlahan dan tidak pernah mendatar langsung","Kedua-dua keluk adalah serupa sepenuhnya tanpa perbezaan","Turun secara beransur-ansur selepas 30 saat berlalu"],b:0,u:"Suhu lebih tinggi memberi kadar lebih tinggi, jadi keluknya naik lebih curam dan mencapai pelan lebih awal."},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada suhu 50°C, berapa saatkah diambil untuk isi padu gas mencecah 46 cm³?",b:30,tol:2,suf:"s",u:"Titik keluk 50°C menunjukkan isi padu 46 cm³ pada paksi masa 30 saat."},
 {j:"pilih",t:"Jika suhu tindak balas dinaikkan tanpa mengubah faktor lain, apakah kesannya ke atas masa yang diperlukan untuk tindak balas selesai?",p:["Masa yang diperlukan berkurangan","Masa yang diperlukan bertambah","Masa yang diperlukan tidak berubah langsung","Tindak balas akan berhenti sepenuhnya"],b:0,u:"Kadar yang lebih tinggi bermakna tindak balas mencapai penyudahnya dalam masa yang lebih singkat."},
 {j:"pilih",t:"Mengapakah makanan disimpan di dalam peti sejuk?",p:["Suhu rendah memperlahankan kadar tindak balas pereputan","Suhu rendah membunuh semua mikroorganisma dengan serta-merta","Suhu rendah menukar makanan kepada bentuk pepejal sahaja itu","Suhu rendah menambah kandungan nutrien dalam makanan secara langsung"],b:0,u:"Suhu rendah mengurangkan kekerapan perlanggaran berkesan zarah, memperlahankan tindak balas yang merosakkan makanan."},
 {j:"pilih",t:"Mengapakah masakan dalam periuk tekanan lebih cepat masak berbanding periuk biasa?",p:["Suhu di dalam periuk tekanan boleh melebihi 100°C, mempercepatkan memasak","Ia menggunakan lebih banyak air berbanding periuk biasa","Ia menghalang sepenuhnya kehilangan wap air","Ia menukar bahan makanan kepada gas"],b:0,u:"Tekanan tinggi menaikkan takat didih air, membolehkan suhu memasak melebihi 100°C dan mempercepatkan tindak balas."},
 {j:"pilih",t:"Berdasarkan teori perlanggaran, apakah maksud 'perlanggaran berkesan'?",p:["Perlanggaran zarah dengan tenaga cukup dan orientasi yang betul","Sebarang perlanggaran antara dua zarah bahan tindak balas itu","Perlanggaran zarah yang berlaku pada suhu bilik sahaja tanpa lain","Perlanggaran yang melibatkan sekurang-kurangnya tiga zarah secara serentak"],b:0,u:"Hanya perlanggaran yang memenuhi kedua-dua syarat tenaga dan orientasi menghasilkan tindak balas."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pemboleh ubah manakah WAJIB dimalarkan antara kedua-dua eksperimen supaya perbandingan adil?",p:["Kepekatan asid, jisim kalsium karbonat dan saiz zarah itu","Suhu makmal pada hari eksperimen itu dijalankan","Jenis jam randik yang digunakan oleh murid tersebut","Warna bikar yang digunakan dalam eksperimen berkenaan"],b:0,u:"Suhu ialah pemboleh ubah dimanipulasi dalam eksperimen ini, jadi semua faktor lain yang menjejaskan kadar mesti dimalarkan."}],
 bos:{j:"susun",t:"Susun perkara yang berlaku mengikut urutan yang betul apabila suhu tindak balas dinaikkan.",p:["Zarah menyerap tenaga kinetik tambahan","Zarah bergerak lebih pantas","Kekerapan perlanggaran zarah meningkat","Bilangan perlanggaran berkesan meningkat","Kadar tindak balas meningkat"],b:[0,1,2,3,4],u:"Setiap peringkat menjadi punca kepada peringkat seterusnya, bermula daripada tenaga zarah hinggalah kadar keseluruhan."}},

{n:4, tempat:"Bikar", sk:"4.2 Kesan kepekatan dan saiz zarah", lampiran:"eksperimen",
 kadNama:"Luas Permukaan", kadEm:"\u{1F9C2}", kadFakta:"Satu kubus pepejal yang dipecahkan kepada lapan kubus lebih kecil akan menggandakan jumlah luas permukaannya walaupun jisimnya tidak berubah.",
 bosKadNama:"Kepekatan Optimum", bosKadEm:"\u{1F9EA}", bosKadFakta:"Jurutera kimia sering menguji beberapa kepekatan berbeza pada skala makmal kecil sebelum membina loji perindustrian sebenar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, eksperimen manakah mempunyai kadar tindak balas PALING TINGGI?",p:["Eksperimen C","Eksperimen A","Eksperimen B","Eksperimen D"],b:0,u:"Eksperimen C mengambil masa paling singkat (15 saat), jadi kadarnya paling tinggi."},
 {j:"pilih",t:"Bandingkan eksperimen A dan B dalam jadual. Apakah kesimpulan yang boleh dibuat?",p:["Kepekatan asid yang lebih tinggi tingkat kadar tindak balas","Bentuk magnesium yang berbeza meningkatkan kadar tindak balas itu","Suhu bilik yang berbeza meningkatkan kadar tindak balas tersebut","Jisim magnesium yang berbeza meningkatkan kadar tindak balas berkenaan"],b:0,u:"A dan B menggunakan bentuk magnesium yang sama, hanya kepekatan asid berbeza, jadi perbezaan kadar disebabkan kepekatan."},
 {j:"pilih",t:"Bandingkan eksperimen A dan C dalam jadual. Apakah kesimpulan yang boleh dibuat?",p:["Luas permukaan yang lebih besar (serbuk) tingkat kadar tindak balas","Kepekatan asid yang lebih tinggi meningkatkan kadar tindak balas itu","Isi padu asid yang lebih besar meningkatkan kadar tindak balas tersebut","Jisim magnesium yang lebih besar meningkatkan kadar tindak balas berkenaan"],b:0,u:"A dan C menggunakan kepekatan asid yang sama, hanya bentuk magnesium berbeza, jadi perbezaan kadar disebabkan luas permukaan."},
 {j:"banyak",t:"Pilih SEMUA pemboleh ubah yang WAJIB dimalarkan dalam eksperimen A dan B supaya perbandingan adil.",p:["Jisim magnesium yang digunakan","Suhu bilik semasa eksperimen","Isi padu asid hidroklorik","Kepekatan asid hidroklorik","Bentuk magnesium yang digunakan"],b:[0,1,2,4],u:"Kepekatan asid ialah pemboleh ubah dimanipulasi antara A dan B, jadi ia tidak boleh dimalarkan; semua yang lain wajib dimalarkan."},
 {j:"nombor",t:"Berapa kalikah lebih pantas kadar tindak balas eksperimen C berbanding eksperimen A?",b:2.7,tol:0.2,suf:"kali",u:"40 saat dibahagi 15 saat bersamaan lebih kurang 2.7 kali lebih pantas."},
 {j:"pilih",t:"Mengapakah masa diambil sebagai penunjuk kadar dalam jadual ini, bukan isi padu gas?",p:["Jisim magnesium yang sama digunakan, jadi masa singkat tunjuk kadar tinggi","Isi padu gas tidak boleh diukur langsung dalam eksperimen jenis ini","Masa lebih mudah diukur berbanding isi padu walau apa pun keadaannya","Jisim magnesium yang digunakan berbeza dalam setiap eksperimen"],b:0,u:"Oleh kerana jumlah gas akhir sama bagi jisim magnesium yang sama, masa yang lebih singkat secara langsung menunjukkan kadar yang lebih tinggi."},
 {j:"pilih",t:"Eksperimen E menggunakan HCl 2.0 mol/dm³ dan serbuk magnesium berjisim DUA KALI GANDA eksperimen C. Apakah kesan ke atas KADAR tindak balas (bukan jumlah gas)?",p:["Kadar tidak berubah ketara kerana kepekatan dan saiz zarah sama","Kadar meningkat dua kali ganda berbanding eksperimen C tadi","Kadar berkurangan separuh berbanding eksperimen C tadi","Kadar menjadi sifar kerana magnesium terlalu banyak digunakan"],b:0,u:"Menambah jisim menambah jumlah gas yang terhasil, tetapi tidak mengubah kadar per unit luas permukaan kerana kepekatan dan bentuk zarah kekal sama."},
 {j:"pilih",t:"Mengapakah ubat 'effervescent' berbentuk tablet larut atau serbuk, bukan bongkah pepejal?",p:["Luas permukaan yang lebih besar mempercepatkan pelarutan dan tindak balas","Ia menjadikan ubat lebih murah untuk dihasilkan","Ia mengurangkan kepekatan bahan aktif dalam ubat","Ia menghalang ubat daripada bertindak balas dengan air"],b:0,u:"Serbuk atau tablet larut mempunyai luas permukaan yang jauh lebih besar, meningkatkan kadar tindak balas dengan air."}],
 bos:{j:"banyak",t:"Berdasarkan jadual kadar tindak balas magnesium ini, pilih SEMUA kesimpulan yang disokong oleh data.",p:["Kepekatan asid mempengaruhi kadar tindak balas","Saiz zarah magnesium mempengaruhi kadar tindak balas","Suhu bilik pada hari eksperimen mempengaruhi keputusan","Jumlah akhir gas hidrogen berbeza mengikut kepekatan asid","Eksperimen C dan D menggunakan serbuk magnesium"],b:[0,1,4],u:"Jadual tidak merekodkan sebarang bacaan suhu, jadi kesimpulan tentang suhu tidak disokong; jumlah akhir gas sepatutnya sama kerana jisim magnesium sama, hanya masanya berbeza."}},

{n:5, tempat:"Mangkin", sk:"4.2 Kesan mangkin dan tekanan", lampiran:"mangkin",
 kadNama:"Mangkin", kadEm:"\u{1F9EC}", kadFakta:"Mangkin enzim dalam badan manusia boleh mempercepatkan sesetengah tindak balas berjuta-juta kali ganda pada suhu badan yang rendah.",
 bosKadNama:"Perindustrian Hijau", bosKadEm:"\u{1F3ED}", bosKadFakta:"Sesetengah loji kimia menggunakan gabungan mangkin DAN tekanan tinggi serentak untuk mencapai kadar pengeluaran yang optimum.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah kesan mangkin mangan(IV) oksida ke atas kadar penguraian hidrogen peroksida?",p:["Kadar meningkat ketara, masa berkurangan daripada 120 kepada 15 saat","Kadar berkurangan sedikit, masa bertambah daripada 15 saat kepada 120 saat itu","Kadar tidak berubah walaupun mangkin telah ditambah","Tindak balas berhenti sepenuhnya apabila mangkin itu ditambah"],b:0,u:"Rajah 1 menunjukkan masa berkurangan secara drastik daripada 120 saat kepada 15 saat apabila mangkin digunakan."},
 {j:"pilih",t:"Mengapakah jisim mangkin diukur sebelum dan selepas tindak balas dalam eksperimen jenis ini?",p:["Untuk mengesahkan bahawa mangkin tidak digunakan habis","Untuk mengira kadar tindak balas secara terus daripada jisim mangkin itu","Untuk menentukan kepekatan asid yang telah digunakan","Untuk memastikan mangkin telah bertukar menjadi hasil tindak balas itu"],b:0,u:"Mangkin bertindak semula selepas tindak balas, jadi jisimnya sepatutnya tidak berubah sebelum dan selepas."},
 {j:"pilih",t:"Seorang murid mendakwa mangkin menambah tenaga kepada zarah supaya bergerak lebih pantas. Nilaikan dakwaan ini.",p:["Tidak tepat; mangkin sediakan laluan alternatif dengan tenaga pengaktifan rendah","Tepat; mangkin memindahkan tenaga haba terus kepada zarah bahan tindak balas itu","Tepat; mangkin meningkatkan suhu larutan secara automatik sepenuhnya","Tidak tepat; mangkin sebenarnya mengurangkan bilangan zarah bahan tindak balas itu"],b:0,u:"Mangkin tidak menambah tenaga zarah; ia menurunkan tenaga pengaktifan yang diperlukan supaya lebih banyak perlanggaran menjadi berkesan."},
 {j:"pilih",t:"Untuk membuktikan mangkin tidak berubah secara kimia selepas tindak balas, apakah langkah tambahan paling sesuai?",p:["Bandingkan jisim dan sifat kimia mangkin sebelum, selepas tindak balas","Ukur suhu larutan sebelum dan selepas tindak balas itu sahaja","Tambah lebih banyak mangkin dan ulang tindak balas tersebut","Tukar warna larutan dan perhatikan sama ada mangkin turut berubah warnanya"],b:0,u:"Jisim dan sifat kimia yang tidak berubah ialah bukti kukuh bahawa mangkin kekal tidak berubah selepas tindak balas."},
 {j:"pilih",t:"Bagaimanakah peningkatan tekanan mempengaruhi kadar tindak balas yang melibatkan gas?",p:["Tekanan tinggi memampatkan zarah gas lebih rapat, tingkat kekerapan perlanggaran","Tekanan tinggi mengurangkan bilangan zarah gas yang terlibat itu","Tekanan tinggi menukar gas kepada pepejal secara automatik sepenuhnya","Tekanan tidak memberi sebarang kesan ke atas kadar tindak balas gas itu"],b:0,u:"Zarah yang lebih rapat dalam ruang termampat lebih kerap berlanggar antara satu sama lain, meningkatkan kadar tindak balas."},
 {j:"pilih",t:"Dalam Proses Haber, tekanan tinggi meningkatkan kadar tindak balas tetapi meningkatkan kos loji. Apakah pertimbangan paling wajar oleh jurutera kimia?",p:["Memilih tekanan sederhana yang imbangkan kadar tindak balas dengan kos","Sentiasa menggunakan tekanan setinggi mungkin tanpa mengira kos operasi","Mengabaikan tekanan sepenuhnya dan hanya bergantung pada mangkin itu","Menurunkan tekanan ke paras minimum tanpa mengira kesan ke atas kadar itu"],b:0,u:"Keputusan perindustrian sentiasa mengimbangi faedah kadar tindak balas dengan kos sebenar membina dan mengendalikan loji."},
 {j:"pilih",t:"Sebuah eksperimen membandingkan kadar tindak balas dengan dan tanpa mangkin menggunakan DUA kepekatan asid berbeza. Nilaikan eksperimen ini.",p:["Tidak sah; kepekatan mesti dimalarkan supaya kesan mangkin diuji","Sah; kepekatan berbeza tidak menjejaskan kesimpulan tentang mangkin itu","Sah, asalkan suhu bilik itu dicatat dengan teliti","Tidak sah; hanya masa tindak balas sahaja yang perlu dimalarkan"],b:0,u:"Apabila dua pemboleh ubah berubah serentak (mangkin dan kepekatan), kesan mangkin sahaja tidak dapat ditentukan dengan yakin."},
 {j:"pilih",t:"Mengapakah pemilihan mangkin yang tepat penting dalam industri, bukan sekadar mangkin yang mempercepatkan tindak balas?",p:["Mangkin berbeza hasilkan sampingan berbeza; mangkin tepat maksimumkan hasil","Semua mangkin menghasilkan kadar tindak balas yang sama tidak kira jenisnya itu","Mangkin yang lebih mahal sentiasa menghasilkan kadar tindak balas yang paling tinggi","Mangkin hanya penting untuk tindak balas yang melibatkan gas sahaja"],b:0,u:"Sesetengah mangkin lebih selektif terhadap laluan tindak balas tertentu, menghasilkan lebih banyak produk yang diingini berbanding hasil sampingan."}],
 bos:{j:"pilih",t:"Nilaikan cadangan menaikkan suhu tinggi berbanding menggunakan mangkin untuk mempercepatkan tindak balas dalam sebuah kilang.",p:["Mangkin lebih jimat tenaga kerana tindak balas berlaku pada suhu rendah","Menaikkan suhu sentiasa lebih murah berbanding membeli mangkin untuk kilang itu","Kedua-dua kaedah memberi kesan yang sama ke atas kos dan keselamatan kilang itu","Mangkin hanya sesuai untuk makmal sekolah, bukan untuk kilang yang sebenar"],b:0,u:"Jawapan TP5 yang kukuh menimbang kos tenaga dan risiko keselamatan, bukan sekadar kadar tindak balas semata-mata."}},

{n:6, tempat:"Kilang", sk:"4.3 Aplikasi kadar tindak balas dalam industri",
 kadNama:"Proses Haber", kadEm:"\u{1F33E}", kadFakta:"Proses Haber menghasilkan lebih 150 juta tan ammonia setahun di seluruh dunia, kebanyakannya digunakan sebagai baja pertanian.",
 bosKadNama:"Proses Sentuh", bosKadEm:"⚗", bosKadFakta:"Proses Sentuh kini menggunakan mangkin vanadium(V) oksida yang jauh lebih murah berbanding mangkin platinum yang pernah digunakan dahulu.",
 soalan:[
 {j:"pilih",t:"Apakah tujuan utama Proses Haber dalam industri?",p:["Menghasilkan ammonia daripada gas nitrogen dan hidrogen sebagai baja","Menghasilkan asid sulfurik daripada sulfur dioksida tersebut","Menghasilkan garam daripada natrium dan klorin tulen","Menghasilkan oksigen daripada penguraian air biasa"],b:0,u:"Proses Haber menggabungkan nitrogen dan hidrogen untuk menghasilkan ammonia, bahan utama baja nitrogen."},
 {j:"pilih",t:"Apakah tujuan utama Proses Sentuh dalam industri?",p:["Menghasilkan asid sulfurik daripada sulfur dioksida","Menghasilkan ammonia daripada nitrogen dan hidrogen","Menghasilkan besi daripada bijih besi","Menghasilkan plastik daripada minyak mentah"],b:0,u:"Proses Sentuh mengoksidakan sulfur dioksida kepada sulfur trioksida sebagai langkah utama menghasilkan asid sulfurik."},
 {j:"pilih",t:"Mengapakah Proses Haber tetap menggunakan mangkin ferum walaupun tekanan tinggi sudah digunakan?",p:["Mangkin membenarkan tindak balas berlaku pada suhu yang rendah, jimat kos","Mangkin menggantikan keperluan tekanan tinggi sepenuhnya itu","Mangkin menukar ammonia yang terhasil kepada nitrogen semula sepenuhnya","Mangkin hanya digunakan untuk mengubah warna gas yang terhasil itu"],b:0,u:"Tekanan dan mangkin bekerja bersama; mangkin mengurangkan tenaga pengaktifan supaya suhu operasi tidak perlu setinggi tanpa mangkin."},
 {j:"banyak",t:"Pilih SEMUA faktor yang dipertimbangkan jurutera kimia semasa mereka bentuk keadaan optimum sesuatu proses perindustrian.",p:["Kadar tindak balas yang dicapai","Kos tenaga dan bahan mentah","Keselamatan pekerja loji","Warna bangunan kilang","Hasil produk yang diperoleh"],b:[0,1,2,4],u:"Warna bangunan tidak memberi kesan kepada tindak balas kimia; empat faktor lain semuanya mempengaruhi reka bentuk proses sebenar."},
 {j:"pilih",t:"Mengapakah suhu SEDERHANA (bukan suhu sangat tinggi) sering dipilih dalam proses perindustrian, walaupun suhu tinggi mempercepatkan tindak balas?",p:["Suhu terlalu tinggi meningkat kos tenaga tanpa faedah kadar berbaloi","Suhu tinggi menghentikan tindak balas sepenuhnya secara terus","Suhu tinggi tidak memberi sebarang kesan ke atas kadar tindak balas itu","Suhu sederhana sentiasa lebih pantas berbanding suhu tinggi tersebut"],b:0,u:"Menaikkan suhu lebih tinggi lagi selalunya memberi pulangan kadar yang kecil berbanding kos tenaga tambahan yang diperlukan."},
 {j:"pilih",t:"Berbanding menaikkan suhu, apakah kelebihan utama menggunakan mangkin untuk meningkatkan kadar tindak balas dalam kilang?",p:["Mangkin meningkatkan kadar tanpa memerlukan tenaga tambahan tinggi","Mangkin sentiasa lebih mahal berbanding menaikkan suhu itu","Mangkin mengubah hasil tindak balas kepada bahan yang berbeza sepenuhnya","Mangkin hanya berkesan pada suhu yang sangat rendah sahaja"],b:0,u:"Mangkin menurunkan tenaga pengaktifan yang diperlukan, jadi kadar meningkat tanpa kos tenaga tambahan yang besar."},
 {j:"pilih",t:"Apakah risiko utama jika tekanan yang digunakan dalam sesebuah loji kimia terlalu tinggi?",p:["Peningkatan risiko kebocoran atau letupan akibat tekanan berlebihan","Kadar tindak balas akan menjadi sifar dengan serta-merta","Semua mangkin dalam loji akan hilang keberkesanannya sepenuhnya","Hasil produk akan bertukar warna secara kekal selamanya"],b:0,u:"Radas dan paip loji direka untuk had tekanan tertentu; melebihi had itu meningkatkan risiko kegagalan struktur."},
 {j:"nombor",t:"Sebuah kilang mengurangkan masa tindak balas daripada 80 minit kepada 20 minit selepas menggunakan mangkin. Berapa kalikah kadar tindak balas meningkat?",b:4,tol:0.2,suf:"kali",u:"80 minit dibahagi 20 minit bersamaan 4 kali lebih pantas."}],
 bos:{j:"buka",
  t:"Sebuah kilang kecil menghasilkan sabun melalui tindak balas yang mengambil masa 6 jam untuk siap, menyebabkan pengeluaran terhad kepada satu kumpulan (batch) sehari. Cadangkan SATU cara untuk mempercepatkan kadar tindak balas ini tanpa menjejaskan kualiti sabun yang dihasilkan.",
  arahan:"Terangkan faktor kadar tindak balas yang awak pilih untuk diubah, bagaimana ia dilaksanakan dalam kilang, dan pertimbangkan kos serta keselamatan pekerja.",
  u:"Jawapan TP6 yang kukuh mengaitkan satu faktor kadar tindak balas (suhu, mangkin, kepekatan atau luas permukaan) dengan pelaksanaan praktikal serta pertimbangan kos dan keselamatan."}}
];

module.exports = {
  id:"t5b4", tingkatan:5, kod:"4.0 Kadar Tindak Balas",
  tajuk:"Laluan Pantas",
  subtajuk:"Sains Ting. 5 · Bab 4 Kadar Tindak Balas",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali definisi kadar tindak balas dan mengenal pasti contoh tindak balas pantas dan perlahan dalam kehidupan harian. Langkah seterusnya ialah memahami cara kadar tindak balas ditentukan secara praktikal.",
   2:"{n} memahami kaedah menentukan kadar tindak balas melalui graf isi padu gas lawan masa dan dapat mentafsir bahagian curam serta mendatar sesuatu graf. Perlu lebih banyak latihan mengira kadar purata daripada data eksperimen sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan tentang kesan suhu ke atas kadar tindak balas untuk menerangkan fenomena harian seperti penyimpanan makanan dan memasak bertekanan. Galakkan mengaitkan teori perlanggaran dengan pemerhatian graf.",
   4:"{n} mampu menganalisis data eksperimen untuk membezakan kesan kepekatan dan luas permukaan ke atas kadar tindak balas, serta mengenal pasti pemboleh ubah yang perlu dimalarkan. Seterusnya latih menimbang kesahan kesimpulan daripada data.",
   5:"{n} dapat menilai kesan mangkin dan tekanan ke atas kadar tindak balas, termasuk menilai kesahan eksperimen dan pertimbangan kos dalam konteks perindustrian, disokong bukti daripada data. Sudah bersedia untuk tugasan mereka cipta.",
   6:"{n} berjaya mencadangkan cara praktikal untuk mempercepatkan kadar tindak balas dalam konteks perindustrian, lengkap dengan pertimbangan kos dan keselamatan pekerja. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kadar Tindak Balas. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ gas:R_GAS, suhu:R_SUHU, eksperimen:T_EKSPERIMEN, mangkin:R_MANGKIN },
  aras:ARAS
};
