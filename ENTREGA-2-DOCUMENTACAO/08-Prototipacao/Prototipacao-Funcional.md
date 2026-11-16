# Prototipação Funcional e Navegável — Gestor de Portarias

> **Artefato 8 (parte 1) da Entrega 2.** O projeto **já possui** um protótipo funcional e navegável: o arquivo Figma Design `yHEP1gOormT6A2nBhLhT3b`. Este documento descreve seu funcionamento real, segundo os registros do projeto. Os fluxos detalhados e o diagrama estão em [Fluxos-de-Navegacao.md](Fluxos-de-Navegacao.md).
>
> **Atualizado em 15/11/2026:** quatro níveis de acesso, entrada unificada com acesso demonstrativo, estatísticas, relatórios por período, notificações e acompanhamento.

## 1. Objetivo do protótipo

- Demonstrar, antes de qualquer código, como cada perfil percorre o ciclo da portaria (plano §13.2).
- Servir de base para o **teste de usabilidade exploratório** (plano §13.3).
- Validar com o responsável decisões de interface, como a entrada unificada, os quatro níveis e as estatísticas.
- Funcionar como **pacote de handoff** para a implementação, com componentes ligados às variáveis.

O protótipo **não** é um sistema: usa dados fictícios e entradas predefinidas e não executa autenticação, envio de e-mail, assinatura, publicação ou geração de PDF (`UX-CONTRACT.md`).

## 2. Acesso ao protótipo

| Recurso | Endereço |
|---|---|
| Arquivo de design | https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b |
| Protótipo — computador | https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=5-2&starting-point-node-id=5-2&scaling=contain |
| Protótipo — celular | https://www.figma.com/proto/yHEP1gOormT6A2nBhLhT3b?node-id=8-1663&starting-point-node-id=8-1663&scaling=contain |
| Estatísticas (computador) | https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=282-1848 |
| Relatórios (computador) | https://www.figma.com/design/yHEP1gOormT6A2nBhLhT3b?node-id=7-6744 |

Os dois pontos de partida são a entrada unificada (`5:2` no computador e `8:1663` no celular). O acesso aos links depende das permissões de compartilhamento do arquivo no Figma, que não foram verificadas nesta documentação.

## 3. Dimensão e composição

O arquivo cresceu em etapas. Cada auditoria cobriu o escopo da sua etapa; não há uma contagem única de todos os quadros depois de 15/11/2026.

| Etapa | Quadros auditados | Fonte |
|---|---|---|
| Três níveis (11/11/2026, manhã) | 236 computador + 239 celular = 475; 4.950 + 1.953 interações; 625 + 223 condicionais | `levels-final-audit-D/M-2026-11-11.json` |
| Quatro níveis (11/11/2026, tarde) | 497 quadros | `four-levels-audit-D/M-2026-11-11.json` |
| Estatísticas v1.1 (11/11/2026, noite) | 94 computador + 92 celular | `statistics-audit-D/M-final.json` |
| Ampliação e validação (15/11/2026) | 132 telas de computador + 142 de celular alteradas | `.design/nov15/audit-delivery-final-D.json`, `audit-delivery-M.json` |

| Item | Valor | Fonte |
|---|---|---|
| Famílias de telas | T01–T20, mais estatísticas (E1–E9), notificações e acompanhamento | `ENTREGA_FIGMA.md`; entregas de 11/11 e 15/11 |
| Jornadas | J01–J12, com variantes das decisões pendentes | plano §4.3 |
| Documentos A4 | Espécimes de portaria normativa e de pessoal; prévias R1–R5 (13 páginas) e relatórios por período (5 páginas) | `DESIGN.md` |

## 4. Estrutura de navegação

### 4.1 Estrutura global

```text
Entrada unificada ── Acesso demonstrativo (4 contas fictícias)
  ├─ Recuperação
  └─ Início (conforme o perfil; nível revelado depois do login)
       ├─ Nível 1: Portarias publicadas · Minha conta · Notificações
       └─ Níveis 2 a 4:
            ├─ Solicitações
            ├─ Portarias (editor com abas Texto · Participações · Prévia)
            ├─ Pendências
            ├─ Vencimentos
            ├─ Notificações e acompanhamento
            ├─ Relatórios → Estatísticas administrativas
            │     Panorama · Tramitação · Pendências · Servidores · Relatórios
            ├─ Servidores
            ├─ Participantes externos
            ├─ Memorandos e processos
            ├─ Administração (admin. técnico; nível 4)
            ├─ Assinaturas (nível 4)
            └─ Minha conta · Sair
```

