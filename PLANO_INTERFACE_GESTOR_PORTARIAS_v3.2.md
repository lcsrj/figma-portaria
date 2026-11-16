# Plano de criação da interface — Gestor de Portarias (v3.2)

> **Nota de atualização (15/11/2026).** O texto abaixo é o plano v3.2 de 22/10/2026, mantido sem alterações. Algumas partes foram substituídas por decisões posteriores do responsável. Quando houver conflito, valem:
>
> - **Níveis de acesso (§3.2, §3.3, D02):** quatro níveis, decididos em 11/11/2026 — 1 conta externa; 2 docentes, técnicos, DEPE, DAP e administrador técnico; 3 Gabinete e CGP/DGP; 4 Direção-Geral e Vice autorizado, com acesso total, inclusive elaboração. Ver `PRODUCT.md`.
> - **Entrada (T01):** entrada unificada, sem nível antes do login e com acesso demonstrativo opcional (15/11/2026). Ver `UX-CONTRACT.md`.
> - **Dashboard e relatórios (§8.1, §8.2, T03, T13):** detalhados e ampliados no `PLANO_ESTATISTICAS_RELATORIOS_v1.2.md`, que acrescenta as decisões D25–D28.
> - **Documentação acadêmica:** `ENTREGA-2-DOCUMENTACAO/`, atualizada em 15/11/2026. Índice geral da pasta: `LEIA-ME_DOCUMENTACAO.md`.

**Instituição:** Instituto Federal Catarinense — Campus Videira  
**Data do plano:** 21/10/2026 — **v3:** incorpora a auditoria da v2 (`AUDITORIA_PLANO_INTERFACE_GESTOR_PORTARIAS_v2.md`) — **v3.1 (22/10/2026):** revisão localizada a partir do parecer da v3 (`PARECER_PLANO_INTERFACE_GESTOR_PORTARIAS_v3.md`) — **v3.2 (22/10/2026):** ajustes localizados a partir do parecer da v3.1 (`PARECER_PLANO_INTERFACE_GESTOR_PORTARIAS_v3.1.md`)  
**Base:** documento “Gestor de Portarias (Regras de Negócio)”, de 07/04/2026, identificado como rascunho.  
**Entrega:** planejamento da interface de uma aplicação web com arquitetura cliente-servidor, para orientar desenho (Figma), prototipação, implementação e homologação.

> Este plano diferencia quatro coisas: **requisito da fonte**, **proposta de interface**, **hipótese de trabalho** (H-Dxx, usada no protótipo e marcada como provisória) e **divergência da fonte** (hipótese que contraria a leitura literal do rascunho e precisa de mudança formal de regra). Nenhuma hipótese vale como regra de produção antes da homologação. Os critérios de aceite que dependem de hipótese dizem isso explicitamente.

Trechos novos ou reescritos na v3 estão marcados com **(v3)**; os das revisões localizadas, com **(v3.1)** e **(v3.2)**. O que as revisões propuseram e ficou para depois está no backlog (§17), com prazo ligado aos marcos do projeto.

> **Estado do plano (v3.2):** pronto para orientar os wireframes, com hipóteses e variantes anotadas. Correções documentais não homologam o entendimento do IFC: o próximo ganho de qualidade vem do levantamento da Etapa 0, da validação das decisões com as áreas e do teste das jornadas, não de outra revisão completa deste texto.

## 0. Resumo executivo e registro das revisões

### 0.1 Resumo (v3)

O sistema digitaliza o ciclo da portaria no Campus Videira: solicitação por qualquer servidor, elaboração pelo Gabinete ou pela CGP, validação pelos diretores, assinatura pelo Diretor Geral (ou Vice nomeado), publicação no canal exigido para o tipo de ato, comunicação aos membros, acompanhamento da vigência e encerramento, com histórico preservado.

O **design cobre o produto completo** (todos os RF, RN e RC). A **entrega é dividida em lançamentos** (§2.3); o primeiro já precisa ser operável sozinho, com administração mínima e forma de tratar atos vigentes.

Riscos principais, em ordem:

1. **Sobreposição com o SIG/SIPAC (D23).** A Reitoria do IFC orienta consultar suas portarias no portal público do SIG. Isso não comprova que o Campus Videira use o mesmo módulo nem que haja integração disponível; o levantamento da Etapa 0 decide entre integração, referência externa, operação manual assistida ou desenvolvimento complementar. **(v3.1)**
2. **Assinatura (D10):** sem um mecanismo de verificação, o sistema não consegue afirmar que uma portaria está assinada.
3. **Canal de publicação (D11):** atos normativos podem exigir publicação no DOU (Decreto 12.002/2024, art. 68).
4. **Significado de “aceite” (D04)** e **dados pessoais em documentos publicados (D21)**.

### 0.2 O que mudou da v3.1 para a v3.2 (v3.2)

As cinco ressalvas e os dois refinamentos do parecer da v3.1 procedem. O art. 18 do Decreto 12.002/2024 foi conferido no texto oficial.

| # | Alteração | Onde | Origem |
| --- | --- | --- | --- |
| X01 | Datas separadas: assinatura, publicação por canal, publicação de referência, cláusula de vigência, início de vigência, início de efeitos específicos e registro da evidência. Publicação não é sinônimo de início de vigência | §5.2, §7.6, D11, CA50 | Parecer v3.1 §3.1; Decreto 12.002/2024, art. 18 |
| X02 | Edição livre só para minuta editável (rascunho ou devolvida); versões aprovadas ou assinadas só abrem em leitura e geram nova minuta. Numeração própria do ato alterador separada da numeração do ato atingido | §7.3, CA51, CA52 | Parecer v3.1 §3.2 |
| X03 | Séries de numeração e seu compartilhamento entre operadores continuam hipótese; finalidade escolhida na interface não define sozinha natureza, série ou canal | §5.2, D09 | Parecer v3.1 §3.3 |
| X04 | Modelo documental com blocos condicionais por finalidade, lidos da mesma definição de campos da elaboração; lotação sem tabela de horas nem presidência | §7.10, CA53 | Parecer v3.1 §3.4 |
| X05 | Três resultados de comunicação: e-mail enviado, comunicação alternativa registrada e exceção autorizada ao requisito; só o primeiro conta como cumprimento literal de RF5 | §7.6, §7.12, §13.4, D12, CA49, CA54 | Parecer v3.1 §3.5 |
| X06 | Recorte histórico distingue eventos já eficazes (definem a situação) de eventos futuros conhecidos (geram marcadores de agendamento) | §6.1, CA55 | Parecer v3.1 §4.2 |
| X07 | LC 95/1998 aplica-se, no que couber, a atos do Executivo (art. 1º, parágrafo único); o decreto detalha o regime federal | §16 | Parecer v3.1 §4.1 |
| X08 | Versão em validação protegida no editor sem tirar de DEPE/DAP o poder de ajustar: variante A (ajuste no escopo gera nova revisão e reabre aprovações afetadas) e variante B (só por devolução) | §7.3, §7.4, D04, CA11 | Observação posterior ao parecer da v3.1 |

### 0.3 O que mudou da v3 para a v3.1 (v3.1)

Revisão localizada. Os dez achados do parecer (V3-01 a V3-10) procedem; foram conferidos no texto oficial do Decreto 12.002/2024 (arts. 12, 13, 14, 22 e 74) e da LC 95/1998 (arts. 10 a 12). Como o decreto se aplica diretamente às autarquias federais (art. 2º), o plano passa a citar seus arts. 12–14 para o editor, com a LC 95 como base geral.

| # | Alteração | Onde | Origem |
| --- | --- | --- | --- |
| W01 | Numeração em séries por natureza: normativas em série contínua; portarias de pessoal em série própria, reiniciada a cada ano; identificador de lista distinto da epígrafe | §5.2, D09, CA45 | V3-01; Decreto 12.002/2024, art. 22 |
| W02 | Editor com árvore válida (artigo pode ter incisos sem parágrafos) e dois modos: minuta nova (renumera) e alteração de ato publicado (não renumera artigos e parágrafos; acréscimo “Art. 5º-A”; sem reaproveitar número revogado) | §7.3, CA46 | V3-02; Decreto, arts. 12–14; LC 95, arts. 10 e 12 |
| W03 | Modelos por natureza; texto normativo sem cabeçalho nem rodapé (art. 12, XXIII); moldura do visualizador separada do arquivo oficial | §7.10, CA47 | V3-03; Decreto, art. 12 |
| W04 | Situação do ato por tabela de decisão determinística, com recorte histórico pela data de referência | §6.1, CA39, CA48 | V3-04 |
| W05 | D11 escolhe entre três arquiteturas de divulgação; hipótese: gestão autenticada com URL oficial externa (RN1 intacta); compilação respeita data de efeitos | §7.7, D11, CA43 | V3-05 |
| W06 | Canal classificado como oficial, divulgação obrigatória ou réplica; “publicação parcial” só para canal oficial faltante | §7.6, CA34 | V3-06 |
| W07 | Falha de comunicação vira tarefa (não alerta descartável) | §7.12, CA49 | V3-07 |
| W08 | Exclusão de cadastro: inativação na UI, destinação pela política arquivística | §5.3 | V3-08 |
| W09 | Retificação: lapso manifesto como regra; erro material como modalidade específica; fluxo a definir em D14 | §6.3, §7.8, D14, CA44 | V3-09; Decreto, art. 74 |
| W10 | Backlog com prazo ligado a marcos; Administrador no teste de usabilidade | §13.3, §17 | V3-10 |
| W11 | D23 como decisão informada, com o que o levantamento precisa devolver | §0.1, §2.2, §13, D23 | Parecer §5 |
| W12 | Novos critérios CA45–CA49 | §14, §15 | — |

### 0.4 O que mudou da v2 para a v3 (v3)

| # | Alteração | Onde | Origem |
| --- | --- | --- | --- |
| V01 | Publicação por canal conforme o tipo de ato, com um ou mais registros; “publicação parcial” quando falta canal exigido | §6.2, §7.6, D11, CA34 | Auditoria A01, conferida no Decreto 12.002/2024, arts. 2º e 68 |
| V02 | Três documentos distintos: minuta, versão aprovada para assinatura e documento assinado | §7.5, §7.10, CA32, CA35 | A02 |
| V03 | Assinatura externa com etapas “anexada → em verificação → verificada” | §7.5, D10, CA36 | A03 |
| V04 | RN1 preservada sem ressalva; sistema de gestão ≠ canal público de divulgação | §10, D01 | A04 |
| V05 | Situação exibida refeita em dois níveis (etapa da versão × situação do ato publicado), calculada em uma data de referência | §6.1, CA37–CA39 | A05 |
| V06 | Matriz de permissões com coluna “confirmada / hipótese / diverge da fonte”; Administrador sem acesso a dados pessoais só pelo papel | §3.2, D02, D16 | A06 |
| V07 | Afastamento, aposentadoria e desligamento geram alerta de revisão, não bloqueio; nova decisão D24 | §5.3, §7.11, CA28 | A07 |
| V08 | Obrigatoriedade por etapa (solicitação e elaboração) e por finalidade, com variante literal da fonte | §5.1–§5.2, CA03, CA29 | A08 |
| V09 | Nomes específicos para cada tipo de aceite; retirada a promessa de “ligar depois sem redesenho” | §6.2 | A09 |
| V10 | Produto completo × lançamentos; administração mínima e tratamento de atos vigentes no Lançamento 1; jornadas com lançamento | §2.3, §4.3 | A10 |
| V11 | Publicação concluída ≠ comunicação concluída; envio automático único com reenvio controlado | §7.6, D12, CA40 | A11 |
| V12 | Privacidade sem contradições: CPF fora dos e-mails; padrão recomendado, não “proibição legal”; log de eventos definidos | §10, D16, D21, CA26, CA31 | A12 |
| V13 | Modelo institucional separado do ato; mantido por Gabinete e CGP, com versão | T19, §7.10, CA42 | A13 |
| V14 | Sincronização cadastral com fonte por campo, divergência e rota de correção | §5.3, §11, D15, CA41 | A14 |
| V15 | Teste de usabilidade como rodada exploratória; tarefas críticas sem erro crítico | §13.3–§13.4 | A15 |
| V16 | **Novo:** verificar se o SIG/SIPAC já cobre portarias (D23, Etapa 0) | §2.2, §12, §13 | Achado da análise da auditoria |
| V17 | **Novo:** texto compilado e endereço permanente para atos normativos (art. 69) | §7.7, §11, CA43 | Decreto 12.002/2024, art. 69 |
| V18 | **Novo:** editor com estrutura do Manual de Redação (art., §, inciso, alínea, item) | §7.3, §9.2, T19 | Decreto 12.002/2024, art. 75 |
| V19 | **Novo:** retificação e republicação distintas de alteração | §6.3, D14, CA44 | Decreto 12.002/2024, arts. 73–74 |
| V20 | Identificador completo da portaria (número/ano/sigla do emissor) | D09 | Auditoria, D09 |
| V21 | Backlog do que não entrou | §17 | — |

### 0.5 O que mudou da v1 para a v2 (histórico)

Hipóteses de trabalho para cada decisão pendente; corte de entrega; jornadas por perfil; esqueleto das telas-chave; RC13 (lotação e normatização); inconsistências da fonte; telas T19 (documento) e T20 (pendências); situação exibida; substituição de membro; interpretações de “aceite”; normas do setor público; origem oficial dos dados de servidor; organização do Figma; teste de usabilidade e métricas.

### 0.6 Pontos fortes mantidos desde a v1

- Separação entre requisito da fonte, proposta e decisão pendente.
- Matriz de rastreabilidade RF/RN/RC → tela → critério de aceite.
- Cuidado com assinatura (sem confirmação falsa), idempotência de envio, conflito de edição e fuso horário.
- Autorização sempre revalidada no servidor; poder de validar não implica poder de emitir ou assinar.

## 1. Objetivo e limites

Criar uma interface que permita solicitar, elaborar, validar, registrar aceite, assinar, publicar, consultar, acompanhar, renovar, alterar, retificar, revogar e encerrar portarias, preservando documentos anteriores e o histórico das decisões.

A interface deve atender ao trabalho operacional do Gabinete e da Gestão de Pessoas, às decisões dos diretores, às solicitações dos servidores e à consulta por usuários autenticados. Também deve representar a participação de alunos e pessoas externas, sem confundir participação em uma portaria com permissão de acesso ao sistema.

O plano inclui telas, jornadas, navegação, dados, permissões, validações, estados, relatórios, notificações, componentes e critérios de aceite. Também identifica os serviços de backend necessários para que a interface funcione de verdade. Esta entrega não implementa o sistema nem define como aprovadas políticas ausentes no rascunho.

### 1.1 Convenções de leitura

| Identificação | Significado |
| --- | --- |
| RF1–RF8 | Requisitos funcionais numerados no documento original. |
| RN1–RN7 | Regras de negócio numeradas no documento original. |
| RC1–RC13 | Requisitos presentes na narrativa, sem numeração na fonte. |
| T01–T20 | Telas ou famílias de telas propostas. |
| J01–J12 | Jornadas usadas no protótipo e nos testes. |
| D01–D24 | Decisões que precisam de validação institucional. |
| H-Dxx | Hipótese de trabalho adotada no protótipo para a decisão Dxx. |
| L1, L2, L3 | Lançamento previsto para a capacidade (§2.3). |
| CA01–CA55 | Critérios de aceite. |
| **Diverge da fonte** **(v3)** | Hipótese que contraria a leitura literal do rascunho; exige mudança formal de regra para valer em produção. |
| Proposta | Solução de interface ou comportamento sugerido, ainda sujeita à homologação. |

## 2. Escopo funcional consolidado

| ID | Necessidade identificada na narrativa |
| --- | --- |
| RC1 | Cadastro de servidores com todos os campos da fonte obrigatórios. |
| RC2 | Participação de servidores, alunos e comunidade externa, com identificação adequada ao vínculo. |
| RC3 | Composição completa da portaria: identificação, texto, artigos, membros, atividade, vigência, assinatura, processos e origem oficial. |
| RC4 | Tipos: nova portaria, portaria de revogação e portaria normativa. |
| RC5 | Criação institucional restrita a Gabinete e Gestão de Pessoas; assinatura restrita ao Diretor Geral e Vice-Diretor nomeado. |
| RC6 | Vinculação de uma portaria a um ou mais memorandos, quando houver justificativa por esses documentos. |
| RC7 | Histórico de mudanças de estado e acesso aos documentos anteriormente emitidos. |
| RC8 | Monitoramento da vigência com alertas para renovação e/ou fechamento. |
| RC9 | Relatório da carga horária atribuída aos servidores. |
| RC10 | Visões anuais com os termos Em edição, Em vigência, Revogadas, Atualizadas e Encerradas; RF7 também cita Vencidas e Em andamento. |
| RC11 | Preparação para integração futura com sistemas institucionais, como SIPAC. |
| RC12 | Solicitação com justificativa, propósito, indicação de membros, cargas horárias e período pretendido, conforme a narrativa. |
| RC13 | Finalidades da portaria além de designar trabalho: **normatizar procedimentos** e **definir lotação/localização de pessoas em setores**. Que os campos obrigatórios variem com a finalidade é **proposta** (§5.2, D07, D20). |

**(v3) Vocabulário:** *tipo do ato* (nova, normativa, revogação — termos da fonte), *finalidade* (designação de trabalho, lotação, normatização) e *operação sobre outro ato* (altera, renova, revoga, retifica) são conceitos diferentes. Uma portaria normativa pode alterar outra normativa; “nova” não significa ausência de vínculo anterior.

### 2.1 Inconsistências da fonte a resolver

