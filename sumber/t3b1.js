/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 1.0 Rangsangan dan Gerak Balas.
   Fail ini disunting tangan. Jalankan `node bina.js t3b1` untuk menyemaknya
   dan menghasilkan bank-t3b1.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 46.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai rangsangan dan gerak balas.",
"Memahami rangsangan dan gerak balas serta dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai rangsangan dan gerak balas untuk menerangkan kejadian atau fenomena alam dan melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai rangsangan dan gerak balas dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai rangsangan dan gerak balas dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta menggunakan pengetahuan dan kemahiran sains mengenai rangsangan dan gerak balas dalam konteks penyelesaian masalah atau membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

/* Rajah ditulis sebagai spesifikasi, bukan SVG. bina.js menjananya. */

const R_NEURON = {
  jenis:"aliran", mod:"turun",
  nod:["Dendrit","Badan sel","Akson","?"],
  kapsyen:"Rajah 1 · Arah perjalanan impuls dalam satu neuron.",
  alt:"Rajah aliran menegak: dendrit, badan sel, akson, dan bahagian terakhir bertanda soal"
};

const R_REFLEKS = {
  jenis:"aliran", mod:"turun",
  nod:["Reseptor kulit","Neuron deria","Saraf tunjang","Neuron motor","Otot lengan"],
  kapsyen:"Rajah 1 · Laluan impuls apabila tangan menyentuh objek panas.",
  alt:"Rajah aliran menegak laluan impuls dari reseptor kulit ke otot lengan melalui saraf tunjang, tanpa melalui otak"
};

const T_PEMBARIS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Murid</th>'+
'<th class="n">Cubaan 1 (cm)</th><th class="n">Cubaan 2 (cm)</th><th class="n">Cubaan 3 (cm)</th>'+
'<th class="n">Purata (cm)</th><th>Catatan</th></tr></thead><tbody>'+
'<tr><td>Aiman</td><td class="n">19</td><td class="n">17</td><td class="n">18</td><td class="n">18.0</td><td>Tidur 8 jam</td></tr>'+
'<tr><td>Bella</td><td class="n">13</td><td class="n">12</td><td class="n">11</td><td class="n">12.0</td><td>Tidur 8 jam</td></tr>'+
'<tr><td>Chandran</td><td class="n">25</td><td class="n">27</td><td class="n">26</td><td class="n">26.0</td><td>Tidur 4 jam</td></tr>'+
'<tr><td>Damia</td><td class="n">12</td><td class="n">20</td><td class="n">13</td><td class="n">15.0</td><td>Tidur 8 jam, bunyi bising semasa cubaan 2</td></tr>'+
'</tbody></table></div><p class="qnote">Ujian pembaris jatuh. Jarak pembaris jatuh sebelum ditangkap diukur. Jarak lebih pendek bermakna gerak balas lebih pantas.</p>';

