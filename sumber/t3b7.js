/* Sumber kandungan — Sains KSSM Tingkatan 3, Bidang 7.0 Tenaga dan Kuasa.
   Jalankan `node bina.js t3b7` untuk menyemak dan menghasilkan bank-t3b7.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 3, Bahagian Pembangunan Kurikulum, April 2017, muka 82.

   g diambil sebagai 10 N/kg seperti dalam DSKP.

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya. */

const SPI = [
"Mengingat kembali pengetahuan dan kemahiran sains mengenai tenaga dan kuasa.",
"Memahami tenaga dan kuasa dan dapat menjelaskan kefahaman tersebut.",
"Mengaplikasikan pengetahuan mengenai tenaga dan kuasa dan dapat melaksanakan tugasan mudah.",
"Menganalisis pengetahuan mengenai tenaga dan kuasa dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
"Menilai pengetahuan mengenai tenaga dan kuasa dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
"Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai tenaga dan kuasa dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baru secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."];

/* ---------- lampiran ---------- */

const R_ANGKAT = {
  "jenis": "daya",
  "mod": "objek",
  "objek": "Peti",
  "daya": [
    {
      "arah": "atas",
      "label": "Daya angkat 50 N",
      "warna": "ungu"
    },
    {
      "arah": "bawah",
      "label": "Berat 50 N",
      "warna": "merah"
    }
  ],
  "kapsyen": "Rajah 1 · Peti diangkat dengan daya 50 N sejauh 2 m ke atas.",
  "alt": "Rajah daya: sebuah peti dengan anak panah daya angkat 50 newton ke atas dan anak panah berat 50 newton ke bawah"
};

const R_KINETIK = {
  "jenis": "graf",
  "titik": true,
  "petunjuk": true,
  "grid": 4,
  "yMin": 0,
  "yMaks": 200,
  "x": [
    0,
    5,
    10,
    15,
    20
  ],
  "siri": [
    {
      "label": "Tenaga kinetik (kJ)",
      "warna": "ungu",
      "y": [
        0,
        12.5,
        50,
        112.5,
        200
      ]
    }
  ],
  "xLabel": "Laju kereta (m/s)",
  "kapsyen": "Rajah 1 · Tenaga kinetik sebuah kereta berjisim 1000 kg pada laju berbeza.",
  "alt": "Graf lengkung menaik: tenaga kinetik 12.5 kilojoule pada 5 meter sesaat dan 50 kilojoule pada 10 meter sesaat, jadi laju berganda memberi tenaga empat kali ganda"
};

const T_TANGGA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Murid</th>'+
'<th class="n">Jisim (kg)</th><th class="n">Tinggi tangga (m)</th><th class="n">Masa (s)</th></tr></thead><tbody>'+
'<tr><td>Aina</td><td class="n">50</td><td class="n">3</td><td class="n">10</td></tr>'+
'<tr><td>Boon</td><td class="n">60</td><td class="n">3</td><td class="n">12</td></tr>'+
'<tr><td>Chandran</td><td class="n">45</td><td class="n">3</td><td class="n">6</td></tr>'+
'</tbody></table></div><p class="qnote">Kerja = berat &times; tinggi = mgh. Kuasa = kerja &divide; masa. Ambil g = 10 N/kg.</p>';

const T_TREK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Titik pada trek</th>'+
'<th class="n">Tinggi dari tanah (m)</th><th class="n">Laju (m/s)</th></tr></thead><tbody>'+
'<tr><td>A (bermula pegun)</td><td class="n">20</td><td class="n">0</td></tr>'+
'<tr><td>B</td><td class="n">0</td><td class="n">?</td></tr>'+
'<tr><td>C</td><td class="n">15</td><td class="n">?</td></tr>'+
'<tr><td>D</td><td class="n">5</td><td class="n">?</td></tr>'+
'</tbody></table></div><p class="qnote">Kereta roller coaster berjisim 500 kg. Anggap tiada geseran dan g = 10 N/kg. Jumlah tenaga keupayaan graviti dan tenaga kinetik kekal sama di setiap titik.</p>';