| Ponto | Onde na fonte | Tratamento |
| --- | --- | --- |
| Frase interrompida: o parágrafo sobre participação de alunos e externos termina em “As p” | Cap. 2 | Pode haver regra perdida. Pedir o texto completo ao autor (D19). Nenhuma regra é presumida; “nada bloqueia” significa apenas que não há impacto conhecido. |
| “3 departamentos principais”, numerados i) e iii), mas listando DG, DAP, DEPE e Gabinete | Cap. 2 | Tratar os quatro como unidades; confirmar a estrutura organizacional em D15. |
| CGP (coordenação) e DGP (direção) para Gestão de Pessoas | Cap. 2 e cap. 3 | Usar um único rótulo homologado (D15). Hipótese: “CGP”. |
| “SIAP” em vez de “SIAPE” | Cap. 2 | Hipótese: rótulo “SIAPE”, confirmando em D15. |
| Lista de usuários do cap. 3 omite Administrador e Vice-Diretor, citados no cap. 2 | Cap. 2 × cap. 3 | Ambos entram na matriz de perfis (§3). |
| “Nome da portaria” (RF6) × “assunto” (RN4/RN5) | RF6, RN4, RN5 | Hipótese: são o mesmo campo, rotulado “Assunto”. |
| Três vocabulários de status | Cap. 2, RF7 | Situação exibida (§6.1), mapeamento em D05. |
| E-mail “uma vez assinada” × “assinada e publicada” | Cap. 2 × RF5 | D12; hipótese: após a publicação, que é a redação explícita de RF5. |
| RN4 exige membros em toda solicitação, mas normativa e revogação podem não ter membros **(v3)** | RN4 × RC4 | D07; protótipo mostra a variante literal e a variante por finalidade (§5.1). |

### 2.2 Escopo, evolução e exclusões

**Escopo do produto:** autenticação, cadastros, solicitações, elaboração, validação, aceite, assinatura, publicação, consulta, acompanhamento, histórico, relatórios, alertas e administração — todos os RF, RN e RC. O design cobre esse escopo inteiro; os lançamentos (§2.3) definem só a ordem de entrega.

**Verificação prévia — SIG/SIPAC (D23) (v3.1):** a página de portarias do IFC orienta a consultar as portarias da Reitoria no portal público do SIG (“Publicações oficiais”). Isso não comprova que o Campus Videira tenha o mesmo módulo, que ele cubra elaboração ou assinatura, nem que haja API. Antes de desenhar assinatura e publicação em alta fidelidade, o levantamento com a TI devolve:

- quais etapas o sistema existente cobre e quais o Campus Videira usa de fato;
- quem é a autoridade sobre dados, documentos e numeração;
- se há API ou somente consulta/referência;
- como funcionam autoria, assinatura, publicação e permissões nele.

Com isso, D23 escolhe uma alternativa: **integração**, **referência externa** (o Gestor guarda o vínculo e a evidência), **operação manual assistida** ou **desenvolvimento complementar**. Qualquer que seja, o Gestor de Portarias mantém o que é próprio dele: solicitação, composição, horas, validação departamental, vigência, alertas e relatórios.

**Evolução explicitamente futura:** integração efetiva com SIPAC. A interface inicial deve comportar referências a processos e origem documental, sem apresentar uma integração como ativa antes de ela existir. D23 pode antecipar essa integração.

**Fora do escopo confirmado:** consulta pública sem login (RN1), compra de certificado, aplicativo nativo, criação de contas por qualquer visitante e edição genérica de memorandos (o sistema apenas referencia memorandos).

### 2.3 Lançamentos (v3)

O protótipo é feito em duas camadas: **produto completo** (todas as telas e jornadas) e **primeiro lançamento** (L1). Cada tela, jornada e critério de aceite indica seu lançamento. O atendimento integral à fonte só ocorre ao fim do L2; adiar RF3, RF7 ou RF8 exige acordo com os responsáveis, pois são requisitos da fonte.

| Lançamento | Conteúdo | Por que nessa ordem |
| --- | --- | --- |
| **L1 — operação mínima** | RF1, RN1, RF2/RN2; **administração mínima** (habilitar contas, papéis com escopo, registrar Vice/substituição); cadastro de servidores e participantes; solicitação (RN4); elaboração (RN5, RN7) com modelo institucional (T19); validação (RN6); aceite da solicitação (H-D04); assinatura no modo da H-D10; publicação com registro de canais (H-D11); e-mail aos membros (RF5); busca e detalhe (RF6); histórico (RC7); alertas de vigência (RC8) **com tratamento**: registrar encerramento e abrir portaria vinculada (alteração, renovação, revogação, retificação) pela própria elaboração; caixa de pendências (T20) com os itens do L1. | Fluxo central da fonte, operável sozinho: nenhum ato vigente fica sem forma autorizada de ser tratado. |
| **L2 — atendimento integral** | RF3 (LDAP; a tela de entrada já o prevê no L1); relatórios RF7 e RC9; dashboard RF8; assistentes de renovação, alteração de composição e revogação; central de notificações; texto compilado de normativas (art. 69), se não entrar no L1 por exigência de D11. | Completa os requisitos da fonte. |
| **L3 — melhorias** | Comparação visual de versões; exportação XLSX; modelos de texto por finalidade; painel de carga horária acumulada; importação do acervo antigo; integração SIPAC (ou antes, conforme D23). | Produtividade e evolução. |
| **Não previsto** | Consulta pública dentro do sistema; app nativo; edição de memorandos; uso offline. | Fora do escopo ou contrário a RN1. |

## 3. Perfis de acesso e permissões

As ações disponíveis devem considerar simultaneamente perfil, departamento, vínculo com o registro e etapa do processo. Ocultar um botão não substitui a autorização no servidor.

| Perfil | Consulta | Solicitação | Elaboração/emissão | Validação | Assinatura | Administração |
| --- | --- | --- | --- | --- | --- | --- |
| Gabinete | Ampla, segundo o escopo institucional | Operação ampla descrita na fonte | Sim | Sim, RN6 | Não | Sem configuração |
| Gestão de Pessoas — CGP/DGP | Ampla, segundo o escopo institucional | Operação ampla descrita na fonte | Sim | Sim, RN6 | Não | Sem configuração |
| Diretor Geral — DG | Acesso total descrito na fonte | Alcance operacional a confirmar | Conflito com exclusividade de emissão: D02 | Sim, conforme fluxo aprovado | Sim | Alcance de “total” a confirmar: D02 |
| Vice-Diretor nomeado | Escopo de consulta a definir | A definir | Não conceder pela condição de signatário | A definir | Sim; condições da nomeação: D03 | Não presumir |
| DEPE | Total para consulta, conforme fonte | A definir se também acumula papel de servidor | Não | Membros, horas e vigência dos servidores do próprio departamento | Não | Não |
| DAP | Total para consulta, conforme fonte | A definir se também acumula papel de servidor | Não | Membros, horas e vigência dos servidores do próprio departamento | Não | Não |
| Administrador | Total descrito na fonte | Conforme atribuições efetivas | Não presumir exceção à exclusividade de emissão: D02 | Não presumir substituição de validador institucional | Somente se também for signatário habilitado | Configurações e habilitação de usuários |
| Servidor técnico | Consulta autenticada | Sim | Não | Não | Não | Não |
| Servidor docente | Consulta autenticada | Sim, com sugestão de horas | Não | Não | Não | Não |
| Usuário consultor | Consulta autenticada; alcance: D01 | Não estabelecido | Não | Não | Não | Não |
| Aluno ou pessoa externa participante | Participação não concede login | Não estabelecido | Não | Não | Não | Não |

### 3.1 Aplicação na interface

- Navegação mostra módulos compatíveis com as permissões efetivas; o servidor revalida cada operação e acesso ao documento.
- Quando uma ação do fluxo estiver temporariamente indisponível, explicar o motivo: “Aguardando validação do departamento”. Ações sem autorização não devem ser oferecidas.
- DEPE e DAP visualizam claramente o departamento de cada membro. A edição/validação fica restrita ao seu escopo; o restante aparece em leitura quando autorizado.
- Não estender o poder de validar membros ao poder de emitir ou assinar.
- O contexto do usuário mostra seus papéis, departamento e, quando houver, o período de substituição.
- A habilitação administrativa de uma conta não confere atribuição institucional de signatário. **(v3)** Habilitar signatário e registrar substituição exigem referência ao ato de nomeação/designação.
- Ao perder uma permissão, a tela deve atualizar as ações disponíveis e tratar a recusa do servidor sem apagar silenciosamente o trabalho em edição.

### 3.2 Matriz histórica de trabalho para o protótipo (v3)

As hipóteses de DG, Vice e conta externa desta matriz foram substituídas pela decisão do usuário em 11/11/2026, registrada em 3.3. As restrições funcionais dos perfis de nível 2 continuam vigentes.

**Modelo:** pessoa, vínculo, conta, papel e autorização efetiva são entidades diferentes. Uma conta pode acumular papéis; **cada papel mantém seu escopo** (departamento, período, tipo de dado). A interface mostra a união das ações, mas cada ação só alcança o escopo do papel que a concede.

| Perfil | Hipótese de trabalho | Situação | Decisão |
| --- | --- | --- | --- |
| DG | Consulta total, validação, assinatura e relatórios. Não elabora e não configura. | **Diverge da fonte** (“acesso total”). Protótipo mostra também a variante “DG com acesso total”. | D02 |
| Vice-Diretor | Variante A: assina apenas no período registrado de substituição. Variante B: assina sempre que nomeado. | Hipótese não confirmada | D03 |
| DEPE / DAP | Validam e ajustam membros, horas e vigência dos servidores lotados no próprio departamento. | Confirmada pela fonte | — |
| DEPE / DAP | Também solicitam portarias como servidores. | Hipótese | D02 |
| Administrador | Configurações, contas e papéis. Não emite, não valida, não assina, salvo papel acumulado. **Não vê CPF, endereço ou telefone só por ser administrador.** | **Diverge da fonte** (“acesso total”) | D02, D16 |
| Consultor | Vê portarias publicadas e seus documentos, inclusive nome, função e identificação que constam do próprio ato. Não vê dados cadastrais (CPF completo, telefone, endereço, e-mail) nem rascunhos. | Hipótese | D01, D21 |
| Chefia imediata | Sem papel próprio. Ciência ou anuência só se D04 adotar essas opções. | Hipótese | D04 |
| Aluno / externo | Sem conta. | Hipótese (o cap. 3 da fonte cita “qualquer pessoa que deseja consultar”, mas RN1 exige login) | D01 |

### 3.3 Registro histórico — três níveis de acesso (11/11/2026)

O agrupamento em três níveis e a entrada única de servidores desta seção foram substituídos pela decisão posterior de quatro níveis e quatro logins em 3.4. As permissões totais da DG e do Vice foram reafirmadas.

O usuário determinou a remoção de Acesso institucional, a criação de uma tela de acesso externo e três níveis. Em resposta à definição dos perfis de acesso total, confirmou expressamente **Direção-Geral e Vice-Diretor autorizado**. Esta seção prevalece sobre as hipóteses conflitantes das matrizes anteriores e sobre as variantes de demonstração antigas.

| Nível | Perfis | Permissões e limites |
| --- | --- | --- |
| **1 — acesso mínimo** | Conta externa habilitada / consultor | Consultar portarias publicadas, dados públicos do ato e documento de divulgação. Não vê minutas, dados cadastrais privados ou módulos internos; não solicita, edita, valida, assina ou administra. |
| **2 — acesso conforme função** | Docentes e técnicos administrativos | Consulta autenticada, solicitações e acompanhamento das próprias participações. Sem elaboração direta, validação, assinatura ou administração. |
| **2 — acesso conforme função** | Gabinete e CGP/DGP | Operação de elaboração, tramitação, publicação e comunicação conforme o escopo previsto no plano; validação quando concedida por RN6. Sem assinatura automática ou administração de configurações. |
| **2 — acesso conforme função** | DEPE, DAP e demais diretores de departamento | Validação de membros, horas e vigência do próprio departamento. Sem emissão final, assinatura ou administração de contas. Solicitação depende do papel de servidor atribuído. |
| **2 — acesso conforme função** | Administrador técnico | Contas, configurações e auditoria. Não recebe poderes de elaborar, validar, assinar ou publicar por ser administrador; o acesso a dados cadastrais sensíveis depende da atribuição funcional. |
| **3 — acesso total** | Direção-Geral | Todos os módulos e funções: consulta, solicitação, elaboração, validação, assinatura, publicação, cadastros, relatórios, contas, configurações e auditoria. Substitui a hipótese de DG sem elaboração/configuração. |
| **3 — acesso total** | Vice-Diretor autorizado | As mesmas funções da Direção-Geral, mediante autorização registrada e dentro do período de competência. Cargo ou cadastro de signatário isolado não concede acesso total a outros perfis. |

O nível é determinado pelo perfil concedido à conta, com referência e vigência quando aplicáveis; não é escolhido pelo usuário na tela de login. Os níveis 2 e 3 compartilham a entrada normal de servidores. O nível 1 dispõe de entrada, recuperação e ambiente de consulta próprios. Uma pessoa externa cadastrada como participante não recebe login automaticamente: a conta precisa ser habilitada separadamente.

No protótipo, o nível é visível na identificação da conta e no catálogo de perfis da administração. As rotas de gestão preservam o contexto de Direção-Geral ou Vice; o encaminhamento de nível 2 para assinatura mostra uma espera, sem trocar a identidade do usuário. Histórico, autoria, versões congeladas e documentos assinados continuam preservados. A autorização efetiva e a sessão deverão ser impostas no servidor da aplicação futura; o Figma demonstra apenas estados, níveis e percursos predefinidos.

### 3.4 Decisão vigente — quatro níveis, quatro logins (11/11/2026)

O usuário solicitou expressamente quatro níveis e um login para cada um. Confirmou, em seguida: **“Sim, nível 4 mantém acesso total”**. A escala vigente é:

| Nível e entrada | Perfis | Permissões |
| --- | --- | --- |
| **1 — Acesso externo** | Conta externa habilitada / consultor | Somente portarias publicadas e documentos de divulgação. Sem minutas, dados cadastrais privados ou operações internas. |
| **2 — Servidores** | Docentes e técnicos administrativos | Consultar, solicitar e acompanhar as próprias participações. Sem elaboração direta, assinatura ou administração. |
| **2 — Servidores** | DEPE / DAP | Validação de membros, horas e vigência do próprio departamento; solicitação conforme papel de servidor. Sem elaboração, emissão final ou assinatura. |
| **2 — Servidores** | Administrador técnico | Contas, configurações e auditoria. Sem competência de elaborar, validar, assinar ou publicar por ser administrador. |
| **3 — Gabinete e Gestão de Pessoas** | Gabinete e CGP/DGP | Elaboração e tramitação, validação quando autorizada, publicação e comunicação no escopo concedido. Sem assinatura ou administração de configurações automática. |
| **4 — Direção** | Direção-Geral e Vice-Diretor autorizado | Acesso total a todos os módulos e funções, inclusive elaboração. O Vice depende do ato e do período de autorização. |

As quatro entradas são apresentadas em Escolha seu acesso. Cada uma abre seu próprio formulário e encaminha a conta habilitada à área do nível correspondente. O nível não é concedido por selecionar o formulário; o backend deverá verificar identidade, perfil, nível, escopo e competência em cada acesso e operação. O Figma demonstra credenciais, erros e percursos predefinidos.

Esta decisão substitui a entrada única e a numeração de 3.3. A separação de criação entre níveis passa a ser: nível 2 sem elaboração direta; nível 3 com elaboração operacional; nível 4 com acesso total, inclusive elaboração, conforme confirmação do usuário. Outros cargos de direção continuam no nível 2 com as permissões do perfil. Histórico, autoria, versões assinadas e condições de competência permanecem preservados.

## 4. Arquitetura de informação e navegação

### 4.1 Estrutura proposta

```text
Acesso
  Entrar (conta local ou institucional no mesmo formulário)
  Recuperar senha local / orientação para LDAP

Área autenticada
  Visão geral
  Pendências (T20)
  Solicitações
    Minhas solicitações
    Solicitações recebidas — conforme perfil
    Nova solicitação / detalhe e devoluções
  Portarias
    Busca e acervo
    Minhas participações
    Nova portaria — emissores
    Detalhe / documento / histórico
    Modelos institucionais — emissores                (v3: saiu de Administração)
  Acompanhamento
    Vigências / renovações / encerramentos
  Relatórios
  Cadastros — conforme perfil
    Servidores e participantes
    Memorandos e referências
  Administração — conforme permissão
    Usuários, papéis e escopos / estrutura organizacional
    Signatários e substituições
    Configurações / serviços e integrações
  Notificações / minha conta / sair
```

**Proposta de layout:** menu lateral no desktop, cabeçalho com identidade institucional e usuário, área principal com título, contexto e ação prioritária. Em dispositivos menores, menu recolhível e prioridade para leitura, consulta e decisões (validar, assinar). A elaboração é otimizada para desktop; em largura reduzida continua acessível, sem ocultar campos obrigatórios.

Atalhos podem variar por perfil, mas a mesma portaria deve abrir a mesma tela de detalhe, com ações autorizadas. Evitar telas paralelas com comportamentos divergentes para o mesmo registro.

### 4.2 Inventário de telas

