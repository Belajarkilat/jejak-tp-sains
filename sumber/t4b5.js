/* Sumber kandungan — Sains KSSM Tingkatan 4, Bidang 7.0 Koordinasi Badan.
   Fail ini disunting tangan. Jalankan `node bina.js t4b5` untuk menyemaknya
   dan menghasilkan bank-t4b5.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4 dan 5, Bahagian Pembangunan Kurikulum (rujukan tempatan:
   dskp/sains-t4-t5.txt, baris 2468-2494). Nota: baris tafsiran TP6 dalam
   PDF sumber tersalah taip ("...mengenai nutrisi dan teknologi makanan",
   disalin daripada bidang lain secara tersilap); ayat di bawah dibetulkan
   mengikut corak formula yang sama seperti TP1-5 dan seperti 11 bidang
   lain dalam dokumen yang sama.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai koordinasi badan.",
"Memahami koordinasi badan dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai koordinasi badan dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai koordinasi badan dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai koordinasi badan dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mencipta dengan menggunakan pengetahuan dan kemahiran sains mengenai koordinasi badan dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

/* Rajah ditulis sebagai spesifikasi, bukan SVG. bina.js menjananya. */

const R_KELENJAR = {
  jenis:"struktur", mod:"label", tinggiLukis:130, rangka:true,
  bahagian:[
    {label:"Pituitari", bentuk:"bulat", x:50, y:8, r:7, isi:"lembayungLembut"},
    {label:"Tiroid", bentuk:"bulat", x:50, y:24, r:6, isi:"kuningLembut"},
    {label:"Adrenal", bentuk:"bulat", x:50, y:44, r:6, isi:"merahLembut"},
    {label:"Pankreas", bentuk:"bulat", x:50, y:58, r:7, isi:"hijauLembut"},
    {label:"Ovari/Testis", bentuk:"bulat", x:50, y:82, r:7, isi:"kuningLembut"}
  ],
  kapsyen:"Rajah 1 · Kedudukan kelenjar endokrin utama dalam badan manusia (skematik).",
  alt:"Rajah skematik badan manusia menegak dengan lima kelenjar endokrin berlabel: pituitari di kepala, tiroid di leher, adrenal dan pankreas di bahagian perut, ovari atau testis di pelvis"
};

const R_KESAN = {
  jenis:"aliran", mod:"turun",
  nod:[
    {label:"Penyalahgunaan Bahan", isi:"kertas2"},
    {label:"Sistem Saraf Terganggu", isi:"kuningLembut", panah:"kuning"},
    {label:"Koordinasi Terjejas", isi:"merahLembut", panah:"merah"},
    {label:"Organ & Minda Rosak", isi:"lembayungLembut", panah:"lembayung"}
  ],
  kapsyen:"Rajah 2 · Rantaian kesan penyalahgunaan dadah dan alkohol ke atas badan.",
  alt:"Rajah aliran menegak empat peringkat kesan penyalahgunaan bahan: bermula penyalahgunaan bahan, sistem saraf terganggu, koordinasi terjejas, hingga organ dan minda rosak"
};

const T_KES =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Pesakit</th>'+
'<th>Gejala utama</th><th>Ujian berkaitan</th></tr></thead><tbody>'+
'<tr><td>En. Razak, 45</td><td>Sentiasa dahaga, kerap kencing, air kencing manis</td><td>Paras gula darah tinggi</td></tr>'+
'<tr><td>Cik Aina, 20</td><td>Dahaga melampau, kerap kencing, air kencing cair</td><td>Paras gula darah normal, ADH rendah</td></tr>'+
'<tr><td>En. Kamal, 50</td><td>Tangan, kaki dan rahang membesar perlahan-lahan</td><td>Hormon tumbesaran tinggi</td></tr>'+
'<tr><td>Pn. Farah, 38</td><td>Sentiasa letih, mudah sejuk, berat badan naik</td><td>Paras tiroksina rendah</td></tr>'+
'</tbody></table></div><p class="qnote">ADH mengawal penyerapan semula air oleh buah pinggang. Tiroksina mengawal kadar metabolisme badan.</p>';

