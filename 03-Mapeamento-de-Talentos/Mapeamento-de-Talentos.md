# Mapeamento de Talentos e Habilidades — Gestor de Portarias

> **Artefato 3 da Entrega 2.** Identifica as competências exigidas pelo projeto — deduzidas do que o plano, o protótipo e as fases futuras efetivamente demandam — e organiza essas competências em papéis.

## 1. Integrantes e limites deste mapeamento

Nenhum arquivo da pasta do projeto registra os **nomes dos integrantes**, a divisão de tarefas ou a experiência de cada pessoa. Os documentos registram apenas que o arquivo Figma foi criado em uma conta de equipe do Figma e que decisões foram tomadas "pelo usuário" (o responsável pelo projeto).

Por isso, este documento:

- **não** atribui papéis ou habilidades a pessoas;
- descreve os **papéis necessários** (PA-01 a PA-08) e o **nível exigido** de cada competência;
- deixa a matriz individual em branco para preenchimento pela equipe (seção 5).

## 2. Papéis do projeto

| ID | Papel | Responsabilidades | Fases da EAP |
|---|---|---|---|
| PA-01 | Desenvolvimento frontend | Implementar telas web a partir do Figma, estados, formulários, acessibilidade em código | 6, 7 |
| PA-02 | Desenvolvimento backend | Autenticação local e LDAP, autorização por papel e escopo, regras de negócio, e-mail, documentos, integrações | 2.1, 6, 7 |
| PA-03 | Banco de dados e modelagem | Modelo de solicitação, portaria, versões, participações, séries, histórico; integridade e auditoria | 2.2, 3.4, 6 |
| PA-04 | Design de interface e experiência (UI/UX) | Arquitetura de informação, jornadas, componentes, protótipo, adaptação móvel, acessibilidade no design | 3, 4, 5 |
| PA-05 | Documentação | Documentação de design, handoff e documentação acadêmica | 9.1, 9.2 |
| PA-06 | Testes e qualidade | Verificação estrutural do protótipo, teste de usabilidade, testes funcionais, de falhas e de acessibilidade | 5.2–5.4, 8 |
| PA-07 | Segurança, privacidade e infraestrutura | LGPD, controle de acesso, logs, integrações institucionais, implantação | 2.1, 6.4, 8.2, 9.3 |
| PA-08 | Gestão de projeto, requisitos e relação institucional | Plano, decisões D01–D24, levantamento com as áreas, homologação | 1, 2, 3 |

## 3. Competências necessárias

### 3.1 Conhecimentos técnicos

| Competência | Por que o projeto exige | Evidência |
|---|---|---|
| Engenharia de requisitos | Separar requisito da fonte, proposta, hipótese e divergência | plano §0, §1.1 |
| Arquitetura cliente-servidor | Exigência da fonte (cap. 4) e contratos do plano §11 | fonte; plano §11 |
| Autenticação e autorização | Login local e LDAP, níveis, papéis acumuláveis com escopo | RF1, RF3; plano §3 |
| Direito administrativo aplicado | Decreto nº 12.002/2024 (redação, séries, vigência, DOU), LC nº 95/1998 | plano §5.2, §7.3, §7.6 |
| Assinatura eletrônica | Níveis de assinatura (Lei nº 14.063/2020) e verificação | plano §7.5 |

### 3.2 Habilidades de desenvolvimento (fases 6 e 7)

| Competência | Aplicação |
|---|---|
| Desenvolvimento web com componentes e tokens | Reproduzir a biblioteca do Figma em código, com fonte única de estilo |
| Formulários complexos e validação | Solicitação e elaboração com obrigatórios por finalidade (D07) |
| Editor estruturado de texto | Dispositivos (art., §, inciso, alínea, item) com numeração automática e regras de alteração |
| Geração de PDF acessível | Documento T19 com texto selecionável e tabelas marcadas |
| Integração com serviços | LDAP, e-mail com idempotência, assinatura, SIG/SIPAC |
| Concorrência e idempotência | Conflito de versão, resultado desconhecido, reserva de número sem colisão |

### 3.3 Conhecimentos de banco de dados

| Competência | Aplicação |
|---|---|
| Modelagem relacional | Pessoa, vínculo, conta, papel, escopo; solicitação, portaria, versão, participação |
| Dados temporais | Data civil × instante; vigência, efeito, registro; recorte por data de referência |
| Histórico e auditoria | Eventos imutáveis, versões congeladas, log de acesso a dados pessoais |
| Numeração em séries | Reserva atômica, reinício anual da série de pessoal |
| Minimização de dados (LGPD) | Mascaramento, finalidade por campo, política de guarda |

### 3.4 Competências em interfaces e experiência do usuário

| Competência | Aplicação demonstrada no projeto |
|---|---|
| Arquitetura de informação | Inventário T01–T20 e menu por perfil |
| Design de interação e prototipação | Centenas de quadros (497 na auditoria dos quatro níveis), condições, variáveis e transições no Figma; estatísticas, relatórios e notificações em 11/11 e 15/11/2026 |
| Design system | Variáveis, componentes com estados, selo de nível |
| Design responsivo | Amostras de 1920 a 360 px; menu recolhido no celular |
| Acessibilidade no design | Rótulos persistentes, erro junto ao campo, estado sem depender de cor, alvos de 44 px |
| Redação de interface | Mensagens que nomeiam estado e próxima ação ("Aguardando validação do departamento") |

