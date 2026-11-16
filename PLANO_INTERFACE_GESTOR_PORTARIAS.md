# Plano de criação da interface — Gestor de Portarias

**Instituição:** Instituto Federal Catarinense — Campus Videira  
**Data do plano:** 21/10/2026  
**Base:** documento “Gestor de Portarias (Regras de Negócio)”, de 07/04/2026, identificado como rascunho.  
**Entrega:** planejamento da interface de uma aplicação web com arquitetura cliente-servidor, para orientar desenho, prototipação, implementação e homologação.

> Este plano diferencia requisitos expressos na fonte, propostas de interface e decisões de negócio pendentes. As propostas não alteram as regras institucionais. Os pontos pendentes devem ser resolvidos antes da implementação da funcionalidade afetada; não impedem o planejamento das demais telas.

## 1. Objetivo e limites

Criar uma interface que permita solicitar, elaborar, validar, registrar aceite, assinar, publicar, consultar, acompanhar, renovar, revogar e encerrar portarias, preservando documentos anteriores e o histórico das decisões.

A interface deve atender ao trabalho operacional do Gabinete e da Gestão de Pessoas, às decisões dos diretores, às solicitações dos servidores e à consulta por usuários autenticados. Também deve representar a participação de alunos e pessoas externas, sem confundir participação em uma portaria com permissão de acesso ao sistema.

O plano inclui telas, navegação, dados, permissões, validações, estados, relatórios, notificações, componentes e critérios de aceite. Também identifica os serviços de backend necessários para que a interface funcione de verdade. Esta entrega não implementa o sistema nem define como aprovadas políticas ausentes no rascunho.

### 1.1 Convenções de leitura

| Identificação | Significado |
| --- | --- |
| RF1–RF8 | Requisitos funcionais numerados no documento original. |
| RN1–RN7 | Regras de negócio numeradas no documento original. |
| RC1–RC12 | Identificadores criados neste plano para requisitos presentes na narrativa, sem numeração na fonte. |
| T01–T18 | Telas ou famílias de telas propostas. |
| D01–D18 | Decisões que precisam de validação institucional. |
| Proposta | Solução de interface ou comportamento sugerido, ainda sujeita à homologação. |

## 2. Escopo funcional consolidado

| ID | Necessidade identificada na narrativa |
| --- | --- |
| RC1 | Cadastro de servidores com todos os campos da fonte obrigatórios. |
| RC2 | Participação de servidores, alunos e comunidade externa, com identificação adequada ao vínculo. |
| RC3 | Composição completa da portaria: identificação, texto, artigos, membros, atividade, vigência, assinatura, processos e origem oficial. |
| RC4 | Tipos: nova portaria, portaria de revogação e portaria normativa. |
| RC5 | Criação institucional restrita a Gabinete e Gestão de Pessoas; assinatura restrita ao Diretor Geral e Vice-Diretor nomeado. |
| RC6 | Vinculação de uma portaria a um ou mais memorandos, quando houver justificativa por esses documentos. |
| RC7 | Histórico de mudanças de estado e acesso aos documentos anteriormente emitidos. |
| RC8 | Monitoramento da vigência com alertas para renovação e/ou fechamento. |
| RC9 | Relatório da carga horária atribuída aos servidores. |
| RC10 | Visões anuais com os termos Em edição, Em vigência, Revogadas, Atualizadas e Encerradas; RF7 também cita Vencidas e Em andamento. |
| RC11 | Preparação para integração futura com sistemas institucionais, como SIPAC. |
| RC12 | Solicitação com justificativa, propósito, indicação de membros, cargas horárias e período pretendido, conforme a narrativa. |

**Escopo inicial completo:** autenticação, cadastros, solicitações, elaboração, validação, aceite, assinatura, publicação, consulta, acompanhamento, histórico, relatórios, alertas e administração. A implantação pode ocorrer por fases, mas um protótipo parcial não representa cobertura integral.

**Evolução explicitamente futura:** integração efetiva com SIPAC. A interface inicial deve comportar referências a processos e origem documental, sem apresentar uma integração como ativa antes de ela existir.

**Fora do escopo confirmado:** consulta pública sem login, compra de certificado, aplicativo nativo, criação de contas por qualquer visitante e edição genérica de memorandos. Nada disso é exigido pela fonte.

## 3. Perfis de acesso e permissões

As ações disponíveis devem considerar simultaneamente perfil, departamento, vínculo com o registro e etapa do processo. Ocultar um botão não substitui a autorização no servidor.

| Perfil | Consulta | Solicitação | Elaboração/emissão | Validação | Assinatura | Administração |
| --- | --- | --- | --- | --- | --- | --- |
| Gabinete | Ampla, segundo o escopo institucional | Operação ampla descrita na fonte | Sim | Sim, RN6 | Não | Sem configuração |
| Gestão de Pessoas — CGP/DGP | Ampla, segundo o escopo institucional | Operação ampla descrita na fonte | Sim | Sim, RN6 | Não | Sem configuração |
| Diretor Geral — DG | Acesso total descrito na fonte | Alcance operacional a confirmar | Conflito com exclusividade de emissão: D02 | Sim, conforme fluxo aprovado | Sim | Alcance de “total” a confirmar: D02 |
| Vice-Diretor nomeado | Escopo de consulta a definir | A definir | Não conceder pela condição de signatário | A definir | Sim; condições da nomeação: D03 | Não presumir |
| DEPE | Total para consulta, conforme fonte | A definir se também acumula papel de servidor | Não | Membros, horas e vigência dos servidores do próprio departamento | Não | Não |
| DAP | Total para consulta, conforme fonte | A definir se também acumula papel de servidor | Não | Membros, horas e vigência dos servidores do próprio departamento | Não | Não |
| Administrador | Total descrito na fonte | Conforme atribuições efetivas | Não presumir exceção à exclusividade de emissão: D02 | Não presumir substituição de validador institucional | Somente se também for signatário habilitado | Configurações e habilitação de usuários |
| Servidor técnico | Consulta autenticada | Sim | Não | Não | Não | Não |
| Servidor docente | Consulta autenticada | Sim, com sugestão de horas | Não | Não | Não | Não |
| Usuário consultor | Consulta autenticada; alcance: D01 | Não estabelecido | Não | Não | Não | Não |
| Aluno ou pessoa externa participante | Participação não concede login | Não estabelecido | Não | Não | Não | Não |

### 3.1 Aplicação na interface

