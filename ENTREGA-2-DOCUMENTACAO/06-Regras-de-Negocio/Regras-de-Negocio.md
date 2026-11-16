# Regras de Negócio — Gestor de Portarias

> **Artefato 6 da Entrega 2.** Regras do domínio extraídas do documento-fonte (07/04/2026), das decisões confirmadas pelo responsável em 11/11/2026 e 15/11/2026, do plano v3.2 e do plano de estatísticas v1.2. **Atualizado em 15/11/2026:** quatro níveis de acesso, entrada unificada e regras de estatísticas, notificações e acompanhamento. Cada regra indica sua **origem**, porque o documento-fonte é um rascunho e várias regras ainda são hipóteses de trabalho.

## 1. Classificação da origem

| Origem | Significado | Pode ir para produção? |
|---|---|---|
| **Fonte** | Texto do documento "Gestor de Portarias (Regras de Negócio)" — RN1 a RN7 ou narrativa | Sim, após confirmação de que o rascunho é a versão vigente |
| **Decisão confirmada** | Determinação do responsável registrada em 11/11/2026 ou 15/11/2026 (`PRODUCT.md`, `UX-CONTRACT.md`) | Sim, como decisão de projeto; recomenda-se validação institucional |
| **Hipótese (H-Dxx)** | Regra adotada no protótipo até a homologação da decisão Dxx | **Não**, antes da homologação |

## 2. Regra de negócio × decisão técnica

Regra de negócio define o que a instituição permite, exige ou recusa; decisão técnica define como o sistema implementa. Exemplos:

| Regra de negócio | Decisão técnica correspondente (não é regra) |
|---|---|
| Só usuários autenticados consultam portarias (RN-001) | Usar sessão com expiração e reautenticação |
| A recuperação de conta local é feita por link no e-mail cadastrado (RN-002) | Gerar token aleatório, com prazo e uso único |
| Docente não pode ter mais de 10 h em portaria administrativa (RN-007) | Validar o valor no formulário e no servidor |
| O nível de acesso decorre do perfil (RN-009) | Badge de nível (família `228:19`, oito variantes) exibido só depois do login; condições de dois ramos no protótipo |
| A versão assinada não é sobrescrita (RN-015) | Guardar hash da versão aprovada e do arquivo assinado |

As decisões técnicas e de interface estão em [Requisitos Não Funcionais](../05-Requisitos/Requisitos-Nao-Funcionais.md) e em `UX-CONTRACT.md`.

## 3. Índice

| ID | Título | Origem |
|---|---|---|
| RN-001 | Consulta somente por usuários autenticados | Fonte (RN1) |
| RN-002 | Recuperação de conta local por link no e-mail cadastrado | Fonte (RN2) |
| RN-003 | Recuperação de conta LDAP no serviço institucional | Fonte (RN3) |
| RN-004 | Campos mínimos da solicitação | Fonte (RN4) + hipótese D07 |
| RN-005 | Campos obrigatórios da elaboração | Fonte (RN5) + hipótese D07 |
| RN-006 | Validação antes da assinatura | Fonte (RN6) + hipótese D04 |
| RN-007 | Teto de 10 horas para docente em portaria administrativa | Fonte (RN7) + hipótese D06 |
| RN-008 | Elaboração por Gabinete, CGP e Direção; assinatura restrita à Direção | Fonte (narrativa) + decisão de 11/11 |
| RN-009 | Quatro níveis de acesso definidos pelo perfil | Decisão confirmada (11/11) |
| RN-010 | Entrada unificada; nível revelado só depois do login | Decisão confirmada (15/11) |
| RN-011 | Participação em portaria não concede acesso ao sistema | Fonte + decisão confirmada |
| RN-012 | Administração técnica não confere competência de negócio | Decisão confirmada |
| RN-013 | Comunicação aos membros após a publicação | Fonte (RF5) + hipótese D12 |
| RN-014 | Vencimento não encerra nem revoga automaticamente | Hipótese D14 (plano §6.3) |
| RN-015 | Documento assinado preservado; mudança gera novo ato | Fonte (narrativa) + hipótese D14 |
| RN-016 | Todos os campos do cadastro de servidor são obrigatórios | Fonte (narrativa) |
| RN-017 | Aluno e pessoa externa identificados por nome completo e CPF | Fonte (narrativa) |
| RN-018 | Portaria pode estar vinculada a um ou mais memorandos | Fonte (narrativa) |
| RN-019 | Alertas de vigência para renovação ou encerramento | Fonte (narrativa) + hipótese D13 |
| RN-020 | Vice-Diretor no nível 4 somente com autorização e no período | Decisão confirmada |
| RN-021 | Indicadores contam itens distintos em uma data de referência | Plano de estatísticas v1.2 §2 e §17 + hipótese D05 |
| RN-022 | Espera observada não é atraso sem prazo homologado | Plano de estatísticas v1.2 + hipótese D26 |
| RN-023 | Devolução, não aceite, cancelamento e revogação são distintos | Pedido de 15/11 + hipótese D28 |
| RN-024 | Ler um aviso não conclui a tarefa | Plano v3.2 (T20) + pedido de 15/11 |
| RN-025 | Relatórios e exportações não ampliam o acesso nem expõem dados pessoais | Plano v3.2 §8.2 + CA20 |
| RN-026 | Contas demonstrativas não concedem permissões | Decisão confirmada (15/11) |