### 3.5 Habilidades de documentação

| Competência | Aplicação |
|---|---|
| Redação técnica e acadêmica em português | Plano, contratos, entregas e esta documentação |
| Rastreabilidade | Matriz requisito → tela → critério (plano §15) |
| Registro de decisões | D01–D24 com hipótese, prioridade e participantes |
| Diagramação | Fluxos e EAP em Mermaid |

### 3.6 Conhecimentos de testes

| Competência | Aplicação |
|---|---|
| Verificação estrutural de protótipos | Auditorias de destinos, rotas proibidas e transbordamento |
| Teste de usabilidade exploratório | Tarefas J01–J12, tarefas críticas, SUS complementar (plano §13.3) |
| Teste de acessibilidade | WCAG 2.2 AA e eMAG 3.1 critério a critério; NVDA |
| Testes de regras temporais | Situações por data de referência (CA37–CA39, CA48, CA50, CA55 do plano) |
| Testes de falha | Rede, clique repetido, conflito, sessão expirada |

### 3.7 Competências de organização e gestão

| Competência | Aplicação |
|---|---|
| Planejamento por lançamentos | L1, L2, L3 |
| Gestão de riscos | D23, D10 e D11 como riscos principais |
| Condução de levantamento institucional | Etapa 0 com TI, Gabinete e autor da fonte |
| Facilitação de decisões | Homologação das hipóteses com as áreas |
| Controle de versões de documentos | Registro de mudanças v1 → v3.2 |

## 4. Distribuição de responsabilidades (RACI por papel)

R = executa · A = responde pelo resultado · C = consultado · I = informado

| Entrega da EAP | PA-01 | PA-02 | PA-03 | PA-04 | PA-05 | PA-06 | PA-07 | PA-08 |
|---|---|---|---|---|---|---|---|---|
| 2 Levantamento | — | C | C | I | I | — | R | A |
| 3 Concepção | I | C | C | R | I | C | C | A |
| 4.2 Interface A | C | C | — | R | I | C | C | A |
| 4.3 Interface B | C | C | — | R | I | C | C | A |
| 4.4 Interface C | C | C | — | R | I | C | — | A |
| 4.7 Landing page | C | — | — | R | C | C | C | A |
| 5 Protótipo e avaliação | I | — | — | R | I | R | — | A |
| 6 e 7 Implementação | R | R | R | C | I | C | C | A |
| 8 Qualidade | C | C | C | C | I | R | R | A |
| 9 Documentação e implantação | C | C | C | C | R | C | R | A |

## 5. Matriz de habilidades

Escala de nível exigido: **1** noções · **2** aplica com apoio · **3** aplica com autonomia · **4** domina e orienta.

As colunas da direita são para autoavaliação dos integrantes; foram deixadas em branco porque não há registro dos integrantes nem de suas proficiências.

| Habilidade | Nível exigido | Papéis | Integrante 1 | Integrante 2 | Integrante 3 |
|---|:--:|---|:--:|:--:|:--:|
| Figma (componentes, variáveis, protótipo) | 3 | PA-04 | | | |
| Arquitetura de informação e UX | 3 | PA-04 | | | |
| Acessibilidade (WCAG 2.2, eMAG 3.1) | 3 | PA-04, PA-06 | | | |
| Desenvolvimento frontend web | 3 | PA-01 | | | |
| Desenvolvimento backend e APIs | 3 | PA-02 | | | |
| Autenticação, LDAP e autorização | 3 | PA-02, PA-07 | | | |
| Modelagem de banco e dados temporais | 3 | PA-03 | | | |
| LGPD e segurança da informação | 2 | PA-07 | | | |
| Redação oficial e Decreto nº 12.002/2024 | 2 | PA-08, PA-04 | | | |
| Testes de usabilidade | 2 | PA-06 | | | |
| Testes automatizados e de falhas | 3 | PA-06 | | | |
| Documentação técnica e acadêmica | 3 | PA-05 | | | |
| Gestão de projeto e levantamento | 3 | PA-08 | | | |

## 6. Necessidades de capacitação

Derivadas de lacunas observadas no projeto, não de suposições sobre pessoas.

| ID | Tema | Lacuna observada | Ação sugerida |
|---|---|---|---|
| NC-01 | Testes de usabilidade | O teste exploratório do plano §13.3 não foi realizado | Roteiro de tarefas J01–J12 e prática de moderação |
| NC-02 | Acessibilidade em código | O Figma não comprova teclado, leitor de tela nem WCAG (registrado em `UX-CONTRACT.md`) | Prática com NVDA e axe na implementação |
| NC-03 | Integração LDAP e SIG/SIPAC | Protocolos e APIs desconhecidos (D23) | Reunião técnica com a TI; estudo da documentação do SIG |
| NC-04 | Assinatura eletrônica | Mecanismo e nível exigido indefinidos (D10) | Estudo da Lei nº 14.063/2020 e do assinador gov.br |
| NC-05 | Redação de atos normativos | Editor deve seguir arts. 12–14 do Decreto nº 12.002/2024 | Leitura orientada do decreto e do Manual de Redação |
| NC-06 | LGPD aplicada a alunos menores | Item B10 do backlog | Orientação da área de dados do IFC |
| NC-07 | Handoff de design para código | Transformar variáveis e componentes Figma em tokens e componentes web | Prática com o modo de desenvolvimento do Figma |
