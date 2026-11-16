const mutated=[],created=[],missing=[],resolved=[];
const p=await figma.getNodeByIdAsync(PAGE);await figma.setCurrentPageAsync(p);
await Promise.all(['Regular','SemiBold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const reverse=Object.fromEntries(Object.entries(FRAMES).map(([k,v])=>[v,k]));
for(const item of LINKS){let n=await figma.getNodeByIdAsync(item.id);if(!n){if(!REMOVED.includes(item.id))missing.push(item.id);continue;}let root=n;while(root.parent&&root.parent.type!=='PAGE')root=root.parent;const source=reverse[root.id];let to=OVERRIDES[item.id]||RESULT[source]?.[item.to]||item.to;
const role=ROLES[source];if(role==='Docente · DEPE'){const redirects={home:'homeDoc',menu:'menuDoc',account:'accountDoc',requests:'requestsMine',portarias:'portariasDoc',detail:'detailDoc',members:'membersDoc',document:'documentDoc',history:'historyDoc',publicationDetail:'publicationDoc'};to=redirects[to]||to;}
if(role==='Administrador'&&to==='menu')to='menuAdmin';
if(!FRAMES[to]){missing.push({id:n.id,to,source});continue;}
if(n.name.startsWith('Ícone /')){const par=n.parent;const at=par.children.indexOf(n);const wrap=figma.createAutoLayout('HORIZONTAL');created.push(wrap.id);par.insertChild(at,wrap);wrap.name='Controle / '+n.name.slice(8);wrap.fills=[];wrap.resize(44,44);wrap.layoutSizingHorizontal='FIXED';wrap.layoutSizingVertical='FIXED';wrap.primaryAxisAlignItems='CENTER';wrap.counterAxisAlignItems='CENTER';wrap.appendChild(n);mutated.push(n.id,par.id);n=wrap;}
const self=FRAMES[to]===root.id;const field=self&&n.type==='INSTANCE'&&n.name.startsWith('Campo /');
const action={type:'NODE',navigation:field?'CHANGE_TO':'NAVIGATE',destinationId:field?FOCUS:FRAMES[to],transition:{type:'SMART_ANIMATE',easing:{type:'EASE_OUT'},duration:0.18},resetScrollPosition:!field};
await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[action]}]);mutated.push(n.id);resolved.push({id:n.id,source,to,kind:field?'FOCUS':'NAVIGATE'});
}
return {createdNodeIds:created,mutatedNodeIds:mutated,missing,resolved,count:resolved.length};
