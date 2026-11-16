# Parecer sobre a v3 do plano do Gestor de Portarias

**Data:** 22/10/2026  
**Documento examinado:** `PLANO_INTERFACE_GESTOR_PORTARIAS_v3.md`, 1.029 linhas.  
**SHA-256:** `25B1F690E570783D2C4B7F836C95F54074169A909B73AA7C6130B4D3816C9144`.

## 1. Conclusão

**A v3 incorpora mudanças reais e resolve boa parte da auditoria da v2. O resumo apresentado é substancialmente fiel ao arquivo.** Não seria correto repetir os achados da v2 como se nenhuma correção tivesse sido feita.

Recomendo usar a v3 como base para levantamento e wireframes, com variantes anotadas. Ainda não a considero uma especificação inteiramente consistente para implementação: permanecem lacunas localizadas, algumas introduzidas pelo detalhamento dos atos normativos. Também há itens apenas transferidos para backlog, o que não equivale a resolvê-los.

O link `claude.ai/epitaxy/...` não pôde ser lido pela ferramenta, mas localizei e li o arquivo completo na pasta local da sessão. As conclusões abaixo se referem ao conteúdo desse arquivo, não apenas à mensagem de resumo. Preservei a v3 e a auditoria anterior.

## 2. Conferência das afirmações do resumo

| Afirmação | Conferência no arquivo | Parecer |
| --- | --- | --- |
| Publicação por canal e “Publicação parcial” | §7.6, D11 e CA34 existem | Correção real; falta distinguir publicação oficial, divulgação e réplica e completar a classificação por natureza do ato. |
| Três documentos e verificação do PDF | §7.5/§7.10 e CA32/CA35/CA36 existem | Correção adequada para o nível de planejamento; método concreto segue pendente em D10. |
| Dois níveis de situação em data de referência | §6.1 foi reescrita; CA37–CA39 existem | Melhoria real; as condições ainda permitem mais de um resultado para o mesmo ato. |
| Afastamento gera revisão, sem bloqueio automático | §5.3, §7.11, D24 e CA28 tratam disso | Correção adequada do bloqueio genérico. Exceções de elegibilidade continuam a homologar. |
| Obrigatórios literais versus por finalidade | §5.1/§5.2, D07 e CA03/CA29 apresentam variantes | A contradição anterior foi reconhecida e convertida em decisão explícita, não homologada. |
| Hipóteses e divergências identificadas | §3.2 e §12 distinguem situações | Melhorou a rastreabilidade. A matriz completa de dados e os limites de uso ainda estão no backlog. |
| Produto completo versus L1/L2/L3 | §2.3 e jornadas/CA têm lançamento | Correção válida. Há dependências de dados do L1 indevidamente postergadas para o relatório do L2. |
| Privacidade, sincronização, métricas e testes incorporados | Há alterações substantivas e §17 com B01–B13 | Parcialmente resolvido. Fórmulas de métricas, matriz de dados e política arquivística ainda não estão especificadas. |

### 2.1 Os três pontos apresentados como novos

- **SIG/SIPAC:** D23 e Etapa 0 são acréscimos úteis. A auditoria anterior já apontava o portal público do SIG como indício; a v3 tornou essa investigação uma decisão e uma atividade explícitas. Isso ainda não comprova que o Campus Videira tenha módulo de assinatura, integração disponível ou o mesmo fluxo da Reitoria.
- **Texto compilado/endereço permanente:** o detalhamento funcional é novo e útil. Deve haver definição de fonte oficial, responsável pela revisão, efeitos temporais e papel do sistema autenticado em relação à divulgação externa.
- **Editor de dispositivos:** o detalhamento é novo e pertinente. Contudo, a hierarquia linear e a renumeração automática descritas precisam de correção; o formato e a numeração do ato também exigem diferenciação entre naturezas.

## 3. Situação dos achados A01–A15 da auditoria anterior

“Resolvido no plano” significa que a redação corrige o problema anterior; não significa implementação, teste ou homologação institucional concluídos.

