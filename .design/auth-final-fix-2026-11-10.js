await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const changed=new Set(),checks=[],fonts=new Map();
const entries=figma.currentPage.children.filter(n=>n.type==='FRAME').map(f=>({f,card:f.findOne(n=>n.name==='Acesso ao Gestor de Portarias')})).filter(x=>x.card);
for(const {card}of entries)for(const t of card.findAllWithCriteria({types:['TEXT']}))for(const s of t.getStyledTextSegments(['fontName']))fonts.set(JSON.stringify(s.fontName),s.fontName);
await Promise.all([...fonts.values()].map(f=>figma.loadFontAsync(f)));
const surface=await figma.variables.getVariableByIdAsync('VariableID:4:11');
for(const {f,card}of entries){
  for(const n of card.findAllWithCriteria({types:['INSTANCE']})){
    if(n.name.startsWith('Ação /'))for(const t of n.children.filter(n=>n.type==='TEXT')){t.textAutoResize='HEIGHT';t.resize(n.width-n.paddingLeft-n.paddingRight,22);t.layoutSizingHorizontal='FILL';t.layoutSizingVertical='HUG';t.textAlignHorizontal='CENTER';changed.add(t.id);}
    if(n.name.startsWith('Campo /')){n.layoutSizingVertical='HUG';const input=n.findOne(n=>n.name==='Entrada');if(input){input.layoutSizingHorizontal='FILL';input.layoutSizingVertical='FIXED';input.resize(n.width,48);changed.add(input.id);}changed.add(n.id);}
  }
  const body=f.findOne(n=>n.name==='Conteúdo'),scroll=f.findOne(n=>n.name==='Conteúdo rolável');
  if(MOBILE)for(const n of [f,f.findOne(n=>n.name==='Área de trabalho'),scroll]){n.fills=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:1,g:1,b:1}},'color',surface)];changed.add(n.id);}
  scroll.primaryAxisAlignItems=!MOBILE&&body.height<scroll.height?'CENTER':'MIN';changed.add(scroll.id);
  checks.push({id:f.id,cardHeight:card.height,contentHeight:body.height,buttons:card.findAllWithCriteria({types:['INSTANCE']}).filter(n=>n.name.startsWith('Ação /')).map(n=>({id:n.id,w:n.width,h:n.height,text:n.children.filter(n=>n.type==='TEXT').map(t=>({id:t.id,w:t.width,h:t.height}))}))});
}
return {mutatedNodeIds:[...changed],checks};
