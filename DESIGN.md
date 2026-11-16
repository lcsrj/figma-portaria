---
name: "Gestor de Portarias — IFC Campus Videira"
description: "Ambiente institucional de operação documental, com estado e próxima ação explícitos."
colors:
  bg: "#F4F6F8"
  surface: "#FFFFFF"
  ink: "#1D2935"
  muted: "#52616D"
  primary: "#23633B"
  hover: "#194E2D"
  tint: "#EAF3EC"
  border: "#D7DFE3"
  fieldBorder: "#81919B"
  warn: "#805800"
  warnBg: "#FFF3D6"
  error: "#B3261E"
  errorBg: "#FCECEB"
  blue: "#245B83"
  blueBg: "#EBF2F8"
  auth-verde-escuro: "#004225"
  auth-verde: "#009B26"
  auth-verde-hover: "#006539"
  auth-verde-claro: "#A4DC65"
  auth-texto: "#344158"
  auth-borda: "#758097"
  auth-papel: "#FFFFFF"
  auth-erro: "#B3261E"
  auth-foco: "#245B83"
  auth-divisoria: "#CFD5DC"
  grafico-categoria1: "#23633B"
  grafico-categoria2: "#245B83"
  grafico-categoria3: "#75519A"
  grafico-categoria4: "#805800"
  grafico-categoria5: "#52616D"
  grafico-sequencial1: "#617D6C"
  grafico-sequencial2: "#4C6D59"
  grafico-sequencial3: "#385C47"
  grafico-sequencial4: "#23633B"
  grafico-sequencial5: "#194E2D"
  grafico-alerta: "#805800"
  grafico-critico: "#B3261E"
typography:
  auth-display-base:
    fontFamily: "Inter"
    fontSize: "88px"
    fontWeight: 800
    lineHeight: "84px"
  auth-title-base:
    fontFamily: "Inter"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "48px"
  auth-body-base:
    fontFamily: "Roboto"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "26px"
  auth-label-base:
    fontFamily: "Roboto"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "26px"
  auth-action-base:
    fontFamily: "Roboto"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: "28px"
  title-desktop:
    fontFamily: "Source Sans 3"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "44px"
  title-mobile:
    fontFamily: "Source Sans 3"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "38px"
  body:
    fontFamily: "Source Sans 3"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "23px"
  control:
    fontFamily: "Source Sans 3"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "22px"
  document-normative:
    fontFamily: "Carlito"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "22.4px"
  document-personal:
    fontFamily: "Source Serif 4"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "23px"
  estatisticas-secao:
    fontFamily: "Source Sans 3"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "29px"
  estatisticas-corpo:
    fontFamily: "Source Sans 3"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "23px"
  estatisticas-legenda:
    fontFamily: "Source Sans 3"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "19px"
  estatisticas-valor:
    fontFamily: "Source Sans 3"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "40px"
rounded:
  auth-card-base: "36px"
  auth-field-base: "9px"
  auth-button-base: "12px"
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  s4: "4px"
  s8: "8px"
  s12: "12px"
  s16: "16px"
  s24: "24px"
  s32: "32px"
  s40: "40px"
  s48: "48px"
components:
  auth-button-enter-base:
    backgroundColor: "{colors.auth-verde-escuro}"
    textColor: "{colors.auth-papel}"
    typography: "{typography.auth-action-base}"
    rounded: "{rounded.auth-button-base}"
    height: "55px"
  auth-button-enter-hover-base:
    backgroundColor: "{colors.auth-verde-hover}"
    textColor: "{colors.auth-papel}"
    typography: "{typography.auth-action-base}"
    rounded: "{rounded.auth-button-base}"
    height: "55px"
  auth-field-base:
    backgroundColor: "{colors.auth-papel}"
    textColor: "{colors.auth-texto}"
    typography: "{typography.auth-body-base}"
    rounded: "{rounded.auth-field-base}"
    height: "52px"
  auth-card-base:
    backgroundColor: "{colors.auth-papel}"
    textColor: "{colors.auth-texto}"
    rounded: "{rounded.auth-card-base}"
    width: "558px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.hover}"
    textColor: "{colors.surface}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0px 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0px 20px"
    height: "44px"
  button-quiet:
    textColor: "{colors.primary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0px 20px"
    height: "44px"
  button-destructive:
    backgroundColor: "{colors.error}"
    textColor: "{colors.surface}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0px 20px"
    height: "44px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px"
  status-current:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  nav-selected:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  estatisticas-conteiner:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.s24}"
  estatisticas-indicador:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.estatisticas-valor}"
    rounded: "{rounded.lg}"
    padding: "{spacing.s16}"
  estatisticas-linha:
    textColor: "{colors.ink}"
    typography: "{typography.estatisticas-corpo}"
    padding: "8px 0px"
---

# Design System: Gestor de Portarias — IFC Campus Videira

## Overview

**Creative North Star: "Mesa de trabalho institucional"**

O sistema torna o estado do ato e a próxima ação claros no trabalho institucional. A direção é diurna, sóbria e documental: verde contido, superfícies brancas, linhas finas e hierarquia tipográfica explícita sustentam o uso prolongado em computador e a consulta móvel.

A identidade aparece no contexto IFC Campus Videira, na precisão do conteúdo e na navegação por competência. A densidade atende tarefas e registros; documentos recebem espaço de leitura e ações permanecem identificáveis. Ilustrações decorativas não são necessárias ao ambiente de operação. Esta consolidação substitui a semente provisória com os valores da entrega Figma Design, sem converter o projeto em código web.

**Key Characteristics:**

- Operação institucional sóbria e diurna.
- Estado textual e próxima ação explícitos.
- Tipografia documental e ícones lineares consistentes.
- Componentes editáveis e adaptação móvel por tarefa.

Fonte dos valores: frontmatter deste arquivo, extraído de `.design/final-state.json` e das definições locais que produziram o [Figma Design](https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b). O mapa de 23/10 está em `.design/routing-hotfix-state.json`; o registro da etapa de 28/10 está em `.design/motion-hotfix-state.json`, com 217 quadros desktop e 221 móveis. Em conflito com scripts anteriores, prevalecem as correções mais recentes de navegação, shell e movimento documentadas em `.design/hotfix-request-shell.js` e `.design/hotfix-motion.js`, sobre as correções anteriores de rotas, imagens e continuidade. A direção institucional e os requisitos funcionais vêm de `PRODUCT.md`, do plano v3.2/X08 e do Direction contract em `UX-CONTRACT.md`.

