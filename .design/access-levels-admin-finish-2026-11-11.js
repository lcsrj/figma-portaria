await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
await Promise.all([['Source Sans 3','Regular'],['Source Sans 3','SemiBold'],['Roboto','Regular'],['Roboto','Bold'],['Roboto','Medium'],['Inter','Bold'],['Inter','Extra Bold']].map(([family,style])=>figma.loadFontAsync({family,style})));
const created=[],changed=new Set(),removed=[],page=figma.currentPage;
const tint={r:234/255,g:243/255,b:236/255},green={r:35/255,g:99/255,b:59/255};
function al(p,name,w,gap=12){const n=figma.createAutoLayout('VERTICAL');p.appendChild(n);created.push(n.id);n.name=name;n.resize(w,1);n.fills=[];n.itemSpacing=gap;n.layoutSizingVertical='HUG';return n;}
function tx(p,value,w,size=16,bold=false){const n=figma.createText();p.appendChild(n);created.push(n.id);n.name=value;n.fontName={family:'Source Sans 3',style:bold?'SemiBold':'Regular'};n.fontSize=size;n.lineHeight={unit:'PIXELS',value:Math.round(size*1.45)};n.characters=value;n.fills=[{type:'SOLID',color:{r:29/255,g:41/255,b:53/255}}];n.textAutoResize='HEIGHT';n.resize(w,n.height);return n;}
const nav=id=>({type:'NODE',navigation:'NAVIGATE',destinationId:id,transition:{type:'DISSOLVE',easing:{type:'EASE_OUT'},duration:.22}});
async function link(n,id){await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[nav(id)]}]);changed.add(n.id);}
for(const id of [ROUTES.login,ROUTES.filled,ROUTES.error]){
 const f=await figma.getNodeByIdAsync(id),c=f.findOne(n=>n.name==='Acesso ao Gestor de Portarias'),form=c.findOne(n=>n.name==='Formulário'),actions=form.findOne(n=>n.name==='Ações de autenticação'),back=c.findOne(n=>n.name==='Voltar ao acesso de servidores');
 for(const n of actions.children.filter(n=>n.type==='FRAME'&&n.name==='Outras formas de acesso'&&n.children.length===0)){removed.push(n.id);n.remove();}
 if(back)actions.appendChild(back);
 c.itemSpacing=16;c.paddingTop=c.paddingBottom=24;
 const logo=c.findOne(n=>n.name==='Marca institucional no cartão');if(logo){logo.children[0].resize(270,270*275/828);logo.layoutSizingVertical='HUG';changed.add(logo.children[0].id);changed.add(logo.id);}
 const sub=c.findOne(n=>n.name==='Orientação de acesso externo');if(sub){sub.characters='Consulte portarias e documentos publicados.';sub.fontSize=MOBILE?16:18;sub.lineHeight={unit:'PIXELS',value:24};changed.add(sub.id);}
 const body=f.findOne(n=>n.name==='Apresentação e acesso');if(body){body.counterAxisAlignItems=MOBILE?'CENTER':'MIN';changed.add(body.id);}
 changed.add(c.id);changed.add(actions.id);if(back)changed.add(back.id);
}
for(const id of [MOBILE?'8:2014':'6:390',ROUTES.viceHome]){
 const f=await figma.getNodeByIdAsync(id),title=f.findOne(n=>n.name==='Título e contexto');title.layoutSizingVertical='HUG';changed.add(title.id);
 for(const t of f.findAllWithCriteria({types:['TEXT']}))if(t.characters==='/  Documentos para assinatura'){t.characters='/  Gestão da plataforma';changed.add(t.id);}
 for(const row of title.findAll(n=>n.type==='FRAME'&&n.name.startsWith('Menu /'))){row.fills=[{type:'SOLID',color:tint}];row.cornerRadius=8;row.paddingLeft=row.paddingRight=12;for(const t of row.children.filter(n=>n.type==='TEXT')){t.resize(row.width-24,t.height);changed.add(t.id);}changed.add(row.id);}
}
const admin=await figma.getNodeByIdAsync(MOBILE?'11:913':'7:9150'),catalog=admin.clone();page.appendChild(catalog);created.push(catalog.id,...catalog.findAll(()=>true).map(n=>n.id));catalog.name=(MOBILE?'Celular':'Computador')+' · Perfis e níveis de acesso';catalog.x=Math.max(...page.children.filter(n=>n.id!==catalog.id).map(n=>n.x+n.width))+160;catalog.y=120;
const body=catalog.findOne(n=>n.name==='Conteúdo'),w=body.width-body.paddingLeft-body.paddingRight;
for(const n of [...body.children]){removed.push(n.id);n.remove();}
tx(body,'Perfis e níveis de acesso',w,MOBILE?26:30,true);tx(body,'O nível é definido pelo perfil e pelas competências autorizadas.',w);
const set=await figma.getNodeByIdAsync('228:19');
const groups=[
 [3,'Gestão com acesso total',[
  ['Direção-Geral','Todos os módulos: consulta, elaboração, validação, assinatura, publicação, cadastros, relatórios, contas, configurações e auditoria.'],
  ['Vice-Diretor autorizado','As mesmas permissões totais da Direção-Geral, mediante autorização registrada e dentro do período de competência.']]],
 [2,'Servidores e perfis operacionais',[
  ['Docentes e técnicos administrativos','Consultar, solicitar portarias e acompanhar as próprias participações. Sem elaboração direta, assinatura ou administração.'],
  ['Gabinete e CGP','Elaborar, tramitar, registrar publicação e comunicar conforme o escopo atribuído. Sem competência automática para assinar.'],
  ['Diretores de departamento · DEPE e DAP','Validar demandas e participações do próprio departamento. Sem emissão final, assinatura ou administração de contas.'],
  ['Administrador técnico','Gerenciar contas, configurações e auditoria. O perfil técnico não concede assinatura, validação ou publicação de atos.']]],
 [1,'Consulta externa com acesso mínimo',[
  ['Acesso externo','Consultar apenas portarias publicadas e os documentos preparados para divulgação. Sem minutas, solicitações, edição, validação, assinatura, cadastros internos ou administração.']]]
];
for(const [level,title,rows]of groups){const p=al(body,title,w,16);p.paddingLeft=p.paddingRight=p.paddingTop=p.paddingBottom=24;p.cornerRadius=12;p.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];const b=set.children.find(n=>n.name==='Nível='+level+', Formato=Completo').createInstance();p.appendChild(b);created.push(b.id,...b.findAll(()=>true).map(n=>n.id));tx(p,title,w-48,20,true);for(const [role,copy]of rows){const r=al(p,'Perfil / '+role,w-48,4);tx(r,role,w-48,17,true);tx(r,copy,w-48,16);}}
tx(body,'Os documentos assinados e o histórico permanecem preservados em todos os níveis.',w,15);
const back=al(body,'Voltar às contas',w,0);tx(back,'Voltar às contas',w,16,true);back.paddingTop=back.paddingBottom=12;await link(back,admin.id);
for(const f of page.children.filter(n=>n.type==='FRAME')){
 const table=f.findOne(n=>n.name==='Contas'&&n.type==='FRAME'&&n.children.some(c=>c.name==='Registro / Marina Costa'));
 if(table){
  for(const row of table.children.filter(n=>n.name.startsWith('Registro /'))){const ts=row.children.filter(n=>n.type==='TEXT'),name=ts[0]?.characters;if(ts.length<2)continue;let level=name==='Eduardo Almeida'?3:2;let role=name==='Eduardo Almeida'?'Direção-Geral':name==='André Souza'?'Administrador técnico':ts[1].characters.replace(/^Perfis: /,'');ts[1].characters=(MOBILE?'Perfil: ':'')+role+' · Nível '+level;ts[1].textAutoResize='HEIGHT';row.layoutSizingVertical='HUG';changed.add(ts[1].id);changed.add(row.id);if(name!=='Patrícia Ramos')await link(row,catalog.id);}
  const model=table.children.find(n=>n.name==='Registro / Marina Costa');
  for(const [name,role,scope]of [['Sofia Ribeiro','Vice-Diretora autorizada · Nível 3','01/11 a 15/11/2026'],['Visitante autorizado','Acesso externo · Nível 1','Portarias publicadas']]){if(table.children.some(n=>n.name==='Registro / '+name))continue;const row=model.clone();table.appendChild(row);created.push(row.id,...row.findAll(()=>true).map(n=>n.id));row.name='Registro / '+name;const ts=row.children.filter(n=>n.type==='TEXT');[name,(MOBILE?'Perfil: ':'')+role,(MOBILE?'Escopo: ':'')+scope,(MOBILE?'Situação: ':'')+'Ativa'].forEach((v,i)=>{ts[i].characters=v;ts[i].textAutoResize='HEIGHT';changed.add(ts[i].id);});row.layoutSizingVertical='HUG';await link(row,catalog.id);}
  table.layoutSizingVertical='HUG';changed.add(table.id);
 }
 if(f.id!==catalog.id&&(table||f.name.includes('Permissões de')||f.name.includes('Adicionar conta')||f.name.includes('Signatários e substituições'))){const content=f.findOne(n=>n.name==='Conteúdo'),title=f.findOne(n=>n.name==='Título e contexto');if(content&&!content.children.some(n=>n.name==='Consultar perfis e níveis')){const row=al(content,'Consultar perfis e níveis',content.width-content.paddingLeft-content.paddingRight,0);tx(row,'Consultar perfis e níveis de acesso',row.width,16,true);row.paddingTop=row.paddingBottom=12;content.insertChild(title?content.children.indexOf(title)+1:0,row);await link(row,catalog.id);}}
 if(f.name.includes('Permissões de Patrícia')){const p=f.findOne(n=>n.name==='Perfil e escopo');if(p){const r=al(p,'Nível determinado pelo perfil',p.width-p.paddingLeft-p.paddingRight,4);tx(r,'Nível 2 · Validação restrita à DEPE',r.width,16,true);tx(r,'O nível 3 é reservado à Direção-Geral e ao Vice-Diretor autorizado.',r.width,15);}}
 for(const t of f.findAllWithCriteria({types:['TEXT']}))if(t.characters==='Substituta'&&t.parent.name==='Registro / Sofia Ribeiro'){t.characters='Vice autorizada · Nível 3';t.textAutoResize='HEIGHT';t.parent.layoutSizingVertical='HUG';changed.add(t.id);changed.add(t.parent.id);}
}
return {createdNodeIds:created,mutatedNodeIds:[...changed],removedNodeIds:removed,catalogId:catalog.id};
