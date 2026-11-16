import fs from 'node:fs';
import assert from 'node:assert/strict';
const colors={categoria1:'#23633B',categoria2:'#245B83',categoria3:'#75519A',categoria4:'#805800',categoria5:'#52616D',sequencial1:'#617D6C',sequencial2:'#4C6D59',sequencial3:'#385C47',sequencial4:'#23633B',sequencial5:'#194E2D',alerta:'#805800',critico:'#B3261E'};
const luminance=h=>{const v=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]};
const rows=Object.entries(colors).map(([name,color])=>{const ratios=Object.fromEntries(['#FFFFFF','#F4F6F8'].map(bg=>{const a=luminance(color),b=luminance(bg);return[bg,(Math.max(a,b)+.05)/(Math.min(a,b)+.05)]}));assert.ok(Object.values(ratios).every(r=>r>=3),name);return{name,color,ratios,passed:true}});
fs.writeFileSync(new URL('statistics-contrast.json',import.meta.url),JSON.stringify({purpose:'Contraste dos traços e barras contra superfícies; não prova acessibilidade geral.',minimum:3,rows,passed:rows.length,total:rows.length},null,2));
console.log(JSON.stringify({passed:rows.length,total:rows.length,minContrast:Math.min(...rows.flatMap(r=>Object.values(r.ratios)))}));