- Navegação mostra módulos compatíveis com as permissões efetivas; o servidor revalida cada operação e acesso ao documento.
- Quando uma ação do fluxo estiver temporariamente indisponível, explicar o motivo: “Aguardando validação do departamento”. Ações sem autorização não devem ser oferecidas.
- DEPE e DAP visualizam claramente o departamento de cada membro. A edição/validação fica restrita ao seu escopo; o restante aparece em leitura quando autorizado.
- Não estender o poder de validar membros ao poder de emitir ou assinar.
- O contexto do usuário mostra seus papéis e departamento. Acúmulo de papéis e substituições dependem de D02/D03.
- A habilitação administrativa de uma conta não deve, por si, conferir atribuição institucional de signatário.
- Ao perder uma permissão, a tela deve atualizar as ações disponíveis e tratar a recusa do servidor sem apagar silenciosamente o trabalho em edição.

## 4. Arquitetura de informação e navegação

### 4.1 Estrutura proposta

```text
Acesso
  Entrar com conta local ou institucional
  Recuperar senha local / orientação para LDAP

Área autenticada
  Visão geral
  Solicitações
    Minhas solicitações
    Solicitações recebidas — conforme perfil
    Nova solicitação / detalhe e devoluções
  Portarias
    Busca e acervo
    Minhas participações
    Nova portaria — emissores
    Detalhe / documento / histórico
  Pendências
    Validações / aceite / assinaturas / publicação
  Acompanhamento
    Vigências / renovações / encerramentos
  Relatórios
  Cadastros — conforme perfil
    Servidores e participantes
    Memorandos e referências
  Administração — conforme permissão
    Usuários e acessos / estrutura organizacional
    Configurações / serviços e integrações
  Notificações / minha conta / sair
```

**Proposta de layout:** menu lateral no desktop, cabeçalho com identidade institucional e usuário, área principal com título, contexto e ação prioritária. Em dispositivos menores, menu recolhível e prioridade para leitura, consulta e decisões. O editor continua acessível em largura reduzida, sem ocultar campos obrigatórios.

Atalhos podem variar por perfil, mas a mesma portaria deve abrir a mesma tela de detalhe, com ações autorizadas. Evitar telas paralelas com comportamentos divergentes para o mesmo registro.

### 4.2 Inventário de telas

| Tela | Conteúdo e ações principais | Acesso principal |
| --- | --- | --- |
| T01 — Entrada | Usuário, senha, mostrar/ocultar senha, acesso institucional, recuperação | Visitante |
| T02 — Recuperação | Pedido de link, criação de nova senha, link expirado/usado; orientação LDAP | Conta local ou orientação institucional |
| T03 — Visão geral | Indicadores, pendências, próximas vigências e atualização dos dados | Autenticados, com conteúdo por escopo |
| T04 — Solicitações | Lista pessoal ou recebida, filtros, situação e responsável atual | Solicitantes e operadores autorizados |
| T05 — Solicitação | Criar, salvar rascunho, enviar, consultar retorno e corrigir | Solicitante; análise por operador |
| T06 — Busca de portarias | Busca, filtros, paginação, ordenação e acesso ao acervo | Consulta autenticada |
| T07 — Detalhe da portaria | Resumo, membros, documento, referências, histórico e comunicações | Conforme acesso ao registro |
| T08 — Elaboração | Etapas de composição, membros, horas, funções, texto e prévia | Gabinete e Gestão de Pessoas |
| T09 — Validação e aceite | Fila, escopo de análise, parecer, correções e decisões | Validadores; responsável pelo aceite: D04 |
| T10 — Assinatura | Fila do signatário, versão exata, pendências e retorno da assinatura | DG/Vice habilitado |
| T11 — Publicação e envio | Registro da publicação, documento final, destinatários e falhas | Emissores autorizados |
| T12 — Vigências e ações | Próximos vencimentos, vencidas, renovação, revogação e encerramento | Consulta e operação conforme perfil |
| T13 — Relatórios | Servidor × portarias, horas, anual e situações | Perfis autorizados: D17 |
| T14 — Servidores | Lista, cadastro completo, vínculo e consulta das participações | Gestão cadastral a definir |
| T15 — Participantes não servidores | Alunos e comunidade; nome e CPF | Operadores autorizados |
| T16 — Memorandos e processos | Referências, origem, vínculos com portarias e documentos associados | Conforme permissão |
| T17 — Usuários e administração | Habilitação, papéis, departamentos, serviços e configurações | Administrador; alcance DG: D02 |
| T18 — Notificações e conta | Alertas, leitura, acesso ao objeto e dados da conta | Próprio usuário autenticado |

As telas T07–T12 podem compartilhar abas e painéis. O inventário representa capacidades, não a obrigação de criar dezoito páginas independentes.

## 5. Modelo de informação visível

### 5.1 Solicitação

| Campo | Regra e tratamento proposto |
| --- | --- |
| Assunto | Obrigatório no envio, RN4. |
| Propósito/descrição e justificativa | Exigidos pela narrativa RC12; mostrar campos próprios, sem depender apenas do assunto. |
| Membros indicados | Obrigatórios no envio, RN4; busca de servidor ou inclusão de aluno/externo conforme autorização. |
| Carga horária semanal sugerida | Coletar por membro segundo a narrativa; distinguir sugestão da carga aprovada. Aplicabilidade por atividade: D06/D07. |
| Período de vigência | Obrigatório, RN4; proposta de datas inicial/final com validação de ordem. Vigência indeterminada: D08. |
| Atividade e tipo pretendido | Proposta para facilitar triagem; não confundir tipo do ato com comissão/núcleo/conselho/colegiado. |
| Memorandos, processos e anexos de apoio | Quando aplicáveis; obrigatoriedade e formatos: D11. |
| Solicitante, setor e datas | Preenchimento pelo sistema a partir do usuário e dos eventos. |
| Situação e devoluções | Mostrar etapa, responsável, motivo de retorno e histórico. |

Salvar rascunho incompleto é uma proposta de conveniência. O envio deve aplicar todos os requisitos obrigatórios. A criação direta pelo emissor deve continuar possível, pois a demanda também pode nascer no próprio Gabinete.

### 5.2 Portaria

| Grupo | Campos e controles |
| --- | --- |
| Identificação | Número, ano, data de emissão, assunto e tipo do ato. Número e assunto obrigatórios na elaboração, RN5; política de numeração: D09. |
| Texto | Caput, trecho “resolve” e artigos; editor estruturado com ordenação dos artigos e prévia. Modelos textuais são proposta, sujeitos à aprovação institucional. |
| Atividade | Nome e natureza: comissão, núcleo, conselho, colegiado ou outra categoria homologada. |
| Participação | Membros, identificação, vínculo, departamento, aprovação, horas semanais individuais e atribuições. RN5 exige aprovação dos indicados, horas e presidência/vice-presidência; exceções: D07. |
| Vigência | Início de vigência, término quando aplicável e dados de encerramento. Separar data de emissão de início de efeitos. |
| Documentos relacionados | Um ou mais memorandos quando houver vínculo; processos associados; referências às portarias alteradas/revogadas quando aplicável. |
| Assinatura | Signatário, versão assinada, data/hora e evidência retornada pelo mecanismo escolhido em D10. |
| Publicação e origem | Documento final, URL de origem e demais informações de identificação do original; canal, referência e momento da publicação a definir em D11. |
| Controle | Versão, responsáveis, validações, aceite, eventos de emissão e histórico. |

