# Gestor de Portarias — IFC Campus Videira

Interface web de trabalho para solicitar, elaborar, validar, assinar, publicar, acompanhar e consultar portarias. A referência funcional é o plano v3.2, incluindo X08. O protótipo demonstra comportamentos com dados fictícios; não executa integrações institucionais.

Usuários: servidores docentes e técnicos, Gabinete, CGP, DEPE, DAP, Direção-Geral, Vice-Diretor autorizado, administrador técnico e contas externas habilitadas. A administração técnica não confere competência para assinar ou publicar.

Entrega autorizada: arquivo Figma Design com camadas editáveis, componentes, navegação e animações. Jornadas desktop e adaptação móvel. Login, recuperação e Home com menu são requisitos explícitos das imagens recebidas em 23/10/2026.

As decisões D01–D24 continuam sujeitas ao levantamento institucional. Variantes e hipóteses ficam na documentação de projeto, fora das telas de operação. Nenhuma demonstração de assinatura, publicação ou envio de e-mail representa operação real.

Decisão vigente de 15/11/2026: entrada unificada, sem níveis antes do login e sem Escolher outro acesso. Uma área opcional oferece quatro contas fictícias: usuário externo, Helena Martins, Marina Costa e Eduardo Almeida. A conta autenticada revela seu perfil e nível; selecionar uma demonstração não concede permissões. Os quatro níveis e seus escopos da tabela abaixo permanecem. Esta instrução explícita substitui a apresentação com quatro formulários por nível, sem alterar a matriz de autorização.

**Registro histórico de 11/11/2026 — a apresentação de acesso foi substituída em 15/11/2026:** quatro níveis, com um login próprio para cada nível. A tela inicial apresenta as quatro entradas; escolher uma entrada não concede permissões. A conta precisa estar autorizada para o nível e perfil correspondente. Acesso institucional permanece removido. Esta decisão substitui o agrupamento anterior em três níveis.

| Nível | Perfis | Alcance |
| --- | --- | --- |
| 1 | Conta externa / consultor | Somente portarias publicadas e documentos preparados para divulgação. Sem minutas, dados cadastrais privados ou operações internas. |
| 2 | Docentes, técnicos, DEPE, DAP e administrador técnico | Permissões do plano conforme função, departamento e etapa. Sem elaboração direta de portarias. O administrador técnico administra contas, configurações e auditoria; não recebe competência de negócio automaticamente. |
| 3 | Gabinete e Gestão de Pessoas — CGP/DGP | Elaboração e tramitação de portarias, validação quando autorizada, publicação e comunicação conforme escopo. Sem assinatura ou administração de configurações automática. |
| 4 | Direção-Geral e Vice-Diretor autorizado | Todos os módulos e funções, incluindo elaboração, validação, assinatura, publicação e administração. O usuário confirmou expressamente que o nível 4 mantém acesso total, inclusive elaboração. O Vice depende da autorização e do período registrado. |

Essa decisão substitui as hipóteses anteriores de DG limitado e de ausência de conta externa. Outros cargos de direção permanecem no nível 2. A habilitação de uma conta externa é distinta do cadastro de alguém como participante de uma portaria. Os quatro níveis preservam o histórico, as versões assinadas e as condições de competência. Cada conta demonstrativa usa credenciais e destinos predefinidos; não é possível obter poderes superiores apenas por selecionar a entrada. O Figma demonstra os estados e a navegação; a autorização efetiva deve ser implementada no servidor na etapa de desenvolvimento.

## Estatísticas, acompanhamento e relatórios — vigente em 15/11/2026

O pedido integral atual está preservado em `.design/nov15/PEDIDO_IMPLEMENTACAO_VALIDACAO.md`. Ele amplia o plano v1.1 no protótipo Figma e exige expressamente pizza e rosca, além de barras, linhas, área, empilhadas, comparativos e progresso. A interface mantém a identidade existente e as funcionalidades R1–R5 anteriores.

O cenário administrativo é demonstrativo, em `.design/nov15/data.json`, com R = 15/11/2026: 21 projetos (12 realizados/concluídos, 7 em produção, 1 não aceito e 1 cancelado antes da publicação), 7 cadastros funcionais da amostra (5 ativos e 2 inativos), 7 tarefas em 6 projetos. Contas de acesso e catálogo funcional são fixtures distintas; esses números não representam o quadro real do campus. O dicionário contém 32 indicadores, incluindo médias, percentuais, revisões e métodos. Estado atual, eventos históricos e situação de vigência são dimensões distintas.

