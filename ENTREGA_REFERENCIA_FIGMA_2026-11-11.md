# Referência de autenticação no Figma — 11/11/2026

A tela de acesso foi reconstruída no [arquivo Figma existente](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b), a partir da imagem e do texto fornecidos pelo usuário. Os estados de login vazio, preenchido e com erro foram atualizados; recuperação e redefinição conservam suas telas existentes. O escopo entregue é exclusivamente Figma: não houve implementação HTML, build ou backend.

A revisão independente concluiu **SHIP no escopo da lista original**, após resolver a legenda móvel encoberta. O parecer abrange fidelidade visual, proporções, enquadramento e cortes das amostras examinadas; não comprova todos os fluxos ou acessibilidade em execução. [Parecer da revisão](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/review/referencia-2026-11-11.md>).

## Composição e edição

- Cabeçalho com marca oficial proporcional, divisor e “Gestão institucional de portarias”; título e finalidade do sistema, cartão branco arredondado, fotos em recortes diagonais e ondas vetoriais.
- Inter Extra Bold no título do sistema e Inter Bold no título do cartão; Roboto no corpo e nos controles. A base de 1586 × 992 px usa título 88/84 px, título do cartão 40/48 px, cartão de 558 px de largura, raio 36 px, sombra 8/24 px, entradas 52 px e botões 55 px. As amostras adaptam essa escala; a altura do cartão acompanha conteúdo e erro.
- Cartão com Usuário, Senha, olho de visibilidade, Esqueci minha senha e ações Entrar, Acesso institucional e Acesso externo. **Acesso externo é visual e permanece sem destino**, pois não existe fluxo correspondente no protótipo.
- Celular/tablet em uma coluna com rolagem vertical; fotos após o formulário e legenda da biblioteca em linha própria abaixo das imagens. No celular, a marca do cabeçalho não se repete dentro do cartão.
- Campos, rótulos, botões, ícones, recortes e ondas são camadas editáveis; as imagens reais são a marca, a biblioteca e o refeitório. A captura completa da interface de referência nunca foi importada como imagem.

A coleção específica **Acesso IFC · referência aprovada** (`VariableCollectionId:208:2`) mantém a paleta de acesso separada da operação. A família Campo (`208:128`) contém 12 variantes de tipo/estado/visibilidade; a família Botão (`208:201`) contém 15 variantes de função/estado. Estados incluem foco, erro e desabilitado nos campos, e foco, desabilitado, carregando e Ao passar o cursor nos botões. Tipografia, cores e componentes dos demais módulos permanecem existentes.

## Quadros e capturas

| Amostra | Quadro Figma | Captura local |
| --- | --- | --- |
| 1920 × 1080 | [211:1345](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=211-1345) | [Computador amplo](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-1920x1080.png>) |
| 1440 × 900 | [5:2](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=5-2) | [Computador](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-1440x900.png>) |
| 1366 × 768 | [211:1491](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=211-1491) | [Notebook](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-1366x768.png>) |
| 1024 × 768 | [211:1637](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=211-1637) | [Computador compacto](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-1024x768.png>) |
| 768 × 1024 | [211:3173](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=211-3173) | [Tablet](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-768x1024.png>) |
| 375 × 812 | [211:3308](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=211-3308) | [Celular](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-375x812.png>) |

[Conteúdo móvel integral após a correção da legenda, 375 × 1079 px](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/previews/referencia-mobile-completo.png>). Os quadros são amostras de projeto; não demonstram breakpoints CSS ou comportamento em todas as larguras.

Os logins existentes mantiveram os IDs `5:2`, `5:30` e `5:58` no computador; `8:1663`, `8:1691` e `8:1719` no móvel; e `23:1085` na amostra de 360 px. A amostra de 1440 × 900 reutiliza o login `5:2`; as outras cinco amostras da tabela foram acrescentadas.

## Verificação e limites

