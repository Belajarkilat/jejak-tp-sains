/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 1.0-3.0 Keselamatan dan Kesihatan
   (Langkah Keselamatan dalam Makmal, Bantuan Kecemasan, Teknik Mengukur Parameter
   Kesihatan Badan). Fail ini disunting tangan. Jalankan `node bina.js t4b1` untuk
   menyemaknya dan menghasilkan bank-t4b1.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains Tingkatan 4,
   tema Kaedah Saintifik, muka 56.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai langkah keselamatan dalam makmal, bantuan kecemasan, teknik dan prosedur.",
"Memahami langkah keselamatan dalam makmal, bantuan kecemasan, teknik dan prosedur dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai langkah keselamatan dalam makmal, bantuan kecemasan, teknik dan prosedur dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai langkah keselamatan dalam makmal, bantuan kecemasan teknik dan prosedur dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai langkah keselamatan dalam makmal, bantuan kecemasan, teknik dan prosedur dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai langkah keselamatan dalam makmal, bantuan kecemasan, teknik dan prosedur, dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_TUMPAHAN = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Maklumkan kepada guru atau pembantu makmal", isi:"kuningLembut", panah:"kuning" },
    { label:"Jadikan kawasan tumpahan sebagai kawasan larangan", isi:"kuningLembut", panah:"kuning" },
    { label:"Sekat tumpahan daripada merebak menggunakan pasir", isi:"merahLembut", panah:"merah" },
    { label:"Kaut tumpahan bahan kimia", isi:"merahLembut", panah:"merah" },
    { label:"Buang bahan sisa dengan selamat", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 1 · Langkah mengurus tumpahan bahan kimia dalam makmal.",
  alt:"Rajah aliran menegak lima langkah mengurus tumpahan bahan kimia: maklumkan guru, kawasan larangan, sekat guna pasir, kaut, buang selamat"
};

const R_CPR = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Pastikan mangsa tiada respons dan tiada pernafasan normal", isi:"hijauLembut", panah:"hijau" },
    { label:"Hubungi bantuan kecemasan (999)", isi:"kuningLembut", panah:"kuning" },
    { label:"Tekan dada 30 kali pada kadar 100-120 seminit", isi:"merahLembut", panah:"merah" },
    { label:"Beri dua nafas bantuan", isi:"merahLembut", panah:"merah" },
    { label:"Ulang kitaran tekanan dan nafas sehingga bantuan tiba", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 2 · Kitaran langkah asas Resusitasi Kardiopulmonari (CPR).",
  alt:"Rajah aliran menegak lima langkah CPR: pastikan tiada respons, hubungi 999, tekan dada 30 kali, beri dua nafas bantuan, ulang kitaran"
};

const T_PEMADAM =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kelas</th><th>Jenis kebakaran</th>'+
'<th>Contoh kegunaan di sekolah</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Bahan pepejal (kayu, kertas, kain)</td><td>Bilik darjah, pejabat</td></tr>'+
'<tr><td>B</td><td>Cecair mudah terbakar (minyak, petrol)</td><td>Dapur kantin, stor bahan kimia</td></tr>'+
'<tr><td>C</td><td>Gas mudah terbakar</td><td>Bilik simpanan gas makmal</td></tr>'+
'<tr><td>D</td><td>Logam mudah terbakar</td><td>Makmal kimia lanjutan sahaja</td></tr>'+
'<tr><td>ABC</td><td>Semua jenis kecuali logam dan gas berisiko letupan</td><td>Kegunaan am sekolah</td></tr>'+
'</tbody></table></div><p class="qnote">Pemadam api ABC digunakan secara am kerana ia meliputi paling banyak jenis kebakaran, kecuali kebakaran logam dan gas yang berisiko letupan.</p>';

