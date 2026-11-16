# Entrega de implementação e validação — Figma — 15/11/2026

**Resultado: validação parcial.** A etapa de interface foi executada no arquivo existente do Gestor de Portarias. Houve inspeção visual, correções e reavaliação independente. Os percursos por cliques reais não puderam ser executados neste ambiente. As verificações de ações/variáveis descritas abaixo são interpretadas e não equivalem a testes por interface.

[Abrir entrada no Figma](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=5-2) · [Estatísticas](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-1848) · [Relatórios](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-6744) · [Entrada móvel](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=8-1663).

## Implementações

- **Acesso:** entrada unificada, sem níveis antes do login e sem Escolher outro acesso. Área opcional com quatro contas fictícias e credenciais próprias. Perfil/nível aparece depois de Entrar. Mantidas as competências existentes, inclusive acesso total autorizado da Direção; administração técnica não ganha competências de negócio.
- **Estatísticas:** Panorama, Tramitação, Pendências e Servidores; dicionário M01–M32 com unidade, coorte e definição. Inclui cadastro ativo/inativo, projetos e etapas, decisões, conclusão, encerramento do ato, cancelamento do projeto, revisões, retrabalho, pendências, médias, espera, percentuais, evolução, produtividade, tipos, setores e motivos.
- **Gráficos:** 12 modelos nativos, com versões desktop/móvel e estados Gráfico/Tabela. Há barras verticais/horizontais, pizza, rosca, linhas, área, empilhadas, comparativos e progresso, além de KPIs com tendência. Linhas/área têm referências numéricas e identificação das séries.
- **Filtros:** recortes predefinidos por período, departamento, solicitante, tipo e estado; combinação DEPE + em produção; estado vazio. Relatórios oferecem nove recortes nos três períodos — semanal, mensal e intervalo personalizado fixo. A troca de período preserva o recorte nas ações persistidas.
- **Acompanhamento:** notificações, avisos lidos e pendências separados; estado, etapa, situação do ato, responsável, setor, motivo, ação, último evento, histórico e próximos passos. Progresso baseado em seis marcos obrigatórios; revisão pode ser opcional ou reaberta. Ler aviso preserva tarefas.
- **Relatórios:** resumo, comparativos, indicadores, gráficos, gargalos, retrabalho e detalhes; cinco páginas A4 por período e cinco modelos compartilhados para os recortes. Anterior/próxima, edição do recorte, preparação da prévia e aviso honesto de exportação. Leitura móvel em texto ampliado a 16 px, com paginação e retorno à mesma origem/página.
- **Editor:** Texto, Participações e Prévia persistentes nas revisões 04/05, sem troca do shell. Revisão 05 conserva a remoção da presidência. Artigos, membros, horas e entrada em vigor da minuta coincidem entre desktop e móvel.
- **Identidade e legado:** mantidos Source Sans 3 operacional, Inter/Roboto de acesso, cores, marca, fotografias, componentes e R1–R5 anteriores. No celular, navegação analítica em duas linhas, filtros resumidos e geração antes dos KPIs.

O cenário é **demonstrativo**, em R = 15/11/2026: 21 projetos = 12 realizados/concluídos + 7 em produção + 1 não aceito + 1 cancelado; 7 cadastros funcionais da amostra = 5 ativos + 2 inativos; 7 tarefas em 6 projetos. Contas de acesso e catálogo funcional são fixtures distintas, não o quadro real do campus. Estado atual, eventos históricos e situação de vigência não são somados.

## Validação visual

Foram inspecionadas **217 capturas**: 141 no primeiro conjunto, 53 recapturas de F01–F05 e 23 complementos. As três capturas anteriores de referência ficam à parte. O revisor independente abriu os 141 PNGs iniciais, os 53 de F01–F05 e os 23 complementares, além dos respectivos índices. O documenter conferiu metadados e amostras, sem reivindicar a inspeção individual completa.

A captura principal do Figma atingiu a cota Education; a captura nativa pelo Plugin API permitiu obter o restante. As finais isolam o quadro para evitar interferência de vizinhos do canvas. Painéis abaixo da primeira dobra foram capturados como conteúdo nativo isolado, com clones temporários já removidos. Isso comprova conteúdo local, sem comprovar sua chegada por rolagem. Cópias de leitura compõem transparência sobre branco, sem alterar a UI.