A atualização do login de 11/11/2026 reproduz a referência fornecida pelo usuário no arquivo Figma existente. Os tokens `auth-*` e a coleção **Acesso IFC · referência aprovada** são específicos dessa composição; não substituem tokens, tipografia ou componentes dos demais módulos. O registro atual é `ENTREGA_REFERENCIA_FIGMA_2026-11-11.md`.

A extensão vigente de 15/11/2026 preserva essa direção e a matriz de quatro níveis: a entrada é única, sem nível antes da autenticação e sem Escolher outro acesso. Uma área opcional oferece quatro contas fictícias (usuário externo, Helena Martins, Marina Costa e Eduardo Almeida), com credenciais próprias predefinidas. Perfil e nível aparecem após Entrar; escolher uma demonstração não concede permissões. A apresentação de quatro logins de 11/11 é histórica e foi substituída; os escopos permanecem os de `PRODUCT.md` e do contrato vigente em `UX-CONTRACT.md`.

A extensão vigente de Estatísticas e Relatórios de 15/11/2026 mantém os tokens operacionais e amplia o cenário para 32 indicadores e 12 gráficos nativos, com dados demonstrativos em `.design/nov15/data.json`. O pedido explícito em `.design/nov15/PEDIDO_IMPLEMENTACAO_VALIDACAO.md` exige pizza e rosca e prevalece sobre a restrição histórica do plano de 11/11. A coleção analítica e as famílias anteriores continuam documentadas; os IDs desta etapa estão em `.design/nov15/state.json`. O dicionário de 24 métricas, as 18 visualizações e a documentação da página `288:2` pertencem à etapa histórica de 11/11 e não descrevem a ampliação atual.

## Colors

A paleta combina verde institucional sóbrio, neutros frios e cores semânticas de informação, atenção e erro. As chaves preservam o mapeamento das variáveis Figma.

### Primary

- **Verde institucional — `primary`:** próxima ação e identificação institucional.
- **Verde de interação — `hover`:** variante hover do botão primário.
- **Verde de seleção — `tint`:** navegação selecionada e situação em vigor.

### Secondary

- **Azul de informação — `blue` / `blueBg`:** informação, validação e assinatura em verificação; o azul também distingue o foco.

### Tertiary

- **Âmbar de atenção — `warn` / `warnBg`:** vigência futura, publicação parcial e alertas que exigem avaliação.
- **Vermelho de erro — `error` / `errorBg`:** erro contextual, devolução e intenção destrutiva.

### Neutral

- **Plano de trabalho — `bg`:** fundo da aplicação e estados neutros.
- **Papel — `surface`:** cartões, cabeçalhos, campos e documentos.
- **Tinta — `ink`:** texto principal.
- **Texto de apoio — `muted`:** contexto e metadados.
- **Divisória — `border`:** separação de superfícies e linhas de tabela.
- **Contorno de campo — `fieldBorder`:** limite da entrada padrão; não substituir pela divisória suave. O hexadecimal final normaliza o RGB Figma aproximado (0.506, 0.569, 0.608).

Na autenticação conforme referência, `auth-verde-escuro` organiza título e ação Entrar; `auth-verde` aparece nos acentos e contornos; `auth-verde-hover` identifica o estado sob o cursor; `auth-verde-claro` compõe os detalhes decorativos. Texto, campo, papel, erro, foco e divisória usam seus tokens `auth-*`. Ondas vetoriais preservam as cores decorativas da composição sem redefinir a paleta operacional.

**The Estado Legível Rule.** Cor deve acompanhar conteúdo: toda situação recebe um rótulo textual inequívoco. Revogada e Rascunho podem compartilhar neutros; seus textos devem distingui-las.

### Gráficos analíticos

Os tokens `grafico-*` pertencem somente à coleção **Estatísticas · gráficos** (`VariableCollectionId:278:2`). As cinco categorias distinguem séries sem situação semântica: verde institucional, azul de informação, violeta contido, âmbar e neutro frio. A sequência `sequencial1`–`sequencial5` ordena intensidade do verde mais claro ao mais escuro. `grafico-alerta` e `grafico-critico` conservam atenção e criticidade. Os valores normativos estão no frontmatter; os IDs e a sintaxe WEB estão no sidecar.

Na V01, a situação prevalece sobre a sequência categórica: Vigente e Vigente — sem término usam `grafico-categoria1`; Vigência futura usa `grafico-alerta`; Vencida usa `grafico-critico`; Revogada e Encerrada usam `grafico-categoria5`. Rótulos diretos e valores acompanham as marcas. As cores analíticas alcançam pelo menos 3:1 contra branco e o plano de trabalho nos valores registrados; isso não constitui avaliação geral de acessibilidade do protótipo.

**The Gráfico Legível Rule.** Cor não substitui rótulo, unidade ou legenda; dados indisponíveis não viram zero. Manter a mesma situação e o mesmo valor na visualização e na tabela equivalente.

## Typography

**Body Font:** Source Sans 3 para a interface operacional, títulos, controles e navegação existentes.
**Authentication Fonts:** Inter nos títulos e Roboto no corpo, rótulos e ações da composição conforme referência. Os valores `auth-*-base` descrevem a base de 1586 × 992 px; as amostras de computador aplicam escala proporcional. No celular, o título do sistema usa 30/38 px, o título do cartão 26/34 px e campos usam 16/24 px.
**Document Fonts:** Carlito para o espécime normativo; Source Serif 4 nas prévias de atos pessoais. Source Sans 3 permanece nas prévias analíticas R1–R5, inclusive nas páginas A4.

A interface usa pesos para organizar a tarefa; as prévias preservam a leitura contínua. Carlito é a substituição métrica disponível de Calibri no ambiente Figma. Família, modelos e margens oficiais exigem homologação institucional.

### Hierarchy

- **Título desktop — `title-desktop`:** nome da tarefa e contexto principal.
- **Título móvel — `title-mobile`:** mesma hierarquia em largura compacta.
- **Corpo — `body`:** instruções, valores e leitura da interface.
- **Controle — `control`:** ações com rótulos verbais e específicos.
- **Documento normativo — `document-normative`:** corpo do espécime; 16 px correspondem a 12 pt na escala de 96 px por polegada.
- **Documento pessoal — `document-personal`:** texto contínuo das prévias pessoais.

