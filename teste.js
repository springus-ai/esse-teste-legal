const aspectQuestions = [
    {
        id: 1,
        scenario: "1. Um grupo de amigos insiste em manter uma tradição anual que você acha cansativa. O que você faz?",
        voices: [
            { aspect: "Blood", difficulty: 0, check: "Passivo: Médio", text: "Se você faltar, a dinâmica do grupo quebra. Eles contam com a sua presença para fazer a coisa funcionar." },
            { aspect: "Breath", difficulty: 0, check: "Passivo: Fácil", text: "Essa obrigação é uma coleira. Cortar esse compromisso agora é a única forma de recuperar seu espaço e respirar em paz." },
            { aspect: "Doom", difficulty: 0, check: "Passivo: Fácil", text: "Bater de frente gasta muita energia inútil. Aceitar a regra e cumprir tabela é o caminho mais prático e indolor." }
        ],
        options: [
            { dialogue: "Acabo indo, mas só para cumprir o protocolo. Me incluíram, mas não significa que estou ali de corpo e alma.", thought: "Sua submissão passiva preserva sua energia enquanto você se torna invisível dentro do sistema.", weights: { Doom: 3, Life: 1, Breath: 1 } },
            { dialogue: "Insisto para que todos compareçam. Se a gente começar a abrir exceções, o grupo acaba se perdendo com o tempo.", thought: "Você assume o fardo da liderança para garantir que o tecido social não se rasgue.", weights: { Blood: 4, Breath: -2 } },
            { dialogue: "Não vou. Se não está me fazendo bem, não faz sentido me sentir preso a um compromisso só por obrigação.", thought: "Você corta a corrente. Sua autonomia é mais valiosa do que a manutenção forçada de laços.", weights: { Breath: 3, Void: 3, Life: 1, Blood: -3 } },
            { dialogue: "Tento convencer o pessoal a mudar um pouco o plano para algo que canse menos, mas que ainda sirva para a gente se reunir.", thought: "Você manipula a estrutura do evento para que ele se adapte à sua necessidade de controle.", weights: { Mind: 3, Life: 2, Space: 2, Heart: -1 } },
            { dialogue: "Analiso o motivo do meu cansaço. Pode não ter nada a ver com a tradição em si, mas com algum outro fator na minha vida que esteja me exaurindo.", thought: "Você volta o olhar para o seu núcleo, dissecando a causa antes de reagir ao efeito.", weights: { Heart: 3, Time: 2 } }
        ]
    },
    {
        id: 2,
        scenario: "2. Você descobre um erro grave de um colega de trabalho que é seu amigo. Isso pode prejudicá-lo no futuro. O que você faz?",
        voices: [
            { aspect: "Light", difficulty: 0, check: "Passivo: Fácil", text: "A verdade precisa vir à tona. Exponha o erro logo de cara e limpe a área de qualquer desinformação." },
            { aspect: "Void", difficulty: 0, check: "Passivo: Médio", text: "Ninguém precisa saber disso agora. Guarde a informação para você e evite um conflito que só vai gerar dor de cabeça." },
            { aspect: "Mind", difficulty: 2, check: "Ativo: Difícil", text: "Avalie o efeito dominó. Esse erro vai prejudicar a produtividade de todo mundo no futuro se não for isolado agora." }
        ],
        options: [
            { dialogue: "Digo a ele exatamente o que vi. Ele precisa ter todos os fatos em mãos para ter clareza sobre a própria situação.", thought: "A iluminação do fato é o único caminho para a clareza, independentemente do desconforto.", weights: { Light: 3, Rage: 3, Void: -3 } },
            { dialogue: "Mantenho segredo. Trazer isso à tona agora só criaria um clima ruim e uma atenção negativa que ninguém precisa.", thought: "Você escolhe o obscurecimento tático para se proteger do atrito das relações humanas.", weights: { Void: 4, Blood: 3, Light: -3 } },
            { dialogue: "Não me meto. Se o erro aconteceu, as consequências virão naturalmente e não acho que eu deva interferir no que tem que ser.", thought: "Você aceita o fluxo entrópico das coisas. O que está quebrado deve seguir seu destino.", weights: { Doom: 3, Time: 3, Life: -2 } },
            { dialogue: "Aviso ele e ajudo a bolar uma forma de consertar o erro antes que isso gere um efeito dominó e piore as coisas.", thought: "Você age como um reparador, injetando vitalidade para curar a falha antes que ela apodreça.", weights: { Life: 3, Space: 1, Mind: 1 } },
            { dialogue: "Depende. O erro dele pode me prejudicar ou as pessoas ao meu redor.", thought: "A decisão aguarda uma equação utilitária baseada nas consequências para o seu sistema.", weights: { Mind: 3, Time: 2, Doom: -2 } }
        ]
    },
    {
        id: 3,
        scenario: "3. Ao iniciar um novo projeto pessoal, qual é a sua maior preocupação?",
        voices: [
            { aspect: "Space", difficulty: 0, check: "Passivo: Médio", text: "A ideia é boa, mas o mundo real é restrito. Você vai ter que adaptar e cortar partes disso para caber no que tem à disposição." },
            { aspect: "Time", difficulty: 0, check: "Passivo: Fácil", text: "Você sabe que seu foco não dura para sempre. É melhor acelerar e tirar isso do papel antes que a vontade de terminar acabe." },
            { aspect: "Heart", difficulty: 2, check: "Ativo: Médio", text: "Isso tem que ter a sua cara. Se o projeto não for autêntico e verdadeiro para você, não faz sentido nem começar a criar." }
        ],
        options: [
            { dialogue: "Se eu vou conseguir dar forma a tudo o que imaginei e fazer aquilo realmente ocupar o espaço que merece no mundo.", thought: "A angústia da materialização. Você teme que a realidade física traia a sua visão.", weights: { Space: 3, Hope: 2, Time: -2 } },
            { dialogue: "Se terei a disciplina necessária para não desistir do projeto antes de finalizar.", thought: "Você luta contra a degradação da vontade. A entropia é o seu maior adversário.", weights: { Time: 3, Breath: 2, Space: -2, Life: 1 }, destroys: "Space" },
            { dialogue: "Se esse projeto realmente diz algo verdadeiro sobre mim ou se estou apenas seguindo um impulso que não me representa.", thought: "A busca pela autenticidade nuclear. Você precisa que a obra seja um espelho fiel da sua alma.", weights: { Heart: 3, Rage: 3, Mind: -3 } },
            { dialogue: "Se eu tomei as decisões certas no planejamento ou se estou ignorando alguma falha que vai arruinar o resultado depois.", thought: "A apreensão se fixa na fundação teórica para evitar construir sobre uma variável falha.", weights: { Mind: 3, Light: 1, Heart: -3 } },
            { dialogue: "Se isso que estou criando tem potencial para me levar a lugares novos e realmente mudar minha situação atual.", thought: "O valor da criação é medido estritamente pelo poder de expansão e status que ela irá gerar.", weights: { Life: 3, Light: 2, Doom: -3 } }
        ]
    },
    {
        id: 4,
        scenario: "4. Como você lida com uma crítica dura sobre sua competência?",
        voices: [
            { aspect: "Heart", difficulty: 0, check: "Passivo: Médio", text: "O seu núcleo identitário sofreu um impacto direto. A percepção do seu valor próprio está descompassada com a imagem projetada." },
            { aspect: "Doom", difficulty: 0, check: "Passivo: Fácil", text: "O limite foi exposto. A falha existe, é real, tangível e agora faz parte do registro público do ambiente." },
            { aspect: "Light", difficulty: 2, check: "Ativo: Médio", text: "A informação foi lançada. Resta saber se o dado fornecido pelo agressor contém utilidade tática ou se é apenas ruído vazio." }
        ],
        options: [
            { dialogue: "Avalio se os pontos levantados fazem sentido ou se a pessoa apenas tomou uma decisão errada ao me julgar daquela forma.", thought: "Você avalia o núcleo da crítica antes de absorver o impacto.", weights: { Heart: 3, Time: 1 } },
            { dialogue: "Me irrito profundamente. Minha competência não deve ser questionada pois exerço meu trabalho sempre com maestria.", thought: "A fúria blinda a sua identidade contra a desvalorização externa.", weights: { Heart: 3, Light: 2 } },
            { dialogue: "Fico questionando a real intenção por trás da crítica. As pessoas podem julgar por muitos motivos diferentes.", thought: "Você desvia o holofote para as motivações ocultas do agressor para esvaziar a ofensa.", weights: { Light: 3, Rage: 2 } },
            { dialogue: "Aceito o que foi dito. Se eu falhei em ser eficiente, é natural que eu tenha que lidar com as cobranças e os resultados disso.", thought: "Você se submete ao peso da consequência, reconhecendo os limites das suas ações.", weights: { Doom: 3, Void: 1, Time: 2, Life: -2 } },
            { dialogue: "Tento enxergar o que a pessoa viu. Às vezes ela percebeu algum detalhe ou uma informação importante que passou batido por mim.", thought: "Você busca extrair o dado útil para reparar a estrutura e a relação.", weights: { Blood: 3, Light: 2, Void: -2 } }
        ]
    },
    {
        id: 5,
        scenario: "5. Em uma discussão acalorada, o que mais te irrita nos outros?",
        voices: [
            { aspect: "Rage", difficulty: 0, check: "Passivo: Fácil", text: "A falsidade está palpável. As tentativas de manter a polidez estão mascarando a raiz real e podre do problema." },
            { aspect: "Mind", difficulty: 0, check: "Passivo: Médio", text: "A linearidade do raciocínio foi quebrada. Decisões estão a ser tomadas com base em picos químicos e não na correlação lógica." },
            { aspect: "Light", difficulty: 3, check: "Ativo: Difícil", text: "A sobrecarga de dados irrelevantes está a ofuscar o núcleo da questão. A desatenção generalizada impede o foco." }
        ],
        options: [
            { dialogue: "Gente que tenta 'amaciar' a situação ou manter um otimismo forçado quando as coisas estão claramente um desastre.", thought: "A tentativa covarde de adoçar o problema ofende sua busca pela verdade bruta.", weights: { Rage: 3, Life: 2, Hope: -3 } },
            { dialogue: "Gente que não interfere ou que se fecha para possibilidades só porque 'as regras não permitem' ou 'é impossível'.", thought: "O conformismo diante do limite ofende a sua convicção de que tudo pode ser superado.", weights: { Hope: 4, Life: 1, Rage: 1 } },
            { dialogue: "Gente que trata o problema de forma fria e técnica demais, ignorando completamente o que as pessoas envolvidas estão sentindo.", thought: "A frieza maquinal desumaniza o conflito, e você repudia a anulação da alma.", weights: { Heart: 3, Breath: 2, Mind: -3, Time: -1 } },
            { dialogue: "Gente que perde o controle e começa a agir por puro impulso emocional, sem parar um segundo para pensar no que é mais sensato fazer.", thought: "O abandono da lógica reduz o ambiente ao caos animal, arruinando qualquer estratégia.", weights: { Mind: 3, Space: 1, Heart: -3 } },
            { dialogue: "Gente que fica dando voltas e focando em detalhes que não servem para nada, em vez de ir direto ao ponto que realmente importa.", thought: "O ruído irrelevante ofusca a raiz do problema. A falta de objetividade é exaustiva.", weights: { Light: 3, Blood: 2, Time: 2, Void: -2 } }
        ]
    },
    {
        id: 6,
        scenario: "6. Você tem um final de semana livre. Como se sente parado?",
        voices: [
            { aspect: "Time", difficulty: 0, check: "Passivo: Fácil", text: "O relógio continua operando. O silêncio é o som do desgaste contínuo de um recurso que não pode ser recuperado." },
            { aspect: "Breath", difficulty: 0, check: "Passivo: Fácil", text: "A gravidade foi suspensa. A agenda vazia é um campo de oxigênio limpo, livre das correntes invisíveis da expectativa alheia." },
            { aspect: "Blood", difficulty: 2, check: "Ativo: Médio", text: "A ausência de atrito social ecoa como negligência. As engrenagens coletivas estão a esfriar sem a sua manutenção." }
        ],
        options: [
            { dialogue: "Inquieto. Sinto que cada hora que passo sem produzir algo concreto é um desperdício de um recurso que não volta mais.", thought: "A inércia é corrosiva. O tique-taque mental exige conversão de tempo em resultado.", weights: { Time: 3, Life: 1, Space: -2 } },
            { dialogue: "Meio culpado. Estar sozinho e parado me faz sentir que estou falhando com as pessoas que dependem de mim ou que estou perdendo o contato com o que importa.", thought: "A quebra do atrito social ecoa como abandono. A ausência de dever sufoca.", weights: { Blood: 3, Rage: 3, Doom: 1, Breath: -3 } },
            { dialogue: "Leve. Aproveito a tranquilidade e uso meu tempo para focar no que gosto de fazer e no que me der na telha.", thought: "A suspensão das expectativas alheias é o oxigênio que a sua autonomia exige.", weights: { Breath: 3, Space: 3, Hope: 2, Time: -3 } },
            { dialogue: "Reflexivo. Uso o silêncio para tentar entender se o que eu estou fazendo da vida hoje é o que eu realmente quero.", thought: "O silêncio força o espelho para dentro. Você isola o ruído para escutar o próprio núcleo.", weights: { Heart: 3, Life: 2, Mind: -1, Light: -1 } },
            { dialogue: "Entediado. Se não houver algo novo acontecendo ou algum estímulo externo, sinto como se minha energia estivesse estagnando.", thought: "A falta de movimento é biológicamente opressiva. Você precisa consumir o ambiente para viver.", weights: { Life: 3, Rage: 1, Mind: 2, Doom: -2 } }
        ]
    },
    {
        id: 7,
        scenario: "7. O que mais te atrai em alguém que você acabou de conhecer?",
        voices: [
            { aspect: "Heart", difficulty: 0, check: "Passivo: Médio", text: "Onde está a fissura na máscara? A busca por incongruência entre o que é falado e a identidade real começa." },
            { aspect: "Mind", difficulty: 0, check: "Passivo: Médio", text: "O radar busca clareza arquitetônica no pensamento alheio. O ruído sentimental deve ser isolado e descartado." },
            { aspect: "Light", difficulty: 2, check: "Ativo: Médio", text: "A barreira opaca que ela ergue transforma a interação numa investigação. O que está oculto brilha mais do que o exibido." }
        ],
        options: [
            { dialogue: "A autenticidade. Sinto-me atraído por quem parece estar em paz consigo mesmo e não finge ser o que não é.", thought: "A consistência entre a identidade e a máscara gera conforto imediato.", weights: { Heart: 3, Blood: 2, Mind: -2 } },
            { dialogue: "A objetividade. Admiro quem consegue ser direto e coerente, sem deixar que o ego ou as emoções nublem o que é sensato.", thought: "A clareza arquitetônica do pensamento alheio poupa você de labirintos emocionais.", weights: { Mind: 1, Light: 3, Heart: -3 } },
            { dialogue: "A confiabilidade. Gosto de pessoas que transmitem segurança e que parecem levar a sério os compromissos que assumem.", thought: "O peso das garantias oferecidas mitiga o seu medo do abandono.", weights: { Blood: 3, Rage: 1, Doom: 3, Breath: -2 } },
            { dialogue: "O mistério. Sou cativado por quem não se expõe logo de cara e me sinto compelido a desvendar o que está por trás da máscara.", thought: "A barreira opaca transforma a interação numa investigação intelectual.", weights: { Light: 2, Doom: 2, Void: -3 } },
            { dialogue: "A inovatividade. Me interesso por quem parece estar sempre criando ou transformando algo ao seu redor.", thought: "O potencial para remodelar a realidade física cativa o seu olhar.", weights: { Space: 3, Life: 2, Time: -2 } }
        ]
    },
    {
        id: 8,
        scenario: "8. Você precisa demitir alguém esforçado sem resultados. Como lida?",
        voices: [
            { aspect: "Life", difficulty: 0, check: "Passivo: Fácil", text: "Ainda há pulsação ali. A amputação parece prematura; o potencial inexplorado grita sob os relatórios frios." },
            { aspect: "Doom", difficulty: 0, check: "Passivo: Médio", text: "As opções evaporaram. O sistema determinou a restrição, e você é apenas o peso bruto que confirma o encerramento." },
            { aspect: "Rage", difficulty: 2, check: "Ativo: Difícil", text: "A ineficiência ofende o atrito necessário da realidade. A mentira de que as coisas vão melhorar precisa ser estraçalhada." }
        ],
        options: [
            { dialogue: "Foco no que é necessário para o sistema funcionar. Se uma peça não está cumprindo seu papel, ela precisa ser podada para servir ao todo.", thought: "A frieza matemática justifica o corte para manter a máquina estrutural operando.", weights: { Mind: 3, Space: 2, Blood: 2, Life: -3 } },
            { dialogue: "Tento dar mais uma chance ou mudar a pessoa de função. Acredito que, com o estímulo certo, qualquer um pode florescer e dar a volta por cima.", thought: "Você prefere injetar energia a aceitar a falência biológica e estrutural do indivíduo.", weights: { Life: 3, Hope: 3, Doom: -3 } },
            { dialogue: "Sinto o peso da decisão. Tento fazer o processo ser o menos doloroso possível, garantindo que a pessoa saiba que ainda tem meu apoio pessoal.", thought: "Amortecer a pancada ajuda a proteger o tecido humano e alivia a sua culpa.", weights: { Breath: 3, Doom: 2, Heart: 2, Mind: -1 } },
            { dialogue: "Sou direto e honesto sobre os fatos. Mentir ou dar falsas esperanças só faria a pessoa perder tempo em um lugar onde ela não terá futuro.", thought: "A verdade abrasiva atua como cauterizador. Destruir a ilusão é a forma suprema de respeito.", weights: { Rage: 3, Light: 2, Hope: -3 } },
            { dialogue: "Analiso a situação de fora. Se o desligamento é a conclusão lógica baseada nos dados, eu executo a decisão sem deixar que o sentimentalismo interfira no veredito.", thought: "Você recua a própria consciência, tornando a decisão burocrática e inquestionável.", weights: { Void: 3, Space: 2, Heart: -3 } }
        ]
    },
    {
        id: 9,
        scenario: "9. Qual é a sua relação com lembranças, fotos e o passado?",
        voices: [
            { aspect: "Time", difficulty: 0, check: "Passivo: Fácil", text: "A matéria retém o atrito temporal. O eco do passado irradia uma radiação pesada sobre a superfície do presente." },
            { aspect: "Space", difficulty: 0, check: "Passivo: Médio", text: "Estes são os alicerces geológicos do seu estado atual. A dimensão da estrutura presente depende desta argamassa." },
            { aspect: "Hope", difficulty: 3, check: "Ativo: Difícil", text: "O rastro deixado acende a fornalha. A evidência de que a existência persistiu justifica a recusa em ceder ao desespero." }
        ],
        options: [
            { dialogue: "Guardo objetos e fotos com cuidado. Ter algo físico para tocar me ajuda a sentir que aqueles momentos e pessoas ainda ocupam um espaço real na minha vida.", thought: "A materialidade do tempo anestesia o terror da degradação mortal.", weights: { Time: 3, Doom: 2, Space: -2 } },
            { dialogue: "Olho para o passado com apreço. O futuro só existe por conta do passado, seja ele bom ou ruim.", thought: "Reconhecer as fundações geológicas fornece estabilidade para continuar expandindo.", weights: { Space: 3, Hope: 3 } },
            { dialogue: "O passado serve como aprendizado. Guardo o que aconteceu apenas para analisar as consequências das minhas escolhas e não cometer o mesmo erro de novo.", thought: "O arquivo histórico é mantido puramente pelo seu valor profilático e utilitário.", weights: { Mind: 3, Light: 1 } },
            { dialogue: "Minhas memórias são o que me dão força. Acredito que o que vivi é a prova de que coisas melhores ainda podem ser construídas no futuro.", thought: "Revisitar o passado é extrair combustível para sustentar a fé no amanhã.", weights: { Hope: 3, Breath: 2, Rage: 2 } },
            { dialogue: "Não dou muita importância. O que passou já perdeu o brilho; prefiro focar no agora sem carregar o peso do que já foi.", thought: "Obliteração das âncoras. Você preza a leveza do presente sem assombrações.", weights: { Void: 3, Breath: 2, Time: -2 } }
        ]
    },
    {
        id: 10,
        scenario: "10. Diante de um impasse sem solução, qual sua reação?",
        voices: [
            { aspect: "Doom", difficulty: 0, check: "Passivo: Fácil", text: "Bateu no teto. Não dá para passar por aqui, o limite físico da situação não permite avançar mais." },
            { aspect: "Light", difficulty: 2, check: "Ativo: Médio", text: "Se está travado, é porque tem algo que você não sabe. Ache a peça que falta e o caminho se abre." },
            { aspect: "Hope", difficulty: 3, check: "Ativo: Difícil", text: "A parede só existe se você aceitar que ela está lá. Mantenha o foco no objetivo e ignore o bloqueio." }
        ],
        options: [
            { dialogue: "Tento forçar uma solução. Às vezes a única saída é forçar a passagem e derrubar o que está bloqueando o caminho, custe o que custar.", thought: "A recusa da passividade exige a demolição do obstáculo na base do atrito violento.", weights: { Doom: 3, Rage: 1, Hope: -2 } },
            { dialogue: "Aceito o limite. Se o caminho fechou, é porque chegamos ao fim da linha e não adianta lutar contra uma situação que já está decidida.", thought: "O fatalismo economiza energia. O encerramento impede a queima inútil de forças.", weights: { Time: 3, Life: -3 } },
            { dialogue: "Não aceito que não tenha solução. Acredito que sempre há uma saída se persistirmos e mantivermos a convicção.", thought: "A fé dogmática cega você para a impossibilidade física, mantendo os motores ligados.", weights: { Hope: 3, Rage: 3, Life: 1 } },
            { dialogue: "Tento bolar uma ferramenta nova ou abordar o problema por um ângulo diferente para contornar o obstáculo.", thought: "O mapeamento geométrico contorna o problema alterando a física do tabuleiro.", weights: { Space: 3, Breath: 2, Mind: 3, Time: -1 } },
            { dialogue: "Paro tudo e volto a investigar. Se parece sem solução, é porque ainda tem algum detalhe importante que eu não consegui enxergar.", thought: "A resposta oculta existe e exige iluminação. Você não ataca, você disseca.", weights: { Light: 3, Time: 1, Void: -3 } }
        ]
    },
    {
        id: 11,
        scenario: "11. Um segredo perigoso chega até você. O que pensa?",
        voices: [
            { aspect: "Blood", difficulty: 0, check: "Passivo: Médio", text: "Esse segredo é perigoso para o grupo. Soltar isso agora vai gerar um caos que as pessoas não estão prontas para lidar." },
            { aspect: "Void", difficulty: 0, check: "Passivo: Fácil", text: "Você não precisa saber disso. Ignorar a informação é o melhor jeito de não se envolver em problema dos outros." },
            { aspect: "Mind", difficulty: 2, check: "Ativo: Difícil", text: "Essa informação é útil. Guarde ela com você. Entender os segredos dos outros te dá vantagem na hora de decidir o que fazer." }
        ],
        options: [
            { dialogue: "Se essa informação me foi confiada ou se ela pode afetar as pessoas ao meu redor, eu a guardo comigo, não importa o peso.", thought: "Absorver a toxicidade sozinho preserva os laços e evita a implosão coletiva.", weights: { Blood: 3, Doom: 2, Void: 2, Breath: -2 } },
            { dialogue: "Se esse segredo for revelado no momento certo, ele pode trazer a clareza que todos precisam para agir.", thought: "O dado é uma lanterna estratégica; a revelação será cirúrgica para forçar o foco.", weights: { Light: 3, Mind: 1, Void: -3 } },
            { dialogue: "Segredos geralmente são usados para esconder verdades feias ou para manipular quem não sabe de nada.", thought: "O ceticismo ataca a estrutura da mentira. Desmantelar a farsa é um ato de rebelião.", weights: { Mind: 3, Rage: 2, Hope: -2 } },
            { dialogue: "Não quero saber. Não quero que essa informação mude minha paz ou me obrigue a tomar partido.", thought: "O instinto de autopreservação exige a recusa. Menos dados = menos amarras.", weights: { Void: 3, Breath: 2, Light: -3 } },
            { dialogue: "Um segredo é apenas mais uma variável que pode alterar o resultado das minhas escolhas futuras.", thought: "A informação foi desprovida de moralidade e arquivada como munição logística.", weights: { Mind: 2, Time: 2, Heart: -2 } }
        ]
    },
    {
        id: 12,
        scenario: "12. O grupo insiste em um plano fadado ao erro por otimismo. O que faz?",
        voices: [
            { aspect: "Rage", difficulty: 0, check: "Passivo: Fácil", text: "Ninguém está vendo a burrice desse plano? Fale a verdade antes que todo mundo se prejudique à toa." },
            { aspect: "Mind", difficulty: 0, check: "Passivo: Médio", text: "Esse plano não faz o menor sentido prático. Mostre o erro de cálculo para eles e proponha algo que realmente funcione." },
            { aspect: "Hope", difficulty: 3, check: "Ativo: Difícil", text: "O plano é ruim, mas a energia do grupo é boa. Se todo mundo acreditar e se esforçar, dá para fazer dar certo." }
        ],
        options: [
            { dialogue: "Digo abertamente que vai dar errado. Prefiro ser o chato que fala a verdade do que ver todo mundo se perdendo numa mentira confortável.", thought: "A detonação violenta da ilusão é a única vacina contra o entusiasmo burro.", weights: { Rage: 3, Blood: 2, Hope: -3 } },
            { dialogue: "Mostro por que a ideia não faz sentido e apresento uma alternativa. Não vou seguir um caminho que a lógica já mostra que é um beco sem saída.", thought: "A desmontagem clínica visa redirecionar as variáveis lógicas e evitar o desastre prático.", weights: { Mind: 3, Light: 1, Heart: -2, Void: -3 } },
            { dialogue: "Me omito. Se foram eles bolaram o plano, deve ter alguma lógica - não cabe a mim interferir.", thought: "O desengajamento isenta a responsabilidade. Se a máquina bater, você já saltou do trem.", weights: { Void: 3, Doom: 1, Rage: -2 } },
            { dialogue: "Vou com eles. Acredito que, se a gente mantiver o ânimo e a convicção, a nossa vontade pode acabar mudando o resultado final.", thought: "A convicção no grupo sobrepõe o cálculo frio. A fé como combustível puro.", weights: { Hope: 3, Life: 2, Rage: -2 } },
            { dialogue: "Observo o desenrolar das coisas. Se eles escolheram esse caminho, o fracasso é a consequência natural e eu vou usar a experiência para não repetir o erro.", thought: "O abismo transforma-se em laboratório. Você coleta dados observando a queda.", weights: { Space: 3, Light: 2, Time: -3 } }
        ]
    },
    {
        id: 13,
        scenario: "13. Você está em um local onde ninguém te conhece. Como se sente?",
        voices: [
            { aspect: "Breath", difficulty: 0, check: "Passivo: Fácil", text: "Ninguém aqui te conhece e não esperam nada de você. Aproveite esse espaço livre para agir como quiser." },
            { aspect: "Light", difficulty: 0, check: "Passivo: Médio", text: "Você não significa nada para essas pessoas. Tente encontrar alguém para interagir ou algo para fazer e não ficar sobrando." },
            { aspect: "Blood", difficulty: 2, check: "Passivo: Difícil", text: "Qual o seu papel aqui? Sem uma função ou alguém conhecido, você fica deslocado e sem saber como agir na sala." }
        ],
        options: [
            { dialogue: "Livre. Sem expectativas, posso agir sem ser rotulado.", thought: "A irrelevância social corta as correntes. O vácuo destranca as articulações.", weights: { Breath: 3, Space: 2, Blood: -2, Life: 1 } },
            { dialogue: "Prostrado. Preciso encontrar algo, ou alguém, que me conforte e valide a minha existência.", thought: "A ausência de atenção drena o seu ser. Você precisa espelhar-se em alguém.", weights: { Light: 3, Heart: 2, Void: 2, Breath: -3 } },
            { dialogue: "Observador. Chance perfeita para analisar a dinâmica do local, sem me envolver.", thought: "O anonimato tático. Camuflado, você engole a física social do ambiente.", weights: { Void: 2, Time: 3, Heart: -1 } },
            { dialogue: "Imaginativo. Tomo o momento para me refugiar na minha própria cabeça.", thought: "O exterior desaparece e você foca em cenários ideais isolados do desconforto físico.", weights: { Hope: 3, Blood: 1, Void: -3 } },
            { dialogue: "Desconectado. Sozinho, não tenho um motivo para estar aqui.", thought: "A solidão cessa a validade do seu 'eu'. As engrenagens travam sem o toque alheio.", weights: { Blood: 3, Doom: 2, Breath: -3 } }
        ]
    },
    {
        id: 14,
        scenario: "14. Você precisa magoar alguém para um objetivo. O que dói?",
        voices: [
            { aspect: "Heart", difficulty: 0, check: "Passivo: Médio", text: "Fazer isso vai contra os seus princípios. Pisar em alguém para conseguir o que quer não combina com quem você é." },
            { aspect: "Life", difficulty: 0, check: "Passivo: Fácil", text: "Você está prejudicando o potencial dessa pessoa. Cortar as asas de alguém para o seu próprio benefício é errado." },
            { aspect: "Doom", difficulty: 2, check: "Passivo: Difícil", text: "Era a única opção viável. O estrago foi necessário, mas a responsabilidade pelo dano pesa na consciência." }
        ],
        options: [
            { dialogue: "O fato de que estou sendo falso comigo mesmo. Odeio ter que agir contra o que eu sinto que é certo só para cumprir uma meta.", thought: "A violação nuclear é ácida. Ferir a própria bússola destrói o centro de gravidade.", weights: { Heart: 3, Blood: -2, Hope: 2 } },
            { dialogue: "A frustração de não ter encontrado uma solução melhor. Magoar alguém foi o sacrifício necessário.", thought: "A amargura fatalista anestesia a escolha: se era a única rota, a culpa é da estrutura, não sua.", weights: { Doom: 3, Light: 3, Heart: -3 } },
            { dialogue: "A quebra da confiança. Saber que essa atitude vai manchar ou destruir o vínculo que eu tinha com aquela pessoa, talvez para sempre.", thought: "O estilhaçamento da aliança queima mais que o obstáculo a ser vencido.", weights: { Blood: 3, Time: 2, Breath: -2 } },
            { dialogue: "A necessidade do sacrifício. É péssimo ter que passar por cima de alguém ou de algo vivo para que o projeto continue avançando.", thought: "Atrofiar a expansão vital de outrem contradiz o seu impulso natural de crescimento.", weights: { Life: 3, Breath: 2, Hope: 1, Doom: -3 } },
            { dialogue: "A confirmação de que o mundo é cruel. Magoar alguém é apenas a realidade batendo à porta, mostrando que nem tudo se resolve com boas intenções.", thought: "A dor valida o seu cinismo absoluto. O universo não funciona com gentilezas.", weights: { Rage: 3, Doom: 1, Hope: -3 } }
        ]
    },
    {
        id: 15,
        scenario: "15. Qual o seu maior medo em relação ao futuro?",
        voices: [
            { aspect: "Breath", difficulty: 0, check: "Passivo: Fácil", text: "Ficar estagnado é o seu maior medo. A ideia de perder opções e ficar amarrado a uma única situação te apavora." },
            { aspect: "Time", difficulty: 0, check: "Passivo: Médio", text: "O tempo está passando rápido demais. Você sente a pressão de que não vai conseguir fazer tudo o que precisa." },
            { aspect: "Light", difficulty: 2, check: "Ativo: Difícil", text: "Não ser lembrado. Passar a vida em branco sem causar nenhum impacto real nas pessoas ao seu redor." }
        ],
        options: [
            { dialogue: "Ficar preso a uma rotina ou a um lugar de onde eu não consiga sair. A ideia de perder a minha autonomia e ser confinado me apavora.", thought: "A claustrofobia do destino estático sufoca a respiração e atrofia a perna.", weights: { Breath: 3, Void: 2, Time: -3 } },
            { dialogue: "Perceber que meus ideais eram vazios e que o futuro emininente é sem sentido, onde nada do que eu acreditei pode florescer.", thought: "A evaporação da convicção transforma o horizonte num cemitério sem valor material.", weights: { Hope: 3, Life: 3, Time: -3 } },
            { dialogue: "Perceber que a minha existência não teve importância nenhuma ou que eu passarei pelo mundo sem que ninguém realmente me tenha visto.", thought: "O pânico da irrelevância cega. Para que viver sem que exista um holofote atestando o esforço?", weights: { Light: 3, Heart: 3, Void: -3 } },
            { dialogue: "Ser exposto de uma forma que eu não consiga controlar. Tenho medo que vasculhem a minha vida e tirem de mim a paz do anonimato.", thought: "A destruição da invisibilidade é a quebra brutal da sua segurança base.", weights: { Void: 3, Mind: 2, Light: -3 } },
            { dialogue: "Não ter tempo suficiente. Sinto uma angústia constante de que o tempo está acabando e eu não vou conseguir concluir o que é necessário antes que o prazo expire.", thought: "A corrosão irrevogável do relógio aniquila as ambições. A mortalidade apressa.", weights: { Time: 3, Doom: 3, Space: -2 } }
        ]
    },
    {
        id: 16,
        scenario: "16. Você recebe uma tarefa repetitiva. Como reage?",
        voices: [
            { aspect: "Time", difficulty: 0, check: "Passivo: Fácil", text: "Rotina é previsível. Aceite a tarefa e faça o que tem que ser feito; a repetição não te incomoda." },
            { aspect: "Life", difficulty: 0, check: "Passivo: Médio", text: "Fazer a mesma coisa de novo e de novo trava a sua criatividade. Você precisa de espaço para crescer, não de cimento." },
            { aspect: "Mind", difficulty: 2, check: "Passivo: Difícil", text: "Se a tarefa é repetitiva, ela pode ser otimizada. Ache um jeito de fazer isso mais rápido ou de forma automática." }
        ],
        options: [
            { dialogue: "Aceito-a. Há um certo conforto na repetição; saber exatamente o que esperar e cumprir o ciclo me dá uma sensação de segurança e ordem.", thought: "A cadência monótona é sedativa. Entregar-se à repetição garante a não-decisão.", weights: { Doom: 3, Time: 3, Space: -2, Life: -2 } },
            { dialogue: "Sinto-me sufocado. Odeio qualquer coisa que me obrigue a ficar parado ou que impeça o meu crescimento e a busca por algo mais vibrante.", thought: "O cimento biológico da mesmice bloqueia o potencial vibratório natural das células.", weights: { Life: 3, Breath: 2, Doom: -3 } },
            { dialogue: "Tento encontrar o padrão por trás daquilo. Se eu entender como o processo funciona, posso otimizá-lo e executá-lo de forma automática.", thought: "O córtex frita a tarefa. Dominar a matriz lógica silencia o desgosto da repetição.", weights: { Mind: 3, Space: 2, Heart: -1 } },
            { dialogue: "Encaro como uma oportunidade para 'desligar'. Cumpro a função mecanicamente enquanto a minha mente dissocia.", thought: "A anulação do foco exterior escurece o ruído interno, economizando energia anímica.", weights: { Void: 3, Breath: 3, Light: -2 } },
            { dialogue: "Questiono a tarefa. Não me importo em ter que fazê-la, mas sim com o objetivo dela.", thought: "O propósito deve estar exposto. Fazer por fazer enfurece o questionamento racional.", weights: { Rage: 2, Light: 3 } }
        ]
    },
    {
        id: 17,
        scenario: "17. Em uma competição, o que é o sucesso?",
        voices: [
            { aspect: "Hope", difficulty: 0, check: "Passivo: Fácil", text: "Ganhar é provar um ponto. A vitória significa que o seu ideal estava certo e pode inspirar os outros." },
            { aspect: "Space", difficulty: 0, check: "Passivo: Médio", text: "O troféu é o que importa. O sucesso é o resultado palpável e irrefutável do seu esforço prático." },
            { aspect: "Rage", difficulty: 2, check: "Ativo: Difícil", text: "Ganhar é calar os críticos. A vitória é a prova definitiva de que você é melhor e eles estavam errados." }
        ],
        options: [
            { dialogue: "A perpetuação de um ideal. O sucesso é mostrar que o que eu acredito é possível e conseguir inspirar os outros com esse resultado.", thought: "A transformação da vitória num pilar para o futuro justifica o suor investido.", weights: { Hope: 3, Breath: 1, Life: 1, Rage: -3 } },
            { dialogue: "A vitória. O sucesso é quando a competição revela quem realmente é competente e quem não é.", thought: "O estilhaçamento da incompetência alheia pelo mérito bruto lava o cenário de ilusões.", weights: { Rage: 2, Light: 3, Hope: -3, Void: -3 } },
            { dialogue: "A camaradagem. O sucesso não é ganhar sozinho, mas garantir que todos saíram fortalecidos da experiência.", thought: "O fortalecimento das fibras conectivas transcende a pontuação arbitrária do ego individual.", weights: { Blood: 3, Heart: 1, Breath: -2 } },
            { dialogue: "A perfeição do resultado. O sucesso é quando o que foi entregue atinge um nível de excelência técnica que não pode ser contestado.", thought: "A precisão milimétrica atesta a integridade do trabalho executado de forma impecável.", weights: { Space: 3, Mind: 2, Time: -2 } },
            { dialogue: "A satisfação de ter dado meu melhor. Se me esforcei, independentemente do placar, estou satisfeito.", thought: "A validação é estritamente interna. O núcleo alimentado ignora os placares exteriores.", weights: { Heart: 3, Void: 1, Mind: -3 } }
        ]
    },
    {
        id: 18,
        scenario: "18. Se você descobrisse que toda a sua trajetória até aqui foi, na verdade, planejada ou 'escrita' por outra pessoa, qual seria seu maior incômodo?",
        voices: [
            { aspect: "Heart", difficulty: 0, check: "Passivo: Médio", text: "Se tudo foi escrito, as suas escolhas não têm valor. Saber que a sua personalidade foi manipulada te irritaria profundamente." },
            { aspect: "Doom", difficulty: 0, check: "Passivo: Fácil", text: "Você já não tem controle agora, imagine sabendo disso. Aceitar o roteiro seria apenas confirmar a sua própria limitação." },
            { aspect: "Breath", difficulty: 2, check: "Ativo: Difícil", text: "A liberdade de escolha acabou. A pior parte é saber que você não tem como fugir dos trilhos que colocaram para você." }
        ],
        options: [
            { dialogue: "O fato de que minhas escolhas não foram realmente minhas. É irritante pensar que minha vontade foi apenas uma peça em um tabuleiro que eu não controlei.", thought: "O roubo da autoria anula o seu ser. Se não partiu de você, a essência é um golpe sujo.", weights: { Heart: 3, Blood: 1 } },
            { dialogue: "A dúvida sobre o que é a verdade. Se minha história foi escrita, os eventos que presenciei não são genuínos e precisam ser reavaliados.", thought: "A quebra frontal da integridade do mundo induz o repúdio irado contra a manipulação universal.", weights: { Rage: 3, Mind: 1, Hope: -3 } },
            { dialogue: "Sentiria um alívio profundo, na verdade. Saber que existe um propósito maior e que nada foi por acaso me dá a paz de que minha vida tem um sentido real.", thought: "A transferência do peso das escolhas para as engrenagens celestiais adormece a crise crônica de culpa.", weights: { Hope: 3, Doom: 1, Rage: -3 } },
            { dialogue: "A sensação de estar preso. Saber que existe um trilho me faz sentir como se eu estivesse acorrentado a um papel, quando eu só queria ser livre para ir para onde eu quisesse.", thought: "As amarras do determinismo sufocam a expiração. O voo só é real no vácuo das escolhas limpas.", weights: { Breath: 3, Space: 1 } },
            { dialogue: "O medo do desfecho. Se existe um roteiro, existe um fim planejado, e a ideia de que meus limites e o meu 'prazo de validade' já foram decididos é o que mais me assusta.", thought: "A concretização da mortalidade num livro de contabilidade sela o fatalismo em níveis intoleráveis.", weights: { Time: 3, Doom: 3, Life: -2 } }
        ]
    },
    {
        id: 19,
        scenario: "19. Como você prefere ser lembrado?",
        voices: [
            { aspect: "Space", difficulty: 0, check: "Passivo: Médio", text: "Deixar a sua marca no mundo. Você quer que as coisas que construiu e os espaços que ocupou não sumam com o tempo.", weights: {} },
            { aspect: "Void", difficulty: 0, check: "Passivo: Fácil", text: "Prefere não ser lembrado. O anonimato é reconfortante; você não precisa carregar o peso de ser uma lembrança para ninguém.", weights: {} },
            { aspect: "Blood", difficulty: 2, check: "Passivo: Difícil", text: "Pelos laços que criou. Você quer que as pessoas se lembrem do apoio que você deu a elas quando precisaram.", weights: {} }
        ],
        options: [
            { dialogue: "Como alguém que inspirou os outros. Quero que a minha passagem pelo mundo seja vista como um exemplo de que coisas melhores são possíveis.", thought: "A doação da jornada para combustível motivacional certifica o seu trajeto com o aval do altruísmo.", weights: { Hope: 3, Life: 2, Breath: 1 } },
            { dialogue: "Pelas coisas que criei. Quero deixar um legado físico e duradouro, algo que ocupe um espaço real mesmo quando eu não estiver aqui.", thought: "O cimento espacial bloqueia a morte biológica. Deixar lastro tangível é imperativo.", weights: { Space: 3, Time: 2, Void: -1 } },
            { dialogue: "Como alguém que foi o alicerce de quem precisava. Quero ser lembrado como a pessoa que manteve as coisas unidas quando tudo ia cair.", thought: "O selo póstumo da coesão do grupo assegura que o seu suor não se desfará no esquecimento cínico.", weights: { Blood: 3, Doom: 2 } },
            { dialogue: "Prefiro não ser lembrado de forma pública. O meu sucesso é ter vivido a minha vida com privacidade e silêncio, sem precisar de atenção externa.", thought: "A anulação voluntária expurga o ridículo da glória. Mergulhar na obscuridade alivia o ego do espetáculo.", weights: { Void: 3, Mind: 1, Light: -3 } },
            { dialogue: "Quero que a minha história seja vista como algo importante e que trouxe significado para as pessoas que amei.", thought: "A gravação luminosa da presença nas pupilas alheias atesta a grandiosidade irrefutável do próprio ser.", weights: { Light: 3, Heart: 3, Void: -3 } }
        ]
    },
    {
        id: 20,
        scenario: "20. O que é liberdade para você?",
        voices: [
            { aspect: "Life", difficulty: 0, check: "Passivo: Fácil", text: "Ter recursos e saúde para fazer o que quiser. Liberdade é ter a capacidade de não ficar parado no mesmo lugar.", weights: {} },
            { aspect: "Mind", difficulty: 0, check: "Passivo: Médio", text: "Ter todas as opções na mesa e decidir a rota. Liberdade é não ser pego de surpresa e dominar os próprios passos.", weights: {} },
            { aspect: "Heart", difficulty: 2, check: "Passivo: Difícil", text: "Ser exatamente quem você é sem filtro. Liberdade é jogar fora as expectativas e não dever explicações a ninguém.", weights: {} }
        ],
        options: [
            { dialogue: "Não ter de dar satisfações. Liberdade é poder ir para onde eu quiser e recomeçar sem os rótulos e as expectativas que os outros me impõem.", thought: "O oxigênio puro. Destruir obrigações afrouxa a corrente e valida o seu fôlego.", weights: { Breath: 3, Void: 2, Blood: -3 } },
            { dialogue: "Ter a segurança de um lugar ao qual pertenço. A verdadeira liberdade é saber que tenho pessoas que não irão me abandonar.", thought: "A estabilidade relacional absorve o risco vital. A prisão afetuosa é o verdadeiro escudo de invulnerabilidade.", weights: { Blood: 3, Doom: 1, Breath: -3 } },
            { dialogue: "Liberdade é ter saúde, energia e recursos para ir atrás de tudo o que a vida tem para oferecer.", thought: "A capacidade irrestrita de crescimento celular anula qualquer paralisia, garantindo o movimento ininterrupto.", weights: { Life: 3, Space: 2, Doom: -3 } },
            { dialogue: "Ser quem eu sou de verdade. Liberdade é não ter que usar máscaras ou fingir que sou outra pessoa para ser aceito pela sociedade.", thought: "O desmantelamento do teatro sociológico garante que a pureza nuclear jamais precisará negociar seu caráter com fingimentos.", weights: { Heart: 3, Rage: 3, Mind: -3 } },
            { dialogue: "Ter o controle das minhas escolhas. Liberdade é entender os caminhos à minha frente e ser a única pessoa responsável pela direção que decido tomar", thought: "A hegemonia lógica sobre o labirinto. Nenhuma variável imprevista pode ditar o trajeto sem consentimento.", weights: { Mind: 3, Time: 2 } }
        ]
    }
];

