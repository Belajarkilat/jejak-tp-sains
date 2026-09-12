/* Uji imbangan kedudukan jawapan dengan mengambil fungsi kocok SEBENAR
   daripada fail aplikasi, bukan salinan yang ditulis semula. */
const fs=require("fs");
const app=fs.readFileSync("semak.js","utf8");
function ambil(nama){
  const i=app.indexOf("function "+nama+"(");
  if(i<0) throw new Error("tak jumpa "+nama);
  let d=0,j=app.indexOf("{",i);
  for(let k=j;k<app.length;k++){ if(app[k]==="{")d++; else if(app[k]==="}"){d--; if(!d) return app.slice(i,k+1);} }
}
const src=["rnd","ringkas","kocokSemua","letakJawapan","kocokBiasa"].map(ambil).join("\n");

global.window={};
new Function("window", fs.readFileSync("bank-t3b2.js","utf8"))(global.window);
const asal=global.window.BANK["t3b2"];

const kira={}, jujukan=[];
const N=400;
for(let r=0;r<N;r++){
  const bab=JSON.parse(JSON.stringify(asal));
  const ARAS=bab.aras.map(a=>({...a,lampiran:null}));
  new Function("ARAS", src+"\nkocokSemua();")(ARAS);
  ARAS.forEach(a=>{
    const baris=[];
    a.soalan.concat([a.bos]).filter(Boolean).forEach(q=>{
      if(q.j!=="pilih") return;
      kira[q.b]=(kira[q.b]||0)+1;
      baris.push(q.b);
    });
    jujukan.push(baris);
  });
}
const jum=Object.values(kira).reduce((a,b)=>a+b,0);
console.log("Pusingan diuji:", N, "· jumlah soalan satu jawapan:", jum);
console.log("Taburan kedudukan jawapan betul:");
["A","B","C","D"].forEach((h,i)=>{
  const c=kira[i]||0;
  console.log("  "+h+"  "+String(c).padStart(5)+"  "+(100*c/jum).toFixed(1)+"%");
});
// rentetan terpanjang kedudukan sama dalam satu hentian
let terpanjang=0, contoh=null;
jujukan.forEach(b=>{
  let n=1;
  for(let i=1;i<b.length;i++){
    n = (b[i]===b[i-1]) ? n+1 : 1;
    if(n>terpanjang){ terpanjang=n; contoh=b.join(""); }
  }
});
console.log("Rentetan terpanjang kedudukan yang sama dalam satu hentian:", terpanjang, "(contoh "+contoh+")");
// adakah mana-mana hentian pernah semua-A?
const semuaSama=jujukan.filter(b=>b.length>3 && new Set(b).size===1).length;
console.log("Hentian yang semua jawapannya pada kedudukan sama:", semuaSama);