const T_MOTOR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Motor</th>'+
'<th class="n">Masa mengangkat (s)</th><th class="n">Tenaga elektrik digunakan (J)</th><th class="n">Harga (RM)</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">40</td><td class="n">25 000</td><td class="n">800</td></tr>'+
'<tr><td>Q</td><td class="n">25</td><td class="n">40 000</td><td class="n">600</td></tr>'+
'<tr><td>R</td><td class="n">20</td><td class="n">26 000</td><td class="n">1500</td></tr>'+
'</tbody></table></div><p class="qnote">Setiap motor mengangkat beban 200 kg setinggi 10 m, iaitu kerja berguna sebanyak 20 000 J. Kecekapan = kerja berguna &divide; tenaga digunakan &times; 100%. Data rekaan.</p>';

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Kerja", sk:"7.1 Kerja, tenaga dan kuasa", lampiran:"dayaangkat",
 kadNama:"Joule", kadEm:"\u{2699}", kadFakta:"Satu joule ialah kerja yang dilakukan apabila daya 1 N menggerakkan objek sejauh 1 m dalam arah daya.",
 bosKadNama:"Keabadian Tenaga", bosKadEm:"\u{267E}", bosKadFakta:"Tenaga tidak dicipta atau dimusnahkan. Ia hanya bertukar daripada satu bentuk kepada bentuk lain.",
 soalan:[
 {j:"pilih",t:"Unit S.I. bagi kerja ialah:",p:["Joule (J)","Watt (W)","Newton (N)","Pascal (Pa)"],b:0,u:"1 N m = 1 J."},
 {j:"pilih",t:"Unit S.I. bagi kuasa ialah:",p:["Watt (W)","Joule (J)","Newton (N)","Meter (m)"],b:0,u:"1 J/s = 1 W."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kerja ditakrifkan sebagai:",p:["Hasil darab daya dan sesaran dalam arah daya","Hasil bahagi daya dengan masa yang diambil oleh objek","Hasil darab jisim dan pecutan graviti","Kadar tenaga ditukar kepada haba"],b:0,u:"W = F × s."},
 {j:"pilih",t:"Kuasa ditakrifkan sebagai:",p:["Kadar melakukan kerja","Jumlah kerja yang dilakukan","Daya yang dikenakan pada objek","Tenaga yang disimpan dalam spring"],b:0,u:"Kuasa = kerja ÷ masa."},
 {j:"pilih",t:"Tenaga yang dimiliki oleh objek yang sedang bergerak dipanggil:",p:["Tenaga kinetik","Tenaga keupayaan graviti","Tenaga keupayaan kenyal","Tenaga kimia"],b:0,u:"Tenaga kinetik = ½mv²."},
 {j:"pilih",t:"Tenaga yang disimpan dalam spring yang dimampatkan dipanggil:",p:["Tenaga keupayaan kenyal","Tenaga kinetik","Tenaga keupayaan graviti","Tenaga bunyi"],b:0,u:"Spring yang dimampat atau diregang menyimpan tenaga keupayaan kenyal."},
 {j:"pilih",t:"Rumus tenaga keupayaan graviti ialah:",p:["mgh","½mv²","Fs","½Fx"],b:0,u:"m ialah jisim, g pecutan graviti, dan h ketinggian."},
 {j:"banyak",t:"Pilih SEMUA situasi di mana kerja dilakukan dari segi sains.",p:["Menolak troli sejauh 5 m","Mengangkat beg dari lantai ke meja","Menarik baldi air ke atas perigi","Menolak dinding batu yang tidak bergerak","Memegang buku pegun selama 10 minit"],b:[0,1,2],u:"Kerja hanya dilakukan apabila objek bergerak dalam arah daya."}],
 bos:{j:"pilih",t:"Prinsip Keabadian Tenaga menyatakan bahawa tenaga:",p:["Tidak dicipta atau dimusnahkan, hanya bertukar bentuk","Boleh dicipta apabila objek bergerak dengan sangat laju","Akan musnah sepenuhnya apabila objek berhenti","Hanya wujud dalam bentuk tenaga kinetik"],b:0,u:"Tenaga yang kelihatan hilang sebenarnya bertukar kepada bentuk lain seperti haba dan bunyi."}},

