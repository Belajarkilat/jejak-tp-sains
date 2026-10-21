/* Terjemahan antara muka murid ke Bahasa Inggeris (DLP).
   Aktif hanya apabila bahasa ialah "en" (localStorage cn-bhs) dan hanya pada
   zon murid (bar atas, #murid, #flash). Skrin cikgu tidak diubah.

   Kaedah: teks dibina dalam banyak tempat daripada serpihan yang
   disambung (contoh "Kad seterusnya: " + nama), jadi UI diterjemah pada
   DOM selepas dilukis, bukan pada setiap rentetan dalam kod:
     1. EXACT  : seluruh teks nod (selepas trim) sama dengan kunci
     2. POLA   : ungkapan nalar dengan nombor/nama, dikenakan pada seluruh teks nod
     3. FRASA  : serpihan panjang, diganti paling panjang dahulu
   Kandungan soalan datang daripada bank BI (bank-en-*.js), bukan di sini.
   Tambah entri baharu di sini apabila UI murid mendapat teks baharu. */
(function(){
  var EN=false;
  try{ EN=localStorage.getItem("cn-bhs")==="en"; }catch(e){}
  var pu=null; try{ pu=new URL(location.href).searchParams.get("bhs"); }catch(e){}
  if(pu==="en") EN=true; else if(pu==="ms") EN=false;
  window.BI_AKTIF=EN;
  if(!EN) return;

  var EXACT={
    "Main":"Play","Letak":"Add","Cikgu":"Teacher","Mula":"Start","Peta":"Map","Pergi":"Go","Ulang":"Repeat","Cuba lagi":"Try again",
    "Teruskan":"Continue","Padam":"Delete","Murid":"Student","Nafas":"Breath","Kombo":"Combo","Skor":"Score",
    "Main lagi":"Play again","Nanti":"Later","Bukan saya":"Not me","Tukar nama":"Change name","Tukar kelas":"Change class",
    "Masuk kelas":"Join class","Cari nama":"Find name","Mula main":"Start playing","Belum dibuka":"Not unlocked yet",
    "Koleksi kad":"Card collection","\u{1F0CF} Koleksi kad":"\u{1F0CF} Card collection","Balik ke peta":"Back to map",
    "Semak jawapan":"Check answer","Lihat keputusan":"See results","Hantar kepada cikgu":"Send to teacher",
    "Cuba hentian ini semula":"Try this stop again","Minggu ini":"This week","Sepanjang bab":"Whole chapter",
    "Papan skor kelas":"Class leaderboard","Cabaran harian":"Daily challenge","Mod tenang":"Calm mode",
    "Soalan bos!":"Boss question!","Campur semua hentian":"Mixed from all stops","Sempurna!":"Perfect!",
    "Hampir berjaya!":"Almost there!","Cuba sekali lagi":"Try once more","Betul!":"Correct!","Hebat!":"Great!",
    "Tepat sekali!":"Spot on!","Mantap!":"Awesome!","Belum tepat":"Not quite","Dihantar kepada cikgu":"Sent to your teacher",
    "Tugasan dihantar!":"Task sent!","Tugasan dihantar":"Task sent","Hentian akhir belum selesai":"The final stop is not finished",
    "Habis nafas":"Out of breath","Apa yang awak pelajari":"What you learned","Kuasa dikutip":"Power-ups collected",
    "Cabaran harian selesai":"Daily challenge complete","Luar talian":"Offline","Tersimpan":"Saved","Tanpa pelayan":"No server",
    "Kod kelas":"Class code","Siapa awak?":"Who are you?","Main tanpa rekod":"Play without a record",
    "Main dahulu tanpa rekod":"Play first without a record","Ada kod kelas?":"Have a class code?","Masuk dengan nama":"Enter with a name",
    "Jom mula jejak Sains!":"Let's start tracking Science!","Nama awak":"Your name","Sekolah":"School","(tak wajib)":"(optional)",
    "Contoh: Aina":"Example: Aina","Contoh: SMK Convent Bukit Nanas":"Example: SMK Convent Bukit Nanas",
    "Cari nama awak...":"Search your name...","Kongsi":"Share","Tambah ke skrin utama":"Add to Home screen",
    "Pilih tingkatan":"Choose form","Pilih bab":"Choose chapter","Main!":"Play!","Hentian":"Stop",
    "Cikgu sedang menilai":"Teacher is reviewing","Tugas":"Task","Hidup atau matikan bunyi dan getaran":"Turn sound and vibration on or off",
    "Bunyi dan getaran":"Sound and vibration","Tema":"Theme","Tukar tema":"Change theme","Tukar mod":"Switch mode",
    "Sains Menengah Rendah":"Lower Secondary Science","Paras nafas dan skor":"Breath level and score",
    "Tahap":"Level","hari":"days","Inhaler":"Inhaler","Hemoglobin":"Hemoglobin","Hemoglobin!":"Hemoglobin!","Inhaler!":"Inhaler!",
    "CONTOH":"EXAMPLE","Ketik nama awak.":"Tap your name.","Sekali tekan, terus main.":"One tap and you are playing."
  };

  var POLA=[
    [/^Hai, (.*)!$/, "Hi, $1!"],
    [/^Tingkatan (\d)$/, "Form $1"],
    [/^([+−-]1) nafas$/, "$1 breath"],
    [/^([+−-]\d+) nafas$/, "$1 breaths"],
    [/^(\d+)\/6 hentian$/, "$1/6 stops"],
    [/^(\d+)\/12 kad$/, "$1/12 cards"],
    [/^1 hari$/, "1 day"],
    [/^(\d+) hari$/, "$1 days"],
    [/^(\d+) daripada 6 hentian dilepasi$/, "$1 of 6 stops cleared"],
    [/^(\d+) daripada 3 bintang$/, "$1 of 3 stars"],
    [/^Hentian (\d+) daripada 6$/, "Stop $1 of 6"],
    [/^Hentian (\d+)$/, "Stop $1"],
    [/^Hentian (\d+), (.*?), sudah dilepasi$/, "Stop $1, $2, cleared"],
    [/^Hentian (\d+), (.*?), menunggu cikgu$/, "Stop $1, $2, waiting for the teacher"],
    [/^Hentian (\d+), (.*?), hentian seterusnya$/, "Stop $1, $2, next stop"],
    [/^Hentian (\d+), (.*)$/, "Stop $1, $2"],
    [/^Hentian (\d+): (.*)$/, "Stop $1: $2"],
    [/^Hentian (\d+) dilepasi!$/, "Stop $1 cleared!"],
    [/^Tahap (\d+): (.*)$/, "Level $1: $2"],
    [/^Kad seterusnya: (.*)$/, "Next card: $1"],
    [/^Lepasi hentian (\d+), (.*)\.$/, "Clear stop $1, $2."],
    [/^Kalahkan soalan bos di hentian (\d+), (.*)\.$/, "Beat the boss question at stop $1, $2."],
    [/^Hantar tugasan reka cipta di hentian 6\.$/, "Send the creative task at stop 6."],
    [/^Selesai hari ini dengan skor (\d+)\.(.*)$/, "Done today with a score of $1.$2"],
    [/^Lima soalan rawak dari semua hentian\.(.*)$/, "Five random questions from all stops.$1"],
    [/ Rentetan awak (\d+) hari, jangan putus!$/, " Your streak is $1 days, keep it going!"],
    [/ Main hari ini untuk mula rentetan\.$/, " Play today to start a streak."],
    [/^(\d+) mata$/, "$1 pts"],
    [/^(\d+) mata minggu ini$/, "$1 pts this week"],
    [/^(\d+) \/ 6 hentian dilepasi$/, "$1 / 6 stops cleared"],
    [/^(\d+) daripada 12 dikumpul$/, "$1 of 12 collected"],
    [/^Murid (\d+)$/, "Student $1"],
    [/\(awak\)$/, "(you)"],
    [/^Kombo (\d+)!$/, "Combo $1!"],
    [/^Nafas tinggal (\d+)$/, "Breath left $1"],
    [/^Percubaan ke-(\d+)$/, "Attempt $1"],
    [/^Latihan, tidak direkod$/, "Practice, not recorded"],
    [/^Syabas, (.*)!$/, "Well done, $1!"],
    [/^Jangan putus asa, (.*)\. Cuba lagi!$/, "Don't give up, $1. Try again!"],
    [/^Betul (\d+) daripada (\d+), termasuk soalan bos\.(.*)$/, "Correct $1 out of $2, including the boss question.$3"],
    [/^Betul (\d+) daripada (\d+)\. Perlu (\d+) betul untuk lepas\. Soalan yang salah akan muncul lagi supaya awak boleh cuba semula\.$/,
      "Correct $1 out of $2. You need $3 correct to pass. Questions you get wrong will appear again so you can try them again."],
    [/^Awak betul (\d+) daripada (\d+) soalan pilihan, dan cadangan reka cipta awak sudah sampai kepada cikgu\. Cikgu yang akan memutuskan hentian ini\.$/,
      "You got $1 out of $2 multiple-choice questions right, and your creative proposal has reached your teacher. Your teacher will decide this stop."],
    [/^Awak betul (\d+) daripada (\d+)\. Hantar tugasan reka cipta supaya cikgu boleh menilai hentian ini\.$/,
      "You got $1 out of $2 right. Send the creative task so your teacher can assess this stop."],
    [/^Awak betul (\d+) daripada (\d+) dengan skor (\d+)\. Cabaran harian tidak dikira sebagai bukti TP\. Balik esok untuk set baharu\.$/,
      "You got $1 out of $2 right with a score of $3. The daily challenge does not count as TP evidence. Come back tomorrow for a new set."],
    [/^Ulangan dari hentian (\d+)\. Latihan sahaja, tidak dikira dalam keputusan hentian ini\.$/,
      "Repeat from stop $1. Practice only, not counted in the result of this stop."],
    [/^Masa membaca: nafas awak tidak berkurang selama (\d+) saat pertama\.$/,
      "Reading time: your breath does not drop for the first $1 seconds."],
    [/^Soalan bos\. (\d+) saat untuk menjawab selepas masa membaca, markah tiga kali ganda\.$/,
      "Boss question. $1 seconds to answer after the reading time, triple marks."],
    [/^Panjang cukup untuk dihantar\. (\d+) aksara\. Cikgu yang akan menilai isinya, bukan panjangnya\.$/,
      "Long enough to send. $1 characters. Your teacher will judge the content, not the length."],
    [/^Tulis sekurang-kurangnya (\d+) aksara sebelum boleh hantar\. Setakat ini (\d+)\.$/,
      "Write at least $1 characters before you can send. So far $2."],
    [/^Awak dah lepas hentian (\d+), tapi TP dikira ikut urutan\. Lepas hentian (\d+) dulu supaya TP awak naik\.$/,
      "You have cleared stop $1, but TP is counted in order. Clear stop $2 first so your TP goes up."],
    [/^(\d+) jawapan belum sampai kepada cikgu\. Ia disimpan pada telefon ini dan akan dihantar sendiri apabila talian pulih\. Teruskan bermain\.$/,
      "$1 answer(s) have not reached your teacher yet. They are saved on this phone and will be sent automatically when the connection returns. Keep playing."],
    [/^Letak (.*) di skrin telefon$/, "Add $1 to your phone screen"]
  ];

  var FRASA=[
    ["Tulis nama awak dulu, sekurang-kurangnya 2 huruf.","Write your name first, at least 2 letters."],
    ["Tulis nama awak dulu. Nama ni disimpan dalam telefon ni je.","Write your name first. It is saved on this phone only."],
    ["Main bebas: kemajuan disimpan dalam telefon ni je","Free play: progress is saved on this phone only"],
    ["Mod latihan: markah tidak dihantar kepada cikgu","Practice mode: marks are not sent to the teacher"],
    ["Masukkan kod kelas yang cikgu beri.","Enter the class code your teacher gave you."],
    ["Kod kelas ada 6 huruf atau nombor.","A class code has 6 letters or numbers."],
    ["Mencari kelas...","Finding class..."],
    ["Kelas dengan kod itu tidak dijumpai. Semak semula dengan cikgu.","No class with that code was found. Check again with your teacher."],
    ["Tidak dapat menghubungi pelayan. Semak internet dan cuba lagi.","Cannot reach the server. Check your internet and try again."],
    ["Cikgu belum memasukkan nama murid untuk kelas ini. Beritahu cikgu, atau main dahulu tanpa rekod.","Your teacher has not added student names for this class yet. Tell your teacher, or play first without a record."],
    ["Masukkan PIN 4 nombor yang cikgu beri kepada awak.","Enter the 4-digit PIN your teacher gave you."],
    ["daripada 4 nombor dimasukkan","of 4 digits entered"],
    ["PIN salah. Cuba lagi, atau tanya cikgu.","Wrong PIN. Try again, or ask your teacher."],
    ["Kod kelas dalam pautan itu tidak dijumpai. Semak dengan cikgu.","The class code in that link was not found. Check with your teacher."],
    ["Sekali tekan, terus main. Tak payah cari pautan dalam group lagi.","One tap and you are playing. No need to search for the link in the group again."],
    ["(petak dengan anak panah ke atas) di bawah skrin.","(the box with an up arrow) at the bottom of the screen."],
    ["di penjuru atas kanan Chrome.","at the top right corner of Chrome."],
    ["(Add to Home screen).","(Add to Home screen)."],
    ["Bab premium — naik taraf untuk buka","Premium chapter — upgrade to unlock"],
    ["ialah bab premium.","is a premium chapter."],
    ["Minta cikgu awak naik taraf akaun untuk buka bab ni dan bab premium lain.","Ask your teacher to upgrade the account to unlock this chapter and other premium chapters."],
    [", sudah dilepasi",", cleared"],[", menunggu cikgu",", waiting for the teacher"],[", hentian seterusnya",", next stop"],
    ["Cikgu akan membaca cadangan reka cipta awak dan memutuskan hentian 6.","Your teacher will read your creative proposal and decide stop 6."],
    ["Semua 12 kad sudah dikumpul!","All 12 cards collected!"],
    ["Ulang mana-mana hentian untuk kejar skor lebih tinggi.","Repeat any stop to chase a higher score."],
    ["Belum ada sesiapa melepasi hentian minggu ini. Jadi yang pertama!","Nobody has cleared a stop this week yet. Be the first!"],
    ["Belum ada skor direkod untuk kelas ini.","No scores recorded for this class yet."],
    ["Kiraan hentian yang dilepasi minggu ini. Bermula semula setiap Isnin.","Stops cleared this week. Resets every Monday."],
    ["Jumlah mata terbaik bagi setiap hentian dalam bab ini.","Best total points for each stop in this chapter."],
    ["Meter nafas dimatikan. Baca selama yang perlu. Cikgu nampak tanda ini pada rekod awak.","Breath meter is off. Read as long as you need. Your teacher can see this mark on your record."],
    ["Hidupkan jika meter nafas membuat awak tergesa-gesa. Soalan dan markah tetap sama.","Turn it on if the breath meter makes you rush. Questions and marks stay the same."],
    ["Mod tenang hidup: meter nafas dimatikan dan cikgu nampak tanda ini pada rekod awak.","Calm mode is on: the breath meter is off and your teacher can see this mark on your record."],
    ["Mod tenang mematikan meter nafas. Soalan dan markah tetap sama.","Calm mode turns off the breath meter. Questions and marks stay the same."],
    ["Leret jadual ke kiri untuk melihat semua lajur.","Swipe the table left to see all columns."],
    ["Contoh soalan macam ni yang murid jawab sepanjang perjalanan. Pilih jawapan yang betul.","Students answer questions like this one all along the journey. Choose the correct answer."],
    ["Boleh pilih lebih daripada satu.","You can choose more than one."],
    ["Ketik mengikut urutan betul. Ketik semula untuk buang.","Tap in the correct order. Tap again to remove."],
    ["Tulis cadangan reka cipta awak di sini...","Write your creative proposal here..."],
    ["Tidak perlu dalam mod tenang","Not needed in calm mode"],["Isi semula 40 nafas","Refill 40 breaths"],
    ["Buang dua pilihan yang salah","Remove two wrong options"],
    ["Tugasan reka cipta tidak dinilai oleh mesin. Cikgu akan membacanya dan memutuskan hentian 6.","The creative task is not marked by a machine. Your teacher will read it and decide stop 6."],
    ["Percubaan pertama ini direkod untuk cikgu. Jika belum lulus, ulang kaji dan cuba lagi: lulus pada percubaan seterusnya tetap dikira.","This first attempt is recorded for your teacher. If you have not passed yet, revise and try again: passing on a later attempt still counts."],
    ["Dihantar kepada cikgu untuk dinilai.","Sent to your teacher for assessment."],
    [". Cabaran harian tidak dikira sebagai bukti TP. Balik esok untuk set baharu.",". The daily challenge does not count as TP evidence. Come back tomorrow for a new set."],
    ["Awak pengsan sebelum sampai ke hentian seterusnya. Setiap jawapan betul beri awak satu tarikan nafas. Kalau meter ini mengganggu, hidupkan Mod tenang di peta.","You fainted before reaching the next stop. Every correct answer gives you one breath. If this meter bothers you, turn on Calm mode on the map."],
    ["Kelas awak tidak dijumpai lagi. Minta kod kelas baharu daripada cikgu.","Your class can no longer be found. Ask your teacher for a new class code."],
    ["Telefon ini tidak dapat menghubungi pelayan. Jawapan akan disimpan dan dihantar apabila talian pulih.","This phone cannot reach the server. Answers will be saved and sent when the connection returns."],
    ["Rekod disimpan pada peranti ini sahaja.","Records are saved on this device only."],
    ["Jawapan disimpan pada peranti ini dan akan dihantar apabila talian pulih.","Answers are saved on this device and will be sent when the connection returns."],
    ["Tidak dapat menghubungi pelayan.","Cannot reach the server."],
    ["Semua jawapan sudah sampai ke pelayan.","All answers have reached the server."],
    ["belum dihantar","not sent yet"],
    ["Hentian akhir belum selesai","The final stop is not finished"],
    ["Dua kad baharu dibuka!","Two new cards unlocked!"],["Kad baharu dibuka!","A new card unlocked!"],
    ["Cikgu belum memasukkan nama murid","Your teacher has not added student names"],
    ["Tekan butang","Tap the"],["Pilih","Choose"],["Tekan","Tap"],
    ["di skrin telefon","on your phone screen"]
  ];

  /* Ayat misi setiap dunia bab (DUNIA[...].misi dalam index.html). */
  var MISI={
    "Jadi saintis muda, dari pintu makmal hingga pameran inovasi.":"Be a young scientist, from the laboratory door to the innovation fair.",
    "Selami dunia sel, unit asas setiap benda hidup.":"Dive into the world of the cell, the basic unit of every living thing.",
    "Bantu badan kekal seimbang walau cuaca panas atau sejuk.":"Help the body stay balanced in hot or cold weather.",
    "Ikuti perjalanan hidup baharu, dari bunga hingga benih.":"Follow the journey of new life, from flower to seed.",
    "Kenali zarah kecil yang membina segala jirim.":"Meet the tiny particles that make up all matter.",
    "Susun unsur, asingkan campuran dan bina sebatian.":"Arrange the elements, separate mixtures and build compounds.",
    "Jejaki udara yang kita sedut, dari oksigen hingga jerebu.":"Trace the air we breathe, from oxygen to haze.",
    "Ikuti cahaya yang memantul, membias dan berwarna-warni.":"Follow light as it reflects, refracts and shows its colours.",
    "Terokai lapisan Bumi, batuan dan kuasa alam.":"Explore the layers of the Earth, its rocks and the forces of nature.",
    "Terokai kepelbagaian hidupan di hutan Malaysia.":"Explore the variety of living things in Malaysia's forests.",
    "Kaji hubungan antara hidupan dengan persekitarannya.":"Study the relationship between living things and their environment.",
    "Ikuti makanan dari pinggan hingga ke setiap sel.":"Follow food from the plate to every cell.",
    "Pertahankan badan daripada serangan kuman.":"Defend the body against attacks by germs.",
    "Ikuti setitik air dari sungai hingga ke paip rumah.":"Follow a drop of water from the river to the tap at home.",
    "Uji dunia asid dan alkali di sekeliling awak.":"Test the world of acids and alkalis around you.",
    "Hidupkan litar dan bina magnet elektrik.":"Switch on circuits and build an electromagnet.",
    "Tolak, tarik dan angkat dengan kuasa daya.":"Push, pull and lift with the power of force.",
    "Ikuti haba yang mengalir, mengembang dan memanaskan.":"Follow heat as it flows, expands and warms.",
    "Dengar, ukur dan kawal gelombang bunyi.":"Hear, measure and control sound waves.",
    "Kembara ke bintang dan galaksi yang jauh.":"Journey to distant stars and galaxies.",
    "Jelajah Sistem Suria dan kenali jiran-jiran Bumi.":"Explore the Solar System and meet the Earth's neighbours.",
    "Jejaki meteoroid, asteroid dan komet yang merentas langit.":"Track the meteoroids, asteroids and comets that cross the sky.",
    "Bawa isyarat saraf dari deria sampai ke tindakan badan.":"Carry nerve signals from the senses to the actions of the body.",
    "Bawa oksigen dari hidung sampai ke setiap sel badan.":"Carry oxygen from the nose to every cell in the body.",
    "Pam darah dari jantung ke seluruh badan, dan air ke seluruh tumbuhan.":"Pump blood from the heart around the body, and water through the whole plant.",
    "Bawa bijih dari kerak bumi sehingga menjadi logam yang berguna.":"Take ore from the Earth's crust until it becomes a useful metal.",
    "Jejaki haba yang dibebaskan dan diserap dalam setiap tindak balas.":"Track the heat released and absorbed in every reaction.",
    "Salurkan arus dari stesen janakuasa sehingga ke setiap rumah dengan selamat.":"Send current safely from the power station to every home.",
    "Tukarkan tenaga dari satu bentuk ke bentuk lain tanpa membazir.":"Change energy from one form to another without wasting it.",
    "Kenali sinaran radioaktif dan gunakannya dengan selamat untuk kesejahteraan hidup.":"Get to know radioactive radiation and use it safely for the well-being of life.",
    "Jejaki tenaga dan zarah dari Matahari sehingga sampai ke Bumi.":"Track energy and particles from the Sun until they reach the Earth.",
    "Terokai angkasa lepas dari model Ptolemy sehingga satelit Malaysia.":"Explore outer space from Ptolemy's model to Malaysia's satellites.",
    "Lepasi enam hentian untuk menguasai bab ini.":"Clear six stops to master this chapter."
  };
  for(var km in MISI) EXACT[km]=MISI[km];

  FRASA.sort(function(a,b){ return b[0].length-a[0].length; });
  var FRASA_RE=FRASA.map(function(f){
    var e=f[0].replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    /* kata pendek mesti padan sempadan perkataan supaya tidak menyentuh nama murid */
    return [new RegExp(f[0].length<12?"\\b"+e+"\\b":e,"g"), f[1]];
  });

  function ter(s){
    if(!s) return s;
    var lead=s.match(/^\s*/)[0], trail=s.match(/\s*$/)[0], t=s.trim();
    if(!t) return s;
    if(Object.prototype.hasOwnProperty.call(EXACT,t)) return lead+EXACT[t]+trail;
    var o=t, i;
    for(i=0;i<POLA.length;i++) o=o.replace(POLA[i][0],POLA[i][1]);
    for(i=0;i<FRASA_RE.length;i++) o=o.replace(FRASA_RE[i][0],FRASA_RE[i][1]);
    return lead+o+trail;
  }
  window.terBI=ter;

  var ATTR=["aria-label","title","placeholder"];
  function nod(n){
    if(n.nodeType===3){
      var p=n.parentNode;
      if(p&&(p.nodeName==="SCRIPT"||p.nodeName==="STYLE"||p.nodeName==="TEXTAREA")) return;
      var v=ter(n.nodeValue); if(v!==n.nodeValue) n.nodeValue=v;
    } else if(n.nodeType===1){
      if(n.nodeName==="SCRIPT"||n.nodeName==="STYLE") return;
      /* teks soalan sudah BI daripada bank; jangan sentuh perenggan soalan */
      for(var i=0;i<ATTR.length;i++){
        var a=n.getAttribute(ATTR[i]);
        if(a){ var b=ter(a); if(b!==a) n.setAttribute(ATTR[i],b); }
      }
      for(var c=n.firstChild;c;c=c.nextSibling) nod(c);
    }
  }

  /* alert/confirm yang dipaparkan kepada murid */
  var _al=window.alert, _co=window.confirm;
  window.alert=function(m){ return _al.call(window,String(m).split("\n").map(ter).join("\n")); };
  window.confirm=function(m){ return _co.call(window,String(m).split("\n").map(ter).join("\n")); };

  var sibuk=false, pemerhati=null;
  function mula(){
    var akar=[document.querySelector(".topbar"),document.getElementById("murid"),document.getElementById("flash")].filter(Boolean);
    document.documentElement.lang="en";
    pemerhati=new MutationObserver(function(rekod){
      if(sibuk) return; sibuk=true;
      try{
        rekod.forEach(function(r){
          if(r.type==="characterData") nod(r.target);
          else if(r.type==="attributes"){ var a=r.target.getAttribute(r.attributeName); if(a){ var b=ter(a); if(b!==a) r.target.setAttribute(r.attributeName,b); } }
          else r.addedNodes.forEach(nod);
        });
      }finally{ pemerhati.takeRecords(); sibuk=false; }
    });
    akar.forEach(function(a){
      if(a.id!=="murid"||!a.classList.contains("hidden")) nod(a);
      pemerhati.observe(a,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTR});
    });
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",mula); else mula();
})();