const T_DERIA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Individu</th><th>Aduan</th>'+
'<th class="n">Ujian penglihatan</th><th class="n">Ujian pendengaran</th></tr></thead><tbody>'+
'<tr><td>Puan Salmah, 62</td><td>Perlu menjauhkan surat khabar untuk membaca</td><td class="n">Kanta +2.00 D</td><td class="n">Normal</td></tr>'+
'<tr><td>Rajesh, 15</td><td>Papan putih kabur dari barisan belakang</td><td class="n">Kanta &minus;1.50 D</td><td class="n">Normal</td></tr>'+
'<tr><td>Mei Yin, 17</td><td>Tidak dengar bunyi bernada tinggi</td><td class="n">Normal</td><td class="n">Kehilangan 45 dB</td></tr>'+
'</tbody></table></div><p class="qnote">Kanta bernilai positif ialah kanta cembung. Kanta bernilai negatif ialah kanta cekung. Kehilangan pendengaran melebihi 40 dB dikira sederhana.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Reseptor", sk:"1.1 / 1.2 Sistem saraf dan organ deria", lampiran:"neuron",
 kadNama:"Sel Rod", kadEm:"\u{1F441}", kadFakta:"Retina manusia mengandungi kira-kira 120 juta sel rod, dan ia berfungsi walaupun dalam cahaya yang hampir gelap.",
 bosKadNama:"Neuron", bosKadEm:"\u{1FA7B}", bosKadFakta:"Impuls saraf bergerak sehingga 120 meter sesaat, iaitu lebih laju daripada kereta di lebuh raya.",
 soalan:[
 {j:"pilih",t:"Sistem saraf manusia terdiri daripada:",p:["Otak, saraf tunjang dan saraf periferi","Otak, jantung dan saraf tunjang sahaja","Saraf tunjang, otot rangka dan kelenjar","Otak, organ deria dan saraf motor"],b:0,u:"Otak dan saraf tunjang membentuk sistem saraf pusat, selebihnya saraf periferi."},
 {j:"pilih",t:"Sel penerima cahaya dalam retina yang berfungsi dalam cahaya malap ialah:",p:["Sel rod","Sel kon","Tunas rasa","Sel deria bau"],b:0,u:"Sel rod peka pada cahaya malap tetapi tidak mengesan warna."},
 {j:"pilih",t:"Bahagian mata yang mengawal jumlah cahaya yang masuk ialah:",p:["Iris","Retina","Kornea","Saraf optik"],b:0,u:"Iris mengubah saiz pupil mengikut keamatan cahaya."},
 {j:"susun",t:"Susun laluan impuls dalam tindakan terkawal mengikut urutan yang betul.",p:["Reseptor","Neuron deria","Otak","Neuron motor","Efektor"],b:[0,1,2,3,4],u:"Dalam tindakan terkawal, otak yang membuat keputusan sebelum arahan dihantar ke efektor."},
 {j:"pilih",t:"Otot dan kelenjar yang bertindak balas terhadap arahan saraf dipanggil:",p:["Efektor","Reseptor","Neuron perantara","Rangsangan"],b:0,u:"Reseptor mengesan, efektor bertindak."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bahagian neuron bertanda ? menghantar impuls kepada neuron seterusnya. Bahagian itu ialah:",p:["Hujung akson","Salut mielin yang membalut akson","Nukleus di dalam badan sel neuron","Dendrit yang bercabang halus"],b:0,u:"Impuls bergerak satu arah sahaja: dendrit menerima, akson membawa, hujung akson menghantar."},
 {j:"pilih",t:"Gerak balas tumbuhan terhadap rangsangan cahaya dipanggil:",p:["Fototropisme","Geotropisme","Hidrotropisme","Tigmotropisme"],b:0,u:"Foto bermaksud cahaya, tropisme bermaksud gerak balas berarah."},
 {j:"pilih",t:"Bahagian telinga yang menukar getaran kepada impuls saraf ialah:",p:["Koklea","Gegendang telinga","Salur telinga","Tulang martil"],b:0,u:"Koklea berbentuk lingkaran dan mengandungi sel rambut deria."}],
 bos:{j:"banyak",t:"Pilih SEMUA yang merupakan organ deria manusia.",p:["Mata","Telinga","Hidung","Kulit","Lidah","Peparu","Jantung"],b:[0,1,2,3,4],u:"Peparu dan jantung ialah organ, tetapi ia tidak mengesan rangsangan dari persekitaran."}},

