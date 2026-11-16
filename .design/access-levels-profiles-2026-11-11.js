await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
await Promise.all([['Source Sans 3','Regular'],['Source Sans 3','SemiBold'],['Source Sans 3','Bold'],['Carlito','Regular']].map(([family,style])=>figma.loadFontAsync({family,style})));
const created=[],changed=new Set(),page=figma.currentPage;
const V={active:await figma.variables.getVariableByIdAsync('VariableID:228:3'),staff:await figma.variables.getVariableByIdAsync('VariableID:228:4'),name:await figma.variables.getVariableByIdAsync('VariableID:228:5'),role:await figma.variables.getVariableByIdAsync('VariableID:228:6')};
const components={2:await figma.getNodeByIdAsync(MOBILE?'228:13':'228:11'),3:await figma.getNodeByIdAsync(MOBILE?'228:17':'228:15')};
const green={r:35/255,g:99/255,b:59/255},ink={r:29/255,g:41/255,b:53/255};
function al(p,name,w,gap=4){const n=figma.createAutoLayout('VERTICAL');p.appendChild(n);created.push(n.id);n.name=name;n.fills=[];n.resize(w,1);n.layoutSizingVertical='HUG';n.itemSpacing=gap;n.clipsContent=false;return n;}
function tx(p,value,w,size=14,bold=false){const n=figma.createText();p.appendChild(n);created.push(n.id);n.fontName={family:'Source Sans 3',style:bold?'SemiBold':'Regular'};n.fontSize=size;n.lineHeight={unit:'PIXELS',value:Math.round(size*1.4)};n.characters=value;n.name=value;n.fills=[{type:'SOLID',color:ink}];n.textAutoResize='HEIGHT';n.resize(w,n.height);return n;}
function bd(p,level){const n=components[level].createInstance();p.appendChild(n);created.push(n.id,...n.findAll(()=>true).map(n=>n.id));n.name='Nível de acesso / '+level;return n;}
function bind(n,key){n.setBoundVariable('visible',V[key]);changed.add(n.id);}
const set=(id,value,type)=>({type:'SET_VARIABLE',variableId:id,variableValue:{type,resolvedType:type,value}});
function session(vice=false){return [set(V.active.id,true,'BOOLEAN'),set(V.staff.id,false,'BOOLEAN'),set(V.name.id,vice?'Sofia Ribeiro':'Eduardo Almeida','STRING'),set(V.role.id,vice?'Vice-Diretora autorizada':'Direção-Geral','STRING')];}
const reset=[set(V.active.id,false,'BOOLEAN'),set(V.staff.id,true,'BOOLEAN')];
const eq=(id,value,type='BOOLEAN')=>({type:'EXPRESSION',resolvedType:'BOOLEAN',value:{expressionFunction:'EQUALS',expressionArguments:[{type:'VARIABLE_ALIAS',resolvedType:type,value:{type:'VARIABLE_ALIAS',id}},{type,resolvedType:type,value}]}});
const and=(a,b)=>({type:'EXPRESSION',resolvedType:'BOOLEAN',value:{expressionFunction:'AND',expressionArguments:[a,b]}});
const cond=(condition,yes,no)=>({type:'CONDITIONAL',conditionalBlocks:[{condition,actions:yes},{actions:no}]});
const nav=id=>({type:'NODE',navigation:'NAVIGATE',destinationId:id,transition:{type:'DISSOLVE',easing:{type:'EASE_OUT'},duration:.22}});
const DG=MOBILE?'8:2014':'6:390',SIGN=MOBILE?'9:3038':'7:2508',VICE=MOBILE?'14:3452':'14:1585',LOGIN=MOBILE?'8:1663':'5:2',HOME=MOBILE?'8:1874':'6:49',ADMIN=MOBILE?'11:913':'7:9150';
const staffHomes=MOBILE?['8:1874','8:1932','8:1986','8:2042']:['6:49','6:178','6:295','6:485'];
const menuItems=MOBILE?[['Início',HOME],['Solicitações','8:2182'],['Portarias','9:306'],['Pendências','10:2239'],['Vencimentos','10:2319'],['Relatórios','10:2795'],['Servidores','10:3072'],['Participantes externos','10:3590'],['Memorandos e processos','11:774'],['Administração',ADMIN],['Assinaturas',DG]]:[['Início',HOME],['Solicitações','6:751'],['Portarias','6:2289'],['Pendências','7:5428'],['Vencimentos','7:5643'],['Relatórios','7:6744'],['Servidores','7:7412'],['Participantes externos','7:8494'],['Memorandos e processos','7:8821'],['Administração',ADMIN],['Assinaturas',DG]];
async function menuRow(p,label,dest,always=false,idx=null){const w=MOBILE?p.width-p.paddingLeft-p.paddingRight:184,n=al(p,'Menu / '+label,w);n.paddingTop=n.paddingBottom=10;n.resize(w,44);n.layoutSizingVertical='FIXED';const t=tx(n,label,w,15,true);t.fills=[{type:'SOLID',color:green}];if(idx!==null)p.insertChild(idx,n);if(!always)bind(n,'active');let root=p;while(root.parent&&root.parent.type!=='PAGE')root=root.parent;if(root.id!==dest)await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[nav(dest)]}]);changed.add(n.id);return n;}
const roots=await Promise.all(IDS.map(id=>figma.getNodeByIdAsync(id)));
for(const f of roots){
 if(f.findOne(n=>n.name==='Nível de acesso / 2'||n.name==='Nível de acesso / 3'))continue;
 const account=!MOBILE?f.findOne(n=>n.name==='Conta'&&n.parent?.name==='Navegação principal'):null;
 const header=f.findOne(n=>n.name==='Cabeçalho'&&n.parent?.name==='Área de trabalho');
 const source=ROLEMAP[f.name.replace(/^(Computador|Celular) · /,'')];
 const names=account?account.children.filter(n=>n.type==='TEXT').map(t=>t.characters):source;
 const isVice=f.id===ROUTES.viceHome||f.id===VICE||names?.[0]==='Sofia Ribeiro';
 const is3=f.id===DG||f.id===SIGN||isVice;
 if(!account&&!MOBILE)continue;if(MOBILE&&!header)continue;
 changed.add(f.id);
 for(const t of f.findAllWithCriteria({types:['TEXT']}))if(t.characters.includes('Diretora-Geral substituta')){for(const s of t.getStyledTextSegments(['fontName']))await figma.loadFontAsync(s.fontName);t.characters=t.characters.replace('Diretora-Geral substituta','Vice-Diretora autorizada');changed.add(t.id);}
 if(account){
  const old=[...account.children];account.layoutSizingVertical='HUG';account.itemSpacing=4;
  if(is3){bd(account,3);}else{const own=al(account,'Identificação de servidor',184);for(const c of old)own.appendChild(c);bd(own,2);bind(own,'staff');const mg=al(account,'Identificação de gestão',184);const nm=tx(mg,'Eduardo Almeida',184,15,true),rl=tx(mg,'Direção-Geral',184,13);nm.setBoundVariable('characters',V.name);rl.setBoundVariable('characters',V.role);bd(mg,3);bind(mg,'active');}
  const side=account.parent;
  for(const [label,dest]of menuItems){if(side.children.some(n=>n.name==='Menu / '+label))continue;const idx=side.children.findIndex(n=>n.name==='Espaço flexível');await menuRow(side,label,dest,is3,idx<0?side.children.indexOf(account):idx);}
 }
 if(MOBILE&&header){if(is3)bd(header,3);else{bind(bd(header,2),'staff');bind(bd(header,3),'active');}}
 if(MOBILE&&f.name.includes('Menu de acesso')){
  const p=f.findOne(n=>n.name==='Navegação'&&n.type==='FRAME');if(p){const texts=p.findAllWithCriteria({types:['TEXT']});for(const [label,dest]of menuItems){const t=texts.find(t=>t.characters===label);if(!t)await menuRow(p,label,dest,false);else if(label==='Administração'&&f.id==='8:2091'){let row=t;while(row.parent.id!==p.id)row=row.parent;bind(row,'active');}}
   const mg=al(p,'Identificação de gestão',p.width-p.paddingLeft-p.paddingRight,4);tx(mg,'Conta de gestão · Nível 3',mg.width,15,true);const name=tx(mg,'Eduardo Almeida',mg.width,15),role=tx(mg,'Direção-Geral',mg.width,14);name.setBoundVariable('characters',V.name);role.setBoundVariable('characters',V.role);bind(mg,'active');}
 }
 const facts=f.findOne(n=>n.name==='Acesso e competência'&&n.type==='FRAME');
 if(facts&&!facts.children.some(n=>n.name==='Dado / Nível')){const row=al(facts,'Dado / Nível',facts.width-facts.paddingLeft-facts.paddingRight);tx(row,'Nível de acesso',row.width,14);tx(row,'2 · Acesso conforme perfil e escopo',row.width,16,true);bind(facts,'staff');const mg=al(facts.parent,'Acesso de gestão',facts.width,12);mg.paddingLeft=mg.paddingRight=mg.paddingTop=mg.paddingBottom=24;mg.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];tx(mg,'Sua conta de gestão',mg.width-48,20,true);const nm=tx(mg,'Eduardo Almeida',mg.width-48,16,true),rl=tx(mg,'Direção-Geral',mg.width-48,16);nm.setBoundVariable('characters',V.name);rl.setBoundVariable('characters',V.role);tx(mg,'Nível 3 · Permissões totais',mg.width-48,16,true);tx(mg,'Todos os módulos. Preservação do histórico e das versões assinadas.',mg.width-48,16);bind(mg,'active');const title=f.findOne(n=>n.name==='Título e contexto');if(title)for(const t of title.children.filter(n=>n.type==='TEXT'&&n.characters.includes('· Campus Videira')))bind(t,'staff');}
 if(f.id===DG||f.id===ROUTES.viceHome){f.name=(MOBILE?'Celular':'Computador')+' · Gestão da plataforma · '+(isVice?'Vice-Diretora autorizada':'Direção-Geral');const title=f.findOne(n=>n.name==='Título e contexto');if(title){for(const t of title.children.filter(n=>n.type==='TEXT')){if(t.characters==='Documentos para assinatura')t.characters='Gestão da plataforma';else if(t.characters==='Revise a versão aprovada antes de assinar.')t.characters='Nível 3 · Todos os módulos, assinatura e administração.';changed.add(t.id);}const row=al(title,'Ações de gestão',title.width,8);if(!MOBILE)row.layoutMode='HORIZONTAL';for(const [label,dest]of [['Elaborar portaria',page.children.find(n=>n.type==='FRAME'&&n.name===(MOBILE?'Celular':'Computador')+' · Elaborar portaria')?.id||HOME],['Administração',ADMIN]]){const n=await menuRow(row,label,dest,true);if(MOBILE)n.resize(title.width,44);else n.resize(200,44);}}
 }
 // Shared screens preserve the management session, while staff handoffs cannot impersonate a signatory.
 for(const n of f.findAll(n=>'reactions'in n&&n.reactions.length)){
  const reactions=n.reactions.map(r=>{let actions=(r.actions||[]).map(a=>{
   if(a.type!=='NODE'||a.navigation!=='NAVIGATE')return a;if([DG,ROUTES.viceHome].includes(f.id)&&(['Menu / Início','Início','Menu / Assinaturas'].includes(n.name)))return null;
   if(a.destinationId===LOGIN)return null;
   if([SIGN,VICE,DG].includes(a.destinationId)){
    const choose=cond(eq(V.role.id,'Vice-Diretora autorizada','STRING'),[nav(a.destinationId===DG?ROUTES.viceHome:VICE)],[nav(a.destinationId===DG?DG:SIGN)]);
    if(is3)return choose;
    return {type:'CONDITIONAL',conditionalBlocks:[{condition:and(eq(V.active.id,true),eq(V.role.id,'Vice-Diretora autorizada','STRING')),actions:[nav(a.destinationId===DG?ROUTES.viceHome:VICE)]},{condition:eq(V.active.id,true),actions:[nav(a.destinationId===DG?DG:SIGN)]},{actions:[nav(ROUTES.waiting)]}]};
   }
   if(staffHomes.includes(a.destinationId)&&a.destinationId!==f.id)return {type:'CONDITIONAL',conditionalBlocks:[{condition:and(eq(V.active.id,true),eq(V.role.id,'Vice-Diretora autorizada','STRING')),actions:[nav(ROUTES.viceHome)]},{condition:eq(V.active.id,true),actions:[nav(DG)]},{actions:[a]}]};
   return a;
  });
  const leaving=(r.actions||[]).some(a=>a.type==='NODE'&&a.destinationId===LOGIN);
  if(leaving)actions=[...reset,nav(LOGIN)];else if(is3&&actions.some(a=>a&&(a.type==='NODE'||a.type==='CONDITIONAL')))actions=[...session(isVice),...actions];
  return {trigger:r.trigger,actions:actions.filter(Boolean)};
 });await n.setReactionsAsync(reactions);changed.add(n.id);
 }
}
return {createdNodeIds:created,mutatedNodeIds:[...changed],count:roots.length};