const T_KESIHATAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Murid</th>'+
'<th class="n">Suhu (°C)</th><th class="n">Nadi (dpm)</th><th>Tekanan darah (mmHg)</th>'+
'<th class="n">Jisim (kg)</th><th class="n">Tinggi (m)</th><th>Catatan</th></tr></thead><tbody>'+
'<tr><td>Aiman</td><td class="n">37.8</td><td class="n">92</td><td>128/82</td><td class="n">68</td><td class="n">1.70</td><td>Selesai lari 2.4km</td></tr>'+
'<tr><td>Bella</td><td class="n">36.6</td><td class="n">68</td><td>118/78</td><td class="n">45</td><td class="n">1.60</td><td>Rehat di kelas</td></tr>'+
'<tr><td>Chandran</td><td class="n">38.9</td><td class="n">104</td><td>130/85</td><td class="n">80</td><td class="n">1.75</td><td>Mengadu sakit kepala</td></tr>'+
'<tr><td>Damia</td><td class="n">36.9</td><td class="n">58</td><td>110/72</td><td class="n">50</td><td class="n">1.58</td><td>Atlet larian sekolah</td></tr>'+
'</tbody></table></div><p class="qnote">Suhu badan normal manusia ialah 36.9°C. Tekanan darah normal ialah 120/80 mmHg. Formula BMI = Jisim (kg) ÷ Tinggi² (m²).</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bilik Persediaan", sk:"1.1 Peralatan perlindungan diri",
 kadNama:"Sarung Tangan Lateks", kadEm:"\u{1F9E4}", kadFakta:"Sarung tangan lateks boleh koyak akibat pendedahan kepada sesetengah pelarut organik, jadi jenis sarung tangan perlu dipadankan dengan bahan kimia yang digunakan.",
 bosKadNama:"Kebuk Wasap", bosKadEm:"\u{1F4A8}", bosKadFakta:"Kebuk wasap menyedut wap berbahaya keluar melalui salur khas, membolehkan murid menjalankan eksperimen berwap tanpa menyedutnya terus.",
 soalan:[
 {j:"pilih",t:"Peralatan yang membasuh mata dengan segera sekiranya bahan kimia terpercik ke mata ialah:",p:["Eye wash","Kebuk wasap","Laminar flow","Biological safety cabinet"],b:0,u:"Eye wash direka khusus untuk membasuh mata dengan aliran air yang lembut dan berterusan."},
 {j:"pilih",t:"Peralatan yang digunakan semasa bekerja dengan mikroorganisma berbahaya untuk mengelakkan pencemaran silang ialah:",p:["Biological safety cabinet","Sarung tangan getah nipis","Baju dan kasut khas makmal","Pencuci tangan berasaskan alkohol"],b:0,u:"Biological safety cabinet menapis udara supaya mikroorganisma tidak terlepas ke persekitaran makmal."},
 {j:"pilih",t:"Fungsi utama baju dan kasut makmal ialah:",p:["Melindungi kulit dan kaki daripada tumpahan bahan kimia","Menyerap wap berbahaya sebelum ia sampai ke paru-paru","Mengukur tahap bahaya sesuatu bahan kimia","Menyimpan peralatan makmal semasa eksperimen dijalankan"],b:0,u:"Baju dan kasut makmal ialah perlindungan fizikal terhadap percikan atau tumpahan."},
 {j:"banyak",t:"Pilih SEMUA peralatan perlindungan diri yang sesuai digunakan semasa mengendalikan bahan kimia berbahaya.",p:["Sarung tangan","Topeng muka","Eye wash","Kebuk wasap","Pembaris meter","Termometer klinikal"],b:[0,1,2,3],u:"Pembaris meter dan termometer klinikal ialah alat pengukur, bukan peralatan perlindungan diri."},
 {j:"pilih",t:"Kebuk wasap paling sesuai digunakan semasa:",p:["Memanaskan bahan kimia berwap","Mengukur suhu badan seorang pesakit","Membasuh tangan selepas eksperimen selesai dijalankan","Menyimpan bahan kimia dalam jangka masa yang panjang"],b:0,u:"Kebuk wasap menyedut wap keluar semasa ia dihasilkan, jadi ia digunakan sepanjang proses berlaku, bukan selepas atau sebelumnya."},
 {j:"pilih",t:"Laminar flow digunakan dalam makmal terutamanya untuk:",p:["Kawasan kerja bebas pencemaran zarah","Memadamkan kebakaran kecil yang berlaku secara tiba-tiba di makmal","Mengukur tekanan darah murid sebelum eksperimen bermula","Membuang bahan sisa pepejal yang tidak larut dalam air biasa"],b:0,u:"Laminar flow meniupkan udara tertapis secara seragam untuk mengekalkan persekitaran kerja yang steril."},
 {j:"pilih",t:"Mengapakah pencuci tangan disediakan berhampiran pintu keluar makmal?",p:["Supaya tangan bersih sebelum sentuh objek luar makmal","Supaya murid dapat memadamkan kebakaran kecil sebelum keluar makmal","Supaya murid dapat mengukur suhu tangan mereka sendiri sebelum pulang","Supaya murid dapat menyejukkan tangan mereka selepas bekerja dengan haba"],b:0,u:"Ini mengelakkan sebarang baki bahan kimia pada tangan daripada tersebar ke luar makmal."},
 {j:"pilih",t:"Peralatan manakah paling sesuai digunakan sebelum seseorang mula mengendalikan bahan kimia pekat?",p:["Sarung tangan","Termometer inframerah tanpa sentuhan","Sfigmomanometer digital berkomputer","Selimut kebakaran gentian kaca"],b:0,u:"Sarung tangan dan topeng muka melindungi kulit serta sistem pernafasan sebelum sebarang pendedahan berlaku."}],
 bos:{j:"banyak",t:"Seorang murid akan menjalankan eksperimen memanaskan asid pekat dalam tabung uji. Pilih SEMUA peralatan perlindungan diri yang wajib digunakan.",p:["Sarung tangan","Topeng muka","Kebuk wasap (sebagai kawasan kerja)","Termometer rektal","Sfigmomanometer digital"],b:[0,1,2],u:"Asid pekat yang dipanaskan menghasilkan wap berbahaya, jadi perlindungan kulit, pernafasan dan kawasan kerja bewasap semuanya diperlukan. Termometer rektal dan sfigmomanometer ialah alat mengukur kesihatan badan, tidak berkaitan."}},

