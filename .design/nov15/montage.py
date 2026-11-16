import json, math
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
rows=json.loads((root/'.design/nov15/captures-reviewed.json').read_text(encoding='utf-8'))
ok=[r for r in rows if not r.get('error')]
for start in range(0,len(ok),12):
    chunk=ok[start:start+12]
    canvas=Image.new('RGB',(1600,2200),'#e3e5e7')
    d=ImageDraw.Draw(canvas)
    for j,r in enumerate(chunk):
        src=Image.open(r['path']).convert('RGBA')
        im=Image.new('RGB',src.size,'white')
        im.paste(src,mask=src.getchannel('A'))
        im.thumbnail((382,680))
        x=(j%4)*400+(400-im.width)//2
        y=(j//4)*730+35
        canvas.paste(im,(x,y))
        d.text(((j%4)*400+8,(j//4)*730+8),r['name'],fill='black')
    canvas.save(root/f'.design/nov15-previews/contact-{start//12+1:02d}.jpg',quality=92)
print({'opened':len(ok),'contacts':math.ceil(len(ok)/12)})



