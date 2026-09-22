/* Bank soalan — Sains Ting. 5 · Bab 6 Elektrokimia.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/t5b6.js
   kemudian jalankan: node bina.js t5b6

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Sains
   Tingkatan 5, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["t5b6"] =
{
 "id": "t5b6",
 "tingkatan": 5,
 "kod": "6.0 Elektrokimia",
 "tajuk": "Laluan Ion",
 "subtajuk": "Sains Ting. 5 · Bab 6 Elektrokimia",
 "spi": [
  "Mengingat kembali pengetahuan dan kemahiran saintifik mengenai elektrokimia.",
  "Memahami elektrokimia dan dapat menjelaskan kefahaman tersebut.",
  "Mengaplikasikan pengetahuan mengenai elektrokimia dan dapat melaksanakan tugasan mudah.",
  "Menganalisis pengetahuan mengenai elektrokimia dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
  "Menilai pengetahuan mengenai elektrokimia dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan satu tugasan.",
  "Mereka cipta dengan menggunakan pengetahuan dan kemahiran sains mengenai elektrokimia dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan satu tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat."
 ],
 "kko": [
  "Mengingat",
  "Memahami",
  "Mengaplikasi",
  "Menganalisis",
  "Menilai",
  "Mereka cipta"
 ],
 "ulasan": {
  "1": "{n} dapat mengingat kembali istilah asas elektrokimia seperti anod, katod, elektrolit, kation dan anion. Langkah seterusnya ialah menerangkan bagaimana ion bergerak semasa elektrolisis, bukan sekadar menghafal nama.",
  "2": "{n} memahami mekanisme pergerakan dan nyahcas ion semasa elektrolisis, termasuk peranan air dalam larutan akues. Perlu lebih banyak latihan mengaitkan konsep pengoksidaan dan penurunan dengan elektrod yang betul.",
  "3": "{n} boleh mengaplikasikan pengetahuan elektrolisis untuk meramal hasil pada elektrod bagi pelbagai sebatian ion dan mengira jisim logam termendap. Galakkan mentafsir aplikasi industri seperti penyaduran dan pengekstrakan logam.",
  "4": "{n} mampu menganalisis data ujikaji untuk mengenal pasti faktor yang mempengaruhi hasil elektrolisis, termasuk kepekatan elektrolit dan jenis elektrod. Seterusnya latih menimbang bukti untuk membuat keputusan industri.",
  "5": "{n} dapat menilai kewajaran aplikasi elektrolisis dan sel kimia dalam konteks kos, keselamatan dan alam sekitar, disokong bukti daripada data. Sudah bersedia untuk tugasan reka cipta.",
  "6": "{n} berjaya mereka bentuk sistem sel kimia yang praktikal daripada sumber tenaga alternatif, lengkap dengan pertimbangan keselamatan dan kos. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Elektrokimia. Cadangan: ulang aktiviti hentian pertama dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "susun": "<figure class=\"figure\"><svg viewBox=\"0 0 260 270\" role=\"img\" aria-label=\"Rajah aliran menegak empat langkah: bekalan arus, elektrod dalam elektrolit, pergerakan ion ke elektrod berlawanan cas, dan pemindahan elektron menghasilkan bahan baharu\"><rect x=\"6\" y=\"4\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--amber-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"25.3\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Bekalan arus terus disambung</text><text x=\"130\" y=\"40.3\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">pada dua elektrod</text><line x1=\"130\" y1=\"56\" x2=\"130\" y2=\"71\" stroke=\"var(--amber)\" stroke-width=\"2\"></line><path d=\"M130 71 L125.2 61 L134.8 61 z\" fill=\"var(--amber)\"></path><rect x=\"6\" y=\"75\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--gen-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"88.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Anod (positif) dan katod</text><text x=\"130\" y=\"103.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">(negatif) direndam dalam</text><text x=\"130\" y=\"118.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">elektrolit</text><line x1=\"130\" y1=\"127\" x2=\"130\" y2=\"142\" stroke=\"var(--gen)\" stroke-width=\"2\"></line><path d=\"M130 142 L125.2 132 L134.8 132 z\" fill=\"var(--gen)\"></path><rect x=\"6\" y=\"146\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--teal-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"159.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Ion positif (kation) bergerak ke</text><text x=\"130\" y=\"174.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">katod, ion negatif (anion)</text><text x=\"130\" y=\"189.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">bergerak ke anod</text><line x1=\"130\" y1=\"198\" x2=\"130\" y2=\"213\" stroke=\"var(--teal)\" stroke-width=\"2\"></line><path d=\"M130 213 L125.2 203 L134.8 203 z\" fill=\"var(--teal)\"></path><rect x=\"6\" y=\"217\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--arteri-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"230.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Pemindahan elektron pada</text><text x=\"130\" y=\"245.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">elektrod menghasilkan bahan</text><text x=\"130\" y=\"260.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">baharu</text></svg><figcaption>Rajah 1 · Susunan asas sel elektrolitik dan pergerakan ion.</figcaption></figure>",
  "pbbr2": "<figure class=\"figure\"><svg viewBox=\"0 0 260 270\" role=\"img\" aria-label=\"Rajah aliran menegak empat langkah elektrolisis leburan plumbum bromida daripada peleburan pepejal hingga terbentuk logam plumbum di katod dan gas bromin di anod\"><rect x=\"6\" y=\"4\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--teal-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"25.3\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Pepejal plumbum(II) bromida</text><text x=\"130\" y=\"40.3\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">dipanaskan sehingga melebur</text><line x1=\"130\" y1=\"56\" x2=\"130\" y2=\"71\" stroke=\"var(--teal)\" stroke-width=\"2\"></line><path d=\"M130 71 L125.2 61 L134.8 61 z\" fill=\"var(--teal)\"></path><rect x=\"6\" y=\"75\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--gen-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"96.3\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Ion Pb2+ dan Br- kini bebas</text><text x=\"130\" y=\"111.3\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">bergerak dalam leburan</text><line x1=\"130\" y1=\"127\" x2=\"130\" y2=\"142\" stroke=\"var(--gen)\" stroke-width=\"2\"></line><path d=\"M130 142 L125.2 132 L134.8 132 z\" fill=\"var(--gen)\"></path><rect x=\"6\" y=\"146\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--amber-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"159.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Ion Pb2+ bergerak ke katod,</text><text x=\"130\" y=\"174.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">menerima elektron, menjadi logam</text><text x=\"130\" y=\"189.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">plumbum</text><line x1=\"130\" y1=\"198\" x2=\"130\" y2=\"213\" stroke=\"var(--amber)\" stroke-width=\"2\"></line><path d=\"M130 213 L125.2 203 L134.8 203 z\" fill=\"var(--amber)\"></path><rect x=\"6\" y=\"217\" width=\"248\" height=\"49\" rx=\"8\" fill=\"var(--arteri-soft)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></rect><text x=\"130\" y=\"230.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Ion Br- bergerak ke anod,</text><text x=\"130\" y=\"245.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">membebaskan elektron, menjadi</text><text x=\"130\" y=\"260.8\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">gas bromin</text></svg><figcaption>Rajah 1 · Elektrolisis leburan plumbum(II) bromida.</figcaption></figure>",
  "faktor": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Ujikaji</th><th>Elektrolit</th><th class=\"n\">Kepekatan (mol/dm&sup3;)</th><th>Jenis Elektrod</th><th class=\"n\">Jisim Logam Termendap (g)</th></tr></thead><tbody><tr><td>A</td><td>Kuprum(II) sulfat</td><td class=\"n\">0.5</td><td>Karbon (lengai)</td><td class=\"n\">1.2</td></tr><tr><td>B</td><td>Kuprum(II) sulfat</td><td class=\"n\">1.0</td><td>Karbon (lengai)</td><td class=\"n\">2.4</td></tr><tr><td>C</td><td>Kuprum(II) sulfat</td><td class=\"n\">1.0</td><td>Kuprum</td><td class=\"n\">2.4</td></tr><tr><td>D</td><td>Kuprum(II) sulfat</td><td class=\"n\">2.0</td><td>Karbon (lengai)</td><td class=\"n\">4.7</td></tr></tbody></table></div><p class=\"qnote\">Kesemua ujikaji dijalankan dengan arus dan masa yang sama.</p>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Elektrod",
   "sk": "6.1 Mengenali sel elektrolitik",
   "lampiran": "susun",
   "kadNama": "Sel Volta",
   "kadEm": "🔋",
   "kadFakta": "Alessandro Volta mencipta sel kimia pertama pada tahun 1800 menggunakan cakera zink dan kuprum berselang-seli dengan kain lembap air garam.",
   "bosKadNama": "Elektrolisis",
   "bosKadEm": "⚡",
   "bosKadFakta": "Perkataan \"elektrolisis\" mula digunakan secara meluas oleh Michael Faraday pada tahun 1834 untuk menerangkan penguraian bahan menggunakan arus elektrik.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Elektrod yang disambung kepada terminal positif bekalan arus terus dalam sel elektrolitik dipanggil:",
     "p": [
      "Anod",
      "Katod",
      "Elektrolit",
      "Ion"
     ],
     "b": 0,
     "u": "Anod sentiasa disambung kepada terminal positif; katod kepada terminal negatif."
    },
    {
     "j": "pilih",
     "t": "Cecair atau leburan yang membenarkan pengaliran arus elektrik kerana mengandungi ion bebas bergerak dipanggil:",
     "p": [
      "Konduktor pepejal",
      "Elektrolit",
      "Penebat",
      "Bateri"
     ],
     "b": 1,
     "u": "Elektrolit mesti mengandungi ion yang bebas bergerak, sama ada dalam bentuk leburan atau larutan akues."
    },
    {
     "j": "pilih",
     "t": "Ion bercas positif dipanggil:",
     "p": [
      "Anion",
      "Elektron",
      "Kation",
      "Proton"
     ],
     "b": 2,
     "u": "Kation tertarik ke katod (bercas negatif); anion tertarik ke anod."
    },
    {
     "j": "pilih",
     "t": "Ion bercas negatif dipanggil:",
     "p": [
      "Kation",
      "Neutron",
      "Molekul",
      "Anion"
     ],
     "b": 3,
     "u": "Anion tertarik ke anod (bercas positif)."
    },
    {
     "j": "pilih",
     "t": "Proses menguraikan sebatian ion kepada unsur-unsurnya menggunakan arus elektrik dipanggil:",
     "p": [
      "Elektrolisis",
      "Elektroplat",
      "Elektromagnet",
      "Elektrostatik"
     ],
     "b": 0,
     "u": "Elektrolisis khusus merujuk penguraian sebatian menggunakan arus elektrik."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, ion positif dalam elektrolit akan bergerak ke arah:",
     "p": [
      "Anod, elektrod bercas positif dalam sel",
      "Katod, elektrod bercas negatif",
      "Kedua-dua elektrod bertindak serentak",
      "Bateri sahaja, bukan elektrod itu"
     ],
     "b": 1,
     "u": "Cas berlawanan tarik-menarik: ion positif tertarik ke elektrod negatif (katod)."
    },
    {
     "j": "pilih",
     "t": "Bahan yang TIDAK membenarkan pengaliran arus elektrik walaupun dalam keadaan leburan atau akues dipanggil:",
     "p": [
      "Elektrolit lemah",
      "Logam tulen",
      "Bukan elektrolit",
      "Gas mulia"
     ],
     "b": 2,
     "u": "Bukan elektrolit tidak mengandungi ion bebas dalam sebarang keadaan."
    },
    {
     "j": "pilih",
     "t": "Punca kuasa yang membekalkan arus terus (DC) dalam sel elektrolitik ialah:",
     "p": [
      "Get logik",
      "Suis",
      "Wayar pengalir",
      "Bateri"
     ],
     "b": 3,
     "u": "Bateri membekalkan arus terus yang menggerakkan elektron dalam litar dan ion dalam elektrolit."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA yang merupakan contoh elektrolit.",
    "p": [
     "Air laut",
     "Leburan plumbum(II) bromida",
     "Larutan kuprum(II) sulfat",
     "Gula terlarut dalam air suling",
     "Minyak masak"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Gula terlarut tidak mengion, jadi larutan gula tidak mengalirkan arus; minyak masak bukan konduktor."
   }
  },
  {
   "n": 2,
   "tempat": "Ion Bergerak",
   "sk": "6.1 Memahami pergerakan ion",
   "lampiran": null,
   "kadNama": "Ion Bebas",
   "kadEm": "🧲",
   "kadFakta": "Svante Arrhenius mencadangkan teori pengionan pada tahun 1884, menerangkan bagaimana sebatian ion terurai kepada ion bebas apabila dilarutkan.",
   "bosKadNama": "Nyahcas",
   "bosKadEm": "🔌",
   "bosKadFakta": "Proses nyahcas ion di elektrod berlaku dalam masa yang sangat singkat bagi kebanyakan sel elektrolitik makmal.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Mengapakah ion dalam pepejal ionik TIDAK boleh mengalirkan arus elektrik walaupun ion itu bercas?",
     "p": [
      "Ion tidak boleh bergerak bebas, terikat kukuh dalam kekisi kristal",
      "Ion pepejal tidak mempunyai cas sehingga ia dileburkan",
      "Pepejal ionik tidak mengandungi sebarang ion langsung",
      "Elektron dalam pepejal ionik sentiasa kekal pegun"
     ],
     "b": 0,
     "u": "Hanya apabila dileburkan atau dilarutkan, ion bebas bergerak dan dapat mengalirkan arus."
    },
    {
     "j": "pilih",
     "t": "Apakah yang berlaku kepada ion positif apabila ia sampai di katod?",
     "p": [
      "Ion kehilangan elektron dan mengalami pengoksidaan sepenuhnya",
      "Ion menerima elektron dan mengalami penurunan, jadi atom neutral",
      "Ion kekal bercas positif tanpa sebarang perubahan langsung",
      "Ion bertukar menjadi ion negatif sepenuhnya"
     ],
     "b": 1,
     "u": "Penurunan (reduction) berlaku di katod: ion positif menerima elektron."
    },
    {
     "j": "pilih",
     "t": "Apakah yang berlaku kepada ion negatif apabila ia sampai di anod?",
     "p": [
      "Ion menerima elektron tambahan",
      "Ion bergerak semula ke katod",
      "Ion membebaskan elektron dan mengalami pengoksidaan",
      "Ion menjadi molekul neutral tanpa kehilangan elektron"
     ],
     "b": 2,
     "u": "Pengoksidaan (oxidation) berlaku di anod: ion negatif membebaskan elektron."
    },
    {
     "j": "pilih",
     "t": "Mengapakah leburan plumbum(II) bromida boleh dielektrolisiskan tetapi pepejal plumbum(II) bromida tidak boleh?",
     "p": [
      "Peleburan menukarkan ion kepada atom neutral sepenuhnya",
      "Peleburan menambah bilangan ion dalam sebatian itu sahaja",
      "Peleburan menukar cas ion daripada positif kepada negatif sepenuhnya",
      "Peleburan bebaskan ion daripada kekisi supaya boleh bergerak ke elektrod"
     ],
     "b": 3,
     "u": "Ion mesti bebas bergerak untuk membawa cas ke elektrod; peleburan membebaskannya daripada kekisi pepejal."
    },
    {
     "j": "pilih",
     "t": "Dalam elektrolisis larutan akues, mengapa air turut memainkan peranan?",
     "p": [
      "Air boleh terion sedikit, ion daripada air bertindak balas di elektrod",
      "Air menghalang sepenuhnya pergerakan ion dalam larutan itu",
      "Air menukar semua ion positif kepada ion negatif sepenuhnya",
      "Air bertindak sebagai elektrod tambahan dalam sel tersebut"
     ],
     "b": 0,
     "u": "Dalam larutan akues, ion H+ dan OH- daripada air turut bersaing untuk dinyahcas di elektrod."
    },
    {
     "j": "pilih",
     "t": "Apakah maksud proses \"nyahcas\" sesuatu ion di elektrod?",
     "p": [
      "Ion kehilangan jisimnya sepenuhnya tanpa sebab",
      "Ion kehilangan cas lewat pemindahan elektron, jadi neutral",
      "Ion bertukar menjadi elektrolit baharu sepenuhnya",
      "Ion berhenti bergerak tetapi kekal bercas seperti asal"
     ],
     "b": 1,
     "u": "Nyahcas bermaksud ion menerima atau membebaskan elektron sehingga menjadi neutral."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan konsep pengoksidaan dan penurunan, di manakah pengoksidaan sentiasa berlaku dalam sel elektrolitik?",
     "p": [
      "Di katod",
      "Di kedua-dua elektrod serentak",
      "Di anod",
      "Dalam elektrolit, bukan di elektrod"
     ],
     "b": 2,
     "u": "Pengoksidaan (kehilangan elektron) sentiasa berlaku di anod."
    },
    {
     "j": "susun",
     "t": "Susun urutan peristiwa semasa elektrolisis larutan kuprum(II) klorida mengikut urutan yang betul.",
     "p": [
      "Bekalan arus terus menggerakkan ion dalam larutan",
      "Ion Cu2+ bergerak ke katod",
      "Ion Cu2+ menerima elektron di katod",
      "Atom kuprum neutral terenap di katod"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Pergerakan ion mendahului nyahcas, dan nyahcas mendahului pemendapan logam."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Encik Farid mendapati mentol lampu menyala apabila disambungkan pada larutan garam tetapi TIDAK menyala apabila disambungkan pada gula terlarut, walaupun kepekatan kedua-duanya sama. Apakah kesimpulan paling tepat?",
    "p": [
     "Larutan garam lebih pekat berbanding larutan gula itu",
     "Gula ialah pengalir elektrik yang lemah tetapi tetap berfungsi baik",
     "Kedua-dua larutan itu sepatutnya mengalirkan arus yang sama",
     "Larutan garam mengandungi ion bebas, larutan gula tidak mengion"
    ],
    "b": 3,
    "u": "Garam ialah sebatian ion yang mengion sepenuhnya; gula ialah sebatian kovalen yang tidak mengion dalam air."
   }
  },
  {
   "n": 3,
   "tempat": "Bikar Ujikaji",
   "sk": "6.1 Mengaplikasikan proses elektrolisis",
   "lampiran": "pbbr2",
   "kadNama": "Plumbum Cair",
   "kadEm": "🌡",
   "kadFakta": "Plumbum(II) bromida melebur pada suhu lebih kurang 373°C, jauh lebih rendah daripada takat lebur kebanyakan logam tulen.",
   "bosKadNama": "Penyaduran",
   "bosKadEm": "✨",
   "bosKadFakta": "Barangan kemas \"emas disadur\" hanya mempunyai lapisan emas setebal beberapa mikrometer sahaja, cukup nipis untuk berkilat tanpa menggunakan banyak emas tulen.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, hasil yang terbentuk di katod semasa elektrolisis leburan plumbum(II) bromida ialah:",
     "p": [
      "Logam plumbum",
      "Bromin dalam keadaan gas",
      "Gas oksigen tulen",
      "Gas hidrogen ringan"
     ],
     "b": 0,
     "u": "Ion Pb2+ menerima elektron di katod dan menjadi logam plumbum."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, hasil yang terbentuk di anod ialah:",
     "p": [
      "Logam plumbum",
      "Gas bromin",
      "Gas oksigen",
      "Wap bromida"
     ],
     "b": 1,
     "u": "Ion Br- membebaskan elektron di anod dan menjadi gas bromin."
    },
    {
     "j": "nombor",
     "t": "Sekeping plat kuprum ditenggelamkan dalam larutan argentum nitrat semasa proses penyaduran. Jika 4 g argentum termendap dalam 20 minit, berapa gram argentum termendap dalam 40 minit pada kadar arus yang sama?",
     "b": 8,
     "tol": 0.5,
     "suf": "g",
     "u": "Jisim termendap berkadar terus dengan masa pada arus tetap: 4 × (40/20) = 8 g."
    },
    {
     "j": "pilih",
     "t": "Sebuah kilang ingin mengekstrak logam aluminium daripada bijih aluminium oksida. Kaedah paling sesuai ialah:",
     "p": [
      "Pemanasan bijih dengan karbon sahaja",
      "Penapisan bijih menggunakan air",
      "Elektrolisis leburan aluminium oksida",
      "Elektrolisis larutan akues aluminium oksida"
     ],
     "b": 2,
     "u": "Aluminium terlalu reaktif untuk diekstrak dengan karbon, jadi elektrolisis leburan bijihnya digunakan."
    },
    {
     "j": "pilih",
     "t": "Dalam proses penyaduran sudu logam dengan perak, sudu logam itu perlu disambungkan sebagai:",
     "p": [
      "Anod, supaya ion perak terbentuk daripadanya",
      "Elektrolit, supaya ia mengandungi ion perak",
      "Bateri, supaya ia membekalkan arus",
      "Katod, supaya ion perak termendap di atasnya"
     ],
     "b": 3,
     "u": "Objek yang hendak disadur mesti menjadi katod supaya logam termendap di atasnya."
    },
    {
     "j": "pilih",
     "t": "Apakah kegunaan proses elektro-penggumpalan dalam industri?",
     "p": [
      "Merawat air sisa, kumpulkan bahan cemar menggunakan arus elektrik",
      "Menghasilkan tenaga elektrik daripada air sisa itu",
      "Mengekstrak plumbum daripada air sisa sahaja tanpa lain",
      "Menukar air sisa kepada elektrolit yang pekat"
     ],
     "b": 0,
     "u": "Elektro-penggumpalan menggunakan arus elektrik untuk mengumpul dan mengeluarkan bahan cemar daripada air sisa."
    },
    {
     "j": "pilih",
     "t": "Sekiranya elektrolisis leburan plumbum(II) bromida digantikan dengan elektrolisis larutan akues pekat natrium klorida, gas manakah terbebas di anod?",
     "p": [
      "Gas oksigen",
      "Gas klorin",
      "Gas hidrogen",
      "Gas bromin"
     ],
     "b": 1,
     "u": "Dalam larutan pekat natrium klorida, ion klorida lebih mudah dinyahcas berbanding ion hidroksida daripada air."
    },
    {
     "j": "pilih",
     "t": "Mengapakah plumbum(II) bromida mesti dileburkan dahulu sebelum dielektrolisiskan, berbeza daripada natrium klorida yang boleh dielektrolisiskan dalam bentuk larutan akues?",
     "p": [
      "Plumbum(II) bromida tidak boleh larut dalam air walau apa keadaan sekalipun",
      "Natrium klorida tidak boleh dileburkan kerana takat leburnya terlalu tinggi sekali",
      "Kedua-dua kaedah sah; peleburan dan pelarutan bebaskan ion untuk bergerak",
      "Hanya plumbum(II) bromida mengandungi ion, natrium klorida tidak ada"
     ],
     "b": 2,
     "u": "Kedua-dua kaedah sama-sama membebaskan ion untuk bergerak bebas; pemilihan bergantung pada kemudahan dan kos."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah kilang penyaduran mendapati 6 g nikel termendap pada plat logam dalam masa 15 minit. Jika proses dijalankan selama 45 minit pada arus yang sama, berapa gram nikel akan termendap?",
    "b": 18,
    "tol": 1,
    "suf": "g",
    "u": "Jisim berkadar terus dengan masa pada arus tetap: 6 × (45/15) = 18 g."
   }
  },
  {
   "n": 4,
   "tempat": "Faktor Hasil",
   "sk": "6.1 Menganalisis faktor hasil elektrolisis",
   "lampiran": "faktor",
   "kadNama": "Ralat Rawak",
   "kadEm": "⚖",
   "kadFakta": "Ulangan ujikaji sekurang-kurangnya tiga kali ialah amalan asas sains supaya bacaan ganjil dapat dikesan.",
   "bosKadNama": "Pemboleh Ubah",
   "bosKadEm": "🧪",
   "bosKadFakta": "Eksperimen yang baik hanya mengubah SATU pemboleh ubah dalam satu masa supaya kesan sebenarnya dapat dikenal pasti dengan yakin.",
   "soalan": [
    {
     "j": "banyak",
     "t": "Berdasarkan jadual faktor elektrolisis ini, pilih SEMUA kesimpulan yang disokong oleh data.",
     "p": [
      "Jisim logam termendap meningkat apabila kepekatan elektrolit meningkat",
      "Jenis elektrod (karbon berbanding kuprum) tidak menjejaskan jisim logam termendap dalam ujikaji B dan C",
      "Ujikaji D menghasilkan jisim logam termendap paling tinggi",
      "Kepekatan elektrolit tidak memberi sebarang kesan kepada hasil elektrolisis",
      "Ujikaji A dan D menggunakan kepekatan elektrolit yang sama"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Data B dan C sama walaupun elektrod berbeza, menunjukkan jenis elektrod lengai tidak menjejaskan hasil dalam kes ini."
    },
    {
     "j": "pilih",
     "t": "Mengapakah ujikaji B dan C penting untuk perbandingan dalam kajian ini?",
     "p": [
      "Ia menunjukkan kepekatan elektrolit tidak penting langsung",
      "Ia membuktikan elektrod karbon lebih baik daripada elektrod kuprum itu",
      "Ia mengukur kesan masa terhadap hasil elektrolisis tersebut",
      "Ia mengasingkan kesan jenis elektrod daripada kepekatan elektrolit"
     ],
     "b": 3,
     "u": "Dengan memalarkan kepekatan dan hanya menukar jenis elektrod, kesan pemboleh ubah tunggal itu dapat diasingkan."
    },
    {
     "j": "nombor",
     "t": "Berapakah beza jisim logam termendap, dalam g, antara ujikaji A dan ujikaji D?",
     "b": 3.5,
     "tol": 0.2,
     "suf": "g",
     "u": "4.7 tolak 1.2 bersamaan 3.5 g."
    },
    {
     "j": "pilih",
     "t": "Pemboleh ubah manakah WAJIB dimalarkan dalam kesemua ujikaji A hingga D supaya perbandingan adil?",
     "p": [
      "Arus dan masa elektrolisis itu",
      "Kepekatan elektrolit yang digunakan",
      "Jenis elektrod yang dipilih",
      "Jisim logam yang termendap"
     ],
     "b": 0,
     "u": "Arus dan masa ialah pemboleh ubah dimalarkan; kepekatan ialah pemboleh ubah dimanipulasi dan jisim ialah pemboleh ubah bergerak balas."
    },
    {
     "j": "pilih",
     "t": "Jika satu ujikaji tambahan dijalankan dengan kepekatan 1.0 mol/dm³ tetapi arus DIGANDAKAN berbanding ujikaji B, ramalan paling munasabah untuk jisim logam termendap ialah:",
     "p": [
      "Sama seperti 2.4 g, kerana arus tidak menjejaskan jisim termendap itu",
      "Lebih tinggi daripada 2.4 g, kadar pemindahan elektron meningkat",
      "Lebih rendah daripada 2.4 g, kerana arus tinggi merosakkan elektrod itu",
      "Sifar, kerana arus tinggi menghalang elektrolisis sepenuhnya"
     ],
     "b": 1,
     "u": "Arus lebih tinggi bermakna lebih banyak elektron dipindahkan dalam masa yang sama, jadi lebih banyak logam termendap."
    },
    {
     "j": "pilih",
     "t": "Mengapakah elektrod karbon dipanggil elektrod \"lengai\"?",
     "p": [
      "Ia satu-satunya elektrod yang boleh mengalirkan arus itu",
      "Ia menghalang sepenuhnya pergerakan ion dalam elektrolit itu",
      "Ia tidak mengambil bahagian dalam tindak balas kimia elektrolisis",
      "Ia mempercepatkan kadar elektrolisis berbanding elektrod yang lain"
     ],
     "b": 2,
     "u": "Elektrod lengai hanya menghantar arus tanpa terlibat dalam tindak balas kimia di elektrod."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan corak data, apakah hubungan antara kepekatan elektrolit dan jisim logam termendap dalam julat ujikaji ini?",
     "p": [
      "Berkadar songsang antara kedua-dua pemboleh ubah itu",
      "Tiada hubungan langsung antara kedua-dua pemboleh ubah itu",
      "Jisim menurun apabila kepekatan itu semakin meningkat",
      "Meningkat secara amnya bila kepekatan meningkat, bukan hubungan 1:1 tepat"
     ],
     "b": 3,
     "u": "A ke B (0.5 ke 1.0) jisim gandaan (1.2 ke 2.4), tetapi B ke D (1.0 ke 2.0) jisim tidak gandaan penuh (2.4 ke 4.7)."
    },
    {
     "j": "pilih",
     "t": "Apakah had kajian ini jika kesimpulan hendak dibuat mengenai SEMUA jenis logam, bukan kuprum sahaja?",
     "p": [
      "Hanya satu jenis logam diuji, kesimpulan tak boleh digeneralisasikan",
      "Kajian ini sudah cukup kerana semua logam berkelakuan sama semasa elektrolisis itu",
      "Jenis logam tidak memberi kesan kepada hasil elektrolisis tersebut",
      "Kepekatan elektrolit hanya relevan untuk kuprum sulfat sahaja"
     ],
     "b": 0,
     "u": "Sampel satu jenis logam sahaja tidak mencukupi untuk membuat generalisasi merentasi semua logam."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA penambahbaikan yang akan menguatkan kesimpulan kajian faktor hasil elektrolisis ini.",
    "p": [
     "Uji dengan pelbagai jenis logam, bukan kuprum sahaja",
     "Ulang setiap ujikaji beberapa kali untuk mengurangkan ralat rawak",
     "Kawal arus dan masa supaya sentiasa sama merentasi semua ujikaji",
     "Ambil hanya bacaan tertinggi daripada setiap ujikaji dan abaikan yang lain",
     "Naikkan kepekatan sehingga melebihi keterlarutan elektrolit"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Membuang bacaan yang tidak disukai memburukkan data, dan kepekatan melebihi keterlarutan tidak praktikal untuk diukur."
   }
  },
  {
   "n": 5,
   "tempat": "Aplikasi Industri",
   "sk": "6.1 / 6.2 Menilai aplikasi elektrolisis dan sel kimia",
   "lampiran": null,
   "kadNama": "Aluminium Mahal",
   "kadEm": "💰",
   "kadFakta": "Pada abad ke-19, aluminium pernah lebih mahal daripada emas kerana proses pengekstrakannya yang sukar, sebelum kaedah elektrolisis murah ditemui pada tahun 1886.",
   "bosKadNama": "Air Sisa",
   "bosKadEm": "💧",
   "bosKadFakta": "Sesetengah loji rawatan air sisa moden menggunakan elektro-penggumpalan untuk mengeluarkan logam berat sebelum air dilepaskan ke sungai.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sebuah kilang perhiasan ingin menyadur gelang tembaga murah dengan lapisan emas nipis. Kaedah paling sesuai ialah:",
     "p": [
      "Elektrolisis dengan gelang tembaga sebagai anod dan air suling sebagai elektrolit itu",
      "Elektrolisis dengan gelang tembaga sebagai katod, larutan ion emas elektrolit",
      "Memanaskan gelang tembaga bersama emas sehingga melebur bersama-sama",
      "Mencelupkan gelang tembaga ke dalam emas cair tanpa arus elektrik langsung"
     ],
     "b": 1,
     "u": "Penyaduran memerlukan objek sebagai katod dan elektrolit yang mengandungi ion logam yang hendak disadur."
    },
    {
     "j": "pilih",
     "t": "Nilaikan cadangan menggunakan air paip biasa, bukan air suling, sebagai elektrolit dalam eksperimen makmal yang memerlukan hasil elektrolisis tepat.",
     "p": [
      "Sesuai, kerana air paip dan air suling memberi hasil yang sama tepat sekali",
      "Sesuai, kerana air paip lebih murah dan itu sahaja yang penting di sini",
      "Kurang sesuai, ion terlarut dalam air paip ganggu ketepatan hasil",
      "Kurang sesuai, kerana air paip tidak mengandungi sebarang ion langsung"
     ],
     "b": 2,
     "u": "Air paip mengandungi pelbagai ion terlarut yang boleh mengganggu tindak balas yang dikaji."
    },
    {
     "j": "pilih",
     "t": "Sebuah syarikat mencadangkan mengekstrak logam natrium daripada natrium klorida menggunakan elektrolisis larutan akues, bukan leburan. Nilaikan cadangan ini.",
     "p": [
      "Sesuai, kerana natrium klorida sentiasa terlarut dalam air dengan begitu mudah",
      "Sesuai, kerana kaedah larutan akues lebih murah tanpa sebarang kelemahan langsung",
      "Kurang sesuai, kerana natrium klorida tidak boleh dielektrolisiskan langsung sekalipun",
      "Kurang sesuai, ion hidrogen daripada air lebih mudah dinyahcas"
     ],
     "b": 3,
     "u": "Logam reaktif seperti natrium tidak dapat diperoleh daripada larutan akues kerana ion hidrogen lebih mudah dinyahcas; leburan diperlukan."
    },
    {
     "j": "pilih",
     "t": "Bandingkan kos mengekstrak logam melalui elektrolisis leburan berbanding penurunan menggunakan karbon. Penilaian paling tepat ialah:",
     "p": [
      "Elektrolisis leburan lebih mahal tetapi perlu untuk logam yang sangat reaktif",
      "Elektrolisis leburan sentiasa lebih murah berbanding penurunan karbon itu",
      "Kedua-dua kaedah mempunyai kos yang sama tanpa mengira jenis logam",
      "Penurunan karbon sesuai untuk semua jenis logam termasuk logam yang reaktif"
     ],
     "b": 0,
     "u": "Logam sangat reaktif seperti aluminium dan natrium tidak boleh diekstrak dengan karbon, jadi elektrolisis leburan digunakan walaupun lebih mahal."
    },
    {
     "j": "pilih",
     "t": "Seorang murid mencadangkan menggunakan sel kimia daripada buah limau untuk mengecas telefon pintar sepenuhnya. Nilaikan cadangan ini.",
     "p": [
      "Praktikal sepenuhnya dan sudah digunakan secara meluas oleh syarikat telefon itu",
      "Tidak praktikal, arus dan voltan dihasilkan terlalu kecil untuk mengecas peranti",
      "Praktikal, kerana buah limau menghasilkan tenaga elektrik tanpa had langsung",
      "Tidak praktikal, kerana buah limau tidak boleh menghasilkan sebarang arus elektrik sekalipun"
     ],
     "b": 1,
     "u": "Sel buah menghasilkan arus dan voltan yang sangat kecil, sesuai untuk demonstrasi konsep sahaja."
    },
    {
     "j": "pilih",
     "t": "Nilaikan kebaikan menggunakan elektro-penggumpalan berbanding kaedah penulenan air sisa konvensional yang hanya menapis.",
     "p": [
      "Kurang berkesan kerana ia hanya menapis zarah besar sahaja tanpa lain",
      "Sama sahaja dengan penapisan kerana kedua-duanya tidak menggunakan arus elektrik itu",
      "Lebih berkesan keluarkan bahan cemar terlarut yang tidak dapat ditapis",
      "Elektro-penggumpalan hanya sesuai untuk air minuman, bukan air sisa sekalipun"
     ],
     "b": 2,
     "u": "Elektro-penggumpalan menggunakan arus untuk mengumpulkan bahan cemar terlarut yang tidak dapat ditapis secara fizikal sahaja."
    },
    {
     "j": "pilih",
     "t": "Sebuah sekolah ingin menjalankan projek STEM menghasilkan tenaga elektrik daripada air laut untuk menyalakan LED kecil. Faktor paling penting untuk kejayaan projek ini ialah:",
     "p": [
      "Memastikan air laut sentiasa sejuk sepanjang eksperimen itu",
      "Menggunakan bekas kaca sahaja, bukan bekas plastik langsung",
      "Menjalankan eksperimen pada waktu malam sahaja tanpa lain",
      "Memilih pasangan elektrod berlainan logam yang hasilkan beza upaya cukup"
     ],
     "b": 3,
     "u": "Beza upaya sel kimia bergantung pada pasangan logam elektrod yang digunakan, bukan faktor persekitaran seperti suhu bekas."
    },
    {
     "j": "pilih",
     "t": "Nilaikan kenyataan: \"Semua sel elektrolitik dan sel kimia berfungsi dengan cara yang sama kerana kedua-duanya melibatkan pergerakan ion.\"",
     "p": [
      "Tidak tepat; sel elektrolitik perlu arus luar, sel kimia hasilkan arus sendiri",
      "Tepat sepenuhnya tanpa sebarang perbezaan langsung",
      "Tidak tepat, kerana sel kimia tidak melibatkan ion langsung sekalipun",
      "Tepat, kerana kedua-duanya memerlukan bekalan arus luar sepenuhnya"
     ],
     "b": 0,
     "u": "Sel elektrolitik menggunakan tenaga elektrik untuk mencetuskan tindak balas kimia; sel kimia menukar tenaga kimia kepada tenaga elektrik tanpa bekalan luar."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Sebuah kilang perlombongan mencadangkan mengekstrak logam kuprum daripada air lombong terbuang (mengandungi ion Cu2+ pada kepekatan rendah) menggunakan elektrolisis, berbanding membuangnya begitu sahaja. Nilaikan cadangan ini dari aspek alam sekitar dan ekonomi.",
    "p": [
     "Tidak wajar, kerana elektrolisis air lombong tidak dapat mengeluarkan sebarang logam langsung",
     "Wajar, ia pulihkan logam berharga, kurangkan pencemaran ion logam berat",
     "Tidak wajar, kerana kos elektrolisis sentiasa melebihi nilai logam yang diperoleh tanpa mengira kepekatan itu",
     "Wajar, tetapi hanya untuk sebab ekonomi; ia tidak memberi apa-apa faedah alam sekitar langsung"
    ],
    "b": 1,
    "u": "Cadangan ini menggabungkan faedah ekonomi dan alam sekitar — kedua-dua aspek perlu dipertimbangkan bersama."
   }
  },
  {
   "n": 6,
   "tempat": "Reka Sel",
   "sk": "6.2 Mereka cipta sel kimia",
   "lampiran": null,
   "kadNama": "Sel Buah",
   "kadEm": "🍋",
   "kadFakta": "Sel kimia daripada limau biasanya menghasilkan kira-kira 0.9 V sahaja, jauh lebih rendah daripada bateri AA biasa (1.5 V).",
   "bosKadNama": "Reka Bentuk STEM",
   "bosKadEm": "🚀",
   "bosKadFakta": "Ramai penemuan sains bermula sebagai projek reka bentuk mudah di sekolah sebelum berkembang menjadi teknologi sebenar dalam industri.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sekumpulan murid mereka bentuk sel kimia daripada beberapa buah limau bersambung secara sesiri untuk menyalakan LED. Mengapakah sambungan sesiri diperlukan, bukan selari?",
     "p": [
      "Sambungan sesiri menambah jumlah arus keseluruhan sel tersebut",
      "Sambungan selari sahaja boleh menyalakan LED itu",
      "Sambungan sesiri menambah jumlah voltan keseluruhan sel itu",
      "Sambungan sesiri mengurangkan voltan yang diperlukan sepenuhnya"
     ],
     "b": 2,
     "u": "Sesiri menambah voltan; selari menambah arus. LED memerlukan voltan minimum untuk menyala."
    },
    {
     "j": "pilih",
     "t": "Dalam reka bentuk sel kimia daripada buah-buahan, pemilihan sepasang logam elektrod, contohnya zink dan kuprum, penting kerana:",
     "p": [
      "Kedua-dua logam mesti sama jenis supaya selamat digunakan itu",
      "Warna logam menentukan kekuatan voltan yang terhasil sepenuhnya",
      "Berat logam menentukan jumlah arus yang terhasil sepenuhnya",
      "Beza kereaktifan antara kedua-dua logam tentukan beza upaya dihasilkan"
     ],
     "b": 3,
     "u": "Semakin besar beza kereaktifan antara dua logam, semakin besar beza upaya sel kimia itu."
    },
    {
     "j": "pilih",
     "t": "Sebuah kumpulan projek STEM ingin menghasilkan sistem penyaduran logam murah untuk kegunaan sekolah. Reka bentuk paling wajar mengambil kira:",
     "p": [
      "Kos elektrolit, keselamatan bahan kimia, dan masa munasabah untuk hasil dilihat",
      "Hanya kelajuan proses tanpa mengambil kira keselamatan langsung",
      "Hanya kos tanpa mengambil kira sama ada hasilnya kelihatan atau tidak",
      "Menggunakan elektrolit sepekat mungkin tanpa had sama sekali"
     ],
     "b": 0,
     "u": "Reka bentuk STEM yang baik menyeimbangkan kos, keselamatan dan hasil yang dapat diperhatikan murid."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA pertimbangan yang WAJAR semasa mereka bentuk sel kimia mudah untuk demonstrasi kelas.",
     "p": [
      "Keselamatan bahan dan elektrod yang digunakan",
      "Kos bahan yang berpatutan untuk dibeli sekolah",
      "Masa yang munasabah untuk hasil dapat diperhatikan",
      "Menggunakan logam paling toksik supaya voltan maksimum",
      "Mengabaikan sepenuhnya jenis buah atau larutan yang digunakan"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "Logam toksik membahayakan murid, dan jenis larutan atau buah memang mempengaruhi hasil, jadi tidak boleh diabaikan."
    },
    {
     "j": "pilih",
     "t": "Murid ingin membandingkan keberkesanan sel kimia daripada air limau berbanding air garam. Reka bentuk ujikaji paling adil ialah:",
     "p": [
      "Gunakan elektrod berbeza untuk setiap larutan supaya lebih pantas hasilnya",
      "Gunakan pasangan elektrod dan jarak sama, hanya tukar jenis larutan",
      "Ukur voltan pada masa berlainan untuk setiap larutan itu",
      "Gunakan isipadu larutan yang berbeza mengikut kesesuaian masing-masing"
     ],
     "b": 1,
     "u": "Hanya pemboleh ubah yang dikaji, iaitu jenis larutan, patut berbeza; segala-galanya yang lain dimalarkan."
    },
    {
     "j": "pilih",
     "t": "Reka bentuk manakah paling sesuai untuk memulihkan logam perak daripada sisa fotografi lama yang mengandungi ion perak, secara mampan?",
     "p": [
      "Membuang terus sisa itu kerana perak tidak bernilai dalam kepekatan rendah itu",
      "Membakar sisa itu untuk mendapatkan perak yang ada",
      "Elektrolisis larutan sisa dengan plat lengai untuk memendapkan perak tulen",
      "Menapis sisa itu menggunakan kertas turas sahaja tanpa lain"
     ],
     "b": 2,
     "u": "Elektrolisis dengan elektrod lengai membolehkan ion perak dinyahcas dan termendap sebagai logam tulen di katod."
    },
    {
     "j": "pilih",
     "t": "Sebuah kilang mereka bentuk sistem elektro-penggumpalan untuk merawat air sisa sebelum dilepaskan ke sungai. Petunjuk kejayaan paling penting untuk dipantau ialah:",
     "p": [
      "Warna bekas yang digunakan untuk rawatan tersebut",
      "Bilangan pekerja yang mengendalikan sistem berkenaan",
      "Jumlah wang yang dibelanjakan untuk sistem itu sepenuhnya",
      "Kepekatan bahan cemar dalam air sebelum dan selepas rawatan itu"
     ],
     "b": 3,
     "u": "Kejayaan sistem rawatan diukur daripada penurunan kepekatan bahan cemar, bukan faktor yang tidak berkaitan terus."
    },
    {
     "j": "nombor",
     "t": "Sebuah reka bentuk sel kimia daripada 3 buah limau bersambung sesiri menghasilkan 2.7 V. Jika setiap limau menyumbang voltan yang sama, berapa voltan bagi SATU buah limau?",
     "b": 0.9,
     "tol": 0.05,
     "suf": "V",
     "u": "2.7 ÷ 3 = 0.9 V setiap limau, kerana sambungan sesiri menjumlahkan voltan setiap sel."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Sekolah awak ingin menjalankan projek STEM: menghasilkan tenaga elektrik daripada sumber semula jadi (buah-buahan, air laut, atau sisa dapur) untuk menyalakan satu lampu LED kecil semasa Hari Sains sekolah. Reka satu sistem sel kimia yang lengkap.",
    "arahan": "Terangkan sumber dan pasangan elektrod yang awak pilih, cara sel-sel disambungkan (sesiri atau selari) dan sebabnya, bagaimana awak menguji sama ada voltan mencukupi sebelum Hari Sains, serta had keselamatan dan kos yang awak ambil kira.",
    "u": "Jawapan TP6 yang kukuh menggabungkan sains elektrokimia, ujian praktikal sebelum digunakan, dan pertimbangan kos serta keselamatan sebenar."
   }
  }
 ]
};