| Tela | Conteúdo e ações principais | Acesso principal | Lanç. |
| --- | --- | --- | --- |
| T01 — Entrada | Usuário, senha, mostrar/ocultar senha, acesso institucional, recuperação | Visitante | L1 |
| T02 — Recuperação | Pedido de link, criação de nova senha, link expirado/usado; orientação LDAP | Conta local ou orientação institucional | L1 |
| T03 — Visão geral | Indicadores, pendências, próximas vigências e atualização dos dados | Autenticados, com conteúdo por escopo | L1 simples; L2 completo (RF8) |
| T04 — Solicitações | Lista pessoal ou recebida, filtros, situação e responsável atual | Solicitantes e operadores autorizados | L1 |
| T05 — Solicitação | Criar, salvar rascunho, enviar, aceitar/devolver, corrigir | Solicitante; análise por operador | L1 |
| T06 — Busca de portarias | Busca, filtros, paginação, ordenação; variante “Minhas participações” | Consulta autenticada | L1 |
| T07 — Detalhe da portaria | Resumo, membros, documento, texto compilado (normativas), referências, histórico e comunicações | Conforme acesso ao registro | L1 |
| T08 — Elaboração | Etapas de composição, dispositivos, membros, horas, funções e prévia | Gabinete e CGP | L1 |
| T09 — Validação e aceite | Fila, escopo de análise, parecer, correções e decisões | Validadores; aceite: D04 | L1 |
| T10 — Assinatura | Fila do signatário, versão aprovada, envio para assinatura, retorno e verificação | DG/Vice habilitado; operador registra retorno externo | L1 |
| T11 — Publicação e envio | Registro de um ou mais canais de publicação, documento final, destinatários e falhas | Emissores autorizados | L1 |
| T12 — Vigências e ações | Próximos vencimentos, vencidas, sem término, revogações agendadas; encerrar ou abrir ato vinculado | Consulta e operação conforme perfil | L1 (tratamento); L2 (assistentes) |
| T13 — Relatórios | Servidor × portarias, horas, anual e situações, em data de referência | Perfis autorizados: D17 | L2 |
| T14 — Servidores | Lista, cadastro, origem dos dados, situação funcional e participações | Gestão cadastral: CGP (H-D15) | L1 |
| T15 — Participantes não servidores | Alunos e comunidade; nome, CPF e contato | Operadores autorizados | L1 |
| T16 — Memorandos e processos | Referências, origem, vínculos com portarias e documentos associados | Conforme permissão | L1 |
| T17 — Usuários e administração | Contas, papéis com escopo, signatários e substituições, serviços e configurações | Administrador; alcance DG: D02 | L1 mínimo |
| T18 — Notificações e conta | Alertas, leitura, acesso ao objeto e dados da conta | Próprio usuário autenticado | L2 (central); L1 (conta) |
| T19 — Documento e modelos **(v3)** | Visualizador do documento do ato (minuta, versão para assinatura, assinado); manutenção versionada do modelo institucional | Emissores (Gabinete e CGP) | L1 |
| T20 — Caixa de pendências | Ações que dependem do usuário ou de sua fila, separadas de alertas informativos | Usuários com ações de fluxo | L1 |

As telas T07–T12 podem compartilhar abas e painéis. O inventário representa capacidades, não a obrigação de criar vinte páginas independentes.

### 4.3 Jornadas (v3)

Cada jornada vira um fluxo de protótipo no Figma e uma tarefa do teste de usabilidade (§13.3). Variantes de hipóteses ainda abertas aparecem como fluxos alternativos anotados.

| ID | Perfil | Jornada | Telas | Lanç. |
| --- | --- | --- | --- | --- |
| J01 | Docente | Solicita uma comissão: assunto, justificativa, membros, horas sugeridas (aviso de RN7), vigência → revisa → envia → recebe devolução → corrige → reenvia. | T05, T04 | L1 |
| J02 | Gabinete/CGP | Aceita a solicitação (H-D04), inicia a elaboração com os dados copiados sobre o modelo institucional, monta os dispositivos, define funções e horas, confere a minuta e submete à validação. | T20, T05, T08, T19 | L1 |
| J03 | DEPE ou DAP | Abre a pendência, vê como editáveis só as linhas do seu departamento, ajusta horas, valida ou devolve com motivo. | T20, T09 | L1 |
| J04 | DG + Gabinete/CGP | DG recebe a versão aprovada, assina no mecanismo institucional fora do sistema (H-D10); operador anexa o arquivo; sistema mostra “em verificação” e, depois, “verificada” ou o motivo da recusa. Variante anotada: assinatura integrada (futura). | T20, T10 | L1 |
| J05 | Gabinete/CGP | Registra a publicação no canal exigido; envio automático dos e-mails; vê uma falha e um membro sem contato; reenvia só para quem falhou. | T11, T07 | L1 |
| J06 | Gabinete/CGP | Recebe alerta de vencimento e decide: registrar encerramento ou abrir portaria de renovação vinculada. | T20, T12, T08 | L1 (assistente no L2) |
| J07 | Servidor | Consulta “Minhas participações”, abre uma portaria e baixa o documento para comprovar a carga horária. | T06, T07 | L1 |
| J08 | Gabinete/CGP | Recebe alerta de aposentadoria de um membro, avalia a participação e abre portaria de alteração da composição. | T20, T07, T08 | L1 (assistente no L2) |
| J09 **(v3)** | Administrador | Habilita a conta de um servidor, atribui papel DEPE com escopo do departamento e registra o período de substituição do DG, com referência ao ato. | T17 | L1 |
| J10 **(v3)** | CGP | Elabora portaria de lotação (pessoa, setor de origem e destino, data de efeito) e consulta a situação depois da data de efeito. | T08, T07 | L1 |
| J11 **(v3)** | Gabinete | Elabora uma normativa, responde às perguntas de classificação de canal (art. 68) e vê quais canais de publicação serão exigidos. | T08, T11 | L1 |
| J12 **(v3)** | Gabinete/CGP | Encontra erro material numa portaria publicada e faz retificação, sem criar alteração substantiva; o original continua consultável. | T07, T08, T11 | L1 |

### 4.4 Esqueleto das telas-chave

Descrição em regiões, para orientar o wireframe de baixa fidelidade.

**T03 — Visão geral**
- Topo: saudação curta, papéis ativos e “Atualizado em hh:mm”.
- Faixa 1: contadores clicáveis de pendências do usuário (abrem T20 filtrada).
- Faixa 2: “Vencem em breve” (prazo da H-D13, como parâmetro) e “Vencidas sem encerramento”.
- Faixa 3 (emissores e diretores): situação das portarias do ano, com link para T13.
- Servidor sem papel de gestão: “Minhas solicitações” e “Minhas participações vigentes” com horas semanais atribuídas.

**T05 — Solicitação**
- Topo: título, situação, responsável atual.
- Corpo em seções: Demanda e justificativa → Finalidade e atividade → Membros e horas → Vigência → Referências → Revisão.
- Campos obrigatórios mudam conforme a finalidade (variante V2 de D07); a interface diz por que cada campo é ou não exigido.
- Barra inferior: “Salvar rascunho” e “Enviar solicitação”. Se o envio estiver indisponível, a barra lista o que falta, com link para cada campo — o botão nunca fica desabilitado sem explicação. A barra não pode cobrir o campo em foco.
- Painel de devolução no topo, quando houver: motivo, autor, data e campos afetados destacados.

**T07 — Detalhe da portaria**
- Faixa de acompanhamento: identificador completo, assunto, situação do ato (§6.1), marcadores e próxima ação com responsável.
- Abas: Resumo · Documento · Texto compilado (normativas) · Membros e horas · Validações e assinatura · Publicação · Referências · Histórico · Comunicações.
- Lateral (desktop): vigência, vínculos (altera/é alterada por, revoga/é revogada por, retifica/é retificada por), downloads.

**T08 — Elaboração**
- Esquerda: etapas (Identificação → Dispositivos → Membros/funções/horas → Vigência e referências → Revisão), conforme a finalidade.
- Centro: formulário da etapa.
- Direita (≥1280 px, alternável): minuta ao vivo.
- Rodapé: estado de gravação explícito — “Não salvo”, “Salvando…”, “Salvo às hh:mm”, “Falha ao salvar” ou “Conflito de versão” — e “Submeter para validação”. Gravação automática depende de contrato com o backend; sem ele, só gravação manual.

**T09/T10 — Validação e assinatura**
- Desktop largo: fila à esquerda, documento no centro, checklist e ações à direita.
- Notebook e mobile: fila em tela própria; ao abrir um item, documento e checklist viram abas, com as ações fixas no rodapé, sempre visíveis.
- Checklist: o que cabe ao usuário (linhas do seu departamento, pendências) e ações “Validar”, “Devolver” (exige motivo) ou “Enviar para assinatura” / “Registrar retorno”.

**T12 — Vigências**
- Abas: Vencem em breve · Vencidas sem encerramento · Sem término · Revogações agendadas · Todas vigentes.
- Ações por linha conforme o tipo: “Encerrar”, “Renovar”, “Alterar”, “Revogar”, “Retificar”.

**T20 — Pendências**
- Três grupos visualmente distintos: **minhas tarefas** (atribuídas a mim), **fila do meu papel** (compartilhada, ex.: “Gabinete”) e **alertas informativos** (não exigem ação).
- Cada item: o que fazer, objeto, desde quando, quem enviou, botão que abre exatamente a etapa.

## 5. Modelo de informação visível

### 5.1 Solicitação

| Campo | Regra e tratamento proposto |
| --- | --- |
| Assunto | Obrigatório no envio, RN4. É o “nome da portaria” usado na busca de RF6 (hipótese, §2.1). |
| Propósito/descrição e justificativa | Exigidos pela narrativa RC12; campos próprios. |
| Finalidade pretendida | Designação de trabalho, lotação ou normatização (RC13); indicação de ato atingido quando a solicitação for de alteração, renovação ou revogação. |
| Membros indicados | RN4: obrigatórios no envio. **Variante V1 (literal da fonte):** sempre obrigatórios. **Variante V2 (proposta, D07):** obrigatórios para designação de trabalho e lotação; dispensados para normativa e revogação. O protótipo mostra as duas até a homologação. |
| Carga horária semanal sugerida | Por membro, segundo a narrativa; distinguir sugestão da carga aprovada. Aviso de RN7 na solicitação, sem bloquear. |
| Período de vigência | Obrigatório, RN4; datas inicial/final com validação de ordem. Término opcional e retroatividade só se D08 aprovar. |
| Memorandos, processos e anexos de apoio | Quando aplicáveis; obrigatoriedade e formatos: D11. |
| Solicitante, setor e datas | Preenchimento pelo sistema a partir do usuário e dos eventos. |
| Situação e devoluções | Etapa, responsável, motivo de retorno e histórico. |

Salvar rascunho incompleto é uma proposta de conveniência. O envio aplica os obrigatórios da variante vigente. A criação direta pelo emissor continua possível, pois a demanda também pode nascer no próprio Gabinete.

### 5.2 Portaria

| Grupo | Campos e controles |
| --- | --- |
| Identificação | Série de numeração, número, ano, data de emissão, assunto, tipo do ato, finalidade e operação sobre outro ato. Número e assunto obrigatórios na elaboração, RN5. **(v3.1)** A série depende da natureza do ato (D09): normativas seguem série contínua; portarias de pessoal, série própria reiniciada a cada ano (Decreto 12.002/2024, art. 22). **(v3.2)** Quais séries o campus tem, a autoridade de cada uma e o compartilhamento entre Gabinete e CGP são **hipóteses** até o levantamento da Etapa 0; o sistema trata séries como cadastro configurável, sem fixá-las no código. A finalidade escolhida na interface ajuda a sugerir a série, mas a natureza material do ato é confirmada pelo emissor. O **identificador de lista** (usado na busca e nas telas, ex.: `Pessoal 123/2026`) é distinto da **epígrafe oficial** do documento, que segue o modelo da natureza (§7.10). |
| Texto | Ementa quando aplicável, caput (preâmbulo), “RESOLVE:” e dispositivos estruturados conforme o Manual de Redação (§7.3). |
| Atividade | Nome e natureza: comissão, núcleo, conselho, colegiado ou outra categoria homologada. Para lotação e normativa, conforme D07/D20. |
| Participação | Membros, identificação, vínculo, departamento, aprovação, horas semanais individuais, atribuições e data de entrada/saída do membro. RN5 exige aprovação dos indicados, horas e presidência/vice-presidência; exceções: D07. |
| Lotação | Para portarias de lotação/localização: pessoa, setor de destino, setor de origem e data de efeito (D20). O sistema **não** atualiza a base de pessoal automaticamente. |
| Datas e vigência **(v3.2)** | Datas distintas, cada uma com origem conhecida: **assinatura**; **publicação em cada canal**; **publicação de referência** (a que conta para a cláusula de vigência, conforme regra de D11 quando há mais de um canal oficial); **cláusula de vigência** (Decreto 12.002/2024, art. 18: na data da publicação, em data expressa, ou após prazo contado da publicação); **início de vigência**; **início de efeitos específicos**, quando diferente da vigência; **término**, quando aplicável; **data de registro** da evidência no Gestor; dados de encerramento. O início de vigência é **derivado** da cláusula e da publicação de referência sempre que possível, com a regra de derivação registrada; o operador não redigita a mesma data em vários campos. Réplica registrada depois não altera nenhuma dessas datas. |
| Documentos relacionados | Memorandos; processos; atos alterados, renovados, revogados ou retificados, com alcance (total/parcial) e data de efeito. |
| Assinatura | Versão aprovada, signatário, modo (integrado/externo), arquivo assinado, resultado da verificação (§7.5). |
| Publicação | Um ou mais registros de canal, com evidência (§7.6). |
| Controle | Versão, responsáveis, validações, aceite, eventos de emissão e histórico. |

**Obrigatórios na elaboração por finalidade — proposta H-D07 (v3).** A coluna “Literal” mostra a leitura de RN5 sem exceções; as demais colunas são **divergência da fonte** até a homologação.

| Campo | Literal (RN5) | Designação de trabalho | Lotação/localização | Normativa | Revogação |
| --- | --- | --- | --- | --- | --- |
| Número, assunto, dispositivos | Obrigatório | Obrigatório | Obrigatório | Obrigatório | Obrigatório |
| Membros/pessoas | Obrigatório | Obrigatório | Obrigatório (pessoa lotada) | Opcional (se o ato citar pessoas) | Opcional |
| Carga horária individual | Obrigatória | Obrigatória | Não se aplica | Só para pessoas designadas no ato | Não se aplica |
| Presidente / vice | Obrigatório | Conforme regra do órgão colegiado; padrão do protótipo: presidente obrigatório, vice quando previsto | Não se aplica | Não se aplica | Não se aplica |
| Cláusula de vigência (início derivado, §5.2) **(v3.2)** | — | Obrigatória | Obrigatória | Obrigatória | Obrigatória |
| Término de vigência | — | Obrigatório | Conforme D08 | Conforme D08 | Não se aplica |
| Ato(s) atingido(s) | — | Se altera/renova | Se altera | Se altera/revoga | Obrigatório, com alcance e data de efeito |

Não aplicar automaticamente um modelo de comissão a uma portaria normativa, de lotação ou de revogação.

**Identificação de pessoas no documento — proposta H-D21 (v3):** padrão recomendado para o documento a publicar: servidor por nome e SIAPE; aluno e pessoa externa por nome e identificação parcial (ex.: CPF com dígitos centrais) ou outro identificador homologado. Isso reduz exposição, mas SIAPE e CPF parcial **continuam sendo dados pessoais**. O conteúdo da versão pública é definido **antes da assinatura**; o original assinado nunca é alterado para gerar outra versão.

### 5.3 Servidores, participantes e contas

**Cadastro de servidor — todos obrigatórios segundo a fonte:** nome, CPF, SIAPE (grafia a confirmar), órgão de lotação, departamento de lotação, cargo, telefone, e-mail, endereço completo e chefia imediata. Decomposição do endereço proposta: logradouro, número/complemento, bairro, município, UF e CEP. **(v3)** A finalidade do endereço completo no sistema de portarias não está clara; recomenda-se que o IFC a reavalie em D15 (minimização), mantendo-o obrigatório enquanto a fonte exigir.

**Origem dos dados — H-D15 (v3):**

- **Autenticação e fonte cadastral são contratos diferentes.** O LDAP serve para entrar no sistema; não se presume que contenha cadastro funcional completo. Dados funcionais viriam do SIGRH (ou do SIG), se houver integração autorizada — a confirmar com a TI.
- **Fonte por campo:** cada atributo registra de onde vem (oficial importado ou manual), data do dado e última sincronização bem-sucedida.
- **Divergência:** quando o dado importado conflita com o cadastro atual, a tela mostra os dois valores e a rota de correção: pedir correção na fonte oficial ou, se autorizado, exceção manual registrada pela CGP com justificativa.
- **Falha de sincronização:** não remove vínculos, permissões nem participações; mostra “dados de dd/mm/aaaa — sincronização falhou” até nova tentativa.
- **Histórico:** lotação, chefia e composição registradas em portarias anteriores não são reescritas por mudança cadastral atual.

**Chefia imediata:** referência a outro cadastro quando possível; prever chefia externa ao campus (ex.: DG, cuja chefia está na Reitoria) e preservar a chefia histórica.

**Situação funcional, conta e elegibilidade (v3) — três coisas diferentes:**

| Dimensão | Valores de exemplo | Efeito no protótipo |
| --- | --- | --- |
| Situação funcional | Ativo, afastado (com período), aposentado, desligado | Evento confiável gera alerta de revisão das participações vigentes (§7.11). **Motivo do afastamento não é exibido** nas filas. |
| Situação da conta | Habilitada, suspensa, encerrada | Afeta só o acesso ao sistema, não a participação em portarias. |
| Elegibilidade para a atividade | Definida por regra homologada (D24) | Sem regra homologada, o sistema **avisa** ao indicar alguém não ativo, mas **não bloqueia**. Aposentado pode participar como vínculo externo, se a regra permitir. |

Apresentar erro por campo e resumo no envio. CPF e SIAPE são identificadores textuais, preservando zeros à esquerda; validar dígito verificador do CPF.

**Exclusão de cadastro (v3.1):** a interface não oferece exclusão que destrua vínculos ou histórico; a ação disponível ao operador é **inativar**. Eliminação de dados cadastrais e preservação de documentos seguem a política arquivística e de dados homologada (D16) e são executadas por procedimento próprio, não por um botão de lista. O plano não promete nem guarda eterna de todo campo, nem eliminação automática.

**Participante aluno ou externo:** nome completo e CPF são exigidos pela narrativa. Não exigir SIAPE, cargo ou endereço de servidor. E-mail recomendado para viabilizar RF5 (D12). **(v3)** Alunos podem ser menores de idade: coletar só o necessário e verificar com a área responsável o tratamento aplicável (LGPD, art. 14).

**Conta de acesso:** usuário, identidade associada, origem local/LDAP, situação de habilitação, papéis com escopo e departamento de atuação. O cadastro de uma pessoa não cria automaticamente uma conta; a conta não confere automaticamente poder de emissão ou assinatura.

**Integridade:** pesquisar pessoa já cadastrada antes de incluir outra; validar duplicidades conforme contrato do backend; impedir a mesma pessoa duas vezes na mesma composição sem regra explícita. Edição cadastral não reescreve documentos históricos.