Os registros `reference-login-*-success-2026-11-11.json` e `reference-responsive-*-success-2026-11-11.json` em `.design/` registram preservação dos destinos NAVIGATE antes/depois. O teste do olho pelas propriedades do componente demonstrou `••••••••` → `SenhaDeExemplo2026` → `••••••••`, com a variante visível `208:53` dentro da mesma família. Esse teste usa conteúdo predefinido e não comprova digitação livre, teclado real ou autenticação.

A auditoria final abrangeu 12 quadros e registrou pares de campos com alturas equivalentes, zero transbordamentos horizontais e zero destinos ausentes nos critérios inspecionados. Todos os hashes de imagem encontrados pertencem à marca, biblioteca ou refeitório; Acesso externo não tem NAVIGATE em nenhum quadro auditado. Evidências: [computador](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/reference-final-audit-computador-2026-11-11.json>), [móvel/tablet](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/reference-final-audit-movel-2026-11-11.json>) e [teste de senha](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/reference-password-test-2026-11-11.json>).

A revisão visual encontrou uma legenda parcialmente coberta por outra fotografia na adaptação móvel. A correção a colocou em linha própria 8 px abaixo das fotos em todos os quadros móveis e de tablet. O revisor confirmou a resolução e aprovou o escopo examinado. [Registro da correção](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/reference-caption-fix-2026-11-11.json>).

Diferenças conhecidas: a arquitetura e a folhagem de fundo são recortes desaturados da foto fornecida, diferentes da fachada multipisos da referência. A diagonal do refeitório termina acima da construção para conservar sua extremidade esquerda, fachada e vidros. A marca repetida do cartão é omitida no celular. Essas adaptações estão documentadas no parecer e não foram apresentadas como reprodução literal do cenário.

O protótipo não comprova backend, envio real, integração institucional, persistência, leitor de tela, teclado real ou conformidade WCAG. Não há build web aplicável a essa entrega nativa.

A aprovação citada é da revisão visual independente. O comparador automático de fidelidade do Impeccable não foi concluído e recusou o encerramento automático como ship; esse controle ficou registrado como fix. Não se declara reprodução 100% fiel nem aprovação automática de pixels.

## Fontes e documentação

Arquivos principais criados: `assets/institucional/refeitorio-videira.jpg`, `.design/reference-library-2026-11-11.js`, `.design/reference-login-2026-11-11.js`, `.design/reference-fix-2026-11-11.js`, `.design/reference-field-scale-fix-2026-11-11.js`, os registros de validação e as capturas indicadas acima. Documentação modificada: `DESIGN.md`, `UX-CONTRACT.md`, `assets/institucional/FONTES.md` e `.impeccable/design.json`. Este relatório e o parecer independente também foram criados para a entrega.

- [Fontes dos ativos](<C:/Users/User/Documents/ChatGPT/Figma portaria/assets/institucional/FONTES.md>): marca e biblioteca reutilizadas; refeitório obrigatório a partir de `ifc-videira-scaled-1.jpg`, fornecido pelo usuário e copiado para `assets/institucional/refeitorio-videira.jpg`.
- [Sistema visual](<C:/Users/User/Documents/ChatGPT/Figma portaria/DESIGN.md>): Layout e tokens `auth-*` atuais, mantendo a história anterior e as regras dos demais módulos.
- [Contratos de interação](<C:/Users/User/Documents/ChatGPT/Figma portaria/UX-CONTRACT.md>): ações, estados e limites demonstrados.
- [Registro da biblioteca de acesso](<C:/Users/User/Documents/ChatGPT/Figma portaria/.design/reference-library-state-2026-11-11.json>) e [sidecar de documentação](<C:/Users/User/Documents/ChatGPT/Figma portaria/.impeccable/design.json>): metadados da nova família. O sidecar v2 recebeu extensões específicas de autenticação; seus snippets históricos não constituem aplicação web nem foram regenerados para criar HTML da nova entrada.