{n:2, tempat:"Saraf Deria", sk:"1.1 / 1.2 Mekanisme gerak balas", lampiran:"refleks",
 kadNama:"Tindakan Refleks", kadEm:"\u{26A1}", kadFakta:"Tindakan refleks tidak melalui otak, jadi ia berlaku dalam masa kurang seperlima saat.",
 bosKadNama:"Gerak Balas Nastik", bosKadEm:"\u{1F33F}", bosKadFakta:"Daun semalu menguncup dalam masa satu hingga dua saat selepas disentuh, tanpa mengira arah sentuhan itu.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah tindakan luar kawal berlaku lebih pantas daripada tindakan terkawal?",p:["Impuls diproses di saraf tunjang tanpa perlu sampai ke otak","Impuls bergerak melalui salur darah yang lebih laju daripada saraf","Otot mengecut dahulu, kemudian barulah impuls dihantar ke otak","Reseptor menghantar impuls terus kepada efektor tanpa sebarang neuron"],b:0,u:"Laluan yang lebih pendek bermakna masa yang lebih singkat."},
 {j:"susun",t:"Susun mekanisme pendengaran mengikut urutan yang betul.",p:["Bunyi masuk melalui salur telinga","Gegendang telinga bergetar","Tulang telinga tengah menguatkan getaran","Koklea menukar getaran kepada impuls","Saraf auditori membawa impuls ke otak"],b:[0,1,2,3,4],u:"Getaran menjadi impuls hanya apabila sampai di koklea."},
 {j:"pilih",t:"Mengapakah manusia mempunyai dua mata di hadapan kepala?",p:["Supaya medan penglihatan bertindih dan memberi persepsi kedalaman","Supaya dapat melihat ke belakang tanpa perlu memusingkan kepala","Supaya satu mata boleh berehat sementara mata yang satu lagi bekerja","Supaya setiap mata dapat mengesan warna berbeza pada masa yang sama"],b:0,u:"Ini dipanggil penglihatan stereoskopik, biasa pada haiwan pemangsa."},
 {j:"pilih",t:"Apakah fungsi kanta mata?",p:["Memfokuskan cahaya supaya imej jatuh tepat pada retina","Menukarkan cahaya kepada impuls saraf untuk dihantar ke otak","Mengawal saiz pupil mengikut keamatan cahaya yang masuk","Melindungi retina daripada habuk dan jangkitan kuman"],b:0,u:"Kanta berubah bentuk untuk memfokus objek dekat dan jauh."},
 {j:"pilih",t:"Mengapakah makanan terasa hambar ketika hidung tersumbat?",p:["Deria rasa bergantung pada deria bau untuk mengecam perisa","Lidah berhenti menghasilkan air liur apabila seseorang demam","Mukus dari hidung menutup semua tunas rasa pada permukaan lidah","Otak mematikan deria rasa untuk menjimatkan tenaga semasa sakit"],b:0,u:"Inilah contoh kepekaan kombinasi organ deria."},
 {j:"pilih",t:"Apakah perbezaan utama antara sel rod dan sel kon?",p:["Rod peka cahaya malap, kon mengesan warna dalam cahaya terang","Rod mengesan warna dalam cahaya terang, kon peka cahaya malap","Rod terletak pada kornea, manakala kon terletak pada retina","Rod mengesan bunyi bernada tinggi, manakala kon mengesan cahaya"],b:0,u:"Sebab itu warna sukar dibezakan dalam bilik yang gelap."},
 {j:"pilih",t:"Apakah titik buta pada mata?",p:["Tempat saraf optik keluar dari retina, tanpa sebarang fotoreseptor","Kawasan retina yang mempunyai sel kon paling banyak dan padat","Bahagian kanta yang menjadi keruh apabila seseorang meningkat usia","Kawasan iris yang tidak berpigmen dan tidak menyerap sebarang cahaya"],b:0,u:"Otak mengisi ruang itu, jadi kita tidak perasan kehadirannya."},
 {j:"pilih",t:"Mengapakah akar tumbuhan tumbuh ke arah bawah?",p:["Akar menunjukkan geotropisme positif, iaitu ke arah graviti","Akar menunjukkan hidrotropisme negatif, iaitu menjauhi air tanah","Berat akar yang semakin bertambah menariknya jatuh ke dalam tanah","Akar menjauhi udara kerana sel akar tidak memerlukan oksigen"],b:0,u:"Pucuk pula geotropisme negatif, tumbuh menjauhi graviti."}],
 bos:{j:"pilih",t:"Apakah yang membezakan gerak balas nastik daripada tropisme?",p:["Gerak balas nastik tidak bergantung pada arah rangsangan","Gerak balas nastik hanya berlaku pada waktu malam tanpa cahaya","Gerak balas nastik berlaku pada akar, tropisme pada pucuk sahaja","Gerak balas nastik berlaku tanpa sebarang rangsangan dari luar"],b:0,u:"Daun semalu menguncup dengan cara yang sama tidak kira dari arah mana ia disentuh."}},

