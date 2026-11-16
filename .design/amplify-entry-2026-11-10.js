// Amplify the existing institutional identity. Keep every interactive node and reaction.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const page=figma.currentPage,changed=new Set(),created=[],checks=[];
const entries=page.children.filter(n=>n.type==='FRAME').map(f=>({f,card:f.findOne(n=>n.name==='Acesso ao Gestor de Portarias')})).filter(e=>e.card);
const fonts=new Map();for(const {f}of entries)for(const t of f.findAllWithCriteria({types:['TEXT']}))for(const s of t.getStyledTextSegments(['fontName']))fonts.set(JSON.stringify(s.fontName),s.fontName);
await Promise.all([...fonts.values()].map(f=>figma.loadFontAsync(f)));
await Promise.all(['Regular','SemiBold'].map(style=>figma.loadFontAsync({family:'Source Sans 3',style})));
const ids={white:'VariableID:4:11',green:'VariableID:4:17',ink:'VariableID:4:13',muted:'VariableID:4:15'};
const variables=new Map(await Promise.all(Object.entries(ids).map(async([k,id])=>[k,await figma.variables.getVariableByIdAsync(id)])));
const paint=k=>figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:1,g:1,b:1}},'color',variables.get(k));
function mark(n){changed.add(n.id);return n;}
function padding(n,l,t=l,r=l,b=t){for(const [k,v]of Object.entries({paddingLeft:l,paddingTop:t,paddingRight:r,paddingBottom:b})){n.setBoundVariable(k,null);n[k]=v;}mark(n);}
function gap(n,v){n.setBoundVariable('itemSpacing',null);n.itemSpacing=v;mark(n);}
function width(n,w){const vs=n.layoutSizingVertical;n.resize(Math.max(1,w),n.height);if(n.parent.layoutMode&&n.parent.layoutMode!=='NONE'&&n.layoutPositioning!=='ABSOLUTE'){n.layoutSizingHorizontal='FILL';n.layoutSizingVertical=vs;}mark(n);}
function col(parent,name,w){let n=parent.children.find(n=>n.name===name);if(!n){n=figma.createAutoLayout('VERTICAL');created.push(n.id);parent.appendChild(n);n.name=name;}n.resize(w,1);n.layoutSizingVertical='HUG';n.fills=[];gap(n,0);padding(n,0);mark(n);return n;}
function text(parent,name,value,w,size,line,color='ink',style='Regular'){let t=parent.children.find(n=>n.name===name&&n.type==='TEXT');if(!t){t=figma.createText();created.push(t.id);parent.appendChild(t);}t.name=name;t.fontName={family:'Source Sans 3',style};t.fontSize=size;t.lineHeight={unit:'PIXELS',value:line};t.characters=value;t.fills=[paint(color)];t.textAutoResize='HEIGHT';t.resize(w,t.height);t.layoutSizingHorizontal='FILL';t.layoutSizingVertical='HUG';mark(t);return t;}
function signature(f){return JSON.stringify(f.findAll(n=>'reactions'in n&&n.reactions.length).map(n=>({id:n.id,reactions:n.reactions})));}
for(const {f,card}of entries){
 const before=signature(f),body=f.findOne(n=>n.name==='Conteúdo'),scroll=f.findOne(n=>n.name==='Conteúdo rolável'),work=f.findOne(n=>n.name==='Área de trabalho'),photo=f.findOne(n=>n.name==='Imagem institucional');
 const logo=card.children.find(n=>n.name.startsWith('Marca oficial'))||f.findOne(n=>n.name.startsWith('Marca oficial'));
 const cardWidth=MOBILE?f.width:400,inner=MOBILE?f.width-48:400;
 card.resize(cardWidth,card.height);card.layoutSizingHorizontal='FIXED';card.layoutSizingVertical='HUG';card.strokes=[];card.strokeWeight=0;card.cornerRadius=0;card.fills=[];padding(card,MOBILE?24:0);gap(card,20);card.clipsContent=false;mark(card);
 body.layoutMode=MOBILE?'VERTICAL':'HORIZONTAL';body.resize(f.width,1);body.layoutSizingHorizontal='FIXED';body.layoutSizingVertical='HUG';body.counterAxisAlignItems=MOBILE?'MIN':'CENTER';body.primaryAxisAlignItems='MIN';padding(body,0);gap(body,0);body.fills=[paint('white')];mark(body);
 for(const n of [f,work,scroll]){n.fills=[paint('white')];mark(n);}scroll.primaryAxisAlignItems='MIN';scroll.counterAxisAlignItems='MIN';scroll.overflowDirection='VERTICAL';
 if(MOBILE){
   const brand=col(body,'Identidade institucional',f.width);padding(brand,24);brand.fills=[paint('white')];body.insertChild(0,brand);if(logo){brand.appendChild(logo);logo.resize(224,224*275/828);mark(logo);}
   const hero=col(body,'Apresentação do sistema',f.width);padding(hero,24);gap(hero,12);hero.fills=[paint('green')];body.insertChild(1,hero);
   const existing=card.findOne(n=>n.type==='TEXT'&&n.characters==='Gestor de Portarias');if(existing){hero.appendChild(existing);existing.name='Nome do sistema';mark(existing);}
   text(hero,'Nome do sistema','Gestor de Portarias',inner,32,40,'white','SemiBold');
   text(hero,'Finalidade do sistema','Solicitação, emissão e acompanhamento dos atos do Campus Videira.',inner,16,23,'white');
   body.insertChild(2,card);
   if(photo){body.appendChild(photo);photo.resize(f.width,photo.height);photo.layoutSizingHorizontal='FIXED';photo.layoutSizingVertical='HUG';padding(photo,24,0,24,24);gap(photo,8);photo.fills=[];mark(photo);for(const n of photo.children){if(n.type==='RECTANGLE')n.resize(inner,144);width(n,inner);}}
 }else{
   const left=Math.round(f.width*.45),right=f.width-left;
   if(photo){body.insertChild(0,photo);photo.resize(left,f.height);photo.layoutSizingHorizontal='FIXED';photo.layoutSizingVertical='FIXED';photo.primaryAxisAlignItems='CENTER';photo.counterAxisAlignItems='MIN';photo.fills=[paint('green')];photo.cornerRadius=0;padding(photo,56);gap(photo,24);mark(photo);
     const iw=left-112;for(const n of photo.children){if(n.type==='TEXT'){if(n.characters==='Gestor de Portarias'||n.name==='Gestor de Portarias'){n.characters='Gestor de\nPortarias';n.fontSize=56;n.lineHeight={unit:'PIXELS',value:60};n.name='Gestor de Portarias';}n.fills=[paint('white')];n.textAutoResize='HEIGHT';width(n,iw);}else if(n.type==='RECTANGLE'){n.resize(iw,iw*3/4);width(n,iw);}}}
   const area=col(body,'Área de acesso',right);area.minHeight=f.height;padding(area,64);area.counterAxisAlignItems='CENTER';area.primaryAxisAlignItems='CENTER';area.fills=[paint('white')];area.appendChild(card);card.layoutSizingHorizontal='FIXED';card.resize(cardWidth,card.height);card.layoutSizingVertical='HUG';mark(area);mark(card);
   if(logo){logo.resize(264,264*275/828);mark(logo);}
 }
 // Reflow only the semantic access containers; SVG icons keep their geometry.
 for(const n of card.findAll(n=>n.type==='FRAME'||n.type==='INSTANCE'||n.type==='TEXT')){
   const p=n.parent;if(!p.layoutMode||p.layoutMode==='NONE'||n.layoutPositioning==='ABSOLUTE')continue;
   if(n.type==='FRAME'&&n.layoutMode==='NONE')continue;
   const iw=p.width-p.paddingLeft-p.paddingRight;
   if(p.layoutMode==='VERTICAL'){if(n.type==='TEXT')n.textAutoResize='HEIGHT';width(n,iw);}
   if(n.type==='FRAME'&&n.layoutMode!=='NONE'&&n.name!=='Entrada'){n.layoutSizingVertical='HUG';mark(n);}
 }
 for(const n of card.children){if(n!==logo){if(n.type==='TEXT')n.textAutoResize='HEIGHT';width(n,inner);}}
 const titleGroup=card.children.find(n=>n.name==='Título e orientação de acesso');if(titleGroup){gap(titleGroup,8);const title=titleGroup.children.find(n=>n.type==='TEXT');if(title){title.fontSize=MOBILE?26:34;title.lineHeight={unit:'PIXELS',value:MOBILE?34:42};title.textAutoResize='HEIGHT';width(title,inner);}}
 for(const n of card.findAllWithCriteria({types:['INSTANCE']})){
   if(n.name.startsWith('Campo /')){n.layoutSizingVertical='HUG';const input=n.findOne(n=>n.name==='Entrada');if(input){input.resize(n.width,48);input.layoutSizingHorizontal='FILL';input.layoutSizingVertical='FIXED';mark(input);for(const t of input.children.filter(n=>n.type==='TEXT')){t.textAutoResize='HEIGHT';width(t,n.width-input.paddingLeft-input.paddingRight);}}}
   if(n.name.startsWith('Ação /')){n.resize(n.width,48);n.layoutSizingVertical='FIXED';mark(n);for(const t of n.children.filter(n=>n.type==='TEXT')){t.textAutoResize='HEIGHT';t.resize(n.width-n.paddingLeft-n.paddingRight,22);t.layoutSizingHorizontal='FILL';t.layoutSizingVertical='HUG';t.textAlignHorizontal='CENTER';mark(t);}}
 }
 checks.push({id:f.id,name:f.name,contentHeight:body.height,cardWidth:card.width,cardHeight:card.height,reactionsUnchanged:before===signature(f)});
}
return {createdNodeIds:created,mutatedNodeIds:[...changed],entries:checks};
