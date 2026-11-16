# Requisitos Funcionais — Gestor de Portarias

> **Artefato 5 (parte 1) da Entrega 2.** Os requisitos foram consolidados a partir de três fontes, nesta ordem de prioridade: (1) decisões confirmadas pelo responsável em 11/11/2026 e 15/11/2026 (`PRODUCT.md`, `UX-CONTRACT.md`); (2) documento-fonte de 07/04/2026 (RF1–RF8, RN1–RN7); (3) plano de interface v3.2 (RC1–RC13, telas T01–T20); (4) plano de estatísticas e relatórios v1.2. **Atualizado em 15/11/2026:** quatro níveis, entrada unificada, estatísticas, relatórios por período, notificações e acompanhamento (RF-030 a RF-034). Os requisitos não funcionais estão em [Requisitos-Nao-Funcionais.md](Requisitos-Nao-Funcionais.md).

## 1. Convenções

- **IDs desta entrega:** `RF-001`, `RF-002`… A coluna **Origem** liga cada um ao identificador da fonte (`RF1`…`RF8`, `RN1`…`RN7`) ou do plano (`RCx`, `Txx`, `§x`).
- **Prioridade:** Alta (requisito da fonte ou interface obrigatória), Média (requisito do plano ou complemento necessário), Baixa (conveniência).
- **Lançamento:** L1, L2 ou L3, conforme o plano §2.3.
- **Situação:** como **não há software implementado**, a situação diz respeito ao protótipo:
  - **Prototipado** — existe no Figma, com navegação;
  - **Prototipado (parcial)** — existe no Figma, mas parte do comportamento depende de decisão pendente;
  - **Planejado** — especificado no plano, sem representação própria no protótipo;
  - **Futuro** — evolução explícita para depois do L2.
- **Atores:** Servidor (docente ou técnico), DEPE, DAP e Administrador técnico (nível 2); Gabinete e CGP (nível 3); DG e Vice-Diretor autorizado (nível 4); Conta externa (nível 1); Sistema.

## 2. Visão geral

| ID | Nome | Origem | Prior. | Lanç. | Situação | Interface |
|---|---|---|---|---|---|---|
| RF-001 | Autenticar por usuário e senha na entrada unificada | RF1; decisão 15/11/2026 | Alta | L1 | Prototipado | A |
| RF-002 | Exibir e ocultar a senha digitada | plano §7.1 | Média | L1 | Prototipado | A |
| RF-003 | Autenticar via LDAP na mesma entrada | RF3 | Alta | L2 | Prototipado (parcial) | A |
| RF-004 | Oferecer consulta externa (nível 1) | decisão 11/11/2026 | Alta | L1 | Prototipado | A / C |
| RF-005 | Solicitar recuperação de senha por e-mail | RF2, RN2 | Alta | L1 | Prototipado | B |
| RF-006 | Definir nova senha pelo link recebido | RF2 | Alta | L1 | Prototipado | B |
| RF-007 | Orientar a recuperação de conta institucional (LDAP) | RN3 | Alta | L1 | Removido do protótipo (lacuna) | B |
| RF-008 | Recuperar a senha da conta externa | decisão 11/11/2026 | Média | L1 | Prototipado (parcial) | B |
| RF-009 | Tratar sessão expirada e falta de permissão | plano §7.1, §10 | Média | L1 | Prototipado | A / C |
| RF-010 | Exibir o Início conforme o perfil e o nível | T03; RF8 (parcial) | Alta | L1 | Prototipado | C |
| RF-011 | Oferecer menu de navegação conforme o perfil | plano §4.1 | Alta | L1 | Prototipado | C |
| RF-012 | Identificar a conta, o papel e o nível; sair | decisão 11/11/2026 | Alta | L1 | Prototipado | C |
| RF-013 | Solicitar portaria | RF4, RN4, RC12 | Alta | L1 | Prototipado | — |
| RF-014 | Elaborar portaria | RF4, RN5, RN7, RC3, RC13 | Alta | L1 | Prototipado | — |
| RF-015 | Validar a portaria e aceitar a solicitação | RF4, RN6 | Alta | L1 | Prototipado | — |
| RF-016 | Assinar e verificar a assinatura | RF4, RC5 | Alta | L1 | Prototipado (parcial) | — |
| RF-017 | Registrar a publicação por canal | RF4 | Alta | L1 | Prototipado (parcial) | — |
| RF-018 | Comunicar os membros por e-mail | RF5 | Alta | L1 | Prototipado | — |
| RF-019 | Buscar e consultar portarias | RF6, RN1 | Alta | L1 | Prototipado | — |
| RF-020 | Acompanhar vigências e tratar vencimentos | RC8 | Alta | L1 | Prototipado | C |
| RF-021 | Gerar relatórios | RF7, RC9, RC10 | Alta | L2 | Prototipado | — |
| RF-022 | Manter painel de acompanhamento | RF8 | Alta | L2 | Prototipado | C |
| RF-023 | Organizar a caixa de pendências | plano T20 | Média | L1 | Prototipado | C |
| RF-024 | Cadastrar servidores e participantes não servidores | RC1, RC2 | Alta | L1 | Prototipado | — |
| RF-025 | Vincular memorandos e processos | RC6 | Média | L1 | Prototipado | — |
| RF-026 | Administrar contas, papéis, níveis e signatários | RC5; fonte cap. 2 | Alta | L1 | Prototipado | C |
| RF-027 | Preservar histórico e versões | RC7 | Alta | L1 | Prototipado | — |
| RF-028 | Exibir notificações e a conta do usuário | plano T18 | Média | L2 | Prototipado | C |
| RF-029 | Integrar com o SIPAC | RC11 | Baixa | L3 | Futuro | — |
| RF-030 | Consultar estatísticas administrativas | RF8; pedido 15/11/2026; plano de estatísticas §17 | Alta | L2 | Prototipado | C |
| RF-031 | Gerar relatórios por período com prévia | RF7; pedido 15/11/2026 | Alta | L2 | Prototipado (parcial) | — |
| RF-032 | Acompanhar projetos de portaria e notificações | RF8; pedido 15/11/2026 | Alta | L2 | Prototipado | C |
| RF-033 | Alternar Texto, Participações e Prévia no editor | pedido 15/11/2026 | Média | L1 | Prototipado | — |
| RF-034 | Oferecer acesso demonstrativo na entrada | decisão 15/11/2026 | Baixa | — (apresentação) | Prototipado | A |

