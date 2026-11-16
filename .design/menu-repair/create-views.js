await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(MODE==='D'?'4:3':'4:4'));
const mobile=MODE==='M', page=figma.currentPage, created=[],mutated=[],removed=[],out={};
await Promise.all(['Regular','SemiBold','Bold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const v={};for(const[k,id]of Object.entries({surface:'4:11',ink:'4:13',muted:'4:15',green:'4:17',border:'4:23',radius:'4:46',name:'228:5',role:'228:6'}))v[k]=await figma.variables.getVariableByIdAsync('VariableID:'+id);
const rgb={surface:[1,1,1],ink:[.114,.161,.208],muted:[.31,.365,.42],green:[.137,.388,.231],border:[.84,.87,.89]};
function paint(k){const[r,g,b]=rgb[k];return figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r,g,b}},'color',v[k]);}
const nav=id=>({type:'NODE',destinationId:id,navigation:'NAVIGATE',transition:{type:'DISSOLVE',duration:.22,easing:{type:'EASE_OUT'}},resetScrollPosition:true});
async function wire(n,to){await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[nav(to)]}]);mutated.push(n.id);}
let slot=0,right=Math.max(...page.children.map(n=>n.x+n.width))+140;
function ids(n){return[n.id,...('children'in n?n.findAll(()=>true).map(c=>c.id):[])];}
async function clone(id,key,title){const n=(await figma.getNodeByIdAsync(id)).clone();n.x=right+(slot%3)*(n.width+100);n.y=Math.floor(slot/3)*(mobile?1040:1140);slot++;n.name=(mobile?'Celular':'Computador')+' · '+title;out[key]=n.id;created.push(...ids(n));return n;}
function body(n){return n.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Conteúdo');}
function rm(n){removed.push(...ids(n));n.remove();}
function text(p,s,w,size=16,bold=false,color='ink'){const t=figma.createText();p.appendChild(t);created.push(t.id);t.fontName={family:'Source Sans 3',style:bold?'SemiBold':'Regular'};t.fontSize=size;t.lineHeight={unit:'PIXELS',value:Math.ceil(size*1.4)};t.characters=s;t.textAutoResize='HEIGHT';t.resize(w,t.height);t.fills=[paint(color)];return t;}
function al(p,name,w,gap=16,pad=0,bg=false){const f=figma.createAutoLayout('VERTICAL');p.appendChild(f);created.push(f.id);f.name=name;f.resize(w,1);f.layoutSizingVertical='HUG';f.itemSpacing=gap;f.fills=bg?[paint('surface')]:[];if(pad){f.paddingTop=f.paddingBottom=f.paddingLeft=f.paddingRight=pad;f.setBoundVariable('cornerRadius',v.radius);f.strokes=[paint('border')];}return f;}
async function edit(t,s){for(const z of t.getStyledTextSegments(['fontName']))await figma.loadFontAsync(z.fontName);t.characters=s;mutated.push(t.id);}
function texts(n){return n.findAllWithCriteria({types:['TEXT']});}
async function stripSession(n){for(const c of [n,...n.findAll(x=>'reactions'in x&&x.reactions.length)]){if(!('reactions'in c)||!c.reactions.length)continue;function clean(aa){return aa.filter(a=>a.type!=='SET_VARIABLE').map(a=>a.type==='CONDITIONAL'?{...a,conditionalBlocks:a.conditionalBlocks.map(b=>({...b,actions:clean(b.actions)}))}:a);}await c.setReactionsAsync(c.reactions.map(r=>({trigger:r.trigger,actions:clean(r.actions||[])})));mutated.push(c.id);}}
// A dedicated queue, distinct from Home and My account. Preserve the known signing workflow.
const sig=await clone(mobile?'229:4987':'229:4439','signatures','Assinaturas');await stripSession(sig);
for(const t of texts(sig)){if(t.characters==='Gestão da plataforma')await edit(t,'Assinaturas');if(t.characters==='/  Gestão da plataforma')await edit(t,'/  Assinaturas');if(t.characters==='Nível 4 · Todos os módulos, assinatura e administração.')await edit(t,'Confira a versão congelada e prossiga para a assinatura do documento.');if(t.characters==='Sua assinatura')await edit(t,'Documentos para assinatura');}
const sigBody=body(sig);for(const n of sigBody.findAll(n=>n.name==='Registro / 129/2026 · Lotação'))rm(n);
for(const n of sigBody.findAll(n=>n.name==='Menu / Elaborar portaria'||n.name==='Menu / Administração'))rm(n);
for(const n of sigBody.findAll(n=>n.name==='Registro / 128/2026 · Comissão da SEPE'))await wire(n,mobile?'243:4097':'243:1718');
if(!mobile){const a=sig.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Conta');for(const t of texts(a)){if(t.characters==='Sofia Ribeiro')t.setBoundVariable('characters',v.name);if(t.characters==='Vice-Diretora autorizada')t.setBoundVariable('characters',v.role);}}
// Administration is a module landing; the existing account, signatory, services and audit views stay intact.
const admin=await clone(mobile?'11:913':'7:9150','administration','Administração');const b=body(admin);for(const n of [...b.children])rm(n);b.itemSpacing=24;const w=b.width-b.paddingLeft-b.paddingRight;
text(b,'Administração',w,mobile?26:30,true);text(b,'Gerencie contas, signatários, serviços e o histórico de auditoria do campus.',w,16,false,'muted');
const list=al(b,'Áreas da administração',w,0,mobile?16:24,true);
const items=mobile?[
['Contas e permissões','Cadastros, perfis, escopos e situação de acesso.','11:913'],['Signatários e substituições','Competência de assinatura e períodos de autorização.','11:1095'],['Configurações e serviços','Séries, integrações e serviços institucionais.','11:1182'],['Registro de auditoria','Consulte as ações e alterações registradas.','11:2392']]:[
['Contas e permissões','Cadastros, perfis, escopos e situação de acesso.','7:9150'],['Signatários e substituições','Competência de assinatura e períodos de autorização.','7:9585'],['Configurações e serviços','Séries, integrações e serviços institucionais.','7:9800'],['Registro de auditoria','Consulte as ações e alterações registradas.','7:10478']];
const btn=await figma.getNodeByIdAsync('4:94');for(let i=0;i<items.length;i++){const[label,desc,to]=items[i],inner=w-(mobile?32:48);const row=al(list,'Área / '+label,inner,8,0,false);row.paddingTop=row.paddingBottom=16;text(row,label,inner,19,true);text(row,desc,inner,15,false,'muted');const a=btn.createInstance();row.appendChild(a);created.push(...ids(a));a.name='Ação / Abrir '+label;a.setProperties({'Rótulo#4:16':'Abrir '+(i===0?'contas':i===1?'signatários':i===2?'configurações':'auditoria')});await wire(a,to);if(i<items.length-1){row.strokeBottomWeight=1;row.strokes=[paint('border')];}}
// Separate account content for management and technical/department roles.
for(const def of [
{key:'accountDG',name:'Eduardo Almeida',role:'Direção-Geral',user:'eduardo.almeida',scope:'Campus Videira · todos os módulos',level:'4 · Acesso total conforme competência vigente',source:mobile?'11:2520':'7:10800',sidebar:'6:390'},
{key:'accountVice',name:'Sofia Ribeiro',role:'Vice-Diretora autorizada',user:'sofia.ribeiro',scope:'Campus Videira · autorização de 01/11 a 15/11/2026',level:'4 · Acesso total durante a autorização vigente',source:mobile?'11:2520':'7:10800',sidebar:'229:4439'},
{key:'accountTech',name:'André Souza',role:'Administrador técnico',user:'andre.souza',scope:'Contas, configurações, serviços e auditoria',level:'2 · Administração técnica',source:mobile?'11:2520':'7:10800',sidebar:'7:9150'},
{key:'accountDept',name:'Patrícia Ramos',role:'Validadora · DEPE',user:'patricia.ramos',scope:'Departamento de Ensino, Pesquisa e Extensão',level:'2 · Validação conforme escopo departamental',source:mobile?'11:3199':'8:1576',sidebar:'6:295'}]){
const r=await clone(def.source,def.key,'Minha conta · '+def.role),bb=body(r);for(const n of [...bb.children])if(n.name==='Acesso de gestão')rm(n);
const fields={'Usuário':def.user,'E-mail':def.user+'@ifc.edu.br','Perfil':def.role,'Escopo':def.scope,'Nível de acesso':def.level};
const access=bb.children.find(n=>n.name==='Acesso e competência');for(const row of access.children){if(!('children'in row))continue;const tt=texts(row);if(tt.length>=2&&fields[tt[0].characters])await edit(tt[1],fields[tt[0].characters]);}
for(const t of texts(bb)){if(/^(Marina Costa · Gabinete|Helena Martins · Docente)/.test(t.characters))await edit(t,def.name+' · '+def.role+' · Campus Videira');}
if(!mobile){const old=r.children.find(n=>n.name==='Navegação principal'),src=await figma.getNodeByIdAsync(def.sidebar),ss=src.children.find(n=>n.name==='Navegação principal').clone();r.insertChild(0,ss);ss.x=0;ss.y=0;created.push(...ids(ss));rm(old);}
}
// Account gateway uses the management profile; technical and department menus route to their own pages.
const gateway=await clone(mobile?'243:4089':'243:1710','accountGateway','Navegação · Minha conta da gestão');
const cond={type:'EXPRESSION',resolvedType:'BOOLEAN',value:{expressionFunction:'EQUALS',expressionArguments:[{type:'VARIABLE_ALIAS',resolvedType:'STRING',value:{type:'VARIABLE_ALIAS',id:'VariableID:228:6'}},{type:'STRING',resolvedType:'STRING',value:'Vice-Diretora autorizada'}]}};
await gateway.setReactionsAsync([{trigger:{type:'AFTER_TIMEOUT',timeout:.001},actions:[{type:'CONDITIONAL',conditionalBlocks:[{condition:cond,actions:[nav(out.accountVice)]},{actions:[nav(out.accountDG)]}]}]}]);mutated.push(gateway.id);
return {mode:MODE,views:out,createdNodeIds:created,mutatedNodeIds:mutated,removedNodeIds:removed};