{n:2, tempat:"Buaian", sk:"7.2 / 7.3 Tenaga keupayaan, kinetik dan keabadian", lampiran:"grafkinetik",
 kadNama:"Bandul", kadEm:"\u{1F570}", kadFakta:"Bandul yang berayun sentiasa menukar tenaga keupayaan graviti kepada tenaga kinetik dan sebaliknya.",
 bosKadNama:"Lastik", bosKadEm:"\u{1F3AF}", bosKadFakta:"Lastik menyimpan tenaga keupayaan kenyal apabila getahnya diregang.",
 soalan:[
 {j:"pilih",t:"Seorang murid menolak dinding sehingga letih. Mengapakah dia tidak melakukan kerja dari segi sains?",p:["Dinding tidak bergerak, jadi tiada sesaran dalam arah daya","Murid itu tidak menggunakan sebarang tenaga semasa menolak","Daya yang dikenakan pada dinding sentiasa sifar","Dinding melakukan kerja ke atas murid itu"],b:0,u:"Tenaga badan digunakan, tetapi kerja ke atas dinding ialah sifar kerana sesarannya sifar."},
 {j:"pilih",t:"Semasa buaian berayun turun dari titik tertinggi, perubahan tenaga yang berlaku ialah:",p:["Tenaga keupayaan graviti kepada tenaga kinetik","Tenaga kinetik kepada tenaga keupayaan graviti","Tenaga kimia kepada tenaga bunyi","Tenaga keupayaan kenyal kepada tenaga haba"],b:0,u:"Ketinggian berkurang dan laju bertambah."},
 {j:"pilih",t:"Mengapakah bandul berayun paling laju di titik paling rendah?",p:["Hampir semua tenaga keupayaannya kini tenaga kinetik","Graviti paling kuat apabila bandul berada di titik paling rendah","Bandul menerima tolakan tambahan di titik itu","Tenaga kinetik paling rendah di titik itu"],b:0,u:"Di titik paling rendah, tenaga keupayaan graviti paling kecil."},
 {j:"pilih",t:"Dua murid mengangkat beban yang sama ke ketinggian yang sama. Murid A mengambil 5 s dan murid B 10 s. Pernyataan manakah BETUL?",p:["Kerja sama, tetapi kuasa A lebih besar","Kerja A lebih besar, kuasa sama","Kerja dan kuasa kedua-duanya sama","Kerja B lebih besar kerana lebih lama"],b:0,u:"Kerja bergantung pada daya dan sesaran. Kuasa bergantung pada kerja dan masa."},
 {j:"pilih",t:"Mengapakah bola yang dilepaskan tidak melantun semula ke ketinggian asalnya?",p:["Sebahagian tenaga bertukar kepada haba dan bunyi","Tenaga bola musnah apabila menyentuh lantai","Graviti bertambah kuat selepas lantunan pertama","Jisim bola berkurang selepas setiap lantunan"],b:0,u:"Jumlah tenaga kekal, tetapi bahagian yang menjadi haba dan bunyi tidak lagi mengangkat bola."},
 {j:"pilih",t:"Mengapakah lastik yang ditarik lebih jauh melontarkan batu dengan lebih laju?",p:["Lebih banyak tenaga kenyal disimpan dalam getah","Getah lastik menjadi lebih ringan apabila ditarik jauh","Batu menjadi lebih berat apabila getah ditarik jauh","Graviti berkurang apabila getah diregang"],b:0,u:"Tenaga keupayaan kenyal = ½Fx, dan kedua-dua F dan x bertambah."},
 {j:"pilih",t:"Mengapakah kerja untuk mengangkat kotak sama dengan tenaga keupayaan graviti yang diperoleh kotak itu?",p:["Tenaga yang digunakan untuk mengangkat disimpan dalam kotak","Kotak menghasilkan tenaga sendiri semasa diangkat","Kerja dan tenaga ialah dua perkara yang langsung tidak berkaitan","Tenaga keupayaan hanya wujud semasa kotak bergerak"],b:0,u:"Tenaga itu boleh dibebaskan semula jika kotak jatuh."},
 {j:"pilih",t:"Berdasarkan Rajah 1, sebuah kereta bergerak dua kali lebih laju tanpa perubahan jisim. Apakah yang berlaku kepada tenaga kinetiknya?",p:["Menjadi empat kali ganda","Menjadi dua kali ganda","Kekal sama","Menjadi separuh"],b:0,u:"Tenaga kinetik berkadar dengan kuasa dua laju: 2² = 4."}],
 bos:{j:"banyak",t:"Pilih SEMUA contoh tenaga keupayaan kenyal ditukar kepada tenaga kinetik.",p:["Lastik melontarkan batu","Busur melepaskan anak panah","Kereta mainan berspring meluncur","Buah kelapa jatuh dari pokok","Kipas elektrik berputar"],b:[0,1,2],u:"Kelapa jatuh menukar tenaga keupayaan graviti, dan kipas menukar tenaga elektrik."}},