| Tela/família solicitada | Evidência representativa | Resultado |
| --- | --- | --- |
| Página inicial e login | [login-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/login-D.png>), [login-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/login-M.png>) | Entrada única, identidade mantida; sem níveis na apresentação principal. |
| Quatro usuários demonstrativos | [demo-direcao-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/demo-direcao-D.png>), [cartao-demo-313-12712](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/cartao-demo-313-12712.png>) | Quatro escolhas e credenciais fictícias identificadas; cartões completos inspecionados. |
| Dashboard principal | [home-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/home-D.png>), [home-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/home-M.png>) | Identidade, ações e contagens demonstrativas legíveis. |
| Estatísticas | [stats-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/stats-D.png>), [final-stats-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-stats-M.png>) | Hierarquia administrativa; composição móvel corrigida. |
| Barras, pizza e demais modelos | [grafico-C01](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/grafico-C01.png>), [grafico-C04](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/grafico-C04.png>), [final-grafico-C05-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-grafico-C05-M.png>) | Modelos presentes; séries com referências numéricas após correção. |
| Tabelas equivalentes | [final-tabela-C05-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-tabela-C05-M.png>), [final-tabela-C07-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-tabela-C07-D.png>) | Os 12 gráficos e as 12 tabelas de cada classe foram inspecionados; últimas linhas completas. |
| Notificações | [notifications-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/notifications-D.png>), [notificacoes-servidor-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/notificacoes-servidor-D.png>) | Avisos/tarefas e escopo de usuário separados; destaque do menu corrigido. |
| Acompanhamento individual | [detail-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/detail-D.png>), [acompanhamento-conteudo-319-16053](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/acompanhamento-conteudo-319-16053.png>) | Responsabilidade, motivo, progresso, histórico e próximos passos presentes. |
| Relatórios | [final-reports-W-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-reports-W-M.png>), [final-relatorio-DEPE-mensal-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-relatorio-DEPE-mensal-D.png>), [final-relatorio-DEPE-semanal-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-relatorio-DEPE-semanal-M.png>) | Geração visível na primeira dobra móvel; filtro e período selecionado identificados. |
| Prévia PDF e leitura | [pdf-W-1](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/pdf-W-1.png>), [pdf-filtrado-DEPE-M-4](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/pdf-filtrado-DEPE-M-4.png>), [final-previa-filtrada-DEPE-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-previa-filtrada-DEPE-M.png>), [final-leitura-DEPE-mensal-1-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-leitura-DEPE-mensal-1-M.png>) | Páginas completas legíveis no tamanho original; alternativa de leitura móvel disponível. Sem arquivo gerado. |
| Texto, Participações e Prévia | [editor-04-text-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/editor-04-text-D.png>), [editor-05-parts-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/editor-05-parts-M.png>), [final-conteudo-editor-05-M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/final-conteudo-editor-05-M.png>) | Abas mantidas; revisão e minuta canônica corrigidas. |
| Quatro perfis | [home-externo-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/home-externo-D.png>), [home-servidor-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/home-servidor-D.png>), [home-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/home-D.png>), [home-direcao-D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/home-direcao-D.png>) | Identidades e níveis posteriores ao login visíveis; não certifica autorização de servidor. |

O [catálogo de capturas](<C:/Users/User/Documents/ChatGPT/Figma portaria/VALIDACAO_VISUAL_FIGMA_2026-11-15.md>) registra o resultado por arquivo e aponta substituições por versões corrigidas. O [parecer inicial](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/parecer.md>) foi preservado. O [veredito](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/veredito.md>) é **ship exclusivamente para F01–F05**, todos resolved. O adendo complemento.md inspeciona os 23 complementos sem novo achado material. Não é aprovação irrestrita de todas as telas, dos percursos por interface ou de acessibilidade.

## Validação funcional

**Nenhum clique real foi executado.** A automação nativa e o runtime de interface não iniciaram: “failed to write kernel assets … O sistema não pode encontrar o caminho especificado (os error 3)”. Os destinos, condições e atribuições de variáveis foram relidos do Figma e avaliados por código; estados visuais foram preparados pela API. Capturas separadas não provam que os mesmos estados foram alcançados por cliques.

