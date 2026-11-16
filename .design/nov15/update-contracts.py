from pathlib import Path
root=Path(r'C:/Users/User/Documents/ChatGPT/Figma portaria')
p=root/'PRODUCT.md'
s=p.read_text(encoding='utf-8')
s=s.replace('Decisão atual confirmada pelo usuário em 11/11/2026:', '**Registro histórico de 11/11/2026 — a apresentação de acesso foi substituída em 15/11/2026:**')
s=s.replace('Cada login demonstra credenciais e destinos predefinidos;', 'Cada conta demonstrativa usa credenciais e destinos predefinidos;')
current="""Decisão vigente de 15/11/2026: entrada unificada, sem níveis antes do login e sem Escolher outro acesso. Uma área opcional oferece quatro contas fictícias: usuário externo, Helena Martins, Marina Costa e Eduardo Almeida. A conta autenticada revela seu perfil e nível; selecionar uma demonstração não concede permissões. Os quatro níveis e seus escopos da tabela abaixo permanecem. Esta instrução explícita substitui a apresentação com quatro formulários por nível, sem alterar a matriz de autorização.

"""
anchor='**Registro histórico de 11/11/2026'
s=s.replace(anchor,current+anchor,1)
new="""## Estatísticas, acompanhamento e relatórios — vigente em 15/11/2026

O pedido integral atual está preservado em `.design/nov15/PEDIDO_IMPLEMENTACAO_VALIDACAO.md`. Ele amplia o plano v1.1 no protótipo Figma e exige expressamente pizza e rosca, além de barras, linhas, área, empilhadas, comparativos e progresso. A interface mantém a identidade existente e as funcionalidades R1–R5 anteriores.

O cenário administrativo é demonstrativo, em `.design/nov15/data.json`, com R = 15/11/2026: 21 projetos (12 realizados/concluídos, 7 em produção, 1 não aceito e 1 cancelado antes da publicação), 7 cadastros funcionais da amostra (5 ativos e 2 inativos), 7 tarefas em 6 projetos. Contas de acesso e catálogo funcional são fixtures distintas; esses números não representam o quadro real do campus. O dicionário contém 32 indicadores, incluindo médias, percentuais, revisões e métodos. Estado atual, eventos históricos e situação de vigência são dimensões distintas.

Panorama, Tramitação, Pendências e Servidores dividem o trabalho analítico. Filtros demonstrativos cobrem período, departamento, solicitante, tipo, estado, combinação DEPE + em produção e vazio. Nos relatórios, nove recortes predefinidos funcionam nos três períodos: semanal, mensal e intervalo personalizado fixo. Resumo, comparação, detalhes e cinco páginas de prévia preservam o recorte; combinações e entrada de datas livres permanecem para a implementação.

O acompanhamento explicita estado, etapa, responsabilidade, motivo, ação, último evento, histórico, retorno para correção e próximas etapas. O progresso conta seis marcos obrigatórios; revisão pode ser opcional/reaberta. Ler aviso não conclui tarefa. A conta externa continua restrita a publicações; servidor mantém dados próprios; DEPE/DAP conservam escopo departamental; administração técnica não ganha conteúdo de negócio. Níveis3/4 mantêm suas competências.

Texto, Participações e Prévia são abas persistentes nas revisões04/05. A remoção de presidência na revisão05 continua preservada ao alternar. Minuta canônica, artigos, horas e datas são iguais no computador e celular.

A prévia PDF possui identificação institucional, resumo, estoque, eventos no período, desempenho, pendências, retrabalho, evolução, comparação e detalhes. No celular existe leitura em texto ampliado, com paginação e retorno à mesma página/origem. O botão Exportar PDF informa a limitação: nenhum arquivo é produzido pelo protótipo.

Validação e evidências de15/11 são próprias desta etapa: 194 capturas de validação, revisão independente inicial e veredito `ship` restrito às cinco correções F01–F05. Avaliações de reações/variáveis são interpretadas; cliques reais ficaram indisponíveis por erro de inicialização da automação. A entrega deve ser classificada como validação parcial, sem certificar backend, segurança por operação, teclado/leitor de tela, edição livre ou exportação real. Relatório: `ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md`.

"""
s=s.replace('## Estatísticas e relatórios — extensão de 11/11/2026',new+'## Registro histórico — estatísticas e relatórios de 11/11/2026',1)
p.write_text(s,encoding='utf-8')
p=root/'UX-CONTRACT.md'
s=p.read_text(encoding='utf-8')
s=s.replace('## Quatro níveis e quatro logins — decisão vigente de 11/11/2026','## Registro histórico — quatro níveis e quatro logins de 11/11/2026')
current="""## Contrato vigente —15/11/2026

Esta seção prevalece sobre apresentações históricas de entrada e relatórios abaixo. O pedido atual está em `.design/nov15/PEDIDO_IMPLEMENTACAO_VALIDACAO.md`.

- Entrada única; sem indicação de níveis antes da autenticação e sem Escolher outro acesso. Demonstração opcional por quatro pessoas fictícias; credenciais próprias predefinidas. Nível/perfil aparece após Entrar. Não há mudança da matriz de autorização.
- Operação3 e Direção4 preservam suas identidades nos novos painéis e relatórios. Servidor2 vê seus próprios acompanhamentos; contas externas1 acompanham publicações. Administração técnica mantém trilha técnica.
- Panorama, Tramitação, Pendências e Servidores usam navegação local consistente. No celular, cinco abas ocupam duas linhas; filtros aplicados aparecem resumidos com Ajustar filtros. A geração do relatório antecede a lista longa de KPIs.
- O dicionário contém32 indicadores com unidade, base e denominador. Realizado e concluído são a mesma contagem nesta amostra; encerramento é uma dimensão de ato. Devolução não é rejeição; cancelamento de projeto não é revogação.
- Gráficos nativos têm tabela equivalente; linhas/área têm referências numéricas e séries identificadas. Pizza/rosca são requisitos expressos de15/11. Base anterior zero recebe diferença absoluta, sem percentual infinito. Sem conclusão no período, a média é Não disponível.
- Filtros de estatísticas são recortes predefinidos. Relatórios têm9 recortes ×3 períodos. Seleção, indicadores, gráfico, comparação e detalhes usam o mesmo recorte; mudar o período preserva o filtro. Condições persistidas foram verificadas, usando condições independentes compatíveis com o Figma.
- Marcar avisos como lidos preserva tarefas. Acompanhamento vincula o ID selecionado a estado, etapa, situação do ato, responsável, setor, motivo, ação, último evento, histórico e próximas etapas. Seis marcos obrigatórios sustentam o progresso; revisão pode ser reaberta. Rejeitados/cancelados não recebem percentual aplicável.
- Texto, Participações e Prévia ficam disponíveis nos três conteúdos. Revisão04 não perde seus membros; revisão05 não restaura a presidência removida ao alternar. Desktop e móvel usam os mesmos artigos1–3, horas e data de entrada em vigor. Prévia dentro do editor permanece minuta.
- A prévia do relatório tem cinco páginas, anterior/próxima, edição do recorte e aviso honesto de exportação. No móvel, Ler em texto ampliado oferece o conteúdo a16px, com paginação e retorno à mesma origem/página A4. Nenhum PDF real é gerado.
- Estas relações foram examinadas por leitura/interpretação das ações e variáveis persistidas. Não equivalem a cliques, rolagem ou execução de autenticação. A automação de interface não iniciou no ambiente (kernel assets/os error3). A validação funcional por cliques fica pendente.
- O veredito visual independente `ship` de15/11 cobre somente as correções F01–F05, todas resolvidas nas53 recapturas finais; não é aprovação irrestrita do sistema. Ver `.impeccable/review/nov15/veredito.md`.

"""
s=s.replace('## Registro histórico — três níveis em 11/11/2026',current+'## Registro histórico — três níveis em 11/11/2026',1)
p.write_text(s,encoding='utf-8')
print('PRODUCT.md e UX-CONTRACT.md atualizados')