## 6. Ciclo de vida, situações e histórico

### 6.1 Situação exibida (v3)

A fonte mistura sete termos de status. A v3 calcula **dois níveis separados** e só depois escolhe o rótulo. O rótulo é uma síntese de interface; os relatórios usam as dimensões, não o rótulo.

**Nível 1 — Etapa da versão em produção** (vale para qualquer registro ainda não publicado, independentemente das datas):

Rascunho · Em validação · Devolvida · Aguardando assinatura · Assinatura em verificação · Aguardando publicação · Publicação parcial.

**Nível 2 — Situação do ato publicado — tabela de decisão (v3.1)**

Calculada em uma **data de referência R** (padrão: hoje). **Recorte histórico (v3.2):**

- **Publicação:** o ato só conta como publicado em R se a publicação de referência (§5.2) tem data ≤ R. Um ato publicado depois de R aparece, naquela data, no nível 1 (se a minuta já existia em R) ou não aparece.
- **Eventos já eficazes** (revogação, encerramento, alteração com data de efeito ≤ R) **definem a situação** pela tabela abaixo.
- **Eventos futuros conhecidos** (registrados até a data de geração, com data de efeito > R) **não mudam a situação**, mas geram marcadores de agendamento (“Revogação agendada”, “Alteração a vigorar em dd/mm/aaaa”).
- Cada evento guarda a **data de registro** e a **data de efeito**. Relatórios informam “calculado com os registros existentes em dd/mm/aaaa”, pois um evento registrado depois com efeito retroativo muda o resultado de uma data passada.
- “Início” na tabela é o **início de vigência** derivado da cláusula de vigência (§5.2), não a data de publicação.

As linhas são avaliadas **em ordem**; a primeira que se aplica define a situação. Cada condição já exclui as anteriores, de modo que um ato tem exatamente uma situação em R.

| Ordem | Situação | Condição em R | Por que nessa ordem |
| --- | --- | --- | --- |
| 1 | Revogada | Revogação **total** com efeito ≤ R | A revogação extingue os efeitos do ato; prevalece sobre qualquer data. |
| 2 | Encerrada | Encerramento registrado com data ≤ R | Hipótese H-D14: o encerramento registrado põe fim à vigência a partir da sua data. **Variante a homologar:** encerramento só registra a conclusão da atividade e a vigência segue as datas; nesse caso, “Encerrada” vira marcador e a linha 2 sai da tabela. |
| 3 | Vigência futura | Início de vigência > R (com ou sem término) | O ato ainda não produz efeitos, mesmo que já publicado. |
| 4 | Vencida — sem encerramento | Há término e término < R | Período encerrado sem registro de conclusão. |
| 5 | Vigente | Início ≤ R e término ≥ R | Dentro do período. |
| 6 | Vigente — sem término | Início ≤ R e sem término | Sem data final; nunca vira “vencida” por falta dela. |

As linhas 3 a 6 são mutuamente exclusivas pelas próprias condições; a ordem só importa entre as linhas 1, 2 e o restante.

**Marcadores cumulativos** (aparecem junto da situação, nunca a substituem): Revogação parcial (com dispositivos/membros atingidos) · Revogação agendada (efeito futuro) · Alterada por… · Renovada por… · Retificada por… · Alteração em preparação (link para a minuta do novo ato).

**Regras de exibição:**

1. Registro não publicado mostra **só** o nível 1, mesmo com datas no passado.
2. Registro publicado mostra o nível 2 e os marcadores.
3. Uma alteração em elaboração é **outro registro**; o ato vigente continua com sua situação e ganha o marcador “Alteração em preparação”.

**Mapeamento para os relatórios — H-D05:**

| Categoria da fonte | Contagem proposta |
| --- | --- |
| Em edição | Registros no nível 1 na data de referência. |
| Em vigência / Em andamento | Vigente + Vigente — sem término. |
| Vigência futura | Categoria própria, informada à parte (não somada a “em vigência”). |
| Vencidas | Vencida — sem encerramento. |
| Encerradas | Encerrada. |
| Revogadas | Revogada (total). Revogações parciais aparecem como contagem complementar. |
| Atualizadas | Atos com marcador “Alterada por” ou “Renovada por”. Contagem à parte, com nota de que se sobrepõe às outras categorias. |

Contar **atos**, não versões nem membros. O significado de “Em andamento” deve ser homologado.

### 6.2 Fluxo principal proposto

```text
Solicitação enviada OU demanda interna do emissor
  → aceite da solicitação (só quando há solicitação)  ← H-D04
  → elaboração (minuta)
  → validação departamental (DEPE/DAP, para seus servidores)
  → validação final do Gabinete/CGP                    ← H-D04
  → versão aprovada para assinatura (congelada)
  → assinatura e verificação                           ← H-D10
  → publicação nos canais exigidos para o ato          ← H-D11
  → comunicação aos membros
  → acompanhamento da vigência e da atividade
  → encerramento ou novo ato vinculado (renovação, alteração, retificação, revogação)
```

**Tipos de aceite (v3) — decisões diferentes, não necessariamente exclusivas (D04):**

| Ação | Significado | Situação no protótipo |
| --- | --- | --- |
| **Aceitar solicitação** | Gabinete/CGP aceita a demanda para elaborar | **Fluxo principal (H-D04).** Não existe em demanda interna sem solicitação. |
| **Registrar ciência do membro** | Membro indicado concorda com a designação | Variante anotada. Exigiria destinatários, prazo, recusa e, para externos, um meio de resposta sem conta. |
| **Registrar anuência da chefia** | Chefia concorda com a carga horária do subordinado | Variante anotada. A obrigatoriedade do campo “chefia imediata” justifica investigar, mas não comprova que esse fluxo exista. |

Adotar as variantes depois pode exigir mudanças de fluxo, de telas e de critérios; o protótipo reserva espaço para elas no indicador de etapas, sem prometer que entram sem redesenho.

**Validações (H-D04):** departamentais cumulativas (cada departamento com membros lotados nele valida sua parte) mais a validação final do Gabinete/CGP. Membros sem departamento validador (externos, outras unidades) ficam a cargo da validação final. Se um validador alterar horas ou composição, as validações já dadas para as partes afetadas são invalidadas e voltam para a fila. RN6 usa “e/ou”; a combinação precisa ser homologada.

Devoluções levam o processo à correção com motivo e histórico. Rejeição definitiva, cancelamento e retirada de solicitação são possibilidades de desenho a validar.

### 6.3 Transições e proteções a desenhar

| Ação | Pré-condições | Resultado visível |
| --- | --- | --- |
| Enviar solicitação | Campos obrigatórios da variante vigente (§5.1) | Protocolo interno e acompanhamento em T04/T05. |
| Aceitar solicitação | Operador emissor; H-D04 | Solicitação vinculada à portaria em elaboração. |
| Preparar portaria | Operador emissor autorizado | Minuta vinculada à solicitação, quando existente. |
| Submeter para validação | Obrigatórios aplicáveis preenchidos | Itens a validar, responsáveis e versão em análise. |
| Validar/devolver | Escopo institucional/departamental autorizado | Decisão, responsável, data e justificativa de devolução. |
| Aprovar para assinatura **(v3)** | Todas as validações exigidas concluídas | Versão congelada, sem marca de minuta; qualquer edição posterior gera nova minuta e invalida as aprovações. |
| Assinar / registrar assinatura | Signatário habilitado na data; versão aprovada | “Anexada” → “Em verificação” → “Verificada” ou “Recusada na verificação” (§7.5). |
| Publicar | Assinatura verificada; canais oficiais exigidos para o ato | “Publicação parcial” até registrar todos os canais **oficiais** exigidos; depois “Publicada”. Divulgação pendente vira marcador e tarefa (§7.6). |
| Comunicar membros | Publicação concluída (H-D12) | Situação individual de cada mensagem; independe da conclusão da publicação. |
| Renovar/alterar | Regra homologada em D14 | Novo ato vinculado; documento anterior preservado. |
| Substituir/incluir/excluir membro | Ato vigente; ato de alteração (H-D14) | Membro anterior com data de saída; horas a partir da data de efeito. |
| Retificar **(v3.1)** | Lapso manifesto no ato publicado | Retificação vinculada, abrangendo só o trecho com o lapso; original preservado. Para atos normativos, o art. 74 do Decreto 12.002/2024 prevê assinatura pelas autoridades que subscreveram o ato e, como **modalidade específica**, a correção de erro material que não afeta substância nem alcance, com anuência da autoridade em vez de nova assinatura. Critérios, autoridade, assinatura/anuência e fluxo (que pode ser mais curto que o de uma nova portaria): D14. |
| Republicar **(v3)** | Publicação diferente do original assinado | Nova publicação do trecho ou do ato; registro do motivo (art. 73, para atos normativos). |
| Revogar | Autoridade, ato de revogação e alcance homologados | Vínculo entre ato revogador e ato atingido; alcance total/parcial e data de efeito explícitos. |
| Encerrar | Critério de conclusão e responsável homologados | Registro da decisão e da conclusão da atividade. |
| Registrar mudança funcional | Evento da base oficial ou alteração pela CGP | Alerta de revisão para cada portaria vigente com a pessoa; documento não muda. |

O vencimento da data final gera sinalização e alertas. **Não equivale automaticamente à conclusão da atividade, ao encerramento administrativo nem à revogação.**

### 6.4 Histórico

No detalhe, linha do tempo com evento, autor, data/hora, situação anterior/nova, motivo e documento associado. Versões anteriores consultáveis conforme autorização; comparação de versões é proposta (L3).

Guarda, temporalidade e destinação de documentos e rascunhos seguem a política arquivística homologada (D16), não uma regra fixa de “nunca excluir” ou “sempre excluir”. Exclusão definitiva de portarias emitidas não é ação padrão da interface.

## 7. Especificação dos fluxos e telas principais

### 7.1 Acesso e recuperação — T01/T02

- Entrada local por usuário e senha, RF1; senha mascarada com controle acessível para exibir.
- Acesso institucional LDAP, RF3. Definir com a TI o protocolo suportado; não pressupor login por redirecionamento. Hipótese de UI: um único formulário; o sistema identifica a origem da conta.
- Recuperação local por link enviado ao e-mail previamente cadastrado, RF2/RN2.
- Recuperação LDAP orienta o usuário ao serviço institucional responsável, RN3; não alterar a senha LDAP localmente.
- Estados: credenciais inválidas, conta não habilitada, serviço indisponível, envio solicitado, link inválido/expirado/usado e alteração concluída.
- Resposta ao pedido de recuperação que não revele a existência de contas; prazo e uso único do link definidos com a TI.
- Consulta de portarias e acesso aos arquivos exigem sessão, RN1. Ao expirar a sessão, encaminhar ao acesso e recuperar o contexto quando permitido.

### 7.2 Solicitar e acompanhar — T04/T05

Formulário em blocos: demanda e justificativa; finalidade e atividade; membros e horas sugeridas; vigência; referências; revisão. A revisão mostra exatamente o que será enviado. **(v3)** A revisão é uma ajuda: o envio também pode ser acionado dela, e a decisão de torná-la obrigatória fica para o teste de usabilidade.

O solicitante acompanha a solicitação, o responsável atual e as devoluções, e corrige o que lhe for devolvido. A fila do Gabinete/CGP mostra os dados enviados e as ações aceitar (H-D04), devolver ou iniciar a elaboração.

Critérios: valores preservados em falha; salvar rascunho não informa “solicitação enviada”; envio evita duplicidade; o vínculo com a portaria gerada permanece consultável.

### 7.3 Elaborar — T08

**Etapas:** identificação (tipo, finalidade, operação sobre outro ato) → dispositivos → membros/funções/horas → vigência e referências → revisão e minuta. As etapas exibidas dependem da finalidade (H-D07).

**Editor de dispositivos (v3.1)** — regras do Decreto 12.002/2024, arts. 12 a 14 (aplicáveis aos atos normativos da administração federal autárquica, art. 2º), da LC 95/1998, arts. 10 a 12, e do Manual de Redação da Presidência da República (art. 75). Adotadas como padrão também para os demais atos, salvo decisão em contrário do Gabinete.

**Árvore válida (art. 12):**

- O artigo se desdobra em **parágrafos ou incisos** — um artigo pode ter incisos diretamente, sem parágrafos.
- O parágrafo se desdobra em incisos; o inciso, em alíneas; a alínea, em itens; o item, em subitens.
- Artigos podem ser agrupados em capítulos, seções e subseções.
- O editor só oferece os filhos permitidos para cada nível e explica por que outro nível não está disponível.

**Numeração exibida (art. 12):** “Art. 1º” a “Art. 9º” (ordinal) e “Art. 10.” em diante (cardinal, com ponto); “§ 1º” a “§ 9º”, “§ 10.” ou “Parágrafo único.”; incisos em romanos seguidos de hífen (“I -”); alíneas em letras minúsculas com parêntese (“a)”); itens e subitens em algarismos com ponto (“1.”). O texto termina com ponto, ponto e vírgula ou dois-pontos conforme o nível e a posição; o editor sugere a pontuação.

**Identificador estável:** cada dispositivo tem um identificador interno que não muda quando o número exibido muda. Remissões internas (“conforme o art. 3º”) apontam para esse identificador e são atualizadas quando o número exibido muda.

**Quando o editor permite editar (v3.2):** só a **minuta editável** — etapa Rascunho ou Devolvida, ainda não congelada para assinatura. Versão em validação, versão aprovada para assinatura, documento em verificação de assinatura e documento assinado (mesmo que ainda não publicado) abrem **somente em leitura** no editor. Isso não elimina a competência de DEPE/DAP para ajustar membros, horas e vigência do seu departamento durante a validação: esses ajustes seguem a §7.4, fora do editor de dispositivos. Para mudar uma versão congelada, a ação é “Criar nova minuta a partir desta versão”: gera nova identificação de versão, invalida as aprovações afetadas (CA35) e preserva a versão anterior e o documento assinado.

**Duas numerações dentro da mesma minuta (v3.2):**

| Conjunto de dispositivos | Exemplo | Regras |
| --- | --- | --- |
| **Dispositivos próprios da minuta** | Os arts. 1º e 2º da portaria que está sendo redigida, inclusive de uma portaria alteradora | Inserir, mover, recuar e avançar níveis livremente enquanto a minuta for editável; renumeração automática; remissões internas atualizadas. |
| **Dispositivos do ato atingido** | O art. 5º-A que a portaria alteradora acrescenta a outra portaria já publicada (art. 13, III) | Indicar para cada dispositivo se é nova redação, acréscimo ou revogação. **Vedado renumerar artigos e parágrafos** do ato atingido (art. 14, IV); acréscimo entre dispositivos usa o número anterior com hífen e letra maiúscula (“Art. 5º-A”); **vedado reaproveitar número de dispositivo revogado** (art. 14, VI). Incisos, alíneas e itens só são renumerados nas hipóteses do art. 14, V. O texto gerado usa “passa a vigorar com as seguintes alterações”, a indicação “(NR)” e as linhas pontilhadas do art. 14, VIII. |

Os dois conjuntos são independentes: reorganizar os artigos próprios da minuta alteradora não renumera os dispositivos do ato atingido, e as restrições do ato atingido não travam a organização da minuta.

Alteração substancial pode ser feita por nova norma que revoga a anterior (art. 13, I); nesse caso, só há dispositivos próprios, com vínculo de revogação. Os dispositivos estruturados alimentam o texto compilado (§7.7).

Composição dos membros, atribuição de presidência/vice e minuta (T19) completam a etapa. A minuta é identificada como não assinada/não publicada.

Na tabela de membros: nome, vínculo, departamento, identificador conforme permissão, função, horas propostas/aprovadas, situação funcional (sem motivo de afastamento) e resultado da validação. Horas em unidade semanal explícita. Linha com erro explica como corrigir, sem depender só da cor.

**RN7:** impedir atribuição individual superior a 10 horas em portaria administrativa para docente; aceitar exatamente 10 horas. Não aplicar automaticamente o teto a técnicos ou a outra natureza. H-D06: “administrativa” = comissões, núcleos e afins citados na própria RN7; teto por portaria; soma entre portarias apenas informativa. Precisão das horas a homologar.

Uma visão auxiliar pode mostrar a carga acumulada no período, distinguindo soma informativa de restrição efetiva e respeitando datas de entrada/saída (4 h até junho e 2 h a partir de julho não são 6 h simultâneas).

### 7.4 Validar e registrar aceite — T09

Fila com assunto, origem, departamento, membros sob responsabilidade, data do envio e pendências. Na análise, proposta original e composição atual, com parecer por item quando necessário.

DEPE/DAP adicionam/validam membros, cargas e vigência apenas dos servidores do próprio departamento. Em composição com vários departamentos, mostrar quais partes já foram analisadas e quais aguardam decisão; uma validação de departamento **não** conclui a etapa inteira.

**Ajustes durante a validação (v3.2) — como convivem com a versão protegida (D04):**

| Variante | Como funciona em T09 | Efeito |
| --- | --- | --- |
| **A — ajuste departamental gera nova revisão (hipótese de trabalho)** | O texto e os dispositivos submetidos continuam só em leitura. DEPE/DAP editam, num painel próprio, apenas os campos do seu escopo: incluir ou retirar servidores do departamento, horas e vigência dessas participações. Ao salvar, o sistema cria uma **nova revisão** da versão em validação, com a diferença destacada e o autor do ajuste. | As aprovações afetadas são reabertas (CA11): a do próprio departamento, se outro já tinha validado algo que mudou; a validação final do Gabinete/CGP, sempre. Mudança de vigência afeta a portaria inteira e reabre todas. O documento é regerado na nova revisão. |
| B — ajuste exige devolução | DEPE/DAP não editam; usam “Devolver para correção” com o ajuste pedido no motivo, campo a campo. | O emissor ajusta a minuta devolvida e submete de novo; todas as validações recomeçam. |

O protótipo de T09 desenha a variante A e anota a B. Nas duas, o validador nunca altera dispositivos fora do seu escopo nem a redação do texto.

