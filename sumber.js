/* Sumber lawatan (3 Okt 2026).

   Pautan promosi membawa ?dari=<kod kumpulan>, cth. landing.html?dari=tc.
   Kod pertama yang dilihat disimpan dalam pelayar ("cn-dari") supaya ia
   masih ada apabila guru mendaftar beberapa hari kemudian. Satu ping
   'lawat' dihantar sekali bagi setiap sesi pelayar: di landing.html sentiasa,
   dan di halaman lain hanya jika pautan membawa ?dari (supaya murid yang
   membuka pautan kelas tidak dikira sebagai lawatan).

   Pendaftaran guru merekod kod ini melalui lo_guru_tanda_sumber (index.html). */
/* Perayap (pratonton pautan Meta dsb.), pelayar automatik dan localhost tidak dikira sebagai lawatan (17 Okt 2026). */
var NG_ROBOT=(function(){try{return !!navigator.webdriver||/bot|crawl|spider|slurp|facebookexternalhit|meta-externalagent|facebookcatalog|headlesschrome|lighthouse/i.test(navigator.userAgent||"")||/^(localhost|127.0.0.1)$/.test(location.hostname);}catch(e){return true;}})();
/* Rujukan lawatan (18 Okt 2026): hos laman yang membawa pelawat (tanpa www.), atau 'langsung'
   jika tiada (WhatsApp, taip sendiri, penanda buku), ditambah '|app-<nama>' jika dibuka dalam
   pelayar app. Disimpan dalam lajur rujuk bersama ping 'lawat'. */
var NG_RUJUK=(function(){try{
  var ua=navigator.userAgent||"", a="", r=document.referrer||"", h="";
  if(/FBAN|FBAV|FB_IAB/.test(ua)) a="facebook"; else if(/Instagram/.test(ua)) a="instagram";
  else if(/Barcelona/.test(ua)) a="threads"; else if(/musical_ly|BytedanceWebview|TikTok/i.test(ua)) a="tiktok";
  else if(/Telegram/i.test(ua)) a="telegram"; else if(/\bLine\//.test(ua)) a="line";
  if(r){try{var u=new URL(r);h=(u.protocol==="android-app:"?"android-app:":"")+u.hostname.replace(/^www\./,"");}catch(x){}}
  return (h||"langsung")+(a?"|app-"+a:"");
}catch(e){return "";}})();
(function(){
  try{
    if(NG_ROBOT) return;
    var m=/[?&]dari=([^&#]*)/.exec(location.search), kod="";
    if(m) kod=decodeURIComponent(m[1]).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,30);
    if(!kod&&/^\/bab\//.test(location.pathname)) kod="seo"; /* halaman SEO bab (27 Okt 2026) */
    if(kod&&!localStorage.getItem("cn-dari")) localStorage.setItem("cn-dari",kod);

    var diLanding=/landing(\.html)?$/.test(location.pathname)||/^\/bab\//.test(location.pathname);
    if(!(diLanding||kod)||sessionStorage.getItem("cn-lawat")) return;
    var awan=window.CN_AWAN; if(!awan) return;
    var p=localStorage.getItem("cn-peranti");
    if(!p||!/^[a-z0-9]{8}$/.test(p)){
      p=Math.random().toString(36).slice(2,10).replace(/[^a-z0-9]/g,"0");
      while(p.length<8) p+="0";
      localStorage.setItem("cn-peranti",p);
    }
    sessionStorage.setItem("cn-lawat","1");
    fetch(awan.url+"/rest/v1/rpc/lo_ping",{
      method:"POST", keepalive:true,
      headers:{"apikey":awan.kunci,"Authorization":"Bearer "+awan.kunci,"Content-Type":"application/json"},
      body:JSON.stringify({p_jenis:"lawat",p_peranti:p,p_nota:kod||localStorage.getItem("cn-dari")||"",p_rujuk:NG_RUJUK})
    }).catch(function(){});
  }catch(e){}
})();

/* Klik butang di landing (13 Okt 2026): satu ping 'klik' bagi setiap butang utama.
   nota = daftar | contoh | murid | video. Hanya di landing; sekali bagi setiap jenis setiap sesi. */
(function(){
  try{
    if(NG_ROBOT) return;
    if(!/landing(\.html)?$/.test(location.pathname)) return;
    var awan=window.CN_AWAN; if(!awan) return;
    document.addEventListener("click",function(e){
      try{
        var a=e.target.closest&&e.target.closest("a"); if(!a) return;
        var h=a.getAttribute("href")||"", n="";
        if(/[?&]daftar/.test(h)) n="daftar";
        else if(/demo=cikgu/.test(h)) n="contoh";
        else if(/demo=murid/.test(h)) n="murid";
        else if(h==="#video") n="video";
        if(!n||sessionStorage.getItem("cn-klik-"+n)) return;
        var p=localStorage.getItem("cn-peranti"); if(!p||!/^[a-z0-9]{8}$/.test(p)) return;
        sessionStorage.setItem("cn-klik-"+n,"1");
        fetch(awan.url+"/rest/v1/rpc/lo_ping",{
          method:"POST", keepalive:true,
          headers:{"apikey":awan.kunci,"Authorization":"Bearer "+awan.kunci,"Content-Type":"application/json"},
          body:JSON.stringify({p_jenis:"klik",p_peranti:p,p_nota:n})
        }).catch(function(){});
      }catch(x){}
    });
  }catch(x){}
})();