Não aplicar automaticamente um modelo de comissão a uma portaria normativa ou de revogação. A exigência de membros, horas e presidência/vice nesses tipos conflita com uma leitura genérica de RN5 e depende de D07.

### 5.3 Servidores, participantes e contas

**Cadastro de servidor — todos obrigatórios segundo a fonte:** nome, CPF, SIAP, órgão de lotação, departamento de lotação, cargo, telefone, e-mail, endereço completo e chefia imediata. Proposta de decomposição do endereço: logradouro, número/complemento conforme aplicabilidade, bairro, município, UF e CEP; detalhamento final em D15.

Apresentar erro por campo e resumo no envio. CPF e SIAP são identificadores textuais, preservando zeros à esquerda. A grafia “SIAP” da fonte deve ser confirmada antes de padronizar o rótulo como “SIAPE”.

**Participante aluno ou externo:** nome completo e CPF são exigidos pela narrativa. Não exigir SIAP, cargo ou endereço de servidor. O e-mail necessário para a comunicação de RF5 não está especificado para esses participantes; resolver em D12 antes de concluir o fluxo de envio.

**Conta de acesso:** usuário, identidade associada, origem local/LDAP, situação de habilitação, papéis e departamento de atuação. O cadastro de uma pessoa não cria automaticamente uma conta; a conta não confere automaticamente poder de emissão ou assinatura.

**Propostas de integridade:** pesquisar pessoa já cadastrada antes de incluir outra; validar formato e duplicidades de identificadores conforme contrato do backend; não permitir que a mesma pessoa seja adicionada duas vezes na composição sem uma regra explícita. Edição cadastral não deve reescrever o conteúdo dos documentos históricos.

## 6. Ciclo de vida, situações e histórico

### 6.1 Separar conceitos que a fonte mistura

O rascunho usa “Em edição”, “Em vigência”, “Revogadas”, “Atualizadas”, “Encerradas”, “Vencidas” e “Em andamento”. Uma única lista de status pode perder informações: uma portaria atualizada também pode estar em vigência.

**Proposta sujeita a D05:** apresentar três dimensões relacionadas:

1. **Etapa de produção:** solicitação, elaboração, validação, aceite, assinatura e publicação.
2. **Situação de vigência:** futura, em vigência ou vencida, considerando as datas e os atos que alteram seus efeitos.
3. **Eventos/condições administrativas:** atualização, renovação, revogação e encerramento, com vínculos e datas próprios.

Os relatórios devem explicitar como essas dimensões são agrupadas. Não somar categorias sobrepostas como se fossem mutuamente exclusivas. O significado de “Em andamento” deve ser homologado.

### 6.2 Fluxo principal proposto

```text
Solicitação enviada OU demanda interna do emissor
  → triagem e elaboração
  → validação institucional e departamental aplicável
  → aceite — responsável e significado a confirmar
  → assinatura do DG ou Vice habilitado
  → publicação
  → comunicação aos membros
  → acompanhamento da vigência e da atividade
  → renovação, atualização, revogação ou encerramento, conforme decisão
```

Devoluções devem levar o processo à correção com motivo e histórico. Rejeição definitiva, cancelamento e retirada de solicitação são possibilidades de desenho a validar, não permissões já concedidas.

### 6.3 Transições e proteções a desenhar

| Ação | Pré-condições | Resultado visível |
| --- | --- | --- |
| Enviar solicitação | Campos RN4 e narrativa preenchidos | Protocolo interno proposto e acompanhamento em T04/T05. |
| Preparar portaria | Operador emissor autorizado | Composição vinculada à solicitação, quando existente. |
| Submeter para validação | Composição e obrigatórios aplicáveis preenchidos | Itens a validar, responsáveis e versão em análise. |
| Validar/devolver | Escopo institucional/departamental autorizado | Decisão, responsável, data e justificativa de devolução. |
| Registrar aceite | Papel e significado homologados em D04 | Registro distinto da assinatura e da publicação. |
| Assinar | Validações exigidas concluídas; signatário habilitado | Retorno verificável da assinatura da versão correta. |
| Publicar | Documento assinado e metadados exigidos | Registro oficial correspondente; critério de publicação em D11. |
| Comunicar membros | Marco de envio homologado em D12 | Situação individual de cada mensagem e anexo correspondente. |
| Renovar/atualizar | Regra de alteração homologada em D14 | Novo ato/versão e vínculo com o anterior, sem apagar seu documento. |
| Revogar | Autoridade, ato de revogação e alcance homologados | Relação entre ato revogador e ato atingido; efeitos temporais explícitos. |
| Encerrar | Critério de conclusão e responsável homologados | Registro da decisão e conclusão da atividade, quando exigida. |

**Recomendação de integridade a homologar:** alterações relevantes após validação precisam invalidar as aprovações afetadas; alterações após assinatura exigem nova versão/ato e nova assinatura conforme política institucional. A interface deve identificar a versão submetida a cada decisão.

O vencimento da data final deve gerar a sinalização e os alertas necessários. **Não equivale automaticamente à conclusão da atividade nem ao encerramento administrativo.** Também não significa revogação.

### 6.4 Histórico

No detalhe, mostrar linha do tempo com evento, autor, data/hora, situação anterior/nova, motivo e documento associado. Manter versões anteriores consultáveis conforme autorização; comparar texto, membros, horas e vigência é uma proposta de apoio à revisão.

Arquivamento deve preservar consulta e rastreabilidade. Retenção e possibilidade de exclusão dependem de D16; não incluir exclusão definitiva de portarias emitidas como ação padrão.

## 7. Especificação dos fluxos e telas principais

### 7.1 Acesso e recuperação — T01/T02

- Entrada local por usuário e senha, RF1; senha mascarada com controle acessível para exibir.
- Opção de acesso institucional LDAP, RF3. Definir com a TI o formulário e protocolo efetivamente suportados; não pressupor login por redirecionamento.
- Recuperação local por link enviado ao e-mail previamente cadastrado, RF2/RN2; fluxo para solicitar link, definir nova senha e retornar ao acesso.
- Recuperação LDAP orienta o usuário ao serviço institucional responsável, RN3; não alterar a senha LDAP localmente.
- Projetar estados: credenciais inválidas, conta não habilitada, serviço indisponível, envio solicitado, link inválido/expirado/usado e alteração concluída.
- Proposta de proteção: resposta ao pedido de recuperação que não revele a existência de contas; prazo e uso único do link definidos com a TI.
- Consulta de portarias e acesso aos arquivos exigem sessão, RN1. Ao expirar a sessão, encaminhar ao acesso e recuperar o contexto quando permitido.

