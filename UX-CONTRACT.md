# Contratos de interação

Protótipo nativo de Figma, com dados e entradas predefinidos. Não é sistema web executável. O plano v3.2/X08 orienta as telas; decisões institucionais permanecem abertas.

- Navegação global consistente por perfil. Administração técnica não concede competência de negócio. Papéis acumuláveis dependem de concessão explícita.
- Botão primário conclui a etapa nomeada; secundário retorna ou cancela. Ações destrutivas exigem confirmação e justificativa.
- Cabeçalho persistente; área central rolável. Ações de fluxo no rodapé fora da região rolável.
- Rascunhos e devolvidas admitem edição. Em validação, texto bloqueado; variante D04-A permite ajuste departamental em painel próprio, com nova revisão, diferenças e revalidação. D04-B devolve ao autor.
- Congelamento antes da assinatura; arquivo anexado passa por verificação. Ato assinado não é sobrescrito.
- Publicação por canal; datas de assinatura, publicação, vigência, efeito e evidência distintas. Marcadores futuros não antecipam efeitos.
- Comunicação enviada, alternativa e exceção são resultados separados. Descartar aviso não conclui tarefa.
- Cadastro inativo preserva histórico. Afastamento exige avaliação, não bloqueio automático.
- Navegação com dissolução de 220 ms, abas com Smart Animate de 220 ms e campos/estados entre 150–180 ms. Menu móvel entra lateralmente em 240 ms; Fechar retorna à tarefa de origem. Hover explícito nos botões desktop em 150 ms, com retorno em 120 ms. A implementação web deve respeitar preferência de movimento reduzido; o protótipo não comprova essa preferência em execução.
- Nova solicitação preserva o perfil de origem em todas as sete etapas. O Gabinete usa variantes próprias com menu completo; o docente mantém suas telas e destinos. A mudança de etapa não troca a identidade da conta nem remove módulos do menu.
- Abas locais permanecem disponíveis entre vistas do mesmo módulo, com seleção correspondente ao conteúdo. Informações de Pendências não abre Notificações. O destino mantém o ato e o perfil selecionados; a aba atual não regride de assinado para minuta.
- Autenticação atual (referência de 11/11/2026): ações empilhadas no cartão branco; cabeçalho com marca oficial proporcional, divisor e Gestão institucional de portarias. Inter nos títulos e Roboto no corpo; paleta e componentes próprios de acesso, sem alterar os demais módulos. No celular, a marca fica no cabeçalho, o formulário precede as fotos e a legenda da biblioteca fica em linha própria após as imagens. Tablet/móvel conservam rolagem vertical.
- Registro histórico — refinamento de 10/11/2026: botões de ação da autenticação têm 48 px de altura e rótulos centralizados na largura útil. Opções de recuperação e acesso institucional mantêm alvos de pelo menos 44 px. O celular usa 24 px de margem lateral; as telas longas conservam rolagem vertical. Ações de documento ficam empilhadas para evitar transbordamento horizontal. Traduções de nomes de camadas e variáveis preservam IDs e destinos existentes.
- Registro histórico — correção de proporções de 11/11/2026: a autenticação usa campos e botões de 48 px com texto de 16 px, pela família Campo de acesso e estilos próprios. Esqueci minha senha fica junto da senha, antes da ação Entrar; Acesso institucional é um botão secundário de contorno após Entrar. A reorganização preserva os IDs das ações, seus destinos e os valores/estados demonstrados.
- A referência atual aplica-se aos logins vazio, preenchido e com erro; recuperação e redefinição conservam as telas existentes.
- Referência atual: campos de 52 px e botões de 55 px na base de 1586 × 992 px, escalados nas amostras de computador com piso de 44 px; no celular/tablet, 48 px. Famílias Campo `208:128` e Botão `208:201` demonstram estados. O olho alterna texto predefinido por propriedades/variantes; não comprova entrada livre. As regras atuais de entrada substituem os dois registros históricos acima. A decisão de níveis a seguir substitui os destinos históricos de Acesso institucional e Acesso externo.
- Teclado, leitor de tela, ARIA, persistência, concorrência, validação de CPF, PDF acessível e serviços dependem da implementação. Figma demonstra estados e relações, não comprova esses contratos em execução.

## Contrato vigente — 15/11/2026

Esta seção prevalece sobre apresentações históricas de entrada e relatórios abaixo. O pedido atual está em `.design/nov15/PEDIDO_IMPLEMENTACAO_VALIDACAO.md`.