## 4. Regras detalhadas

### RN-001 — Consulta somente por usuários autenticados

| Campo | Conteúdo |
|---|---|
| Descrição | "Sistema somente deve permitir o acesso (consulta) a portarias para usuários devidamente logados" (RN1). |
| Objetivo | Proteger minutas, dados operacionais e cadastrais. |
| Condições de aplicação | Busca, detalhe, documento e download, inclusive por URL direta. |
| Restrições | O sistema de gestão **não** é o canal público de divulgação; a divulgação oficial ocorre nos canais de publicação (plano §10). |
| Exceções | Nenhuma. A conta externa (nível 1) também exige login, na mesma entrada unificada. |
| Requisitos relacionados | RF-004, RF-019 |
| Critérios de validação | CA-041, CA-020 |

### RN-002 — Recuperação de conta local por link no e-mail cadastrado

| Campo | Conteúdo |
|---|---|
| Descrição | "A recuperação de senhas somente será feito via link enviado no email previamente cadastrado (quando a autenticação ocorrer via usuário cadastrado)" (RN2). |
| Objetivo | Garantir que só o titular do e-mail redefina a senha. |
| Condições de aplicação | Contas locais (servidores e contas externas). |
| Restrições | A resposta não revela se a conta existe; prazo e uso único do link definidos com a TI (plano §7.1). |
| Exceções | Contas LDAP seguem a RN-003. |
| Requisitos relacionados | RF-005, RF-006, RF-008 |
| Critérios de validação | CA-009, CA-010, CA-011, CA-012, CA-014 |

### RN-003 — Recuperação de conta LDAP no serviço institucional

| Campo | Conteúdo |
|---|---|
| Descrição | "A recuperação de senha, quando o acesso for via LDAP, deverá ser feito diretamente neste sistema de autenticação" (RN3). |
| Objetivo | Não duplicar a gestão de credenciais institucionais. |
| Condições de aplicação | Conta com origem LDAP. |
| Restrições | O Gestor não altera senha LDAP; apenas orienta. **Situação no protótipo:** a orientação ("A senha institucional é administrada pelo serviço de identidade do IFC") foi removida em 11/11/2026 junto com o Acesso institucional e não voltou na entrada unificada de 15/11/2026; a regra continua vigente e está sem representação (lacuna L06). |
| Exceções | — |
| Requisitos relacionados | RF-003, RF-007 |
| Critérios de validação | CA-013 |

### RN-004 — Campos mínimos da solicitação

