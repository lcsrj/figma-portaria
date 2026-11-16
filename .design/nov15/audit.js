await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const result={screens:0,nodes:0,types:{},missing:[],selfNavigation:[],overflow:[],buttonClipping:[],privateImages:[],unboundProject:[],publicLevels:[]};
function actions(as){return as.flatMap(a=>a.type==='NODE'?[a]:a.type==='CONDITIONAL'?a.conditionalBlocks.flatMap(b=>actions(b.actions||[])):[])}
for(const[key,id]of Object.entries(ROOTS)){const r=await figma.getNodeByIdAsync(id);if(!r){result.missing.push({key,id});continue;}result.screens++;const ns=[r,...r.findAll(()=>true)];result.nodes+=ns.length;const pub=r.findAllWithCriteria({types:['FRAME']}).some(n=>n.name==='Acesso ao Gestor de Portarias');for(const n of ns){result.types[n.type]=(result.types[n.type]||0)+1;
 if(n.type==='TEXT'&&pub&&/Nível\s*[1-4]|Escolher outro acesso|Escolher outro tipo de acesso/.test(n.characters))result.publicLevels.push({key,id:n.id,text:n.characters});
 if(['FRAME','TEXT','INSTANCE'].includes(n.type)&&n.parent&&'width'in n.parent&&n.parent.layoutMode&&n.parent.layoutMode!=='NONE'&&n.x+n.width>n.parent.width+2)result.overflow.push({key,id:n.id,name:n.name.slice(0,55),width:n.width,x:n.x,parentWidth:n.parent.width});
 if(n.type==='INSTANCE'&&n.name.startsWith('Ação /'))for(const t of n.findAllWithCriteria({types:['TEXT']}))if(t.height>n.height+1)result.buttonClipping.push({key,id:n.id,label:t.characters,textHeight:t.height,height:n.height});
 if('reactions'in n)for(const re of n.reactions)for(const a of actions(re.actions||[])){if(!a.destinationId)continue;const dest=await figma.getNodeByIdAsync(a.destinationId);if(!dest)result.missing.push({key,source:n.id,to:a.destinationId});if(a.navigation==='NAVIGATE'&&a.destinationId===r.id)result.selfNavigation.push({key,source:n.id});}
 }
 if(!pub){const b=r.findAllWithCriteria({types:['FRAME']}).find(n=>n.name==='Conteúdo');for(const n of b?.findAll(()=>true)||[])if('fills'in n&&Array.isArray(n.fills)&&n.fills.some(f=>f.type==='IMAGE'))result.privateImages.push({key,id:n.id,name:n.name});}
}
return result;