## 3. Requisitos detalhados

### 3.1 Acesso (Interface A)

#### RF-001 — Autenticar por usuário e senha na entrada unificada

| Campo | Conteúdo |
|---|---|
| Descrição | Qualquer conta habilitada (níveis 1 a 4) informa **Usuário** e **Senha** na entrada unificada para iniciar a sessão. Texto literal da fonte (RF1): "Sistema deve conter mecanismo de autenticação via nome de usuario e senha." |
| Atores | Todas as contas habilitadas; Sistema |
| Prioridade | Alta |
| Pré-condições | Conta habilitada pela administração. |
| Comportamento esperado | Cartão "Entrar — Acesse com seu usuário e senha"; campos com rótulo persistente e exemplo (`nome.sobrenome`, "Digite sua senha"); **Esqueci minha senha**; ação **Entrar**; com credenciais válidas, abre o Início do perfil e só então mostra perfil e nível; com credenciais inválidas, mostra o aviso "Não foi possível entrar" e a orientação junto ao campo. Não há indicação de nível nem "Escolher outro acesso" antes do login (decisão de 15/11/2026). Abaixo, "Apresentação com dados demonstrativos" e **Ver usuários demonstrativos** (RF-034). |
| Dependências | RF-012, RF-026, RF-034; RN-009, RN-010 |
| Critérios de aceitação | CA-001, CA-002, CA-003, CA-005 |
| Situação | Prototipado — entrada `5:2` (computador) e `8:1663` (celular), capturas A01 e A02. A autenticação real não existe. **Histórico:** em 11/11/2026 houve primeiro uma entrada de servidores com botão Acesso externo e depois quatro logins por nível; ambas foram substituídas em 15/11/2026. |

#### RF-002 — Exibir e ocultar a senha digitada

| Campo | Conteúdo |
|---|---|
| Descrição | Controle de olho no campo Senha para alternar entre texto mascarado e visível. |
| Atores | Todos os usuários na entrada |
| Prioridade | Média |
| Pré-condições | Campo Senha preenchido. |
| Comportamento esperado | Alterna `••••••••` ↔ texto; nome acessível que descreve a ação. |
| Dependências | RF-001, RF-004 |
| Critérios de aceitação | CA-004 |
| Situação | Prototipado por variantes do componente Campo (`208:53`), com valor predefinido; não comprova digitação livre. |

#### RF-003 — Autenticar via LDAP na mesma entrada

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF3): "Sistema deve considerar a possibilidade de autenticação via LDAP". Pela decisão de 11/11/2026, mantida em 15/11/2026, não há botão nem tela de "Acesso institucional": a origem da conta (local ou LDAP) é identificada pelo sistema a partir do mesmo formulário. |
| Atores | Servidores com conta institucional; Sistema |
| Prioridade | Alta |
| Pré-condições | Protocolo LDAP definido com a TI (plano §7.1). |
| Comportamento esperado | O usuário usa a mesma entrada; o sistema autentica na origem correta; a recuperação segue o RF-007. |
| Dependências | RF-001, RF-007; levantamento 2.1.2 |
| Critérios de aceitação | CA-005 (entrada única) |
| Situação | Prototipado (parcial) — a entrada unificada existe; a integração LDAP depende do levantamento e está prevista para o L2. |

