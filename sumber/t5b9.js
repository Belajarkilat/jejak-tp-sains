/* Sumber kandungan — Sains KSSM Tingkatan 5, Bidang 9.0 Teknologi Angkasa Lepas.
   Fail ini disunting tangan. Jalankan `node bina.js t5b9` untuk menyemaknya
   dan menghasilkan bank-t5b9.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 4 dan 5, Bahagian Pembangunan Kurikulum, muka 165.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran saintifik mengenai teknologi angkasa lepas.",
"Memahami teknologi angkasa lepas dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai teknologi angkasa lepas dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai teknologi angkasa lepas dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai teknologi angkasa lepas dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai teknologi angkasa lepas dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_ORBIT = {
  jenis:"struktur", mod:"lapisan",
  lapisan:[
    { label:"Bumi", tebal:0.6, isi:"kertas2" },
    { label:"LEO", tebal:1, isi:"merahLembut" },
    { label:"MEO", tebal:1, isi:"hijauLembut" },
    { label:"GEO", tebal:1, isi:"kuningLembut" },
    { label:"HEO", tebal:1, isi:"lembayungLembut" },
  ],
  kapsyen:"Rajah 1 · Empat jenis orbit satelit mengikut jarak dari Bumi.",
  alt:"Rajah lapisan sepusat: Bumi di tengah, dikelilingi orbit LEO, MEO, GEO dan HEO mengikut jarak menaik"
};

const R_PELANCARAN = {
  jenis:"aliran", mod:"turun",
  nod:[
    { label:"Pelancaran dari pad, enjin peringkat pertama menyala", isi:"merahLembut", panah:"merah" },
    { label:"Peringkat pertama gugur selepas bahan api habis", isi:"kuningLembut", panah:"kuning" },
    { label:"Peringkat kedua mendorong roket ke halaju orbit", isi:"hijauLembut", panah:"hijau" },
    { label:"Satelit dilepaskan daripada roket pelancar", isi:"lembayungLembut", panah:"lembayung" },
    { label:"Satelit stabil dalam orbit yang ditetapkan", isi:"hijauLembut" },
  ],
  kapsyen:"Rajah 2 · Peringkat pelancaran satelit menggunakan roket berperingkat.",
  alt:"Rajah aliran menegak lima peringkat pelancaran satelit dari pad pelancar hingga orbit stabil"
};

const T_HALAJU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Satelit</th>'+
'<th class="n">Ketinggian orbit (km)</th><th class="n">Halaju (km/j)</th><th>Kegunaan utama</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">400</td><td class="n">27,600</td><td>Pemerhatian Bumi (LEO)</td></tr>'+
'<tr><td>Q</td><td class="n">20,200</td><td class="n">14,000</td><td>Navigasi GPS (MEO)</td></tr>'+
'<tr><td>R</td><td class="n">35,786</td><td class="n">11,300</td><td>Komunikasi (GEO)</td></tr>'+
'</tbody></table></div><p class="qnote">ISS mengorbit pada ketinggian lebih kurang 400 km dengan halaju 27,600 km/j.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Orbit", sk:"9.1 Jenis-jenis orbit satelit", lampiran:"orbit",
 kadNama:"Orbit Geopegun", kadEm:"\u{1F6F0}", kadFakta:"Satelit dalam orbit geopegun (GEO) kelihatan sentiasa berada di kedudukan yang sama di langit kerana ia mengorbit dengan kelajuan putaran Bumi.",
 bosKadNama:"Sputnik 1", bosKadEm:"\u{1F6F0}", bosKadFakta:"Sputnik 1, satelit buatan pertama dunia, dilancarkan Kesatuan Soviet pada 1957 dan hanya sebesar bola pantai.",
 soalan:[
 {j:"pilih",t:"Orbit yang paling hampir dengan Bumi, biasa digunakan untuk pemerhatian Bumi, ialah:",p:["Orbit rendah Bumi (LEO)","Orbit sederhana Bumi (MEO)","Orbit geosegerak (GSO)","Orbit tinggi Bumi (HEO)"],b:0,u:"LEO berada pada ketinggian 160 hingga 2,000 km, paling hampir antara semua jenis orbit."},
 {j:"pilih",t:"Kebanyakan satelit navigasi seperti GPS beroperasi pada orbit:",p:["Orbit sederhana Bumi (MEO)","Orbit rendah Bumi (LEO)","Orbit tinggi Bumi (HEO)","Orbit lurus menegak ke atas Bumi"],b:0,u:"MEO berada antara 2,000 hingga 35,786 km, sesuai untuk liputan navigasi yang luas."},
 {j:"pilih",t:"Satelit komunikasi yang perlu kelihatan tetap di satu titik di langit diletakkan pada orbit:",p:["Orbit geopegun (GEO)","Orbit rendah Bumi (LEO)","Orbit sederhana Bumi (MEO)","Orbit tinggi Bumi (HEO)"],b:0,u:"GEO ialah orbit geosegerak khatulistiwa pada 35,786 km, sepadan dengan putaran Bumi sehari."},
 {j:"susun",t:"Susun empat jenis orbit ini daripada yang paling hampir Bumi kepada yang paling jauh.",p:["LEO","MEO","GEO","HEO"],b:[0,1,2,3],u:"Ketinggian orbit meningkat mengikut turutan LEO, MEO, GEO, kemudian HEO."},
 {j:"pilih",t:"Orbit yang digunakan untuk misi khas seperti pemerhatian angkasa dalam, melebihi ketinggian GEO, ialah:",p:["Orbit tinggi Bumi (HEO)","Orbit rendah Bumi (LEO)","Orbit sederhana Bumi (MEO)","Orbit permukaan Bumi"],b:0,u:"HEO berada melebihi 35,786 km daripada Bumi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, lapisan manakah paling hampir dengan Bumi, tempat Stesen Angkasa Antarabangsa (ISS) beroperasi?",p:["LEO","MEO","GEO","HEO"],b:0,u:"ISS mengorbit pada lebih kurang 400 km, dalam julat lapisan LEO yang paling dalam selepas Bumi."},
 {j:"pilih",t:"Mengapakah orbit geosegerak amat sesuai untuk satelit televisyen dan komunikasi?",p:["Antena penerima di Bumi tidak perlu bergerak mengikut satelit","Ia bergerak paling laju berbanding semua orbit lain","Ia tidak memerlukan tenaga suria untuk beroperasi","Kosnya paling murah untuk dilancarkan ke angkasa"],b:0,u:"Kerana kedudukannya tetap relatif kepada Bumi, hidangan penerima boleh dipasang secara kekal menghala satu arah."},
 {j:"pilih",t:"Jarak orbit geopegun (GEO) daripada permukaan Bumi ialah lebih kurang:",p:["35,786 km","2,000 km sahaja","160 km rendah","400 km rendah"],b:0,u:"Ini ialah nilai piawai orbit geopegun yang dihafal dalam bidang ini."}],
 bos:{j:"banyak",t:"Pilih SEMUA orbit yang disenaraikan dalam DSKP mengikut jarak menaik daripada Bumi.",p:["LEO, MEO, GEO, HEO","LEO sahaja terletak di bawah 2,000 km","GEO dan GSO merujuk konsep yang berkait rapat","HEO ialah orbit yang paling hampir dengan Bumi","MEO digunakan terutamanya untuk satelit cuaca sahaja"],b:[0,1,2],u:"HEO ialah orbit paling jauh, bukan paling hampir. MEO digunakan terutamanya untuk navigasi, bukan cuaca."}},

{n:2, tempat:"Apogee", sk:"9.1 Apogee, perigee dan orbit elips", lampiran:"",
 kadNama:"Orbit Elips", kadEm:"\u{1F311}", kadFakta:"Kebanyakan orbit satelit bukan bulatan sempurna, sebaliknya berbentuk elips dengan Bumi berada pada satu fokus elips itu.",
 bosKadNama:"Johannes Kepler", bosKadEm:"\u{1F52D}", bosKadFakta:"Hukum Kepler yang menerangkan orbit elips planet, dirumus pada awal 1600-an, masih digunakan untuk mengira laluan satelit hari ini.",
 soalan:[
 {j:"pilih",t:"Titik dalam orbit elips satelit yang paling jauh daripada Bumi dipanggil:",p:["Apogee","Perigee","Khatulistiwa orbit","Paksi major"],b:0,u:"Apogee ialah titik terjauh; perigee ialah titik terdekat."},
 {j:"pilih",t:"Titik dalam orbit elips satelit yang paling hampir dengan Bumi dipanggil:",p:["Perigee","Apogee","Zenit orbit","Nod menaik"],b:0,u:"Perigee berasal daripada peri- (dekat) dan -gee (Bumi)."},
 {j:"pilih",t:"Pada bahagian manakah orbit elips satelit bergerak paling laju?",p:["Berhampiran perigee, kerana tarikan graviti Bumi paling kuat","Berhampiran apogee, kerana satelit paling jauh daripada Bumi","Di tengah-tengah antara apogee dan perigee","Halaju satelit sentiasa sama sepanjang orbit elips"],b:0,u:"Tarikan graviti lebih kuat pada jarak dekat, memecut satelit ke halaju lebih tinggi berhampiran perigee."},
 {j:"pilih",t:"Kenderaan pelancar yang digunakan sekali sahaja dan tidak dipulihkan dipanggil:",p:["ELV (Expendable Launch Vehicle)","RLV (Reusable Launch Vehicle)","GPS (Global Positioning System)","ISS (International Space Station)"],b:0,u:"Expendable bermaksud boleh dilupuskan; ia berbeza daripada roket boleh guna semula."},
 {j:"pilih",t:"Kenderaan pelancar yang direka untuk mendarat semula dan digunakan berkali-kali dipanggil:",p:["RLV (Reusable Launch Vehicle)","ELV (Expendable Launch Vehicle)","MEO (Medium Earth Orbit)","HEO (High Earth Orbit)"],b:0,u:"RLV mengurangkan kos pelancaran kerana peringkat roket boleh digunakan semula."},
 {j:"pilih",t:"Apakah kelebihan utama RLV berbanding ELV dari segi kos jangka panjang?",p:["Bahagian roket boleh digunakan berulang kali, mengurangkan kos setiap pelancaran","RLV tidak memerlukan sebarang bahan api tambahan untuk mencapai orbit angkasa lepas","RLV boleh membawa muatan yang jauh lebih berat daripada ELV","ELV sentiasa gagal mencapai orbit berbanding RLV"],b:0,u:"Menggunakan semula peringkat roket mengelakkan kos membina roket baharu setiap kali."},
 {j:"pilih",t:"Mengapakah satelit perlu mencapai halaju tertentu semasa dilancarkan supaya kekal dalam orbit?",p:["Supaya daya emparan mengimbangi tarikan graviti Bumi","Supaya satelit dapat melepasi litosfera Bumi sepenuhnya","Supaya bahan api roket dapat dijimatkan sepanjang perjalanan","Supaya antena satelit dapat berfungsi dengan optimum"],b:0,u:"Keseimbangan antara halaju mengorbit dan tarikan graviti mengekalkan satelit pada laluannya."},
 {j:"pilih",t:"Sebuah satelit berada dalam orbit bulat sempurna, bukan elips. Apakah hubungan antara apogee dan perigee bagi orbit itu?",p:["Jarak apogee dan perigee adalah sama, kerana orbit itu berbentuk bulatan","Apogee sentiasa dua kali ganda jarak perigee tidak kira apa jua bentuk orbit itu","Orbit bulat tidak mempunyai sama ada apogee atau perigee","Perigee sentiasa lebih jauh daripada apogee dalam orbit bulat"],b:0,u:"Dalam bulatan sempurna, setiap titik pada orbit sama jarak daripada pusat, jadi apogee bersamaan perigee."}],
 bos:{j:"pilih",t:"Sebuah satelit cuaca memerlukan liputan optimum ke atas satu kawasan tertentu sepanjang masa. Orbit manakah paling sesuai, dan mengapa?",p:["GEO, kerana kedudukannya tetap relatif kepada satu titik di Bumi","LEO, kerana ia paling laju mengelilingi Bumi","HEO, kerana ia paling jauh dan dapat melihat kawasan yang jauh lebih luas berbanding orbit lain","MEO, kerana ia digunakan khas untuk kajian cuaca sahaja"],b:0,u:"Liputan berterusan ke atas satu kawasan memerlukan satelit yang kelihatan pegun berbanding Bumi, iaitu GEO."}},

{n:3, tempat:"Pelancaran", sk:"9.1 Pelancaran satelit dan stesen angkasa", lampiran:"pelancaran",
 kadNama:"Sifar Graviti", kadEm:"\u{1F9D1}‍\u{1F680}", kadFakta:"Angkasawan di ISS bukan bebas daripada graviti sepenuhnya; mereka dan stesen angkasa itu sentiasa jatuh bebas mengelilingi Bumi, mewujudkan keadaan seakan tiada berat.",
 bosKadNama:"Orbit Pindah Hohmann", bosKadEm:"\u{1F504}", bosKadFakta:"Orbit pindah Hohmann membenarkan satelit berpindah antara dua orbit menggunakan bahan api paling minimum, walaupun perjalanannya mengambil masa lebih lama.",
 soalan:[
 {j:"susun",t:"Susun peringkat pelancaran satelit mengikut urutan yang betul.",p:["Enjin peringkat pertama menyala di pad pelancar","Peringkat pertama gugur selepas bahan api habis","Peringkat kedua mendorong roket ke halaju orbit","Satelit dilepaskan daripada roket pelancar","Satelit stabil dalam orbit yang ditetapkan"],b:[0,1,2,3,4],u:"Setiap peringkat roket gugur selepas bahan apinya habis, mengurangkan berat roket secara berperingkat."},
 {j:"pilih",t:"Mengapakah roket pelancar dibina berperingkat, bukan sebagai satu unit tunggal?",p:["Menggugurkan peringkat yang kosong mengurangkan berat, membolehkan roket terus memecut","Peringkat berasingan lebih murah untuk dihasilkan dan diselenggara berbanding satu unit besar tunggal","Roket berperingkat lebih mudah dikawal semasa pelancaran berbanding satu unit","Setiap peringkat membawa jenis bahan api yang berbeza warna"],b:0,u:"Roket yang lebih ringan memerlukan kurang daya tujahan untuk terus memecut ke halaju orbit."},
 {j:"pilih",t:"Apakah fungsi utama Stesen Angkasa Antarabangsa (ISS)?",p:["Makmal penyelidikan sains dalam persekitaran mikrograviti","Stesen bahan api untuk satelit yang kehabisan tenaga","Pangkalan pelancaran roket ke planet lain","Menara pemantau cuaca untuk seluruh dunia"],b:0,u:"ISS terutamanya berfungsi sebagai makmal sains yang mengkaji kesan mikrograviti."},
 {j:"pilih",t:"Mengapakah angkasawan di ISS kelihatan terapung tanpa berat?",p:["ISS dan angkasawan sentiasa jatuh bebas mengelilingi Bumi pada kadar yang sama","Graviti Bumi tidak wujud langsung pada ketinggian orbit ISS","ISS dilengkapi mesin khas yang meniadakan graviti sepenuhnya","Angkasawan kehilangan berat badan akibat tekanan udara rendah"],b:0,u:"Graviti masih bertindak di situ; keadaan jatuh bebas berterusanlah yang mewujudkan kesan tanpa berat."},
 {j:"pilih",t:"Orbit pindah Hohmann digunakan untuk:",p:["Memindahkan satelit dari satu orbit ke orbit lain dengan bahan api minimum","Melancarkan satelit terus daripada permukaan Bumi ke angkasa lepas","Mengekalkan satelit kekal pegun pada satu kedudukan sahaja","Memusnahkan satelit lama yang tidak lagi berfungsi"],b:0,u:"Ia ialah kaedah cekap tenaga untuk berpindah orbit menggunakan dua dorongan enjin sahaja."},
 {j:"pilih",t:"Berbanding pemindahan terus, apakah kelemahan utama orbit pindah Hohmann?",p:["Perjalanannya mengambil masa yang lebih lama","Ia memerlukan bahan api yang jauh lebih banyak","Ia hanya boleh digunakan untuk satelit komunikasi","Ia tidak boleh digunakan untuk mencapai orbit GEO"],b:0,u:"Hohmann menjimatkan bahan api dengan pertukaran masa perjalanan yang lebih panjang."},
 {j:"pilih",t:"Apakah risiko utama yang dihadapi roket semasa peringkat pertama gugur di udara?",p:["Serpihan yang jatuh perlu dipastikan tidak membahayakan kawasan berpenduduk","Peringkat kedua akan terus terbakar akibat geseran udara","Satelit akan hilang isyarat sepenuhnya semasa peringkat itu gugur","Bahan api peringkat kedua akan tertumpah keluar serta-merta"],b:0,u:"Zon pelancaran dirancang supaya laluan gugur peringkat roket berada jauh daripada kawasan berpenduduk."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah yang berlaku sejurus SEBELUM satelit dilepaskan daripada roket pelancar?",p:["Peringkat kedua mendorong roket ke halaju orbit","Enjin peringkat pertama menyala di pad pelancar","Satelit stabil dalam orbit yang ditetapkan","Peringkat pertama gugur selepas bahan api habis"],b:0,u:"Mengikut Rajah 2, dorongan peringkat kedua berlaku sejurus sebelum satelit itu dilepaskan."}],
 bos:{j:"pilih",t:"Sebuah syarikat merancang misi membawa peralatan sains ke ISS dengan kos paling rendah. Pilihan kenderaan pelancar paling wajar?",p:["RLV, kerana peringkat roket boleh digunakan semula untuk misi akan datang","ELV, kerana ia lebih ringan berbanding RLV","ELV, kerana ia tidak memerlukan bahan api untuk berlepas","RLV, kerana ia sentiasa lebih laju berbanding ELV"],b:0,u:"Penjimatan kos jangka panjang datang daripada penggunaan semula peringkat roket, iaitu ciri utama RLV."}},

{n:4, tempat:"Penjejakan", sk:"9.1 Menjejak stesen angkasa dan impak teknologi angkasa", lampiran:"halaju",
 kadNama:"Bahan Buangan Angkasa", kadEm:"\u{1F5D1}", kadFakta:"Lebih 30,000 kepingan serpihan angkasa yang boleh dikesan kini mengorbit Bumi, daripada satelit lama hingga serpihan roket.",
 bosKadNama:"Aplikasi Penjejak Satelit", bosKadEm:"\u{1F4F1}", bosKadFakta:"Aplikasi telefon pintar penjejak ISS boleh memberi amaran beberapa minit sebelum stesen itu kelihatan melintasi langit malam sesuatu tempat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, satelit manakah bergerak paling laju, dan pada orbit apakah ia berada?",p:["P, pada orbit LEO","Q, pada orbit MEO","R, pada orbit GEO","Ketiga-tiga satelit bergerak pada halaju yang sama"],b:0,u:"P mempunyai halaju 27,600 km/j, paling tinggi antara ketiga-tiga, pada orbit LEO 400 km."},
 {j:"pilih",t:"Berdasarkan jadual, apakah hubungan antara ketinggian orbit dengan halaju satelit?",p:["Semakin tinggi orbit, semakin rendah halaju satelit","Semakin tinggi orbit, semakin tinggi halaju satelit","Ketinggian orbit tidak mempengaruhi halaju satelit","Halaju satelit hanya bergantung pada jisimnya, bukan ketinggian"],b:0,u:"Jadual menunjukkan halaju menurun daripada 27,600 km/j pada 400 km kepada 11,300 km/j pada 35,786 km."},
 {j:"nombor",t:"Berdasarkan jadual, berapakah beza halaju, dalam km/j, antara satelit P dan satelit R?",b:16300,tol:100,suf:"km/j",u:"27 600 tolak 11 300 bersamaan 16 300 km/j."},
 {j:"pilih",t:"ISS mengorbit pada ketinggian 400 km dengan halaju 27,600 km/j. Jika lilitan orbitnya lebih kurang 41,000 km, anggaran masa bagi satu orbit ialah:",p:["Lebih kurang 90 minit","Lebih kurang 24 jam","Lebih kurang 10 minit","Lebih kurang 12 jam"],b:0,u:"41,000 km dibahagi 27,600 km/j lebih kurang 1.5 jam, iaitu kira-kira 90 minit."},
 {j:"pilih",t:"Jika ISS mengambil lebih kurang 90 minit untuk satu orbit, berapa kalikah lebih kurang ia mengorbit Bumi dalam sehari?",p:["Lebih kurang 16 kali","Lebih kurang 4 kali","Lebih kurang 90 kali","Lebih kurang 1 kali"],b:0,u:"24 jam bersamaan 1,440 minit; 1,440 dibahagi 90 lebih kurang 16 orbit sehari."},
 {j:"banyak",t:"Pilih SEMUA impak perkembangan pesat teknologi angkasa lepas yang dinyatakan dalam DSKP.",p:["Pertambahan bahan buangan di angkasa lepas (space junk)","Peningkatan aktiviti penyelidikan dan pembangunan","Pengurangan kos elektrik isi rumah secara global","Penghapusan sepenuhnya keperluan satelit komunikasi"],b:[0,1],u:"DSKP menekankan dua impak ini; dua pilihan lain tidak berkaitan dan tidak munasabah."},
 {j:"pilih",t:"Mengapakah bahan buangan angkasa (space junk) menjadi kebimbangan utama industri angkasa lepas?",p:["Ia boleh berlanggar dengan satelit aktif dan merosakkannya","Ia menjejaskan kualiti udara yang dihirup manusia di Bumi","Ia menyebabkan suhu Bumi meningkat secara global","Ia menghalang isyarat GPS daripada sampai ke Bumi sepenuhnya"],b:0,u:"Serpihan yang bergerak laju di orbit boleh merosakkan satelit aktif jika berlanggar."},
 {j:"pilih",t:"Kaedah paling praktikal bagi orang awam menjejaki kedudukan ISS di langit malam ialah:",p:["Menggunakan aplikasi telefon pintar penjejak satelit","Memerhati terus menggunakan mata kasar tanpa alat","Mendengar isyarat radio daripada stesen angkasa","Menghubungi terus badan angkasa lepas negara"],b:0,u:"Aplikasi penjejak menggunakan data orbit terkini untuk menunjukkan kedudukan dan masa lintasan ISS."}],
 bos:{j:"pilih",t:"Sebuah agensi angkasa lepas mencadangkan peraturan antarabangsa mewajibkan satelit lama dialihkan keluar orbit selepas tamat tempoh guna. Nilaikan cadangan ini.",p:["Wajar, kerana ia mengurangkan risiko perlanggaran dengan satelit aktif akan datang","Tidak wajar, kerana satelit lama tidak memberi apa-apa kesan kepada satelit baharu","Tidak wajar, kerana kos mengalihkan satelit lebih tinggi daripada risiko yang wujud","Wajar, tetapi hanya untuk satelit pada orbit GEO sahaja, bukan orbit lain"],b:0,u:"Mengurangkan bilangan bahan buangan aktif menurunkan risiko perlanggaran untuk semua satelit akan datang, tidak kira jenis orbit."}},

{n:5, tempat:"GPS", sk:"9.2 Sistem Penentu Sejagat (GPS)", lampiran:"",
 kadNama:"Trilaterasi", kadEm:"\u{1F4CD}", kadFakta:"Penerima GPS memerlukan isyarat daripada sekurang-kurangnya empat satelit serentak untuk menentukan kedudukan tiga dimensi dan membetulkan masa dengan tepat.",
 bosKadNama:"Koordinat DMS dan DD", bosKadEm:"\u{1F30E}", bosKadFakta:"Format koordinat darjah perpuluhan (DD) lebih mudah digunakan dalam aplikasi telefon pintar berbanding format darjah-minit-saat (DMS) yang lebih tradisional.",
 soalan:[
 {j:"pilih",t:"GPS (Global Positioning System) ialah sistem yang berfungsi untuk:",p:["Menentukan kedudukan sesuatu lokasi di Bumi","Meramal cuaca bagi kawasan tertentu di seluruh dunia","Menghantar isyarat televisyen ke seluruh dunia sekali gus","Mengukur suhu permukaan Bumi terus dari angkasa lepas"],b:0,u:"GPS ialah sistem navigasi berasaskan satelit untuk penentuan kedudukan."},
 {j:"pilih",t:"GPS beroperasi menggunakan rangkaian satelit pada orbit:",p:["Orbit sederhana Bumi (MEO)","Orbit rendah Bumi sahaja (LEO)","Orbit geopegun tetap (GEO)","Orbit tinggi Bumi lonjong (HEO)"],b:0,u:"Satelit GPS diletakkan pada MEO, lebih kurang 20,200 km daripada Bumi."},
 {j:"pilih",t:"Koordinat GPS boleh ditulis dalam format darjah, minit, saat (DMS) atau:",p:["Darjah perpuluhan (DD)","Darjah, jam, minit (DJM)","Meter, kilometer, batu (MKB)","Latitud sahaja tanpa longitud"],b:0,u:"DD menulis koordinat sebagai satu nombor perpuluhan, contohnya 3.139456."},
 {j:"pilih",t:"Koordinat 3° 08' 22.04'' N ditulis dalam format DMS. Apakah maksud huruf N di situ?",p:["Latitud di sebelah utara garisan khatulistiwa","Longitud di sebelah utara garisan Greenwich","Nombor rujukan rasmi bagi negara Malaysia","Ketinggian lokasi itu daripada aras laut sekarang"],b:0,u:"N (North/Utara) menunjukkan latitud berada di hemisfera utara."},
 {j:"pilih",t:"Contoh aplikasi harian yang menggunakan koordinat GPS untuk navigasi ialah:",p:["Google Maps dan Waze","Kalkulator saintifik dan jam randik","Kamera dan pemain video","Kalendar dan peti mesej suara"],b:0,u:"Kedua-dua aplikasi ini menterjemah koordinat GPS kepada laluan navigasi untuk pengguna."},
 {j:"pilih",t:"Mengapakah penerima GPS memerlukan isyarat daripada beberapa satelit serentak, bukan satu satelit sahaja?",p:["Isyarat berbilang membolehkan kedudukan tepat dikira melalui trilaterasi","Satu satelit sahaja tidak dapat menghantar sebarang isyarat ke Bumi","Setiap satelit hanya dapat mengesan satu negara sahaja","Isyarat berbilang mengurangkan kos penggunaan aplikasi GPS"],b:0,u:"Trilaterasi memerlukan jarak daripada beberapa satelit untuk menentukan satu titik kedudukan yang tepat."},
 {j:"pilih",t:"Nilaikan kenyataan: \"GPS hanya berguna untuk memandu kenderaan di jalan raya.\"",p:["Tidak tepat, kerana GPS turut digunakan dalam pertanian, penerbangan dan kajian saintifik","Tepat, kerana GPS direka khas hanya untuk kegunaan kenderaan darat","Tidak tepat, kerana GPS hanya digunakan oleh agensi kerajaan sahaja","Tepat, kerana aplikasi GPS awam hanya wujud dalam telefon pintar"],b:0,u:"GPS digunakan secara meluas merentasi banyak bidang, bukan terhad kepada navigasi jalan raya."},
 {j:"pilih",t:"Mengapakah isyarat GPS sukar diterima dengan baik oleh penerima yang berada di dalam bangunan tinggi atau lembah dalam?",p:["Halangan fizikal menyekat isyarat radio daripada satelit sampai kepada penerima","Satelit GPS berhenti menghantar isyarat apabila melalui kawasan berbangunan","Bangunan tinggi menyerap graviti Bumi yang diperlukan isyarat GPS","GPS hanya berfungsi pada waktu siang, bukan sepanjang masa"],b:0,u:"Isyarat radio GPS memerlukan laluan pandangan jelas ke satelit; struktur tinggi atau lembah dalam menyekatnya."}],
 bos:{j:"pilih",t:"Sebuah aplikasi mencadangkan menggunakan hanya dua satelit GPS untuk menjimatkan kuasa bateri telefon. Nilaikan cadangan ini dari segi ketepatan kedudukan.",p:["Tidak wajar, kerana sekurang-kurangnya empat satelit diperlukan untuk kedudukan tiga dimensi yang tepat","Wajar, kerana dua satelit sudah mencukupi untuk sebarang tujuan navigasi","Wajar, kerana bilangan satelit tidak menjejaskan ketepatan kedudukan","Tidak wajar, kerana GPS sepatutnya menggunakan tepat tiga satelit sahaja"],b:0,u:"Kedudukan tiga dimensi berserta pembetulan masa memerlukan sekurang-kurangnya empat satelit serentak."}},

{n:6, tempat:"Reka Cipta", sk:"9.1 / 9.2 Mereka cipta penyelesaian teknologi angkasa",
 kadNama:"Starlink", kadEm:"\u{1F6F0}", kadFakta:"Rangkaian satelit internet seperti Starlink menggunakan beribu-ribu satelit LEO kecil supaya liputan internet laju sampai ke kawasan pedalaman.",
 bosKadNama:"Reka Bentuk Bertanggungjawab", bosKadEm:"\u{267B}", bosKadFakta:"Sesetengah satelit moden direka dengan bahan api simpanan khas untuk membolehkan ia dialihkan keluar orbit secara terkawal selepas tamat tempoh guna.",
 soalan:[
 {j:"pilih",t:"Sebuah kampung pedalaman tiada liputan internet kabel. Penyelesaian berasaskan teknologi angkasa paling sesuai ialah:",p:["Internet satelit LEO seperti Starlink","Menambah lebih banyak satelit GEO komunikasi sedia ada","Membina lebih banyak stesen angkasa antarabangsa","Menggunakan GPS untuk menghantar data internet"],b:0,u:"Satelit LEO memberi kependaman rendah, sesuai untuk internet berkelajuan tinggi ke kawasan terpencil."},
 {j:"pilih",t:"Mengapakah rangkaian internet satelit menggunakan banyak satelit LEO kecil berbanding sedikit satelit GEO besar?",p:["LEO memberi kependaman isyarat lebih rendah kerana hampir dengan Bumi","LEO lebih murah untuk dilancarkan berbanding semua jenis satelit lain","Satelit GEO tidak dapat menghantar sebarang isyarat internet langsung","Satelit LEO tidak memerlukan sebarang tenaga suria untuk beroperasi"],b:0,u:"Jarak yang lebih dekat mengurangkan masa perjalanan isyarat, memberi sambungan internet yang lebih responsif."},
 {j:"pilih",t:"Sebuah syarikat satelit merancang misi tetapi mahu mengelakkan sumbangan kepada masalah bahan buangan angkasa. Ciri reka bentuk paling wajar?",p:["Bahan api simpanan untuk mengalihkan satelit keluar orbit selepas tamat tempoh guna","Bahan binaan yang paling ringan tanpa mengira jangka hayat satelit","Antena yang paling besar untuk memaksimumkan liputan isyarat","Warna badan satelit yang paling terang untuk mudah dikesan"],b:0,u:"Kemampuan mengalihkan satelit keluar orbit secara terkawal mengurangkan sumbangannya kepada bahan buangan angkasa."},
 {j:"pilih",t:"Sebuah sekolah pedalaman mahu memantau kedudukan bas sekolahnya secara masa nyata. Gabungan teknologi paling sesuai ialah:",p:["Penerima GPS pada bas dihubungkan dengan aplikasi peta","Kamera pengawasan sahaja tanpa sebarang sambungan internet","Satelit GEO tunggal tanpa sebarang penerima GPS pada bas","Peta kertas yang dikemas kini oleh pemandu setiap hari sahaja"],b:0,u:"GPS memberi kedudukan tepat, manakala aplikasi peta memaparkannya secara masa nyata kepada pengguna."},
 {j:"pilih",t:"Nilaikan cadangan melancarkan lebih banyak satelit HEO untuk menggantikan sepenuhnya rangkaian GPS berasaskan MEO.",p:["Kurang wajar, kerana MEO direka khas untuk liputan navigasi optimum berbanding HEO","Wajar, kerana HEO lebih hampir dengan Bumi berbanding MEO","Wajar, kerana HEO lebih murah untuk dilancarkan berbanding MEO","Kurang wajar, kerana HEO tidak dapat menghantar sebarang isyarat radio"],b:0,u:"MEO dipilih khusus untuk rangkaian GPS kerana keseimbangan liputan dan bilangan satelit yang diperlukan."},
 {j:"pilih",t:"Apakah pertimbangan kos utama sebelum sebuah negara membina rangkaian satelit sendiri berbanding menyewa daripada syarikat lain?",p:["Kos pelancaran dan penyelenggaraan jangka panjang berbanding faedahnya","Warna satelit yang paling disukai oleh rakyat negara itu sendiri","Bilangan angkasawan yang perlu dihantar bersama setiap satelit itu","Jenis bahasa yang digunakan dalam sistem kawalan satelit tersebut"],b:0,u:"Keputusan sebegini selalunya bergantung kepada perbandingan kos jangka panjang lawan kawalan strategik."},
 {j:"pilih",t:"Sebuah pertubuhan alam sekitar mahu mengesan perubahan kawasan hutan akibat pembalakan haram. Penyelesaian berasaskan teknologi angkasa paling sesuai ialah:",p:["Imej satelit pemerhatian Bumi LEO diambil secara berkala untuk dibandingkan dari semasa ke semasa","Menghantar penerima GPS kepada setiap penduduk kampung berhampiran hutan","Melancarkan lebih banyak satelit GEO komunikasi berhampiran kawasan hutan","Menggunakan hanya peta kertas lama kawasan hutan tanpa sebarang kemas kini"],b:0,u:"Imej satelit berkala membolehkan perubahan fizikal kawasan hutan dikesan dan dibandingkan dari semasa ke semasa."},
 {j:"pilih",t:"Nilaikan cadangan menggunakan hanya data GPS, tanpa imej satelit, untuk memantau hakisan pantai dari tahun ke tahun.",p:["Kurang memadai, kerana GPS memberi kedudukan tetapi tidak menunjukkan perubahan fizikal kawasan","Memadai sepenuhnya, kerana GPS dapat mengukur luas kawasan pantai yang terhakis","Tidak diperlukan langsung, kerana hakisan pantai tidak boleh dipantau menggunakan teknologi angkasa","Memadai, kerana GPS turut merakam imej visual kawasan pantai secara automatik"],b:0,u:"GPS memberi kedudukan titik sahaja; imej satelit diperlukan untuk membandingkan perubahan bentuk fizikal kawasan dari semasa ke semasa."}],
 bos:{j:"buka",
  t:"Kampung awak terletak jauh di pedalaman tanpa liputan internet dan sukar dihubungi semasa kecemasan banjir. Reka satu penyelesaian berasaskan teknologi angkasa lepas untuk kampung awak.",
  arahan:"Nyatakan jenis teknologi angkasa lepas yang digunakan (contohnya jenis orbit satelit atau GPS), cara ia membantu semasa kecemasan, dan satu had atau cabaran kos yang perlu difikirkan.",
  u:"Jawapan TP6 yang kukuh menggabungkan pengetahuan jenis orbit atau GPS dengan keperluan sebenar komuniti serta kesedaran tentang kos dan had teknologi."}}
];

module.exports = {
  id:"t5b9", tingkatan:5, kod:"9.0 Teknologi Angkasa Lepas",
  tajuk:"Laluan Orbit",
  subtajuk:"Sains Ting. 5 · Bab 9 Teknologi Angkasa Lepas",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis-jenis orbit satelit dan istilah asas teknologi angkasa lepas. Langkah seterusnya ialah menerangkan sebab setiap orbit dipilih, bukan sekadar menghafal namanya.",
   2:"{n} memahami konsep apogee, perigee serta perbezaan ELV dan RLV. Perlu lebih banyak latihan mengaitkan konsep ini dengan sebab di sebalik reka bentuk pelancaran satelit.",
   3:"{n} boleh mengaplikasikan pengetahuan tentang proses pelancaran satelit dan fungsi stesen angkasa untuk menerangkan fenomena seperti keadaan mikrograviti di ISS.",
   4:"{n} mampu menganalisis data halaju dan ketinggian orbit satelit, termasuk mengira kekerapan orbit ISS dan mengenal pasti impak perkembangan teknologi angkasa lepas.",
   5:"{n} dapat menilai sistem GPS dan kesesuaian pelbagai jenis orbit bagi tujuan tertentu, disokong bukti dan hujah yang munasabah.",
   6:"{n} berjaya mereka cipta penyelesaian praktikal menggunakan teknologi angkasa lepas untuk masalah sebenar, lengkap dengan pertimbangan kos dan had teknologi. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Teknologi Angkasa Lepas. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ orbit:R_ORBIT, pelancaran:R_PELANCARAN, halaju:T_HALAJU },
  aras:ARAS
};