Ações: “Validar”, “Devolver para correção” (exige motivo) e “Aceitar solicitação” quando cabível. Aprovação de membros e validação da portaria são distinguíveis quando forem decisões diferentes.

### 7.5 Assinar — T10 (v3)

**Três documentos, três momentos:**

1. **Minuta de trabalho** — editável, com marca de minuta; nunca enviada para assinatura.
2. **Versão aprovada para assinatura** — gerada quando todas as validações exigidas terminam; conteúdo e versão congelados; **sem marca de minuta**. A interface informa “Aguardando assinatura”. Qualquer edição volta ao item 1 e invalida as aprovações.
3. **Documento assinado** — arquivo retornado pelo mecanismo de assinatura, preservado integralmente.

**Modo externo (H-D10, L1):**

| Situação | O que a tela mostra |
| --- | --- |
| Aguardando assinatura | Botão “Baixar versão para assinatura” e instruções do mecanismo institucional. |
| Assinatura anexada | Arquivo recebido, quem anexou e quando. Ainda **não** conta como assinada. |
| Em verificação | Verificação conforme o mecanismo homologado em D10 (verificador do serviço de assinatura ou conferência registrada por responsável designado). |
| Assinatura verificada | Signatário, instante da assinatura quando comprovável, habilitação do signatário naquela data, resultado da verificação, responsável pelo registro e versão aprovada correspondente. |
| Recusada na verificação | Motivo (signatário sem competência na data, documento de outra versão, assinatura só como imagem, arquivo ilegível) e próxima ação. |

Registrar separadamente o resumo criptográfico (hash) da versão aprovada e o do arquivo assinado; não exigir que sejam iguais, pois a assinatura altera o arquivo. A correspondência de conteúdo é parte da verificação.

**Modo integrado (futuro):** o botão “Assinar” chama o serviço homologado; a interface só confirma após resposta do serviço. Estados: sucesso, recusa, cancelamento, indisponibilidade, processamento e resultado desconhecido — neste caso, consultar a situação antes de permitir repetir.

O nível de assinatura exigido (simples, avançada ou qualificada — Lei 14.063/2020; Decreto 10.543/2020) depende do ato e das normas do IFC (D10). Imagem de assinatura ou clique isolado não comprovam assinatura.

### 7.6 Publicar e comunicar — T11 (v3)

**Registro de publicação por canal.** Uma portaria pode ter um ou mais registros:

| Campo | Observação |
| --- | --- |
| Canal | Boletim de Serviço do campus · Diário Oficial da União · Portal público do SIG (“Publicações oficiais”) · outro homologado |
| Natureza da obrigação **(v3.1)** | **Publicação oficial** (o canal cuja data conta como publicação do ato) · **Divulgação obrigatória** (ex.: sítio com todos os atos, art. 69) · **Réplica** (cópia complementar, sem efeito jurídico próprio) |
| Prazo **(v3.1)** | Quando houver (ex.: divulgação em até um dia útil após a publicação no DOU, art. 69, V) |
| Referência | Edição, seção e página quando aplicável |
| Data | Data da publicação no canal |
| URL e arquivo | Endereço e cópia do que foi publicado |
| Responsável | Quem registrou e quando |

**Canais exigidos por tipo — H-D11:**

- **Designação de trabalho e lotação:** canal institucional homologado (Boletim de Serviço ou portal do SIG — a confirmar em D11/D23).
- **Normativa:** a elaboração pergunta se o ato produz efeitos externos ao IFC, gera despesas, concede direitos a agentes públicos ou dispõe sobre regimento interno. Se sim em qualquer item, o DOU passa a ser o canal de publicação oficial (Decreto 12.002/2024, art. 68); se não, boletim interno é admitido (art. 68, §3º). **(v3.1)** As respostas são uma ajuda: a finalidade escolhida na interface não substitui a **classificação material** do ato, que é feita pelo Gabinete (com orientação jurídica quando necessário) e registrada com justificativa e responsável.
- **Revogação:** proposta de trabalho — no mínimo o canal oficial do ato revogado; exceções registradas em D11.

**Situação da publicação (v3.1):**

| Situação | Condição |
| --- | --- |
| Aguardando publicação | Nenhum canal oficial registrado. |
| Publicação parcial | O ato exige mais de um canal **oficial** e falta pelo menos um. |
| Publicada | Todos os canais oficiais exigidos registrados. **(v3.2)** Cada canal guarda sua própria data de publicação. A **publicação de referência** — a que conta para a cláusula de vigência — segue a regra de D11 quando há mais de um canal oficial (sem presumir a primeira ou a última). O **início de vigência** é derivado da cláusula de vigência (art. 18) e pode ser posterior à publicação. Registrar depois uma réplica não altera nenhuma dessas datas. |
| Marcador “Divulgação pendente” | Publicada, mas falta uma divulgação obrigatória ou ela está fora do prazo. Gera tarefa para o emissor; não muda a situação da publicação. |

Réplicas não exigidas não geram pendência. Anexar arquivo sem registro de canal não conclui a publicação. O sistema registra publicações feitas fora dele; integração automática com canais é evolução. O e-mail aos membros (RF5) dispara quando a situação passa a “Publicada” (D12).

**Comunicação aos membros (RF5) — separada da publicação:**

- Envio **automático e único** quando a publicação é concluída (H-D12); reenvio manual por destinatário, com confirmação e prevenção de duplicidade.
- Estados por destinatário: pendente, sem contato, em processamento, aceito pelo serviço de envio, falha. “Aceito pelo serviço” não significa leitura nem entrega comprovada.
- Membro sem e-mail: a comunicação fica **pendente de cumprimento** do RF5, atribuída ao emissor em T20. A falta de contato **não** bloqueia a publicação e **não** conta como e-mail enviado.
- **(v3.2) Resultado da comunicação por membro — três situações, contadas separadamente:**

| Resultado | Significado | Cumpre RF5 literalmente? |
| --- | --- | --- |
| **E-mail enviado** | Aceito pelo serviço de envio, com o documento anexo | Sim |
| **Comunicação alternativa registrada** | Comunicado por outro meio (ex.: ciência presencial assinada, ofício), com evidência, responsável e data | Não — é tratamento da pendência, não envio de e-mail |
| **Exceção autorizada ao requisito** | Autoridade competente dispensou o e-mail para aquele caso, com justificativa | Não — só é admitida se a alteração de RF5 (ou a exceção) estiver formalmente aprovada em D12, com responsável e alcance |

  Relatórios e métricas de cumprimento mostram as três situações separadas; a homologação de um procedimento alternativo não esconde uma mudança de requisito.
- E-mail não leva CPF; leva participação, vigência e o documento anexo (o mesmo publicado). Limites de anexo com a TI.

### 7.7 Buscar e consultar — T06/T07

**Filtros exigidos por RF6:** nome de servidor, nome/assunto da portaria, número e período. **Complementares:** ano, tipo, finalidade, atividade, departamento, etapa, situação e marcadores.

O filtro de período diz o que pesquisa: emissão, publicação ou sobreposição de vigência. Hipótese: padrão “vigência no período”, com seletor para emissão.

Lista: identificador completo, assunto, atividade, emissão, início/fim de vigência, situação e ação de abrir. Paginação no servidor, ordenação e contagem; filtros mantidos ao voltar.

Detalhe em abas (§4.4). Abas com dados pessoais ou operações dependem da permissão do usuário.

**Texto compilado e divulgação de atos normativos (v3.1):** o art. 69 do Decreto 12.002/2024 exige que atos normativos sejam divulgados em HTML, em endereço permanente e único, com as alterações e revogações registradas no corpo, em sítio com todos os atos do órgão. Ele não determina que o Gestor de Portarias seja esse sítio. D11 escolhe uma de três arquiteturas:

| Alternativa | Como fica | RN1 |
| --- | --- | --- |
| **A — hipótese de trabalho** | O Gestor é autenticado; a divulgação oficial fica em portal externo (institucional ou SIG). O detalhe do ato mostra o link oficial; o texto compilado interno é identificado como **cópia de trabalho**. | Intacta |
| B | O Gestor exporta ou integra o texto para o portal institucional existente. | Intacta |
| C | O Gestor passa a ter uma área pública de divulgação. | Exige mudança formal de RN1, responsáveis e controles; fora do escopo atual |

Em qualquer alternativa, a compilação registra: responsável pela revisão, data da última atualização, **data de efeito de cada mudança** e vínculo com o original. Uma alteração com efeito futuro **não** substitui a redação em vigor: aparece como “redação a vigorar a partir de dd/mm/aaaa”, ao lado da redação atual. O texto original continua acessível.

“Minhas participações” reúne portarias vinculadas à pessoa autenticada e as horas pertinentes. Downloads preservam o documento original e passam pela autorização do servidor.

### 7.8 Acompanhar, renovar, alterar, revogar e encerrar — T12

Lista de vigências com data final (ou “sem término”), tempo restante, responsável pela ação, situação e alertas. Prazos de aviso, recorrência e canais: D13 (no protótipo, como parâmetro, nunca como número fixo na tela).

- **Renovação:** novo ato com referência ao anterior e período pretendido; não sobrescrever a data final.
- **Alteração:** identificar o ato de origem e os dispositivos/membros alterados; documento anterior consultável.
- **Retificação:** para lapso manifesto; a correção de erro material sem efeito sobre substância ou alcance é uma modalidade específica, com procedimento próprio (§6.3, D14). **(v3.1)**
- **Revogação:** selecionar o ato atingido e preparar o ato revogador, com alcance total/parcial e data de efeito (D14). Revogação com efeito futuro aparece como “Revogação agendada”.
- **Encerramento:** decisão e dados de conclusão da atividade (D14); a situação “Vencida — sem encerramento” continua visível até o registro.

No L1 essas ações abrem a elaboração normal com o vínculo preenchido; assistentes dedicados chegam no L2. Confirmações nomeiam a portaria, a consequência e a data de efeito. Alertas não executam ações automaticamente.

### 7.9 Cadastrar e administrar — T14–T17

Cadastros de pessoas separam dados pessoais, vínculo funcional, lotação e chefia, com a origem de cada campo (§5.3). O detalhe do servidor mostra portarias e carga horária conforme permissão.

Memorandos: identificação, órgão emissor, data, assunto, referência/URL e arquivo quando disponível. Vários memorandos por portaria; a ausência de memorando não impede a demanda.

Administração: contas, papéis com escopo, estrutura organizacional, signatários e substituições (com referência ao ato de nomeação/designação), parâmetros aprovados e serviços. Não pressupor cadastro público nem permitir que configurações alterem silenciosamente regras fixas, como RN7.

Configuração de LDAP, e-mail, assinatura e integrações mostra estado operacional sem expor senhas ou tokens. Mudança de papéis mostra usuário afetado e consequência; registra autoria e data.

### 7.10 Documento e modelos — T19 (v3)

T19 reúne três coisas que não podem se confundir:

| Parte | O que é | Quem mexe |
| --- | --- | --- |
| **Documento do ato** | Visualização do ato concreto: minuta, versão aprovada para assinatura ou documento assinado (§7.5) | Ninguém edita aqui; o conteúdo vem de T08 |
| **Seleção de modelo** | Escolha do modelo institucional na criação do ato | Emissor, em T08 |
| **Manutenção do modelo institucional** | Cabeçalho, epígrafe, preâmbulo padrão, bloco de assinatura, rodapé | Gabinete e CGP, com versão, autoria e aprovação; mudança não altera atos já emitidos |

- **Base:** coletar portarias reais publicadas pelo campus (Boletim de Serviço ou portal do SIG) como referência de estrutura, revisada pelo Gabinete/Comunicação antes de virar padrão; não copiar automaticamente o formato de publicações antigas.
- **Moldura × arquivo oficial (v3.1):** o logotipo, o cabeçalho do aplicativo e os botões pertencem à **moldura do visualizador**, não ao arquivo. O arquivo oficial é composto só pelo modelo da natureza do ato. A **representação publicada** pelo canal externo é guardada como evidência (link e cópia), nunca regenerada pelo sistema.
- **Modelos por natureza (v3.1)** — estrutura e formatação homologadas pelo Gabinete:

| Natureza | Base de formatação | Elementos |
| --- | --- | --- |
| Normativa (e alteração/revogação de normativa) | Decreto 12.002/2024, art. 12: fonte Calibri ou Carlito 12; A4; margens de 2 cm (esquerda) e 1 cm (direita); **sem cabeçalho, rodapé, sublinhado, tachado, cor ou campos automáticos no texto**; epígrafe com a espécie e a data de assinatura, em maiúsculas, centralizada; ementa com recuo de 9 cm | Epígrafe, ementa, preâmbulo, dispositivos (§7.3), cláusula de revogação expressa quando houver (art. 15), assinatura |
| Portaria de pessoal — designação de trabalho | Modelo institucional homologado a partir das portarias em uso no campus | **Comuns:** epígrafe com o identificador da série (D09), data, preâmbulo, “RESOLVE:”, dispositivos, cláusula de vigência, assinatura. **Bloco condicional:** tabela de membros (nome, identificação conforme H-D21, função; carga horária semanal e presidência/vice quando exigidas pela variante de D07) |
| Portaria de pessoal — lotação/localização **(v3.2)** | O mesmo modelo institucional | **Comuns:** os mesmos acima. **Bloco condicional:** pessoa (nome e identificação conforme H-D21), setor de origem, setor de destino e data de efeito (D20). **Sem** tabela de comissão, carga horária ou presidência |
| Retificação | Modelo da natureza do ato retificado | Referência ao ato e ao trecho; texto corrigido |

  Autenticação/verificação da assinatura (D10) e URL de origem ficam no próprio bloco de assinatura ou no registro do sistema, conforme o mecanismo — não em rodapé do texto normativo.

  **(v3.2) Uma só definição de campos:** os blocos condicionais do modelo leem a **mesma definição** de campos obrigatórios e dispensados por finalidade usada pelo formulário de elaboração (§5.2, variante aprovada de D07/D20). Prévia, versão para assinatura e PDF nunca exibem um bloco que o formulário dispensou, nem omitem um que ele exigiu.
- **Marcas:** minuta com marca de minuta (texto exato a homologar; não precisa ser uma declaração jurídica como “sem validade”); versão aprovada para assinatura **sem** marca; documento assinado preservado como recebido.
- **Variações:** designação com tabela de membros, lotação, normativa, revogação e retificação.
- **Casos de layout a desenhar:** nome longo, muitos membros, tabela que quebra de página, segunda página, anexos, rodapé e assinatura na última página.
- **Acessibilidade:** PDF com texto selecionável, ordem de leitura e tabelas marcadas, testado no arquivo gerado e no assinado.

### 7.11 Vida da comissão: substituição e mudança funcional (v3)

- No detalhe de um ato vigente, “Alterar composição” abre T08 em modo de alteração, gerando ato vinculado (H-D14).
- O membro que sai recebe data de saída; o que entra, data de entrada. Relatórios de horas usam essas datas.
- Quando uma mudança funcional confiável é registrada (afastamento, aposentadoria, desligamento), cada portaria vigente com a pessoa gera em T20 o alerta **“Avaliar participação”** — não um bloqueio, nem alteração do documento.
- Se a pessoa for presidente, o alerta diz **“Avaliar continuidade da presidência”**. A presidência só deixa de existir por ato que encerre a atribuição.
- O motivo do afastamento não aparece em filas, alertas ou listas.
- Bloquear novas indicações depende de regra homologada por tipo de vínculo e atividade (D24).

### 7.12 Caixa de pendências — T20 (v3)

- **Minhas tarefas:** atribuídas diretamente ao usuário (ex.: assinar como DG, corrigir devolução da minha solicitação).
- **Fila do meu papel:** tarefas compartilhadas (ex.: “Aceitar solicitação — Gabinete”). Quando alguém conclui, o item sai para todos, com aviso de quem concluiu e quando.
- **Alertas informativos:** vencimentos próximos e mudanças funcionais — com ação sugerida, mas sem obrigar. O alerta pode ser lido ou descartado.
- **(v3.1) Comunicação não é alerta:** falha de e-mail, membro sem contato e divulgação pendente geram **tarefa** “Tratar comunicação” (ou “Tratar divulgação”), com responsável (o emissor) e situação. Descartar o aviso associado **não** conclui a tarefa. **(v3.2)** Ela sai da lista com um dos três resultados da §7.6 — e-mail enviado, comunicação alternativa registrada ou exceção autorizada — e o resultado fica visível no detalhe da portaria e nos relatórios; só o primeiro conta como cumprimento literal de RF5. A tarefa distingue falha **transitória** (o sistema tenta de novo, com limite, e mostra as tentativas), **definitiva** (endereço rejeitado) e **sem contato** (depende de obter o dado).
- Em portarias com várias aprovações departamentais, concluir a sua parte remove **a sua** tarefa, não as dos outros departamentos, e não anuncia a etapa como concluída.
- Mesma fonte de dados dos contadores da visão geral; os números precisam conferir.

## 8. Dashboard, relatórios e notificações

### 8.1 Visão geral — T03

Prioriza trabalho pendente e vigências, com indicadores clicáveis que abrem a lista já filtrada.

| Perfil | Primeiro bloco | Segundo bloco |
| --- | --- | --- |
| Gabinete/CGP | Pendências de fluxo, publicações parciais e comunicações pendentes | Vencimentos e vencidas sem encerramento |
| DG/Vice | Assinaturas pendentes | Validações finais e panorama do ano |
| DEPE/DAP | Validações do departamento | Servidores do departamento com mais horas atribuídas |
| Servidor | Minhas solicitações | Minhas participações vigentes e horas semanais |
| Administrador | Estado dos serviços (LDAP, e-mail, assinatura, sincronização) | Contas pendentes de habilitação |

RF8 exige informações em tempo real. Atualização periódica (proposta técnica: 60 s e ao voltar à aba) é uma forma de atendimento a homologar, não definição de negócio de “tempo real” (D18). Exibir “Atualizado em…” e distinguir dados desatualizados de ausência de pendências.

### 8.2 Relatórios — T13

Todo relatório é calculado em uma **data de referência** (padrão: hoje; relatório anual: escolha do usuário) e conta atos, não versões ou membros.

