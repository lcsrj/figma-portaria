# Artefatos de estatísticas v1.1

Entrega principal: `../ENTREGA_ESTATISTICAS_RELATORIOS_2026-11-11.md`.

Fontes canônicas locais:

- `statistics-scenario.mjs` prepara `statistics-scenario.json` e executa os casos do cenário fictício. Rodar com `node .design/statistics-scenario.mjs` a partir da raiz.
- `statistics-prepare-docs.mjs` extrai as 24 métricas do plano e prepara `statistics-data-contract.json`; não cria uma API operacional.
- `statistics-contrast.mjs` verifica as 12 cores contra branco e fundo e grava `statistics-contrast.json`.
- `statistics-state.json` reúne os IDs finais e os caminhos das evidências.

Os demais arquivos `.js` deste lote são scripts de autoria para a API de plugins do Figma, com parâmetros e IDs registrados nos respectivos resultados. Não constituem aplicação web e não devem ser executados como um build Node nem reaplicados indiscriminadamente: as correções posteriores e o ledger final prevalecem sobre snapshots intermediários.

`statistics-foundation-result.json`, `statistics-plots-success.json`, `statistics-documents-result.json`, `statistics-screens-*-final-result.json`, `statistics-wire-*-result.json` e `statistics-department-*-success.json` conservam o histórico de criação. As auditorias `*-final.json`, verificações de navegação e alternância e o parecer visual registram as verificações. Dados são inteiramente demonstrativos.