const T_KEMPEN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Kempen</th>'+
'<th>Kaedah</th><th class="n">Perubahan tingkah laku</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Ceramah sekali sahaja</td><td class="n">4%</td></tr>'+
'<tr><td>B</td><td>Aktiviti berterusan + mentor rakan sebaya</td><td class="n">22%</td></tr>'+
'<tr><td>C</td><td>Risalah diedar sekali kepada ibu bapa</td><td class="n">2%</td></tr>'+
'<tr><td>D</td><td>Bengkel + pemeriksaan kesihatan percuma</td><td class="n">15%</td></tr>'+
'</tbody></table></div><p class="qnote">Peratus perubahan tingkah laku diukur melalui tinjauan sebelum dan selepas kempen, ke atas kumpulan sasaran yang sama.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kelenjar", sk:"7.1 Sistem endokrin manusia", lampiran:"kelenjar",
 kadNama:"Kelenjar Pituitari", kadEm:"\u{1F9E0}", kadFakta:"Kelenjar pituitari hanya sebesar kacang pis, tetapi ia mengawal hampir semua kelenjar endokrin lain, itulah sebabnya ia digelar 'kelenjar induk'.",
 bosKadNama:"Hormon", bosKadEm:"\u{1F9EA}", bosKadFakta:"Hormon bergerak melalui aliran darah dan boleh mengambil masa beberapa minit untuk memberi kesan, jauh lebih perlahan daripada isyarat saraf yang mengambil masa serpihan saat.",
 soalan:[
 {j:"pilih",t:"Sistem endokrin ialah sistem yang:",p:["Terdiri daripada kelenjar yang merembeskan hormon terus ke dalam aliran darah","Terdiri daripada saraf yang menghantar isyarat elektrik ke seluruh badan","Terdiri daripada otot yang mengecut untuk menghasilkan pergerakan tubuh","Terdiri daripada organ yang menapis toksin dan sisa daripada makanan"],b:0,u:"Kelenjar endokrin tidak mempunyai saluran; rembesannya terus masuk ke dalam darah."},
 {j:"pilih",t:"Kelenjar manakah digelar 'kelenjar induk' kerana ia mengawal kebanyakan kelenjar endokrin lain?",p:["Pituitari","Tiroid","Pankreas","Adrenal"],b:0,u:"Pituitari terletak di pangkal otak dan merembeskan hormon yang mengawal kelenjar lain."},
 {j:"pilih",t:"Hormon Antidiuretik (ADH) berfungsi untuk:",p:["Mengawal jumlah air yang diserap semula oleh buah pinggang","Menurunkan paras gula dalam darah dengan cepat","Mengawal kadar metabolisme badan dalam jangka panjang","Menyediakan badan untuk bertindak balas terhadap bahaya"],b:0,u:"ADH dirembeskan oleh pituitari dan bertindak pada buah pinggang."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kelenjar tiroid terletak di bahagian:",p:["Leher","Kepala","Perut","Pelvis"],b:0,u:"Tiroid terletak di hadapan trakea pada leher."},
 {j:"susun",t:"Susun urutan tindakan hormon yang betul.",p:["Kelenjar merembeskan hormon","Hormon diangkut oleh aliran darah","Hormon sampai ke organ sasaran","Organ sasaran bertindak balas"],b:[0,1,2,3],u:"Hormon berbeza daripada isyarat saraf kerana ia diangkut oleh darah, bukan neuron, jadi kesannya lebih perlahan tetapi lebih meluas."},
 {j:"pilih",t:"Hormon insulin dirembeskan oleh kelenjar:",p:["Pankreas","Tiroid","Adrenal","Pituitari"],b:0,u:"Pankreas merembeskan insulin untuk mengawal paras gula darah."},
 {j:"pilih",t:"Estrogen dan testosteron masing-masing dirembeskan oleh:",p:["Ovari dan testis","Tiroid dan adrenal","Pankreas dan pituitari","Adrenal dan ovari"],b:0,u:"Ovari merembeskan estrogen, testis merembeskan testosteron."},
 {j:"pilih",t:"Hormon adrenalina dirembeskan oleh kelenjar adrenal ketika badan:",p:["Berada dalam keadaan tertekan atau bahaya","Berada dalam keadaan rehat sepenuhnya","Selepas makan hidangan yang besar dan berat","Semasa tidur lena pada waktu malam"],b:0,u:"Adrenalina menyediakan badan untuk tindak balas 'lawan atau lari'."}],
 bos:{j:"banyak",t:"Pilih SEMUA yang merupakan kelenjar endokrin utama manusia.",p:["Pituitari","Tiroid","Adrenal","Pankreas","Peparu","Jantung"],b:[0,1,2,3],u:"Peparu dan jantung ialah organ penting, tetapi ia tidak merembeskan hormon ke dalam darah."}},