| Achado anterior | Resultado na v3 |
| --- | --- |
| A01 — Boletim como canal universal | **Substancialmente corrigido.** Complementar as distinções de canal e efeito descritas em V3-05/V3-06 abaixo. |
| A02 — Minuta versus PDF para assinatura | **Resolvido no plano.** Os três artefatos estão diferenciados. |
| A03 — Upload não comprova assinatura | **Resolvido como requisito.** D10 continua a definir o mecanismo e a evidência. |
| A04 — LAI não altera RN1 | **Resolvido na redação principal.** §10 preserva RN1; resta harmonizar a alternativa de divulgação do §7.7. |
| A05 — Classificação das situações | **Parcialmente corrigido.** Revogação parcial e minuta passada foram tratadas; exclusividade e recorte histórico continuam incompletos. |
| A06 — Hipóteses de permissões | **Corrigido como identificação de divergências.** A escolha final e a política de dados permanecem pendentes, como devem. |
| A07 — Bloqueio de afastados/aposentados | **Resolvido no plano.** D24 concentra a regra institucional de elegibilidade. |
| A08 — Obrigatórios inconsistentes por etapa | **Resolvido como modelagem de variantes.** D07 ainda exige decisão formal para a variante que diverge da fonte. |
| A09 — Aceites diferentes tratados como configuração simples | **Resolvido no plano.** Tipos e impactos estão separados, inclusive demanda interna. |
| A10 — MVP sem dependências mínimas | **Melhorou substancialmente.** L1 inclui administração e tratamento de atos vigentes; complementar os prazos dos itens de backlog. |
| A11 — Contato ausente e disparo indefinido | **Corrigido no fluxo principal.** Comunicação pendente não conclui RF5 e o primeiro disparo é automático; T20 ainda contradiz esse tratamento. |
| A12 — Privacidade/retenção absolutas | **Parcialmente corrigido.** §10 melhorou, mas uma proibição absoluta de exclusão permanece e as políticas detalhadas foram adiadas. |
| A13 — Modelo versus documento/configuração | **Resolvido conceitualmente.** Ainda faltam aprovação institucional das permissões e modelo adequado à natureza normativa. |
| A14 — Fonte cadastral e autenticação confundidas | **Substancialmente corrigido.** Contratos estão separados; detalhamento técnico depende de levantamento. |
| A15 — Usabilidade/métricas exageradas | **Usabilidade corrigida. Métricas parcialmente corrigidas:** suas fórmulas e fontes continuam no backlog. |

## 4. Correções residuais e achados novos

### V3-01 — D09 ainda propõe sequência anual para todos os atos — alta

**Onde:** §5.2, D09, linhas 335 e 840.

