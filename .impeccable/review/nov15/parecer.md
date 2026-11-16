# Parecer independente — 15/11/2026

## 1. Disposition

**fix**. O conjunto amplia a identidade institucional existente de forma reconhecível e oferece uma estrutura administrativa coerente. Não há motivo visual para reconstruí-lo. Há, porém, cinco correções materiais de composição móvel, consistência documental, leitura de gráficos e identificação de seleção descritas abaixo. A aprovação visual é parcial; não equivale a aprovação funcional completa.

Direção respeitada: marca e fotografias do IFC, verde institucional, superfícies claras, tipografia operacional, shell desktop e apresentação móvel permanecem reconhecíveis. A entrada principal é única e limpa; a demonstração fica em área opcional, sem os quatro níveis na apresentação anterior ao login. Pizza e rosca são requisitos expressos do pedido atual, portanto sua presença não é um desvio a corrigir. Os KPIs e contêineres também pertencem à tarefa administrativa e à identidade incumbente; não proponho trocá-los por outro mundo visual.

## 2. Evidência e cobertura

Li o pedido integral em `.design/nov15/PEDIDO_IMPLEMENTACAO_VALIDACAO.md`, o pacote de revisão, o contrato de direção e o craft floor. Abri os **12 índices contact-01.jpg a contact-12.jpg e os 141 PNGs individuais**, em sua resolução disponível, incluindo todos os arquivos enumerados em `.design/nov15/captures-reviewed.json`. Texto fino foi examinado nos PNGs, não aprovado a partir dos índices.

Cobertura das imagens individuais:

| Família | Imagens examinadas | Resultado visual |
|---|---:|---|
| Entrada, quatro escolhas de demonstração e quatro formulários preenchidos, D/M | 18 | Apresentação institucional consistente; credenciais identificadas como fictícias; sem níveis na apresentação principal. O cartão móvel completo confirma conteúdo que ultrapassa o viewport. |
| Inícios, estatísticas, filtros, resultados, notificações, acompanhamento, relatórios e editor, D/M | 70 | Shell e seleção local reconhecíveis; dados demonstrativos, unidades e responsáveis explícitos. Falhas F01, F02 e F05. A primeira dobra não mostra todo o conteúdo das páginas longas. |
| Páginas completas das prévias semanais, mensais e personalizadas | 15 | Cinco páginas por período, identificação, período, dados e paginação legíveis no tamanho original; sem corte de página encontrado. |
| Gráficos C01–C12 isolados | 12 | Todos os modelos solicitados representados; categorias, unidades e bases em texto. Leitura quantitativa incompleta em C05/C06, F03. |
| Filtros/resultado/prévia/aviso DEPE, D/M | 8 | Seleção aplicada escrita e valores coerentes entre resumo e prévia capturada; período sem destaque de seleção, F04. |
| Conteúdo completo móvel do editor, cartões demonstrativos e acompanhamento | 13 | Permite ler conteúdo além da primeira dobra. Confirma as duas revisões e o histórico/progresso; revela divergência documental F02. Não prova rolagem alcançável. |
| Cinco páginas completas do relatório filtrado DEPE mensal | 5 | Filtro, período e identificação de demonstração persistem visualmente; 13 projetos em R, 5 criados, 0 concluídos e 18 movimentações no período, conforme resumo. |
| **Total** | **141** | **Inspeção visual concluída no conjunto recebido.** |

Não encontrei sobreposição acidental generalizada, quebra da marca, botões cortados horizontalmente ou truncamento de título nas regiões examinadas. Cortes na borda inferior de um viewport foram tratados como conteúdo além da dobra, sem presumir que o conteúdo deixou de existir. As páginas completas e painéis isolados foram usados para distinguir esses casos de perdas reais de conteúdo.

## 3. Matriz de requisitos

“Visível” descreve a imagem; não significa que o controle foi acionado.