| Relatório | Conteúdo mínimo | Filtros e interpretação |
| --- | --- | --- |
| Servidor × portarias — RF7/Rel.1 | Servidor, identificação autorizada, departamento, portarias, função e vigência | Servidor, departamento, período e situação. |
| Horas por servidor — RC9 | Participações e horas semanais **atribuídas** (não trabalhadas) | Interseção entre vigência do ato, período de participação e período do relatório. |
| Portarias anuais — RF7/Rel.2 | Quantidade e relação das portarias do ano | Ano de emissão (H-D17). |
| Portarias por situação — RF7/Rel.3 e RC10 | Categorias do mapeamento da §6.1 | Explicar sobreposição de “Atualizadas” e a categoria “Vigência futura”. |

Saída: consulta tabular, impressão/PDF e exportação CSV (XLSX no L3). Exportações aplicam os mesmos filtros e permissões da consulta e não incluem CPF, telefone ou endereço. Exibir filtros, data de referência, data de geração, critério de contagem e ausência de dados.

### 8.3 Central de notificações — T18

**Obrigação da fonte:** e-mail de participação e alertas de vigência. **Proposta complementar:** central interna com avisos de devolução, validação, assinatura, publicação e falhas.

Cada aviso mostra motivo, objeto, data e ação de acesso. Preferências pessoais não desligam comunicações obrigatórias. Destinatários, canais e escalonamento: D12/D13. Enquanto D13 não for homologada, **não enviar mensagens reais** com os prazos da hipótese.

## 9. Direção visual e componentes

### 9.1 Direção proposta

**Conceito:** ambiente de trabalho documental do IFC, com leitura clara, tabelas comparáveis e decisões rastreáveis. Identificação do ato, etapa, responsáveis e documento sempre reconhecíveis.

**Elemento característico:** faixa de acompanhamento no detalhe da portaria com identificador completo, situação, marcadores, etapa atual e próxima ação, com acesso à linha do tempo. O documento ocupa o centro da atenção durante revisão e assinatura.

Evitar composição dominada por cartões decorativos, gráficos sem utilidade operacional ou efeitos que disputem atenção com os documentos.

**Base recomendada — D22:**

1. **Padrão Digital de Governo (Design System gov.br — DSGov)** como base de componentes, grid e tipografia (Rawline), sujeita à aprovação da Comunicação e da TI e à verificação de que a biblioteca usada está mantida. Adotar a biblioteca **não** comprova acessibilidade do produto; isso exige teste (§10).
2. **Manual de identidade visual do IFC / Rede Federal** para logotipo e cores no cabeçalho e no documento. A marca do documento oficial e os tokens da interface são coisas diferentes.
3. A paleta abaixo é **alternativa**, caso a instituição prefira identidade própria; substituir pelos valores oficiais assim que o manual for adotado.

| Papel | Proposta inicial (alternativa) | Uso |
| --- | --- | --- |
| Verde de trabalho | `#23633B` | Ação primária e identificação; não é especificação oficial da marca. |
| Fundo | `#F4F6F8` | Área de trabalho. |
| Superfície | `#FFFFFF` | Formulários, tabelas e documento. |
| Texto principal | `#1D2935` | Leitura e títulos. |
| Atenção | `#805800` | Pendências e vigência próxima, com texto/ícone. |
| Erro/risco | `#B3261E` | Erros e consequências relevantes. |

**Tipografia:** Rawline, se adotado o DSGov; na alternativa, Source Sans 3 para interface e Source Serif 4, com moderação, para a minuta. O documento oficial (T19) segue o modelo institucional homologado. Números tabulares onde ajudarem a comparação.

**Layout:** espaçamento em múltiplos de 4 px (ou o do DSGov); corpo de 16 px; bordas discretas, raio de 6 px em controles e sombras só em sobreposições. Valores de partida, sujeitos à acessibilidade e ao manual institucional.

**Cor das situações:** rótulo, ícone e cor; a cor nunca é o único sinal. Vermelho para “Vencida — sem encerramento”, “Devolvida”, “Recusada na verificação” e “Publicação parcial”, que exigem ação; tons neutros para “Revogada” e “Encerrada”, que são estados finais e não erros.

### 9.2 Biblioteca reutilizável a desenhar

- Estrutura de navegação, título de página, breadcrumb e abas.
- Campo com rótulo, ajuda e erro; senha; busca; combobox de pessoas (nome, vínculo, departamento e situação funcional, sem motivo); seletor de período; calendário em português; seleção simples/múltipla.
- Tabela paginada, cabeçalhos ordenáveis, filtros, remoção de filtros e estados de resultado.
- **(v3)** Editor de dispositivos (art., §, inciso, alínea, item) com numeração automática; tabela de membros/horas com datas de entrada/saída; resumo de carga; painel de validações por departamento.
- Indicador de etapa, etiqueta de situação, marcador cumulativo e linha do tempo, com significado independente de cor.
- Visualizador de documento com alternativa de download e indicação do tipo (minuta / versão para assinatura / assinado); upload com seleção por botão, progresso e erro por arquivo.
- **(v3)** Cartão de verificação de assinatura; registro de canal de publicação; estado de gravação (não salvo, salvando, salvo, falha, conflito).
- Botões com estados normal, foco, pressionado, indisponível (com motivo) e processando; diálogos de decisão; mensagens persistentes e toasts.
- Aviso de alteração não salva, conflito de versão, sessão expirada e falha de serviço.
- Item de pendência nos três grupos de T20; marcador “Hipótese Dxx” e “Variante V1/V2” para anotar frames; dado pessoal mascarado com ação “mostrar” para perfis autorizados.

Na implementação, registrar a identidade homologada em `DESIGN.md` e os comportamentos compartilhados em `UX-CONTRACT.md`. Tokens e componentes com fonte única.

### 9.3 Organização do arquivo Figma

| Página | Conteúdo |
| --- | --- |
| 00 Capa | Versão, data, status de cada decisão D01–D24 (hipótese / variante / homologada), changelog. |
| 01 Fundamentos | Variables: cores, tipografia, espaçamento, raios; ícones. Se DSGov, importar a biblioteca oficial em vez de recriar. |
| 02 Componentes | Componentes da §9.2 com variantes de estado e auto layout. |
| 03 Fluxos | Jornadas J01–J12, variantes das hipóteses abertas e máquina de situações (§6.1/§6.3). |
| 04 Wireframes | Baixa fidelidade de todas as telas, desktop 1440, notebook 1280 e mobile 360. |
| 05 Telas | Alta fidelidade por módulo, nomeadas `T08 / Elaboração / 3 Membros / Erro`. Estados: carregando, vazio, sem resultado, erro, sucesso, sem permissão. |
| 06 Protótipos | Dois conjuntos: **Produto completo** e **L1**. Um fluxo por jornada, com ponto de partida nomeado. |
| 07 Documento | T19 em A4: modelos por natureza (§7.10), minuta, versão para assinatura, moldura do visualizador separada do arquivo e casos de várias páginas. |
| 99 Arquivo | Versões descartadas, fora do caminho do handoff. |

**Anotações em cada frame:** perfis que veem a tela, lançamento (L1/L2/L3), regras aplicadas (RF/RN) e hipóteses ou variantes usadas. Quando uma decisão for homologada, buscar o marcador e atualizar os frames afetados.

**Dados de exemplo:** sem origem em pessoas reais. Para CPF, preferir valores já mascarados ou placeholders; um CPF com dígito verificador válido pode existir de fato. Assuntos verossímeis (“Comissão de Avaliação de Estágio Probatório”, “Núcleo de Acessibilidade”).

**Handoff:** modo de desenvolvimento do Figma com componentes ligados às variables; cada tela linka para a seção deste plano que a especifica.

## 10. Comportamentos transversais e acessibilidade

| Situação | Comportamento planejado |
| --- | --- |
| Carregamento inicial | Indicador em região estável, mantendo identificação da tela. |
| Atualização de lista | Preservar cabeçalho e filtros; ignorar respostas antigas de buscas substituídas. |
| Lista vazia | Explicar ausência de registros e oferecer ação autorizada. |
| Busca sem resultados | Mostrar filtros aplicados e opção de limpar. |
| Falha de gravação | Preservar valores, indicar correção/tentativa e não anunciar sucesso. |
| Falha parcial | Identificar itens afetados; não reenviar operações já concluídas. |
| Resultado desconhecido | Consultar o servidor antes de repetir assinatura, publicação ou envio. |
| Edição concorrente | Detectar versão desatualizada; oferecer revisão do conflito, sem sobrescrever silenciosamente. |
| Saída com alterações | Avisar sobre perda e permitir permanecer; não afirmar salvamento que não ocorreu. |
| Falta de permissão | Tela própria de acesso negado com navegação utilizável, sem revelar dados restritos. |
| Sessão expirada | Reautenticação e recuperação do contexto conforme política de dados. |
| Desconexão | Aviso de indisponibilidade e estado de sincronização; sem promessa de edição offline. |
| Pendência já resolvida por outra pessoa | Informar quem concluiu e quando; remover a ação sem erro genérico. |
| Sincronização cadastral falhou **(v3)** | Mostrar data do último dado válido; manter vínculos e permissões. |

Busca remota com botão de limpar, envio por Enter e atraso de 300 ms durante digitação. Preservar filtros e paginação ao voltar; não colocar CPF, endereço ou credenciais na URL. **(v3)** Não gravar dados pessoais em armazenamento local do navegador para rascunhos sem decisão explícita.

**Idioma e datas:** português brasileiro em campos, erros, calendários, relatórios e nomes acessíveis. Datas `dd/mm/aaaa`, horas em 24 h, fuso `America/Sao_Paulo` (a confirmar). Datas de vigência sem horário não mudam de dia por conversão de fuso; o backend distingue data civil de instante de evento.

**Acessibilidade:** meta WCAG 2.2 AA e eMAG 3.1, avaliados **critério a critério** — o eMAG não cobre todos os critérios da WCAG, e cumprir atalhos não prova nenhum dos dois. Prever “Ir para o conteúdo”, atalhos para conteúdo/menu/busca, ordem de foco lógica e página de acessibilidade. Navegação por teclado, foco visível, rótulos associados, erros em texto, contraste suficiente, anúncio de resultados, uso sem depender de cor ou hover. Diálogos gerenciam foco. Testar com leitor de tela (NVDA) e, se possível, com pessoa usuária de tecnologia assistiva. Protótipo visual não comprova conformidade do produto implementado.

**Responsividade:** 360, 768, 1280 e 1440 px, além de zoom de 200%. Tabelas de comparação podem rolar horizontalmente com indicação visível. Formulários longos sem áreas cortadas. Respeitar redução de movimento.

**Privacidade e transparência (v3):**

- **RN1 permanece integral:** toda consulta e todo download no sistema exigem login. O sistema de gestão não é o canal público de divulgação; a divulgação oficial ocorre nos canais de §7.6. Consulta pública dentro do sistema exigiria mudança formal de RN1 (D01). A LAI convive com essa separação: o ato é divulgado no canal oficial, e o sistema protege rascunhos, operação e dados cadastrais.
- **LGPD (finalidade e necessidade):** cada dado pessoal tem finalidade e perfis autorizados definidos em D16. Proposta mínima: CPF, telefone, endereço e e-mail fora de listas, buscas, relatórios, exportações e **e-mails**; CPF completo visível só para Gabinete e CGP quando necessário à operação; administrador não vê esses dados pelo papel técnico.
- **Mascaramento:** reduz exposição, mas o dado mascarado continua sendo pessoal. É padrão recomendado, não obrigação legal universal.
- **Documento publicado:** identificação definida antes da assinatura (H-D21); o original assinado nunca é alterado para gerar versão pública.
- **Registro de acesso:** auditar eventos definidos — exibição de CPF completo, endereço ou telefone; exportações; mudança de papéis — com usuário, data e pessoa consultada. Não é necessário registrar cada clique. Quem consulta os logs e por quanto tempo eles são guardados: D16.
- **Guarda e destinação:** classificação, temporalidade e destinação de documentos e rascunhos definidas com a área arquivística (e-ARQ Brasil — Resolução CONARQ nº 50/2022 como referência).
- **Correção de dados:** a tela de cadastro mostra a origem e o responsável por cada dado e o canal para pedir correção.

## 11. Dependências de backend e contratos

A interface deve ser implementada junto aos contratos necessários. Um protótipo com dados fictícios não comprova os requisitos abaixo.

| Contrato/serviço | O que precisa sustentar na interface |
| --- | --- |
| Autenticação local e LDAP | Sessão, habilitação, recuperação local e origem da conta. |
| Autorização | Papéis acumuláveis com escopo (departamento, período, tipo de dado), substituições com referência ao ato, etapa e registro. |
| Cadastros e estrutura | Pessoas, contas, lotações, departamentos e chefias; situação funcional; histórico. |
| Base oficial de pessoal **(v3)** | Fonte por atributo, identificador estável, periodicidade, data do dado, último sucesso, falha parcial, divergência e exceção manual autorizada. A confirmar: SIGRH/SIG. |
| SIG/SIPAC **(v3)** | Resultado de D23: integração para assinatura/publicação, só referência, ou nenhuma. |
| Solicitações e portarias | Rascunhos, versões, obrigatórios por etapa e finalidade, transições permitidas; situação calculada no servidor em data de referência. |
| Numeração | Séries por natureza e autoridade (D09), continuidade da série em curso, reinício anual da série de pessoal, reserva sem colisão entre operadores, anulação de número; identificador de lista distinto da epígrafe. |
| Documento | Geração de minuta, versão aprovada congelada (com hash), modelo institucional versionado, PDF acessível. |
| Assinatura **(v3)** | Modo externo com anexo e verificação; modo integrado futuro; habilitação do signatário na data. |
| Publicação **(v3)** | Registros por canal, canais exigidos por tipo, situação parcial/concluída. |
| Texto compilado **(v3)** | Dispositivos estruturados e vínculos de alteração, para gerar a compilação e o endereço permanente. |
| E-mail | Disparo único por evento, fila, anexo, destinatários, resultado, pendência por falta de contato e proteção contra duplicidade. |
| Vigência e alertas | Cálculo periódico independente de uma tela aberta, notificações e rastreabilidade. |
| Pendências | Tarefas individuais, filas por papel e alertas; uma consulta alimenta T20 e os contadores de T03. |
| Histórico e auditoria | Eventos e documentos anteriores; log dos eventos de acesso definidos em D16. |
| Relatórios e dashboard | Data de referência, contagem por ato, interseção de intervalos de horas, escopo autorizado. |
| Integrações futuras | Referências externas e estados de sincronização quando o conector existir. |

Definir códigos de erro de campo, falta de autorização, conflito e indisponibilidade; idempotência; controle de versão; limites de anexos e política de acesso a arquivos. Em integrações, distinguir falha local, indisponibilidade externa e processamento pendente.

## 12. Decisões institucionais pendentes

Os participantes sugeridos não são designações formais. Cada decisão registra resposta, responsável, data e impacto. **Prioridade:** *Alta* = decidir (ou aprovar a hipótese/variante) antes da alta fidelidade das telas afetadas; *Média* = antes da implementação da funcionalidade; *Baixa* = pode esperar o lançamento seguinte. Nenhuma hipótese é usada em produção sem homologação. **Situação:** Hipótese, Variantes (o protótipo mostra mais de uma opção) ou Diverge da fonte.

