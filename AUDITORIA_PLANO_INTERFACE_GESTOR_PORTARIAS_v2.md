# Auditoria da versão 2 — Plano da interface do Gestor de Portarias

**Data:** 21/10/2026  
**Objeto:** análise da v2 em comparação com a v1, o rascunho de regras de negócio e referências oficiais.  
**Resultado:** a v2 melhora a preparação para o design, mas precisa de correções antes de ser tratada como especificação homologada.

## 1. Parecer

**Recomendo aproveitar a v2 como base da próxima revisão. Não recomendo aprová-la integralmente como está.** Jornadas, regiões das telas, organização do Figma, documento A4, caixa de pendências e testes de usabilidade são melhorias úteis. O reconhecimento de lotação e normatização também corrige uma cobertura insuficiente da v1.

O principal problema novo é a passagem de algumas hipóteses para regras categóricas em campos, critérios de aceite e fluxos. Uma anotação geral de “provisório” não resolve contradições com a fonte nem entre seções do próprio plano.

Há três classes de conclusão nesta auditoria:

- **Manter:** melhoria de planejamento sem alteração indevida de regra institucional.
- **Manter com ajustes:** proposta pertinente, mas incompleta, inconsistente ou dependente de homologação.
- **Corrigir:** afirmação sem suporte suficiente, conflito verificável ou comportamento que pode produzir um resultado incorreto.

As referências legais foram conferidas em páginas oficiais. A avaliação de aplicabilidade ao ato concreto e a política interna do IFC continuam a cargo dos responsáveis institucionais; esta revisão não substitui essa homologação.

## 2. Avaliação dos dez pontos apresentados

| Ponto | Parecer | O que manter e o que ajustar |
| --- | --- | --- |
| 1 — Hipóteses para decisões pendentes | **Manter com ajustes** | Dar hipótese, impacto e prioridade ajuda. Não era necessário decidir as 18 pendências para começar qualquer desenho: a v1 já permitia avançar nas partes independentes. Permissões, efeitos de atos, dados pessoais e assinatura podem ser simulados com alternativas, mas não devem virar regras operacionais por conveniência. Aceite como triagem e Boletim como canal são hipóteses, não conclusões da fonte. |
| 2 — MVP/MoSCoW | **Manter com ajustes** | A priorização é boa para execução. O pedido original era cobrir todas as funcionalidades; o recorte de lançamento não pode reduzir o escopo do plano nem sugerir atendimento integral antes de RF3/RF7/RF8. Administração mínima e o tratamento operacional de atos vigentes precisam aparecer no corte. |
| 3 — Jornadas e concretude para Figma | **Manter** | J01–J08, regiões das telas e organização do arquivo são avanços reais. Faltam jornadas de administração, recuperação de acesso, lotação e normativa, além da assinatura externa que a própria v2 escolheu para o MVP. Algumas jornadas atuais dependem de recursos classificados fora do MVP. |
| 4 — Detalhes da fonte | **Manter com ajustes** | Lotação/normatização, frase truncada e divergência no número de unidades são achados válidos. Chefia obrigatória justifica investigar anuência, mas não prova que exista esse fluxo. A tabela de campos por finalidade propõe exceções a RN4/RN5; essas exceções não foram confirmadas pela fonte. |
| 5 — T19 e T20 | **Manter com ajustes** | São bons artefatos explícitos. A v1 já previa prévia documental e filas de validação/assinatura; a lacuna era de detalhamento e identificação, não ausência completa das funções. Corrigir o conflito entre marca de minuta e documento para assinatura, além da permissão para editar modelos. |
| 6 — Substituição, afastamento e desligamento | **Manter com ajustes** | Ótimos cenários a investigar e prototipar. Afastamento, desligamento, aposentadoria e impedimento para integrar uma portaria não são equivalentes. Não existe, no rascunho, autorização para bloquear toda indicação de pessoa não ativa ou declarar automaticamente vaga a presidência. |
| 7 — Leis e padrões públicos | **Manter com ajustes importantes** | As referências são pertinentes. É preciso separar obrigação normativa, recomendação de design e política local. LGPD não determina uma máscara universal de CPF; LAI não reescreve RN1; log de leitura é uma medida a especificar, não uma obrigação literal de registrar todo clique. Incluir publicação por canal aplicável e gestão arquivística. |
| 8 — Situação exibida | **Manter com correções** | Um rótulo principal com marcadores é útil. A precedência proposta pode marcar minuta como vencida, tratar revogação parcial como total e contar vigência futura como vigência atual. O cálculo precisa de condições e casos de teste, não só uma ordem de prioridade. |
| 9 — Importação SIGRH/LDAP | **Manter como proposta condicionada** | A origem oficial dos dados reduz retrabalho se existir integração autorizada. Não foi comprovado que o LDAP contenha cadastro funcional completo ou que haja API disponível. Autenticação e fonte cadastral são contratos distintos. Planejar sincronização, divergências e indisponibilidade. |
| 10 — Usabilidade e métricas | **Manter com ajustes** | Tarefas e métricas melhoram a validação. Dois ou três participantes por grupo servem a uma rodada exploratória, não sustentam a garantia de revelar a maioria dos problemas. “Maioria concluiu” é insuficiente para decisões críticas. Falha de e-mail não tratada também não mede, sozinha, entrega ao destinatário. |

### 2.1 Conferência das 17 alterações do registro da v2

