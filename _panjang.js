/* Alat bantu penulis: senarai soalan 'pilih' yang jawapan betulnya paling panjang.
   Guna: node _panjang.js t1b2 */
const b=require("./sumber/"+process.argv[2]+".js");let n=0,L=0,S=0;
b.aras.forEach(a=>a.soalan.concat([a.bos]).forEach((q,k)=>{if(q.j!=="pilih")return;n++;
 const len=q.p.map(x=>x.length),c=len[q.b],o=len.filter((_,i)=>i!==q.b);
 const lg=c>Math.max(...o),sh=c<Math.min(...o);if(lg)L++;if(sh)S++;
 if(lg)console.log(`H${a.n}.${k+1} ${c} vs ${o.join("/")} | ${q.p[q.b]}`);}));
console.log(`pilih ${n}: panjang ${L} (${Math.round(100*L/n)}%, had ${Math.floor(.35*n)}), pendek ${S} (${Math.round(100*S/n)}%, perlu ${Math.ceil(.1*n)}-${Math.floor(.35*n)})`);