Os estilos analíticos `Estatísticas/Seção`, `Estatísticas/Corpo`, `Estatísticas/Legenda` e `Estatísticas/Valor` correspondem aos tokens `estatisticas-secao`, `estatisticas-corpo`, `estatisticas-legenda` e `estatisticas-valor`. Preservam Source Sans 3 e a hierarquia operacional; seus IDs locais constam no sidecar.

**The Texto Inteiro Rule.** Rótulo e valor devem preencher a largura disponível (`FILL`), quebrar linha e crescer em altura. Campos multilinha devem conservar `HUG`; nunca redimensionar a caixa interna para altura `FIXED` como solução para conteúdo variável.

## Layout

A entrega contém vinte famílias T01–T20 e doze jornadas J01–J12 em camadas nativas editáveis. Desktop de referência em 1440 px e móvel em 390 px; amostras adicionais em 360, 768 e 1280 px verificam composições específicas. São amostras de projeto, não breakpoints CSS nem prova de comportamento entre todas as larguras.

No desktop, a navegação lateral persistente ocupa 232 px e o cabeçalho tem 76 px. No móvel, o menu é recolhido, o cabeçalho tem 72 px e o conteúdo segue uma coluna. A área central rola, com ações de fluxo em rodapé fixo fora da região rolável. Reservar espaço para o rodapé para que o último campo ou registro continue alcançável.

Aplicar a escala de espaçamento do frontmatter em agrupamentos e respiros. Filtros precedem listas. Tabelas desktop tornam-se registros empilhados com rótulos no móvel. Na consulta documental móvel, usar navegação compacta de seções para preservar espaço de leitura.

Login, recuperação e Home com menu são requisitos explícitos das referências recebidas. Preservar contexto IFC e coerência de fontes e ícones nessas entradas. Agrupar formulários por tarefa, apresentar erro junto ao campo e distinguir retorno de conclusão da etapa.

O login atual (vazio, preenchido e com erro) segue a referência recebida em 11/11/2026, substituindo o painel verde e formulário livre anteriores. O cabeçalho reúne marca oficial, divisor vertical e “Gestão institucional de portarias”. No computador, a composição combina título e finalidade à esquerda, fotografias em recortes diagonais abaixo e cartão branco à direita. Na base de 1586 × 992 px, o título Inter Extra Bold usa 88/84 px; o cartão tem 558 px de largura, aproximadamente 824 px de altura no estado padrão, raio de 36 px e título Inter Bold de 40/48 px. A altura acompanha conteúdo e erros. Recuperação e redefinição de senha conservam suas telas existentes. Ondas e recortes são vetores editáveis; apenas marca e fotografias são imagens.

Campos têm entrada de 52 px e botões 55 px na base. Nas amostras de computador, a escala considera largura e altura, com piso de 44 px para controles; no celular/tablet, as entradas e botões têm 48 px. Não aplicar esses valores aos campos operacionais existentes. A entrada unificada (`5:2` no computador e `8:1663` no móvel) preserva Usuário, Senha com alternância de visibilidade, Esqueci minha senha e Entrar, com estados predefinidos vazio, preenchido e erro e demonstração opcional de quatro contas fictícias. Sem níveis na apresentação principal, sem Escolher outro acesso e sem Acesso institucional. Recuperação e redefinição conservam suas telas. As quatro entradas e os 13 estados por classe documentados em 11/11 são evidência histórica substituída por esta decisão.

Amostras atuais: 1920 × 1080, 1440 × 900, 1366 × 768, 1024 × 768, 768 × 1024 e 375 × 812 px. São quadros Figma, não breakpoints implementados. Em 768 px e nas larguras móveis, a composição segue uma coluna e conserva rolagem vertical. No celular, a marca aparece no cabeçalho e não se repete no cartão; o formulário precede as fotos. A legenda “Biblioteca - Campus Videira” ocupa linha própria abaixo das fotografias no celular e tablet para evitar sobreposição. A foto obrigatória do refeitório preserva a construção à esquerda, a fachada e os vidros: sua diagonal termina acima da construção. As fontes estão em `assets/institucional/FONTES.md`.

A arquitetura e a folhagem de fundo usam recortes desaturados da fotografia fornecida; diferem da fachada multipisos da referência. A captura completa da interface de referência não foi importada como imagem. Essa adaptação visual permanece na entrega; a ausência de fluxo externo pertence ao registro histórico anterior à extensão de níveis.

Na ampliação de 15/11, Panorama, Tramitação, Pendências e Servidores dividem o conteúdo analítico; Relatórios completa a navegação local. No celular de 390 × 844 px, as cinco abas ocupam duas linhas; filtros aplicados aparecem em resumo com Ajustar filtros. Os dashboards mostram indicadores na primeira dobra e os relatórios apresentam Gerar prévia do relatório antes da lista longa de KPIs. Preservar rótulos, seleção e alvos de toque, sem reduzir toda a tipografia para caber. As representações de 11/11 (18 visualizações V01–V18 e suas adaptações) permanecem como biblioteca histórica, sem criar rankings nominais.

A ampliação de 15/11 oferece cinco páginas A4 por recorte e período: identificação/resumo, estoque/situação, desempenho, pendências/retrabalho e evolução/comparação/detalhes. O formato observado permanece 794 × 1123 px; as margens da biblioteca anterior são 48 px superior/inferior e 64 px laterais. No celular, a miniatura A4 oferece Ler em texto ampliado: conteúdo responsivo com corpo de 16 px, anterior/próxima e Voltar à prévia A4, mantendo origem, página, período e filtro nas ações persistidas. São estados predefinidos, sem comprovação por cliques. Exportar PDF informa que nenhum arquivo é produzido. Conservar Dados demonstrativos e excluir CPF, telefone, endereço e e-mail dessas prévias. As 13 páginas R1–R5 (incluindo R2 individual/consolidado) da biblioteca de 11/11 são históricas e permanecem preservadas.

## Elevation & Depth

O ambiente operacional permanece plano: fundo, superfície branca, contorno e seleção tonal estabelecem a hierarquia. Documentos recebem superfície de papel; foco é estado de interação. A autenticação conforme referência é uma exceção localizada: o cartão usa sombra com deslocamento vertical de 8 px, desfoque de 24 px e cor RGBA(33.15, 51, 43.35, 0.20) na base, escalada com a composição.

