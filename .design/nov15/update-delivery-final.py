import json,re
from pathlib import Path
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
def read(n):return(root/n).read_text(encoding='utf-8-sig')
def write(n,s):(root/n).write_text(s,encoding='utf-8')
report=read('ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md')
report=report.replace('**194 capturas**: 141 no primeiro conjunto e 53 recapturas/complementos finais.','**217 capturas**: 141 no primeiro conjunto, 53 recapturas de F01–F05 e 23 complementos.')
report=report.replace('O revisor independente abriu os 141 PNGs iniciais e os 53 finais, além dos respectivos índices.','O revisor independente abriu os 141 PNGs iniciais, os 53 de F01–F05 e os 23 complementares, além dos respectivos índices.')
report=report.replace('As 12 tabelas desktop e C05/C06 móveis foram inspecionadas; últimas linhas completas.','Os 12 gráficos e as 12 tabelas de cada classe foram inspecionados; últimas linhas completas.')
report=report.replace('Não é aprovação irrestrita de todas as telas, das outras dez tabelas móveis ou de acessibilidade.','O adendo complemento.md inspeciona os 23 complementos sem novo achado material. Não é aprovação irrestrita de todas as telas, dos percursos por interface ou de acessibilidade.')
report=report.replace('1.358 verificações interpretadas','1.370 verificações interpretadas').replace('1.358 percursos','1.370 percursos')
report=report.replace('131 telas D + 141 M','132 telas D + 142 M').replace('audit-final-D.json','audit-delivery-final-D.json').replace('audit-final-M.json','audit-delivery-M.json')
row='| Acesso às notificações nos quatro perfis D/M e escopos próprio/público | [checagens de escopo](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/role-notifications-final.json>) | 12/12 verificações interpretadas. Avisos foi incluído na barra móvel da conta externa, sem dados internos. |\n'
report=report.replace('| Reconciliação de projetos, cadastros, coortes, percentuais, tarefas e 32 métricas |',row+'| Reconciliação de projetos, cadastros, coortes, percentuais, tarefas e 32 métricas |')
report=report.replace('Duas legendas laterais externas excediam a largura','Três legendas laterais externas excediam a largura')
report=report.replace('| Estado legado podia sugerir exportação preparada como arquivo |','| Conta externa móvel sem entrada direta nos avisos | Avisos adicionado na barra Portarias/Minha conta, preservando ações e escopo público. Novas imagens e 12 checks de acesso/escopo conferidos. |\n| Estado legado podia sugerir exportação preparada como arquivo |')
report='\n'.join(l for l in report.split('\n') if not l.startswith('- As outras dez tabelas móveis não receberam inspeção'))
report=report.replace('Etapa de interface implementada; validação final parcial.','Etapa de interface implementada; validação final parcial.')
write('ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md',report)
rows=json.loads(read('.design/nov15/captures-final.json'))
names={r['name'] for r in rows}
def png(n):return f"[{n}](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/{n}.png>)"
def replacement(n):
 if 'final-'+n in names:return 'final-'+n
 special={'grafico-C05':'final-grafico-C05-D','grafico-C06':'final-grafico-C06-D','conteudo-editor-314-11512':'final-conteudo-editor-04-M','conteudo-editor-314-11589':'final-conteudo-editor-05-M','home-externo-M':'complemento-externo-inicio-M','home-externo-D':'complemento-externo-inicio-D','notificacoes-externo-M':'complemento-externo-avisos-M'}
 return special.get(n)
lines=[]
for r in rows:
 n=r['name'];rep=replacement(n)
 if rep:status='Registro anterior; usar recaptura';note='Substituído por '+png(rep)+'.'
 elif n.startswith('complemento-'):
  status='Complemento inspecionado';note='Cobertura dos modelos móveis e navegação pública; sem novo achado material no adendo independente.'
 elif n.startswith('final-'):
  status='Reavaliada no lote final';note='Evidência de F01–F05 ou complemento de conteúdo; aceite restrito ao escopo do veredito.'
 else:status='Inspecionada no conjunto inicial';note='Escopo do parecer inicial; conteúdo fora do viewport não é certificado pela imagem.'
 lines.append(f"| {png(n)} | {status} | {note} |")
catalog="""# Catálogo de validação visual — 15/11/2026

217 imagens: 141 do primeiro conjunto, 53 de F01–F05 e 23 complementares. As três referências anteriores não entram nessa contagem. O revisor independente examinou os217 PNGs nos respectivos conjuntos. O ship é restrito às cinco correções; o adendo fecha a cobertura dos gráficos/tabelas móveis e das entradas externas sem ampliar o aceite funcional.

As cópias de leitura compõem transparência sobre branco, sem alterar a UI. Quadros finais foram isolados de vizinhos do canvas. Painéis abaixo da primeira dobra foram capturados como conteúdo nativo isolado com clones temporários removidos. Isso não comprova alcance por rolagem nem cliques. As 12 versões Gráfico e 12 Tabela de cada classe estão cobertas por imagens.

“Registro anterior” conserva o estado inicial e aponta a recaptura que deve ser usada. Os demais resultados têm o escopo documentado no parecer, veredito e adendo; não são aprovação geral do sistema.

| Snapshot | Resultado da inspeção | Observação |
| --- | --- | --- |
"""+"\n".join(lines)+"""

[Relatório de entrega](<C:/Users/User/Documents/ChatGPT/Figma portaria/ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md>) · [Parecer](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/parecer.md>) · [Veredito](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/veredito.md>) · [Adendo](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/complemento.md>).
"""
write('VALIDACAO_VISUAL_FIGMA_2026-11-15.md',catalog.replace('os217','os 217'))
for name in ['DESIGN.md','PRODUCT.md','UX-CONTRACT.md','.design/nov15/README.md','.impeccable/review/nov15/documentacao.md']:
 s=read(name).replace('217 PNGs','217 PNGs')
 s=s.replace('216=141+53+23','217=141+53+23').replace('216=141+53+22','217=141+53+23')
 s=s.replace('217 capturas de validação','217 capturas de validação')
 if name=='PRODUCT.md':s=s.replace('217 capturas','217 capturas')
 if name=='DESIGN.md':s=s.replace('acrescenta 23, totalizando 217 PNGs','acrescenta 23, totalizando 217 PNGs')
 if name=='.design/nov15/README.md':
  s=s.replace('audit-final-D/M.json','audit-delivery-final-D.json / audit-delivery-M.json')
  s=s.replace('audit-final-D.json','audit-delivery-final-D.json')
  s=s.replace('captures-final.json reúne 217 nomes únicos','captures-final.json reúne 217 nomes únicos')
  s=s.replace('captures-external-desktop-final.json (1)','captures-external-desktop-final.json (1)')
 write(name,s)
verify=read('.design/nov15/verify-delivery.py').replace('captures-all.json','captures-final.json').replace('==194','==217').replace("'snapshot_files_valid':194","'snapshot_files_valid':217").replace("'reading-functional-final.json']","'reading-functional-final.json','role-notifications-final.json']").replace('==1358','==1370').replace("'interpreted_assertions_passed':1358","'interpreted_assertions_passed':1370")
write('.design/nov15/verify-delivery.py',verify)
print('Delivery and catalog reconciled: 217 captures, 1370 interpreted assertions, 274 screens')