### 7.2 Solicitar e acompanhar — T04/T05

Formulário em blocos: demanda e justificativa; atividade; membros e horas sugeridas; vigência; referências; revisão. A revisão apresenta exatamente o que será enviado, sem exigir uma confirmação adicional a cada salvamento.

O solicitante acompanha a solicitação, o responsável atual e as devoluções. Pode corrigir o que lhe for devolvido conforme política de edição da etapa. A tela do Gabinete/Gestão de Pessoas apresenta a fila recebida, os dados enviados e a opção de iniciar a elaboração.

Critérios específicos: valores são preservados em falha; salvar rascunho não informa “solicitação enviada”; a ação de envio evita duplicidade; o vínculo com a portaria gerada permanece consultável.

### 7.3 Elaborar — T08

**Etapas propostas:** identificação → texto e artigos → membros/funções/horas → vigência e referências → revisão e prévia.

O editor deve permitir caput e “resolve” separados dos artigos; inclusão, edição e reordenação dos artigos com alternativa ao arraste; composição dos membros; atribuição de presidência/vice; visualização da portaria como documento. A prévia de um rascunho deve ser identificada como não assinada/não publicada.

Na tabela de membros, mostrar nome, vínculo, departamento, identificador conforme permissão, função, horas propostas/aprovadas e resultado da validação. Mostrar horas em unidade semanal explícita. Uma linha com erro deve explicar como corrigi-lo, sem depender apenas da cor.

**RN7:** impedir atribuição individual superior a 10 horas em portaria administrativa para docente. Aceitar o valor limite de 10 horas. Não aplicar automaticamente esse teto a técnicos ou a portarias de outra natureza. O eventual teto acumulado entre portarias não foi definido; D06 deve resolver essa interpretação.

Uma visão auxiliar pode mostrar outras participações e a carga acumulada no período consultado, distinguindo soma informativa de restrição efetiva. Regras de sobreposição temporal, arredondamento e aplicabilidade das horas precisam de contrato de dados.

### 7.4 Validar e registrar aceite — T09

Fila com assunto, origem, departamento, membros sob responsabilidade, data do envio e pendências. Na análise, mostrar proposta original e composição atual, com parecer por item quando necessário.

Para DEPE/DAP, permitir adição/validação de membros, cargas e vigência apenas dos servidores de seu departamento, conforme a fonte. Em composição com mais de um departamento, mostrar quais partes já foram analisadas e quais aguardam decisão; a combinação de aprovações depende de D04.

Proposta de ações: “Validar”, “Devolver para correção” e “Registrar aceite”, quando cabível. Devolução exige motivo para permitir correção objetiva. Aprovação de membros e validação da portaria devem ser distinguíveis quando forem decisões diferentes.

### 7.5 Assinar — T10

Fila exclusiva de documentos prontos para o signatário habilitado. Mostrar portaria completa, composição, validações, versão, identidade do signatário e eventuais impedimentos.

O botão “Assinar” inicia o método institucional aprovado em D10. A interface só confirma assinatura após resposta do serviço ou verificação documental definida no contrato. Imagem de assinatura ou clique isolado não comprovam a assinatura exigida.

Projetar retorno de sucesso, recusa, cancelamento, indisponibilidade, processamento e resultado desconhecido por falha de conexão. Em resultado desconhecido, consultar a situação antes de permitir repetir a ação.

### 7.6 Publicar e comunicar — T11

Apresentar documento assinado, versão, signatário, referência de publicação e URL oficial. Definir em D11 se o sistema publica em um canal ou registra publicação realizada fora dele; não mostrar “Publicado” apenas porque o arquivo foi anexado.

RF5 requer e-mail aos membros da portaria assinada e publicada, com participação, vigência e documento anexo. A narrativa fala em envio após a assinatura; D12 deve fixar o marco único do disparo.

Mostrar destinatários e estados de comunicação: pendente, em processamento, aceito pelo serviço de envio e falha. “Aceito pelo serviço” não significa leitura ou entrega comprovada. Falha no e-mail não apaga a publicação nem autoriza enviar repetidamente sem controle.

Reenvio deve ter autorização, confirmação de destinatários/documento e prevenção de duplicidade. Definir com a TI limites de anexo e a solução para arquivos grandes sem descumprir RF5.

### 7.7 Buscar e consultar — T06/T07

**Filtros exigidos por RF6:** nome de servidor, nome/assunto da portaria, número e período. **Filtros complementares propostos:** ano, tipo, atividade, departamento, etapa e situação de vigência.

O filtro de período deve indicar o que pesquisa: emissão, publicação ou sobreposição de vigência. Evitar um campo chamado apenas “Período” sem semântica.

Lista proposta: número/ano, assunto, atividade, emissão, início/fim de vigência, situação e ação de abrir. Usar paginação no servidor, ordenação e contagem/intervalo; manter filtros ao abrir um registro e voltar.

Detalhe em abas: resumo; texto/documento; membros e horas; validações/assinatura; memorandos/processos/origem; histórico; comunicações. Abas com dados pessoais ou operações dependem da permissão do usuário.

Para o servidor, “Minhas participações” reúne portarias vinculadas à pessoa autenticada e as horas pertinentes. Downloads devem preservar o documento original e passar pela autorização do servidor.

### 7.8 Acompanhar, renovar, revogar e encerrar — T12

Lista de vigências com data final, tempo restante, responsável pela ação, situação e alertas. Prazos de aviso, recorrência e canais são definidos em D13; nenhuma quantidade de dias é imposta pelo rascunho.

- **Renovação:** iniciar o procedimento homologado com referência ao ato anterior e período pretendido; não apenas sobrescrever sua data final.
- **Atualização:** identificar o ato/versão de origem e as mudanças; manter consulta do documento anterior.
- **Revogação:** selecionar a portaria atingida e preparar o ato correspondente. Alcance parcial/total e data dos efeitos dependem de D14.
- **Encerramento:** coletar decisão e dados de conclusão da atividade segundo D14; vencimento continua visível enquanto a conclusão não for registrada.

Confirmações devem nomear a portaria, a consequência e a data de efeito. Alertas não devem ser tratados como autorização para executar automaticamente essas ações.

### 7.9 Cadastrar e administrar — T14–T17

Cadastros de pessoas devem separar dados pessoais, vínculo funcional, lotação e chefia. O detalhe de servidor pode apresentar suas portarias e carga horária conforme permissão. A obrigatoriedade de todos os campos do servidor deve ser mantida; possíveis exceções institucionais precisam ser homologadas em D15.