**The Profundidade Contida Rule.** Usar superfície, divisória e agrupamento antes de introduzir efeitos de profundidade. Não acrescentar sombras como compensação para hierarquia ou espaçamento insuficientes.

## Shapes

Nos módulos operacionais, usar cantos discretos: raio pequeno para etiquetas, médio para botões e entradas e amplo para painéis, conforme o frontmatter. Preservar os componentes de navegação existentes ao estender a biblioteca. Ações têm alvo de 44 px de altura; campos multilinha crescem com o conteúdo.

Contorno padrão de campo usa `fieldBorder`; divisórias e cartões usam `border`. O foco dos botões tem traço azul de 3 px, e o dos campos tem traço azul de 2 px. Não recortar rótulo, valor ou mensagem de erro para conservar altura arbitrária.

## Components

### Autenticação conforme referência

A coleção `Acesso IFC · referência aprovada` (`VariableCollectionId:208:2`) e as famílias Campo / Acesso conforme referência (`208:128`) e Botão / Acesso conforme referência (`208:201`) são próprias da nova entrada. Os campos têm 12 variantes de tipo, estado e visibilidade; os botões têm 15 variantes de função e estado. Campos demonstram Padrão, Foco, Erro e Desabilitado; botões incluem Ao passar o cursor e Carregando. As propriedades de texto conservam rótulo, valor e texto visível. A alternância de senha foi conferida nas propriedades do componente, com valor demonstrativo predefinido; isso não prova entrada livre ou teclado real.

Entrar tem preenchimento verde escuro na entrada única vigente. A demonstração opcional revela a conta fictícia e suas credenciais predefinidas; nível e perfil aparecem somente depois do login. Não reinserir Escolher outro acesso ou Acesso institucional. A seleção de quatro entradas e seus formulários próprios pertence ao checkpoint histórico de 11/11, assim como a antiga dupla Entrar / Acesso externo. Os registros `reference-login-*-success-2026-11-11.json` e `reference-responsive-*-success-2026-11-11.json` documentam a composição visual anterior à extensão de acessos. Sua revisão independente registrou **ship no escopo visual examinado**, após resolver a legenda móvel encoberta; ver `.impeccable/review/referencia-2026-11-11.md`. Não se estende a todos os fluxos, autenticação real ou acessibilidade em execução.

### Identificação de nível e continuidade da conta

A família editável de badge `228:19` tem oito variantes: níveis 1–4 em Completo (184 × 28 px) e Compacto (68 × 24 px). Conserva as cores semânticas existentes, o rótulo textual e Source Sans 3, sem criar tema por perfil. Os badges 1 e 2 permanecem; os IDs `228:15` / `228:17`, antes nível 3, agora representam o nível 4. O novo nível 3 usa `256:3452` / `256:3454`. A identificação acompanha a conta no computador e o cabeçalho no móvel. Contas e o catálogo Perfis e níveis (`235:1690` / `235:3604`) refletem a escala vigente.

- **Nível 1 — Acesso externo:** consulta de portarias publicadas e documentos de divulgação; conserva área e Minha conta próprias. Não apresentar minutas, dados cadastrais privados ou operações internas.
- **Nível 2 — Servidores:** docentes, técnicos, DEPE/DAP e administração técnica conservam competências de função e departamento, sem elaboração direta. Administração técnica não concede competência de negócio.
- **Nível 3 — Gabinete e Gestão de Pessoas:** Gabinete e CGP/DGP elaboram e tramitam atos; validação quando autorizada, publicação e comunicação seguem o escopo concedido. Sem assinatura ou administração de configurações automática.
- **Nível 4 — Direção:** Direção-Geral e Vice-Diretor autorizado têm acesso total, inclusive elaboração, conforme confirmação expressa do usuário. Conservar ato e período de autorização do Vice, histórico, versões assinadas e competência vigente. Outros cargos de direção permanecem no nível 2.

A entrada única demonstra contas e destinos predefinidos sem conceder autorização pela escolha. Sair restaura a entrada unificada. Nome, papel e nível da conta acompanham os módulos compartilhados; o nível aparece somente após a autenticação demonstrada. Os percursos de assinatura conservam as condições de gestão e os intermediários de dois ramos; o Gabinete aguarda assinatura sem assumir a identidade do signatário. Autenticação e autorização efetivas dependem da futura implementação no servidor.

**Evidência histórica de 11/11 (apresentação de quatro logins substituída):** `.design/four-levels-foundation-2026-11-11.json` registra a família de badges; `.design/four-levels-audit-D-2026-11-11.json` e `.design/four-levels-audit-M-2026-11-11.json` cobrem 250 quadros de computador e 247 móveis (497 no total), com `missing`, `self`, `institutional` e `wrongBadge` vazios nos critérios registrados. Cada classe tem 13 estados de login e quatro entradas. A correção pontual posterior do badge compacto da espera para nível 3 consta em `.design/four-levels-waiting-fix-2026-11-11.json`.

O registro histórico `.design/four-levels-navigation-tests-2026-11-11.json` contém 138 de 138 cenários aprovados por avaliação dos arrays de ações e condições relidos do Figma. As 14 capturas `.impeccable/review/quatro-*.png` documentam amostras da seleção, logins, Gabinete, Direção e contas; foram conferidas nesta documentação a seleção desktop e o login 3 móvel. Essa evidência não executa autenticação real nem comprova todos os fluxos, entrada livre, autorização no servidor ou acessibilidade em execução. A aprovação da etapa de três níveis abaixo continua exclusivamente histórica.


### Checkpoint histórico — três níveis (substituído)

Este checkpoint preserva a numeração, os destinos e a revisão anteriores. Foi substituído pela escala de quatro níveis; a apresentação de quatro logins de 11/11 também foi substituída pela entrada única de 15/11. Suas afirmações de nível 3 de gestão e entrada única não regem a entrega vigente.

A família editável de badge `228:19` usa Nível 1, 2 e 3 nos formatos Completo (184 × 28 px) e Compacto (68 × 24 px). Reutiliza as cores semânticas existentes e a tipografia operacional; não cria tema ou paleta por perfil. O rótulo textual acompanha a cor. No computador, a identificação aparece junto da conta; no móvel, no cabeçalho. A lista de contas da Administração mostra os níveis e o catálogo Perfis e níveis explica seu alcance.

