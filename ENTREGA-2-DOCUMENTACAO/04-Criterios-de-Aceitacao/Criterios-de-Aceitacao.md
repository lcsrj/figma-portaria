# Critérios de Aceitação do Projeto — Gestor de Portarias

> **Artefato 4 da Entrega 2.** Critérios verificáveis no formato **Dado que / Quando / Então**. Eles complementam os critérios CA01–CA55 do plano v3.2 (§14), que tratam principalmente da implementação; a coluna "Plano" indica a correspondência.
>
> **Atualizado em 15/11/2026:** quatro níveis de acesso, entrada unificada com acesso demonstrativo e os critérios CA-045 a CA-050 de estatísticas, relatórios, notificações e editor.
>
> **Situação da evidência** (o que existe no projeto em 15/11/2026):
>
> - **Protótipo — captura:** comportamento visível em captura do Figma incluída em [Capturas](../07-Interfaces-do-Sistema/Capturas).
> - **Protótipo — registro de teste:** verificado por teste registrado no projeto (clique no protótipo ou avaliação das ações do Figma).
> - **Protótipo — especificação:** a tela existe segundo os registros de entrega, mas não há captura nem teste registrado.
> - **Implementação:** só verificável no software, que ainda não existe.
> - **Pendente:** a funcionalidade não foi prototipada.
>
> Nenhum teste novo foi executado no Figma durante esta documentação (não havia acesso ao arquivo); as evidências são as já registradas pelo projeto. Os registros de 15/11/2026 são avaliações interpretadas das ações do Figma, **sem cliques reais**.

## Índice