| Campo | Conteúdo |
|---|---|
| Descrição | "A solicitação de portarias, deve considerar o preenchimento obrigatório mínimo, dos seguintes campos: assunto, membros e período de vigência" (RN4). |
| Objetivo | Garantir que o Gabinete receba informação suficiente para elaborar. |
| Condições de aplicação | Envio da solicitação (o rascunho pode ser incompleto — proposta do plano §5.1). |
| Restrições | **Variante V1 (literal):** membros sempre obrigatórios. **Variante V2 (hipótese D07):** membros dispensados para normativa e revogação. |
| Exceções | Demanda interna do emissor não exige solicitação (CA05 do plano). |
| Requisitos relacionados | RF-013 |
| Critérios de validação | CA-036 |

### RN-005 — Campos obrigatórios da elaboração

| Campo | Conteúdo |
|---|---|
| Descrição | "A elaboração da portaria deve considerar como campos obrigatórios: número da portaria; assunto; aprovação de membros indicados; carga horária individual; atribuição de presidência/vice-presidência" (RN5). |
| Objetivo | Garantir portaria completa antes da validação. |
| Condições de aplicação | Submissão para validação. |
| Restrições | A tabela por finalidade (designação, lotação, normativa, revogação) é **divergência da fonte** até a homologação de D07 (plano §5.2). |
| Exceções | Lotação: pessoa, setores e data de efeito, sem horas nem presidência (hipótese D20). |
| Requisitos relacionados | RF-014 |
| Critérios de validação | CA-032 |

### RN-006 — Validação antes da assinatura

| Campo | Conteúdo |
|---|---|
| Descrição | "Toda portaria deve ser validada pelo próprio gabinete, Diretor de Departamento e/ou CGP antes da assinatura do diretor geral" (RN6). |
| Objetivo | Assegurar conferência por quem responde pelas pessoas e pelo ato. |
| Condições de aplicação | Toda minuta antes da versão para assinatura. |
| Restrições | Hipótese H-D04: validações departamentais cumulativas (cada departamento valida seus membros) mais validação final do Gabinete/CGP. DEPE e DAP só alteram participações do próprio departamento. Ajuste durante a validação reabre aprovações afetadas (variante A). |
| Exceções | Membros externos ficam a cargo da validação final. |
| Requisitos relacionados | RF-015, RF-016 |
| Critérios de validação | CA-033 |

### RN-007 — Teto de 10 horas para docente em portaria administrativa

| Campo | Conteúdo |
|---|---|
| Descrição | "Servidor Professor/Docente não poderá ter portaria administrativa (comissões, núcleos e etc) com carga horária maior que 10h" (RN7). |
| Objetivo | Proteger a carga horária docente. |
| Condições de aplicação | Participação de docente em portaria administrativa. |
| Restrições | 10 h é permitido; acima é bloqueado na elaboração; na solicitação, apenas aviso (plano §5.1). Hipótese D06: teto **por portaria**; soma entre portarias só informativa. Nenhum gráfico ou relatório compara a soma de horas de um servidor com 10 h; a unidade é sempre h/semana atribuída (plano de estatísticas v1.2 §2.5). |
| Exceções | Técnicos e atividades não administrativas não recebem o teto automaticamente. |
| Requisitos relacionados | RF-013, RF-014 |
| Critérios de validação | CA-032 |

### RN-008 — Elaboração por Gabinete, CGP e Direção; assinatura restrita à Direção

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "Somente os departamentos Gabinete e Gestão de Pessoas tem incumbência e permissão criar portarias" e "Somente é assinante de portaria o Diretor Geral do Campus e seu nomeado Vice-Diretor". Pela decisão de 11/11/2026, a Direção-Geral e o Vice autorizado (nível 4) também têm acesso a todas as funções, inclusive elaboração. Gabinete e CGP (nível 3) elaboram, tramitam e publicam, mas não assinam. |
| Objetivo | Concentrar a emissão e a assinatura em quem tem competência. |
| Condições de aplicação | Elaboração e assinatura. |
| Restrições | Conta de nível 3 que encaminha um ato à assinatura vê "Aguardando assinatura", sem assumir o perfil do signatário. Servidores, DEPE, DAP e administrador técnico (nível 2) não elaboram portarias diretamente. |
| Exceções | — |
| Requisitos relacionados | RF-014, RF-016, RF-026 |
| Critérios de validação | CA-021, CA-022, CA-024 |