- **Nível 1:** ambiente próprio de consulta, detalhe e documento publicado, com Minha conta externa. Não apresentar minutas, dados cadastrais privados ou módulos internos. Os links Voltar ao acesso de servidores abrem a entrada, sem conceder sessão interna.
- **Nível 2:** conserva o escopo original por função e departamento; administração técnica não concede assinatura ou publicação. Encaminhar para assinatura abre Aguardando assinatura, mantendo a conta do servidor.
- **Nível 3:** exclusivo da Direção-Geral e do Vice-Diretor autorizado, com todos os módulos e funções. Conservar o ato de autorização e o período do Vice explícitos. Outros cargos de direção permanecem no nível 2. Permissão total preserva histórico, versões assinadas e competência vigente.

Nos módulos compartilhados, variáveis de demonstração conservam nome, papel e nível da Direção ou do Vice. Sair restaura a entrada sem sessão de gestão. Essa continuidade é comportamento do protótipo; autorização e sessão reais dependem da implementação no servidor.

Os percursos de gestão usam duas etapas de condição, pois a primeira implementação perdeu a terceira opção ao persistir no Figma. A primeira condição encaminha o nível 3 para um quadro automático ou o nível 2 para a espera; após 1 ms, o quadro automático escolhe Direção-Geral ou Vice em dois ramos. Os quadros `243:1710` e `243:1718` no computador e `243:4089` e `243:4097` no móvel preservam Source Sans 3, superfície branca, badge nível 3 e nome/papel vinculados às variáveis. São transições de continuidade da conta, sem nova direção visual.

**Checkpoint histórico da extensão:** `.design/levels-foundations-2026-11-11.json`, `.design/levels-audit-D-2026-11-11.json` e `.design/levels-audit-M-2026-11-11.json` registram a etapa de 234 quadros de computador e 237 móveis (471 no total). Os resultados desse checkpoint não substituem a auditoria final abaixo. As três ocorrências em `externalLeaks` de cada auditoria eram retornos explícitos à entrada de servidores. O ajuste das ações de gestão em computador está em `.design/levels-review-fix-2026-11-11.json`: controles de 44 px e intervalo de 24 px até a seção seguinte, com captura atualizada `niveis-gestao-desktop.png`. Capturas `.impeccable/review/niveis-*.png` documentam amostras da extensão.

**Evidência da etapa de três níveis:** `.design/levels-final-audit-D-2026-11-11.json` e `.design/levels-final-audit-M-2026-11-11.json` cobrem 236 quadros de computador e 239 móveis (475 no total), sem destinos ausentes, Acesso institucional, rotas externas para módulos internos, encaminhamento direto de servidor ao signatário, identificação de nível ausente ou condições com mais de dois ramos nos critérios registrados. Essas auditorias encontraram três autonavegações condicionais do Início departamental; a correção posterior está em `.design/levels-self-fix-D-2026-11-11.json` e `.design/levels-self-fix-M-2026-11-11.json`, com `remainingSelf: false` nos três nós. Os três retornos à entrada de servidores por classe são enumerados separadamente em `returnToEmployeeEntry`.

O registro `.design/levels-navigation-tests-2026-11-11.json` avalia os arrays e condições relidos do Figma: 16 de 16 cenários passaram, cobrindo nas duas classes nível 2 em espera, assinatura da DG, assinatura do Vice, consulta/detalhe/documento externo e continuidade da identidade do Vice. Essa avaliação inclui as transições automáticas intermediárias e não executa visualmente a sessão. A revisão comunicou **ship**, com ambos os achados resolvidos e sem regressão nas transições examinadas, limitado a esses achados e ao acabamento. A evidência cobre esses estados e percursos predefinidos; não comprova todos os fluxos, backend, autorização efetiva, entrada livre ou acessibilidade em execução.


### Estatísticas e relatórios

O contêiner de visualização (`278:74`) reúne título, pergunta, unidade/legenda, área de dados e atualização. Tem superfície, contorno e raio do sistema operacional, preenchimento de `s24` e intervalo de `s12`. As seis variantes são Com dados (`278:33`), Sem registros (`278:40`), Carregando (`278:46`), Erro (`278:52`), Acesso restrito (`278:60`) e Dados desatualizados (`278:66`). Erro oferece Tentar novamente; dados desatualizados mostram a última atualização válida e oferecem Atualizar dados. Não usar vazio ou erro como valor zero.

O indicador (`278:75`) combina nome, valor, unidade/data de referência e método; usa preenchimento de `s16`, intervalo de `s8` e raio `lg`. A linha de dados (`278:80`) separa rótulo e valor com intervalo de `s16` e respiro vertical de `s8`, preservando crescimento de texto. Os tokens do frontmatter descrevem essas famílias sem impor a largura desktop aos exemplares móveis.

A soma de horas é informativa: apresentar unidade h/semana, referência e método junto do total; não comparar o acumulado do servidor com um teto de 10 horas. O teto administrativo por designação, quando mostrado, conserva seu contexto próprio. As descrições de R1–R5 explicam o conteúdo de cada relatório, sem classificações internas de lançamento na escolha operacional.

Evidência histórica da extensão de 11/11: `.design/statistics-audit-D-final.json` (94 quadros) e `.design/statistics-audit-M-final.json` (92 quadros) registram zero divergências nos critérios inspecionados do protótipo. O parecer `.impeccable/review/estatisticas-2026-11-11.md` registra F01 e F02 resolvidos nas recapturas de situações e central DEPE; sua decisão `ship` limita-se a esses achados e às regiões visíveis, sem nova auditoria da superfície. Não comprova backend, autorização, filtros livres, geração de PDF, teclado, leitor de tela ou conformidade geral de acessibilidade.

### Ampliação vigente — 15/11/2026

O dicionário M01–M32 registra unidade, base, denominador e método. Estado atual, evento histórico e situação de vigência são dimensões distintas: realizado/concluído é a mesma contagem nesta amostra; devolução não é rejeição; cancelamento antes da publicação não é revogação. O cenário em R = 15/11/2026 tem 21 projetos, 7 cadastros funcionais (5 ativos e 2 inativos) e 7 tarefas em 6 projetos. Contas de acesso e cadastros funcionais são fixtures distintas. Base anterior zero usa diferença absoluta; sem conclusões no período, média é Não disponível. Espera observada não é atraso sem prazo homologado.

