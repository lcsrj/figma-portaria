# Matriz de Rastreabilidade — Gestor de Portarias

> Relaciona **Objetivos → EAP → Requisitos → Regras de Negócio → Critérios de Aceitação → Interfaces → Fluxos**. Quando uma relação não existe, a célula registra a ausência ("—" ou observação), em vez de inventá-la.
>
> **Atualizada em 15/11/2026:** quatro níveis, entrada unificada e os acréscimos RF-030 a RF-034, RN-021 a RN-026, CA-045 a CA-050, Interface D e FL-13 a FL-17.

Documentos de origem: [Plano](../01-Plano-de-Projeto/Plano-de-Projeto.md) (OE) · [EAP](../02-EAP-do-Projeto/EAP.md) · [Requisitos Funcionais](../05-Requisitos/Requisitos-Funcionais.md) (RF) · [Regras](../06-Regras-de-Negocio/Regras-de-Negocio.md) (RN) · [Critérios](../04-Criterios-de-Aceitacao/Criterios-de-Aceitacao.md) (CA) · [Interfaces](../07-Interfaces-do-Sistema/Documentacao-das-Interfaces.md) (A, B, C, D) · [Landing](../09-Landing-Page/Documentacao-Landing-Page.md) (LP) · [Fluxos](Fluxos-de-Navegacao.md) (FL).

## 1. Matriz principal

| Objetivo | EAP | Requisito | Regras | Critérios | Interface | Fluxo | Observação |
|---|---|---|---|---|---|---|---|
| OE-01 | 4.2.1, 6.1 | RF-001 | RN-009, RN-010 | CA-001, CA-002, CA-003, CA-005 | A | FL-01, FL-02 | Entrada unificada desde 15/11/2026 |
| OE-01 | 4.2.1 | RF-002 | — | CA-004 | A | FL-01 | Proposta de interface, sem regra de negócio |
| OE-01 | 4.2.1, 7.1 | RF-003 | RN-010 | CA-005 | A | FL-01 | Integração LDAP no L2 |
| OE-01 | 4.2.1, 4.4.4 | RF-004 | RN-001, RN-009, RN-010, RN-011, RN-025 | CA-006, CA-007, CA-020 | A, C | FL-04 | Conta externa entra pela entrada unificada |
| OE-02 | 4.3.1, 4.3.2 | RF-005 | RN-002 | CA-009, CA-010, CA-011 | B | FL-03 | — |
| OE-02 | 4.3.3 | RF-006 | RN-002 | CA-012 | B | FL-03 | Estados de link expirado não desenhados |
| OE-02 | 4.3.4 | RF-007 | RN-003 | CA-013 | B | FL-03 (ramo ausente) | **Removido do protótipo em 11/11/2026** |
| OE-02 | 4.3.5 | RF-008 | RN-002 | CA-014 | B | FL-05 | Caminho a partir da entrada unificada não reverificado |
| OE-01, OE-08 | 4.5 | RF-009 | RN-001 | CA-008 | A, C | FL-09 | — |
| OE-03 | 4.4.2 | RF-010 | RN-009 | CA-015, CA-018 | C | FL-06 | — |
| OE-03 | 4.4.1 | RF-011 | RN-009, RN-012 | CA-016, CA-017, CA-026 | C | FL-07, FL-11 | — |
| OE-03 | 4.4.3, 4.1.4 | RF-012 | RN-009 | CA-019 | C | FL-01, FL-06 | Selos 1–4 só depois do login |
| OE-04 | 4.5, 6.2 | RF-013 | RN-004 | CA-036 | C (via menu) | FL-10 | — |
| OE-04 | 4.5, 6.3 | RF-014 | RN-005, RN-007, RN-008 | CA-032 | — | — | Jornadas J02, J10, J11; sem fluxo detalhado nesta entrega |
| OE-04 | 4.5, 6.3 | RF-015 | RN-006 | CA-033 | — | — | Jornada J03 |
| OE-04 | 4.5, 6.4 | RF-016 | RN-006, RN-008, RN-020 | CA-021, CA-022, CA-023, CA-034 | C | FL-08 | Nível 3 aguarda; nível 4 assina |
| OE-04 | 4.5, 6.4 | RF-017 | — | CA-035 | — | — | Regra do canal oficial pendente (D11) |
| OE-05 | 4.5, 6.4 | RF-018 | RN-013 | CA-035 | — | — | Jornada J05 |
| OE-06 | 4.5, 6.2 | RF-019 | RN-001 | CA-020, CA-031, CA-041 | C (externo) | FL-04 | — |
| OE-07 | 4.5, 6.5 | RF-020 | RN-014, RN-019 | CA-038 | C | FL-12 | — |
| OE-07 | 4.8.2, 7.1 | RF-021 | RN-007, RN-021, RN-025 | CA-039, CA-048 | D | FL-15 | Escopo dos relatórios pendente (D17); formato pendente (D25) |
| OE-07 | 4.4.2, 4.8.1, 7.1 | RF-022 | RN-021 | CA-039, CA-045 | C, D | FL-06, FL-14 | "Tempo real" pendente (D18) |
| OE-03, OE-07 | 4.5, 6.5 | RF-023 | RN-024 | CA-037 | C | FL-11 | — |
| OE-08 | 4.5, 6.1 | RF-024 | RN-011, RN-016, RN-017 | CA-042 | — | — | — |
| OE-04 | 4.5, 6.3 | RF-025 | RN-018 | **Nenhum** | — | — | **Lacuna:** não há critério de aceitação para memorandos |
| OE-08 | 4.5, 6.1 | RF-026 | RN-008, RN-009, RN-012, RN-020 | CA-024 | C | FL-06 | J09 |
| OE-06 | 4.5, 6.2 | RF-027 | RN-015 | CA-040 | — | — | — |
| OE-03 | 4.4.3, 4.8.3 | RF-028 | RN-024 | CA-019, CA-047 | C, D | FL-06, FL-16 | — |
| OE-04 | 7.2 | RF-029 | — | **Nenhum** | — | — | Futuro (L3 ou conforme D23) |
| OE-07 | 4.8.1, 7.1 | RF-030 | RN-021, RN-022, RN-023, RN-025 | CA-045, CA-046 | D | FL-14 | Pedido de 15/11/2026; validação parcial |
| OE-07 | 4.8.2, 7.1 | RF-031 | RN-021, RN-025 | CA-048 | D | FL-15 | Nenhum PDF é gerado no protótipo |
| OE-07 | 4.8.3, 7.1 | RF-032 | RN-022, RN-023, RN-024 | CA-047 | D | FL-16 | Classificações de não aceite e cancelamento pendentes (D28) |
| OE-04 | 4.8.4, 6.3 | RF-033 | — | CA-050 | D | FL-17 | Proposta de interface, sem regra de negócio |
| OE-01 | 4.2.2 | RF-034 | RN-026 | CA-049 | A | FL-13 | Apenas para apresentação |
| OE-03 | 4.7 | (RF-001 como destino) | RN-001, RN-010, RN-011 | CA-027, CA-028, CA-029, CA-030 | LP | — | **Landing page pendente**; sem requisito funcional próprio na fonte |