### RN-009 — Quatro níveis de acesso definidos pelo perfil

| Campo | Conteúdo |
|---|---|
| Descrição | **Nível 1 · Consulta:** conta externa/consultor, só portarias publicadas e documentos de divulgação. **Nível 2 · Acesso restrito:** docentes, técnicos, DEPE, DAP e administrador técnico, com permissões conforme função, departamento e etapa, sem elaboração direta de portarias. **Nível 3 · Operação:** Gabinete e Gestão de Pessoas (CGP/DGP) — elaboração, tramitação, validação quando autorizada, publicação e comunicação, sem assinatura nem configuração automática. **Nível 4 · Acesso total:** Direção-Geral e Vice-Diretor autorizado, todos os módulos e funções, inclusive elaboração, assinatura e administração. A decisão de 11/11/2026 substituiu o modelo anterior de três níveis. |
| Objetivo | Tornar o alcance de cada conta claro e verificável. |
| Condições de aplicação | Toda sessão. |
| Restrições | O nível é atribuído ao perfil autorizado; **não** é escolhido na entrada. Outros cargos de direção permanecem no nível 2. Permissão total não altera versões assinadas, não apaga histórico e não dispensa a competência vigente para assinar. |
| Exceções | — |
| Requisitos relacionados | RF-001, RF-012, RF-026 |
| Critérios de validação | CA-019, CA-020, CA-022 |

### RN-010 — Entrada unificada; nível revelado só depois do login

| Campo | Conteúdo |
|---|---|
| Descrição | Todas as contas, dos níveis 1 a 4, usam a mesma tela "Entrar" (Usuário, Senha, Esqueci minha senha, Entrar). Não há indicação de nível antes da autenticação, nem "Escolher outro acesso", nem botão "Acesso institucional". Perfil e nível aparecem só depois de Entrar. Decisão de 15/11/2026. |
| Objetivo | Manter a entrada limpa e evitar a impressão de que escolher uma entrada concede permissões. |
| Condições de aplicação | Telas de acesso. |
| Restrições | O ambiente da conta externa continua isolado: depois do login ela vê só "Portarias publicadas", "Minha conta" e avisos públicos. **Histórico:** em 11/11/2026 a entrada passou por duas versões — entrada de servidores com Acesso externo separado e, depois, quatro logins por nível —, ambas substituídas. |
| Exceções | — |
| Requisitos relacionados | RF-001, RF-003, RF-004, RF-034 |
| Critérios de validação | CA-005, CA-006, CA-007, CA-049 |

### RN-011 — Participação em portaria não concede acesso ao sistema

| Campo | Conteúdo |
|---|---|
| Descrição | Alunos e pessoas externas podem ser membros (fonte), mas o cadastro como participante não cria conta; a conta externa é habilitada separadamente (decisão de 11/11/2026). |
| Objetivo | Evitar acessos indevidos e autocadastro. |
| Condições de aplicação | Cadastro de participante e administração de contas. |
| Restrições | Não há autocadastro. |
| Exceções | — |
| Requisitos relacionados | RF-004, RF-024, RF-026 |
| Critérios de validação | CA-042 |

### RN-012 — Administração técnica não confere competência de negócio

| Campo | Conteúdo |
|---|---|
| Descrição | O administrador técnico gerencia contas, configurações e auditoria, mas não elabora, valida, assina ou publica por ser administrador, e não vê dados cadastrais sensíveis só por esse papel. |
| Objetivo | Separar poder técnico de competência administrativa. |
| Condições de aplicação | Perfil administrador. |
| Restrições | Esta regra **diverge** da leitura literal da fonte ("Administrador: Acesso total…"); foi adotada no plano (D02) e mantida pela decisão de 11/11/2026, que classifica o administrador técnico no nível 2. Nos relatórios e estatísticas, ele vê só eventos técnicos de geração, sem conteúdo nem indicadores de negócio. |
| Exceções | Se a mesma conta acumular papel de signatário, com autorização explícita. |
| Requisitos relacionados | RF-026 |
| Critérios de validação | CA-024 |

