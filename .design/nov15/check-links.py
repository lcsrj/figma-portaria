import re,json
from pathlib import Path
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
missing=[]
for name in ['ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md','VALIDACAO_VISUAL_FIGMA_2026-11-15.md']:
 s=(root/name).read_text(encoding='utf-8')
 for path in re.findall(r'\]\(<(C:/[^>]+)>\)',s):
  if not Path(path).exists():missing.append(path)
assert not missing,missing
s=json.loads((root/'.design/nov15/state-final.json').read_text(encoding='utf-8'))
assert s['validation']['snapshots']==217 and s['validation']['interpretedAssertions']==1370
assert sum(len(set(s['screens'][d].values())) for d in ['D','M'])==274
print('All local delivery links and final counts are valid')

