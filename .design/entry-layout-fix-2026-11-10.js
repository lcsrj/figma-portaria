await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const changed=new Set(), cards=[], fonts=new Map();
const auth=figma.currentPage.children.filter(n=>n.type==='FRAME').map(f=>({f,card:f.findOne(n=>n.name==='Acesso ao Gestor de Portarias')})).filter(x=>x.card);
for(const {card}of auth)for(const t of card.findAllWithCriteria({types:['TEXT']}))for(const s of t.getStyledTextSegments(['fontName']))fonts.set(JSON.stringify(s.fontName),s.fontName);
await Promise.all([...fonts.values()].map(f=>figma.loadFontAsync(f)));
for(const {f,card}of auth){
  for(const n of card.findAll(n=>n.type==='FRAME'||n.type==='TEXT')){
    if(n.type==='TEXT'){n.textAutoResize='HEIGHT';n.layoutSizingVertical='HUG';}
    else if(n.name==='Entrada'){n.resize(n.width,48);n.layoutSizingVertical='FIXED';}
    else if(n.layoutMode!=='NONE')n.layoutSizingVertical='HUG';
    changed.add(n.id);
  }
  const photo=f.findOne(n=>n.name==='Imagem institucional');if(photo){photo.layoutSizingVertical='HUG';changed.add(photo.id);}
  const body=f.findOne(n=>n.name==='Conteúdo'),scroll=f.findOne(n=>n.name==='Conteúdo rolável');
  body.layoutSizingVertical='HUG';scroll.primaryAxisAlignItems=!MOBILE&&body.height<scroll.height?'CENTER':'MIN';changed.add(body.id);changed.add(scroll.id);
  cards.push({id:f.id,w:f.width,h:f.height,cardHeight:card.height,bodyHeight:body.height});
}
if(MOBILE){for(const f of figma.currentPage.children.filter(n=>n.type==='FRAME'))for(const row of f.findAll(n=>n.type==='FRAME'&&n.name==='Documento e versões')){row.layoutMode='VERTICAL';row.layoutSizingVertical='HUG';changed.add(row.id);for(const n of row.children){const fonts=n.findAllWithCriteria({types:['TEXT']}).flatMap(t=>t.getStyledTextSegments(['fontName']).map(s=>s.fontName));await Promise.all(fonts.map(f=>figma.loadFontAsync(f)));n.resize(row.width,Math.max(48,n.height));n.layoutSizingHorizontal='FILL';n.layoutSizingVertical='FIXED';changed.add(n.id);}}}
return {mutatedNodeIds:[...changed],auth:cards};
