await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
await Promise.all(['Regular','Bold'].map(style=>figma.loadFontAsync({family:'Roboto',style})));
const set=await figma.getNodeByIdAsync('208:128'),changed=[],rows=[];
for(const id of IDS){const f=await figma.getNodeByIdAsync(id),card=f.findOne(n=>n.name==='Acesso ao Gestor de Portarias'),fields=card.findAllWithCriteria({types:['INSTANCE']}).filter(n=>n.mainComponent?.parent?.id===set.id),scale=f.width>=1024?Math.max(Math.min(f.width/1586,f.height/992),44/52):48/52;
 for(const [i,n]of fields.entries()){const parent=n.parent,index=parent.children.indexOf(n),w=n.width,state=n.componentProperties.Estado.value,type=i===1?'Senha':'Usuário',values={};for(const [k,v]of Object.entries(n.componentProperties))if(v.type==='TEXT')values[k.split('#')[0]]=v.value;const reactions=n.reactions,target=set.children.find(c=>c.name==='Tipo='+type+', Estado='+state+', Visibilidade=Oculta'),error=n.findOne(n=>n.type==='TEXT'&&n.name==='Mensagem de erro')?.characters;
  figma.currentPage.appendChild(n);n.layoutSizingHorizontal='FIXED';n.layoutSizingVertical='FIXED';n.mainComponent=target;n.removeOverrides();n.layoutSizingHorizontal='FIXED';n.layoutSizingVertical='FIXED';const currentInputHeight=n.findOne(n=>n.name==='Entrada').height;n.rescale((52*scale)/currentInputHeight);n.resize(w,n.height);parent.insertChild(index,n);n.layoutSizingHorizontal='FILL';n.layoutSizingVertical='HUG';
  const props={};for(const [k,v]of Object.entries(n.componentProperties))if(v.type==='TEXT')props[k]=k.startsWith('Rótulo#')?type:values[k.split('#')[0]]||(type==='Senha'?'Digite sua senha':'nome.sobrenome');n.setProperties(props);n.name='Campo / '+type;await n.setReactionsAsync(reactions);
  if(f.width<1024)for(const t of n.findAllWithCriteria({types:['TEXT']})){t.fontSize=16;t.lineHeight={unit:'PIXELS',value:24};changed.push(t.id);}if(error){const e=n.findOne(n=>n.type==='TEXT'&&n.name==='Mensagem de erro');if(e){e.characters=error;changed.push(e.id);}}
  changed.push(n.id);rows.push({root:f.id,id:n.id,type,desiredInputHeight:52*scale,actualInputHeight:n.findOne(n=>n.name==='Entrada').height,labelSize:n.children.find(n=>n.type==='TEXT').fontSize});
 }
}
return {mutatedNodeIds:changed,fields:rows};
