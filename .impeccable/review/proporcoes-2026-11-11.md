# Proporções do acesso — 11/11/2026

Modo: Operate. Escopo: composição e controles das 12 telas de autenticação para computador e 13 móveis. Marca, conteúdo institucional e navegação preservados.

## Problemas confirmados na captura do usuário

1. O quadro de 1000 px de altura era reduzido para cerca de 85% no visualizador, diminuindo rótulos de 14 px para aproximadamente 12 px aparentes.
2. Painel de 648 px, título de 56 px e fotografia de 536 × 402 px dominavam a tarefa.
3. Formulário de 400 px com controles e textos pequenos parecia secundário na área branca.
4. Recuperação e acesso institucional ficavam dispersos depois de Entrar.
5. Links, rótulos e rodapé precisavam de uma escala de leitura consistente.

## Correções

Quadro para computador: 1440 × 900 px. Painel de 576 px, título 44/50 px e foto 448 × 280 px. Formulário de 440 px. Campos e botões de 48 px, com texto 16/24 px; rótulos 16/22 px e rodapé 14/20 px. Recuperação alinhada à direita junto da senha e acesso institucional com contorno após a ação principal. No celular, cabeçalho e faixa institucional foram reduzidos para priorizar o formulário, preservando 24 px de margem lateral.

Foi criada somente a família Campo de acesso, com quatro estados e as mesmas propriedades e cores do campo existente. Foram adicionados dois estilos de autenticação. Os campos e botões de outros módulos não foram redimensionados.

As 25 telas conservaram as mesmas reações, comparadas por ID antes e depois. Os registros dos lotes guardam IDs alterados, tamanhos e entradas de 48 px. A auditoria posterior verifica transbordamentos de contêineres, rótulos de botões e dimensões dos campos.

## Revisão independente

Um avaliador separado inspecionou a captura do usuário antes da implementação e as capturas novas de computador, celular de 390 e 360 px e recuperação móvel após a implementação. Resultado: **ship no escopo dos cinco problemas de proporção, hierarquia e legibilidade**. Constatou melhora clara, controles sem aparência inflada, sequência de ações mais evidente e ausência de cortes ou quebras prejudiciais nas larguras móveis revisadas.

Não foi necessário um segundo ciclo de alterações visuais. A revisão não representa teste de teclado, leitor de tela, autenticação real ou execução de todos os caminhos do protótipo.

## Evidências

- `.design/previews/acesso-computador-2026-11-11.png`
- `.design/previews/acesso-celular-2026-11-11.png`
- `.design/previews/acesso-360-2026-11-11.png`
- `.design/previews/recuperacao-celular-2026-11-11.png`
- `.design/auth-field-family-2026-11-11.json`
- `.design/balanced-computador-2026-11-11.json`
- `.design/balanced-celular-2026-11-11.json`
- `.design/balanced-computador-audit-2026-11-11.json`
- `.design/balanced-celular-audit-2026-11-11.json`
- `.design/balance-access-2026-11-11.js`
