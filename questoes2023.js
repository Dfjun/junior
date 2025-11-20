// ==================== QUESTÕES PROVA CEDAF 2023 (CORRIGIDO FINAL) ====================
// Conteúdo extraído do arquivo PROVA-CEDAF-2023.pdf
// Campos 'texto' e 'pergunta' separados corretamente. Sintaxe ajustada para aspas duplas.

const QUESTOES_2023 = [
    // ---------- LÍNGUA PORTUGUESA (01-10) ----------
    {
        numero: 1,
        materia: "Português",
        dificuldade: "medio",
        titulo: "A independência que falta fazer",
        texto: "Para muitos brasileiros, falamos uma língua que ainda não nos pertence\n\n\"Nesse monstrengo político existe uma língua oficial emprestada e que não representa nem a psicologia, nem as tendências, nem a índole, nem as necessidades, nem os ideais do simulacro de povo que se chama o povo brasileiro. Essa língua oficial se chama língua portuguesa e vem feitinha de cinco em cinco anos dos legisladores portugueses.\"\n\nO parágrafo acima foi escrito há quase cem anos pelo poeta Mário de Andrade (1893-1945) para tratar de uma realidade que, na essência, pouco mudou. Uma parcela enorme dos brasileiros acha que aqui falamos – errado, claro – uma língua que não nos pertence.\n\nNão se trata de uma dependência formal. Insidiosa, ela se manifesta por exemplo em salas de aula toda vez que uma criança leva cascudos ao escrever numa redação sobre as férias: \"Me diverti muito\". Se divertiu, não: divertiu‑se! Logo lhe ensinam que pronome oblíquo átono em início de frase é crime.\n(RODRIGUES, Sérgio. A independência que falta fazer. Adaptado.)",
        pergunta: "Conforme a relação de sentido entre o título do texto e todo o seu conteúdo, \"a independência que falta fazer\" diz respeito à libertação",
        alternativas: [
            "política do governo brasileiro em relação ao de Portugal.",
            "artística dos poetas brasileiros em relação aos de Portugal.",
            "linguística do português brasileiro em relação ao de Portugal.",
            "cultural da índole brasileira em relação à de Portugal."
        ]
    },
    {
        numero: 2,
        materia: "Português",
        dificuldade: "medio",
        texto: "Segundo Mauro Ferreira, na obra *Aprender e praticar gramática*, \"derivação é um processo que forma palavra nova a partir de uma única palavra já existente\". O texto lido, logo em seu início, apresenta o termo \"monstrengo\", derivado de \"monstro\".",
        pergunta: "Entre as opções a seguir, SOMENTE NÃO CORRESPONDE ao mesmo processo de derivação que formou \"monstrengo\":",
        alternativas: [
            "independência.",
            "brasileiros.",
            "portuguesa.",
            "realidade."
        ]
    },
    {
        numero: 3,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Projeto no Pantanal",
        texto: "Projeto no Pantanal mostra como é possível conciliar pecuária com proteção à onça‑pintada\n\nA luta pela preservação das onças‑pintadas, símbolo do Pantanal, ganha novos recursos tecnológicos para que o felino saia da lista de risco de extinção e continue povoando as florestas brasileiras em segurança.\n\nEquipamentos como colares com GPS para monitoramento, câmeras de alta definição, cercas elétricas de baixa voltagem para evitar que as onças ataquem o gado – e, **por isso**, sejam mortas pelos fazendeiros – e repelentes luminosos para espantar os animais são algumas das ferramentas introduzidas em projetos no Pantanal coordenados pelo Instituto Homem Pantaneiro (IHP), criado em 2002.\n(SILVA, Cleide. Adaptado.)",
        pergunta: "No trecho lido, o conectivo \"por isso\" é utilizado para estabelecer uma relação lógica entre as partes do texto. No excerto destacado, a oração \"sejam mortas pelos fazendeiros\" se conecta à anterior dando ideia de",
        alternativas: [
            "finalidade.",
            "explicação.",
            "consequência.",
            "oposição."
        ]
    },
    {
        numero: 4,
        materia: "Português",
        dificuldade: "medio",
        figuraDescricao: "Charge sobre morte da rainha Elizabeth II mostrando coroas e um chapéu.",
        imagem: "fig1.jpg",
        texto: "Uma característica fundamental das charges é a produção do humor por meio da quebra da expectativa produzida pelo texto.",
        pergunta: "Na charge de Jean Galvão, esse processo ocorre porque o",
        alternativas: [
            "substantivo \"coroas\" ironiza a idade da rainha e do rei.",
            "pronome \"esta\" indica um chapéu em vez de uma coroa.",
            "verbo \"era\" demonstra que a rainha já faleceu.",
            "adjetivo \"preferida\" foi utilizado com função de substantivo."
        ]
    },
    {
        numero: 5,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Soletrando",
        imagem: "fig2.jpg",
        texto: "Texto I\n(Imagem do logo do Soletrando)\nTexto II\nO Soletrando foi ao ar pela primeira vez em 2007 e participou ativamente da história do Caldeirão com Huck até 2012. Em 2015, a Globo apostou em uma edição especial. No programa, um estudante de cada estado do país competia para ver quem tinha mais conhecimento de soletração da língua portuguesa. As seletivas aconteciam em escolas públicas de cada região. O prêmio para o vencedor era de R$ 100 mil.\n(RD1. Globo autoriza e Luciano Huck prepara a volta do Soletrando. Adaptado.)\n\nSoletrar é o ato de pronunciar, separada e sucessivamente, as letras que formam uma palavra.",
        pergunta: "Se você estivesse participando do concurso da TV Globo e tivesse de soletrar certa palavra da língua, como seria a sua forma correta?",
        alternativas: [
            "e‑x‑c‑e‑s‑s‑ã‑o",
            "e‑s‑c‑e‑ç‑ã‑o",
            "e‑s‑c‑e‑s‑s‑ã‑o",
            "e‑x‑c‑e‑ç‑ã‑o"
        ]
    },
    {
        numero: 6,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Como foi preservado o coração de D. Pedro I?",
        texto: "Era desejo de D. Pedro que, quando morresse, seu coração literalmente permanecesse na cidade que o via como herói – devido às batalhas que travara na região com Dom Miguel, seu irmão. [...] O coração é mantido preservado em formol – uma solução na qual microorganismos e bactérias são incapazes de sobreviver, evitando a decomposição do órgão. Enquanto segredos são supostamente guardados a sete chaves, o coração do ex‑imperador é guardado a cinco – nesse caso, literais. A primeira abre uma placa de metal. Outras duas removem redes de ferro. A quarta abre uma urna. E, por fim, dentro de uma caixa de madeira atrás de outra tranca, encontra‑se o órgão. Graças a essas precauções, o coração sobreviveu por tanto tempo depois da morte de D. Pedro.\n(CAPARROZ, Leo. Como foi preservado o coração de D. Pedro I? Adaptado.)",
        pergunta: "Considerando o tipo textual, o objetivo do texto é",
        alternativas: [
            "caracterizar o sucesso da preservação do coração de D. Pedro I por tanto tempo.",
            "informar sobre os mecanismos utilizados para preservação do coração de D. Pedro I.",
            "orientar o leitor acerca da conservação de órgãos de importantes figuras históricas.",
            "relatar os motivos pelos quais o coração do ex‑imperador do Brasil foi conservado."
        ]
    },
    {
        numero: 7,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Trecho de O Diário de Anne Frank",
        texto: "8 de julho de 1942\nMargot e eu começamos a por nossos pertences mais importantes numa pasta da escola. A primeira coisa que agarrei foi este diário e, depois, rolinhos de cabelos, lenços, livros da escola, um pente e algumas cartas antigas. Preocupada com a ideia de ir para um esconderijo, juntei as coisas mais malucas na pasta, **mas** não me arrependo. Para mim, as lembranças são mais importantes do que os vestidos.\n(FRANK, Anne. O Diário de Anne Frank. Rio de Janeiro: Record, 2014. p. 41.)",
        pergunta: "A conjunção coordenativa \"mas\" poderia ser substituída, no contexto, sem prejuízo de sentido, por",
        alternativas: [
            "e.",
            "pois.",
            "então.",
            "logo."
        ]
    },
    {
        numero: 8,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Quarto de despejo: diário de uma favelada",
        texto: "Este é um trecho da obra \"Quarto de despejo: diário de uma favelada\", de Carolina Maria de Jesus. Leia‑o, observando a linguagem empregada.\nCheguei em casa, fiz o almoço. Enquanto **as panelas fervia** eu escrevi um pouco. Dei o almoço as crianças, e fui no Klabin catar papel. Deixei as crianças brincando no quintal. Tinha muito papel.\n(JESUS, Carolina Maria de. Quarto de despejo: diário de uma favelada. 10 ed. São Paulo: Ática, 2014. p. 16.)",
        pergunta: "Em relação à norma padrão da Língua Portuguesa, a concordância verbal está inadequada em \"as panelas fervia\", porque",
        alternativas: [
            "a autora não sabe escrever certo, visto outras falhas de concordância no texto.",
            "o verbo \"ferver\" deveria concordar em número com o núcleo do sujeito \"panelas\".",
            "o gênero textual em análise – diário pessoal – exige uso de linguagem mais formal.",
            "a palavra \"panela\" deveria estar no singular, respeitando a pessoa gramatical."
        ]
    },
    {
        numero: 9,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Como lavar à mão roupas delicadas",
        texto: "Uma das coisas que mais levamos em conta em nossa casa é a qualidade de tudo o que compramos. No caso das roupas, por exemplo, a intenção é que elas durem bastante tempo com a mesma qualidade, mas, infelizmente, nem sempre é assim. As mais delicadas se danificam, muitas vezes, por nossa falta de conhecimento sobre como lavar à mão aquelas manchas mais difíceis de remover.\n(CUIDADO DA CASA. Como lavar à mão roupas delicadas. Adaptado.)",
        pergunta: "É CORRETO afirmar que o uso da crase, na expressão \"lavar à mão\",",
        alternativas: [
            "caracteriza como alvo da lavagem a mão e não as roupas.",
            "é facultativo no contexto, podendo ser o sinal utilizado ou não.",
            "gera ambiguidade, possibilitando duas ou mais interpretações.",
            "indica a palavra \"mão\" como instrumento que realiza a ação."
        ]
    },
    {
        numero: 10,
        materia: "Português",
        dificuldade: "medio",
        titulo: "Filme Best Player estreia na TV",
        texto: "No filme \"Best Player\", que estreia nesta quinta‑feira (18) no canal pago Nickelodeon, o personagem Quincy vê em um campeonato de game a chance de ter sua casa própria. É a solução quando seus pais, com quem mora, resolvem se mudar de cidade. Mas Quincy não é o único **fera** em videogame. E terá que encarar uma jogadora, apelidada de Prodigy, que não está disposta a deixá‑lo realizar seu sonho. Quem será o vencedor dessa disputa? O filme mistura realidade e jogos virtuais. Nos papéis principais estão Jerry Trainor e Jennette Mc Curdy, o Spencer e a Sam da série iCarly.\n(FOLHINHA. Filme \"Best Player\" estreia na TV. Adaptado.)",
        pergunta: "O autor, ao utilizar a palavra \"fera\", recorre à figura de linguagem",
        alternativas: [
            "eufemismo, a fim de suavizar a ideia de que Quincy é pessoa difícil de se lidar.",
            "ironia, com o intuito de afirmar o contrário do que realmente objetivou informar.",
            "metáfora, para empregar a palavra em um sentido habitualmente não comum.",
            "personificação, atribuindo características humanas a seres do universo virtual."
        ]
    },

    // ---------- MATEMÁTICA (11-20) ----------
    {
        numero: 11,
        materia: "Matemática",
        dificuldade: "medio",
        texto: "Pedro está fazendo intercâmbio em Londres, Inglaterra. Laura, sua namorada, está terminando a faculdade em Florestal-MG, Brasil. Eles conversam todos os dias via internet e, para isso, precisam conectar-se ao mesmo tempo. Eles não podem conversar das 7h30 às 17h de seus respectivos horários locais, pois nesse intervalo de tempo estão na faculdade. Também não podem conversar entre 22h30 e 6h30, porque nesse intervalo de tempo estão dormindo. Laura consultou o Google para saber a diferença de fuso horário entre Londres e Florestal-MG e verificou que Londres está 4 horas à frente de Florestal-MG.",
        pergunta: "De acordo com as restrições de horários de ambos, um horário adequado para que os dois conversem, via internet, seria das",
        alternativas: [
            "17h30 às 18h30 em Florestal.",
            "18h30 às 19h30 em Londres.",
            "19h30 às 20h30 em Londres.",
            "21h às 22h em Florestal."
        ]
    },
    {
        numero: 12,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Frequência do canto do grilo e temperatura",
        texto: "Em 1897, o físico americano Amos Dolbear publicou um trabalho relacionando à frequência do canto do grilo (cricrilado) com a temperatura ambiente. O trabalho sugeria que os grilos podiam ser usados como precisos termômetros e até estabeleceu uma fórmula relacionando a temperatura em Farenheit com a frequência do canto do grilo. Em graus Celsius, a fórmula é expressa por:\nTc = 10 + (N - 40)/7\nOnde Tc é a temperatura em graus Celsius e N é número de cricrilados por minuto.\nUm grilo se instalou no quarto de um estudante na véspera de uma prova. Para diminuir o barulho, o estudante reajustou a temperatura do ar condicionado do seu quarto para 20º, com isso diminuiu em um terço o número de cricrilados por minuto.",
        pergunta: "A temperatura, em graus Celsius, no momento em que o ar condicionado foi reajustado era APROXIMADAMENTE",
        alternativas: [
            "25°.",
            "26°.",
            "27°.",
            "28°"
        ]
    },
    {
        numero: 13,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Consumo de sucos",
        texto: "Um grupo de 500 pessoas foi consultado em relação ao consumo de três tipos de suco: abacaxi, laranja e uva. Dessas pessoas, 275 consomem suco de abacaxi, 185 consomem suco de abacaxi e uva, 190 consomem suco de uva e laranja, 180 consomem abacaxi e laranja e 150 consomem suco de abacaxi, laranja e uva. O número de pessoas que consomem suco de uva é igual ao número de pessoas que consomem suco de laranja.",
        pergunta: "O número de pessoas que consomem suco de laranja e não consomem suco de abacaxi é",
        alternativas: [
            "95.",
            "135.",
            "285.",
            "315."
        ]
    },
    {
        numero: 14,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Altura de um prédio",
        imagem: "fig3.jpg",
        texto: "Um observador vê um prédio segundo um ângulo 30°. Após caminhar 20 m em direção ao prédio, ele passa a vê‑lo segundo um ângulo 45°.",
        pergunta: "Desprezando a altura do observador e admitindo √3 = 1,7, podemos afirmar que a altura h do prédio é APROXIMADAMENTE",
        alternativas: [
            "22 m.",
            "24 m.",
            "26 m.",
            "28 m."
        ]
    },
    {
        numero: 15,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Venda de roscas e bolos",
        texto: "Para ajudar em suas despesas escolares, Maria Eduarda fabrica e vende dois tipos de produto, rosca e bolo. Em certo mês, ela vendeu 60 produtos e teve um lucro líquido de R$ 500,00. Sabendo que cada rosca foi vendida por R$ 10,00, cada bolo por R$ 12,00 e que Maria Eduarda gastou R$ 160,00 em materiais,",
        pergunta: "a quantidade de produtos de cada tipo que Maria Eduarda fabricou e vendeu foi",
        alternativas: [
            "30 roscas e 30 bolos.",
            "40 roscas e 20 bolos.",
            "10 roscas e 50 bolos.",
            "20 roscas e 40 bolos."
        ]
    },
    {
        numero: 16,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Sombra e semelhança",
        texto: "A sombra de um poste mede 2,50 m. No mesmo momento, a seu lado, a sombra de uma pessoa que tem 1,60 m de altura mede 80 cm. Se, mais tarde, a sombra do poste diminuiu 50 cm,",
        pergunta: "a sombra da pessoa passou a medir",
        alternativas: [
            "52 cm.",
            "64 cm.",
            "80 cm.",
            "96 cm."
        ]
    },
    {
        numero: 17,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Promoção Black Friday",
        texto: "No período da Black Friday, a data mundial do desconto e também uma das datas mais lucrativas do comércio, promoções assertivas têm de ser executadas. A promoção Leve 3 e Pague 2 é bastante utilizada devido ao seu nível alto de atratividade, pois o cliente se sente motivado a comprar já que receberá um benefício, neste caso, pagar por dois produtos e levar um de graça.",
        pergunta: "Quando feitas de modo que o cliente ganhe de fato um produto, essas promoções dão um desconto, sobre cada unidade vendida, de",
        alternativas: [
            "50%.",
            "50/3 %.",
            "30%.",
            "100/3 %."
        ]
    },
    {
        numero: 18,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Excursão Escolar",
        texto: "Os alunos da CEDAF pretendem fretar um ônibus de 50 lugares para uma excursão. A empresa contatada propôs cobrar a passagem da seguinte forma: cada passageiro pagaria R$60,00 mais R$3,00 por lugar que não fosse ocupado. Por exemplo: Se houvesse um lugar vago, cada passageiro pagaria R$63,00, dois lugares vagos, cada passageiro pagaria R$ 66,00 e assim por diante.",
        pergunta: "O número de alunos que dá à empresa rentabilidade máxima é",
        alternativas: [
            "15.",
            "25.",
            "35.",
            "50."
        ]
    },
    {
        numero: 19,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Gráfico OBMEP",
        imagem: "fig4.jpg",
        texto: "Em uma pesquisa realizada por estudantes da UFV, as questões da primeira fase da 17ª OBMEP - Olimpíada Brasileira de Matemática para a Escola Pública - foram classificadas em categorias quanto ao grau de dificuldade, como mostra a tabela a seguir:\nMuito Fácil: 1\nFácil: 2\nMediano: 4\nDifícil: 8\nMuito Difícil: 5\nTOTAL: 20\n\nSe essa classificação fosse apresentada em um gráfico de setores circulares, a cada categoria corresponderia um setor circular.",
        pergunta: "O ângulo do maior desses setores mediria",
        alternativas: [
            "72°",
            "90°",
            "144°",
            "234°"
        ]
    },
    {
        numero: 20,
        materia: "Matemática",
        dificuldade: "medio",
        titulo: "Quentão de Vinho",
        texto: "Quentão de Vinho é uma bebida quente tradicionalmente servida durante as festas juninas no Brasil. [...] Em uma receita o vinho e a cachaça utilizados na preparação possuem, respectivamente, 10% e 40% de álcool. A receita informa que, depois de preparado, cada 100 ml de Quentão de Vinho possui 12% de álcool e 62,5% de ingredientes não alcóolicos.",
        pergunta: "Nessas condições, a quantidade de vinho, em ml, em meio litro de Quentão de Vinho é",
        alternativas: [
            "12 ml.",
            "48 ml.",
            "50 ml.",
            "60 ml."
        ]
    },

    // ---------- CIÊNCIAS (21-30) ----------
    {
        numero: 21,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Sentidos Humanos",
        texto: "Os cinco sentidos humanos estão envolvidos na percepção das sensações de paladar, tato, audição, olfato e visão. Na visão é importante a presença da luz que penetra no olho por uma abertura denominada de",
        pergunta: "Na visão é importante a presença da luz que penetra no olho por uma abertura denominada de",
        alternativas: [
            "íris.",
            "córnea.",
            "lente.",
            "pupila."
        ]
    },
    {
        numero: 22,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Sistema Sanguíneo ABO",
        texto: "O sistema sanguíneo ABO dos seres humanos é caracterizado por apresentar quatro tipos diferentes de sangue: A, B, AB e O. A pessoa do tipo de sangue A tem em suas hemácias (glóbulos vermelhos) uma substância denominada aglutinogênio A e, no plasma (parte líquida do sangue), a substância aglutinina anti-B.",
        pergunta: "O aglutinogênio A e a aglutinina anti-B são",
        alternativas: [
            "lipídios.",
            "proteínas.",
            "vitaminas.",
            "ácidos nucleicos."
        ]
    },
    {
        numero: 23,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Sistema Digestório e Respiratório",
        texto: "O sistema digestório atuante na nutrição e o respiratório responsável pela troca dos gases respiratórios compartilham uma estrutura tubular que comunica a cavidade nasal e a laringe.",
        pergunta: "Essa estrutura é denominada",
        alternativas: [
            "faringe.",
            "traqueia.",
            "brônquio.",
            "diafragma."
        ]
    },
    {
        numero: 24,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Célula Eucariota",
        texto: "A célula eucariota diferencia-se da procariota em razão da presença da carioteca e de vários organoides ou organelas.",
        pergunta: "O organoide que está relacionado com a produção de energia é denominado",
        alternativas: [
            "mitocôndria.",
            "cloroplasto.",
            "lisossomo.",
            "retículo endoplasmático."
        ]
    },
    {
        numero: 25,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Tabela Periódica e Sódio",
        texto: "Atualmente, a tabela periódica conta com mais de cem elementos químicos naturais e artificiais que estão organizados em ordem crescente de número atômico. [...] Leia abaixo o trecho do livro de Oliver Sacks, \"Tio Tungstênio\", em que podemos observar um pouco sobre as propriedades do sódio.\n\"O sódio era muito mais barato e não tão violento quanto o potássio; por isso, decidi observar sua ação ao ar livre. [...] peguei o sódio com uma pinça no óleo onde ele estava imerso e o joguei na água lá embaixo. Ele pegou fogo imediatamente e ficou girando na superfície como um meteoro demente...\"\n(SACKS, O. Tio Tungstênio: Memórias de uma infância química. Adaptado.)",
        pergunta: "Baseado no trecho que você leu acima e na organização da Tabela Periódica, outro elemento químico que apresentaria comportamento semelhante e uma possível explicação para o fato retratado seria",
        alternativas: [
            "o magnésio, um metal alcalino terroso pertencente ao terceiro período, assim como o sódio, reagiria mais violentamente com a água em virtude de possuir um elétron a mais em sua camada de valência.",
            "o alumínio, um metal pertencente à família do boro, do terceiro período assim como o sódio, possui três elétrons em sua camada de valência, favorecendo uma reação mais violenta com a água.",
            "o potássio, um metal alcalino que, assim como o sódio, apresenta um elétron em sua camada de valência e uma reatividade elevada com a água, em virtude de apresentarem propriedades químicas semelhantes.",
            "o lítio, um metal alcalino terroso que, assim como o sódio, apresenta um elétron em sua camada de valência e uma reatividade elevada com a água, em virtude de apresentar um menor número de elétrons distribuídos na eletrosfera."
        ]
    },
    {
        numero: 26,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Átomos e Materiais",
        imagem: "fig5.jpg",
        texto: "Átomos se aglomeram. O que aconteceria se não o fizessem? [...] Sem as ligações e as forças que mantêm juntos os materiais, nada existiria do modo como conhecemos. As diferentes formas de combinação entre os átomos geram uma grande variedade de materiais com diferentes propriedades, usos e aplicações.\n(HAYLEY, B. 50 ideias de química que você precisa conhecer. Adaptado.)\nMateriais exemplificados: Metal (latas), Sal, Açúcar.",
        pergunta: "Tendo como base os materiais exemplificados abaixo, podemos inferir que o tipo de ligação química está corretamente relacionado com a seguinte propriedade:",
        alternativas: [
            "As latas de alumínio (metal) são resultantes da união entre átomos metálicos que compartilham seus elétrons aos pares e, por isso, conduzem bem a corrente elétrica em qualquer estado físico.",
            "O cloreto de sódio (sal) é resultante da união entre íons positivos (cátions) e íons negativos (ânions), que conduzem corrente elétrica quando dissolvidos em água.",
            "A sacarose (açúcar) é resultante da união entre átomos não metálicos que compartilham seus elétrons e, por isso, conduzem bem a corrente elétrica quando estão no estado sólido.",
            "As latas de alumínio (metal) são resultantes da união entre elementos metálicos que se unem por um \"mar de elétrons\" e, por isso, apresentam baixa condutividade térmica quando estão no estado sólido."
        ]
    },
    {
        numero: 27,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Abelha Africanizada",
        imagem: "fig6.jpg",
        texto: "A abelha africanizada (Apis mellifera) [...] O veneno injetado pelo ferrão tem caráter ácido e é uma mistura de várias substâncias diferentes que provocam reações que variam de intensidade de acordo com a sensibilidade de cada pessoa. A sabedoria popular diz que, ao ser ferroado por uma abelha, devemos passar sobre a região uma substância para que os efeitos sejam amenizados ou neutralizados.",
        pergunta: "Com base nas informações do texto, para reduzir os efeitos do veneno da abelha e, consequentemente, diminuir a dor, deve-se aplicar sobre a picada uma substância",
        alternativas: [
            "ácida sobre a pele, como vinagre, pois a reação química entre os ácidos contidos no veneno e no vinagre resultaria em um produto de característica neutra.",
            "básica sobre a pele, como limão, pois a reação química entre o ácido contido no veneno e a base resultaria em um produto de característica neutra.",
            "neutra sobre a pele, como leite de magnésia, pois a reação química entre o ácido contido no veneno e o leite de magnésia resultaria em um produto de característica básica.",
            "alcalina sobre a pele, como o leite de magnésia, pois a reação química entre o ácido contido no veneno e a base resultaria em um produto de característica neutra."
        ]
    },
    {
        numero: 28,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Projeto Montanha Russa",
        texto: "Yoda e Jukes estão projetando uma montanha russa que terá um motor instalado apenas até a primeira subida, sendo solto a partir dali. Yoda diz que cada topo de pista tem que ser mais baixo que o anterior, enquanto Jukes fala que o importante é que o primeiro seja o mais alto de todos e depois não importa a que altura estão os demais. Considere que os carrinhos estejam bem lubrificados e que o atrito seja mínimo a ponto de poder ser desprezado.",
        pergunta: "Com relação às duas afirmações feitas, é CORRETO afirmar que",
        alternativas: [
            "Yoda está correto, pois, já que a energia vai sempre diminuindo, é fundamental que a ordem das alturas seja decrescente.",
            "Yoda está incorreto, uma vez que, durante a descida, a energia total do corpo aumenta consideravelmente.",
            "Jukes está correto, porque, durante o movimento, a energia do carrinho é apenas transformada, mantendo a energia total.",
            "Jukes está incorreto, pois não é necessário que o primeiro pico seja o mais alto, dado que, durante a descida, ele adquire muita energia cinética."
        ]
    },
    {
        numero: 29,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Relógio de Pêndulo",
        texto: "Na casa do Kami tem um relógio de pêndulo, cujos ponteiros se movem sincronizados com o balanço do pêndulo. Durante uma discussão, Kami questiona suas colegas se em um dia quente seu relógio adiantaria ou atrasaria.\n• Katarina - Em um dia quente, a haste do pêndulo se dilata, ou seja, fica com tamanho maior que o comprimento no qual o relógio foi calibrado.\n• Annie - Se o comprimento é maior, o período do pêndulo aumenta e isso faz com que o relógio atrase.\n• Diana - O maior comprimento do pêndulo faz com que ele oscile com maior frequência, uma vez que ele se moverá com maior velocidade.",
        pergunta: "Os comentários CORRETOS são os de",
        alternativas: [
            "Annie e Diana.",
            "Katarina e Annie.",
            "Diana e Katarina.",
            "todas as três."
        ]
    },
    {
        numero: 30,
        materia: "Ciências",
        dificuldade: "medio",
        titulo: "Aterramento de Avião",
        texto: "Corki aterrissa com seu avião em um aeroporto para reabastecimento. Imediatamente após a parada, seu avião é aterrado, ou seja, um fio metálico que sai de sua estrutura é colocado em contato com o solo.",
        pergunta: "Por que esse cuidado é importante?",
        alternativas: [
            "Durante o abastecimento é importante que o avião fique parado, por isso um fio metálico é ligado ao solo.",
            "Para evitar que a estrutura do avião permaneça neutra durante o pouso, devido ao atrito dos pneus do avião com o solo, parte da carga elétrica do avião é perdida.",
            "Durante o voo, as baterias do avião são muito utilizadas; assim, o aterramento serve para recarregar as baterias, viabilizando sua utilização em uma nova viagem.",
            "O aterramento serve para descarregar a eletricidade estática do avião, evitando que fagulhas aconteçam durante o reabastecimento."
        ]
    },

    // ---------- GEOGRAFIA (31-35) ----------
    {
        numero: 31,
        materia: "Geografia",
        dificuldade: "medio",
        titulo: "Representações da Terra",
        texto: "A imagem da Terra pode ser reproduzida nas mais diversas perspectivas, sendo utilizadas representações através de croquis, maquetes, fotografias, mapas, entre outras.",
        pergunta: "Sobre as diferentes representações do espaço terrestre, é CORRETO afirmar que",
        alternativas: [
            "o globo terrestre representa a superfície da Terra sem apresentar distorções.",
            "os mapas são representações reduzidas do espaço geográfico em uma superfície plana.",
            "o globo terrestre e o planisfério representam de maneira idêntica a superfície da Terra.",
            "os mapas representam um ponto de vista horizontal da superfície terrestre."
        ]
    },
    {
        numero: 32,
        materia: "Geografia",
        dificuldade: "medio",
        titulo: "Música Criminalidade",
        texto: "Leia, a seguir, o fragmento da letra da música \"Criminalidade\", de Edson Gomes, para responder à questão.\nTanta violência na cidade\nBrother é tanta criminalidade\n[...]\nAs pessoas se trancam em suas casas\nPois não há segurança nas vias públicas\n[...]\n(GOMES, Edson. In: GOMES, Edson. Campo de Batalha. Salvador: EMI-Odeon, 1992. Adaptado.)",
        pergunta: "Pode-se inferir que os problemas típicos das grandes cidades apontados na música fazem menção",
        alternativas: [
            "ao aumento da acessibilidade a tecnologias avançadas.",
            "à diminuição da população economicamente ativa.",
            "às carências na gestão dos espaços públicos.",
            "ao crescimento desenfreado dos grandes centros urbanos."
        ]
    },
    {
        numero: 33,
        materia: "Geografia",
        dificuldade: "medio",
        titulo: "Estrutura Etária Mundial",
        texto: "O principal atributo utilizado para agrupar uma população é a idade das pessoas, também denominada distribuição etária.",
        pergunta: "Sobre a estrutura etária mundial, é CORRETO afirmar:",
        alternativas: [
            "Praticamente em todos os países do mundo, a cada ano, aumenta-se a proporção de idosos na população total.",
            "O Japão, assim como vários países desenvolvidos, vem conhecendo um rápido rejuvenescimento de sua população.",
            "Em quase todo o mundo, vem-se reduzindo a idade de aposentadoria que, no passado, já foi 65, 60 ou 55 anos e, hoje, em geral, é de 50 anos.",
            "Existe uma redução das taxas de envelhecimento da população mundial, muito mais perceptível nas economias menos desenvolvidas."
        ]
    },
    {
        numero: 34,
        materia: "Geografia",
        dificuldade: "medio",
        titulo: "Biomas do Brasil",
        texto: "Trata-se de um dos cinco grandes biomas do Brasil, cobrindo cerca de 25% do território nacional e perfazendo uma área entre 1,8 e 2 milhões de km² nos Estados de Goiás, Tocantins, Mato Grosso do Sul, sul do Mato Grosso, oeste de Minas Gerais, Distrito Federal, oeste da Bahia, sul do Maranhão, oeste do Piauí e porções do Estado de São Paulo. [...] É a segunda maior formação vegetal do país, após a Floresta Amazônica, concentrando-se principalmente no Planalto Central Brasileiro.",
        pergunta: "O trecho acima retrata, caracteristicamente, o bioma",
        alternativas: [
            "Pampa.",
            "Caatinga.",
            "Cerrado.",
            "Pantanal."
        ]
    },
    {
        numero: 35,
        materia: "Geografia",
        dificuldade: "medio",
        titulo: "Bioma Amazônico",
        texto: "O bioma amazônico engloba a maior floresta tropical do mundo, com cerca de 5 milhões de km². Todos os anos, a floresta sofre com diferentes impactos ambientais causados pelas ações antrópicas.",
        pergunta: "Das alternativas abaixo, indique a PRINCIPAL ação geradora de impacto ambiental nesse bioma:",
        alternativas: [
            "Urbanização desenfreada.",
            "Canalização de rios.",
            "Atividade pesqueira.",
            "Prática de queimadas."
        ]
    },

    // ---------- HISTÓRIA (36-40) ----------
    {
        numero: 36,
        materia: "História",
        dificuldade: "medio",
        titulo: "Crise do Feudalismo",
        texto: "O século XIV ficou marcado na história do continente europeu como o período de uma profunda crise econômica e social. Em decorrência dessa crise, a Europa ocidental passou por importantes transformações econômicas e políticas que levaram alguns historiadores a afirmarem que esse teria sido o período da crise do feudalismo.",
        pergunta: "Entre os fatores e acontecimentos nas afirmativas a seguir, aquele que está diretamente relacionado à crise do século XIV e corretamente descrito é o",
        alternativas: [
            "surto de peste bubônica que atingiu a Europa em meados do século XIV e rapidamente se espalhou pelos feudos, pouco atingindo as áreas urbanas.",
            "advento da Reforma Protestante que questionou a venda de indulgências pela Igreja Católica e inaugurou um longo período de críticas ao catolicismo.",
            "desmatamento e a drenagem de pântanos e florestas para a prática da agricultura, fato que desencadeou um desequilíbrio climático no Ocidente Europeu.",
            "surgimento das universidades que desencadearam reflexões críticas sobre o domínio da Igreja, o poder da nobreza feudal e a opressão do campesinato."
        ]
    },
    {
        numero: 37,
        materia: "História",
        dificuldade: "medio",
        titulo: "A Marselhesa",
        texto: "A Marselhesa\nAvante, filhos da Pátria,\nO dia da Glória chegou!\nO estandarte ensanguentado da tirania\nContra nós se levanta. (bis)\nOuvis nos campos\nRugir esses ferozes soldados?\nVêm eles até os vossos braços\nDegolar vossos filhos, vossas mulheres.\n[...]\n(LISLE, Claude Joseph Rouget de. A Marselhesa. Adaptado.)\nA Marselhesa foi composta por Rouget de Lisle, em 1792, no contexto da Revolução Francesa e se tornou um canto de guerra e, mais tarde, o hino nacional francês.",
        pergunta: "Seus versos expressam a tensão do momento histórico em que foi escrita ao convocar",
        alternativas: [
            "os nobres e os membros do partido girondino para resistirem ao avanço jacobino sobre as suas propriedades.",
            "o terceiro estamento social para lutar por liberdade, igualdade civil e contra a opressão da sociedade absolutista.",
            "o primeiro e o segundo estamento social para resistirem ao avanço revolucionário após a tomada da Bastilha.",
            "os jacobinos para lutarem contra os inimigos da revolução e em defesa de Napoleão Bonaparte e da República francesa"
        ]
    },
    {
        numero: 38,
        materia: "História",
        dificuldade: "medio",
        titulo: "África Pré-Colonial",
        texto: "Na maioria das sociedades africanas, a prosperidade de um chefe de família dependia do número de dependentes - mulheres, filhos, noras, demais parentes, agregados e escravos - que tivesse a trabalhar para ele. Às mulheres cabia o grosso das labutas agrícolas. Os homens derrubavam as matas, mas eram as mulheres que preparavam o campo com as suas enxadas, semeavam, regavam e colhiam. Eram elas que cuidavam das criações de aves, cabras e suínos. Fiavam, teciam, moldavam no barro potes, pratos e travessas. E levavam o que produziam para vender nos mercados. Além disso, faziam todas as tarefas de casa: cozinhar, varrer, lavar roupa, ocupar-se das crianças.\n(SILVA, Alberto da Costa e. A África explicada aos meus filhos. Rio de Janeiro, 2008. p. 57.)",
        pergunta: "Considerando o texto acima e os seus conhecimentos sobre a África pré-colonial, pode-se concluir que",
        alternativas: [
            "as aldeias e nações africanas se organizavam em torno de uma economia de mercado, destacando-se entre elas os reinos que mais produziam, comercializavam e acumulavam capitais.",
            "a poligamia era sinal de prestígio em diversos reinos; em uma família, as mulheres desempenhavam importantes funções econômicas e sociais, sendo responsáveis pela produção de alimentos e pela reprodução do tronco familiar.",
            "as diversas aldeias e nações africanas escravizavam mulheres e crianças com o objetivo de diminuir os custos de produção, aumentar o lucro e garantir prestígio político frente a outros reinos e sociedades.",
            "a divisão do trabalho era sexual; às mulheres cabiam os trabalhos mais leves no campo e o cuidado com a casa e com os filhos, estando excluídas da atividade política em todas as aldeias e reinos."
        ]
    },
    {
        numero: 39,
        materia: "História",
        dificuldade: "medio",
        titulo: "Debret e Gê Viana",
        figuraDescricao: "Imagem 01: Aquarela de Jean-Baptiste Debret 'O jantar'. Imagem 02: Gê Viana 'Sentem para jantar' (Série Atualização traumática de Debret).",
        imagem: "fig7.jpg",
        texto: "As duas imagens fazem referência às estruturas sociais, culturais e políticas brasileiras.",
        pergunta: "Ao estabelecermos uma comparação entre elas, é possível concluir que",
        alternativas: [
            "a obra de Gê Viana promove uma atualização da aquarela de Debret ao apresentar a mesma cena sob uma perspectiva distinta, em que as personagens pretas ganham protagonismo, podendo ser lida como uma releitura anticolonial e antirracista.",
            "Nas duas obras é perceptível o patriarcalismo característico da sociedade colonial brasileira. Em ambas as construções, percebem-se o homem mais velho em posição de destaque e as mulheres servindo a mesa e cuidando das crianças.",
            "a aquarela de Debret e a atualização de Gê Viana valorizam o matriarcado e o princípio da ancestralidade africana quando retratam diferentes gerações de famílias na mesma cena e destacam as figuras femininas em suas representações.",
            "as duas cenas retratadas têm um caráter de denúncia do racismo estrutural presente na sociedade brasileira, sendo a aquarela de Debret anterior aos movimentos abolicionistas e a obra de Gê Viana posterior à abolição da escravidão no Brasil."
        ]
    },
    {
        numero: 40,
        materia: "História",
        dificuldade: "medio",
        titulo: "História do Rádio no Brasil",
        texto: "No dia 07 de setembro de 1922, em meio às comemorações do centenário da Independência do Brasil, foi feita a primeira transmissão de rádio no país. No dia da inauguração da Exposição do Centenário da Independência, evento que tinha como objetivo transmitir uma narrativa institucional da História do Brasil, o presidente Epitácio pessoa fez um discurso no Rio de Janeiro que foi transmitido para as cidades de Niterói, Petrópolis e São Paulo. Esse evento inaugurou a história do rádio no Brasil, percurso que se confunde com a história política do país.",
        pergunta: "Sobre a relação entre a popularização do rádio e os usos políticos deste meio de comunicação é CORRETO afirmar que",
        alternativas: [
            "a primeira transmissão de rádio no Brasil esteve associada à Semana de Arte Moderna, exaltando a modernidade, propondo uma identidade para o país e criticando os padrões conservadores da sociedade brasileira.",
            "o rádio, ao longo do século XX, foi um importante meio de comunicação, sendo utilizado por diversos governos por ser um meio confiável de transmissão de informações e imune à veiculação de notícias falsas.",
            "o rádio foi um importante instrumento político durante o governo de Getúlio Vargas na década de 1930, permitindo a propaganda política e a comunicação entre o governo e a população em programas como \"A Voz do Brasil\".",
            "a partir de 1964, o rádio perdeu importância no Brasil sendo perseguido e censurado pelo Regime Militar. Esse meio de comunicação era pouco usado para promover o governo e foi, aos poucos, substituído pelos televisores, computadores e celulares."
        ]
    }
];

// ---------------------------------------------------------------
// EXPORTAÇÃO (necessária caso o arquivo seja usado como módulo)
// ---------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTOES_2023;
}