Critérios transversais: **CA-025** (integridade da navegação) cobre todos os requisitos prototipados; **CA-043** (protótipo completo) e **CA-044** (documentação) cobrem as entregas.

## 2. Fonte original → requisitos desta entrega

| Fonte (07/04/2026) | Requisito / regra desta entrega | Representação no protótipo |
|---|---|---|
| RF1 — autenticação por usuário e senha | RF-001 | Sim (T01, entrada unificada) |
| RF2 — recuperação por e-mail com link | RF-005, RF-006, RF-008 | Sim (T02) |
| RF3 — autenticação LDAP | RF-003 | Parcial (entrada unificada; integração não definida) |
| RF4 — solicitação, elaboração, validação, aceite, assinatura, publicação | RF-013 a RF-017, RF-033 | Sim (T04, T05, T08–T11) |
| RF5 — e-mail aos membros | RF-018 | Sim (T11, T20) |
| RF6 — busca por servidor, nome, número ou período | RF-019 | Sim (T06, T07) |
| RF7 — relatórios | RF-021, RF-031 | Sim (T13: R1–R5 e relatórios por período; sem geração real de PDF) |
| RF8 — dashboard em tempo real | RF-022, RF-010, RF-030, RF-032 | Parcial ("tempo real" indefinido) |
| RN1 — consulta só com login | RN-001 | Sim |
| RN2 — recuperação por link no e-mail cadastrado | RN-002 | Sim |
| RN3 — recuperação LDAP no sistema de autenticação | RN-003 | **Não** (removida em 11/11/2026) |
| RN4 — obrigatórios da solicitação | RN-004 | Sim (com variantes D07) |
| RN5 — obrigatórios da elaboração | RN-005 | Sim (com variantes D07) |
| RN6 — validação antes da assinatura | RN-006 | Sim |
| RN7 — teto de 10 h para docente | RN-007 | Sim |
| Narrativa — emissão e assinatura restritas | RN-008 | Sim |
| Narrativa — cadastro de servidor completo | RN-016 | Sim (T14) |
| Narrativa — alunos e externos por nome e CPF | RN-017 | Sim (T15) |
| Narrativa — portaria vinculada a memorandos | RN-018 | Sim (T16) |
| Narrativa — alertas de vigência | RN-019 | Sim (T12) |
| Narrativa — histórico e documentos anteriores | RN-015, RF-027 | Sim |
| Narrativa — horas atribuídas por servidor (RC9) | RN-007, RF-021 | Sim (R2) |
| Narrativa — integração futura com SIPAC | RF-029 | Não (futuro) |
| Decisões de 11/11/2026 — quatro níveis | RN-008, RN-009, RN-011, RN-012, RN-020 | Sim |
| Decisão de 15/11/2026 — entrada unificada e acesso demonstrativo | RN-010, RN-026 | Sim |
| Pedido de 15/11/2026 — estatísticas, relatórios, notificações e abas do editor | RF-030 a RF-033; RN-021 a RN-025 | Sim (validação parcial, sem cliques reais) |

## 3. Verificação de consistência

| Verificação | Resultado |
|---|---|
| Todo RF tem objetivo e pacote da EAP | Sim (34/34) |
| Todo RF tem critério de aceitação | Não: RF-025 e RF-029 sem critério (registrados acima) |
| Toda RN aparece em ao menos um RF | Sim (26/26) |
| Toda RN tem critério de aceitação | Não: RN-018 sem critério (consequência da lacuna de RF-025) |
| Todo CA aponta para RF existente | Sim (CA-001 a CA-050) |
| Requisitos da fonte representados no protótipo | 14 de 15 RF/RN numerados (falta RN3) |
| Identificadores duplicados ou contraditórios | Nenhum encontrado na auditoria de 15/11/2026 |
| Funcionalidade sem correspondência no escopo | Landing page: fora do plano v3.2; tratada como pendência e proposta, não como escopo aprovado |