{n:2, tempat:"Kawasan Tumpahan", sk:"1.2 Pembuangan bahan sisa dan pengurusan kemalangan", lampiran:"tumpahan",
 kadNama:"Nilai pH Selamat", kadEm:"\u{1F9EA}", kadFakta:"Bahan yang boleh dibuang ke dalam sinki mesti mempunyai nilai pH antara 5 hingga 9 dan berkepekatan rendah.",
 bosKadNama:"Serbuk Sulfur", bosKadEm:"\u{2697}", bosKadFakta:"Serbuk sulfur ditabur ke atas tumpahan merkuri kerana ia bertindak balas dengan merkuri membentuk sebatian yang kurang toksik dan tidak mudah meruap.",
 soalan:[
 {j:"pilih",t:"Bahan manakah BOLEH dibuang terus ke dalam sinki makmal?",p:["Larutan pH 7","Sisa pepejal daripada proses penapisan makmal","Larutan asid pekat dengan nilai pH 3","Logam berat seperti plumbum dan merkuri"],b:0,u:"Larutan berkepekatan rendah dengan pH antara 5 hingga 9 selamat dibuang ke dalam sinki."},
 {j:"banyak",t:"Pilih SEMUA bahan yang TIDAK BOLEH dibuang ke dalam sinki.",p:["Sisa pepejal","Bahan sisa organik seperti bangkai haiwan","Bahan buangan radioaktif","Larutan dengan pH 6","Air suling yang tidak digunakan"],b:[0,1,2],u:"Sisa pepejal, bahan organik dan bahan radioaktif semuanya tergolong dalam kategori bahan yang tidak boleh dibuang ke dalam sinki."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah tindakan PERTAMA yang perlu diambil apabila berlaku tumpahan bahan kimia?",p:["Maklum guru","Kaut tumpahan bahan kimia yang berlaku","Sekat tumpahan itu menggunakan pasir kering","Buang bahan sisa itu dengan cara yang selamat"],b:0,u:"Guru atau pembantu makmal perlu dimaklumkan dahulu supaya tindakan seterusnya dapat diselaraskan dengan selamat."},
 {j:"susun",t:"Susun langkah mengurus tumpahan bahan kimia mengikut urutan yang betul.",p:["Maklumkan kepada guru atau pembantu makmal","Jadikan kawasan tumpahan sebagai kawasan larangan","Sekat tumpahan daripada merebak menggunakan pasir","Kaut tumpahan bahan kimia","Buang bahan sisa dengan selamat"],b:[0,1,2,3,4],u:"Kawasan perlu dikawal dahulu sebelum tumpahan disekat, dikaut, dan akhirnya dibuang."},
 {j:"pilih",t:"Mengapakah kawasan tumpahan perlu dijadikan kawasan larangan sebelum tindakan lain diambil?",p:["Supaya murid lain tidak terdedah bahaya","Supaya bahan kimia tidak menguap dengan lebih cepat lagi","Supaya guru dapat mengambil gambar tumpahan itu untuk laporan","Supaya lantai makmal itu tidak menjadi licin dan berbahaya"],b:0,u:"Mengelakkan pendedahan orang lain ialah keutamaan sebelum tumpahan disekat dan dibersihkan."},
 {j:"pilih",t:"Langkah manakah yang betul apabila berlaku tumpahan merkuri?",p:["Tabur serbuk sulfur, kemudian hubungi Jabatan Bomba","Kaut terus dengan tangan yang bersarung tangan lateks","Basuh terus dengan banyak air ke dalam sinki makmal","Biarkan sahaja sehingga ia menyejat dengan sendirinya"],b:0,u:"Serbuk sulfur mengurangkan ketoksikan dan kemeruapan merkuri sebelum bantuan profesional tiba."},
 {j:"pilih",t:"Mengapakah merkuri tidak boleh dibasuh terus ke dalam sinki apabila tertumpah?",p:["Ia ialah logam berat yang toksik dan boleh mencemarkan sumber air","Ia akan menyumbat paip sinki dengan serta-merta","Ia akan bertindak balas dengan air menghasilkan gas mudah terbakar","Ia akan mengubah warna air paip menjadi kelabu"],b:0,u:"Logam berat seperti merkuri tergolong dalam bahan yang tidak boleh dibuang ke dalam sinki kerana ketoksikannya."},
 {j:"pilih",t:"Bahan sisa biologi seperti bangkai haiwan uji kaji perlu diuruskan dengan cara:",p:["Mengikut Prosedur Operasi Standard (POS) yang ditetapkan","Dibuang ke dalam sinki bersama air yang banyak sekali","Dibiarkan dalam makmal itu sehingga membusuk sepenuhnya","Dibakar terus di dalam bilik makmal tanpa kebenaran"],b:0,u:"Bahan sisa biologi memerlukan pengurusan khusus mengikut POS, bukan pembuangan sinki atau pembakaran sembarangan."}],
 bos:{j:"pilih",t:"Seorang murid tertumpah asid pekat (pH 2) dalam kuantiti yang banyak di atas meja makmal. Apakah tindakan paling wajar mengikut urutan yang betul?",p:["Maklumkan guru, kawal kawasan, sekat dengan pasir, kaut, buang dengan selamat","Basuh terus dengan banyak air ke dalam sinki tanpa memberitahu sesiapa","Kaut segera dengan tangan kosong supaya cepat selesai","Tinggalkan makmal dan biarkan tumpahan itu kering sendiri"],b:0,u:"pH 2 jauh di luar julat selamat sinki (5-9) dan kuantitinya banyak, jadi prosedur penuh pengurusan tumpahan (Rajah 1) mesti diikuti, bukan dibasuh terus atau diabaikan."}},

{n:3, tempat:"Stesen Pemadam", sk:"1.3 Pemadam kebakaran", lampiran:"pemadam",
 kadNama:"Selimut Kebakaran", kadEm:"\u{1F525}", kadFakta:"Selimut kebakaran diperbuat daripada dua lapisan gentian kaca dan digunakan untuk memadamkan kebakaran kecil dengan membalut mangsa atau punca api.",
 bosKadNama:"Audit Pemadam Api", bosKadEm:"\u{1F4CB}", bosKadFakta:"Audit pemadam api yang berkala memastikan setiap alat tidak luput tarikh dan berada di lokasi yang betul mengikut pelan laluan kecemasan sekolah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual, pemadam api kelas manakah sesuai untuk kebakaran minyak masak di dapur kantin?",p:["B","A","C","D"],b:0,u:"Kelas B khusus untuk cecair mudah terbakar seperti minyak dan petrol."},
 {j:"pilih",t:"Berdasarkan Jadual, mengapakah pemadam api jenis ABC paling kerap digunakan untuk kegunaan am sekolah?",p:["Ia meliputi paling banyak jenis kebakaran kecuali logam","Ia satu-satunya jenis yang boleh memadamkan kebakaran logam sepenuhnya","Ia paling murah berbanding semua jenis pemadam api yang lain","Ia tidak memerlukan sebarang audit tarikh luput langsung"],b:0,u:"ABC direka untuk meliputi paling banyak situasi kebakaran am, itulah sebabnya ia dipilih untuk kegunaan sekolah."},
 {j:"pilih",t:"Fungsi selimut kebakaran ialah untuk:",p:["Memadamkan kebakaran kecil dengan membalut punca api","Menyejukkan suhu badan mangsa yang terbakar dengan segera","Menyerap wap berbahaya daripada kebakaran bahan kimia berlaku","Mengukur suhu api sebelum pemadam api itu digunakan"],b:0,u:"Selimut kebakaran menyekat bekalan oksigen dengan membalut punca api atau mangsa."},
 {j:"banyak",t:"Pilih SEMUA perkara yang perlu diberi penekanan semasa audit alat pemadam kebakaran di sekolah.",p:["Tarikh luput","Jenis pemadam api","Bilangan pemadam api","Lokasi dalam pelan laluan kecemasan","Warna cat dinding berhampiran"],b:[0,1,2,3],u:"Warna cat dinding tidak berkaitan dengan keberkesanan atau kesediaan alat pemadam kebakaran."},
 {j:"pilih",t:"Mengapakah pemadam api jenis ABC TIDAK sesuai untuk kebakaran logam?",p:["Sesetengah logam bertindak balas merbahaya dengan bahan dalam ABC","Pemadam ABC terlalu berat untuk digunakan pada kebakaran logam itu","Kebakaran logam tidak menghasilkan sebarang haba yang boleh dipadamkan langsung","Logam tidak pernah menyebabkan sebarang kebakaran dalam makmal sekolah"],b:0,u:"Tindak balas antara logam tertentu dengan kandungan pemadam ABC boleh memburukkan lagi kebakaran."},
 {j:"pilih",t:"Sebuah dapur rumah mempunyai bahan mudah terbakar seperti tepung, gula dan minyak. Berdasarkan idea projek STEM dalam DSKP, murid digalakkan untuk:",p:["Mencipta alat pemadam ringkas guna bahan rumah","Membeli pemadam api kelas D untuk kegunaan dapur sahaja","Mengelakkan penggunaan dapur sepenuhnya demi keselamatan keluarga","Menyimpan semua bahan mudah terbakar itu di dalam peti sejuk"],b:0,u:"Ini menggalakkan elemen keusahawanan dan pembelajaran berasaskan projek menggunakan bahan mudah didapati."},
 {j:"pilih",t:"Apakah tujuan utama menjalankan audit alat pemadam kebakaran secara berkala di sekolah?",p:["Memastikan setiap alat sedia digunakan ketika kecemasan","Menambah bilangan pemadam api tanpa mengira jenis kebakaran itu","Menukar semua pemadam api kepada jenis D sahaja tanpa sebab","Mengurangkan bilangan latihan kebakaran di sekolah setiap tahun"],b:0,u:"Audit memastikan kesediaan sebenar alat, bukan sekadar menambah kuantiti atau menukar jenis tanpa sebab."},
 {j:"pilih",t:"Warna label pada badan sebuah pemadam api menunjukkan:",p:["Kandungan dan jenis kebakaran sesuai","Tarikh pemadam api itu dikilangkan pertama kali","Nama syarikat yang membekalkan pemadam api itu kepada sekolah","Berat sebenar tabung pemadam api itu dalam kilogram"],b:0,u:"Warna label ialah kod piawai bagi kandungan pemadam supaya penggunanya cepat mengenal pasti jenisnya."}],
 bos:{j:"pilih",t:"Semasa audit, seorang murid mendapati satu pemadam api ABC di koridor sudah luput tarikh tiga bulan lalu, tetapi masih kelihatan penuh dan tidak rosak. Apakah tindakan paling wajar?",p:["Laporkan segera, kerana keberkesanan bahan tidak dijamin selepas luput","Terus gunakan kerana ia masih kelihatan penuh sepenuhnya","Pindahkan ke lokasi lain tanpa melaporkannya kepada sesiapa","Abaikan sahaja kerana hanya luput tiga bulan yang lalu"],b:0,u:"Rupa fizikal yang baik tidak menjamin tekanan atau keberkesanan bahan dalaman selepas tarikh luput; laporan segera ialah tindakan paling bertanggungjawab."}},