| Grupo | Critérios |
|---|---|
| [Acesso (Interface A)](#1-acesso-interface-a) | CA-001 a CA-008 |
| [Recuperação de senha (Interface B)](#2-recuperação-de-senha-interface-b) | CA-009 a CA-014 |
| [Início e menu (Interface C)](#3-início-e-menu-interface-c) | CA-015 a CA-020 |
| [Navegação e níveis](#4-navegação-e-níveis) | CA-021 a CA-026 |
| [Landing page](#5-landing-page) | CA-027 a CA-030 |
| [Fluxos principais](#6-fluxos-principais) | CA-031 a CA-042 |
| [Entregas](#7-entregas) | CA-043 e CA-044 |
| [Estatísticas, relatórios e acompanhamento](#8-estatísticas-relatórios-e-acompanhamento-acréscimos-de-15112026) | CA-045 a CA-050 |
| [Resumo](#9-resumo-da-evidência) | — |

---

## 1. Acesso (Interface A)

### CA-001 — Entrada unificada exibida

| Campo | Conteúdo |
|---|---|
| Descrição | A entrada apresenta todos os elementos de acesso. |
| Requisito | RF-001 |
| Pré-condições | Usuário sem sessão. |
| Comportamento | **Dado que** o usuário não está autenticado, **quando** abre o sistema, **então** vê o cabeçalho com a marca do IFC Campus Videira e "Gestão institucional de portarias", o título "Gestor de Portarias" com a finalidade do sistema, e o cartão "Entrar — Acesse com seu usuário e senha" com Usuário, Senha (com olho), "Esqueci minha senha", **Entrar** e, abaixo, "Apresentação com dados demonstrativos" com **Ver usuários demonstrativos**. Não há indicação de nível. |
| Condição de aprovação | Todos os elementos presentes e legíveis em computador e celular. |
| Método de validação | Inspeção visual do protótipo; teste por teclado na implementação. |
| Plano | CA01 (parcial) |
| Evidência | Protótipo — captura [A01](../07-Interfaces-do-Sistema/Capturas/A01-entrada-unificada-computador.png) e [A02](../07-Interfaces-do-Sistema/Capturas/A02-entrada-unificada-celular.png) (15/11/2026). |

### CA-002 — Entrada válida abre o Início

| Campo | Conteúdo |
|---|---|
| Descrição | Credenciais corretas levam ao Início do perfil. |
| Requisito | RF-001, RF-010 |
| Pré-condições | Conta habilitada. |
| Comportamento | **Dado que** Usuário e Senha estão preenchidos corretamente, **quando** o usuário aciona **Entrar**, **então** abre o Início correspondente ao perfil e ao nível da conta. |
| Condição de aprovação | Destino correto para cada perfil. |
| Método de validação | Protótipo: clique em Entrar no estado preenchido. Implementação: teste com contas de cada perfil. |
| Plano | — |
| Evidência | Protótipo — registro de teste: entrada e saída das quatro contas demonstrativas, incluídas nas 473 verificações interpretadas por classe (`.design/nov15/functional-delivery-D/M.json`); capturas C01, C02, C05 e C06. |

### CA-003 — Credenciais inválidas

| Campo | Conteúdo |
|---|---|
| Descrição | Erro de credenciais é explicado sem apagar o usuário. |
| Requisito | RF-001 |
| Pré-condições | — |
| Comportamento | **Dado que** a senha está incorreta, **quando** o usuário aciona **Entrar**, **então** aparece o aviso "Não foi possível entrar", a orientação junto ao campo e o usuário digitado permanece. |
| Condição de aprovação | Mensagem textual, não só por cor; nenhuma informação sobre qual campo existe no cadastro. |
| Método de validação | Inspeção do estado de erro; teste na implementação. |
| Plano | — |
| Evidência | Protótipo — especificação (quadros `5:58` e `8:1719`; texto "Revise este campo para continuar."). Sem captura atual. |

### CA-004 — Mostrar e ocultar senha

| Campo | Conteúdo |
|---|---|
| Descrição | O olho alterna a visibilidade da senha. |
| Requisito | RF-002 |
| Pré-condições | Senha preenchida. |
| Comportamento | **Dado que** a senha está mascarada, **quando** o usuário aciona o olho, **então** o texto aparece; **quando** aciona de novo, **então** volta a ser mascarado. |
| Condição de aprovação | Alternância nos dois sentidos; nome acessível descrevendo a ação (implementação). |
| Método de validação | Protótipo: propriedades do componente. Implementação: teclado e leitor de tela. |
| Plano | CA24 (parcial) |
| Evidência | Protótipo — registro de teste: `••••••••` → `SenhaDeExemplo2026` → `••••••••` (`.design/reference-password-test-2026-11-11.json`). |

### CA-005 — Entrada unificada, sem escolha de nível

| Campo | Conteúdo |
|---|---|
| Descrição | Não há botão "Acesso institucional", escolha de nível nem "Escolher outro acesso" na entrada. |
| Requisito | RF-001, RF-003 |
| Pré-condições | — |
| Comportamento | **Dado que** qualquer conta (níveis 1 a 4) abre a entrada, **então** usa o mesmo formulário, sem botão de acesso institucional, sem seletor de nível e sem selo de nível; **quando** entra, **então** o nível aparece. |
| Condição de aprovação | Zero ocorrências de "Acesso institucional", de selo de nível e de "Escolher outro acesso" na entrada. |
| Método de validação | Auditoria estrutural do arquivo Figma. |
| Plano | — |
| Evidência | Protótipo — captura A01 e A02 (15/11/2026); registro de teste: `institutional: []` nas auditorias de 11/11/2026 (`.design/levels-final-audit-D/M-2026-11-11.json`). |

### CA-006 — Conta externa entra pela entrada unificada

| Campo | Conteúdo |
|---|---|
| Descrição | A conta de nível 1 usa a mesma entrada e chega só à consulta publicada. |
| Requisito | RF-004 |
| Pré-condições | Conta externa habilitada. |
| Comportamento | **Dado que** a conta externa informa suas credenciais na entrada unificada, **quando** aciona **Entrar**, **então** chega a "Portarias publicadas", identificada como "Visitante autorizado · Acesso externo · Nível 1 · Consulta". |
| Condição de aprovação | Destinos corretos em computador e celular. |
| Método de validação | Clique no protótipo; avaliação das ações. |
| Plano | — |
| Evidência | Protótipo — captura [C06](../07-Interfaces-do-Sistema/Capturas/C06-consulta-externa-nivel1-computador.png) e [C07](../07-Interfaces-do-Sistema/Capturas/C07-consulta-externa-nivel1-celular.png) (15/11/2026); registro de teste da conta demonstrativa externa (`.design/nov15/functional-delivery-D/M.json`). Histórico: a entrada externa própria de 11/11 está em [historico A02](../07-Interfaces-do-Sistema/Capturas/historico-2026-11-11/A02-acesso-externo-computador.png). |

### CA-007 — Ambiente externo sem rota interna

| Campo | Conteúdo |
|---|---|
| Descrição | Nenhuma ação do ambiente externo leva a um módulo interno. |
| Requisito | RF-004; RN-010 |
| Pré-condições | Sessão de conta externa. |
| Comportamento | **Dado que** a conta externa está em "Portarias publicadas", "Minha conta" ou "Notificações", **quando** aciona qualquer ação, **então** permanece no ambiente externo ou sai para a entrada, sem sessão interna. |
| Condição de aprovação | Nenhuma rota do ambiente externo leva a módulo interno. |
| Método de validação | Auditoria estrutural. |
| Plano | — |
| Evidência | Protótipo — registro de teste: `externalInternalRoutes: []` nas auditorias de 11/11/2026; 12/12 verificações de escopo das notificações em 15/11/2026, com Avisos na barra móvel da conta externa sem dados internos (`.design/nov15/role-notifications-final.json`). |

### CA-008 — Sessão expirada e acesso negado

| Campo | Conteúdo |
|---|---|
| Descrição | Situações de sessão e permissão têm telas próprias. |
| Requisito | RF-009 |
| Pré-condições | Sessão expirada; ou ação fora da competência. |
| Comportamento | **Dado que** a sessão expirou, **quando** o usuário tenta continuar, **então** vê "Sua sessão expirou" e a informação de que o último rascunho salvo foi preservado. **Dado que** a ação não é permitida, **então** vê "Você não tem acesso a esta ação", com "Voltar ao início" e "Consultar portarias". |
| Condição de aprovação | Navegação utilizável; nenhum dado restrito exibido. |
| Método de validação | Inspeção do protótipo; teste na implementação. |
| Plano | CA01 |
| Evidência | Protótipo — especificação (`screens.js`: `sessionExpired`, `denied`). |

## 2. Recuperação de senha (Interface B)

### CA-009 — Pedido de recuperação

| Campo | Conteúdo |
|---|---|
| Descrição | O link "Esqueci minha senha" abre a recuperação. |
| Requisito | RF-005; RN-002 |
| Pré-condições | Usuário na entrada. |
| Comportamento | **Dado que** o usuário esqueceu a senha, **quando** aciona "Esqueci minha senha", **então** vê "Recupere seu acesso — Informe o e-mail associado à sua conta local.", o campo "E-mail institucional", **Enviar instruções** e "Voltar ao acesso". |
| Condição de aprovação | Elementos presentes; retorno ao acesso funcional. |
| Método de validação | Clique no protótipo. |
| Plano | CA02 |
| Evidência | Protótipo — captura histórica [B01](../07-Interfaces-do-Sistema/Capturas/historico-2026-11-11/B01-recuperar-acesso-celular.png) (11/11/2026); registro de clique Recuperar (`5:92`) → Confira seu e-mail (`5:118`) em `ENTREGA_FIGMA.md`. |

### CA-010 — Confirmação sem revelar a conta

| Campo | Conteúdo |
|---|---|
| Descrição | A confirmação é a mesma para e-mail cadastrado ou não. |
| Requisito | RF-005; RN-002; RNF-002 |
| Pré-condições | Pedido enviado. |
| Comportamento | **Dado que** o usuário enviou o pedido, **então** vê "Confira seu e-mail — Se houver uma conta local vinculada, você receberá as instruções para definir uma nova senha.", o aviso "Instruções solicitadas — O link tem validade limitada. Verifique também a pasta de spam." |
| Condição de aprovação | Texto não afirma que a conta existe; resposta do servidor idêntica nos dois casos (implementação). |
| Método de validação | Inspeção do protótipo; teste de API. |
| Plano | CA02 |
| Evidência | Protótipo — captura [B02](../07-Interfaces-do-Sistema/Capturas/B02-confira-seu-email-computador.png), [B03](../07-Interfaces-do-Sistema/Capturas/B03-confira-seu-email-celular.png). Comportamento do servidor: Implementação. |

### CA-011 — Reenvio de instruções

| Campo | Conteúdo |
|---|---|
| Descrição | O reenvio confirma na própria tela. |
| Requisito | RF-005 |
| Pré-condições | Tela "Confira seu e-mail". |
| Comportamento | **Dado que** o e-mail não chegou, **quando** o usuário aciona **Reenviar instruções**, **então** permanece na mesma tela e vê "Instruções reenviadas". |
| Condição de aprovação | Sem troca de tela; sem envio duplicado na implementação. |
| Método de validação | Clique no protótipo. |
| Plano | — |
| Evidência | Protótipo — registro de teste: reenvio permanece em `5:118` e mostra "Instruções reenviadas" (`DESIGN.md`, §Feedback e recuperação). |

### CA-012 — Definir nova senha

| Campo | Conteúdo |
|---|---|
| Descrição | O link leva à redefinição. |
| Requisito | RF-006 |
| Pré-condições | Link válido. |
| Comportamento | **Dado que** o usuário abriu o link, **então** vê "Defina uma nova senha", "Nova senha", "Confirme a senha" e **Salvar nova senha**; **quando** salva, **então** vê a conclusão e pode voltar ao acesso. **Dado que** o link expirou ou já foi usado, **então** vê a orientação para pedir outro (implementação). |
| Condição de aprovação | Fluxo completo; senha antiga deixa de valer (implementação). |
| Método de validação | Clique no protótipo; teste na implementação. |
| Plano | CA02 |
| Evidência | Protótipo — registro de clique "Abrir link de recuperação" → redefinição (`5:143`). Link expirado: Implementação (o protótipo não tem esse estado registrado). |

### CA-013 — Orientação para conta institucional

| Campo | Conteúdo |
|---|---|
| Descrição | Conta LDAP é orientada ao serviço do IFC. |
| Requisito | RF-007; RN-003 |
| Pré-condições | Tela de recuperação. |
| Comportamento | **Dado que** o usuário usa conta institucional, **quando** lê o bloco "Usa a conta institucional?", **então** é informado de que a senha é administrada pelo serviço de identidade do IFC e pode acionar "Ver orientação". |
| Condição de aprovação | O sistema não oferece redefinição local para conta LDAP. |
| Método de validação | Inspeção do protótipo. |
| Plano | CA02 |
| Evidência | **Pendente.** A captura histórica [B01](../07-Interfaces-do-Sistema/Capturas/historico-2026-11-11/B01-recuperar-acesso-celular.png) (08h06 de 11/11/2026) mostra o bloco, mas ele foi removido de todos os quadros na mesma data, junto com o Acesso institucional (`.design/access-levels-external-2026-11-11.js`), e não voltou na entrada unificada de 15/11/2026. O protótipo atual não atende a este critério (lacuna L06 no README). |

### CA-014 — Recuperação própria do acesso externo

| Campo | Conteúdo |
|---|---|
| Descrição | A conta externa tem recuperação separada. |
| Requisito | RF-008 |
| Pré-condições | Conta externa com e-mail cadastrado. |
| Comportamento | **Dado que** a conta externa esqueceu a senha, **quando** aciona "Esqueci minha senha", **então** segue um fluxo de recuperação e redefinição que não passa por telas internas e retorna à entrada. |
| Condição de aprovação | Fluxo não passa por telas internas. |
| Método de validação | Clique no protótipo. |
| Plano | — |
| Evidência | Protótipo — especificação: quadros próprios `236:1694`, `236:1721`, `236:1753` e `236:1784` criados em 11/11/2026 para a entrada externa da época (`.design/levels-recovery-D/M-2026-11-11.json`). O caminho a partir da entrada unificada de 15/11/2026 **não foi reverificado**. Sem captura local. |

## 3. Início e menu (Interface C)

### CA-015 — Início mostra a próxima ação do perfil

| Campo | Conteúdo |
|---|---|
| Descrição | O Início prioriza o trabalho do usuário. |
| Requisito | RF-010 |
| Pré-condições | Sessão iniciada. |
| Comportamento | **Dado que** uma servidora do Gabinete entra, **então** vê "Bom dia, Marina", "Atualizado às 12h05", o aviso "3 pendências precisam de atenção" com "Abrir pendências", a tabela "Na sua mesa" (portaria, próxima ação, responsável), "Vencimentos próximos" e as ações **Nova portaria** e **Ver solicitações**. **Dado que** o Diretor-Geral entra, **então** vê "Gestão da plataforma", "Nível 4 · Todos os módulos, assinatura e administração.", **Elaborar portaria**, **Administração** e "Sua assinatura". **Dado que** uma servidora docente entra, **então** vê "Meu acompanhamento" com Minhas pendências, Minhas participações e Minhas horas (h/semana, soma informativa). |
| Condição de aprovação | Conteúdo correto por perfil; nenhuma informação de outro perfil. |
| Método de validação | Inspeção do protótipo; teste de usabilidade. |
| Plano | CA33 (contadores) |
| Evidência | Protótipo — captura [C01](../07-Interfaces-do-Sistema/Capturas/C01-inicio-gabinete-nivel3-computador.png), [C02](../07-Interfaces-do-Sistema/Capturas/C02-inicio-direcao-geral-nivel4-computador.png), [C03](../07-Interfaces-do-Sistema/Capturas/C03-inicio-direcao-geral-nivel4-celular.png), [C05](../07-Interfaces-do-Sistema/Capturas/C05-inicio-servidor-nivel2-computador.png) (15/11/2026). |

### CA-016 — Menu lateral com os módulos do perfil

| Campo | Conteúdo |
|---|---|
| Descrição | O menu mostra somente o que o perfil pode usar. |
| Requisito | RF-011 |
| Pré-condições | Sessão iniciada (computador). |
| Comportamento | **Dado que** a conta é do Gabinete (nível 3), **então** o menu lista Início, Solicitações, Portarias, Pendências, Vencimentos, Notificações, Relatórios, Servidores, Participantes externos e Memorandos e processos, com o item atual destacado. **Dado que** a conta é da Direção-Geral (nível 4), **então** também aparecem Administração e Assinaturas. **Dado que** é uma servidora docente (nível 2), **então** vê Início, Solicitações, Portarias e Notificações. **Dado que** é o administrador técnico, **então** vê Início e Administração. |
| Condição de aprovação | Itens corretos por perfil; destaque com fundo e texto, não só cor. |
| Método de validação | Inspeção do protótipo. |
| Plano | CA04 |
| Evidência | Protótipo — captura C01, C02, C05, [C04](../07-Interfaces-do-Sistema/Capturas/C04-contas-e-niveis-administracao-computador.png). |

### CA-017 — Menu móvel retorna à tarefa

| Campo | Conteúdo |
|---|---|
| Descrição | No celular, o menu fica recolhido e não faz perder o contexto. |
| Requisito | RF-011 |
| Pré-condições | Sessão no celular. |
| Comportamento | **Dado que** o usuário está em uma tarefa no celular, **quando** abre o menu (ícone de três linhas), **então** o menu entra lateralmente; **quando** aciona **Fechar**, **então** volta exatamente ao quadro de origem. |
| Condição de aprovação | Retorno à mesma tarefa; perfil preservado. |
| Método de validação | Clique no protótipo. |
| Plano | — |
| Evidência | Protótipo — registro de teste: Solicitações → Nova solicitação → menu do Gabinete → Fechar → mesma solicitação (`ENTREGA_FIGMA.md`, 28/10/2026); captura C03 com o menu recolhido. |

### CA-018 — Atalhos do Início abrem a tela certa

| Campo | Conteúdo |
|---|---|
| Descrição | Cada linha e ação do Início leva ao objeto correspondente. |
| Requisito | RF-010 |
| Pré-condições | Início aberto. |
| Comportamento | **Dado que** o usuário está no Início do Gabinete, **quando** aciona "SOL-2026-042", **então** abre o detalhe da solicitação; **quando** aciona "Abrir pendências", **então** abre a caixa de pendências. |
| Condição de aprovação | Zero destinos ausentes. |
| Método de validação | Auditoria estrutural; clique. |
| Plano | CA33 |
| Evidência | Protótipo — registro de teste: `missing: []` nas auditorias finais; destinos em `screens.js` (`home`). |

### CA-019 — Identificação da conta, nível e saída

| Campo | Conteúdo |
|---|---|
| Descrição | A conta ativa é sempre identificável. |
| Requisito | RF-012, RF-028; RN-009 |
| Pré-condições | Sessão iniciada. |
| Comportamento | **Dado que** o usuário está autenticado, **então** vê seu nome, papel e selo de nível ("Nível 1 · Consulta", "Nível 2 · Acesso restrito", "Nível 3 · Operação", "Nível 4 · Acesso total") no rodapé do menu (computador) ou no cabeçalho (celular), nunca antes do login; **quando** aciona **Sair**, **então** volta à entrada sem a sessão de gestão. |
| Condição de aprovação | Selo presente em todas as contas internas; nível com rótulo textual. |
| Método de validação | Auditoria estrutural. |
| Plano | — |
| Evidência | Protótipo — captura C01, C02, C03, C05, C06; registro de teste: `unbadged: []` nas auditorias de 11/11/2026 e escala 1–4 aplicada aos selos, contas e catálogo (`ENTREGA_QUATRO_NIVEIS_FIGMA_2026-11-11.md`, 138/138 verificações). |

### CA-020 — Ambiente externo sem módulos internos

| Campo | Conteúdo |
|---|---|
| Descrição | A conta externa vê apenas portarias publicadas e sua conta. |
| Requisito | RF-004, RF-019; RN-001, RN-009 |
| Pré-condições | Conta externa autenticada. |
| Comportamento | **Dado que** a conta é de nível 1, **então** o menu tem só "Portarias publicadas", "Minha conta" e "Notificações" (avisos públicos), o selo "Nível 1 · Consulta" e **Sair**; a busca é "Buscar por número ou assunto"; não aparecem minutas, dados cadastrais privados, solicitações, validação, assinatura, estatísticas, relatórios ou administração. |
| Condição de aprovação | Nenhum módulo interno acessível. |
| Método de validação | Auditoria estrutural; teste de API na implementação. |
| Plano | CA01 |
| Evidência | Protótipo — captura C06 e C07 (15/11/2026); registro de teste (lista, detalhe e documento externos aprovados nas duas classes em 11/11/2026; escopo de notificações 12/12 em 15/11/2026). |

## 4. Navegação e níveis

### CA-021 — Nível 3 aguarda a assinatura

| Campo | Conteúdo |
|---|---|
| Descrição | Quem não assina vê espera, não a tela do signatário. |
| Requisito | RF-016; RN-008 |
| Pré-condições | Conta de nível 3 (Gabinete ou CGP) com minuta aprovada. |
| Comportamento | **Dado que** uma conta de nível 3 encaminha o ato à assinatura, **então** vê "Aguardando assinatura da Direção", sem assumir o perfil do signatário. |
| Condição de aprovação | Nenhum atalho dos níveis 2 ou 3 para a tela de assinatura. |
| Método de validação | Avaliação das ações do protótipo. |
| Plano | CA12 |
| Evidência | Protótipo — registro de teste da espera aprovado nas duas classes (`levels-navigation-tests-2026-11-11.json`; `directStaffSign: []`); selo da espera alinhado ao nível 3 em `.design/four-levels-waiting-fix-2026-11-11.json`. |

### CA-022 — Nível 4 segue para a própria assinatura

| Campo | Conteúdo |
|---|---|
| Descrição | Direção-Geral e Vice autorizado assinam com a própria identidade. |
| Requisito | RF-016; RN-009, RN-020 |
| Pré-condições | Conta de nível 4. |
| Comportamento | **Dado que** a conta é da Direção-Geral, **quando** encaminha à assinatura, **então** passa por "Preparando o documento para assinatura" (com nome e "Nível 4 · Acesso total") e chega à própria assinatura; o mesmo para o Vice autorizado. |
| Condição de aprovação | Identidade correta em cada caso. |
| Método de validação | Avaliação das ações do protótipo. |
| Plano | CA12 |
| Evidência | Protótipo — registros de teste da DG e do Vice aprovados nas duas classes (`levels-navigation-tests-2026-11-11.json`) e escala 1–4 nos percursos de assinatura (`four-levels-navigation-tests-2026-11-11.json`, 138/138). A captura da transição é anterior à escala 1–4 e mostra o selo antigo "Nível 3" ([histórico C05](../07-Interfaces-do-Sistema/Capturas/historico-2026-11-11/C05-transicao-preparando-assinatura-nivel3.png)). |

### CA-023 — Vice preserva a identidade

| Campo | Conteúdo |
|---|---|
| Descrição | Ao navegar, a identidade do Vice não é trocada pela da Direção-Geral. |
| Requisito | RF-016; RN-020 |
| Pré-condições | Sessão do Vice autorizado. |
| Comportamento | **Dado que** o Vice está em um módulo compartilhado, **quando** navega para Solicitações, **então** continua identificado como Vice (nome e papel próprios). |
| Condição de aprovação | Identidade mantida em todos os módulos. |
| Método de validação | Avaliação das ações do protótipo. |
| Plano | — |
| Evidência | Protótipo — registro de teste "Vice preserva identidade ao navegar" aprovado. |

### CA-024 — Administrador técnico sem competência de negócio

| Campo | Conteúdo |
|---|---|
| Descrição | Administrar contas não permite assinar, validar ou publicar. |
| Requisito | RF-026; RN-012 |
| Pré-condições | Conta de administrador técnico. |
| Comportamento | **Dado que** a conta é de administrador técnico (nível 2), **então** o menu oferece Início e Administração, o catálogo informa que "O perfil técnico não concede assinatura, validação ou publicação de atos", e não há ação de assinatura. |
| Condição de aprovação | Ação recusada também no servidor (implementação). |
| Método de validação | Inspeção do protótipo; teste de API. |
| Plano | CA12 |
| Evidência | Protótipo — captura C04 (André Souza, "Administrador técnico · Nível 2"). Recusa no servidor: Implementação. |

### CA-025 — Navegação sem destinos ausentes

| Campo | Conteúdo |
|---|---|
| Descrição | Todas as ações do protótipo levam a um quadro existente. |
| Requisito | Todos os RF prototipados |
| Pré-condições | — |
| Comportamento | **Dado que** o protótipo é auditado, **quando** a auditoria verifica cada ação de navegação, **então** não encontra destino ausente. |
| Condição de aprovação | Zero destinos ausentes. |
| Método de validação | Auditoria estrutural automatizada. |
| Plano | — |
| Evidência | Protótipo — registro de teste: 497 quadros sem destino ausente na auditoria dos quatro níveis (11/11/2026); 94 + 92 quadros de estatísticas (11/11/2026); 132 + 142 telas alteradas em 15/11/2026 (`.design/nov15/audit-delivery-final-D.json`, `audit-delivery-M.json`), todas com lista de falhas vazia. Etapa anterior: 236 quadros e 4.950 interações (computador) e 239 quadros e 1.953 interações (celular). |

### CA-026 — Abas locais preservadas

| Campo | Conteúdo |
|---|---|
| Descrição | As abas de um módulo continuam disponíveis entre as vistas. |
| Requisito | RF-011 |
| Pré-condições | — |
| Comportamento | **Dado que** o usuário está em Pendências, **quando** alterna entre "Da minha unidade", "Minhas" e "Informações", **então** as três abas continuam visíveis e "Informações" não abre Notificações. |
| Condição de aprovação | Seleção coerente com o conteúdo. |
| Método de validação | Clique no protótipo. |
| Plano | — |
| Evidência | Protótipo — registro de teste (cliques de 23/10/2026 em `ENTREGA_FIGMA.md`; 75 grupos de abas no computador e 76 no celular). |

## 5. Landing page

> A landing page **não existe** no protótipo. Os critérios abaixo valem para a especificação proposta no [Artefato 9](../09-Landing-Page/Documentacao-Landing-Page.md) e ficam pendentes.

### CA-027 — Apresentação sem dados de portarias

| Campo | Conteúdo |
|---|---|
| Descrição | A página apresenta o sistema sem violar a RN1. |
| Requisito | Artefato 9; RN-001 |
| Pré-condições | Visitante sem login. |
| Comportamento | **Dado que** um visitante abre a landing page, **então** vê o propósito do sistema, o processo e os benefícios, **sem** lista, busca, número, assunto ou documento de portaria. |
| Condição de aprovação | Nenhum dado de portaria nem dado pessoal na página. |
| Método de validação | Inspeção do protótipo e da página publicada. |
| Plano | CA01 |
| Evidência | Pendente. |

### CA-028 — Chamadas para as entradas

| Campo | Conteúdo |
|---|---|
| Descrição | As ações levam às entradas existentes. |
| Requisito | Artefato 9; RF-001, RF-004 |
| Pré-condições | — |
| Comportamento | **Dado que** o visitante está na landing page, **quando** aciona "Entrar", **então** abre a entrada unificada (a mesma para todos os níveis). |
| Condição de aprovação | Destinos corretos; nenhum autocadastro. |
| Método de validação | Clique. |
| Plano | — |
| Evidência | Pendente. |

### CA-029 — Landing responsiva

| Campo | Conteúdo |
|---|---|
| Descrição | A página funciona de 360 a 1920 px. |
| Requisito | Artefato 9; RNF-008 |
| Pré-condições | — |
| Comportamento | **Dado que** a página é aberta em 360, 768, 1280 e 1440 px, **então** não há rolagem horizontal, corte de texto ou foto distorcida. |
| Condição de aprovação | Zero transbordamentos. |
| Método de validação | Inspeção em cada largura. |
| Plano | — |
| Evidência | Pendente. |

### CA-030 — Landing acessível

| Campo | Conteúdo |
|---|---|
| Descrição | A página atende WCAG 2.2 AA. |
| Requisito | Artefato 9; RNF-007 |
| Pré-condições | — |
| Comportamento | **Dado que** um usuário de teclado ou leitor de tela abre a página, **então** encontra "Ir para o conteúdo", títulos em ordem, imagens com texto alternativo e foco visível. |
| Condição de aprovação | Critérios aplicáveis verificados. |
| Método de validação | Checklist WCAG/eMAG; NVDA. |
| Plano | CA30 |
| Evidência | Pendente. |

## 6. Fluxos principais

### CA-031 — Busca de portarias

| Campo | Conteúdo |
|---|---|
| Descrição | Os quatro filtros da fonte funcionam. |
| Requisito | RF-019 |
| Pré-condições | Sessão iniciada. |
| Comportamento | **Dado que** o usuário filtra por nome de servidor, assunto, número ou período, **então** a lista mostra só as portarias correspondentes, com a semântica do período explícita; **quando** volta do detalhe, **então** os filtros permanecem. |
| Condição de aprovação | Filtros de RF6 operando. |
| Método de validação | Teste na implementação. |
| Plano | CA15 |
| Evidência | Protótipo — especificação (T06); Implementação. |

### CA-032 — Elaboração com obrigatórios e teto de horas

| Campo | Conteúdo |
|---|---|
| Descrição | A elaboração aplica RN5 e RN7. |
| Requisito | RF-014; RN-005, RN-007 |
| Pré-condições | Minuta em edição. |
| Comportamento | **Dado que** faltam número, assunto, membros, horas ou presidência, **quando** o emissor submete, **então** o avanço é bloqueado com a lista de pendências. **Dado que** um docente recebe 10 h em portaria administrativa, **então** o valor é aceito; **dado que** recebe mais de 10 h, **então** é bloqueado. |
| Condição de aprovação | Bloqueio correto conforme a variante de D07. |
| Método de validação | Teste na implementação. |
| Plano | CA08, CA10, CA18 |
| Evidência | Protótipo — especificação (T08); Implementação. |

### CA-033 — Validação por departamento

| Campo | Conteúdo |
|---|---|
| Descrição | DEPE e DAP validam só o próprio escopo. |
| Requisito | RF-015; RN-006 |
| Pré-condições | Minuta em validação. |
| Comportamento | **Dado que** a DEPE ajusta horas de um servidor seu, **então** é criada nova revisão e a validação final é reaberta. **Dado que** tenta alterar membro de outro departamento, **então** a alteração é recusada. |
| Condição de aprovação | Escopo respeitado. |
| Método de validação | Teste na implementação. |
| Plano | CA09, CA11 |
| Evidência | Protótipo — especificação (T09; J03); Implementação. |

### CA-034 — Assinatura com verificação

| Campo | Conteúdo |
|---|---|
| Descrição | A portaria só fica assinada após a verificação. |
| Requisito | RF-016 |
| Pré-condições | Versão aprovada. |
| Comportamento | **Dado que** o arquivo assinado foi anexado, **então** a situação é "Em verificação"; **dado que** o signatário não tinha competência na data ou o arquivo é de outra versão, **então** fica "Recusada na verificação" com o motivo. |
| Condição de aprovação | Nenhuma portaria assinada sem verificação. |
| Método de validação | Teste na implementação. |
| Plano | CA12, CA36 |
| Evidência | Protótipo — especificação (T10); Implementação. |

### CA-035 — Publicação e comunicação aos membros

| Campo | Conteúdo |
|---|---|
| Descrição | O e-mail só sai após a publicação; falhas viram tarefa. |
| Requisito | RF-017, RF-018; RN-013 |
| Pré-condições | Assinatura verificada. |
| Comportamento | **Dado que** a publicação foi concluída, **então** os membros recebem e-mail uma única vez; **dado que** um membro não tem contato, **então** a publicação continua concluída e surge a tarefa "Tratar comunicação". |
| Condição de aprovação | Nenhum e-mail antes da publicação; nenhum envio duplicado. |
| Método de validação | Teste na implementação. |
| Plano | CA13, CA14, CA40, CA49, CA54 |
| Evidência | Protótipo — especificação (T11); Implementação. |

### CA-036 — Solicitação com campos mínimos

| Campo | Conteúdo |
|---|---|
| Descrição | A solicitação aplica a RN4. |
| Requisito | RF-013; RN-004 |
| Pré-condições | Servidor autenticado. |
| Comportamento | **Dado que** faltam assunto, membros ou vigência, **quando** o servidor envia, **então** o envio é bloqueado com erro específico e o rascunho é preservado. |
| Condição de aprovação | Conforme a variante aprovada de D07. |
| Método de validação | Teste na implementação; teste de usabilidade (J01). |
| Plano | CA03 |
| Evidência | Protótipo — registro de teste: Solicitações → Nova solicitação → preenchimento → rascunho (`ENTREGA_FIGMA.md`). |

### CA-037 — Caixa de pendências

| Campo | Conteúdo |
|---|---|
| Descrição | Tarefas compartilhadas e alertas são tratados corretamente. |
| Requisito | RF-023 |
| Pré-condições | — |
| Comportamento | **Dado que** uma tarefa da fila do Gabinete é concluída por uma pessoa, **então** sai da fila para todos com o aviso de quem concluiu; **dado que** um aviso é descartado, **então** a tarefa associada continua aberta. |
| Condição de aprovação | Contadores do Início e da caixa conferem. |
| Método de validação | Teste na implementação. |
| Plano | CA33 |
| Evidência | Protótipo — especificação (T20); Implementação. |

### CA-038 — Vigências e vencimentos

| Campo | Conteúdo |
|---|---|
| Descrição | O vencimento é sinalizado sem encerrar o ato. |
| Requisito | RF-020; RN-014, RN-019 |
| Pré-condições | Portaria com término passado. |
| Comportamento | **Dado que** a vigência terminou sem registro de encerramento, **então** a portaria aparece como "Vencida — sem encerramento" (no protótipo, "Expirada") com a ação "Avaliar encerramento"; não é encerrada nem revogada automaticamente. |
| Condição de aprovação | Situação correta pela data de referência. |
| Método de validação | Clique no protótipo; teste na implementação. |
| Plano | CA16, CA39 |
| Evidência | Protótipo — registro de teste: cinco abas de Vencimentos clicadas (`ENTREGA_FIGMA.md`). Observação: o protótipo usa o rótulo "Expirada", diferente do termo do plano (lacuna L07). |

### CA-039 — Relatórios e painel

| Campo | Conteúdo |
|---|---|
| Descrição | Totais conferem entre relatórios e painel. |
| Requisito | RF-021, RF-022 |
| Pré-condições | — |
| Comportamento | **Dado que** relatórios e painel usam a mesma data de referência, **então** os totais conferem, contando atos e não membros ou versões. |
| Condição de aprovação | Totais idênticos. |
| Método de validação | Teste na implementação. |
| Plano | CA19, CA25 |
| Evidência | Protótipo — registro de teste: cenário reconciliado entre consultas e prévias (12/12, `.design/statistics-scenario-checks.json`); ver também CA-045. Serviço único de métricas: Implementação. |

### CA-040 — Histórico e versões preservados

| Campo | Conteúdo |
|---|---|
| Descrição | Documento assinado não é sobrescrito. |
| Requisito | RF-027; RN-015 |
| Pré-condições | Portaria assinada. |
| Comportamento | **Dado que** o usuário abre a aba Documento de uma portaria assinada, **então** vê o documento assinado e a aba não retorna à minuta; **dado que** é preciso mudar o ato, **então** é criada nova minuta ou novo ato vinculado. |
| Condição de aprovação | Versões distintas e identificadas. |
| Método de validação | Clique no protótipo. |
| Plano | CA17, CA32, CA35, CA51 |
| Evidência | Protótipo — registro de teste: correção do retorno indevido da aba Documento à minuta (`.impeccable/review/routing-fix/parecer.md`). |

### CA-041 — Consulta exige login

| Campo | Conteúdo |
|---|---|
| Descrição | RN1 também por URL direta. |
| Requisito | RF-019; RN-001 |
| Pré-condições | Visitante sem sessão. |
| Comportamento | **Dado que** um visitante tenta abrir busca, detalhe ou arquivo por URL direta, **então** é encaminhado à entrada. |
| Condição de aprovação | Nenhum conteúdo de portaria sem sessão. |
| Método de validação | Teste na implementação. |
| Plano | CA01 |
| Evidência | Implementação. |

### CA-042 — Cadastros e dados pessoais

| Campo | Conteúdo |
|---|---|
| Descrição | Cadastros completos, dados mascarados e participação sem conta. |
| Requisito | RF-024; RN-011, RN-016, RN-017 |
| Pré-condições | — |
| Comportamento | **Dado que** falta um campo obrigatório no cadastro de servidor, **então** o cadastro não é concluído e os valores são preservados. **Dado que** um participante externo é cadastrado, **então** o CPF aparece mascarado e a tela informa que o cadastro não cria conta. |
| Condição de aprovação | Nenhum CPF completo em listas, e-mails ou exportações. |
| Método de validação | Inspeção do protótipo; teste na implementação. |
| Plano | CA06, CA07, CA26, CA31 |
| Evidência | Protótipo — especificação (`screens.js`: `externalNew`, `externalDetail`). |

## 7. Entregas

### CA-043 — Protótipo completo

| Campo | Conteúdo |
|---|---|
| Descrição | O protótipo cobre as famílias e as duas classes de tela. |
| Requisito | Todos |
| Pré-condições | — |
| Comportamento | **Dado que** o arquivo Figma é aberto, **então** contém as famílias T01–T20, versões para computador e celular e pontos de entrada por perfil. |
| Condição de aprovação | Famílias presentes e navegáveis. |
| Método de validação | Inspeção do arquivo. |
| Plano | — |
| Evidência | Protótipo — registro (`ENTREGA_FIGMA.md`; auditoria de 497 quadros em 11/11/2026; extensões de estatísticas e de 15/11/2026). |

### CA-044 — Documentação da Entrega 2

| Campo | Conteúdo |
|---|---|
| Descrição | Os nove artefatos existem e são coerentes. |
| Requisito | Entrega acadêmica |
| Pré-condições | — |
| Comportamento | **Dado que** o avaliador abre o README, **então** encontra os nove artefatos com links funcionais, a matriz de rastreabilidade e as capturas. |
| Condição de aprovação | Auditoria final sem links quebrados nem documentos vazios. |
| Método de validação | Auditoria final (README, seção "Resultado da auditoria"). |
| Plano | — |
| Evidência | Ver README. |

## 8. Estatísticas, relatórios e acompanhamento (acréscimos de 15/11/2026)

> Evidências desta seção vêm de `ENTREGA_ESTATISTICAS_RELATORIOS_2026-11-11.md` e `ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md`. Em 15/11/2026 **nenhum clique real** foi executado (a automação não iniciou); os registros de teste são avaliações interpretadas das ações e variáveis lidas do Figma.

### CA-045 — Indicadores reconciliados e com método

| Campo | Conteúdo |
|---|---|
| Descrição | Os indicadores têm unidade, base e método e conferem entre painel, tabela e prévia. |
| Requisito | RF-022, RF-030; RN-021 |
| Pré-condições | Cenário demonstrativo carregado. |
| Comportamento | **Dado que** o usuário abre o Panorama em R = 15/11/2026, **então** vê "Servidores cadastrados 7 (5 ativos + 2 inativos)", "Projetos criados 21", "Conclusão 57,1 (12 concluídos / 21 criados)" e "Pendências 7 tarefas em 6 projetos", cada um com unidade e data de referência; **quando** alterna um gráfico para Tabela, **então** os números são os mesmos. **Dado que** uma métrica não tem base no período, **então** aparece "Não disponível", nunca zero. |
| Condição de aprovação | 21 = 12 + 7 + 1 + 1; nenhuma soma entre estado atual, eventos e vigência. |
| Método de validação | Verificação do cenário; inspeção visual; teste do serviço de métricas na implementação. |
| Plano | CA19 |
| Evidência | Protótipo — captura [E01](../07-Interfaces-do-Sistema/Capturas/E01-estatisticas-panorama-computador.png), [E02](../07-Interfaces-do-Sistema/Capturas/E02-estatisticas-panorama-celular.png); registro de teste: 10/10 verificações numéricas (`.design/nov15/data-checks.json`) e 12/12 do cenário de 11/11 (`.design/statistics-scenario-checks.json`). |

### CA-046 — Gráficos legíveis e regras de contagem

| Campo | Conteúdo |
|---|---|
| Descrição | Os 12 modelos de gráfico têm pergunta, unidade, tabela equivalente e notas de contagem. |
| Requisito | RF-030; RN-021, RN-022, RN-023 |
| Pré-condições | Estatísticas abertas. |
| Comportamento | **Dado que** o usuário vê "Projetos por resultado atual" (pizza), **então** as fatias são exclusivas e somam 21; **dado que** vê "Comparativo entre semanas" com base anterior zero, **então** aparece a diferença absoluta (+2), sem percentual; **dado que** vê tempos de espera, **então** nenhum processo é rotulado como atrasado; **dado que** vê motivos, **então** devolução, não aceite e cancelamento aparecem separados. |
| Condição de aprovação | Linhas e área com eixo e séries identificadas; pizza e rosca com no máximo cinco fatias e rótulo direto. |
| Método de validação | Inspeção visual; revisão independente. |
| Plano | — |
| Evidência | Protótipo — captura [E03](../07-Interfaces-do-Sistema/Capturas/E03-grafico-pizza-C01.png); registro: os 12 gráficos e as 12 tabelas de cada classe inspecionados; correção F03 resolvida (`.impeccable/review/nov15/veredito.md`). |

### CA-047 — Notificações separam avisos de tarefas

| Campo | Conteúdo |
|---|---|
| Descrição | Ler um aviso não conclui a tarefa; o acompanhamento mostra estado, responsável e próxima ação. |
| Requisito | RF-028, RF-032; RN-024 |
| Pré-condições | Sessão com pendências. |
| Comportamento | **Dado que** a conta do Gabinete abre Notificações, **então** vê "Ações pendentes" com projeto, ação, responsável/setor e último evento; **quando** aciona "Marcar avisos como lidos", **então** as tarefas continuam abertas. **Dado que** abre o acompanhamento do Projeto 2026-015, **então** vê "Em produção", etapa "Devolvida", responsável Helena Martins (DEPE), motivo, ação e "33,3% · 2 de 6 marcos obrigatórios". |
| Condição de aprovação | Progresso só por marcos obrigatórios; projetos não aceitos ou cancelados sem percentual; servidor vê só os próprios processos. |
| Método de validação | Avaliação das ações; clique no protótipo (pendente). |
| Plano | — |
| Evidência | Protótipo — captura [E04](../07-Interfaces-do-Sistema/Capturas/E04-notificacoes-computador.png), [E05](../07-Interfaces-do-Sistema/Capturas/E05-acompanhamento-computador.png); registro de teste: 12/12 verificações de acesso e escopo das notificações (`.design/nov15/role-notifications-final.json`). |

### CA-048 — Relatórios por período preservam o recorte

| Campo | Conteúdo |
|---|---|
| Descrição | O recorte escolhido acompanha resumo, comparação, detalhes e as cinco páginas da prévia. |
| Requisito | RF-021, RF-031; RN-025 |
| Pré-condições | Relatórios abertos por perfil de nível 3 ou 4. |
| Comportamento | **Dado que** o usuário aplica o recorte DEPE no relatório mensal, **quando** muda para semanal, **então** o recorte continua aplicado e o período selecionado fica destacado; **quando** abre a prévia, **então** as cinco páginas mostram o mesmo recorte; **quando** aciona "Exportar PDF", **então** é informado de que o protótipo não gera arquivo. No celular, "Ler em texto ampliado" volta à mesma página. |
| Condição de aprovação | Nenhum CPF, telefone, endereço ou e-mail; nenhuma exportação simulada como concluída. |
| Método de validação | Avaliação das ações; clique (pendente); teste de autorização na implementação. |
| Plano | CA19, CA20 |
| Evidência | Protótipo — captura [E06](../07-Interfaces-do-Sistema/Capturas/E06-previa-relatorio-semanal-pagina1.png); registro de teste: 276/276 verificações dos nove recortes × três períodos e 136/136 da leitura móvel (`.design/nov15/report-functional-final-*.json`, `reading-functional-final.json`). |

### CA-049 — Acesso demonstrativo sem concessão de permissões

| Campo | Conteúdo |
|---|---|
| Descrição | As quatro contas fictícias só preenchem a entrada. |
| Requisito | RF-034; RN-026 |
| Pré-condições | Entrada aberta. |
| Comportamento | **Dado que** o usuário aciona "Ver usuários demonstrativos", **então** escolhe entre Usuário, Helena, Marina e Eduardo e vê as credenciais fictícias com o aviso "Credenciais fictícias, apenas para apresentação"; **quando** aciona "Usar estas credenciais" e Entrar, **então** chega ao Início daquele perfil, com nível visível só depois do login. |
| Condição de aprovação | Nenhuma credencial real; nenhuma permissão além da conta escolhida. |
| Método de validação | Avaliação das ações; clique (pendente). |
| Plano | — |
| Evidência | Protótipo — captura [A03](../07-Interfaces-do-Sistema/Capturas/A03-acesso-demonstrativo-computador.png), [A04](../07-Interfaces-do-Sistema/Capturas/A04-acesso-demonstrativo-celular.png); registro de teste incluído nas 473 verificações por classe (`.design/nov15/functional-delivery-D/M.json`). |

### CA-050 — Abas do editor sem perda de contexto

| Campo | Conteúdo |
|---|---|
| Descrição | Texto, Participações e Prévia alternam sem trocar a página. |
| Requisito | RF-033 |
| Pré-condições | Minuta aberta (revisão 04 ou 05). |
| Comportamento | **Dado que** o usuário está em Texto, **quando** abre Participações ou Prévia, **então** cabeçalho, navegação e estrutura continuam iguais e só o conteúdo muda; **quando** volta, **então** os dados estão preservados (a revisão 05 não restaura a presidência removida). |
| Condição de aprovação | Retorno direto a qualquer aba nas três direções; mesma minuta no computador e no celular. |
| Método de validação | Avaliação das ações; clique (pendente). |
| Plano | — |
| Evidência | Protótipo — captura [E07](../07-Interfaces-do-Sistema/Capturas/E07-editor-abas-revisao04-computador.png); correção F02 resolvida (`.impeccable/review/nov15/veredito.md`). |

## 9. Resumo da evidência

| Evidência | Critérios |
|---|---|
| Protótipo — captura | CA-001, CA-005, CA-006, CA-009, CA-010, CA-015, CA-016, CA-019, CA-020, CA-024, CA-045 a CA-050 |
| Protótipo — registro de teste | CA-002, CA-004, CA-005, CA-006, CA-007, CA-009, CA-011, CA-012, CA-017, CA-018, CA-019, CA-020, CA-021, CA-022, CA-023, CA-025, CA-026, CA-036, CA-038, CA-039, CA-040, CA-043, CA-045, CA-047, CA-048, CA-049 |
| Protótipo — especificação | CA-003, CA-008, CA-014, CA-031 a CA-035, CA-037, CA-042 |
| Pendente por cliques reais (15/11/2026) | CA-047 a CA-050: avaliados nas ações do Figma, sem percurso por interface |
| Somente na implementação | CA-041 e as partes de servidor de CA-010, CA-012, CA-024 e dos fluxos CA-031 a CA-042 |
| Pendente (não prototipado ou removido) | CA-013, CA-027, CA-028, CA-029, CA-030 |

Nenhum critério foi verificado em software, pois o software ainda não existe.