### 4.2 "Rotas" do protótipo

Um protótipo Figma não tem URLs de aplicação; a navegação ocorre entre **quadros**, identificados por um ID de nó. A tabela relaciona os quadros principais às rotas que a implementação deverá ter. As rotas web são **propostas** desta documentação, sem definição no projeto.

| Tela | Quadro (computador / celular) | Rota web proposta |
|---|---|---|
| Entrada unificada | `5:2` / `8:1663` | `/entrar` |
| Acesso demonstrativo | IDs em `.design/nov15/state-final.json` (`auth`) | (só em ambiente de demonstração) |
| Recuperar acesso | `5:92` / `8:1753` | `/recuperar-senha` |
| Confira seu e-mail | `5:118` | `/recuperar-senha/enviado` |
| Defina uma nova senha | `5:143` | `/redefinir-senha?token=…` |
| Conclusão da redefinição | `5:167` | (estado de `/redefinir-senha`) |
| Portarias publicadas (externo) | `229:4207` / `229:4803` | `/portarias-publicadas` |
| Início — Gabinete | `6:49` / `8:1874` | `/inicio` |
| Gestão — Direção-Geral | `6:390` / `8:2014` | `/inicio` (nível 4) |
| Gestão — Vice autorizado | `229:4439` / `229:4987` | `/inicio` (nível 4) |
| Aguardando assinatura (nível 3) | `229:4408` / `229:4964` | `/portarias/:id/assinatura` (espera) |
| Assinatura (DG / Vice) | `7:2508`, `14:1585` / `9:3038`, `14:3452` | `/assinaturas/:id` |
| Solicitações | `6:751` | `/solicitacoes` |
| Estatísticas — Panorama | `282:1848` / `282:10481` | `/estatisticas` |
| Estatísticas — Tramitação | `318:5744` / `319:4985` | `/estatisticas/tramitacao` |
| Estatísticas — Servidores | `318:5826` / `319:5002` | `/estatisticas/servidores` |
| Relatórios — semanal, mensal, intervalo | `7:6744`, `318:6728`, `318:6810` / `10:2795`, `319:5189`, `319:5206` | `/relatorios?periodo=…` |
| Notificações | `7:10597` / `11:2443` | `/notificacoes` |
| Acompanhamento do projeto | `318:6646` / `319:5172` | `/projetos/:id/acompanhamento` |
| Perfis e níveis | `235:1690` / `235:3604` | `/administracao/perfis` |

## 5. Relação entre telas

| De | Para | Gatilho |
|---|---|---|
| Entrada | Início do perfil | **Entrar** (estado preenchido) |
| Entrada | Recuperação | "Esqueci minha senha" |
| Entrada | Acesso demonstrativo | **Ver usuários demonstrativos** |
| Acesso demonstrativo | Entrada preenchida | **Usar estas credenciais** |
| Início | Módulos | Itens do menu; linhas e atalhos |
| Qualquer tela interna | Entrada | **Sair** |
| Módulo | Pendências | Avisos "Abrir pendências" |
| Detalhe da portaria | Assinatura / espera | Encaminhar para assinatura (por nível) |
| Notificações | Acompanhamento do projeto | Linha de "Ações pendentes" |
| Estatísticas | Relatórios | Aba Relatórios |
| Relatório | Prévia (5 páginas) | Gerar prévia; anterior/próxima |

## 6. Fluxos principais (resumo)

