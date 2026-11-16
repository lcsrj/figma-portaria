# Revisão independente — Estatísticas e relatórios · 11/11/2026

## 1. disposition: ship

A extensão preserva a identidade institucional e as áreas visíveis estão legíveis e organizadas. O verdict pass de 11/11/2026 pontuou F01 e F02 como **resolved**, no escopo visível das recapturas. A decisão inicial foi `fix`; a decisão atual é `ship` limitada à resolução desses dois achados. Não constitui nova auditoria da superfície, aprovação do plano inteiro ou de funcionalidades não mostradas.

## 2. Escopo e evidência

Revisão independente, exclusivamente local, do pacote `.design/statistics-review-packet.json`. Abri com `view_image` as nove imagens em `.design/statistics-previews/`: `carga-computador.png`, `painel-computador.png`, `carga-celular.png`, `servidor-celular.png`, `r1-pagina2.png`, `r4-pagina2.png`, `configuracao.png`, `estados.png` e `depe-central.png`.

Referências lidas: `PRODUCT.md`, `DESIGN.md`, o craft floor da skill impeccable e trechos pertinentes de `PLANO_ESTATISTICAS_RELATORIOS_v1.1.md`. A referência é a interface operacional existente: Source Sans 3, verde institucional, fundo claro, navegação persistente no computador e composição de uma coluna no celular. Não houve navegador, edição ou inspeção programática do Figma. Nenhum arquivo de implementação foi alterado. O detector HTML/CSS não se aplica a esta entrega em camadas nativas Figma.

No verdict pass, abri novamente somente `estados.png` e `depe-central.png`, substituídas nos mesmos caminhos. O exame se limitou a pontuar F01 e F02, sem nova busca de defeitos.

## 3. Achados materiais com captura e localização

Pontuação do verdict pass:

| ID | Estado | Evidência da resolução |
| --- | --- | --- |
| F01 | **resolved** | `estados.png`: Revogada e Encerrada estão neutras; Vigência futura está âmbar; Vencida está vermelha; Vigente e Vigente — sem término estão verdes. Os rótulos diretos e as contagens 1, 1, 2, 1, 5 e 2 foram preservados. A correção elimina o conflito semântico no componente capturado. |
| F02 | **resolved** | `depe-central.png`: as opções visíveis agora explicam participações por servidor, horas individuais, totais por servidor/departamento, atos por ano e atos por situação. O texto “Lançamento 2” foi retirado dos itens visíveis. Nomes e ações foram preservados. A conclusão não abrange R5 e o acervo abaixo da área capturada. |

Registro da revisão inicial, mantido para rastreabilidade:

| ID | Prioridade | Evidência e localização | Problema e correção necessária |
| --- | --- | --- | --- |
| F01 | P2 | `estados.png`, primeiro contêiner, barras de “Revogada”, “Vigência futura” e “Vigente” | “Revogada” recebe verde institucional, “Vigente” recebe cinza e “Vigência futura” recebe roxo. Isso contradiz o vocabulário semântico de `DESIGN.md`, que reserva verde à situação vigente, âmbar à vigência futura e neutros à revogada. Os rótulos tornam os números compreensíveis, mas a cor dá um sinal conflitante na leitura rápida. Aplicar a semântica de situação existente ao gráfico e às outras instâncias que usem o mesmo componente; conservar rótulos diretos e contagens. A escala categórica pode continuar nos gráficos sem situação semântica. |
| F02 | P2 | `depe-central.png`, catálogo “Escolha o relatório”, descrições sob os modelos | Todas as opções visíveis repetem “Lançamento 2 · data de referência e filtros da consulta”. “Lançamento 2” é classificação de entrega do plano, sem utilidade demonstrada para escolher um relatório; a descrição repetida tampouco explica o resultado de cada modelo. Substituir por descrições curtas do conteúdo de cada relatório, usando apenas o escopo previsto no plano, e retirar a classificação de lançamento da interface operacional. Preservar os nomes dos modelos e suas ações. |

Não identifiquei sobreposição, truncamento interno de rótulos ou desalinhamento material nas regiões efetivamente visíveis. Os textos e controles dos formulários mantêm respiro e alinhamento. Nas páginas R1 e R4 os registros são legíveis e o rodapé está separado do conteúdo. Os valores observáveis são coerentes entre si: as dez linhas de R1 somam 34 h; a situação em R4 soma 12 atos e distingue as contagens sobrepostas; o painel mostra os mesmos 12 publicados e sete vigentes.

As bases de gráficos e cartões que ficam abaixo da borda inferior nas capturas de viewport não foram tratadas como defeito: a composição prevê rolagem central. Estas imagens, porém, não demonstram que esses conteúdos são alcançáveis sem obstrução.

## 4. Avaliação do craft floor e da direção

A direção “Mesa de trabalho institucional”, em modo Operate, está preservada: navegação e identidade IFC reconhecíveis, tipografia sóbria, títulos claros, campos com contorno visível e ações distinguíveis. A adaptação móvel mantém uma coluna e os botões do rodapé de carga horária são legíveis e separados. Não há efeito decorativo ou ilustração competindo com a tarefa.

Os cartões e contêineres são exigidos pelo plano e pertencem ao sistema existente; sua presença não caracteriza, por si só, desvio do craft floor. As seis variantes do contêiner mostram conteúdo, vazio, carregamento, erro com recuperação, restrição e dados desatualizados com recuperação. A sinalização de hipótese em homologação também é exigência expressa do plano v1.1; não é defeito pela regra genérica anterior de manter hipóteses fora da operação.

F01 passou a manter a disciplina das cores semânticas; F02 tornou a escolha orientada pelo resultado concreto. A legibilidade foi avaliada visualmente, sem medição de contraste de cada elemento ou propriedades tipográficas computadas. Movimento, estados de foco, hover e comportamento real dos controles não são verificáveis nestas capturas.

## 5. Limitações e próximos passos obrigatórios

A rodada de correção e recaptura está concluída. F01 e F02 foram pontuados como **resolved** nas evidências correspondentes. Não há próximo passo obrigatório aberto nesta lista de correções. Ao comunicar a entrega, atribuir a aprovação ao escopo efetivamente examinado e manter os limites abaixo; a propagação para instâncias não capturadas continua dependente das verificações independentes do autor.

Este parecer não valida navegação, filtros livres, rolagem, geração ou download de PDF, autorização, privacidade em execução, backend, banco, integrações, teclado, leitor de tela ou conformidade de acessibilidade. As auditorias e contratos citados pelo pacote não foram tomados como prova desses aspectos. As prévias de PDF examinadas são somente a página 2 de R1 e de R4; outras páginas e modelos ficam fora da aprovação. Os gráficos de carga horária abaixo da dobra e suas alternativas em tabela também não estão integralmente visíveis. Qualquer alegação de conclusão deve conservar esses limites e o caráter demonstrativo dos dados.