O identificador completo melhorou a distinção dos emissores, mas D09 mantém sequência por ano sem diferenciar a natureza. O art. 22 do Decreto nº 12.002/2024 prevê continuidade para normativas e série distinta, reiniciada anualmente, para portarias/resoluções de pessoal. [Texto oficial, art. 22](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

**Ajuste de projeto:** D09 deve definir séries por natureza e autoridade competente, consultando o acervo oficial. Gabinete e CGP são operadores emissores na fonte; não se deve presumir que constituam necessariamente duas séries normativas independentes. O identificador de lista também deve ser distinguido da epígrafe oficial do documento.

**Teste adicional:** normativa emitida em dezembro seguida de normativa em janeiro; ato de pessoal nos mesmos meses; dois operadores reservando números na mesma série.

### V3-02 — Editor precisa de árvores válidas e modos de numeração — alta

**Onde:** §7.3, linhas 520–523.

A sequência “artigo → parágrafo → inciso” não é obrigatória: artigo também admite incisos diretamente. Além disso, renumerar ao mover não pode ser comportamento universal em alterações de atos existentes. Há restrições específicas para preservar identificadores de dispositivos. [Lei Complementar nº 95/1998, arts. 10 e 12](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm).

**Ajuste de projeto:** separar edição de minuta nova de alteração de ato publicado. Manter identificador estável do dispositivo, permitir ramificações válidas e impedir reorganização que altere referências indevidamente. No modo de alteração, aplicar regras de acréscimo, supressão e nova redação; não preencher lacunas como se fossem simples números faltantes.

**Testes adicionais:** artigo com incisos sem parágrafos; inserção entre dispositivos existentes; dispositivo revogado cujo número não pode ser reaproveitado; manutenção das referências internas após mudança de minuta.

### V3-03 — O modelo institucional genérico não basta para normativa — alta

**Onde:** §7.10, linhas 636–642; contraste com a abrangência normativa de §7.3.

A v3 ainda leva cabeçalho e rodapé ao conjunto genérico de elementos de T19. O decreto traz formatação e vedações específicas para normativas, inclusive cabeçalho/rodapé no texto. [Decreto nº 12.002/2024, art. 12](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

**Ajuste de projeto:** criar matriz de modelos por natureza, com estrutura e formatação homologadas. Separar a moldura do visualizador da composição do arquivo oficial. Um logotipo no aplicativo não implica sua repetição na mesma posição no texto normativo.

Também diferenciar modelo de edição, arquivo para assinatura e representação publicada pelo canal externo. Exemplares antigos continuam sendo evidência de prática, não regra suficiente para qualquer formato novo.

### V3-04 — As situações do nível 2 ainda se sobrepõem — alta

**Onde:** §6.1, linhas 402–419; CA39.

Exemplos reproduzíveis a partir das condições escritas:

| Dados do ato na data de referência | Condições que podem ser atendidas simultaneamente |
| --- | --- |
| Publicado; início no mês seguinte; sem término | “Vigência futura” e “Vigente — sem término”, pois a segunda não exige início já alcançado. |
| Publicado; dentro do período; encerramento registrado | “Vigente” e “Encerrada”, pois vigente não exclui encerramento nem define seu efeito. |
| Publicado; término passado; sem encerramento; revogação total eficaz | “Vencida — sem encerramento” e “Revogada”, pois vencida não exclui revogação eficaz. |
| Publicado hoje; consulta com referência ao mês passado | Falta regra explícita para excluir o ato não publicado naquela data e reconstruir os eventos conhecidos/aplicáveis. |

**Ajuste de projeto:** aprovar uma tabela de decisão com condições mutuamente exclusivas ou prioridade explícita e justificada. Em todas as condições, usar publicação e eventos na data de referência. Só classificar “sem término” como vigente após o início. A relação entre encerramento administrativo e efeitos deve continuar sendo decisão institucional; não resolvê-la apenas escolhendo a primeira condição encontrada.

Acrescentar testes de combinações, e não somente um caso isolado para cada rótulo. O caso de vigência futura sem término deveria integrar CA39.

### V3-05 — Divulgação do texto compilado ainda precisa caber na fronteira de RN1 — alta

**Onde:** §7.7, linha 602; §10, linha 792; L2 e CA43.

§10 estabelece corretamente que o sistema de gestão exige login e não é o canal público. §7.7 ainda admite decidir se ele será o local de divulgação exigido. São alternativas de arquitetura incompatíveis sem revisão explícita de RN1.

O art. 69 prevê HTML, endereço permanente e registro das alterações, com prazos de divulgação. Não determina que o novo aplicativo seja o portal, nem exige um motor automático de compilação. [Decreto nº 12.002/2024, art. 69](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

**Ajuste de projeto:** D11 deve escolher explicitamente entre:

- gestão autenticada com URL oficial externa e cópia interna identificada;
- integração/exportação para um portal institucional existente;
- ampliação formal do produto com divulgação pública, mediante mudança de RN1 e definição de responsabilidades.

Para a compilação, indicar responsável por revisar, data de atualização, data de efeitos de cada mudança e vínculo ao original. CA43 não deve simplesmente substituir redação corrente por alteração cujo efeito só começará no futuro.

### V3-06 — “Publicação parcial” pode misturar obrigações diferentes — média

**Onde:** §7.6, linhas 577–589; CA34.

O registro de vários canais é uma boa correção. Falta definir se cada canal representa publicação oficial, divulgação complementar ou réplica institucional. Se uma publicação já ocorreu no canal constitutivo aplicável, uma cópia ainda não registrada não deve alterar silenciosamente a data de efeitos para o sistema.

**Ajuste de projeto:** registrar natureza da obrigação, evidência, prazo e responsável por canal. Separar conclusão do checklist operacional de publicação juridicamente relevante e de divulgação pendente. Definir qual evento aciona RF5 conforme D12, sem pressupor que toda réplica tenha o mesmo papel.

A regra “revogação segue o canal do ato revogado, no mínimo” é uma proposta de trabalho, não conclusão demonstrada. A finalidade selecionada na interface também não substitui a classificação material do ato. Exceções devem ter decisão rastreável em D11.

### V3-07 — T20 torna informativa uma pendência obrigatória de comunicação — média

**Onde:** §7.6, linha 589; §7.12, linha 658; CA40.

A falta de contato aparece corretamente como pendência do emissor. Entretanto, T20 agrupa falhas de e-mail em “Alertas informativos”, com ação sugerida “sem obrigar”. Essa formulação permite abandonar uma falha que ainda impede cumprimento de RF5.

**Ajuste de projeto:** criar tarefa de tratar a comunicação, com responsável e situação, e opcionalmente um aviso associado. O aviso pode ser descartado/lido; a tarefa não se conclui por esse descarte. Definir também quando a falha é transitória, definitiva ou depende de correção de contato.

### V3-08 — Ainda existe uma regra absoluta de exclusão contraditória — média

**Onde:** §5.3, linha 384, versus §6.4, linha 492, e §10, linha 797.

“Nenhum cadastro com participação registrada é excluído” é absoluto; as demais seções submetem a destinação à política arquivística. Pode significar apenas impedir exclusão casual que rompa referências, mas isso não está claro.

**Ajuste de projeto:** proibir na UI a exclusão que destrua vínculos e histórico, e distinguir inativação de cadastro, eliminação autorizada e preservação documental. A regra final deve remeter à política aplicável, sem prometer apagar tudo nem guardar eternamente qualquer campo cadastral.

### V3-09 — A descrição da retificação foi estreitada antes de D14 — média

**Onde:** §6.3, linha 480; §7.8, linha 612; D14 e CA44.

O plano limita toda retificação a erro material sem impacto na substância. O art. 74 prevê retificação de lapso manifesto e trata a correção material como hipótese específica. [Decreto nº 12.002/2024, art. 74](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

**Ajuste de projeto:** descrever o caso material de CA44 como uma modalidade, sem afirmar que esgota todo procedimento. D14 deve definir critérios, autoridade, necessidade de assinatura/anuência e distinção de republicação e alteração substantiva. Não enviar automaticamente toda correção pelo fluxo integral de uma nova portaria, caso o procedimento homologado seja diferente.

### V3-10 — Parte do backlog precisa de prazo anterior ao L1 — média

**Onde:** §17, B04/B05/B06/B08/B11, e §13.3.

O backlog é útil, mas alguns itens já condicionam o L1:

| Item | Ajuste recomendado no prazo |
| --- | --- |
| B01/B02 — Evidência/limites das decisões e bloqueios por etapa | Etapa 1; essencial para decisões de maior impacto, independentemente do volume. |
| B03 — Matriz de cobertura | Antes do handoff, como previsto; manter. |
| B04 — Dados por finalidade/perfil/canal | Definir os campos exibidos antes de congelar alta fidelidade; implementação completa da política antes da operação. |
| B05 — Jornadas adicionais | Recuperação de acesso e tratamento de exceções críticas do L1 não dependem de o teste exploratório descobrir sua ausência. |
| B06 — Horas no tempo | Regra mínima antes de implementar mudança de membro/carga no L1; não apenas antes do relatório RC9 do L2. |
| B07 — Fórmulas de métricas | Antes da implantação, como previsto, incluindo eventos que precisam ser coletados desde o início. |
| B08 — Testes adiados | Relacionar cada teste ao recurso afetado e exigir antes de sua entrada em operação. |
| B09 — Acessibilidade | Definir critérios no design e verificar também a implementação; não encerrar na Etapa 4. |
| B10 — Estudantes menores | Com D16 e antes do tratamento operacional correspondente. |
| B11 — Política documental | Definir captura, preservação e responsabilidades mínimas antes da geração/guarda operacional do L1. |
| B12 — Planilha | Etapa 0, como previsto; separar prática atual de regra homologada. |
| B13 — PDF | Implementação de T19 e verificação antes da emissão operacional; manter. |

No teste de usabilidade, incluir o papel de Administrador quando J09 for exercitada. A amostra descrita só enumera Gabinete/CGP, diretores e servidores; estes não representam automaticamente quem administra contas, escopos e signatários.

## 5. Avaliação de D23 e da hipótese de integração

D23 é uma boa prioridade de levantamento. A [página oficial do IFC](https://ifc.edu.br/portarias/) comprova uma orientação de consulta às portarias da Reitoria no SIG. Não comprova, por si só, cobertura de elaboração, assinatura ou APIs do campus.

Substituir em §0.1/§2.2 o imperativo de integrar caso o módulo exista por uma decisão informada sobre capacidades e acesso real. O levantamento deve devolver:

- quais etapas o sistema existente cobre e quais são usadas por Videira;
- quem é autoridade dos dados/documentos e identificadores;
- se há API ou somente consulta/referência;
- como funcionam autoria, assinatura, publicação e permissões;
- qual alternativa será adotada: integração, referência externa, operação manual assistida ou desenvolvimento complementar.

Isso pode antecipar uma integração ou evitar duplicação, mas a escolha não está aprovada apenas pela existência de um portal público.

## 6. Próximo passo recomendado

Não recomendo reiniciar o planejamento nem repetir a auditoria da v2. A próxima revisão pode ser localizada:

1. Ajustar D09 e o editor/modelo normativo.
2. Tornar determinística a tabela de situação, incluindo recorte histórico.
3. Fechar as alternativas entre gestão autenticada e divulgação externa.
4. Diferenciar publicação, divulgação e conclusão operacional.
5. Harmonizar tarefas de comunicação, destinação e modalidades de correção.
6. Vincular o backlog aos marcos reais do L1 e incluir Administração no teste.

Após esses ajustes, a v3 é uma base adequada para avançar nos wireframes e validar as decisões institucionais. A passagem para implementação continua condicionada às decisões de negócio, contratos e permissões do recurso afetado.

## 7. Evidências e limites

- [V3 efetivamente examinada](</C:/Users/User/AppData/Roaming/Claude/scratch-workspaces/56d23a17-b26e-4218-ab29-eb92972e9e4a/4d8f078f-3369-4aa2-ab5d-f5ca38f887cc/scratch-2026-10-21-0e9031/PLANO_INTERFACE_GESTOR_PORTARIAS_v3.md>).
- [Auditoria anterior, referente à v2](</C:/Users/User/Documents/ChatGPT/Figma portaria/AUDITORIA_PLANO_INTERFACE_GESTOR_PORTARIAS_v2.md>).
- Regras de negócio e v1 permanecem como referências do histórico desta análise.

As fontes oficiais vinculadas foram consultadas em 22/10/2026. As sínteses normativas apontam aspectos a incorporar e homologar; não constituem aprovação da aplicabilidade de cada procedimento a um ato concreto.

Não foram homologadas decisões com o IFC, testadas APIs ou executada uma aplicação. A planilha continua sem conteúdo verificado. Os exemplos de classificação são análise das condições escritas no documento, não resultados de testes de software.

Este parecer reconhece as correções existentes, distingue resolução de adiamento e registra dez achados residuais ou novos. Não altera o arquivo da v3 e não cria um projeto Figma.
