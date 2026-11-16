import fs from 'node:fs';
import assert from 'node:assert/strict';

// Dados exclusivamente fictícios; este módulo prepara o protótipo, não uma API.
export const R = '2026-11-11';
export const calculatedAt = '2026-11-11T17:00:00-03:00';
export const people = [
  {id:'S01',name:'Helena Martins',department:'DEPE',link:'Docente'},
  {id:'S02',name:'Rafael Duarte',department:'DEPE',link:'Docente'},
  {id:'S03',name:'Beatriz Nunes',department:'DEPE',link:'Docente'},
  {id:'S04',name:'Lucas Ferreira',department:'DAP',link:'Técnico'},
  {id:'S05',name:'Camila Azevedo',department:'DAP',link:'Técnico'},
];
const spec = [
  ['A01','128/2026','2026-10-23','2026-11-01','2027-10-31','Designação de trabalho'],
  ['A02','120/2026','2026-10-10','2026-10-15','2026-11-18','Designação de trabalho'],
  ['A03','117/2026','2026-09-15','2026-09-20','2026-12-05','Designação de trabalho'],
  ['A04','110/2026','2026-09-10','2026-10-01',null,'Designação de trabalho'],
  ['A05','108/2026','2026-08-15','2026-09-01','2026-12-28','Designação de trabalho'],
  ['A06','102/2026','2026-08-01','2026-11-20','2027-02-28','Designação de trabalho'],
  ['A07','099/2026','2026-07-15','2026-08-01','2026-11-10','Designação de trabalho'],
  ['A08','095/2026','2026-06-15','2026-07-01','2026-12-31','Designação de trabalho'],
  ['A09','090/2026','2026-05-15','2026-06-01','2026-12-31','Designação de trabalho'],
  ['A10','085/2026','2026-04-15','2026-05-01','2027-04-30','Normatização'],
  ['A11','080/2025','2025-12-10','2026-01-01',null,'Lotação'],
  ['A12','075/2026','2026-03-15','2026-12-01',null,'Normatização'],
];
export const acts = spec.map(([id,number,issued,start,end,purpose])=>({id,number,issued,start,end,purpose,type:purpose==='Normatização'?'Normativa':'Nova',publication:issued,versionCount:id==='A01'?4:1}));
export const events = [
  {id:'EV01',act:'A08',kind:'Revogação total',recorded:'2026-10-28',effective:'2026-11-01'},
  {id:'EV02',act:'A09',kind:'Encerramento',recorded:'2026-11-03',effective:'2026-10-30'},
  {id:'EV03',act:'A03',kind:'Revogação parcial',recorded:'2026-10-30',effective:'2026-11-05'},
  {id:'EV04',act:'A01',kind:'Revogação total',recorded:'2026-11-05',effective:'2026-12-01'},
  {id:'EV05',act:'A03',kind:'Alterada por',recorded:'2026-10-30',effective:'2026-11-01',related:'A01'},
  {id:'EV06',act:'A04',kind:'Renovada por',recorded:'2026-11-05',effective:'2026-11-05',related:'A02'},
];
export const production = ['Rascunho','Em validação','Devolvida','Aguardando assinatura','Assinatura em verificação','Aguardando publicação','Publicação parcial'].map((stage,i)=>({id:`P0${i+1}`,stage,created:'2026-11-01',lastEvent:`2026-11-${String(i+2).padStart(2,'0')}`,end:i===0?'2026-10-01':null,validator:i===1?'DEPE':null}));
const ps = [
  ['A01','S01','Presidência',4,'2026-11-01','2027-10-31'],['A01','S02','Membro',2,'2026-11-01','2027-10-31'],['A01','S03','Membro',2,'2026-11-01','2027-10-31'],
  ['A02','S01','Presidência',10,'2026-10-15','2026-11-18'],['A02','S02','Membro',2,'2026-10-15','2026-11-18'],
  ['A03','S03','Presidência',3,'2026-09-20','2026-12-05'],['A03','S04','Vice-presidência',2,'2026-09-20','2026-12-05'],
  ['A04','S01','Membro',2,'2026-10-01',null],['A04','S05','Membro',3,'2026-10-01',null],['A05','S04','Presidência',4,'2026-09-01','2026-12-28'],
  ['A06','S01','Membro',3,'2026-11-20','2027-02-28'],['A07','S02','Membro',2,'2026-08-01','2026-11-10'],
  ['A08','S05','Membro',2,'2026-07-01','2026-12-31'],['A09','S03','Membro',2,'2026-06-01','2026-12-31'],
  ['A02','S03','Membro',2,'2026-10-15','2026-10-31'],
];
export const participations = ps.map(([act,person,role,hours,start,end],i)=>({id:`PT${String(i+1).padStart(2,'0')}`,act,person,role,hours,start,end}));
export const communications = participations.slice(0,10).map((p,i)=>({participation:p.id,act:p.act,person:p.person,result:i<6?'E-mail enviado':i<8?'Comunicação alternativa':i===8?'Exceção autorizada':'Pendente',date:'2026-11-10'}));
export const requests = Array.from({length:9},(_,i)=>({id:`SOL-DEMO-${i+1}`,sent:`2026-${String(i+1).padStart(2,'0')}-05`,person:people[i%5].id,department:people[i%5].department}));
export function situation(act,ref=R,known='9999-12-31') {
  if(!act.publication || act.publication>ref) return null;
  const ev=events.filter(e=>e.act===act.id&&e.effective<=ref&&e.recorded<=known);
  if(ev.some(e=>e.kind==='Revogação total'))return 'Revogada';
  if(ev.some(e=>e.kind==='Encerramento'))return 'Encerrada';
  if(act.start>ref)return 'Vigência futura';
  if(act.end&&act.end<ref)return 'Vencida — sem encerramento';
  return act.end?'Vigente':'Vigente — sem término';
}
export function currentParts(ref=R) { return participations.filter(p=>p.start<=ref&&(!p.end||p.end>=ref)&&['Vigente','Vigente — sem término'].includes(situation(acts.find(a=>a.id===p.act),ref))); }
export function hoursFor(id,ref=R) { return currentParts(ref).filter(p=>p.person===id).reduce((n,p)=>n+p.hours,0); }
const states=['Revogada','Encerrada','Vigência futura','Vencida — sem encerramento','Vigente','Vigente — sem término'];
export const metrics = {
  reference:R,calculatedAt,published:acts.filter(a=>situation(a)).length,
  situations:states.map(s=>[s,acts.filter(a=>situation(a)===s).length]),
  production:production.map(p=>[p.stage,1]),activeActs:acts.filter(a=>['Vigente','Vigente — sem término'].includes(situation(a))).length,
  participations:currentParts().length,servers:new Set(currentParts().map(p=>p.person)).size,
  hours:currentParts().reduce((n,p)=>n+p.hours,0),
  byPerson:people.map(p=>({...p,participations:currentParts().filter(q=>q.person===p.id).length,hours:hoursFor(p.id)})),
  byDepartment:['DEPE','DAP'].map(d=>[d,currentParts().filter(p=>people.find(s=>s.id===p.person).department===d).length]),
  hoursByDepartment:['DEPE','DAP'].map(d=>[d,people.filter(p=>p.department===d).reduce((n,p)=>n+hoursFor(p.id),0)]),
  byRole:['Presidência','Vice-presidência','Membro'].map(r=>[r,currentParts().filter(p=>p.role===r).length]),
  participationBands:[1,2,3,4].map(n=>[n===4?'4 ou mais':String(n),people.filter(p=>{const c=currentParts().filter(q=>q.person===p.id).length;return n===4?c>=4:c===n}).length]),
  hourBands:[['Até 4 h',2],['Mais de 4 a 8 h',2],['Mais de 8 a 12 h',0],['Mais de 12 h',1]],
  emitted:11,updated:2,partialRevocations:1,requests:requests.length,signatures:2,validations:1,
  expiry:[['0–7 dias',1],['8–30 dias',1],['31–60 dias',1]],
  communications:['E-mail enviado','Comunicação alternativa','Exceção autorizada','Pendente'].map(r=>[r,communications.filter(c=>c.result===r).length]),
  monthly:Array.from({length:12},(_,i)=>{const m=String(i+1).padStart(2,'0');return [m,requests.filter(r=>r.sent.startsWith(`2026-${m}`)).length,acts.filter(a=>a.publication<=R&&a.publication.startsWith(`2026-${m}`)).length]}),
  years:[['2025 até 11/11',0],['2026 até 11/11',11]],
  yearsFull:[['2025',1],['2026 até 11/11',11]],
  purposes:['Designação de trabalho','Lotação','Normatização'].map(p=>[p,acts.filter(a=>a.issued.startsWith('2026')&&a.purpose===p).length]),
  workloadTimeline:['2026-09-20','2026-10-01','2026-10-15','2026-11-01','2026-11-11'].map(d=>[d,hoursFor('S01',d)]),
};
const checks=[]; const check=(label,fn)=>{fn();checks.push({label,passed:true})};
check('Reconciliação: 1+1+2+1+5+2=12',()=>assert.equal(metrics.situations.reduce((n,r)=>n+r[1],0),metrics.published));
check('10 participações, 5 servidores, 34 horas',()=>assert.deepEqual([metrics.participations,metrics.servers,metrics.hours],[10,5,34]));
check('Helena: 3 participações e 16 horas; soma informativa',()=>assert.deepEqual([metrics.byPerson[0].participations,metrics.byPerson[0].hours],[3,16]));
check('Departamentos reconciliados',()=>{assert.equal(metrics.byDepartment.reduce((n,r)=>n+r[1],0),10);assert.equal(metrics.hoursByDepartment.reduce((n,r)=>n+r[1],0),34)});
check('Dia final igual a R permanece vigente',()=>assert.equal(situation({...acts[0],end:R}),'Vigente'));
check('Revogação agendada não antecipa efeito',()=>assert.equal(situation(acts[0]),'Vigente'));
check('Encerramento retroativo depende da base de registros',()=>{assert.equal(situation(acts[8],'2026-10-31','2026-10-31'),'Vigente');assert.equal(situation(acts[8],'2026-10-31','2026-11-11'),'Encerrada')});
check('Participação substituída não conta em R',()=>assert.ok(!currentParts().some(p=>p.id==='PT15')));
check('Sem término e rascunho vencido separados',()=>{assert.equal(situation(acts[3]),'Vigente — sem término');assert.equal(production[0].stage,'Rascunho')});
check('10 h exatas permitidas por participação docente',()=>assert.ok(currentParts().filter(p=>people.find(s=>s.id===p.person).link==='Docente').every(p=>p.hours<=10)));
check('Comunicações reconciliam 6+2+1+1=10',()=>assert.equal(metrics.communications.reduce((n,r)=>n+r[1],0),10));
check('Meses e comparação anual por janelas iguais reconciliados',()=>{assert.equal(metrics.monthly.reduce((n,r)=>n+r[1],0),9);assert.equal(metrics.monthly.reduce((n,r)=>n+r[2],0),11);assert.deepEqual(metrics.years.map(r=>r[1]),[0,11])});
const scenario={title:'Dados demonstrativos — cenário analítico v1.1',reference:R,calculatedAt,timezone:'America/Sao_Paulo',hypotheses:['H-D05','H-D06','D11','H-D14','H-D17','D25 pendente','D26 pendente','D27 pendente'],people,acts,events,production,participations,communications,requests,metrics};
fs.writeFileSync(new URL('./statistics-scenario.json',import.meta.url),JSON.stringify(scenario,null,2));
fs.writeFileSync(new URL('./statistics-scenario-checks.json',import.meta.url),JSON.stringify({checks,passed:checks.length,total:checks.length,scope:'Verifica o cenário fictício; não é teste de backend.'},null,2));
console.log(JSON.stringify({metrics,checks:checks.length}));
