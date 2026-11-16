// Inject PAGE and MOBILE, then execute in use_figma. Idempotent per page.
const page = await figma.getNodeByIdAsync(PAGE);
await figma.setCurrentPageAsync(page);
const createdNodeIds = [], mutated = new Set(), removedNodeIds = [];
const roots = page.children.filter(n => n.type === 'FRAME');
const keyOf = f => f.name.split(' · ')[1];
const byKey = Object.fromEntries(roots.map(f => [keyOf(f), f]));
const flowKeys = ['requestNew','requestFilled','requestMember','requestError','requestDraft','requestReview','requestSent'];
const fonts = new Map();
for (const key of [...flowKeys,'requests']) for (const t of byKey[key].findAllWithCriteria({types:['TEXT']})) {
  for (const s of t.getStyledTextSegments(['fontName'])) fonts.set(JSON.stringify(s.fontName),s.fontName);
}
await Promise.all([...fonts.values()].map(f => figma.loadFontAsync(f)));
const maps = {}, flowMap = {}, operatorFrames = {};
let index = 0;
const right = Math.max(...roots.map(f => f.x + f.width)) + 160;
for (const key of flowKeys) {
  const targetKey = key + 'Operator';
  let clone = byKey[targetKey];
  if (!clone) {
    clone = byKey[key].clone();
    clone.name = (MOBILE ? 'M' : 'D') + ' · ' + targetKey + ' · ' + byKey[key].name.split(' · ').slice(2).join(' · ');
    clone.x = right + (index % 3) * (clone.width + 100);
    clone.y = 120 + Math.floor(index / 3) * (clone.height + 150);
    createdNodeIds.push(clone.id,...clone.findAll(() => true).map(n => n.id));
    if (!MOBILE) {
      const original = clone.children.find(n => n.name === 'Navegação principal');
      removedNodeIds.push(original.id,...original.findAll(() => true).map(n => n.id));
      original.remove();
      const side = byKey.requests.children.find(n => n.name === 'Navegação principal').clone();
      clone.insertChild(0,side);
      createdNodeIds.push(side.id,...side.findAll(() => true).map(n => n.id));
      side.resize(232,clone.height);
      side.layoutSizingHorizontal = 'FIXED';
      side.layoutSizingVertical = 'FIXED';
      side.visible = true;
      side.opacity = 1;
    }
  }
  operatorFrames[targetKey] = clone.id;
  maps[byKey[key].id] = clone.id;
  flowMap[byKey[key].id] = clone.id;
  index++;
}
for (const [doc,operator] of [['homeDoc','home'],['menuDoc','menu'],['accountDoc','account'],['requestsMine','requests'],['portariasDoc','portarias'],['requestDetailDoc','requestDetail']]) {
  if (byKey[doc] && byKey[operator]) maps[byKey[doc].id] = byKey[operator].id;
}
const operatorIds = new Set(Object.values(operatorFrames));
function isOperator(f) {
  if (operatorIds.has(f.id)) return true;
  if (!MOBILE) {
    const side = f.children.find(n => n.name === 'Navegação principal');
    const acc = side?.children.find(n => n.name === 'Conta');
    return !!acc?.findAllWithCriteria({types:['TEXT']}).some(t => t.characters === 'Marina Costa');
  }
  const menu = f.findOne(n => n.name === 'Controle / menu');
  return !!menu?.reactions.some(r => (r.actions || []).some(a => a.type === 'NODE' && a.destinationId === byKey.menu.id));
}
for (const f of [...roots,...Object.values(operatorFrames).map(id => page.children.find(n => n.id === id))]) {
  if (!isOperator(f)) continue;
  const redirects = operatorIds.has(f.id) ? maps : flowMap;
  for (const n of f.findAll(n => 'reactions' in n && n.reactions.length)) {
    let changed = false;
    const reactions = n.reactions.map(r => ({trigger:r.trigger,actions:(r.actions || []).map(a => {
      if (a.type === 'NODE' && redirects[a.destinationId] && redirects[a.destinationId] !== f.id) { changed = true; return {...a,destinationId:redirects[a.destinationId]}; }
      return a;
    })}));
    if (changed) { await n.setReactionsAsync(reactions); mutated.add(n.id); }
  }
  if (!MOBILE) {
    const side = f.children.find(n => n.name === 'Navegação principal');
    side.resize(232,f.height); side.layoutSizingHorizontal = 'FIXED'; side.layoutSizingVertical = 'FIXED';
    mutated.add(side.id);
  }
}
// Final feedback and role-specific return destinations.
const draft = page.children.find(f => f.id === operatorFrames.requestDraftOperator);
for (const t of draft.findAllWithCriteria({types:['TEXT']})) if (t.characters === 'O rascunho permanece disponível em Minhas solicitações.') {
  t.characters = 'O rascunho permanece disponível em Solicitações.'; mutated.add(t.id);
}
const draftButton = draft.findOne(n => n.type === 'INSTANCE' && n.name === 'Ação / Minhas solicitações');
if (draftButton) {
  const props = {}; for (const key of Object.keys(draftButton.componentProperties)) if (key.startsWith('Rótulo')) props[key] = 'Solicitações';
  draftButton.setProperties(props); draftButton.name = 'Ação / Solicitações';
  mutated.add(draftButton.id); for (const t of draftButton.findAllWithCriteria({types:['TEXT']})) mutated.add(t.id);
}
const follow = byKey.requestSent.findOne(n => n.name === 'Ação / Acompanhar solicitação');
await follow.setReactionsAsync(follow.reactions.map(r => ({trigger:r.trigger,actions:(r.actions || []).map(a => a.type === 'NODE' && a.navigation === 'NAVIGATE' ? {...a,destinationId:byKey.requestDetailDoc.id} : a)})));
mutated.add(follow.id);
if (MOBILE) for (const key of ['menu','menuDoc','menuAdmin']) {
  const top = byKey[key].findOne(n => n.name === 'Cabeçalho');
  const control = top.children.find(n => n.name === 'Controle / menu' || n.name === 'Controle / Fechar menu');
  if (control.name !== 'Controle / Fechar menu') {
    for (const child of [...control.children]) { removedNodeIds.push(child.id,...child.findAll(() => true).map(n => n.id)); child.remove(); }
    const icon = figma.createNodeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52616D" stroke-width="1.7" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>');
    control.appendChild(icon); icon.name = 'Ícone / fechar'; icon.resize(24,24);
    createdNodeIds.push(icon.id,...icon.findAll(() => true).map(n => n.id)); control.name = 'Controle / Fechar menu';
  }
  await control.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'BACK'}]}]); mutated.add(control.id);
}
const removed = new Set(removedNodeIds);
return {createdNodeIds:createdNodeIds.filter(id => !removed.has(id)),mutatedNodeIds:[...mutated],removedNodeIds,operatorFrames,
  evidence:Object.entries(operatorFrames).map(([key,id]) => {
    const f = page.children.find(n => n.id === id), side = f.children.find(n => n.name === 'Navegação principal');
    return {key,id,sidebar:side ? {width:side.width,height:side.height,visible:side.visible,menus:side.children.filter(n => n.name.startsWith('Menu /')).map(n => n.name),account:side.children.find(n => n.name === 'Conta').findAllWithCriteria({types:['TEXT']}).map(t => t.characters)} : 'compact-mobile'};
  })};
