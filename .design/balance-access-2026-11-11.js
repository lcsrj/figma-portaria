await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const changed=new Set(),checks=[],page=figma.currentPage;
const entries=page.children.filter(n=>n.type==='FRAME').map(f=>({f,card:f.findOne(n=>n.name==='Acesso ao Gestor de Portarias')})).filter(e=>e.card);
const fonts=new Map();for(const {f}of entries)for(const t of f.findAllWithCriteria({types:['TEXT']}))for(const s of t.getStyledTextSegments(['fontName']))fonts.set(JSON.stringify(s.fontName),s.fontName);
await Promise.all([...fonts.values()].map(f=>figma.loadFontAsync(f)));
const family=await figma.getNodeByIdAsync('197:2'),controlStyle='S:588c2855c70604af1d8d805ed3a146d3b563fc1d,';
const green=await figma.variables.getVariableByIdAsync('VariableID:4:17');
const greenPaint=()=>figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:0,g:0,b:0}},'color',green);
function mark(n){changed.add(n.id);return n;}
function pad(n,l,t=l,r=l,b=t){for(const [k,v]of Object.entries({paddingLeft:l,paddingTop:t,paddingRight:r,paddingBottom:b})){n.setBoundVariable(k,null);n[k]=v;}mark(n);}
function gap(n,v){n.setBoundVariable('itemSpacing',null);n.itemSpacing=v;mark(n);}
function fit(n,w){const vs=n.layoutSizingVertical;if(n.type==='TEXT')n.textAutoResize='HEIGHT';n.resize(w,n.height);if(n.parent.layoutMode&&n.parent.layoutMode!=='NONE'&&n.layoutPositioning!=='ABSOLUTE'){n.layoutSizingHorizontal='FILL';n.layoutSizingVertical=vs;}mark(n);}
function sizeText(t,size,line){t.fontSize=size;t.lineHeight={unit:'PIXELS',value:line};t.textAutoResize='HEIGHT';mark(t);}
function reactions(f){return JSON.stringify(f.findAll(n=>'reactions'in n&&n.reactions.length).map(n=>({id:n.id,reactions:n.reactions})).sort((a,b)=>a.id.localeCompare(b.id)));}
for(const {f,card}of entries){
 const before=reactions(f),body=f.findOne(n=>n.name==='Conteúdo'),work=f.findOne(n=>n.name==='Área de trabalho'),scroll=f.findOne(n=>n.name==='Conteúdo rolável'),photo=f.findOne(n=>n.name==='Imagem institucional');
 const w=MOBILE?f.width:440,inner=MOBILE?w-48:w;
 card.resize(w,card.height);card.layoutSizingHorizontal='FIXED';card.layoutSizingVertical='HUG';gap(card,20);mark(card);
 if(!MOBILE){
   f.resize(f.width,900);work.resize(f.width,900);scroll.resize(f.width,900);[f,work,scroll].forEach(mark);
   const left=Math.round(f.width*.4),area=f.findOne(n=>n.name==='Área de acesso');
   photo.resize(left,900);photo.layoutSizingHorizontal='FIXED';photo.layoutSizingVertical='FIXED';pad(photo,64);gap(photo,24);mark(photo);
   const iw=left-128;
   for(const t of photo.children.filter(n=>n.type==='TEXT')){sizeText(t,t.name==='Gestor de Portarias'?44:t.name==='Biblioteca · Campus Videira'?14:18,t.name==='Gestor de Portarias'?50:t.name==='Biblioteca · Campus Videira'?20:26);fit(t,iw);}
   const image=photo.children.find(n=>n.type==='RECTANGLE');if(image){image.resize(iw,280);image.fills=image.fills.map(p=>p.type==='IMAGE'?{...p,scaleMode:'FILL'}:p);mark(image);}
   area.minHeight=900;area.resize(f.width-left,900);area.layoutSizingHorizontal='FIXED';area.layoutSizingVertical='HUG';pad(area,48);mark(area);
 }else{
   const brand=f.findOne(n=>n.name==='Identidade institucional'),hero=f.findOne(n=>n.name==='Apresentação do sistema');
   if(brand){pad(brand,24,16);const logo=brand.children.find(n=>n.name.startsWith('Marca oficial'));if(logo){logo.resize(200,200*275/828);mark(logo);}}
   if(hero){pad(hero,24,16);gap(hero,8);for(const t of hero.children.filter(n=>n.type==='TEXT')){sizeText(t,t.name==='Nome do sistema'?24:16,t.name==='Nome do sistema'?30:24);fit(t,inner);}}
   if(photo)for(const t of photo.children.filter(n=>n.type==='TEXT'))sizeText(t,14,20);
 }
 const forgotten=card.findOne(n=>n.type==='FRAME'&&n.children.some(c=>c.type==='TEXT'&&c.characters==='Esqueci minha senha'));
 const institutional=card.findOne(n=>n.type==='FRAME'&&n.children.some(c=>c.type==='TEXT'&&c.characters==='Acesso institucional'));
 if(forgotten){const form=card.findOne(n=>n.type==='FRAME'&&n.name==='Formulário');if(form){const actions=form.children.findIndex(n=>n.name==='Ações');form.insertChild(actions<0?form.children.length:actions,forgotten);forgotten.name='Ação / Esqueci minha senha';gap(form,12);mark(form);mark(forgotten);}}
 // Preserve natural height and give the semantic access containers the available width.
 for(const n of card.children){if(n.name.startsWith('Marca oficial'))continue;fit(n,inner);}
 for(const n of card.findAll(n=>n.type==='FRAME'||n.type==='TEXT')){
   const p=n.parent;if(!p.layoutMode||p.layoutMode==='NONE'||n.layoutPositioning==='ABSOLUTE')continue;
   if(n.type==='FRAME'&&n.layoutMode==='NONE')continue;
   if(p.layoutMode==='VERTICAL')fit(n,p.width-p.paddingLeft-p.paddingRight);
   if(n.type==='FRAME'&&n.layoutMode!=='NONE'&&n.name!=='Entrada'){n.layoutSizingVertical='HUG';mark(n);}
 }
 const fields=card.findAllWithCriteria({types:['INSTANCE']}).filter(n=>n.name.startsWith('Campo /'));
 for(const n of fields){
   const previous=n.componentProperties,values={};for(const [key,p]of Object.entries(previous))if(p.type==='TEXT')values[key.split('#')[0]]=p.value;
   const state=previous.Estado?.value||'Padrão',target=family.children.find(c=>c.name==='Estado='+state)||family.children[0];
   const oldError=n.children.find(t=>t.type==='TEXT'&&t.name==='Revise este campo para continuar.');const errorValue=oldError?.characters;
   n.swapComponent(target);const properties={};for(const [key,p]of Object.entries(n.componentProperties))if(p.type==='TEXT'&&values[key.split('#')[0]]!==undefined)properties[key]=values[key.split('#')[0]];n.setProperties(properties);
   fit(n,n.parent.width-n.parent.paddingLeft-n.parent.paddingRight);n.layoutSizingVertical='HUG';mark(n);
   if(errorValue){const error=n.children.find(t=>t.type==='TEXT'&&t.name==='Revise este campo para continuar.');if(error){error.characters=errorValue;mark(error);}}
 }
 for(const n of card.findAllWithCriteria({types:['INSTANCE']}))if(n.name.startsWith('Ação /')){
   n.resize(n.parent.width-n.parent.paddingLeft-n.parent.paddingRight,48);n.layoutSizingHorizontal='FILL';n.layoutSizingVertical='FIXED';mark(n);
   for(const t of n.children.filter(n=>n.type==='TEXT')){await t.setTextStyleIdAsync(controlStyle);t.textAutoResize='HEIGHT';t.resize(n.width-n.paddingLeft-n.paddingRight,24);t.layoutSizingHorizontal='FILL';t.layoutSizingVertical='HUG';t.textAlignHorizontal='CENTER';mark(t);}
 }
 const title=card.findOne(n=>n.type==='FRAME'&&n.name==='Título e orientação de acesso');if(title){for(const [i,t]of title.children.filter(n=>n.type==='TEXT').entries())sizeText(t,i===0?(MOBILE?26:30):16,i===0?(MOBILE?34:36):24);}
 const footer=card.children.find(n=>n.type==='TEXT'&&n.characters.startsWith('Instituto Federal Catarinense'));if(footer)sizeText(footer,14,20);
 if(forgotten){forgotten.resize(inner,44);forgotten.layoutSizingHorizontal='FILL';forgotten.layoutSizingVertical='FIXED';pad(forgotten,0);forgotten.counterAxisAlignItems='CENTER';forgotten.primaryAxisAlignItems='CENTER';for(const t of forgotten.children.filter(n=>n.type==='TEXT')){sizeText(t,16,24);fit(t,inner);t.textAlignHorizontal='RIGHT';t.textDecoration='UNDERLINE';t.fills=[greenPaint()];}mark(forgotten);}
 if(institutional){institutional.resize(inner,48);institutional.layoutSizingHorizontal='FILL';institutional.layoutSizingVertical='FIXED';pad(institutional,16,0);institutional.counterAxisAlignItems='CENTER';institutional.primaryAxisAlignItems='CENTER';institutional.fills=[];institutional.strokes=[greenPaint()];institutional.strokeWeight=1;institutional.cornerRadius=8;for(const t of institutional.children.filter(n=>n.type==='TEXT')){await t.setTextStyleIdAsync(controlStyle);fit(t,inner-34);t.textAlignHorizontal='CENTER';t.fills=[greenPaint()];}mark(institutional);}
 mark(body);body.layoutSizingVertical='HUG';
 checks.push({id:f.id,name:f.name,w:f.width,h:f.height,cardWidth:card.width,cardHeight:card.height,contentHeight:body.height,reactionsUnchanged:before===reactions(f),fields:fields.map(n=>({id:n.id,state:n.componentProperties.Estado.value,width:n.width,height:n.height,inputHeight:n.findOne(n=>n.name==='Entrada').height}))});
}
return {mutatedNodeIds:[...changed],entries:checks};