#### RF-004 — Oferecer consulta externa (nível 1)

| Campo | Conteúdo |
|---|---|
| Descrição | Contas externas habilitadas entram pela mesma entrada unificada e acessam apenas portarias publicadas, documentos de divulgação e avisos públicos. |
| Atores | Conta externa / consultor |
| Prioridade | Alta |
| Pré-condições | Conta externa habilitada separadamente do cadastro de participante. |
| Comportamento esperado | Depois de entrar, ambiente com "Portarias publicadas" ("Buscar por número ou assunto", resultados e **Consultar portaria**), "Minha conta", **Notificações** e o selo "Nível 1 · Consulta" ("Visitante autorizado · Acesso externo"), sem módulos internos nem estatísticas. |
| Dependências | RF-008, RF-019; RN-001, RN-009, RN-010, RN-011, RN-025 |
| Critérios de aceitação | CA-006, CA-007, CA-020 |
| Situação | Prototipado — consulta `229:4207` e `229:4803`, capturas C06 e C07. **Histórico:** de 11/11 a 15/11/2026 havia uma entrada externa própria (`5:182`, `8:1843`), substituída pela entrada unificada. |

### 3.2 Recuperação de senha (Interface B)

#### RF-005 — Solicitar recuperação de senha por e-mail

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF2): recuperação "por meio de envio de email com link para habilitação de nova senha"; (RN2) "somente via link enviado no email previamente cadastrado". |
| Atores | Servidor com conta local; Sistema |
| Prioridade | Alta |
| Pré-condições | E-mail cadastrado na conta local. |
| Comportamento esperado | Tela "Recupere seu acesso" com campo **E-mail institucional**, **Enviar instruções** e **Voltar ao acesso**; em seguida, "Confira seu e-mail", com texto que não revela se a conta existe ("Se houver uma conta local vinculada…"), aviso de validade limitada e verificação da pasta de spam, e as ações **Reenviar instruções**, **Abrir link de recuperação** (atalho de demonstração) e **Voltar ao acesso**. |
| Dependências | RF-006; RN-002 |
| Critérios de aceitação | CA-009, CA-010, CA-011 |
| Situação | Prototipado (quadros `5:92` e `5:118`). Envio real de e-mail não existe. |

#### RF-006 — Definir nova senha pelo link recebido

| Campo | Conteúdo |
|---|---|
| Descrição | O link do e-mail abre "Defina uma nova senha". |
| Atores | Servidor com conta local |
| Prioridade | Alta |
| Pré-condições | Link válido, não usado e dentro do prazo (prazo a definir com a TI). |
| Comportamento esperado | Campos **Nova senha** e **Confirme a senha**; ajuda "Os requisitos de senha seguem a política de acesso homologada pela instituição."; ação **Salvar nova senha**; conclusão confirmada. Estados de link inválido, expirado ou já usado estão previstos no plano §7.1. |
| Dependências | RF-005 |
| Critérios de aceitação | CA-012 |
| Situação | Prototipado (redefinição `5:143`; conclusão `5:167`). A política de senha não está definida. |

#### RF-007 — Orientar a recuperação de conta institucional (LDAP)

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RN3): a recuperação da conta LDAP "deverá ser feita diretamente neste sistema de autenticação". |
| Atores | Servidor com conta institucional |
| Prioridade | Alta |
| Pré-condições | — |
| Comportamento esperado | Na tela de recuperação, orientação de que a senha institucional é administrada pelo serviço de identidade do IFC, com caminho para a orientação da TI. O sistema não altera a senha LDAP. |
| Dependências | RF-003 |
| Critérios de aceitação | CA-013 |
| Situação | **Sem representação no protótipo atual.** O bloco "Usa a conta institucional? — A senha institucional é administrada pelo serviço de identidade do IFC." com **Ver orientação** existia até 11/11/2026 (captura B01, das 08h06) e foi removido de todos os quadros junto com o Acesso institucional (`.design/access-levels-external-2026-11-11.js`). A RN3 da fonte continua vigente e precisa voltar a ser representada (lacuna L06). |

#### RF-008 — Recuperar a senha da conta externa