{n:3, tempat:"Tangga Sekolah", sk:"7.1 / 7.2 Mengira kerja, kuasa dan tenaga", lampiran:"tangga",
 kadNama:"Watt", kadEm:"\u{1F4AA}", kadFakta:"Menaiki tangga dengan cepat memerlukan kuasa yang lebih besar walaupun kerja yang dilakukan sama.",
 bosKadNama:"Neraca Spring", bosKadEm:"\u{2696}", bosKadFakta:"Neraca spring mengukur daya dalam newton, contohnya semasa menarik objek di atas meja.",
 soalan:[
 {j:"nombor",t:"Berapakah kerja yang dilakukan oleh Aina untuk menaiki tangga, dalam joule?",b:1500,tol:0.5,suf:"J",u:"Kerja = 50 kg × 10 N/kg × 3 m = 1500 J."},
 {j:"pilih",t:"Rumus manakah digunakan untuk mengira kuasa Aina?",p:["Kuasa = kerja ÷ masa","Kuasa = daya × masa","Kuasa = kerja × masa","Kuasa = jisim ÷ masa"],b:0,u:"1500 J ÷ 10 s = 150 W."},
 {j:"nombor",t:"Berapakah kuasa Chandran, dalam watt?",b:225,tol:0.5,suf:"W",u:"Kerja = 45 × 10 × 3 = 1350 J. Kuasa = 1350 ÷ 6 = 225 W."},
 {j:"pilih",t:"Siapakah yang melakukan kerja paling banyak?",p:["Boon","Aina","Chandran","Semua sama banyak"],b:0,u:"Boon paling berat, jadi kerjanya 60 × 10 × 3 = 1800 J."},
 {j:"pilih",t:"Aina dan Boon mempunyai kuasa yang sama, iaitu 150 W. Mengapa?",p:["Boon buat lebih banyak kerja dalam masa lebih lama","Mereka mempunyai jisim badan yang sama","Mereka menaiki tangga yang sama dalam masa yang sama","Tinggi tangga mereka berbeza"],b:0,u:"1800 J ÷ 12 s = 150 W, sama dengan 1500 J ÷ 10 s."},
 {j:"pilih",t:"Seorang murid mengangkat kotak seberat 20 N ke rak setinggi 1.5 m. Berapakah kerja yang dilakukan?",p:["30 J","13.3 J","21.5 J","300 J"],b:0,u:"Kerja = 20 N × 1.5 m = 30 J."},
 {j:"nombor",t:"Sebiji kelapa berjisim 2 kg tergantung 10 m dari tanah. Berapakah tenaga keupayaan gravitinya, dalam joule?",b:200,tol:0.5,suf:"J",u:"mgh = 2 × 10 × 10 = 200 J."},
 {j:"nombor",t:"Sebuah spring diregangkan sejauh 0.2 m dengan daya 30 N. Berapakah tenaga keupayaan kenyal yang disimpan, dalam joule?",b:3,tol:0.05,suf:"J",u:"½Fx = ½ × 30 × 0.2 = 3 J."}],
 bos:{j:"nombor",t:"Sebiji bola berjisim 0.5 kg bergerak pada laju 4 m/s. Berapakah tenaga kinetiknya, dalam joule?",b:4,tol:0.05,suf:"J",u:"½mv² = ½ × 0.5 × 4² = 4 J."}},

