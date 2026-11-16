import json,re,hashlib
from pathlib import Path
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
def read(name):return (root/name).read_text(encoding='utf-8-sig')
def write(name,s):(root/name).write_text(s,encoding='utf-8')
d=read('DESIGN.md')
front=d.split('---',2)[1]
d=d.replace('A revisão final inspecionou as 12 tabelas desktop e as tabelas móveis C05/C06; não certificou as outras dez tabelas móveis nem a alternância por cliques.','A revisão final e o complemento inspecionaram os 12 gráficos e as 12 tabelas de cada classe de dispositivo. A alternância por cliques não foi executada.')
d=d.replace('o primeiro conjunto tem 141 capturas e as recapturas finais somam 53 (194 no total).','o primeiro conjunto tem 141 capturas, as recapturas F01–F05 somam 53 e o complemento acrescenta 23, totalizando 217 PNGs.')
d=d.replace('Os corpos e vínculos nativos estão em `.design/nov15/state.json`','O adendo `.impeccable/review/nov15/complemento.md` registra os 23 complementos sem achado material novo, incluindo gráficos/tabelas móveis e Avisos na navegação externa. Os corpos e vínculos nativos estão em `.design/nov15/state-final.json`')
assert d.split('---',2)[1]==front
write('DESIGN.md',d)
side=json.loads(read('.impeccable/design.json'))
before=json.dumps({k:side.get('extensions',{}).get(k) for k in ['colorMeta','typographyMeta','shadows']},sort_keys=True)
def update(o):
 if isinstance(o,dict):
  if o.get('totalCaptures')==194:
   o['totalCaptures']=217;o['supplementCaptures']=23;o['supplementReview']='.impeccable/review/nov15/complemento.md'
  for k,v in list(o.items()):
   if isinstance(v,str):
    o[k]=v.replace('outras dez tabelas móveis, ','').replace('.design/nov15/state.json','.design/nov15/state-final.json')
   else:update(v)
 elif isinstance(o,list):
  for v in o:update(v)
update(side)
side['extensions']['nov15CoverageSupplement']={'captures':23,'totalCaptures':217,'manifest':'.design/nov15/captures-final.json','review':'.impeccable/review/nov15/complemento.md','mobileChartsReviewed':12,'mobileTablesReviewed':12,'notificationScopeAssertions':12,'interpretedAssertionsTotal':1370,'nativeClicksExecuted':False,'publicMobileNavigation':'Avisos ao lado de Portarias e Minha conta; somente publicações.','documentationFollowup':'Merge inicial pelo documenter; atualização final de contagem/cobertura pelo agente principal após limite de uso do documenter.'}
after=json.dumps({k:side.get('extensions',{}).get(k) for k in ['colorMeta','typographyMeta','shadows']},sort_keys=True)
assert before==after
write('.impeccable/design.json',json.dumps(side,ensure_ascii=False,indent=2)+'\n')
doc=read('.impeccable/review/nov15/documentacao.md').replace('todas as telas, as outras dez tabelas móveis, backend','todas as telas, backend')
doc+='\n## Complemento documental final\n\nO agente principal concluiu este complemento após o documenter atingir seu limite de uso no handoff adicional. O merge inicial e a revisão independente foram preservados. Nenhum token, frontmatter ou snippet de componente foi alterado neste complemento.\n\nO revisor examinou mais 23 PNGs, registrados em complemento.md: 20 de gráficos/tabelas móveis e três de navegação externa. A cobertura acumulada é de217=141+53+23. Os 12 gráficos e12 tabelas móveis estão visualmente inspecionados; foi fechada a ressalva anterior das outras dez tabelas. A entrada Avisos móvel e a legenda Notificações desktop mantêm o escopo público. Os12 checks novos de acesso/escopo passaram por interpretação de ações, elevando o total para1.370 asserções; nenhum clique real foi executado. O manifesto integral é captures-final.json e o estado canônico é state-final.json. O veredito ship permanece restrito a F01–F05; o adendo não é aprovação funcional ou do projeto inteiro.\n'
write('.impeccable/review/nov15/documentacao.md',doc.replace('de217','de 217').replace('e12 tabelas','e 12 tabelas').replace('Os12 checks','Os 12 checks').replace('para1.370','para 1.370'))
state=json.loads(read('.design/nov15/state-final.json'))
for mode in ['D','M']:
 base=json.loads(read('.design/nov15/state-final.json'))['screens'][mode]
 ext=state['auth'][mode]['users'][0]['home']
 if ext not in base.values():base['external-home']=ext
 state['screens'][mode]=base
state['validation'].update({'interpretedAssertions':1370,'structuralScreens':274,'snapshots':217})
state['validation']['captureManifests'].update({'all':'captures-final.json','mobileSupplement':'captures-mobile-complement.json','externalMobile':'captures-external-final.json','externalDesktop':'captures-external-desktop-final.json'})
state['validation']['auditFiles']={'D':'audit-delivery-final-D.json','M':'audit-delivery-M.json'}
state['validation']['notificationScopes']='role-notifications-final.json'
write('.design/nov15/state-final.json',json.dumps(state,ensure_ascii=False,indent=2)+'\n')
for name in ['PRODUCT.md','UX-CONTRACT.md','.design/nov15/README.md']:
 s=read(name)
 s=s.replace('194 capturas de validação','217 capturas de validação')
 s=s.replace('272 telas','274 telas')
 s=s.replace('captures-all.json reúne 194 nomes únicos','captures-final.json reúne 217 nomes únicos')
 s=s.replace('Fonte: captures-all.json','Fonte: captures-final.json')
 if name.endswith('README.md'):
  s+='\nComplemento final: captures-mobile-complement.json (20), captures-external-final.json (2) e captures-external-desktop-final.json (1). Manifesto integral vigente: captures-final.json (217). Acesso/escopo de notificações: role-notifications-final.json (12/12); total1370 asserções interpretadas. Auditorias vigentes: audit-delivery-final-D.json e audit-delivery-M.json (274 telas).\n'
 if name=='UX-CONTRACT.md':s+='\nO complemento visual de15/11 inspecionou os demais gráficos/tabelas móveis e a navegação de Avisos pública: total217 capturas. Avisos fica na barra móvel da conta externa, mantendo somente atos publicados. Doze verificações interpretadas confirmam acesso às respectivas notificações dos quatro perfis D/M e os escopos próprio/público; não são cliques nem autorização real. Ver complemento.md e role-notifications-final.json na pasta de evidências.\n'
 write(name,s.replace('total1370','total 1370').replace('de15/11','de 15/11').replace('total217','total 217'))
print('Documentação reconciliada; tokens preservados; 217 capturas / 1370 asserções / 274 telas')

