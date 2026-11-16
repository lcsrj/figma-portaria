# Revisão da referência fornecida — 11/11/2026

## Escopo

Reprodução da nova tela de login exclusivamente no arquivo Figma existente, conforme a escolha final do usuário. Referência: `C:/Users/User/Downloads/Gestor de Portarias — Campus Videira.png`. Foram conservados os estados de acesso vazio, preenchido e com erro e seus destinos de navegação.

## Avaliação independente

Um revisor sem o histórico de implementação comparou a referência, a fotografia original do refeitório e sete capturas: 1920 × 1080, 1440 × 900, 1366 × 768, 1024 × 768, 768 × 1024, 375 × 812 e o conteúdo móvel integral.

A revisão identificou um único achado material: a fotografia vizinha encobria parte da legenda da biblioteca na adaptação móvel. Não foram observados cortes de campos, botões ou textos essenciais nas demais capturas. A rolagem vertical móvel e de tablet foi considerada compatível com o conteúdo apresentado.

## Correção e veredicto

A legenda foi movida para uma linha própria, 8 px abaixo das fotografias, em todas as adaptações móveis e de tablet. O conteúdo móvel foi recapturado integralmente em 375 × 1079 px. Na verificação da correção, o revisor constatou: texto “Biblioteca - Campus Videira” integral e sem sobreposição; enquadramento do refeitório preservando fachada, extensão envidraçada, gramado e vegetação.

Veredicto final: **SHIP no escopo da lista original**, com o achado resolvido e nenhuma correção adicional exigida. Esse veredicto não representa aprovação de backend, teclado, leitor de tela ou autenticação real.

## Fidelidade e diferenças conhecidas

A hierarquia, o cartão arredondado, a tipografia, os espaçamentos, o verde institucional, as fotografias sobre as curvas e as três ações foram considerados suficientemente próximos da referência. A diagonal do refeitório foi adaptada para preservar o edifício em vez de cortar sua extremidade esquerda.

A arquitetura e a folhagem de fundo usam recortes desaturados da fotografia real fornecida, pois não havia asset separado da fachada de múltiplos pisos da referência. Isso reduz a fidelidade literal do cenário de fundo. No celular, a marca repetida dentro do cartão foi omitida; a identidade institucional permanece no cabeçalho.

## Evidências e limites

As capturas atuais estão em `.design/previews/referencia-*.png`, com o conteúdo integral móvel em `.design/previews/referencia-mobile-completo.png`. Campos, textos, botões, formas e curvas permanecem nativos e editáveis. A imagem completa da referência não foi inserida no arquivo.

A validação estrutural e o teste de alternância da senha foram realizados separadamente pelo implementador. A revisão independente avaliou as imagens; não executou as conexões do protótipo. O botão Acesso externo permanece visual, sem rota, porque esse fluxo não existia.

O encerramento automático do controle de fases do Impeccable com disposição ship foi recusado: os gates de especificação, plates, hero, sections, motion e responsive permaneciam abertos. As tentativas de override com evidências nativas também foram recusadas e não são tratadas como aprovação. O controle automático foi registrado com disposição fix, separado do parecer visual independente acima. Não foi concluída uma aprovação automática de fidelidade pixel a pixel ou de ranking tipográfico em browser. A entrega nativa é sustentada pelas capturas, pela auditoria do arquivo e pela revisão independente, com as diferenças de cenário explicitadas.
