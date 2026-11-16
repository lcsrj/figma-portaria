# Dicionário da EAP — Gestor de Portarias

> Complemento da [EAP](EAP.md). O **papel responsável** remete aos papéis PA-01 a PA-08 do [Mapeamento de Talentos](../03-Mapeamento-de-Talentos/Mapeamento-de-Talentos.md). Ele indica a competência exigida, **não** quem executou o trabalho: os arquivos do projeto não registram a autoria por pessoa.
>
> Situação: **C** concluído · **P** pendente · **Pr** parcial · **D** diferido.

## Fase 1 — Gerenciamento

| ID | Pacote | Descrição | Resultado esperado | Critério de conclusão | Papel | Dependências | Evidência | Sit. |
|---|---|---|---|---|---|---|---|---|
| 1.1.1 | Documento-fonte | Redigir as regras de negócio, usuários e requisitos | Documento de 07/04/2026 | Documento disponível (rascunho) | PA-08 | — | `referencias/gestor portaria, regras de negocio.txt` | C |
| 1.1.2 | Usuários e requisitos | Listar papéis, RF1–RF8 e RN1–RN7 | Requisitos numerados | Requisitos identificáveis | PA-08 | 1.1.1 | fonte, cap. 3–4 | C |
| 1.2.1 | Plano de interface | Planejar telas, jornadas, dados, permissões, estados, critérios | Plano v3.2 | Pronto para orientar wireframes | PA-08, PA-04 | 1.1 | `PLANO_…_v3.2.md` | C |
| 1.2.2 | Revisões do plano | Auditoria da v2; pareceres da v3 e v3.1 | Achados incorporados ou no backlog | Registro §0.2–§0.4 | PA-08 | 1.2.1 | `AUDITORIA_…_v2.md`, `PARECER_…` | C |
| 1.2.3 | Backlog | Itens procedentes que não bloqueiam os wireframes | B01–B13 com prazo por marco | Prazo ligado a etapa | PA-08 | 1.2.2 | plano §17 | C |
| 1.2.4 | Plano de estatísticas | Indicadores, regras de contagem, visualizações, relatórios e acesso por nível | Plano v1.2 | Coerente com o v3.2 e com as decisões vigentes | PA-08, PA-04 | 1.2.1 | `PLANO_ESTATISTICAS_RELATORIOS_v1.2.md` | C |
| 1.3.1 | Registro de decisões | Dúvidas da fonte com hipótese, prioridade e participantes | D01–D24 | Toda divergência registrada | PA-08 | 1.2.1 | plano §12 | C |
| 1.3.2 | Níveis de acesso e entrada | Decisões do responsável: quatro níveis (11/11/2026, substituindo os três níveis da manhã) e entrada unificada com acesso demonstrativo (15/11/2026, substituindo os quatro logins) | Regra vigente no protótipo | Registro com data | PA-08 | 1.3.1 | `PRODUCT.md`; `UX-CONTRACT.md` | C |
| 1.3.3 | Homologação | Aprovar hipóteses de prioridade Alta com as áreas | Decisões com responsável, data e evidência | B01 e B02 cumpridos | PA-08 | 2 | não existe | P |
| 1.4.1 | Aceite | Aceite das áreas usuárias | Termo registrado | Assinatura das áreas | PA-08 | 8.3 | não existe | P |
| 1.4.2 | Lições aprendidas | Registrar aprendizados | Documento | Revisão pela equipe | PA-08 | 1.4.1 | não existe | P |

## Fase 2 — Levantamento institucional (Etapa 0)

| ID | Pacote | Descrição | Resultado esperado | Critério de conclusão | Papel | Dependências | Evidência | Sit. |
|---|---|---|---|---|---|---|---|---|
| 2.1.1 | SIG/SIPAC | Verificar o que o SIG/SIPAC cobre no campus, autoridade sobre dados e numeração, API | Alternativa de D23 escolhida | Resposta registrada | PA-08, PA-07 | — | plano §2.2 | P |
| 2.1.2 | Integrações | LDAP, base de pessoal (SIGRH) e assinatura | Contratos e restrições | Respostas da TI | PA-02, PA-07 | 2.1.1 | plano §11 | P |
| 2.2.1 | Séries | Séries de numeração em uso e último número | Configuração inicial de séries | Confirmado no acervo | PA-08 | — | plano D09 | P |
| 2.2.2 | Planilha | Ler a planilha de registro e mapear colunas | Tabela coluna → significado → requisito | B12 concluído | PA-08, PA-03 | — | plano §16, item 6 | P |
| 2.3.1 | Frase truncada | Obter o texto completo de "As p…" | Regra perdida recuperada ou descartada | D19 respondida | PA-08 | — | fonte, cap. 2 | P |

## Fase 3 — Concepção e requisitos

