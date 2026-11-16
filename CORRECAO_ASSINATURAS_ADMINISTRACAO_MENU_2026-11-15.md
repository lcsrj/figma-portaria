# Correção de Assinaturas, Administração e navegação — 15/11/2026

Assinaturas e Administração passaram a ter telas próprias no [Figma Design existente](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b). Assinaturas apresenta a fila documental e a ação **Conferir e assinar**; Administração reúne os acessos de gestão. Minha conta continua separada dessas tarefas. O reparo estende a identidade institucional vigente, sem substituir o sistema visual ou alterar a matriz de autorização.

## Comportamento entregue

- **Assinaturas:** fila do exemplo 128/2026 · Comissão da SEPE, versão 04 congelada, com validação final e ação visível Conferir e assinar. A reação nativa segue para o gateway existente de assinatura (`243:1718` no computador; `243:4097` no celular), que conserva os percursos de Direção-Geral e Vice. O antigo exemplo duplicado 129/2026 encaminhava ao documento 128; ele foi retirado somente da nova fila demonstrativa. Isso não altera o estado real de qualquer ato.
- **Administração:** página de entrada com Contas e permissões, Signatários e substituições, Configurações e serviços e Registro de auditoria. Seus botões encaminham às telas existentes de cada área.
- **Minha conta:** contas próprias de Eduardo Almeida/Direção-Geral e Sofia Ribeiro/Vice-Diretora autorizada, sem reaproveitar a identificação de Marina Costa/Gabinete. O Vice conserva a autorização demonstrada de 01/11 a 15/11/2026 e o nível 4. André Souza mantém conta própria de administrador técnico, nível 2; Patrícia Ramos mantém conta departamental própria.
- **Menu lateral:** ordem, ícones, alinhamento e seleção do módulo foram padronizados nos quadros processados. Minha conta não seleciona outro módulo. Início passou a ter destino funcional fora da Home nas 45 novas telas desktop da Direção-Geral, segundo a interpretação das reações persistidas.
- **Menu móvel:** itens com alvos de pelo menos 44 px, Fechar com ação nativa `BACK` para retornar à origem e painel com rolagem vertical declarada. O menu genérico não marca Assinaturas como selecionada. A ordem técnica é Início, Notificações, Administração e Minha conta, preservando a conta técnica e seus destinos.

Ordem comum da navegação completa: Início, Solicitações, Portarias, Pendências, Vencimentos, Notificações, Relatórios, Servidores, Participantes externos, Memorandos e processos, Administração e Assinaturas. No celular, Minha conta aparece como item adicional; no computador, a identificação da conta dá acesso à área pessoal. Itens disponíveis continuam dependentes do perfil demonstrado.

## Quadros de referência

IDs atuais registrados em `.design/menu-repair/state.json`:

| Conteúdo | Computador | Celular |
| --- | --- | --- |
| Assinaturas | `387:8890` | `387:17881` |
| Administração | `387:9018` | `387:17926` |
| Minha conta — DG | `387:9170` | `387:18024` |
| Minha conta — Vice | `387:9380` | `387:18100` |
| Minha conta — administração técnica | `387:9590` | `387:18176` |
| Minha conta — departamento | `387:9785` | `387:18252` |
| Gateway — Minha conta da gestão | `387:9975` | `387:18320` |

## Evidência e alcance da verificação

Os lotes de reparo processaram 420 quadros desktop e controles de navegação em 420 quadros móveis. Esse volume é cobertura estrutural do processamento, sem inspeção visual individual de todos os quadros.

`verification-D.json` registra 9.937 assertivas sem falhas e 412 quadros com sidebar no critério da verificação. `verification-M.json` registra 87 assertivas sem falhas; seu contador de raízes com sidebar é zero, pois a validação móvel usa controles/menu em vez da sidebar desktop. Os resultados interpretam ações condicionais, destinos e variáveis nativas no cenário de gestão; não comprovam navegação executada ou autorização efetiva por todos os perfis.

