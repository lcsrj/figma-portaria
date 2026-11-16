await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('4:3'));
await Promise.all(['Regular','SemiBold','Bold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const changed=new Set(),created=[],removed=[];const vars={};for(const k of['4:13','4:15','4:17'])vars[k]=await figma.variables.getVariableByIdAsync('VariableID:'+k);
function paint(active){const[r,g,b]=active?[.137,.388,.231]:[.31,.365,.42];return figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r,g,b}},'color',vars[active?'4:17':'4:15']);}
const template={};for(const[label,id]of Object.entries({'Início':'6:396','Solicitações':'6:400','Portarias':'6:405','Pendências':'6:410','Vencimentos':'6:415','Notificações':'321:8642','Relatórios':'6:420','Servidores':'6:424','Participantes externos':'6:429','Memorandos e processos':'6:434','Administração':'7:9199'})){const row=await figma.getNodeByIdAsync(id);template[label]=row.children.find(n=>n.type!=='TEXT');}
function all(n){return[n,...('children'in n?n.findAll(()=>true):[])];}
const nav=id=>({type:'NODE',destinationId:id,navigation:'NAVIGATE',transition:{type:'DISSOLVE',duration:.22,easing:{type:'EASE_OUT'}},resetScrollPosition:true});
for(const id of ROOT_IDS){const root=await figma.getNodeByIdAsync(id),side=root.children.find(n=>n.name==='Navegação principal');if(!side)continue;const account=side.children.find(n=>n.name==='Conta'),at=account?account.findAllWithCriteria({types:['TEXT']}).map(t=>t.characters):[];
const dept=at.includes('Patrícia Ramos'),self=at.includes('Helena Martins');
for(const row of side.children.filter(n=>n.name.startsWith('Menu / '))){const label=row.name.slice(7);if(label==='Portarias publicadas'||label==='Minha conta')continue;let icon=row.children.find(n=>n.type!=='TEXT');
if(!icon&&template[label]){icon=template[label].clone();row.insertChild(0,icon);created.push(...all(icon).map(n=>n.id));}
if(!icon&&label==='Assinaturas'){const f=figma.createFrame();row.insertChild(0,f);f.name='Ícone / assinatura';f.resize(18,18);f.fills=[];const v=figma.createVector();f.appendChild(v);v.name='Traço da caneta';v.vectorPaths=[{windingRule:'NONE',data:'M 11 2 L 16 7 L 7 16 L 2 16 L 2 11 Z M 10 3 L 15 8 M 2 16 L 7 16'}];v.strokes=[paint(false)];v.strokeWeight=1.4;v.strokeCap='ROUND';v.strokeJoin='ROUND';v.fills=[];v.x=1;v.y=1;created.push(f.id,v.id);icon=f;}
row.layoutMode='HORIZONTAL';row.primaryAxisSizingMode='FIXED';row.counterAxisSizingMode='FIXED';row.resize(184,label==='Memorandos e processos'?62:44);row.itemSpacing=10;row.paddingTop=row.paddingBottom=10;row.paddingLeft=row.paddingRight=10;row.counterAxisAlignItems='CENTER';row.primaryAxisAlignItems='MIN';changed.add(row.id);
const active=Array.isArray(row.fills)&&row.fills.some(p=>p.boundVariables?.color?.id==='VariableID:4:21');
if(icon){icon.resize(18,18);changed.add(icon.id);for(const n of all(icon)){if(n.type==='VECTOR'){if(n.strokes?.length)n.strokes=n.strokes.map(p=>p.type==='SOLID'?{...paint(active),opacity:p.opacity??1}:p);if(n.fills?.length)n.fills=n.fills.map(p=>p.type==='SOLID'?{...paint(active),opacity:p.opacity??1}:p);changed.add(n.id);}}}
for(const t of row.children.filter(n=>n.type==='TEXT')){t.textAutoResize='HEIGHT';t.resize(icon?136:164,t.height);t.layoutSizingHorizontal='FIXED';changed.add(t.id);}
if((dept||self)&&['Relatórios','Notificações'].includes(label)){const target=label==='Relatórios'?(dept?'287:12197':'282:2621'):(dept?'320:17431':'320:16992');const rr=row.reactions.map(r=>({trigger:r.trigger,actions:(r.actions||[]).map(a=>a.type==='CONDITIONAL'?{...a,conditionalBlocks:a.conditionalBlocks.map((b,i)=>i===1?{...b,actions:root.id===target?[]:[nav(target)]}:b)}:a)}));await row.setReactionsAsync(rr);changed.add(row.id);}
}
}
return{createdNodeIds:created,mutatedNodeIds:[...changed],removedNodeIds:removed};
