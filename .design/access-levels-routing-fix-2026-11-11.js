await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
await Promise.all([['Source Sans 3','Regular'],['Source Sans 3','SemiBold']].map(([family,style])=>figma.loadFontAsync({family,style})));
const page=figma.currentPage,created=[],changed=new Set(),gates={},samples=[];
const active='VariableID:228:3',role='VariableID:228:6',DG=MOBILE?'8:2014':'6:390',SIGN=MOBILE?'9:3038':'7:2508',VICE=MOBILE?'14:3452':'14:1585';
const rgb={r:29/255,g:41/255,b:53/255};
const eq=(id,value,type='BOOLEAN')=>({type:'EXPRESSION',resolvedType:'BOOLEAN',value:{expressionFunction:'EQUALS',expressionArguments:[{type:'VARIABLE_ALIAS',resolvedType:type,value:{type:'VARIABLE_ALIAS',id}},{type,resolvedType:type,value}]}});
const nav=id=>({type:'NODE',navigation:'NAVIGATE',destinationId:id,transition:null});
const cond=(c,yes,no)=>({type:'CONDITIONAL',conditionalBlocks:[{condition:c,actions:yes},{actions:no}]});
function text(p,s,w,size=16,bold=false){const n=figma.createText();p.appendChild(n);created.push(n.id);n.fontName={family:'Source Sans 3',style:bold?'SemiBold':'Regular'};n.fontSize=size;n.lineHeight={unit:'PIXELS',value:Math.round(size*1.4)};n.characters=s;n.name=s;n.fills=[{type:'SOLID',color:rgb}];n.textAutoResize='HEIGHT';n.resize(w,n.height);return n;}
for(const [key,label,dg,vice]of [['home','Abrindo sua área de gestão',DG,ROUTES.viceHome],['sign','Preparando o documento para assinatura',SIGN,VICE]]){
 const W=MOBILE?390:1440,H=MOBILE?844:1000,f=figma.createAutoLayout('VERTICAL');page.appendChild(f);created.push(f.id);f.name=(MOBILE?'Celular':'Computador')+' · '+label+' · Nível 3';f.resize(W,H);f.primaryAxisSizingMode=f.counterAxisSizingMode='FIXED';f.primaryAxisAlignItems=f.counterAxisAlignItems='CENTER';f.fills=[{type:'SOLID',color:{r:244/255,g:246/255,b:248/255}}];f.clipsContent=true;f.x=Math.max(...page.children.filter(n=>n.id!==f.id).map(n=>n.x+n.width))+160;f.y=120;
 const p=figma.createAutoLayout('VERTICAL');f.appendChild(p);created.push(p.id);p.name='Transição da conta de gestão';p.resize(MOBILE?350:480,1);p.layoutSizingVertical='HUG';p.paddingLeft=p.paddingRight=p.paddingTop=p.paddingBottom=24;p.itemSpacing=16;p.cornerRadius=12;p.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];const w=p.width-48;
 const component=await figma.getNodeByIdAsync('228:15'),badge=component.createInstance();p.appendChild(badge);created.push(badge.id,...badge.findAll(()=>true).map(n=>n.id));text(p,label,w,MOBILE?24:28,true);const n=text(p,'Eduardo Almeida',w,17,true),r=text(p,'Direção-Geral',w,16);n.setBoundVariable('characters',await figma.variables.getVariableByIdAsync('VariableID:228:5'));r.setBoundVariable('characters',await figma.variables.getVariableByIdAsync(role));
 await f.setReactionsAsync([{trigger:{type:'AFTER_TIMEOUT',timeout:.001},actions:[cond(eq(role,'Vice-Diretora autorizada','STRING'),[nav(vice)],[nav(dg)])]}]);gates[key]=f.id;
}
for(const f of page.children.filter(n=>n.type==='FRAME'&&![DG,SIGN,VICE,ROUTES.viceHome,...Object.values(gates)].includes(n.id))){
 let identity=ROLEMAP[f.name.replace(/^(Computador|Celular) · /,'')];const own=f.findOne(n=>n.name==='Identificação de servidor');if(own)identity=own.children.filter(n=>n.type==='TEXT').map(n=>n.characters);
 const profile=identity?.[1]||'',fallback=profile.includes('Administrador')?(MOBILE?'8:2042':'6:485'):profile.includes('Docente')?(MOBILE?'8:1932':'6:178'):profile.includes('Validadora')?(MOBILE?'8:1986':'6:295'):(MOBILE?'8:1874':'6:49');
 for(const n of f.findAll(n=>'reactions'in n&&n.reactions.length)){let edit=false;const reactions=n.reactions.map(r=>({trigger:r.trigger,actions:(r.actions||[]).map(a=>{
  if(a.type!=='CONDITIONAL')return a;const destinations=a.conditionalBlocks.flatMap(b=>b.actions.filter(a=>a.type==='NODE').map(a=>a.destinationId));
  if(destinations.some(id=>[SIGN,VICE].includes(id))){edit=true;return cond(eq(active,true),[nav(gates.sign)],[nav(ROUTES.waiting)]);}
  if(destinations.some(id=>[DG,ROUTES.viceHome].includes(id))){edit=true;const target=n.name==='Menu / Assinaturas'?ROUTES.waiting:fallback;return cond(eq(active,true),[nav(gates.home)],target===f.id?[]:[nav(target)]);}
  return a;
 })}));if(edit){await n.setReactionsAsync(reactions);changed.add(n.id);if(n.name.includes('Seguir para assinatura'))samples.push({id:n.id,root:f.id,name:n.name,reactions:n.reactions});}
 }
}
const guard=page.findOne(n=>'reactions'in n&&n.reactions.some(r=>(r.actions||[]).some(a=>a.type==='CONDITIONAL'&&a.conditionalBlocks.some(b=>b.actions.some(a=>a.type==='NODE'&&a.destinationId===ROUTES.waiting)))));
return {createdNodeIds:created,mutatedNodeIds:[...changed],gates,sample:samples[0]||null,guard:guard?{id:guard.id,name:guard.name,reactions:guard.reactions}:null};
