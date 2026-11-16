# Requisitos Não Funcionais — Gestor de Portarias

> **Artefato 5 (parte 2) da Entrega 2.** Requisitos de qualidade derivados do plano v3.2 (§9–§11, §14) e dos contratos de interação (`UX-CONTRACT.md`). Cada requisito tem métrica e procedimento de verificação. Como o sistema ainda não foi implementado, a coluna **Situação** separa o que o **protótipo demonstra** do que **só pode ser verificado no software**.

## 1. Visão geral

| ID | Categoria | Requisito | Situação |
|---|---|---|---|
| RNF-001 | Segurança | Autorização revalidada no servidor para toda operação | Especificado; depende da implementação |
| RNF-002 | Segurança | Recuperação de acesso sem revelar a existência de contas | Demonstrado no protótipo |
| RNF-003 | Segurança | Sessão protegida e recuperação de contexto | Demonstrado (estado); depende da implementação |
| RNF-004 | Privacidade | Minimização e proteção de dados pessoais (LGPD) | Parcialmente demonstrado |
| RNF-005 | Desempenho | Respostas rápidas em busca e listas | Especificado |
| RNF-006 | Usabilidade | Estado e próxima ação sempre explícitos | Demonstrado |
| RNF-007 | Acessibilidade | WCAG 2.2 AA e eMAG 3.1 | Parcialmente demonstrado no design; não comprovado |
| RNF-008 | Responsividade | Uso em 360, 768, 1280 e 1440 px e com zoom de 200% | Demonstrado em amostras |
| RNF-009 | Confiabilidade | Sem confirmação falsa, duplicidade ou perda silenciosa | Especificado |
| RNF-010 | Compatibilidade | Navegadores atuais e documento PDF acessível | Especificado |
| RNF-011 | Disponibilidade | Alertas e atualização independentes de tela aberta | Especificado |
| RNF-012 | Manutenibilidade | Fonte única de estilos e componentes | Demonstrado no Figma |
| RNF-013 | Escalabilidade | Papéis, séries e integrações configuráveis | Especificado |
| RNF-014 | Auditabilidade | Registro de eventos sensíveis | Especificado |
| RNF-015 | Localização | Português do Brasil, datas e fuso corretos | Demonstrado (idioma); datas dependem da implementação |
| RNF-016 | Movimento | Transições discretas e respeito a movimento reduzido | Demonstrado (transições); preferência não verificável no Figma |

## 2. Requisitos detalhados

### RNF-001 — Autorização revalidada no servidor

| Campo | Conteúdo |
|---|---|
| Descrição | Ocultar um botão não substitui a autorização. Cada operação, acesso a documento e download é verificado no servidor considerando perfil, escopo (departamento, período), vínculo com o registro e etapa (plano §3). |
| Métrica | 100% das operações recusadas por acesso direto quando fora do escopo (CA04, CA09, CA12 do plano). |
| Verificação | Testes de API com contas de cada perfil tentando operações proibidas por URL direta. |
| Situação | Especificado. O protótipo apenas oculta módulos por nível; `UX-CONTRACT.md` registra que a autorização efetiva "deve ser implementada no servidor". |
| Relacionados | RF-011, RF-016, RF-026; RN-008, RN-009, RN-012 |

### RNF-002 — Recuperação sem revelar a existência de contas

| Campo | Conteúdo |
|---|---|
| Descrição | A resposta ao pedido de recuperação é idêntica para e-mail cadastrado ou não (plano §7.1). O link tem prazo e uso único definidos com a TI. |
| Métrica | Mesma mensagem e mesmo tempo de resposta (variação ≤ 10%, meta proposta) nos dois casos. |
| Verificação | Protótipo: texto "Se houver uma conta local vinculada, você receberá as instruções…" (captura B02). Software: teste com e-mail existente e inexistente. |
| Situação | Demonstrado no texto do protótipo; comportamento do servidor depende da implementação. |
| Relacionados | RF-005; RN-002 |

### RNF-003 — Sessão protegida e recuperação de contexto

| Campo | Conteúdo |
|---|---|
| Descrição | Ao expirar a sessão, encaminhar à reautenticação e recuperar o contexto quando permitido (plano §7.1); não gravar dados pessoais no armazenamento local do navegador sem decisão explícita (plano §10). |
| Métrica | Último rascunho salvo preservado após reautenticação em 100% dos casos testados. |
| Verificação | Protótipo: tela "Sua sessão expirou" com "O último rascunho salvo foi preservado". Software: expirar a sessão durante a elaboração e reentrar. |
| Situação | Estado demonstrado; comportamento depende da implementação. |
| Relacionados | RF-009 |