| Alteração | Parecer específico |
| --- | --- |
| R01 | Manter hipótese/impacto/prioridade; acrescentar evidência, alternativas, responsável e limite de uso. |
| R02 | Manter MoSCoW como proposta de execução; separar MVP de produto completo e explicitar dependências. |
| R03 | Manter J01–J08 e complementar os perfis/casos sem jornada. |
| R04 | Manter esqueletos; detalhar salvamento, revisão por finalidade e ausência de dados. |
| R05 | Manter RC13; classificar os novos campos/dispensas como propostas até homologação. |
| R06 | Manter as inconsistências identificadas; não presumir o conteúdo perdido. |
| R07 | Manter T19/T20; distinguir prévia, documento para assinatura e modelo administrativo. |
| R08 | Manter rótulo derivado, corrigindo condições e categorias de relatório. |
| R09 | Manter cenários; retirar bloqueios funcionais automáticos não fundamentados. |
| R10 | Manter as três interpretações de aceite como alternativas, sem presumir anuência da chefia. |
| R11 | Manter referências; substituir menções de memória por fontes e consequências verificadas. |
| R12 | Manter minimização/mascaramento como proposta de proteção; não afirmar proibição legal universal de CPF integral. |
| R13 | Manter investigação da base oficial; não pressupor conteúdo, API ou sincronização disponível. |
| R14 | Manter organização do Figma; acrescentar matriz de cobertura e variantes dos fluxos incertos. |
| R15 | Manter testes/métricas; explicitar amostra exploratória, tarefas críticas e medição. |
| R16 | Corrigir a equivalência universal entre publicação e Boletim; manter registro externo como modalidade possível. |
| R17 | Manter novos critérios; corrigir CA26/CA28/CA32 e acrescentar casos que expõem as inconsistências. |

## 3. Correções prioritárias

**Prioridade alta:** corrigir antes de congelar o fluxo afetado ou usá-lo como critério de implementação. **Prioridade média:** resolver no detalhamento, antes da entrega operacional da capacidade. Isso não exige paralisar wireframes independentes.

### A01 — Publicação não pode ser sempre equivalente a Boletim de Serviço — alta

**Onde:** §0.1, §6.2, §7.6, D11; v2, linhas 390–392, 490 e 738.

