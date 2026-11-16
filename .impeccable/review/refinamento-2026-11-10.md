# Refinamento da entrada e adaptação móvel — 10/11/2026

Modo da superfície: Operate. Direção preservada: mesa de trabalho institucional, identidade IFC, Source Sans 3, verde institucional, superfícies claras e profundidade por contorno.

Pedido atendido no arquivo Figma `yHEP1gOormT6A2nBhLhT3b`: traduzir os nomes em inglês mostrados nas camadas, ajustar proporções móveis e melhorar a tela inicial de acesso usando Impeccable.

## Alterações

- 217 quadros para computador e 221 para celular com nomes em português. Perfis, estados e amostras de largura continuam identificáveis.
- Ícones, formas, amostras de cores, variáveis e estado Ao passar o cursor traduzidos. IDs e valores preservados.
- 12 telas de autenticação para computador e 13 móveis refinadas, incluindo recuperação, erros e amostra de 360 px.
- Cartão de acesso de 448 px no computador, coluna institucional de 500 px, intervalo de 64 px e composição centralizada quando cabe.
- Celular em uma coluna, margens de 24 px, marca com proporção preservada, ações antes da fotografia, botões de 48 px e opções auxiliares de pelo menos 44 px.
- Vinte transbordamentos horizontais identificados e corrigidos: entradas em formulários de vencimentos e ações de documentos. Conteúdo longo mantém rolagem.

## Evidência

Foram feitas duas rodadas delimitadas de inspeção visual. A primeira cobriu acesso em computador, acesso móvel de 390 e 360 px, recuperação móvel e documento normativo móvel. O defeito de quebra indevida nos rótulos dos botões de recuperação foi corrigido em lote. A confirmação cobriu os acessos e a recuperação nas duas classes de dispositivo; os rótulos passaram a ocupar a largura útil e a marca móvel passou a assentar sobre superfície branca.

Leitura de fontes no acesso: exclusivamente Source Sans 3. Documento normativo: Source Sans 3 para interface e Carlito para o documento. As duas imagens no acesso são somente a marca oficial e a fotografia da biblioteca; o restante permanece em quadros, instâncias e texto editáveis.

Auditoria final nos 438 quadros: 4.154 reações para computador e 1.862 móveis, sem destinos NAVIGATE ausentes entre os quadros das respectivas páginas. Nenhum transbordamento horizontal de quadro/instância foi encontrado pelo critério `x + largura > largura do pai` em contêineres de layout automático. Nenhum dos identificadores técnicos em inglês procurados foi encontrado nos nomes das páginas de aplicação. Nenhum rótulo de botão das telas de autenticação excede a largura ou altura do botão.

As reações antes/depois da primeira edição de cada lote são idênticas. As correções posteriores não alteraram reações. A auditoria confirma integridade dos destinos, sem alegar execução de todos os caminhos.

## Arquivos de reprodução e registros

- `.design/refine-entry-2026-11-10.js`: tradução e refinamento inicial, por página e lote.
- `.design/entry-layout-fix-2026-11-10.js`: restauração do crescimento natural dos contêineres e ações de documento empilhadas.
- `.design/auth-final-fix-2026-11-10.js`: ajuste dos rótulos e acabamento da superfície móvel.
- `.design/desktop-final-audit-2026-11-10.json` e `.design/mobile-final-audit-2026-11-10.json`: auditorias finais.
- Os resultados de cada lote registram os IDs alterados e os nomes anteriores dos quadros.

Conclusão: pronto no escopo visual e estrutural revisado. A entrega é um protótipo nativo Figma; edição livre de campos, autenticação real, teclado, leitor de tela e backend não foram verificados.