{n:2, tempat:"Hormon", sk:"7.1 Fungsi hormon dan gangguan endokrin", lampiran:"kes",
 kadNama:"Diabetes Insipidus", kadEm:"\u{1F4A7}", kadFakta:"Diabetes insipidus tiada kaitan dengan gula seperti diabetes mellitus; puncanya ialah kekurangan ADH, jadi buah pinggang gagal menahan air.",
 bosKadNama:"Akromegali", bosKadEm:"\u{1F4CF}", bosKadFakta:"Akromegali pada orang dewasa berbeza daripada gigantisme pada kanak-kanak, walaupun kedua-duanya disebabkan hormon tumbesaran berlebihan, kerana tulang panjang orang dewasa sudah berhenti membesar.",
 soalan:[
 {j:"pilih",t:"Fungsi utama insulin ialah:",p:["Menurunkan gula darah dengan menggalakkan sel menyerap glukosa","Menaikkan paras gula dalam darah dengan memecah glikogen","Mengawal penyerapan semula air oleh buah pinggang","Mengawal kadar metabolisme badan secara keseluruhan"],b:0,u:"Insulin menggalakkan sel mengambil glukosa daripada darah, jadi paras gula darah menurun."},
 {j:"pilih",t:"Fungsi utama tiroksina ialah:",p:["Mengawal kadar metabolisme badan","Mengawal paras gula dalam darah","Mengawal penyerapan semula air oleh buah pinggang","Menyediakan badan untuk tindak balas kecemasan"],b:0,u:"Tiroksina mempengaruhi kadar tenaga yang digunakan oleh sel badan."},
 {j:"pilih",t:"Berdasarkan jadual, pesakit manakah mengalami diabetes insipidus, bukan diabetes mellitus?",p:["Cik Aina, kerana ADH-nya rendah walaupun gula darahnya normal","En. Razak, kerana paras gula darahnya didapati tinggi","En. Kamal, kerana hormon tumbesarannya didapati tinggi","Pn. Farah, kerana paras tiroksinanya didapati rendah"],b:0,u:"Diabetes insipidus disebabkan kekurangan ADH, bukan masalah gula darah."},
 {j:"pilih",t:"Beza utama antara diabetes insipidus dan diabetes mellitus ialah:",p:["Insipidus akibat kekurangan ADH; mellitus akibat masalah insulin/glukosa","Insipidus disebabkan masalah insulin, mellitus disebabkan kekurangan ADH","Kedua-duanya disebabkan kekurangan hormon tumbesaran","Insipidus hanya berlaku pada kanak-kanak, mellitus pada orang dewasa"],b:0,u:"Kedua-dua penyakit membabitkan dahaga dan kerap kencing, tetapi puncanya berbeza sama sekali."},
 {j:"pilih",t:"Berdasarkan jadual, gejala Pn. Farah (letih, mudah sejuk, berat badan naik) berpunca daripada:",p:["Kadar metabolisme rendah akibat paras tiroksina rendah","Paras gula dalam darahnya yang didapati terlalu tinggi","Kekurangan ADH yang menyebabkan air kencingnya cair","Hormon tumbesaran yang dirembeskan secara berlebihan"],b:0,u:"Tiroksina rendah memperlahankan metabolisme, menyebabkan letih dan mudah sejuk."},
 {j:"pilih",t:"Punca akromegali ialah:",p:["Hormon tumbesaran berlebihan daripada pituitari","Kekurangan insulin yang dirembeskan oleh pankreas","Kekurangan ADH yang dirembeskan oleh pituitari","Perembesan tiroksina berlebihan daripada tiroid"],b:0,u:"Pada orang dewasa, tulang panjang sudah berhenti membesar, jadi kesannya pada tangan, kaki dan rahang."},
 {j:"pilih",t:"Fungsi adrenalina dalam badan ialah:",p:["Menyediakan badan bertindak balas terhadap bahaya","Kadar metabolisme badan jangka panjang dikawal olehnya","Penyerapan semula air oleh buah pinggang dikawal olehnya","Pertumbuhan tulang panjang dikawal olehnya"],b:0,u:"Adrenalina menaikkan kadar denyutan jantung dan tenaga dengan segera, sesuai untuk tindak balas 'lawan atau lari'."},
 {j:"pilih",t:"Mengapakah kadar metabolisme rendah menyebabkan berat badan naik walaupun pengambilan makanan tidak berubah?",p:["Badan membakar tenaga lebih perlahan daripada biasa","Badan menyerap lebih banyak air daripada biasa","Insulin dirembeskan secara berlebihan oleh pankreas","Hormon tumbesaran meningkat secara mendadak dan berterusan"],b:0,u:"Tiroksina rendah memperlahankan kadar tenaga yang dibakar oleh sel."}],
 bos:{j:"pilih",t:"Berdasarkan jadual, apakah petunjuk utama yang membezakan diabetes insipidus (Cik Aina) daripada diabetes mellitus (En. Razak)?",p:["Ujian gula darah Cik Aina normal, tetapi ADH-nya rendah; ujian gula darah En. Razak tinggi","Cik Aina lebih muda daripada En. Razak, jadi puncanya pasti berbeza","Cik Aina minum air lebih banyak berbanding En. Razak setiap hari","En. Razak turut mengalami akromegali manakala Cik Aina tidak"],b:0,u:"Gejala kedua-duanya hampir sama (dahaga, kerap kencing), tetapi ujian gula darah mendedahkan punca sebenar."}},

