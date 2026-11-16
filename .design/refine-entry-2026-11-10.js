// Inject PAGE and MOBILE. Edit the existing Figma frames, preserving IDs and reactions.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const page=figma.currentPage, created=[], changed=new Set(), originalNames=[], authChecks=[];
const roots=page.children.filter(n=>n.type==='FRAME').slice(typeof OFFSET==='undefined'?0:OFFSET,typeof END==='undefined'?undefined:END);
const fonts=new Map();
for(const n of page.findAllWithCriteria({types:['TEXT']}))for(const s of n.getStyledTextSegments(['fontName']))fonts.set(JSON.stringify(s.fontName),s.fontName);
await Promise.all([...fonts.values()].map(f=>figma.loadFontAsync(f)));
const vars=await figma.variables.getLocalVariablesAsync();
const byId=new Map(vars.map(v=>[v.id,v]));
function touch(n){changed.add(n.id);return n;}
function bind(n,k,num){const v=vars.find(v=>v.name===k);if(v)n.setBoundVariable(num,v);touch(n);}
function gap(n,v){n.itemSpacing=v;bind(n,'espaço/'+v,'itemSpacing');}
function pad(n,l,t=l,r=l,b=t){for(const [k,v]of Object.entries({paddingLeft:l,paddingTop:t,paddingRight:r,paddingBottom:b})){n[k]=v;bind(n,'espaço/'+v,k);}}
function paint(id){return figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:1,g:1,b:1}},'color',byId.get(id));}
function fit(n,w){touch(n);const vs=n.layoutSizingVertical;if(n.type==='TEXT'){n.textAutoResize='HEIGHT';n.resize(Math.max(1,w),n.height);}else n.resize(Math.max(1,w),n.height);if(n.parent.layoutMode&&n.parent.layoutMode!=='NONE'&&n.layoutPositioning!=='ABSOLUTE'){n.layoutSizingHorizontal='FILL';n.layoutSizingVertical=vs;}}
function column(parent,name,w,spacing){let n=parent.children.find(n=>n.name===name);if(!n){n=figma.createAutoLayout('VERTICAL');created.push(n.id);parent.appendChild(n);n.name=name;}n.fills=[];n.resize(w,1);n.layoutSizingVertical='HUG';gap(n,spacing);touch(n);return n;}
const iconNames={home:'início',request:'solicitação',file:'documento',users:'pessoas',clock:'prazo',report:'relatório',settings:'configurações',bell:'notificações',search:'buscar',check:'confirmação',chevron:'avançar',back:'voltar',menu:'menu',close:'fechar',lock:'cadeado',plus:'adicionar',external:'abrir externamente',download:'baixar',mail:'e-mail',alert:'alerta',logout:'sair',edit:'editar'};
const contexts={loginFilled:'Dados preenchidos',loginError:'Erro de acesso',home:'Gabinete',homeDoc:'Docente',homeDept:'DEPE',homeDG:'Direção-Geral',homeAdmin:'Administração',menuDoc:'Docente',menuAdmin:'Administração',tasksMine:'Minhas pendências',tasksInfo:'Informações da unidade',tasksResolved:'Pendências resolvidas',expiryExpired:'Vencidas',expiryNoEnd:'Sem término',expiryScheduled:'Revogação futura',expiryCurrent:'Em vigor',expiryFutureEvent:'Evento futuro',adminDisabled:'Conta desativada',editorNext:'Próximo dispositivo',editMembersRemoved:'Após remoção',serverInactive:'Cadastro inativo',requestLiteral:'Hipótese de campos literais',requestNorm:'Campos por finalidade',normLiteral:'Hipótese de campos literais',validationReturnOnly:'Ajuste por devolução',signVice:'Substituto autorizado',document117:'Portaria 117/2026',validationRead117:'Portaria 117/2026',normVersions:'Normativa nº 18',normDownload:'Normativa nº 18',lotVersions:'Lotação nº 129/2026',lotDownload:'Lotação nº 129/2026',docVersions:'Docente · Portaria nº 128/2026',docDownload:'Docente · Portaria nº 128/2026',operatorParticipations:'Gabinete',compiledFuture:'Redação futura',communicationsAlternative:'Alternativa registrada',closedHistory:'Conclusão administrativa',externalDetail:'Participante externo',serverDetail:'Servidor',serverEdit:'Servidor',serverNew:'Servidor',referenceDetail:'Memorando',referenceNew:'Nova referência',accountEdit:'Permissões',documentDoc:'Docente',detailDoc:'Docente',membersDoc:'Docente',historyDoc:'Docente',publicationDoc:'Docente',portariasDoc:'Docente',requestDetailDoc:'Docente',accountDoc:'Docente',detailSectionsDoc:'Docente',editorRenew:'Prorrogação',editorReplace:'Alteração de composição'};
function context(k){if(contexts[k])return contexts[k];if(/Operator$/.test(k))return 'Gabinete';const e=k.match(/^expiry(\d+)(Renew|Close)?(Done)?$/);if(e)return 'Portaria '+e[1]+'/2025'+(e[2]==='Renew'?' · Prorrogação':e[2]==='Close'?' · Conclusão':'')+(e[3]?' registrada':'');const w=k.match(/(360|768|1280)$/);return w?w[1]+' px':'';}
const reactionSignature=()=>JSON.stringify(roots.flatMap(f=>f.findAll(n=>'reactions'in n&&n.reactions.length).map(n=>({id:n.id,reactions:n.reactions}))));
const beforeReactions=reactionSignature();
for(const f of roots){const m=f.name.match(/^[DM] · ([^·]+) · (.+)$/);if(m){originalNames.push({id:f.id,name:f.name});const k=m[1].trim(),s=context(k);f.name=(MOBILE?'Celular':'Computador')+' · '+m[2].trim()+(s?' · '+s:'');touch(f);}}
for(const n of roots.flatMap(f=>f.findAll(n=>n.type!=='TEXT'))){const m=n.name.match(/^(Ícone|Controle) \/ (.+)$/);if(m&&iconNames[m[2]]){n.name=m[1]+' / '+iconNames[m[2]];touch(n);}else if(/^(Vector|Frame|Group|Rectangle|Ellipse|Path)( \d+)?$/.test(n.name)){const d={Vector:'Vetor',Frame:'Quadro',Group:'Grupo',Rectangle:'Retângulo',Ellipse:'Elipse',Path:'Traçado'};n.name=n.name.replace(/^[A-Za-z]+/,s=>d[s]);touch(n);}}
page.name=MOBILE?'03 · Aplicação móvel':'02 · Aplicação para computador';touch(page);
for(const f of roots){
  const card=f.findOne(n=>n.name==='Acesso ao Gestor de Portarias');if(!card)continue;
  const body=f.findOne(n=>n.name==='Conteúdo'),scroll=f.findOne(n=>n.name==='Conteúdo rolável');
  if(!body||!scroll)continue;
  const w=MOBILE?f.width-48:448,inner=MOBILE?w:w-80;
  card.resize(w,card.height);card.layoutSizingHorizontal='FIXED';card.layoutSizingVertical='HUG';gap(card,20);pad(card,MOBILE?0:40);card.fills=MOBILE?[]:[paint('VariableID:4:11')];card.clipsContent=false;touch(card);
  body.resize(MOBILE?f.width:1108,body.height);body.layoutSizingHorizontal='FIXED';body.layoutSizingVertical='HUG';body.layoutMode=MOBILE?'VERTICAL':'HORIZONTAL';gap(body,MOBILE?24:64);pad(body,MOBILE?24:48,MOBILE?32:48,MOBILE?24:48,MOBILE?24:48);body.fills=[];body.counterAxisAlignItems=MOBILE?'MIN':'CENTER';body.primaryAxisAlignItems='CENTER';touch(body);
  scroll.counterAxisAlignItems='CENTER';scroll.primaryAxisAlignItems='MIN';scroll.overflowDirection='VERTICAL';touch(scroll);
  const logo=card.children.find(n=>n.name.startsWith('Marca oficial'));
  if(logo){const lw=MOBILE?224:240;logo.resize(lw,lw*275/828);touch(logo);}
  const heading=card.children.find(n=>n.type==='TEXT'&&n.fontSize>=26);
  const subtitle=card.children.find(n=>n.type==='TEXT'&&n!==heading&&n.characters==='Gestor de Portarias');
  if(heading){const group=column(card,'Título e orientação de acesso',inner,8);card.insertChild(logo?1:0,group);group.appendChild(heading);heading.fontSize=MOBILE?26:30;heading.lineHeight={unit:'PIXELS',value:MOBILE?34:38};fit(heading,inner);if(subtitle){group.appendChild(subtitle);subtitle.fontSize=16;subtitle.lineHeight={unit:'PIXELS',value:23};fit(subtitle,inner);}fit(group,inner);}
  const photoPanel=f.findOne(n=>n.name==='Imagem institucional');
  if(photoPanel){
    if(MOBILE){body.appendChild(photoPanel);fit(photoPanel,w);gap(photoPanel,8);pad(photoPanel,0);photoPanel.fills=[];const photo=photoPanel.children.find(n=>n.type==='RECTANGLE');if(photo){photo.resize(w,144);photo.fills=photo.fills.map(p=>p.type==='IMAGE'?{...p,scaleMode:'FILL'}:p);fit(photo,w);touch(photo);}for(const t of photoPanel.children.filter(n=>n.type==='TEXT'))fit(t,w);}
    else {photoPanel.resize(500,photoPanel.height);photoPanel.layoutSizingHorizontal='FIXED';photoPanel.layoutSizingVertical='HUG';pad(photoPanel,0);gap(photoPanel,24);photoPanel.fills=[];photoPanel.cornerRadius=0;touch(photoPanel);for(const t of photoPanel.children.filter(n=>n.type==='TEXT')){if(t.characters==='Gestor de Portarias'){t.fontSize=40;t.lineHeight={unit:'PIXELS',value:48};}fit(t,500);}const photo=photoPanel.children.find(n=>n.type==='RECTANGLE');if(photo){photo.resize(500,375);fit(photo,500);touch(photo);}}
  }
  // Flexible widths stay attached to the original component instances and routes.
  for(const n of card.children){if(n!==logo)fit(n,inner);if(n.type==='FRAME'&&n.name==='Abas'){n.name='Opções de acesso';n.layoutMode='VERTICAL';gap(n,0);pad(n,0);n.fills=[];for(const row of n.children){fit(row,inner);pad(row,0,12,0,12);row.minHeight=44;touch(row);for(const t of row.children.filter(n=>n.type==='TEXT'))fit(t,inner);}}}
  for(const form of card.findAll(n=>n.type==='FRAME'&&['Formulário','Linha de campos','Ações'].includes(n.name))){const p=form.parent;fit(form,p.width-p.paddingLeft-p.paddingRight);if(form.name==='Formulário')gap(form,16);if(form.name==='Ações'){form.layoutMode='VERTICAL';gap(form,8);}}
  for(const n of card.findAllWithCriteria({types:['INSTANCE']})){fit(n,n.parent.width-n.parent.paddingLeft-n.parent.paddingRight);if(n.name.startsWith('Ação /')){n.resize(n.width,48);n.layoutSizingHorizontal='FILL';n.layoutSizingVertical='FIXED';touch(n);}if(n.name.startsWith('Campo /')){const input=n.findOne(n=>n.name==='Entrada');if(input){input.resize(n.width,48);input.layoutSizingHorizontal='FILL';input.layoutSizingVertical='FIXED';input.counterAxisAlignItems='CENTER';touch(input);for(const t of input.children.filter(n=>n.type==='TEXT'))fit(t,n.width-input.paddingLeft-input.paddingRight);}for(const t of n.children.filter(n=>n.type==='TEXT'))fit(t,n.width);n.layoutSizingVertical='HUG';}}
  for(const n of card.findAll(n=>n.type==='FRAME'||n.type==='TEXT')){const p=n.parent;if(!p.layoutMode||p.layoutMode==='NONE'||n.layoutPositioning==='ABSOLUTE')continue;const available=p.width-(p.paddingLeft||0)-(p.paddingRight||0);if(p.layoutMode==='VERTICAL'&&n.width>available+1)fit(n,available);else if(p.layoutMode==='HORIZONTAL'&&n.type==='TEXT'){const others=p.children.filter(c=>c.id!==n.id&&c.visible);const remaining=available-others.reduce((s,c)=>s+c.width,0)-p.itemSpacing*others.length;if(n.width>remaining+1&&remaining>0)fit(n,remaining);}}
  // Center the composition only when its natural height fits in the viewport.
  if(!MOBILE&&body.height<scroll.height){scroll.primaryAxisAlignItems='CENTER';touch(scroll);}
  authChecks.push({id:f.id,name:f.name,width:f.width,cardWidth:card.width,cardHeight:card.height,bodyHeight:body.height,cardBottom:card.absoluteBoundingBox.y-f.absoluteBoundingBox.y+card.height});
}
// Repair the horizontal overflow found in the mobile audit, retaining vertical reflow.
if(MOBILE)for(const f of roots){for(const n of f.findAll(n=>n.type==='FRAME'||n.type==='INSTANCE')){const p=n.parent;if(!p||!p.layoutMode||p.layoutMode==='NONE'||n.layoutPositioning==='ABSOLUTE')continue;const available=p.width-(p.paddingLeft||0)-(p.paddingRight||0);if(n.width>available+1&&p.layoutMode==='VERTICAL'){fit(n,available);if(n.name==='Entrada'){for(const t of n.children.filter(t=>t.type==='TEXT'))fit(t,available-n.paddingLeft-n.paddingRight);}}}}
const afterReactions=reactionSignature();
const audit=[];
for(const f of roots)for(const n of f.findAll(n=>n.type==='FRAME'||n.type==='INSTANCE')){const p=n.parent;if(p&&p.layoutMode&&p.layoutMode!=='NONE'&&n.layoutPositioning!=='ABSOLUTE'&&n.x+n.width>p.width+1)audit.push({id:n.id,name:n.name,parent:p.id,root:f.id,width:n.width,parentWidth:p.width});}
return {createdNodeIds:created,mutatedNodeIds:[...changed],originalNames,rootCount:roots.length,auth:authChecks,reactionsUnchanged:beforeReactions===afterReactions,horizontalOverflow:audit};