### RNF-004 — Privacidade (LGPD)

| Campo | Conteúdo |
|---|---|
| Descrição | CPF, telefone, endereço e e-mail fora de listas, buscas, relatórios, exportações e e-mails; CPF completo só para Gabinete e CGP quando necessário; administrador não vê esses dados pelo papel técnico; conta externa sem dados cadastrais privados; motivo de afastamento nunca exibido; relatórios e prévias de PDF sem CPF, telefone, endereço ou e-mail; conta externa sem estatísticas (plano §10; decisão de 11/11/2026; RN-025). |
| Métrica | 0 ocorrências de CPF completo em telas de lista, e-mails e exportações nos testes. |
| Verificação | Protótipo: CPF mascarado (`•••.•••.•••-••`) no cadastro de participante. Software: inspeção de respostas de API e arquivos exportados; teste do log de exibição (CA31 do plano). |
| Situação | Parcialmente demonstrado; política completa depende de D16 e D21. |
| Relacionados | RF-024, RF-019, RF-021; RN-011, RN-017 |

### RNF-005 — Desempenho

| Campo | Conteúdo |
|---|---|
| Descrição | Busca remota com atraso de 300 ms durante a digitação, envio por Enter e botão de limpar; paginação no servidor; respostas antigas de buscas substituídas são ignoradas (plano §10). |
| Métrica | **Meta proposta:** listas paginadas respondendo em até 2 s (percentil 95) com o acervo do campus; primeira tela útil em até 3 s em rede institucional. |
| Verificação | Medição na homologação com o volume real do acervo. |
| Situação | Especificado; sem medição possível no protótipo. |
| Relacionados | RF-019, RF-021 |

### RNF-006 — Usabilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Toda situação tem rótulo textual; a próxima ação e o responsável aparecem no Início e no detalhe; botão de envio nunca fica desabilitado sem explicação; erro aparece junto ao campo; descartar aviso não conclui tarefa (`UX-CONTRACT.md`; plano §4.4). |
| Métrica | No teste exploratório (plano §13.3), nenhuma tarefa crítica com erro crítico pendente. |
| Verificação | Inspeção das telas; teste de usabilidade. |
| Situação | Demonstrado nas telas; **teste com usuários não realizado**. |
| Relacionados | RF-010, RF-013, RF-023 |

### RNF-007 — Acessibilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Meta WCAG 2.2 nível AA e eMAG 3.1, avaliados critério a critério; "Ir para o conteúdo"; foco visível; rótulos associados; erros em texto; contraste suficiente; uso sem depender de cor ou hover; diálogos que gerenciam foco; teste com NVDA (plano §10). |
| Métrica | 100% dos critérios aplicáveis verificados (CA24 e CA30 do plano). |
| Verificação | Protótipo: alvos de 44 px, foco azul de 3 px em botões e 2 px em campos, rótulos persistentes, situação com texto (`DESIGN.md`). Software: checklist WCAG/eMAG, teclado, NVDA, zoom de 200%. |
| Situação | Parcial: decisões de design presentes; **conformidade não comprovada** — o próprio projeto registra que o Figma não demonstra teclado, leitor de tela nem ARIA. |
| Relacionados | Todas as interfaces |

### RNF-008 — Responsividade

| Campo | Conteúdo |
|---|---|
| Descrição | Uso em 360, 768, 1280 e 1440 px, além de zoom de 200%; no celular, menu recolhido, uma coluna, ações fixas no rodapé; tabelas viram registros empilhados (plano §10; `DESIGN.md`). |
| Métrica | Zero transbordamento horizontal nas amostras. |
| Verificação | Auditorias estruturais: zero transbordamentos horizontais nos 12 quadros de entrada auditados em 11/11/2026 e correção de 20 transbordamentos móveis em 10/11/2026 (`DESIGN.md`). |
| Situação | Demonstrado em amostras de quadro; não são breakpoints implementados. |
| Relacionados | Interfaces A, B, C |

### RNF-009 — Confiabilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Sem confirmação falsa de assinatura, publicação ou envio; consultar o servidor antes de repetir operação com resultado desconhecido; detectar conflito de versão; preservar valores em falha de gravação (plano §10; CA21, CA22). |
| Métrica | 0 duplicidades de e-mail ou de publicação em teste de clique repetido e queda de rede. |
| Verificação | Testes de falha na implementação. |
| Situação | Especificado. |
| Relacionados | RF-016, RF-017, RF-018 |