| Campo | Conteúdo |
|---|---|
| Descrição | O acesso externo tem recuperação e redefinição próprias, sem passar pelas telas de servidores. |
| Atores | Conta externa |
| Prioridade | Média |
| Pré-condições | Conta externa com e-mail cadastrado. |
| Comportamento esperado | "Esqueci minha senha" leva à recuperação; ao concluir, retorna à entrada sem assumir outro perfil. |
| Dependências | RF-004 |
| Critérios de aceitação | CA-014 |
| Situação | Prototipado (parcial): cópias próprias das quatro telas de recuperação externa (`236:1694`, `236:1721`, `236:1753` e `236:1784` no computador) foram criadas em 11/11/2026 (`.design/levels-recovery-D/M-2026-11-11.json`), quando havia entrada externa própria. Com a entrada unificada de 15/11/2026, o caminho da recuperação externa não foi reverificado. Separar a recuperação pela origem da conta é decisão de implementação. |

#### RF-009 — Tratar sessão expirada e falta de permissão

| Campo | Conteúdo |
|---|---|
| Descrição | Sessão vencida leva a uma tela de reautenticação que preserva o último rascunho salvo; ação não autorizada leva a uma tela de acesso negado com navegação utilizável. |
| Atores | Todos os usuários autenticados |
| Prioridade | Média |
| Pré-condições | — |
| Comportamento esperado | "Sua sessão expirou — Entre novamente para continuar com segurança." com "Entrar novamente"; "Você não tem acesso a esta ação" com "Voltar ao início" e "Consultar portarias". |
| Dependências | RF-001, RF-026 |
| Critérios de aceitação | CA-008 |
| Situação | Prototipado (`screens.js`: `sessionExpired`, `denied`). |

### 3.3 Início e menu (Interface C)

#### RF-010 — Exibir o Início conforme o perfil e o nível

| Campo | Conteúdo |
|---|---|
| Descrição | O Início prioriza o trabalho pendente e as vigências do usuário (plano §8.1). |
| Atores | Todos os perfis |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada. |
| Comportamento esperado | Gabinete: "Bom dia, Marina", aviso de pendências, "Na sua mesa" e "Vencimentos próximos", ações **Nova portaria** e **Ver solicitações**. Docente: "Seu acompanhamento" e acesso rápido a participações e solicitações. DEPE: "Aguardando sua análise". Direção-Geral e Vice (nível 4): "Gestão da plataforma" com **Elaborar portaria**, **Administração** e "Sua assinatura". Servidor (nível 2): "Meu acompanhamento" com Minhas pendências, Minhas participações e Minhas horas (h/semana, soma informativa) e **Acompanhar minha solicitação**. Administrador: atalhos de administração. Cada linha ou atalho abre a tela correspondente. |
| Dependências | RF-011, RF-012, RF-023 |
| Critérios de aceitação | CA-015, CA-018 |
| Situação | Prototipado (Gabinete `6:49`/`8:1874`; DG `6:390`/`8:2014`; Vice `229:4439`/`229:4987`), capturas C01, C02, C03 e C05. |

#### RF-011 — Oferecer menu de navegação conforme o perfil

| Campo | Conteúdo |
|---|---|
| Descrição | Menu com os módulos compatíveis com as permissões efetivas. |
| Atores | Todos os perfis |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada. |
| Comportamento esperado | Computador: menu lateral fixo (232 px) com ícone e rótulo — Início, Solicitações, Portarias, Pendências, Vencimentos, Notificações, Relatórios, Servidores, Participantes externos, Memorandos e processos — e, conforme o perfil, Administração e Assinaturas (servidor de nível 2: Início, Solicitações, Portarias e Notificações); item atual destacado. Celular: menu recolhido, aberto lateralmente; **Fechar** retorna à tarefa de origem. Abas locais de cada módulo permanecem visíveis entre as vistas. |
| Dependências | RF-012, RF-026 |
| Critérios de aceitação | CA-016, CA-017, CA-026 |
| Situação | Prototipado. |

#### RF-012 — Identificar a conta, o papel e o nível; sair

| Campo | Conteúdo |
|---|---|
| Descrição | A conta ativa é sempre identificável. |
| Atores | Todos os perfis |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada. |
| Comportamento esperado | Depois do login: nome, papel e selo de nível no rodapé do menu ("Nível 1 · Consulta", "Nível 2 · Acesso restrito", "Nível 3 · Operação", "Nível 4 · Acesso total") e **Sair**; celular: selo no cabeçalho. O selo nunca aparece na entrada. **Sair** volta à entrada sem a sessão de gestão. |
| Dependências | RN-009 |
| Critérios de aceitação | CA-019 |
| Situação | Prototipado — família de selos `228:19` com oito variantes (quatro níveis × Completo e Compacto). |

### 3.4 Fluxo da portaria

