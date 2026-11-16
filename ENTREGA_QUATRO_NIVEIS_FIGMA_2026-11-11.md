# Quatro níveis e quatro logins — Figma

Decisão confirmada em 11/11/2026: quatro níveis, cada um com sua própria tela de login. O usuário confirmou que o nível 4 mantém acesso total, inclusive elaboração de portarias. Esta entrega substitui o agrupamento anterior de três níveis.

| Nível | Entrada | Perfis e permissões |
| --- | --- | --- |
| 1 | Acesso externo | Conta externa/consultor: apenas portarias publicadas e documentos de divulgação. |
| 2 | Servidores | Docentes, técnicos, DEPE/DAP e administrador técnico, conforme função e escopo. Sem elaboração direta de portarias. Administração técnica permanece restrita às suas atribuições. |
| 3 | Operadores | Gabinete e Gestão de Pessoas — CGP/DGP: elaboração e tramitação, validação quando autorizada, publicação e comunicação no escopo concedido. Sem assinatura ou administração de configurações automática. |
| 4 | Direção | Direção-Geral e Vice-Diretor autorizado: todas as funções, inclusive elaboração, assinatura e administração. O Vice conserva ato e período de autorização. |

## Entradas do protótipo

| Tela | Computador | Celular |
| --- | --- | --- |
| Escolha seu acesso | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=5-2&starting-point-node-id=5-2&scaling=contain&content-scaling=fixed) | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=8-1663&starting-point-node-id=8-1663&scaling=contain&content-scaling=fixed) |
| Login 1 · Externo | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=5-182&starting-point-node-id=5-182&scaling=contain&content-scaling=fixed) | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=8-1843&starting-point-node-id=8-1843&scaling=contain&content-scaling=fixed) |
| Login 2 · Servidores | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=260-1712&starting-point-node-id=260-1712&scaling=contain&content-scaling=fixed) | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=260-4555&starting-point-node-id=260-4555&scaling=contain&content-scaling=fixed) |
| Login 3 · Gabinete e Gestão de Pessoas | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=260-1948&starting-point-node-id=260-1948&scaling=contain&content-scaling=fixed) | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=260-4776&starting-point-node-id=260-4776&scaling=contain&content-scaling=fixed) |
| Login 4 · Direção-Geral e Vice | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=260-2182&starting-point-node-id=260-2182&scaling=contain&content-scaling=fixed) | [Abrir](https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=260-4995&starting-point-node-id=260-4995&scaling=contain&content-scaling=fixed) |

Os quatro formulários têm estados vazio, preenchido e com erro, além de uma variante preenchida própria do Vice no nível 4. São 13 estados por classe de tela. Os exemplos preenchidos representam usuário externo, Helena Martins (servidora), Marina Costa (Gabinete), Eduardo Almeida (DG) e Sofia Ribeiro (Vice autorizado).

Escolher outro acesso retorna à seleção inicial. Sair retorna ao login correspondente ao perfil; a sessão de nível 4 conserva o contexto ao navegar em módulos compartilhados e retorna à entrada 4 ao sair. A recuperação interna retorna à seleção de acesso após a redefinição, sem assumir outro perfil. A recuperação externa mantém o percurso próprio.

A escala 1–4 foi aplicada aos badges, aos perfis operacionais, à tela de contas, ao catálogo de permissões, ao guia e aos fluxos nomeados do Figma. A família Nível de acesso `228:19` possui oito variantes: quatro níveis, nos formatos Completo e Compacto. Tokens, tipografia, marca, fotografias e composição institucional foram preservados.

## Verificação e limites

- Auditoria estrutural de 497 quadros: zero destinos de navegação ausentes, navegação ao próprio quadro, rótulos Acesso institucional ou divergências de badge nos perfis examinados. O badge compacto da espera de assinatura em computador foi alinhado ao nível 3 em correção pontual documentada.
- 138/138 verificações passaram na avaliação dos arrays de ações e condições relidos do Figma: seleção das quatro entradas, credenciais e destinos predefinidos, indicação do nível, erro com entrada vazia, retorno à seleção, saídas de sessão e limpeza/manutenção do contexto de gestão.
- Capturas de computador, celular 390 px e seleção 360 px em `.impeccable/review/quatro-*.png`. A composição móvel conserva rolagem quando necessária.
- Parecer independente **ship**, sem achados materiais nas 14 capturas examinadas e na persistência documental atual. Escopo: proporções, hierarquia, cortes, clareza dos quatro acessos e continuidade institucional. Registro em `.impeccable/review/quatro-niveis-2026-11-11.md`.

Evidências: `.design/four-levels-foundation-2026-11-11.json`, `four-levels-profiles-D/M-2026-11-11.json`, `four-levels-login-D/M-2026-11-11.json`, `four-levels-audit-D/M-2026-11-11.json`, `four-levels-waiting-fix-2026-11-11.json` e `four-levels-navigation-tests-2026-11-11.json`.

A entrega permanece exclusivamente no Figma, com camadas editáveis e percursos predefinidos. Selecionar uma entrada não confere privilégios: a autenticação e a autorização efetivas por conta, perfil, nível e operação dependem da futura implementação. Os testes dos dados de navegação não comprovam backend, credenciais reais, execução visual de sessão, teclado ou acessibilidade em execução. O workflow automático aberto de uma etapa anterior permanece como registro histórico e não constitui aprovação automática desta entrega.
