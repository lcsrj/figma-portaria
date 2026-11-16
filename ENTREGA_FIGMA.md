# Entrega — Gestor de Portarias

[Arquivo Figma](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b) · [Protótipo desktop](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=5-2&starting-point-node-id=5-2&scaling=contain) · [Protótipo móvel](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=8-1663&starting-point-node-id=8-1663&scaling=contain)

Criado na equipe de lucas.silva123456. Referência funcional: plano v3.2, incluindo X08, e requisitos adicionais recebidos por imagem.

## Conteúdo

- 217 telas/estados desktop e 221 móveis, incluindo amostras em 360, 768 e 1280 px, além das bases 1440/390.
- Vinte famílias T01–T20; doze jornadas e variantes das decisões pendentes.
- Componentes nativos, tokens, camadas editáveis, documentos A4 e pontos de entrada por perfil.
- Navegação com dissolução de 220 ms; abas com Smart Animate de 220 ms; campos e estados entre 150–180 ms; abertura do menu móvel em 240 ms; hover em 372 botões desktop, com retorno em 120 ms.
- Login com usuário e senha, recuperação e Home com menu, conforme as imagens fornecidas.
- Marca oficial do IFC Videira e fotografia real da biblioteca nas telas de acesso e recuperação; créditos em `assets/institucional/FONTES.md`.

## Menu e movimento — 28/10/2026

- Corrigida a troca involuntária de perfil ao abrir Nova solicitação a partir do Gabinete. As sete etapas do fluxo preservam Marina Costa, os nove itens do menu e os destinos do perfil, em vez de abrir o shell docente de Helena Martins.
- Mantido o fluxo docente independente. Acompanhar solicitação no resultado docente desktop agora abre o detalhe docente.
- Animações aplicadas às interações das 217 telas desktop e 221 móveis. A navegação usa dissolução para evitar deformações entre conteúdos diferentes; abas e campos conservam Smart Animate. As ações existentes foram preservadas.
- Hover explícito nos botões desktop, com realce tonal nos secundários e discretos. O menu móvel tem entrada lateral e botão Fechar que retorna à tarefa de origem.
- Verificação estrutural: nenhuma navegação sem transição, nenhuma fuga das sete telas do Gabinete para o fluxo docente e nenhum menu lateral com dimensão ou visibilidade incorreta.
- Cliques reais no Chrome: desktop Solicitações → Nova solicitação → preenchimento → rascunho; móvel Solicitações → Nova solicitação → menu do Gabinete → fechar → mesma solicitação. As capturas do formulário desktop e móvel estão em `.impeccable/review/motion-fix/`.

Estado e IDs: `.design/motion-hotfix-state.json`. Scripts: `.design/hotfix-request-shell.js` e `.design/hotfix-motion.js`. Evidência: `.impeccable/review/motion-fix/verificacao.json` e `parecer.md`. A inspeção estrutural cobre as transições; o teste de clique cobre as jornadas listadas, sem comprovar cada cenário da plataforma.

## Correções de navegação e recuperação — 23/10/2026

- Pendências mantém as abas Da minha unidade, Minhas e Informações; Informações é uma vista local, com Pendências selecionado.
- Vencimentos mantém cinco abas e abre o ato selecionado, com número, período e operações próprios.
- Confira seu e-mail mantém os três botões dentro do cartão; ações de autenticação empilhadas também no celular. Reenvio confirma na própria tela.
- Administração, Portarias, editor normativo e texto compilado preservam sua navegação local entre as vistas.
- Catálogos de versões e prévias de arquivo preservam o ato e o perfil. A aba atual do documento assinado não retorna à minuta.

Mapa atualizado: `.design/routing-hotfix-state.json`. As imagens foram obtidas dos portais institucionais e inseridas como camadas de imagem; formulários, textos, menus e documentos continuam editáveis.

## Acesso às famílias

| Tela | Família | Abrir no Figma |
| --- | --- | --- |
| T01 | Acesso | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=5-2) |
| T02 | Recuperação | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=5-92) |
| T03 | Home | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-49) |
| T04 | Solicitações | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-751) |
| T05 | Solicitar portaria | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-1399) |
| T06 | Consulta | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-2289) |
| T07 | Detalhe | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-2851) |
| T08 | Elaboração | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-230) |
| T09 | Validação | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-1667) |
| T10 | Assinatura | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-2508) |
| T11 | Publicação | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-3158) |
| T12 | Gestão do ato | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-5756) |
| T13 | Relatórios | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-6744) |
| T14 | Servidores | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-7412) |
| T15 | Participantes externos | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-8494) |
| T16 | Referências | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-8821) |
| T17 | Contas e permissões | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-9150) |
| T18 | Notificações | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-10597) |
| T19 | Documentos | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-3455) |
| T20 | Pendências | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-5428) |

## Verificação

Conferência pelo conector de 75 grupos de abas desktop e 76 móveis, sem estouro horizontal dos grupos de abas e ações examinados. Essa inspeção verifica destinos e limites; não prova que todo cenário do produto foi testado.

Testes de clique no protótipo: Pendências → Minhas → Informações → fila da unidade; cinco abas de Vencimentos no desktop; recuperação → Confira seu e-mail → reenvio → link de recuperação. No celular: Pendências → Minhas → Informações → aviso de vencimento → Vencidas. As transições conservaram o contexto esperado.

Nova revisão independente em `.impeccable/review/routing-fix/parecer.md`: aprovada dentro desse escopo. O P2 encontrado na revisão — aba atual do assinado abrindo minuta — foi corrigido nos dois formatos. As capturas atuais estão na mesma pasta. A aprovação anterior de oito capturas não cobria os bugs posteriormente relatados pelo usuário.

O protótipo usa entradas e dados predefinidos. Não há backend, login institucional ativo, assinatura efetiva, publicação externa, geração operacional de arquivos ou envio real de e-mail. Entrada livre, autorização no servidor, teclado, leitor de tela e redução de movimento em execução devem ser implementados e testados no sistema web.

## Homologação pendente

Confirmar as decisões institucionais D01–D24, especialmente SIG/SIPAC, séries, autoridade dos dados, assinatura, canais de publicação e modelos oficiais. A variante de conclusão administrativa não presume revogação. A identidade própria e os espécimes documentais dependem da homologação prevista no plano. A revisão visual não substitui teste com usuários ou conferência jurídica.