{n:4, tempat:"Mangsa Tidak Sedar", sk:"2.1 Resusitasi Kardiopulmonari (CPR)", lampiran:"cpr",
 kadNama:"Kadar Tekanan Dada", kadEm:"\u{1FAC0}", kadFakta:"Tekanan dada semasa CPR dilakukan pada kadar 100 hingga 120 kali seminit, lebih kurang mengikut rentak lagu popular bertempo cepat.",
 bosKadNama:"Renjatan Elektrik", bosKadEm:"\u{26A1}", bosKadFakta:"Renjatan elektrik boleh menyebabkan jantung berhenti berdegup secara tiba-tiba walaupun tiada kesan luaran yang jelas pada kulit mangsa.",
 soalan:[
 {j:"pilih",t:"CPR perlu dilakukan apabila mangsa menunjukkan tanda:",p:["Tiada respons, tiada nafas dan tiada degupan","Batuk kuat tetapi masih boleh bercakap dengan jelas","Sedar sepenuhnya tetapi mengadu sakit kepala","Bernafas dengan normal tetapi berasa pening sedikit"],b:0,u:"Ketiadaan respons, pernafasan dan degupan jantung/nadi ialah tanda utama keperluan segera untuk CPR."},
 {j:"banyak",t:"Pilih SEMUA situasi yang berkemungkinan menyebabkan seseorang memerlukan CPR.",p:["Serangan jantung","Lemas","Renjatan elektrik","Panahan petir","Tercekik tetapi masih boleh batuk"],b:[0,1,2,3],u:"Tercekik yang masih boleh batuk menunjukkan saluran udara belum tersumbat sepenuhnya, jadi Heimlich Maneuver lebih sesuai berbanding CPR."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah langkah PERTAMA sebelum memulakan CPR?",p:["Pastikan mangsa tiada respons","Tekan dada sebanyak 30 kali berturut-turut","Beri dua kali nafas bantuan kepada mangsa","Hubungi bantuan kecemasan dengan segera"],b:0,u:"Pengesahan keadaan mangsa perlu dibuat dahulu sebelum sebarang tindakan CPR bermula."},
 {j:"susun",t:"Susun kitaran asas CPR mengikut urutan yang betul selepas keadaan mangsa disahkan.",p:["Hubungi bantuan kecemasan (999)","Tekan dada 30 kali","Beri dua nafas bantuan","Ulang kitaran sehingga bantuan tiba"],b:[0,1,2,3],u:"Bantuan perlu dihubungi dahulu, kemudian kitaran tekanan dan nafas diulang berterusan."},
 {j:"pilih",t:"Mengapakah tekanan dada perlu dilakukan pada kadar yang tetap iaitu 100 hingga 120 seminit?",p:["Untuk mengekalkan aliran darah ke otak dan organ penting","Supaya mangsa cepat sedar dalam masa seminit sahaja","Untuk mengelakkan tulang rusuk mangsa itu daripada patah","Supaya penyelamat tidak berasa penat dengan begitu cepat"],b:0,u:"Kadar tekanan yang konsisten memastikan darah beroksigen terus mengalir ke organ penting semasa jantung tidak berfungsi."},
 {j:"pilih",t:"Apakah kepentingan utama melakukan CPR dengan segera sebelum bantuan perubatan tiba?",p:["Mengekalkan bekalan darah beroksigen ke otak","Menyembuhkan punca sebenar serangan jantung mangsa itu","Menggantikan keperluan mangsa untuk dibawa ke hospital segera","Memastikan mangsa tidak berasa kesakitan semasa dirawat pakar"],b:0,u:"CPR ialah tindakan sementara untuk mengekalkan aliran oksigen, bukan rawatan muktamad kepada punca masalah."},
 {j:"pilih",t:"Seorang mangsa lemas ditemui tidak bernafas dan tiada degupan nadi selepas dikeluarkan daripada kolam. Tindakan paling wajar ialah:",p:["Mulakan CPR serta-merta sambil menghubungi bantuan kecemasan","Tunggu mangsa sedar sendiri sebelum bertindak","Baringkan mangsa dan biarkan air keluar dahulu sebelum apa-apa tindakan","Angkat mangsa berdiri untuk membantu pernafasannya"],b:0,u:"Tiada pernafasan dan nadi ialah petanda segera untuk memulakan CPR tanpa berlengah."},
 {j:"pilih",t:"Fungsi utama dua nafas bantuan dalam kitaran CPR ialah untuk:",p:["Membekalkan oksigen terus ke paru-paru mangsa","Menggantikan keperluan untuk menekan dada mangsa","Menyedarkan mangsa dalam masa terdekat","Mengukur sama ada mangsa masih bernafas sendiri"],b:0,u:"Nafas bantuan membekalkan oksigen secara terus kerana mangsa tidak bernafas sendiri."}],
 bos:{j:"susun",t:"Seorang guru menemui murid rebah, tidak memberi respons dan tidak bernafas semasa perhimpunan. Susun tindakan lengkap yang perlu diambil mengikut urutan yang betul.",p:["Sahkan tiada respons dan tiada pernafasan normal","Hubungi bantuan kecemasan (999)","Tekan dada 30 kali pada kadar 100-120 seminit","Beri dua nafas bantuan","Ulang kitaran sehingga bantuan tiba"],b:[0,1,2,3,4],u:"Ini ialah keseluruhan kitaran CPR seperti dalam Rajah 2, bermula daripada pengesahan keadaan mangsa sehingga bantuan profesional tiba."}},

{n:5, tempat:"Mangsa Tercekik", sk:"2.2 Heimlich Maneuver",
 kadNama:"Tanda Tercekik", kadEm:"\u{1F62E}", kadFakta:"Seseorang yang benar-benar tercekik teruk biasanya tidak dapat bercakap, batuk atau bernafas sama sekali, berbeza daripada seseorang yang hanya tersedak ringan.",
 bosKadNama:"Isyarat Sejagat Tercekik", bosKadEm:"\u{1F91A}", bosKadFakta:"Isyarat sejagat tercekik ialah kedua-dua tangan mencengkam leher sendiri, digunakan di seluruh dunia untuk memberitahu orang lain tanpa perlu bersuara.",
 soalan:[
 {j:"pilih",t:"Heimlich Maneuver dilakukan apabila seseorang menunjukkan tanda:",p:["Tidak boleh bercakap, batuk atau bernafas kerana saluran udara tersumbat","Bernafas dengan pantas tetapi masih boleh bercakap","Batuk kuat dan masih boleh mengeluarkan bunyi suara","Pening dan hendak muntah selepas makan"],b:0,u:"Ketidakupayaan bercakap, batuk dan bernafas menunjukkan saluran udara tersumbat sepenuhnya."},
 {j:"pilih",t:"Apakah kepentingan utama Heimlich Maneuver?",p:["Mengeluarkan objek yang menyumbat saluran udara dengan cepat","Menggantikan keperluan untuk CPR dalam semua situasi kecemasan","Menyembuhkan jangkitan pada saluran pernafasan","Mengukur kadar pernafasan mangsa yang tercekik"],b:0,u:"Heimlich Maneuver menggunakan tekanan mendadak pada perut untuk menolak objek keluar daripada saluran udara."},
 {j:"pilih",t:"Seorang kanak-kanak sedang makan dan tiba-tiba tidak dapat bercakap tetapi masih dapat batuk dengan kuat. Tindakan paling wajar ialah:",p:["Galakkan dia terus batuk kerana saluran udara belum tersumbat sepenuhnya","Segera lakukan Heimlich Maneuver tanpa berlengah","Mulakan CPR serta-merta","Berikan air untuk diminum bagi melegakan tekaknya"],b:0,u:"Batuk yang masih kuat menunjukkan saluran udara belum tersumbat sepenuhnya, jadi batuk semula jadi masih berkesan."},
 {j:"pilih",t:"Bandingkan CPR dan Heimlich Maneuver. Pernyataan yang BETUL ialah:",p:["CPR untuk mangsa tiada nadi dan pernafasan, Heimlich untuk mangsa tercekik yang masih bernafas","CPR dan Heimlich Maneuver digunakan untuk situasi yang sama tanpa perbezaan","Heimlich Maneuver hanya digunakan selepas CPR gagal berfungsi","CPR hanya digunakan pada kanak-kanak, Heimlich pada orang dewasa sahaja"],b:0,u:"Kedua-dua teknik menangani punca masalah yang berbeza: ketiadaan degupan jantung berbanding penyumbatan saluran udara."},
 {j:"pilih",t:"Mengapakah demonstrasi oleh paramedik penting sebelum murid mempelajari Heimlich Maneuver?",p:["Teknik tekanan yang salah boleh mencederakan mangsa atau tidak berkesan","Paramedik satu-satunya orang yang dibenarkan melakukan Heimlich Maneuver","Murid tidak dibenarkan mempelajari teknik ini tanpa peralatan khas","Demonstrasi menggantikan keperluan untuk memahami konsep sains di sebaliknya"],b:0,u:"Ketepatan lokasi dan arah tekanan penting supaya teknik ini berkesan dan selamat."},
 {j:"pilih",t:"Seorang remaja tercekik semasa makan sendirian dan tiada sesiapa berhampiran untuk membantu. Konsep sains di sebalik Heimlich Maneuver membenarkan dia untuk:",p:["Menekan perutnya sendiri ke arah kerusi bagi mewujudkan tekanan mendadak yang serupa","Menunggu sehingga dia pengsan sebelum bantuan tiba","Minum air sebanyak mungkin untuk menolak objek itu turun","Berbaring rata di lantai sehingga objek terkeluar sendiri"],b:0,u:"Prinsip tekanan mendadak pada perut boleh disesuaikan menggunakan objek keras seperti kerusi apabila tiada bantuan."},
 {j:"pilih",t:"Isyarat sejagat yang biasa digunakan oleh seseorang untuk menunjukkan dia sedang tercekik ialah:",p:["Mencengkam leher sendiri dengan kedua-dua tangan","Melambai tangan ke udara berulang kali","Menunjuk ke arah tekak menggunakan jari","Menutup mulut dengan tapak tangan"],b:0,u:"Isyarat mencengkam leher dikenali secara meluas dan boleh difahami tanpa memerlukan pertuturan."},
 {j:"pilih",t:"Apakah fungsi sains di sebalik tekanan mendadak dalam Heimlich Maneuver?",p:["Ia menghasilkan tekanan udara yang menolak objek keluar dari saluran udara","Ia menyejukkan saluran udara supaya objek itu mencair dengan sendiri","Ia merangsang jantung untuk berdegup dengan lebih pantas lagi","Ia melembutkan objek yang tersekat itu supaya mudah ditelan"],b:0,u:"Tekanan mendadak pada bahagian atas perut memampatkan udara dalam paru-paru, mewujudkan 'batuk buatan' yang menolak objek keluar."}],
 bos:{j:"pilih",t:"Dua mangsa berbeza ditemui: Mangsa A tidak bernafas dan tiada nadi selepas terjatuh ke dalam kolam, manakala Mangsa B masih sedar tetapi tidak dapat bercakap atau batuk selepas tersedak tulang ikan. Padankan tindakan yang betul.",p:["CPR untuk Mangsa A, Heimlich Maneuver untuk Mangsa B","Heimlich Maneuver untuk kedua-dua mangsa","CPR untuk kedua-dua mangsa","CPR untuk Mangsa B, Heimlich Maneuver untuk Mangsa A"],b:0,u:"Mangsa A tiada nadi dan pernafasan memerlukan CPR, manakala Mangsa B yang tersekat objek pepejal memerlukan Heimlich Maneuver."}},

{n:6, tempat:"Bilik Rawatan", sk:"3.1 / 3.2 / 3.3 / 3.4 Suhu, nadi, tekanan darah dan BMI", lampiran:"kesihatan",
 kadNama:"Sfigmomanometer Digital", kadEm:"\u{1FA7A}", kadFakta:"Sfigmomanometer digital mengukur tekanan darah dalam unit millimeter merkuri (mmHg), dengan bacaan sistolik dicatat lebih dahulu daripada bacaan diastolik.",
 bosKadNama:"Indeks Jisim Badan", bosKadEm:"\u{2696}", bosKadFakta:"BMI dikira menggunakan jisim badan dibahagi dengan kuasa dua ketinggian, tetapi ia tidak membezakan antara jisim otot dan jisim lemak.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual Kesihatan, murid manakah yang mencatatkan suhu badan TERTINGGI?",p:["Chandran (38.9°C)","Aiman (37.8°C)","Bella (36.6°C)","Damia (36.9°C)"],b:0,u:"38.9°C ialah bacaan suhu tertinggi antara keempat-empat murid dalam jadual."},
 {j:"pilih",t:"Berdasarkan Jadual Kesihatan, murid manakah yang suhu badannya paling hampir kepada suhu normal manusia?",p:["Damia (36.9°C)","Aiman (37.8°C)","Chandran (38.9°C)","Bella (36.6°C) dan Damia dianggap sama hampir"],b:0,u:"36.9°C ialah suhu badan normal manusia, dan bacaan Damia tepat sama dengannya."},
 {j:"pilih",t:"Berdasarkan Jadual Kesihatan, mengapakah kadar nadi Damia paling rendah walaupun dia seorang atlet larian yang aktif?",p:["Otot kardiaknya lebih kuat, jadi jantungnya memam pa lebih banyak darah setiap degupan","Dia sebenarnya kurang sihat berbanding murid lain dalam jadual","Dia sedang berehat sepenuhnya semasa bacaan diambil, berbeza daripada murid lain","Alat pengukur nadi yang digunakan untuknya tidak tepat"],b:0,u:"Atlet biasanya mempunyai kadar nadi rehat yang lebih rendah kerana kecekapan jantung yang lebih tinggi, bukan kerana kurang sihat."},
 {j:"nombor",t:"Kira BMI Aiman menggunakan data dalam Jadual Kesihatan (jisim 68 kg, tinggi 1.70 m). Bundarkan jawapan kepada satu tempat perpuluhan.",b:23.5,tol:0.2,suf:"kg/m²",u:"BMI = 68 ÷ (1.70 × 1.70) = 68 ÷ 2.89 ≈ 23.5 kg/m²."},
 {j:"pilih",t:"Berdasarkan Jadual Kesihatan, bacaan tekanan darah manakah yang PALING hampir dengan tekanan darah normal (120/80 mmHg)?",p:["Bella (118/78)","Chandran (130/85)","Aiman (128/82)","Damia (110/72)"],b:0,u:"118/78 paling hampir dengan nilai normal 120/80 berbanding bacaan murid lain."},
 {j:"pilih",t:"Bacaan 130 mmHg dalam tekanan darah Chandran (130/85) menunjukkan:",p:["Tekanan darah ketika otot jantung mengecut (tekanan sistolik)","Tekanan darah ketika otot jantung berehat (tekanan diastolik)","Kadar denyutan nadi Chandran seminit","Suhu badan Chandran dalam unit yang berbeza"],b:0,u:"Bacaan pertama dan lebih tinggi dalam pasangan tekanan darah ialah tekanan sistolik, iaitu semasa jantung mengecut."},
 {j:"pilih",t:"Chandran mencatatkan suhu 38.9°C dan mengadu sakit kepala. Berdasarkan data ini, tindakan paling wajar ialah:",p:["Rujuk guru atau jururawat kerana suhu melebihi normal disertai simptom","Abaikan sahaja kerana suhu badan sentiasa berubah-ubah sepanjang hari","Suruh dia terus bersenam supaya berpeluh dan suhunya cepat turun","Beri dia air sejuk sebanyak mungkin tanpa sebarang rujukan lanjut"],b:0,u:"Kombinasi suhu tinggi dan simptom sakit kepala memerlukan penilaian oleh orang yang lebih berkelayakan, bukan tindakan sendiri."},
 {j:"pilih",t:"Seorang murid mempunyai BMI yang jauh melebihi julat normal dalam carta BMI. Mengapakah keadaan ini perlu diberi perhatian?",p:["Ia dikaitkan dengan peningkatan risiko tekanan darah tinggi dan diabetes mellitus","Ia bermakna murid itu pasti akan mengalami kecederaan sukan","Ia menunjukkan murid itu mengalami jangkitan kuman","Ia tidak mempunyai sebarang kaitan dengan kesihatan jangka panjang"],b:0,u:"DSKP menekankan kaitan antara BMI melebihi normal dengan risiko tekanan darah tinggi dan diabetes mellitus."}],
 bos:{j:"buka",
  t:"Aiman baru selesai berlari 2.4km (suhu 37.8°C, nadi 92 dpm, tekanan darah 128/82 mmHg), manakala Chandran berehat di kelas tetapi mencatatkan suhu 38.9°C disertai sakit kepala (nadi 104 dpm, tekanan darah 130/85 mmHg). Sebagai ketua tugas-tugas kesihatan kelas, reka satu pelan tindakan untuk KEDUA-DUA murid ini berdasarkan data mereka.",
  arahan:"Terangkan sama ada setiap bacaan tergolong dalam julat normal atau tidak, apakah kemungkinan puncanya (senaman lawan sakit), dan tindakan berbeza yang sesuai untuk setiap seorang. Ambil kira bahawa Aiman baru bersenam manakala Chandran berehat.",
  u:"Jawapan TP6 yang kukuh membezakan punca fisiologi normal (kesan senaman pada Aiman) daripada tanda yang memerlukan rujukan (suhu tinggi disertai simptom pada Chandran), dan mencadangkan tindakan berlainan untuk kedua-duanya."}}
];

