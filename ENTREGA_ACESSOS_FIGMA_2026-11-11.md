# Acessos e níveis — Figma, 11/11/2026

A interface foi atualizada no arquivo Figma existente. O botão Acesso institucional foi removido; servidores usam a entrada normal e o Acesso externo abre um fluxo próprio. A confirmação do usuário reserva o nível 3 à Direção-Geral e ao Vice-Diretor autorizado. Esta entrega substitui as regras de acesso do relatório anterior de referência; a composição visual institucional foi preservada.

| Nível | Perfis | Alcance |
| --- | --- | --- |
| 1 | Conta externa habilitada / consultor | Portarias publicadas e documentos de divulgação; sem minutas, dados cadastrais privados ou operações internas. |
| 2 | Docentes, técnicos, Gabinete, CGP, DEPE, DAP e administrador técnico | Restrições do plano conforme função, departamento, vínculo e etapa. Administração técnica não concede competência de negócio. |
| 3 | Direção-Geral e Vice-Diretor autorizado | Todos os módulos e funções; o Vice conserva a autorização e o período de competência. |

Os níveis aparecem na conta em computador, no cabeçalho móvel e na administração. O catálogo Perfis e níveis detalha as permissões. A tela inicial de gestão oferece elaboração, assinatura e administração; o contexto de DG/Vice permanece nos módulos compartilhados. Encaminhar um ato à assinatura com nível 2 abre Aguardando assinatura, sem assumir o perfil do signatário. Documentos assinados e histórico continuam preservados.

O fluxo externo contém entrada vazia/preenchida/com erro, recuperação e redefinição próprias, consulta, resultado da busca, detalhe, documento publicado e Minha conta externa. Voltar ao acesso de servidores leva apenas à entrada. Cadastro de participante externo e habilitação de conta permanecem ações distintas; não foi criado autocadastro.

## Quadros principais

| Tela | Computador | Celular |
| --- | --- | --- |
| Entrada de servidores | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=5-2) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=8-1663) |
| Acesso externo | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=5-182) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=8-1843) |
| Consulta externa | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=229-4207) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=229-4803) |
| Gestão · Direção-Geral | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=6-390) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=8-2014) |
| Gestão · Vice autorizado | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=229-4439) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=229-4987) |
| Perfis e níveis | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=235-1690) | [Abrir](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=235-3604) |

## Verificação

- Auditoria estrutural de 475 quadros: zero destinos ausentes, entrada Acesso institucional, rotas externas para áreas internas, atalhos diretos de nível 2 às assinaturas, contas internas sem badge ou condições com mais de dois ramos. Três retornos condicionais de Início ao próprio quadro departamental foram removidos em correção pontual posterior à auditoria.
- 16/16 cenários passaram na avaliação dos arrays de ações e condições relidos do Figma: espera do nível 2, assinatura DG, assinatura Vice, continuidade da identidade do Vice e entrada/lista/detalhe/documento externos, nas duas classes de tela. São testes do modelo de navegação, sem execução visual de autenticação ou sessão.
- A verificação de nível e a escolha DG/Vice foram divididas em condições de dois ramos, com quadros intermediários de transição automática de 1 ms. A separação foi necessária porque o terceiro ramo não era persistido pela ferramenta.
- A revisão independente pediu dois ajustes: sobreposição das ações superiores da gestão em computador e prescrições obsoletas em DESIGN.md. Ambos foram classificados como resolvidos no veredito **ship**, limitado a esses achados e ao acabamento das duas transições adicionais. A linha de ações tem 44 px e intervalo de 24 px até o painel seguinte.

Evidências: `.design/levels-verification-2026-11-11.json`, `levels-final-audit-D/M-2026-11-11.json`, `levels-self-fix-D/M-2026-11-11.json`, `levels-navigation-tests-2026-11-11.json` e `levels-review-fix-2026-11-11.json`. Capturas atuais: `.impeccable/review/niveis-*.png`; parecer: `.impeccable/review/niveis-2026-11-11.md`.

O produto entregue é exclusivamente o protótipo nativo Figma com camadas editáveis e percursos predefinidos. Não foi criada aplicação HTML ou backend. Autorização, autenticação, assinatura, publicação, recuperação por e-mail, teclado e acessibilidade em execução dependem da implementação posterior. O workflow automático Impeccable aberto de uma etapa anterior permanece como registro histórico; não constitui aprovação automática desta entrega.