{n:3, tempat:"Saraf Tunjang", sk:"1.2 / 1.3 Gerak balas harian",
 kadNama:"Masa Gerak Balas", kadEm:"\u{23F1}", kadFakta:"Masa gerak balas manusia yang biasa ialah kira-kira 0.25 saat, dan ia memanjang apabila penat atau mengantuk.",
 bosKadNama:"Arka Refleks", bosKadEm:"\u{1F504}", bosKadFakta:"Dalam arka refleks, neuron perantara di saraf tunjang menyambung neuron deria terus kepada neuron motor.",
 soalan:[
 {j:"pilih",t:"Tangan Farah menyentuh cerek panas dan terus ditarik, tetapi dia hanya rasa sakit sesaat kemudian. Mengapa?",p:["Refleks melalui saraf tunjang berlaku dahulu, isyarat sakit sampai ke otak kemudian","Kulit tangan tiada reseptor sakit, jadi otak hanya meneka rasa sakit selepas itu","Otak sengaja melambatkan rasa sakit supaya Farah tidak panik dan terjatuh","Otot lengan bergerak sendiri tanpa impuls, dan otak hanya diberitahu kemudian"],b:0,u:"Melindungi tisu lebih penting daripada menyedari kesakitan, jadi refleks didahulukan."},
 {j:"nombor",t:"Dalam ujian pembaris jatuh, Aiman menangkap pembaris pada 18 cm dan Bella pada 12 cm. Berapa cm lebih pendek jarak Bella?",b:6,tol:0.5,suf:"cm",u:"18 tolak 12 bersamaan 6 cm. Jarak lebih pendek bermakna gerak balas lebih pantas."},
 {j:"pilih",t:"Mengapakah pemandu dinasihatkan berhenti berehat apabila mengantuk?",p:["Masa gerak balas memanjang, jadi kereta bergerak lebih jauh sebelum brek","Mata yang mengantuk tidak dapat membezakan warna lampu isyarat merah","Saraf tunjang berhenti berfungsi sepenuhnya apabila seseorang mengantuk","Otot kaki menjadi terlalu lemah untuk menekan pedal brek dengan kuat"],b:0,u:"Setiap sepersepuluh saat kelewatan bermakna beberapa meter tambahan pada kelajuan tinggi."},
 {j:"pilih",t:"Zaki nampak jelas buku di tangannya tetapi papan putih kelihatan kabur. Apakah keadaan matanya dan pembetulannya?",p:["Rabun jauh, dibetulkan dengan kanta cekung","Rabun dekat, dibetulkan dengan kanta cembung","Rabun jauh, dibetulkan dengan kanta cembung","Rabun dekat, dibetulkan dengan kanta cekung"],b:0,u:"Pada rabun jauh, imej objek jauh terbentuk di hadapan retina."},
 {j:"pilih",t:"Mengapakah lampu panggung wayang diredupkan secara perlahan-lahan, bukan terus dipadamkan?",p:["Memberi masa pupil mengembang dan sel rod menyesuaikan diri","Memberi masa pupil mengecil supaya mata tidak silau apabila gelap","Memberi masa sel kon berehat sebelum filem yang terang bermula","Mengelakkan mentol rosak kerana arus elektrik berubah mendadak"],b:0,u:"Penyesuaian gelap mengambil beberapa minit untuk sempurna."},
 {j:"pilih",t:"Anak pokok kacang di tepi tingkap membengkok ke arah tingkap. Apakah yang berlaku?",p:["Pucuk menunjukkan fototropisme positif ke arah cahaya","Pucuk menunjukkan geotropisme positif ke arah tingkap","Angin dari tingkap menolak batang lembut itu sedikit demi sedikit","Pokok itu bergerak ke arah udara yang lebih kaya dengan oksigen"],b:0,u:"Sel pada sisi yang gelap memanjang lebih cepat, jadi batang membengkok ke arah cahaya."},
 {j:"pilih",t:"Sulur pokok kacang panjang melilit pada julur buluh. Gerak balas ini dipanggil:",p:["Tigmotropisme","Fototropisme","Hidrotropisme","Geotropisme"],b:0,u:"Tigmo bermaksud sentuhan."},
 {j:"pilih",t:"Mengapakah orang berumur lewat empat puluhan mula memegang surat khabar lebih jauh untuk membaca?",p:["Kanta mata hilang keanjalan, jadi sukar memfokus objek dekat","Retina menjadi semakin nipis, jadi imej dekat tidak dapat dikesan","Pupil tidak lagi dapat mengecil, jadi terlalu banyak cahaya masuk","Bola mata memanjang dengan usia, jadi imej jatuh di hadapan retina"],b:0,u:"Keadaan ini ialah rabun dekat akibat usia dan dibetulkan dengan kanta cembung."}],
 bos:{j:"susun",t:"Susun tindakan refleks menarik tangan daripada objek panas mengikut urutan yang betul.",p:["Reseptor haba pada kulit mengesan panas","Neuron deria membawa impuls ke saraf tunjang","Neuron perantara dalam saraf tunjang menyambung impuls","Neuron motor membawa impuls ke otot lengan","Otot lengan mengecut dan tangan ditarik"],b:[0,1,2,3,4],u:"Otak tidak terlibat dalam laluan ini, dan itulah sebabnya ia pantas."}},

