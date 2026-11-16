import json
from pathlib import Path
from PIL import Image
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
files=list((root/'.design/nov15').glob('*.json'))
for p in files:json.loads(p.read_text(encoding='utf-8-sig'))
side=json.loads((root/'.impeccable/design.json').read_text(encoding='utf-8'))
images=json.loads((root/'.design/nov15/captures-final.json').read_text(encoding='utf-8'))
assert len(images)==len({r['name'] for r in images})==217
for r in images:
 assert not r.get('error'), r['name']
 with Image.open(root/'.impeccable/review/nov15'/f"{r['name']}.png") as im:im.verify()
paths=['functional-delivery-D.json','functional-delivery-M.json',*[f'report-functional-final-{d}-{p}.json' for d in 'DM' for p in 'WMC'],'reading-functional-final.json','role-notifications-final.json']
checks=[json.loads((root/'.design/nov15'/p).read_text(encoding='utf-8')) for p in paths]
assert all(c['passed']==c['total'] for c in checks)
assert sum(c['total'] for c in checks)==1370
summary={'json_files_valid':len(files)+1,'snapshot_files_valid':217,'interpreted_assertions_passed':1370,'data_checks_passed':json.loads((root/'.design/nov15/data-checks.json').read_text())['passed'],'design_schema':side['schemaVersion'],'native_clicks_executed':False}
(root/'.design/nov15/delivery-verification.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(summary,ensure_ascii=False))