Memorandos devem ter, como proposta, identificação, órgão emissor, data, assunto, referência/URL e arquivo quando disponível. A vinculação admite vários memorandos na mesma portaria; a ausência de memorando não impede uma demanda que não tenha esse fundamento.

Administração deve permitir habilitar usuários e gerenciar os papéis autorizados, estrutura organizacional e parâmetros aprovados. Não pressupor cadastro público nem permitir que configurações alterem silenciosamente regras fixas, como RN7.

Configuração de LDAP, e-mail, assinatura e integrações deve mostrar estado operacional sem expor senhas ou tokens. Mudança de papéis deve apresentar usuário afetado e consequência; registrar autoria e data.

## 8. Dashboard, relatórios e notificações

### 8.1 Visão geral — T03

Priorizar trabalho pendente e vigências, com indicadores clicáveis que abrem a lista já filtrada:

- Solicitações recebidas e devolvidas; documentos em elaboração.
- Validações, aceites, assinaturas e publicações pendentes, conforme perfil.
- Portarias em vigência, com vigência futura, próximas do vencimento e vencidas sem encerramento.
- Portarias revogadas/encerradas e atualizações, com definições de contagem explícitas.
- Falhas de comunicação que exigem ação operacional.
- Para servidores: suas solicitações, participações e horas no período.

RF8 exige informações em tempo real. O plano de implementação deve definir mecanismo de atualização, meta de atraso e sinalização de desconexão; o rascunho não estabelece uma latência. Exibir “Atualizado em…” e distinguir dados desatualizados de ausência de pendências.

### 8.2 Relatórios — T13

| Relatório | Conteúdo mínimo | Filtros e interpretação |
| --- | --- | --- |
| Servidor × portarias — RF7/Rel.1 | Servidor, identificação autorizada, departamento, portarias, função e vigência | Servidor, departamento, período e situação. |
| Horas por servidor — RC9 | Participações, horas semanais individuais e totais segundo o período escolhido | Separar vigentes de históricas; soma simultânea depende de sobreposição temporal. |
| Portarias anuais — RF7/Rel.2 | Quantidade e relação das portarias do ano | Informar se ano é de emissão/publicação; regra em D17. |
| Portarias por situação — RF7/Rel.3 e RC10 | Em edição, em vigência/em andamento, vencidas, revogadas, atualizadas e encerradas | Mapeamento homologado em D05; explicar sobreposição de categorias. |

Proposta de saída: consulta tabular, impressão/PDF e exportação CSV ou XLSX, conforme prioridade aprovada. Exportações precisam aplicar os mesmos filtros e permissões da consulta, sem incluir CPF/endereço por conveniência.

Exibir filtros aplicados, data de geração, critério de contagem e ausência de dados. Totais não podem somar repetidamente a mesma portaria porque ela tem vários membros ou várias versões.

### 8.3 Central de notificações — T18

**Obrigação da fonte:** e-mail de participação e alertas de vigência. **Proposta complementar:** central interna com avisos de devolução, validação, assinatura, publicação e falhas operacionais.

Cada aviso deve mostrar motivo, portaria/solicitação, data e ação de acesso. Preferências pessoais não podem desligar silenciosamente comunicações obrigatórias. Destinatários, canais e escalonamento dependem de D12/D13.

## 9. Direção visual e componentes

### 9.1 Direção proposta

**Conceito:** ambiente de trabalho documental do IFC, com leitura clara, tabelas comparáveis e decisões rastreáveis. A referência visual é a organização de um processo administrativo: identificação do ato, etapa, responsáveis e documento sempre reconhecíveis.

**Elemento característico:** uma faixa de acompanhamento no detalhe da portaria que combina número/ano, etapa atual e próxima ação, com acesso à linha do tempo. O documento ocupa o centro da atenção durante revisão e assinatura.

Evitar uma composição dominada por cartões decorativos, gráficos sem utilidade operacional ou efeitos que disputem atenção com os documentos. A identidade oficial, se fornecida, prevalece sobre a paleta exploratória abaixo.

| Papel | Proposta inicial | Uso |
| --- | --- | --- |
| Verde institucional de trabalho | `#23633B` | Ação primária e identificação; não é uma especificação oficial da marca. |
| Fundo | `#F4F6F8` | Área de trabalho. |
| Superfície | `#FFFFFF` | Formulários, tabelas e documento. |
| Texto principal | `#1D2935` | Leitura e títulos. |
| Atenção | `#805800` | Pendências e vigência próxima, com texto/ícone. |
| Erro/risco | `#B3261E` | Erros e consequências relevantes. |

**Tipografia proposta:** Source Sans 3 para controles e textos de interface; Source Serif 4, com moderação, para títulos e prévia documental. Modelo tipográfico do documento oficial depende da instituição. Usar fontes locais ou fallback consistente e números tabulares onde ajudar a comparação.

**Layout:** escala de espaçamento baseada em 4 px; texto de corpo inicialmente em 16 px; bordas discretas, raio de 6 px em controles e sombras reservadas a sobreposições. São valores de partida, sujeitos à verificação de acessibilidade e ao manual institucional.

### 9.2 Biblioteca reutilizável a desenhar

- Estrutura de navegação, título de página, breadcrumb e abas.
- Campo com rótulo, ajuda e erro; senha; busca; combobox de pessoas; seletor de período; calendário em português; seleção simples/múltipla.
- Tabela paginada, cabeçalhos ordenáveis, filtros, remoção de filtros e estados de resultado.
- Editor de artigos, tabela de membros/horas, resumo de carga e painel de validações.
- Indicador de etapa, etiqueta de vigência e linha do tempo, com significado independente de cor.
- Visualizador de documento com alternativa de download; upload com seleção por botão, progresso e erro por arquivo.
- Botões com estados normal, foco, pressionado, indisponível e processando; diálogos de decisão e mensagens persistentes/toasts.
- Aviso de alteração não salva, conflito de versão, sessão expirada e falha de serviço.

Na etapa de implementação, registrar a identidade homologada em `DESIGN.md` e os comportamentos compartilhados em `UX-CONTRACT.md`. Tokens e componentes devem ter uma única fonte mantida, evitando estilos e regras duplicados por tela.

## 10. Comportamentos transversais e acessibilidade