| Requisito do pedido | Evidência principal | Avaliação |
|---|---|---|
| Preservar identidade e consistência entre perfis | `login-D/M`, `home-D/M`, `home-direcao-D/M`, `home-servidor-D/M`, `home-externo-D/M` | Visível e consistente. Conteúdo documental entre dispositivos requer F02. |
| Entrada única, retirar escolha de nível da apresentação principal | `login-D/M`, oito `filled-*` | Atendido visualmente. Perfil/nível aparece nas interfaces posteriores ao acesso. |
| Quatro contas demonstrativas com credenciais próprias | oito `demo-*`, quatro `cartao-demo-*` | Atendido visualmente; dados fictícios declarados. Alternância e preenchimento não foram executados por mim. |
| Totais de servidores, ativos/inativos e projetos | `stats-D`, `people-D`, C01/C02, páginas 1/2 das prévias | Visível: 7 cadastros, 5 ativos, 2 inativos, 21 projetos. |
| Realizados/não realizados; conclusão e cancelamento | C01, `pdf-W/M/C-1/2` | Visível, com estados exclusivos e explicação de que realizados/concluídos são a mesma contagem. Cancelamento de projeto é separado de revogação do ato. |
| Elaboração, análise/revisão, validação, aprovação e devolução | C03, C10/C12, filtros por estado e páginas 3/4 | Etapas do fluxo real aparecem. Há rascunho, validação, devolução, assinatura e publicação; aprovação é definida como decisão para assinatura. Não certifico um contador individual para cada expressão do pedido: nem todos os estados/contadores adicionais estão legíveis nas primeiras dobras capturadas. Não inventar etapas para preencher essa lacuna. |
| Aprovadas/rejeitadas, motivos e distinção de eventos | C01/C12, `all-notifications-D`, páginas 4 | Aprovação histórica tem numerador/denominador; rejeição/não aceite e devolução são distinguidos. Estado atual e eventos não são somados. |
| Edição/sem edição, retrabalho e revisões por portaria | `flow-D`, `quality-D`, filtros com coluna Revisões, páginas 4/5 | Visível: 5/20 com edição, 15/20 sem edição, revisões por projeto. Declara que revisões não contam arquivos assinados. |
| Concluídas, encerradas e situação de vigência | páginas 1/2 das prévias | Distinção textual presente. Situação dos atos publicados aparece à parte; não é somada ao estado dos projetos. |
| Problemas, pendências e responsáveis/setores | `quality-D`, `notifications-D/M`, páginas 4 e relatório DEPE | Visível: projetos distintos e tarefas separados; responsáveis e ações nomeados. |
| Tempo médio, tempo por etapa, esperas e percentuais | `flow-D`, C09/C10, páginas 3 | Unidade e coorte indicadas; ausência de conclusão no período não vira tempo zero. Espera não é tratada como atraso. Lista completa/ranking de processos com maior espera não foi demonstrada nas capturas; relatório filtrado identifica P02. |
| Evolução, produtividade, tipos, setores e motivos | C04–C08, C11/C12 e páginas 3/5 | Modelos e bases presentes; F03 limita leitura quantitativa das séries contínuas. |
| Barras verticais/horizontais, pizza, rosca, linha, área, empilhadas, comparativos, progresso e KPIs | C01–C12 e dashboards | Todos representados. Não rejeito pizza/rosca por regra histórica já substituída. |
| Filtros por período, setor, servidor, tipo e estado | `filters-D/M`, sete recortes `filtered-*`, `filtros-relatorio-D/M` | Estados predefinidos capturados, inclusive combinação e vazio. Não comprova combinações livres nem persistência de variáveis por cliques. |
| Tabelas equivalentes aos gráficos | Botão Tabela em C01–C12; tabelas nas páginas PDF 2/3/5 | Tabelas visíveis nas páginas PDF; estados Tabela dos 12 gráficos não foram capturados individualmente. Equivalência de todas as séries e responsividade dessas tabelas permanece sem certificação visual. |
| Central, estado/etapa, responsável, espera, ação e última movimentação | `notifications-*`, `detail-*`, `acompanhamento-servidor-*` | Visível. Ler aviso não conclui tarefa; notificações são separadas das ações pendentes. |
| Linha do tempo, etapas concluídas/futuras e progresso válido | três `acompanhamento-conteudo-*` | Visível: 2 de 6 marcos, revisão reaberta/opcional, histórico datado e próximas ações; percentual não promete prazo. |
| Relatórios semanais/mensais/personalizados, comparação e prévia paginada | seis `reports-*`, 15 páginas base, recorte DEPE | Presente; F01/F04/F05. Prévia mantém texto de filtro e período nas amostras recebidas. |
| Estrutura PDF com instituição, resumo, indicadores, situação, desempenho, gargalos, retrabalho, evolução, comparação e detalhes | `pdf-W/M/C-1` a `-5`, cinco páginas DEPE | Conteúdo presente e paginado. Layout de arquivo visualmente legível no tamanho original; redução móvel requer F05. |
| Exportação honesta enquanto não há arquivo real | `pdf-info-D/M`, `aviso-PDF-filtrado-D/M` | Atendido: nenhuma confirmação fictícia de arquivo exportado. |
| Abas Texto/Participações/Prévia persistentes, revisões 04/05 e preservação dos dados | 12 `editor-*`, seis `conteudo-editor-*` | Shell, abas e revisão permanecem reconhecíveis. Remoção da presidência na revisão 05 aparece na lista e prévia. F02 impede aprovação integral da correspondência documental. Persistência e seis direções de alternância não foram testadas por cliques. |
| Snapshots reais, inspeção, testes e correção | Manifesto e 141 imagens | Captura e inspeção visual completas no conjunto recebido. Testes funcionais por cliques indisponíveis; não cabe declarar validação completa do pedido. |

