disposition: fix

Entradas não fornecidas: comp aprovada, QUALITY BAR card e diff de reprodução; não são exigidos para este reparo da identidade existente. Revisão fresca e independente limitada a Assinaturas, Administração, contas de gestão, sidebar e menu móvel. Sem inspeção integral do arquivo, cliques ou rolagem reais.

## persistence

Pass no escopo documental: PRODUCT.md, DESIGN.md e UX-CONTRACT.md existem e sustentam Source Sans 3, verde institucional, branco, superfícies claras, quatro níveis e separação entre administração técnica e competência de negócio. state.json identifica o arquivo yHEP1gOormT6A2nBhLhT3b e os quadros D/M. Todas as 15 capturas finais exigidas foram abertas e inspecionadas: D-signatures, D-administration, D-administration-accounts, D-account, D-vice-account, D-vice-signatures, D-tech-administration, D-stats, M-signatures, M-administration, M-account, M-vice-account, M-menu, M-menu-full e M-tech-menu. São imagens válidas e coerentes com seus nomes. M-menu-full é evidência auxiliar de um clone temporário do painel completo, não prova de rolagem; M-menu é o viewport real. O conteúdo cortado abaixo do viewport nas contas/menu não constitui, por si, erro de layout.

verification-D.json registra 9.937 assertivas e verification-M.json 87, ambas sem falhas, por interpretação de ações/variáveis. Não comprovam execução. A automação não iniciou (kernel assets/os error 3); detector web e backend não se aplicam ao artefato Figma. Scripts locais corroboram camadas nativas e reação da linha documental, mas esta revisão visual não certifica editabilidade integral, autorização efetiva ou todas as rotas.

## fidelity

| Elemento / promessa | Estado | Evidência e leitura independente |
| --- | --- | --- |
| TYPE | match | Source Sans 3 e hierarquia institucional nas 15 capturas; títulos, corpo e controles legíveis, sem colisões materiais visíveis. |
| MATERIAL | match | Superfícies planas, contornos suaves e ícones lineares próprios do mundo existente; sem material físico simulado. |
| GROUND | match | Branco e cinza frio visualmente coerentes com #FFFFFF/#F4F6F8 do contrato; verde institucional consistente. Não foi feita amostragem colorimétrica. |
| Três módulos distintos | match | Assinaturas é fila documental (387:8890/387:17881), Administração é índice de áreas (387:9018/387:17926), Minha conta apresenta acesso/competência (387:9170/387:18024). Administração não é mais uma tela de perfil. |
| Próxima ação da fila de assinatura | missing | final-D-signatures, final-D-vice-signatures e final-M-signatures exibem somente documento, versão e validação; nenhum botão, link sublinhado, seta ou rótulo de ação informa como prosseguir. create-views.js liga a linha a 243:1718/243:4097, portanto não alego ausência da reação: falta sua apresentação visível. Contraria THESIS e instrução “prossiga”. F01. |
| Identidade DG/Vice | match | Eduardo Almeida/Direção-Geral nas contas DG; Sofia Ribeiro/Vice-Diretora autorizada nas contas e fila Vice. O período 01/11 a 15/11/2026 está explícito nas contas Vice; nível 4 preservado. |
| Seleção desktop | match | Assinaturas ativa na fila, Administração ativa no índice e em Contas e permissões, Relatórios ativo em Estatísticas; Minha conta não marca indevidamente outro módulo. |
| Seleção do menu móvel neutro | contradicted | final-M-menu-full exibe Assinaturas em verde enquanto o quadro é Menu de acesso genérico; nenhum contexto de origem sustenta essa seleção. Os demais rótulos são escuros. Quadro 8:2091/painel 8:2108 conforme mobile-menu.js. F02. |
| Ordem técnica D/M | contradicted | final-D-tech-administration: Início, Notificações, Administração; final-M-tech-menu: Início, Administração, Notificações, Minha conta. Sem razão de adaptação registrada; UX-CONTRACT exige navegação global consistente por perfil. Menu M 11:3307/painel 11:3324. F03. |
| Ícones e alinhamento | match | Colunas e linhas regulares em sidebar e menu completo; ícones vetoriais coerentes. Rótulo longo de memorandos quebra em duas linhas no desktop sem sobreposição. |
| Permissões técnicas visíveis | match | André Souza, nível 2 restrito; desktop oferece Início/Notificações/Administração, móvel acrescenta Minha conta. Sem Assinaturas, relatórios de negócio ou elaboração no menu técnico capturado. Índice administrativo contém contas, signatários, configurações e auditoria; gestão cadastral de competência não é prova de poder de assinar. |
| Adaptação móvel | adaptation | Uma coluna a 390px, menu recolhido e conteúdo vertical, conforme FIRST VIEWPORT. Painel completo excede o viewport e usa overflow VERTICAL declarado; acessibilidade por gesto não foi exercitada. |

## ceiling

A linguagem de operação institucional foi preservada. O teto deste reparo é clareza da tarefa e previsibilidade da navegação; F01–F03 impedem considerá-lo alcançado. Ausência de expressividade decorativa adicional não é defeito neste contexto. Estados de hover/foco, teclado, leitor de tela e movimento não foram validados em execução.

## material_fixes

1. F01 — Em 387:8890 e 387:17881, acrescentar ação visível “Conferir documento” junto ao registro 128/2026, ou tornar seu título um link inequivocamente reconhecível, conservando a reação e os destinos 243:1718/243:4097. Repetir a mesma apresentação na amostra Vice. Evidência: final-D-signatures, final-D-vice-signatures, final-M-signatures; THESIS/próxima ação.
2. F02 — Em 8:2091, painel 8:2108, neutralizar o texto/ícone de Assinaturas no menu genérico; se a seleção depender da origem, vinculá-la ao módulo efetivamente ativo. Evidência: final-M-menu-full; seleção correspondente ao conteúdo.
3. F03 — Em 11:3307, painel 11:3324, alinhar a sequência móvel técnica a Início, Notificações, Administração, Minha conta, preservando destinos e nível. Evidência: final-D-tech-administration versus final-M-tech-menu; navegação consistente por perfil.

## keep

Preservar separação Assinaturas/Administração/Minha conta, identidade e período do Vice, nível técnico restrito, camadas editáveis, tipografia/paleta institucional, alinhamento dos ícones, seleção desktop e espaço de rolagem móvel; nenhuma alteração da matriz de autorização.