{n:3, tempat:"Dadah", sk:"7.2 Jenis dadah dan kesannya",
 kadNama:"Stimulan", kadEm:"\u{26A1}", kadFakta:"Dadah stimulan seperti amfetamina mempercepatkan sistem saraf pusat, menyebabkan jantung berdegup lebih laju walaupun pengguna berasa 'bertenaga'.",
 bosKadNama:"Halusinogen", bosKadEm:"\u{1F300}", bosKadFakta:"Dadah halusinogen mengubah cara otak memproses maklumat deria, menyebabkan pengguna melihat atau mendengar sesuatu yang tidak wujud.",
 soalan:[
 {j:"pilih",t:"Dadah yang memperlahankan sistem saraf pusat dikelaskan sebagai:",p:["Depresan","Stimulan","Halusinogen","Antibiotik"],b:0,u:"Depresan memperlahankan tindak balas otak dan badan."},
 {j:"pilih",t:"Dadah yang mempercepatkan sistem saraf pusat dikelaskan sebagai:",p:["Stimulan","Depresan","Halusinogen","Antipiretik"],b:0,u:"Stimulan meningkatkan degupan jantung dan tahap kesedaran secara tidak semula jadi."},
 {j:"pilih",t:"Dadah yang menyebabkan pengguna melihat atau mendengar sesuatu yang tidak wujud dikelaskan sebagai:",p:["Halusinogen","Stimulan","Depresan","Antihistamin"],b:0,u:"Halusinogen mengubah persepsi deria pengguna terhadap persekitaran."},
 {j:"pilih",t:"Seorang pengguna dadah kelihatan sangat bertenaga, degupan jantung laju, dan sukar tidur malam. Jenis dadah yang paling mungkin?",p:["Stimulan","Depresan","Halusinogen","Tiada kaitan dengan dadah"],b:0,u:"Gejala ini sepadan dengan kesan dadah yang mempercepatkan sistem saraf pusat."},
 {j:"pilih",t:"Seorang pengguna dadah kelihatan mengantuk, pergerakan perlahan, dan pernafasan perlahan. Jenis dadah yang paling mungkin?",p:["Depresan","Stimulan","Halusinogen","Tiada kaitan dengan dadah"],b:0,u:"Gejala ini sepadan dengan kesan dadah yang memperlahankan sistem saraf pusat."},
 {j:"banyak",t:"Pilih SEMUA yang merupakan kesan penyalahgunaan dadah dan alkohol ke atas KOORDINASI BADAN.",p:["Ketidakseimbangan hormon","Pertuturan tidak jelas","Tindakan refleks yang lambat","Hilang keseimbangan","Sirosis hati akibat kerosakan tisu hati jangka panjang","Ulser perut akibat kerengsaan pada dinding perut"],b:[0,1,2,3],u:"Sirosis hati dan ulser perut ialah kesan ke atas kesihatan fizikal organ, bukan koordinasi badan secara langsung."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh kesan penyalahgunaan dadah ke atas KESIHATAN MENTAL?",p:["Halusinasi","Sirosis hati","Tindakan refleks yang lambat","Ulser perut"],b:0,u:"Halusinasi ialah gangguan minda; tiga pilihan lain ialah kesan fizikal atau koordinasi."},
 {j:"pilih",t:"Mengapakah agensi seperti Agensi Antidadah Kebangsaan (AADK) memberi ceramah kepada pelajar sekolah?",p:["Mendidik pelajar mengenal jenis dan kesan dadah","Memastikan semua pelajar menghafal nama saintifik setiap dadah","Mengumpul data peribadi pelajar bagi tujuan penguatkuasaan","Menggantikan peranan guru Sains di sekolah"],b:0,u:"Pendidikan pencegahan bertujuan membina kesedaran sebelum masalah berlaku."}],
 bos:{j:"pilih",t:"Seorang rakan kelihatan degupan jantung laju, sukar tidur, dan bertindak agresif berselang-seli dengan tempoh sangat letih. Tugasan mudah yang paling wajar?",p:["Maklumkan kepada guru atau ibu bapa dengan segera","Berikan dia kopi supaya lebih tenang","Biarkan sahaja kerana ia bukan urusan rakan sekelas","Sembunyikan keadaan ini daripada sesiapa supaya dia tidak malu"],b:0,u:"Melaporkan kepada orang dewasa yang boleh dipercayai ialah tindakan paling bertanggungjawab dan selamat."}},

{n:4, tempat:"Saraf", sk:"7.2 Menganalisis kesan dadah dan alkohol", lampiran:"kesan",
 kadNama:"Sirosis Hati", kadEm:"\u{26A0}", kadFakta:"Sirosis hati akibat alkohol berlaku apabila tisu hati yang rosak digantikan dengan tisu parut secara kekal, menjejaskan keupayaan hati menapis toksin daripada darah.",
 bosKadNama:"Tindakan Refleks Terjejas", bosKadEm:"\u{1F40C}", bosKadFakta:"Alkohol memperlahankan penghantaran isyarat di sinaps neuron, itulah sebabnya ujian nafas dan ujian pergerakan mata digunakan untuk mengesan pemanduan mabuk.",
 soalan:[
 {j:"pilih",t:"Seorang pemandu yang mabuk alkohol gagal mengelak halangan jalan tepat pada masa. Sebab paling munasabah?",p:["Tindakan refleksnya perlahan akibat kesan alkohol","Matanya tidak dapat melihat langsung dalam keadaan gelap","Kereta yang dipandunya mengalami kerosakan pada brek","Alkohol menyebabkan dia buta warna buat sementara waktu"],b:0,u:"Alkohol ialah depresan yang memperlahankan sistem saraf pusat, termasuk masa tindak balas."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah yang berlaku SEBAIK SAHAJA seseorang menyalahgunakan bahan, sebelum kesan lain muncul?",p:["Sistem saraf pusatnya terganggu","Organ dalamannya terus rosak secara kekal","Dia terus mengalami halusinasi","Minda sihatnya terus pulih"],b:0,u:"Rajah menunjukkan sistem saraf terganggu sebagai kesan pertama, sebelum koordinasi dan organ terjejas."},
 {j:"pilih",t:"Mengapakah kesan ke atas koordinasi badan muncul lebih awal berbanding kerosakan organ seperti sirosis hati?",p:["Kesan saraf berlaku serta-merta, kerosakan organ terkumpul lebih lama","Sistem saraf tidak pernah pulih manakala organ sentiasa pulih dengan cepat","Kerosakan organ berlaku serta-merta selepas satu kali penggunaan","Koordinasi badan tidak berkaitan langsung dengan bahan yang digunakan"],b:0,u:"Gangguan saraf ialah kesan segera bahan kimia, manakala kerosakan tisu organ memerlukan pendedahan berulang."},
 {j:"pilih",t:"Pertuturan tidak jelas (slurred speech) pada seseorang yang mabuk menunjukkan bahagian manakah yang terjejas?",p:["Koordinasi otot pertuturan yang dikawal oleh saraf","Kotak vokal yang mengalami kerosakan kekal","Paru-paru yang kekurangan bekalan oksigen mencukupi","Gigi dan lidah yang mengalami kecederaan fizikal"],b:0,u:"Pertuturan memerlukan koordinasi tepat pelbagai otot yang dikawal saraf; alkohol mengganggu koordinasi ini."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah kesimpulan paling wajar tentang urutan kesan penyalahgunaan bahan?",p:["Gangguan saraf berlaku dahulu, kesan organ dan minda terkumpul kemudian","Kesan pada organ dan minda berlaku serentak dengan gangguan saraf pada kali pertama","Organ rosak dahulu sebelum sistem saraf terganggu","Tiada urutan tertentu kerana semua kesan berlaku secara rawak"],b:0,u:"Rajah menunjukkan urutan: saraf terganggu, koordinasi terjejas, kemudian barulah organ dan minda rosak."},
 {j:"pilih",t:"Mengapakah ujian pemanduan mabuk menggunakan ujian nafas dan ujian keseimbangan, bukan ujian paras gula darah?",p:["Alkohol menjejaskan saraf dan koordinasi, bukan gula darah","Ujian gula darah terlalu mahal untuk digunakan di tepi jalan","Alkohol tidak boleh dikesan melalui nafas seseorang","Paras gula darah lebih tepat menunjukkan tahap kemabukan"],b:0,u:"Kesan alkohol yang releven untuk keselamatan jalan raya ialah gangguan saraf dan koordinasi."},
 {j:"pilih",t:"Bagaimanakah ketidakseimbangan hormon akibat penyakit dapat dibezakan daripada ketidakseimbangan akibat penyalahgunaan dadah?",p:["Punca akibat dadah berkait rapat dengan tempoh penggunaan bahan","Kedua-duanya sentiasa menunjukkan gejala yang serupa sepenuhnya","Ketidakseimbangan akibat dadah kekal walaupun bahan dihentikan","Hanya ujian darah dapat membezakan kedua-dua punca tersebut"],b:0,u:"Sejarah pendedahan (riwayat penggunaan bahan) ialah petunjuk penting yang membezakan punca."},
 {j:"nombor",t:"Masa tindak balas biasa seseorang ialah 0.25 saat. Seorang yang mabuk alkohol mengambil 0.85 saat untuk bertindak balas terhadap bahaya jalan raya. Berapa saatkah lebih lambat tindak balasnya?",b:0.6,tol:0.05,suf:"saat",u:"0.85 tolak 0.25 bersamaan 0.6 saat lebih lambat."}],
 bos:{j:"banyak",t:"Pilih SEMUA sebab mengapa satu kejadian kemalangan sahaja belum cukup untuk membuktikan alkohol ialah punca UTAMA kemalangan jalan raya.",p:["Faktor lain seperti keletihan turut boleh melambatkan tindak balas","Satu kejadian sahaja tidak mewakili corak yang lebih besar","Kelajuan kenderaan lain yang terlibat mungkin turut menjadi punca","Alkohol memang dilarang sepenuhnya dalam pemanduan mengikut undang-undang","Ujian nafas sentiasa memberikan bacaan yang tepat sepenuhnya"],b:[0,1,2],u:"Larangan undang-undang dan ketepatan alat ujian tidak menjawab persoalan sebab-akibat bagi kejadian tertentu."}},

{n:5, tempat:"Keputusan", sk:"7.2 / 7.3 Menilai kesan dan membuat keputusan", lampiran:"kempen",
 kadNama:"Mentor Rakan Sebaya", kadEm:"\u{1F91D}", kadFakta:"Program mentor rakan sebaya sering lebih berkesan daripada ceramah sehala kerana remaja lebih mudah menerima nasihat daripada rakan sebaya yang mereka percayai.",
 bosKadNama:"Kempen Berterusan", bosKadEm:"\u{1F4C8}", bosKadFakta:"Perubahan tingkah laku jangka panjang biasanya memerlukan pendedahan berulang, bukan hanya satu sesi maklumat sahaja.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, kempen manakah paling berkesan mengubah tingkah laku?",p:["Kempen B","Kempen A","Kempen C","Kempen D"],b:0,u:"Kempen B mencatat 22% perubahan, paling tinggi antara empat kempen."},
 {j:"pilih",t:"Mengapakah Kempen A kurang berkesan berbanding Kempen B walaupun sasarannya sama (remaja sekolah)?",p:["Kempen A hanya ceramah sekali, Kempen B berterusan dengan mentor","Kempen A menggunakan risalah manakala Kempen B menggunakan ceramah","Kempen A melibatkan lebih ramai peserta berbanding Kempen B","Kempen B dijalankan di sekolah yang lebih kecil"],b:0,u:"Kaedah berterusan dan penglibatan aktif memberi kesan yang lebih mendalam berbanding sesi tunggal."},
 {j:"pilih",t:"Nilaikan cadangan 'cukup edarkan risalah sekali sahaja untuk mengubah tingkah laku ibu bapa', berdasarkan data Kempen C.",p:["Kurang wajar, kerana Kempen C hanya mencatat 2% perubahan tingkah laku","Wajar, kerana risalah ialah kaedah paling murah untuk dilaksanakan","Wajar, kerana ibu bapa lebih mudah dipujuk berbanding remaja sekolah","Kurang wajar, kerana risalah tidak boleh dibaca oleh ibu bapa"],b:0,u:"Data menunjukkan risalah sekali sahaja memberi kesan paling rendah antara empat kaedah."},
 {j:"pilih",t:"Sebuah kilang ingin memilih kaedah paling sesuai untuk pekerjanya berdasarkan jadual. Pilihan paling wajar?",p:["Kaedah seperti Kempen D, iaitu bengkel dan pemeriksaan kesihatan","Kaedah seperti Kempen C, iaitu risalah diedar sekali sahaja","Kaedah seperti Kempen A, iaitu ceramah diadakan sekali sahaja","Tidak menjalankan sebarang kempen kerana kos yang tinggi"],b:0,u:"Kempen D mencatat perubahan tingkah laku 15%, jauh lebih tinggi daripada kaedah pasif seperti risalah atau ceramah tunggal."},
 {j:"banyak",t:"Pilih SEMUA faktor yang menyumbang kepada keberkesanan sesebuah kempen, berdasarkan jadual.",p:["Kaedah pelaksanaan yang berterusan","Penglibatan aktif peserta, bukan sekadar mendengar","Kekerapan pendedahan kepada sasaran","Bilangan risalah yang dicetak dan diedarkan kepada pelajar","Warna poster yang digunakan pada dinding sekolah"],b:[0,1,2],u:"Jadual tidak merekodkan bilangan risalah atau warna poster sebagai faktor keberkesanan."},
 {j:"pilih",t:"Nilaikan dakwaan 'seseorang yang kelihatan sihat dari segi fizikal semestinya mindanya turut sihat'.",p:["Tidak semestinya benar, gejala mental tidak selalu kelihatan","Benar sepenuhnya, kerana minda dan fizikal sentiasa berkait rapat","Benar, kerana ujian fizikal sudah mencukupi untuk mengesan masalah","Tidak berkaitan langsung dengan topik koordinasi badan yang dikaji"],b:0,u:"Gejala masalah kesihatan mental sering tersembunyi dan tidak semestinya kelihatan pada penampilan fizikal."},
 {j:"pilih",t:"Sekolah B ingin menilai sama ada kempen kesihatan mentalnya berjaya. Cara paling sah untuk mengukurnya?",p:["Bandingkan tingkah laku sebelum dan selepas kempen","Kira sahaja bilangan pelajar yang hadir pada hari kempen dijalankan","Tanya guru sahaja sama ada mereka rasa kempen itu berkesan","Kira sahaja bilangan poster yang ditampal di sekitar sekolah"],b:0,u:"Perbandingan sebelum-selepas pada kumpulan sasaran yang sama ialah kaedah paling sah untuk mengukur perubahan tingkah laku."},
 {j:"pilih",t:"Berdasarkan jadual T_KES (hentian 2), pesakit manakah paling perlu dirujuk segera kepada pakar endokrin untuk siasatan hormon tumbesaran?",p:["En. Kamal, kerana tangan dan kakinya membesar perlahan-lahan","En. Razak, kerana air kencingnya berasa manis apabila diuji","Cik Aina, kerana dia kerap berasa dahaga sepanjang hari","Pn. Farah, kerana dia mudah berasa sejuk berbanding orang lain"],b:0,u:"Perubahan fizikal berterusan pada tangan, kaki dan rahang orang dewasa ialah petanda klasik akromegali."}],
 bos:{j:"pilih",t:"Sekolah hanya mempunyai peruntukan untuk SATU program pencegahan dadah tahun ini. Berdasarkan jadual kempen, pilihan paling wajar?",p:["Kaedah seperti Kempen B, kerana rekod menunjukkan kesan paling tinggi","Ceramah sekali sahaja seperti Kempen A, kerana paling mudah dianjurkan","Edaran risalah seperti Kempen C, kerana paling murah untuk dilaksanakan","Tiada program langsung, kerana hasilnya sukar diukur dengan tepat"],b:0,u:"Keputusan berasaskan bukti memilih kaedah dengan rekod keberkesanan tertinggi, bukan yang paling mudah atau murah sahaja."}},

{n:6, tempat:"Kempen", sk:"7.3 Mencipta kempen minda sihat",
 kadNama:"Reka Bentuk Inklusif", kadEm:"\u{1F91D}", kadFakta:"Kempen kesihatan yang direka dengan mengambil kira privasi pelajar biasanya mendapat penyertaan yang lebih tinggi berbanding kempen yang mendedahkan kes secara terbuka.",
 bosKadNama:"Minda Sihat", bosKadEm:"\u{1F9E9}", bosKadFakta:"Pertubuhan Kesihatan Sedunia (WHO) mentakrifkan kesihatan mental bukan sekadar ketiadaan penyakit, tetapi keupayaan seseorang menghadapi tekanan harian dan menyumbang kepada masyarakat.",
 soalan:[
 {j:"pilih",t:"Kempen 'Minda Sihat' paling berkesan reka bentuknya sekiranya:",p:["Melibatkan penyertaan aktif pelajar, bukan ceramah sehala","Diadakan sekali sahaja pada awal tahun persekolahan","Hanya ditujukan kepada pelajar yang sudah bermasalah","Menggunakan poster besar tanpa sebarang aktiviti susulan"],b:0,u:"Data hentian 5 menunjukkan kaedah berterusan dan aktif lebih berkesan daripada sesi tunggal."},
 {j:"pilih",t:"Sekolah mempunyai belanjawan terhad untuk kempen ini. Pendekatan paling bijak?",p:["Latih pelajar sebagai mentor rakan sebaya berterusan","Cetak risalah mewah dalam kuantiti besar sahaja","Jemput selebriti untuk satu sesi ceramah sahaja","Batalkan kempen kerana belanjawan tidak mencukupi"],b:0,u:"Mentor rakan sebaya berkos rendah tetapi memberi pendedahan berterusan, sepadan dengan Kempen B yang paling berkesan."},
 {j:"pilih",t:"Bagaimanakah kempen dapat direka supaya pelajar yang sedang bergelut dengan masalah tidak berasa malu atau terasing?",p:["Sediakan saluran sokongan sulit, bukan pendedahan terbuka","Umumkan nama pelajar yang terlibat supaya rakan lain dapat membantu","Asingkan pelajar yang bermasalah daripada kelas biasa","Paksa pelajar berkongsi masalah peribadi di hadapan kelas"],b:0,u:"Kerahsiaan dan sokongan sulit menggalakkan pelajar mendapatkan bantuan tanpa rasa takut dihakimi."},
 {j:"pilih",t:"Saluran manakah paling berkesan untuk menyampaikan mesej kempen kepada remaja, berdasarkan bukti hentian 5?",p:["Rakan sebaya yang dilatih sebagai mentor","Risalah yang diedarkan sekali sahaja","Ceramah pakar sekali sahaja tanpa susulan","Notis rasmi di papan kenyataan sekolah"],b:0,u:"Kempen B dengan mentor rakan sebaya mencatat kesan paling tinggi dalam jadual."},
 {j:"pilih",t:"Cara paling sah untuk mengukur kejayaan kempen selepas ia dilaksanakan?",p:["Bandingkan sikap pelajar sebelum dan selepas kempen","Kira sahaja bilangan poster yang ditampal","Kira bilangan pelajar yang hadir pada hari pelancaran sahaja","Tanya pendapat guru besar sahaja tanpa data pelajar"],b:0,u:"Perbandingan sebelum-selepas memberikan bukti sebenar perubahan, bukan sekadar anggaran."},
 {j:"banyak",t:"Pilih SEMUA elemen yang patut ada dalam kempen 'Minda Sihat' yang direka dengan baik.",p:["Penyertaan aktif pelajar","Pelaksanaan berterusan, bukan sekali sahaja","Saluran sokongan yang menjaga kerahsiaan","Cara mengukur keberkesanan selepas kempen","Pendedahan terbuka nama pelajar bermasalah"],b:[0,1,2,3],u:"Mendedahkan nama pelajar secara terbuka melanggar privasi dan boleh menjejaskan matlamat kempen."},
 {j:"pilih",t:"Mengapakah kempen sekali sahaja kurang sesuai dijadikan pelan jangka panjang sekolah?",p:["Perubahan tingkah laku perlu pendedahan berulang, bukan sekali sahaja","Kempen sekali sahaja lebih mahal berbanding kempen berterusan","Kempen sekali sahaja memerlukan lebih ramai kakitangan","Pelajar tidak dibenarkan menghadiri kempen lebih daripada sekali"],b:0,u:"Data jadual kempen menunjukkan kaedah berterusan sentiasa mengatasi kaedah tunggal."},
 {j:"pilih",t:"Pertimbangan etika paling penting semasa mereka bentuk kempen yang melibatkan topik dadah dan kesihatan mental?",p:["Menjaga maruah dan privasi pelajar yang mungkin terlibat atau bergelut","Liputan media sebanyak mungkin perlu dipastikan","Kempen kelihatan menarik dari segi warna dan reka bentuk sahaja perlu dipastikan","Kempen selesai dalam masa sesingkat mungkin perlu dipastikan"],b:0,u:"Kempen yang menyentuh isu sensitif mesti mengutamakan maruah individu yang terlibat."}],
 bos:{j:"buka",
  t:"Sekolah awak ingin melancarkan kempen 'Minda Sihat' untuk membantu pelajar mengelakkan penyalahgunaan dadah dan alkohol serta menjaga kesihatan mental.",
  arahan:"Terangkan sasaran kempen, kaedah pelaksanaan, cara mengukur keberkesanannya, dan bagaimana awak mengelakkan pelajar yang bermasalah berasa malu atau terasing.",
  u:"Jawapan TP6 yang kukuh menggabungkan bukti daripada data kempen (kaedah berterusan dan mentor rakan sebaya lebih berkesan), cara pengukuran yang sah, dan pertimbangan etika/privasi pelajar."}}
];