## 4. Achados materiais e correções

### F01 — P2 — Navegação e filtros ocupam a primeira tela móvel dos módulos analíticos

**Evidência:** `stats-M.png`, `flow-M.png`, `people-M.png`, `quality-M.png`, `stats-direcao-M.png`, `reports-W-M.png`, `reports-M-M.png`, `reports-C-M.png`.

As cinco opções locais ocupam aproximadamente y=153–405 em 390×844. Abaixo vêm três campos altos, a referência e só então o primeiro KPI, iniciado perto de y=750. Nos três relatórios, a segunda pilha de períodos chega até a borda inferior: nenhum resumo, indicador ou comando de gerar prévia aparece na primeira tela. Isso dificulta compreender rapidamente o módulo e repete o custo em cada seção. Não afirmo que os elementos abaixo da dobra sejam inacessíveis.

**Correção concreta:** compactar a navegação local em abas de uma ou duas linhas, ou faixa horizontal com indicação de continuidade; resumir filtros aplicados e disponibilizar seu editor por ação clara. Colocar o primeiro resumo útil e a ação Gerar prévia antes da longa configuração de filtros. Preservar rótulos, seleção e alvos de toque; não reduzir todo o texto para caber. Recapturar Panorama e um relatório em 390×844, além de um estado com filtro aplicado.

### F02 — P1 — A mesma revisão da minuta apresenta artigos diferentes no computador e no celular

**Evidência:** `editor-04-preview-D.png`, `editor-05-preview-D.png`, `editor-04-text-D.png`, `editor-05-text-D.png`, `conteudo-editor-314-11512.png`, `conteudo-editor-314-11589.png` e respectivas prévias móveis.

No computador, o Art. 2º trata da dedicação de 4 h para a presidência e 2 h para os membros; o Art. 3º informa entrada em vigor em 1º de novembro de 2026. No conteúdo móvel completo, o Art. 2º passa a ser “A vigência é de 01/11/2026 a 31/10/2027”, sem os mesmos artigos de dedicação e entrada em vigor. O término em 2027 não aparece no texto desktop da mesma revisão. A adaptação de largura está alterando conteúdo documental e numeração, não apenas sua apresentação. Ambas as revisões são afetadas.

**Correção concreta:** renderizar desktop, móvel, prévia completa e resumo a partir do mesmo conteúdo canônico da respectiva revisão. Conservar exatamente números de artigos, datas, horas, membros e estado de presidência. Se houver resumo, nomeá-lo e não introduzir data ou artigo alternativo. Não escolher uma nova data por preferência de layout. Recapturar as prévias 04 e 05 nas duas classes e seus conteúdos completos.

### F03 — P2 — Séries de linha e área não oferecem referências numéricas suficientes no desenho

**Evidência:** `grafico-C05.png` e `grafico-C06.png`; padrão semelhante nas linhas de evolução de `pdf-W-5.png`, `pdf-M-5.png` e `pdf-C-5.png`.

C05 mostra duas linhas e meses, mas nenhum valor junto aos pontos e nenhuma marca numérica vertical. C06 também não permite ler o nível da área em datas intermediárias. Informar apenas “Escala: 0 a 9” no rodapé não permite localizar com precisão 1, 2, 7 ou 9 na altura do gráfico. As séries de C05 ainda dependem da correspondência verde/azul escrita no apoio. A forma geral é visível, mas a quantidade por data não é legível no próprio gráfico.