Os 12 gráficos C01–C12 incluem barras verticais/horizontais, pizza, rosca, linha, área, empilhadas, comparativos e progresso, conforme pedido expresso de 15/11. Toda visualização mantém tabela equivalente, unidade, referência e dados demonstrativos. Linhas/área C05/C06 têm base zero e eixo numérico 0/3/6/9, datas, identificação das séries e valores finais; as tabelas mostram todas as linhas. A página 5 das prévias mantém referências numéricas. A revisão final e o complemento inspecionaram os 12 gráficos e as 12 tabelas de cada classe de dispositivo. A alternância por cliques não foi executada.

Filtros analíticos demonstram período, departamento, solicitante, tipo, estado, combinação DEPE + em produção e vazio. Relatórios oferecem nove recortes predefinidos em três períodos (semanal, mensal e intervalo personalizado fixo). Seleção de período permanece visualmente destacada e o recorte acompanha resumo, comparação, detalhes e cinco páginas de prévia. A mudança de período preserva filtro por condições independentes persistidas no Figma; combinações e datas livres dependem de implementação. Esses vínculos foram lidos/interpretados, sem execução por cliques.

A central de acompanhamento distingue aviso e tarefa: marcar aviso como lido não conclui pendência. ID, estado, etapa, situação do ato, responsável, setor, motivo, ação, último evento, histórico e próximas etapas acompanham o projeto. O progresso conta seis marcos obrigatórios; revisão opcional/reaberta aparece no histórico. Rejeitados/cancelados não recebem percentual aplicável. Preservar os escopos existentes por conta e departamento; nenhuma nova permissão é introduzida.

Nas revisões 04/05, Texto, Participações e Prévia mantêm cabeçalho, navegação, estrutura e as três abas disponíveis, com seleção explícita; somente o conteúdo muda. Revisão 04 conserva Helena, Rafael e Beatriz; revisão 05 conserva Rafael e Beatriz, com presidência pendente, sem restaurar a presidência removida ao alternar. Computador, celular e prévia compartilham Art. 1º de composição, Art. 2º de dedicação de 4 h/2 h e Art. 3º de entrada em vigor em 1º/11/2026; não reintroduzir o término divergente de 31/10/2027. A prévia do editor continua minuta. As ações de alternância e preservação foram interpretadas; todas as direções não foram executadas por cliques.

**Evidência e limite de 15/11:** o primeiro conjunto tem 141 capturas, as recapturas F01–F05 somam 53 e o complemento acrescenta 23, totalizando 217 PNGs. `.impeccable/review/nov15/parecer.md` preserva a primeira inspeção; `.impeccable/review/nov15/veredito.md` declara **ship exclusivamente para F01–F05**, todos resolved nas recapturas de `.design/nov15/captures-verdict-complete.json`. O adendo `.impeccable/review/nov15/complemento.md` registra os 23 complementos sem achado material novo, incluindo gráficos/tabelas móveis e Avisos na navegação externa. Os corpos e vínculos nativos estão em `.design/nov15/state-final.json` e `.design/nov15/report-reading-result.json`. A automação não iniciou (kernel assets/os error 3); avaliações de ações/variáveis persistidas são interpretadas. Validação parcial: não certifica projeto inteiro, alcance por navegação/rolagem, login, autorização, backend, teclado/leitor de tela, edição livre ou PDF real. Evidências de cliques de outubro permanecem históricas e não validam as mudanças de novembro.

### Buttons

As especificações seguintes descrevem os componentes operacionais existentes; para a entrada atual, usar a família específica acima.

Ações diretas, com intenção identificável pelo texto e tratamento visual.

- **Primário:** verde e texto branco para concluir a etapa nomeada.
- **Secundário:** branco, texto verde e contorno de 1 px para retorno ou cancelamento.
- **Discreto:** sem preenchimento, texto verde para ação auxiliar.
- **Destrutivo:** vermelho e texto branco; o fluxo exige confirmação e justificativa.
- **Estados:** Padrão, Hover, Foco e Desabilitado são variantes da biblioteca. Botões desabilitados usam opacidade de 0.42. O hover primário usa o verde de interação; não inventar mudança cromática para as outras intenções.
- **Movimento:** navegação com dissolução de 220 ms para preservar o shell sem deformar conteúdos diferentes; abas com Smart Animate de 220 ms; campos entre 150–180 ms. Hover de 150 ms está aplicado explicitamente em 372 botões desktop, além da biblioteca, com retorno de 120 ms. Secundário e discreto recebem fundo tonal; destrutivo escurece com sobreposição do token de tinta. O menu móvel entra lateralmente em 240 ms e pode ser fechado para retornar à tarefa de origem. Foco é demonstrado por variantes. Na implementação web, respeitar preferência de movimento reduzido; o protótipo não verifica essa preferência do sistema.

### Inputs / Fields

Entradas de contorno explícito, rótulo persistente e erro contextual.

- **Padrão:** branco, contorno `fieldBorder` e texto principal; conteúdo de exemplo ou apoio usa `muted`.
- **Foco:** traço azul distinto da entrada padrão.
- **Erro:** contorno e mensagem vermelhos; explicar o que revisar junto ao campo.
- **Desabilitado:** variante com opacidade de 0.5.
- **Conteúdo:** rótulo e valor em `FILL`, texto com altura automática e caixa multilinha em `HUG`. Placeholder nunca substitui o rótulo.
- **Protótipo:** valores e estados são predefinidos; edição livre e validação de dados dependem da implementação.

### Chips

Etiquetas são indicadores textuais compactos. Em vigor usa verde; Em validação e Assinatura em verificação usam azul; Vigência futura e Publicação parcial usam âmbar; Devolvida usa vermelho; Revogada e Rascunho usam neutros. Usar o nome completo e não antecipar efeitos de evento futuro.

### Cards / Containers

Superfície branca, cantos amplos, contorno suave de 1 px e preenchimento do token `card`. Organizar título, conteúdo e ações pela escala de espaçamento. Avisos usam fundo tonal, título e explicação; descartar aviso não conclui uma tarefa.

### Navigation

Navegação global consistente por perfil, com seleção tonal verde, ícone linear e rótulo. Administração técnica não concede competência para assinar ou publicar. No móvel, menu recolhido e seções documentais compactas preservam o conteúdo. Ícones acompanham o vocabulário existente e não substituem o nome das ações.

