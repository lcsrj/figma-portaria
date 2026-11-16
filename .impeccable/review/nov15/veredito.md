# Verdict Pass — F01–F05 — 15/11/2026

## 1. Disposition

**ship, restrito às cinco correções visuais F01–F05.** Os cinco achados do parecer original estão **resolved** nas evidências finais examinadas. Não há impeditivo visual remanescente nesses cinco itens. Este veredito não aprova funcionalmente o protótipo, não certifica todas as telas do projeto e não substitui o parecer original, que permanece preservado como registro da primeira inspeção.

## 2. Evidências examinadas

Li `.design/nov15/captures-verdict-complete.json` e abri os **53 PNGs finais individuais e os cinco índices `verdict-01.jpg` a `verdict-05.jpg`**. Os arquivos examinados são as cópias em `.impeccable/review/nov15/`, correspondentes ao manifesto, capturadas pelo método nativo informado como `Plugin API screenshot / contentsOnly`. Texto e dados foram lidos nos PNGs individuais.

A revisão foi limitada às correções de F01–F05 e aos complementos que fecham lacunas de evidência relacionadas. Não reiniciei investigação estética nem propus substituição da identidade institucional. Não abri ou alterei o Figma; somente este relatório foi escrito.

## 3. Resultado por achado

| Achado | Estado | Evidência e conclusão |
|---|---|---|
| **F01 — Composição analítica móvel** | **resolved** | `final-stats-M`, `final-flow-M`, `final-people-M`, `final-quality-M`, `final-stats-direcao-M` e `final-reports-W/M/C-M`. As cinco seções agora ocupam duas linhas. Filtros são resumidos e acompanhados de Ajustar filtros. Nos dashboards, o primeiro KPI começa perto de y=452 e dois cartões completos ficam visíveis, em vez do primeiro começar perto de y=750. Nos três relatórios, Gerar prévia do relatório aparece perto de y=457, antes dos KPIs, com dados já visíveis na primeira tela. A composição resolve a causa do achado sem reduzir toda a interface. |
| **F02 — Divergência documental entre dispositivos** | **resolved** | `final-editor-04-preview-D/M`, `final-editor-05-preview-D/M` e `final-conteudo-editor-04/05-M`. Os conteúdos completos móveis agora apresentam o mesmo Art. 1º de composição, Art. 2º de dedicação de 4 h/2 h e Art. 3º de entrada em vigor em 1º/11/2026 presentes no desktop. O término divergente de 31/10/2027 não aparece nessas prévias. A revisão 04 conserva Helena, Rafael e Beatriz; a 05 conserva Rafael e Beatriz e o cabeçalho informa presidência pendente. O comando Abrir documento completo está visível. A correção de seu destino não foi testada por clique. |
| **F03 — Referências quantitativas das séries** | **resolved** | `final-grafico-C05-D/M` e `final-grafico-C06-D/M` têm base zero, referências numéricas verticais 0/3/6/9, datas legíveis e rótulos dos valores finais. C05 identifica criados 9 e concluídos 0; C06 identifica 7, 8 e 9. As curvas são compatíveis com os níveis numéricos e as tabelas apresentadas. `final-tabela-C05-D/M` e `final-tabela-C06-D/M` mostram todas as linhas, inclusive novembro 9·0 e 15/11=9, sem corte da última linha. `final-pdf-W/M/C-5` também recebeu referências verticais e valor final; o texto original das páginas segue legível. |
| **F04 — Período ativo do recorte filtrado** | **resolved** | `final-relatorio-DEPE-mensal-D/M` e `final-relatorio-DEPE-semanal-D/M`. Mensal e Semanal recebem respectivamente o fundo verde e texto claro, enquanto as outras opções permanecem secundárias. O rótulo do período e os valores do resumo correspondem ao estado selecionado: mensal 5 criados/18 movimentações; semanal 1 criado/6 movimentações. O recorte DEPE permanece escrito. Isso comprova dois estados visuais consistentes; não comprova a troca ou persistência em execução. |
| **F05 — Leitura da prévia no celular** | **resolved** | `final-pdf-W-1-M` e `final-previa-filtrada-DEPE-M` oferecem Ler em texto ampliado. `final-leitura-DEPE-mensal-1-M` a `-5-M` exibem conteúdo em largura móvel e escala de corpo legível, com período/filtro, paginação, anterior/próxima conforme a posição e Voltar à prévia A4. A página 5 inclui o último projeto P08 e a observação final; a página 2 inclui o aviso de que nenhum PDF foi gerado. `final-leitura-direcao-M` confirma o mesmo tratamento visual com Nível 4. A miniatura A4 passa a coexistir com um modo apropriado de leitura; não precisa oferecer corpo legível em sua própria escala reduzida. |

## 4. Complementos de cobertura

As doze tabelas desktop `final-tabela-C01-D` a `final-tabela-C12-D` foram abertas integralmente. Suas categorias e valores correspondem às respectivas visualizações previamente revisadas; não encontrei corte das últimas linhas nessas recapturas. As duas tabelas móveis de C05/C06 também foram inspecionadas integralmente. Isso fecha a lacuna anterior de evidência visual dos estados Tabela desktop e das duas séries móveis objeto de F03. Não certifica as outras dez tabelas móveis ou o acionamento da alternância.

Os quatro painéis `final-indicators-*` tornam legíveis as definições M01–M32, inclusive enviados para análise como evento histórico, aguardando aprovação final como subetapa distinta, aprovados para assinatura e encerramento administrativo. `final-flow-318-9469` identifica os projetos P01–P05 e suas esperas observadas; `final-revisions-319-13092` mostra as revisões dos 21 projetos até P09=0, sem corte. Esses complementos reduzem as lacunas documentadas na matriz do parecer. São evidências de conteúdo local; não comprovam que o usuário alcança cada painel por navegação/rolagem.

## 5. Limites do aceite

**Nenhum clique real foi executado nesta revisão.** Não testei entrada/saída do modo de leitura, retorno à mesma origem/página, rolagem até o fim, alternância das cinco páginas, troca de período, persistência dos filtros, abas, login ou perfis. Os controles e os estados resultantes são visíveis em capturas separadas; a existência das imagens não equivale a execução dos percursos. A alegação do implementador de cinco páginas por perfil e retornos vinculados permanece fora da certificação funcional do revisor.

Os painéis isolados comprovam conteúdo e legibilidade, não alcance ou contexto rolado. Capturas de viewport mostram somente a primeira dobra quando o conteúdo é maior; não tratei a borda inferior da imagem como perda automática de conteúdo. A transformação de transparência em branco não foi confundida com mudança da UI.

Não houve auditoria geral nova, medição de contraste por tokens, validação de teclado/ARIA/leitor de tela, autorização, autenticação, backend, edição livre, geração real de PDF ou conformidade jurídica. As limitações originais não relacionadas aos cinco achados continuam vigentes. A entrega pode informar **“F01–F05 resolvidos na revisão visual independente das recapturas”**, mantendo a validação funcional por cliques explicitamente não executada neste ambiente.