#### RF-013 — Solicitar portaria

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF4/RN4): solicitação com preenchimento obrigatório mínimo de assunto, membros e período de vigência; narrativa (RC12): justificativa, propósito, membros, cargas horárias e período. |
| Atores | Servidores; Gabinete/CGP |
| Prioridade | Alta |
| Pré-condições | Conta interna (níveis 2, 3 ou 4). A conta externa não solicita. |
| Comportamento esperado | Formulário de nova solicitação demonstrado em sete quadros (preenchimento, participação, erro, rascunho, revisão e envio), preservando o perfil de origem; salvar rascunho; enviar; devolução com motivo; correção e reenvio. Variantes V1 (membros sempre obrigatórios) e V2 (por finalidade) até D07. |
| Dependências | RN-004 |
| Critérios de aceitação | CA-036 |
| Situação | Prototipado (T04/T05; jornada J01). |

#### RF-014 — Elaborar portaria

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RN5): número, assunto, aprovação de membros, carga horária individual e presidência/vice-presidência obrigatórios; (RN7) teto de 10 h para docente em portaria administrativa. |
| Atores | Gabinete e CGP (nível 3); Direção-Geral e Vice (nível 4) |
| Prioridade | Alta |
| Pré-condições | Solicitação aceita ou demanda interna. |
| Comportamento esperado | Etapas Identificação → Texto e participações → Datas e referências → Revisão; editor de dispositivos com numeração conforme o Decreto nº 12.002/2024; minuta com marca; modelo por natureza (designação, lotação, normativa, revogação). |
| Dependências | RF-013, RF-027; RN-005, RN-007, RN-008 |
| Critérios de aceitação | CA-032 |
| Situação | Prototipado (T08, T19; jornadas J02, J10, J11). |

#### RF-015 — Validar a portaria e aceitar a solicitação

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RN6): "Toda portaria deve ser validada pelo próprio gabinete, Diretor de Departamento e/ou CGP antes da assinatura do diretor geral." |
| Atores | DEPE, DAP, Gabinete, CGP |
| Prioridade | Alta |
| Pré-condições | Minuta submetida. |
| Comportamento esperado | Fila de validação; DEPE/DAP editam apenas participações do próprio departamento (variante A de D04); ações Validar e Devolver para correção (com motivo). |
| Dependências | RF-014; RN-006 |
| Critérios de aceitação | CA-033 |
| Situação | Prototipado (T09; J03). |

#### RF-016 — Assinar e verificar a assinatura

| Campo | Conteúdo |
|---|---|
| Descrição | Somente o Diretor-Geral e o Vice-Diretor nomeado assinam (fonte, cap. 2). A versão aprovada é congelada; no modo externo, o arquivo assinado é anexado e verificado. |
| Atores | Direção-Geral, Vice-Diretor autorizado; Gabinete/CGP (registro do retorno) |
| Prioridade | Alta |
| Pré-condições | Todas as validações concluídas. |
| Comportamento esperado | Nível 3 que encaminha à assinatura vê "Aguardando assinatura", sem assumir o perfil do signatário; nível 4 segue para a própria assinatura; situações Anexada → Em verificação → Verificada ou Recusada na verificação. |
| Dependências | RF-015; RN-006, RN-008, RN-020 |
| Critérios de aceitação | CA-021, CA-022, CA-023, CA-034 |
| Situação | Prototipado (parcial) — o mecanismo de assinatura depende de D10. |

#### RF-017 — Registrar a publicação por canal

| Campo | Conteúdo |
|---|---|
| Descrição | RF4 inclui a publicação. O plano propõe registro por canal (Boletim de Serviço, DOU, portal do SIG) com natureza oficial, divulgação obrigatória ou réplica. |
| Atores | Gabinete, CGP |
| Prioridade | Alta |
| Pré-condições | Assinatura verificada. |
| Comportamento esperado | Situações Aguardando publicação, Publicação parcial e Publicada; classificação material para normativas. |
| Dependências | RF-016 |
| Critérios de aceitação | CA-035 |
| Situação | Prototipado (parcial) — canal oficial depende de D11. |

#### RF-018 — Comunicar os membros por e-mail

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF5): e-mail aos membros da portaria "assinada e publicada", informando participação e vigência, com o documento anexo. |
| Atores | Sistema; Gabinete/CGP |
| Prioridade | Alta |
| Pré-condições | Publicação concluída (hipótese D12). |
| Comportamento esperado | Envio automático único; situação por destinatário; tarefa "Tratar comunicação" para falha ou membro sem contato; resultados separados: e-mail enviado, comunicação alternativa e exceção autorizada. |
| Dependências | RF-017, RF-023; RN-013 |
| Critérios de aceitação | CA-035 |
| Situação | Prototipado. |

#### RF-019 — Buscar e consultar portarias

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF6): filtros por nome de servidor, nome da portaria, número ou período. |
| Atores | Todos os usuários autenticados |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada (RN1). |
| Comportamento esperado | Lista com identificador, assunto, vigência e situação; detalhe com abas Resumo, Participações, Documento, Tramitação, Publicação, Comunicação; "Minhas participações"; conta externa vê só portarias publicadas. |
| Dependências | RN-001 |
| Critérios de aceitação | CA-031, CA-041 |
| Situação | Prototipado (T06/T07; J07). |