### RN-013 — Comunicação aos membros após a publicação

| Campo | Conteúdo |
|---|---|
| Descrição | RF5: e-mail aos membros da portaria "ora assinada e publicada", com participação, vigência e documento anexo. Hipótese D12: envio automático único **após a publicação concluída**. |
| Objetivo | Informar oficialmente a designação. |
| Condições de aplicação | Publicação concluída. |
| Restrições | E-mail não leva CPF; membro sem e-mail gera pendência para o emissor; comunicação alternativa e exceção autorizada são contadas separadamente do e-mail enviado. |
| Exceções | A narrativa da fonte fala em e-mail "uma vez assinada"; a divergência está registrada no plano §2.1. |
| Requisitos relacionados | RF-018 |
| Critérios de validação | CA-035 |

### RN-014 — Vencimento não encerra nem revoga automaticamente

| Campo | Conteúdo |
|---|---|
| Descrição | O fim da data de vigência gera sinalização e alertas, mas não equivale à conclusão da atividade, ao encerramento administrativo nem à revogação (plano §6.3). |
| Objetivo | Evitar perda de registro da conclusão real da atividade. |
| Condições de aplicação | Portarias com término. |
| Restrições | A situação "Vencida — sem encerramento" permanece até o registro do encerramento. |
| Exceções | Portarias sem término nunca ficam vencidas. |
| Requisitos relacionados | RF-020 |
| Critérios de validação | CA-038 |

### RN-015 — Documento assinado preservado; mudança gera novo ato

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: manter histórico e acesso aos documentos anteriores. Plano: minuta, versão aprovada e documento assinado são distintos; o assinado nunca é sobrescrito; renovação, alteração e substituição de membro geram ato vinculado (hipótese D14). |
| Objetivo | Garantir a integridade documental. |
| Condições de aplicação | Qualquer alteração após a aprovação. |
| Restrições | Editar a versão aprovada volta à minuta e invalida as aprovações. |
| Exceções | Retificação de lapso manifesto tem fluxo próprio (D14). |
| Requisitos relacionados | RF-014, RF-016, RF-027 |
| Critérios de validação | CA-040 |

### RN-016 — Todos os campos do cadastro de servidor são obrigatórios

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: nome, CPF, SIAPE, órgão de lotação, departamento, cargo, telefone, e-mail, endereço completo e chefia imediata — "Todas as informações presentes no cadastro de usuário devem ser consideradas obrigatórias". |
| Objetivo | Cadastro completo para participação e comunicação. |
| Condições de aplicação | Cadastro de servidor. |
| Restrições | O plano recomenda reavaliar a finalidade do endereço completo (minimização, D15), mantendo-o obrigatório enquanto a fonte exigir. A interface oferece inativar, não excluir. |
| Exceções | — |
| Requisitos relacionados | RF-024 |
| Critérios de validação | CA-042 |

### RN-017 — Aluno e pessoa externa identificados por nome completo e CPF

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: alunos e comunidade em geral podem ser membros "constando nome completo e seu respectivo CPF". |
| Objetivo | Identificar participantes sem vínculo funcional. |
| Condições de aplicação | Cadastro de participante. |
| Restrições | Não exigir SIAPE, cargo ou endereço; e-mail recomendado; atenção a alunos menores de idade (LGPD, art. 14). No documento publicado, identificação parcial (hipótese D21). |
| Exceções | — |
| Requisitos relacionados | RF-024 |
| Critérios de validação | CA-042 |

