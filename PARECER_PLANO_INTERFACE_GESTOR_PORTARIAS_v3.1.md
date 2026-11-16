# Análise crítica da revisão v3.1 — Gestor de Portarias

**Data:** 22/10/2026.  
**Base examinada:** comparação entre os arquivos locais v3 e v3.1, leitura dos trechos alterados em seu contexto e conferência das referências oficiais.  
**SHA-256 da v3.1:** `84CFCD80563C6C3155421FC6A004D5B2A60F24253BE36A443FC08B599231D4ED`.

## 1. Parecer

**A revisão foi aplicada de fato e o avanço para wireframes é justificável.** A tabela ordenada de situações, a separação de divulgação e publicação, as tarefas de comunicação, a política de inativação e os prazos do backlog corrigem problemas identificados na v3.

Não concordo com uma leitura de que “todos os achados foram aceitos” signifique “todas as regras estão validadas”. As correções documentais não homologam o entendimento do IFC, e alguns detalhamentos ainda deixam conflitos. Dois pontos merecem ajuste prioritário: o editor usa “ainda não publicado” como condição de edição livre; e a explicação sobre publicação pode confundir data da publicação com início dos efeitos.

Também é preciso distinguir o resumo da revisão do conteúdo do arquivo: em alguns pontos o arquivo é mais cauteloso que a mensagem apresentada.

**A v3 original foi preservada:** seu hash continua igual ao registrado no parecer anterior. O link do Claude não foi acessível pela ferramenta; a análise usou os arquivos locais encontrados na pasta da sessão.

## 2. O que está efetivamente corrigido

| Alteração | Avaliação |
| --- | --- |
| W01 — Séries de numeração | A distinção contínua/anual está incorporada. Séries concretas, autoridades e compartilhamento entre operadores continuam corretamente sujeitos ao levantamento. |
| W02 — Editor | Árvore, identificadores estáveis e tratamento dos dispositivos do ato alterado melhoraram. A condição de edição livre ainda precisa ser restringida. |
| W03 — Modelo normativo | A separação entre moldura e arquivo e a formatação por natureza foram incorporadas. Não há motivo para repetir o achado genérico de cabeçalho/rodapé como se estivesse intacto. |
| W04 — Situações | A avaliação ordenada resolve as sobreposições apontadas na v3, para dados válidos. A variante de encerramento está explicitada. |
| W05 — Arquiteturas de divulgação | Alternativas A/B preservam RN1; C declara necessidade de mudança formal. O conflito arquitetural anterior foi tratado. |
| W06 — Natureza dos canais | Publicação oficial, divulgação obrigatória e réplica estão separadas. Falta especificar melhor a referência temporal quando houver vários canais oficiais. |
| W07 — Comunicação como tarefa | Corrigido: dispensar o aviso não conclui a pendência. O tratamento alternativo à comunicação por e-mail ainda requer ressalva de requisito. |
| W08 — Inativação | Corrigido: a UI deixa de prometer exclusão arbitrária ou guarda eterna de todo campo. |
| W09 — Retificação | Corrigido: lapso manifesto é a regra descrita, erro material é modalidade específica, e o fluxo depende de D14. |
| W10 — Backlog e participantes | Os marcos foram antecipados para dependências do L1 e Administração entrou na amostra do teste. |
| W11 — SIG/SIPAC | Corrigido: o plano deixou de presumir que a existência do portal obriga uma integração disponível. |
| W12 — CA45–CA49 e critérios revistos | Estão presentes e conectados aos temas corrigidos. A existência de critérios continua diferente de sua execução em um sistema. |

## 3. Pontos que ainda exigem ajuste

### 3.1 Publicação, vigência e efeitos não podem ser igualados — prioridade alta

**Onde:** mensagem de resumo; §7.6, linhas 621 e 640; modelo de vigência em §5.2.