#### RF-020 — Acompanhar vigências e tratar vencimentos

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "monitorar os períodos de vigência de portarias de modo a emitir alertas para renovação e/ou fechamento". |
| Atores | Gabinete, CGP; Sistema |
| Prioridade | Alta |
| Pré-condições | Portaria publicada com término. |
| Comportamento esperado | Tela Vencimentos com abas Em breve, Vencidas, Sem término, Revogação futura e Em vigor; ações Avaliar continuidade e Avaliar encerramento; situação "Vencida — sem encerramento" sem encerrar automaticamente. |
| Dependências | RF-023; RN-014, RN-019 |
| Critérios de aceitação | CA-038 |
| Situação | Prototipado (T12; J06). |

#### RF-021 — Gerar relatórios

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF7): Rel. 1 servidor × portarias; Rel. 2 portarias anuais; Rel. 3 portarias e status. Narrativa: horas atribuídas por servidor e status anuais (Em edição, Em vigência, Revogadas, Atualizadas, Encerradas). |
| Atores | Gabinete, CGP, Direção, DEPE, DAP (escopo em D17) |
| Prioridade | Alta |
| Pré-condições | — |
| Comportamento esperado | Relatórios R1 Servidor × portarias, R2 Horas por servidor (individual e consolidado), R3 Portarias anuais, R4 Portarias por situação e R5 Cumprimento das comunicações, com data de referência, contagem por ato, metodologia, marca "Dados demonstrativos" e prévia A4 paginada, sem CPF, telefone, endereço ou e-mail. Servidor comum gera só o R2 próprio. PDF é o formato desenhado; a remoção do CSV depende de D25. |
| Dependências | RF-027, RF-031; RN-021, RN-025 |
| Critérios de aceitação | CA-039, CA-048 |
| Situação | Prototipado (T13 e central de relatórios `7:6744`/`10:2795`; 13 páginas A4 de R1–R5, em 11/11/2026). Nenhum arquivo é gerado. |

#### RF-022 — Manter painel de acompanhamento

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte (RF8): "dashboard com informações em tempo real no tocante ao acompanhamento das portarias". |
| Atores | Perfis de gestão |
| Prioridade | Alta |
| Pré-condições | — |
| Comportamento esperado | Indicadores clicáveis no Início e painel completo por perfil; "calculado em dd/mm/aaaa às hh:mm"; contêiner com seis estados (com dados, sem registros, carregando, erro, acesso restrito, dados desatualizados); distinguir dado desatualizado de ausência de pendências. O significado de "tempo real" depende de D18 (proposta: atualização a cada 60 s). |
| Dependências | RF-010, RF-030 |
| Critérios de aceitação | CA-039, CA-045 |
| Situação | Prototipado — painel completo `282:1848`/`282:10481` (11/11/2026) e Panorama de Estatísticas (15/11/2026). Atualização automática depende da implementação. |

#### RF-023 — Organizar a caixa de pendências

| Campo | Conteúdo |
|---|---|
| Descrição | Separação entre tarefas do usuário, fila do papel e alertas informativos. |
| Atores | Usuários com ações de fluxo |
| Prioridade | Média |
| Pré-condições | — |
| Comportamento esperado | Abas Da minha unidade, Minhas e Informações; descartar aviso não conclui tarefa; tarefa compartilhada some para todos quando concluída. |
| Dependências | RF-010 |
| Critérios de aceitação | CA-037 |
| Situação | Prototipado (T20). |

#### RF-024 — Cadastrar servidores e participantes não servidores

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: servidor com nome, CPF, SIAPE, órgão, departamento, cargo, telefone, e-mail, endereço e chefia, todos obrigatórios; alunos e externos com nome completo e CPF. |
| Atores | CGP, Gabinete |
| Prioridade | Alta |
| Pré-condições | — |
| Comportamento esperado | Cadastros separados; CPF mascarado; aviso "O cadastro de participante não cria uma conta nem atribui permissões."; inativação no lugar de exclusão. |
| Dependências | RN-011, RN-016, RN-017 |
| Critérios de aceitação | CA-042 |
| Situação | Prototipado (T14/T15). |

#### RF-025 — Vincular memorandos e processos

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "uma portaria poderá ter relação com 1 ou mais memorando para justificar sua elaboração". |
| Atores | Gabinete, CGP |
| Prioridade | Média |
| Pré-condições | — |
| Comportamento esperado | Cadastro de referências e vínculo de vários memorandos a uma portaria; ausência de memorando não impede a demanda. |
| Dependências | RN-018 |
| Critérios de aceitação | **Não há critério de aceitação definido** no plano v3.2 nem nesta entrega para este requisito (lacuna registrada). |
| Situação | Prototipado (T16). |