### RN-018 — Portaria pode estar vinculada a um ou mais memorandos

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "uma portaria poderá ter relação com 1 ou mais memorando para justificar sua elaboração/criação". |
| Objetivo | Rastrear a origem da demanda. |
| Condições de aplicação | Elaboração e consulta. |
| Restrições | O sistema apenas referencia memorandos; não os edita. |
| Exceções | A ausência de memorando não impede a demanda. |
| Requisitos relacionados | RF-025 |
| Critérios de validação | **Sem critério de aceitação definido** (lacuna registrada na Matriz). |

### RN-019 — Alertas de vigência para renovação ou encerramento

| Campo | Conteúdo |
|---|---|
| Descrição | Fonte: "monitorar os períodos de vigência de portarias de modo a emitir alertas para renovação e/ou fechamento". |
| Objetivo | Evitar portarias vencidas sem decisão. |
| Condições de aplicação | Portarias com término. |
| Restrições | Hipótese D13: avisos com 60, 30 e 7 dias e no dia seguinte ao vencimento; **sem mensagens reais** até a homologação. Alertas não executam ações automaticamente. |
| Exceções | Atos sem término não geram alerta de vencimento. |
| Requisitos relacionados | RF-020, RF-023 |
| Critérios de validação | CA-038 |

### RN-020 — Vice-Diretor no nível 4 somente com autorização e no período

| Campo | Conteúdo |
|---|---|
| Descrição | O Vice-Diretor tem as mesmas permissões da Direção-Geral "mediante autorização registrada e dentro do período de competência" (decisão de 11/11/2026). |
| Objetivo | Garantir que a assinatura ocorra com competência vigente. |
| Condições de aplicação | Assinatura e funções de nível 4 pelo Vice. |
| Restrições | Cargo ou cadastro de signatário isolado não concede nível 4; o ato e o período da autorização ficam explícitos (no protótipo, Sofia Ribeiro, 01/11 a 15/11/2026). |
| Exceções | — |
| Requisitos relacionados | RF-016, RF-026 |
| Critérios de validação | CA-022, CA-023 |

### RN-021 — Indicadores contam itens distintos em uma data de referência

| Campo | Conteúdo |
|---|---|
| Descrição | Todo indicador é calculado em uma data de referência R e conta **atos** ou **projetos** distintos, nunca versões nem membros. Estado atual do projeto, eventos históricos e situação de vigência do ato são dimensões separadas e não se somam. As seis situações de vigência somam os atos publicados; "Atualizadas" e revogações parciais ficam fora da soma. Dado indisponível aparece como "Não disponível", nunca como zero. |
| Objetivo | Garantir que painel, tabela e relatório deem o mesmo número para o mesmo recorte. |
| Condições de aplicação | Estatísticas, relatórios e prévias de PDF. |
| Restrições | O vocabulário de situações segue a hipótese D05 (plano v3.2 §6.1). Comparação com base anterior zero mostra diferença absoluta, sem percentual. |
| Exceções | — |
| Requisitos relacionados | RF-021, RF-022, RF-030, RF-031 |
| Critérios de validação | CA-039, CA-045, CA-046 |

### RN-022 — Espera observada não é atraso sem prazo homologado

| Campo | Conteúdo |
|---|---|
| Descrição | Enquanto não houver prazos por etapa homologados (D26), o sistema mostra duração observada e tempo sem movimentação, mas não rotula nenhum processo como atrasado. |
| Objetivo | Não criar cobrança com base em limites arbitrários. |
| Condições de aplicação | Tramitação, pendências, acompanhamento e relatórios. |
| Restrições | Contagem provisória em dias corridos. |
| Exceções | — |
| Requisitos relacionados | RF-030, RF-032 |
| Critérios de validação | CA-046 |

### RN-023 — Devolução, não aceite, cancelamento e revogação são distintos

| Campo | Conteúdo |
|---|---|
| Descrição | **Devolução** retorna o projeto para correção e ele continua em produção. **Não aceite** (rejeição) encerra a solicitação sem ato. **Cancelamento** retira um projeto antes da publicação. **Revogação** extingue os efeitos de um ato já publicado. Cada um tem contagem e motivo próprios. |
| Objetivo | Evitar dupla contagem e interpretações erradas de produtividade. |
| Condições de aplicação | Estatísticas (M12, M13, M19, M28), acompanhamento e relatórios. |
| Restrições | As classificações de não aceite e cancelamento são **demonstrativas** até a decisão D28. |
| Exceções | — |
| Requisitos relacionados | RF-030, RF-032 |
| Critérios de validação | CA-046 |