**Problema:** a hipótese é plausível para alguns atos internos, mas foi usada como fluxo geral. O produto também contempla atos normativos. O art. 68 do Decreto nº 12.002/2024 prevê hipóteses de publicação obrigatória no DOU, incluindo atos normativos com efeitos externos. O §3º admite apenas boletim interno fora das hipóteses do caput. O art. 69 também disciplina divulgação desses atos. Isso exige classificar o caso; não permite adotar um canal único para todos. [Decreto nº 12.002/2024, arts. 68–69](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

**Correção proposta:** T11 registra um ou mais canais e respectivas evidências: tipo de canal, edição/seção/página quando aplicável, data, URL e documento. A conclusão da publicação depende dos canais exigidos para o ato, homologados com o IFC. Não é necessário integrar automaticamente todos os canais para registrar publicação externa.

O site da Reitoria já aponta portarias para um portal público de publicações oficiais, além do arquivo antigo do Boletim. Isso reforça a necessidade de investigação, mas não prova que o Campus Videira use o mesmo procedimento. [Orientação oficial do IFC para consulta de portarias da Reitoria](https://ifc.edu.br/portarias/).

### A02 — Marca “MINUTA” conflita com o fluxo de assinatura externa — alta

**Onde:** §7.5, §7.10 e CA32; linhas 484, 537 e 833.

**Problema:** toda prévia/PDF anterior à assinatura recebe “MINUTA — SEM VALIDADE”, mas o MVP gera um PDF final ainda não assinado para o signatário assinar fora do sistema. Esse PDF também cairia na regra. Assiná-lo preservaria a marca; removê-la depois modificaria o conteúdo assinado.

**Correção proposta:** distinguir três artefatos:

1. **Minuta de trabalho:** marca de minuta, nunca encaminhada como documento final para assinatura.
2. **Documento aprovado para assinatura:** conteúdo e versão congelados, sem a marca de minuta; a interface informa “Aguardando assinatura”. A falta de assinatura continua explícita no estado do registro.
3. **Documento assinado:** arquivo retornado e verificado, preservado integralmente.

Trocar CA32 por um cenário que diferencie esses três casos. A política de identificação visual deve ser homologada; “SEM VALIDADE” não precisa ser usado como declaração jurídica genérica para todo documento em elaboração.

### A03 — Anexar um PDF não basta para concluir a assinatura — alta

**Onde:** H-D10, §7.5 e CA12/CA13; linha 484.

**Problema:** a modalidade externa é viável, mas falta o contrato de verificação. O operador que anexa o arquivo não é necessariamente o signatário. Um PDF pode corresponder a outra versão, conter apenas uma imagem ou ter sido assinado por pessoa sem competência no momento do ato.

**Correção proposta:** distinguir “Documento anexado”, “Assinatura em verificação” e “Assinatura verificada”, segundo o mecanismo institucional. Registrar arquivo recebido, identidade do signatário, instante da assinatura quando comprovável, habilitação correspondente, resultado da verificação, responsável pelo registro e relação com a versão aprovada. Hashes da versão-base e do arquivo assinado são registros diferentes; não exigir igualdade dos bytes após a inclusão da assinatura.

A Lei nº 14.063/2020 distingue assinatura simples, avançada e qualificada; o Decreto nº 10.543/2020 regulamenta níveis mínimos no âmbito federal. Isso não permite concluir, sem análise do ato e das normas do IFC, que toda portaria precisa de ICP-Brasil ou que qualquer assinatura gov.br será suficiente. [Lei nº 14.063/2020, arts. 4º–5º](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm), [Decreto nº 10.543/2020, art. 4º](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/decreto/d10543.htm).

### A04 — LAI não altera automaticamente RN1 — alta

**Onde:** §10, linha 694, confrontada com RN1 e CA01.

**Problema:** a v2 explica o login como proteção de rascunhos, dados pessoais e operação, “não o ato publicado em si”. A fonte exige consulta a portarias por usuários logados, sem essa exceção. CA01 mantém a exigência, produzindo duas leituras possíveis.

**Correção proposta:** manter todas as consultas e downloads do sistema sob autenticação enquanto RN1 vigorar. Distinguir o sistema de gestão do canal externo de divulgação pública. Se o IFC desejar consulta pública dentro do novo produto, registrar mudança formal de escopo/regra e seus controles. Transparência e proteção de informação pessoal devem coexistir; a LAI prevê acesso parcial e tratamento específico de informações pessoais. [Lei nº 12.527/2011, arts. 7º, §2º, 8º e 31](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm).

### A05 — A precedência de situações produz classificações erradas — alta

**Onde:** §6.1 e D05; linhas 367–378.

**Exemplos que a regra atual não resolve corretamente:**

- Minuta não publicada cuja data final já passou: pode virar “Vencida” por a vigência ter precedência sobre produção.
- Portaria parcialmente revogada: pode virar “Revogada”, embora parte permaneça em efeito.
- Portaria publicada com início no mês seguinte: vai para “Em vigência”, apesar de a própria interface dizer “Vigência futura”.
- Portaria vigente com alteração ainda em elaboração: a existência da nova minuta não pode substituir a situação do ato publicado.
- Portaria sem término: não deve depender de uma comparação com data final inexistente.

**Correção proposta:** calcular separadamente situação do ato publicado, etapa da versão em produção e eventos com efeitos temporais. Depois escolher a apresentação por contexto. Rótulo principal é uma síntese de interface, não a única fonte para relatórios.

| Caso | Apresentação esperada para homologação |
| --- | --- |
| Versão ainda não publicada | Etapa da produção; não aplicar automaticamente rótulo de ato vencido. |
| Ato com revogação total já eficaz | Revogado, com referência e data de efeito. |
| Revogação parcial já eficaz | Manter situação aplicável ao restante; marcador de revogação parcial. |
| Revogação com efeitos futuros | Preservar situação atual e informar a mudança agendada. |
| Ato publicado com início futuro | Vigência futura, categoria distinta de vigente hoje. |
| Ato publicado sem término e sem evento de cessação aplicável | Não classificar como vencido pela ausência de data final. |
| Alteração em elaboração de ato vigente | Ato vigente com alteração em preparação; documentos e etapas separados. |
| Conclusão de atividade registrada | Mostrar conclusão; sua relação com cessação dos efeitos depende de D14. |

### A06 — Algumas hipóteses mudam a fonte sem registrar a divergência — alta

**Onde:** §3.2, D02/D03/D07/D16/D17; linhas 152–159 e 729–748.

**Problemas:**

- “Uma pessoa é sempre servidor” não serve como premissa geral: há participantes externos e a fonte não define a natureza do administrador técnico ou de todo consultor.
- União irrestrita de papéis não descreve escopo de departamento, validade da substituição ou eventuais restrições por capacidade.
- DG sem configuração e administrador apenas técnico são escolhas possíveis, mas a fonte descreve acesso total para ambos, com configuração explicitamente atribuída ao administrador.
- Vice autorizado apenas quando substituto por período é uma hipótese adicional; a fonte fala em Vice-Diretor nomeado, sem delimitar essa condição.
- D16 concede dados pessoais a Admin por padrão, enquanto não fundamenta a necessidade funcional de cada dado.
- “Sem dados pessoais” para consultor é impreciso: nome e SIAPE também identificam pessoas. O objetivo deveria ser restringir dados cadastrais desnecessários, não prometer ausência de qualquer dado pessoal.

**Correção proposta:** classificar cada célula como confirmada, hipótese ou conflitante. Separar pessoa, vínculo, conta, papel e autorização efetiva; documentar a política de combinação. Atribuição técnica não deve conferir automaticamente acesso a todo dado cadastral. A autoridade para habilitar signatário e para definir substituição institucional também precisa de evidência própria.

### A07 — Afastamento não pode significar inelegibilidade automática — alta

**Onde:** §5.3, §7.11 e CA28; linhas 341, 545–546 e 829.

**Problema:** a fonte não define as regras de participação de afastados, aposentados ou desligados. O sistema também admite comunidade externa. Aposentadoria pode alterar vínculo, sem justificar apagar a pessoa ou bloquear toda participação futura. Afastamento não comprova vacância da presidência.

**Correção proposta:** separar situação funcional, situação da conta e elegibilidade para a atividade. Criar alerta de revisão com base em evento confiável, mas bloquear indicação apenas conforme regra institucional homologada por tipo de vínculo/atividade. Preservar o histórico e tratar eventual participação futura como vínculo externo quando isso for permitido.

Trocar “função ficou sem titular” por “Avaliar continuidade da presidência”, até haver ato que efetivamente encerre a atribuição. Não exibir motivo médico de afastamento nas filas de trabalho; verificar a necessidade e o acesso a esse tipo de informação.

### A08 — Campos condicionais não foram propagados à solicitação — alta

**Onde:** §5.1, §5.2, §7.3, CA03/CA18/CA29.

**Problema:** a tabela H-D07 dispensa membros em normativa/revogação, mas §5.1 e CA03 bloqueiam toda solicitação sem membros por RN4. Um servidor não conseguiria solicitar uma normativa segundo o modelo que a própria v2 propôs. O tratamento de vigência indeterminada também precisa ser coerente desde a solicitação.

**Correção proposta:** mapear obrigatoriedade por etapa e finalidade, incluindo solicitação. Exceções a RN4/RN5 devem ser registradas como alteração de regra a homologar, e não como mera decisão de layout. Enquanto não homologadas, mostrar variantes alternativas no protótipo.

RC13 é válido como cobertura das finalidades, mas a afirmação de que campos variam já é uma proposta de solução. Também não assumir que toda normativa jamais mencione pessoas ou que a designação de qualquer colegiado exija obrigatoriamente presidente e vice.

### A09 — Aceite como triagem é plausível; a configuração futura foi simplificada demais — média

**Onde:** §6.2, §6.3, §7.4 e D04; linhas 401–405 e 418.

**Problema:** A, B e C representam decisões diferentes: aceitar uma demanda, concordar com participação e anuir com alocação. Não são necessariamente alternativas exclusivas. A frase “podem ser ligadas depois por configuração, sem redesenhar o fluxo” promete algo não demonstrado. Pode exigir destinatários, conta para participantes, prazo, recusa e nova assinatura.

**Correção proposta:** usar nomes específicos: “Aceitar solicitação”, “Registrar ciência do membro” e “Registrar anuência da chefia”, apenas se adotados. Mostrar a opção A como fluxo do protótipo e os impactos das demais como variantes. Para demanda interna sem solicitação, não exigir uma triagem de solicitação inexistente.

A hipótese de validações departamentais cumulativas mais validação final do emissor é conservadora, mas RN6 usa “e/ou”. Homologar quem valida cada caso, inclusive participantes de outros órgãos e composições sem DEPE/DAP. Se um validador altera horas ou composição, definir quais aprovações anteriores são invalidadas.

### A10 — O MVP proposto não fecha todas as próprias dependências — média

**Onde:** §0.1, §2.3, §4.3 e §13.1.

**Problema:** a v2 chama o MVP de ciclo completo, mas deixa renovação/revogação/encerramento para depois; inclui alertas sem fechar o tratamento das ações resultantes; inclui T20 para recursos futuros; e não explicita habilitação mínima de usuários e papéis no “Deve”. J02 usa modelos opcionais, J06/J08 exercitam funções “Deveria” e J04 mostra assinatura integrada em vez da modalidade externa do MVP.

**Correção proposta:** manter o escopo integral para o design e identificar, em cada tela/jornada/critério, a entrega prevista. Separar “protótipo do produto completo” de “protótipo do primeiro lançamento”. A versão operacional precisa ter administração mínima e forma autorizada de registrar o tratamento de um ato vigente, mesmo que alguns recursos assistidos venham depois.

LDAP, relatórios e dashboard continuam no escopo contratado pela fonte; postergação precisa de acordo de entrega. Atualização de 60 segundos pode ser uma proposta técnica para RF8, mas não é comprovação automática de atendimento a “tempo real”.

### A11 — Publicação e e-mail não podem ser considerados completos sem tratar destinatários — média

**Onde:** §5.3, J05, D12 e RF5; linhas 238, 345, 492 e 739.

**Problema:** e-mail opcional para externos permite publicação, mas “pendente — sem contato” ainda não atende ao envio a todos os membros previsto em RF5. A fonte não autoriza excluir esses membros da comunicação. Além disso, J05 fala em disparo manual e o texto geral sugere disparo pelo evento, sem uma escolha única.

**Correção proposta:** separar conclusão da publicação de conclusão da comunicação. Definir obtenção de contato, responsável pela pendência, tratamento da impossibilidade de envio e eventual exceção institucional. Não inventar bloqueio da publicação por falta de e-mail; homologar esse efeito. Definir se o primeiro envio é automático ou manual, com o mesmo controle de duplicidade.

Ciência à chefia é uma nova proposta de destinatário; não está demonstrada pela obrigatoriedade do campo “chefia imediata”. Necessita decisão sobre finalidade, conteúdo e acesso.

### A12 — Privacidade e retenção precisam de política por dado e artefato — alta

**Onde:** §5.2, §9.2, §10, D16/D21 e CA26/CA31.

**Problema:** coexistem “CPF não aparece em e-mails” (§10) e “e-mails mostram CPF mascarado” (CA26). A regra de “nunca” publicar CPF completo é mais absoluta que a fundamentação apresentada. “Ato emitido nunca excluído” também não define destinação arquivística, enquanto rascunho excluível pode já ter valor documental conforme sua captura e uso.

**Correção proposta:** criar matriz por dado × finalidade × perfil × canal: cadastro, lista, busca, documento, e-mail, exportação e log. Preferir omitir identificador quando ele não for necessário; quando houver justificativa, aplicar o padrão homologado. Mascaramento reduz exposição, sem tornar o dado automaticamente anônimo. [Orientação do MGI sobre anonimização e mascaramento](https://www.gov.br/gestao/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados/lgpd-no-mgi-1/anonimizacao).

A LGPD exige finalidade, necessidade, bases adequadas e registro das operações de tratamento. Esses comandos não estabelecem uma máscara universal nem, isoladamente, obrigam um log de cada clique de leitura. Especificar quais acessos são auditados, acesso aos próprios logs e prazo de retenção. [LGPD, arts. 6º, 23, 37 e 46](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm).

Para documentos, validar classificação, temporalidade e destinação com a área arquivística. Manter integridade e consulta histórica não significa decidir guarda eterna de todo artefato. O e-ARQ Brasil, versão 2, é referência adicional a avaliar para a gestão documental deste produto. [Resolução CONARQ nº 50/2022](https://www.gov.br/conarq/pt-br/legislacao-arquivistica/resolucoes-do-conarq/resolucao-no-50-de-06-de-maio-de-2022).

Mascaramento/redação de conteúdo público deve ser planejado antes da assinatura ou como cópia derivada identificada. Nunca alterar silenciosamente o original assinado para produzir a versão divulgada.

### A13 — T19 mistura modelo de conteúdo com configuração e permissão — média

**Onde:** T19, §7.9, §7.10 e D22; linhas 223, 527 e 531–539.

**Problema:** a edição do modelo é atribuída a “Admin + Gabinete”, excluindo CGP, e aparece em Administração. A fonte dá aos dois emissores capacidades amplas sem configuração. Não está claro se o usuário edita texto de uma portaria ou muda o padrão oficial para todas as portarias.

**Correção proposta:** separar edição do ato, seleção de modelo e manutenção do modelo institucional. Definir autoria, aprovação e versionamento do modelo; mudanças de modelo não alteram documentos já emitidos. A4 no Figma é referência de layout; a geração real precisa testar múltiplas páginas, quebras de artigos/tabelas, nomes longos, anexos, rodapé e assinatura.

### A14 — Importação oficial é boa hipótese, mas faltam regras de sincronização — média

**Onde:** §5.3, §11 e D15.

**Problema:** SIGRH e LDAP são agrupados como se fossem fontes equivalentes de todos os dados. Não foi verificado o conteúdo disponível, a autoridade por campo ou a autorização para integração. Bloquear edição de dado importado sem uma rota de correção pode paralisar o cadastro obrigatório.

**Correção proposta:** definir fonte por atributo, identificador estável, periodicidade, data do dado, último sucesso, falha parcial, divergência, exceção manual autorizada e canal de correção. Não retirar todos os vínculos ou permissões por ausência temporária na sincronização. Preservar lotação/chefia e composição históricas; uma mudança cadastral atual não reescreve documentos anteriores.

O endereço completo continua obrigatório na fonte. Antes de integrá-lo por conveniência, o IFC deve avaliar sua finalidade no sistema de portarias e, se necessário, revisar formalmente esse requisito. Integração não substitui minimização.

### A15 — O teste de usabilidade e as métricas têm conclusões mais fortes que a medição — média

**Onde:** §13.3/§13.4; linhas 783–796.

**Problema:** “a maior parte dos problemas” não é garantida por dois ou três participantes por grupo; “maioria concluiu” pode esconder um erro grave de assinatura ou exposição de informação. A queda de portarias vencidas não prova, sozinha, que os alertas funcionam; e ausência de falha registrada no e-mail não comprova recebimento.

**Correção proposta:** usar rodadas exploratórias por papel, tarefas críticas e cenários de erro. Exigir correção e novo teste de todo problema crítico observado; registrar amostra e limitações sem apresentar validação estatística. SUS pode complementar, mas não substituir observação de tarefa ou prova de conformidade.

Definir fórmula, denominador, janela, origem e responsável de cada métrica. Medir tempo por etapa, mediana e percentis além da média; separar espera externa de edição. Para e-mail, distinguir aceitação pelo provedor, confirmação de entrega quando disponível, devolução e tratamento. Para alertas, medir geração prevista, disponibilização e ação dentro do prazo acordado.

## 4. Revisão das 22 decisões e hipóteses

Esta tabela avalia todas as decisões, inclusive as que não geraram um achado próprio acima. “Pode prototipar” significa simulação identificada, sem transformar hipótese em autorização para produção.

| Decisão | Parecer sobre a hipótese atual | Ajuste recomendado |
| --- | --- | --- |
| D01 | Parcialmente válida | Separar acervo autenticado e divulgação pública externa; “sem dados pessoais” deve especificar campos. Não excluir consultores não servidores sem confirmação. |
| D02 | Exige homologação | Papéis acumuláveis são plausíveis, mas a união não pode ignorar escopos e prazos. Destacar divergência com “acesso total” de DG/Admin. |
| D03 | Não confirmada | Vice nomeado não equivale necessariamente a substituto temporário. Simular a variante, registrar ato de nomeação/substituição e confirmar competência. |
| D04 | Plausível para protótipo | Triagem é uma interpretação; separar ciências/anuências e resolver validações cumulativas. Definir demanda interna e membros fora de DEPE/DAP. |
| D05 | Precisa de correção | Corrigir cálculo de situação, revogação parcial, datas futuras e múltiplas versões; não usar rótulo agregado como única dimensão dos relatórios. |
| D06 | Parcialmente fundamentada | O teto de 10 h para docente está na fonte. Aplicação somente a tipos de colegiado, soma apenas informativa e passos de 0,5 h são hipóteses; precisão não deve ser imposta sem justificativa. |
| D07 | Necessária, não homologada | A tabela é boa para discussão, mas altera leitura literal de RN5 e precisa também resolver RN4 na solicitação. |
| D08 | Não confirmada | Prazo indeterminado, retroatividade com justificativa e dia final incluído não estão definidos. Não habilitar retroatividade operacional por padrão sem decisão do IFC. |
| D09 | Não confirmada | Sequência por ano/emissor pode gerar números iguais no campus. Definir namespace e identificador completo; separar número reservado/anulado de ato cancelado. |
| D10 | Viável com condições | Assinatura externa exige verificação, versão congelada e artefatos distintos; integração futura não deve ser apresentada como ativa. |
| D11 | Inadequada como regra geral | Permitir canal aplicável e múltiplos registros; Boletim é uma modalidade a validar por tipo de ato. |
| D12 | Parcialmente válida | Envio após publicação prioriza a redação explícita de RF5; contato ausente é pendência de cumprimento, não atendimento completo. Definir evento automático/manual. |
| D13 | Boa hipótese de simulação | 60/30/7 dias e canais/destinatários não vêm da fonte. Tratar ausência de presidente e portarias sem término; não enviar mensagens reais com essa hipótese não aprovada. |
| D14 | Plausível, incompleta | Novo ato vinculado preserva histórico, mas nem toda correção é alteração substantiva. Definir retificação/republicação, revogação parcial e efeitos do encerramento. |
| D15 | Boa direção, com dependências | Confirmar nomenclatura, origem por campo, integrações e correção de dados; chefia por referência precisa resolver Reitoria e histórico. |
| D16 | Precisa de correção | Não conferir CPF/contato ao administrador apenas pelo papel técnico. Substituir exclusão/guarda absolutas por política arquivística e de acesso. |
| D17 | Boa hipótese, com divergências | A fonte permite consulta total a DEPE/DAP; restringir relatórios ao departamento é política adicional. Definir contagens históricas por estado em uma data e ano de referência. |
| D18 | Aceitável como proposta técnica | 60 s não é definição de negócio de “tempo real”. Se T03 entrar no lançamento, a decisão deixa de ser simplesmente baixa prioridade. SIPAC permanece futuro. |
| D19 | Válida | Obter a frase completa; “nenhuma regra adicional presumida” é correto. “Nada bloqueia” significa ausência de impacto conhecido, não garantia de ausência de requisito perdido. |
| D20 | Inclusão fundamentada na narrativa | Manter lotação/localização no plano. Campos, autoridades e efeito sobre a base de pessoal ainda precisam de validação; não atualizar SIGRH automaticamente. |
| D21 | Boa medida proposta, redação excessiva | Separar cadastro, documento e divulgação. Homologar identificadores necessários; SIAPE e CPF parcial continuam sendo dados pessoais. |
| D22 | Recomendação válida | DSGov pode ser base, sujeito à Comunicação/TI. Verificar biblioteca e implementação mantidas; não equiparar adoção de biblioteca a acessibilidade automaticamente comprovada. |

### 4.1 Estrutura recomendada para o registro de decisão

Adicionar: fonte/evidência, opções consideradas, hipótese do protótipo, status, quem decide, prazo, telas/contratos/CA afetados, risco de estar errada, limite de uso e decisão final com data.

Dividir “bloqueia” em **desenho**, **implementação** e **entrada em operação**. Por exemplo: um mockup pode mostrar assinatura externa anotada; o uso operacional não pode avançar sem definir o que comprova a assinatura.

## 5. Referências normativas: resultado da conferência

| Referência da v2 | Resultado | Consequência para o plano |
| --- | --- | --- |
| LGPD — Lei nº 13.709/2018 | Referência pertinente e texto oficial consultado | Definir finalidade/acesso e avaliar dados necessários; não presumir máscara, acesso técnico universal ou consentimento como solução genérica. Ver A12. |
| LAI — Lei nº 12.527/2011 | Referência pertinente e texto oficial consultado | Conciliar transparência e proteção; preservar RN1 até decisão expressa de mudança. Ver A04. |
| Lei nº 14.063/2020 e Decreto nº 10.543/2020 | Referências pertinentes e textos oficiais consultados | Definir nível e evidência aplicáveis, distinguindo assinatura de autenticação e de upload. Ver A03. |
| eMAG 3.1 | Versão identificada na página oficial consultada | Manter em conjunto com WCAG, com requisitos e testes mapeados. |
| WCAG 2.2 | Recomendação W3C confirmada | Manter meta AA; protótipo visual não comprova conformidade do produto implementado. |
| Design System gov.br | Portal oficial identificado; conteúdo detalhado não foi extraído pela ferramenta | Manter como recomendação. Esta consulta não comprovou obrigatoriedade específica para este sistema interno, versão de biblioteca ou garantia de conformidade. |
| Manual da marca IF/IFC | Referências oficiais do MEC/IFC localizadas | Conferir manual adotado pela Comunicação; marca e documento oficial não se confundem com os tokens da UI. |
| Decreto nº 12.002/2024 — adicional | Texto oficial consultado | Validar publicação/divulgação e tratamentos de correção de atos normativos, em vez de usar apenas Boletim/PDF. |
| Resolução CONARQ nº 50/2022 — adicional | Texto oficial consultado | Avaliar requisitos de gestão arquivística e responsabilidade pela guarda, temporalidade e destinação. |

O eMAG 3.1 é disponibilizado oficialmente e tem histórico de institucionalização no SISP. Ele não substitui a avaliação dos critérios WCAG: o material oficial de contratação explica que sua cobertura não inclui todos os critérios da WCAG 2.0. Logo, cumprir alguns atalhos não prova nem eMAG completo nem WCAG 2.2 AA. [Modelo de Acessibilidade — Governo Digital](https://www.gov.br/governodigitallogin/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade), [Cartilha oficial de contratação acessível](https://emag.governoeletronico.gov.br/cartilha-contratacao/), [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/).

A acessibilidade do PDF deve ser testada em documento gerado e assinado, incluindo ordem de leitura, cabeçalhos, tabelas e múltiplas páginas. Marcação correta no Figma não garante que a ferramenta de geração preserve esses atributos.

## 6. Outras melhorias no plano completo

### 6.1 Jornadas e cobertura do Figma

As oito jornadas são úteis, mas a expressão “por perfil” não significa cobertura de todos os perfis e finalidades. Acrescentar, como propostas:

- Administrador habilita conta e atribui acesso com escopo correto; servidor entra e recupera senha local/segue orientação institucional.
- CGP cadastra ou corrige servidor com fonte importada indisponível ou divergente.
- Emissor elabora normativa e revogação sem composição de comissão, conforme exceções homologadas.
- CGP elabora lotação/localização e consulta a situação depois da data de efeito.
- Signatário recebe documento final, assina externamente e o operador registra/verifica o retorno.
- Vice atua dentro e fora do intervalo permitido, se essa regra for aprovada.
- Gestor consulta relatório e verifica uma carga horária que muda no período.
- Emissor trata revogação parcial/futura e alteração com inclusão e retirada de membros.
- Operador corrige metadado, erro material ou publicação divergente sem sobrescrever o original.

Cada jornada deve indicar entrada, pré-condições, papel, variante do ato, resultado, retorno por erro e release. Construir uma matriz jornada × tela × estado × RF/RN/RC × hipótese × CA para evitar cobertura apenas aparente.

### 6.2 Ajustes no desenho das telas

- **T05:** explicar campo obrigatório por finalidade e os motivos de envio indisponível. Confirmar se a revisão é obrigatória ou apenas uma ajuda; não bloquear o botão silenciosamente.
- **T08:** “salvo automaticamente” requer contrato de autosave. Mostrar não salvo/salvando/salvo/falha/conflito, sem gravar dados pessoais em armazenamento local por suposição. Barra fixa não pode cobrir campo ou foco.
- **T09/T10:** layout com três painéis precisa de alternativa em notebook e mobile. Documento extenso e fila não podem competir em rolagens que escondam as ações.
- **T12:** incluir vigência indeterminada, efeitos futuros e ações aplicáveis ao tipo; datas fixas de “30 dias” no wireframe devem apontar para H-D13/parâmetro.
- **T19:** separar frame do documento, editor de conteúdo, manutenção de modelo e visualizador. Projetar nome longo, muitos membros, anexos e segunda página.
- **T20:** diferenciar pendência individual, fila compartilhada e alertas informativos. Uma aprovação de departamento não elimina automaticamente todas as demais aprovações da mesma portaria. Definir responsável, resolução e atualização dos contadores.
- **Todos os frames:** dados de demonstração sem origem em pessoas reais; CPF com dígitos verificadores válidos não é garantia de que o número não exista. Preferir máscara/placeholder e fixtures controladas em ambiente isolado quando validação matemática for necessária.

### 6.3 Tipos, finalidades e operações

Preservar os termos da fonte, mas esclarecer o vocabulário: tipo do ato, finalidade e operação sobre outro ato são conceitos diferentes. Uma portaria normativa pode alterar ou revogar outra normativa; “nova” não precisa significar ausência de vínculo anterior.

Definir ainda ementa/assunto, unidade emissora, identificador completo, processo, anexos e fundamento conforme os modelos homologados. Não transportar automaticamente o padrão gráfico de uma publicação antiga para uma regra atual sem a revisão do Gabinete/Comunicação.

Para atos normativos, verificar também retificação e republicação: o Decreto nº 12.002/2024 as distingue nos arts. 73–74. Isso evita modelar qualquer correção como uma nova alteração substantiva. [Decreto nº 12.002/2024, arts. 73–74](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

### 6.4 Horas e participação ao longo do tempo

Separar horas semanais atribuídas de horas efetivamente trabalhadas. A fonte pede atribuição; não fornece apontamento de execução nem fórmula para multiplicar semanas por carga.

Definir interseção entre vigência do ato, intervalo de participação e intervalo do relatório. Uma pessoa com 4 h até junho e 2 h a partir de julho não tem automaticamente 6 h simultâneas. Alteração de departamento e de chefia também deve preservar a interpretação histórica necessária.

Na RN7, testar igualdade a 10 h, valor acima, alteração de carga, precisão decimal homologada e distinção entre soma informativa e teto efetivo. Não cristalizar múltiplos de 0,5 h apenas porque parecem convenientes ao controle.

### 6.5 Privacidade além do CPF

Estudantes podem incluir menores de idade; verificar o público efetivo e o tratamento aplicável, sem coletar dados extras apenas para o protótipo. O art. 14 da LGPD prevê melhor interesse para crianças e adolescentes. Afastamento por saúde também exige atenção à exposição de motivo. [LGPD, arts. 5º, II, e 14](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm).

Incluir canal institucional para correção dos dados e informação sobre o tratamento; a própria tela de cadastro deve permitir entender origem e responsável, sem fingir que todo titular pode editar dados oficiais diretamente.

### 6.6 Planilha e evidência de uso atual

A planilha continua sem conteúdo acessível pela ferramenta nesta revisão. Não foi possível validar suas colunas, fórmulas, contagens ou situações. Sua leitura é uma tarefa de levantamento, não prova automática de que todas as práticas nela registradas sejam regras aprovadas.

Quando houver acesso, produzir uma tabela coluna/prática atual → significado → requisito → regra/hipótese → decisão. Conferir números duplicados, datas, portarias sem prazo, membros externos e termos realmente usados, com dados anonimizados para design.

## 7. Critérios de aceite a corrigir e acrescentar

| Critério existente | Tratamento |
| --- | --- |
| CA01 | Manter autenticação do sistema; distinguir links de divulgação oficial externa. |
| CA03 | Resolver obrigatoriedade de membros por finalidade junto com RN4; não deixar incompatível com CA18/CA29. |
| CA08 | Manter teste do teto expresso; complementar precisão, tipo de atividade e alterações de carga após homologação. |
| CA11 | Definir aprovações cumulativas, edição pelo validador e invalidação de aprovações anteriores. |
| CA12/CA13 | Incluir assinatura externa, habilitação temporal e verificação da versão correta. |
| CA19 | Testar consulta em data de referência, vigência futura e contagem de atos versus versões. |
| CA26 | Harmonizar com a política de omissão/mascaramento por canal; não exigir CPF em e-mail se ele não for necessário. |
| CA28 | Separar afastado, desligado e aposentado; retirar bloqueio genérico sem regra homologada. |
| CA29 | Incluir solicitação de lotação, referências à pessoa e origem/destino conforme contrato homologado. |
| CA30 | Ampliar além de atalhos; verificar critérios aplicáveis e ausência de conflito com tecnologia assistiva. |
| CA31 | Definir quais eventos de acesso são registrados e quem pode consultar os próprios logs. |
| CA32 | Distinguir minuta, documento aprovado para assinatura e documento assinado. |
| CA33 | Distinguir conclusão de tarefa específica e conclusão integral da etapa com várias aprovações. |

**Novos cenários propostos para a próxima versão** — identificadores desta auditoria, ainda não incorporados ao plano:

| ID | Cenário | Resultado a especificar/testar |
| --- | --- | --- |
| CA34 | Ato exige mais de um canal de publicação | Registro incompleto não se torna publicação integralmente concluída. |
| CA35 | Documento final vai para assinatura externa | Sem marca de minuta no arquivo final; interface ainda informa ausência de assinatura. |
| CA36 | PDF anexado tem signatário ou conteúdo incompatível | Assinatura não é concluída automaticamente; pendência de verificação explícita. |
| CA37 | Rascunho tem data final passada | Exibir etapa de produção, sem tratá-lo como ato publicado vencido. |
| CA38 | Portaria recebe revogação parcial ou futura | Efeitos e data preservados; não converter todo o ato em revogado prematuramente. |
| CA39 | Portaria publicada tem início futuro ou término indeterminado | Classificação e relatório distinguem futura, vigente e sem término. |
| CA40 | Ato vigente tem alteração em elaboração | Documento vigente permanece acessível com sua situação; minuta tem etapa própria. |
| CA41 | Servidor afastado/aposentado é indicado | Aplicar regra institucional específica; não inferir impedimento apenas pelo rótulo cadastral. |
| CA42 | Importação falha ou conflita com cadastro atual | Preservar dados e acessos válidos; mostrar divergência e rota autorizada de correção. |
| CA43 | Participante externo não tem contato | Publicação e comunicação têm conclusões separadas; pendência não conta como e-mail enviado. |
| CA44 | Usuário técnico tenta ler dados pessoais sem necessidade autorizada | Não obter acesso apenas por ser administrador; registrar evento conforme política. |
| CA45 | Lotação/chefia ou participação muda no período | Documento anterior e relatório histórico preservam os intervalos corretos. |
| CA46 | Versão pública requer proteção de dado em documento assinado | Original preservado; cópia derivada identificada ou conteúdo definido antes de assinar. |
| CA47 | Operador corrige erro material após publicação | Procedimento homologado, histórico, referências e documento anterior preservados. |
| CA48 | Modelo institucional muda | Atos emitidos continuam com seus arquivos e modelos históricos. |
| CA49 | Duas aprovações departamentais existem na mesma portaria | Resolver uma não remove a outra nem anuncia conclusão integral indevidamente. |

## 8. Ordem recomendada para a próxima revisão

1. Corrigir as inconsistências A01–A08 e A12, principalmente publicação, documento para assinatura, permissões e cálculo de situação.
2. Homologar ou apresentar variantes para aceite, obrigatórios por finalidade, competência do Vice e regras de participação funcional.
3. Harmonizar hipóteses, jornadas, telas, contratos e critérios de aceite. Nenhuma regra deve aparecer como confirmada em uma seção e provisória em outra.
4. Separar protótipo integral do produto e lançamento MVP, com os requisitos adiados e suas dependências explicitamente registrados.
5. Completar jornadas de administração, lotação, normativa, assinatura externa e tratamento de correções.
6. Definir matriz de dados/canais, política documental, sincronização e fórmulas de relatórios/métricas.
7. Criar wireframes com alternativas anotadas; depois validar o fluxo e só então consolidar alta fidelidade e implementação.

## 9. Evidências, fontes e limites

### 9.1 Arquivos analisados

- [Rascunho original de regras de negócio](</C:/Users/User/Downloads/gestor portaria, regras de negocio.txt>).
- [Plano v1](</C:/Users/User/Documents/ChatGPT/Figma portaria/PLANO_INTERFACE_GESTOR_PORTARIAS.md>).
- [Plano v2 recebido](</C:/Users/User/AppData/Roaming/Claude/scratch-workspaces/56d23a17-b26e-4218-ab29-eb92972e9e4a/4d8f078f-3369-4aa2-ab5d-f5ca38f887cc/scratch-2026-10-21-0e9031/PLANO_INTERFACE_GESTOR_PORTARIAS_v2.md>).

A v2 tem 888 linhas na cópia examinada. As referências de linha deste parecer apontam para essa versão. Os arquivos de entrada foram preservados.

**SHA-256 da v2 analisada:** `C5BFE45CCB49FAC35E539CB3764726F65D327A53841BC1BBF955063CA6261405`.

### 9.2 Fontes oficiais complementares

As fontes normativas que fundamentam conclusões estão vinculadas junto aos respectivos achados. Também foram identificados o [portal do Design System gov.br](https://www.gov.br/ds/), a [página do MEC sobre identidade visual da Rede Federal](https://portal.mec.gov.br/bolsa-formacao/sistec/30000-uncategorised/86851-identidade-visual-rede-federal) e o [manual de identidade visual disponibilizado pelo IFC](https://cecom.ifc.edu.br/wp-content/uploads/sites/10/2022/10/Manual-de-Identidade-Visual-do-IFC-ATUALIZADO.pdf). A localização dessas referências não comprova sua adoção específica para este aplicativo nem a existência de biblioteca Figma autorizada no projeto.

### 9.3 Limites da revisão

Não houve acesso à planilha de registro, a políticas internas completas, a contratos de API, a uma interface implementada ou a usuários para homologação. Não foi confirmada a infraestrutura de assinatura, LDAP/SIGRH ou publicação do Campus Videira. Não se afirma que o Boletim seja inadequado: a correção é não tratá-lo como canal suficiente para todos os atos sem classificação.

Esta entrega analisa os dez pontos do pedido, as 17 alterações registradas e todas as decisões D01–D22, com achados adicionais. Não modifica a v2 nem declara o futuro sistema conforme à legislação ou aos padrões de acessibilidade apenas pela existência deste plano.