### RNF-010 — Compatibilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Versões atuais de Chrome, Edge, Firefox e Safari (meta proposta); PDF com texto selecionável, ordem de leitura e tabelas marcadas (plano §7.10). |
| Métrica | Telas de acesso, recuperação e Início funcionais nos quatro navegadores. |
| Verificação | Teste cruzado na implementação. |
| Situação | Especificado. |
| Relacionados | RF-014, RF-027 |

### RNF-011 — Disponibilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Alertas de vigência calculados independentemente de uma tela aberta; painel com atualização periódica (proposta: 60 s e ao voltar à aba) e indicação "Atualizado em…" / "calculado em…"; falha de serviço informada sem apresentar dado antigo como atual (plano §8.1, §11; CA25). No protótipo, o estado "Dados desatualizados" do contêiner `278:74` demonstra esse comportamento. |
| Métrica | Alertas gerados com o navegador fechado em 100% dos testes; **meta proposta** de disponibilidade mensal ≥ 99%. |
| Verificação | Teste de alertas com navegador fechado; monitoramento em produção. |
| Situação | Especificado; "tempo real" depende de D18. |
| Relacionados | RF-020, RF-022 |

### RNF-012 — Manutenibilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Tokens e componentes com fonte única; identidade em `DESIGN.md` e comportamentos em `UX-CONTRACT.md` (plano §9.2). |
| Métrica | Telas do protótipo usando variáveis e instâncias da biblioteca; 0 cores soltas nos componentes. |
| Verificação | Inspeção do arquivo Figma no modo de desenvolvimento. |
| Situação | Demonstrado no Figma (variáveis traduzidas e mapeadas em `DESIGN.md`). |
| Relacionados | Todos |

### RNF-013 — Escalabilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Papéis acumuláveis com escopo; séries de numeração como configuração, não fixadas no código; integrações (LDAP, SIGRH, SIPAC, assinatura) atrás de contratos (plano §3.2, §5.2, §11). |
| Métrica | Nova série ou novo papel configurável sem alteração de código. |
| Verificação | Teste de configuração na homologação. |
| Situação | Especificado. |
| Relacionados | RF-026, RF-029 |

### RNF-014 — Auditabilidade

| Campo | Conteúdo |
|---|---|
| Descrição | Histórico com evento, autor, data/hora, situação anterior e nova, motivo e documento; log de exibição de CPF completo, endereço ou telefone, de exportações e de mudanças de papéis (plano §6.4, §10). |
| Métrica | 100% dos eventos definidos em D16 registrados com usuário, data e pessoa consultada. |
| Verificação | Teste de auditoria (CA31 do plano). |
| Situação | Especificado; a tela "Registro de acesso" existe no protótipo. |
| Relacionados | RF-026, RF-027 |

### RNF-015 — Localização

| Campo | Conteúdo |
|---|---|
| Descrição | Português do Brasil em campos, erros, calendários e nomes acessíveis; datas `dd/mm/aaaa`; horas em 24 h; fuso `America/Sao_Paulo` (a confirmar); data de vigência não muda de dia por conversão de fuso (plano §10; CA23). |
| Métrica | 0 textos em outro idioma na interface; datas de vigência idênticas em qualquer fuso de teste. |
| Verificação | Protótipo: camadas, variáveis e estados traduzidos em 10/11/2026 (`DESIGN.md`). Software: teste com fusos diferentes. |
| Situação | Idioma demonstrado; tratamento de datas depende da implementação. |
| Relacionados | Todos |

### RNF-016 — Movimento

| Campo | Conteúdo |
|---|---|
| Descrição | Navegação com dissolução de 220 ms; abas com transição suave de 220 ms; campos e estados entre 150 e 180 ms; menu móvel em 240 ms; na implementação, respeitar a preferência de movimento reduzido (`UX-CONTRACT.md`). |
| Métrica | Nenhuma navegação sem transição no protótipo; animações desligadas quando o sistema pede movimento reduzido. |
| Verificação | Auditoria estrutural de 28/10/2026 (nenhuma navegação sem transição); teste com `prefers-reduced-motion` na implementação. |
| Situação | Transições demonstradas; preferência de movimento reduzido não verificável no Figma. |
| Relacionados | Interfaces A, B, C |