As verificações posteriores `critical-D.json` (8 assertivas) e `critical-M.json` (10) também passaram sem falhas. Elas confirmam, por interpretação das reações, o gateway de Conferir e assinar e seus destinos próprios DG/Vice, as quatro áreas administrativas, a neutralidade de Assinaturas no menu genérico móvel e a ordem técnica. O total dos quatro arquivos é **10.042 assertivas interpretadas sem falhas**, sem cliques reais.

Existem 15 capturas `final-*.png` em `.design/menu-repair/`. A revisão independente inicial examinou as 15 e apontou três problemas: próxima ação pouco explícita na fila (F01), seleção indevida de Assinaturas no menu móvel genérico (F02) e ordem técnica móvel divergente (F03). Após o lote corretivo, cinco recapturas foram reabertas: assinaturas DG, assinaturas Vice, assinaturas móvel, painel completo móvel e menu técnico móvel. O parecer final registra F01–F03 resolvidas e **ship limitado a essas correções**, sem regressão material visível nas cinco recapturas. As outras dez não foram reavaliadas nessa pontuação.

Pareceres: `.impeccable/review/menu-repair/review.md` e `.impeccable/review/menu-repair/verdict.md`. A leitura atual deve usar o veredito final; o campo `review: pending` de `state.json` é um marcador anterior ao parecer e não foi reescrito nesta documentação.

Para esta documentação foram lidos `PRODUCT.md`, `DESIGN.md`, `UX-CONTRACT.md`, o estado, as quatro verificações, os cinco scripts abaixo e os pareceres. Foram abertas diretamente as capturas finais D-signatures, D-administration, M-menu-full e M-tech-menu. A cobertura das demais capturas é atribuída ao parecer independente. M-menu-full mostra um clone temporário do painel inteiro como evidência auxiliar; não comprova rolagem no viewport real de M-menu.

## Identidade preservada e limites

Source Sans 3, verde institucional, superfícies brancas/claras e ícones lineares permanecem coerentes nas amostras examinadas. `DESIGN.md` e `.impeccable/design.json` não foram alterados nem regenerados por esta documentação. Os inventários antigos de 217/221 e 438 quadros em `DESIGN.md` pertencem aos registros históricos ali identificados; não descrevem o conjunto processado por este reparo. Nenhum drift material adicional foi confirmado neste escopo. Não foi feita auditoria global de drift visual ou de tokens, nem reparo de divergências preexistentes fora do escopo.

A automação de interface não iniciou no ambiente: `failed to write kernel assets: os error 3`. Não houve cliques ou rolagem reais nesta etapa. Autenticação, backend, assinatura efetiva, atualização de atos, autorização por operação, teclado e leitor de tela não foram implementados ou comprovados. A competência efetiva e o período do Vice precisam ser verificados pela aplicação futura; a administração técnica não concede poderes de assinatura ou de negócio. Nenhum PDF, envio ou ato real foi produzido.

## Registro técnico

- `.design/menu-repair/create-views.js`: criação das vistas e gateways.
- `.design/menu-repair/repair-navigation.js`: rotas, contexto e seleção por módulo/perfil.
- `.design/menu-repair/sidebar-finish.js`: ícones, medidas e acabamento da sidebar.
- `.design/menu-repair/mobile-menu.js`: menu móvel, conta e retorno à origem.
- `.design/menu-repair/verify-navigation.js`: interpretação das reações e variáveis para verificações delimitadas.
- `.design/menu-repair/batch-*.json` e `finish-D-*.json`: registros dos lotes de mutação.

Os scripts registram etapas do trabalho, incluindo estados anteriores às correções finais da revisão. Não constituem um instalador idempotente: reexecutar os scripts de criação pode duplicar quadros e nós. O artefato Figma atual, os IDs do estado e as capturas finais são a referência desta entrega; não reexecutar criação para consultar ou validar a documentação.