module.exports = {
  id:"t4b1", tingkatan:4, kod:"1.0-3.0 Keselamatan dan Kesihatan",
  tajuk:"Laluan Selamat",
  subtajuk:"Sains Ting. 4 · Bab 1 Keselamatan dan Kesihatan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali peralatan perlindungan diri, prosedur bantuan kecemasan dan teknik mengukur parameter kesihatan badan. Langkah seterusnya ialah menerangkan sebab di sebalik setiap prosedur, bukan sekadar menghafalnya.",
   2:"{n} memahami langkah keselamatan makmal serta prosedur CPR dan Heimlich Maneuver, dan dapat menjelaskan kefahaman itu dengan kata sendiri. Perlu lebih banyak latihan mengaplikasikannya pada situasi sebenar sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan keselamatan dan bantuan kecemasan untuk melaksanakan tugasan mudah seperti mengurus tumpahan bahan kimia. Galakkan mentafsir data kesihatan badan dengan lebih terperinci.",
   4:"{n} mampu menganalisis situasi kecemasan sebenar dan membezakan tindakan yang sesuai, seperti membezakan keperluan CPR daripada Heimlich Maneuver. Seterusnya latih menimbang bukti daripada data kesihatan untuk membuat keputusan.",
   5:"{n} dapat menilai data kesihatan badan berbilang individu dan membuat keputusan tindakan yang wajar berdasarkan bukti, disokong pemahaman tentang julat normal setiap parameter. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka satu pelan tindakan kesihatan yang mengambil kira konteks berbeza bagi setiap individu, lengkap dengan pertimbangan punca dan langkah susulan yang sesuai. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Keselamatan dan Kesihatan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ tumpahan:R_TUMPAHAN, cpr:R_CPR, kesihatan:T_KESIHATAN, pemadam:T_PEMADAM },
  aras:ARAS
};
