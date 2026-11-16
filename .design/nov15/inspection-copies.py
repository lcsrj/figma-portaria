import json
from pathlib import Path
from PIL import Image
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
rows=json.loads((root/'.design/nov15/captures-final.json').read_text(encoding='utf-8'))
for r in rows:
    src=Image.open(r['path']).convert('RGBA')
    out=Image.new('RGB',src.size,'white')
    out.paste(src,mask=src.getchannel('A'))
    out.save(root/'.impeccable/review/nov15'/f"{r['name']}.png")
print(len(rows))