{n:4, tempat:"Otak", sk:"1.2 Menganalisis data gerak balas", lampiran:"pembaris",
 kadNama:"Ralat Rawak", kadEm:"\u{1F4CF}", kadFakta:"Ulangan tiga kali ialah amalan minimum dalam kerja amali sekolah, kerana satu bacaan tidak dapat membezakan prestasi sebenar daripada nasib.",
 bosKadNama:"Reka Bentuk Eksperimen", bosKadEm:"\u{1F9EA}", bosKadFakta:"Kesimpulan hanya sekuat reka bentuk eksperimennya, bukan sekuat keyakinan orang yang membuatnya.",
 soalan:[
 {j:"banyak",t:"Berdasarkan jadual, pilih SEMUA kesimpulan yang disokong oleh data.",p:["Bella mempunyai purata jarak paling pendek antara empat murid","Chandran mempunyai purata jarak paling panjang","Purata Damia lebih pendek daripada purata Aiman","Murid lelaki bergerak balas lebih pantas daripada murid perempuan","Semua murid bertambah pantas pada setiap cubaan berikutnya"],b:[0,1,2],u:"Jantina tidak direkod sebagai pemboleh ubah, dan bacaan Aiman serta Damia tidak menurun secara tetap."},
 {j:"pilih",t:"Mengapakah setiap murid diuji sebanyak tiga kali dan bukan sekali sahaja?",p:["Mengurangkan kesan ralat rawak dan mengesan bacaan yang ganjil","Memberi murid peluang memilih bacaan terbaik untuk direkodkan","Membiasakan murid dengan pembaris supaya bacaan ketiga paling tepat","Memastikan purata sentiasa lebih rendah daripada bacaan pertama"],b:0,u:"Ulangan mendedahkan bacaan ganjil yang satu ujian tunggal akan sembunyikan."},
 {j:"pilih",t:"Berdasarkan catatan dalam jadual, cubaan kedua Damia ialah 20 cm sedangkan dua cubaan lain 12 cm dan 13 cm. Apakah tafsiran terbaik?",p:["Damia terganggu oleh bunyi bising, jadi bacaan itu bacaan ganjil","Damia letih selepas cubaan pertama, kemudian pulih semula pada cubaan ketiga","Damia sebenarnya paling perlahan, dan dua cubaan lain hanyalah nasib baik","Damia sengaja melambatkan tangan pada cubaan kedua untuk menguji alat itu"],b:0,u:"Catatan dalam jadual memberi sebab yang munasabah untuk bacaan tersasar itu."},
 {j:"nombor",t:"Berapakah beza purata, dalam cm, antara murid yang paling pantas dan yang paling perlahan?",b:14,tol:0.5,suf:"cm",u:"26.0 bagi Chandran tolak 12.0 bagi Bella bersamaan 14.0 cm."},
 {j:"pilih",t:"Pemboleh ubah manakah yang WAJIB dimalarkan supaya perbandingan ini adil?",p:["Jenis pembaris dan kedudukan tangan semasa menangkap","Jarak pembaris jatuh sebelum ditangkap oleh murid","Bilangan jam tidur setiap murid pada malam sebelumnya","Warna baju yang dipakai oleh murid semasa ujian"],b:0,u:"Jarak jatuh ialah pemboleh ubah bergerak balas dan jam tidur ialah pemboleh ubah dimanipulasi. Kedua-duanya memang sepatutnya berubah."},
 {j:"pilih",t:"Mengapakah data Chandran belum cukup untuk membuktikan kurang tidur melambatkan gerak balas?",p:["Hanya seorang murid kurang tidur, jadi sampel terlalu kecil","Purata 26.0 cm masih berada dalam julat masa gerak balas normal","Ujian pembaris jatuh tidak sesuai untuk mengukur kesan kurang tidur","Chandran diuji paling akhir, jadi dia sudah letih menunggu giliran"],b:0,u:"Satu kes menunjukkan corak yang menarik, tetapi ia belum menjadi bukti."},
 {j:"pilih",t:"Seorang pesakit tidak dapat merasa sentuhan pada kakinya, tetapi otot kakinya masih mengecut apabila dirangsang terus. Bahagian manakah yang rosak?",p:["Neuron deria yang membawa impuls dari kulit ke saraf tunjang","Neuron motor yang membawa impuls dari saraf tunjang ke otot","Otot kaki yang sepatutnya mengecut apabila menerima impuls","Reseptor cahaya pada retina yang memproses maklumat sentuhan"],b:0,u:"Efektor masih berfungsi, jadi kerosakan berada pada laluan masuk, bukan laluan keluar."},
 {j:"pilih",t:"Pada mata rabun jauh, di manakah imej objek jauh terbentuk?",p:["Di hadapan retina","Tepat pada retina","Di belakang retina","Pada kornea"],b:0,u:"Kanta cekung mencapahkan cahaya sedikit supaya fokus jatuh lebih ke belakang, tepat pada retina."}],
 bos:{j:"banyak",t:"Pilih SEMUA penambahbaikan yang akan menguatkan kesimpulan eksperimen ini.",p:["Tambah bilangan murid dalam setiap kumpulan tidur","Padankan umur murid antara kedua-dua kumpulan","Jalankan semua ujian dalam bilik yang senyap dan sama terang","Ambil hanya bacaan terbaik setiap murid dan buang yang lain","Gunakan pembaris yang lebih panjang supaya jarak nampak lebih besar"],b:[0,1,2],u:"Membuang bacaan yang tidak disukai memburukkan data, dan pembaris lebih panjang tidak mengubah apa-apa yang diukur."}},

