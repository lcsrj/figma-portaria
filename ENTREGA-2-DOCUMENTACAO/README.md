# Entrega 2 — Documentação Acadêmica do Gestor de Portarias

**Projeto:** Gestor de Portarias — Instituto Federal Catarinense, Campus Videira
**Data desta documentação:** 11/11/2026 · **atualizada em 15/11/2026**
**Base analisada:** pasta `Figma portaria` (plano de interface v3.2, plano de estatísticas v1.2, protótipo Figma, documentação de design e registros de verificação) e o documento-fonte "Gestor de Portarias (Regras de Negócio)", de 07/04/2026.

---

## O que mudou na atualização de 15/11/2026

| Tema | Antes (11/11/2026) | Agora (15/11/2026) |
|---|---|---|
| Níveis de acesso | Três níveis (Gabinete/CGP no nível 2; Direção no nível 3) | **Quatro níveis**: 1 externo; 2 docentes, técnicos, DEPE, DAP e administrador técnico; 3 Gabinete e CGP; 4 Direção-Geral e Vice autorizado |
| Entrada | Entrada de servidores com botão Acesso externo | **Entrada unificada** para todos os níveis, sem nível antes do login, com área opcional de contas demonstrativas |
| Estatísticas e relatórios | Painel parcial no Início; T13 com relatórios | Estatísticas administrativas (M01–M32, C01–C12), relatórios R1–R5 e por período com prévia A4, notificações e acompanhamento |
| Requisitos e regras | RF-001–RF-029; RN-001–RN-020; CA-001–CA-044 | RF-001–RF-034; RN-001–RN-026; CA-001–CA-050; FL-01–FL-17 |
| Capturas | 15 capturas de 11/11 e 23/10 | 20 capturas vigentes (15/11) e 13 históricas em `Capturas/historico-2026-11-11/` |

---

## 1. Descrição

O Gestor de Portarias é uma aplicação web, ainda em fase de design, que digitaliza o ciclo das portarias do IFC Campus Videira: solicitação por qualquer servidor, elaboração pelo Gabinete ou pela Coordenação de Gestão de Pessoas, validação pelos diretores, assinatura pela Direção-Geral ou pelo Vice-Diretor autorizado, publicação, comunicação aos membros, acompanhamento da vigência e encerramento, com histórico preservado, estatísticas e relatórios.

Até esta data, o produto existe como **protótipo navegável no Figma** (auditado com 497 quadros na etapa dos quatro níveis e ampliado em 11/11 e 15/11/2026). **Não há software implementado.**

## 2. Objetivos

**Geral:** projetar e validar, por protótipo navegável, a interface de uma aplicação que permita solicitar, elaborar, validar, assinar, publicar, comunicar, acompanhar e consultar portarias, preservando histórico, competências e privacidade.

