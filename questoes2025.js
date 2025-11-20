// ==================== PROVA CEDAF 2025 - 40 QUESTÕES COMPLETAS ====================

const QUESTOES_2025 = [
    // PORTUGUÊS (01-10)
    {
        numero: 1,
        dificuldade: 'basico',
        materia: 'Português',
        titulo: 'Meme: Vós e violão',
        figuraDescricao: 'Meme com duas senhoras idosas tocando violão, com texto fazendo trocadilho com "vós"',
        pergunta: 'Na língua portuguesa, existem palavras denominadas homônimas, ou seja, palavras que apresentam mesma pronúncia ou grafia, porém com sentidos diferentes. No meme, para gerar humor, recorreu-se à homonímia da palavra "vós", que, no contexto, se refere:',
        alternativas: [
            'ao som que é produzido pelas cordas vocais.',
            'à palavra avós, plural de "vó" na língua padrão.',
            'à segunda pessoa do plural, equivalente a vocês.',
            'ao nome de uma das senhoras da dupla sertaneja.'
        ]
    },
    {
        numero: 2,
        dificuldade: 'avancado',
        materia: 'Português',
        titulo: 'Leandro Karnal - Rúbrica',
        texto: 'Entro no hotel em BH e uma moça simpática e eficiente traz a ficha. Solicita apenas uma "rúbrica". Eu pergunto "uma rubrica?" enfatizando o aspecto paroxítono na palavra. Entrego o papel dizendo novamente: "fiz a rubrica". Depois, penso: que maldito corretor encarna em mim? Quem me nomeou zelador da norma culta? Que péssima primeira impressão eu causei! Vício da profissão? Arrogância pedagógica? Colegas: vocês conseguem abandonar a personagem "professor"? Preciso ser mais sábio...\n\n(KARNAL, Leandro. Publicação no Instagram.)',
        pergunta: 'De acordo com as colocações de Karnal, ele precisa ser mais sábio, porque necessita:',
        alternativas: [
            'mudar de profissão, uma vez que se vê atuando como professor mesmo em situações fora do ambiente escolar.',
            'ser mais simpático ao iniciar um diálogo com as pessoas, para evitar que elas criem más impressões a seu respeito.',
            'conhecer a linguagem dos jovens, para que suas interações com eles sejam isentas de conflitos de entendimento.',
            'reconhecer que a língua varia, podendo se empregar uma palavra de diferentes formas a depender do contexto.'
        ]
    },
    {
        numero: 3,
        dificuldade: 'medio',
        materia: 'Português',
        pergunta: 'Ao enfatizar o aspecto paroxítono de "rubrica", Karnal objetivou evidenciar que a palavra:',
        alternativas: [
            'pode ser pronunciada de diferentes formas.',
            'possui a sílaba "bri" como a tônica na pronúncia.',
            'apresenta vários sentidos a depender da pronúncia.',
            'contém sílabas pronunciadas com menor intensidade.'
        ]
    },
    {
        numero: 4,
        dificuldade: 'basico',
        materia: 'Português',
        titulo: 'Tire a crônica da cartola',
        texto: 'Uma vez, ao volante, me distraí do trânsito à minha frente porque fiquei prestando atenção a duas velhinhas gêmeas atravessando a rua. Isso eu via pelo retrovisor esquerdo. Assisti à cena como se fosse um filme. Elas tinham certa dificuldade de dar passos rápidos e precisos (estou chegando à conclusão de que tenho medo desse aspecto da velhice), cambaleavam um pouco, uma ajudava a outra, porque provavelmente uma era mais vivaz do que a outra, se escoravam, falavam alguma coisa que eu não podia ouvir, alguma ranhetice de velhas sem paciência recíproca, mas atravessaram. Nisso, o semáforo abriu e eu fiquei parada, sem saber que meu tempo urgia, até que algum outro motorista tratou de me lembrar, por meio da buzina. Arranquei ainda querendo ver a trajetória das idosas, e um pouco pasma porque só conhecia gêmeas jovens.\n\n(RIBEIRO, Ana Elisa. Tire a crônica da cartola.)',
        pergunta: 'Os tipos textuais conferem aos textos características estruturais e linguísticas. Sendo assim, no trecho de texto apresentado, predomina o tipo textual:',
        alternativas: [
            'narrativo, porque desenvolve-se um pequeno episódio do cotidiano, o qual apresenta duas velhinhas como personagens.',
            'injuntivo, já que instrui o interlocutor a ter paciência com os mais velhos, respeitando suas dificuldades de locomoção.',
            'descritivo, uma vez que enfatiza as características das velhinhas, abordando a dificuldade delas para atravessarem a rua.',
            'argumentativo, pois a autora opina sobre o medo de envelhecer e enfrentar dificuldades como as relatadas no texto.'
        ]
    },
    {
        numero: 5,
        dificuldade: 'medio',
        materia: 'Português',
        titulo: 'Rebeca Andrade - Olimpíadas Paris 2024',
        figuraDescricao: 'Texto I: Foto de Simone Biles e Jordan Chiles reverenciando Rebeca Andrade no pódio; Texto II: Charge de Duke satirizando a cena',
        texto: 'Esta questão é composta por dois textos. O Texto I retrata o momento em que as norte-americanas Simone Biles e Jordan Chiles reverenciaram Rebeca Andrade na hora em que a brasileira foi anunciada como medalhista de ouro na final do solo da ginástica artística nas Olimpíadas de Paris 2024. Duke, ao criar a charge, Texto II, estabelece um diálogo com o primeiro texto. A esse diálogo, chamamos intertextualidade.',
        pergunta: 'Considerando a relação intertextual entre os Textos I e II, é possível afirmar que o Texto II:',
        alternativas: [
            'apresenta intertextualidade implícita, pois não faz menção direta ao Texto I do qual se originou, dificultando a produção de sentido.',
            'ironiza o fato de Rebeca Andrade estar sem a bandeira brasileira no Texto I, podendo indicar pouco apreço à pátria.',
            'subverte o sentido original, ao transformar a reverência em humor, quando insere personagens de histórias em quadrinhos.',
            'reproduz os significados do Texto I, enfatizando a força e a garra das atletas femininas nos jogos olímpicos de Paris 2024.'
        ]
    },
    {
        numero: 6,
        dificuldade: 'medio',
        materia: 'Português',
        titulo: 'Estrada - Manuel Bandeira',
        texto: 'Esta estrada onde moro, entre duas voltas do caminho,\nInteressa mais que uma avenida urbana.\nNas cidades todas as pessoas se parecem.\nTodo o mundo é igual. Todo o mundo é toda a gente.\nAqui, não: sente-se bem que cada um traz a sua alma.\nCada criatura é única. Até os cães.\nEstes cães da roça parecem homens de negócios:\nAndam sempre preocupados.\nE quanta gente vem e vai!\nE tudo tem aquele caráter impressivo que faz meditar:\nEnterro a pé ou a carrocinha de leite puxada por um bodezinho manhoso.\nNem falta o murmúrio da água, para sugerir, pela voz dos símbolos,\nQue a vida passa! Que a vida passa!\nE que a mocidade vai acabar.\n\n(BANDEIRA, Manuel. Antologia poética.)',
        pergunta: 'O texto literário, como propõe Manuel Bandeira em seu poema, comunica-se com o leitor "pela voz dos símbolos". Isto é, ele se manifesta por meio da linguagem simbólica, conotativa. Nesse contexto, a figura de linguagem metáfora potencializa a simbologia da poesia de Bandeira no trecho:',
        alternativas: [
            '"Nas cidades todas as pessoas se parecem."',
            '"Cada criatura é única. Até os cães."',
            '"Estes cães da roça parecem homens de negócios:"',
            '"E tudo tem aquele caráter impressivo que faz meditar:"'
        ]
    },
    {
        numero: 7,
        dificuldade: 'medio',
        materia: 'Português',
        titulo: 'Livro de Ziraldo suspenso',
        texto: 'Para Marisa Lajolo, escritora, professora e crítica literária, é preciso que pais e professores de crianças e adolescentes façam com livros o que se faz com novelas: discutir.\n\n"Eu acho que livros são um antecessor da televisão. Antigamente, o livro era muito discutido, como hoje a novela é discutida. E é isso que professores e pais precisam restaurar, se se pretende que a leitura continue a ter um lugar importante na vida."\n\nA posição de Lajolo, que é professora do curso de Letras da Universidade Presbiteriana Mackenzie, vem na esteira da suspensão, em uma cidade de Minas Gerais, de "O menino marrom", livro de Ziraldo, após pressão de pais que classificaram a obra como "agressiva". O caso aconteceu nesta semana em Conselheiro Lafaiete.\n\nEm entrevista ao podcast "O Assunto" desta sexta-feira (21), Lajolo diz acreditar que, hoje, poucos pais tenham o hábito de ler com os filhos e que a violência precisa sempre ser condenada, mas que não adianta ela ser escondida.\n\n"Porque a violência existe na vida humana e a cultura reflete isso. Veja os quadros clássicos: eles celebram Júlio César, eles celebram cenas de batalha... Ou seja: a violência está imbricada na cultura."',
        pergunta: 'No texto lido, existem algumas citações de uma especialista em literatura. Esse recurso intertextual é utilizado com a finalidade de:',
        alternativas: [
            'contrapor-se ao ponto de vista defendido pela autora do texto.',
            'construir credibilidade para as informações veiculadas no texto.',
            'defender a suspensão de alguns textos do ambiente escolar.',
            'sustentar o argumento defendido pela autora do texto.'
        ]
    },
    {
        numero: 8,
        dificuldade: 'basico',
        materia: 'Português',
        pergunta: 'As orações subordinadas substantivas que exercem papel de objeto direto e indireto são um dos recursos utilizados por jornalistas para inserir citações de entrevistados em seus textos. Entre as afirmativas a seguir, a que constrói o discurso citado por meio desse tipo de oração é:',
        alternativas: [
            '"Antigamente, o livro era muito discutido, como hoje a novela é discutida."',
            '"Lajolo diz acreditar que, hoje, poucos pais tenham o hábito de ler com os filhos [...]."',
            '"Porque a violência existe na vida humana e a cultura reflete isso."',
            '"Veja os quadros clássicos: eles celebram Júlio César, eles celebram cenas de batalha..."'
        ]
    },
    {
        numero: 9,
        dificuldade: 'avancado',
        materia: 'Português',
        titulo: 'Óculos: singular, plural',
        texto: '"Óculos" (do latim oculus) era um substantivo plural quando estreou no português em princípios do século XVII e assim se conserva até hoje na língua culta. Já faz tempo, porém, que uma curiosa discordância de número ("um óculos") é popular.\n\nO fato de ser difundida não a torna menos errada. No entanto, quando um desvio normativo é tão comum, vale a pena tentar entender a lógica alternativa que o comanda. Não se trata de "justificar", mas de compreender.\n\n"Óculos" é representante de um tipo de substantivo que os gramáticos classificam como pluralia tantum, expressão latina que significa "apenas plurais". São palavras que levam o plural em sua formação, embora se refiram a coisas singulares – na verdade, pares simétricos. Além dos óculos, entram nessa categoria as calças, as cuecas, as tesouras…\n\nA língua popular, especialmente a que se fala no Brasil, não gosta muito de pluralia tantum. Afinal, se o objeto é um só, por que não o singularizar? A calça, a cueca e a tesoura são formas que os falantes encontraram – todas já dicionarizadas e admitidas na língua culta – de driblá-lo.\n\nPor que a palavra óculos não tomou o mesmo rumo? Provavelmente porque, enquanto ninguém imagina a peça de vestuário de um perneta ao ouvir falar em "uma calça", nem a metade inútil de um instrumento cortante ao ler sobre "a tesoura", "o óculo" sugeriria um monóculo, metade do objeto referido. A solução foi abraçar a discordância numérica: "o óculos".\n\nMas onde já se viu singularizar o plural? Bom, há indícios de que foi exatamente o que fizeram com o substantivo "pires", que ninguém estranha. Não duvido que um dia óculos tenha o mesmo destino.\n\n(RODRIGUES, Sérgio. Óculos: singular, plural. In: Viva a língua brasileira.)',
        pergunta: 'O autor do texto afirma que "uma curiosa discordância de número" se tornou popular no Brasil e utiliza, como comprovação, o exemplo "um óculos". Do ponto de vista gramatical, considerando o texto lido, esse fenômeno linguístico é "curioso" porque, no exemplo, o substantivo "óculos":',
        alternativas: [
            'está sendo determinado por um artigo indefinido no singular.',
            'está sendo utilizado no plural, embora seja classificado como singular.',
            'foi determinado por um pronome incompatível com sua flexão de número.',
            'foi singularizado pelos gramáticos, apesar de os falantes o utilizarem no plural.'
        ]
    },
    {
        numero: 10,
        dificuldade: 'avancado',
        materia: 'Português',
        pergunta: 'No artigo lido, Sérgio Rodrigues utiliza os termos "língua culta" e "língua popular". Conforme as informações e os exemplos utilizados no texto, o uso desses dois conceitos demonstra que a:',
        alternativas: [
            'língua culta determina as alterações que são produzidas na língua popular quando um mesmo erro é difundido entre os falantes.',
            'língua popular é transformada à medida que os desvios normativos são compreendidos pelos estudiosos da área.',
            'língua popular é construída à medida que os falantes seguem as normas estabelecidas pela língua culta.',
            'língua culta pode ser alterada caso os desvios normativos amplamente popularizados sejam dicionarizados.'
        ]
    },

    // MATEMÁTICA (11-20)
    {
        numero: 11,
        dificuldade: 'avancado',
        materia: 'Matemática',
        pergunta: 'Considere o número real B > 0, tal que √B − √2 ≠ 0. Assinale a opção que apresenta uma simplificação da expressão: (B√B − 2√2) / (√B − √2)',
        alternativas: [
            'B − 2',
            'B + √2B + 2',
            'B + 2',
            'B − √2B + 2'
        ]
    },
    {
        numero: 12,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Uma gráfica recebeu uma encomenda para produzir apostilas para um curso. A encomenda consiste em 1 apostila de 100 páginas e 2 apostilas, uma de 7 páginas e outra de 9 páginas, para cada cliente. Além disso, a gráfica deve produzir 420 páginas complementares, que serão distribuídas igualmente entre todos os clientes. Se cada cliente receberá um total de 120 páginas, o número de clientes que a gráfica atenderá é:',
        alternativas: [
            '16',
            '17',
            '21',
            '42'
        ]
    },
    {
        numero: 13,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Um supermercado está vendendo um combo de feijão e chocolate com 10% de desconto, custando R$ 18,00. Se 3 combos e 2 pacotes de feijão custam R$ 84,00, o preço do chocolate sem desconto é:',
        alternativas: [
            'R$ 15,00',
            'R$ 13,50',
            'R$ 12,00',
            'R$ 10,00'
        ]
    },
    {
        numero: 14,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Um professor de Matemática propôs um desafio para seus alunos: "Pense em um número inteiro, multiplique-o por 3, adicione 5 ao resultado, e então divida o novo resultado por 2. Se o resultado final for 10, qual foi o número inteiro que você pensou?" O número pensado pelo aluno foi:',
        alternativas: [
            '5',
            '6',
            '7',
            '8'
        ]
    },
    {
        numero: 15,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Um terreno retangular tem 20 metros de comprimento por 15 metros de largura. Se o proprietário deseja cercar o terreno com 3 voltas de arame, quantos metros de arame serão necessários?',
        alternativas: [
            '70 metros',
            '105 metros',
            '210 metros',
            '420 metros'
        ]
    },
    {
        numero: 16,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Em uma pesquisa com 100 pessoas, 60 afirmaram gostar de café, 40 gostam de chá e 20 gostam de ambos. Quantas pessoas não gostam nem de café nem de chá?',
        alternativas: [
            '20',
            '30',
            '40',
            '50'
        ]
    },
    {
        numero: 17,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Um investidor aplicou R$ 5.000,00 a juros simples de 2% ao mês. Após 6 meses, qual será o montante total (capital + juros) que ele terá?',
        alternativas: [
            'R$ 5.300,00',
            'R$ 5.600,00',
            'R$ 5.900,00',
            'R$ 6.200,00'
        ]
    },
    {
        numero: 18,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'Um cilindro tem raio da base de 5 cm e altura de 10 cm. Qual é o volume desse cilindro? (Use π = 3,14)',
        alternativas: [
            '157 cm³',
            '314 cm³',
            '785 cm³',
            '1570 cm³'
        ]
    },
    {
        numero: 19,
        dificuldade: 'avancado',
        materia: 'Matemática',
        pergunta: 'Em uma urna, há 5 bolas vermelhas e 3 bolas azuis. Se duas bolas forem retiradas aleatoriamente, sem reposição, qual é a probabilidade de que ambas sejam vermelhas?',
        alternativas: [
            '5/14',
            '10/28',
            '25/64',
            '5/28'
        ]
    },
    {
        numero: 20,
        dificuldade: 'medio',
        materia: 'Matemática',
        pergunta: 'A função f(x) = x² - 4x + 3 tem seu valor mínimo em qual ponto do eixo x?',
        alternativas: [
            'x = 2',
            'x = 1',
            'x = 0',
            'x = -1'
        ]
    },

    // CIÊNCIAS (21-30)
    {
        numero: 21,
        dificuldade: 'medio',
        materia: 'Ciências',
        figuraDescricao: 'Imagem de uma célula vegetal com suas organelas.',
        texto: 'As células são as unidades básicas da vida e podem ser classificadas em procarióticas e eucarióticas. As células eucarióticas, por sua vez, podem ser animais ou vegetais, apresentando diferenças em suas estruturas e organelas.',
        pergunta: 'Qual das seguintes organelas é encontrada em células vegetais, mas não em células animais?',
        alternativas: [
            'Mitocôndria.',
            'Retículo endoplasmático.',
            'Cloroplasto.',
            'Núcleo.'
        ]
    },
    {
        numero: 22,
        dificuldade: 'medio',
        materia: 'Ciências',
        figuraDescricao: 'Imagem de um ecossistema aquático com peixes, plantas e algas.',
        texto: 'Um ecossistema é um conjunto de comunidades biológicas que interagem entre si e com o ambiente físico (fatores abióticos). A manutenção do equilíbrio ecológico é fundamental para a sobrevivência das espécies e para a saúde do planeta.',
        pergunta: 'Qual dos seguintes fatores é considerado abiótico em um ecossistema aquático?',
        alternativas: [
            'Peixes.',
            'Plantas aquáticas.',
            'Algas.',
            'Temperatura da água.'
        ]
    },
    {
        numero: 23,
        dificuldade: 'basico',
        materia: 'Ciências',
        figuraDescricao: 'Imagem de um sistema solar com o Sol no centro e planetas orbitando.',
        texto: 'O Sistema Solar é composto pelo Sol e por todos os corpos celestes que orbitam ao seu redor, incluindo planetas, planetas anões, asteroides, cometas e satélites naturais. Cada planeta possui características únicas, como tamanho, composição e atmosfera, que influenciam suas condições de vida.',
        pergunta: 'O planeta conhecido como "Planeta Vermelho" devido à sua coloração característica é:',
        alternativas: [
            'Marte.',
            'Vênus.',
            'Júpiter.',
            'Saturno.'
        ]
    },
    {
        numero: 24,
        dificuldade: 'medio',
        materia: 'Ciências',
        figuraDescricao: 'Tabela periódica com destaque para os elementos do grupo 1 (metais alcalinos) e grupo 17 (halogênios).',
        texto: 'A Tabela Periódica organiza os elementos químicos de acordo com suas propriedades e número atômico. Os elementos são agrupados em períodos (linhas) e grupos (colunas), o que permite prever seu comportamento químico. Os metais alcalinos (Grupo 1) são altamente reativos, enquanto os halogênios (Grupo 17) são não metais reativos.',
        pergunta: 'Qual das seguintes afirmações sobre os elementos químicos é CORRETA?',
        alternativas: [
            'Os metais alcalinos tendem a ganhar elétrons em reações químicas.',
            'Os halogênios são gases nobres e não reagem com outros elementos.',
            'Os gases nobres possuem a camada de valência completa, sendo pouco reativos.',
            'Os elementos do Grupo 2 (metais alcalino-terrosos) são menos reativos que os metais alcalinos.'
        ]
    },
    {
        numero: 25,
        dificuldade: 'medio',
        materia: 'Ciências',
        figuraDescricao: 'Imagem de uma planta realizando fotossíntese, com setas indicando entrada de CO₂ e água, e saída de O₂ e glicose.',
        texto: 'A fotossíntese é um processo vital realizado por plantas, algas e algumas bactérias, que converte energia luminosa em energia química. Nesse processo, o dióxido de carbono (CO₂) e a água (H₂O) são utilizados para produzir glicose (C₆H₁₂O₆) e oxigênio (O₂). A clorofila, pigmento presente nos cloroplastos, absorve a luz solar, iniciando a reação.',
        pergunta: 'Qual é o principal produto orgânico da fotossíntese, que serve como fonte de energia para a planta?',
        alternativas: [
            'Oxigênio.',
            'Água.',
            'Glicose.',
            'Dióxido de carbono.'
        ]
    },
    {
        numero: 26,
        dificuldade: 'medio',
        materia: 'Ciências',
        figuraDescricao: 'Imagem de um vulcão em erupção, com lava escorrendo e fumaça saindo do topo.',
        texto: 'Os vulcões são aberturas na crosta terrestre que permitem a saída de magma, cinzas e gases do interior do planeta. As erupções vulcânicas podem ser explosivas ou efusivas, dependendo da viscosidade do magma e da quantidade de gases. Esses fenômenos geológicos são responsáveis pela formação de novas terras e pela liberação de minerais importantes.',
        pergunta: 'Qual das seguintes afirmações sobre vulcões é INCORRETA?',
        alternativas: [
            'A lava é o magma que atinge a superfície terrestre.',
            'As erupções vulcânicas podem causar tsunamis se ocorrerem no oceano.',
            'Os vulcões são encontrados apenas em áreas de encontro de placas tectônicas.',
            'A liberação de gases vulcânicos pode contribuir para o efeito estufa.'
        ]
    },
    {
        numero: 27,
        dificuldade: 'avancado',
        materia: 'Ciências',
        figuraDescricao: 'Cena do filme A Lenda do Tesouro Perdido mostrando revelação de tinta invisível',
        texto: 'A palavra estenografia vem do grego, steganographia, e significa "coberta" ou "escrita encoberta". No filme "A Lenda do Tesouro Perdido", de 2004, as personagens descobrem inscrições ocultas no verso da Declaração de Independência dos Estados Unidos. Com o uso de materiais (reagentes) apropriados e calor, a tinta foi revelada.',
        pergunta: 'Tendo em mente que foi feita a revelação de um tipo de tinta invisível com o uso de outros materiais e pelo uso do calor, podemos afirmar que esse processo de revelação é:',
        alternativas: [
            'resultado da mudança de densidade no material contido na tinta invisível.',
            'uma evidência de que o ponto de ebulição do material da tinta invisível foi atingido pelo aumento de temperatura.',
            'resultado de uma mistura homogênea favorecida pelo aumento de temperatura.',
            'uma evidência de reação química, pelo fato de a substância contida na tinta invisível mudar de cor ao entrar em contato com os demais reagentes e pela ação do calor.'
        ]
    },
    {
        numero: 28,
        dificuldade: 'avancado',
        materia: 'Ciências',
        texto: 'A 1ª Lei de Newton – Lei da Inércia de Galileu, afirma que: "um corpo em repouso tende a continuar em repouso; um corpo em movimento tende a continuar em movimento, retilíneo e uniforme".',
        pergunta: 'Sobre a inércia, assinale a afirmativa CORRETA:',
        alternativas: [
            'É uma propriedade que depende da aerodinâmica do corpo.',
            'É uma propriedade que depende do estado físico da matéria.',
            'É uma propriedade que depende do volume do corpo.',
            'É uma propriedade que depende da massa do corpo.'
        ]
    },
    {
        numero: 29,
        dificuldade: 'medio',
        materia: 'Ciências',
        texto: 'A prova dos 400 m estilo livre de natação das Olimpíadas de Paris foi marcada pelo altíssimo nível. O nadador Guilherme Costa, o "Cachorrão", ficou em 5º lugar. O nadador alemão Lukas Maertens ficou com o ouro. O tempo dos atletas foi: Lukas Maertens: 3 min 41 s 78 centésimos; Cachorrão: 3 min 42 s 76 centésimos. Sabe-se que a velocidade média é definida como a distância percorrida em função do tempo.',
        pergunta: 'Dessa forma, a velocidade média desenvolvida pelos atletas foi mais próxima de:',
        alternativas: [
            '2,2 m/s',
            '2,0 m/s',
            '1,8 m/s',
            '1,6 m/s'
        ]
    },
    {
        numero: 30,
        dificuldade: 'basico',
        materia: 'Ciências',
        texto: 'Um dos conceitos essenciais da Termodinâmica é a definição de calor. O calor é uma forma de energia; é a energia em trânsito, isto é, energia transferida de um corpo para o outro até que se atinja o equilíbrio térmico.',
        pergunta: 'Sobre o conceito de calor, marque a opção CORRETA:',
        alternativas: [
            'Qualquer diferença de temperatura entre dois corpos em contato propicia a manifestação do calor.',
            'O calor e a temperatura são os mesmos conceitos, porém a temperatura se consegue medir.',
            'O calor é a manifestação da temperatura dos corpos em contato físico.',
            'O calor é sinônimo de alta temperatura.'
        ]
    },

    // GEOGRAFIA (31-35)
    {
        numero: 31,
        dificuldade: 'medio',
        materia: 'Geografia',
        texto: 'O menor dos biomas brasileiros é uma extensa superfície inundável, circundada por escarpas de planaltos e serras. Está localizado entre os biomas Amazônia e Cerrado, e seus terrenos sedimentares recebem drenagem de inúmeros rios. É a maior superfície interior alagada do planeta.',
        pergunta: 'A afirmativa que indica o bioma brasileiro que preenche corretamente as lacunas do texto é:',
        alternativas: [
            'Caatinga.',
            'Pradaria.',
            'Mata Atlântica.',
            'Pantanal.'
        ]
    },
    {
        numero: 32,
        dificuldade: 'medio',
        materia: 'Geografia',
        texto: 'A Região Metropolitana de Belo Horizonte foi atingida no início de setembro de 2024 por uma forte névoa de fumaça, causada pela combinação de poluição, queimadas e a típica névoa seca comum no inverno.',
        pergunta: 'Uma condição que agrava essa situação é o fenômeno chamado:',
        alternativas: [
            'Rios voadores.',
            'Inversão térmica.',
            'Chuva ácida.',
            'Intemperismo.'
        ]
    },
    {
        numero: 33,
        dificuldade: 'basico',
        materia: 'Geografia',
        texto: 'O grupo palestino Hamas, que controla a Faixa de Gaza, lançou em 7 de outubro um ataque surpresa a Israel, matando mais de 1.400 e capturando reféns. Israel reagiu com uma ofensiva militar que já matou mais de 8.000, segundo o Ministério da Saúde de Gaza.',
        pergunta: 'Sobre o conflito entre Israel e Palestina, é CORRETO afirmar:',
        alternativas: [
            'O Brasil pode vetar alguma resolução como presidente do Conselho de Segurança.',
            'É um problema que remonta à criação do Estado de Israel, em 1948, e em fatos anteriores.',
            'A questão pode ser considerada como um tipo de disputa imobiliária na região.',
            'O Hamas é um grupo considerado "terrorista" pela Organização das Nações Unidas.'
        ]
    },
    {
        numero: 34,
        dificuldade: 'medio',
        materia: 'Geografia',
        texto: 'O aquecimento global é um fenômeno climático preocupante que se refere ao aumento das temperaturas médias da Terra ao longo do tempo. Ele ocorre devido ao acúmulo de gases de efeito estufa na atmosfera, como dióxido de carbono (CO₂), metano (CH₄) e óxido nitroso (N₂O), que retêm o calor do sol.',
        pergunta: 'É uma consequência do aquecimento global no Brasil:',
        alternativas: [
            'a alteração no padrão de chuvas do Brasil, em especial nas regiões Sul e Sudeste.',
            'a diminuição da concentração dos gases de efeito estufa que atuam no território brasileiro.',
            'o aumento da especulação imobiliária nas praias do litoral brasileiro.',
            'o crescimento da migração de pessoas que residem no Centro-Oeste para o Norte do país.'
        ]
    },
    {
        numero: 35,
        dificuldade: 'avancado',
        materia: 'Geografia',
        texto: 'A ideia dos BRICS foi formulada pelo economista-chefe da Goldman Sachs, Jim O\'Neil, em estudo de 2001. Fixou-se como categoria da análise nos meios econômico-financeiros, empresariais, acadêmicos e de comunicação. Em 2006, o conceito deu origem a um agrupamento, incorporado à política externa de Brasil, Rússia, Índia e China. Em 2011, a África do Sul passou a fazer parte do agrupamento.',
        pergunta: 'Sobre os BRICS, é CORRETO afirmar:',
        alternativas: [
            'Consiste em um bloco econômico classificado como União Aduaneira.',
            'Permite a livre circulação de bens e pessoas em seu interior.',
            'Trata-se de um grupo fechado de países que não aceita novos integrantes.',
            'É um agrupamento informal de países emergentes que visa à cooperação econômica.'
        ]
    },

    // HISTÓRIA (36-40)
    {
        numero: 36,
        dificuldade: 'medio',
        materia: 'História',
        texto: 'Na consciência medieval, formam-se, lado a lado, duas concepções de vida: a devota, ascética, que se apropria de todas as concepções éticas, e a mentalidade mundana, completamente deixada ao diabo. Se uma das duas predomina completamente, então surge o santo ou o pecador irrefreado; mas, em geral, elas se mantêm num equilíbrio instável, com enormes variações da balança.\n\n(HUIZINGA, Johan. O Outono da Idade Média.)',
        pergunta: 'A respeito da atuação da Igreja Católica na Europa Medieval e da consciência humana do período, assinale a afirmativa CORRETA:',
        alternativas: [
            'Ao longo de toda a Idade Média, a Igreja Católica disputou com outras denominações cristãs o domínio sobre a religião.',
            'A Igreja Católica possuía uma grande influência sobre a mentalidade e o comportamento humano no período medieval, exaltando ações de devoção e condenando comportamentos mundanos.',
            'O Tribunal da Inquisição foi o principal instrumento de controle e perseguição aos hereges ao longo da Idade Média, sendo característico da Igreja francesa.',
            'A consciência religiosa medieval era influenciada fortemente pela razão humana, que fazia análise crítica do discurso católico.'
        ]
    },
    {
        numero: 37,
        dificuldade: 'medio',
        materia: 'História',
        texto: 'No início do século XVIII, a Coroa Portuguesa iniciou um processo de fundação de vilas e postos de fiscalização na região de Minas Gerais. A criação do Registro das Abóboras, posto fiscal que deu origem à cidade de Contagem/MG, faz parte desse projeto. Nessa região, foram cultivadas pequenas roças de víveres básicos, como feijão e abóbora, e instaladas instâncias de poder do Estado português.',
        pergunta: 'A história de surgimento da vila do Registro das Abóboras permite observar dois princípios da administração portuguesa sobre as regiões mineradoras no Brasil Colonial, são eles:',
        alternativas: [
            'abastecimento e desobediência civil.',
            'transporte de cargas e desenvolvimento industrial.',
            'desenvolvimento agrícola e urbanização.',
            'abastecimento e fiscalização.'
        ]
    },
    {
        numero: 38,
        dificuldade: 'medio',
        materia: 'História',
        texto: '"A gente fica numa expectativa só. Para quem gosta de acompanhar de perto a política, as sessões da Câmara Municipal, toda a atuação da prefeitura, esse é o momento da verdade, do reconhecimento ou da reprovação. É hora de avaliar e exercer o voto pensando no que está em jogo, que é o bem-estar da população."\n\nA fala de Deuzimar Maria da Conceição Sá refere-se às eleições municipais de outubro de 2024. Segundo o TSE, 156 milhões de eleitores estavam aptos a votar.',
        pergunta: 'Sobre a participação política e o processo eleitoral na História do Brasil independente, assinale a afirmativa CORRETA:',
        alternativas: [
            'Pela constituição de 1824, o voto era censitário, obrigatório para homens livres com renda mínima e facultativo para mulheres com escravizados.',
            'Durante a República do Café com Leite, havia participação ativa e consciente dos eleitores, garantindo representatividade.',
            'Em 1932, no governo Vargas, foram instituídos o voto secreto, voto feminino e a Justiça Eleitoral, democratizando o processo.',
            'Durante a Ditadura Civil-Militar, ocorriam eleições diretas somente para cargos do executivo.'
        ]
    },
    {
        numero: 39,
        dificuldade: 'medio',
        materia: 'História',
        figuraDescricao: 'Mapa mostrando economia e território brasileiro no século XVIII com atividades de cana-de-açúcar e pecuária',
        texto: 'O mapa destaca algumas atividades econômicas desenvolvidas no Brasil Colônia, entre elas, a plantação de cana-de-açúcar e a pecuária.',
        pergunta: 'Considerando o mapa e a História do Brasil referente ao período em questão, assinale a afirmativa CORRETA:',
        alternativas: [
            'A atividade pecuarista foi importante desde o início; os portugueses domesticaram bovinos da fauna americana.',
            'A pecuária gerou grande riqueza para o Nordeste, atraindo portugueses e holandeses.',
            'A criação de gado dividia espaço com a cana-de-açúcar, usando mesma estrutura dos engenhos.',
            'A pecuária acelerou a interiorização da colonização e desenvolvimento do mercado interno, mas intensificou conflitos com indígenas.'
        ]
    },
    {
        numero: 40,
        dificuldade: 'avancado',
        materia: 'História',
        figuraDescricao: 'Capa do HQ Capitão América Nº 01 de 1940 mostrando o herói contra inimigos',
        texto: 'A imagem refere-se à primeira edição da revista em quadrinhos Capitão América, lançada em 1940, um ano antes do ataque a Pearl Harbor. A história é assinada por Joe Simon e Jack Kirby.',
        pergunta: 'Considerando essas informações e a análise da imagem, assinale a afirmativa CORRETA:',
        alternativas: [
            'Ao vestir as cores da bandeira estadunidense, o Capitão América foi transformado em símbolo cultural e político dos EUA, inserindo a narrativa infanto-juvenil em contexto de enfrentamento ao nazismo e valorização do nacionalismo.',
            'A imagem representa usos políticos das narrativas infanto-juvenis, destacando o Capitão contra comunistas na Guerra Fria.',
            'Pela capa percebe-se a politização da indústria cultural norte-americana a partir da entrada na Guerra Fria.',
            'O caso é único na literatura infanto-juvenil, relacionado ao alinhamento de seus criadores com o comunismo soviético.'
        ]
    }
];

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTOES_2025;
}
