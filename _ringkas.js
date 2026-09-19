/* Alat audit manual: cetak setiap soalan bersama jawapan betul secara ringkas.
   Guna: node _ringkas.js t1b1 */
const b=require("./sumber/"+process.argv[2]+".js");
b.aras.forEach(a=>{a.soalan.concat([a.bos]).forEach((q,k)=>{
  let j;
  if(q.j==="pilih") j="✓ "+q.p[q.b]+"  ✗ "+q.p.filter((_,i)=>i!==q.b).join(" | ");
  else if(q.j==="banyak") j="✓ "+q.b.map(i=>q.p[i]).join(" + ")+"  ✗ "+q.p.filter((_,i)=>q.b.indexOf(i)<0).join(" | ");
  else if(q.j==="susun") j="→ "+q.b.map(i=>q.p[i]).join(" → ");
  else if(q.j==="nombor") j="= "+q.b+" "+(q.suf||"")+" ("+q.u+")";
  else j="[buka]";
  console.log(`H${a.n}.${k+1} ${q.t}\n   ${j}`);
});});
