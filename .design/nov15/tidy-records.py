from pathlib import Path
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
replacements={'níveis3/4':'níveis 3 e 4','Níveis3/4':'Níveis 3 e 4','revisões04/05':'revisões 04/05','revisão05':'revisão 05','de15/11':'de 15/11','—15/11':'— 15/11','contém32':'contém 32','tem9':'tem 9','×3 períodos':'× 3 períodos','em2 linhas':'em 2 linhas','a16px':'a 16 px','erro3':'erro 3','nas53':'nas 53','artigos1–3':'artigos 1–3','correçõesF01':'correções F01','registra10':'registra 10','json,473':'json, 473','json,276':'json, 276','json,136':'json, 136','json,272':'json, 272','de141':'de 141','registra53':'registra 53','reúne194':'reúne 194','os error3':'os error 3'}
for name in ['PRODUCT.md','UX-CONTRACT.md','.design/nov15/README.md']:
 p=root/name;s=p.read_text(encoding='utf-8')
 for a,b in replacements.items():s=s.replace(a,b)
 p.write_text(s,encoding='utf-8')
p=root/'.design/nov15/report-reading-mode.js'
p.write_text((root/'.design/nov15/report-reading-mode-fixed.js').read_text(encoding='utf-8'),encoding='utf-8')
print('Contratos e registro auxiliar verificados')