{n:5, tempat:"Efektor", sk:"1.2 / 1.3 Menilai dan membuat keputusan", lampiran:"deria",
 kadNama:"Kanta Cekung", kadEm:"\u{1F453}", kadFakta:"Kanta cekung mencapahkan cahaya sebelum ia masuk ke mata, dan itulah cara rabun jauh dibetulkan.",
 bosKadNama:"Saringan Bersasar", bosKadEm:"\u{1F50D}", bosKadFakta:"Saringan yang disasarkan pada kumpulan berisiko menjumpai lebih banyak kes daripada saringan rawak dengan kos yang sama.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, siapakah yang memerlukan kanta cekung, dan mengapa?",p:["Rajesh, kerana imej objek jauh terbentuk di hadapan retina matanya","Puan Salmah, kerana kanta matanya kurang anjal dan perlu dicapahkan","Rajesh, kerana imej objek jauh terbentuk di belakang retinanya","Puan Salmah, kerana imej objek dekat terbentuk di hadapan retina"],b:0,u:"Nilai kanta Rajesh negatif, iaitu kanta cekung. Rabun jauh berlaku apabila imej objek jauh jatuh di hadapan retina, dan kanta cekung mencapahkan cahaya supaya imej itu jatuh tepat pada retina."},
 {j:"banyak",t:"Pilih SEMUA bukti daripada jadual yang menyokong bahawa Puan Salmah sukar melihat objek dekat.",p:["Beliau perlu menjauhkan surat khabar untuk membaca","Kanta yang diperlukan bernilai positif","Umurnya dalam julat biasa bagi rabun dekat akibat usia","Kanta bernilai positif bermaksud kanta cekung","Beliau mengadu papan putih kelihatan kabur"],b:[0,1,2],u:"Kanta bernilai positif ialah kanta cembung, bukan cekung. Aduan papan putih kabur itu milik Rajesh."},
 {j:"pilih",t:"Guru mencadangkan Mei Yin hanya duduk di hadapan kelas tanpa pemeriksaan lanjut. Nilaikan cadangan itu berdasarkan jadual.",p:["Kurang wajar, kerana kehilangan melebihi 40 dB dikira sederhana","Wajar, kerana bunyi nada tinggi tidak penting untuk memahami percakapan","Wajar, kerana 45 dB masih di bawah had sederhana dalam jadual","Kurang wajar, kerana Mei Yin juga memerlukan kanta cembung"],b:0,u:"Jadual menyatakan kehilangan melebihi 40 dB dikira sederhana. Bunyi konsonan seperti s dan f bernada tinggi, jadi kehilangan ini menjejaskan pemahaman percakapan dan perlu dirujuk."},
 {j:"pilih",t:"Seorang murid meletakkan SATU pasu anak pokok di tepi tingkap. Pucuknya membengkok ke arah tingkap, lalu dia menyimpulkan cahaya menjadi puncanya. Nilaikan kesimpulan itu.",p:["Belum kukuh, kerana tiada pasu kawalan yang menerima cahaya dari semua arah","Kukuh, kerana pucuk memang menunjukkan fototropisme positif","Belum kukuh, kerana pucuk sepatutnya menunjukkan geotropisme positif","Kukuh, kerana pasu itu disiram dengan jumlah air yang sama setiap hari"],b:0,u:"Tanpa pasu kawalan, pembengkokan itu mungkin disebabkan angin atau haba dari tingkap. Pucuk sebenarnya menunjukkan geotropisme negatif."},
 {j:"pilih",t:"Seorang pemandu bas sekolah berumur 50 tahun gagal ujian penglihatan dekat tetapi lulus ujian penglihatan jauh. Keputusan paling wajar?",p:["Beri kanta cembung untuk membaca sahaja","Larang dia memandu kerana matanya tidak lagi normal","Beri kanta cekung supaya dia dapat membaca dengan jelas","Beri kanta cembung dan wajibkan dipakai semasa memandu"],b:0,u:"Rabun dekat menjejaskan penglihatan dekat sahaja. Kanta cembung untuk membaca akan mengaburkan objek jauh jika dipakai semasa memandu."},
 {j:"pilih",t:"Nilaikan dakwaan bahawa memakai cermin mata menjadikan mata semakin lemah.",p:["Tidak berasas, kerana kanta hanya membetulkan fokus dan tidak mengubah bola mata","Berasas, kerana otot mata menjadi lemah apabila tidak perlu memfokus sendiri","Berasas bagi kanta cekung, kerana cahaya yang dicapahkan merosakkan retina","Tidak berasas, kerana rabun jauh berhenti bertambah selepas umur 12 tahun"],b:0,u:"Rabun jauh memang boleh bertambah semasa remaja walaupun tanpa cermin mata, dan itulah yang sering disalah anggap sebagai kesan cermin mata."},
 {j:"pilih",t:"Seorang atlet pecut mahu memendekkan masa tindak balasnya terhadap bunyi pistol permulaan. Cadangan paling berasaskan sains?",p:["Berlatih bermula berulang kali mengikut bunyi pistol yang sebenar","Latih supaya dia bertindak secara refleks melalui saraf tunjang sahaja","Minum minuman bertenaga supaya impuls saraf bergerak lebih laju","Tutup sebelah telinga supaya bunyi lebih tertumpu ke dalam koklea"],b:0,u:"Bermula selepas bunyi pistol ialah tindakan terkawal melalui otak, bukan refleks. Latihan berulang memendekkan masa otak membuat keputusan."},
 {j:"pilih",t:"Data manakah paling kukuh untuk menguji sama ada masa skrin menjejaskan penglihatan remaja?",p:["Susulan bertahun-tahun ke atas ramai remaja dengan ujian mata yang berkala","Tinjauan ke atas 1000 remaja tentang sama ada mata mereka terasa penat","Ujian mata sekali sahaja ke atas 30 remaja yang banyak menggunakan telefon","Pengalaman seorang pakar mata terhadap pesakit yang datang ke kliniknya"],b:0,u:"Rasa penat bukan ukuran penglihatan, 30 remaja tanpa kumpulan perbandingan terlalu sedikit, dan pesakit klinik bukan wakil semua remaja."}],
 bos:{j:"pilih",t:"Klinik bergerak hanya dapat menyaring 40 murid daripada 800. Kriteria pemilihan paling wajar?",p:["Murid yang mengadu penglihatan kabur atau prestasinya jatuh mendadak","Empat puluh nama yang dipilih secara rawak daripada senarai sekolah","Murid tingkatan satu sahaja kerana rabun jauh bermula pada usia muda","Murid yang sudah memakai cermin mata kerana mereka pasti bermasalah"],b:0,u:"Saringan rawak sesuai untuk kajian, tetapi dengan tempat terhad, kumpulan berisiko menjumpai lebih banyak kes. Murid bercermin mata sudah pun dirawat."}},

