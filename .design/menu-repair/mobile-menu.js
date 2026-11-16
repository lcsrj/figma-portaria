await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('4:4'));
await Promise.all(['Regular','SemiBold','Bold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const changed=new Set(),created=[],removed=[],V=VIEWS;const G=await figma.variables.getVariableByIdAsync('VariableID:228:3');
const nav=id=>({type:'NODE',destinationId:id,navigation:'NAVIGATE',transition:{type:'DISSOLVE',duration:.22,easing:{type:'EASE_OUT'}},resetScrollPosition:true});
const cond={type:'EXPRESSION',resolvedType:'BOOLEAN',value:{expressionFunction:'EQUALS',expressionArguments:[{type:'VARIABLE_ALIAS',resolvedType:'BOOLEAN',value:{type:'VARIABLE_ALIAS',id:G.id}},{type:'BOOLEAN',resolvedType:'BOOLEAN',value:true}]}};
async function route(n,dg,normal){await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'CONDITIONAL',conditionalBlocks:[{condition:cond,actions:[nav(dg)]},{actions:[nav(normal)]}]}]}]);changed.add(n.id);}
function all(n){return[n,...('children'in n?n.findAll(()=>true):[])];}
function rm(n){removed.push(...all(n).map(n=>n.id));n.remove();}
async function text(t,s){for(const z of t.getStyledTextSegments(['fontName']))await figma.loadFontAsync(z.fontName);t.characters=s;changed.add(t.id);}
async function sized(row){row.primaryAxisSizingMode='FIXED';row.resize(row.width,44);row.paddingTop=row.paddingBottom=10;row.primaryAxisAlignItems='CENTER';for(const t of row.findAllWithCriteria({types:['TEXT']})){t.fontSize=16;t.lineHeight={unit:'PIXELS',value:22};changed.add(t.id);}changed.add(row.id);}
const op=await figma.getNodeByIdAsync('8:2091'),panel=await figma.getNodeByIdAsync('8:2108');
for(const n of [...panel.children])if(n.name==='Separador')rm(n);panel.itemSpacing=4;changed.add(panel.id);
const map={'Início':['243:4089','8:1874'],'Solicitações':['8:2182','8:2182'],'Portarias':['9:306','9:306'],'Pendências':['10:2239','10:2239'],'Vencimentos':['10:2319','10:2319'],'Notificações':['320:24190','11:2443'],'Relatórios':['320:24115','10:2795'],'Servidores':['10:3072','10:3072'],'Participantes externos':['10:3590','10:3590'],'Memorandos e processos':['11:774','11:774'],'Administração':[V.administration,V.administration],'Assinaturas':[V.signatures,'229:4964'],'Minha conta':[V.accountGateway,'11:2520']};
const source=await figma.getNodeByIdAsync('11:3298');const account=source.clone();panel.appendChild(account);created.push(...all(account).map(n=>n.id));account.name='Menu / Minha conta';account.setBoundVariable('visible',null);account.visible=true;account.resize(302,44);
const labels=Object.keys(map);for(let i=0;i<labels.length;i++){const label=labels[i];const row=panel.children.find(n=>n.type==='FRAME'&&(n.name===label||n.name==='Menu / '+label));if(!row)continue;panel.insertChild(1+i,row);await sized(row);await route(row,...map[label]);}
const identity=await figma.getNodeByIdAsync('232:3262');await route(identity,V.accountGateway,'11:2520');
// Technical navigation follows the same hierarchy as the desktop menu.
const tech=await figma.getNodeByIdAsync('11:3307'),tp=await figma.getNodeByIdAsync('11:3324');for(const n of [...tp.children])if(n.type!=='TEXT')rm(n);tp.itemSpacing=4;changed.add(tp.id);const bad=await figma.getNodeByIdAsync('323:7732');if(bad)rm(bad);
for(const[label,to]of[['Início','8:2042'],['Administração',V.administration],['Notificações','282:10822'],['Minha conta',V.accountTech]]){const source=panel.children.find(n=>n.name===label||n.name==='Menu / '+label),row=source.clone();tp.appendChild(row);created.push(...all(row).map(n=>n.id));row.name='Menu / '+label;row.setBoundVariable('visible',null);row.visible=true;await sized(row);await route(row,map[label][0],to);}
// Management pages leave the technical menu through the common full menu; close always returns to origin.
for(const id of['8:2091','11:3307','11:3252']){const r=await figma.getNodeByIdAsync(id);for(const n of r.findAll(n=>n.name==='Controle / Fechar menu')){await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'BACK'}]}]);changed.add(n.id);}}
// The normal badge on a technical account is level 2, as on its administration screens.
const ta=await figma.getNodeByIdAsync(V.accountTech),badge=ta.findAllWithCriteria({types:['INSTANCE']}).find(n=>n.name==='Nível de acesso / 3');if(badge){await badge.swapComponent(await figma.getNodeByIdAsync('228:13'));badge.name='Nível de acesso / 2';changed.add(badge.id);}
// Correct the department Home identifier in routes written in this repair.
for(const r of figma.currentPage.children.filter(n=>n.type==='FRAME'))for(const n of r.findAll(n=>'reactions'in n&&n.reactions.length)){
let dirty=false;function fix(aa){return aa.map(a=>{if(a.type==='NODE'&&a.destinationId==='8:1974'){dirty=true;return{...a,destinationId:'8:1986'};}if(a.type==='CONDITIONAL')return{...a,conditionalBlocks:a.conditionalBlocks.map(b=>({...b,actions:fix(b.actions)}))};return a;});}
const rr=n.reactions.map(r=>({trigger:r.trigger,actions:fix(r.actions||[])}));if(dirty){await n.setReactionsAsync(rr);changed.add(n.id);}}
return{createdNodeIds:created,mutatedNodeIds:[...changed],removedNodeIds:removed};