| ID | Fluxo | Detalhe |
|---|---|---|
| FL-01 | Entrada unificada | [Fluxos §2](Fluxos-de-Navegacao.md#fl-01--entrada-unificada) |
| FL-02 | Erro de entrada | [Fluxos §2](Fluxos-de-Navegacao.md#fl-02--erro-de-entrada) |
| FL-03 | Recuperação de conta local | [Fluxos §3](Fluxos-de-Navegacao.md#fl-03--recuperação-de-conta-local) |
| FL-04 | Consulta externa | [Fluxos §4](Fluxos-de-Navegacao.md#fl-04--consulta-externa) |
| FL-05 | Recuperação de conta externa | [Fluxos §4](Fluxos-de-Navegacao.md#fl-05--recuperação-de-conta-externa) |
| FL-06 | Início por nível | [Fluxos §5](Fluxos-de-Navegacao.md#fl-06--início-por-nível) |
| FL-07 | Menu móvel | [Fluxos §5](Fluxos-de-Navegacao.md#fl-07--menu-móvel) |
| FL-08 | Encaminhamento à assinatura | [Fluxos §6](Fluxos-de-Navegacao.md#fl-08--encaminhamento-à-assinatura) |
| FL-09 | Sessão expirada e acesso negado | [Fluxos §6](Fluxos-de-Navegacao.md#fl-09--sessão-expirada-e-acesso-negado) |
| FL-10 | Nova solicitação | [Fluxos §7](Fluxos-de-Navegacao.md#fl-10--nova-solicitação) |
| FL-11 | Pendências e abas locais | [Fluxos §7](Fluxos-de-Navegacao.md#fl-11--pendências-e-abas-locais) |
| FL-12 | Vencimentos | [Fluxos §7](Fluxos-de-Navegacao.md#fl-12--vencimentos) |
| FL-13 | Acesso demonstrativo | [Fluxos §8](Fluxos-de-Navegacao.md#fl-13--acesso-demonstrativo) |
| FL-14 | Estatísticas e filtros | [Fluxos §8](Fluxos-de-Navegacao.md#fl-14--estatísticas-e-filtros) |
| FL-15 | Relatório por período e prévia | [Fluxos §8](Fluxos-de-Navegacao.md#fl-15--relatório-por-período-e-prévia) |
| FL-16 | Notificações e acompanhamento | [Fluxos §8](Fluxos-de-Navegacao.md#fl-16--notificações-e-acompanhamento) |
| FL-17 | Abas do editor | [Fluxos §8](Fluxos-de-Navegacao.md#fl-17--abas-do-editor) |

## 7. Funcionamento do menu

- **Computador:** menu lateral persistente de 232 px; dez itens para Gabinete/CGP (nível 3), incluindo Notificações; Administração e Assinaturas acrescentados para o nível 4; servidor de nível 2 com Início, Solicitações, Portarias e Notificações; item ativo com fundo tonal e rótulo; rodapé com identificação da conta, selo de nível e Sair.
- **Celular:** menu recolhido no ícone de três linhas; abre com entrada lateral em 240 ms; **Fechar** volta ao quadro de origem (ação de retorno); cabeçalho mostra o módulo e o selo de nível. A conta externa tem Avisos na barra Portarias/Minha conta.
- **Contexto preservado:** em Nova solicitação, as sete telas do Gabinete mantêm Marina Costa, os itens do menu e os destinos do perfil (correção de 28/10/2026); a identidade do Vice é mantida por variáveis ao navegar; Operação (nível 3) e Direção (nível 4) mantêm suas identidades nos painéis e relatórios de 15/11/2026.
- **Abas locais** permanecem visíveis entre as vistas do mesmo módulo (Pendências, Vencimentos, Administração, Portarias, editor normativo, compilação, Estatísticas, Notificações e editor de portarias).

## 8. Principais jornadas do usuário

| ID | Perfil | Jornada (resumo do plano §4.3) | Lanç. |
|---|---|---|---|
| J01 | Docente | Solicita comissão, recebe devolução, corrige e reenvia | L1 |
| J02 | Gabinete/CGP | Aceita a solicitação, elabora sobre o modelo e submete à validação | L1 |
| J03 | DEPE/DAP | Valida ou devolve as linhas do próprio departamento | L1 |
| J04 | DG + Gabinete/CGP | Assina fora do sistema; operador anexa; verificação | L1 |
| J05 | Gabinete/CGP | Registra publicação; e-mails; trata falha de envio | L1 |
| J06 | Gabinete/CGP | Trata alerta de vencimento: encerrar ou renovar | L1 |
| J07 | Servidor | Consulta "Minhas participações" e baixa o documento | L1 |
| J08 | Gabinete/CGP | Trata aposentadoria de membro e altera a composição | L1 |
| J09 | Administrador | Habilita conta, atribui papel DEPE e registra substituição do DG | L1 |
| J10 | CGP | Elabora portaria de lotação e consulta após a data de efeito | L1 |
| J11 | Gabinete | Elabora normativa e classifica o canal de publicação | L1 |
| J12 | Gabinete/CGP | Retifica erro material sem alterar o original | L1 |

Além delas, as extensões acrescentaram: em 11/11/2026, os percursos de consulta externa, gestão da Direção-Geral e do Vice, espera da assinatura e o módulo de estatísticas v1.1; em 15/11/2026, a entrada unificada com contas demonstrativas, as estatísticas administrativas, os relatórios por período, as notificações com acompanhamento e as abas persistentes do editor.

## 9. Estados e validações demonstrados

| Tela / componente | Estados no protótipo |
|---|---|
| Entrada | Vazio, preenchido, erro; acesso demonstrativo com quatro contas |
| Campos de acesso | Padrão, Foco, Erro, Desabilitado (12 variantes) |
| Botões de acesso | Padrão, Ao passar o cursor, Foco, Desabilitado, Carregando (15 variantes) |
| Selo de nível | Quatro níveis × Completo e Compacto (8 variantes, `228:19`) |
| Recuperação | Pedido, confirmação, reenvio, redefinição, conclusão |
| Solicitação | Preenchimento, participação, erro, rascunho, revisão, envio, devolvida |
| Documento | Minuta, versão para assinatura, assinado; catálogo de versões |
| Assinatura | Aguardando, anexada, em verificação, verificada, recusada |
| Publicação | Aguardando, parcial, publicada; divulgação pendente |
| Comunicação | Enviada, falha, sem contato, alternativa, exceção |
| Visualizações | Com dados, Sem registros, Carregando, Erro, Acesso restrito, Dados desatualizados (`278:74`); Gráfico/Tabela |
| Filtros e relatórios | Recortes predefinidos, combinação DEPE + em produção, vazio; períodos semanal, mensal e intervalo |
| Acompanhamento | Em produção, devolvida, realizado, não aceito, cancelado; progresso por marcos |
| Transversais | Sessão expirada, acesso negado, avisos lidos |

Validações de dados (CPF, datas, horas) são **representadas por estados predefinidos**; o protótipo não valida entradas livres.

## 10. Funcionalidades navegáveis

- Todas as famílias T01–T20, em computador e celular, e as telas de estatísticas, relatórios, notificações e acompanhamento.
- Percursos condicionais por nível (variáveis e condições de dois ramos).
- Alternância de senha por variantes de componente.
- Abas locais e catálogos de versões que preservam o ato e o perfil.
- Alternância Gráfico/Tabela nos gráficos; preservação do recorte ao trocar de período.
- Transições: dissolução (220 ms) na navegação, Smart Animate (220 ms) em abas, 150–180 ms em campos, 240 ms no menu móvel; hover em 372 botões de computador.

## 11. Limitações identificadas

| ID | Limitação | Fonte |
|---|---|---|
| LP-01 | Sem backend, autenticação, autorização, persistência ou envio de e-mail reais | `UX-CONTRACT.md` |
| LP-02 | Entrada de texto livre não existe; valores e filtros são predefinidos | `ENTREGA_REFERENCIA_…`; entrega de 15/11 |
| LP-03 | Teclado, leitor de tela, ARIA e preferência de movimento reduzido não são comprováveis no Figma | `UX-CONTRACT.md` |
| LP-04 | A orientação de recuperação para conta institucional (RN3) foi removida em 11/11/2026 e não voltou | `access-levels-external-2026-11-11.js` |
| LP-05 | Estados de link inválido/expirado/usado e de senha fora da política não foram desenhados | comparação com o plano §7.1 |
| LP-06 | Amostras de largura são quadros, não breakpoints; comportamento entre larguras não demonstrado | `DESIGN.md` |
| LP-07 | As verificações de navegação avaliam as ações configuradas, sem executar a sessão visualmente | `levels-…` e `four-levels-navigation-tests-2026-11-11.json` |
| LP-08 | A identidade visual depende da homologação de D22 (DSGov × identidade própria) | plano §9.1 |
| LP-09 | As hipóteses D01–D28 aparecem como variantes, não como regras homologadas | plano §12; plano de estatísticas §13 |
| LP-10 | Teste de usabilidade com usuários reais **não realizado** | plano §13.3 |
| LP-11 | Em 15/11/2026 **nenhum clique real** foi executado: a automação não iniciou ("kernel assets/os error 3") | `ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md` |
| LP-12 | Nenhum PDF ou CSV é gerado; a exportação mostra um aviso | idem |
| LP-13 | Os números das estatísticas são de um cenário fictício (R = 15/11/2026) e não representam o campus | `.design/nov15/data.json` |

## 12. Procedimentos de avaliação

### 12.1 Já realizados (registrados no projeto)

| Procedimento | Resultado | Fonte |
|---|---|---|
| Auditoria estrutural da etapa de três níveis (475 quadros) | 0 destinos ausentes; 0 entradas "Acesso institucional"; 0 rotas externas para módulos internos; 0 contas sem selo; 0 condições com mais de dois ramos | `levels-verification-2026-11-11.json` |
| Auditoria e verificações dos quatro níveis (497 quadros) | 0 destinos ausentes; 138/138 verificações de seleção, credenciais, destinos, nível e saída | `four-levels-audit-*`, `four-levels-navigation-tests-2026-11-11.json` |
| Estatísticas v1.1 | 12/12 verificações do cenário; 30/30 de navegação; 72/72 alternâncias gráfico/tabela; 12/12 cores com contraste ≥ 4,16:1 | `ENTREGA_ESTATISTICAS_RELATORIOS_2026-11-11.md` |
| Ampliação de 15/11/2026 | 1.370 verificações interpretadas (473 + 473 fluxos, 276 relatórios, 136 leitura móvel, 12 notificações); 10/10 checagens numéricas; 217 capturas inspecionadas | `ENTREGA_IMPLEMENTACAO_VALIDACAO_FIGMA_2026-11-15.md` |
| Cliques no protótipo (23/10 e 28/10) | Pendências, Vencimentos, recuperação com reenvio; Nova solicitação com menu móvel | `ENTREGA_FIGMA.md` |
| Revisões visuais independentes | "Ship" limitado ao escopo de cada revisão, após correção dos achados (em 15/11, só F01–F05) | `.impeccable/review/*.md`, `.impeccable/review/nov15/veredito.md` |

### 12.2 Propostos (não realizados)

1. **Percursos por cliques reais** das mudanças de 15/11/2026: troca de perfis, menus, notificações, seleção de projetos, filtros, gráficos, abas, relatórios e paginação/leitura.
2. **Teste de usabilidade exploratório** (plano §13.3): 2 a 3 participantes por grupo (Gabinete/CGP, diretores, servidores) e ao menos 1 administrador; tarefas J01–J12 sem explicar a interface; tarefas críticas (assinar, publicar, dados pessoais) com tolerância zero a erro crítico; SUS como complemento.
3. **Roteiro para as interfaces desta entrega:**
   - Interface A: "Entre no sistema como servidora do Gabinete"; "Você é consultor externo; consulte a portaria 128/2026".
   - Interface B: "Você esqueceu sua senha; recupere o acesso"; "Você usa a conta institucional do IFC; o que fazer?" (espera-se falha enquanto LP-04 não for corrigida).
   - Interface C: "Encontre o que precisa da sua ação hoje"; "Abra os vencimentos próximos"; "Saia do sistema".
   - Interface D: "Quantos projetos estão em produção?"; "Gere o relatório mensal da DEPE e vá à página 4"; "Descubra quem precisa agir no projeto devolvido".
4. **Coleta:** conclusão sem ajuda, tempo, erros, hesitações e comentários; registro de amostra e limitações.
5. **Critério para avançar:** nenhum erro crítico pendente; problemas graves corrigidos e retestados.