A mensagem afirma que “a data de efeitos é a do canal oficial”. Isso é uma simplificação incorreta. O art. 18 do Decreto nº 12.002/2024 admite entrada em vigor na publicação, em data expressa ou após determinado prazo. [Decreto nº 12.002/2024, art. 18](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

O arquivo fala em “data de publicação usada para efeitos”, redação menos absoluta, mas ainda ambígua. A própria tabela admite mais de um canal oficial e depois se refere ao canal no singular.

**Correção recomendada:** distinguir, quando aplicável:

- data de assinatura;
- data de publicação em cada canal;
- publicação de referência para a cláusula temporal, com regra homologada;
- início de vigência;
- início de efeitos específicos, se diferente da vigência;
- data de registro da evidência no Gestor.

Não exigir preenchimento manual repetido se o dado puder ser derivado, mas registrar a regra da derivação. Uma réplica posterior não muda essas datas. Para vários canais oficiais, D11 deve especificar qual evento conta para cada finalidade, sem assumir universalmente primeira ou última publicação.

**Exemplo de aceite:** publicação oficial em 22/10 e cláusula de início em 01/11. A portaria está publicada em 22/10, mas a situação até 31/10 continua “Vigência futura”.

### 3.2 “Ainda não publicado” não basta para permitir editar e renumerar — prioridade alta

**Onde:** §7.3, linha 569, confrontada com §7.5 e CA35.

A tabela define “Minuta nova” como “Ato ainda não publicado”, com edição e renumeração livres. Isso inclui, pela leitura literal, uma versão aprovada e congelada, um documento em assinatura e um documento já assinado aguardando publicação. As outras seções corretamente os protegem contra edição.

**Correção recomendada:** substituir a condição por “minuta editável, ainda não congelada para assinatura”. Uma mudança em versão aprovada deve gerar nova minuta, nova identificação de versão e as invalidações previstas. Documento assinado permanece preservado.

Separar também duas numerações ao elaborar um ato alterador:

1. Os dispositivos do **novo ato alterador**, por exemplo seus próprios arts. 1º e 2º.
2. Os dispositivos do **ato atingido**, como o art. 5º-A que será acrescido e cujas referências precisam ser preservadas.

As restrições sobre o texto atingido não devem congelar indevidamente a organização da minuta do ato alterador. E a renumeração da minuta não deve reescrever a numeração do texto atingido.

**Exemplos de aceite:** abrir versão assinada ainda não publicada não oferece edição direta; rearranjar a minuta do ato alterador não renumera os artigos do ato original.

### 3.3 D09 ainda contém hipóteses institucionais que o resumo apresenta como decididas

**Onde:** resumo apresentado; D09, linha 918; Etapa 0.

A distinção entre série contínua e série anual tem fundamento no art. 22. A composição das séries do campus e o agrupamento dos operadores precisam de confirmação. [Decreto nº 12.002/2024, art. 22](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/d12002.htm).

O arquivo trata “duas séries por autoridade” e “Gabinete e CGP são operadores da mesma série” como hipótese e exige levantamento. Isso é aceitável para protótipo. A mensagem “usam a mesma série” soa como decisão concluída e deve preservar a ressalva.

Também não se deve usar apenas a opção de interface “designação” para determinar natureza de pessoal, série e canal. O enquadramento material e a autoridade responsável precisam constar do levantamento. Não é necessário inventar uma classificação jurídica completa durante o wireframe.

**Ajuste recomendado:** no resumo, escrever “a hipótese usa séries compartilhadas pelos operadores, sujeitas à confirmação do acervo e da autoridade”. Na implementação, não fixar duas séries no código antes dessa decisão.

### 3.4 T19 ainda precisa aplicar os campos condicionais da lotação

**Onde:** §7.10, linha 713, versus D07/D20 e CA29.

A linha genérica “Portaria de pessoal (designação, lotação)” inclui tabela de membros com função e carga semanal. D20 propõe lotação sem carga nem presidência. Se esse conteúdo for tratado como um único modelo fixo, a inconsistência reaparece no documento gerado mesmo que o formulário esteja correto.

**Ajuste recomendado:** distinguir elementos comuns do modelo e blocos condicionais por finalidade. A prévia e o PDF devem consumir a mesma definição homologada de campos da elaboração. A lotação deve mostrar pessoa, origem/destino e efeito conforme D20, sem produzir tabela de comissão ou campos de horas por herança do modelo.

Isso é um ajuste de consistência entre tela e documento; não exige ampliar o escopo funcional.

### 3.5 Outra forma de comunicação não equivale automaticamente ao cumprimento literal de RF5

**Onde:** §7.6, linha 649; §7.12, linha 736; CA49.

O rascunho pede envio de e-mail aos membros, com documento anexo. A v3.1 permite concluir a tarefa por outra forma de comunicação homologada. Essa alternativa pode ser institucionalmente adequada, mas não deve ser contabilizada como se um e-mail tivesse sido enviado.

**Ajuste recomendado:** distinguir “E-mail enviado”, “Comunicação alternativa registrada” e “Exceção autorizada ao requisito”. Se a alternativa for substituir a obrigação de e-mail, registrar a alteração formal de RF5, seu responsável e alcance. Homologar um procedimento não deve esconder uma mudança de requisito.

O arquivo já afirma corretamente que membro sem contato não conta como e-mail enviado. A mesma distinção precisa permanecer no encerramento da tarefa e nos relatórios de cumprimento.

## 4. Duas ressalvas sobre a fundamentação e a forma de revisar

### 4.1 O decreto é referência específica; a LC nº 95 não trata apenas de leis

É pertinente usar o decreto para detalhar o regime federal. Contudo, o art. 1º, parágrafo único, da LC nº 95 prevê aplicação, no que couber, a decretos e outros atos de regulamentação do Executivo. A comparação não deve sugerir que ela seja irrelevante para atos infralegais. [LC nº 95/1998, art. 1º](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm).

O arquivo é mais adequado que a explicação resumida nesse ponto: mantém a LC como base geral e o decreto como detalhamento. Não há necessidade de trocar novamente a fundamentação já organizada dessa forma.

### 4.2 Determinismo não é prova suficiente de correção do negócio

A tabela ordenada resolve a ambiguidade computacional anterior. Não é preciso reabrir esse achado como se a ordem não tivesse sido implementada. Entretanto, escolher sempre a primeira linha não comprova que a relação entre encerramento e cessação dos efeitos seja a institucionalmente correta. A v3.1 acerta ao manter D14 e sua variante explícitas.

Como refinamento do recorte histórico, separar eventos **já eficazes** que definem a situação de eventos **futuros conhecidos** que geram marcadores de agendamento. A frase de §6.1 que considera apenas efeito até R não deve eliminar uma revogação agendada que a interface precisa mostrar. Registrar a diferença entre data de conhecimento/registro e data de efeito evita esse problema sem impor um projeto completo de banco temporal ao protótipo.

## 5. Recomendações para avançar

**O plano já está em condições de orientar wireframes com hipóteses anotadas.** Os ajustes acima podem acompanhar essa etapa; não justificam iniciar uma auditoria completa novamente nem redesenhar a estrutura inteira.

Sugiro tratar em paralelo:

1. Corrigir a condição de edição da minuta e a separação das datas na especificação.
2. Propagar obrigatoriedade/dispensa de campos aos modelos documentais, incluindo lotação.
3. Manter séries e autoridade como hipóteses até a resposta da Etapa 0.
4. Definir a forma de registrar comunicação alternativa sem falsificar atendimento literal de RF5.
5. Levar as variantes D07, D11, D14 e as regras de acesso à validação com o IFC.

O próximo ganho de qualidade virá sobretudo de evidência institucional e teste das jornadas. Concordância entre revisores e novas marcações no Markdown não substituem o acervo, a TI, o Gabinete, a CGP e os usuários reais.

## 6. Evidência e limites

Foi confirmada a presença de W01–W12, dos critérios novos CA45–CA49 e das revisões nos critérios anteriores. A comparação entre arquivos é uma revisão documental; não demonstra que o sistema executa essas regras.

- [V3.1 examinada](</C:/Users/User/AppData/Roaming/Claude/scratch-workspaces/56d23a17-b26e-4218-ab29-eb92972e9e4a/4d8f078f-3369-4aa2-ab5d-f5ca38f887cc/scratch-2026-10-21-0e9031/PLANO_INTERFACE_GESTOR_PORTARIAS_v3.1.md>).
- [Parecer anterior sobre a v3](</C:/Users/User/Documents/ChatGPT/Figma portaria/PARECER_PLANO_INTERFACE_GESTOR_PORTARIAS_v3.md>).

O hash da v3 original permanece `25B1F690E570783D2C4B7F836C95F54074169A909B73AA7C6130B4D3816C9144`. Os arquivos de entrada foram preservados. Fontes oficiais consultadas em 22/10/2026; aplicabilidade e decisões institucionais continuam sujeitas à validação dos responsáveis.