Panorama, Tramitação, Pendências e Servidores dividem o trabalho analítico. Filtros demonstrativos cobrem período, departamento, solicitante, tipo, estado, combinação DEPE + em produção e vazio. Nos relatórios, nove recortes predefinidos funcionam nos três períodos: semanal, mensal e intervalo personalizado fixo. Resumo, comparação, detalhes e cinco páginas de prévia preservam o recorte; combinações e entrada de datas livres permanecem para a implementação.

O acompanhamento explicita estado, etapa, responsabilidade, motivo, ação, último evento, histórico, retorno para correção e próximas etapas. O progresso conta seis marcos obrigatórios; revisão pode ser opcional/reaberta. Ler aviso não conclui tarefa. A conta externa continua restrita a publicações; servidor mantém dados próprios; DEPE/DAP conservam escopo departamental; administração técnica não ganha conteúdo de negócio. Níveis 3 e 4 mantêm suas competências.

Texto, Participações e Prévia são abas persistentes nas revisões 04/05. A remoção de presidência na revisão 05 continua preservada ao alternar. Minuta canônica, artigos, horas e datas são iguais no computador e celular.

A prévia PDF possui identificação institucional, resumo, estoque, eventos no período, desempenho, pendências, retrabalho, evolução, comparação e detalhes. No celular existe leitura em texto ampliado, com paginação e retorno à mesma página/origem. O botão Exportar PDF informa a limitação: nenhum arquivo é produzido pelo protótipo.

Validação e evidências de 15/11 são próprias desta etapa: 217 capturas de validação, revisão independente inicial e veredito `ship` restrito às cinco correções F01–F05. Avaliações de reações/variáveis são interpretadas; cliques reais ficaram indisponíveis por erro de inicialização da automação. A entrega deve ser classificada como validação parcial, sem certificar backend, segurança por operação, teclado/leitor de tela, edição livre ou exportação real. Relatório: `ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md`.

## Registro histórico — estatísticas e relatórios de 11/11/2026

O plano `PLANO_ESTATISTICAS_RELATORIOS_v1.1.md` complementa o v3.2. Sua etapa de protótipo estende Início, Relatórios, Vencimentos e o detalhe de Servidores com E1–E8, 18 visualizações, dicionário de 24 métricas e prévias paginadas de R1–R5. R2 tem variantes individual e consolidada. E9 demonstra tramitação descritiva somente onde há informação; E10/E11 ficam previstas para L3. Não há módulo de previsão ou telemetria de negócio.

O cenário canônico é fictício: `.design/statistics-scenario.json`, preparado e verificado por `statistics-scenario.mjs`, também documentado na página Figma “06 · Estatísticas — cenário e metodologia”. Em R = 11/11/2026 são 12 atos publicados, 7 registros em produção, 10 participações vigentes, 5 servidores e 34 horas semanais atribuídas. Os totais usam atos distintos e interseção de datas. O acumulado de horas é informativo; o teto de 10 h aplica-se por participação docente administrativa e aceita exatamente 10 h.

Conta externa não acessa análises. Servidor consulta os próprios dados e R2 individual próprio; DEPE/DAP mantêm escopo departamental no painel e H-D17 nos relatórios, com identificação de outros departamentos restrita até D16. Administração técnica acessa serviços e eventos técnicos, sem conteúdo dos relatórios. Níveis 3 e 4 conservam seus escopos; a autorização e o período do Vice continuam obrigatórios.

As hipóteses do módulo permanecem pendentes de homologação. D25 propõe retirar CSV, mas não o remove do requisito vigente; a entrega visual cobre PDF. D26 define prazos e calendário, portanto o protótipo não classifica atrasos. D27 define retenção. Backend, banco, autorização por operação, geração/download de PDF e acessibilidade em execução permanecem etapas futuras. Contrato preparatório: `.design/statistics-data-contract.json`. Entrega e evidências: `ENTREGA_ESTATISTICAS_RELATORIOS_2026-11-11.md`.