#### RF-026 — Administrar contas, papéis, níveis e signatários

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: o Administrador habilita usuários e configura o sistema; o plano separa administração técnica de competência de negócio. |
| Atores | Administrador técnico (nível 2); Direção-Geral e Vice (nível 4) |
| Prioridade | Alta |
| Pré-condições | — |
| Comportamento esperado | Contas e permissões com abas Contas, Signatários, Configurações e Auditoria; cada conta mostra pessoa, perfil com nível (1 a 4), escopo e situação; permissões com perfil, escopo, início, término e justificativa; catálogo "Perfis e níveis de acesso"; desativar acesso preserva o histórico. |
| Dependências | RN-008, RN-009, RN-012, RN-020 |
| Critérios de aceitação | CA-024 |
| Situação | Prototipado (T17; J09; quadros `235:1690`/`235:3604`), captura C04. |

#### RF-027 — Preservar histórico e versões

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "manutenção de histórico de portarias e suas respectivas mudanças de estados, com possibilidade de acesso/visualização dos documentos anteriores emitidos". |
| Atores | Usuários conforme permissão |
| Prioridade | Alta |
| Pré-condições | — |
| Comportamento esperado | Linha do tempo de eventos; minuta, versão para assinatura e documento assinado distintos; alteração ou renovação geram novo ato vinculado. |
| Dependências | RN-015 |
| Critérios de aceitação | CA-040 |
| Situação | Prototipado (aba Tramitação; catálogo de versões). |

#### RF-028 — Exibir notificações e a conta do usuário

| Campo | Conteúdo |
|---|---|
| Descrição | Central de avisos e tela "Minha conta". |
| Atores | Usuários autenticados |
| Prioridade | Média |
| Pré-condições | — |
| Comportamento esperado | Avisos com motivo, objeto e ação; "Marcar avisos como lidos não conclui tarefas"; Minha conta com usuário, e-mail, perfil, escopo, origem da autenticação, alterar senha, preferências e **Sair da conta**. Desde 15/11/2026 a central de avisos faz parte de "Notificações e acompanhamento" (RF-032). |
| Dependências | RF-012, RF-023, RF-032 |
| Critérios de aceitação | CA-019, CA-047 |
| Situação | Prototipado (T18; Notificações `7:10597`/`11:2443`). |

#### RF-029 — Integrar com o SIPAC

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "considerar a futura integração do sistema de portarias com outros sistemas presentes na instituição, como por exemplo SIPAC". |
| Atores | Sistema |
| Prioridade | Baixa (pode subir conforme D23) |
| Pré-condições | Resposta de D23. |
| Comportamento esperado | Referências externas sem apresentar integração inexistente como ativa. |
| Dependências | Levantamento 2.1.1 |
| Critérios de aceitação | Não há critério nesta fase (futuro). |
| Situação | Futuro. |

### 3.5 Estatísticas, relatórios e acompanhamento (acréscimos de 15/11/2026)

#### RF-030 — Consultar estatísticas administrativas

| Campo | Conteúdo |
|---|---|
| Descrição | Visão administrativa de todos os projetos de portaria, com indicadores, gráficos e filtros (pedido de 15/11/2026; plano de estatísticas v1.2 §17). |
| Atores | Gabinete e CGP (nível 3); Direção-Geral e Vice (nível 4); DEPE e DAP no escopo de H-D17 |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada com perfil autorizado. |
| Comportamento esperado | "Estatísticas administrativas" com as abas **Panorama**, **Tramitação**, **Pendências**, **Servidores** e **Relatórios**; filtros de recorte, departamento solicitante, servidor, tipo e estado; linha "Dados demonstrativos · calculado em …"; indicadores M01–M32 com unidade, base e método; gráficos C01–C12 (barras verticais e horizontais, pizza, rosca, linhas, área, empilhadas, comparativo por período e progresso), cada um com alternância Gráfico/Tabela. Estado atual, eventos históricos e situação de vigência não se somam. No celular, abas em duas linhas e filtros resumidos com "Ajustar filtros". |
| Dependências | RF-022, RF-031; RN-021, RN-022, RN-023, RN-025 |
| Critérios de aceitação | CA-045, CA-046 |
| Situação | Prototipado — Panorama `282:1848`/`282:10481`, Tramitação `318:5744`/`319:4985`, Servidores `318:5826`/`319:5002`; capturas E01, E02 e E03. Filtros são recortes predefinidos; combinações livres dependem da implementação. |

#### RF-031 — Gerar relatórios por período com prévia

