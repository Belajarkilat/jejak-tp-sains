/* Sumber kandungan — Sains KSSM Tingkatan 2, Bidang 4.0 Kesihatan Manusia.
   Jalankan `node bina.js t2b4` untuk menyemak dan menghasilkan bank-t2b4.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 56.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai kesihatan manusia.",
"Memahami kesihatan manusia serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai kesihatan manusia untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai kesihatan manusia dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai kesihatan manusia dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai kesihatan manusia dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const T_PENYAKIT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Penyakit</th>'+
'<th>Punca</th><th>Cara merebak</th></tr></thead><tbody>'+
'<tr><td>Taun (kolera)</td><td>Bakteria</td><td>Air atau makanan tercemar</td></tr>'+
'<tr><td>Tibi</td><td>Bakteria</td><td>Titisan udara semasa batuk</td></tr>'+
'<tr><td>Kurap</td><td>Kulat</td><td>Sentuhan kulit atau berkongsi tuala</td></tr>'+
'<tr><td>Denggi</td><td>Virus</td><td>Gigitan nyamuk Aedes</td></tr>'+
'<tr><td>Kencing tikus</td><td>Bakteria</td><td>Air yang dicemari air kencing tikus</td></tr>'+
'<tr><td>Diabetes</td><td>Gaya hidup dan genetik</td><td>Tidak berjangkit</td></tr>'+
'</tbody></table></div><p class="qnote">Ringkasan beberapa penyakit di Malaysia.</p>';

const T_ANTIBODI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Hari selepas dos pertama</th>'+
'<th class="n">0</th><th class="n">7</th><th class="n">14</th><th class="n">28</th><th class="n">60</th><th class="n">67</th><th class="n">74</th></tr></thead><tbody>'+
'<tr><td>Aras antibodi (unit)</td><td class="n">0</td><td class="n">5</td><td class="n">20</td><td class="n">10</td><td class="n">4</td><td class="n">60</td><td class="n">90</td></tr>'+
'</tbody></table></div><p class="qnote">Dos kedua (dos penggalak) diberi pada hari ke-60. Aras perlindungan minimum ialah 50 unit. Data rekaan untuk menunjukkan corak gerak balas.</p>';

const T_DENGGI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Minggu</th>'+
'<th class="n">Kes denggi baharu</th><th>Tindakan pada minggu itu</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">4</td><td>Tiada tindakan</td></tr>'+
'<tr><td>2</td><td class="n">12</td><td>Semburan kabus (fogging) sekali</td></tr>'+
'<tr><td>3</td><td class="n">10</td><td>Tiada tindakan</td></tr>'+
'<tr><td>4</td><td class="n">15</td><td>Gotong-royong cari dan musnah tempat pembiakan</td></tr>'+
'<tr><td>5</td><td class="n">9</td><td>Gotong-royong diteruskan setiap minggu</td></tr>'+
'<tr><td>6</td><td class="n">3</td><td>Gotong-royong diteruskan setiap minggu</td></tr>'+
'</tbody></table></div><p class="qnote">Kes denggi di sebuah taman perumahan. Nyamuk Aedes mengambil masa kira-kira 7 hingga 10 hari untuk membesar daripada telur kepada dewasa. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Klinik Kesihatan", sk:"4.1 / 4.2 Penyakit dan pertahanan badan",
 kadNama:"Vektor", kadEm:"\u{1F99F}", kadFakta:"Nyamuk Aedes betina menggigit pada waktu pagi dan petang, dan boleh membawa virus denggi dan Zika.",
 bosKadNama:"Antibodi", bosKadEm:"\u{1F6E1}", bosKadFakta:"Antibodi ialah protein yang dihasilkan oleh sel darah putih untuk memusnahkan antigen tertentu.",
 soalan:[
 {j:"pilih",t:"Penyakit yang boleh merebak dari seorang ke seorang yang lain dipanggil penyakit:",p:["Berjangkit","Tidak berjangkit","Keturunan sahaja","Kekurangan zat makanan"],b:0,u:"Penyakit berjangkit disebabkan oleh patogen."},
 {j:"pilih",t:"Contoh penyakit tidak berjangkit ialah:",p:["Hipertensi","Denggi","Tibi","Selesema"],b:0,u:"Kanser, diabetes dan penyakit kardiovaskular juga tidak berjangkit."},
 {j:"pilih",t:"Malaria disebarkan oleh:",p:["Nyamuk Anopheles","Nyamuk Aedes","Lalat rumah","Tikus"],b:0,u:"Nyamuk Aedes membawa denggi dan Zika."},
 {j:"pilih",t:"Organisma yang membawa patogen dari satu perumah ke perumah lain dipanggil:",p:["Vektor","Antibodi","Antigen","Vaksin"],b:0,u:"Contohnya nyamuk dan tikus."},
 {j:"pilih",t:"Bahan asing yang merangsang badan menghasilkan antibodi dipanggil:",p:["Antigen","Antibiotik","Vitamin","Hormon"],b:0,u:"Contohnya protein pada permukaan virus."},
 {j:"pilih",t:"Barisan pertahanan pertama badan ialah:",p:["Kulit dan mukus","Sel darah putih","Antibodi","Vaksin"],b:0,u:"Ia menghalang patogen daripada memasuki badan."},
 {j:"pilih",t:"Sel darah putih memusnahkan bakteria dengan cara menelannya. Proses ini dipanggil:",p:["Fagositosis","Pencernaan","Respirasi","Imunisasi"],b:0,u:"Ini barisan pertahanan kedua."},
 {j:"banyak",t:"Pilih SEMUA penyakit yang disebarkan melalui udara.",p:["Tibi","Selesema","H1N1","Taun","Kurap"],b:[0,1,2],u:"Taun merebak melalui air tercemar dan kurap melalui sentuhan."}],
 bos:{j:"pilih",t:"Vaksin berfungsi dengan:",p:["Merangsang penghasilan antibodi","Membunuh semua bakteria dengan segera","Menggantikan sel darah putih","Menambah bilangan sel darah merah"],b:0,u:"Vaksin mengandungi patogen yang dilemahkan, dimatikan atau sebahagiannya."}},

{n:2, tempat:"Pusat Imunisasi", sk:"4.1 / 4.2 Penularan penyakit dan keimunan",
 kadNama:"Imunisasi", kadEm:"\u{1F489}", kadFakta:"Program imunisasi kebangsaan Malaysia melindungi kanak-kanak daripada penyakit seperti tibi, campak dan batuk kokol.",
 bosKadNama:"Susu Ibu", bosKadEm:"\u{1F37C}", bosKadFakta:"Antibodi dalam susu ibu memberi bayi keimunan pasif semula jadi pada bulan-bulan awal kehidupan.",
 soalan:[
 {j:"pilih",t:"Keimunan yang diperoleh selepas menerima vaksin ialah keimunan:",p:["Aktif buatan","Aktif semula jadi","Pasif semula jadi","Pasif buatan"],b:0,u:"Badan sendiri menghasilkan antibodi selepas dirangsang oleh vaksin."},
 {j:"pilih",t:"Seseorang yang dipatuk ular berbisa diberi suntikan antibisa. Ini memberi keimunan:",p:["Pasif buatan","Aktif buatan","Aktif semula jadi","Pasif semula jadi"],b:0,u:"Antibodi siap diberi dari luar dan bertindak segera."},
 {j:"pilih",t:"Mengapakah keimunan pasif tidak tahan lama?",p:["Badan tidak menghasilkan antibodi itu sendiri","Antibodi daripada luar terlalu kuat untuk badan","Keimunan pasif hanya diberi kepada orang dewasa","Antibodi itu bertukar menjadi antigen baharu"],b:0,u:"Antibodi yang diberi akan dimusnahkan secara beransur-ansur."},
 {j:"pilih",t:"Mengapakah kita perlu mencuci tangan sebelum makan?",p:["Membuang patogen di tangan","Supaya tangan lebih lembut","Supaya makanan lebih sedap","Menambah antibodi di kulit"],b:0,u:"Tangan menyentuh banyak permukaan yang mungkin tercemar."},
 {j:"pilih",t:"Mengapakah pesakit tibi dinasihatkan memakai pelitup muka?",p:["Kurangkan titisan udara berkuman","Pesakit tidak berasa sejuk di wad hospital","Ubat yang ditelan tidak tercicir keluar","Pesakit tidak perlu makan ubat lagi"],b:0,u:"Tibi merebak melalui titisan udara semasa batuk dan bersin."},
 {j:"pilih",t:"Bagaimanakah air bertakung dalam tayar lama meningkatkan kes denggi?",p:["Ia menjadi tempat nyamuk Aedes bertelur","Ia menghasilkan virus denggi dengan sendiri","Ia menjadikan nyamuk lebih besar dan kuat","Ia menarik tikus yang membawa denggi"],b:0,u:"Jentik-jentik Aedes membesar dalam air bersih yang bertakung."},
 {j:"pilih",t:"Keimunan aktif semula jadi diperoleh apabila seseorang:",p:["Sembuh daripada jangkitan","Menerima suntikan vaksin","Menerima susu ibu semasa bayi","Diberi suntikan antibisa ular"],b:0,u:"Badan menghasilkan antibodi sendiri semasa melawan jangkitan."},
 {j:"pilih",t:"Mengapakah penyakit seperti batuk kokol boleh muncul semula dalam masyarakat?",p:["Kurang kanak-kanak diimunisasi","Bakteria batuk kokol telah pupus","Semua orang mempunyai antibodi","Penyakit itu tidak berjangkit"],b:0,u:"Apabila ramai tidak diimunisasi, patogen mudah merebak semula."}],
 bos:{j:"banyak",t:"Pilih SEMUA amalan yang menguatkan keimunan badan.",p:["Tidur yang cukup","Makan buah dan sayur tempatan","Bersenam secara berkala","Merokok untuk mengurangkan tekanan","Tidur lewat setiap malam"],b:[0,1,2],u:"Merokok dan kurang tidur melemahkan sistem pertahanan badan."}},

{n:3, tempat:"Bilik Epidemiologi", sk:"4.1 Mengelaskan penyakit dan cara penularannya", lampiran:"penyakit",
 kadNama:"Taun", kadEm:"\u{1F4A7}", kadFakta:"Taun menyebabkan cirit-birit teruk. Merebus air minuman dan menjaga kebersihan makanan mencegahnya.",
 bosKadNama:"Kencing Tikus", bosKadEm:"\u{1F400}", bosKadFakta:"Leptospirosis atau kencing tikus boleh dijangkiti semasa mandi di sungai atau air banjir yang tercemar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, penyakit yang disebabkan oleh kulat ialah:",p:["Kurap","Taun","Tibi","Denggi"],b:0,u:"Panau juga disebabkan oleh kulat."},
 {j:"pilih",t:"Penyakit manakah disebabkan oleh virus?",p:["Denggi","Taun","Tibi","Kurap"],b:0,u:"Virus denggi dibawa oleh nyamuk Aedes."},
 {j:"pilih",t:"Penyakit manakah TIDAK boleh dicegah dengan menutup mulut semasa batuk?",p:["Kencing tikus","Tibi","Selesema","H1N1"],b:0,u:"Kencing tikus merebak melalui air yang tercemar."},
 {j:"pilih",t:"Selepas banjir, penyakit manakah dalam jadual paling perlu diawasi?",p:["Taun dan kencing tikus","Diabetes dan tibi","Kurap dan diabetes","Denggi dan diabetes"],b:0,u:"Kedua-duanya merebak melalui air yang tercemar."},
 {j:"pilih",t:"Mengapakah diabetes tidak boleh dicegah dengan vaksin?",p:["Ia tidak disebabkan oleh patogen","Vaksin diabetes terlalu mahal","Diabetes hanya menyerang warga emas","Diabetes disebarkan oleh nyamuk"],b:0,u:"Vaksin hanya melindungi daripada jangkitan patogen tertentu."},
 {j:"pilih",t:"Asrama melaporkan beberapa murid dijangkiti kurap. Langkah paling berkesan?",p:["Jangan berkongsi tuala dan pakaian","Rebus semua air minuman asrama","Semburan kabus di sekeliling asrama","Beri vaksin tibi kepada semua murid"],b:0,u:"Kurap merebak melalui sentuhan dan barang peribadi."},
 {j:"pilih",t:"Mengapakah merebus air minuman mencegah taun?",p:["Haba membunuh bakteria dalam air","Rebusan menambah mineral dalam air","Air panas menghalau nyamuk","Rebusan menukar bakteria kepada virus"],b:0,u:"Bakteria taun mati pada suhu tinggi."},
 {j:"banyak",t:"Pilih SEMUA penyakit dalam jadual yang disebabkan oleh bakteria.",p:["Taun","Tibi","Kencing tikus","Denggi","Kurap"],b:[0,1,2],u:"Denggi disebabkan oleh virus dan kurap oleh kulat."}],
 bos:{j:"pilih",t:"Pegawai kesihatan hanya mampu menjalankan satu kempen selepas banjir. Kempen paling wajar berdasarkan jadual?",p:["Air bersih dan elak air banjir","Jangan berkongsi tuala di rumah","Kurangkan makanan bergula","Pakai pelitup muka setiap masa"],b:0,u:"Taun dan kencing tikus berkaitan dengan air banjir yang tercemar."}},

{n:4, tempat:"Makmal Vaksin", sk:"4.2 Menganalisis gerak balas imunisasi", lampiran:"antibodi",
 kadNama:"Dos Penggalak", kadEm:"\u{1F4C8}", kadFakta:"Dos penggalak menyebabkan badan menghasilkan antibodi dengan lebih cepat dan lebih banyak berbanding dos pertama.",
 bosKadNama:"Sel Memori", bosKadEm:"\u{1F9E0}", bosKadFakta:"Selepas imunisasi, badan 'mengingati' antigen supaya gerak balas akan datang lebih pantas.",
 soalan:[
 {j:"nombor",t:"Berapakah aras antibodi tertinggi selepas dos pertama, dalam unit?",b:20,tol:0.05,suf:"unit",u:"Aras tertinggi selepas dos pertama ialah 20 unit pada hari ke-14."},
 {j:"pilih",t:"Adakah dos pertama sahaja memberi perlindungan yang mencukupi?",p:["Tidak, kerana aras antibodi tidak mencapai 50 unit","Ya, kerana antibodi sudah dihasilkan pada hari ke-7","Ya, kerana aras antibodi tidak pernah jatuh","Tidak, kerana tiada antibodi dihasilkan langsung"],b:0,u:"Aras tertinggi hanya 20 unit, di bawah paras perlindungan."},
 {j:"pilih",t:"Apakah yang berlaku kepada aras antibodi antara hari ke-14 hingga ke-60?",p:["Menurun perlahan-lahan","Meningkat dengan cepat","Kekal sama","Menjadi sifar serta-merta"],b:0,u:"Antibodi dimusnahkan secara beransur-ansur jika tiada rangsangan baharu."},
 {j:"nombor",t:"Berapakah kenaikan aras antibodi dalam 14 hari selepas dos penggalak, dalam unit?",b:86,tol:0.5,suf:"unit",u:"90 − 4 = 86 unit."},
 {j:"pilih",t:"Bandingkan gerak balas selepas dos pertama dan dos penggalak.",p:["Dos penggalak lebih cepat dan lebih tinggi","Dos pertama lebih cepat dan lebih tinggi","Kedua-duanya sama","Dos penggalak tidak menghasilkan antibodi"],b:0,u:"Dalam 7 hari, dos penggalak menaikkan antibodi kepada 60 unit berbanding 5 unit bagi dos pertama."},
 {j:"pilih",t:"Mengapakah gerak balas selepas dos penggalak lebih pantas?",p:["Badan sudah mengenali antigen itu","Vaksin kedua mengandungi antibodi siap","Dos kedua diberi dalam jumlah yang lebih kecil","Badan sudah kehilangan semua sel darah putih"],b:0,u:"Sel memori terbentuk selepas dos pertama."},
 {j:"pilih",t:"Pada hari ke-67, adakah individu itu dilindungi?",p:["Ya, aras antibodi melebihi 50 unit","Tidak, aras antibodi masih di bawah 50 unit","Tidak, antibodi belum dihasilkan","Ya, kerana dos pertama sudah memadai"],b:0,u:"60 unit melebihi paras perlindungan 50 unit."},
 {j:"banyak",t:"Pilih SEMUA kesimpulan yang disokong oleh data.",p:["Dos pertama menghasilkan antibodi secara perlahan","Aras antibodi menurun jika tiada dos lagi","Dos penggalak meningkatkan perlindungan","Satu dos sudah cukup untuk perlindungan","Antibodi tidak pernah menurun"],b:[0,1,2],u:"Aras antibodi menurun dari 20 kepada 4 unit sebelum dos penggalak."}],
 bos:{j:"pilih",t:"Seorang ibu mahu melangkau dos kedua anaknya kerana anaknya kelihatan sihat. Nasihat paling tepat berdasarkan data?",p:["Teruskan dos kedua","Langkau kerana anak sudah sihat","Tunggu sehingga anak jatuh sakit dahulu","Beri dos pertama sekali lagi pada hari ke-100"],b:0,u:"Tanpa dos penggalak, aras antibodi tidak mencapai paras perlindungan."}},

{n:5, tempat:"Taman Perumahan", sk:"4.1 Menilai langkah mengawal penularan denggi", lampiran:"denggi",
 kadNama:"Cari dan Musnah", kadEm:"\u{1F50D}", kadFakta:"Aktiviti cari dan musnah membuang bekas yang menakung air supaya nyamuk Aedes tiada tempat bertelur.",
 bosKadNama:"Wolbachia", bosKadEm:"\u{1F9EC}", bosKadFakta:"Nyamuk Aedes yang membawa bakteria Wolbachia kurang berupaya menyebarkan virus denggi.",
 soalan:[
 {j:"pilih",t:"Kes denggi menurun hanya sedikit selepas semburan kabus pada minggu 2. Sebab paling munasabah?",p:["Semburan tidak membunuh jentik-jentik","Semburan menambah bilangan nyamuk Aedes di kawasan itu","Kes denggi tidak berkaitan dengan nyamuk","Semburan terlalu kuat dan membunuh virus"],b:0,u:"Jentik-jentik terus membesar menjadi nyamuk dewasa baharu."},
 {j:"pilih",t:"Mengapakah kes masih tinggi pada minggu 4 walaupun gotong-royong bermula?",p:["Nyamuk sedia ada masih ada","Gotong-royong menambah jentik-jentik","Virus denggi merebak melalui air","Semburan kabus diteruskan setiap hari"],b:0,u:"Kesan mengeluarkan tempat pembiakan hanya kelihatan selepas satu kitar hidup nyamuk."},
 {j:"nombor",t:"Berapakah pengurangan kes dari minggu 4 hingga minggu 6?",b:12,tol:0.5,suf:"kes",u:"15 − 3 = 12 kes."},
 {j:"pilih",t:"Nilaikan keberkesanan gotong-royong cari dan musnah berdasarkan data.",p:["Berkesan jika dibuat berterusan","Tidak berkesan kerana kes naik pada minggu 4","Sama berkesan dengan semburan kabus sekali","Berkesan dalam satu hari sahaja"],b:0,u:"Kes turun dari 15 ke 3 selepas gotong-royong diteruskan setiap minggu."},
 {j:"pilih",t:"Penduduk mencadangkan semburan kabus setiap hari sebagai ganti gotong-royong. Nilaikan cadangan itu.",p:["Kurang wajar; ia tidak memusnahkan tempat pembiakan","Wajar, kerana semburan membunuh semua jentik-jentik","Wajar, kerana data menunjukkan semburan paling berkesan","Kurang wajar, kerana nyamuk suka bau semburan"],b:0,u:"Semburan berlebihan juga mencemarkan udara dan membunuh serangga lain."},
 {j:"pilih",t:"Mengapakah data minggu 3 penting walaupun tiada tindakan?",p:["Semburan sekali tidak cukup","Ia menunjukkan denggi hilang sendiri","Ia menunjukkan gotong-royong gagal","Ia tidak berguna langsung"],b:0,u:"Kes hampir sama dengan minggu 2, jadi kesan semburan kecil."},
 {j:"pilih",t:"Majlis perbandaran mahu mengulangi kejayaan ini di taman lain. Keputusan paling wajar?",p:["Gotong-royong mingguan, semburan jika wabak","Semburan kabus sahaja setiap minggu","Tunggu sehingga kes melebihi 50 sebelum bertindak","Tutup taman perumahan itu sepenuhnya"],b:0,u:"Mencegah pembiakan ialah langkah utama; semburan membantu semasa wabak."},
 {j:"pilih",t:"Kelemahan utama data ini untuk membuat kesimpulan kukuh ialah:",p:["Faktor lain seperti hujan tidak direkod","Terlalu banyak minggu direkod","Kes denggi dikira dengan tepat","Data dari satu taman terlalu banyak"],b:0,u:"Hujan mempengaruhi bilangan tempat air bertakung."}],
 bos:{j:"pilih",t:"Sekolah di taman itu mahu menyumbang. Tindakan paling berkesan untuk murid?",p:["Buang bekas bertakung setiap minggu","Sembur racun nyamuk di dalam kelas setiap hari","Tutup semua tingkap kelas sepanjang masa","Bawa semua jentik-jentik ke makmal"],b:0,u:"Murid boleh membantu memusnahkan tempat pembiakan secara berkala."}},

{n:6, tempat:"Kempen Kesihatan", sk:"4.1 / 4.2 Mereka cipta langkah mencegah penyakit",
 kadNama:"Pelitup Muka", kadEm:"\u{1F637}", kadFakta:"Pelitup muka mengurangkan penyebaran titisan udara yang membawa virus selesema dan penyakit pernafasan lain.",
 bosKadNama:"Pencuci Tangan", bosKadEm:"\u{1F9FC}", bosKadFakta:"Mencuci tangan dengan sabun selama sekurang-kurangnya 20 saat membuang kebanyakan kuman.",
 soalan:[
 {j:"pilih",t:"Awak mereka stesen cuci tangan untuk kantin. Ciri paling penting?",p:["Sabun dan air mengalir","Tuala kain yang dikongsi oleh semua murid","Besen air yang tidak ditukar sepanjang hari","Hanya air tanpa sabun supaya jimat"],b:0,u:"Tuala dan air yang dikongsi boleh menyebarkan kuman."},
 {j:"pilih",t:"Awak mereka poster kempen imunisasi untuk ibu bapa. Mesej paling berkesan?",p:["Vaksin melindungi anak dan komuniti","Vaksin menyebabkan anak menjadi lebih tinggi","Vaksin hanya perlu diberi sekali seumur hidup","Vaksin menggantikan keperluan makan sayur"],b:0,u:"Apabila ramai diimunisasi, penyakit sukar merebak kepada mereka yang lemah."},
 {j:"pilih",t:"Awak mereka alat perangkap telur nyamuk (ovitrap) daripada bahan terpakai. Reka bentuk paling sesuai?",p:["Bekas gelap berisi air dan kayu","Bekas lutsinar tanpa air di bawah matahari","Bekas berisi racun yang dibiarkan terbuka","Bekas besar berisi pasir kering"],b:0,u:"Telur yang terkumpul dimusnahkan setiap minggu sebelum menetas."},
 {j:"pilih",t:"Kawasan awak kerap banjir. Pakej kesihatan pasca banjir paling berguna?",p:["Air bersih, sabun dan but getah","Minuman bergula dan makanan ringan","Ubat nyamuk bakar sahaja","Pakaian tebal untuk musim sejuk"],b:0,u:"Ini membantu mencegah taun dan kencing tikus."},
 {j:"pilih",t:"Awak mereka aplikasi untuk mengingatkan ibu bapa tentang imunisasi anak. Ciri paling penting?",p:["Peringatan tarikh dos seterusnya","Permainan video untuk kanak-kanak","Senarai lagu kanak-kanak","Gambar kartun yang banyak"],b:0,u:"Dos yang tepat pada masanya memastikan perlindungan yang mencukupi."},
 {j:"pilih",t:"Awak mencadangkan cara mengurangkan penyakit tidak berjangkit dalam keluarga. Cadangan paling wajar?",p:["Kurang gula dan garam, bersenam","Ambil vaksin setiap tahun untuk diabetes","Elakkan bersentuhan dengan pesakit diabetes","Makan ubat antibiotik setiap minggu"],b:0,u:"Penyakit tidak berjangkit berkait rapat dengan gaya hidup."},
 {j:"pilih",t:"Kelas awak mahu mengurangkan selesema yang merebak. Langkah paling praktikal?",p:["Murid sakit pakai pelitup, tingkap dibuka","Tutup semua tingkap supaya kelas hangat","Kongsi botol air supaya jimat","Suruh murid sakit datang ke sekolah juga"],b:0,u:"Pengudaraan dan pelitup mengurangkan titisan udara berkuman."},
 {j:"pilih",t:"Bagaimanakah awak menilai keberkesanan stesen cuci tangan di sekolah?",p:["Bandingkan kes cirit-birit sebelum dan selepas","Kira jumlah sabun yang dibeli","Tanya pengetua sama ada stesen itu cantik","Ukur saiz sinki yang dipasang"],b:0,u:"Pengurangan penyakit menunjukkan kesan sebenar."}],
 bos:{j:"buka",
  t:"Kawasan sekolah awak mencatatkan kes denggi dan selesema yang tinggi. Reka satu kempen atau alat untuk mengurangkan penularan penyakit berjangkit di sekolah.",
  arahan:"Terangkan penyakit yang disasarkan, punca dan cara penularannya, bagaimana rekaan awak memutuskan rantai jangkitan atau menguatkan keimunan, cara mengukur keberkesanannya, serta kos dan penglibatan murid, guru dan penduduk.",
  u:"Jawapan TP6 yang kukuh mengaitkan cara penularan dengan langkah pencegahan yang tepat, menggunakan konsep keimunan dengan betul, dan merancang pengukuran yang realistik."}}
];

module.exports = {
  id:"t2b4", tingkatan:2, kod:"4.0 Kesihatan Manusia",
  tajuk:"Laluan Imun",
  subtajuk:"Sains Ting. 2 · Bab 4 Kesihatan Manusia",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali contoh penyakit berjangkit dan tidak berjangkit serta maksud antigen dan antibodi. Langkah seterusnya ialah menjelaskan cara penyakit merebak.",
   2:"{n} memahami cara penularan penyakit dan jenis keimunan serta dapat menjelaskannya. Perlu lebih banyak latihan mengelaskan penyakit mengikut punca.",
   3:"{n} boleh mengelaskan penyakit mengikut punca dan cara penularan serta mencadangkan langkah pencegahan yang sesuai. Galakkan mengaitkan langkah dengan cara penularan.",
   4:"{n} mampu menganalisis data aras antibodi untuk menerangkan kepentingan dos penggalak. Seterusnya latih menilai langkah kawalan penyakit.",
   5:"{n} dapat menilai langkah mengawal denggi berdasarkan data dan membuat keputusan yang wajar. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta kempen atau alat mencegah penyakit yang kreatif dan praktikal. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kesihatan Manusia. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ penyakit:T_PENYAKIT, antibodi:T_ANTIBODI, denggi:T_DENGGI },
  aras:ARAS
};