| Situação | Comportamento planejado |
| --- | --- |
| Carregamento inicial | Indicador em região estável, mantendo identificação da tela. |
| Atualização de lista | Preservar cabeçalho e filtros; ignorar respostas antigas de buscas substituídas. |
| Lista vazia | Explicar ausência de registros e oferecer ação autorizada. |
| Busca sem resultados | Mostrar filtros aplicados e opção de limpar. |
| Falha de gravação | Preservar valores, indicar correção/tentativa e não anunciar sucesso. |
| Falha parcial | Identificar itens afetados; não reenviar operações já concluídas. |
| Resultado desconhecido | Consultar o servidor antes de repetir assinatura, publicação ou envio. |
| Edição concorrente | Detectar versão desatualizada; oferecer revisão do conflito, sem sobrescrever silenciosamente. |
| Saída com alterações | Avisar sobre perda e permitir permanecer; não afirmar salvamento que não ocorreu. |
| Falta de permissão | Tela própria de acesso negado com navegação utilizável, sem revelar dados restritos. |
| Sessão expirada | Reautenticação e recuperação do contexto conforme política de dados. |
| Desconexão | Aviso de indisponibilidade e estado de sincronização; não prometer edição offline sem projeto específico. |

Busca remota deve ter botão de limpar, envio explícito por Enter e atraso curto sugerido de 300 ms durante digitação. Preservar filtros e paginação ao voltar; não colocar CPF, endereço ou credenciais na URL.

**Idioma e datas:** português brasileiro em campos, erros, calendários, relatórios e nomes acessíveis. Datas em `dd/mm/aaaa`, horas em formato de 24 horas e fuso de referência `America/Sao_Paulo`, sujeito à confirmação institucional. Datas de vigência sem horário não devem mudar de dia por conversão de fuso; o backend deve distinguir data civil de instante de evento.

**Meta proposta de acessibilidade:** WCAG 2.2 AA. Garantir navegação por teclado, foco visível, rótulos associados, erros em texto, contraste suficiente, anúncio acessível de resultados e uso sem depender de cor ou hover. Diálogos devem gerenciar foco e oferecer saída clara. Calendários e seletores precisam de operação por teclado e idioma consistente.

**Responsividade:** verificar ao menos 360, 768, 1024 e 1440 px, além de zoom de 200%. Preservar campos e ações em telas pequenas; tabelas de comparação podem rolar horizontalmente com indicação visível. Formulários longos continuam alcançáveis sem áreas cortadas. Respeitar redução de movimento.

**Privacidade como requisito de projeto:** definir em D16 quem pode consultar CPF, contato e endereço, inclusive em documentos e exportações. Proposta: mascaramento e minimização nas listas; acesso detalhado apenas por necessidade autorizada. A consulta ampla a portarias não equivale automaticamente a acesso amplo ao cadastro pessoal.

## 11. Dependências de backend e contratos

A interface deve ser implementada junto aos contratos necessários. Um protótipo com botões e dados fictícios não comprova os requisitos abaixo.

| Contrato/serviço | O que precisa sustentar na interface |
| --- | --- |
| Autenticação local e LDAP | Sessão, habilitação, recuperação local e diferenciação da origem da conta. |
| Autorização | Perfil, departamento, registro, etapa e escopo de dados/documentos. |
| Cadastros e estrutura | Pessoas, contas, lotações, departamentos e chefias; identificadores consistentes. |
| Solicitações e portarias | Rascunhos, versões, filtros, paginação, validações e transições permitidas. |
| Numeração | Regra homologada e prevenção de colisões entre emissores. |
| Documento e assinatura | Prévia, geração/armazenamento, versão, evidência de assinatura e acesso ao original. |
| Publicação | Comprovação do marco de publicação e eventual integração com o canal oficial. |
| E-mail | Fila, anexo, destinatários, resultado e proteção contra duplicidade. |
| Vigência e alertas | Cálculo periódico independente de uma tela estar aberta, notificações e rastreabilidade. |
| Histórico | Eventos e documentos anteriores consultáveis, com integridade e permissões. |
| Relatórios e dashboard | Critérios de contagem, somas temporais, atualização e dados do escopo autorizado. |
| Integrações futuras | Referências externas e estados de sincronização quando o conector existir. |

Definir códigos de erro de campo, falta de autorização, conflito e indisponibilidade; política de reenvio/idempotência; controle de versão; limites de anexos e política de acesso a arquivos. Em integrações, distinguir falha local, indisponibilidade externa e processamento pendente.

## 12. Decisões institucionais pendentes

Os responsáveis abaixo são sugestões de participação na homologação, não designações formais. Cada decisão deve registrar resposta, responsável, data e impacto nas telas.

| ID | Dúvida/conflito da fonte | Decisão necessária e impacto | Participantes sugeridos |
| --- | --- | --- | --- |
| D01 | “Todo e qualquer usuário” aparece entre consultores, mas RN1 exige login | Definir quem recebe conta e quais portarias/documentos cada consultor pode ver. O plano mantém acesso autenticado. | Gabinete, DG e TI |
| D02 | “Acesso total” de DG/Administrador versus emissão exclusiva de Gabinete/GP; exclusão de configuração para emissores | Homologar matriz por capacidade, acesso à configuração, acúmulo de papéis e gestão cadastral. | DG, Gabinete, GP e TI |
| D03 | Vice-Diretor assina, mas não aparece na matriz detalhada da fonte | Definir nomeação, período, condições de substituição e demais acessos. | DG e Gabinete |
| D04 | RF4 cita aceite sem responsável; RN6 usa “e/ou” na validação | Definir quem aceita, objeto do aceite, ordem, aprovações cumulativas/alternativas, membros de vários departamentos e efeitos da devolução. | Gabinete, GP, DG, DAP e DEPE |
| D05 | Vocabulários diferentes de status | Aprovar etapas, situações, efeitos e mapeamento dos relatórios, inclusive “Atualizadas” e “Em andamento”. | Gabinete e áreas gestoras |
| D06 | RN7 cita 10 h para docente em portaria administrativa; não esclarece acúmulo | Confirmar classificação administrativa, teto por portaria e eventual teto acumulado, sobreposição, unidade e precisão das horas. | DEPE, GP e DG |
| D07 | RN5 exige membros, horas e presidência/vice para a elaboração em geral | Definir aplicação aos três tipos, quantidade de presidentes/vice, obrigatoriedade das funções e eventual dispensa de horas. | Gabinete e GP |
| D08 | Vigência obrigatória, sem regra para prazo indeterminado/retroatividade | Definir datas permitidas, término obrigatório, efeitos futuros/retroativos e regra do dia final. | Gabinete e DG |
| D09 | Número é obrigatório, mas a sequência não é descrita | Definir geração manual/automática, unicidade por ano/emissor, reservas, lacunas e tratamento de rascunhos. | Gabinete e GP |
| D10 | Mecanismo de assinatura não especificado | Definir serviço, credenciais, validade operacional da evidência e tratamento do documento assinado fora do sistema. | DG e TI |
| D11 | Publicação, original oficial e anexos não têm contrato operacional | Definir canal, evidência, URL, formato documental, campos obrigatórios na publicação e limites de arquivos. | Gabinete, GP e TI |
| D12 | Narrativa indica e-mail após assinatura; RF5 exige assinatura e publicação; externos não têm e-mail definido | Fixar disparo, destinatários, obtenção de contatos, anexo, reenvio e falhas. | Gabinete, GP e TI |
| D13 | Alertas de vigência sem antecedência, destinatários ou canal | Definir prazos, repetição, responsáveis por renovar/fechar e escalonamento. | Gabinete, GP, DAP e DEPE |
| D14 | Renovação, atualização, revogação e encerramento sem procedimento detalhado | Definir novo ato/versão, autoridade, efeitos, revogação parcial/total, evidência de conclusão e regras de cancelamento/rejeição. | DG, Gabinete e GP |
| D15 | Cadastro todo obrigatório; chefia e lotação podem ter exceções; siglas CGP/DGP e SIAP divergem | Homologar nomenclatura, estrutura, endereço completo, origem/edição dos dados e exceções formais. | GP e TI |
| D16 | Histórico obrigatório sem retenção ou visibilidade detalhada de dados pessoais | Definir acesso por campo/documento, exportação, armazenamento de rascunhos, retenção e eventual descarte. | Responsáveis institucionais por dados, Gabinete e TI |
| D17 | Relatórios sem escopo de acesso ou critérios de contagem | Definir perfis, ano de referência, versões incluídas, categorias sobrepostas, soma de horas e formatos de saída. | Gabinete, GP, DAP e DEPE |
| D18 | Dashboard “em tempo real” e SIPAC futuro sem especificação | Definir atraso aceitável/atualização e quais dados/operações a futura integração cobrirá. | TI e áreas gestoras |