| Campo | Conteúdo |
|---|---|
| Descrição | Relatórios semanais, mensais e por intervalo personalizado, com filtros, comparativos, gráficos, indicadores e detalhamento, e prévia do PDF (pedido de 15/11/2026). |
| Atores | Gabinete e CGP (nível 3); Direção-Geral e Vice (nível 4); demais perfis conforme RN-025 |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada com perfil autorizado. |
| Comportamento esperado | Escolha do período (semanal, mensal ou intervalo); nove recortes predefinidos, preservados ao trocar de período; prévia de cinco páginas A4 com identificação institucional, título e período, resumo executivo, indicadores gerais, gráficos, distribuição por situação, desempenho, pendências e gargalos, retrabalho, evolução, comparação com o período anterior e detalhamento; anterior/próxima página e edição do recorte; no celular, **Ler em texto ampliado** (16 px) com retorno à mesma página. **Exportar PDF** informa que o protótipo não gera arquivo. |
| Dependências | RF-021, RF-030; RN-021, RN-025 |
| Critérios de aceitação | CA-048 |
| Situação | Prototipado (parcial) — relatórios semanal `7:6744`, mensal `318:6728` e intervalo `318:6810` (computador); captura E06. A geração e o download reais, a marcação acessível do PDF e o registro de auditoria dependem da implementação. |

#### RF-032 — Acompanhar projetos de portaria e notificações

| Campo | Conteúdo |
|---|---|
| Descrição | Central "Notificações e acompanhamento" para que cada usuário acompanhe seus processos (pedido de 15/11/2026). |
| Atores | Todos os usuários autenticados, cada um no seu escopo |
| Prioridade | Alta |
| Pré-condições | Sessão iniciada. |
| Comportamento esperado | Abas **Pendências**, **Todas as atualizações** e **Lidos**; tabela "Ações pendentes" com projeto, ação necessária, responsável/setor e último evento; **Marcar avisos como lidos** sem concluir tarefas. O acompanhamento de um projeto mostra estado, etapa atual, situação do ato em R, responsável, setor, motivo da espera, última movimentação, ação necessária, progresso por marcos obrigatórios (concluídos / 6), linha do tempo, etapas concluídas e próximas etapas. Servidor vê só os próprios processos; conta externa recebe só avisos públicos. |
| Dependências | RF-023, RF-028; RN-022, RN-023, RN-024 |
| Critérios de aceitação | CA-047 |
| Situação | Prototipado — Notificações `7:10597`/`11:2443`, acompanhamento `318:6646`/`319:5172`; capturas E04 e E05. |

#### RF-033 — Alternar Texto, Participações e Prévia no editor

| Campo | Conteúdo |
|---|---|
| Descrição | Abas persistentes no editor de portarias: ao alternar, só a área de conteúdo muda (pedido de 15/11/2026). |
| Atores | Gabinete e CGP (nível 3); Direção-Geral e Vice (nível 4) |
| Prioridade | Média |
| Pré-condições | Minuta aberta no editor. |
| Comportamento esperado | Cabeçalho, navegação e estrutura preservados; aba selecionada destacada; retorno direto a qualquer aba; dados preservados (revisão 04 mantém seus membros; revisão 05 não restaura a presidência removida). A minuta, os artigos, as horas e a data de entrada em vigor são iguais no computador e no celular. |
| Dependências | RF-014 |
| Critérios de aceitação | CA-050 |
| Situação | Prototipado — revisões 04 e 05; captura E07. |

#### RF-034 — Oferecer acesso demonstrativo na entrada

| Campo | Conteúdo |
|---|---|
| Descrição | Área discreta "Acesso demonstrativo" para apresentar os quatro perfis (decisão de 15/11/2026). |
| Atores | Pessoa que apresenta o protótipo |
| Prioridade | Baixa |
| Pré-condições | — |
| Comportamento esperado | **Ver usuários demonstrativos** abre a escolha entre Usuário (externo), Helena, Marina e Eduardo; cada escolha mostra nome, usuário e senha fictícios, o aviso "Credenciais fictícias, apenas para apresentação", **Usar estas credenciais** e **Voltar ao login**. Escolher uma conta não concede permissões (RN-026). |
| Dependências | RF-001; RN-026 |
| Critérios de aceitação | CA-049 |
| Situação | Prototipado — capturas A03 e A04. Em produção, a área deve ser removida ou restrita a ambiente de teste. |

## 4. Itens fora do escopo

| Item | Motivo |
|---|---|
| Consulta pública de portarias sem login | RN1 |
| Autocadastro de contas | Plano §2.2; decisão de 11/11/2026 |
| Projeções, coortes e telemetria de uso nas estatísticas | Plano de estatísticas v1.2 (Apêndices A e B) |
| Geração real de PDF ou CSV no protótipo | O Figma demonstra só o fluxo visual e a prévia |
| Aplicativo nativo e uso offline | Plano §2.3 |
| Edição de memorandos | O sistema apenas os referencia |