- Entrada única; sem indicação de níveis antes da autenticação e sem Escolher outro acesso. Demonstração opcional por quatro pessoas fictícias; credenciais próprias predefinidas. Nível/perfil aparece após Entrar. Não há mudança da matriz de autorização.
- Operação3 e Direção4 preservam suas identidades nos novos painéis e relatórios. Servidor2 vê seus próprios acompanhamentos; contas externas1 acompanham publicações. Administração técnica mantém trilha técnica.
- Panorama, Tramitação, Pendências e Servidores usam navegação local consistente. No celular, cinco abas ocupam duas linhas; filtros aplicados aparecem resumidos com Ajustar filtros. A geração do relatório antecede a lista longa de KPIs.
- O dicionário contém 32 indicadores com unidade, base e denominador. Realizado e concluído são a mesma contagem nesta amostra; encerramento é uma dimensão de ato. Devolução não é rejeição; cancelamento de projeto não é revogação.
- Gráficos nativos têm tabela equivalente; linhas/área têm referências numéricas e séries identificadas. Pizza/rosca são requisitos expressos de 15/11. Base anterior zero recebe diferença absoluta, sem percentual infinito. Sem conclusão no período, a média é Não disponível.
- Filtros de estatísticas são recortes predefinidos. Relatórios têm9 recortes × 3 períodos. Seleção, indicadores, gráfico, comparação e detalhes usam o mesmo recorte; mudar o período preserva o filtro. Condições persistidas foram verificadas, usando condições independentes compatíveis com o Figma.
- Marcar avisos como lidos preserva tarefas. Acompanhamento vincula o ID selecionado a estado, etapa, situação do ato, responsável, setor, motivo, ação, último evento, histórico e próximas etapas. Seis marcos obrigatórios sustentam o progresso; revisão pode ser reaberta. Rejeitados/cancelados não recebem percentual aplicável.
- Texto, Participações e Prévia ficam disponíveis nos três conteúdos. Revisão04 não perde seus membros; revisão 05 não restaura a presidência removida ao alternar. Desktop e móvel usam os mesmos artigos 1–3, horas e data de entrada em vigor. Prévia dentro do editor permanece minuta.
- A prévia do relatório tem cinco páginas, anterior/próxima, edição do recorte e aviso honesto de exportação. No móvel, Ler em texto ampliado oferece o conteúdo a 16 px, com paginação e retorno à mesma origem/página A4. Nenhum PDF real é gerado.
- Estas relações foram examinadas por leitura/interpretação das ações e variáveis persistidas. Não equivalem a cliques, rolagem ou execução de autenticação. A automação de interface não iniciou no ambiente (kernel assets/os error 3). A validação funcional por cliques fica pendente.
- O veredito visual independente `ship` de 15/11 cobre somente as correções F01–F05, todas resolvidas nas 53 recapturas finais; não é aprovação irrestrita do sistema. Ver `.impeccable/review/nov15/veredito.md`.

## Registro histórico — três níveis em 11/11/2026

O agrupamento e a entrada única de servidores desta seção foram substituídos pela decisão de quatro níveis e quatro logins registrada a seguir. As evidências desta seção pertencem à etapa anterior.

- O botão Acesso institucional foi removido das telas operacionais. Servidores dos níveis 2 e 3 usam a entrada normal; a origem técnica de autenticação não constitui uma segunda opção de login.
- Acesso externo abre uma tela própria com nível 1. O percurso demonstrado inclui credenciais predefinidas, erro de acesso, recuperação e redefinição próprias, consulta de portarias publicadas, detalhe, documento público e Minha conta externa. Voltar ao acesso de servidores retorna à entrada; não concede uma sessão interna.
- Nível 1 não recebe módulos ou rotas de solicitações, elaboração, validação, assinatura, cadastros, relatórios internos ou administração. Documentos de divulgação omitem CPF completo, endereço, telefone e e-mail cadastral.
- Nível 2 conserva as restrições por função do plano: docentes e técnicos consultam e solicitam; Gabinete/CGP operam os atos no escopo concedido; DEPE/DAP validam apenas seu departamento; administrador técnico administra contas, configurações e auditoria sem competência automática para atos de negócio.
- Nível 3 é exclusivo da Direção-Geral e do Vice-Diretor autorizado, com todos os módulos e funções. O período e o ato de autorização do Vice continuam explícitos. Nenhum outro cargo de direção recebe nível 3 pela hierarquia do cargo.
- O nível aparece na identificação da conta em computador, no cabeçalho móvel e na administração de perfis. O catálogo Perfis e níveis explica o alcance de cada função; nível não é uma escolha disponível na entrada.
- O protótipo mantém o nome, o papel e o nível de gestão ao navegar da Direção ou do Vice para módulos compartilhados, por variáveis de demonstração. Sair restaura a entrada sem a sessão de gestão. Encaminhar um documento para assinatura com nível 2 abre Aguardando assinatura, sem assumir o perfil do signatário.
- A verificação do nível e a escolha entre Direção-Geral e Vice ocorrem em duas etapas condicionais de dois ramos, com quadros intermediários de transição automática. Essa separação respeita os ramos efetivamente persistidos pelo Figma. Os 16 cenários avaliados em `.design/levels-navigation-tests-2026-11-11.json` verificam a espera do servidor, os dois signatários, a continuidade do Vice e a consulta externa nas duas classes de tela; são testes dos dados de navegação do protótipo, sem validação de autenticação real.
- Permissão total não altera versões assinadas, apaga histórico ou dispensa a competência vigente para assinar. Restrições de acesso e sessão precisam de verificação no servidor em uma futura implementação.

