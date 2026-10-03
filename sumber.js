/* Sumber lawatan (3 Okt 2026).

   Pautan promosi membawa ?dari=<kod kumpulan>, cth. landing.html?dari=tc.
   Kod pertama yang dilihat disimpan dalam pelayar ("cn-dari") supaya ia
   masih ada apabila guru mendaftar beberapa hari kemudian. Satu ping
   'lawat' dihantar sekali bagi setiap sesi pelayar: di landing.html sentiasa,
   dan di halaman lain hanya jika pautan membawa ?dari (supaya murid yang
   membuka pautan kelas tidak dikira sebagai lawatan).

   Pendaftaran guru merekod kod ini melalui lo_guru_tanda_sumber (index.html). */
(function(){
  try{
    var m=/[?&]dari=([^&#]*)/.exec(location.search), kod="";
    if(m) kod=decodeURIComponent(m[1]).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,30);
    if(kod&&!localStorage.getItem("cn-dari")) localStorage.setItem("cn-dari",kod);

    var diLanding=/landing(\.html)?$/.test(location.pathname);
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
      body:JSON.stringify({p_jenis:"lawat",p_peranti:p,p_nota:kod||localStorage.getItem("cn-dari")||""})
    }).catch(function(){});
  }catch(e){}
})();