{n:4, tempat:"Roller Coaster", sk:"7.3 Perubahan tenaga dalam sistem tertutup", lampiran:"trek",
 kadNama:"Roller Coaster", kadEm:"\u{1F3A2}", kadFakta:"Kebanyakan kereta roller coaster tidak berenjin. Selepas ditarik ke bukit pertama, tenaga keupayaan graviti menggerakkannya.",
 bosKadNama:"Geseran", bosKadEm:"\u{1F525}", bosKadFakta:"Geseran menukar sebahagian tenaga kinetik kepada haba, sebab itu kereta sebenar tidak dapat naik setinggi bukit pertama.",
 soalan:[
 {j:"nombor",t:"Berapakah tenaga keupayaan graviti kereta di titik A, dalam joule?",b:100000,tol:0.5,suf:"J",u:"mgh = 500 × 10 × 20 = 100 000 J."},
 {j:"nombor",t:"Berapakah laju kereta di titik B, dalam m/s?",b:20,tol:0.05,suf:"m/s",u:"mgh = ½mv², jadi v² = 2gh = 2 × 10 × 20 = 400, dan v = 20 m/s."},
 {j:"nombor",t:"Berapakah tenaga kinetik kereta di titik C, dalam joule?",b:25000,tol:0.5,suf:"J",u:"Kereta turun 5 m dari A ke C, jadi tenaga kinetik = 500 × 10 × 5 = 25 000 J."},
 {j:"susun",t:"Susun titik B, C dan D mengikut laju kereta, bermula daripada yang PALING laju.",p:["B","D","C"],b:[0,1,2],u:"Semakin rendah titik itu, semakin banyak tenaga keupayaan telah bertukar kepada tenaga kinetik."},
 {j:"pilih",t:"Mengapakah laju kereta di titik C lebih rendah daripada di titik D?",p:["Lebih banyak tenaga masih tersimpan sebagai keupayaan di C","C lebih rendah, jadi tenaga kinetiknya lebih kecil","Kereta kehilangan jisim semasa bergerak dari D ke C","Graviti di titik C lebih lemah daripada di titik D"],b:0,u:"C berada 15 m dari tanah, manakala D hanya 5 m."},
 {j:"pilih",t:"Jika geseran diambil kira, apakah yang berlaku kepada laju sebenar di titik B?",p:["Lebih rendah daripada 20 m/s kerana sebahagian tenaga menjadi haba","Lebih tinggi daripada 20 m/s kerana geseran menolak kereta","Sama dengan 20 m/s kerana geseran tidak menjejaskan tenaga","Sifar kerana geseran menghentikan kereta sepenuhnya"],b:0,u:"Kurang tenaga tinggal untuk dijadikan tenaga kinetik."},
 {j:"pilih",t:"Bolehkah titik E setinggi 22 m dibina selepas titik D jika kereta bermula pegun di A tanpa geseran?",p:["Tidak, kerana jumlah tenaganya hanya cukup untuk 20 m","Ya, kerana laju di titik D sudah cukup tinggi untuk naik","Ya, kerana tenaga kinetik boleh bertambah dengan sendiri","Tidak, kerana kereta akan berhenti terus di titik D"],b:0,u:"Jumlah tenaga kereta sama dengan tenaga keupayaan di A, iaitu setara dengan ketinggian 20 m."},
 {j:"pilih",t:"Jika jisim kereta digandakan kepada 1000 kg, berapakah lajunya di titik B?",p:["20 m/s, kerana jisim terbatal","40 m/s, kerana jisim digandakan","10 m/s, kerana kereta lebih berat","0 m/s, kerana kereta terlalu berat"],b:0,u:"Dalam mgh = ½mv², m ada di kedua-dua belah dan terbatal."}],
 bos:{j:"pilih",t:"Pereka mahu kereta sampai ke titik B pada laju 30 m/s tanpa geseran. Berapakah tinggi titik A yang diperlukan?",p:["45 m","30 m","60 m","90 m"],b:0,u:"h = v² ÷ 2g = 900 ÷ 20 = 45 m."}},