| Verificação executada | Evidência | Resultado |
| --- | --- | --- |
| Demonstrações/entrada/saída, abas 04/05, alternância Gráfico/Tabela, seleção dos 21 projetos, filtros estatísticos, geração/paginação e aviso de exportação | [Desktop](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/functional-delivery-D.json>) e [móvel](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/functional-delivery-M.json>) | 473/473 por classe; 946 verificações interpretadas. |
| Nove recortes × três períodos, preservação do recorte e cinco páginas, em Operação/Direção e D/M | [exemplo semanal](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/report-functional-final-D-W.json>) e outros cinco arquivos report-functional-final | 276/276 verificações interpretadas. |
| Leitura móvel: entradas, conteúdo, anterior/próxima e retorno à origem/página, nos perfis 3/4 | [leitura ampliada](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/reading-functional-final.json>) | 136/136 verificações interpretadas. |
| Acesso às notificações nos quatro perfis D/M e escopos próprio/público | [checagens de escopo](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/role-notifications-final.json>) | 12/12 verificações interpretadas. Avisos foi incluído na barra móvel da conta externa, sem dados internos. |
| Reconciliação de projetos, cadastros, coortes, percentuais, tarefas e 32 métricas | [dados](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/data-checks.json>) | 10/10 verificações numéricas. |
| Destinos ausentes, navegação para si, transbordamento horizontal, corte de botão, fonte e destino na outra classe de dispositivo | [auditoria D](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/audit-delivery-final-D.json>) e [auditoria M](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/audit-delivery-M.json>) | 132 telas D + 142 M; listas de falhas vazias nos critérios implementados. Somente famílias tipográficas existentes. |
| Conteúdo das cinco páginas filtradas no intervalo C | [geometria](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/paper-geometry-final.json>) | Conteúdo anterior ao rodapé, sem extrapolar A4. |
| Documentação | DESIGN.md e .impeccable/design.json | JSON válido; lint com 0 erros e 27 avisos de tokens não referenciados pelos snippets YAML, preservados do sistema existente. |

Total: **1.370 verificações interpretadas**, além dos checks de dados e estrutura. Esse total conta asserções de valores/destinos, não 1.370 percursos por interface.

Ficam pendentes os testes por cliques de troca de perfis, menus, notificações, seleção de projetos, filtros, gráficos, abas, relatórios e paginação/leitura. Também não foram executados rolagem, digitação livre, teclado ou leitor de tela.

## Correções e nova captura

| Problema encontrado | Correção e revalidação |
| --- | --- |
| Três legendas laterais externas excediam a largura | Largura corrigida; auditoria final sem transbordamento horizontal. |
| Destaque de Notificações preto e espaço vazio na demonstração | Cores vinculadas com valor correto; contêiner vazio de formulário retirado da seleção demonstrativa; recapturas conferidas. |
| Troca de período filtrado descartava recortes; retorno não contemplava todos os períodos | Condições independentes compatíveis com a API; preservação de 26 campos e seleção de período; 276 verificações interpretadas passaram. |
| F01 — navegação/filtros ocupavam a primeira tela móvel | Abas em duas linhas, filtros resumidos e geração antes dos KPIs. Revisor: resolved. |
| F02 — artigos e datas divergiam entre prévias D/M | Mesma minuta canônica nas revisões 04/05; destino do documento adaptado para móvel. Revisor: resolved. |
| F03 — curvas sem referências e tabelas com última linha cortada | Eixos, valores, identificação de séries, alinhamento geométrico e altura de linha por conteúdo; novas tabelas completas. Revisor: resolved. |
| F04 — período ativo sem destaque após filtrar | Seleção visual por variáveis, acompanhando o período; mensal e semanal recapturados em D/M. Revisor: resolved. |
| F05 — A4 móvel com corpo muito reduzido | Ler em texto ampliado, cinco páginas responsivas com retorno às páginas A4. Revisor: resolved visualmente; retornos avaliados em ações, sem clique. |
| Conta externa móvel sem entrada direta nos avisos | Avisos adicionado na barra Portarias/Minha conta, preservando ações e escopo público. Novas imagens e 12 checks de acesso/escopo conferidos. |
| Estado legado podia sugerir exportação preparada como arquivo | Avisos desktop/móvel explicitam que o protótipo não gera PDF/CSV. |

## Pendências e limites

- Autenticação/autorização reais, banco de dados, concorrência, edição e filtros livres dependem da implementação. O Figma usa entradas e recortes predefinidos.
- Nenhum arquivo PDF/CSV é gerado ou baixado. Geração, download, marcação acessível, auditoria e retenção permanecem para o desenvolvimento.
- Prazos/calendário e classificação de atraso dependem de D26. Espera observada não foi rotulada como atraso. Rejeição/não aceite e retirada de projeto são classificações demonstrativas a homologar, sem novas permissões operacionais.
- R1–R5 anteriores conservam sua base histórica identificada; não foram apresentados como nova medição institucional em produção.
- Foco, teclado, leitor de tela, preferência por movimento reduzido, persistência em execução e alcance por rolagem não foram certificados.

## Resultado final

**Etapa de interface implementada; validação final parcial.** A revisão independente encerrou os cinco achados visuais nas recapturas. Dados, estrutura e ações persistidas passaram nos escopos registrados. A indisponibilidade de cliques reais impede declarar validação funcional completa.

[Estado final e IDs](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/state-final.json>) · [Verificação da entrega](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/nov15/delivery-verification.json>) · [Documentação](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/nov15/documentacao.md>).