const questionsByAspect = {
    "Time": [
        { 
            id: 1,
            scenario: "1. Você tem um projeto vital com um prazo impossível que está se esgotando hoje.",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "Vai doer, mas tem que ser feito. Engula o cansaço e entregue o projeto custe o que custar." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Fácil", text: "O prazo está apertado. Use essa pressão para focar e entender exatamente quanto tempo você ainda tem." }
            ],
            options: [
                { dialogue: "Sacrifico meu sono, minha saúde e uso cada segundo para garantir que a entrega seja impecável.", thought: "Foco na entrega. O prazo é absoluto; você ignora o cansaço e sacrifica o próprio bem-estar para garantir que o trabalho seja finalizado.", weights: { Knight: 3, Maid: 2, Page: 2, Prince: -2 } },
                { dialogue: "Eu me perco em distrações e acabo perdendo a noção das horas; se o prazo estourar, tudo bem.", thought: "Evitar o estresse. O prazo apertado te dá tanta ansiedade que você prefere procrastinar e fingir que o problema não existe.", weights: { Bard: 3, Prince: -1, Knight: -3 } },
                { dialogue: "Deixo o prazo passar e lido com as consequências conforme elas vierem, sem lutar contra o inevitável.", thought: "Aceitação natural. Você não se desespera com prazos; se não deu tempo, não deu. Não vale a pena brigar contra o relógio.", weights: { Heir: 3, Knight: -2, Maid: -2 } },
                { dialogue: "Sei que tudo dará certo, então acabo doando minhas horas para aliviar o peso de quem está em crise.", thought: "Priorizar o outro. Você tira o foco do seu próprio prazo para ajudar colegas que estão mais desesperados que você.", weights: { Rogue: 3, Heir: 2, Thief: -2, Prince: -2 } },
                { dialogue: "Eu paro tudo para analisar onde errei no cronograma e tento prever o impacto do meu atraso.", thought: "Análise da falha. Em vez de correr, você para e estuda o porquê do atraso, calculando o impacto real que isso vai causar.", weights: { Seer: 3, Mage: 3, Witch: -1, Page: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Uma oportunidade única passou e você falhou no prazo. Como você reage no dia seguinte?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Já passou. Se você perdeu a chance, é porque não valia a pena. Siga em frente e esqueça." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Médio", text: "Prazos sempre podem ser negociados. Dê um jeito de contornar essa regra e conseguir mais tempo." }
            ],
            options: [
                { dialogue: "Eu dou de ombros; se a chance passou por desleixo meu, é sinal de que não era para ser.", thought: "Conformismo prático. Se a chance passou, é porque não era para ser; você não perde tempo sofrendo pelo que já acabou.", weights: { Bard: 3, Heir: 2, Knight: -2 } },
                { dialogue: "Eu invalido a importância do que passou; se o tempo para aquilo acabou, não deve ocupar mais espaço.", thought: "Desvalorização da perda. Para não se sentir mal, você convence a si mesmo de que a oportunidade nem era tão boa assim.", weights: { Prince: 3, Seer: 2, Sylph: -2, Maid: -2 } },
                { dialogue: "Eu me recuso a aceitar o 'não'. Tento convencer os responsáveis a abrirem uma nova vaga só para mim.", thought: "Manipulação das regras. Você não aceita que um prazo limite a sua chance; usa a lábia ou contatos para forçar uma exceção.", weights: { Witch: 3, Thief: 3, Maid: 1, Seer: -2 } },
                { dialogue: "Ajudo amigos com os prazos deles, tentando 'consertar' o tempo alheio já que quebrei o meu.", thought: "Compensação pelo erro. Perder a sua chance dói, então você foca em ajudar os amigos para sentir que o dia não foi um fracasso total.", weights: { Sylph: 3, Rogue: 2, Prince: -2, Bard: -2 } },
                { dialogue: "Crio uma regra rígida na minha rotina para que eu nunca mais perca uma chance por desleixo.", thought: "Aprendizado pela punição. O erro te obriga a criar um sistema rígido de alarmes e rotinas para nunca mais ser pego desprevenido.", weights: { Page: 3, Knight: 2, Mage: 1, Heir: -2 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Alguém próximo a você faleceu. Como você processa essa ausência nas semanas seguintes?",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "Eles estão perdidos sem essa pessoa. Tente ocupar esse espaço para ajudar o grupo a seguir em frente." },
                { aspect: "Maid", difficulty: 2, check: "Ativo: Fácil", text: "Ficar parado não vai trazer ninguém de volta. Foque no trabalho e mantenha a rotina funcionando." }
            ],
            options: [
                { dialogue: "Deleto as memórias e me desfaço dos pertences; o passado é um peso que não consigo lidar.", thought: "Apagar o passado. Lidar com memórias é muito doloroso; você joga tudo fora para não ter gatilhos que te lembrem da perda.", weights: { Prince: 3, Sylph: -3, Knight: -1 } },
                { dialogue: "Eu me enterro em tarefas práticas. Organizo minha rotina e fico imerso em minhas obrigações.", thought: "Fuga pelo trabalho. Você sobrecarrega a sua rotina com tarefas para manter a mente ocupada e não ter tempo para sentir a dor.", weights: { Maid: 3, Knight: 3, Page: 1, Prince: -2 } },
                { dialogue: "Eu deixo as lembranças sumirem sozinhas; permito que o tempo apague a presença da pessoa da rotina.", thought: "Esquecimento orgânico. Você não força a lembrança; deixa que as memórias se apaguem naturalmente conforme o tempo passa.", weights: { Bard: 3, Heir: 1, Sylph: -2 } },
                { dialogue: "Tento compensar o luto me dedicando a causas que eram da pessoa ou vivendo em função do legado dela.", thought: "Viver pelo outro. Você tenta manter a pessoa viva assumindo os projetos e os sonhos que ela deixou para trás.", weights: { Sylph: 3, Rogue: 2, Bard: -2, Thief: 3 } },
                { dialogue: "Deixo a dor e a saudade me guiarem naturalmente, sem tentar controlar ou forçar o esquecimento.", thought: "Viver o luto. Você não tenta fugir nem consertar a dor; aceita que o luto faz parte do processo e deixa o tempo curar.", weights: { Heir: 3, Page: 2, Seer: 2, Witch: -2, Maid: -1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Como você encara o conceito de 'Legado' e o que deixa para o futuro?",
            voices: [
                { aspect: "Rogue", difficulty: 0, check: "Passivo: Fácil", text: "Coisas antigas só servem se tiverem utilidade hoje. Pegue o que for bom e repasse para quem precisa." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Difícil", text: "Você tem que honrar quem veio antes. O peso é grande, mas é sua responsabilidade dar orgulho a eles." }
            ],
            options: [
                { dialogue: "É um fardo. Sinto que devo trabalhar incansavelmente para ser digno do que veio antes de mim.", thought: "Peso do passado. A pressão para honrar as expectativas de quem veio antes de você é exaustiva e dita as suas escolhas.", weights: { Page: 3, Knight: 2, Maid: 1, Bard: -2 } },
                { dialogue: "Não me sinto responsável por manter nada vivo; se o passado se perder por falta de cuidado, tudo bem.", thought: "Desapego geracional. O passado dos outros não é problema seu; você não se importa em deixar a história da família ser esquecida.", weights: { Bard: 3, Rogue: 1, Knight: -2 } },
                { dialogue: "É uma ferramenta. O conhecimento do passado serve apenas para eu prever e manipular o que virá.", thought: "Uso prático da história. Você não tem apego emocional ao passado, apenas o estuda para entender como não repetir os mesmos erros.", weights: { Mage: 3, Seer: 2, Thief: 1, Rogue: -1 } },
                { dialogue: "Legado é o passado colonizando o futuro. Prefiro destruir tradições para dar espaço à inovação.", thought: "Destruição do velho. Você odeia o peso da tradição e prefere romper com o passado para criar o seu próprio caminho do zero.", weights: { Prince: 3, Knight: -2, Page: -3 } },
                { dialogue: "É algo coletivo. Eu sou apenas um elo passando o que recebi para quem precisa mais.", thought: "Transmissão de valor. Você não foca em ser lembrado; o seu papel é apenas pegar o que é bom do passado e entregar para o futuro.", weights: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Você está em uma fila de mercado que não anda e tem um compromisso importante logo em seguida.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Eles estão enrolando e você está perdendo tempo. Corte a fila ou dê um jeito de agilizar isso." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Médio", text: "Não adianta se estressar com o que não pode controlar. Espere a fila andar no tempo dela." }
            ],
            options: [
                { dialogue: "Tento trocar de fila ou apressar as pessoas ao redor. Não admito que atrasos mudem meus planos.", thought: "Intolerância à lerdeza. Esperar te deixa irritado; você fura fila ou pressiona os outros para não perder o seu tempo.", weights: { Thief: 3, Witch: 2, Prince: 1, Heir: -2 } },
                { dialogue: "Assumo a liderança. Ajudo a organizar as compras ou oriento quem está confuso para o tempo fluir.", thought: "Organização proativa. O atraso te incomoda, então você assume a liderança e tenta organizar as pessoas para a fila andar mais rápido.", weights: { Maid: 3, Sylph: 2, Knight: 1, Prince: -2 } },
                { dialogue: "Mantenho a calma. Sei que o tempo tem seu curso e que me estressar não vai fazer a fila andar.", thought: "Paciência. Você entende que o tempo tem seu próprio ritmo e que brigar com a fila não vai fazê-la andar mais rápido.", weights: { Heir: 3, Rogue: 1, Knight: -3 } },
                { dialogue: "Aceito o atraso sem lutar; uso a lentidão da fila como desculpa e não me estresso com o resultado.", thought: "Desculpa perfeita. Se a fila atrasar os seus outros compromissos, ótimo; você usa o atraso como justificativa para não ir.", weights: { Bard: 3, Heir: 2, Knight: -3 } },
                { dialogue: "Calculo o tempo exato que ainda posso esperar antes de desistir, baseado na probabilidade de atraso.", thought: "Cálculo de tempo. Você fica mentalmente estimando quanto tempo a fila vai demorar para decidir se vale a pena continuar esperando.", weights: { Seer: 3, Mage: 2, Page: 1, Witch: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Se você pudesse mudar algo em um evento trágico do seu passado, como abordaria isso?",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "Tudo o que aconteceu teve um motivo para te trazer até aqui. Mudar o passado seria apagar quem você é hoje." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Se você pudesse, apagaria isso da história sem pensar duas vezes. O que te fez mal não merece existir." }
            ],
            options: [
                { dialogue: "Eu não mudaria nada. O trauma é uma lição necessária e o destino não deve ser alterado por caprichos.", thought: "Aceitação da linha do tempo. Mudar o passado alteraria quem você é hoje; você entende que a dor foi necessária para o seu crescimento.", weights: { Seer: 2, Heir: 3, Witch: -3 } },
                { dialogue: "Deixaria como está; a desgraça serviu para quebrar quem eu era e me obrigou a seguir em frente.", thought: "Valorização da superação. Você não apagaria o trauma, pois superar a dificuldade foi o que te tornou mais forte e resiliente.", weights: { Bard: 3, Heir: 1, Knight: -2 } },
                { dialogue: "Eu destruiria a causa do evento sem hesitar. A liberdade de mudar é mais importante que o tempo.", thought: "Recusa ao sofrimento. Se você pudesse, apagaria o evento sem pensar duas vezes; nenhuma lição compensa a dor que você passou.", weights: { Prince: 3, Witch: 3, Knight: 2, Mage: -2 } },
                { dialogue: "Eu me prepararia melhor. Se soubesse o que aconteceria, teria trabalhado o dobro para proteger o que perdi.", thought: "Foco na prevenção. Você voltaria não para apagar o evento, mas para se preparar melhor e evitar que as pessoas ao redor se machucassem.", weights: { Knight: 3, Maid: 2, Page: 2, Bard: -2 } },
                { dialogue: "Eu tentaria tirar algo de bom da tragédia para ajudar outros, transformando a dor em recurso.", thought: "Compartilhar o aprendizado. A tragédia serviu para que hoje você saiba como ajudar e acolher outras pessoas que passam pelo mesmo problema.", weights: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Você encontra uma ferramenta ou objeto antigo e quebrado que pertenceu à sua família. O que você faz?",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Fácil", text: "Isso ainda tem conserto. Arrumar essa ferramenta é manter o seu legado útil e funcionando." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Médio", text: "Isso já deu o que tinha que dar. Deixe quebrado e siga a vida, não perca tempo com velharia." }
            ],
            options: [
                { dialogue: "Eu o conserto imediatamente; sinto a obrigação de restaurar a função do que o tempo tentou destruir.", thought: "Necessidade de consertar. Você não gosta de ver as coisas se perdendo no tempo e se sente na obrigação de restaurar o objeto.", weights: { Maid: 3, Sylph: 2, Knight: 2, Prince: -2 } },
                { dialogue: "Uso as peças dele para criar algo novo; o passado serve apenas como matéria-prima para o futuro.", thought: "Reaproveitamento radical. O objeto em si não importa; você o desmonta para usar as peças em algo que seja útil para você hoje.", weights: { Witch: 3, Prince: 2, Mage: -2, Seer: -1 } },
                { dialogue: "Deixo o objeto onde está; se ele quebrou e envelheceu, não vejo sentido em tentar salvá-lo agora.", thought: "Indiferença ao lixo. Se quebrou, quebrou; não há motivo para ter apego a algo que já não tem utilidade nenhuma.", weights: { Bard: 3, Mage: 1, Maid: -3 } },
                { dialogue: "Analiso o objeto para entender a história de quem o usou; é um registro que ensina sobre o fim.", thought: "Curiosidade histórica. O objeto quebrado serve apenas como um quebra-cabeça para você tentar descobrir quem o usou e como ele parou ali.", weights: { Seer: 3, Mage: 2, Thief: -2 } },
                { dialogue: "Dou o objeto para alguém que saiba apreciá-lo; não quero carregar o peso de algo que está morto.", thought: "Passar adiante. Você não quer carregar o peso do passado, mas acha errado jogar fora, então doa o objeto para quem possa gostar dele.", weights: { Rogue: 3, Heir: 2, Maid: -2, Knight: -2 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Alguém te pede um favor que vai ocupar todas as horas do seu único dia de descanso na semana.",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "Eles precisam de você. Pode ser no seu dia de folga, mas é sua responsabilidade resolver isso." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Esse é o seu dia de descanso. Não deixe ninguém roubar o seu tempo livre com favores não solicitados." }
            ],
            options: [
                { dialogue: "Digo não prontamente; o meu tempo livre é o limite que estabeleço para não ser consumido.", thought: "Proteção do limite. O seu tempo livre é inegociável; você diz 'não' imediatamente para não deixar ninguém folgar na sua agenda.", weights: { Prince: 3, Knight: 2, Thief: 2, Sylph: -3 } },
                { dialogue: "Cedo o tempo por pressão, mas passo o dia sentindo que estou sendo drenado e perdendo minha vida.", thought: "Culpa por não ajudar. Você cede e ajuda a pessoa, mas passa o dia inteiro frustrado sentindo que jogou o seu descanso no lixo.", weights: { Rogue: 3, Page: 2, Maid: 1, Witch: -2 } },
                { dialogue: "Digo que vou ajudar, mas acabo me atrasando tanto que a pessoa desiste de me esperar.", thought: "Fuga pelo atraso. Como você não sabe dizer 'não', acaba enrolando tanto que a pessoa desiste do favor e te deixa em paz.", weights: { Bard: 3, Prince: 1, Maid: -3 } },
                { dialogue: "Ajudo da maneira mais rápida possível; uso meu conhecimento para terminar na metade do tempo previsto.", thought: "Eficiência máxima. Você aceita o favor, mas dá um jeito de usar atalhos ou agilizar o processo para se livrar do problema o quanto antes.", weights: { Witch: 3, Maid: 2, Mage: 2, Knight: -1 } },
                { dialogue: "Aceito o favor como parte do dia; se o tempo deve ser gasto assim, eu me adapto e encontro satisfação.", thought: "Aceitação tranquila. Você não se estressa; se a pessoa precisa, você abre mão do descanso e transforma a ajuda na atividade do seu dia.", weights: { Heir: 3, Sylph: 2, Seer: 1, Prince: -3 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você está assistindo a um filme ou lendo um livro e percebe que o final será triste e inevitável. Como você reage?",
            voices: [
                { aspect: "Mage", difficulty: 0, check: "Passivo: Difícil", text: "Saber que vai dar errado te prepara. Assista até o fim para entender onde as coisas começaram a falhar." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Fácil", text: "Chame alguém para assistir junto. Dividir o momento ruim deixa a carga emocional bem mais leve." }
            ],
            options: [
                { dialogue: "Paro de ler imediatamente; recuso-me a gastar meu tempo com uma conclusão que já aceitei.", thought: "Fuga da frustração. Você odeia finais tristes e não vê sentido em gastar o seu tempo com algo que vai te deixar mal no fim.", weights: { Prince: 3, Witch: 2, Seer: -2, Mage: -2 } },
                { dialogue: "Vou até o fim, mesmo sofrendo; preciso entender como evitar algo assim na vida real.", thought: "Análise do desastre. Saber que vai dar errado te motiva a prestar ainda mais atenção aos detalhes para entender como a falha aconteceu.", weights: { Mage: 3, Seer: 2, Knight: 1, Bard: -2 } },
                { dialogue: "Tento convencer outros a verem comigo; dividir a carga emocional torna o final menos pesado.", thought: "Busca por suporte. O peso de um final triste é grande demais para aguentar sozinho; você prefere ter amigos por perto para dividir a carga.", weights: { Rogue: 3, Sylph: 2, Page: 1, Thief: -2 } },
                { dialogue: "Eu procuro spoilers; se o fim vai ser ruim, prefiro acabar logo com o suspense e não perder tempo.", thought: "Fuga da ansiedade. A expectativa de um final ruim te incomoda tanto que você lê os spoilers só para acabar logo com a tensão.", weights: { Bard: 3, Thief: 2, Knight: -3 } },
                { dialogue: "Fico obcecado com os detalhes técnicos da obra para me distanciar do caminho em direção à morte.", thought: "Desconexão emocional. Para não se envolver com a tragédia da história, você passa a focar apenas em como o filme foi gravado ou o livro foi escrito.", weights: { Knight: 3, Maid: 2, Heir: -1, Bard: -1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Qual sua relação com a pontualidade alheia?",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "Preste atenção nisso. Esse atraso mostra muito sobre como a pessoa funciona e se você pode confiar nela." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Horários são só uma sugestão. Se eles atrasam, ótimo, tira a pressão para você ser pontual também." }
            ],
            options: [
                { dialogue: "Exijo precisão absoluta; o atraso dos outros é uma ofensa à ordem que tento manter.", thought: "Exigência de respeito. O tempo é valioso; quando alguém se atrasa, você sente que a pessoa está sendo irresponsável e desrespeitando você.", weights: { Maid: 3, Knight: 2, Page: 2, Bard: -2 } },
                { dialogue: "Não me importo; o tempo é fluido e as pessoas chegam quando devem chegar.", thought: "Flexibilidade total. Você não liga para horários rígidos; entende que imprevistos acontecem e não se estressa com o atraso dos outros.", weights: { Heir: 2, Rogue: 2, Knight: -3 } },
                { dialogue: "Eu geralmente atraso, então não julgo; acho ótimo quando os outros atrasam também e tiram a pressão de mim.", thought: "Alívio mútuo. Como você também é desorganizado com horários, acha ótimo quando os outros se atrasam, pois isso tira o seu peso de culpa.", weights: { Bard: 3, Heir: 2, Maid: -3, Knight: -3 } },
                { dialogue: "Aproveito o atraso deles para roubar esse tempo para minhas próprias atividades.", thought: "Oportunismo de agenda. Se a pessoa atrasou, problema dela; você aproveita o tempo extra para adiantar coisas do seu próprio interesse.", weights: { Thief: 3, Witch: 2, Prince: 1, Sylph: -2 } },
                { dialogue: "Fico analisando os motivos do atraso, tentando prever se isso se tornará um padrão.", thought: "Análise de comportamento. Você observa a frequência do atraso para entender se a pessoa é desorganizada por natureza ou se foi um imprevisto real.", weights: { Seer: 3, Mage: 2, Maid: 1, Page: -1 } }
            ]
        }
    ],

    "Space": [
        { 
            id: 1,
            scenario: "1. Você divide o quarto com alguém extremamente desorganizado que está 'vazando' objetos para o seu lado da mesa.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Arrume essa bagunça antes que piore. É melhor você mesmo limpar do que viver no meio da desordem do outro." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Joga tudo isso fora. Não tem sentido acumular coisa inútil invadindo o seu lado do quarto." }
            ],
            options: [
                { dialogue: "Eu limpo a bagunça dele sem perguntar. A desordem ofende minha necessidade de um ambiente perfeito.", thought: "Foco na ordem. A bagunça te incomoda tanto que é mais prático você mesmo limpar do que perder tempo brigando para que ele arrume.", weights: { Maid: 3, Knight: 2, Prince: -2, Bard: -2 } },
                { dialogue: "Eu jogo tudo no lixo imediatamente. O acúmulo de tralhas é um desperdício e prefiro o vazio à desordem.", thought: "Intolerância ao acúmulo. Você não suporta tralha invadindo o seu espaço e descarta o lixo sem pena para manter o ambiente limpo.", weights: { Prince: 3, Bard: 2, Sylph: -3, Maid: -2 } },
                { dialogue: "Eu nem noto. Vou empurrando as coisas dele para o lado para caber o meu prato e sigo a vida no meio do caos.", thought: "Desapego territorial. A bagunça não te afeta; você apenas empurra as coisas para o lado e continua a sua vida normalmente.", weights: { Bard: 3, Heir: 1, Mage: -1, Prince: -3 } },
                { dialogue: "Pego os objetos mais úteis dele e os incorporo ao meu lado. Se ele não cuida, eu cuidarei melhor.", thought: "Oportunismo prático. Se a pessoa não cuida das próprias coisas, você pega o que for útil para si mesmo e incorpora ao seu espaço.", weights: { Thief: 3, Witch: 2, Rogue: -2, Page: -1 } },
                { dialogue: "Tento reorganizar as coisas dele de forma que ele aprenda a manter o espaço sozinho.", thought: "Organização pedagógica. Você não apenas limpa, mas reorganiza o espaço inteiro de uma forma que force a pessoa a mantê-lo arrumado.", weights: { Sylph: 3, Seer: 2, Prince: -3, Thief: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Você está em uma festa onde não conhece ninguém e o ambiente parece vasto e impessoal.",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Médio", text: "Você está sobrando aqui. Tente observar como as pessoas agem para descobrir como se encaixar nesse espaço." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Tanto faz onde você está. Fique na sua, não precisa forçar interação se não está a fim." }
            ],
            options: [
                { dialogue: "Fico num canto tentando entender a mecânica social do lugar, como se fosse um quebra-cabeça que não sei montar.", thought: "Análise do ambiente. Você se sente deslocado, então foca em observar o comportamento do grupo para entender como se integrar sem errar.", weights: { Page: 3, Mage: 3, Seer: 2, Prince: -2 } },
                { dialogue: "Se o ambiente não me acolhe, vou embora sem me despedir ou me isolo em um canto, cortando conexão.", thought: "Rejeição ao desconforto. Se o espaço não te agrada, você não faz esforço para ficar; simplesmente vai embora ou se isola.", weights: { Prince: 3, Witch: 2, Heir: -2, Page: -2 } },
                { dialogue: "Me sinto invisível, então tento colar em qualquer rodinha para ocupar espaço e me sentir parte do grupo.", thought: "Busca por pertencimento. Você detesta a sensação de estar sobrando e tenta se infiltrar em qualquer grupo para ocupar algum espaço.", weights: { Thief: 3, Rogue: 2, Prince: -2, Seer: -1 } },
                { dialogue: "Eu fico lá existindo. Não tento interagir nem ir embora, só deixo o tempo passar enquanto encaro o teto.", thought: "Inércia social. Você não se importa em interagir e também não tem vontade de ir embora, apenas deixa o tempo passar.", weights: { Bard: 3, Heir: 2, Knight: -2, Maid: -2 } },
                { dialogue: "Vou circulando por aí sem rumo. Se eu achar algo legal, paro; se não, só deixo a música me levar.", thought: "Adaptação fluida. Você não força nada; apenas circula pelo ambiente e deixa que as interações aconteçam naturalmente.", weights: { Heir: 3, Rogue: 1, Knight: -2, Maid: -1 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Um amigo próximo mudou-se para outro país. Como você lida com a distância física?",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "A distância não importa se você não quiser. Dê um jeito de manter essa pessoa presente no seu dia a dia." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Se a pessoa foi embora, a relação esfriou. É melhor cortar o contato e seguir a vida." }
            ],
            options: [
                { dialogue: "Mantenho contato obsessivo. Preciso saber de cada detalhe do espaço novo dele para me sentir presente.", thought: "Apego ao vínculo. A distância física te assusta, então você força a comunicação constante para não perder a pessoa de vista.", weights: { Witch: 3, Knight: 2, Maid: 1, Prince: -3 } },
                { dialogue: "A distância matou a relação. Se não ocupamos o mesmo espaço, corto o vínculo para não carregar peso morto.", thought: "Foco na presença. Se a pessoa não está mais no seu convívio diário, o interesse morre e você corta os laços sem dificuldade.", weights: { Prince: 3, Thief: 1, Witch: -3, Sylph: -2 } },
                { dialogue: "Eu esqueço de mandar mensagem. A distância vira emocional naturalmente porque eu não corro atrás.", thought: "Desconexão natural. A falta de presença física faz você esquecer de manter o contato, e a amizade vai sumindo aos poucos.", weights: { Bard: 3, Heir: 2, Rogue: 1, Sylph: -2 } },
                { dialogue: "Sinto inveja silenciosa. Posto fotos de lugares interessantes para provar que meu espaço é relevante.", thought: "Competição por espaço. A vida nova da pessoa te incomoda, e você tenta provar que a sua realidade aqui também é interessante.", weights: { Thief: 3, Page: 2, Rogue: -2, Heir: -1 } },
                { dialogue: "Entendo que o espaço entre nós mudou. Aceito a saudade e deixo a amizade encontrar seu novo volume.", thought: "Aceitação da distância. Você entende que o espaço muda a dinâmica e permite que a amizade se adapte à nova realidade sem forçar a barra.", weights: { Seer: 2, Heir: 3, Thief: -2, Knight: -1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Você decidiu começar um hobby novo, mas não tem as ferramentas certas ou um local adequado.",
            voices: [
                { aspect: "Mage", difficulty: 0, check: "Passivo: Difícil", text: "Você precisa do espaço certo para trabalhar. Se as ferramentas não forem ideais, o resultado não vai ser bom." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Médio", text: "Não fique inventando desculpa. Pegue o que tem à mão e faça acontecer na base do improviso." }
            ],
            options: [
                { dialogue: "Eu me viro com o que tenho. Improviso ferramentas; se eu me esforçar, encontro um jeito.", thought: "Foco na execução. A falta de estrutura não é desculpa; você improvisa com o que tem e trabalha duro para entregar o resultado.", weights: { Knight: 3, Maid: 3, Page: 1, Bard: -2 } },
                { dialogue: "Começo de qualquer jeito, sem medir nada. Se ficar torto ou quebrar no meio do processo, paciência.", thought: "Desapego ao método. Você começa a fazer as coisas sem planejamento algum, lidando com os erros conforme eles vão surgindo.", weights: { Bard: 3, Rogue: 1, Mage: -1, Seer: -2 } },
                { dialogue: "Passo semanas pesquisando o layout perfeito. Se o cenário não for ideal, a criação não flui.", thought: "Necessidade de estrutura. O ambiente incorreto te trava; você prefere gastar tempo organizando o espaço ideal antes de sequer começar.", weights: { Mage: 3, Seer: 3, Heir: -1, Knight: -1 } },
                { dialogue: "Peço coisas emprestadas e 'esqueço' de devolver. Se não tenho, farei uso de quem tem.", thought: "Uso de recursos externos. Se você não tem as ferramentas, dá um jeito de usar as coisas dos outros para não atrasar o seu projeto.", weights: { Thief: 3, Witch: 2, Sylph: -2, Maid: -1 } },
                { dialogue: "Desisto. Se o ambiente não colabora, eu elimino a ideia da minha cabeça e busco algo viável.", thought: "Desistência prática. A falta de recursos torna a ideia inviável, então você a abandona rapidamente e foca em algo mais fácil de fazer.", weights: { Prince: 3, Heir: 1, Knight: -3, Maid: -2 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Alguém entra no seu quarto sem bater enquanto você está focado em algo importante.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Esse espaço é seu. Se alguém entrar sem bater enquanto você está focado, expulse na hora." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Médio", text: "Já que a pessoa entrou, aproveite. Mude o foco e envolva ela naquilo que você está fazendo." }
            ],
            options: [
                { dialogue: "Expulso a pessoa imediatamente. Meu espaço de criação é sagrado e não tolero intrusões.", thought: "Defesa do próprio espaço. O seu ambiente de foco é sagrado; você reage com hostilidade a qualquer invasão e expulsa a pessoa na hora.", weights: { Prince: 3, Knight: 2, Sylph: -3, Rogue: -2 } },
                { dialogue: "Escondo o que estou fazendo. Tenho pavor de que vejam meu processo criativo incompleto.", thought: "Insegurança com o processo. Você odeia que as pessoas vejam o seu trabalho antes de estar pronto, então tenta escondê-lo imediatamente.", weights: { Page: 3, Thief: 2, Maid: 1, Prince: -1 } },
                { dialogue: "Integro a pessoa ao que estou fazendo, aproveitando a interrupção para mudar o foco.", thought: "Adaptação de foco. Em vez de brigar, você aproveita a interrupção para mudar de assunto e incluir a pessoa no que você estava fazendo.", weights: { Witch: 3, Sylph: 2, Heir: 2, Prince: -3 } },
                { dialogue: "Não faço nada. A pessoa entra, mexe nas coisas e eu continuo no meu mundo, ignorando ela.", thought: "Ignorar a intrusão. Você simplesmente finge que a pessoa não está ali e continua focado no seu mundo, esperando que ela vá embora.", weights: { Bard: 3, Mage: 1, Knight: -2 } },
                { dialogue: "Fico irritado em silêncio, analisando como aquela presença física estragou meu fluxo.", thought: "Irritação silenciosa. A interrupção quebra a sua linha de raciocínio, e você fica analisando mentalmente o quanto aquilo estragou o seu fluxo.", weights: { Mage: 3, Seer: 2, Knight: -1, Witch: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Você está em um elevador lotado e desconfortável. Como você se comporta?",
            voices: [
                { aspect: "Rogue", difficulty: 0, check: "Passivo: Médio", text: "O lugar está muito apertado. Encolha-se o máximo que der para não incomodar as outras pessoas." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Você também tem direito a espaço. Se precisar empurrar para conseguir respirar, empurre." }
            ],
            options: [
                { dialogue: "Tento ocupar o mínimo de espaço possível, quase me fundindo à parede.", thought: "Priorizar o espaço do outro. O aperto te incomoda tanto que você prefere se encolher para não invadir o espaço pessoal de ninguém.", weights: { Rogue: 3, Page: 2, Sylph: 1, Prince: -2 } },
                { dialogue: "Analiso a mecânica do elevador ou a posição das pessoas para me distrair do desconforto.", thought: "Distração lógica. O ambiente apertado te deixa ansioso, então você foca em detalhes técnicos do elevador para tirar a mente do problema.", weights: { Seer: 3, Mage: 2, Heir: 1, Bard: -1 } },
                { dialogue: "Eu me distraio com qualquer coisa. Fico olhando pro nada, fingindo que não estou ali.", thought: "Desconexão do ambiente. Você entra no piloto automático, olhando para o teto e ignorando o desconforto até a situação acabar.", weights: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
                { dialogue: "Fico furioso com a falta de espaço e empurro se for preciso para garantir meu lugar.", thought: "Imposição física. Você não aceita ser esmagado e se movimenta para garantir o seu próprio espaço, mesmo que precise empurrar alguém.", weights: { Prince: 3, Thief: 2, Witch: 1, Rogue: -2 } },
                { dialogue: "Puxo uma conversa trivial para aliviar a tensão e expandir o conforto do ambiente.", thought: "Quebra de tensão. O aperto cria um clima ruim, então você puxa conversa para tentar deixar o espaço menos opressivo para todos.", weights: { Sylph: 3, Heir: 2, Prince: -3, Mage: -1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Ao se mudar, você encontra objetos de um ex-parceiro ou de uma amizade que acabou mal.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Joga isso fora. Guardar coisas do passado que acabou mal só serve para poluir o seu ambiente." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "Isso agora é seu e pronto. Guarde, pode ser útil ou apenas uma lembrança de algo que você viveu." }
            ],
            options: [
                { dialogue: "Destruo tudo. Não me faz bem guardar as lembranças do que não existe mais.", thought: "Eliminação do passado. Você não quer a energia de algo que deu errado no seu espaço, então joga tudo fora para limpar o ambiente.", weights: { Prince: 3, Witch: 2, Thief: -3, Knight: -2 } },
                { dialogue: "Guardo tudo em uma caixa no fundo. Tenho medo de perder partes da minha história.", thought: "Apego ao histórico. Você guarda os objetos porque tem medo de apagar partes da sua vida, mantendo-os escondidos como lembranças.", weights: { Thief: 3, Knight: 2, Page: 1, Prince: -3 } },
                { dialogue: "Dou os objetos para quem precisa. Transformo a tralha em algo útil para outra pessoa.", thought: "Reutilização prática. Se o objeto traz memórias ruins para você, mas ainda é útil, é mais lógico passá-lo adiante para quem precisa.", weights: { Rogue: 3, Maid: 2, Sylph: 1, Thief: -3 } },
                { dialogue: "Deixo tudo num canto pegando pó. Não jogo fora nem uso, deixo as coisas existirem e sumirem.", thought: "Indiferença aos objetos. As coisas ficam atiradas num canto porque você simplesmente não se importa o suficiente para jogá-las fora.", weights: { Bard: 3, Heir: 1, Mage: 1, Prince: -2 } },
                { dialogue: "Olho para os objetos e reflito sobre o vazio que deixaram e como ele foi preenchido.", thought: "Reflexão analítica. Você olha para as coisas antigas não com tristeza, mas tentando entender os padrões de como a relação começou e terminou.", weights: { Mage: 3, Seer: 2, Heir: 1, Prince: -2 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Você está esperando um resultado que depende de processos burocráticos lentos.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Se um processo travou, vá fazer outra coisa. O importante é não ficar parado perdendo tempo." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Difícil", text: "A burocracia é lenta, então burle isso. Ache um atalho ou alguém que agilize o processo." }
            ],
            options: [
                { dialogue: "Me ocupo pensando em novos projetos. A inércia física me desespera.", thought: "Necessidade de movimento. Ficar esperando te enlouquece, então você procura imediatamente outra coisa para fazer e não ficar parado.", weights: { Maid: 3, Knight: 2, Page: 1, Bard: -2 } },
                { dialogue: "Tento usar contatos ou atalhos. Não aceito que as limitações do sistema me parem.", thought: "Busca por atalhos. A lentidão do sistema é inaceitável; você usa qualquer meio ou contato disponível para acelerar o processo.", weights: { Witch: 3, Thief: 3, Seer: -2, Mage: -1 } },
                { dialogue: "Esqueço que o processo existe. Se sair o resultado, saiu. Se não sair, eu nem vou cobrar.", thought: "Desapego do resultado. Você não esquenta a cabeça com burocracia; esquece o assunto e só lida com ele se o resultado aparecer um dia.", weights: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
                { dialogue: "Aceito a lentidão. Entendo que as coisas têm seu próprio tempo para se materializar.", thought: "Respeito ao tempo das coisas. Você entende que forçar o processo não adianta, então apenas espera pacientemente sem se estressar.", weights: { Heir: 3, Sylph: 1, Seer: 1, Prince: -3 } },
                { dialogue: "Fico ansioso. Começo a pesquisar para entender os processos da burocracia para me preparar.", thought: "Necessidade de previsibilidade. A lentidão te dá ansiedade, e você tenta estudar como a burocracia funciona para prever o prazo exato.", weights: { Mage: 3, Seer: 3, Prince: -1, Knight: -1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você encara um 'bloqueio criativo': a tela branca ou o espaço vazio que precisa preencher.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Se não está fluindo, apaga e desiste. Não vale a pena ficar forçando uma criação que não sai do lugar." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "Sem ideias? Veja o que os outros estão fazendo e pegue emprestado. Nada se cria do zero." }
            ],
            options: [
                { dialogue: "Destruo o que comecei ou mudo o ambiente radicalmente. Não vale me frustrar se não flui.", thought: "Frustração imediata. A falta de progresso te irrita tanto que você prefere jogar tudo fora e mudar de ambiente do que ficar travado.", weights: { Prince: 3, Witch: 2, Heir: -2 } },
                { dialogue: "O vazio confirma que não tenho nada de original. Copio tendências para dar vida a minha criação.", thought: "Uso de referências. A tela branca é inútil; se você está sem ideias, não vê problema em copiar algo que já funciona para dar o pontapé inicial.", weights: { Thief: 2, Rogue: 1, Page: 1 } },
                { dialogue: "Fico rabiscando qualquer bobagem ou deixo a tela em branco, sem me estressar.", thought: "Conformismo com o branco. O bloqueio não te estressa; você apenas fica rabiscando ou não faz nada, esperando a vontade aparecer.", weights: { Bard: 3, Heir: 2, Knight: -2 } },
                { dialogue: "Enquanto não consigo trabalhar em nada, estudo processos artísticos. Prefiro me preparar antes.", thought: "Estudo no lugar da prática. Você tem dificuldade de começar e prefere passar horas pesquisando sobre a arte em vez de tentar criar algo.", weights: { Mage: 2, Seer: 2, Heir: 1 } },
                { dialogue: "Preencho o espaço com pequenos detalhes, cuidando do ambiente. Não quero deixar a tela branca.", thought: "Foco nos detalhes periféricos. Como a ideia principal não sai, você passa a arrumar a mesa ou fazer pequenos detalhes na borda da tela.", weights: { Sylph: 2, Maid: 1, Knight: 1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você está sozinho em um quarto em silêncio absoluto. Como essa ausência te afeta?",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "O silêncio é a chance perfeita para focar. Aproveite o isolamento para treinar ou organizar suas coisas." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "O silêncio é ótimo para desligar a mente. Deite, não faça nada e apenas deixe o tempo passar." }
            ],
            options: [
                { dialogue: "A inércia me desespera. Começo a arrumar coisas; preciso sentir que estou modificando o ambiente.", thought: "Inquietação física. O isolamento te deixa agoniado; você sente a necessidade urgente de arrumar o quarto para interagir com o ambiente.", weights: { Prince: 1, Knight: 2, Maid: 1 } },
                { dialogue: "Sinto um vazio ruim. Preciso ver coisas, comer ou consumir conteúdo para não enlouquecer.", thought: "Busca por estímulo. A falta de som e movimento te sufoca, forçando você a procurar qualquer coisa na internet para preencher o silêncio.", weights: { Thief: 2, Rogue: 2, Page: 1 } },
                { dialogue: "Sinto-me livre. Sem a pressão física de outras pessoas, minha mente expande.", thought: "Conforto no isolamento. Sem ninguém para ditar as regras do ambiente, você se sente completamente relaxado e à vontade.", weights: { Heir: 2, Seer: 1, Mage: 1 } },
                { dialogue: "Uso o isolamento para treinar e melhorar minhas habilidades sem ninguém olhando.", thought: "Uso prático do espaço. Você enxerga o quarto vazio como o cenário ideal para treinar, estudar e melhorar sem sofrer interrupções.", weights: { Page: 2, Knight: 1 } },
                { dialogue: "Fico deitado olhando pro teto. A falta de estímulo me faz desligar e eu fico lá, vegetando.", thought: "Desconexão letárgica. O silêncio te faz desligar a mente por completo; você deita e apenas deixa o tempo passar, sem fazer absolutamente nada.", weights: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } }
            ]
        }
    ],

    "Rage": [
        { 
            id: 1,
            scenario: "1. Você descobre que uma regra importante da instituição beneficia apenas os veteranos.",
            voices: [
                { aspect: "Heir", difficulty: 0, check: "Passivo: Médio", text: "A regra é absurda. Mostre para todo mundo o quão falha ela é e exija uma mudança agora." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "Deixe a regra quieta e use a brecha a seu favor. Se o sistema é burro, tire vantagem dele." }
            ],
            options: [
                { dialogue: "Acredito que deve haver um motivo e que a realidade é manipulável.", thought: "Racionalização. Você prefere acreditar que a regra tem um motivo justo a ter que brigar contra o sistema.", weights: { Prince: 3, Sylph: 1, Heir: -3, Knight: -2 } },
                { dialogue: "Exponho a falha publicamente, destruindo a credibilidade da regra sem piedade.", thought: "Confronto direto. Você não suporta injustiça e faz questão de expor o absurdo da regra para todos.", weights: { Heir: 3, Mage: 3, Witch: 2, Bard: -3 } },
                { dialogue: "Faço piada da situação. Se a regra é estúpida, o mínimo que posso fazer é ridicularizar.", thought: "Uso do humor como ataque. Fazer piada da regra é a sua forma de deslegitimar a autoridade de quem a criou.", weights: { Bard: 3, Thief: 1, Page: -1, Seer: -2 } },
                { dialogue: "Procuro entender quem se beneficia e como posso usar essa brecha para meu ganho.", thought: "Pragmatismo egoísta. Em vez de reclamar, você foca em descobrir como usar essa falha do sistema a seu favor.", weights: { Thief: 3, Maid: 2, Seer: 2, Page: -1 } },
                { dialogue: "Tento alertar os prejudicados, servindo de suporte contra a injustiça.", thought: "Defesa dos prejudicados. Você toma as dores de quem está sendo deixado para trás e tenta organizar uma resistência.", weights: { Rogue: 3, Sylph: 3, Page: 2, Knight: 1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Um projeto que você valoriza é cancelado por um erro bobo de outra pessoa.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Desapegue disso imediatamente. Não vale a pena passar raiva por algo que os outros já estragaram." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Difícil", text: "Alguém errou, mas o projeto é seu. Engula a raiva e trabalhe o dobro para salvar o que der." }
            ],
            options: [
                { dialogue: "Decido que o projeto não era importante. Mato meu interesse na hora para não sentir raiva.", thought: "Mecanismo de defesa. Você apaga o seu próprio interesse pelo projeto para não ter que lidar com a raiva e a frustração.", weights: { Prince: 3, Maid: -2, Page: -2, Heir: -1 } },
                { dialogue: "Contorno a proibição e continuo fazendo o que quero, subvertendo a autoridade.", thought: "Rebeldia focada. Se a ordem é injusta, você simplesmente a ignora e continua o trabalho às escondidas.", weights: { Thief: 3, Witch: 3, Heir: 2, Seer: -2 } },
                { dialogue: "Assumo a culpa e trabalho o dobro para salvar o que sobrou.", thought: "Senso de responsabilidade. Você engole a raiva e assume o prejuízo para não deixar o projeto morrer.", weights: { Page: 3, Knight: 3, Maid: 2, Prince: -3 } },
                { dialogue: "Eu rio do desastre. Tanto esforço para nada? É absurdo. Deixo morrer.", thought: "Niilismo prático. Ver o esforço ir para o lixo é tão frustrante que você prefere achar graça do absurdo e abandonar tudo.", weights: { Bard: 3, Heir: 1, Mage: 1, Knight: -3 } },
                { dialogue: "Observo a frustração e espero para ver se a verdade aparece sozinha.", thought: "Análise da falha. Você se afasta emocionalmente do desastre para observar quem errou e como as coisas desmoronaram.", weights: { Seer: 3, Heir: 2, Mage: 2, Rogue: 1, Witch: -2 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Você está em um evento onde todos fingem estar felizes, mas percebe as mentiras e tensões.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "Preste atenção em quem está forçando o sorriso. Você consegue ver exatamente quem é falso nessa sala." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Difícil", text: "Acabe com a farsa. Faça um comentário bem colocado para ver a máscara de civilidade deles cair." }
            ],
            options: [
                { dialogue: "Entro no personagem e sou o mais agradável possível; a harmonia é mais importante.", thought: "Manutenção da paz. Você odeia a falsidade, mas participa do teatro porque sabe que uma briga agora seria ainda pior.", weights: { Prince: 3, Knight: -3, Mage: -2 } },
                { dialogue: "Sinto um incômodo físico com a falsidade e fico num canto, catalogando cada hipocrisia.", thought: "Repulsa social. O excesso de falsidade te esgota e você prefere se isolar para não ser contaminado pelo ambiente.", weights: { Seer: 3, Mage: 2, Heir: 1, Prince: -2 } },
                { dialogue: "Fico lá existindo, meio aéreo. A falsidade deles é problema deles, eu só deixo o clima ficar estranho.", thought: "Desapego irônico. A hipocrisia geral não te afeta; você apenas existe no ambiente sem fazer esforço para se encaixar.", weights: { Bard: 3, Rogue: 1, Maid: -2 } },
                { dialogue: "Tento puxar conversas reais, cutucando as feridas de forma sutil para ver quem é autêntico.", thought: "Provocação calculada. Você faz perguntas desconfortáveis de propósito só para testar se alguém ali ainda é real.", weights: { Witch: 2, Thief: 3, Sylph: 1, Maid: -2 } },
                { dialogue: "Visto uma máscara de competência e tento ser o pilar de estabilidade para quem sofre.", thought: "Postura de âncora. Diante do desconforto alheio, você foca em ser a pessoa controlada e confiável para quem precisar.", weights: { Knight: 3, Page: 2, Rogue: 2, Maid: 1, Bard: -2 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Uma meta de anos torna-se impossível devido a um limite que não pode mudar.",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Difícil", text: "Não desista agora. Continue forçando os seus limites até o sistema ceder e te dar o que você quer." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "Você não está sozinho na frustração. Ache os outros que também se prejudicaram e unam forças." }
            ],
            options: [
                { dialogue: "Decido que a meta era estúpida. Destruo o desejo que eu tinha para me libertar da frustração.", thought: "Desvalorização tática. Para não sofrer com o fracasso, você convence a si mesmo de que nunca quis tanto isso assim.", weights: { Prince: 3, Mage: -3, Page: -2 } },
                { dialogue: "Aceito o limite e estudo os contornos dessa 'parede' para entender o que é real.", thought: "Aceitação lógica. Você não briga com o impossível; apenas analisa friamente o porquê daquele limite existir.", weights: { Mage: 3, Seer: 2, Heir: 1, Witch: -2 } },
                { dialogue: "Me recuso a aceitar. Vou trabalhar de forma punitiva até que eu quebre a regra ou me quebre.", thought: "Teimosia absoluta. O 'não' te motiva a forçar o limite até a exaustão total, recusando-se a aceitar a derrota.", weights: { Page: 3, Knight: 2, Maid: 3, Prince: -3 } },
                { dialogue: "Desisto e vou fazer outra coisa. Se o universo não quer, eu não vou brigar; o fracasso faz parte.", thought: "Desistência prática. Lutar contra uma parede é perda de tempo; você abandona a meta e muda de foco rapidamente.", weights: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
                { dialogue: "Tento encontrar outras pessoas que falharam para compartilharmos a frustração.", thought: "Busca de apoio. Encontrar outras pessoas que também falharam ajuda a aliviar a sensação de que o erro foi só seu.", weights: { Rogue: 3, Sylph: 2, Thief: -2, Witch: -1 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Em um grupo, alguém insiste em uma ideia que você sabe que é falsa.",
            voices: [
                { aspect: "Mage", difficulty: 0, check: "Passivo: Médio", text: "Não deixe essa mentira passar. Desmonte o argumento da pessoa com fatos na frente de todo mundo." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "A ideia é tão estúpida que chega a ser engraçada. Concorde com eles só para ver até onde o delírio vai." }
            ],
            options: [
                { dialogue: "Se a pessoa está feliz acreditando nisso, não vejo por que destruir a ilusão.", thought: "Conformismo passivo. Você prefere deixar a pessoa viver na ilusão a ter que se desgastar com uma discussão inútil.", weights: { Prince: 3, Sylph: 1, Heir: -3, Knight: -2 } },
                { dialogue: "Eu concordo com a mentira só pela zoeira. Quero ver até onde essa alucinação vai chegar.", thought: "Incentivo irônico. É divertido ver a pessoa passando vergonha com tanta confiança, então você concorda só para rir mais.", weights: { Bard: 3, Thief: 1, Witch: 1, Seer: -2 } },
                { dialogue: "Falo a verdade nua e crua, destruindo o argumento falso na frente de todos.", thought: "Tolerância zero à mentira. Você sente a obrigação de destruir o argumento na mesma hora, sem se importar com a vergonha alheia.", weights: { Heir: 3, Mage: 3, Seer: 2, Sylph: 1, Thief: 2 } },
                { dialogue: "Protejo os outros da ideia ruim, servindo como uma âncora de realidade.", thought: "Contenção de danos. A sua preocupação é que os outros não sejam enganados, então você intervém como escudo da verdade.", weights: { Knight: 3, Maid: 2, Sylph: 2, Rogue: 2, Page: 1 } },
                { dialogue: "Explico a situação para quem está confuso, tentando curar a desinformação.", thought: "Abordagem educativa. Em vez de atacar, você tenta explicar o conceito com paciência para curar a ignorância do grupo.", weights: { Rogue: 3, Sylph: 3, Page: 2, Heir: 1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Você percebe que está sendo passado para trás em uma conversa importante.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "Não deixe eles acharem que você é idiota. Interrompa e force a verdade a sair ali mesmo." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Médio", text: "Mostre os dentes. Deixe claro que você não aceita ser passado para trás e corte relações com os traidores." }
            ],
            options: [
                { dialogue: "Interrompo e mostro que sei o que estão fazendo, forçando a verdade a aparecer.", thought: "Confronto imediato. Você não aceita joguinhos nas suas costas e interrompe tudo para forçar as pessoas a falarem a verdade.", weights: { Witch: 3, Prince: 3, Thief: 2, Heir: -3 } },
                { dialogue: "Mantenho a harmonia e finjo que não percebi. Quero ver até onde vai.", thought: "Observação paciente. Fingir que não percebeu te dá a vantagem de ver exatamente quais são as reais intenções deles.", weights: { Prince: 2, Knight: -2, Heir: -3, Sylph: 1 } },
                { dialogue: "Nem ligo. Se precisam mentir pra mim, são patéticos. Deixo que se enrolem sozinhos.", thought: "Indiferença total. Se as pessoas precisam de mentiras para lidar com você, elas não merecem nem o seu estresse.", weights: { Bard: 3, Rogue: 1, Mage: 1 } },
                { dialogue: "Fico indignado e crio uma barreira rígida para que nunca mais me enganem.", thought: "Ruptura e defesa. A indignação te faz erguer muros imediatos; quem tenta te passar para trás é cortado da sua vida.", weights: { Knight: 3, Page: 3, Maid: 2, Mage: 1 } },
                { dialogue: "Estudo o comportamento da pessoa para entender a lógica por trás da desonestidade.", thought: "Análise da traição. Em vez de explodir de raiva, você foca em entender o padrão lógico de como a mentira foi construída.", weights: { Mage: 3, Seer: 3, Rogue: 2, Sylph: 1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Como você se sente quando percebe que o mundo é injusto?",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Médio", text: "O mundo é injusto com todo mundo. Seja esperto e ache um jeito de trapacear para equilibrar a balança." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Difícil", text: "A indignação tem que servir para algo. Junte-se a quem pensa igual para se protegerem desse sistema injusto." }
            ],
            options: [
                { dialogue: "Isso prova que levar a vida a sério é bobagem. Rio do absurdo e deixo as coisas fluírem.", thought: "Niilismo humorístico. A injustiça é tão grande que lutar parece inútil; rir do absurdo é a sua melhor defesa.", weights: { Bard: 3, Heir: 2, Maid: -3, Knight: -2 } },
                { dialogue: "Ignoro as notícias ruins. Destruo qualquer coisa que ameace minha paz mental.", thought: "Alienação intencional. Pensar na injustiça do mundo só traz dor, então você filtra o que consome para proteger a sua mente.", weights: { Prince: 3, Seer: -3, Mage: -2 } },
                { dialogue: "Foco em ser impecável nas minhas obrigações. Minha disciplina é minha resposta ao caos.", thought: "Foco na própria ordem. O mundo pode ser um caos injusto, mas você impõe ordem mantendo a sua própria vida impecável.", weights: { Maid: 3, Knight: 3, Page: 2, Bard: -3, Sylph: 1} },
                { dialogue: "Procuro grupos que compartilham da minha indignação para nos apoiarmos.", thought: "Força no coletivo. A indignação é o combustível que te faz procurar e se unir a outras pessoas que também querem mudança.", weights: { Rogue: 3, Sylph: 2, Witch: 2, Heir: 2 } },
                { dialogue: "Aceito que o jogo é viciado, mas tento trapacear de volta sempre que posso.", thought: "Trapaça compensatória. Se as regras do mundo já são viciadas contra você, jogar sujo parece a única forma justa de equilibrar as coisas.", weights: { Thief: 3, Witch: 2, Page: -1, Seer: -1 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. A pessoa que você mais admirava revelou ser uma farsa completa e que tudo o que ela pregava era mentira.",
            voices: [
                { aspect: "Heir", difficulty: 0, check: "Passivo: Médio", text: "Corte qualquer admiração na hora. Se era uma fraude, a pessoa não merece mais um segundo do seu respeito." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Difícil", text: "Guarde essa lição. Nunca mais confie cegamente e passe a desconfiar das intenções de todo mundo." }
            ],
            options: [
                { dialogue: "Recuso-me a acreditar. Mantenho minha fé na imagem dele apesar da realidade.", thought: "Negação pura. Aceitar a fraude significa quebrar a sua própria bússola, então você escolhe continuar acreditando na ilusão.", weights: { Prince: 3, Sylph: 1, Page: 2, Heir: -3, Seer: -3 } },
                { dialogue: "Não me surpreendo. Todo mundo é meio podre. Continuo acompanhando pelo entretenimento.", thought: "Expectativa baixa. Você nunca confiou cegamente em ninguém, então a queda do ídolo é apenas mais um evento esperado.", weights: { Bard: 3, Mage: 1, Page: -1 } },
                { dialogue: "Deixo de respeitar na hora. Apago qualquer rastro de admiração; ele morreu para mim.", thought: "Corte definitivo. A fraude anula todo o respeito anterior; você descarta a pessoa da sua vida sem qualquer hesitação.", weights: { Heir: 3, Seer: 2, Knight: 2, Thief: 2 } },
                { dialogue: "Uso o erro como exemplo para educar os outros e evitar que caiam na mesma cilada.", thought: "Uso do fracasso como lição. Você pega o exemplo da queda dele e mostra aos outros para que não cometam o mesmo erro.", weights: { Witch: 3, Sylph: 3, Rogue: 2, Maid: 2 } },
                { dialogue: "Fico remoendo a decepção e passo a ser muito mais cético com tudo.", thought: "Ceticismo reforçado. A decepção é tão forte que você passa a questionar as motivações de todas as outras pessoas ao seu redor.", weights: { Mage: 3, Page: 3, Heir: 1, Bard: -2 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Em um ambiente onde todos discutem de forma irracional, qual sua atitude?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Acabe com a gritaria inútil. Jogue a verdade dura na mesa e cale a boca de todo mundo." },
                { aspect: "Maid", difficulty: 2, check: "Ativo: Médio", text: "Mantenha a postura. Não desça ao nível deles e mostre controle absoluto enquanto o caos rola solto." }
            ],
            options: [
                { dialogue: "Faço uma piada para desviar a atenção e restaurar o clima leve.", thought: "Desarme pelo humor. O atrito te cansa, então você usa piadas para quebrar a tensão e mudar o foco da sala.", weights: { Sylph: 1, Heir: 2, Prince: -2, Rogue: 2 } },
                { dialogue: "Solto uma frase seca que resume o ridículo, calando a todos com a verdade bruta.", thought: "Choque de realidade. Você perde a paciência com o nível da briga e solta um fato inegável para calar a boca de todos.", weights: { Prince: 3, Seer: 3, Mage: 2, Sylph: 2, Witch: 2 } },
                { dialogue: "Jogo lenha na fogueira. Faço um comentário aleatório só para ver a confusão aumentar.", thought: "Instigação pelo caos. Já que a discussão não tem lógica, você adiciona comentários absurdos apenas para se divertir com a confusão.", weights: { Bard: 3, Thief: 2, Witch: 1, Knight: -2 } },
                { dialogue: "Aproveito que ninguém presta atenção para 'roubar' meu tempo e resolver minhas coisas.", thought: "Aproveitamento da distração. O caos deles é o cenário perfeito para você focar no seu trabalho sem que ninguém te atrapalhe.", weights: { Thief: 3, Witch: 2, Page: 2, Rogue: 1 } },
                { dialogue: "Mantenho o controle e espero o caos passar, julgando a falta de compostura alheia.", thought: "Superioridade silenciosa. Você não desce ao nível da gritaria e apenas observa, julgando internamente a falta de controle de todos.", weights: { Knight: 3, Maid: 3, Page: 2, Heir: 2, Mage: 1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você precisa escolher entre ser honesto e perder uma chance, ou mentir e conseguir o que quer.",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Difícil", text: "Fale a verdade e pronto. Mentir por covardia é pior do que encarar as consequências de ser sincero." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "Minta se for para proteger os outros. A verdade nem sempre compensa o estrago prático que ela faz." }
            ],
            options: [
                { dialogue: "Falo a verdade doa a quem doer. A verdade é o único caminho real.", thought: "Compromisso com a verdade. Mentir é uma quebra de princípios; você prefere perder com integridade a vencer sendo uma fraude.", weights: { Mage: 3, Seer: 3, Heir: 3, Thief: -3 } },
                { dialogue: "Minto se isso mantiver a minha paz; a verdade bruta às vezes é destrutiva demais.", thought: "Proteção da própria paz. Se a verdade vai trazer dores de cabeça enormes, você prefere omitir os fatos e evitar o desgaste.", weights: { Prince: 2, Heir: 2, Maid: -2 } },
                { dialogue: "Falo o que for mais conveniente ou engraçado na hora. A verdade é relativa e eu não devo nada a ninguém.", thought: "Relativismo prático. A verdade não é uma regra absoluta para você; mentir ou falar a verdade depende do que for mais conveniente.", weights: { Bard: 3, Thief: 2, Witch: 1, Knight: -3 } },
                { dialogue: "Sou honesto de forma agressiva, punindo quem me forçou a escolher.", thought: "Agressividade na honestidade. Ser forçado a escolher te irrita, então você joga a verdade na mesa de forma dura para punir quem perguntou.", weights: { Knight: 3, Page: 3, Maid: 2, Thief: 2 } },
                { dialogue: "Minto se isso for ajudar mais pessoas, escondendo a verdade por um bem maior.", thought: "Mentira utilitária. Ocultar a verdade não te causa culpa se o objetivo final for proteger ou ajudar outras pessoas a não sofrerem.", weights: { Sylph: 3, Rogue: 3, Witch: 3, Prince: -2 } }
            ]
        }
    ],

    "Light": [
        { 
            id: 1,
            scenario: "1. Você faz parte de uma equipe que realizou um feito notável, mas apenas uma pessoa será o rosto público desse sucesso. Como se posiciona?",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Quem não é visto não é lembrado. Tome a frente e garanta que todo mundo saiba exatamente quem foi que fez isso." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "Muita atenção só atrai cobrança. Saia de cena de fininho e evite virar o alvo principal dos outros." }
            ],
            options: [
                { dialogue: "Certifico-me de que minha contribuição seja a mais visível. É justo que eu detenha o controle da narrativa.", thought: "Reivindicação de mérito. Você exige que o seu esforço seja reconhecido publicamente, não aceitando que outra pessoa leve o crédito.", weights: { Thief: 3, Witch: 2, Maid: 2, Prince: -3 } },
                { dialogue: "Prefiro apagar minha participação e ficar fora dos holofotes; a atenção pública é um ruído invasivo.", thought: "Aversão à cobrança. Estar em destaque atrai expectativas que você não quer carregar, então prefere o anonimato.", weights: { Prince: 3, Page: -2, Thief: -3 } },
                { dialogue: "Faço questão de destacar o esforço de quem menos apareceu, garantindo que o reconhecimento seja dividido.", thought: "Senso de justiça. Você usa a atenção que recebeu para garantir que o trabalho dos bastidores também seja valorizado.", weights: { Rogue: 3, Sylph: 2, Thief: -3, Maid: -1 } },
                { dialogue: "Eu nem ligo se sabem que fui eu. Se esquecerem meu nome na hora dos créditos, paciência.", thought: "Desapego ao ego. O reconhecimento público não tem valor prático para você; o que importa é que o trabalho foi feito.", weights: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
                { dialogue: "Não forço nada. Se notarem meu valor, ótimo; se não, sei que eventualmente serei reconhecido.", thought: "Confiança no resultado. Você acredita que a competência fala por si mesma e não sente necessidade de forçar a autopromoção.", weights: { Heir: 3, Seer: 2, Knight: -2, Witch: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Você descobre uma verdade comprometedora sobre alguém influente que pode alterar o rumo de uma situação.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "Você tem a informação certa na mão. Use isso para prever os próximos passos deles e entender a situação real." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Fácil", text: "Use essa informação como um escudo. Proteja-se garantindo que ninguém consiga usar isso contra você." }
            ],
            options: [
                { dialogue: "Analiso cada detalhe dessa informação e como ela se conecta ao todo, sentindo o peso da verdade.", thought: "Análise de impacto. Você estuda a informação para entender como ela afeta o cenário geral antes de tomar qualquer atitude.", weights: { Mage: 3, Seer: 2, Prince: -1 } },
                { dialogue: "Deixo a informação vazar 'sem querer'. Se a verdade sair e causar o caos, aconteceu.", thought: "Caos intencional. Você planta a informação de forma indireta apenas para observar como as pessoas vão reagir à quebra da farsa.", weights: { Bard: 3, Witch: 2, Rogue: 1, Sylph: -2 } },
                { dialogue: "Guardo esse conhecimento como uma armadura ou ferramenta estratégica, pronto para usá-lo para me proteger.", thought: "Vantagem estratégica. A informação é guardada como uma carta na manga para ser usada como proteção ou alavanca no futuro.", weights: { Knight: 3, Thief: 2, Sylph: -2, Rogue: -2 } },
                { dialogue: "Finjo que nunca vi nada e destruo as evidências. Algumas verdades só servem para complicar o que funciona.", thought: "Proteção do status quo. Revelar a verdade causaria um problema maior do que mantê-la oculta, então você prefere apagar o fato.", weights: { Prince: 3, Seer: -3, Mage: -2 } },
                { dialogue: "Compartilho a informação com as pessoas afetadas para restaurar a clareza e garantir que ninguém seja enganado.", thought: "Foco na transparência. Você acredita que as pessoas têm o direito de saber a verdade, mesmo que isso gere conflito imediato.", weights: { Sylph: 3, Rogue: 2, Thief: -3, Prince: -1 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Em uma crise onde o sucesso depende puramente de um fator incontrolável (como a sorte), qual sua postura?",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "Não dependa da sorte de braços cruzados. Manipule as variáveis que você puder para forçar o resultado a sair como você quer." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Deixa rolar. Não vale a pena se estressar e gastar energia tentando controlar o incontrolável." }
            ],
            options: [
                { dialogue: "Confio que a sorte estará ao meu lado. Sinto que as probabilidades costumam conspirar a meu favor.", thought: "Otimismo prático. Você confia que a sua intuição e a sua capacidade de adaptação serão suficientes para lidar com o imprevisto.", weights: { Heir: 3, Knight: -3, Mage: -2 } },
                { dialogue: "Eu jogo a moeda e vejo no que dá. Se der errado, deu. Não tento controlar o incontrolável.", thought: "Aceitação da aleatoriedade. Se o resultado não depende de você, não há motivo para estresse; você apenas aceita o que vier.", weights: { Bard: 3, Rogue: 1, Page: 1, Seer: -2 } },
                { dialogue: "Tento encontrar brechas ou influenciar quem decide para garantir que as chances pendam para o meu lado.", thought: "Manipulação de variáveis. Você recusa a ideia de depender da sorte e age nos bastidores para influenciar as chances a seu favor.", weights: { Witch: 3, Thief: 2, Heir: -2, Seer: -2 } },
                { dialogue: "Ignoro a ideia de sorte e trabalho exaustivamente nos bastidores para compensar qualquer imprevisto.", thought: "Controle pelo esforço. Você trabalha em excesso para criar redundâncias e garantir que nenhuma falha de sorte destrua o projeto.", weights: { Knight: 3, Maid: 2, Page: 2, Heir: -3 } },
                { dialogue: "Me preocupo em calcular cada variável e sinal possível, prever o desfecho para não ser pego desprevenido.", thought: "Antecipação de cenários. A falta de controle te obriga a calcular todas as possibilidades para tentar prever o resultado.", weights: { Seer: 3, Mage: 3, Heir: -2, Bard: -1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Um erro pessoal seu é exposto publicamente e você se torna o centro dos julgamentos. Como reage?",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Você precisa consertar isso urgente. Trabalhe o dobro para limpar seu nome e recuperar a confiança deles." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Tire o foco da sua falha. Redirecione a atenção deles ou jogue a culpa sutilmente para cima de outra pessoa." }
            ],
            options: [
                { dialogue: "Decido que a opinião alheia é irrelevante. Trato a exposição como algo sem valor e sigo em frente.", thought: "Frieza perante a crítica. Você desliga o seu emocional da opinião pública e decide que o julgamento deles não tem impacto real.", weights: { Prince: 3, Knight: -3, Page: -2 } },
                { dialogue: "Assumo a falha e começo a trabalhar de forma punitiva para corrigir os fatos e restaurar minha reputação.", thought: "Reparação de imagem. Você foca em trabalhar o dobro para mostrar resultados concretos que apaguem a falha do seu histórico.", weights: { Maid: 3, Sylph: 2, Prince: -2 } },
                { dialogue: "Eu levo na esportiva. Se minha reputação foi pro lixo, pelo menos a história foi engraçada.", thought: "Defesa pelo humor. Ao rir de si mesmo, você tira o peso da humilhação e desarma quem estava tentando te julgar.", weights: { Bard: 3, Heir: 2, Mage: 1, Knight: -3 } },
                { dialogue: "Uso a vergonha da exposição como combustível para estudar onde errei e garantir que nunca mais aconteça.", thought: "Aprendizado prático. A exposição serve como um alerta claro das suas falhas, forçando você a melhorar para não errar de novo.", weights: { Page: 3, Knight: 2, Heir: -2, Bard: -1 } },
                { dialogue: "Tento desviar o foco do meu erro para outro assunto que seja mais relevante no momento.", thought: "Redirecionamento de foco. Você usa a comunicação para desviar a atenção do seu erro e colocar outro assunto em pauta.", weights: { Thief: 3, Rogue: 2, Mage: -2, Seer: -1 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Você percebe que um projeto ao qual se dedicou muito está perdendo a relevância e o interesse dos outros.",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "O projeto está perdendo o fôlego. Tente injetar ideias novas para clarear as coisas e convencer as pessoas a voltarem a focar nisso." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Se ninguém liga mais, acabe logo com isso. É melhor cancelar e pular fora do que ver o projeto definhar." }
            ],
            options: [
                { dialogue: "Exagero a importância do projeto ou crio um fato novo para que ele volte a ser o centro das atenções à força.", thought: "Retomada de atenção. Você cria novas narrativas ou exagera os fatos para forçar as pessoas a olharem para o projeto novamente.", weights: { Thief: 3, Witch: 2, Prince: -3, Rogue: -2 } },
                { dialogue: "Deixo que ele morra. Prefiro que caia no esquecimento do que vê-lo definhar sem propósito.", thought: "Encerramento imediato. Se o projeto perdeu a relevância, mantê-lo é perda de tempo; você prefere cancelar tudo e seguir em frente.", weights: { Prince: 3, Maid: -3, Sylph: -2 } },
                { dialogue: "Reformulo o projeto com novas informações e clareza, tentando torná-lo útil novamente para o grupo.", thought: "Reestruturação lógica. Você tenta salvar o projeto organizando as informações de um jeito mais claro e útil para o público.", weights: { Sylph: 3, Maid: 3, Prince: -2, Bard: -1 } },
                { dialogue: "Eu perco o interesse e vou fazer outra coisa. Se morreu por falta de atenção minha, já não brilhava mais.", thought: "Perda de interesse natural. A falta de atenção dos outros faz a sua própria motivação sumir, e você abandona a ideia aos poucos.", weights: { Bard: 3, Heir: 2, Knight: -2 } },
                { dialogue: "Aceito que a relevância é cíclica. Observo o que as pessoas estão valorizando agora e deixo que meu interesse mude.", thought: "Adaptação ao cenário. Você entende que o interesse das pessoas muda, então apenas adapta o seu foco para o que é relevante agora.", weights: { Heir: 3, Seer: 3, Thief: -2, Witch: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Como você lida com a necessidade de ser 'visto' ou validado pelos outros no seu cotidiano?",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Difícil", text: "Você precisa provar que é bom. Mostre resultados inquestionáveis até que eles sejam obrigados a te reconhecer e te respeitar." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "Não busque a fama para si. Redirecione os elogios para a qualidade do trabalho em si e para o resto da equipe." }
            ],
            options: [
                { dialogue: "Sinto que preciso provar meu valor constantemente; se eu não estiver sendo notado, perco minha relevância.", thought: "Necessidade de reconhecimento. Você sente que o seu trabalho só tem valor real se for validado e elogiado pelas outras pessoas.", weights: { Knight: 3, Page: 3, Maid: 2, Prince: -3 } },
                { dialogue: "Sinto-me agredido pela atenção constante. Prefiro o anonimato e a escuridão.", thought: "Rejeição da visibilidade. Estar no centro das atenções te causa ansiedade, pois atrai expectativas que você não quer cumprir.", weights: { Prince: 3, Thief: -3, Page: -2 } },
                { dialogue: "Não ligo se me veem ou não. Às vezes sou o centro das atenções, às vezes sou invisível. Deixo acontecer.", thought: "Indiferença à fama. Ser elogiado ou ignorado não altera o seu humor; você faz o que quer sem se importar com a plateia.", weights: { Bard: 3, Heir: 2, Rogue: 1, Mage: 1 } },
                { dialogue: "Prefiro que meu mérito seja redirecionado para o que eu produzo ou para o grupo; detesto ser o foco central.", thought: "Foco na obra. Você prefere que as pessoas valorizem a qualidade do que foi feito em vez de focar na sua figura pessoal.", weights: { Rogue: 3, Sylph: 2, Thief: -2, Knight: -1 } },
                { dialogue: "Uso minha imagem e visibilidade apenas como uma ferramenta pontual para conseguir o que quero.", thought: "Visibilidade como ferramenta. A atenção pública só serve para te dar poder de influência e conseguir vantagens práticas.", weights: { Witch: 3, Thief: 3, Page: -2, Knight: -2 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Ao se deparar com várias versões conflitantes de uma mesma história, como decide em qual acreditar?",
            voices: [
                { aspect: "Mage", difficulty: 0, check: "Passivo: Médio", text: "As pessoas inventam demais. Filtre o ruído do disse-me-disse e foque apenas nos fatos crus que você pode comprovar." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Fácil", text: "A verdade é quem grita mais alto. Molde a narrativa do jeito que for mais prático e conveniente para o seu lado." }
            ],
            options: [
                { dialogue: "Busco a versão factual e lógica. A verdade não deve ser moldada pela conveniência.", thought: "Foco na objetividade. Você ignora as opiniões e emoções das pessoas para se basear apenas no que pode ser provado com lógica.", weights: { Seer: 3, Mage: 3, Witch: -3, Thief: -2 } },
                { dialogue: "Escolho a versão que melhor serve aos meus objetivos ou que cria a narrativa mais útil.", thought: "Conveniência narrativa. A verdade absoluta não importa; você escolhe a versão da história que mais beneficia os seus interesses.", weights: { Witch: 3, Thief: 2, Seer: -3, Mage: -2 } },
                { dialogue: "Eu não acredito em nenhuma. Deixo as pessoas brigarem pela 'verdade' enquanto eu acho graça.", thought: "Desapego dos fatos. Você acha inútil brigar por quem está certo e prefere apenas rir da necessidade que as pessoas têm de ter razão.", weights: { Bard: 3, Rogue: 1, Knight: -2 } },
                { dialogue: "Acredito que não existe uma verdade absoluta; deixo que cada versão flua e o tempo revele qual terá peso.", thought: "Confiança no tempo. Você não tenta forçar uma conclusão; acredita que a versão mais correta se provará verdadeira eventualmente.", weights: { Heir: 3, Knight: -3, Maid: -2 } },
                { dialogue: "Adoto a versão que exige mais responsabilidade e ação da minha parte, usando-a como um mapa.", thought: "Escolha pela dificuldade. Você assume a versão que exige mais trabalho, acreditando que a solução mais fácil geralmente está errada.", weights: { Knight: 3, Page: 2, Bard: -2, Heir: -1 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Ao observar um evento trágico ou aleatório no mundo, qual é o seu primeiro impulso mental?",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "Tudo tem um lado útil. Tente encontrar uma lição real nisso tudo para ajudar as pessoas a não se desesperarem." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Não romantize o caos. Foi um desastre e pronto; aceitar a realidade nua e crua é o jeito mais rápido de superar." }
            ],
            options: [
                { dialogue: "Procuro imediatamente uma lição ou propósito. Recuso-me a aceitar que as coisas aconteçam sem razão.", thought: "Busca por significado. A aleatoriedade do caos te assusta, então você tenta encontrar uma lição moral para justificar a tragédia.", weights: { Sylph: 3, Maid: 2, Seer: 2, Prince: -3 } },
                { dialogue: "Fico obcecado em entender a cadeia de eventos, catalogando erros para que a ignorância não se repita.", thought: "Prevenção pelo estudo. Você analisa a tragédia de forma lógica para descobrir o erro e garantir que não aconteça de novo com você.", weights: { Mage: 3, Page: 2, Knight: 2, Heir: -2 } },
                { dialogue: "Aceito que o mundo é um lugar de ruído e que tentar encontrar 'sentido' em tudo é perda de tempo.", thought: "Pragmatismo duro. Você aceita que coisas ruins acontecem sem motivo e se recusa a romantizar o problema para se sentir melhor.", weights: { Prince: 3, Maid: -3, Sylph: -2 } },
                { dialogue: "Não penso muito sobre isso. Coisas ruins acontecem, o mundo é aleatório. Sigo sem tentar decifrar o caos.", thought: "Desconexão emocional. Como o evento não afeta a sua vida prática, você não perde tempo tentando entender ou sofrer por ele.", weights: { Bard: 3, Heir: 2, Rogue: 1, Seer: -2 } },
                { dialogue: "Tento usar o impacto do evento para chamar atenção para causas que considero importantes.", thought: "Uso da comoção. O impacto do evento prende a atenção das pessoas, e você aproveita isso para direcioná-las aos seus próprios objetivos.", weights: { Thief: 3, Witch: 2, Rogue: -2, Seer: -1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você está em uma discussão acalorada onde sabe, com 100% de certeza, que a pessoa está errada sobre um fato.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Eles estão espalhando desinformação pura. Corrija o erro imediatamente para que as coisas não saiam dos trilhos." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Deixe a pessoa falar besteira sozinha. Use o erro visível dela para você ganhar vantagem e sair por cima da discussão." }
            ],
            options: [
                { dialogue: "Interrompo e apresento as provas. Não suporto ver a desinformação prosperar quando a verdade está ali.", thought: "Tolerância zero ao erro. Você não suporta desinformação e sente a obrigação imediata de corrigir os fatos para manter a ordem.", weights: { Maid: 3, Sylph: 2, Knight: 2, Prince: -3 } },
                { dialogue: "Deixo que ela continue falando o que quiser. A ignorância alheia é irrelevante para mim.", thought: "Desprezo pelo debate. Discutir com quem não sabe do que está falando é perda de tempo, então você apenas ignora a pessoa.", weights: { Prince: 3, Mage: -2, Seer: -2 } },
                { dialogue: "Deixo a pessoa falar besteira. É divertido ver alguém confiante no erro, e não vou gastar energia corrigindo.", thought: "Entretenimento pelo absurdo. A confiança da pessoa em um erro tão óbvio é engraçada, e você prefere observar a gafe do que corrigi-la.", weights: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
                { dialogue: "Uso o erro dela como vantagem estratégica, deixando que se exponha até eu usar a verdade para desarmá-la.", thought: "Manipulação da falha. Você deixa a pessoa falar para se comprometer, guardando a correção para usá-la no momento em que for mais útil.", weights: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
                { dialogue: "Tento corrigir a pessoa de forma sutil, compartilhando o conhecimento como se fosse uma descoberta conjunta.", thought: "Correção sutil. Para não causar constrangimento, você insere a informação correta na conversa de forma amigável e indireta.", weights: { Rogue: 3, Heir: 2, Thief: -3, Knight: -1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Em uma situação tensa, você percebe que a transparência total está causando conflitos. Qual sua atitude?",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Difícil", text: "Falar a verdade inteira vai causar briga agora, mas é a única forma de curar a desconfiança do grupo e seguir em frente." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "Tem certas coisas que é melhor ninguém saber. Esconda a informação de propósito para evitar conflitos inúteis." }
            ],
            options: [
                { dialogue: "Defendo que a clareza é a única cura. Tudo deve ser exposto para resolver o problema pela raiz.", thought: "Transparência inegociável. Você acredita que a verdade deve ser dita custe o que custar, pois ocultar fatos só gera desconfiança futura.", weights: { Sylph: 3, Seer: 2, Prince: -3, Bard: -2 } },
                { dialogue: "Acredito que o segredo é uma forma de proteção; algumas coisas devem permanecer no escuro.", thought: "Ocultação para evitar danos. A clareza total geraria um conflito inútil; omitir fatos é a atitude mais prática para manter a ordem.", weights: { Prince: 3, Sylph: -3, Seer: -2 } },
                { dialogue: "Solto a verdade e saio de perto. Se a clareza vai causar briga, que cause. O circo pegando fogo é interessante.", thought: "Instigação do conflito. Você joga a verdade na roda apenas para ver como as pessoas vão reagir ao choque da revelação.", weights: { Bard: 3, Thief: 2, Witch: 1, Seer: -1 } },
                { dialogue: "Organizo as informações de forma pragmática, revelando apenas o necessário para manter a ordem.", thought: "Transparência controlada. Você expõe os fatos aos poucos, liberando apenas o necessário para resolver a situação sem causar pânico.", weights: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
                { dialogue: "Compartilho a verdade de forma diluída, tentando fazer com que o peso da informação seja dividido.", thought: "Suavização da verdade. Você tenta contar os fatos de maneira amena para diminuir o impacto da revelação no grupo.", weights: { Rogue: 3, Heir: 2, Thief: -2, Witch: -1 } }
            ]
        }
    ],

    "Void": [
        { 
            id: 1,
            scenario: "1. Você descobre um segredo íntimo de um conhecido que mudaria a percepção de todos, mas só você sabe.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Segredos só causam problema. Exponha logo a verdade antes que a falta de transparência deixe a situação pior." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "Saber o que ninguém mais sabe é uma vantagem absurda. Guarde essa informação só com você para usar na hora certa." }
            ],
            options: [
                { dialogue: "Revelo a verdade imediatamente. Odeio segredos; são buracos na realidade que precisam ser preenchidos com fatos.", thought: "Aversão a segredos. Você acha que a falta de transparência só gera mais problemas, então joga a verdade na mesa imediatamente.", weights: { Prince: 3, Seer: 2, Knight: 1 } },
                { dialogue: "Guardo essa informação como um trunfo pessoal, sentindo que o conhecimento oculto me dá uma vantagem.", thought: "Ocultação estratégica. Guardar essa informação te dá uma vantagem clara sobre a situação, e você a reserva para o momento certo.", weights: { Thief: 3, Witch: 2, Mage: 1 } },
                { dialogue: "Acabo soltando o segredo sem querer. Não sou bom em guardar coisas que não me importam muito.", thought: "Descuido não intencional. Como o assunto não te interessa, você acaba comentando sem perceber o peso que o segredo tinha.", weights: { Bard: 3, Rogue: 1, Page: 1, Seer: -2 } },
                { dialogue: "Protejo essa informação com discrição. Se o segredo existe, é porque deve permanecer no escuro.", thought: "Respeito ao silêncio. Se a informação não foi feita para ser pública, você assume a responsabilidade de mantê-la oculta a todo custo.", weights: { Maid: 3, Knight: 2, Page: 2 } },
                { dialogue: "Observo como esse 'não-dito' influencia as interações, deixando o mistério seguir seu curso natural.", thought: "Observação privilegiada. É fascinante observar como as pessoas agem e tomam decisões sem saberem da verdade que só você possui.", weights: { Mage: 3, Heir: 1, Bard: 1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Em um ambiente social, você percebe que suas contribuições são ignoradas e você se sente um 'zero à esquerda'.",
            voices: [
                { aspect: "Bard", difficulty: 0, check: "Passivo: Fácil", text: "Ser ignorado é ótimo. Fique na sua e aproveite a paz absoluta de não ter ninguém te cobrando nada." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Difícil", text: "Dói ser invisível. Faça alguma coisa grande ou barulhenta o suficiente para forçar eles a notarem o seu valor." }
            ],
            options: [
                { dialogue: "Eu prefiro assim. Fico no meu canto, invisível, fazendo minhas coisas sem ninguém para me encher a paciência.", thought: "Conforto no isolamento. Não ser notado significa não ser cobrado; você usa a invisibilidade como um escudo para ter paz.", weights: { Bard: 3, Heir: 2, Rogue: 2, Prince: -3 } },
                { dialogue: "Aceito o anonimato. Há uma liberdade imensa em não ser notado, agindo sem o peso da expectativa.", thought: "Liberdade do anonimato. A falta de atenção externa tira qualquer pressão das suas costas, permitindo que você aja como quiser.", weights: { Heir: 3, Rogue: 2, Mage: 1 } },
                { dialogue: "Isso me fere, então passo a agir com uma competência performática, tentando provar meu valor.", thought: "Necessidade de validação. Ser ignorado afeta a sua autoestima, fazendo você tentar provar o seu valor através de resultados inquestionáveis.", weights: { Page: 3, Knight: 2, Maid: 1 } },
                { dialogue: "Eu forço minha presença. Não aceito ser ignorado; faço barulho para que minha relevância seja notada.", thought: "Imposição de presença. Você não aceita ser tratado como invisível e muda de postura agressivamente para forçar o grupo a te notar.", weights: { Prince: 3, Thief: 2, Witch: 1, Heir: -3 } },
                { dialogue: "Procuro outros que estão sendo excluídos e tento criar um espaço onde a 'invisibilidade' não seja ruim.", thought: "Acolhimento dos excluídos. Você nota quem mais está sendo deixado de lado e cria conexões com essas pessoas nos bastidores.", weights: { Rogue: 3, Sylph: 3, Page: 1 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Você recebe uma tarefa importante, mas não lhe dão instruções ou qualquer pista de como começar.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Ninguém te deu instruções claras? Ótimo. Crie as suas próprias regras do zero e faça o trabalho inteiro do seu jeito." },
                { aspect: "Seer", difficulty: 2, check: "Passivo: Difícil", text: "Preste atenção no que não foi dito. O silêncio nas ordens diz muito sobre o que eles realmente esperam de você." }
            ],
            options: [
                { dialogue: "Começo do zero absoluto. Se não há nada construído, eu crio minhas próprias regras e preencho o vazio.", thought: "Criação de estrutura. Se ninguém te dá um direcionamento, você mesmo cria o método do zero e executa a tarefa da sua maneira.", weights: { Maid: 3, Witch: 3, Page: 1 } },
                { dialogue: "Analiso o que 'não foi dito'. O silêncio revela mais sobre as intenções reais do que palavras.", thought: "Leitura de entrelinhas. Você usa o que não foi falado como pista principal para deduzir o que realmente esperam que você faça.", weights: { Seer: 3, Mage: 3, Knight: 1 } },
                { dialogue: "Recuso-me a trabalhar no escuro. Exijo clareza total imediatamente; não movo um dedo sem saber o que é.", thought: "Paralisação por incerteza. Você se recusa a agir sem parâmetros claros, exigindo que lhe deem diretrizes precisas antes de começar.", weights: { Prince: 3, Thief: 2, Knight: 1 } },
                { dialogue: "Faço de qualquer jeito ou nem faço. Se não explicaram, o problema é deles quando o resultado vier em branco.", thought: "Desinteresse reativo. Se eles não se importam o suficiente para explicar, você também não vai se esforçar para entregar um bom resultado.", weights: { Bard: 3, Heir: 1, Rogue: 1, Prince: -2 } },
                { dialogue: "Divido a incerteza com o grupo, buscando uma solução que não dependa de ordens claras para avançar.", thought: "Decisão em grupo. Você busca o consenso entre os colegas para que todos decidam juntos como preencher essa falta de orientação.", weights: { Rogue: 2, Heir: 2, Sylph: 3 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Um boato vago e confuso sobre você começa a circular, mas ninguém consegue confirmar a verdade.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Fácil", text: "Aproveite a fofoca vaga. Já que ninguém sabe a verdade, manipule a história para que o boato trabalhe a seu favor." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Médio", text: "As pessoas estão pirando em teorias idiotas. Traga silêncio e calma para ajudar quem está sendo afetado por essa confusão." }
            ],
            options: [
                { dialogue: "Uso o mistério a meu favor. Mantenho uma postura enigmática que confunde ainda mais as pessoas.", thought: "Mistério intencional. Em vez de se justificar, você usa a ambiguidade para deixar as pessoas ainda mais curiosas e confusas sobre você.", weights: { Knight: 3, Page: 2, Heir: 1 } },
                { dialogue: "Manipulo a narrativa silenciosamente, inserindo novas dúvidas até que o boato original perca o sentido.", thought: "Manipulação da fofoca. Você alimenta o boato com informações cruzadas até que a história original perca completamente o sentido.", weights: { Witch: 3, Thief: 3, Mage: 1 } },
                { dialogue: "Ignoro e foco em ajudar as pessoas afetadas pela confusão, agindo como porto seguro de silêncio.", thought: "Foco prático. Você ignora o falatório inútil e concentra a sua energia em consolar as pessoas que se machucaram com o mal-entendido.", weights: { Sylph: 3, Maid: 2, Rogue: 2 } },
                { dialogue: "Exponho a origem do boato e os fatos crus. Detesto que buracos na verdade sejam usados para me definir.", thought: "Confronto direto. Você odeia meias-verdades e exige esclarecer os fatos publicamente para matar o boato pela raiz.", weights: { Prince: 3, Mage: 2, Seer: 1 } },
                { dialogue: "Nem confirmo nem nego. Deixo o povo falar. Acho engraçado ver as teorias absurdas que criam sobre mim.", thought: "Desapego da própria imagem. Você acha graça da criatividade alheia e não gasta um segundo sequer tentando corrigir o que pensam de você.", weights: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Você conhece alguém fascinante, mas a pessoa é um mistério completo e nunca fala de si.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Essa pessoa esconde algo de propósito e isso te irrita. Force a barra até descobrir o que ela não quer contar de jeito nenhum." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "Respeite a privacidade alheia. Se a pessoa não quer falar e prefere o silêncio, não force a barra nem faça perguntas." }
            ],
            options: [
                { dialogue: "A incerteza me atrai. Sinto que posso aprender sobre o mundo apenas observando o que ela esconde.", thought: "Curiosidade analítica. O mistério atiça a sua vontade de estudar a pessoa de longe e tentar deduzir os seus segredos pelas atitudes dela.", weights: { Mage: 3, Seer: 3 } },
                { dialogue: "Tento 'quebrar' esse mistério. Faço perguntas invasivas; odeio não saber com quem estou lidando.", thought: "Intolerância ao mistério. Você detesta ficar no escuro e tenta forçar a barra para descobrir o que a pessoa está escondendo.", weights: { Thief: 3, Witch: 2, Prince: 3 } },
                { dialogue: "Respeito o vazio. Não sinto necessidade de cavar a vida; aceito o que a pessoa apresenta no agora.", thought: "Respeito ao silêncio. Você não se incomoda com o mistério; se a pessoa não quer falar sobre si mesma, você apenas aceita.", weights: { Heir: 3, Rogue: 3, Sylph: 1 } },
                { dialogue: "Não ligo. Se a pessoa não fala nada, a gente fica em silêncio. É menos esforço pra mim.", thought: "Falta de interesse mútuo. Se a pessoa não puxa assunto, você também não se esforça para render a conversa, e o silêncio reina.", weights: { Bard: 3, Knight: -1, Seer: -2 } },
                { dialogue: "Sinto desconfiança. Se não há transparência, não há base para relação; tento forçar clareza ou me afasto.", thought: "Desconfiança ativada. A falta de transparência te deixa em alerta máximo; se a pessoa esconde muito, você presume que há más intenções.", weights: { Prince: 2, Knight: 2, Page: 1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Algo essencial para o grupo desapareceu e ninguém sabe onde está ou como recuperar.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Difícil", text: "Pense de forma lógica sobre o que sumiu. A ausência daquele objeto vai te dar a pista óbvia de onde ele foi parar." },
                { aspect: "Page", difficulty: 2, check: "Ativo: Médio", text: "Se perderam o objeto essencial, fabrique outro do nada. Use esse problema como motivação para criar uma substituição melhor." }
            ],
            options: [
                { dialogue: "Trabalho dobrado para suprir a falta do que foi perdido, garantindo que o grupo não desmorone.", thought: "Esforço compensatório. Você trabalha o dobro para garantir que a falta do objeto não prejudique o andamento geral do grupo.", weights: { Maid: 3, Sylph: 3, Knight: 1 } },
                { dialogue: "Encorajo o grupo a desapegar. Talvez a perda seja uma oportunidade para abandonarmos o obsoleto.", thought: "Aproveitamento da falta. Você usa o sumiço como desculpa perfeita para o grupo se desapegar do velho e tentar algo novo.", weights: { Rogue: 3, Heir: 2, Prince: 1 } },
                { dialogue: "Rastreio o 'nada'. Entendo que a ausência do objeto deixa pistas e uso essa falta de informação.", thought: "Raciocínio dedutivo. Você analisa a situação logicamente para tentar rastrear o objeto perdido pelas pistas deixadas na sua ausência.", weights: { Seer: 3, Mage: 3, Witch: 1 } },
                { dialogue: "Eu nem tinha percebido que sumiu. E se sumiu, deve aparecer uma hora dessas. Não me estresso.", thought: "Despreocupação total. Perdas acontecem; você não se importa o suficiente para procurar e apenas espera que o objeto reapareça sozinho.", weights: { Bard: 3, Heir: 2, Knight: -2, Seer: -2 } },
                { dialogue: "Tento criar algo novo do nada para substituir a perda, agindo para que o vácuo não nos consuma.", thought: "Solução criativa. Em vez de reclamar, você usa a necessidade imediata como combustível para improvisar ou fabricar um substituto.", weights: { Page: 3, Witch: 2, Maid: 1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Você realiza um trabalho hercúleo nos bastidores, mas outra pessoa recebe todo o crédito público.",
            voices: [
                { aspect: "Rogue", difficulty: 0, check: "Passivo: Fácil", text: "Deixa ele levar os créditos. Fama só atrai dor de cabeça; você trabalha muito melhor no anonimato dos bastidores." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "Não deixe ninguém levar o crédito pelo seu suor. Tome a frente e exija o reconhecimento que pertence só a você." }
            ],
            options: [
                { dialogue: "Tanto faz. Se o crédito for para outro, a responsabilidade de manter o sucesso também é dele. Eu fico livre.", thought: "Fuga de responsabilidade. Se o crédito foi para o outro, a cobrança também será; você aproveita isso para se esquivar de trabalho futuro.", weights: { Bard: 3, Rogue: 2, Heir: 2, Prince: -2 } },
                { dialogue: "Não me importo. O fato de o trabalho ter sido feito no anonimato me agrada; a relevância é um fardo.", thought: "Conforto no anonimato. Você não liga para aplausos; o fato de ter feito um bom trabalho sem ser notado já é recompensa suficiente.", weights: { Rogue: 3, Heir: 2, Page: 1 } },
                { dialogue: "Isso é inaceitável. Exponho minha participação e exijo reconhecimento; não serei figurante na minha obra.", thought: "Exigência de reconhecimento. É inadmissível que levem o crédito pelo seu suor; você toma a frente e prova publicamente que o trabalho foi seu.", weights: { Prince: 3, Thief: 2, Witch: 1 } },
                { dialogue: "Mantenho o silêncio. Minha segurança vem da competência interna, e o anonimato me protege de interferências.", thought: "Segurança nos bastidores. Ficar de fora dos holofotes é vantajoso; isso permite que você continue trabalhando no seu ritmo sem ser microgerenciado.", weights: { Knight: 3, Maid: 3, Page: 1 } },
                { dialogue: "Uso meu anonimato para continuar ajudando de forma desinteressada, onde ninguém pode me vigiar.", thought: "Altruísmo silencioso. O anonimato te dá a liberdade perfeita para continuar ajudando e resolvendo problemas sem que ninguém te atrapalhe.", weights: { Sylph: 3, Seer: 2, Mage: 1 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Você está diante de uma decisão onde todos os caminhos levam ao desconhecido, sem garantias de segurança.",
            voices: [
                { aspect: "Heir", difficulty: 0, check: "Passivo: Fácil", text: "Confie no escuro. Mesmo sem saber o caminho seguro, as coisas vão se encaixar sozinhas se você apenas seguir em frente." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Difícil", text: "Não dá para agir sem enxergar nada. Force uma resposta ou elimine as interrogações antes de dar o próximo passo." }
            ],
            options: [
                { dialogue: "Confio no fluxo do incerto. Sinto que o caminho correto se revelará enquanto caminho pela escuridão.", thought: "Confiança no desconhecido. Você não se estressa com o escuro; acredita que, se apenas seguir em frente, as coisas vão se ajeitar sozinhas.", weights: { Seer: 3, Heir: 3, Mage: 1 } },
                { dialogue: "Tento eliminar as variáveis desconhecidas antes de agir. Detesto operar sem o controle da informação.", thought: "Necessidade de clareza. A ausência de certezas te paralisa; você tenta arrancar respostas e eliminar dúvidas antes de dar o próximo passo.", weights: { Prince: 3, Knight: 2, Mage: 1 } },
                { dialogue: "Escolho qualquer um sem pensar muito. Se é tudo desconhecido mesmo, planejar é perda de tempo.", thought: "Decisão aleatória. Como não há base lógica para escolher, você pega qualquer caminho no improviso e lida com o que vier depois.", weights: { Bard: 3, Rogue: 1, Page: 1 } },
                { dialogue: "Escolho o caminho mais vazio. Vou moldar a realidade conforme surgir, criando algo onde não há nada.", thought: "Moldar o nada. O caminho vazio é a melhor opção, pois te dá espaço absoluto para criar e adaptar a situação às suas próprias regras.", weights: { Witch: 3, Page: 4, Maid: 2 } },
                { dialogue: "Aceito a incerteza. O melhor plano é não ter plano e deixar que o vácuo nos leve a lugares novos.", thought: "Adaptação contínua. Você aceita o vazio como uma folha em branco, mudando seus planos dinamicamente conforme os novos problemas surgem.", weights: { Heir: 3, Mage: 2, Rogue: 2 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você encontra um objeto quebrado que todos consideram lixo, sem utilidade ou relevância.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Fácil", text: "Não jogue isso fora ainda. Com um pouco de esforço e conserto prático, esse lixo pode voltar a ter alguma utilidade." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "Se está quebrado e não serve para mais nada, descarte logo. Acumular lixo sem utilidade só atrapalha a vida." }
            ],
            options: [
                { dialogue: "Eu o descarto. Se não tem utilidade, é ruído que deve ser eliminado do meu espaço.", thought: "Descarte prático. Se o objeto quebrou e perdeu a função principal, guardá-lo é inútil; a única atitude lógica é jogá-lo fora.", weights: { Prince: 3, Thief: 2, Knight: 1 } },
                { dialogue: "Eu perco ele de novo. Provavelmente vou esquecer onde coloquei cinco minutos depois de pegar.", thought: "Descuido natural. Você é tão indiferente a coisas materiais que provavelmente vai perder ou esquecer o objeto de novo em questão de minutos.", weights: { Bard: 3, Heir: 1, Seer: -2 } },
                { dialogue: "Eu o guardo. Sinto conexão com o que foi esquecido e encontro conforto em possuir o que ninguém valoriza.", thought: "Conexão com o inútil. Você guarda o objeto porque sente um apego emocional por coisas que foram esquecidas e rejeitadas pelos outros.", weights: { Knight: 3, Page: 3, Rogue: 2 } },
                { dialogue: "Tento consertá-lo ou dar uma função nova. Recuso-me a aceitar que algo possa ser simplesmente inútil.", thought: "Conserto prático. Você não aceita o descarte fácil e gasta o seu tempo tentando consertar o objeto para devolvê-lo à utilidade original.", weights: { Maid: 3, Witch: 3, Sylph: 2 } },
                { dialogue: "Deixo-o onde está. O ciclo é natural; não há necessidade de intervir no que volta ao nada.", thought: "Inação total. Você simplesmente deixa o objeto onde o encontrou, sem sentir necessidade nenhuma de intervir no que os outros já consideram lixo.", weights: { Heir: 3, Seer: 1, Mage: 1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você sente que não possui uma personalidade fixa, agindo apenas como um reflexo do que esperam de você.",
            voices: [
                { aspect: "Heir", difficulty: 0, check: "Passivo: Fácil", text: "Não ter uma personalidade amarrada é libertador. Molde-se ao ambiente que você estiver e evite as cobranças que os rótulos trazem." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Difícil", text: "Essa falta de identidade real te incomoda profundamente. Pare de ser um reflexo dos outros e force-se a ser alguém de verdade." }
            ],
            options: [
                { dialogue: "Isso me desespera. Me esforço para construir uma identidade para que ninguém duvide da minha existência.", thought: "Busca por solidez. A falta de uma identidade fixa te apavora, e você luta constantemente para tentar definir quem você realmente é para si mesmo e para os outros.", weights: { Prince: 3, Knight: 2, Page: 2 } },
                { dialogue: "Sinto-me em paz. Se sou 'nada' por dentro, posso ser 'qualquer coisa' por fora, sem ser aprisionado.", thought: "Liberdade da indefinição. Não ser amarrado a rótulos te traz paz; você se adapta às pessoas ao seu redor de forma orgânica e sem conflito.", weights: { Heir: 3, Rogue: 2, Sylph: 1 } },
                { dialogue: "Uso essa fluidez como ferramenta. Mudo quem sou conforme a necessidade para obter o que desejo.", thought: "Uso tático das máscaras. Você utiliza essa fluidez para se transformar exatamente no que as pessoas precisam ver, manipulando o cenário a seu favor.", weights: { Witch: 3, Thief: 3, Mage: 2 } },
                { dialogue: "Eu só deixo rolar. É mais fácil concordar com o que acham que eu sou do que explicar algo que nem eu sei.", thought: "Conformismo passivo. É menos exaustivo apenas concordar com o que os outros acham que você é do que tentar explicar uma identidade que nem você entende.", weights: { Bard: 3, Heir: 2, Page: 1 } },
                { dialogue: "Observo esse vazio. Entender que o 'eu' é uma ilusão permite ver verdades atrás das máscaras alheias.", thought: "Leitura crítica. Entender que a sua identidade é moldável te dá a clareza necessária para perceber quando os outros estão mentindo sobre quem eles são.", weights: { Seer: 3, Mage: 3, Sylph: 2 } }
            ]
        }
    ],

    "Mind": [
        { 
            id: 1,
            scenario: "1. Em um projeto, a decisão coletiva é logicamente impecável, mas prejudicará injustamente um indivíduo isolado.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "A regra é clara e deve ser seguida. Focar nos sentimentos dessa pessoa agora só vai prejudicar a eficiência de todo o resto." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Difícil", text: "A decisão é fria demais. Ache uma forma de contornar a regra e tirar o peso dessa injustiça das costas da vítima." }
            ],
            options: [
                { dialogue: "Sigo o plano. A integridade do sistema é prioridade; sentimentos não devem corromper a lógica.", thought: "Foco no coletivo. A lógica da decisão beneficia a maioria, então o prejuízo individual deve ser aceito como um dano colateral necessário.", weights: { Maid: 3, Knight: 2, Prince: -3 } },
                { dialogue: "Ignoro a decisão ou apresento contra-argumento emocional. Não tolero lógica fria esmagando o certo.", thought: "Recusa à injustiça. Nenhuma decisão lógica justifica prejudicar alguém diretamente, e você bate de frente para impedir isso.", weights: { Prince: 3, Witch: -2, Sylph: -1 } },
                { dialogue: "Finjo que não vi as consequências ruins. Deixo o grupo decidir e, se der errado, a culpa é da maioria.", thought: "Omissão estratégica. Você não concorda, mas prefere não se desgastar brigando contra a maioria e apenas deixa o processo rolar.", weights: { Bard: 3, Heir: 1, Rogue: 1, Prince: -2 } },
                { dialogue: "Analiso os desdobramentos e tento encontrar uma brecha técnica que proteja o indivíduo sem invalidar o plano.", thought: "Busca por brechas. Você analisa as regras a fundo para tentar encontrar uma saída técnica que proteja a pessoa sem quebrar o plano.", weights: { Seer: 3, Mage: 2, Sylph: 3, Thief: -1 } },
                { dialogue: "Exponho a falha moral do plano para que o grupo lide com o peso da escolha, retirando minha responsabilidade.", thought: "Transferência de culpa. Você escancara o peso moral da escolha para que o grupo sinta o incômodo e assuma a responsabilidade, tirando o seu da reta.", weights: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Você está em um jantar formal onde todos fingem se gostar, notando claramente as máscaras e intenções ocultas.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "Fique só observando. A hipocrisia de todos eles sorrindo te dá uma visão muito clara de quem realmente manda nessa sala." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Fácil", text: "Jogue o jogo deles. Mantenha as aparências falsas e use a etiqueta do evento como escudo para não se expor." }
            ],
            options: [
                { dialogue: "Sinto um cansaço profundo. Ver a mecânica por trás das interações tira a cor da vida; sinto-me prisioneiro.", thought: "Esgotamento social. Perceber a falsidade de todo mundo tira a sua energia e faz o evento parecer uma grande perda de tempo.", weights: { Mage: 3, Page: 3, Seer: 1, Prince: -2 } },
                { dialogue: "Mantenho minha própria máscara perfeitamente polida. Uso o protocolo social como armadura.", thought: "Adaptação defensiva. Você entra no personagem e usa a falsidade do ambiente a seu favor para passar despercebido e sair ileso.", weights: { Knight: 3, Maid: 2, Rogue: -2 } },
                { dialogue: "Eu esqueço o protocolo e falo o que penso. Se ficar um clima estranho, pelo menos quebrou a falsidade.", thought: "Quebra de expectativa. A falsidade te irrita tanto que você prefere criar um desconforto real a continuar fingindo.", weights: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
                { dialogue: "Intervenho nas conversas, mudando o rumo dos assuntos para testar até onde as pessoas sustentam os personagens.", thought: "Manipulação sutil. Você testa os limites da paciência das pessoas apenas para ver até onde elas conseguem sustentar o personagem.", weights: { Witch: 3, Thief: 2, Heir: -2, Sylph: -1 } },
                { dialogue: "Observo em silêncio, quase invisível, absorvendo as dinâmicas para entender quem realmente detém o poder.", thought: "Observação tática. O silêncio é a sua melhor ferramenta para analisar a dinâmica de poder e entender quem é quem de verdade.", weights: { Seer: 3, Heir: 2, Thief: -3, Knight: -1 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Um erro grave foi cometido por um colega e a culpa está recaindo sobre o grupo todo. Como você se posiciona?",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Use o erro dessa pessoa como um trampolim. Mostre como você faria muito melhor e saia por cima do grupo." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Médio", text: "O grupo precisa se ajudar agora. Distribua a responsabilidade do erro logicamente para que ninguém saia prejudicado sozinho." }
            ],
            options: [
                { dialogue: "Utilizo a falha dele para demonstrar minha própria competência, garantindo que minha posição saia fortalecida.", thought: "Vantagem competitiva. Se a pessoa falhou, você aproveita a brecha para se destacar e mostrar que é mais competente.", weights: { Thief: 3, Prince: 2, Knight: -2, Rogue: -2 } },
                { dialogue: "Assumo parte da culpa ou tento redistribuir a responsabilidade para que o peso não destrua a carreira dele.", thought: "Gestão de danos. Você entende que destruir um membro enfraquece o grupo, então tenta diluir o peso do erro para salvá-lo.", weights: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -3 } },
                { dialogue: "Não faço nada. Deixo o erro seguir seu curso lógico. Se ele errou, a consequência é natural e não interfiro.", thought: "Consequência lógica. Erros geram punições; você não sente necessidade de interferir na consequência natural das ações dele.", weights: { Bard: 3, Seer: 1, Mage: 1, Maid: -2 } },
                { dialogue: "Trabalho dobrado nos bastidores para consertar o erro logicamente, sem buscar reconhecimento.", thought: "Resolução prática. Você foca em consertar o problema silenciosamente para garantir que o projeto não afunde junto com a pessoa.", weights: { Maid: 3, Page: 2, Witch: -1, Bard: -1 } },
                { dialogue: "Analiso friamente como esse erro aconteceu e uso o evento como estudo para mudar padrões futuros.", thought: "Análise de falhas. O erro é visto apenas como um dado; você estuda o que deu errado para criar métodos que evitem isso no futuro.", weights: { Mage: 3, Seer: 2, Knight: 1, Witch: 2 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Ao planejar algo importante (como uma mudança de carreira), qual é o seu processo mental predominante?",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Médio", text: "Esqueça o plano tradicional. Encontre atalhos ou manipule as regras do sistema para conseguir o que quer com muito menos esforço." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Não esquente a cabeça planejando os detalhes de cada falha. Deixe o tempo passar e lide com o problema só quando ele chegar." }
            ],
            options: [
                { dialogue: "Crio planos de contingência para cada falha possível. Se eu não prever o caminho, sinto que vou colapsar.", thought: "Controle absoluto. Você precisa mapear todas as possibilidades de erro para sentir que tem segurança sobre o seu futuro.", weights: { Maid: 3, Mage: 1, Knight: -2, Heir: -1 } },
                { dialogue: "Tento não pensar demais. Confio que, se eu seguir meu instinto, a lógica das coisas se resolverá sozinha.", thought: "Confiança no improviso. Pensar demais te trava, então você prefere tomar a atitude logo e lidar com os problemas conforme eles aparecem.", weights: { Prince: 3, Maid: -3, Seer: -2 } },
                { dialogue: "Eu não planejo. Vou empurrando com a barriga até a decisão se tornar inevitável ou alguém decidir por mim.", thought: "Fuga da responsabilidade. Planejar dá trabalho e gera ansiedade, então você adia a decisão até não ter mais escolha.", weights: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
                { dialogue: "Busco o conselho de várias pessoas, tentando sintetizar a visão delas em uma estratégia justa.", thought: "Busca por consenso. Você coleta diferentes perspectivas para garantir que a sua decisão final seja a mais equilibrada e sensata possível.", weights: { Sylph: 3, Page: 2, Thief: -2, Witch: -1 } },
                { dialogue: "Procuro atalhos ou formas de influenciar o sistema a favor, focando no melhor resultado com menor esforço.", thought: "Otimização de esforço. Planejar é tentar achar o caminho mais curto; você foca em como encontrar uma brecha no sistema para facilitar a sua vida.", weights: { Thief: 3, Witch: 3, Rogue: -2, Knight: -1 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Duas pessoas que você estima estão em conflito intelectual acirrado e pedem sua mediação.",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "Os dois lados têm argumentos lógicos. Tente traduzir a razão de um para o outro até eles se entenderem e a briga acabar." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Difícil", text: "É impossível escolher um lado quando a lógica dos dois faz todo o sentido. Fique em silêncio e não se meta nessa discussão." }
            ],
            options: [
                { dialogue: "Desmonto os argumentos de ambos, apontando onde as emoções estão cegando o raciocínio.", thought: "Foco nos fatos. Você ignora o drama da briga e aponta os buracos lógicos de cada um para forçá-los a raciocinar com clareza.", weights: { Witch: 3, Knight: 2, Prince: 2, Sylph: -2 } },
                { dialogue: "Escuto ambos, tentando fazer com que cada um entenda a lógica do outro para curar a divisão.", thought: "Mediação lógica. Você tenta traduzir os pontos válidos de um lado para o outro, buscando um ponto de concordância racional.", weights: { Sylph: 3, Rogue: 2, Seer: 1, Thief: -2 } },
                { dialogue: "Fico em silêncio. Vejo tanta validade lógica em ambos os lados que não consigo escolher.", thought: "Empate analítico. Como os dois lados fazem sentido, a sua capacidade de decidir trava e você prefere não se posicionar para não ser injusto.", weights: { Page: 3, Mage: 1, Maid: -2 } },
                { dialogue: "Faço piada da briga ou dou uma resposta sem sentido para desarmar a tensão com confusão.", thought: "Quebra de tensão. A rigidez intelectual da briga te cansa, então você usa o humor ou o absurdo apenas para desarmar o clima.", weights: { Bard: 3, Heir: 1, Rogue: 1, Seer: -2 } },
                { dialogue: "Uso a tensão para introduzir novas variáveis, mudando o foco da briga para algo mais produtivo.", thought: "Redirecionamento. Em vez de resolver o conflito, você manipula a conversa para focar em um problema que seja mais urgente ou útil.", weights: { Heir: 3, Thief: 2, Page: -2, Seer: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Você descobre uma informação confidencial que poderia mudar a percepção de todos sobre um líder. O que faz?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Médio", text: "Se a lógica do líder tem uma falha grave, derrube-o. Use a informação para desmascarar a farsa e quebrar a influência dele." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Difícil", text: "Saber a verdade pesa demais. Guardar essa falha técnica do líder para si mesmo virou um fardo terrível e cansativo." }
            ],
            options: [
                { dialogue: "Guardo a informação. O conhecimento é ferramenta de ordem; revelá-la sem plano causaria caos desnecessário.", thought: "Controle de danos. Revelar a verdade agora causaria uma crise prejudicial a todos, então a lógica manda manter o segredo por enquanto.", weights: { Maid: 3, Knight: 2, Seer: 1 } },
                { dialogue: "Compartilho a verdade com os afetados. Acredito que a transparência é necessária para decisões livres.", thought: "Transparência total. Se a base da liderança é uma mentira, todos têm o direito de saber os fatos para tomarem suas próprias decisões.", weights: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -2 } },
                { dialogue: "Uso o segredo como moeda de troca para garantir que minhas próprias ideias sejam implementadas.", thought: "Informação é poder. Você guarda o segredo não por ética, mas para usá-lo como alavanca e conseguir vantagens no momento certo.", weights: { Thief: 3, Prince: 3, Page: -3, Rogue: -2 } },
                { dialogue: "Deixo escapar sem querer ou esqueço de guardar segredo. Se a liderança cair por isso, caiu.", thought: "Descuido intencional. Você solta a informação de forma aparentemente acidental, deixando o caos se instaurar sem se sujar.", weights: { Bard: 3, Heir: 1, Mage: 1, Knight: -2 } },
                { dialogue: "Sinto o peso dessa informação como um fardo. O simples fato de saber me faz sentir responsável.", thought: "Sobrecarga moral. Saber da falha, mas não poder falar, cria um conflito interno que consome a sua paz mental e o seu sono.", weights: { Mage: 3, Seer: 2, Witch: 2, Knight: -1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Você está diante de uma escolha onde todos os caminhos levam a algum tipo de perda. Como processa a paralisia?",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Fácil", text: "Se te deram opções onde você só perde, recuse todas. Manipule a regra até criar uma terceira via que te favoreça." },
                { aspect: "Maid", difficulty: 2, check: "Ativo: Médio", text: "Perdas lógicas são normais. Engula o sacrifício e faça a escolha fria para garantir que a estrutura maior continue funcionando." }
            ],
            options: [
                { dialogue: "Escolho o caminho que preserva a lógica do sistema maior, mesmo que eu sofra. Sacrifício racional.", thought: "Sacrifício utilitário. Você aceita o prejuízo pessoal se isso garantir que a estrutura maior ou o projeto continue funcionando bem.", weights: { Maid: 3, Knight: 2, Seer: 1, Prince: -3 } },
                { dialogue: "Recuso-me a escolher. Deixo que o acaso decida, pois não quero carregar o peso da consequência.", thought: "Fuga da escolha. Escolher a dor é muito difícil, então você prefere não fazer nada e deixar que o tempo decida o resultado por você.", weights: { Bard: 3, Heir: 3, Page: 2, Witch: -2 } },
                { dialogue: "Tento criar uma 'terceira via' forçada através da manipulação, recusando as opções dadas.", thought: "Recusa do sistema. Se as opções são ruins, você não joga o jogo deles. Manipula a situação até criar uma saída aceitável.", weights: { Witch: 3, Thief: 3, Mage: -1, Seer: -1 } },
                { dialogue: "Analiso qual perda é mais útil a longo prazo. Se algo deve ser destruído, que seja o menos eficiente.", thought: "Cálculo de perdas. Você analisa os cenários friamente e escolhe o caminho que gera o menor dano colateral a longo prazo.", weights: { Prince: 3, Mage: 3, Rogue: 1, Sylph: -2 } },
                { dialogue: "Paraliso e não faço nada. Se eu não escolher, tecnicamente a culpa do resultado não é minha.", thought: "Paralisia. O medo de ser o responsável por uma decisão que vai gerar perdas faz você congelar, preferindo a inércia.", weights: { Bard: 3, Page: 2, Heir: 1, Knight: -2 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Alguém questiona quem você é de verdade por trás de suas opiniões sensatas e comportamentos calculados.",
            voices: [
                { aspect: "Mage", difficulty: 0, check: "Passivo: Médio", text: "A identidade é apenas um conjunto de decisões práticas. Você não precisa procurar um 'eu verdadeiro', você é o que você faz." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Difícil", text: "Não deixe que te rotulem. Mantenha as opções abertas e vá mudando quem você é para funcionar melhor onde precisar." }
            ],
            options: [
                { dialogue: "Eu sou o conjunto das minhas escolhas. Não existe 'eu' místico; sou a soma lógica das minhas ações.", thought: "Pragmatismo absoluto. Você não perde tempo filosofando sobre quem é; a sua identidade é definida estritamente pelos seus resultados e escolhas.", weights: { Mage: 3, Maid: 2, Seer: 2 } },
                { dialogue: "Sinto um vazio. Temo que, se tirar as camadas de lógica, não sobre nada no centro.", thought: "Insegurança existencial. O questionamento atinge um medo real de que você seja apenas uma máquina de resolver problemas, sem profundidade emocional.", weights: { Page: 3, Knight: 3, Rogue: 2, Prince: -1 } },
                { dialogue: "Eu mudo conforme a necessidade. Minha 'verdade' é ser quem preciso ser para funcionar.", thought: "Fluidez tática. Você não se prende a rótulos; quem você é muda constantemente de acordo com o que é mais útil para o cenário atual.", weights: { Thief: 3, Witch: 2, Heir: 2, Sylph: -2 } },
                { dialogue: "Respondo qualquer coisa. Não levo minha identidade a sério o suficiente para ter crise existencial.", thought: "Desapego identitário. Você acha essas crises existenciais uma grande perda de tempo e prefere levar a vida sem se levar tão a sério.", weights: { Bard: 3, Heir: 2, Rogue: 1, Mage: -1 } },
                { dialogue: "A identidade é uma ilusão que limita. Prefiro não me definir, permitindo que vejam a lógica que lhes convém.", thought: "Camuflagem social. Não ter uma definição clara é vantajoso, pois permite que as pessoas vejam em você apenas o que elas querem ver.", weights: { Rogue: 3, Sylph: 3, Knight: -2, Bard: 1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você sente que sua vida atual é uma farsa e que está apenas desempenhando um papel. Qual sua reação?",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Fácil", text: "Se o ambiente exige falsidade, entregue a melhor versão dela. Aperfeiçoe sua máscara até ela virar sua proteção absoluta." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Médio", text: "Se tudo é falso, pelo menos leve na piada. Não leve o seu personagem a sério e apenas ria do roteiro absurdo que te deram." }
            ],
            options: [
                { dialogue: "Dobro a aposta no papel. Vou polir essa máscara até que ela seja indistinguível da realidade.", thought: "Perfeccionismo no disfarce. Já que o papel é obrigatório, você vai desempenhá-lo com tanta precisão que ele se tornará a sua realidade.", weights: { Knight: 3, Page: 3, Maid: 1, Prince: -2 } },
                { dialogue: "Abandono tudo. Rompo laços e mudo de cenário; prefiro o vazio ao peso de uma lógica falsa.", thought: "Ruptura total. A sensação de falsidade é insuportável; você prefere abandonar tudo e começar do zero a continuar vivendo uma farsa.", weights: { Prince: 3, Heir: -2, Seer: -2 } },
                { dialogue: "Analiso as escolhas que me trouxeram até aqui para recalcular a rota racionalmente.", thought: "Análise de percurso. Você tenta rastrear onde tomou as decisões que te levaram a essa vida falsa para poder corrigir a rota logicamente.", weights: { Mage: 3, Seer: 3, Witch: 2, Knight: -2 } },
                { dialogue: "Continuo atuando, mas de forma irônica. Se é tudo farsa, vou me divertir com o absurdo do roteiro.", thought: "Aceitação irônica. Você sabe que está preso num personagem, mas lida com isso rindo do absurdo da situação e agindo com sarcasmo.", weights: { Bard: 3, Thief: 2, Mage: 1, Page: -1 } },
                { dialogue: "Deixo que o tempo decida. Sigo o fluxo, esperando que uma nova circunstância defina quem devo ser.", thought: "Passividade. Você não gosta do papel atual, mas não tem energia para mudá-lo, então apenas continua seguindo o roteiro no piloto automático.", weights: { Heir: 3, Rogue: 2, Witch: -3, Maid: -1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Em um jogo de estratégia complexo contra um oponente inteligente, qual é a sua principal força?",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Difícil", text: "Analise a mente do oponente. Se você entender a estratégia e a lógica dele, poderá antecipar todas as jogadas antes dele agir." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Deixe ele achar que a estratégia dele é perfeita. No último segundo, roube a vantagem e use as próprias regras dele contra ele." }
            ],
            options: [
                { dialogue: "Minha capacidade de antecipar. Jogo contra a mente dele, prevendo as decisões antes que aconteçam.", thought: "Leitura do oponente. A sua verdadeira vantagem não é conhecer as regras, mas sim entender o padrão de pensamento do adversário para prever suas ações.", weights: { Seer: 3, Mage: 1, Witch: 2, Page: -1 } },
                { dialogue: "Minha disciplina. Sigo as regras à risca, cansando o oponente pela ausência de erros e desgaste.", thought: "Consistência absoluta. Você não precisa fazer jogadas brilhantes; basta não cometer erros e esperar que o oponente se desgaste e falhe sozinho.", weights: { Maid: 3, Knight: 2, Page: 2, Bard: -3 } },
                { dialogue: "Minha audácia em subverter a lógica. Faço jogadas caóticas para quebrar os padrões perfeitos dele.", thought: "Caos intencional. O seu oponente joga pela lógica, então você faz jogadas absurdas de propósito para quebrar o raciocínio e o planejamento dele.", weights: { Prince: 2, Thief: -2, Seer: -2 } },
                { dialogue: "Eu jogo sem prestar atenção. Minha imprevisibilidade vem do fato de que nem eu sei o que estou fazendo.", thought: "Imprevisibilidade total. Como você joga por puro instinto ou sem prestar muita atenção, torna-se impossível para um estrategista prever os seus passos.", weights: { Bard: 3, Heir: 2, Rogue: 1, Mage: -2 } },
                { dialogue: "Minha habilidade em usar a estratégia dele contra ele mesmo, tomando a vantagem quando ele confia.", thought: "Contra-ataque tático. Você deixa o oponente achar que está no controle para, no momento exato, usar a estratégia dele contra ele mesmo.", weights: { Thief: 3, Rogue: 2, Heir: 2, Knight: -1 } }
            ]
        }
    ],

    "Heart": [
        { 
            id: 1,
            scenario: "1. Você percebe que está agindo de forma completamente diferente dependendo do grupo com quem está. Como isso te afeta?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Agir de forma diferente com grupos diferentes te irrita profundamente. Você tem que quebrar essa falsidade e ser uma pessoa só." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Médio", text: "Mudar de personalidade é uma ferramenta útil. Adapte o seu jeito de ser para manipular o grupo e conseguir o que quer ali." }
            ],
            options: [
                { dialogue: "Sinto que sou uma fraude. Tento destruir essa fachada para encontrar uma identidade única e sólida.", thought: "Crise de identidade. A falta de consistência te incomoda e faz você buscar quem você realmente é por trás das máscaras.", weights: { Prince: 3, Mage: -1, Heir: -2 } },
                { dialogue: "Não vejo como problema. Minha identidade é tão difusa que eu simplesmente me torno o que o ambiente pede.", thought: "Adaptação natural. Você não vê problema em moldar sua personalidade ao ambiente, fluindo sem apegos a rótulos fixos.", weights: { Bard: 3, Rogue: 2, Heir: 1, Knight: -2 } },
                { dialogue: "Vejo isso como uma ferramenta. Eu manipulo intencionalmente quem eu sou para controlar a percepção deles.", thought: "Controle de imagem. Mudar de atitude é uma estratégia consciente para influenciar o grupo e obter vantagens.", weights: { Witch: 3, Thief: 2, Page: 1, Seer: -2 } },
                { dialogue: "Sinto que estou me doando demais. Acabo absorvendo a personalidade deles e perdendo a minha.", thought: "Esgotamento emocional. Tentar agradar e se moldar aos outros o tempo todo acaba apagando as suas próprias vontades.", weights: { Rogue: 3, Maid: 2, Sylph: 1, Prince: -2 } },
                { dialogue: "É natural. Eu fluo entre essas identidades sem conflito; todas elas são partes genuínas de mim.", thought: "Múltiplas facetas. Você entende que a sua identidade é fluida e que todas as suas versões são partes reais de você.", weights: { Heir: 3, Knight: 2, Bard: 1, Mage: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Em um momento de crise emocional intensa de um amigo próximo, qual é o seu primeiro instinto?",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Difícil", text: "A dor dele é a prioridade. Vá até a raiz desse sofrimento emocional e tente ajudá-lo a curar essa ferida de vez." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Médio", text: "Ele não tem forças para lidar com o mundo agora. Assuma os problemas dele e sirva de escudo até ele conseguir se reerguer." }
            ],
            options: [
                { dialogue: "Tento analisar a raiz psicológica do problema. Quero entender 'por que' ele sente isso para guiá-lo.", thought: "Foco na causa. Em vez de apenas confortar, você prefere analisar o problema a fundo para encontrar uma solução definitiva.", weights: { Seer: 3, Mage: 2, Sylph: 1, Heir: -1 } },
                { dialogue: "Sinto um desconforto imenso. Ofereço uma solução prática para acabar logo com o drama.", thought: "Aversão ao drama. O excesso de emoção te trava, então você tenta resolver a situação o mais rápido possível de forma prática.", weights: { Prince: 3, Sylph: -3, Rogue: -2 } },
                { dialogue: "Eu travo. Não sei lidar com a carga emocional e acabo fazendo uma piada nervosa ou mudando de assunto.", thought: "Fuga pelo humor. A incapacidade de lidar com a carga emocional faz você usar piadas como válvula de escape.", weights: { Bard: 3, Thief: 1, Page: 1, Sylph: -2 } },
                { dialogue: "Tomo as dores para mim. Uso meu carisma para desviar o foco da dor dele, protegendo-o da exposição.", thought: "Proteção ativa. Você assume a frente da situação para blindar a vulnerabilidade do seu amigo e não deixá-lo exposto.", weights: { Knight: 3, Maid: 2, Page: 1, Prince: -2 } },
                { dialogue: "Eu intervenho ativamente para mudar o humor dele, forçando uma atividade para alterar o sentimento.", thought: "Mudança de clima. Você recusa a estagnação triste e força atividades para distrair o amigo e mudar o foco da mente dele.", weights: { Witch: 3, Sylph: 2, Thief: 1, Bard: -2 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Você precisa tomar uma decisão importante que vai contra seus desejos pessoais, mas é a coisa 'lógica' a se fazer.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Fazer o que é lógico não vai te fazer feliz. Ignore o bom senso e siga os seus desejos só porque você quer e pronto." },
                { aspect: "Maid", difficulty: 2, check: "Ativo: Médio", text: "A sua vontade não importa se atrapalhar o dever. Anule o que você quer sentir e faça o sacrifício que a situação exige." }
            ],
            options: [
                { dialogue: "Eu ignoro meus sentimentos. Se meu desejo é um obstáculo para o resultado, eu o anulo sem piedade.", thought: "Razão acima de tudo. Se o seu desejo atrapalha o objetivo prático, você o ignora e faz a escolha fria e correta.", weights: { Prince: 3, Knight: 2, Witch: -1, Heir: -3 } },
                { dialogue: "Eu sigo meus desejos. A lógica não serve de nada se não estiver satisfeito; minha vontade é absoluta.", thought: "A vontade é a lei. A lógica perde a importância se o caminho não te trouxer satisfação pessoal genuína.", weights: { Thief: 3, Mage: 1, Rogue: -3, Prince: -2 } },
                { dialogue: "Eu paraliso. Fico esperando que a vontade passe ou que a lógica mude. Se eu não decidir, o destino decide.", thought: "Paralisia por conflito. A briga entre razão e emoção te esgota tanto que você prefere não decidir e deixar rolar.", weights: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
                { dialogue: "Tento encontrar um meio-termo para servir sem me sentir vazio, mas geralmente cedo ao dever.", thought: "Dever cumprido. Você tenta equilibrar os lados, mas no final acaba cedendo à obrigação e ignorando a própria vontade.", weights: { Maid: 3, Page: 2, Rogue: 1, Thief: -3 } },
                { dialogue: "Passo muito tempo tentando entender a origem desse desejo. Só decido após saber se o sentimento é genuíno.", thought: "Análise interna. Antes de agir, você precisa dissecar os próprios sentimentos para ter certeza de que são autênticos.", weights: { Mage: 3, Seer: 2, Heir: 1, Prince: -1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Alguém critica algo que você ama profundamente e que considera parte fundamental de quem você é.",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "A crítica machucou o que você ama, mas não deixe eles verem isso. Finja indiferença com um sorriso cínico para se proteger." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Você nem leva o que ama tão a sério assim. Concorde com a crítica deles e tire o peso da situação fazendo uma piada." }
            ],
            options: [
                { dialogue: "Fico na defensiva imediatamente e ataco o gosto da pessoa. Ninguém questiona o que me define.", thought: "Defesa agressiva. Criticar o que você ama é um ataque direto a quem você é, e a sua reação é revidar instantaneamente.", weights: { Thief: 3, Knight: 2, Witch: 1, Rogue: -2 } },
                { dialogue: "Finjo que não me importo ou concordo ironicamente com a crítica para evitar que vejam como me atingiu.", thought: "Escudo cínico. A crítica te machuca, mas você usa o sarcasmo e a indiferença para não mostrar fraqueza.", weights: { Knight: 3, Prince: 2, Page: 1, Maid: -1 } },
                { dialogue: "Eu concordo com a crítica e faço piada de mim mesmo. Se o que eu amo é ridículo, não levo a sério.", thought: "Autodepreciação tática. Ao ridicularizar seus próprios gostos junto com eles, você tira o peso da ofensa.", weights: { Bard: 3, Heir: 1, Rogue: 1, Thief: -2 } },
                { dialogue: "Começo a questionar se eu deveria gostar daquilo mesmo. A opinião externa me faz reavaliar minha conexão.", thought: "Insegurança validada. A opinião externa facilmente abala suas certezas, fazendo você questionar seus próprios gostos.", weights: { Rogue: 3, Maid: 2, Page: 2, Heir: -1 } },
                { dialogue: "Não me abala. Minha conexão com o que amo é interna e não requer validação externa.", thought: "Certeza interna. O que os outros pensam não faz a menor diferença na sua conexão pessoal com as coisas que ama.", weights: { Heir: 3, Sylph: 2, Seer: 1, Knight: -2 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Você se sente frequentemente mal compreendido pelas pessoas ao seu redor?",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Difícil", text: "Você sabe que tem uma essência valiosa, mas simplesmente não consegue expressá-la. Essa trava emocional te sufoca bastante." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Médio", text: "Ser mal compreendido é ótimo. Use essa falha de percepção dos outros sobre quem você é para observá-los sem ser notado." }
            ],
            options: [
                { dialogue: "Sim, porque escondo quem sou. Crio personas eficientes; ninguém conhece o 'eu' real, e prefiro assim.", thought: "Camuflagem intencional. Ninguém te entende porque você não deixa; criar máscaras é o seu jeito de se proteger.", weights: { Prince: 3, Knight: 2, Witch: 1, Sylph: -2 } },
                { dialogue: "Sim, sinto que tenho uma essência que não consegui expressar. Estou esperando o momento certo.", thought: "Potencial travado. Você sabe que tem profundidade, mas tem dificuldade de botar isso para fora e se fazer entender.", weights: { Page: 3, Maid: 2, Heir: 1, Thief: -2 } },
                { dialogue: "Nem eu me entendo. Sinto que sou uma coletânea de fragmentos aleatórios, ninguém veria um todo coerente.", thought: "Identidade fragmentada. A incompreensão alheia espelha o fato de que nem você mesmo entende suas próprias peças.", weights: { Bard: 3, Heir: 2, Mage: 1, Seer: -1 } },
                { dialogue: "Não, eu faço questão de que todos saibam exatamente quem sou. Imponho minha personalidade no ambiente.", thought: "Imposição de personalidade. Você não aceita ser ignorado ou mal interpretado e força todos a verem quem você é.", weights: { Thief: 3, Witch: 2, Mage: -1, Rogue: -3 } },
                { dialogue: "Às vezes, mas uso isso para observar os outros. O fato de não me verem me dá vantagem estratégica.", thought: "Vantagem estratégica. Passar despercebido ou ser lido de forma errada te dá espaço para analisar as pessoas sem interferência.", weights: { Mage: 3, Seer: 2, Rogue: 1, Heir: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Quando olha para o seu passado, como enxerga sua evolução pessoal e os seus antigos 'eus'?",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "Olhe para os seus 'eus' passados com compaixão. Todos os erros dolorosos que você cometeu ajudaram a te moldar hoje." },
                { aspect: "Seer", difficulty: 2, check: "Passivo: Difícil", text: "Analise friamente quem você já foi. Estudar a causa e efeito das suas mudanças emocionais garante que você não vai falhar de novo." }
            ],
            options: [
                { dialogue: "Com vergonha. Tento ativamente apagar ou esquecer quem eu fui, pois aquela versão antiga é falha.", thought: "Rejeição do passado. Você sente aversão às suas antigas falhas e tenta apagar da memória as versões antigas de si mesmo.", weights: { Prince: 3, Knight: 1, Sylph: -3 } },
                { dialogue: "Com carinho. Vejo cada fase como necessária e memórias como lembrete de que sempre posso melhorar.", thought: "Aceitação da jornada. Você enxerga as versões passadas com empatia, entendendo que os erros foram essenciais para o seu amadurecimento.", weights: { Sylph: 3, Heir: 2, Mage: 1, Prince: -3 } },
                { dialogue: "Com indiferença. O passado parece um sonho de outra pessoa. Não guardo mágoa nem carinho, só esqueço.", thought: "Desapego total. O seu passado não tem peso emocional; você deixa as versões antigas para trás e foca apenas no agora.", weights: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
                { dialogue: "Como um recurso. As coisas que passei me deram 'armas' emocionais que uso hoje na minha rotina.", thought: "Uso tático da bagagem. Toda dor e experiência antiga são apenas ferramentas guardadas que você usa para lidar com os problemas de hoje.", weights: { Knight: 3, Witch: 2, Thief: 1, Page: -1 } },
                { dialogue: "Como um quebra-cabeça. Analiso as causas e efeitos das minhas mudanças para prever o futuro.", thought: "Mapeamento pessoal. Analisar a sua trajetória te ajuda a entender como a sua mente funciona para não repetir os mesmos erros.", weights: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Você sente que sua paixão por um hobby ou projeto antigo está morrendo. O que você faz?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Se a paixão por isso acabou, corte na hora. Não perca seu tempo arrastando um interesse que já não faz o seu peito bater." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Médio", text: "Deixe a paixão esfriar sozinha. Você não precisa forçar o fim, é só deixar o hobby acumular poeira que você esquece ele em paz." }
            ],
            options: [
                { dialogue: "Mato o projeto imediatamente. Se não há chama, não vou carregar cadáver. Corto o vínculo.", thought: "Corte limpo. Se o interesse sumiu, não faz sentido prolongar a agonia. Você encerra o ciclo e guarda a energia para coisas novas.", weights: { Prince: 3, Thief: 2, Witch: 1, Maid: -2 } },
                { dialogue: "Tento reacender a chama forçadamente, mudando a forma de interação para ver se a emoção volta.", thought: "Tentativa de resgate. Você força uma nova abordagem para tentar resgatar o ânimo e não perder o vínculo com o projeto.", weights: { Witch: 3, Sylph: 2, Maid: 1, Bard: -2 } },
                { dialogue: "Deixo acumular poeira. Não termino, não continuo. O projeto fica lá, existindo no limbo da minha apatia.", thought: "Abandono passivo. Você não decreta um fim, apenas deixa a coisa encostada e para de se importar gradativamente.", weights: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
                { dialogue: "Continuo por teimosia ou dever. Sinto que a dedicação deve superar a falta de vontade momentânea.", thought: "A obrigação vence o tédio. A paixão pode ter acabado, mas a teimosia e o senso de dever te fazem continuar até o fim.", weights: { Maid: 3, Knight: 2, Page: 1, Prince: -2 } },
                { dialogue: "Analiso por que perdi o interesse. Tento entender o que mudou na essência para que aquilo não sirva.", thought: "Análise da perda. Em vez de se desesperar, você tenta decifrar a lógica por trás do esfriamento do seu próprio interesse.", weights: { Mage: 3, Seer: 2, Heir: 1 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Alguém sugere que você é superficial por trás de todas essas palavras bonitas. O que você responde?",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Profundidade não se fala, se prova. Mostre os resultados práticos do que você faz para provar que a sua alma não é rasa." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Você concorda e dá risada. Para que brigar para parecer profundo? Assumir a própria superficialidade tira um peso enorme das costas." }
            ],
            options: [
                { dialogue: "Mostro minhas ações. Minha 'alma' está no que faço e em como sirvo aos outros, não em discursos.", thought: "Foco em resultados. Você não se importa em parecer profundo nas palavras, desde que as suas atitudes práticas mostrem o seu valor.", weights: { Maid: 3, Knight: 2, Sylph: 1 } },
                { dialogue: "Sinto um vazio. Tenho medo de que, se tirar as camadas, não sobre nada no centro. Talvez eu seja superficial.", thought: "Insegurança validada. A crítica atinge um medo real de que, por trás das suas defesas, talvez você não tenha uma identidade sólida.", weights: { Page: 3, Rogue: 2, Prince: -1, Bard: 1 } },
                { dialogue: "Eu concordo e rio. 'Sou raso como um pires'. Não levo minha profundidade a sério o suficiente para me ofender.", thought: "Desarme pela concordância. Assumir o insulto de forma irônica é o jeito mais fácil de tirar o poder da crítica deles.", weights: { Bard: 3, Heir: 2, Rogue: 1, Seer: -2 } },
                { dialogue: "Defendo minha complexidade. Exponho desejos e paixões para provar que existo com intensidade real.", thought: "Necessidade de provação. A acusação te ofende e você reage tentando esfregar na cara deles toda a sua complexidade interna.", weights: { Thief: 3, Witch: 2, Mage: 1, Prince: -2 } },
                { dialogue: "Analiso a percepção deles. Se pareço superficial, é porque não têm a ferramenta certa para me ler.", thought: "Desdém racional. Se eles não conseguem enxergar a sua profundidade, a falha de interpretação é puramente deles, não sua.", weights: { Seer: 3, Mage: 2, Heir: 1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Em um relacionamento amoroso ou amizade extremamente profunda, qual é o seu maior medo?",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Médio", text: "O seu maior medo é ser absorvido pelo outro. Perder o controle de onde você termina e o outro começa é um pesadelo real." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Difícil", text: "Seu maior pavor é a impotência total. A ideia de ver quem você ama sofrendo e não conseguir consertar te paralisa de medo." }
            ],
            options: [
                { dialogue: "Perder minha individualidade. Tenho medo de ser absorvido e não saber onde termino e o outro começa.", thought: "Medo da perda de individualidade. Você tem pavor de ser engolido pela relação e esquecer os seus próprios limites.", weights: { Thief: 3, Prince: 2, Mage: 1, Rogue: -3 } },
                { dialogue: "Apatia. Tenho medo de parar de me importar do nada e deixar a relação morrer por negligência.", thought: "Medo da própria apatia. O receio de que o seu interesse evapore do nada e você deixe a relação morrer sem motivo.", weights: { Bard: 3, Heir: 1, Rogue: 1, Sylph: -2 } },
                { dialogue: "Não ser o suficiente. Sinto que preciso estar 'servindo' para justificar minha presença na vida da pessoa.", thought: "Medo de ser descartável. A crença de que você só tem valor se estiver constantemente servindo ou sendo útil para a pessoa.", weights: { Maid: 3, Page: 2, Knight: 1, Thief: -2 } },
                { dialogue: "A vulnerabilidade real. Tenho pavor de deixar alguém ver minhas falhas sem nenhuma máscara armada.", thought: "Medo da vulnerabilidade. O pânico de retirar as máscaras de controle e deixar a pessoa ver as suas verdadeiras fraquezas.", weights: { Knight: 3, Prince: 2, Witch: 1, Heir: -2 } },
                { dialogue: "Não conseguir ajudar. Meu medo é ver o outro sofrendo e não ter capacidade para consertá-lo.", thought: "Medo da impotência. A pior sensação é ver a pessoa que você ama passando por problemas e não ter a capacidade de resolver.", weights: { Sylph: 3, Rogue: 2, Seer: 1, Bard: -2 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você tem um instinto muito forte sobre algo, mas todos os dados lógicos do mundo dizem o contrário. O que faz?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Intuição é falha. Abandone o que você 'sente' que está certo e confie estritamente naquilo que a lógica consegue provar." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Médio", text: "A intuição do peito é mais forte que a razão. Ignore os dados e os conselhos alheios para seguir cegamente o que você sente." }
            ],
            options: [
                { dialogue: "Sigo os dados. O instinto é falho; confio no que pode ser provado e destruo a dúvida interna inútil.", thought: "Supressão da intuição. O que você sente não tem peso contra fatos concretos; a lógica fria deve vencer sempre.", weights: { Prince: 3, Mage: 1, Seer: -1, Heir: -3 } },
                { dialogue: "Sigo o instinto, mas errático. Uma hora confio, na outra ignoro. Deixo minha bússola girar.", thought: "Instabilidade. Ficar dividido entre o que dizem os fatos e o que diz o instinto faz você oscilar sem rumo nas decisões.", weights: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
                { dialogue: "Sigo o instinto cegamente. Deixo-me levar pelo que sinto, pois minha intuição me protege magicamente.", thought: "Confiança cega no instinto. Dados podem ser manipulados, mas a sua intuição nunca mente. Você segue o que sente.", weights: { Heir: 3, Sylph: 1, Prince: -3 } },
                { dialogue: "Uso o instinto para manipular. Se sinto que vai dar errado, altero variáveis para garantir resultado.", thought: "Manipulação tática. Se o instinto diz que vai dar errado, você usa a lógica apenas como ferramenta para alterar as regras a seu favor.", weights: { Witch: 3, Thief: 2, Knight: 1, Page: -1 } },
                { dialogue: "Tento traduzir o instinto em lógica. Analiso o 'porquê' até encontrar a validação empírica racional.", thought: "Busca pela causa. Você acredita na intuição, mas tenta dissecá-la para encontrar a lógica empírica por trás desse pressentimento.", weights: { Mage: 3, Seer: 2, Page: -1, Bard: -2 } }
            ]
        }
    ],
	"Hope": [
        { 
            id: 1,
            scenario: "1. Você descobre que uma figura de autoridade ou ídolo em quem confiava cometeu um erro moral grave.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Essa pessoa mentiu o tempo todo. Não tem por que continuar defendendo quem pisou na bola feio. Acabe com a imagem dela." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Médio", text: "É uma decepção enorme, mas você não pode deixar isso transparecer. Mantenha a confiança na instituição e guarde a frustração." }
            ],
            options: [
                { dialogue: "Corto os laços imediatamente. Se a imagem perfeita foi manchada, a pessoa inteira é uma mentira.", thought: "A decepção é imediata. Se a pessoa mentiu sobre algo grave, não dá para confiar em mais nada.", weights: { Prince: 3, Bard: 2, Witch: -2, Sylph: -3 } },
                { dialogue: "Tento justificar as ações dele para mim mesmo. Deve haver uma razão maior por trás disso.", thought: "É difícil aceitar. Você tenta encontrar justificativas para o erro porque perder essa referência dói demais.", weights: { Witch: 3, Sylph: 2, Heir: 1, Prince: -3 } },
                { dialogue: "Sinto-me traído, mas guardo para mim. Continuo agindo como se confiasse, pois preciso da estrutura.", thought: "Você guarda a frustração. A estrutura que a pessoa representa é mais útil do que o erro que ela cometeu.", weights: { Page: 3, Knight: 2, Thief: -1, Prince: -2 } },
                { dialogue: "Nem me abalo. Ídolos são falhos mesmo. Continuo seguindo a pessoa só para ver onde isso vai dar.", thought: "Todo mundo erra. Você não se afeta e só continua observando para ver como a pessoa vai lidar com as consequências.", weights: { Bard: 3, Mage: 1, Rogue: 1, Knight: -2 } },
                { dialogue: "Analiso o contexto histórico e as falhas humanas dele. Eu já esperava que isso pudesse acontecer.", thought: "Você já esperava. Ninguém é perfeito, e entender o contexto do erro é mais racional do que ficar com raiva.", weights: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Seu grupo de amigos está desanimado com um projeto que parece destinado ao fracasso. O que você faz?",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "Ninguém pode saber que vai dar errado. Force um otimismo cego, bata no peito e faça eles trabalharem até o fim." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Difícil", text: "Isso aqui vai falhar. Apenas observe o desastre e preste atenção em como as pessoas reagem ao pânico." }
            ],
            options: [
                { dialogue: "Assumo a liderança e exalo uma confiança exagerada, garantindo a todos que vai dar certo.", thought: "O grupo precisa de um empurrão. Você veste a máscara da confiança inabalável para que eles não desistam.", weights: { Knight: 3, Page: 2, Rogue: -1, Bard: -2 } },
                { dialogue: "Aponto friamente todas as falhas. É melhor destruir a falsa esperança agora do que vê-los sofrer depois.", thought: "Ficar enrolando só piora as coisas. É melhor jogar a verdade na mesa e acabar logo com a falsa esperança.", weights: { Prince: 3, Thief: 1, Sylph: -3, Maid: -2 } },
                { dialogue: "Eu não faço nada. Se eles querem desistir, que desistam. Não vou carregar o moral do grupo.", thought: "Não é problema seu. Se o grupo já jogou a toalha, você não vai gastar a sua energia tentando reanimá-los.", weights: { Bard: 3, Rogue: 1, Mage: 1, Sylph: -2 } },
                { dialogue: "Continuo trabalhando na minha parte alegremente. Minha fé inabalável acaba contagiando alguns.", thought: "Você ignora o pessimismo alheio. Focar na sua parte e manter o ânimo é o melhor jeito de influenciar os outros.", weights: { Heir: 3, Maid: 2, Seer: -2, Prince: -3 } },
                { dialogue: "Deixo que eles desistam se quiserem. Às vezes, o colapso é necessário para surgirem ideias novas.", thought: "Deixe quebrar. Às vezes o projeto precisa falhar completamente para que o grupo perceba o erro e recomece melhor.", weights: { Mage: 2, Seer: 1, Knight: -2, Sylph: -2 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Você se depara com uma crença que contradiz a lógica, mas que te faz sentir incrivelmente bem e seguro.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Fácil", text: "Acreditar nisso te faz bem, então qual o problema? Prenda-se a essa ideia e use isso para ter estabilidade." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "Se essa crença deixa as pessoas mais fáceis de liderar, abrace o discurso falso e use isso para motivá-las." }
            ],
            options: [
                { dialogue: "Abraço a crença. Prefiro viver em uma narrativa que me dê propósito do que na frieza dos fatos.", thought: "A verdade não importa se a crença te faz bem. Você escolhe o conforto emocional acima da lógica.", weights: { Maid: 3, Witch: 2, Heir: 1, Prince: -3 } },
                { dialogue: "Rejeito a crença com desprezo. O conforto gerado pela ignorância é uma fraqueza que recuso.", thought: "A lógica vem em primeiro lugar. Você se recusa a aceitar uma mentira confortável e prefere lidar com a realidade.", weights: { Prince: 3, Mage: 1, Heir: -3, Page: -2 } },
                { dialogue: "Acredito nela 'ironicamente'. É divertido agir como se fosse verdade, sabendo que não faz sentido.", thought: "É divertido entrar na onda. Você não acredita de verdade, mas finge que sim só para aproveitar a situação.", weights: { Bard: 3, Rogue: 1, Thief: 1, Seer: -2 } },
                { dialogue: "Estudo a estrutura dessa crença para entender por que ela é tão atraente para a mente humana.", thought: "A curiosidade fala mais alto. Você analisa a crença de fora para entender que necessidade psicológica ela preenche.", weights: { Mage: 3, Seer: 2, Bard: -1, Knight: -1 } },
                { dialogue: "Uso essa crença para motivar outras pessoas. É uma ferramenta útil para elevar o moral.", thought: "Se essa crença motiva o grupo, use a seu favor. É uma ferramenta prática para manter as pessoas focadas.", weights: { Thief: 3, Rogue: 2, Bard: 1, Seer: -2 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Em um debate acalorado sobre ética, todos estão contra a sua opinião. Como você se posiciona?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Médio", text: "Eles estão sendo idiotas. Bata o pé e prove com argumentos agressivos que o consenso deles não faz o menor sentido." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Fácil", text: "Ficar contra todo mundo vai te isolar. Engula o orgulho, concorde com eles na hora e evite o estresse inútil." }
            ],
            options: [
                { dialogue: "Mantenho minha posição com teimosia. Ser muitos contra mim só prova que estou certo.", thought: "Ser do contra te dá força. Se todo mundo discorda de você, é sinal de que você enxerga algo que eles não veem.", weights: { Thief: 3, Prince: 3, Knight: 2, Maid: 1, Rogue: -3 } },
                { dialogue: "Cedo e concordo com o grupo para manter a harmonia, mas guardo minha convicção em segredo.", thought: "Bater de frente não compensa o desgaste. É mais fácil fingir que concorda e manter a sua opinião para si mesmo.", weights: { Page: 3, Rogue: 2, Sylph: 1, Thief: -3 } },
                { dialogue: "Tento reformular a visão deles, mostrando que, no fundo, queremos a mesma coisa.", thought: "A discussão não vai a lugar nenhum. Você tenta encontrar um meio-termo e focar no que todos concordam.", weights: { Sylph: 3, Witch: 2, Seer: 1, Prince: -2 } },
                { dialogue: "Mudo de assunto ou faço uma piada. Não tenho energia para defender ideais se ninguém ouve.", thought: "Não vale a pena se estressar. Você quebra o clima pesado com humor ou muda de assunto antes que a briga piore.", weights: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
                { dialogue: "Desmonto os argumentos deles um por um, focando em provar que a lógica deles é falha.", thought: "O argumento deles é fraco. Você desmonta a lógica do grupo ponto por ponto para provar que tem razão.", weights: { Prince: 2, Mage: 2, Seer: 1, Heir: -2 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Um amigo está iludido com um relacionamento tóxico, acreditando que 'o amor vai mudar tudo'.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "É óbvio que isso vai dar errado. Você não consegue evitar prever a decepção gigante que ele vai sofrer." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Difícil", text: "Você não pode deixar seu amigo continuar sendo feito de trouxa. Vá lá, brigue com o agressor e acabe com essa ilusão à força." }
            ],
            options: [
                { dialogue: "Intervenho drasticamente, listando as provas de toxicidade para quebrar essa fantasia.", thought: "A ilusão é perigosa. Você intervém de forma dura para forçar o seu amigo a enxergar a situação tóxica.", weights: { Prince: 3, Seer: 2, Sylph: -2, Heir: -3 } },
                { dialogue: "Ouço os desabafos e valido os sentimentos, esperando que ele perceba a realidade no tempo dele.", thought: "Ele precisa de tempo. Você escuta, acolhe e espera pacientemente até ele perceber sozinho o erro.", weights: { Sylph: 3, Rogue: 2, Prince: -3, Thief: -2 } },
                { dialogue: "Não me meto. Se ele quer se iludir, é escolha dele. Eu só assisto de longe.", thought: "Cada um sabe de si. Você avisa uma vez, mas não vai se meter em briga alheia para salvar quem não quer ajuda.", weights: { Bard: 3, Mage: 1, Knight: -2, Maid: -2 } },
                { dialogue: "Sinto raiva pela ingenuidade, mas acabo comprando briga com quem o está machucando.", thought: "A frustração vira ação. Já que seu amigo está cego, você toma a frente e briga com quem o está machucando.", weights: { Knight: 3, Thief: 2, Mage: -1, Bard: -1 } },
                { dialogue: "Afasto-me. Não tenho paciência para quem escolhe viver na mentira.", thought: "A insistência na mentira te esgota. Se ele prefere a ilusão, é melhor você se afastar para não perder a paciência.", weights: { Mage: 2, Seer: 1, Knight: -2, Maid: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Você cometeu um erro que prejudicou alguém, sem intenção. A culpa o consome.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Fácil", text: "Foi sem querer. Você consegue distorcer a história do que aconteceu para que ninguém (nem você) te culpe tanto por isso." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Médio", text: "A culpa é terrível, mas você não vai fazer nada. Fique na sua até o tempo passar e as pessoas esquecerem isso sozinhas." }
            ],
            options: [
                { dialogue: "Convenço a mim mesmo de que não foi minha culpa, reescrevendo a narrativa dos eventos.", thought: "A culpa dói tanto que você distorce o que aconteceu. Encontrar justificativas alivia o peso de admitir o erro.", weights: { Witch: 3, Thief: 2, Prince: 1, Seer: -3 } },
                { dialogue: "Aceito a culpa publicamente e tento compensar exageradamente o erro com atos grandiosos.", thought: "Admitir não basta. Você trabalha o dobro para provar o seu arrependimento através de atitudes exageradas.", weights: { Page: 3, Maid: 2, Knight: 1, Thief: -2 } },
                { dialogue: "Fico paralisado, esperando que o tempo apague a gravidade do erro sem eu precisar agir.", thought: "O medo te trava. Você congela e torce secretamente para que o tempo resolva o problema sozinho.", weights: { Heir: 3, Bard: 2, Knight: -2, Maid: -2 } },
                { dialogue: "Dou espaço para a pessoa, sacrificando minha necessidade de perdão imediato.", thought: "Respeito pela dor alheia. Você se afasta e lida com a culpa sozinho, dando espaço para a pessoa processar o ocorrido.", weights: { Rogue: 3, Seer: 2, Sylph: 1, Witch: -2 } },
                { dialogue: "Eu esqueço. O que passou, passou. Ficar se sentindo culpado não resolve nada mesmo.", thought: "O que foi feito não pode ser mudado. Ficar remoendo a culpa não ajuda, então é mais prático seguir em frente.", weights: { Bard: 3, Prince: 1, Page: -1, Sylph: -2 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Qual é a sua relação com 'finais felizes' em filmes e livros?",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Fácil", text: "Finais felizes dão alívio. Depois de tanta desgraça no mundo real, a ficção tem que te trazer esperança de que as coisas melhoram." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "A vida real não tem final feliz para todo mundo. Deteste histórias que forçam um sorriso raso onde não cabe." }
            ],
            options: [
                { dialogue: "Acho irritantes e irreais. A vida não funciona assim.", thought: "O otimismo exagerado irrita. A realidade é dura, e histórias que forçam um final perfeito parecem artificiais demais.", weights: { Prince: 3, Mage: 2, Heir: -2, Sylph: -2 } },
                { dialogue: "São essenciais. O mundo já é difícil demais; a ficção deve servir como um farol de esperança.", thought: "A ficção serve para aliviar. Depois da tensão do mundo real, você quer uma história que traga conforto.", weights: { Maid: 3, Sylph: 2, Page: 1, Prince: -3 } },
                { dialogue: "Gosto, mas apenas se os personagens sofreram o suficiente para merecê-lo.", thought: "O final feliz tem que fazer sentido. A recompensa só é justa se os personagens sofreram para chegar lá.", weights: { Knight: 3, Thief: 2, Seer: 1, Heir: -1 } },
                { dialogue: "Não me importo. Se for feliz, ok. Se todos morrerem, ok também.", thought: "A moral da história tanto faz. O importante é o enredo te entreter, não importa quem vive ou morre.", weights: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
                { dialogue: "Foco na jornada e nas possibilidades abertas que a história sugere.", thought: "O desfecho importa pouco. O mais legal é o percurso dos personagens e as reflexões que a história traz.", weights: { Heir: 3, Rogue: 2, Seer: 1, Knight: -2 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Você precisa convencer um grupo de pessoas a seguir um caminho arriscado.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "É fácil guiar pessoas assustadas. Mostre uma opção de risco que parece a única saída e eles vão te seguir sem pensar." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "Se eles não têm coragem, vá você na frente sozinho. Quando virem que não há perigo imediato, eles vão te seguir." }
            ],
            options: [
                { dialogue: "Uso meu carisma e promessas grandiosas. Importa se eles acreditam, não se é verdade.", thought: "O que importa é a adesão. Você usa a persuasão para animar o grupo, mesmo prometendo o que não pode entregar.", weights: { Thief: 3, Knight: 2, Page: 1, Seer: -2 } },
                { dialogue: "Apresento o cenário de forma honesta, confiando que a verdade inspirará as pessoas certas.", thought: "A clareza atrai confiança. Seja honesto sobre os riscos; quem decidir seguir fará isso sabendo de tudo.", weights: { Seer: 3, Mage: 2, Witch: -2, Thief: -3 } },
                { dialogue: "Digo 'vamos nessa' sem ter plano nenhum. Minha despreocupação faz parecer que sei o que faço.", thought: "Passe a impressão de controle. Agir com naturalidade, mesmo sem plano, acalma o nervosismo do grupo.", weights: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
                { dialogue: "Manipulo sutilmente as circunstâncias para que pareça a única opção segura.", thought: "Facilite a escolha deles. Manipule o cenário ou oculte riscos para que o caminho pareça o mais lógico.", weights: { Witch: 3, Prince: 1, Sylph: 1, Knight: -1 } },
                { dialogue: "Vou na frente sozinho. Se der certo, eles me seguirão pelo exemplo.", thought: "Lidere pela atitude. Dê o primeiro passo no escuro sozinho; quando virem que deu certo, eles te seguirão.", weights: { Rogue: 3, Maid: 2, Heir: 1, Bard: -1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Os dados e a lógica garantem que seu objetivo atual é impossível. Qual sua reação imediata?",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Você não aceita o impossível. Se a realidade e os dados dizem não, você vai forçar as regras até conseguir o que quer." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "A impossibilidade te dá pânico. Busque imediatamente o apoio dos outros para sugar a energia deles e não perder a fé." }
            ],
            options: [
                { dialogue: "Recuso essa 'verdade'. Se a realidade diz não, eu quebro as regras ou forço um caminho.", thought: "Você não desiste pelo impossível. Ignore os limites lógicos e force um caminho até a situação ceder.", weights: { Prince: 3, Witch: 2, Knight: 1 } },
                { dialogue: "Entro em pânico. Busco validação em outras pessoas para sustentar minha crença.", thought: "A impossibilidade gera pânico. Você busca imediatamente o apoio dos outros para não perder a própria fé.", weights: { Thief: 2, Rogue: 1, Page: 1 } },
                { dialogue: "Continuo tentando, mas sem esforço real. Se der errado, pelo menos eu fingi que tentei.", thought: "A motivação cai a zero. Você continua fazendo os movimentos só por inércia, sabendo que não vai dar em nada.", weights: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
                { dialogue: "Analiso friamente. Tento entender a lógica da falha e, se for real, aceito e sigo o fluxo.", thought: "Os números não mentem. Analise onde o plano quebrou, aceite o fracasso lógico e pense no próximo passo.", weights: { Mage: 2, Seer: 2, Heir: 1 } },
                { dialogue: "Mantenho as aparências. Continuo agindo como se fosse dar certo para preservar a moral.", thought: "A esperança mantém a equipe. Você finge que ainda dá certo só para não destruir o ânimo do grupo agora.", weights: { Sylph: 2, Maid: 1, Knight: 1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você está sozinho em um quarto em silêncio absoluto. Como essa ausência de estímulo te afeta?",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Difícil", text: "O silêncio não é folga. Sem ninguém olhando, é a hora perfeita para você treinar pesado e evoluir sozinho." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Fácil", text: "Aproveite a paz. Feche os olhos, deixe a mente viajar solta e esqueça de vez as pressões do mundo real." }
            ],
            options: [
                { dialogue: "A inércia me desespera. Começo a organizar coisas freneticamente.", thought: "Ficar sem fazer nada te deixa agitado. A ausência de estímulos te força a arrumar algo para se ocupar.", weights: { Prince: 1, Knight: 2, Maid: 1 } },
                { dialogue: "Sinto um vazio existencial. Preciso consumir conteúdo alheio para me distrair.", thought: "O silêncio traz desconforto. Você procura o celular ou a TV para preencher logo esse vazio.", weights: { Thief: 2, Rogue: 2, Page: 1 } },
                { dialogue: "Sinto-me livre. Minha mente cria cenários e histórias sozinha para preencher o silêncio.", thought: "É o seu melhor momento. Longe da pressão, você fica livre para inventar ideias e cenários na própria cabeça.", weights: { Heir: 2, Mage: 2, Seer: 1 } },
                { dialogue: "Fico viajando na maionese. Entro num estado de devaneio tão profundo que esqueço onde estou.", thought: "Você simplesmente desliga. A mente divaga e você desconecta do mundo físico sem notar o tempo passar.", weights: { Bard: 3, Heir: 1, Rogue: 1 } },
                { dialogue: "Uso o isolamento como ferramenta de treino e autopoliciamento.", thought: "Foco absoluto. Você usa o silêncio como um ambiente de treino mental para evoluir sem distrações.", weights: { Page: 2, Knight: 1 } }
            ]
        }
    ],

    "Doom": [
        { 
            id: 1,
            scenario: "1. Você recebe o diagnóstico de uma condição médica que exigirá restrições severas e rotina rígida para sempre.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "Você não vai deixar um papel ditar o seu corpo. Contorne as restrições médicas, ignore a bula e faça as suas regras." },
                { aspect: "Maid", difficulty: 2, check: "Ativo: Fácil", text: "Regras são regras e o corpo obedece. Siga o cronograma médico à risca; ter uma rotina definida te ajuda a se estruturar." }
            ],
            options: [
                { dialogue: "Dane-se o diagnóstico. Continuo vivendo normalmente, recusando-me a deixar um papel ditar os limites do corpo.", thought: "A arrogância heróica do cego esfaqueando a navalha. Você corre contra a parede de tijolos esperando que ela desvie.", weights: { Prince: 3, Witch: 1, Heir: -1 } },
                { dialogue: "Eu esqueço de tomar os remédios ou sigo pela metade. Se meu corpo aguentar, aguentou; não vou me estressar.", thought: "A necrose russa. Jogar o tambor giratório das células apenas por inércia letárgica suicida.", weights: { Bard: 3, Rogue: 1, Heir: 1, Sylph: -2 } },
                { dialogue: "Mergulho na pesquisa técnica. Dissecarei cada mecanismo da doença para mapear onde piso neste campo minado.", thought: "A escavação paranoica da cova. Conhecer a engrenagem do monstro alivia o terror de ser mastigado por ele.", weights: { Mage: 3, Seer: 2, Knight: 1, Prince: -2 } },
                { dialogue: "Submeto-me imediatamente, criando um sistema impecável de hábitos para 'domar' a doença através da obediência.", thought: "A vassalagem biológica. Entregar a alma ao relógio de pílulas para anestesiar a humilhação do corpo frágil.", weights: { Sylph: 3, Maid: 2, Heir: 1, Bard: -2 } },
                { dialogue: "Uso minha condição como escudo social, livrando-me de responsabilidades indesejadas sob a justificativa da saúde.", thought: "O vampirismo patológico astuto. A doença não é uma sentença, é um VIP pass para escapar do pelotão de fuzilamento.", weights: { Thief: 3, Witch: 2, Page: 1, Knight: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. O veículo em que você está sofre uma falha catastrófica. O impacto violento é uma certeza nos próximos segundos.",
            voices: [
                { aspect: "Rogue", difficulty: 0, check: "Passivo: Médio", text: "É instinto de proteção. Se a batida é certa, você se joga na frente para amortecer o impacto e salvar quem estiver junto." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "É cada um por si. Pule antes do estrago acontecer e não hesite em pisar em cima de quem estiver travando a saída." }
            ],
            options: [
                { dialogue: "Aceito o fim. Relaxo cada músculo do corpo para não quebrar, confiando que fluir com o desastre é a chance de viver.", thought: "A inércia elástica perfeita. O boneco de pano que aceita a gravidade fúnebre sem dar o gosto do grito à morte.", weights: { Heir: 3, Seer: 1, Sylph: 1, Prince: -3 } },
                { dialogue: "Começo a rir de nervoso ou simplesmente travo. Não tento me salvar nem salvar ninguém, só espero a batida.", thought: "O curto-circuito final da fiação. Um passageiro passivo com assento de primeira classe para a própria obliteração.", weights: { Bard: 3, Page: 2, Mage: -1, Knight: -2 } },
                { dialogue: "Tento proteger os passageiros com meu próprio corpo, agindo como um escudo humano para absorver o dano.", thought: "O reflexo cego do saco de areia. Doar as costelas numa tentativa desesperada de validar a vida pelo auto-sacrifício.", weights: { Rogue: 3, Knight: 2, Maid: 1, Thief: -3 } },
                { dialogue: "Grito ordens precisas em meio ao pânico. Assumo o comando do caos, ditando posições de impacto.", thought: "A microgestão do apocalipse. Tentar assinar um documento de regras num avião em chamas caindo de bico.", weights: { Seer: 2, Mage: 2, Sylph: 1, Page: -1 } },
                { dialogue: "Pulo fora antes do impacto final. Minha prioridade absoluta é garantir que eu não afunde com os destroços.", thought: "O rato olímpico ágil. A preservação do próprio oxigênio exige a quebra abjeta de todos os instintos de rebanho.", weights: { Thief: 3, Prince: 2, Witch: 1, Rogue: -3 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Você descobre uma falha sistêmica nas regras de um contrato que permite obter vantagens ilimitadas de forma desonesta.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Fácil", text: "O sistema deu brecha. Explore esse erro até o limite absoluto e tire a maior vantagem financeira possível antes que descubram." },
                { aspect: "Seer", difficulty: 2, check: "Passivo: Difícil", text: "Você prevê o estrago a longo prazo. Esse erro vai quebrar o sistema inteiro lá na frente; reporte o problema logo para consertarem." }
            ],
            options: [
                { dialogue: "Exploro a falha até a última gota. Se o sistema deixou uma porta aberta, a incompetência é deles e o lucro é meu.", thought: "A voracidade amoral do parasita lúcido. Sugar a brecha estrutural rindo da lerdeza letárgica do hospedeiro.", weights: { Thief: 3, Witch: 2, Prince: 1, Seer: -2 } },
                { dialogue: "Reporto o erro imediatamente. Um sistema quebrado prejudica o coletivo a longo prazo.", thought: "O delator zeloso das cercas. Tapar a fenda do curral não por compaixão aos lobos, mas pela adoração às paredes intactas.", weights: { Sylph: 3, Seer: 2, Heir: 1, Thief: -3 } },
                { dialogue: "Uso o erro de forma desleixada até quebrar o sistema ou ser banido. Foi divertido enquanto durou a anarquia.", thought: "O coringa do joystick bêbado. Destruir o cassino por diversão infantil inconsequente, cagando para os lucros lentos.", weights: { Bard: 3, Rogue: 1, Heir: 1, Mage: -2 } },
                { dialogue: "Compartilho o segredo apenas com meu círculo íntimo, garantindo vantagem antes que a correção chegue.", thought: "A guerrilha tática de cartel fechado. Roubar sacos de farinha do rei e esconder apenas nos porões de quem você gosta.", weights: { Rogue: 3, Maid: 2, Page: 1, Prince: -1 } },
                { dialogue: "Fico paranoico de que usar isso trará uma punição cármica ou legal severa, então prefiro não tocar no erro.", thought: "A paralisia do radar cósmico. O olho vigilante das autoridades fantasmagóricas fura a sua nuca e o obriga a recuar trêmulo.", weights: { Mage: 3, Knight: 2, Bard: -1, Witch: -2 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Sua comunidade mantém um ritual antigo opressivo e sem sentido, visto como o pilar da ordem social.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Essa tradição é opressora e estúpida. Bata de frente, brigue com os velhos e acabe com essa regra inútil na marra." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Médio", text: "É um ritual opressivo, mas é o que mantém a comunidade unida. Aceite as regras chatas para não quebrar a ordem." }
            ],
            options: [
                { dialogue: "Participo fingindo respeito, mas nos bastidores faço comentários ácidos que minam a autoridade do ritual.", thought: "O cupim infiltrado no altar de carvalho. Engolir a hóstia para não ser expulso, mas escarregar ferrugem no confessionário.", weights: { Thief: 2, Witch: 2, Mage: 1 } },
                { dialogue: "Eu não apareço. Ignoro a existência da regra e vou fazer o que me interessa, indiferente às consequências.", thought: "O desertor sem agenda política. A quebra da lei ocorre não por heroísmo, mas pelo tédio supremo da recusa física.", weights: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
                { dialogue: "Confronto a tradição abertamente e tento destruí-la. Não aceito que sofrimento seja justificado porque 'sempre foi assim'.", thought: "O paladino iconoclasta cuspindo fogo no vitral. Implodir as grades é a única oxigenação moral possível no lugar abafado.", weights: { Prince: 3, Knight: 2, Witch: 1, Heir: -2 } },
                { dialogue: "Mantenho a tradição com solenidade. O ritual é a cola que impede a sociedade de se dissolver no caos absoluto.", thought: "A mordaça pragmática da infraestrutura cívica. O rebanho não sabe caminhar sem a fivela apertando o focinho; você os aperta.", weights: { Heir: 3, Seer: 2, Mage: 1, Prince: -3 } },
                { dialogue: "Tento reformar a tradição por dentro, sugerindo pequenas alterações nas regras para torná-la mais suportável.", thought: "A cirurgia diplomática sorrateira. Você amputa os galhos velhos lixando a serra para não fazer barulho pros moradores idiotas.", weights: { Sylph: 3, Witch: 2, Maid: 1, Bard: -2 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Você encontra uma criatura em seus últimos momentos de vida. O sofrimento é visível, não há recuperação, a morte é certa.",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "O animal não tem salvação. Assuma o peso da ação, faça o corte e poupe a criatura dessa agonia inútil." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Difícil", text: "É fascinante do jeito mais frio possível. Fique apenas observando em silêncio o processo da morte orgânica acontecendo." }
            ],
            options: [
                { dialogue: "Mato-o rapidamente. É um ato de misericórdia impor um fim imediato quando o destino já está selado dolorosamente.", thought: "O carrasco compassivo e brutal. Você suja a lâmina com o pecado para impedir o prolongamento inútil e choroso da dor de terceiros.", weights: { Knight: 3, Prince: 2, Maid: 1, Bard: -1 } },
                { dialogue: "Viro o rosto e vou embora. A visão da morte crua me perturba profundamente e prefiro negar essa realidade.", thought: "O escamoteamento nojento do pusilânime. Correr para não registrar o cheiro acre da entropia desmanchando o mundo natural nos sapatos.", weights: { Page: 3, Heir: 2, Prince: 1, Mage: -2 } },
                { dialogue: "Fico observando até o último Suspiro. Sinto uma obrigação solene de testemunhar a passagem da vida para a morte.", thought: "O tabelião das sepulturas orgânicas. Gravar em silêncio de pedra as contrações do peito expirante como um rito fúnebre inútil documentário.", weights: { Mage: 3, Seer: 2, Rogue: 1, Knight: -2 } },
                { dialogue: "Tento salvá-lo desesperadamente, mesmo sabendo que é fútil. Recuso-me a aceitar que a morte seja a única opção.", thought: "A teimosia insolente de esfregar gaze na placa de ferro da foice da morte. Você se recusa a dar check-out da vida sem histeria tátil cega.", weights: { Maid: 3, Witch: 2, Sylph: 1, Seer: -2 } },
                { dialogue: "Deixo a natureza seguir seu curso. Se tiver que morrer, vai morrer. Não intervenho para salvar, nem para matar.", thought: "A rendição monástica perante a brutalidade dos relógios cegos florestais sujos; o abatedouro operando sua rotina trivial perante seus braços inertes.", weights: { Bard: 3, Seer: 1, Mage: 1, Sylph: -2 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Você está num trabalho onde as regras mudam aleatoriamente e ninguém sabe o que faz, num ambiente de entropia pura.",
            voices: [
                { aspect: "Page", difficulty: 0, check: "Passivo: Difícil", text: "O caos te engole. Ficar num lugar onde não existem regras claras te paralisa de medo e te impede de produzir." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Sem regras, você voa. Aproveite o caos para nadar solto e fazer o mínimo esforço sem que ninguém possa te cobrar." }
            ],
            options: [
                { dialogue: "Paraliso. A falta de diretrizes claras drena minha energia vital e me sinto incapaz de produzir sem um trilho seguro.", thought: "A petrificação existencial por defeito arquitetônico da pista. Sem a chibata com placa de sentido único, a mula afunda em depressão.", weights: { Page: 3, Heir: 2, Sylph: 1, Prince: -2 } },
                { dialogue: "Crio minhas próprias leis e imponho aos outros. Se o universo não me dá estrutura, eu me torno a estrutura.", thought: "O golpismo monárquico no deserto de baratas. A usurpação é imediata para curar a asma histérica que a falta de chumbo dá.", weights: { Witch: 3, Knight: 2, Maid: 1, Page: -2 } },
                { dialogue: "Eu paro de tentar entender. Faço qualquer coisa de qualquer jeito. Se o resultado for ruim, a culpa é da regra que mudou.", thought: "A greve zumbi silenciosa maliciosa letárgica; apertar parafusos nos dedões dos pés pra rir da conta final do chefe inepto surdo cego inútil.", weights: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
                { dialogue: "Navego no caos. Sem regras fixas, ninguém pode provar que estou errado, então faço o mínimo possível.", thought: "O tubarão de lama ágil e sorridente; escorregar ileso pelo esgoto das responsabilidades comendo os trocos enquanto a firma implode frita no caos.", weights: { Thief: 3, Rogue: 2, Bard: 1, Seer: -3 } },
                { dialogue: "Tento decifrar o padrão oculto por trás das mudanças. Acredito que existe uma lógica subjacente nesse caos.", thought: "A paranóia acadêmica febril trêmula isolada tentando achar o rosto de deus nas rachaduras de um mictório mijado sujo mofado úmido liso frio azedo no escuro.", weights: { Mage: 3, Seer: 2, Heir: 1, Bard: -1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Um aliado cometeu um erro imperdoável que pode custar a carreira dele. Ele implora para que você minta e cubra o rastro.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Médio", text: "Fugas só pioram tudo. Force ele a encarar as consequências do erro em vez de se esconder atrás das suas mentiras." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Difícil", text: "Você não pode deixar um parceiro cair. Engula a falha, assuma a culpa por ele e pague a dívida para salvar a carreira dele." }
            ],
            options: [
                { dialogue: "Minto. As regras institucionais não valem mais do que a minha lealdade pessoal a quem está comigo.", thought: "O estatuto do crime sangrento ignorando manuais corporativos em favor da aliança mafiosa afetiva suja visceral corrupta profunda da guangue.", weights: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } },
                { dialogue: "Recuso-me a mentir. Explico que as consequências são uma força da natureza e fugir só piora a catástrofe.", thought: "A bússola gélida e surda ao choro humano; observar o amigo rolar na máquina trituradora enquanto lustra as placas dos dez mandamentos ilesos intactos brancos.", weights: { Seer: 3, Mage: 2, Sylph: 1, Thief: -2 } },
                { dialogue: "Assumo a culpa no lugar dele. Uso meu capital para pagar a dívida do erro, sacrificando-me.", thought: "A imolação no balcão de negociações; sugar o tiro da testa alheia para validar a própria necessidade enferma insuportável mártir carente cega inútil de se doar.", weights: { Rogue: 3, Page: 2, Knight: 1, Prince: -3 } },
                { dialogue: "Fico furioso. A irresponsabilidade dele agora se tornou uma âncora no meu pescoço.", thought: "A fúria narcisista do general lidando com a amputação burra de um soldado; o risco de ter a própria bota sujando de merda revolta a glândula do fígado duro raivoso.", weights: { Prince: 3, Knight: 2, Bard: 1, Heir: -1 } },
                { dialogue: "Tento mentir, mas faço de forma tão desleixada ou contraditória que a verdade acaba vazando por incompetência minha.", thought: "A sabotagem mista de nervosismo clownesco; a fraude patética engasga na língua, revelando o crime da forma mais embaraçosa imbecil risível tosca mole frouxa possível.", weights: { Bard: 3, Page: 2, Heir: 1, Prince: -1 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Você enfrenta o Leviatã da burocracia: montanha de documentos, filas e carimbos para conseguir algo simples.",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "Burocracia não te vence. Entre no modo máquina, organize todos os papéis e resolva isso milimetricamente para acabar logo." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "A lerdeza desse sistema é uma ofensa. A ineficiência dos processos te deixa com vontade de explodir tudo ao redor." }
            ],
            options: [
                { dialogue: "Transformo isso em um desafio de eficiência. Organizo cada papel milimetricamente para vencer o sistema pelo cansaço.", thought: "Foco na eficiência. Você transforma o tédio em um jogo de velocidade e organiza os papéis para terminar logo.", weights: { Knight: 3, Maid: 2, Sylph: 1, Bard: -2 } },
                { dialogue: "Sinto minha vitalidade sendo sugada. A ineficiência sistêmica me dá vontade de atear fogo no prédio.", thought: "A lerdeza te consome. Ficar preso em um processo ineficiente te deixa extremamente irritado e sem paciência.", weights: { Prince: 3, Witch: 1, Heir: -2 } },
                { dialogue: "Desisto no meio do caminho. Se é difícil demais, não vale o esforço. Deixo o prazo vencer e vejo o que acontece.", thought: "Você desiste fácil. Se a burocracia é muito grande, simplesmente não vale o estresse e você abandona o processo.", weights: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
                { dialogue: "Aceito com resignação estóica. É chato, mas é a lei do mundo. Entro em modo de espera e aguardo minha vez.", thought: "Você aceita sem reclamar. Entende que o sistema é assim mesmo e aguarda sua vez com paciência estóica.", weights: { Heir: 3, Page: 2, Rogue: 1, Prince: -3 } },
                { dialogue: "Tento usar contatos, charme ou suborno para pular etapas. As regras se aplicam aos outros, não a mim.", thought: "Você usa seus contatos. Ficar na fila é perda de tempo, então você busca um atalho para resolver logo a situação.", weights: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. A matemática é fria: o dinheiro acabou. O colapso financeiro é iminente e não há como pagar as dívidas.",
            voices: [
                { aspect: "Seer", difficulty: 0, check: "Passivo: Difícil", text: "Os números não mentem, acabou. Sente-se agora, calcule o estrago total e prepare um plano realista de falência." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Médio", text: "Se a conta apertou, jogue sujo. Pegue um empréstimo para cobrir o outro, faça malabarismo de cartão e empurre o problema com a barriga." }
            ],
            options: [
                { dialogue: "Saio cortando tudo que não é vital. Viro um asceta, vivendo com o mínimo para sobreviver ao inverno financeiro.", thought: "Sobrevivência básica. Você corta todos os luxos imediatamente para garantir que o dinheiro dure o máximo possível.", weights: { Prince: 3, Knight: 1, Sylph: -2 } },
                { dialogue: "Gasto o pouco que sobrou em algo fútil para me sentir bem. Se o barco vai afundar, que eu afunde sorrindo.", thought: "Já que vai quebrar, quebre com estilo. Você gasta o que restou para ter um último momento de alívio e conforto.", weights: { Bard: 3, Heir: 1, Rogue: 1, Seer: -2 } },
                { dialogue: "Deixo de comer para garantir que os dependentes não sintam o impacto da crise e sobrevivam inteiros ilesos fortes.", thought: "O sacrifício é pelo grupo. Você passa necessidade para proteger as pessoas que dependem de você do impacto financeiro.", weights: { Rogue: 3, Maid: 2, Page: 1, Thief: -3 } },
                { dialogue: "Faço malabarismo financeiro. Pego empréstimo para pagar outro e empurro a condenação com a barriga.", thought: "Malabarismo financeiro. Você empurra a dívida pegando novos empréstimos para ganhar mais tempo.", weights: { Thief: 3, Witch: 2, Mage: 1, Seer: -1 } },
                { dialogue: "Sento e calculo a data exata da falência. Crio um plano detalhado para o cenário pós-apocalíptico inevitável.", thought: "Os números não mentem. Você calcula o estrago para se preparar friamente para o impacto da falência iminente.", weights: { Seer: 3, Mage: 2, Heir: 1, Bard: -2 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você é o portador do apocalipse pessoal de alguém. Cabe a você entregar uma notícia (morte, demissão) que destruirá o mundo dela.",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Difícil", text: "A notícia ruim vai quebrar a pessoa. Minta, suavize os detalhes cruéis e faça o máximo para protegê-la dessa dor absurda." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Médio", text: "Dar essa notícia ruim é apavorante. Tranque-se, fuja da responsabilidade e invente desculpas para a pessoa descobrir isso sozinha." }
            ],
            options: [
                { dialogue: "Falo a verdade na lata, sem anestesia. A clareza brutal é a única forma respeitosa de lidar com o fim.", thought: "Honestidade crua. Entregar a notícia de forma direta e clara é o único jeito de respeitar a pessoa no momento difícil.", weights: { Seer: 3, Mage: 2, Knight: 1, Sylph: -2 } },
                { dialogue: "Tento maquiar a catástrofe, omitindo detalhes cruéis na esperança de proteger a pessoa da dor total.", thought: "A empatia suaviza o golpe. Você omite a pior parte para não destruir o estado emocional dela de uma vez só.", weights: { Sylph: 3, Page: 2, Heir: 1, Prince: -1 } },
                { dialogue: "Enrolo tanto que a pessoa acaba descobrindo sozinha ou percebendo pelo meu comportamento esquivo.", thought: "Evitar o confronto. Você demora tanto para falar que a pessoa acaba percebendo o problema sozinha pelas entrelinhas.", weights: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
                { dialogue: "Travo e sumo. Invento desculpas para não ter que olhar nos olhos da pessoa enquanto o mundo dela cai.", thought: "A covardia fala mais alto. O medo de lidar com a dor da pessoa faz você travar e tentar fugir da situação a todo custo.", weights: { Page: 3, Rogue: 2, Knight: -2 } },
                { dialogue: "Uso a situação para me mostrar indispensável. Dou a má notícia oferecendo-me como salvador.", thought: "A crise vira oportunidade. Você dá a má notícia já se oferecendo como o ombro amigo e indispensável que ela vai precisar.", weights: { Witch: 3, Thief: 2, Maid: 1, Prince: -2 } }
            ]
        }
    ],
	"Life": [
        { 
            id: 1,
            scenario: "1. Você descobriu que conseguiu seu emprego porque seu pai conhecia o chefe (nepotismo), não por mérito.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Quem se importa com meritocracia? A vaga caiu no seu colo. Agarre a vantagem de ter contatos e não sinta culpa." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "O privilégio é asqueroso. Você recusa ganhar uma vaga fácil de presente; peça para sair e vá construir seu mérito do zero." }
            ],
            options: [
                { dialogue: "Não sinto vergonha. Se o mundo me ofereceu um atalho, eu pego. Prefiro estar empregado a ser mártir.", thought: "O Darwinismo pragmático. A sobrevivência justifica qualquer esgoto; a fome não pede diploma de ética para ser saciada.", weights: { Thief: 3, Witch: 1, Prince: -2 } },
                { dialogue: "Sinto-me uma fraude. Trabalho o triplo para provar (para eles e para mim) que eu mereço ocupar este espaço.", thought: "A síndrome do impostor braçal. Você paga o aluguel do seu próprio oxigênio com gotas de suor e sangue extra na mesa do chefe.", weights: { Page: 3, Knight: 2, Maid: 1, Heir: -1 } },
                { dialogue: "Rejeito a vantagem. Peço demissão ou busco outro lugar onde eu possa começar do zero, destruindo esse privilégio.", thought: "A fogueira da vaidade puritana. Você amputa a própria perna perfeitamente saudável só porque não foi você quem a cultivou no útero.", weights: { Prince: 3, Knight: 1, Thief: -3, Witch: -2 } },
                { dialogue: "Eu nem penso nisso. Continuo no emprego, fazendo o mínimo necessário. Se me deram a vaga, o problema é deles.", thought: "A fotossíntese burocrática. A planta não questiona o sol que a ilumina; ela apenas deita na grama e existe sem suar a folha.", weights: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
                { dialogue: "Uso minha posição privilegiada para facilitar a vida dos meus colegas, advogando por melhorias, redistribuindo minha sorte.", thought: "O robin hood de crachá. Se o seu bilhete premiado foi roubado, você vai abrir a porta dos fundos do banco para que todos levem um pedaço.", weights: { Rogue: 3, Sylph: 2, Seer: 1, Prince: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Em um projeto, um membro é incompetente e está arrastando todos para o fracasso. O prazo acaba amanhã.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "O peso morto está puxando vocês para o fundo. Arranque a parte dele do trabalho sem pena e faça sozinho para salvar a nota." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Médio", text: "Você não larga ninguém para trás. Sente com a pessoa, pegue na mão dela e ajude-a a terminar a parte dela do trabalho." }
            ],
            options: [
                { dialogue: "Eu corto a parte dele e faço tudo sozinho. Não vou deixar minha nota afundar por causa de um peso morto.", thought: "A amputação cirúrgica do tumor. O coletivo é sacrificado no altar do seu ego ditatorial sedento pela sobrevivência do projeto.", weights: { Prince: 3, Thief: 2, Sylph: -2, Page: -2 } },
                { dialogue: "Sento com ele e faço a parte dele junto, guiando sua mão se for preciso. Não posso deixar ninguém para trás.", thought: "A maternidade exaustiva coercitiva. Arrastar o cadáver do colega nas costas fingindo que ele ainda consegue marchar ao seu lado.", weights: { Sylph: 3, Maid: 2, Witch: 1, Bard: -2 } },
                { dialogue: "Eu deixo ele afundar. Se ele não fez a parte, que arque com as consequências. Não vou me matar para salvar.", thought: "A eutanásia negligente pacífica. Se o animal quebrou a perna, a savana cuida dele; os seus músculos não servem de maca.", weights: { Bard: 3, Mage: 1, Rogue: 1, Sylph: -3 } },
                { dialogue: "Assumo a liderança agressivamente, ditando o que cada um fará nas horas finais para garantir que o resultado seja vital.", thought: "O generalato de trincheira suada. Você injeta esteroides na jugular de todos os soldados com chicotadas de comando verbal histérico.", weights: { Witch: 3, Maid: 2, Heir: 1, Seer: -1 } },
                { dialogue: "Observo o desastre iminente. Entendo que o fracasso é parte do ciclo de aprendizado e, às vezes, a dor é a lição.", thought: "O monge espectador da carnificina. Deixar a vila pegar fogo para poder catalogar os ossos e entender o poder calorífico da chama.", weights: { Seer: 3, Mage: 2, Knight: -2 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Em um grupo de amigos, você é geralmente aquele que:",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Sem você o grupo desmorona. Assuma a carga de cuidar de todos e de organizar as coisas sem esperar agradecimento." },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Fácil", text: "Você é quem manda no ritmo. Se você quiser que o grupo faça o que você está a fim de fazer, é só dar a palavra." }
            ],
            options: [
                { dialogue: "Organiza as atividades, cuida de quem bebeu demais e garante que todos estejam bem, muitas vezes esquecendo de si mesmo.", thought: "A servidão celular. A sua alegria é plastificada; a função principal é garantir que os órgãos dos outros continuem pulsando quentes.", weights: { Maid: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
                { dialogue: "É o conselheiro realista que diz as verdades chatas que ninguém quer ouvir, impedindo decisões impulsivas.", thought: "O estraga-prazeres profilático. Você joga água fria no fogo deles não por ódio, mas para garantir que não se queimem como idiotas.", weights: { Prince: 3, Mage: 2, Seer: 1, Witch: -2 } },
                { dialogue: "É o centro das atenções natural. Você define o ritmo do rolê e faz com que os planos girem em torno do que quer.", thought: "A ditadura do buraco negro carismático. Os satélites idiotas ao seu redor orbitam a sua luz e você adora a radiação.", weights: { Witch: 3, Knight: 2, Thief: 1, Bard: -2 } },
                { dialogue: "Eu sou o que vai na onda. Como o que tiver, bebo o que derem. Sou uma presença confortável que não exige muito.", thought: "O musgo aconchegante da parede. A total ausência de força motriz transformou-o na almofada humana perfeita para encostar a cabeça bêbada.", weights: { Bard: 3, Heir: 2, Rogue: 1, Maid: -1 } },
                { dialogue: "Aquele que parece atrair a sorte ou oportunidades, sempre terminando em situações vantajosas sem fazer esforço.", thought: "A boia dourada da piscina existencial. A força da vida empurra o mar contra você, trazendo peixes mortos direto para a sua boca aberta.", weights: { Heir: 3, Page: 2, Thief: -1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Uma tradição familiar dita que você deve seguir uma carreira que odeia. Romper com ela significa ser deserdado.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "A tradição deles é um peso. Quebre com a família, chute as expectativas deles e vá viver a vida do seu jeito." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Deixe a situação apodrecer sozinha. Reprove as matérias, faça besteira e deixe eles mesmos desistirem de você sem brigas diretas." }
            ],
            options: [
                { dialogue: "Rompo com a tradição. Tenho uma vida só e não vou gastá-la seguindo regras de gente morta. Minha felicidade vale mais.", thought: "O matricídio simbólico necessário. Você enforca os cordões umbilicais invisíveis para respirar ar puro fora da cripta de luxo deles.", weights: { Witch: 3, Thief: 2, Prince: 1, Heir: -2 } },
                { dialogue: "Aceito o fardo e sigo a carreira, encontrando maneiras de servir a família e manter o legado vivo, mesmo infeliz.", thought: "A mastigação secular de vidro moído. A abnegação dos próprios pulmões para inflar o balão murcho da heráldica de velhos mortos.", weights: { Maid: 3, Knight: 2, Heir: 1, Bard: -2 } },
                { dialogue: "Fujo silenciosamente. Deixo o espaço vago para que outro parente assuma, redistribuindo essa responsabilidade.", thought: "A fumaça furtiva noturna. Você abre mão do castelo e da guilhotina, doando o trono envenenado para o próximo trouxa na linha.", weights: { Rogue: 3, Knight: -2, Witch: -2 } },
                { dialogue: "Eu enrolo a faculdade por anos, reprovo de propósito. Deixo que o fracasso me tire da obrigação sem eu dizer não.", thought: "A sabotagem inerte e escorregadia. O parasita finge morte cerebral até que o hospedeiro o expulse do organismo com nojo da sua letargia.", weights: { Bard: 3, Heir: 1, Page: 1, Prince: -1 } },
                { dialogue: "Tento reformar a tradição por dentro, conversando e mostrando que a mudança é necessária para a sobrevivência da família.", thought: "O cirurgião do próprio clã. Aplicar quimioterapia diplomática no seio da família antes que as metástases do orgulho matem todos.", weights: { Sylph: 3, Seer: 2, Mage: 1, Prince: -1 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Você vê uma criança fazendo birra no supermercado porque quer um doce, gritando e se jogando no chão.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Médio", text: "Criança fazendo escândalo tira a sua paciência. Essa falta de controle tem que ser freada no meio do mercado sem enrolação." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Fácil", text: "Você até acha graça da criança. É pura vontade infantil agindo sem filtro; deixe o escândalo fluir." }
            ],
            options: [
                { dialogue: "Sinto uma irritação profunda. Essa exibição de desejo descontrolado e falta de disciplina precisa ser contida imediatamente.", thought: "O puritanismo histérico contra o id exposto. O berro livre da criatura pequena ameaça a coleira invisível que você mesmo usa apertada.", weights: { Prince: 3, Knight: 2, Sylph: -1, Bard: -1 } },
                { dialogue: "Acho graça ou ignoro. É a expressão pura de um desejo vital; crianças são assim, caóticas e cheias de querer.", thought: "A benevolência botânica. Uma árvore crescendo torta e barulhenta no cimento liso do mercado; a vida encontrando seu jeito estúpido.", weights: { Heir: 3, Mage: -1, Prince: -3 } },
                { dialogue: "Se fosse meu filho, eu compraria o doce só para ele calar a boca e eu poder continuar minha vida em paz.", thought: "O suborno anestésico tático. Enfiar açúcar guela abaixo do monstro para silenciar os alarmes e restaurar o estado de letargia muda.", weights: { Witch: 3, Rogue: 2, Page: -1, Knight: -2 } },
                { dialogue: "Eu nem olho. Crianças gritam, a vida é barulhenta. Sigo minhas compras alheio ao caos alheio.", thought: "A cegueira seletiva estoica. Você empurra o carrinho com a mesma paixão de um trator, surdo e mudo, isolado da poça de cuspe moral no chão.", weights: { Bard: 3, Rogue: 1, Heir: 1, Prince: -1 } },
                { dialogue: "Analiso os pais. Julgo a falta de autoridade deles e entendo exatamente onde a criação falhou.", thought: "O perito em estilhaços anímicos. O cérebro abandona o ruído do choro para processar os relatórios das falhas sociológicas dos responsáveis.", weights: { Mage: 3, Seer: 2, Heir: -1, Sylph: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Um amigo rico oferece pagar uma viagem luxuosa para você, mas sabe que ele jogará isso na sua cara depois.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Aproveite o dinheiro dele. Se ele quer pagar para se exibir, azar o dele; use o luxo e não gaste um centavo seu." },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Médio", text: "Presente de rico sempre vem com cobrança. Recuse a viagem, pois você não aceita ficar devendo a ninguém." }
            ],
            options: [
                { dialogue: "Aceito. Se ele quer pagar de superior, problema dele. Vou aproveitar o luxo e curtir a viagem sem gastar um centavo.", thought: "O pragmatismo parasita cínico. Deixe que o pavão grite na sacada, a cama macia é sua e a conta no fim da noite também é dele.", weights: { Thief: 3, Witch: 1, Knight: -2, Prince: -2 } },
                { dialogue: "Recuso. Prefiro pagar minha própria viagem barata do que ficar em dívida ou sob o domínio financeiro de alguém.", thought: "A cruzada masoquista do orgulho liso. Você vai dormir com as costas doendo no chão duro para poder dizer que não precisou do travesseiro dele.", weights: { Knight: 3, Prince: 2, Thief: -3, Heir: -2 } },
                { dialogue: "Convenço-o a convidar mais pessoas, diluindo a atenção dele e transformando a viagem em um evento de grupo.", thought: "O hacker de correntes sociológicas. Espalhar o veneno da dívida por várias bocas para que a sua cota do veneno caia para um nível potável.", weights: { Rogue: 3, Sylph: 1, Page: 1, Witch: -1 } },
                { dialogue: "Aceito, mas faço questão de 'pagar' de volta com favores e organização, servindo para equilibrar a balança.", thought: "A contabilidade de submissão do servo culpado. Lustrar os sapatos do benfeitor diariamente para comprar de volta a própria alma hipotecada.", weights: { Maid: 3, Page: 2, Seer: 1, Thief: -2 } },
                { dialogue: "Aceito e nem ligo quando ele jogar na cara. Ele pagou porque quis. Não devo nada emocionalmente.", thought: "O calo grosso da amnésia irônica. As palavras dele ricocheteiam na sua parede lisa como balas de borracha atiradas contra um rinoceronte.", weights: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Você joga um jogo competitivo e percebe que seu oponente é muito mais fraco e novato que você.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Não tem motivo para enrolar. É um jogo competitivo, e se ele é fraco, esmague as chances dele e vença rápido." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Médio", text: "Não seja carrasco. Tenha pena do novato, ensine ele a jogar e talvez deixe ele ganhar uma vez para não estragar a diversão." }
            ],
            options: [
                { dialogue: "Ganho rápido e sem enrolação. Não vejo graça em fingir. O jogo é para ganhar, e eu vou ganhar.", thought: "A carnificina estéril despida de remorso. Um cordeiro manco atravessou a linha de tiro e você puxou o gatilho entre os olhos dele sem piscar.", weights: { Prince: 3, Thief: 2, Sylph: -3, Page: -2 } },
                { dialogue: "Pego leve, permitindo que ele jogue e se divirta, talvez até deixo ele ganhar uma rodada para encorajar.", thought: "A falsa caridade da força hegemônica. A anestesia lúdica injetada na veia do perdedor para que ele não perceba que você é Deus no tabuleiro.", weights: { Sylph: 3, Rogue: 2, Heir: 1, Prince: -3 } },
                { dialogue: "Ensino as mecânicas enquanto jogamos, parando a partida para explicar o que ele fez de errado.", thought: "O missionário arrogante da cartilha técnica. A partida para no meio e você enfia o manual do jogo na garganta dele até que ele agradeça.", weights: { Seer: 3, Mage: 2, Knight: -1, Witch: -1 } },
                { dialogue: "Começo a jogar de qualquer jeito. Se eu perder por brincadeira, não importa, o jogo já estava chato mesmo.", thought: "O niilismo estético na ponta dos dedos. A falta de desafio mata o seu coração batendo; perder para o abismo vira piada interna vazia.", weights: { Bard: 3, Heir: 1, Mage: 1, Prince: -2 } },
                { dialogue: "Brinco com ele, criando situações absurdas no jogo para ver como ele reage, testando os limites do sistema.", thought: "O cientista louco sadomasoquista. Transformar a presa indefesa num rato de laboratório só para ver se a roda de metal do jogo guincha.", weights: { Witch: 3, Bard: 1, Mage: 1, Knight: -2 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Você e seus amigos vão dividir uma pizza. O último pedaço, o mais recheado, está sobrando. Ninguém pega.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "A pizza está ali moscando. Ninguém pegou porque tem vergonha? Você pega e come sem peso na consciência." },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "O último pedaço sobrou e você não se importa de passar adiante. Dê para a pessoa que você notou que ainda está com fome." }
            ],
            options: [
                { dialogue: "Eu pego e como. Se ninguém pegou até agora, é porque não queriam tanto assim. Não vou passar vontade.", thought: "A fome fala mais alto. Se ninguém quis o pedaço por educação, você não vê problema em matar a sua vontade.", weights: { Thief: 3, Witch: 2, Page: -1, Rogue: -3 } },
                { dialogue: "Ofereço o pedaço para o amigo que comeu menos. Sinto prazer em ver o outro satisfeito.", thought: "Ver a pessoa comendo o que sobrou te traz satisfação genuína; você abdica do pedaço só para agradá-la.", weights: { Rogue: 3, Sylph: 2, Maid: 1, Thief: -3 } },
                { dialogue: "Divido o pedaço milimetricamente em partes iguais. A distribuição justa evita conflito.", thought: "Justiça milimétrica. Cortar o pedaço e dar partes iguais é a única forma de garantir que ninguém fique com ressentimento.", weights: { Seer: 3, Mage: 2, Knight: 1, Bard: -2 } },
                { dialogue: "Deixo o pedaço esfriar e sobrar. Prefiro o desperdício a ter que lidar com a disputa social por comida.", thought: "A disputa não vale a pena. Para não criar conflito ou climão na mesa, você prefere abrir mão da comida e ignorar o assunto.", weights: { Prince: 3, Heir: -1, Witch: -2 } },
                { dialogue: "Eu espero alguém pegar. Se apodrecer lá, apodreceu. Não vou ser o primeiro nem o último a tocar.", thought: "Você não se estressa com comida. Se o pedaço sobrou, você não vai brigar por ele e prefere só assistir à indecisão deles.", weights: { Bard: 3, Heir: 2, Page: 1, Prince: -1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você está com uma dor de cabeça chata, mas não insuportável. Como lida com a medicação?",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Médio", text: "Dor de cabeça te trava. Tome logo o analgésico e corte o problema pela raiz para você poder funcionar 100%." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Ficar dependendo de remédio é uma fraqueza. Agarre-se à dor e acredite que o corpo vai consertar isso sozinho." }
            ],
            options: [
                { dialogue: "Tomo o remédio na hora. Não tenho paciência para dor se existe solução fácil. Quero estar 100% de novo.", thought: "A dor é uma falha inaceitável. O seu foco é consertar o corpo na mesma hora para conseguir voltar a trabalhar e render.", weights: { Witch: 3, Thief: 2, Prince: -1, Bard: -1 } },
                { dialogue: "Evito tomar. Acredito que o corpo deve se curar sozinho ou que o remédio é uma muleta desnecessária.", thought: "Remédios são um atalho fraco. Você confia que forçar o seu corpo a aguentar e processar a dor sozinho vai te deixar mais forte.", weights: { Prince: 3, Seer: 2, Mage: 1, Sylph: -2 } },
                { dialogue: "Reclamo da dor para alguém, esperando que cuidem de mim ou me tragam um copo d'água e o remédio.", thought: "Ficar doente tem sua utilidade. Você usa a dor de cabeça como desculpa para receber o carinho e o serviço das outras pessoas.", weights: { Page: 3, Thief: -1, Maid: -3 } },
                { dialogue: "Tomo qualquer coisa que tiver na gaveta sem nem ler direito. Se passar, passou; se não, paciência.", thought: "Você não se importa muito. Toma o que tiver na frente só pra ver se resolve rápido, sem ler a bula ou pensar nas consequências.", weights: { Bard: 3, Rogue: 1, Heir: 1, Seer: -3 } },
                { dialogue: "Ignoro a dor e continuo fazendo minhas tarefas. Uso a dor como lembrete de que estou vivo e ocupado.", thought: "Você não para por besteira. A dor física é ignorada completamente; as tarefas do dia sempre vão ser a sua prioridade.", weights: { Knight: 3, Maid: 2, Bard: -2, Heir: -2 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você acorda com uma energia e disposição incomuns, sentindo-se invencível. O que faz com esse dia?",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Fácil", text: "Você acordou pilhado. Corra para criar projetos, limpe tudo e gaste essa energia extra colocando as tarefas em dia." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Médio", text: "Aproveite o gás. Nada de focar em obrigações agora, use essa energia toda apenas para existir em paz." }
            ],
            options: [
                { dialogue: "Inicio projetos novos, limpo a casa e corro. Gasto essa energia criando, pois desperdício é pecado.", thought: "A energia te transforma numa máquina de fazer coisas. Você preenche cada segundo do seu dia com limpeza e tarefas para não desperdiçar o fôlego.", weights: { Maid: 3, Knight: 2, Sylph: 1, Bard: -2 } },
                { dialogue: "Foco em mim. Uso essa energia para resolver meus problemas e conseguir o que quero das pessoas.", thought: "É um ótimo dia para lucrar. Toda essa energia extra é canalizada para você resolver os seus interesses e sair em vantagem nas discussões.", weights: { Thief: 3, Witch: 2, Prince: -1, Page: -1 } },
                { dialogue: "Apenas 'sou'. Deixo o dia me levar, flutuando através dos eventos com a certeza de que nada pode me atingir.", thought: "O dia é perfeito demais para pensar em problemas. Você se deixa levar pelo humor e aproveita o tempo só curtindo a própria paz.", weights: { Heir: 3, Mage: -1, Knight: -2 } },
                { dialogue: "Fico desconfiado. Esse excesso de energia não é normal; tento entender a causa antes de agir impulsivamente.", thought: "Energia demais parece suspeito. Você não age no impulso; prefere se analisar para entender por que está tão agitado do nada.", weights: { Mage: 3, Seer: 2, Heir: -2, Thief: -1 } },
                { dialogue: "Gasto tudo em diversão inútil. Saio, bebo, gasto dinheiro. Se a vida me deu energia, é para eu queimar.", thought: "Extravasar é a única saída. Você joga tudo para o alto e foca em gastar essa energia com festas, distrações ou coisas impulsivas.", weights: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } }
            ]
        }
    ],
	"Blood": [
        { 
            id: 1,
            scenario: "1. Um grupo social ou comunidade que você adora está morrendo lentamente. O silêncio é constrangedor.",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "O grupo não pode acabar. Mande mensagem, puxe papo e não deixe o silêncio matar a amizade que vocês tinham." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Já deu o que tinha que dar. Pare de forçar interação morta, encerre logo o grupo e oficialize o fim para todos." }
            ],
            options: [
                { dialogue: "Tento reviver o clima incansavelmente. Mando mensagens, puxo assuntos, recusando a deixar o vínculo morrer.", thought: "Você se recusa a aceitar o fim. O silêncio do grupo te incomoda, então você tenta forçar a interação para manter a conexão viva.", weights: { Sylph: 3, Maid: 2, Heir: 1, Prince: -3 } },
                { dialogue: "Identifico quem ainda vale a pena e crio um grupo paralelo só com os favoritos. O barco afunda, mas salvo a tripulação.", thought: "Pragmatismo social. O grupo todo não tem salvação, então você foca apenas nas pessoas com quem realmente se importa.", weights: { Thief: 3, Witch: 2, Mage: 1, Sylph: -2 } },
                { dialogue: "Chamo a responsabilidade e confronto o pessoal. Ou a gente se compromete a manter isso vivo, ou admite que acabou.", thought: "Chega de enrolação. Você confronta o grupo exigindo uma postura clara: ou todos colaboram, ou acabam com isso de uma vez.", weights: { Knight: 3, Page: 1, Bard: -2 } },
                { dialogue: "Oficializo o fim. Saio do grupo avisando o motivo ou excluo o servidor. Prefiro o tiro de misericórdia à agonia.", thought: "Cortar o mal pela raiz. Para evitar o desgaste de ver o grupo definhar, você toma a iniciativa de encerrar tudo oficialmente.", weights: { Prince: 3, Time: 1, Doom: 1, Maid: -3 } },
                { dialogue: "Simplesmente paro de responder. Deixo cair no esquecimento. Se ninguém mais fala, não serei eu a impedir o silêncio.", thought: "Falta de interesse passiva. Você simplesmente deixa de investir energia e observa o vínculo se desfazer naturalmente.", weights: { Bard: 3, Rogue: 2, Void: 1, Knight: -2 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Você é convidado para um evento de família importante, mas está exausto e odeia o ambiente.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Você vai odiar cada segundo, mas é a sua família. Faça o sacrifício de ir e colocar um sorriso falso no rosto." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Não vá. Se o ambiente vai sugar sua energia e te deixar puto, mande um 'não' curto e corte essa dor de cabeça." }
            ],
            options: [
                { dialogue: "Vou e coloco o meu melhor sorriso. Minha presença é um dever cívico para manter a harmonia familiar.", thought: "A obrigação familiar fala mais alto. Você engole a exaustão e comparece para não causar problemas ou decepcionar os outros.", weights: { Maid: 3, Heir: 2, Knight: 1, Prince: -3 } },
                { dialogue: "Recuso o convite categoricamente. Se o ambiente me faz mal, não há motivo para me desgastar.", thought: "Seu bem-estar em primeiro lugar. Se o ambiente é ruim para você, não faz sentido ir apenas para cumprir tabela.", weights: { Prince: 3, Thief: 2, Witch: 1, Rogue: -1 } },
                { dialogue: "Digo que vou, mas 'esqueço' ou durmo na hora. Deixo a expectativa morrer sozinha sem confronto.", thought: "Evitar o conflito direto. Em vez de dizer 'não' e brigar, você finge esquecimento para fugir do compromisso sem estresse.", weights: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
                { dialogue: "Vou, mas passo o tempo todo observando as tensões entre os parentes, extraindo informações úteis.", thought: "Você vai, mas como observador. Analisar a dinâmica da família e as tensões te distrai do tédio do evento.", weights: { Seer: 3, Mage: 1, Sylph: -2 } },
                { dialogue: "Vou apenas para prestar apoio a alguém específico, agindo como amortecedor emocional para essa pessoa.", thought: "Você vai pelos outros, não por si. O seu foco é servir de apoio emocional para a pessoa que você sabe que vai precisar.", weights: { Rogue: 3, Page: 2, Sylph: 1, Witch: -1 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Um amigo insubstituível faleceu. O funeral passou e agora resta apenas o silêncio. Como lida com o buraco?",
            voices: [
                { aspect: "Knight", difficulty: 0, check: "Ativo: Médio", text: "Você vira o memorial vivo dele. Passe a proteger rigorosamente os pertences e defenda a história da pessoa com quem tentar falar dela." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Manter lembranças machuca demais. Apague tudo, corte as coisas da pessoa e evite lembrar para não sangrar." }
            ],
            options: [
                { dialogue: "Me torno o 'guardião oficial' da memória dele. Corrijo quem fala errado e guardo seus pertences.", thought: "Você assume a responsabilidade de manter o legado da pessoa intacto. A memória dela passa a ser um dever seu.", weights: { Knight: 3, Thief: 2, Maid: 2, Sylph: 1, Bard: -2 } },
                { dialogue: "Pego-me usando as gírias e hábitos dele. Permito que ele continue vivendo através das minhas ações.", thought: "Absorver características de quem se foi é a sua forma de lidar com a perda, mantendo a pessoa presente no seu dia a dia.", weights: { Heir: 3, Rogue: 2, Witch: 1 } },
                { dialogue: "Preciso bloquear memórias e evitar lugares que me lembrem dele. O vínculo dói demais, então o corto.", thought: "A dor é grande demais para ser processada agora. Você tenta apagar os gatilhos para se proteger do sofrimento.", weights: { Prince: 3, Mage: 2, Seer: 1 } },
                { dialogue: "Deixo a memória desbotar. Não luto para lembrar nem para esquecer. Se o vínculo desfizer, é natural.", thought: "Você não tenta forçar a memória nem evitar o esquecimento. Aceita que o tempo afasta as lembranças naturalmente.", weights: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
                { dialogue: "Tento preencher o vazio dedicando-me a terminar o que ele começou, honrando o legado pelo esforço.", thought: "Você lida com o luto através da ação. Concluir o que a pessoa deixou inacabado é a sua maneira de homenageá-la.", weights: { Page: 3, Maid: 2, Seer: 1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Você sente uma desconexão física e emocional com as pessoas. Parece que todos têm um 'manual' que você não recebeu.",
            voices: [
                { aspect: "Mage", difficulty: 0, check: "Passivo: Difícil", text: "Você não entende gente. Fique apenas analisando os outros e caçando o 'padrão de manual social' que todo mundo finge saber." },
                { aspect: "Page", difficulty: 2, check: "Ativo: Médio", text: "A pressão te obriga a criar uma persona de mentira. Atue muito bem para eles não perceberem que você não sabe o que está fazendo." }
            ],
            options: [
                { dialogue: "Eu estudo as interações obsessivamente. Analiso padrões para entender a mecânica natural deles.", thought: "As relações parecem um quebra-cabeça. Você analisa o comportamento dos outros para aprender como se portar socialmente.", weights: { Mage: 3, Seer: 2, Thief: 2 } },
                { dialogue: "Eu crio uma 'persona' social. Atuo conforme o correto para que não notem que não sei como agir.", thought: "Você mascara a sua desconexão criando um personagem. Age como esperam que você aja para se infiltrar sem chamar atenção.", weights: { Knight: 3, Page: 2, Witch: 1 } },
                { dialogue: "Eu paro de tentar. Se não me conecto, fico na minha. Deixo as relações acontecerem ou morrerem.", thought: "Você aceita a sua falta de conexão. Não força interações e fica confortável na sua própria bolha, sem se incomodar.", weights: { Bard: 3, Rogue: 2, Heir: 1, Maid: -2 } },
                { dialogue: "Eu aceito minha posição de 'outsider' e deixo que as pessoas venham até mim nos meus termos.", thought: "Você não corre atrás de ninguém. Mantém a sua postura isolada e deixa que as pessoas façam o esforço de se aproximar de você.", weights: { Heir: 3, Rogue: 2, Mage: 1 } },
                { dialogue: "Tento me tornar indispensável através de favores práticos. Se não conecto emocionalmente, conecto pela utilidade.", thought: "Você compensa a desconexão emocional sendo útil. Fazer favores garante o seu lugar no grupo através da praticidade.", weights: { Maid: 3, Sylph: 2, Knight: 1 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. Sua amizade mais antiga está acabando. Houve uma briga feia e o silêncio é ensurdecedor.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Essa amizade não vai acabar assim. Faça uma cena, não deixe a pessoa ir embora e agarre-se a ela com tudo." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Médio", text: "Rompeu de vez. Apague contatos, evite mensagens e deixe a pessoa na escuridão; siga em frente e feche a ponte." }
            ],
            options: [
                { dialogue: "Não aceito o fim. Sinto fúria e pânico; a pessoa é 'minha' e vou fazer o impossível para trazê-la, nem que seja na marra.", thought: "O medo de perder a pessoa te faz agir por impulso. Você tenta forçar a amizade a continuar, não aceitando o fim.", weights: { Thief: 3, Witch: 2, Rogue: -3 } },
                { dialogue: "Queimo a ponte. Se acabou, que acabe de vez. Deleto tudo e bloqueio o contato para seguir em frente.", thought: "Fim é fim. Você corta todos os laços e apaga a pessoa da sua vida para não ficar preso ao que já acabou.", weights: { Prince: 3, Time: 2, Sylph: -3 } },
                { dialogue: "Entro em desespero para consertar. Peço desculpas, prometo mudar e tento 'curar' a ferida a qualquer custo.", thought: "A dependência emocional fala mais alto. Você cede e tenta consertar tudo porque não sabe lidar com a perda desse vínculo.", weights: { Sylph: 3, Maid: 2, Heir: 2, Prince: -2 } },
                { dialogue: "Finjo que estou bem e racionalizo que 'pessoas vêm e vão', escondendo o quanto isso me afetou.", thought: "Você finge que não dói. Usa a racionalidade para mascarar o sofrimento e tentar se convencer de que já superou.", weights: { Knight: 3, Page: -1 } },
                { dialogue: "Aceito a derrota e me isolo. Falhei com a pessoa e ela estará melhor sem a minha bagunça, então permito que vá.", thought: "Você aceita a culpa e se afasta. Acredita que a pessoa ficará melhor sem você e se isola para não causar mais problemas.", weights: { Page: 3, Rogue: 2, Thief: -3 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Dois amigos terminam um namoro de forma catastrófica. Ambos exigem que você escolha um lado.",
            voices: [
                { aspect: "Sylph", difficulty: 0, check: "Passivo: Médio", text: "É um incêndio, mas tente intervir. Medie a briga sem escolher um lado só para manter a ponte viva entre todos eles." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Fugir do drama deles é a única saída. Mande ambos pastarem e quebre os vínculos para não sobrar sobra dessa confusão." }
            ],
            options: [
                { dialogue: "Recuso a escolher. Tento manter a ponte entre os dois, atuando como mediador, mesmo que ambos fiquem com raiva.", thought: "Você tenta ser a ponte. Não escolhe lados porque não quer perder ninguém e tenta manter a harmonia entre eles.", weights: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
                { dialogue: "Escolho o lado com quem tenho mais afinidade e corto o outro sem piedade. Lealdade é sobre escolha.", thought: "Você não fica em cima do muro. Avalia de quem você gosta mais e corta relações com a outra pessoa sem hesitar.", weights: { Thief: 3, Knight: 2, Witch: 1, Rogue: -3 } },
                { dialogue: "Continuo falando com os dois e finjo que nada aconteceu. Ignoro o drama e deixo lidarem com minha neutralidade.", thought: "O drama deles não te afeta. Você ignora a briga e continua interagindo com ambos como se nada tivesse acontecido.", weights: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
                { dialogue: "Saio de perto dos dois. A instabilidade emocional deles é contagiosa e prefiro quebrar o vínculo com ambos.", thought: "A confusão deles te esgota. Para preservar a sua paz, você prefere se afastar de ambos e evitar a toxicidade.", weights: { Prince: 3, Mage: 1, Maid: -2 } },
                { dialogue: "Absorvo as reclamações de ambos, servindo de lixeira emocional para os dois lados, sem nunca dar opinião.", thought: "Você vira o ouvinte dos dois. Não se posiciona, mas absorve o desabafo de ambos para não desagradar ninguém.", weights: { Rogue: 3, Page: 2, Maid: 1, Thief: -2 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. Você está sobrecarregado, mas um grupo que depende de você exige um sacrifício de tempo e saúde.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Eles dependem de você, então engula o cansaço. Sacrifique o que for para entregar e ser útil ao grupo." },
                { aspect: "Prince", difficulty: 2, check: "Ativo: Fácil", text: "Cancele a ajuda e corte o mal pela raiz. Diga que não tem nada a ver com você se o grupo deles parar." }
            ],
            options: [
                { dialogue: "Eu aceito, mas cobro caro depois. Ninguém questiona minha autoridade ou nega favores após esse sacrifício.", thought: "Você ajuda agora pensando no futuro. Esse sacrifício será cobrado como um favor gigante quando você precisar deles.", weights: { Thief: 3, Witch: 2, Mage: 1, Rogue: -3 } },
                { dialogue: "Digo não. Se não conseguem sobreviver sem me drenar, o problema é deles. Corto essa dependência.", thought: "Você prioriza o seu bem-estar. Se o grupo não tem empatia pela sua exaustão, você corta a ajuda sem remorso.", weights: { Prince: 3, Thief: 1, Maid: -3 } },
                { dialogue: "Digo que vou ajudar, mas procrastino ou faço de qualquer jeito. Minha inércia acaba forçando-os a se virarem.", thought: "Você não sabe dizer não, mas também não quer fazer. A lentidão e a má vontade viram a sua forma de se esquivar da tarefa.", weights: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
                { dialogue: "Ignoro meu cansaço e faço o que precisa ser feito. Se eu falhar, o sistema para, e isso é inadmissível.", thought: "O senso de dever é maior que o cansaço. Você assume a carga porque não admite que o grupo falhe por sua causa.", weights: { Maid: 3, Knight: 2, Sylph: 1, Prince: -3 } },
                { dialogue: "Aceito o fardo, mas tento delegar partes dele para outros, redistribuindo o peso.", thought: "Você aceita a responsabilidade, mas não a carga inteira. Tenta dividir o trabalho rapidamente para não ser esmagado.", weights: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Você precisa usar um uniforme ridículo para o trabalho/escola. Todos usam, mas se sente humilhado.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Médio", text: "Você não suporta fardas. Dê seu toque no uniforme, desrespeitando o padrão ridículo para provar que você não é só uma engrenagem." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Fácil", text: "Vista o uniforme sem ligar. Use amarrotado e de forma negligente, destruindo o significado da regra neles próprios." }
            ],
            options: [
                { dialogue: "Customizo o uniforme, alterando detalhes para recuperar minha identidade. Faço parte do grupo, mas nos meus termos.", thought: "Você precisa imprimir sua identidade. Modificar o uniforme é a sua forma de não se sentir apenas mais uma peça do sistema.", weights: { Witch: 3, Thief: 2, Knight: 1, Maid: -2 } },
                { dialogue: "Uso o uniforme com total dedicação. Ele é o símbolo do meu papel ali, e eu visto a camisa (literalmente).", thought: "O uniforme é apenas um símbolo da sua função. Você o veste com respeito, entendendo que ele representa o seu papel ali.", weights: { Maid: 3, Heir: 2, Page: 1, Prince: -3 } },
                { dialogue: "Recuso-me a usar. Prefiro ser punido ou demitido a me submeter a essa homogeneização forçada.", thought: "A sua individualidade não é negociável. Você prefere arcar com punições a vestir algo que o descaracterize completamente.", weights: { Prince: 3, Mage: 1, Heir: -2 } },
                { dialogue: "Uso de qualquer jeito, amassado ou manchado. Deixo o símbolo da ordem se degradar no meu corpo.", thought: "Você desdenha da regra secretamente. Usa o uniforme, mas de forma desleixada para demonstrar o seu desprezo pela obrigação.", weights: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
                { dialogue: "Sinto-me apagado. O uniforme mata quem eu sou e me torna apenas mais um número na engrenagem.", thought: "O uniforme te anula. A padronização te afeta emocionalmente, fazendo com que você sinta que perdeu a sua singularidade no grupo.", weights: { Rogue: 3, Mage: 2, Sylph: -1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você descobre que seus amigos próximos criaram um grupo sem você para planejar algo.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Médio", text: "O grupo isolado é uma afronta pessoal. Tire satisfação, brigue logo e saia batendo a porta." },
                { aspect: "Page", difficulty: 2, check: "Passivo: Difícil", text: "Ficar de fora destrói a sua segurança. Você fica desesperado por respostas, tentando provar que merecia a presença ali." }
            ],
            options: [
                { dialogue: "Sinto ansiedade paralisante. Fico obcecado em descobrir o que estão falando e como posso entrar.", thought: "Ser excluído aciona suas inseguranças. Você fica obcecado em descobrir o motivo e tenta a todo custo ser inserido novamente.", weights: { Page: 3, Thief: 2, Witch: 1, Rogue: -2 } },
                { dialogue: "Confronto o grupo com agressividade. Se a lealdade deles não é verdadeira, encerro esse vínculo.", thought: "Você cobra lealdade absoluta. Se tentaram te excluir, você confronta a atitude deles imediatamente e está pronto para romper a amizade.", weights: { Prince: 3, Knight: 2, Sylph: -3, Maid: -2 } },
                { dialogue: "Nem ligo. Menos notificação no celular. Se não me chamaram, é menos obrigação social.", thought: "Você vê o lado bom. Menos interação significa menos obrigação social, então ser deixado de fora é quase um alívio.", weights: { Bard: 3, Heir: 2, Rogue: 1, Knight: -2 } },
                { dialogue: "Aceito a exclusão em silêncio, sentindo que talvez eu seja o peso morto que precisavam deixar.", thought: "Você internaliza a exclusão como uma falha sua. Acredita que não é bom o suficiente para o grupo e aceita ficar de fora em silêncio.", weights: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } },
                { dialogue: "Analiso friamente o comportamento deles. Se sentiram necessidade de me excluir, o grupo falhou.", thought: "Você analisa os motivos deles sem se emocionar. Se eles precisam agir pelas suas costas, o grupo já demonstrou uma falha de caráter.", weights: { Seer: 3, Mage: 2, Knight: -1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. O grupo em que você está inserido está sem rumo e prestes a se fragmentar por falta de liderança.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Ninguém lidera? Pegue o comando para si na hora. Coloque a visão em ordem e mande no grupo para não perder o trabalho." },
                { aspect: "Bard", difficulty: 2, check: "Passivo: Médio", text: "Assista à queda passivamente. A desestruturação deles por falta de rumo vai te divertir imensamente e não tem por que intervir." }
            ],
            options: [
                { dialogue: "Assumo o comando à força. Unifico o grupo sob minha visão para evitar o colapso.", thought: "Você preenche o vácuo de poder na hora. Se eles não sabem o que fazer, você assume o comando e organiza o grupo para não afundar.", weights: { Thief: 3, Witch: 2, Prince: 1, Rogue: -3 } },
                { dialogue: "Coloco-me à disposição para fazer o trabalho pesado. Quero que se sintam seguros através do meu serviço.", thought: "Você foca em apoiar. Oferece o seu esforço braçal para estabilizar as coisas e dar segurança a quem está perdido no grupo.", weights: { Knight: 3, Page: 2, Maid: 1, Seer: -1 } },
                { dialogue: "Assisto de camarote. É divertido ver a estrutura social desmoronar quando ninguém segura as pontas.", thought: "Você não se importa em salvar a estrutura. Prefere ficar de fora apenas observando e se divertindo com a desorganização natural deles.", weights: { Bard: 3, Mage: 1, Rogue: 1, Sylph: -2 } },
                { dialogue: "Tento redistribuir tarefas. Movo responsabilidades para quem está ocioso, buscando equilíbrio sem ser 'chefe'.", thought: "Você organiza sem ser autoritário. Distribui tarefas discretamente para colocar o grupo em ordem sem assumir oficialmente o papel de líder.", weights: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -3 } },
                { dialogue: "Deixo que se fragmente. Se o grupo não se mantém unido, é fraco e corto meu vínculo com o fracasso.", thought: "Você corta perdas. Se o grupo não tem competência para se manter unido, você não vai perder o seu tempo tentando consertar os outros.", weights: { Prince: 3, Seer: 1, Maid: -3 } }
            ]
        }
    ],
    "Breath": [
        { 
            id: 1,
            scenario: "1. Te oferecem uma oportunidade financeira vitalícia irrecusável, mas que ditará sua rotina e localidade sem margem para improviso para sempre.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Médio", text: "Dinheiro sem liberdade é prisão perpétua. Rejeite o emprego, o conforto não vai curar o desespero de você estar amarrado." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Fácil", text: "Suma no ar. Fuja da obrigação sem nem precisar bater de frente, a sua recusa a contratos engessados sempre fala por si." }
            ],
            options: [
                { dialogue: "Aceito as vantagens, mas começo a me esquivar das amarras e explorar ativamente as falhas do sistema pelas costas deles.", thought: "Aproveitar as brechas. Você suga os benefícios do sistema de forma silenciosa e continua agindo com liberdade nas sombras.", weights: { Thief: 3, Rogue: 2, Knight: -1, Page: -2 } },
                { dialogue: "Assumo a posição engessada de forma utilitária. Transformo a obrigação num escudo para financiar minha liberdade real no tempo livre.", thought: "O sacrifício prático. Aceitar a jaula temporária apenas para bancar a sua verdadeira liberdade e interesses fora dali.", weights: { Knight: 3, Maid: 2, Rogue: -1, Page: -2 } },
                { dialogue: "Recuso abertamente a oferta e critico quem a aceita. Alerto todos que trocar a adaptabilidade por conforto é um erro fatal.", thought: "Alerte os outros. Você não aceita se prender e não quer ver seus amigos caindo na armadilha de trocar liberdade por conforto.", weights: { Sylph: 3, Seer: 2, Bard: -1, Thief: -2 } },
                { dialogue: "Aceito temporariamente para testar os meus limites. Utilizo a exaustão como laboratório prático para entender a anatomia da estagnação.", thought: "Experimentação. Você aceita e testa a rotina rígida só para entender como ela afeta a mente, e depois planeja sair fora.", weights: { Mage: 3, Seer: 2, Heir: -2, Sylph: -1 } },
                { dialogue: "Simplesmente evaporo e vou fazer outra coisa. A minha recusa instintiva faz-me mudar de rumo, deixando a gaiola para trás rindo.", thought: "Aversão à rotina. O seu instinto manda fugir de qualquer contrato que te prenda antes mesmo de ter que dar explicações.", weights: { Heir: 3, Bard: 2, Knight: -2, Page: -1 } }
            ]
        },
        { 
            id: 2,
            scenario: "2. Um projeto que você iniciou empolgou várias pessoas. A sua vontade sumiu completamente, mas eles dependem de você para a atividade continuar rodando amanhã cedo.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "Termine de vez. O tesão inicial pelo grupo foi embora, pare de carregar o peso morto da vontade inútil deles.", weights: {} },
                { aspect: "Rogue", difficulty: 2, check: "Passivo: Médio", text: "Arrume um trouxa. Entregue os abacaxis da coordenação e suma rápido enquanto eles ainda ficam satisfeitos com o status de liderança.", weights: {} }
            ],
            options: [
                { dialogue: "Encerro a atividade de uma vez por todas. É preferível frustrá-los agora do que arrastar uma obrigação que não tem mais energia genuína.", thought: "Cortar o mal pela raiz. É melhor acabar logo com o projeto de vez do que ficar enrolando os outros sem vontade nenhuma.", weights: { Prince: 3, Witch: 2, Heir: -2, Page: -1 } },
                { dialogue: "Encontro a pessoa mais engajada e transfiro a administração para ela. Saio de fininho enquanto ela está ocupada e lisonjeada com o novo cargo.", thought: "Delegação tática. Você passa a coordenação para quem ainda está animado e sai de fininho sem causar estresse ou ruptura.", weights: { Rogue: 3, Thief: 2, Knight: -2, Maid: -1 } },
                { dialogue: "Continuo e finjo que estou engajado para não estragar a diversão. Tenho dificuldade em reivindicar a liberdade de ir embora e magoá-los tristes cegos surdos moles.", thought: "A culpa te prende. Você continua fingindo interesse no projeto só para não decepcionar os amigos, mesmo estando exausto da atividade.", weights: { Page: 3, Knight: 2, Prince: -2, Thief: -1 } },
                { dialogue: "Reúno o pessoal, explico que o formato atual já deu e reorganizo a dinâmica para que eles consigam caminhar sozinhos a partir de agora sem mim.", thought: "A transição justa. Você prepara o terreno para eles continuarem a dinâmica sozinhos e sai com a consciência limpa.", weights: { Sylph: 3, Seer: 2, Thief: -2, Prince: -1 } },
                { dialogue: "Diminuo o ritmo gradativamente. Não faço anúncio, apenas deixo a minha ausência fazer a atividade dissolver-se naturalmente no esquecimento letárgico liso frouxo cego surdo.", thought: "A saída orgânica. O interesse acabou, então você vai diminuindo o ritmo e sumindo devagar até pararem de cobrar a sua presença.", weights: { Bard: 3, Heir: 2, Sylph: -2, Knight: -1 } }
            ]
        },
        { 
            id: 3,
            scenario: "3. Um amigo de longa data sente-se trocado por novos horizontes e age de forma possessiva. Você gosta dele, mas não quer perder a sua liberdade.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Puxe a corda do ex-amigo que começou a amarrar. Dê bronca e corte a dependência sufocante para proteger sua própria liberdade em paz.", weights: {} },
                { aspect: "Knight", difficulty: 2, check: "Ativo: Médio", text: "Permita que ele limite seus passos para aliviar a tensão, sacrificando o que deveria ser liberdade por manter a ponte social ereta.", weights: {} }
            ],
            options: [
                { dialogue: "Corto a cobrança pela raiz de forma incisiva. Corto o acesso dele à minha vida até que ele aprenda a respeitar a minha autonomia irrestrita forte pura livre.", thought: "Cortar a dependência. Ninguém tem o direito de sufocar a sua vida cobrando atenção constante; você exige que respeitem seu espaço.", weights: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
                { dialogue: "Uso a distância como remédio forçado. Afasto-me para obrigar o amigo a desenvolver independência, pois ceder só piora a dependência tóxica burra boba fraca rasteira doente.", thought: "O afastamento educativo. Você dá um gelo forçado na pessoa para obrigá-la a lidar com a própria carência e parar com o ciúme tóxico.", weights: { Sylph: 3, Seer: 2, Thief: -2, Bard: -1 } },
                { dialogue: "Me esforço para equilibrar. Continuo ajudando, relevando a toxicidade na esperança de mostrar que não o troquei, sufocando a minha própria liberdade no processo exaustivo inútil rasteiro bobo.", thought: "Você tenta equilibrar tudo para não machucá-lo, mesmo sabendo que a cobrança dele é injusta e limita a sua liberdade.", weights: { Page: 3, Knight: 2, Prince: -2, Thief: -1 } },
                { dialogue: "Deixo ele falando sozinho e monopolizo essa liberdade para mim. Ignoro completamente o drama e o ciúme, focando no meu próprio movimento solto voador alado livre mágico limpo inerte frio.", thought: "O seu espaço e a sua liberdade vêm primeiro. Você ignora a possessividade dele e foca apenas em curtir a sua nova fase.", weights: { Thief: 3, Rogue: 2, Page: -2, Knight: -1 } },
                { dialogue: "Paro de render satisfações. A recusa passiva e constante em alimentar essa paranoia faz com que a possessividade dele perca a força por desgaste orgânico frouxo lento limpo morno inútil e seco de poeira fria morta pálida mole mansa.", thought: "Não alimentar a paranoia é a melhor tática. Você para de dar satisfação até ele perceber que a cobrança não funciona com você.", weights: { Bard: 3, Heir: 2, Prince: -2, Maid: -1 } }
            ]
        },
        { 
            id: 4,
            scenario: "4. Você está imerso num interesse pessoal, mas o seu grupo entra numa crise cheia de burocracias e problemas práticos que exigem atenção urgente da sua parte para que a tribo suja sobreviva.",
            voices: [
                { aspect: "Maid", difficulty: 0, check: "Ativo: Médio", text: "Suspenda seu lazer agora mesmo. Faça a barreira burocrática pela utilidade e proteja seu espaço apenas servindo de braço forte prático do grupo.", weights: {} },
                { aspect: "Witch", difficulty: 2, check: "Ativo: Difícil", text: "Acabe com as leis chatas e burocráticas metendo o pé na porta. Apenas intervenha brutalmente rápido na confusão para abrir caminho pro seu interesse.", weights: {} }
            ],
            options: [
                { dialogue: "Irrito-me. Intervenho forçando o grupo a resolver a situação da forma mais rápida e brutal possível, apenas para que o caminho volte a ficar livre para os meus interesses soltos puros grandes falsos quentes vivos.", thought: "A burocracia do grupo te irrita por atrapalhar o seu projeto. Você intervém de forma dura apenas para desobstruir o seu próprio caminho.", weights: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
                { dialogue: "Uso a falta de apego emocional para resolver a parte burocrática mecanicamente. Funciono como escudo prático para proteger a minha paixão livre leve fresca pálida pura dourada fria.", thought: "Você resolve o problema chato de forma mecânica. Ajuda o grupo rapidamente apenas para proteger o tempo que precisa para os seus interesses.", weights: { Knight: 3, Maid: 2, Rogue: -2, Heir: -1 } },
                { dialogue: "Pauso o que estou fazendo apenas o suficiente para analisar a crise. Aponto a direção e recuso sujar as mãos na execução do problema burocrático nojento frouxo bobo inútil tolo rasteiro mole frouxo cego burro lento.", thought: "Você aponta o erro logístico, mas não se envolve. Prefere voltar ao seu projeto a perder tempo executando o trabalho burocrático deles.", weights: { Seer: 3, Mage: 2, Bard: -1, Page: -2 } },
                { dialogue: "Capitalizo no caos. Aproveito que estão distraídos para monopolizar o espaço e os recursos para o meu projeto livre puro forte ágil limpo frouxo nojento belo veloz.", thought: "O caos deles é a sua oportunidade. Você aproveita a distração geral para conseguir o espaço e os recursos que precisava para si mesmo.", weights: { Thief: 3, Rogue: 2, Knight: -1, Maid: -2 } },
                { dialogue: "Continuo flutuando. A alienação me protege do desespero deles, e sigo o meu rumo como se a crise não existisse nojenta barulhenta feia tola boba cega dura fraca falsa suja.", thought: "O drama deles não te atinge. Você se blinda na sua própria bolha e continua o seu trabalho como se a crise do grupo não existisse.", weights: { Heir: 3, Bard: 2, Prince: -2, Knight: -1 } }
            ]
        },
        { 
            id: 5,
            scenario: "5. O seu grupo precisa tomar uma decisão urgente, mas ninguém chega a consenso e o tempo se esvai morto calado inútil mudo gago surdo frio falso limpo escorregadio no esgoto suado pálido burro de ratos.",
            voices: [
                { aspect: "Thief", difficulty: 0, check: "Ativo: Fácil", text: "Não aguarde indecisão, resolva para garantir os seus resultados. A inércia de opiniões deles já demorou e você fará com seu molde." },
                { aspect: "Sylph", difficulty: 2, check: "Passivo: Difícil", text: "Guie as peças. Sugira saídas pacíficas mediadoras entre todo o pessoal lento, até a decisão engasgada aparecer em grupo por si só." }
            ],
            options: [
                { dialogue: "Resolvo sozinho e faço do meu jeito. Melhor feito por mim do que estagnado por eles.", thought: "A indecisão deles te atrasa. Você toma a rédea, decide sozinho e executa, pois é mais eficiente do que esperar por eles.", weights: { Thief: 3, Mage: 2, Knight: 1, Sylph: -2 } },
                { dialogue: "Tomo a frente e aponto uma direção qualquer. O importante é sair do lugar, não importa para onde.", thought: "Ficar parado é pior do que errar. Você aponta qualquer caminho só para forçar o grupo a se mover e sair da estagnação.", weights: { Maid: 3, Witch: 2, Seer: 1, Bard: -2 } },
                { dialogue: "Largo mão. Se não se decidem, vou cuidar das minhas coisas e deixo o problema para lá frouxo bobo e solto liso rasteiro podre fofo morto gago inútil doente tolo.", thought: "Você não vai carregar o fardo da decisão por eles. Se não chegam a um acordo, você lava as mãos e vai cuidar da sua vida.", weights: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
                { dialogue: "Tento facilitar a conversa para que cada um ceda um pouco e o bloqueio se desfaça naturalmente.", thought: "A paciência de mediar. Você tenta desatar o nó da comunicação deles para que a decisão saia de forma conjunta e sem ressentimentos.", weights: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
                { dialogue: "Espero que alguém decida por mim. Minha opinião não vai mudar o impasse inútil sujo morto mudo.", thought: "Tomar a decisão exige uma energia que você não quer gastar. Você se omite e deixa que os outros escolham o destino do grupo.", weights: { Page: 3, Knight: 2, Bard: -1, Witch: -1 } }
            ]
        },
        { 
            id: 6,
            scenario: "6. Você está num local desconhecido, sem GPS e sem referências de onde está a saída.",
            voices: [
                { aspect: "Heir", difficulty: 0, check: "Passivo: Fácil", text: "É um privilégio não saber onde você está. Aceite ser consumido pelo acaso vagabundo de rodar atônito buscando descobrir algo novo sem mapas." },
                { aspect: "Mage", difficulty: 2, check: "Passivo: Médio", text: "Identifique a solução. Pare de dar asneiras soltas com o grupo que desiste rápido e simplesmente analise padrões matemáticos ou placas ocultas para se salvar com facilidade pragmática." }
            ],
            options: [
                { dialogue: "Acho ótimo. Adoro a sensação de não saber o que vem e exploro sem pressa de chegar.", thought: "Se perder é parte da aventura. Você não sente urgência em achar a saída e prefere explorar o ambiente desconhecido no seu tempo.", weights: { Heir: 3, Seer: 1, Sylph: 1, Knight: -3 } },
                { dialogue: "Fico nervoso, mas mantenho a pose. Ando como se soubesse o caminho para ninguém perceber.", thought: "O medo de parecer vulnerável. Você camufla o nervosismo com confiança artificial, recusando-se a demonstrar que está perdido.", weights: { Knight: 3, Page: 2, Prince: 1, Heir: -2 } },
                { dialogue: "Interajo com o ambiente e as pessoas, usando qualquer recurso para descobrir a rota fujona mansa.", thought: "A interação prática. Você usa a comunicação e as pessoas ao redor como ferramentas para descobrir a rota de forma rápida.", weights: { Witch: 3, Thief: 2, Mage: 1, Bard: -1 } },
                { dialogue: "Sento e aguardo. Eventualmente a situação se resolve ou alguém vai aparecer pra limpar a sujeira.", thought: "A espera passiva. Você não se estressa procurando a saída, confiando que a situação vai se resolver sozinha eventualmente.", weights: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } },
                { dialogue: "Observo padrões no trânsito e na arquitetura para deduzir logicamente onde a saída deve estar.", thought: "A dedução fria. Você ignora o nervosismo e usa a lógica para analisar o ambiente e encontrar a rota correta.", weights: { Mage: 3, Seer: 2, Thief: 1, Heir: -1 } }
            ]
        },
        { 
            id: 7,
            scenario: "7. A situação atingiu um platô seguro e pacífico, porém totalmente estático. Nenhum desafio novo, apenas calmaria inerte calada suja pálida mole morna morta frouxa.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Médio", text: "O conforto calmo é estagnante e irrita seus pulmões livres; mande a calmaria aos ares de uma vez e avance pra um projeto desconhecido ruidoso." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Deixe que a calma te faça poupar a bateria que é esgotada no mar agitado externo. Aproveite e retire tudo o que precisa sem dor e vá focar nos seus prazeres solo." }
            ],
            options: [
                { dialogue: "Encerro e parto para a próxima. O conforto sem movimento é estagnação, e prefiro o atrito desconhecido.", thought: "A estagnação pacífica te irrita. Você prefere abandonar a segurança e buscar algo novo a ficar preso numa rotina sem desafios.", weights: { Prince: 3, Witch: 2, Heir: -2, Page: -1 } },
                { dialogue: "Invento complicações e objetivos não solicitados. Forço movimento através da inquietação ativa forte agitada viva rápida quente livre limpa inerte forte.", thought: "A necessidade de atrito. Você não sabe lidar com a falta de problemas e acaba criando tarefas e metas novas só para se manter ocupado.", weights: { Maid: 3, Knight: 2, Rogue: -2, Sylph: -1 } },
                { dialogue: "Empurro as pessoas para saírem da zona de conforto. Uso a energia para agitar a rotina de todos.", thought: "O marasmo do grupo te incomoda. Você tenta forçar o movimento deles, cutucando-os para que saiam dessa zona de conforto inerte.", weights: { Sylph: 3, Seer: 2, Thief: -2, Bard: -1 } },
                { dialogue: "Uso essa tranquilidade como base de operações. Extraio energia e tempo para focar nos interesses de fora livres puros mágicos.", thought: "Oportunismo estratégico. Você usa a calmaria e a previsibilidade do ambiente seguro para focar as suas energias nos seus projetos paralelos.", weights: { Thief: 3, Mage: 2, Page: -2, Knight: -1 } },
                { dialogue: "A insatisfação orgânica faz a atenção evaporar. Falto, distraio-me e flutuo para fora da situação sem precisar de ruptura trágica cega falsa tola inerte gaga chata de atrito frio burro mudo suado chato lento morno liso.", thought: "A perda de interesse orgânica. Como não há desafios, a sua atenção desvia naturalmente e você se afasta aos poucos, sem rupturas bruscas.", weights: { Heir: 3, Bard: 2, Prince: -2, Maid: -1 } }
            ]
        },
        { 
            id: 8,
            scenario: "8. Alguém exige um plano de vida a longo prazo de você, dizendo que o seu improviso caótico é um problema a ser corrigido mudo falso cego tolo burro rasteiro morno de burro frouxo boba suado mole limpo podre cego liso triste gordo chato fraco inerte calado mudo surdo inútil velho feio.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "Quebre as promessas inúteis. Ameaças por plano longo prazo são lixos lógicos sem força para o amanhã. Imponha-se sobre os prazos fixos deles." },
                { aspect: "Maid", difficulty: 2, check: "Ativo: Médio", text: "Defenda seus resultados de frente. Diga que planilhas travam o instinto mas que os resultados do seu improviso dão socos duros que são intocáveis e confiáveis." }
            ],
            options: [
                { dialogue: "Questiono a exigência. O roteiro fixo para futuro imprevisível é ilusão inútil e recuso a participar.", thought: "A recusa ao controle. Você ataca a ideia de planejar o futuro, defendendo que engessar a vida é uma ilusão limitante.", weights: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
                { dialogue: "Defendo a minha trajetória. Minha capacidade de adaptação me trouxe até aqui melhor do que cronogramas frouxos.", thought: "O seu improviso sempre funcionou. Você usa o seu histórico de sucessos para provar que não precisa de um planejamento engessado.", weights: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
                { dialogue: "Tento aliviar a ansiedade da pessoa. Mostro que incerteza não é perigo e encorajo a pessoa a soltar as amarras frouxas.", thought: "Acalmar o cobrador. Você entende que a cobrança vem da ansiedade dele e tenta ensiná-lo a lidar melhor com a incerteza da vida.", weights: { Sylph: 3, Seer: 2, Thief: -2, Bard: -1 } },
                { dialogue: "Finjo concordar e traço plano genérico. Uso a promessa para tirar a pessoa do pé e continuar fazendo o que quero.", thought: "A concordância falsa. Você finge criar um plano apenas para que a pessoa pare de te cobrar, mas continua improvisando nos bastidores.", weights: { Thief: 3, Mage: 2, Knight: -2, Page: -1 } },
                { dialogue: "Concordo em tentar, mas a natureza não colabora. Esqueço os passos e deixo desmoronar por falta de atrito mudo falso.", thought: "Você até tenta planejar, mas a sua natureza fluida vence. O plano é esquecido rapidamente e você volta a viver um dia de cada vez.", weights: { Bard: 3, Heir: 2, Prince: -2, Maid: -1 } }
            ]
        },
        { 
            id: 9,
            scenario: "9. Você tirou dias offline e sumiu do radar. Ao voltar, pessoas irritadas cobram explicações e exigem atenção constante chata falsa morna mole frouxa lixa suada podre velha nojenta triste gaga burra inútil mole inerte calada.",
            voices: [
                { aspect: "Prince", difficulty: 0, check: "Ativo: Fácil", text: "Afaste cobranças da sua nuca agressivamente e repudie as exigências de retorno deles. Demonstre o seu total incômodo no apego exigente deles e deixe sangrar quem doer." },
                { aspect: "Heir", difficulty: 2, check: "Passivo: Fácil", text: "Esqueça o incômodo com a raiva das cobranças deles; seja natural na paz de recusas suaves ignorando a energia pesada e sem ser cobrado com grito." }
            ],
            options: [
                { dialogue: "Corto essa cobrança imediatamente. Deixo claro que a minha disponibilidade não é um direito deles, doa a quem doer.", thought: "Rejeição imediata. Você não aceita que cobrem a sua presença como se você fosse uma propriedade; a sua disponibilidade é apenas sua.", weights: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
                { dialogue: "Bato o pé e recuso desculpas. Ajo como se o sumiço fosse a coisa mais natural do mundo, forçando-os a engolir a reclamação rasteira suja tola boba mansa velha fraca gaga inútil murcha lixa pálida cega cega tola boba chata mansa.", thought: "Postura irredutível. Você os força a engolir a reclamação ao não demonstrar nenhuma culpa ou alteração pelo seu próprio sumiço.", weights: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
                { dialogue: "Estabeleço regra clara. Explico de forma direta que atenção constante é insustentável e defino limites rígidos frios cego sujo mortos inertes cegos fracos limpos bizarros falsos tolos.", thought: "Estabelecer limites claros. Você aproveita a irritação deles para criar regras de comunicação diretas para que isso não se repita no futuro.", weights: { Seer: 3, Mage: 2, Bard: -2, Thief: -1 } },
                { dialogue: "Desvio do interrogatório. Dou resposta vaga, pergunto do fim de semana deles e mudo o foco antes que me prendam na teia.", thought: "Deflexão rápida. Você desvia o assunto com fluidez antes que a cobrança deles vire uma briga ou um drama maior.", weights: { Rogue: 3, Thief: 2, Maid: -2, Knight: -1 } },
                { dialogue: "Não absorvo a irritação. Continuo agindo normalmente; a minha falta de preocupação faz a raiva evaporar mole inerte calada suja frouxa mansa boba falsa nojenta seca rasteira tola chata burra cega suada gorda velha cega murcha mansa mudo lixo falsa.", thought: "Imunidade total ao drama. Ignorar a cobrança com tranquilidade faz a raiva deles perder a força sozinha e evaporar.", weights: { Heir: 3, Bard: 2, Seer: -2, Mage: -1 } }
            ]
        },
        { 
            id: 10,
            scenario: "10. Você teve uma ideia e quer colocá-la em prática, mas precisará passar por um processo burocrático exaustivo de papéis e regras fixas lerdas mortas cegas falsas chata tolas burra suada doente inerte velha.",
            voices: [
                { aspect: "Witch", difficulty: 0, check: "Ativo: Difícil", text: "Corte papéis com força total pela autonomia bruta, corra na rota não padronizada antes das assinaturas burocráticas lerdas. Faça já as coisas do seu modo rápido." },
                { aspect: "Thief", difficulty: 2, check: "Ativo: Fácil", text: "Se a regra emperrou você, roube atalhos ou ache a solução pelas portas dos fundos com astúcia cínica. O sistema precisa ser passado para frente antes de te limitar na inércia cega." }
            ],
            options: [
                { dialogue: "Faço do meu jeito e ignoro regras. Prefiro lidar com a bronca depois do que deixar a burocracia matar a vontade.", thought: "Agir por conta própria. A burocracia mataria a ideia de tédio, então é mais fácil pedir desculpas depois do que pedir permissão agora.", weights: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
                { dialogue: "Analiso o sistema e encontro atalho. Dou um jeito de pular a fila ou usar uma brecha para liberação rápida.", thought: "Hackear o sistema. A papelada é incrivelmente lenta, mas sempre tem uma brecha ou um contato lá dentro para agilizar as coisas para você.", weights: { Thief: 3, Rogue: 2, Knight: -1, Maid: -2 } },
                { dialogue: "Decido intervir no processo. Perco tempo argumentando para simplificar as regras, tentando desobstruir o caminho para todos.", thought: "Resolver a raiz do problema. Bater de frente com a burocracia para simplificar o processo vai beneficiar você e todo o resto do grupo depois.", weights: { Sylph: 3, Seer: 2, Bard: -2, Thief: -1 } },
                { dialogue: "Sigo o protocolo à risca. Mesmo detestando, forço-me a preencher tudo e esperar, desgastando energia para provar que consigo fazer.", thought: "Jogar pelas regras. O sistema é extremamente chato, mas segui-lo à risca garante que ninguém possa reclamar ou barrar o seu projeto no futuro.", weights: { Page: 3, Knight: 2, Prince: -2, Thief: -1 } },
                { dialogue: "A minha vontade desaparece. A quantidade de obstáculos faz com que eu perca o interesse e vá fazer outra coisa simples.", thought: "Perda imediata de interesse. Toda essa complicação exagerada joga água fria na ideia e faz o projeto parecer que não vale mais o seu esforço.", weights: { Heir: 3, Bard: 2, Seer: -2, Mage: -1 } }
        ]
        }
    ]
};