{n:5, tempat:"Kren Bengkel", sk:"7.1 / 7.3 Menilai kuasa dan kecekapan", lampiran:"motor",
 kadNama:"Kecekapan", kadEm:"\u{1F4C8}", kadFakta:"Kecekapan = tenaga output berguna ÷ tenaga input × 100%. Tiada mesin sebenar yang mencapai 100%.",
 bosKadNama:"Kren", bosKadEm:"\u{1F3D7}", bosKadFakta:"Kren di pelabuhan mengangkat kontena bermuatan yang boleh mencecah puluhan tan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan jadual, motor manakah paling cekap?",p:["Motor P","Motor R, kerana ia paling laju mengangkat beban","Motor Q, kerana ia menggunakan tenaga paling banyak","Semua sama cekap kerana kerja bergunanya sama"],b:0,u:"P: 20 000 ÷ 25 000 = 80%. R: kira-kira 77%. Q: 50%. Kecekapan bergantung pada tenaga yang digunakan, bukan kelajuan."},
 {j:"nombor",t:"Berapakah kecekapan Motor Q, dalam peratus?",b:50,tol:0.5,suf:"%",u:"20 000 ÷ 40 000 × 100% = 50%."},
 {j:"pilih",t:"Nilaikan dakwaan: \"Motor R paling baik kerana paling berkuasa.\"",p:["Belum tentu, kerana harga dan kecekapan juga perlu dinilai","Tepat, kerana kuasa yang tinggi bermakna kecekapan yang tinggi","Tepat, kerana Motor R menggunakan tenaga paling sedikit","Salah, kerana Motor R paling lambat mengangkat beban"],b:0,u:"Motor R paling laju, tetapi Motor P menggunakan tenaga lebih sedikit. Kuasa dan kecekapan ialah dua ukuran berbeza."},
 {j:"pilih",t:"Sebuah bengkel kecil mengangkat beban beberapa kali sehari dan mahu menjimatkan bil elektrik. Pilihan paling wajar?",p:["Motor P, kerana paling cekap walaupun perlahan","Motor Q, kerana harga belinya paling murah","Motor R, kerana kuasa tinggi menjimatkan elektrik","Motor Q, kerana ia paling cepat menyiapkan kerja"],b:0,u:"Kelajuan kurang penting bagi bengkel kecil, tetapi tenaga yang dibazirkan dibayar setiap hari. Motor R lebih cepat daripada Q."},
 {j:"pilih",t:"Sebuah pelabuhan sibuk perlu mengangkat beban secepat mungkin sepanjang hari. Pilihan paling wajar?",p:["Motor R, kerana laju dan masih agak cekap","Motor P, kerana paling cekap walaupun paling perlahan","Motor Q, kerana harga belinya paling murah","Motor Q, kerana kuasa outputnya paling tinggi"],b:0,u:"Kuasa output Q ialah 20 000 J ÷ 25 s = 800 W, manakala R ialah 1000 W. Masa sangat bernilai di pelabuhan."},
 {j:"pilih",t:"Tenaga yang dibazirkan oleh Motor Q kebanyakannya bertukar menjadi:",p:["Tenaga haba dan bunyi","Tenaga keupayaan kenyal","Tenaga keupayaan graviti tambahan pada beban","Tenaga kimia yang disimpan semula dalam motor"],b:0,u:"Tenaga keupayaan graviti beban sudah dikira sebagai kerja berguna. Motor yang kurang cekap menjadi panas dan bising."},
 {j:"banyak",t:"Pilih SEMUA langkah yang benar-benar mengurangkan tenaga yang dibazirkan oleh motor.",p:["Minyakkan bahagian yang bergerak","Selenggara motor secara berkala","Pilih motor yang lebih cekap","Guna motor lebih berkuasa untuk beban yang sama","Angkat beban lebih cepat supaya kerja berkurang"],b:[0,1,2],u:"Kerja mengangkat beban ialah mgh, sama walau cepat atau perlahan. Motor yang lebih berkuasa belum tentu lebih cekap."},
 {j:"pilih",t:"Seorang murid mendakwa kereta mainan berspring lebih mesra alam daripada kereta mainan berbateri. Nilaikan dakwaan itu.",p:["Munasabah, kerana tenaganya daripada kerja tangan dan tiada sisa bateri","Salah, kerana spring mencipta tenaga baharu setiap kali ia dililit","Munasabah, kerana spring menukar semua tenaganya kepada tenaga kinetik","Salah, kerana tenaga kenyal lebih mencemarkan daripada tenaga kimia"],b:0,u:"Spring hanya menyimpan tenaga daripada kerja tangan; ia tidak mencipta tenaga. Sebahagian tenaga tetap menjadi haba akibat geseran."}],
 bos:{j:"pilih",t:"Pengurus taman air memilih antara gelongsor X setinggi 12 m dan gelongsor Y setinggi 6 m. Pengunjung termasuk kanak-kanak kecil. Keputusan paling wajar?",p:["Y untuk kanak-kanak, X dihadkan kepada dewasa","X sahaja kerana laju di bawah tidak bergantung pada ketinggian","X untuk kanak-kanak kerana badan yang ringan menggelongsor lebih perlahan","Y sahaja kerana air menghapuskan semua tenaga kinetik"],b:0,u:"Daripada mgh = ½mv², laju di bawah bergantung pada ketinggian, bukan jisim. Gelongsor lebih tinggi memberi laju lebih tinggi."}},

