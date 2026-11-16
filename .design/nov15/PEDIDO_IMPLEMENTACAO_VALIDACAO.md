# PROMPT — IMPLEMENTAÇÃO E VALIDAÇÃO VISUAL NO FIGMA

Você deverá implementar um conjunto completo de melhorias no projeto **Gestor de Portarias do IFC Videira**, trabalhando diretamente no Figma e utilizando a interface atual como referência.

**Sua tarefa não é apenas elaborar um plano ou sugerir melhorias. Você deve executar as alterações, testar a navegação, capturar snapshots das telas e validar visualmente o resultado antes de concluir.**

## 1. Regras obrigatórias de implementação

1. Inspecione todas as telas, componentes, fluxos e interações existentes antes de modificar qualquer elemento.
2. Preserve a identidade visual atual do projeto, incluindo tipografia, cores, componentes e padrões de design.
3. Não remova funcionalidades existentes, exceto os elementos cuja remoção foi solicitada expressamente.
4. Reutilize os componentes existentes sempre que possível.
5. Mantenha consistência visual entre os quatro níveis de acesso.
6. Não implemente apenas elementos decorativos. Botões, filtros, menus, abas e outras interações devem possuir comportamentos funcionais no protótipo.
7. Como o projeto ainda está em fase de interface no Figma, utilize dados simulados coerentes e identificados como demonstrativos. Não apresente dados fictícios como informações reais.
8. Não altere desnecessariamente telas ou funcionalidades que estejam fora do escopo.
9. Não considere uma implementação concluída sem realizar sua validação visual e funcional.

## 2. Ampliação completa de Estatísticas e Relatórios

Reestruture o módulo de estatísticas para oferecer uma visão administrativa abrangente de todas as portarias.

### Indicadores obrigatórios

Inclua, no mínimo:

- Total de servidores cadastrados.
- Servidores ativos e inativos.
- Total de projetos de portaria criados.
- Projetos realizados e não realizados.
- Portarias em elaboração.
- Portarias enviadas para análise.
- Portarias aguardando validação.
- Portarias aguardando aprovação.
- Portarias aprovadas.
- Portarias rejeitadas.
- Portarias devolvidas para correção.
- Portarias que precisaram de edição.
- Portarias que não precisaram de edição.
- Quantidade de revisões por portaria.
- Portarias concluídas.
- Portarias encerradas.
- Portarias canceladas.
- Portarias que apresentaram problemas.
- Portarias com pendências.
- Pendências por servidor, setor ou órgão responsável.
- Tempo médio de tramitação.
- Tempo médio por etapa.
- Processos com maior tempo de espera.
- Percentual de conclusão.
- Percentual de retrabalho.
- Taxa de aprovação.
- Evolução temporal da quantidade de portarias.
- Comparativos de produtividade por período.
- Quantidade de portarias por tipo e setor.
- Distribuição dos motivos de rejeição, devolução ou atraso.

Os indicadores devem ter definições consistentes, evitando dupla contagem entre situações diferentes. Diferencie o estado atual de uma portaria dos eventos ocorridos em seu histórico.

### Gráficos obrigatórios

Implemente diferentes modelos de visualização, selecionando cada tipo conforme a informação apresentada:

- Gráficos de barras verticais.
- Gráficos de barras horizontais.
- Gráficos de pizza.
- Gráficos de rosca.
- Gráficos de linhas.
- Gráficos de área.
- Gráficos de barras empilhadas.
- Gráficos comparativos por período.
- Indicadores percentuais de progresso.
- Cartões com KPIs e tendências.

Permita filtrar por período, setor, servidor, tipo de portaria e estado do processo.

Desenvolva um dashboard organizado, com hierarquia visual clara, gráficos legíveis e métricas relevantes, evitando excesso de informações em uma única tela.

## 3. Reformulação da página inicial e do login

Analise a tela atual de autenticação e implemente as seguintes alterações:

1. Remova a seção "Escolher outro tipo de acesso".
2. Remova as indicações de nível 1, 2, 3 e 4 da apresentação principal do login.
3. Remova a identificação "Nível 3 — Operação" da tela inicial.
4. Faça com que a identificação do perfil e do nível de acesso apareça apenas depois do login.