| ID | Pacote | Descrição | Resultado esperado | Critério de conclusão | Papel | Evidência | Sit. |
|---|---|---|---|---|---|---|---|
| 3.1 | Perfis e níveis | Matriz de perfis com escopo; níveis 1–3 | Matriz vigente | Coerência entre plano, `PRODUCT.md` e protótipo | PA-08 | plano §3; `UX-CONTRACT.md` | C |
| 3.2 | Arquitetura de informação | Estrutura de navegação e inventário T01–T20 | Mapa de telas | Todo RF/RN com destino | PA-04 | plano §4.1–§4.2 | C |
| 3.3 | Jornadas | J01–J12 por perfil, com lançamento | Fluxos do protótipo | Uma jornada por cenário-chave | PA-04 | plano §4.3 | C |
| 3.4 | Modelo de informação e ciclo de vida | Campos da solicitação e da portaria; situações em dois níveis | Tabela de decisão de situação | Exatamente uma situação por ato | PA-08, PA-03 | plano §5–§6 | C |

## Fase 4 — Design de interface

| ID | Pacote | Descrição | Resultado esperado | Critério de conclusão | Papel | Evidência | Sit. |
|---|---|---|---|---|---|---|---|
| 4.1.1 | Variáveis | Cores, tipografia, espaçamento e raio como variáveis Figma | Fonte única de estilo | Mapeamento em `DESIGN.md` | PA-04 | `DESIGN.md` (frontmatter e §Colors) | C |
| 4.1.2 | Componentes | Botões, campos, etiquetas, tabelas, abas, avisos com estados | Biblioteca reutilizável | Estados Padrão, Foco, Erro, Desabilitado | PA-04 | `DESIGN.md` §Components | C |
| 4.1.3 | Componentes de acesso | Campo (12 variantes) e Botão (15 variantes) da entrada | Família própria | Variantes documentadas | PA-04 | `ENTREGA_REFERENCIA_…` | C |
| 4.1.4 | Selo de nível | Níveis 1 a 4 em formato completo e compacto (oito variantes, `228:19`) | Identificação do nível | Rótulo textual além da cor | PA-04 | `DESIGN.md`; `ENTREGA_QUATRO_NIVEIS_FIGMA_2026-11-11.md` | C |
| 4.2.1 | Entrada unificada | Usuário, Senha, olho, Esqueci minha senha, Entrar; sem nível antes do login | Interface A | CA-001 a CA-007 | PA-04 | capturas A01, A02 | C |
| 4.2.2 | Acesso demonstrativo | Quatro contas fictícias com credenciais de apresentação, sem concessão de permissões | Interface A | CA-049 | PA-04 | capturas A03, A04 | C |
| 4.2.3 | Amostras de largura | Quadros em seis tamanhos de referência e 360 px | Adaptação demonstrada | Sem transbordamento horizontal | PA-04 | `reference-final-audit-*.json` | C |
| 4.3.1 | Recuperar acesso | E-mail institucional e Enviar instruções | Interface B (pedido) | CA-009 | PA-04 | captura histórica B01 | C |
| 4.3.2 | Confira seu e-mail | Confirmação genérica; reenviar; abrir link | Interface B (confirmação) | CA-010, CA-011 | PA-04 | capturas B02, B03 | C |
| 4.3.3 | Nova senha | Nova senha, confirmação, Salvar nova senha | Interface B (redefinição) | CA-012 | PA-04 | `screens.js` (`reset`) | C |
| 4.3.4 | Orientação LDAP | "Usa a conta institucional?" e orientação à TI | RN3 representada | CA-013 | PA-04 | Existia até 11/11/2026 (captura histórica B01); removida com o Acesso institucional; não voltou na entrada unificada; precisa ser recolocada | P |
| 4.3.5 | Recuperação externa | Fluxo próprio do nível 1 | Isolamento do nível 1 | CA-014 | PA-04 | quadros `236:1694` a `236:1784` (`levels-recovery-*.json`), de 11/11/2026; caminho a partir da entrada unificada não reverificado | Pr |
| 4.4.1 | Menu | Menu lateral de 232 px; menu recolhido no celular | Interface C (menu) | CA-016, CA-017 | PA-04 | capturas C01–C03 | C |
| 4.4.2 | Início por perfil | Conteúdo inicial por papel | Interface C (conteúdo) | CA-015, CA-018 | PA-04 | capturas C01, C02, C05; `screens.js` | C |
| 4.4.3 | Identificação e nível | Nome, papel, selo de nível (escala 1–4, só depois do login), Sair | Contexto da conta | CA-019 | PA-04 | capturas C01, C02, C05 | C |
| 4.4.4 | Consulta externa | Portarias publicadas e Minha conta | Ambiente do nível 1 | CA-020 | PA-04 | capturas C06, C07 | C |
| 4.5 | Telas T04–T20 | Solicitações a pendências, com estados | Produto completo | Famílias T04–T20 presentes | PA-04 | `ENTREGA_FIGMA.md` | C |
| 4.6 | Adaptação móvel | Uma coluna, menu recolhido, ações fixas | 239 quadros móveis | Auditoria móvel sem destinos ausentes | PA-04 | `levels-final-audit-M-2026-11-11.json` | C |
| 4.7 | Landing page | Página pública de apresentação | Especificação aprovada e protótipo | CA-027 a CA-030 | PA-04, PA-08 | não existe; especificação no Artefato 9 | P |
| 4.8.1 | Estatísticas | Painel por perfil, Estatísticas administrativas (Panorama, Tramitação, Pendências, Servidores), M01–M32, C01–C12, filtros predefinidos, contêiner com seis estados | Interface D | CA-045, CA-046 | PA-04, PA-08 | capturas E01–E03; `ENTREGA_ESTATISTICAS_…`, `ENTREGA_IMPLEMENTACAO_VALIDACAO_…` | C |
| 4.8.2 | Relatórios | R1–R5 (13 páginas A4) e relatórios semanal, mensal e por intervalo com prévia de cinco páginas e leitura ampliada | Interface D | CA-039, CA-048 | PA-04 | captura E06 | C |
| 4.8.3 | Notificações e acompanhamento | Avisos separados de tarefas; acompanhamento com responsável, motivo e progresso por marcos | Interface D | CA-047 | PA-04 | capturas E04, E05 | C |
| 4.8.4 | Abas do editor | Texto, Participações e Prévia persistentes | Editor sem perda de contexto | CA-050 | PA-04 | captura E07 | C |