**Específicos:** OE-01 acesso autenticado; OE-02 recuperação de acesso; OE-03 Início e menu por perfil; OE-04 fluxo da portaria; OE-05 comunicação aos membros; OE-06 busca e histórico; OE-07 vigências, relatórios, estatísticas e painel; OE-08 cadastros, contas e dados pessoais. Detalhes no [Plano de Projeto](01-Plano-de-Projeto/Plano-de-Projeto.md#6-objetivos).

## 3. Contextualização

A portaria é o documento de ato administrativo usado no campus para designar trabalho (comissões, núcleos, conselhos), normatizar procedimentos e definir lotações. Hoje o Gabinete controla esse processo com documentos dispersos. O documento-fonte define oito requisitos funcionais (RF1–RF8) e sete regras de negócio (RN1–RN7); o plano de interface v3.2 consolidou esses requisitos, registrou 24 decisões institucionais pendentes (D01–D24) e orientou o protótipo. O plano de estatísticas v1.2 acrescentou D25–D28.

Decisões do responsável pelo projeto: em 11/11/2026, **quatro níveis de acesso** (substituindo os três níveis registrados na mesma manhã); em 15/11/2026, **entrada unificada**, sem indicação de nível antes do login (substituindo os quatro logins por nível).

## 4. Tecnologias e ferramentas

| Uso | Ferramenta |
|---|---|
| Design e protótipo | Figma Design (variáveis, componentes, protótipo com condições e variáveis) |
| Automação e auditoria do design | Scripts JavaScript da API de plugins do Figma; registros JSON |
| Tipografia | Source Sans 3; Inter e Roboto (acesso); Carlito e Source Serif 4 (documentos) |
| Documentação | Markdown e diagramas Mermaid |
| Implementação prevista | Aplicação web cliente-servidor com autenticação local e LDAP, e-mail e PDF — **tecnologias ainda não definidas** |

## 5. Estrutura da documentação

```text
ENTREGA-2-DOCUMENTACAO/
├── README.md                         ← este índice
├── Matriz-de-Rastreabilidade.md
├── 01-Plano-de-Projeto/Plano-de-Projeto.md
├── 02-EAP-do-Projeto/EAP.md
├── 02-EAP-do-Projeto/Dicionario-da-EAP.md
├── 03-Mapeamento-de-Talentos/Mapeamento-de-Talentos.md
├── 04-Criterios-de-Aceitacao/Criterios-de-Aceitacao.md
├── 05-Requisitos/Requisitos-Funcionais.md
├── 05-Requisitos/Requisitos-Nao-Funcionais.md
├── 06-Regras-de-Negocio/Regras-de-Negocio.md
├── 07-Interfaces-do-Sistema/Documentacao-das-Interfaces.md
├── 07-Interfaces-do-Sistema/Capturas/   (20 capturas vigentes + registro)
│   └── historico-2026-11-11/            (13 capturas de etapas substituídas)
├── 08-Prototipacao/Prototipacao-Funcional.md
├── 08-Prototipacao/Fluxos-de-Navegacao.md
├── 09-Landing-Page/Documentacao-Landing-Page.md
└── Diagramas/                        (8 fontes Mermaid)
```

O índice geral da pasta do projeto, com os documentos vigentes e históricos fora desta entrega, está em [`../LEIA-ME_DOCUMENTACAO.md`](../LEIA-ME_DOCUMENTACAO.md).

## 6. Os nove artefatos

| # | Artefato | Documento(s) | Conteúdo principal | Situação do objeto documentado |
|---|---|---|---|---|
| 1 | Plano de Projeto | [Plano-de-Projeto.md](01-Plano-de-Projeto/Plano-de-Projeto.md) | Identificação, problema, objetivos OE-01–OE-08, escopo, tecnologias, metodologia, cronograma retrospectivo, marcos, riscos R01–R12, indicadores | — |
| 2 | EAP do Projeto | [EAP.md](02-EAP-do-Projeto/EAP.md) · [Dicionario-da-EAP.md](02-EAP-do-Projeto/Dicionario-da-EAP.md) | 9 fases, 37 entregas, 36 pacotes; diagrama Mermaid; dicionário com resultado, critério, papel e evidência | Fases 1, 3, 4 e 5 em grande parte concluídas; 2, 6, 7, 8 pendentes |
| 3 | Mapeamento de Talentos | [Mapeamento-de-Talentos.md](03-Mapeamento-de-Talentos/Mapeamento-de-Talentos.md) | Papéis PA-01–PA-08, competências, RACI, matriz de habilidades, capacitação NC-01–NC-07 | Integrantes não registrados no projeto |
| 4 | Critérios de Aceitação | [Criterios-de-Aceitacao.md](04-Criterios-de-Aceitacao/Criterios-de-Aceitacao.md) | CA-001–CA-050 em Dado/Quando/Então, com evidência disponível | Nenhum verificado em software |
| 5 | Requisitos | [Requisitos-Funcionais.md](05-Requisitos/Requisitos-Funcionais.md) · [Requisitos-Nao-Funcionais.md](05-Requisitos/Requisitos-Nao-Funcionais.md) | RF-001–RF-034 ligados a RF1–RF8; RNF-001–RNF-016 com métricas | Prototipados, exceto RF-007 (removido) e RF-029 (futuro) |
| 6 | Regras de Negócio | [Regras-de-Negocio.md](06-Regras-de-Negocio/Regras-de-Negocio.md) | RN-001–RN-026 com origem (fonte, decisão ou hipótese) | RN-003 sem representação atual |
| 7 | Interfaces do Sistema | [Documentacao-das-Interfaces.md](07-Interfaces-do-Sistema/Documentacao-das-Interfaces.md) | Interfaces A (acesso), B (recuperação), C (Início com menu) e D (estatísticas, relatórios e acompanhamento), com capturas | As quatro prototipadas |
| 8 | Prototipação | [Prototipacao-Funcional.md](08-Prototipacao/Prototipacao-Funcional.md) · [Fluxos-de-Navegacao.md](08-Prototipacao/Fluxos-de-Navegacao.md) | Protótipo Figma real, quadros e rotas propostas, FL-01–FL-17, jornadas, estados, limitações, avaliação | Protótipo existente; validação de 15/11 parcial (sem cliques reais); teste com usuários não realizado |
| 9 | Landing Page | [Documentacao-Landing-Page.md](09-Landing-Page/Documentacao-Landing-Page.md) | Elemento de apresentação existente na entrada e especificação proposta | **Pendente: não existe** |
| — | Matriz | [Matriz-de-Rastreabilidade.md](Matriz-de-Rastreabilidade.md) | Objetivos → EAP → RF → RN → CA → Interfaces → Fluxos | — |

## 7. Orientações para consulta

1. Comece por este README e pela [Matriz de Rastreabilidade](Matriz-de-Rastreabilidade.md), que mostra como tudo se liga.
2. Para avaliar as interfaces, leia o [Artefato 7](07-Interfaces-do-Sistema/Documentacao-das-Interfaces.md) e abra as [capturas](07-Interfaces-do-Sistema/Capturas/).
3. Identificadores com hífen e três dígitos (`RF-001`, `RN-001`, `CA-001`) são **desta entrega**. Identificadores sem hífen (`RF1`, `RN1`, `CA01`, `D01`, `T01`, `J01`) são do **documento-fonte** ou do **plano v3.2**. `M01`–`M32`, `C01`–`C12`, `R1`–`R5` e `D25`–`D28` são do **plano de estatísticas v1.2**.
4. A palavra **"Prototipado"** significa que existe no Figma, não que funciona em software.
5. Os diagramas Mermaid são exibidos no GitHub, no GitLab e em editores com suporte; as fontes estão em [Diagramas](Diagramas/).
6. IDs como `5:2` ou `229:4207` identificam quadros do arquivo Figma.

## 8. Relação entre esta documentação e o projeto existente

- **Fontes primárias:** documento-fonte (07/04/2026); `PLANO_INTERFACE_GESTOR_PORTARIAS_v3.2.md`; `PLANO_ESTATISTICAS_RELATORIOS_v1.2.md`; `PRODUCT.md`, `DESIGN.md`, `UX-CONTRACT.md`; relatórios `ENTREGA_*.md` e `VALIDACAO_VISUAL_FIGMA_2026-11-15.md`; scripts e auditorias em `.design/`; pareceres e capturas em `.impeccable/review/`.
- **Precedência adotada:** decisão confirmada mais recente (15/11/2026, depois 11/11/2026) > documento-fonte > plano v3.2 e plano de estatísticas v1.2 > registros históricos.
- **Capturas:** copiadas sem alteração das pastas do projeto; nenhuma captura nova foi gerada pela documentação. As de 11/11/2026 que não representam mais o protótipo foram movidas para `Capturas/historico-2026-11-11/`.
- **Arquivos do projeto:** a atualização de 15/11/2026 alterou apenas esta pasta, os planos de estatísticas (v1.0 copiado de Downloads e v1.2 criado), o plano v3.2 (nota de atualização no topo) e criou o índice `LEIA-ME_DOCUMENTACAO.md`.
- **Repositório:** a pasta é um repositório Git local **sem commits e sem remoto**. Nenhum comando Git que altere o repositório foi executado e nada foi publicado.

## 9. Informações que não puderam ser confirmadas

| Informação | Motivo |
|---|---|
| Nomes dos integrantes, divisão de tarefas e proficiências | Não registrados na pasta do projeto |
| Estado atual do arquivo Figma | O Figma não foi aberto pela documentação; usaram-se os registros locais até 15/11/2026 |
| Contagem total de quadros depois de 15/11/2026 | Cada auditoria cobriu só o escopo da sua etapa |
| Percursos de 15/11/2026 por cliques reais | A automação não iniciou; as verificações são interpretadas |
| Acesso público aos links do protótipo | Depende do compartilhamento no Figma |
| Itens exatos exigidos pela imagem de referência da Entrega 2 | A imagem não foi fornecida; usou-se a lista de nove artefatos da solicitação |
| Caminho da recuperação da conta externa a partir da entrada unificada | Os quadros próprios são de 11/11/2026 e não foram reverificados |
| Prazos, equipe e tecnologia da implementação | Não definidos no projeto (plano §13.1) |
| Conteúdo da planilha de registro e da frase truncada da fonte | Ainda não lidos/obtidos (D19, B12) |

## 10. Lacunas identificadas no projeto

| ID | Lacuna | Onde está documentada |
|---|---|---|
| L01 | Não existe software; nenhum critério foi verificado em execução real | Artefatos 4 e 8 |
| L02 | Integrantes e responsabilidades individuais não registrados | Artefato 3 |
| L03 | Decisões institucionais D01–D28 pendentes de homologação; as decisões de projeto sobre níveis e entrada foram confirmadas pelo responsável, não homologadas pela instituição | Artefatos 1 e 6 |
| L04 | Teste de usabilidade com usuários não realizado; percursos de 15/11/2026 sem cliques reais | Artefato 8 |
| L05 | Landing page inexistente | Artefato 9 |
| L06 | A orientação de recuperação para conta institucional (RN3) foi removida em 11/11/2026 e não voltou na entrada unificada | RF-007, RN-003, CA-013 |
| L07 | Vencimentos usa o rótulo "Expirada", diferente do termo "Vencida — sem encerramento" do plano | CA-038 |
| L08 | Faltam capturas atuais da redefinição de senha, da recuperação externa e do tablet; as capturas da confirmação de e-mail são de 23/10/2026; a transição de assinatura só tem captura com o selo antigo | Artefato 7 |
| L09 | Estados não desenhados: link expirado/usado, senha fora da política, conta não habilitada, serviço indisponível | Artefato 7 (A.10, B.10) |
| L10 | RF-025 (memorandos) e RN-018 sem critério de aceitação | Matriz |
| L11 | Política de senha não definida | RF-006 |
| L12 | Acessibilidade (WCAG 2.2 AA, eMAG 3.1) não comprovada; o Figma não verifica teclado nem leitor de tela | RNF-007 |
| L13 | O documento-fonte é um rascunho com frase truncada ("As p…") | RN, plano D19 |
| L14 | Nenhum PDF ou CSV é gerado; o formato final depende de D25 | RF-021, RF-031 |
| L15 | Os números das estatísticas são de cenário fictício e não representam o campus | RF-030; plano de estatísticas §17.8 |

## 11. Resultado da auditoria

Ver a seção 12.

## 12. Registro da auditoria (15/11/2026)

Verificação automatizada executada em 15/11/2026 sobre os 15 documentos Markdown desta pasta, o `LEIA-ME_DOCUMENTACAO.md` e o `PLANO_ESTATISTICAS_RELATORIOS_v1.2.md`:

| Verificação | Resultado |
|---|---|
| Links e imagens relativos | 144 verificados, 0 quebrados |
| Requisitos, regras, critérios e fluxos definidos | RF 34 · RN 26 · CA 50 · FL 17 |
| IDs citados sem definição | 0 (RF, RN, CA e FL) |
| Âncoras de fluxo usadas na Prototipação | Todas existem |
| Menções ao modelo de três níveis ou à entrada antiga | Só em trechos marcados como histórico ou comparação "antes/agora" |
| Capturas | 20 vigentes em `Capturas/`; 13 históricas em `Capturas/historico-2026-11-11/` |
| Diagramas Mermaid em `Diagramas/` | 8, regravados a partir dos documentos atualizados |

A auditoria verifica a consistência da documentação. Ela não verifica o arquivo Figma, que não foi aberto nesta atualização.
