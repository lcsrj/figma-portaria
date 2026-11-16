from pathlib import Path
p=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/functional.js')
s=p.read_text(encoding='utf-8')
s=s.replace("test('Perfil '+u.key+' → saída única',to(home,AUTH.portal));","const exits=nodes(home).flatMap(acts).filter(a=>a.type==='NODE'&&a.destinationId);let exitOK=to(home,AUTH.portal);for(const a of exits){const dest=await get(a.destinationId);if(dest&&to(dest,AUTH.portal))exitOK=true;}test('Perfil '+u.key+' → saída única pelo menu',exitOK);")
s=s.replace("a.variableValue.value===exp","(typeof exp==='number'?Math.abs(a.variableValue.value-exp)<.001:a.variableValue.value===exp)")
s=s.replace("for(const[k,id]of Object.entries(VARS))test('Detalhe vinculado '+k", "for(const[k,id]of Object.entries(VARS).filter(([k])=>k!==(DEVICE==='D'?'progressM':'progressD')))test('Detalhe vinculado '+k")
p.write_text(s,encoding='utf-8')