| ID | Dúvida/conflito e decisão necessária | Hipótese de trabalho (protótipo) | Situação | Bloqueia | Prior. | Participantes sugeridos |
| --- | --- | --- | --- | --- | --- | --- |
| D01 | “Todo e qualquer usuário” aparece entre consultores, mas RN1 exige login. Quem recebe conta e o que cada consultor vê? | Consultor = quem tem conta habilitada; vê atos publicados e seus documentos, sem dados cadastrais (§3.2). Não há consulta sem login. Não excluir consultores não servidores sem confirmação. | Hipótese | T06, T07 | Alta | Gabinete, DG e TI |
| D02 | “Acesso total” de DG e Administrador × emissão exclusiva de Gabinete/CGP. Matriz por capacidade, acúmulo de papéis e acesso a dados. | Matriz da §3.2: papéis acumuláveis com escopo; DG valida e assina, não elabora nem configura; Admin configura, sem atos e sem dados pessoais pelo papel. | Diverge da fonte; variante “DG com acesso total” | Menus, T17 | Alta | DG, Gabinete, GP e TI |
| D03 | Vice-Diretor assina, mas a fonte não diz em que condição. | Variante A: só no período registrado de substituição. Variante B: sempre que nomeado. Ambas exigem referência ao ato de nomeação. | Variantes | T10, T17 | Média | DG e Gabinete |
| D04 | RF4 cita aceite sem responsável; RN6 usa “e/ou”. Quem aceita o quê; validações cumulativas ou alternativas; edição pelo validador. | Aceitar solicitação (Gabinete/CGP) no fluxo principal; ciência do membro e anuência da chefia como variantes. Validações departamentais cumulativas + final do Gabinete/CGP. Ajuste por DEPE/DAP durante a validação: variante A (ajuste no escopo gera nova revisão e reabre as aprovações afetadas, §7.4) como hipótese; variante B (só por devolução) anotada. | Hipótese + variantes | T05, T09, fluxo | Alta | Gabinete, GP, DG, DAP e DEPE |
| D05 | Vocabulários diferentes de status. | Dois níveis; tabela de decisão ordenada e recorte histórico da §6.1; mapeamento dos relatórios contando atos. Variante da linha “Encerrada” depende de D14. | Hipótese | T06, T07, T12, T13, T03 | Alta | Gabinete e áreas gestoras |
| D06 | RN7: o que é “administrativa”, acúmulo, precisão das horas. | Administrativa = comissões, núcleos e afins; teto de 10 h por portaria (da fonte); soma entre portarias informativa; precisão a homologar. | Hipótese (teto confirmado pela fonte) | T05, T08, T09 | Média | DEPE, GP e DG |
| D07 | RN4/RN5 exigem membros, horas e presidência/vice para todos os atos. Aplicação por finalidade, na solicitação e na elaboração. | Variante V1 literal e variante V2 por finalidade (§5.1, §5.2). | Variantes; V2 diverge da fonte | T05, T08, T19 | Alta | Gabinete e GP |
| D08 | Prazo indeterminado, retroatividade, dia final. | Término obrigatório para designação de trabalho; para lotação/normativa, variante com e sem término. Retroatividade **desabilitada** no protótipo até decisão. Dia final incluso. | Hipótese | T05, T08 | Média | Gabinete e DG |
| D09 **(v3.1)** | Número obrigatório na elaboração (RN5), sem regra de sequência. O Decreto 12.002/2024, art. 22, prevê série contínua para portarias normativas e série distinta, reiniciada anualmente, para portarias de pessoal. Quais séries o campus tem hoje, quem é a autoridade competente de cada uma e se Gabinete e CGP compartilham séries? | Duas séries por autoridade: **normativa** (contínua, continuando a série em curso) e **pessoal** (designações e lotações, reiniciada em janeiro). Gabinete e CGP são operadores da mesma série; não se presume uma série por operador. Número reservado ao concluir a elaboração, com bloqueio contra reserva simultânea; número reservado e não usado fica “anulado” com justificativa, distinto de ato cancelado. Séries e números atuais confirmados no acervo (Etapa 0). **(v3.2)** Séries cadastradas como configuração, não fixadas no código; a finalidade da interface não determina sozinha a série. | Hipótese | T08, T19 | Alta | Gabinete, GP e DG |
| D10 | Mecanismo de assinatura, nível exigido (Lei 14.063/2020) e verificação. | Modo externo com verificação (§7.5) no L1; integração (gov.br, SIG/SIPAC ou outro) depois, conforme D23. | Hipótese | T10, T11 | Alta | DG e TI |
| D11 **(v3.2)** | Canal de publicação oficial por natureza do ato; divulgação obrigatória e réplicas; evidência; **qual canal oficial é a publicação de referência para a cláusula de vigência quando houver mais de um**; arquitetura de divulgação de normativas (art. 69) compatível com RN1. | Registro por canal com natureza da obrigação (§7.6); DOU como canal oficial para normativas enquadradas no art. 68, com classificação material registrada; divulgação pela alternativa A da §7.7 (gestão autenticada + portal oficial externo). | Hipótese | T11, T07 | Alta | Gabinete, GP, TI e procuradoria |
| D12 **(v3.2)** | E-mail após assinatura (narrativa) × após publicação (RF5); membros sem contato; disparo automático ou manual; **se outra forma de comunicação pode tratar a pendência e se cabe exceção ao requisito**. | Disparo automático único após publicação concluída; reenvio manual; sem contato = pendência de cumprimento do RF5, sem bloquear a publicação. Comunicação alternativa e exceção autorizada registradas como resultados distintos do e-mail enviado (§7.6); exceção só com alteração formal de RF5 aprovada. | Hipótese | T11, T15, T20 | Média | Gabinete, GP e TI |
| D13 | Alertas: antecedência, destinatários, canal; atos sem término ou sem presidente. | Parâmetros de exemplo 60/30/7 dias e dia seguinte ao vencimento; destinatário: emissor responsável e presidente, se houver; sem mensagens reais até homologação. Atos sem término não geram alerta de vencimento. | Hipótese | T12, T18 | Média | Gabinete, GP, DAP e DEPE |
| D14 **(v3.1)** | Renovação, alteração, retificação, republicação, revogação parcial e encerramento: critérios, autoridade, assinatura/anuência e fluxo de cada um; efeito do encerramento sobre a vigência. | Renovar/alterar/substituir membro = novo ato vinculado (art. 13); retificação para lapso manifesto, com a correção de erro material como modalidade de fluxo mais curto (art. 74); revogação total ou parcial com data de efeito; encerramento = registro administrativo que encerra a vigência a partir da sua data (variante: só registra a conclusão, §6.1). | Hipótese + variante | T12, T08, §6.1 | Média | DG, Gabinete e GP |
| D15 | Siglas CGP/DGP e SIAP; origem dos dados; endereço; chefia externa. | Rótulos “CGP” e “SIAPE”; dados funcionais da base oficial se houver integração autorizada, com regras da §5.3; reavaliar a finalidade do endereço completo. | Hipótese | T14 | Média | GP e TI |
| D16 | Acesso a dados pessoais por perfil e canal; log; guarda e destinação. | Proposta mínima da §10; eventos de log definidos; política arquivística pela área responsável. | Hipótese | T07, T13, T14 | Alta | Responsáveis por dados, arquivo, Gabinete e TI |
| D17 | Escopo e contagem dos relatórios. | Gabinete, CGP, DG, DEPE e DAP com relatórios completos (a fonte dá consulta total a DEPE/DAP); servidor só os próprios dados; ano = ano de emissão; data de referência. | Hipótese | T13 | Média | Gabinete, GP, DAP e DEPE |
| D18 | “Tempo real” do dashboard; escopo do SIPAC. | Atualização periódica como proposta técnica para RF8; SIPAC conforme D23. | Hipótese | T03 | Média (RF8 no L2) | TI e áreas gestoras |
| D19 | Frase interrompida na fonte (“As p…”). | Nenhuma regra adicional presumida. | — | Nenhum impacto conhecido | Alta (rápida) | Autor do documento |
| D20 | Portarias de lotação/localização: campos, autoridade e efeito na base de pessoal. | Finalidade da “nova portaria”, sem horas nem presidência; sem atualizar a base de pessoal automaticamente. | Hipótese | T05, T08, T19 | Média | CGP e Gabinete |
| D21 | Identificação de pessoas no documento publicado. | Servidor por nome + SIAPE; aluno/externo por nome + identificação parcial ou outra homologada; definida antes da assinatura. | Hipótese | T19, T07 | Alta | Gabinete e responsáveis por dados |
| D22 | Identidade visual: DSGov + marca IFC ou identidade própria. | DSGov como base de componentes + manual do IFC. | Hipótese | Alta fidelidade de todas as telas (não bloqueia wireframes) | Alta | Gabinete, Comunicação e TI |
| **D23 (v3.1)** | O que o SIG/SIPAC cobre no Campus Videira (etapas usadas, autoridade sobre dados e numeração, API, assinatura, publicação, permissões)? Qual alternativa adotar: integração, referência externa, operação manual assistida ou desenvolvimento complementar? | Até a resposta: desenvolvimento próprio com assinatura externa e registro de publicação (H-D10/H-D11), sem integração. | Hipótese | T10, T11, D09, D10, D11 | **Alta — primeira a responder** | TI e Gabinete |
| **D24 (v3)** | Quem pode ser indicado: afastados, aposentados, desligados, externos — por tipo de atividade. | Aviso ao indicar pessoa não ativa, sem bloqueio; aposentado como vínculo externo, se permitido. | Hipótese | T05, T08, T14 | Média | GP, Gabinete e DG |

## 13. Sequência de execução do projeto

| Etapa | Trabalho | Entregáveis | Critério para avançar |
| --- | --- | --- | --- |
| **0 — Levantamento (v3.1)** | Com a TI: SIG/SIPAC (D23, com as perguntas da §2.2), LDAP, base de pessoal, assinatura, canais de publicação. Com o Gabinete/CGP: séries de numeração em curso e último número de cada uma (D09). Com o autor: frase truncada (D19). Ler a planilha de registro (B12). | Respostas registradas; tabela “coluna da planilha → significado → requisito/hipótese” | D23, D19 e as séries de D09 respondidas. |
| 1 — Consolidar domínio | Rever fonte e aprovar hipóteses/variantes de prioridade Alta; registrar evidência e limites dessas decisões (B01/B02) | Matriz de acesso, glossário, estados/transições e registro D01–D24 | Hipóteses Altas aprovadas como base do protótipo, com evidência registrada. |
| 2 — Arquitetura e fluxos | Navegação, jornadas J01–J12, formulários | Mapa de telas, fluxos e inventário de campos/ações | Todos os RF/RN/RC têm destino verificável. |
| 3 — Wireframes | Listas, detalhe, editor, revisão, documento (T19), variantes e casos de falha | Wireframes desktop, notebook e mobile | Fluxo completo compreensível, sem ações órfãs. |
| 4 — Sistema visual | Homologar identidade (D22) e componentes | Tokens, componentes e estados; `DESIGN.md` e `UX-CONTRACT.md` | Legibilidade, acessibilidade e comportamento consistentes. |
| 5 — Protótipo e teste | Protótipos “produto completo” e “L1”; teste com usuários (§13.3) | Protótipos, relatório de teste e ajustes | Critérios da §13.3 atingidos. |
| 6 — Contratos e implementação | UI e serviços, autorização, documentos, notificações e histórico | Módulos do L1 e documentação dos contratos | Critérios de aceite do L1 exercitados em homologação. |
| 7 — Homologação | Cenários reais controlados, permissões, falhas, privacidade e acessibilidade (WCAG + eMAG, critério a critério) | Evidências, correções e aceite institucional | Sem falhas bloqueadoras de negócio, dados ou acesso. |
| 8 — Implantação e evolução | Operação, capacitação, L2/L3 e eventual incorporação de acervo | Guia por perfil, suporte e plano de evolução | Rotinas de emissão/acompanhamento operáveis. |

### 13.1 Ordem sugerida de implementação

1. Autenticação, contas, papéis com escopo, estrutura institucional e cadastros.
2. Consulta/detalhe e solicitação, com histórico desde o início.
3. Elaboração com editor de dispositivos, modelo institucional, membros/horas, validação e aceite.
4. Versão aprovada, assinatura com verificação, publicação por canal e e-mails.
5. Pendências, vigências, alertas e tratamento por ato vinculado ou encerramento (fim do L1).
6. LDAP, relatórios, dashboard, assistentes e central de notificações (L2).
7. Melhorias e integração SIPAC (L3, ou antes conforme D23).

Segurança de acesso, rastreabilidade, privacidade e acessibilidade acompanham todas as fases. Não estimar prazo fechado antes de responder D23, D10 e D11 e de conhecer equipe e volume do acervo.

### 13.2 Pacote de design para implementação

O desenho é produzido em Figma conforme a §9.3: mapa de navegação, jornadas, wireframes, layouts responsivos, biblioteca de componentes, protótipos (produto completo e L1), documento T19, anotações de perfis/lançamento/hipóteses e matriz de estados.

Incorporação de portarias antigas é atividade própria. Importação automática da planilha não é requisito confirmado.

### 13.3 Teste de usabilidade do protótipo (v3)

- **Natureza:** rodadas **exploratórias**, com 2 a 3 participantes por grupo (Gabinete/CGP, diretores, servidores) e **ao menos 1 pessoa que administre contas e acessos** para a J09 **(v3.1)**. Servem para achar problemas de fluxo, não dão validação estatística; registrar amostra e limitações.
- **Tarefas:** jornadas J01–J12 com cenário escrito, sem explicar a interface. Incluir cenários de erro (devolução, assinatura recusada, membro sem contato).
- **Tarefas críticas:** assinar/registrar assinatura, publicar, lidar com dados pessoais. Nelas, **qualquer erro crítico** observado (assinar versão errada, publicar sem canal exigido, expor dado pessoal) é corrigido e testado de novo, independentemente de quantos participantes erraram.
- **Coleta:** conclusão sem ajuda, erros, hesitações e comentários; questionário SUS como complemento, não como critério principal.
- **Critério para avançar:** nenhum erro crítico pendente; problemas graves corrigidos e retestados.

### 13.4 Métricas de sucesso após a implantação

| Métrica | Para que serve | Cuidado de leitura |
| --- | --- | --- |
| Tempo da solicitação à publicação, por etapa (mediana) | Mostra onde o processo demora | Separar espera externa (ex.: assinatura) de tempo de edição. |
| Percentual de solicitações devolvidas e motivos | Indica campos ou regras mal explicados | — |
| Portarias vencidas sem encerramento | Sinal de acompanhamento da vigência | Não prova sozinha que os alertas funcionam; cruzar com alertas gerados e ação no prazo. |
| Comunicações por resultado: e-mail enviado, falha, sem contato, comunicação alternativa, exceção autorizada | Cumprimento de RF5 | “Aceito pelo serviço” não comprova entrega; alternativa e exceção são contadas à parte, nunca como e-mail enviado. **(v3.2)** |
| Percentual de portarias emitidas pelo sistema | Adoção | — |

Fórmula, denominador, janela, fonte e responsável de cada métrica: backlog (§17).

## 14. Critérios de aceite e cenários de verificação

Critérios que dependem de hipótese indicam a decisão entre parênteses; o resultado esperado vale para a hipótese aprovada e é revisto se a decisão mudar.

