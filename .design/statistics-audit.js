await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const checks={frames:0,nodes:0,nodeTypes:{},images:[],wrongFonts:[],horizontalOverflow:[],missingDestinations:[],selfNavigation:[],foreignScroll:[],ownDataLeaks:[],technicalLinks:[],nominalDepartmentLeaks:[]},frameStats=[];
function top(n){let p=n;while(p.parent&&p.parent.type!=='PAGE')p=p.parent;return p;}
function actions(a){return a.flatMap(x=>x.type==='CONDITIONAL'?x.conditionalBlocks.flatMap(b=>actions(b.actions)):x.type==='NODE'?[x]:[]);}
const businessIds=new Set(Object.entries(FRAMES).filter(([k])=>!k.includes('SELF')&&!['E1-TECH','TECH-LOG','PDF-INFO','RESTRITO'].includes(k)).map(([k,v])=>v));
for(const[key,id]of Object.entries(FRAMES)){const root=await figma.getNodeByIdAsync(id);if(!root)continue;checks.frames++;const body=root.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Conteúdo');const ns=body?[body,...body.findAll(()=>true)]:[];let nodeCount=0;
 for(const n of ns){nodeCount++;checks.nodeTypes[n.type]=(checks.nodeTypes[n.type]||0)+1;
 if('fills'in n&&Array.isArray(n.fills)&&n.fills.some(f=>f.type==='IMAGE'))checks.images.push({root:key,id:n.id,name:n.name,width:n.width,height:n.height});
 if(n.type==='TEXT'){for(const seg of n.getStyledTextSegments(['fontName']))if(seg.fontName.family!=='Source Sans 3')checks.wrongFonts.push({root:key,id:n.id,font:seg.fontName.family});if(key.includes('SELF')&&/Rafael Duarte|Beatriz Nunes|Lucas Ferreira|Camila Azevedo/.test(n.characters))checks.ownDataLeaks.push({root:key,id:n.id});if(key.startsWith('DEPE:')&&/Lucas Ferreira|Camila Azevedo/.test(n.characters))checks.nominalDepartmentLeaks.push({root:key,id:n.id});}
 if(['FRAME','INSTANCE','TEXT'].includes(n.type)&&n.parent&&n.parent.type!=='PAGE'&&'width'in n.parent&&n.x+n.width>n.parent.width+2)checks.horizontalOverflow.push({root:key,id:n.id,name:n.name.slice(0,60),right:n.x+n.width,parentWidth:n.parent.width});
 }
 const all=[root,...root.findAll(()=>true)];for(const n of all){if(!('reactions'in n))continue;for(const r of n.reactions){for(const a of actions(r.actions||[])){if(!a.destinationId)continue;const d=await figma.getNodeByIdAsync(a.destinationId);if(!d){checks.missingDestinations.push({root:key,source:n.id,to:a.destinationId});continue;}if(a.navigation==='NAVIGATE'&&a.destinationId===root.id)checks.selfNavigation.push({root:key,source:n.id});if(a.navigation==='SCROLL_TO'&&top(d).id!==root.id)checks.foreignScroll.push({root:key,source:n.id,target:d.id,name:d.name});if(['E1-TECH','TECH-LOG'].includes(key)&&businessIds.has(d.id))checks.technicalLinks.push({root:key,source:n.id,target:d.id});}}}
 checks.nodes+=nodeCount;frameStats.push({key,id,nodes:nodeCount});
}
return {checks,frameStats};
