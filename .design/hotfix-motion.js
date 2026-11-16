// Inject PAGE and MOBILE. Preserve all business actions and destinations.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
const page = figma.currentPage;
if (PAGE === '4:2') {
  const mutatedNodeIds = [];
  const set = await figma.getNodeByIdAsync('4:118');
  const tint = await figma.variables.getVariableByIdAsync('VariableID:4:21');
  const ink = await figma.variables.getVariableByIdAsync('VariableID:4:13');
  for (const h of set.children.filter(n => n.name.endsWith('Estado=Hover'))) {
    const normal = set.children.find(n => n.name === h.name.replace('Estado=Hover','Estado=Padrão'));
    await h.setReactionsAsync([{trigger:{type:'MOUSE_LEAVE',delay:0},actions:[{type:'NODE',navigation:'CHANGE_TO',destinationId:normal.id,transition:{type:'SMART_ANIMATE',easing:{type:'EASE_OUT'},duration:.12}}]}]);
    if (h.id === '4:96' || h.id === '4:104') h.fills = [figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:234/255,g:243/255,b:236/255}},'color',tint)];
    if (h.id === '4:112') h.fills = [figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:29/255,g:41/255,b:53/255},opacity:.12},'color',ink),...h.fills.filter(p => p.opacity !== .12)];
    mutatedNodeIds.push(h.id);
  }
  return {mutatedNodeIds};
}
const mutatedNodeIds = [], counts = {navigation:0,state:0,tabs:0,mobileMenu:0,hover:0};
const roots = page.children.filter(n => n.type === 'FRAME');
const rootMap = new Map(roots.map(f => [f.id,f]));
const buttonSet = await figma.getNodeByIdAsync('4:118');
const hoverMap = new Map(buttonSet.children.filter(n => n.name.endsWith('Estado=Padrão')).map(n => [n.id,buttonSet.children.find(h => h.name === n.name.replace('Estado=Padrão','Estado=Hover')).id]));
const easing = {type:'EASE_OUT'};
function transition(a,n) {
  if (a.type !== 'NODE') return a;
  if (a.navigation === 'CHANGE_TO') { counts.state++; return {...a,transition:{type:'SMART_ANIMATE',easing,duration:.15}}; }
  if (a.navigation !== 'NAVIGATE') return a;
  const dest = rootMap.get(a.destinationId);
  if (!dest) return a;
  if (MOBILE && n.name === 'Controle / menu') {
    counts.mobileMenu++;
    return {...a,transition:{type:'MOVE_IN',direction:'RIGHT',matchLayers:false,easing,duration:.24}};
  }
  if (n.name.startsWith('Aba /') || n.parent?.name === 'Etapas') {
    counts.tabs++;
    return {...a,transition:{type:'SMART_ANIMATE',easing,duration:.22}};
  }
  if (n.name.startsWith('Campo /')) {
    counts.state++;
    return {...a,transition:{type:'SMART_ANIMATE',easing,duration:.18},resetScrollPosition:false};
  }
  counts.navigation++;
  return {...a,transition:{type:'DISSOLVE',easing,duration:.22}};
}
for (const f of roots) {
  const nodes = f.findAll(n => 'reactions' in n && n.reactions.length);
  for (const n of nodes) {
    let reactions = n.reactions.map(r => ({trigger:r.trigger,actions:(r.actions || []).map(a => transition(a,n))}));
    if (!MOBILE && n.type === 'INSTANCE' && hoverMap.has(n.mainComponent?.id) && n.name.startsWith('Ação /')) {
      reactions = reactions.filter(r => r.trigger.type !== 'ON_HOVER');
      reactions.push({trigger:{type:'ON_HOVER'},actions:[{type:'NODE',navigation:'CHANGE_TO',destinationId:hoverMap.get(n.mainComponent.id),transition:{type:'SMART_ANIMATE',easing,duration:.15}}]});
      counts.hover++;
    }
    await n.setReactionsAsync(reactions);
    mutatedNodeIds.push(n.id);
  }
}
return {mutatedNodeIds,counts,frames:roots.length};