{n:6, tempat:"Taman Permainan", sk:"7.3 Mereka cipta menggunakan perubahan tenaga",
 kadNama:"Basikal Penjana", kadEm:"\u{1F6B2}", kadFakta:"Basikal yang disambung kepada generator menukar tenaga kinetik kayuhan kepada tenaga elektrik.",
 bosKadNama:"Gelongsor Air", bosKadEm:"\u{1F6DD}", bosKadFakta:"Semakin tinggi gelongsor, semakin banyak tenaga keupayaan yang ditukar kepada tenaga kinetik di bawah.",
 soalan:[
 {j:"pilih",t:"Awak mereka kereta mainan berspring untuk pertandingan jarak. Ciri paling penting untuk menambah jarak?",p:["Spring yang menyimpan lebih tenaga dan roda yang licin","Badan seberat mungkin supaya tenaga kinetiknya lebih besar","Roda bergetah tebal supaya cengkaman pada trek lebih kuat","Spring yang sangat lembut supaya ia mudah dililit"],b:0,u:"Tenaga kinetik datang daripada tenaga kenyal spring. Badan yang berat dan roda bergetah tebal menambah geseran, dan spring lembut menyimpan kurang tenaga."},
 {j:"pilih",t:"Awak mereka buaian untuk taman permainan. Ciri keselamatan paling penting?",p:["Lantai lembut di bawah buaian untuk menyerap hentaman","Lantai simen licin supaya kanak-kanak tidak tersadung","Tali buaian lebih panjang supaya laju di titik terendah berkurang","Tempat duduk lebih berat supaya buaian lebih stabil"],b:0,u:"Lantai lembut memanjangkan masa hentaman dan mengurangkan kecederaan. Laju di titik terendah bergantung pada ketinggian ayunan, bukan panjang tali."},
 {j:"pilih",t:"Awak mahu menjana elektrik daripada basikal senaman di sekolah. Idea paling praktikal?",p:["Sambung roda kepada generator kecil untuk mengecas lampu","Pasang bateri pada roda supaya ia mengecas sendiri semasa berputar","Sambung basikal terus kepada soket dinding sekolah","Pasang panel suria kecil pada tempat duduk basikal"],b:0,u:"Generator menukar tenaga kinetik roda kepada tenaga elektrik. Bateri yang berputar tidak mengecas dirinya sendiri."},
 {j:"nombor",t:"Murid yang mengayuh basikal itu menghasilkan kuasa 50 W. Berapa minitkah mereka perlu mengayuh untuk menyalakan lampu LED 10 W selama satu jam? Abaikan kehilangan tenaga.",b:12,tol:0.05,suf:"minit",u:"Lampu perlu 10 W × 3600 s = 36 000 J. 36 000 J ÷ 50 W = 720 s = 12 minit."},
 {j:"pilih",t:"Awak mereka gelongsor supaya kanak-kanak tidak terlalu laju di bawah. Pengubahsuaian paling berkesan?",p:["Kurangkan ketinggian permulaan","Panjangkan gelongsor tetapi kekalkan ketinggian yang sama","Gunakan permukaan gelongsor yang lebih licin","Alirkan air pada gelongsor supaya geseran bertambah"],b:0,u:"Tenaga keupayaan mgh ditentukan oleh ketinggian. Memanjangkan gelongsor dari ketinggian yang sama hanya mengurangkan sedikit laju melalui geseran, dan air mengurangkan geseran."},
 {j:"pilih",t:"Bagaimanakah awak menguji sama ada pelancar bola kertas rekaan awak lebih baik daripada rekaan rakan?",p:["Lancar kedua-duanya berulang kali dengan bola yang sama","Lancar sekali sahaja dan pilih yang pergi paling jauh","Guna bola lebih ringan bagi rekaan yang kelihatan lemah","Lancar rekaan awak di dalam dewan dan rekaan rakan di luar"],b:0,u:"Ulangan dan bola yang sama menjadikan perbandingan adil. Angin di luar menambah pemboleh ubah yang tidak dikawal."},
 {j:"pilih",t:"Taman permainan awak turut digunakan oleh kanak-kanak kurang upaya. Pertimbangan paling wajar?",p:["Sediakan permainan yang boleh dicapai dengan kerusi roda","Bina semua permainan lebih tinggi supaya lebih menarik","Kekalkan permainan sama seperti taman biasa","Letakkan permainan khas di sudut yang berasingan"],b:0,u:"Reka bentuk yang baik boleh digunakan bersama oleh semua kanak-kanak tanpa mengasingkan sesiapa."},
 {j:"pilih",t:"Penduduk mengadu buaian berkeriut kuat pada waktu malam. Penyelesaian paling wajar?",p:["Minyakkan engsel","Tambah beban pada buaian supaya ia berayun perlahan","Ketatkan engsel supaya buaian tidak bergerak longgar","Tukar rantai kepada tali getah supaya ayunan lebih lembut"],b:0,u:"Bunyi keriut ialah tenaga yang terbazir akibat geseran. Engsel yang terlalu ketat menambah geseran."}],
 bos:{j:"buka",
  t:"Sekolah awak mahu membina sebuah taman sains tenaga untuk menunjukkan perubahan tenaga kinetik dan tenaga keupayaan kepada murid sekolah rendah. Reka satu alat permainan untuk taman itu.",
  arahan:"Terangkan perubahan tenaga yang berlaku dengan menggunakan rumus yang sesuai, bahan dan ukuran alat, langkah keselamatan, dan bagaimana awak mengambil kira kos serta pengguna daripada pelbagai umur.",
  u:"Jawapan TP6 yang kukuh menggunakan mgh, ½mv² atau ½Fx untuk menganggar laju atau ketinggian, dan merancang keselamatan serta kos."}}
];