Nova solicitação conserva o perfil de entrada durante preenchimento, participação, erro, rascunho, revisão e envio. O Gabinete usa as variantes `request*Operator`, com nove itens no menu lateral fixo de 232 px; o docente usa o fluxo original. Não encaminhar uma criação do Gabinete ao shell docente. No móvel, Fechar menu retorna ao quadro de origem com BACK.

Abas permanecem visíveis em todas as vistas do respectivo módulo. Pendências conserva Da minha unidade, Minhas e Informações; Informações é uma vista local de Pendências, com retorno às outras duas, e não abre Notificações. Vencimentos conserva Em breve, Vencidas, Sem término, Revogação futura e Em vigor, com os registros 102/2025, 108/2025 e 091/2025 preservados nos seus fluxos. Administração conserva Contas, Signatários, Configurações e Auditoria. Portarias mantém Todas, Minhas participações e, para o perfil operador, Em elaboração. O editor normativo mantém Minuta nova e Alterar ato publicado; a compilação mantém Redação vigente, Redação futura e Documento original. A seleção global e a identidade do perfil acompanham a tarefa; no contexto docente de consulta documental, Portarias permanece ativo.

### Documento e evidências

Separar minuta, versão congelada e arquivo assinado. Identificação, horas, dispositivos e versão precisam concordar entre elaboração, validação e prévia. Documento atual é indicador sem ação; versões alternativas mantêm navegação própria. Preservar histórico e evidências; o ato assinado não é sobrescrito. Datas de assinatura, publicação, vigência e efeito permanecem nomeadas separadamente.

Catálogos de versões e resumos de arquivo PDF pertencem ao ato e ao perfil em consulta: normativa nº 18 (versão para assinatura, revisão 01), lotação nº 129/2026 (minuta, revisão 02) e nº 128/2026 no perfil docente (documento assinado, revisão 04). A aba Documento já selecionada no ato assinado não recebe reação e conserva a versão assinada; a escolha de outra versão passa pelo catálogo. Esses resumos e prévias demonstram cenários predefinidos, sem geração ou download operacional de PDF.

### Feedback e recuperação

Reenviar instruções atualiza a confirmação na mesma tela; Aplicar data atualiza o título do recorte histórico. A rota normativa passa por classificação antes do registro de publicação. Comunicação enviada, alternativa e exceção recebem resultados separados. Vazio, carregamento, falha de conexão, conflito, permissão insuficiente e sessão expirada conservam contexto e próxima ação.

Evidência anterior: `.design/final-state.json`, `.design/structural-check.json`, `.design/feedback-check.json` e `.impeccable/review/parecer.md`. Essa revisão registrou **ship no escopo de oito capturas**, com **quatro achados resolvidos**; sua aprovação não comprova as correções posteriores.

Evidência das correções de 23/10/2026: `.impeccable/review/routing-fix/parecer.md`, onze capturas iniciais, `documentDoc-final.png`, `tab-audit.json` e `reviewer-fix.json` na mesma pasta. A nova decisão é **ship limitado ao escopo revisado**, sem impeditivos abertos. A auditoria abrange 75 grupos desktop e 76 móveis, sem destinos ausentes ou overflow registrados nesses grupos. O P2 da aba atual do documento assinado que voltava à minuta foi resolvido: `reactions=[]` em `6:3427` e `9:1713`. A captura final confirma também Portarias ativo no contexto docente.

Cliques reais desktop registrados pelo agente principal confirmaram Minhas → Informações → Da minha unidade em Pendências, as cinco abas de Vencimentos e Recuperar (`5:92`) → Confira seu e-mail (`5:118`). Reenviar instruções permanece em `5:118` e mostra Instruções reenviadas; Abrir link de recuperação leva à redefinição (`5:143`). A revisão independente inspecionou as capturas e os destinos, sem repetir esses cliques. A prova cobre essas amostras e regressões em entradas predefinidas; não comprova todas as interações, edição livre, teclado, leitor de tela, backend, autenticação, envio real de e-mail ou PDF operacional. O scanner HTML/CSS não se aplica à entrega nativa Figma. Os snippets do sidecar são amostras isoladas do painel de documentação e não constituem implementação web do produto.

## Do's and Don'ts

### Do:

- **Do** usar tokens semânticos e componentes editáveis da biblioteca institucional.
- **Do** nomear estado, próxima ação, versão e competência em texto claro.
- **Do** manter rótulo e valor em FILL e campos multilinha em HUG, sem cortar conteúdo.
- **Do** manter ações alcançáveis no rodapé fixo e reservar espaço no conteúdo rolável.
- **Do** preservar login, recuperação, Home com menu e contexto IFC nas adaptações pertinentes.
- **Do** conservar abas locais, perfil, seleção global e ato documental ao navegar entre vistas do mesmo módulo.
- **Do** manter ações de autenticação dentro do cartão e creditar os ativos institucionais na documentação.
- **Do** registrar decisões D01–D24 e hipóteses na documentação, fora da UI operacional. Em Estatísticas, conservar também a sinalização de hipótese em homologação exigida pelo plano v1.1.

- **Do** manter rótulos diretos, unidade, referência, atualização e alternativa em tabela nas visualizações analíticas.

### Don't:

- **Don't** criar rankings nominais ou aplicar o teto de 10 horas à soma de horas do servidor.
- **Don't** usar somente cor para comunicar situação, erro ou mudança de efeito.
- **Don't** substituir o contorno de campo pela divisória suave.
- **Don't** confundir indicador de documento atual com comando disponível.
- **Don't** ocultar texto ou forçar altura fixa em conteúdo multilinha para fazer uma captura caber.
- **Don't** apresentar dados fictícios, assinatura, publicação, envio ou serviços demonstrados como operação real.
- **Don't** declarar conformidade jurídica, WCAG, leitor de tela, integrações, backend ou todas as interações comprovados pela revisão visual.
- **Don't** inserir referências a IA, afirmações de autoria humana ou decisões de projeto na interface operacional.

## Registro histórico — Refinamento de 10/11/2026

Os 217 quadros para computador e os 221 quadros móveis receberam nomes em português, sem os antigos identificadores de rota em inglês. As variantes conservam contexto de perfil, situação ou largura quando necessário. Nomes de ícones, formas e estados da biblioteca também foram traduzidos; o estado Hover passou a Ao passar o cursor. Os IDs dos quadros e das ações foram conservados.

