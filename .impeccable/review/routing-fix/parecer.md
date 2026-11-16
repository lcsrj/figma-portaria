# Parecer independente — correções de navegação e apresentação

Data: 23/10/2026. Decisão: **ship limitado ao escopo revisado**. Nenhum impeditivo aberto após a confirmação final.

Revisão nova, motivada pelos problemas demonstrados pelo usuário. O parecer visual anterior não foi tratado como prova de navegação. Foram lidos PRODUCT.md, DESIGN.md, UX-CONTRACT.md e os scripts hotfix-routing.js, hotfix-images.js e hotfix-continuity.js. O launcher Impeccable não foi repetido.

## Evidências verificadas

Inspeção visual direta de email.png, mobileEmail.png, login.png, pendencias.png, expiry.png, mobileExpiry.png, admin.png, mobileAdmin.png, versions.png, documentDoc.png e renewForm.png nesta pasta. Na confirmação final, documentDoc-final.png foi inspecionada. O arquivo tab-audit.json contém 75 grupos desktop e 76 móveis, sem destinos ausentes e sem overflow registrado; seus destinos foram examinados, especialmente Pendências, Vencimentos e Documento. A auditoria anterior à última correção é complementada por reviewer-fix.json.

- Pendências mantém as três abas; Minhas conserva o contexto e a seleção Pendências. Informações aponta para tasksInfo, que conserva retornos para tasks e tasksMine, em desktop e móvel.
- Vencimentos mantém as cinco abas e os destinos próprios para Em breve, Vencidas, Sem término, Revogação futura e Em vigor. As capturas desktop/móvel preservam título, seleção e conteúdo correspondente.
- Confira seu e-mail apresenta os três comandos em coluna e dentro do painel nas duas larguras inspecionadas. Não há vazamento lateral visível.
- O acesso contém marca IFC e fotografia institucional real da biblioteca. A imagem ocupa espaço coerente e não encobre os comandos.
- As amostras de Administração, catálogo de versões, documento assinado e continuidade de vigência conservam a identidade e a organização do sistema.

Os cliques reais foram executados pelo agente principal, não por este revisor. Conforme seu registro: Pendências → Minhas → Informações → Da minha unidade e toda a sequência de abas de Vencimentos mantiveram HUD e seleção; Reenviar instruções permaneceu em recoverSent e atualizou o retorno para Instruções reenviadas; Abrir link de recuperação levou a reset no protótipo.

## Achado identificado e resolvido

**P2 — Aba atual do documento assinado regressava para minuta.** Em tab-audit.json, signed → Aba / Documento apontava para document em desktop e móvel. screens.js define document como MINUTA e signed como ASSINADO. O clique na aba atual mudava a versão documental sem escolha explícita no catálogo.

Correção mínima aplicada pelo agente principal: remover a reação dessa aba em signed. reviewer-fix.json confirma reactions=[] em 6:3427 (desktop) e 9:1713 (móvel). **Resolvido.** A seleção lateral Portarias também foi corrigida no contexto docente; documentDoc-final.png confirma título, perfil, documento assinado e seleção coerentes.

## Limites da decisão

Uma passada delimitada e uma confirmação do achado, sem modificar o Figma ou a implementação. A aprovação cobre as regressões e as amostras acima no protótipo nativo com entradas predefinidas. Não comprova backend, envio real de e-mail, edição livre, teclado, ARIA, integrações ou todas as jornadas do produto. A inspeção HTML/CSS não se aplica a esta entrega Figma.