| ID | Cenário | Resultado esperado | Lanç. |
| --- | --- | --- | --- |
| CA01 | Visitante tenta abrir busca, detalhe ou arquivo protegido | Acesso exige autenticação, inclusive por URL direta, RN1. Links de divulgação oficial apontam para o canal externo, não para o sistema. | L1 |
| CA02 | Conta local e conta LDAP tentam recuperar senha | Conta local usa link no e-mail cadastrado; LDAP recebe orientação ao serviço institucional. | L1 / L2 |
| CA03 | Solicitação sem assunto, membros ou vigência | Envio bloqueado com erro específico, conforme a variante aprovada em D07 (V1: membros sempre exigidos; V2: dispensados para normativa e revogação). Rascunho recuperável. | L1 |
| CA04 | Servidor tenta elaborar/emitir por acesso direto | Operação recusada no backend; consulta/solicitação continuam conforme permissão. | L1 |
| CA05 | Emissor recebe demanda interna sem solicitação prévia | Inicia a elaboração sem solicitação artificial e sem etapa de “aceitar solicitação”. | L1 |
| CA06 | Cadastro de servidor sem um dos campos obrigatórios | Cadastro não é concluído; erro indica o campo e preserva valores. | L1 |
| CA07 | Aluno/externo é incluído como membro | Nome/CPF tratados sem exigir campos funcionais de servidor; comunicação segue D12. | L1 |
| CA08 | Docente recebe 10 h e depois valor superior em atividade administrativa | 10 h permitido; superior bloqueado. Técnico e atividade não administrativa sem teto automático (D06). | L1 |
| CA09 | DAP/DEPE tenta alterar membro de outro departamento | Alteração/validação fora do escopo recusada. | L1 |
| CA10 | Portaria não atende aos obrigatórios aplicáveis ao seu tipo | Avanço bloqueado com pendências de número, assunto, membros, horas e funções, conforme D07. | L1 |
| CA11 | DEPE ajusta horas de um servidor do seu departamento numa portaria em validação, depois de o DAP já ter validado sua parte (variante A de D04) | O texto submetido não muda; o ajuste cria nova revisão com a diferença e o autor; a validação final do Gabinete/CGP é reaberta; a validação do DAP só é reaberta se a parte dele foi afetada (ou se a vigência mudou). Na variante B, o DEPE só consegue devolver com o ajuste no motivo. | L1 |
| CA12 | Usuário sem atribuição de DG/Vice, ou fora do período habilitado, tenta assinar | Ação recusada; administrador não assina por ser administrador (D02/D03). | L1 |
| CA13 | Documento assinado e verificado, publicação ainda não registrada | Etapas distintas; nenhum e-mail enviado antes da publicação concluída (D12). | L1 |
| CA14 | Publicação e envio concluídos; uma mensagem falha | Publicação permanece; erro individual visível; reenvio não duplica os sucessos. | L1 |
| CA15 | Busca por servidor, assunto, número e período | Todos os filtros RF6 funcionam; período com semântica explícita; navegação restaura a lista. | L1 |
| CA16 | Portaria chega ao fim da vigência sem conclusão da atividade | “Vencida — sem encerramento”; não é encerrada nem revogada automaticamente. | L1 |
| CA17 | Portaria é alterada, renovada ou revogada | Vínculo com o ato anterior e histórico disponíveis; documento anterior não sobrescrito. | L1 |
| CA18 | Portaria normativa/revogadora é elaborada | Obrigatórios seguem a variante aprovada em D07. | L1 |
| CA19 | Relatórios e dashboard no mesmo recorte e data de referência | Totais conferem; contagem por ato, sem duplicar por membro/versão; “Vigência futura” e “Atualizadas” à parte. | L2 |
| CA20 | Usuário exporta relatório ou baixa documento | Escopo de acesso e restrições de dados pessoais aplicados. | L1 / L2 |
| CA21 | Rede falha em assinatura/publicação/envio ou há clique repetido | Sem confirmação falsa nem repetição indevida; situação reconciliada com o servidor. | L1 |
| CA22 | Dois operadores editam a mesma versão | Conflito identificado e tratado sem perda silenciosa. | L1 |
| CA23 | Data de vigência consultada em diferentes fusos | Data civil correta; histórico com instantes no fuso adotado. | L1 |
| CA24 | Uso por teclado, leitor de tela, mobile e zoom | Campos, documentos, seletores, tabelas, diálogos e decisões utilizáveis. | L1 |
| CA25 | Serviço de atualização do dashboard cai | Tela informa desatualização; não apresenta dados antigos como atuais. | L2 |
| CA26 | Portaria com aluno/externo é publicada | Documento usa a identificação homologada em D21; e-mails, listas, buscas e exportações não mostram CPF; CPF completo só para perfis autorizados (D16). | L1 |
| CA27 | Membro é substituído em portaria vigente | Ato vinculado; datas de saída e entrada; relatório de horas respeita as datas. | L1 |
| CA28 | Servidor com participações vigentes é registrado como afastado, aposentado ou desligado | Alerta “Avaliar participação” (ou “Avaliar continuidade da presidência”) por portaria; documento inalterado; motivo do afastamento não exibido; indicação futura só bloqueada se D24 definir regra. | L1 |
| CA29 | Portaria de lotação é solicitada e elaborada | Exige pessoa, setores de origem e destino e data de efeito; horas e presidência conforme D07/D20; base de pessoal não alterada automaticamente. | L1 |
| CA30 | Navegação conforme eMAG e WCAG | Critérios aplicáveis verificados um a um; “Ir para o conteúdo” e atalhos funcionam sem conflitar com tecnologia assistiva. | L1 |
| CA31 | Perfil exibe CPF completo, endereço ou telefone; administrador tenta o mesmo sem papel autorizado | Exibição autorizada registrada no log (usuário, data, pessoa); administrador sem papel autorizado não obtém o dado (D16). | L1 |
| CA32 | Minuta, versão aprovada para assinatura e documento assinado | Minuta com marca; versão para assinatura sem marca e com conteúdo congelado; documento assinado preservado como recebido; a tela indica qual dos três está sendo visto. | L1 |
| CA33 | Item da caixa de pendências é concluído | Tarefa compartilhada sai para todos com aviso de quem concluiu; aprovação de um departamento não remove as dos outros nem conclui a etapa; contadores de T03 e T20 conferem. | L1 |
| **CA34 (v3.1)** | Normativa classificada com o DOU como canal oficial tem só o registro do Boletim | Não passa a “Publicada”: o DOU aparece como canal oficial pendente e o Boletim fica registrado com a sua natureza (divulgação ou réplica); e-mails não disparam. Depois do registro no DOU, a data de publicação é a do DOU, mesmo que outra réplica seja registrada mais tarde (D11). | L1 |
| **CA35 (v3)** | Versão aprovada é editada antes da assinatura | Volta a minuta; aprovações invalidadas; nova validação exigida. | L1 |
| **CA36 (v3)** | PDF anexado tem signatário sem competência na data, conteúdo de outra versão ou assinatura só como imagem | Fica “Recusada na verificação” com o motivo; a portaria não passa a assinada. | L1 |
| **CA37 (v3)** | Rascunho com data final já passada | Mostra a etapa de produção; não aparece como “Vencida” nem nos relatórios de vencidas. | L1 |
| **CA38 (v3)** | Portaria recebe revogação parcial; outra recebe revogação com efeito futuro | A primeira continua com sua situação e marcador “Revogação parcial”; a segunda mantém a situação atual com “Revogação agendada” até a data. | L1 |
| **CA39 (v3.1)** | Três portarias publicadas: início futuro com término; início futuro **sem** término; início passado sem término | As duas primeiras: “Vigência futura”. A terceira: “Vigente — sem término”, que nunca vira vencida nem gera alerta de vencimento. | L1 |
| **CA40 (v3)** | Participante externo sem contato em portaria publicada | Publicação concluída; comunicação dele “Sem contato”, como pendência do emissor em T20; não conta como enviada. | L1 |
| **CA41 (v3)** | Sincronização com a base oficial falha ou diverge do cadastro | Dados, vínculos e permissões preservados; divergência visível com rota de correção. | L1 (se houver integração) |
| **CA42 (v3)** | Modelo institucional é alterado | Atos emitidos mantêm documento e modelo originais; nova versão vale só para atos novos. | L1 |
| **CA43 (v3.1)** | Normativa é alterada por outra portaria, uma vez com efeito imediato e outra com efeito futuro | Efeito imediato: o texto compilado mostra a nova redação com anotação e link para o ato modificador. Efeito futuro: a redação atual permanece e a nova aparece como “redação a vigorar a partir de dd/mm/aaaa”. Original sempre acessível; compilação mostra responsável e data de atualização; no Gestor, identificada como cópia de trabalho (alternativa A de D11). | L1 ou L2 (D11) |
| **CA44 (v3.1)** | Lapso manifesto encontrado em portaria publicada; num segundo caso, erro material de grafia | Retificação vinculada só ao trecho, nos dois casos; original e histórico preservados. O fluxo de assinatura ou anuência segue o procedimento de cada modalidade homologado em D14, sem obrigar o fluxo completo de uma nova portaria. | L1 |
| **CA45 (v3.1)** | Normativa emitida em dezembro e outra em janeiro; portaria de pessoal nos mesmos meses; dois operadores reservam número da mesma série ao mesmo tempo | A série normativa continua em janeiro; a de pessoal recomeça em 1; os dois operadores recebem números diferentes, sem colisão (D09). | L1 |
| **CA46 (v3.1)** | No editor: artigo com incisos e sem parágrafos; em minuta nova, mover um artigo; em alteração de ato publicado, acrescentar dispositivo entre o art. 5º e o art. 6º e revogar o art. 7º | Artigo com incisos é aceito. Na minuta nova, a renumeração é automática e as remissões internas acompanham. Na alteração, o acréscimo vira “Art. 5º-A”, nenhum artigo ou parágrafo é renumerado e o número do art. 7º não é reaproveitado. | L1 |
| **CA47 (v3.1)** | Arquivo de uma portaria normativa é gerado | Sem cabeçalho, rodapé, sublinhado, tachado ou cor no texto; formatação do art. 12 do Decreto 12.002/2024; logotipo só na moldura do visualizador. | L1 |
| **CA48 (v3.1)** | Combinações de situação: encerramento registrado dentro do período; término passado com revogação total eficaz; consulta com data de referência anterior à publicação | Primeiro: “Encerrada” (hipótese H-D14). Segundo: “Revogada”. Terceiro: o ato não aparece como publicado naquela data. Cada ato tem exatamente uma situação. | L1 |
| **CA49 (v3.2)** | Envio de e-mail falha de forma definitiva para um membro | Tarefa “Tratar comunicação” fica com o emissor até um dos três resultados da §7.6; descartar o aviso não conclui a tarefa; falha transitória mostra as novas tentativas. | L1 |
| **CA50 (v3.2)** | Publicação oficial em 22/10 com cláusula de vigência a partir de 01/11 | A portaria aparece como publicada em 22/10, mas sua situação é “Vigência futura” até 31/10 e “Vigente” a partir de 01/11. O início de vigência é derivado da cláusula, sem redigitação. | L1 |
| **CA51 (v3.2)** | Usuário abre uma versão aprovada para assinatura e um documento assinado ainda não publicado | Os dois abrem só em leitura; não há edição direta. “Criar nova minuta a partir desta versão” gera nova versão, invalida as aprovações e preserva a anterior e o assinado. | L1 |
| **CA52 (v3.2)** | Na minuta de uma portaria alteradora, o emissor reordena os próprios artigos | Os artigos da minuta são renumerados; os dispositivos do ato atingido (ex.: “Art. 5º-A”) mantêm sua numeração. | L1 |
| **CA53 (v3.2)** | Prévia e PDF de uma portaria de lotação | Mostram pessoa, setores de origem e destino e data de efeito; não mostram tabela de membros, carga horária nem presidência, exatamente como o formulário (D07/D20). | L1 |
| **CA54 (v3.2)** | Portaria com três membros: um recebe o e-mail; outro é comunicado por ofício; para o terceiro há exceção autorizada | O detalhe e o relatório de cumprimento mostram 1 “E-mail enviado”, 1 “Comunicação alternativa registrada” e 1 “Exceção autorizada”, sem contar os dois últimos como e-mail enviado. A exceção só é aceita com a decisão formal de D12 registrada. | L1 |
| **CA55 (v3.2)** | Revogação total registrada hoje com efeito em 30 dias; consulta com data de referência hoje e outra daqui a 31 dias | Hoje: situação atual mantida, com marcador “Revogação agendada”. Daqui a 31 dias: “Revogada”. | L1 |

Além dos cenários acima, revisar cada tela nos estados de carregamento, vazio, sem resultados, falha, sucesso, falta de permissão e sessão expirada. Testar alertas com o navegador fechado.

## 15. Matriz de rastreabilidade

| Requisito/regra | Cobertura planejada | Verificação principal |
| --- | --- | --- |
| RF1 | T01; seção 7.1 | Entrada local e sessão válida. |
| RF2 | T02; seção 7.1 | CA02; ciclo completo do link. |
| RF3 | T01/T02/T17; seções 7.1 e 11 | Autenticação institucional real e indisponibilidade (L2). |
| RF4 | T04–T11, T19, T20; seções 6 e 7 | CA03–CA14, CA32–CA36, CA44–CA47, CA50–CA52; aceite resolvido em D04. |
| RF5 | T11/T18/T20; seções 7.6, 7.12 e 8.3 | CA13/CA14/CA26/CA40/CA49/CA54; participação, vigência e anexo correto; cumprimento literal separado de alternativas. |
| RF6 | T06/T07; seção 7.7 | CA15. |
| RF7 | T13; seção 8.2 | CA19/CA20; três relatórios da fonte. |
| RF8 | T03; seção 8.1 | CA19/CA25; atualização segundo D18. |
| RN1 | T01 e todas as rotas/arquivos | CA01. |
| RN2 | T02; seção 7.1 | CA02. |
| RN3 | T02; seção 7.1 | CA02; LDAP não redefinido localmente. |
| RN4 | T05; seção 5.1 | CA03 (variantes de D07). |
| RN5 | T08/T09; seções 5.2 e 7.3 | CA10/CA18/CA29. |
| RN6 | T09/T10; seções 6.2 e 7.4 | CA11/CA33/CA35; assinatura bloqueada antes das validações. |
| RN7 | T05/T08/T09; seção 7.3 | CA08; interpretação em D06. |
| RC1 | T14; seção 5.3 | CA06, CA28, CA41. |
| RC2 | T08/T15; seção 5.3 | CA07, CA26, CA40. |
| RC3 | T07/T08/T19; seções 5.2, 7.3 e 7.10 | Conferência dos campos e do documento; CA32, CA42. |
| RC4 | T05/T08/T12; seções 5.2 e 7.8 | CA18, CA38. |
| RC5 | Seção 3; T08/T10/T17 | CA04/CA12; D02/D03. |
| RC6 | T08/T16; seções 5.2 e 7.9 | Vincular múltiplos memorandos e consultar as referências. |
| RC7 | T07; seção 6.4 | CA17/CA22/CA27/CA43/CA44. |
| RC8 | T03/T12/T18/T20; seções 7.8 e 8.3 | CA16, CA39 e alertas sem navegador aberto. |
| RC9 | T13; seção 8.2 | Horas atribuídas com interseção de intervalos; CA27. |
| RC10 | T03/T06/T12/T13; seções 6.1 e 8 | CA19, CA37–CA39, CA48, CA50, CA55; nenhuma categoria da fonte omitida. |
| RC11 | T16/T17; seção 11; D23 | Contrato futuro SIPAC e referências externas. |
| RC12 | T05; seção 5.1 | Justificativa, propósito, membros, horas sugeridas e vigência. |
| RC13 | T05/T08/T19; seções 5.1, 5.2 e 7.10 | CA29, CA53; finalidades de lotação e normativa, iguais no formulário e no documento. |
| Transversais | Seção 10 | CA24, CA30, CA31 (acessibilidade e LGPD). |

## 16. Fontes, limitações e conclusão do planejamento

1. **Fonte principal lida integralmente:** `gestor portaria, regras de negocio.txt`. Rascunho de negócio; ambiguidades em D01–D24 e §2.1. Contém uma frase interrompida (D19).
2. **Auditoria da v2:** `AUDITORIA_PLANO_INTERFACE_GESTOR_PORTARIAS_v2.md` (21/10/2026). Achados A01–A15 incorporados conforme §0.4; o que não entrou está no backlog (§17). **Parecer da v3:** `PARECER_PLANO_INTERFACE_GESTOR_PORTARIAS_v3.md` (22/10/2026). Achados V3-01 a V3-10 incorporados conforme §0.3. **Parecer da v3.1:** `PARECER_PLANO_INTERFACE_GESTOR_PORTARIAS_v3.1.md` (22/10/2026). Ressalvas e refinamentos incorporados conforme §0.2.
3. **Conferido diretamente na v3, na v3.1 e na v3.2:**
   - [Decreto nº 12.002/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm), texto oficial: art. 2º (aplica-se à administração federal autárquica), art. 12 (articulação e formatação, inclusive vedação de cabeçalho e rodapé no texto), art. 13 (formas de alteração), art. 14 (regras de alteração: sem renumerar artigos e parágrafos, acréscimo com letra, sem reaproveitar número revogado), art. 18 (cláusula de vigência: na publicação, em data expressa ou após prazo contado da publicação), art. 22 (séries de numeração; portarias de pessoal com série anual), art. 68 (publicação obrigatória no DOU nas hipóteses do caput; boletim interno nas demais, §3º), art. 69 (forma de divulgação), arts. 73–74 (republicação e retificação), art. 75 (Manual de Redação).
   - [Lei Complementar nº 95/1998](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm), arts. 10 a 12 (articulação e alteração), como base geral. **(v3.2)** Pelo art. 1º, parágrafo único, ela se aplica, no que couber, aos decretos e demais atos de regulamentação do Executivo; o Decreto 12.002/2024 detalha esse regime no âmbito federal. Os dois se complementam.
   - [Página de portarias do IFC](https://ifc.edu.br/portarias/): portarias da Reitoria consultadas no portal público do SIG (“Publicações oficiais”); Boletim de Serviços como arquivo antigo. Não comprova o procedimento do Campus Videira (D23).
4. **Conferidas pela auditoria, não reconferidas aqui:** LGPD (Lei 13.709/2018), LAI (Lei 12.527/2011), Lei 14.063/2020, Decreto 10.543/2020, Resolução CONARQ nº 50/2022 (e-ARQ Brasil), eMAG 3.1, WCAG 2.2, Design System gov.br e manual de identidade visual do IFC. Os links estão na auditoria.
5. **Boletim de Serviço do Campus Videira** — [índice consultado na v1](https://videira.ifc.edu.br/boletim-servico/); referência para o modelo T19.
6. **Planilha de registro** — [link da fonte](https://docs.google.com/spreadsheets/d/1X_pBkviYw58yedb37whMl9XOmuN4BwHLG2S1ymGVtR0/edit?gid=663350447); ainda não lida. Leitura na Etapa 0.

**Limites:** sem acesso a políticas internas, contratos de API, infraestrutura de assinatura, LDAP/SIGRH, SIG do campus ou usuários. Aplicabilidade das normas ao ato concreto cabe aos responsáveis institucionais.

**Condição para considerar a interface completa:** todas as capacidades RF1–RF8, RN1–RN7 e RC1–RC13 com telas e comportamentos implementados (fim do L2); decisões homologadas; testes de acesso, fluxo, documentos, dados, falhas, privacidade e acessibilidade executados; aceite das áreas usuárias registrado.

## 17. Backlog de especificação (v3)

Itens das revisões que procedem, mas não precisam estar prontos para começar os wireframes. **(v3.1)** Cada item tem um prazo ligado a um marco; os que condicionam o L1 precisam estar resolvidos antes de a capacidade afetada entrar em operação. Backlog não equivale a resolvido.

| # | Item | Origem | Prazo |
| --- | --- | --- | --- |
| B01 | Registro de decisão expandido: fonte/evidência, opções, risco de estar errada, prazo, limite de uso, decisão final com data | Auditoria §4.1; parecer V3-10 | **Etapa 1, obrigatório para as decisões de prioridade Alta**; demais conforme o volume |
| B02 | Dividir “Bloqueia” em desenho, implementação e entrada em operação | Auditoria §4.1; parecer V3-10 | **Etapa 1**, junto com B01 |
| B03 | Matriz jornada × tela × estado × requisito × hipótese × CA | Auditoria §6.1 | Antes do handoff (Etapa 5) |
| B04 | Matriz de dados pessoais: dado × finalidade × perfil × canal (cadastro, lista, busca, documento, e-mail, exportação, log) | Auditoria A12; parecer V3-10 | **Campos exibidos por tela: antes de congelar a alta fidelidade (Etapa 4).** Política completa: antes da operação do L1 |
| B05 | Jornadas adicionais. **Recuperação de acesso (local e LDAP) e exceções críticas do L1** (assinatura recusada, publicação parcial, comunicação sem contato) | Auditoria §6.1; parecer V3-10 | **Etapa 2**, sem esperar o teste |
| B05b | Jornadas adicionais restantes: CGP corrige cadastro com fonte indisponível; Vice dentro e fora do período; gestor confere horas que mudam no período; revogação parcial/futura com inclusão e retirada de membros | Auditoria §6.1 | Etapa 2 ou após o teste exploratório |
| B06 | Horas no tempo. **Regra mínima** (datas de entrada/saída e interseção com a vigência) | Auditoria §6.4; parecer V3-10 | **Antes de implementar a substituição de membro e a mudança de carga no L1** |
| B06b | Horas no tempo — regras completas: precisão decimal, mudança de departamento, relatório histórico | Auditoria §6.4 | Com D06, antes do relatório RC9 (L2) |
| B07 | Fórmula, denominador, janela, fonte e responsável de cada métrica; percentis de tempo; **eventos que precisam ser coletados desde o primeiro dia** | Auditoria A15; parecer V3-10 | Antes da implantação do L1 |
| B08 | Critérios da auditoria não incorporados: versão pública derivada de documento assinado (A-CA46); intervalos históricos de lotação/chefia em relatório (A-CA45); elegibilidade conforme regra homologada (A-CA41, depende de D24) | Auditoria §7; parecer V3-10 | **Cada teste antes da entrada em operação do recurso afetado** (A-CA46 com D21; A-CA45 com RC9; A-CA41 com D24) |
| B09 | Mapeamento eMAG/WCAG critério a critério e plano de teste de PDF acessível | Auditoria §5; parecer V3-10 | **Critérios definidos na Etapa 4; verificação também na implementação e na homologação (Etapas 6–7)** |
| B10 | Tratamento de dados de alunos menores de idade (LGPD, art. 14) | Auditoria §6.5; parecer V3-10 | Com D16, **antes de cadastrar alunos na operação** |
| B11 | Política arquivística detalhada (classificação, temporalidade, destinação, captura de rascunhos) | Auditoria A12; parecer V3-10 | **Mínimo (captura, preservação e responsáveis) antes da geração e guarda operacional de documentos no L1**; detalhamento completo com a área arquivística |
| B12 | Tabela “coluna da planilha → prática atual → requisito → hipótese”, com dados anonimizados; separar prática atual de regra homologada | Auditoria §6.6 | Etapa 0 |
| B13 | Testes de geração do PDF: várias páginas, nomes longos, anexos, quebra de tabelas e de dispositivos; modelos por natureza (§7.10) | Auditoria A13; parecer V3-03 | Implementação de T19, **verificados antes da emissão operacional** |