{n:6, tempat:"Tindakan", sk:"1.2 / 1.4 Mereka cipta bantuan deria",
 kadNama:"Reka Bentuk Inklusif", kadEm:"\u{1F91D}", kadFakta:"Reka bentuk yang membantu seorang murid kurang pendengaran selalunya memudahkan seluruh kelas, contohnya guru yang sentiasa menghadap kelas semasa bercakap.",
 bosKadNama:"Deria Haiwan", bosKadEm:"\u{1F99C}", bosKadFakta:"Ikan mengesan getaran air melalui garis lateral di sisi badannya, iaitu deria yang manusia langsung tidak ada.",
 soalan:[
 {j:"pilih",t:"Awak mereka alat amaran supaya rakan yang pekak tahu bila guru memanggilnya. Isyarat manakah paling berkesan?",p:["Getaran pada pergelangan tangan atau lampu berkelip dalam pandangannya","Bunyi siren yang sangat kuat berhampiran telinganya","Bunyi bernada tinggi kerana ia lebih mudah dikesan oleh koklea","Mesej suara yang diulang dua kali melalui pembesar suara"],b:0,u:"Alat bantuan deria yang baik menggunakan organ deria lain yang masih berfungsi, iaitu kulit dan mata."},
 {j:"pilih",t:"Alat bergetar rekaan awak diletakkan pada hujung jari. Mengapakah lokasi itu sesuai?",p:["Hujung jari kaya dengan reseptor sentuhan","Hujung jari paling hampir dengan saraf tunjang","Kulit hujung jari paling tebal, jadi getaran tidak menyakitkan","Hujung jari tiada reseptor sakit, jadi getaran terasa selesa"],b:0,u:"Kepekaan kulit bergantung pada bilangan reseptor. Hujung jari dan bibir antara bahagian paling peka."},
 {j:"pilih",t:"Rakan sekelas awak buta warna merah dan hijau. Pembetulan paling wajar untuk carta dalam poster projek kelas?",p:["Tambah label teks dan corak berbeza, bukan bergantung pada warna sahaja","Tukar merah kepada oren kerana sel kon mengesan oren dengan lebih baik","Terangkan lagi warna merah dan hijau supaya perbezaannya lebih jelas","Gunakan lebih banyak rona hijau supaya dia hanya perlu membaca satu warna"],b:0,u:"Buta warna merah-hijau berpunca daripada sel kon yang tidak berfungsi dengan baik, jadi oren dan rona hijau yang berlainan juga sukar dibezakan."},
 {j:"pilih",t:"Awak mahu membuktikan alat amaran itu benar-benar membantu rakan awak. Cara paling meyakinkan?",p:["Kira kekerapan dia terlepas arahan sebelum dan selepas alat digunakan","Tanya rakan-rakan sekelas sama ada mereka rasa alat itu berguna","Uji alat itu pada murid yang pendengarannya normal","Ukur kekuatan getaran alat itu menggunakan aplikasi telefon"],b:0,u:"Bukti terbaik datang daripada pengguna sebenar, diukur sebelum dan selepas. Getaran yang kuat belum tentu bermakna arahan tidak terlepas."},
 {j:"pilih",t:"Awak mereka cermin mata bacaan murah untuk warga emas di kampung. Kanta manakah perlu digunakan?",p:["Kanta cembung, kerana ia menumpukan cahaya sebelum masuk ke mata","Kanta cekung, kerana ia membesarkan tulisan yang dekat","Kanta cembung, kerana ia mencapahkan cahaya ke arah retina","Kaca rata berwarna, kerana ia mengurangkan silau semasa membaca"],b:0,u:"Rabun dekat pada warga emas berlaku apabila kanta mata hilang keanjalan. Kanta cembung menumpukan cahaya sebelum ia sampai ke mata."},
 {j:"pilih",t:"Awak mereka stesen ujian pembaris jatuh untuk hari sukan. Pengubahsuaian manakah menjadikan bacaan lebih adil?",p:["Pembaris dilepaskan tanpa amaran dan jari bermula pada kedudukan sama","Murid dibenarkan melihat tangan orang yang melepaskan pembaris","Setiap murid menggunakan pembaris yang berlainan panjangnya","Hanya bacaan terbaik daripada lima cubaan direkodkan"],b:0,u:"Amaran dan isyarat tangan membolehkan murid meneka, bukan bertindak balas. Bacaan terbaik sahaja menyembunyikan ralat rawak."},
 {j:"pilih",t:"Rakan awak pekak pada telinga kanan sahaja. Kedudukan duduk paling sesuai dalam kelas?",p:["Di barisan hadapan, dengan telinga kiri menghadap guru","Di hadapan, dengan telinga kanan menghadap guru","Di belakang, supaya bunyi sempat bergema dan menjadi lebih kuat","Di tepi tingkap, supaya bunyi dari luar menutup bunyi bising"],b:0,u:"Telinga yang masih berfungsi patut menerima bunyi secara terus. Gema dan bunyi luar menyukarkan lagi pendengaran."},
 {j:"pilih",t:"Awak mahu murid lain menerima alat itu tanpa membuat rakan awak berasa terasing. Pendekatan paling wajar?",p:["Reka supaya kelihatan biasa dan berguna kepada sesiapa dalam kelas","Letakkan nama rakan awak pada alat itu supaya tidak tertukar","Terangkan keadaan rakan awak kepada seluruh sekolah terlebih dahulu","Hanya keluarkan alat itu apabila guru memberi arahan penting"],b:0,u:"Reka cipta yang mengambil kira nilai sosial menghormati maruah penggunanya, bukan hanya fungsinya."}],
 bos:{j:"buka",
  t:"Seorang rakan sekelas awak kurang pendengaran pada sebelah telinga dan kerap terlepas arahan guru, terutamanya semasa guru menulis di papan sambil bercakap. Reka satu penyelesaian yang kelas awak benar-benar boleh laksanakan.",
  arahan:"Terangkan cara ia berfungsi, bahan atau alat yang perlu, siapa yang akan menjalankannya, dan bagaimana awak mengambil kira kos serta perasaan rakan awak supaya dia tidak berasa terasing.",
  u:"Jawapan TP6 yang kukuh menggabungkan sains deria, kos sebenar, dan penerimaan sosial dalam kelas."}}
];

