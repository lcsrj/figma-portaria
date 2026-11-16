# Estatísticas e relatórios — aplicação do plano v1.1

Aplicação em 11/11/2026 ao protótipo Figma existente do Gestor de Portarias. O projeto continua na etapa de desenho: nenhuma aplicação web, banco ou API operacional foi criada. O plano recebido permanece como fonte de requisitos; suas decisões pendentes não foram tratadas como homologadas.

## Abrir a entrega

| Percurso | Computador | Celular |
| --- | --- | --- |
| Início · Gabinete | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-49) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=8-1874) |
| Central de relatórios | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-6744) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=10-2795) |
| Painel completo | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-1848) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-10481) |
| Servidor × portarias | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-6848) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=10-2836) |
| Carga horária | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-7067) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=10-2925) |
| Servidor · participações e horas | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-1930) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-10498) |
| Vencimentos · visualização | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-2074) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-10577) |
| Cenário e metodologia | [Página de documentação](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=288-3) | — |

A central abre configurações e prévias paginadas de R1–R5, com R2 individual e consolidado. São 13 páginas A4 nos modelos. O servidor comum tem um percurso separado de R2 próprio; o celular explica que configuração e prévia são realizadas no computador. Os cadastros e as listas existentes de Servidores e Vencimentos conservam seus percursos e ganharam acesso às visualizações.

## Conteúdo aplicado

- E1–E8 estendem Início, Relatórios, Servidores e Vencimentos. O Início prioriza pendências do Gabinete, assinaturas da Direção, validações da DEPE, dados próprios do servidor e serviços da administração técnica.
- V01–V18 têm representações para computador/celular e tabela equivalente. V16 e V18 informam indisponibilidade onde o histórico não sustenta mediana/P90 ou taxa por coorte. E9 demonstra tramitação descritiva; E10/E11 permanecem previstas para L3.
- Dicionário de I01–I24 e cenário único no arquivo Figma e em `.design/statistics-data-contract.json` / `statistics-scenario.json`.
- Contêiner compartilhado `278:74` com seis estados; indicadores `278:75`; linhas de dados `278:80`; 12 cores semânticas de gráficos, com primitivas e aliases. Cores de situação respeitam a semântica institucional e mantêm rótulos.
- Prévias R1–R5 com referência, filtros, critério, base de registros, metodologia, paginação e marca Dados demonstrativos. Não incluem CPF, telefone, endereço ou e-mail.
- Dados próprios, departamento, gestão e eventos técnicos usam percursos separados. DEPE mantém identidade e nível; identificação de outros departamentos fica restrita até D16. O R2 originado da DEPE conserva seu agregado de 25 h.

## Cenário e reconciliação

Referência: **11/11/2026**. Base demonstrativa: **11/11/2026 às 17:00**, America/Sao_Paulo.

| Medida | Valor |
| --- | ---: |
| Atos publicados | 12 |
| Revogada / Encerrada / Vigência futura / Vencida / Vigente / Vigente sem término | 1 / 1 / 2 / 1 / 5 / 2 |
| Registros em produção, fora do total publicado | 7 |
| Atualizadas / revogação parcial, fora da soma exclusiva | 2 / 1 |
| Participações vigentes / servidores participantes | 10 / 5 |
| Horas semanais atribuídas | 34 |
| DEPE / DAP | 25 h / 9 h |
| Helena Martins | 3 participações / 16 h |
| Comunicações: e-mail / alternativa / exceção / pendente | 6 / 2 / 1 / 1 |

O teto de 10 h é por participação docente administrativa, admite exatamente 10 h e não se aplica à soma do servidor. Versões não multiplicam atos. Revogação futura não antecipa efeito; encerramento retroativo usa data de registro e de efeito. Rascunho com término passado permanece em produção.

## Verificação

| Evidência | Resultado e limite |
| --- | --- |
| `statistics-scenario-checks.json` | 12/12 verificações do cenário, incluindo término igual a R, retroatividade, revogação futura, substituição de membro, sem término, 10 h exatas e reconciliação |
| `statistics-navigation-D-checks.json` e `-M-checks.json` | 30/30 verificações dos arrays de ações persistidos; incluem modelos, R2 próprio, consulta externa e restrição nominal departamental |
| `statistics-toggle-checks.json` | 72/72 alternâncias gráfico/tabela nas 18 visualizações das duas classes de tela |
| `statistics-audit-D-final.json` e `-M-final.json` | 94 quadros de computador e 92 móveis: sem transbordamentos horizontais, destinos ausentes, autonavegação, fontes divergentes, imagens na composição do conteúdo ou vazamentos nominais nos critérios examinados |
| `statistics-contrast.json` | 12/12 cores com contraste mínimo de 4,16:1 contra branco e fundo; requisito gráfico de 3:1 atendido |
| `DESIGN.md` · lint | 0 erros; 27 avisos de tokens sem referência nas propriedades do frontmatter. As ligações reais do Figma e os aliases estão documentados no sidecar |
| `.impeccable/review/estatisticas-2026-11-11.md` | Nove capturas examinadas; dois achados de cores e descrições corrigidos. Verdict pass **ship** limitado à resolução desses achados e às opções visíveis |

As auditorias estruturais foram confirmadas antes dos ajustes finais de cores/descrições e da ligação dos botões de nova tentativa/atualização, que preservam geometria e dados. As verificações de navegação foram executadas depois desses ajustes. Capturas em `.design/statistics-previews/`. O conteúdo usa camadas nativas de texto, componentes e vetores; nenhuma captura completa de interface foi importada no Figma.

## Situação dos critérios e próximos marcos

Os critérios de protótipo da §15.1 estão representados no núcleo e nas variantes inspecionadas. Isso não equivale à homologação institucional ou à aprovação dos critérios de software da §15.2.

| Critério | Evidência no protótipo | Implementação |
| --- | --- | --- |
| CA19 | Cenário e recortes reconciliados entre consultas e prévias | Serviço único de métricas ainda a implementar |
| CA20 | Percursos próprios, técnicos e departamentais separados | Autorizar consulta, geração e download no servidor |
| CA25 | Data de cálculo e estado Dados desatualizados | Cache, atualização periódica e retomada da aba pendentes |
| CA27 | Interseção de participação e vigência verificada no cenário | Aplicar a regra em dados reais |
| CA37 | Rascunho com término passado separado de Vencida | Persistência e reconstrução histórica pendentes |
| CA54 | Quatro resultados separados em R5 | Evidências e log de comunicação pendentes |

D05, D06, D11, D14, D16, D17 e D21 ainda precisam de homologação aplicável. **D25** não elimina o CSV do requisito vigente; a entrega visual cobre PDF. **D26** define prazos/calendário, portanto nenhum registro é classificado como atrasado. **D27** define retenção de PDFs e logs. A documentação histórica da Entrega 2 conserva sua inconsistência de níveis, explicitamente fora deste módulo no plano recebido.

Busca livre, ordenação arbitrária, cabeçalhos de tabela fixos em execução, teclado, leitor de tela, PDF acessível, autenticação, autorização, atualização automática, desempenho, geração/download real e auditoria no servidor não são comprovados por um protótipo. As rotas em `statistics-data-contract.json` são contratos preparatórios; nenhuma tecnologia de backend foi escolhida. O próximo marco é homologar regras e escopos com os responsáveis, realizar teste exploratório e então definir a arquitetura.