## 13. Sequência de execução do projeto

| Etapa | Trabalho | Entregáveis | Critério para avançar |
| --- | --- | --- | --- |
| 1 — Consolidar domínio | Rever fonte e resolver decisões que afetam acesso, assinatura, validação, horas e ciclo de vida | Matriz de acesso, glossário, estados/transições e registro D01–D18 | Decisões bloqueadoras da próxima etapa homologadas pelos responsáveis. |
| 2 — Arquitetura e fluxos | Organizar navegação, jornadas por perfil e formulários | Mapa de telas, fluxos e inventário de campos/ações | Todos os RF/RN/RC têm destino verificável. |
| 3 — Wireframes | Desenhar listas, detalhe, editor, revisão e casos de falha | Wireframes desktop e mobile; conteúdo realista e fictício | Fluxo completo compreensível, sem ações órfãs. |
| 4 — Sistema visual | Homologar identidade e componentes compartilhados | Tokens, componentes e estados; `DESIGN.md` e `UX-CONTRACT.md` | Legibilidade, acessibilidade e comportamento consistentes. |
| 5 — Protótipo navegável | Conectar telas e decisões por perfil | Protótipo com solicitação → publicação → acompanhamento e fluxos alternativos | Revisão com Gabinete/GP, diretores e servidores; pendências registradas. |
| 6 — Contratos e implementação | Integrar UI e serviços, autorização, documentos, notificações e histórico | Módulos operacionais e documentação dos contratos | Critérios de aceite exercitados em ambiente de homologação. |
| 7 — Homologação | Testar cenários reais controlados, permissões, falhas e acessibilidade | Evidências, correções e aceite institucional | Sem falhas bloqueadoras de negócio, dados ou acesso. |
| 8 — Implantação e evolução | Preparar operação, capacitação e eventual incorporação de acervo | Guia por perfil, procedimento de suporte e plano de evolução | Rotinas de emissão/acompanhamento operáveis; responsáveis definidos. |

### 13.1 Ordem sugerida de implementação

1. Autenticação, perfis, estrutura institucional e cadastros mínimos completos.
2. Consulta/detalhe e solicitação, preservando histórico desde o início.
3. Elaboração, membros/horas, validação, aceite, assinatura e publicação.
4. E-mails, vigências, renovação/atualização/revogação/encerramento.
5. Relatórios, dashboard atualizado e administração operacional.
6. Integração SIPAC em evolução específica, após definição de seu escopo.

Segurança de acesso, rastreabilidade e acessibilidade acompanham todas as fases. Dashboard e relatórios podem ser desenhados cedo, mas dependem do modelo de dados e dos critérios homologados. Não estimar prazo fechado antes de definir assinatura, publicação, APIs, equipe e volume do acervo.

### 13.2 Pacote de design para implementação

O desenho pode ser produzido em Figma ou ferramenta equivalente; este plano não cria um arquivo de design. O pacote futuro deve reunir mapa de navegação, jornadas, wireframes, layouts responsivos, biblioteca de componentes, protótipo por perfil, anotações de campos/permissões e matriz de estados.

Se houver incorporação de portarias antigas, planejar o mapeamento do acervo e dos arquivos originais em uma atividade própria. Importação automática da planilha não é requisito já confirmado e depende do acesso à fonte e de validação dos dados.

## 14. Critérios de aceite e cenários de verificação