### RN-024 — Ler um aviso não conclui a tarefa

| Campo | Conteúdo |
|---|---|
| Descrição | Avisos (correção, aprovação, não aceite, conclusão) e tarefas abertas são separados. Marcar avisos como lidos não conclui nem remove tarefas. |
| Objetivo | Não perder pendências reais. |
| Condições de aplicação | Notificações, Pendências e Início. |
| Restrições | Progresso do acompanhamento = marcos obrigatórios concluídos / 6; a Revisão pode ser opcional ou reaberta; projetos não aceitos ou cancelados não recebem percentual. |
| Exceções | — |
| Requisitos relacionados | RF-023, RF-028, RF-032 |
| Critérios de validação | CA-037, CA-047 |

### RN-025 — Relatórios e exportações não ampliam o acesso nem expõem dados pessoais

| Campo | Conteúdo |
|---|---|
| Descrição | Um relatório só mostra o que a consulta de origem já permite ao perfil. Nenhum relatório inclui CPF, telefone, endereço ou e-mail. Conta externa não tem acesso a estatísticas internas; servidor vê só os próprios dados; DEPE/DAP têm o escopo de H-D17, com identificação nominal de outros departamentos restrita até D16. |
| Objetivo | Cumprir a LGPD (finalidade e necessidade) e o escopo de cada perfil. |
| Condições de aplicação | Consulta, geração, prévia e download de relatórios. |
| Restrições | A autorização é verificada de novo no servidor ao gerar e ao baixar (implementação futura). O protótipo não gera arquivos. |
| Exceções | — |
| Requisitos relacionados | RF-021, RF-031 |
| Critérios de validação | CA-020, CA-048 |

### RN-026 — Contas demonstrativas não concedem permissões

| Campo | Conteúdo |
|---|---|
| Descrição | A área "Acesso demonstrativo" da entrada mostra quatro contas fictícias (usuário externo, Helena Martins, Marina Costa e Eduardo Almeida) e suas credenciais de apresentação. Selecioná-las apenas preenche o formulário; a autorização continua sendo a da conta. |
| Objetivo | Permitir apresentações sem expor credenciais reais nem sugerir um atalho de permissões. |
| Condições de aplicação | Protótipo e ambientes de demonstração. |
| Restrições | Credenciais reais nunca aparecem. Em produção, a área deve ser removida ou restrita a ambiente de teste. |
| Exceções | — |
| Requisitos relacionados | RF-034 |
| Critérios de validação | CA-049 |

## 5. Pontos em aberto

| Tema | Situação | Referência |
|---|---|---|
| Frase interrompida na fonte ("As p…") | Pode conter regra perdida | D19 |
| "Acesso total" de DG e Administrador × exclusividade de emissão | Resolvido para DG e Vice pela decisão de 11/11 (nível 4); administrador classificado no nível 2 | D02, plano §3.3 |
| Prazos por etapa e calendário | Sem prazos, não há classificação de atraso | D26 (plano de estatísticas v1.2) |
| Classificação de não aceite e cancelamento | Demonstrativa no protótipo | D28 (plano de estatísticas v1.2) |
| Formato de exportação (só PDF ou PDF + CSV) | CSV continua no requisito até a decisão | D25 (plano de estatísticas v1.2) |
| Significado de "aceite" (RF4) | Hipótese: aceitar solicitação; ciência do membro e anuência da chefia como variantes | D04 |
| Canal oficial de publicação | Hipótese de registro por canal | D11 |
| Séries de numeração | Hipótese de duas séries por autoridade | D09 |
| Quem pode ser indicado (afastados, aposentados, externos) | Aviso sem bloqueio | D24 |