## Registro histórico — quatro níveis e quatro logins de 11/11/2026

- A tela inicial Escolha seu acesso abre quatro formulários distintos, identificados pelo nível e pelo público. Selecionar uma entrada não altera a autorização da conta. Acesso institucional permanece removido.
- Login 1: conta externa, somente consulta de portarias publicadas e documentos de divulgação. Mantém recuperação e área de consulta próprias.
- Login 2: servidores docentes/técnicos, DEPE/DAP e administrador técnico. Cada perfil mantém suas restrições de função, departamento e etapa. Sem elaboração direta de portarias; a administração técnica continua restrita às suas atribuições.
- Login 3: Gabinete e Gestão de Pessoas (CGP/DGP). Elaboração, tramitação, validação quando autorizada, registro de publicação e comunicação conforme escopo. Sem assinatura ou configuração automática.
- Login 4: Direção-Geral e Vice-Diretor autorizado. O usuário confirmou acesso total, inclusive elaboração. A autorização e o período do Vice permanecem explícitos.
- Cada login tem estados vazio, preenchido e com erro; o nível 4 também demonstra credenciais próprias do Vice. Os exemplos predefinidos levam, respectivamente, à consulta externa, área docente, Gabinete e gestão. As entradas não transformam uma conta de servidor em conta da Direção.
- Escolher outro acesso retorna à seleção inicial. Sair retorna ao login correspondente ao nível; uma sessão de gestão mantém o nível 4 ao navegar em módulos compartilhados e ao sair. A recuperação interna retorna à escolha de acesso após a redefinição; não assume outro perfil.
- Os badges, as contas da administração, o catálogo de perfis, o guia e os fluxos nomeados do Figma usam a escala 1–4. Gabinete/CGP passam ao nível 3; DG/Vice passam ao nível 4. A assinatura continua protegida pela condição de gestão e pelos percursos de dois ramos já documentados.
- Os formulários e permissões são demonstrações nativas do Figma com dados predefinidos. Autenticação, rejeição efetiva de uma conta em entrada incompatível e autorização por operação dependem do backend da futura aplicação.

## Estatísticas e relatórios — contrato do protótipo v1.1

- O módulo estende os itens existentes de navegação. Início prioriza o papel; Relatórios concentra painel, catálogo, consultas, configuração e prévias; Vencimentos e Servidores conservam suas listas/cadastros e ganham acesso à visualização analítica.
- Data de referência, período, critério de data, filtros e base de registros são explícitos. O cenário demonstra R = 11/11/2026 e cálculo às 17:00 no fuso America/Sao_Paulo. Datas civis de vigência não são convertidas em instantes.
- Publicado conta por ato distinto e pela publicação de referência. As seis situações são exclusivas e somam os publicados. Registros em produção ficam separados. Atualizadas e revogações parciais são sobrepostas e ficam fora da soma. Evento futuro não antecipa efeito; evento retroativo altera a reconstrução conforme a base de registros.
- Horas são semanais atribuídas. Participação conta somente quando sua data e a vigência do ato incluem R. A soma do servidor é informativa; exatamente 10 h por participação docente administrativa é permitido.
- O contêiner compartilhado demonstra Com dados, Sem registros, Carregando, Erro com nova tentativa, Acesso restrito e Dados desatualizados. O último informa a base válida anterior; indisponibilidade nunca é representada por zero.
- Visualizações têm pergunta, título, unidade, legenda por rótulos e tabela equivalente. A alternância gráfico/tabela é um percurso de variantes; a metodologia acompanha os indicadores. Agregados abrem consultas com o recorte correspondente. Consultas e paginação usam entradas predefinidas; busca livre, ordenação arbitrária, cabeçalho de tabela fixo em execução e atualização periódica dependem da implementação.
- Conta externa não recebe percursos analíticos. Servidor conserva dados próprios e R2 individual próprio. DEPE conserva identificação e nível ao navegar; relatórios de outros departamentos restringem identificação nominal até D16. O R2 aberto a partir das horas da DEPE conserva 7 participações e 25 h. Administração técnica não recebe conteúdo, prévias ou indicadores de negócio.
- Configuração e prévias PDF são demonstradas no computador. No celular, a orientação para usar o computador mantém o perfil de origem; consultas continuam disponíveis. Linhas e Gantt viram listas; gráficos móveis usam barras simples.
- R1–R5 têm prévias A4, paginação e cabeçalho de tabela por página, marca Dados demonstrativos, referência, filtros, critérios e base de registros. Não incluem CPF, telefone, endereço ou e-mail. R2 próprio mantém somente S01; a variante consolidada não é oferecida ao servidor comum.
- Hipóteses em homologação aparecem junto da interpretação analítica, como exige o plano v1.1; esta é a exceção específica à regra geral de manter decisões de projeto fora das telas operacionais. D25 não elimina CSV sem homologação; D26 não permite classificar atrasos; D27 ainda define retenção.
- Geração e download reais devem autorizar novamente por nível, papel e escopo, usar o mesmo serviço de métricas e registrar autor, momento, modelo, filtros e R. Os registros atuais são fictícios. Contrato preparatório e verificações estão em `.design/statistics-data-contract.json` e `ENTREGA_ESTATISTICAS_RELATORIOS_2026-11-11.md`.