| ID | Cenário | Resultado esperado |
| --- | --- | --- |
| CA01 | Visitante tenta abrir busca, detalhe ou arquivo protegido | Acesso exige autenticação, inclusive por URL direta, RN1. |
| CA02 | Conta local e conta LDAP tentam recuperar senha | Conta local usa link no e-mail cadastrado; LDAP recebe orientação ao serviço institucional. |
| CA03 | Solicitação sem assunto, membros ou vigência | Envio bloqueado com erro específico; rascunho permanece recuperável conforme proposta. |
| CA04 | Servidor tenta elaborar/emitir por acesso direto | Operação recusada no backend; consulta/solicitação continuam conforme permissão. |
| CA05 | Emissor recebe demanda interna sem solicitação prévia | Pode iniciar elaboração sem criar uma solicitação artificial. |
| CA06 | Cadastro de servidor sem um dos campos obrigatórios | Cadastro não é concluído; erro indica o campo e preserva valores. |
| CA07 | Aluno/externo é incluído como membro | Nome/CPF tratados sem exigir os campos funcionais do servidor; comunicação segue D12. |
| CA08 | Docente recebe 10 h e depois valor superior em atividade administrativa | 10 h permitido; superior a 10 h bloqueado. Técnico e atividade não administrativa não recebem esse teto automaticamente. |
| CA09 | DAP/DEPE tenta alterar membro de outro departamento | Alteração/validação fora do escopo recusada. |
| CA10 | Portaria não atende aos obrigatórios da RN5 aplicáveis ao seu tipo | Avanço bloqueado com pendências de número, assunto, membros, horas e funções, conforme D07. |
| CA11 | Composição envolve vários departamentos ou é alterada após validação | Aprovações e nova análise seguem D04; nenhuma etapa fica concluída indevidamente. |
| CA12 | Usuário sem atribuição de DG/Vice tenta assinar | Ação recusada; administrador não recebe assinatura apenas por ser administrador. |
| CA13 | Documento é assinado, mas publicação ainda não foi comprovada | Etapas permanecem distintas; disparo de e-mail obedece ao marco homologado. |
| CA14 | Publicação e envio concluídos; uma mensagem falha | Documento e publicação permanecem; erro individual é visível e reenvio não duplica os sucessos. |
| CA15 | Busca por servidor, assunto, número e período | Todos os filtros RF6 funcionam; período tem semântica explícita e navegação restaura a lista. |
| CA16 | Portaria chega ao fim da vigência sem conclusão da atividade | É sinalizada como vencida conforme regra; não é automaticamente encerrada/revogada. |
| CA17 | Portaria é atualizada, renovada ou revogada | Relação com o ato anterior e histórico ficam disponíveis; documento anterior não é sobrescrito. |
| CA18 | Portaria normativa/revogadora é elaborada | Campos obrigatórios seguem D07, sem impor indevidamente composição de comissão. |
| CA19 | Relatórios e dashboard apresentam o mesmo recorte | Totais conferem com critérios homologados, sem duplicar por membro/versão ou somar categorias sobrepostas indevidamente. |
| CA20 | Usuário exporta relatório ou baixa documento | Escopo de acesso e restrições de dados pessoais permanecem aplicados. |
| CA21 | Rede falha em assinatura/publicação/envio ou há clique repetido | Não há confirmação falsa nem repetição indevida; situação é reconciliada com o servidor. |
| CA22 | Dois operadores editam a mesma versão | Conflito é identificado e tratado sem perda silenciosa. |
| CA23 | Data de vigência é consultada em diferentes configurações de fuso | Data civil permanece correta; histórico informa os instantes no fuso adotado. |
| CA24 | Uso por teclado, leitor de tela, mobile e zoom | Campos, documentos, seletores, tabelas, diálogos e decisões continuam utilizáveis. |
| CA25 | Serviço de atualização do dashboard cai | Tela informa desatualização; não apresenta os últimos dados como informação atual. |

Além dos cenários acima, revisar cada tela nos estados de carregamento, vazio, sem resultados, falha, sucesso, falta de permissão e sessão expirada. Testar alertas com o navegador fechado, pois o monitoramento não pode depender da sessão de um operador.

## 15. Matriz de rastreabilidade

| Requisito/regra | Cobertura planejada | Verificação principal |
| --- | --- | --- |
| RF1 | T01; seção 7.1 | Entrada local e sessão válida. |
| RF2 | T02; seção 7.1 | CA02; ciclo completo do link. |
| RF3 | T01/T02/T17; seções 7.1 e 11 | Autenticação institucional real e indisponibilidade. |
| RF4 | T04–T11; seções 6 e 7 | CA03–CA14; aceite explicitamente resolvido em D04. |
| RF5 | T11/T18; seções 7.6 e 8.3 | CA13/CA14; participação, vigência e anexo correto. |
| RF6 | T06/T07; seção 7.7 | CA15. |
| RF7 | T13; seção 8.2 | CA19/CA20; três relatórios da fonte. |
| RF8 | T03; seção 8.1 | CA19/CA25; atualização segundo D18. |
| RN1 | T01 e todas as rotas/arquivos de portarias | CA01. |
| RN2 | T02; seção 7.1 | CA02; e-mail previamente cadastrado. |
| RN3 | T02; seção 7.1 | CA02; LDAP não redefinido localmente. |
| RN4 | T05; seção 5.1 | CA03. |
| RN5 | T08/T09; seções 5.2 e 7.3 | CA10/CA18; aplicabilidade homologada. |
| RN6 | T09/T10; seções 6 e 7.4 | CA11; assinatura bloqueada antes das validações exigidas. |
| RN7 | T05/T08/T09; seção 7.3 | CA08; interpretação acumulada em D06. |
| RC1 | T14; seção 5.3 | CA06. |
| RC2 | T08/T15; seção 5.3 | CA07. |
| RC3 | T07/T08; seção 5.2 | Conferência de todos os campos e do documento gerado. |
| RC4 | T05/T08/T12; seções 5.2 e 7.8 | CA18 e ciclo de revogação. |
| RC5 | Seção 3; T08/T10 | CA04/CA12; resolução de D02/D03. |
| RC6 | T08/T16; seções 5.2 e 7.9 | Vincular múltiplos memorandos e consultar as referências. |
| RC7 | T07; seção 6.4 | CA17/CA22; acesso ao documento anterior. |
| RC8 | T03/T12/T18; seções 7.8 e 8.3 | CA16 e alertas sem navegador aberto. |
| RC9 | T13; seção 8.2 | Conferência das horas e sobreposições homologadas. |
| RC10 | T03/T06/T12/T13; seções 6.1 e 8 | CA19; nenhuma categoria da fonte omitida. |
| RC11 | T16/T17; seção 11 | Contrato futuro SIPAC e referências externas previstas. |
| RC12 | T05; seção 5.1 | Justificativa, propósito, membros, horas sugeridas e vigência. |

## 16. Fontes, limitações e conclusão do planejamento

1. **Fonte principal lida integralmente:** arquivo local `C:\Users\User\Downloads\gestor portaria, regras de negocio.txt`. O conteúdo é rascunho de negócio; suas ambiguidades estão registradas em D01–D18.
2. **Referência complementar consultada em 21/10/2026:** [Boletim de Serviço do IFC — Campus Videira](https://videira.ifc.edu.br/boletim-servico/). A página apresenta publicações organizadas por ano. A consulta ao índice não valida modelos internos, regras de assinatura ou integração automática com o sistema proposto.
3. **Referência indicada na fonte, sem conteúdo verificado:** [Planilha de registro](https://docs.google.com/spreadsheets/d/1X_pBkviYw58yedb37whMl9XOmuN4BwHLG2S1ymGVtR0/edit?gid=663350447). O endereço não pôde ser lido pela ferramenta nesta elaboração; nenhuma coluna, regra ou quantidade foi inferida da planilha.

**Condição para considerar a interface futura completa:** todas as capacidades RF1–RF8, RN1–RN7 e RC1–RC12 possuem telas e comportamentos implementados; decisões aplicáveis homologadas; testes de acesso, fluxo, documentos, dados, falhas e acessibilidade executados; aceite das áreas usuárias registrado.

**Conferência desta entrega:** o plano cobre todos os requisitos e regras numerados e os requisitos narrativos identificados; contém inventário de telas, campos, matriz de permissões, fluxos, estados, pendências, sequência de execução e critérios de aceite. Não foram executados testes de aplicação, pois a entrega é exclusivamente documental e não há interface implementada neste trabalho.