module.exports = {
  id:"t3b7", tingkatan:3, kod:"7.0 Tenaga dan Kuasa",
  tajuk:"Laluan Tenaga",
  subtajuk:"Sains Ting. 3 · Bab 7 Tenaga dan Kuasa",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali maksud kerja, kuasa, tenaga kinetik dan tenaga keupayaan serta unitnya. Langkah seterusnya ialah menerangkan perubahan tenaga dalam situasi harian.",
   2:"{n} memahami hubungan kerja, kuasa dan tenaga serta dapat menjelaskan perubahan tenaga dalam buaian dan bandul. Perlu lebih banyak latihan menggunakan rumus sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan rumus kerja, kuasa, tenaga keupayaan dan tenaga kinetik untuk menyelesaikan masalah mudah. Galakkan menulis unit dengan betul dalam setiap jawapan.",
   4:"{n} mampu menganalisis perubahan tenaga dalam sistem tertutup seperti roller coaster dan membuat ramalan menggunakan Prinsip Keabadian Tenaga. Seterusnya latih menimbang bukti untuk membuat keputusan.",
   5:"{n} dapat menilai kuasa dan kecekapan mesin serta membuat keputusan yang wajar berdasarkan data, kos dan keselamatan. Sudah bersedia untuk tugasan reka cipta.",
   6:"{n} berjaya mereka cipta alat yang menggunakan perubahan tenaga secara selamat dan praktikal, disokong pengiraan yang sesuai. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Tenaga dan Kuasa. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
  },
  lampiran:{ dayaangkat:R_ANGKAT, grafkinetik:R_KINETIK, tangga:T_TANGGA, trek:T_TREK, motor:T_MOTOR },
  aras:ARAS
};