## Direction contract

THESIS: tornar o estado do ato e a próxima ação claros no trabalho institucional.
OWN-WORLD: operação com verde sóbrio, branco, Source Sans 3, documentos tipográficos e ícones lineares; autenticação com a referência fornecida, Inter/Roboto, cartão branco, recortes diagonais e ondas vetoriais.
STORY: a demanda vira minuta; competências validam; direção assina; operador publica e resolve comunicação; servidor acompanha.
FIRST VIEWPORT: menu lateral e contexto desktop, tarefa principal e fila. No celular, menu recolhido, uma coluna e barra de ações fixa.
FORM: espaço documental de operação conforme direção visual do plano; autenticação conforme a referência raster fornecida pelo usuário em 11/11/2026, reconstruída em camadas editáveis. A captura completa da interface não é importada como imagem.
FINISH: unreviewed and undocumented is unfinished.

## Verificação da referência de 11/11/2026

Revisão independente: ship limitado à fidelidade, proporções, enquadramento e cortes das amostras examinadas, com a sobreposição da legenda móvel resolvida. Parecer em `.impeccable/review/referencia-2026-11-11.md`; entrega em `ENTREGA_REFERENCIA_FIGMA_2026-11-11.md`. A arquitetura e folhagem de fundo foram adaptadas com recortes desaturados da foto fornecida, diferentes da fachada da referência. Não há validação de build, backend, teclado real ou conformidade WCAG.

O complemento visual de 15/11 inspecionou os demais gráficos/tabelas móveis e a navegação de Avisos pública: total 217 capturas. Avisos fica na barra móvel da conta externa, mantendo somente atos publicados. Doze verificações interpretadas confirmam acesso às respectivas notificações dos quatro perfis D/M e os escopos próprio/público; não são cliques nem autorização real. Ver complemento.md e role-notifications-final.json na pasta de evidências.

## Correção vigente — Assinaturas, Administração e menu — 15/11/2026

- Assinaturas é fila documental própria, com Conferir e assinar para o gateway DG/Vice existente; Administração é a entrada de Contas, Signatários, Configurações e Auditoria. Minha conta mantém conteúdo próprio de DG, Vice e administração técnica, sem assumir Marina/Gabinete. A conta técnica permanece nível 2 e não recebe competência de negócio.
- Sidebar conserva ordem, ícones e seleção correspondente ao módulo. Início fora da Home nas 45 novas telas desktop DG foi verificado por interpretação das reações. Menu móvel tem alvos de pelo menos 44 px e Fechar com `BACK`; menu genérico sem seleção indevida, com ordem técnica Início, Notificações, Administração, Minha conta.
- Os reparos processaram 420 quadros desktop e controles em 420 quadros móveis; isso não equivale a cobertura visual integral. As verificações registram 10.042 assertivas interpretadas sem falhas (9.937 desktop + 87 móveis + 18 críticas posteriores), no cenário de gestão. Não houve cliques/rolagem reais: a automação não iniciou (kernel assets/os error 3). Autorização efetiva depende da aplicação futura.
- O parecer final é **ship limitado às correções F01–F03**, resolvidas em cinco recapturas após a revisão inicial de 15 capturas; sem aprovação integral do sistema. A retirada do exemplo duplicado 129 da nova fila deixa o exemplo 128 com seu percurso próprio e não altera atos reais. Detalhes: `CORRECAO_ASSINATURAS_ADMINISTRACAO_MENU_2026-11-15.md` e `.impeccable/review/menu-repair/verdict.md`.
