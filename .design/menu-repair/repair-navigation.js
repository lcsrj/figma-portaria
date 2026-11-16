await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(MODE==='D'?'4:3':'4:4'));
await Promise.all(['Regular','SemiBold','Bold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const mobile=MODE==='M',created=[],changed=new Set(),removed=[],rows=[],page=figma.currentPage,V=VIEWS;
const mark=n=>changed.add(n.id),G='VariableID:228:3',S='VariableID:228:4';
const vars={};for(const k of ['4:13','4:15','4:17','4:21','228:3','228:4','228:5','228:6'])vars[k]=await figma.variables.getVariableByIdAsync('VariableID:'+k);
function nav(id){return{type:'NODE',destinationId:id,navigation:'NAVIGATE',transition:{type:'DISSOLVE',duration:.22,easing:{type:'EASE_OUT'}},resetScrollPosition:true};}
function setBool(id,value){return{type:'SET_VARIABLE',variableId:id,variableValue:{type:'BOOLEAN',resolvedType:'BOOLEAN',value}};}
const ctx=[setBool(G,true),setBool(S,false)];
function condition(){return{type:'EXPRESSION',resolvedType:'BOOLEAN',value:{expressionFunction:'EQUALS',expressionArguments:[{type:'VARIABLE_ALIAS',resolvedType:'BOOLEAN',value:{type:'VARIABLE_ALIAS',id:G}},{type:'BOOLEAN',resolvedType:'BOOLEAN',value:true}]}};}
function choose(a,b){return{type:'CONDITIONAL',conditionalBlocks:[{condition:condition(),actions:a},{actions:b}]};}
async function route(n,dg,normal,r,management){const a=id=>id&&id!==r.id?[nav(id)]:[];let entry=[];if(r.id===(mobile?'229:4987':'229:4439')||r.id===(mobile?'8:2014':'6:390')){const vice=r.id.startsWith('229:');entry=[['228:5',vice?'Sofia Ribeiro':'Eduardo Almeida'],['228:6',vice?'Vice-Diretora autorizada':'Direção-Geral']].map(([id,value])=>({type:'SET_VARIABLE',variableId:'VariableID:'+id,variableValue:{type:'STRING',resolvedType:'STRING',value}}));}await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:management?[...ctx,...entry,...a(dg)]:[choose(a(dg),a(normal))]}]);mark(n);}
function txt(n){return n.findAllWithCriteria({types:['TEXT']});}
const order=['Início','Solicitações','Portarias','Pendências','Vencimentos','Notificações','Relatórios','Servidores','Participantes externos','Memorandos e processos','Administração','Assinaturas'];
const baseD={'Início':'6:49','Solicitações':'6:751','Portarias':'6:2289','Pendências':'7:5428','Vencimentos':'7:5643','Notificações':'7:10597','Relatórios':'7:6744','Servidores':'7:7412','Participantes externos':'7:8494','Memorandos e processos':'7:8821','Administração':V.administration,'Assinaturas':'229:4408','Minha conta':'7:10800'};
const baseM={'Início':'8:1874','Solicitações':'8:2182','Portarias':'9:306','Pendências':'10:2239','Vencimentos':'10:2319','Notificações':'11:2443','Relatórios':'10:2795','Servidores':'10:3072','Participantes externos':'10:3590','Memorandos e processos':'11:774','Administração':V.administration,'Assinaturas':'229:4964','Minha conta':'11:2520'};
const base=mobile?baseM:baseD;
const dg={...base,'Início':mobile?'243:4089':'243:1710','Assinaturas':V.signatures,'Administração':V.administration,'Relatórios':CONFIG[mobile?'dgM':'dgD']['reports-W'],'Notificações':CONFIG[mobile?'dgM':'dgD'].notifications,'Minha conta':V.accountGateway};
const analytic=new Map();for(const group of[CONFIG.app[MODE],CONFIG[mobile?'dgM':'dgD']])for(const[k,id]of Object.entries(group))analytic.set(id,k==='home'?'Início':/notification|^read$/.test(k)?'Notificações':k==='detail'?null:'Relatórios');
const statics=new Set([...Object.values(CONFIG[mobile?'dgM':'dgD']),V.signatures,V.accountDG,V.accountVice,...(mobile?['229:4987','9:3038','9:3092','9:3131','9:3177','9:3225','14:3452']:['229:4439','7:2508','7:2625','7:2727','7:2835','7:2946','14:1585'])]);
const homeGateway=mobile?'243:4089':'243:1710';
function currentModule(r,s){if(analytic.has(r.id))return analytic.get(r.id);if(r.id===V.signatures)return'Assinaturas';if(r.id===V.administration)return'Administração';if(Object.keys(V).some(k=>k.startsWith('account')&&V[k]===r.id))return null;
if(/Minha conta|Acessibilidade/.test(r.name))return null;
if(/Assinar portaria|Assinatura|assinatura|Anexar.*assin|Verificando.*assin|Serviço.*assin/.test(r.name))return'Assinaturas';
if(/Contas e permissões|Adicionar conta|Editar conta|Signatários|Configurações e serviços|Configurar série|Auditoria|auditoria|Perfis e níveis/.test(r.name))return'Administração';
const tinted=s?s.children.filter(n=>n.name.startsWith('Menu /')&&Array.isArray(n.fills)&&n.fills.some(p=>p.boundVariables?.color?.id==='VariableID:4:21')):[];
return tinted.length===1?tinted[0].name.slice(7):null;}
function paint(k){const colors={'4:13':[.114,.161,.208],'4:15':[.31,.365,.42],'4:17':[.137,.388,.231],'4:21':[.918,.953,.925]},[r,g,b]=colors[k];return figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r,g,b}},'color',vars[k]);}
async function style(n,active){n.fills=active?[paint('4:21')]:[];mark(n);if('cornerRadius'in n)n.cornerRadius=6;
for(const t of txt(n)){for(const z of t.getStyledTextSegments(['fontName']))await figma.loadFontAsync(z.fontName);t.fontName={family:'Source Sans 3',style:active?'SemiBold':'Regular'};t.fontSize=14;t.lineHeight={unit:'PIXELS',value:20};t.fills=[paint(active?'4:17':'4:13')];mark(t);}
}
const allRoots=page.children.filter(n=>n.type==='FRAME');
for(const r of allRoots.filter(r=>ROOT_IDS.includes(r.id))){const sidebar=r.children.find(n=>n.name==='Navegação principal');const acct=sidebar?.children.find(n=>n.name==='Conta'),aTexts=acct?txt(acct).map(t=>t.characters):[];
const management=statics.has(r.id)||(acct&&!acct.findAll(n=>n.name==='Identificação de servidor').length&&aTexts.some(s=>s==='Eduardo Almeida'||s==='Sofia Ribeiro'));
const tech=aTexts.includes('André Souza')||/E1-TECH|TECHLOG|Perfis e níveis/.test(r.name)||r.id===V.administration||r.id===V.accountTech||(mobile&&r.findAll(n=>n.name==='Controle / menu').some(n=>n.reactions.some(r=>(r.actions||[]).some(a=>a.type==='NODE'&&a.destinationId==='11:3307'))));
const dept=aTexts.includes('Patrícia Ramos')||/E1-DEPE|DEPE ·|DEPE-/.test(r.name)||r.id===V.accountDept;
const docente=aTexts.includes('Helena Martins')||/Docente|self-home/.test(r.name);
const external=/Nível 1|externa|Externo ·/.test(r.name)&&!sidebar?.children.some(n=>n.name==='Menu / Solicitações');
const roleHome=tech?(mobile?'8:2042':'6:485'):dept?(mobile?'8:1986':'6:295'):docente?(mobile?'8:1932':'6:178'):base['Início'];
let active=currentModule(r,sidebar);if(r.id===(mobile?'229:4987':'229:4439'))active='Início';
const myAccount=tech?V.accountTech:dept?V.accountDept:docente?(mobile?'11:3199':'8:1576'):base['Minha conta'];
if(sidebar&&!external){const menus=sidebar.children.filter(n=>n.name.startsWith('Menu /')&&order.includes(n.name.slice(7)));
const start=Math.min(...menus.map(n=>sidebar.children.indexOf(n)));for(const label of order){const n=menus.find(n=>n.name==='Menu /'+label||n.name==='Menu / '+label);if(n)sidebar.insertChild(start+order.filter(l=>order.indexOf(l)<order.indexOf(label)&&menus.some(n=>n.name==='Menu / '+l)).length,n);}
mark(sidebar);
for(const n of menus){const label=n.name.slice(7);let target=base[label];if(label==='Início')target=roleHome;if(label==='Notificações'&&tech)target=mobile?'282:10822':'282:3096';
// Preserve the role-specific normal branch for the existing business modules.
if(!['Início','Administração','Assinaturas','Relatórios','Notificações'].includes(label)){function destinations(aa){return aa.flatMap(a=>a.type==='NODE'?[a.destinationId]:a.type==='CONDITIONAL'?a.conditionalBlocks.flatMap(b=>destinations(b.actions)):[]);}const old=destinations(n.reactions.flatMap(r=>r.actions||[]));if(old.length)target=old[old.length-1];}
await route(n,dg[label],target,r,management);await style(n,label===active);rows.push({root:r.id,id:n.id,label,dg:dg[label],normal:target,active:label===active});}
if(acct){await route(acct,V.accountGateway,myAccount,r,management);for(const t of txt(acct)){if(management&&(t.characters==='Eduardo Almeida'||t.characters==='Sofia Ribeiro')){t.setBoundVariable('characters',vars['228:5']);mark(t);}if(management&&/^(Diretor-Geral|Direção-Geral|Vice-Diretora autorizada)$/.test(t.characters)){t.setBoundVariable('characters',vars['228:6']);mark(t);}}}
}
// Header settings means administration for management/technical users and personal preferences for other roles.
for(const n of r.findAll(n=>n.name==='Controle / configurações'))await route(n,V.administration,tech?V.administration:myAccount,r,management);
for(const n of r.findAll(n=>n.name==='Início'&&n.type==='TEXT'&&n.parent?.name==='Navegação contextual'))await route(n,homeGateway,roleHome,r,management);
if(mobile){for(const n of r.findAll(n=>n.name==='Controle / menu')){const old=n.reactions.flatMap(r=>r.actions||[]);let normal=old.find(a=>a.type==='NODE')?.destinationId||'8:2091';if(tech)normal='11:3307';if(r.id===V.accountDept)normal='11:3252';await route(n,'8:2091',normal,r,management);}
}
// The administration action in the management home opens the hub, not a personal/account view.
for(const n of r.findAll(n=>n.name==='Menu / Administração'&&n.parent?.name!=='Navegação principal'))await route(n,V.administration,V.administration,r,management);
}
return {mode:MODE,rootCount:ROOT_IDS.length,createdNodeIds:created,mutatedNodeIds:[...changed],removedNodeIds:removed,routeCount:rows.length};