## Fase 5 — Protótipo navegável e avaliação

| ID | Pacote | Descrição | Resultado esperado | Critério de conclusão | Papel | Evidência | Sit. |
|---|---|---|---|---|---|---|---|
| 5.1 | Navegação | Ações de navegação, condições, variáveis e transições (dissolução 220 ms etc.) | Protótipo navegável | 6.903 interações configuradas | PA-04 | auditorias finais | C |
| 5.2 | Verificações estruturais | Destinos ausentes, rotas proibidas, ramos condicionais, transbordamento | Relatórios JSON | Zero destinos ausentes | PA-06 | `.design/*audit*.json` | C |
| 5.3 | Revisões visuais | Revisões independentes com veredito | Pareceres | Achados resolvidos | PA-06, PA-04 | `.impeccable/review/*.md` | C |
| 5.4 | Teste de usabilidade | Rodadas exploratórias com 2–3 participantes por grupo | Relatório e ajustes | Nenhum erro crítico pendente | PA-06, PA-04 | plano §13.3; não executado | P |
| 5.5 | Percursos por cliques reais | Executar no protótipo os percursos de 15/11/2026: perfis, menus, notificações, filtros, gráficos, abas, relatórios e paginação | Registro de cliques e capturas | Todos os percursos concluídos ou com falha registrada | PA-06 | `ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md` (automação não iniciou) | P |

## Fases 6 a 9

| ID | Pacote | Descrição | Resultado esperado | Critério de conclusão | Papel | Sit. |
|---|---|---|---|---|---|---|
| 6.1 | Autenticação e contas | Login local, sessão, recuperação, contas, papéis com escopo, cadastros | Módulo L1 | Critérios da plano §14 exercitados | PA-01, PA-02, PA-03, PA-07 | P |
| 6.2 | Consulta e solicitação | Busca, detalhe, solicitação, histórico | Módulo L1 | CA-031, CA-036 | PA-01, PA-02 | P |
| 6.3 | Elaboração e validação | Editor de dispositivos, modelo, membros/horas, validação, aceite | Módulo L1 | CA-032, CA-033 | PA-01, PA-02 | P |
| 6.4 | Assinatura, publicação e e-mail | Modo externo com verificação; canais; e-mail único | Módulo L1 | CA-034, CA-035 | PA-02, PA-07 | P |
| 6.5 | Pendências e vigências | T20, alertas independentes de tela aberta | Fim do L1 | CA-037, CA-038 | PA-01, PA-02 | P |
| 7.1 | Lançamento 2 | LDAP, relatórios RF7/RC9, painel RF8, estatísticas, relatórios por período, assistentes, notificações | Atendimento integral à fonte | CA-039, CA-045 a CA-048 | PA-01, PA-02 | D |
| 7.2 | Lançamento 3 | Comparação de versões, XLSX, acervo, SIPAC | Melhorias | Conforme D23 | PA-01, PA-02 | D |
| 8.1 | Testes funcionais e de falhas | Permissões, conflitos, resultado desconhecido, fuso | Evidência | Sem falha bloqueadora | PA-06 | P |
| 8.2 | Acessibilidade e privacidade | WCAG 2.2 AA e eMAG 3.1 critério a critério; PDF acessível; LGPD | Evidência | Critérios verificados um a um | PA-06, PA-07 | P |
| 8.3 | Homologação | Cenários reais controlados | Aceite institucional | Sem falhas bloqueadoras | PA-08 | P |
| 9.1 | Documentação de design | `DESIGN.md`, `UX-CONTRACT.md`, `PRODUCT.md`, relatórios de entrega | Handoff | Documentos vigentes | PA-05, PA-04 | C |
| 9.2 | Documentação acadêmica | Nove artefatos da Entrega 2 | Esta pasta | Auditoria final | PA-05 | C |
| 9.3 | Implantação | Guias por perfil, suporte, evolução | Sistema em uso | Rotinas operáveis | PA-07, PA-05 | P |
