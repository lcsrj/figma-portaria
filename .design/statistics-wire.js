await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(MODE==='D'?'4:3':'4:4'));
await Promise.all(['Regular','SemiBold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const created=[],mutated=[],missing=[],frames={...STATE.frames},links=[...STATE.links],ownPDF={};
const keep=n=>(created.push(n.id),n);
function text(parent,s,w,size=16){const t=keep(figma.createText());parent.appendChild(t);t.fontName={family:'Source Sans 3',style:'Regular'};t.fontSize=size;t.lineHeight={unit:'PIXELS',value:Math.ceil(size*1.45)};t.characters=s;t.name=s;t.textAutoResize='HEIGHT';t.resize(w,t.height);t.fills=[{type:'SOLID',color:{r:.114,g:.161,b:.208}}];return t;}
function action(parent,label,to,w){const b=keep(SECONDARY.createInstance());parent.appendChild(b);b.setProperties({'Rótulo#4:16':label});b.reactions=[];if(MODE==='M')b.resize(w,44);links.push({id:b.id,to});return b;}
const SECONDARY=await figma.getNodeByIdAsync('4:94');
if(MODE==='D'){const source=await figma.getNodeByIdAsync(frames['E2-SELF']);const start=Math.max(...figma.currentPage.children.map(n=>n.x+n.width))+100;
 for(let j=0;j<3;j++){const r=keep(source.clone());r.name='Computador · '+(j===0?'E3-SELF':'E4-SELF-'+j)+' · Meu relatório de horas';r.x=start+j*1540;r.y=0;const key=j===0?'E3-SELF':'E4-SELF-'+j;frames[key]=r.id;ownPDF[key]=r.id;const b=r.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Conteúdo');for(const c of [...b.children])c.remove();const w=b.width-b.paddingLeft-b.paddingRight;text(b,j===0?'Configurar meu relatório de horas':'Prévia · minhas horas semanais',w,30);
 text(b,'Dados demonstrativos · Helena Martins / S01 · nível 2 · somente meus dados\nReferência: 11/11/2026 · período: 01/01–11/11/2026\n3 participações vigentes · 16 h/semana (soma informativa)',w);
 action(b,j===0?'Visualizar meu PDF':j===1?'Próxima página':'Página anterior',j===0?'E4-SELF-1':j===1?'E4-SELF-2':'E4-SELF-1',w);action(b,j===0?'Voltar às minhas horas':'Editar meus filtros',j===0?'E6-SELF':'E3-SELF',w);
 if(j>0){const p=keep((await figma.getNodeByIdAsync(DOCS.papers.R2[j-1])).createInstance());b.appendChild(p);p.name='Dados demonstrativos · R2 próprio';for(const t of p.findAllWithCriteria({types:['TEXT']})){if(t.characters.startsWith('Gerado por:')){for(const s of t.getStyledTextSegments(['fontName']))await figma.loadFontAsync(s.fontName);t.characters='Gerado por: conta demonstrativa S01 · Helena Martins · nível 2\nCalculado com os registros existentes em 11/11/2026 às 17:00\nGeração demonstrativa: 11/11/2026 às 17:00 · America/Sao_Paulo';}}}
 }
}
// Corrige todas as ligações predefinidas e preserva estados de hover dos botões.
const inverse=Object.fromEntries(Object.entries(frames).map(([k,v])=>[v,k]));
for(const link of links){const node=await figma.getNodeByIdAsync(link.id);if(!node){missing.push({source:link.id,to:link.to,reason:'source missing'});continue;}let owner=node;while(owner.parent&&owner.parent.type!=='PAGE')owner=owner.parent;const key=inverse[owner.id];let target=frames[link.to]||link.to;
 if(MODE==='D'&&link.to==='PDF-INFO'&&key&&(/SELF/.test(key)))target=frames['E3-SELF'];
 if(key==='E5-DEPE'&&link.to==='E5')target=frames['E5-DEPE'];
 const dest=await figma.getNodeByIdAsync(target);if(!dest){missing.push({source:node.id,to:target,reason:'destination missing'});continue;}
 let navigation='NAVIGATE',destinationId=target;if(target===owner.id){const list=owner.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Cabeçalho fixo da tabela'||n.name==='Participações em R'||n.name==='Horas por servidor');if(list){navigation='SCROLL_TO';destinationId=list.id;}else continue;}
 const reactions=node.reactions.filter(r=>r.trigger&&r.trigger.type!=='ON_CLICK');if(node.type==='INSTANCE'){const mc=await node.getMainComponentAsync();if(mc?.parent?.type==='COMPONENT_SET'&&mc.parent.id==='4:118'){for(const r of mc.reactions)if(r.trigger?.type==='ON_HOVER'&&!reactions.some(x=>x.trigger?.type==='ON_HOVER'))reactions.push(r);}}
 reactions.push({trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId,navigation,transition:{type:navigation==='SCROLL_TO'?'SCROLL_ANIMATE':'DISSOLVE',duration:.22,easing:{type:'EASE_OUT'}}}]});await node.setReactionsAsync(reactions);mutated.push(node.id);
}
// Os rodapés antigos passam a abrir a configuração correspondente.
for(const[key,model]of [['E6','R2C'],['R3-LISTA','R3']]){const root=await figma.getNodeByIdAsync(frames[key]);const bar=root.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Barra de ações');if(bar){for(const i of bar.findAllWithCriteria({types:['INSTANCE']})){const texts=i.findAllWithCriteria({types:['TEXT']}).map(t=>t.characters).join(' ');const to=texts.includes('Voltar')?frames.E2:MODE==='D'?frames['E3-'+model]:frames['PDF-INFO'];await i.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:to,navigation:'NAVIGATE',transition:{type:'DISSOLVE',duration:.22,easing:{type:'EASE_OUT'}}}]}]);mutated.push(i.id);}}}
return {createdNodeIds:created,mutatedNodeIds:mutated,frames,ownPDF,missing,counts:{wired:mutated.length,newOwnFrames:Object.keys(ownPDF).length}};