module.exports = {
  id:"t4b5", tingkatan:4, kod:"7.0 Koordinasi Badan",
  tajuk:"Laluan Hormon",
  subtajuk:"Sains Ting. 4 · Bab 7 Koordinasi Badan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali kelenjar endokrin utama dan hormon yang dirembeskannya. Langkah seterusnya ialah menerangkan fungsi setiap hormon, bukan sekadar menghafal namanya.",
   2:"{n} memahami fungsi hormon dan punca gangguan endokrin seperti diabetes insipidus, diabetes mellitus, akromegali dan kadar metabolisme rendah. Perlu lebih latihan membezakan gangguan yang gejalanya hampir sama.",
   3:"{n} boleh mengaplikasikan pengetahuan jenis dadah (depresan, stimulan, halusinogen) untuk mengenal pasti kesannya dalam situasi mudah. Galakkan mengaitkan jenis dadah dengan tindakan sewajarnya apabila menghadapi situasi sebenar.",
   4:"{n} mampu menganalisis kesan penyalahgunaan dadah dan alkohol ke atas koordinasi badan serta kesihatan, termasuk mentafsir data masa tindak balas. Seterusnya latih menimbang bukti sebelum membuat kesimpulan.",
   5:"{n} dapat menilai keberkesanan kaedah pencegahan berdasarkan data dan membuat keputusan yang disokong bukti. Sudah bersedia untuk tugasan mereka cipta.",
   6:"{n} berjaya mereka cipta kempen 'Minda Sihat' yang praktikal, mengambil kira keberkesanan dan maruah pelajar yang terlibat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Koordinasi Badan. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ kelenjar:R_KELENJAR, kesan:R_KESAN, kes:T_KES, kempen:T_KEMPEN },
  aras:ARAS
};