As variáveis de cor do Figma receberam nomes em português, mantendo IDs, valores e aliases. O mapeamento dos nomes técnicos deste frontmatter para os rótulos atuais é: bg → fundo; surface → superfície; ink → texto-principal; muted → texto-de-apoio; primary → ação-principal; hover → ação-sob-o-cursor; tint → seleção; border → divisória; warn → atenção; warnBg → fundo-de-atenção; error → erro; errorBg → fundo-de-erro; blue → informação; blueBg → fundo-de-informação; fieldBorder → contorno-do-campo. As chaves técnicas dos scripts anteriores permanecem como registro histórico; a identidade atual das variáveis é o ID Figma.

O refinamento preserva o modo de operação institucional, a tipografia Source Sans 3 e os componentes existentes. A entrada ganhou hierarquia mais clara, título e orientação agrupados, marca proporcional e ações empilhadas. No celular de 390 e 360 px, o acesso completo precede a imagem. A recuperação e seus estados conservam rolagem natural quando o conteúdo ultrapassa a altura do quadro. Foram corrigidos os 20 transbordamentos horizontais encontrados no conjunto móvel; as ações de documento passam a ocupar linhas separadas.

Verificação estrutural final: 438 quadros e 6.016 reações inspecionados, sem destinos de navegação ausentes ou transbordamentos horizontais de contêineres nos critérios registrados. A confirmação visual cobriu entrada em computador, entrada móvel de 390 e 360 px, recuperação nas duas classes e documento normativo móvel. A inspeção não substitui testes de teclado, leitor de tela ou autenticação real. Evidências: `.design/desktop-final-audit-2026-11-10.json`, `.design/mobile-final-audit-2026-11-10.json` e `.impeccable/review/refinamento-2026-11-10.md`.

### Composição ampliada após retorno do usuário

O primeiro refinamento foi considerado visualmente parecido com a composição anterior. A entrada foi então recomposta dentro da identidade existente: painel verde de altura inteira no computador, formulário livre em superfície branca e faixa verde de apresentação no celular. A paleta, as fontes e os componentes de operação permanecem os mesmos; a nova composição aplica-se às 12 entradas de computador e 13 móveis. Essa foi a composição vigente nessa etapa; foi substituída pela referência fornecida em 11/11/2026. O Layout acima registra a autenticação atual.

Todas as reações dos 25 quadros são idênticas às anteriores. A auditoria posterior registrou zero transbordamentos horizontais de quadros/instâncias e zero rótulos maiores que seus botões nas entradas. A inspeção visual cobriu acesso e recuperação no computador, acesso móvel em 390 e 360 px e recuperação móvel. Prévias aprovadas na conferência: `.design/previews/acesso-computador-novo.png` e `.design/previews/acesso-celular-novo.png`. Script: `.design/amplify-entry-2026-11-10.js`; registros: `.design/amplify-computador-success-2026-11-10.json`, `.design/amplify-celular-success-2026-11-10.json` e os respectivos arquivos `audit`.

## Registro histórico — Correção de proporções de 11/11/2026

A captura do usuário demonstrou que o quadro anterior de 1440 × 1000 px era reduzido no visualizador, agravando o tamanho aparente de rótulos e controles. O painel verde e a fotografia também tinham peso excessivo em relação ao acesso. A composição dessa etapa reduziu o quadro para 900 px de altura, amplia o formulário, reduz título e fotografia institucionais e aplica uma escala consistente aos controles. A recuperação de senha passa a integrar o formulário; o acesso institucional recebe tratamento secundário de contorno.

A família local `Campo de acesso` (`197:2`) reutiliza cores, propriedades de rótulo e valor e os quatro estados do campo institucional, com entrada de 48 px e rótulo de 16 px. Estilos compartilhados `Autenticação/Rótulo` e `Autenticação/Ação` sustentam a escala. Os 12 quadros de acesso para computador e 13 móveis utilizam essa família; os componentes dos demais módulos não foram alterados. Nessa etapa, as reações dos 25 quadros permaneceram idênticas após a reorganização, comparadas por ID.

A revisão independente das quatro capturas de acesso e recuperação classificou como **ship no escopo de proporção, hierarquia e legibilidade**, com os cinco problemas inicialmente apontados resolvidos e sem defeito material encontrado nesse escopo. A revisão não comprova todos os fluxos ou acessibilidade de uma implementação web. Evidências dessa etapa: `.impeccable/review/proporcoes-2026-11-11.md`, `.design/auth-field-family-2026-11-11.json`, `.design/balanced-computador-2026-11-11.json`, `.design/balanced-celular-2026-11-11.json`, auditorias com o mesmo prefixo e capturas datadas de 2026-11-11 em `.design/previews/`. Essas capturas substituíram as anteriores nessa etapa. A referência e as capturas documentadas a seguir constituem a autenticação atual.


## Registro histórico — Referência fornecida em 11/11/2026

Este registro conserva a evidência da composição visual adotada. A decisão de acessos e níveis documentada em Components substitui as afirmações históricas de Acesso institucional e de Acesso externo sem rota; a direção visual e os tokens da referência continuam vigentes.

A composição de login foi refeita no Figma existente a partir de “Gestor de Portarias — Campus Videira.png” e do texto fornecidos pelo usuário. Os IDs de login foram mantidos e foram criadas cinco amostras adicionais de largura/altura; a amostra de 1440 × 900 reutiliza `5:2`. O escopo é exclusivamente Figma, sem HTML, build ou backend. O Layout, os tokens `auth-*` e a família específica de autenticação acima substituem as especificações históricas da entrada; os demais módulos permanecem existentes.

A revisão independente aprovou o escopo de fidelidade, proporções, enquadramento e cortes após a correção da legenda móvel. A aprovação é limitada às amostras e aos critérios examinados. Registro completo, links dos quadros, capturas e limitações: `ENTREGA_REFERENCIA_FIGMA_2026-11-11.md`; parecer: `.impeccable/review/referencia-2026-11-11.md`.

Auditoria final da referência: `.design/reference-final-audit-computador-2026-11-11.json` e `.design/reference-final-audit-movel-2026-11-11.json` abrangem 12 quadros. Registram pares de campos com alturas equivalentes, zero transbordamentos horizontais e destinos ausentes nos critérios inspecionados, apenas os três hashes de imagem aprovados e Acesso externo sem NAVIGATE. O teste documentado da senha está em `.design/reference-password-test-2026-11-11.json`.
