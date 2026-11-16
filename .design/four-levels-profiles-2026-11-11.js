await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
await Promise.all([['Source Sans 3','Regular'],['Source Sans 3','SemiBold'],['Source Sans 3','Bold'],['Source Serif 4','Regular'],['Roboto','Regular'],['Roboto','Bold'],['Roboto','Medium'],['Inter','Bold'],['Inter','Extra Bold'],['Carlito','Regular']].map(([family,style])=>figma.loadFontAsync({family,style})));
const page=figma.currentPage,changed=new Set(),levels={},roles={};
const operation=await figma.getNodeByIdAsync(BADGES[3][MOBILE?'compact':'full']);
const wait=MOBILE?'229:4964':'229:4408';
for(const f of page.children.filter(n=>n.type==='FRAME')){
 const own=f.findOne(n=>n.name==='Identificação de servidor')||f.findOne(n=>n.name==='Conta'&&n.parent?.name==='Navegação principal');
 let identity=own?own.children.filter(n=>n.type==='TEXT').map(n=>n.characters):ROLEMAP[f.name.replace(/^(Computador|Celular) · /,'')];
 if(f.id===wait)identity=['Marina Costa','Gabinete'];
 const role=identity?.[1]||'',level=/Diretor-Geral|Direção-Geral|Vice-Diretora autorizada/.test(role)?4:/Gabinete|CGP|DGP|Gestão de Pessoas/.test(role)?3:identity?2:null;
 if(level){levels[f.id]=level;roles[f.id]=identity;}
 // The former highest tier becomes 4. Operational tier 3 is applied separately by profile.
 for(const t of f.findAllWithCriteria({types:['TEXT']})){
  if(t.characters.match(/[Nn]ível 3/)&&!t.parent.name.startsWith('Nível de acesso')){t.characters=t.characters.replace(/Nível 3/g,'Nível 4').replace(/nível 3/g,'nível 4');changed.add(t.id);}
 }
 if(f.name.includes('Nível 3')){f.name=f.name.replace('Nível 3','Nível 4');changed.add(f.id);}
 if(level===3){
  for(const n of f.findAllWithCriteria({types:['INSTANCE']}).filter(n=>n.mainComponent?.id===BADGES[2][MOBILE?'compact':'full'])){n.swapComponent(operation);n.name='Nível de acesso / 3';changed.add(n.id);for(const c of n.findAll(()=>true))changed.add(c.id);}
  const facts=f.findOne(n=>n.name==='Acesso e competência');if(facts)for(const t of facts.findAllWithCriteria({types:['TEXT']}))if(t.characters.startsWith('2 · Acesso')){t.characters='3 · Elaboração e operação conforme escopo';changed.add(t.id);}
  if(f.id===wait){f.name=(MOBILE?'Celular':'Computador')+' · Aguardando assinatura · Nível 3';changed.add(f.id);}
 }
 for(const n of f.findAllWithCriteria({types:['INSTANCE']}).filter(n=>n.mainComponent?.parent?.id==='228:19'&&n.mainComponent?.name.startsWith('Nível=4'))){n.name='Nível de acesso / 4';changed.add(n.id);}
 for(const row of f.findAll(n=>n.type==='FRAME'&&n.name.startsWith('Registro /')&&['Registro / Marina Costa','Registro / Eduardo Almeida','Registro / Sofia Ribeiro'].includes(n.name))){const texts=row.children.filter(n=>n.type==='TEXT');if(texts.length<2)continue;const t=texts[1];if(/Gabinete.*Nível 2/.test(t.characters)){t.characters=t.characters.replace('Nível 2','Nível 3');changed.add(t.id);}else if(/Direção-Geral.*Nível 3|Vice.*Nível 3/.test(t.characters)){t.characters=t.characters.replace('Nível 3','Nível 4');changed.add(t.id);}}
}
return {mutatedNodeIds:[...changed],levels,roles,counts:{internal:Object.keys(levels).length,operational:Object.values(levels).filter(n=>n===3).length,management:Object.values(levels).filter(n=>n===4).length}};
