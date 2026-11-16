await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
await Promise.all([['Source Sans 3','Regular'],['Source Sans 3','SemiBold'],['Roboto','Regular'],['Roboto','Bold'],['Roboto','Medium'],['Inter','Bold'],['Inter','Extra Bold']].map(([family,style])=>figma.loadFontAsync({family,style})));
const page=figma.currentPage,created=[],changed=new Set(),removed=[],C={};for(const [k,id]of Object.entries({paper:'VariableID:4:11',ink:'VariableID:4:13',line:'VariableID:4:23'}))C[k]=await figma.variables.getVariableByIdAsync(id);
const paint=k=>figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:1,g:1,b:1}},'color',C[k]);
const nav=id=>({type:'NODE',navigation:'NAVIGATE',destinationId:id,transition:{type:'DISSOLVE',easing:{type:'EASE_OUT'},duration:.22}});
async function link(n,id){await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[nav(id)]}]);changed.add(n.id);}
function al(p,name,w,gap=12){const n=figma.createAutoLayout('VERTICAL');p.appendChild(n);created.push(n.id);n.name=name;n.resize(w,1);n.layoutSizingVertical='HUG';n.itemSpacing=gap;n.fills=[];return n;}
function tx(p,s,w,size=16,bold=false){const n=figma.createText();p.appendChild(n);created.push(n.id);n.name=s;n.fontName={family:'Source Sans 3',style:bold?'SemiBold':'Regular'};n.fontSize=size;n.lineHeight={unit:'PIXELS',value:Math.round(size*1.45)};n.characters=s;n.fills=[paint('ink')];n.textAutoResize='HEIGHT';n.resize(w,n.height);return n;}
// Keep the existing width specimens current: every specimen now shows the access chooser.
const samples=MOBILE?['23:1085','211:3173','211:3308']:['211:1345','211:1491','211:1637'];const portal=await figma.getNodeByIdAsync(MOBILE?'8:1663':'5:2'),portalCard=portal.findOne(n=>n.name==='Acesso ao Gestor de Portarias');
for(const id of samples){const f=await figma.getNodeByIdAsync(id),card=f.findOne(n=>n.name==='Acesso ao Gestor de Portarias');if(!card)continue;for(const n of [...card.children]){removed.push(n.id);n.remove();}const ratio=card.width/portalCard.width;for(const child of portalCard.children){const n=child.clone();card.appendChild(n);created.push(n.id,...('findAll'in n?n.findAll(()=>true).map(n=>n.id):[]));if('rescale'in n&&Math.abs(ratio-1)>.001)n.rescale(ratio);n.layoutSizingHorizontal='FIXED';}card.itemSpacing=Math.max(16,portalCard.itemSpacing*ratio);card.paddingTop=card.paddingBottom=24;card.layoutSizingVertical='HUG';
 const choices=card.findOne(n=>n.name==='Quatro entradas de acesso');const w=card.width-card.paddingLeft-card.paddingRight;choices.resize(w,choices.height);choices.layoutSizingVertical='HUG';for(const n of choices.children){n.resize(w,48);const t=n.findOne(n=>n.type==='TEXT');t.fontSize=16;t.lineHeight={unit:'PIXELS',value:20};changed.add(n.id);changed.add(t.id);}
 for(const t of card.findAllWithCriteria({types:['TEXT']}))if(t.characters==='Escolha seu acesso'){t.fontSize=MOBILE?28:Math.min(36,32*ratio);t.lineHeight={unit:'PIXELS',value:Math.round(t.fontSize*1.2)};changed.add(t.id);}
 f.name=f.name.replace('Acesse sua conta','Escolha de acesso').replace('Acesso conforme referência','Escolha de acesso');changed.add(f.id);changed.add(card.id);
}
const catalog=await figma.getNodeByIdAsync(MOBILE?'235:3604':'235:1690'),body=catalog.findOne(n=>n.name==='Conteúdo'),w=body.width-body.paddingLeft-body.paddingRight;
for(const n of [...body.children]){removed.push(n.id);n.remove();}
tx(body,'Perfis e níveis de acesso',w,MOBILE?26:30,true);tx(body,'Quatro níveis, cada um com sua própria entrada. As permissões são conferidas pela conta e pelo perfil.',w);
const groups=[
 [4,'Direção · acesso total',[
  ['Direção-Geral','Todos os módulos: consulta, solicitação, elaboração, validação, assinatura, publicação, cadastros, relatórios, contas, configurações e auditoria.'],
  ['Vice-Diretor autorizado','As mesmas permissões totais, inclusive elaboração, mediante autorização registrada e dentro do período de competência.']]],
 [3,'Gabinete e Gestão de Pessoas · operação',[
  ['Gabinete e CGP/DGP','Elaborar e tramitar portarias; validar quando autorizado; registrar publicação e comunicar conforme o escopo atribuído. Sem assinatura ou administração de configurações automática.']]],
 [2,'Servidores · permissões por função',[
  ['Docentes e técnicos administrativos','Consultar, solicitar portarias e acompanhar as próprias participações. Sem elaboração direta, assinatura ou administração.'],
  ['DEPE e DAP','Validar membros, horas e vigência do próprio departamento. Solicitar conforme o papel de servidor. Sem elaboração, emissão final, assinatura ou administração de contas.'],
  ['Administrador técnico','Gerenciar contas, configurações e auditoria. O perfil técnico não concede elaboração, assinatura, validação ou publicação de atos.']]],
 [1,'Acesso externo · consulta mínima',[
  ['Conta externa / consultor','Consultar apenas portarias publicadas e documentos preparados para divulgação. Sem minutas, solicitações, edição, validação, assinatura, cadastros internos ou administração.']]]
];
for(const [level,title,rows]of groups){const p=al(body,title,w,16);p.paddingLeft=p.paddingRight=p.paddingTop=p.paddingBottom=24;p.cornerRadius=12;p.fills=[paint('paper')];const component=await figma.getNodeByIdAsync(BADGES[level].full),badge=component.createInstance();p.appendChild(badge);created.push(badge.id,...badge.findAll(()=>true).map(n=>n.id));tx(p,title,w-48,20,true);for(const [name,copy]of rows){const r=al(p,'Perfil / '+name,w-48,4);tx(r,name,w-48,17,true);tx(r,copy,w-48,16);}const entry=al(p,'Abrir login do nível '+level,w-48,0);tx(entry,'Abrir login do nível '+level,w-48,16,true);entry.paddingTop=entry.paddingBottom=12;await link(entry,ROUTES[level].empty);}
tx(body,'Documentos assinados, autoria e histórico permanecem preservados em todos os níveis.',w,15);
const back=al(body,'Voltar às contas',w,0);tx(back,'Voltar às contas',w,16,true);back.paddingTop=back.paddingBottom=12;await link(back,MOBILE?'11:913':'7:9150');changed.add(body.id);
const recovery=await figma.getNodeByIdAsync(MOBILE?'8:1753':'5:92');for(const t of recovery.findAllWithCriteria({types:['TEXT']}))if(t.characters==='marina.costa@ifc.edu.br'){t.characters='seu.email@ifc.edu.br';changed.add(t.id);}
return {createdNodeIds:created,mutatedNodeIds:[...changed],removedNodeIds:removed,catalog:catalog.id,samples};
