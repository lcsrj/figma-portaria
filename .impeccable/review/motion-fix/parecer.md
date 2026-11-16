# Menu e animações — 28/10/2026

Revisão do agente principal, limitada ao escopo descrito. Sem revisão independente nesta rodada.

Resultado: correção conferida no protótipo nativo do Figma. A origem do bug era a entrada do Gabinete no fluxo docente, que trocava Marina Costa por Helena Martins e reduzia os itens do menu. A interpolação entre shells diferentes tornava a perda de contexto visível.

As sete variantes de solicitação do Gabinete conservam a conta e os nove módulos do menu desktop de 232 px. As variantes móveis usam o menu operador. O fluxo docente permanece separado, e seu resultado desktop agora encaminha ao detalhe docente.

Movimento aplicado: navegação com dissolução de 220 ms; abas em Smart Animate de 220 ms; estados em 150 ms e campos que abrem outra tela em 180 ms; 205 entradas no menu móvel com deslocamento de 240 ms; 372 botões desktop com hover explícito de 150 ms. As quatro variantes hover retornam ao estado padrão em 120 ms. Fechar menu usa BACK para conservar a tarefa de origem.

Auditoria das páginas de aplicação: 217 quadros desktop e 221 móveis; zero navegações sem transição, zero ligações das sete variantes Operator ao fluxo docente, zero erros de dimensão ou visibilidade do menu lateral. Os fechamentos dos três menus móveis e o destino do acompanhamento docente foram conferidos após a última alteração.

Cliques no Chrome: Solicitações → Nova solicitação → preencher → salvar rascunho no desktop, com menu completo e conta preservados. No móvel: Solicitações → Nova solicitação → abrir menu → fechar → mesma solicitação. Capturas nativas do formulário em `nova-solicitacao-desktop.png` e `nova-solicitacao-mobile.png`.

Não houve mudança na identidade visual ou conversão em aplicação web. A prova cobre estrutura e as jornadas listadas; não comprova todas as interações, teclado, leitor de tela, redução de movimento do sistema, backend ou integrações. O detector HTML/CSS não se aplica à entrega em camadas nativas do Figma.

Detalhes e IDs em `verificacao.json` e `.design/motion-hotfix-state.json`.