**Correção concreta:** acrescentar referências verticais numeradas e base zero, pontos ou rótulos nos marcos relevantes e identificação direta das duas séries; manter o desenho institucional simples. Para a área, explicitar pelo menos valores inicial/final e referências intermediárias. Capturar também a tabela equivalente com os mesmos valores/datas. Nas páginas de evolução, os três valores tabelados ajudam, mas a curva pode receber referências para os demais marcos desenhados.

### F04 — P2 — Período atual perde a seleção visual no relatório filtrado

**Evidência:** `relatorio-DEPE-mensal-D.png` e `relatorio-DEPE-mensal-M.png`, comparados com `reports-M-D.png` e `reports-M-M.png`.

O texto informa Mês · 01–15/11/2026, mas Semanal, Mensal e Personalizado aparecem sem o tratamento verde de seleção usado na família principal. No móvel, os três botões são visualmente iguais. A pessoa precisa reler o apoio para descobrir qual período está ativo; o padrão de seleção deixa de ser consistente justamente após aplicar filtros.

**Correção concreta:** aplicar a variante selecionada a Mensal e manter as demais como opções disponíveis. Fazer a mesma regra acompanhar os três períodos em todos os recortes, sem apagar o filtro aplicado. Recapturar um estado filtrado mensal e outro período filtrado para demonstrar o padrão. A imagem comprovará o estado visual; persistência ainda requer teste de interação separado.

### F05 — P2 — A prévia A4 móvel funciona como miniatura, sem modo de leitura demonstrado

**Evidência:** `pdf-W-1-M.png` e `previa-filtrada-DEPE-M.png`, em comparação com `pdf-W-1.png` e `pdf-filtrado-DEPE-M-1.png`.

A folha de cerca de 794 px é reduzida para 350 px no viewport. O texto de corpo que é legível na página original fica aproximadamente em 6–7 px na tela móvel. Não há controle de ampliação ou modo de leitura visível nessas capturas. A estrutura cabe, mas o usuário não consegue revisar confortavelmente números e detalhes nessa escala. As páginas originais completas não têm esse problema de tamanho; ele ocorre na sua apresentação dentro do celular.

**Correção concreta:** manter a miniatura para navegação e acrescentar uma ação explícita de ampliar/ler a página, com estado de leitura em escala adequada e retorno à paginação; alternativamente, oferecer a mesma informação em leitura responsiva além da miniatura A4. Não alegar arquivo gerado. Capturar o estado de leitura ampliado em 390 px e demonstrar visualmente como se volta à prévia.

## 5. Limites e próximo aceite

Esta revisão foi independente e somente visual. Não abri nem alterei o Figma e não modifiquei a UI. As imagens são capturas reais recebidas no pacote, não execução de uma sessão navegada pelo revisor. Não realizei cliques, rolagem, troca de perfis, aplicação de filtros, navegação de páginas ou alternância de abas. Os testes interpretados de reações/variáveis, inclusive eventuais correções realizadas pelo implementador durante esta revisão, estão fora da minha certificação.

Os painéis `conteudo-editor-*`, `cartao-demo-*` e `acompanhamento-conteudo-*` comprovam conteúdo e legibilidade local, sem comprovar seu alcance no protótipo. Faltam imagens dos estados Tabela dos 12 gráficos e de partes abaixo da dobra dos módulos analíticos móveis/relatórios base para uma certificação visual integral dessas regiões. Isso é lacuna de evidência, não afirmação de que estejam ausentes ou quebrados. Não exigir nova captura de toda a identidade: complementar apenas os estados necessários e recapturar o lote corrigido de F01–F05.

Não medi contraste a partir de tokens/computados e não certifico WCAG, teclado, foco em execução, ARIA, leitura de tela, animação, autenticação, autorização, edição livre, integrações, backend, exportação de arquivo ou retenção. O detector HTML/CSS não se aplica ao artefato nativo Figma. Não avaliei juridicamente as minutas nem validei os dados demonstrativos como fatos institucionais.

O próximo aceite deve verificar as cinco correções contra as mesmas evidências, sem novo redesenho institucional, e manter a entrega final explícita: inspeção visual realizada; validação funcional por cliques ainda não executada neste ambiente.