### Acesso de demonstração

Crie uma área visual discreta e organizada para demonstração dos quatro perfis do sistema.

Essa área deverá oferecer quatro usuários demonstrativos, cada um com credenciais próprias e acesso ao respectivo perfil.

A seleção deve permitir visualizar o usuário e suas credenciais de demonstração, facilitando a apresentação dos diferentes níveis.

Os nomes dos níveis e suas permissões devem seguir o que já está definido no projeto. Não invente regras de autorização.

Mantenha a experiência principal de autenticação limpa e profissional. Não exponha credenciais reais.

## 4. Central de notificações e acompanhamento de portarias

Crie ou reformule a seção de notificações do menu lateral.

A central deverá permitir que cada usuário acompanhe seus processos de portaria com clareza.

### Informações necessárias

- Estado atual da portaria.
- Etapa em que o processo se encontra.
- Percentual de progresso, quando houver uma forma válida de calculá-lo.
- Responsável pela etapa atual.
- Setor ou órgão responsável pela pendência.
- Motivo da paralisação ou espera.
- Ações que precisam ser realizadas.
- Data da última movimentação.
- Histórico das alterações.
- Etapas concluídas.
- Próximas etapas previstas.
- Notificações sobre solicitações de correção.
- Notificações sobre aprovações, rejeições e conclusões.

### Linha do tempo do processo

Desenvolva uma visualização que permita acompanhar o ciclo completo da portaria:

**Solicitação → Elaboração → Revisão → Validação → Aprovação → Conclusão**

Adapte essa sequência ao fluxo real já definido no Figma. Considere devoluções, correções e etapas opcionais.

O usuário deve compreender facilmente o que já aconteceu, o que está acontecendo e o que falta para concluir sua solicitação.

## 5. Relatórios semanais e exportação em PDF

Reestruture o módulo de relatórios para permitir:

- Selecionar períodos de análise.
- Visualizar relatórios semanais.
- Consultar relatórios mensais e por intervalos personalizados.
- Aplicar filtros.
- Gerar comparativos.
- Visualizar gráficos e indicadores.
- Consultar informações detalhadas das portarias.
- Exportar relatórios completos em PDF.

### Estrutura do relatório PDF

O modelo deve apresentar:

1. Identificação institucional.
2. Título e período do relatório.
3. Resumo executivo.
4. Indicadores gerais.
5. Gráficos estatísticos.
6. Distribuição das portarias por situação.
7. Desempenho dos processos.
8. Pendências e gargalos.
9. Indicadores de retrabalho.
10. Evolução dos processos.
11. Comparação com períodos anteriores.
12. Detalhamento dos dados relevantes.

Como o projeto está no Figma, implemente e valide o fluxo visual de geração, a prévia e o layout do relatório. Não simule uma exportação real como concluída caso não exista implementação que produza efetivamente um PDF.

## 6. Correção da navegação — Texto, Participações e Prévia

Atualmente, a navegação entre as opções "Texto", "Participações" e "Prévia" apresenta problemas de usabilidade.

Ao selecionar Participações ou Prévia, a interface muda excessivamente, dificultando o retorno às outras seções.

**Corrija esse comportamento.**

Implemente um sistema de abas persistentes, mantendo a estrutura geral da página.

Requisitos:

- Alternar diretamente entre as três opções.
- Preservar cabeçalho, navegação e estrutura da tela.
- Alterar apenas a área de conteúdo correspondente.
- Manter a aba selecionada visualmente destacada.
- Garantir retorno imediato para qualquer outra aba.
- Evitar redirecionamentos desnecessários.
- Preservar os dados preenchidos ao alternar entre abas, quando aplicável.

Teste a navegação em todas as direções.

## 7. Reformulação visual da área de Relatórios

A interface atual de relatórios está confusa e precisa ser redesenhada.

Reorganize a tela considerando:

- Hierarquia visual.
- Agrupamento lógico das informações.
- Melhor posicionamento de filtros.
- Separação entre indicadores, gráficos e tabelas.
- Clareza nas ações principais.
- Navegação intuitiva.
- Legibilidade dos dados.
- Padronização com o design existente.
- Responsividade.
- Menor poluição visual.

