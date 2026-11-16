from pathlib import Path
p=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/data.mjs')
s=p.read_text(encoding='utf-8')
marker="const tasks="
insert="""// Histórico demonstrativo coerente com a etapa atual; datas e quatro eventos por projeto preservados.
const productionHistory=[
 [['Solicitação','Recebida'],['Elaboração','Minuta iniciada'],['Elaboração','Rascunho atualizado'],['Rascunho','Aguardando conclusão da redação']],
 [['Solicitação','Recebida'],['Elaboração','Concluída'],['Revisão','Revisão opcional concluída'],['Validação departamental','Aguardando validação']],
 [['Solicitação','Recebida'],['Elaboração','Concluída'],['Revisão','Devolvida para correção'],['Devolvida','Justificativa incompleta']],
 [['Solicitação','Recebida'],['Elaboração','Concluída'],['Validação e aprovação para assinatura','Concluídas'],['Assinatura','Aguardando assinatura']],
 [['Solicitação','Recebida'],['Elaboração','Concluída'],['Validação e aprovação para assinatura','Concluídas'],['Assinatura','Conferência do arquivo de assinatura pendente']],
 [['Solicitação','Recebida'],['Elaboração e validação','Concluídas'],['Aprovação e assinatura','Concluídas'],['Publicação e comunicação','Aguardando publicação']],
 [['Solicitação','Recebida'],['Elaboração e validação','Concluídas'],['Aprovação e assinatura','Concluídas'],['Publicação e comunicação','Aguardando evidência de publicação']]
];
projects.filter(p=>p.state==='Em produção').forEach((p,i)=>p.events=p.events.map((e,j)=>({...e,stage:productionHistory[i][j][0],result:productionHistory[i][j][1]})));
"""
if 'const productionHistory=' not in s:s=s.replace(marker,insert+marker,1)
s=s.replace("action:pending.map(t=>t.kind).join('; ')||'Nenhuma ação pendente'","action:pending.map(t=>t.kind).join('; ')||(p.id==='P01'?'Concluir a redação da minuta':'Nenhuma ação pendente')")
p.write_text(s,encoding='utf-8')