module.exports = {
  id:"t3b1", tingkatan:3, kod:"1.0 Rangsangan dan Gerak Balas",
  tajuk:"Laluan Impuls",
  subtajuk:"Sains Ting. 3 · Bab 1 Rangsangan & Gerak Balas",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali struktur sistem saraf dan organ deria manusia serta istilah asas bab ini. Langkah seterusnya ialah menerangkan bagaimana impuls bergerak, bukan sekadar menamakan bahagiannya.",
   2:"{n} memahami laluan impuls dalam tindakan terkawal dan luar kawal serta mekanisme penglihatan dan pendengaran. Perlu lebih banyak latihan mengaitkan konsep ini dengan kejadian harian sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan pengetahuan gerak balas untuk menerangkan fenomena harian seperti tindakan refleks dan pembetulan rabun menggunakan kanta. Galakkan mentafsir data eksperimen masa gerak balas.",
   4:"{n} mampu menganalisis data masa gerak balas, mengesan bacaan ganjil dan mengenal pasti bahagian sistem saraf yang terjejas. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai kesahan eksperimen dan memilih tindakan yang wajar bagi individu yang mengalami kecacatan deria, disokong bukti daripada data. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta penyelesaian yang praktikal untuk membantu rakan yang mengalami masalah deria, lengkap dengan pertimbangan kos dan penerimaan sosial dalam kelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Rangsangan dan Gerak Balas. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ neuron:R_NEURON, refleks:R_REFLEKS, pembaris:T_PEMBARIS, deria:T_DERIA },
  aras:ARAS
};