Priorize uma experiência administrativa profissional, que permita compreender rapidamente a situação geral dos processos.

Não se limite a trocar cores ou reorganizar superficialmente elementos. Revise a estrutura de navegação e a distribuição das informações.

## 8. Validação obrigatória por snapshots

**ESTA ETAPA É OBRIGATÓRIA E NÃO PODE SER IGNORADA.**

Após implementar as melhorias, você deverá realizar uma inspeção visual completa do projeto.

### Etapa A — Captura

Capture snapshots ou imagens reais das telas atualizadas, utilizando os recursos disponíveis no ambiente do Figma.

Verifique, no mínimo:

1. Página inicial e login.
2. Seleção demonstrativa dos quatro usuários.
3. Dashboard principal.
4. Dashboard de estatísticas.
5. Gráficos de barras e pizza.
6. Central de notificações.
7. Acompanhamento individual de portarias.
8. Tela de relatórios.
9. Prévia do relatório PDF.
10. Abas Texto, Participações e Prévia.
11. Interfaces dos quatro perfis de acesso.

### Etapa B — Inspeção visual

Analise cada snapshot procurando:

- Elementos sobrepostos.
- Textos cortados.
- Componentes desalinhados.
- Espaçamentos inconsistentes.
- Gráficos ilegíveis.
- Informações duplicadas.
- Botões fora do padrão.
- Componentes sem identificação.
- Problemas de contraste.
- Navegação confusa.
- Inconsistências entre telas.
- Problemas de responsividade.

### Etapa C — Validação funcional

Execute os fluxos disponíveis no protótipo e confirme:

- Alternância entre os quatro perfis.
- Exibição correta do nível após o login.
- Navegação no menu lateral.
- Funcionamento das notificações.
- Consulta aos estados das portarias.
- Aplicação dos filtros estatísticos.
- Alternância entre os gráficos.
- Navegação entre Texto, Participações e Prévia.
- Acesso aos relatórios.
- Navegação pela prévia do PDF.

### Etapa D — Correção e nova captura

Caso encontre algum problema, você deverá:

1. Identificar o problema.
2. Corrigir a implementação.
3. Capturar um novo snapshot.
4. Comparar o resultado com o esperado.
5. Repetir o processo até que a inconsistência seja solucionada.

Não conclua o trabalho apenas porque as alterações foram inseridas no Figma.

**Implementação não significa validação.**

## 9. Critérios para considerar o trabalho concluído

A tarefa somente poderá ser considerada concluída quando:

- Todas as melhorias solicitadas estiverem implementadas.
- Os componentes preservarem a identidade visual existente.
- Os gráficos e indicadores estiverem corretamente organizados.
- Os quatro perfis demonstrativos estiverem acessíveis.
- A navegação entre as abas estiver corrigida.
- A central de notificações permitir acompanhar os processos.
- A interface de relatórios estiver reorganizada.
- A prévia dos relatórios estiver implementada.
- Os principais fluxos estiverem testados.
- Os snapshots tiverem sido capturados e inspecionados.
- Os problemas identificados tiverem sido corrigidos e revalidados.

Se alguma funcionalidade não puder ser validada no ambiente disponível, informe explicitamente a limitação. Não declare um teste como aprovado sem executá-lo.

## 10. Entrega final

Ao finalizar, apresente um relatório objetivo contendo:

**Implementações:** o que foi modificado, criado e corrigido.

**Validação visual:** snapshots obtidos e resultado da inspeção de cada tela.

**Validação funcional:** fluxos testados e respectivos resultados.

**Correções:** inconsistências encontradas e como foram resolvidas.

**Pendências:** itens não implementados, limitações do Figma e funcionalidades que dependem de backend.

**Resultado final:** indique se o projeto passou pela validação completa, parcialmente ou se ainda apresenta problemas.

Não entregue apenas uma descrição das mudanças planejadas.

**Execute → Capture snapshot → Inspecione → Teste → Corrija → Capture novamente → Valide → Entregue.**

O objetivo é entregar um protótipo no Figma visualmente consistente, funcional dentro das capacidades da ferramenta, completo em suas estatísticas e adequado à apresentação institucional do Gestor de Portarias do IFC Videira.