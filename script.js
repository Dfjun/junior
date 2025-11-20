// ==================== GABARITOS OFICIAIS ====================
const GABARITOS = {
    2023: ['C','A','C','B','D','B','A','B','D','C','A','D','B','C','A','B','D','C','C','C','D','B','A','A','C','B','D','C','B','D','B','X','A','C','D','C','B','B','A','C'],
    2024: ['D','C','B','D','A','C','B','C','C','A','A','C','C','A','D','D','B','C','B','A','B','D','C','A','D','A','C','A','C','D','C','B','C','D','A','B','B','D','D','C'],
    2025: ['B','D','B','A','C','C','B','B','A','D','B','C','D','B','C','A','B','C','D','A','D','B','A','C','C','C','D','D','C','A','D','B','B','A','D','B','D','C','D','A'],
    DESAFIO: [
        'B','C','C','C','B','D','A','D','D','B', // Português (1-10)
        'A','C','A','D','C','C','C','A','D','B', // Matemática (11-20) - CORRIGIDO: o 11º elemento (índice 10) agora é 'A'
        'C','B','B','B','B','D','A','C','B','D', // Ciências (21-30)
        'C','C','B','B','B','A','D','C','B','B', // Geografia (31-40)
        'C','C','D','C','B','B','B','A','C','C'  // História (41-50)
    ]
};

let respostasUsuario = {}; // Variável global para manter as respostas
let questoesAtuais = [];   // Variável global para a lista completa da prova atual (incluindo introduções)
let anoAtual = '';         // Variável global para o ano da prova atual

// ==================== FUNÇÕES PRINCIPAIS ====================

/**
 * Exibe a página solicitada e marca o botão de navegação ativo.
 * @param {Event} [e] - O objeto de evento do clique (opcional, para botões de navegação).
 * @param {string} pagina - Identificador da página (home, prova2023, estrategia, etc.).
 */
function mostrarPagina(e, pagina) { // 'e' agora é um parâmetro
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // CORRIGIDO E ROBUSTO: Usa o parâmetro 'e' para adicionar a classe 'active'
    // Garante que 'e' e 'e.target' existam e que 'e.target.classList' seja um objeto válido.
    if(e && e.target && typeof e.target.classList !== 'undefined') {
        e.target.classList.add('active');
    } else if (pagina === 'home') { // Caso seja a chamada inicial sem evento (DOMContentLoaded)
        // Busca o botão 'home' pelo seu onclick para ativá-lo
        const homeButton = document.querySelector('.nav-btn[onclick*="mostrarPagina(event, \'home\')"]');
        if (homeButton) {
            homeButton.classList.add('active');
        }
    }

    const app = document.getElementById('app');
    app.innerHTML = ''; // Limpa o conteúdo anterior

    if(pagina === 'home') {
        renderHome(app);
    } else if(pagina === 'estrategia') {
        renderEstrategia(app);
    }
    else {
        let questoesParaCarregar;
        // Certifique-se de que as variáveis QUESTOES_2023, QUESTOES_2024, etc., estejam definidas globalmente
        // ou importadas corretamente. Para este exemplo, assumimos que estão disponíveis.
        switch(pagina) {
            case 'prova2023':
                questoesParaCarregar = typeof QUESTOES_2023 !== 'undefined' ? QUESTOES_2023 : [];
                anoAtual = '2023';
                break;
            case 'prova2024':
                questoesParaCarregar = typeof QUESTOES_2024 !== 'undefined' ? QUESTOES_2024 : [];
                anoAtual = '2024';
                break;
            case 'prova2025':
                questoesParaCarregar = typeof QUESTOES_2025 !== 'undefined' ? QUESTOES_2025 : [];
                anoAtual = '2025';
                break;
            case 'desafio':
                questoesParaCarregar = typeof QUESTOES_DESAFIO !== 'undefined' ? QUESTOES_DESAFIO : [];
                anoAtual = 'DESAFIO';
                break;
            default:
                questoesParaCarregar = [];
                anoAtual = '';
        }
        questoesAtuais = questoesParaCarregar; // Armazena as questões originais na variável global
        renderProva(app, questoesAtuais, anoAtual); // Renderiza a prova completa inicialmente
    }
}

function renderHome(app) {
    app.innerHTML = `
        <div class="home-content">
            <h2>Bem-vindo(a) ao seu Preparatório CEDAF 2026!</h2>
            <p>Aqui você encontra um acervo completo de provas anteriores e um novo conjunto de questões desafiadoras para turbinar seus estudos.</p>

            <div class="stats-grid">
                <div class="stat-card" onclick="mostrarPagina(event, 'prova2023')">
                    <h3>40</h3>
                    <p>Questões 2023</p>
                </div>
                <div class="stat-card" onclick="mostrarPagina(event, 'prova2024')">
                    <h3>40</h3>
                    <p>Questões 2024</p>
                </div>
                <div class="stat-card" onclick="mostrarPagina(event, 'prova2025')">
                    <h3>40</h3>
                    <p>Questões 2025</p>
                </div>
                <div class="stat-card" onclick="mostrarPagina(event, 'desafio')">
                    <h3>50</h3>
                    <p>Questões Desafio</p>
                </div>
                <div class="stat-card">
                    <h3>170</h3>
                    <p>Questões Totais</p>
                </div>
            </div>

            <p>Navegue pelas provas no menu acima e comece a praticar!</p>
            <p>As "Questões Desafio" são um mix de todas as matérias, com foco em tópicos mais complexos e interdisciplinares.</p>
            <p>Explore também a nova seção de **Estratégia de Estudos** para otimizar seu aprendizado!</p>
        </div>
    `;
}

function renderProva(app, questoesParaRenderizar, ano) {
    // IMPORTANTE: respostasUsuario NÃO é resetado aqui. Ele mantém as escolhas do usuário.
    let html = `<h2>${ano === 'DESAFIO' ? '🔥 Questões Desafio' : `📝 Prova CEDAF ${ano}`}</h2>`;

    // Adiciona a UI para os filtros
    html += `
        <div class="filtros-container">
            <label for="filtro-materia">Filtrar por Matéria:</label>
            <select id="filtro-materia" onchange="aplicarFiltros()">
                <option value="todas">Todas as Matérias</option>
                <option value="Português">Português</option>
                <option value="Matemática">Matemática</option>
                <option value="Ciências">Ciências</option>
                <option value="Geografia">Geografia</option>
                <option value="História">História</option>
            </select>
        </div>
        <div id="questoes-renderizadas">
            <!-- As questões serão renderizadas aqui por renderizarLista -->
        </div>
        <div class="botoes-prova">
            <button class="btn-corrigir" onclick="corrigirProva('${ano}')">Corrigir Prova Completa</button>
        </div>
        <div id="resultado-final" class="resultado-final"></div>
    `;
    app.innerHTML = html;

    // Chama renderizarLista para preencher o container de questões e restaurar respostas
    renderizarLista(questoesParaRenderizar, ano);
}

/**
 * Cria o HTML para um bloco de introdução (texto/imagem que precede questões).
 * @param {object} introducao - Objeto de introdução.
 * @returns {string} HTML do bloco de introdução.
 */
function criarIntroducaoHTML(introducao) {
    let html = `
        <div class="introducao-bloco">
            ${introducao.titulo ? `<h3>${introducao.titulo}</h3>` : ''}
            ${introducao.figuraDescricao ? `<div class="figura-descricao">${introducao.figuraDescricao}</div>` : ''}
            ${introducao.imagem ? `<div class="imagem-questao"><img src="imagens/${introducao.imagem}" alt="Figura introdutória"></div>` : ''}
            ${introducao.texto ? `<p class="texto-base">${introducao.texto}</p>` : ''}
        </div>
    `;
    return html;
}

/**
 * Cria o HTML para uma única questão.
 * @param {object} questao - Objeto da questão.
 * @param {string} ano - Ano da prova ou 'DESAFIO'.
 * @returns {string} HTML da questão.
 */
function criarQuestaoHTML(questao, ano) {
    const id = `q${ano}_${questao.numero}`;
    let html = `
        <div class="questao" id="${id}">
            <div class="dificuldade ${questao.dificuldade}">${questao.dificuldade.toUpperCase()}</div>
            <div class="materia-titulo">
                <h3>${questao.materia} - Questão ${questao.numero}</h3>
                ${questao.titulo ? `<h4>${questao.titulo}</h4>` : ''}
            </div>
            ${questao.texto ? `<p class="texto-base">${questao.texto}</p>` : ''}
            ${questao.figuraDescricao ? `<div class="figura-descricao">${questao.figuraDescricao}</div>` : ''}

            ${
                // Lógica para renderizar uma ou múltiplas imagens
                questao.imagens && Array.isArray(questao.imagens) && questao.imagens.length > 0
                ? `<div class="imagens-questao-container">` +
                  questao.imagens.map(img => `<div class="imagem-questao"><img src="imagens/${img}" alt="Figura da questão ${questao.numero}"></div>`).join('') +
                  `</div>`
                : (questao.imagem ? `<div class="imagem-questao"><img src="imagens/${questao.imagem}" alt="Figura da questão ${questao.numero}"></div>` : '')
            }

            <p class="pergunta">${questao.pergunta}</p>
            <div class="alternativas-container">
    `;

    questao.alternativas.forEach((alt, i) => {
        const letra = String.fromCharCode(65 + i); // A, B, C, D
        html += `<div class="alternativa" data-resposta="${letra}"
                 onclick="selecionarAlternativa('${id}', '${letra}')">
                 ${letra}) ${alt}
                 </div>`;
    });

    html += `
            </div>
            <button class="btn-verificar"
                    onclick="verificarQuestao('${id}', '${ano}')">
                    Verificar Questão
            </button>
            <div id="r_${id}" class="resultado-questao"></div>
        </div>
    `;
    return html;
}

/**
 * Renderiza uma lista de itens (questões ou introduções) em #questoes-renderizadas e restaura as respostas.
 * @param {Array<object>} lista - Lista de questões ou introduções a serem renderizadas.
 * @param {string} ano - Ano da prova ou 'DESAFIO'.
 */
function renderizarLista(lista, ano) {
    const container = document.getElementById('questoes-renderizadas');
    let html = '';

    if (lista.length === 0) {
        html = `<p class="no-questions-message">Nenhuma questão encontrada para os filtros selecionados.</p>`;
    } else {
        lista.forEach(item => {
            if (item.tipo === 'introducao') {
                html += criarIntroducaoHTML(item);
            } else {
                html += criarQuestaoHTML(item, ano);
            }
        });
    }

    container.innerHTML = html;

    // ---- RESTAURA AS RESPOSTAS JÁ MARCADAS E ESTADOS DE VERIFICAÇÃO --------------------
    // Filtra apenas as questões reais para restaurar respostas
    const questoesReais = lista.filter(item => item.numero);
    questoesReais.forEach(q => {
        const id = `q${ano}_${q.numero}`;
        const respostaSalva = respostasUsuario[id];
        if (respostaSalva) {
            const alternativaElement = document.querySelector(`#${id} .alternativa[data-resposta="${respostaSalva}"]`);
            if (alternativaElement) {
                alternativaElement.classList.add('selecionada');
            }

            // Se a questão já foi verificada, mostra o resultado e desabilita o botão
            const numeroQuestao = q.numero; // Já é o número da questão
            const questoesDoAnoOriginal = ano === '2023' ? QUESTOES_2023 :
                                          ano === '2024' ? QUESTOES_2024 :
                                          ano === '2025' ? QUESTOES_2025 : QUESTOES_DESAFIO;
            // Encontra o índice da questão REAL no array original (ignorando introduções)
            const questoesNumeradasOriginal = questoesDoAnoOriginal.filter(item => item.numero);
            const indexQuestaoOriginal = questoesNumeradasOriginal.findIndex(origQ => origQ.numero === numeroQuestao);
            const respostaCorreta = GABARITOS[ano][indexQuestaoOriginal];

            const resultadoElement = document.getElementById(`r_${id}`);
            const verificarButton = document.getElementById(id).querySelector('.btn-verificar');

            if (resultadoElement && verificarButton && (alternativaElement && (alternativaElement.classList.contains('correta') || alternativaElement.classList.contains('incorreta')))) {
                // Re-aplicar classes de correção se já estiverem no estado final
                document.querySelectorAll(`#${id} .alternativa`).forEach(alt => {
                    alt.classList.remove('selecionada', 'correta', 'incorreta');
                    const letra = alt.getAttribute('data-resposta');
                    if (letra === respostaCorreta) alt.classList.add('correta');
                    else if (letra === respostaSalva) alt.classList.add('incorreta');
                });

                resultadoElement.classList.add('mostrar');
                if (respostaSalva === respostaCorreta) {
                    resultadoElement.classList.add('acertou');
                    resultadoElement.textContent = '✅ Correto! Parabéns!';
                } else {
                    resultadoElement.classList.add('errou');
                    resultadoElement.textContent = `❌ Resposta correta: ${respostaCorreta}`;
                }
                verificarButton.disabled = true;
                verificarButton.textContent = '✓ Respondido';
            }
        }
    });
}

/**
 * Aplica filtros de matéria às questões e re-renderiza a lista.
 */
function aplicarFiltros() {
    const filtroMateria = document.getElementById('filtro-materia').value;
    let itensFiltrados = [];

    if (filtroMateria === 'todas') {
        itensFiltrados = questoesAtuais; // Se "todas", mostra tudo
    } else {
        // Filtra as questões que correspondem à matéria
        const questoesFiltradasPorMateria = questoesAtuais.filter(item => item.numero && item.materia === filtroMateria);

        // Adiciona os blocos de introdução relevantes
        questoesAtuais.forEach(item => {
            if (item.tipo === 'introducao') {
                // Verifica se alguma das questões que este bloco introduz está na lista filtrada
                const temQuestaoRelevante = item.paraQuestoes.some(qNum =>
                    questoesFiltradasPorMateria.some(q => q.numero === qNum)
                );
                if (temQuestaoRelevante) {
                    itensFiltrados.push(item);
                }
            } else if (item.materia === filtroMateria) {
                itensFiltrados.push(item);
            }
        });
    }

    renderizarLista(itensFiltrados, anoAtual);
}

/**
 * Seleciona uma alternativa para uma questão.
 * @param {string} idQuestao - ID da questão (ex: 'q2023_1').
 * @param {string} resposta - Letra da alternativa selecionada (A, B, C, D).
 */
function selecionarAlternativa(idQuestao, resposta) {
    const questaoEl = document.getElementById(idQuestao);
    questaoEl.querySelectorAll('.alternativa')
             .forEach(a => a.classList.remove('selecionada', 'correta', 'incorreta'));

    const alt = questaoEl.querySelector(`.alternativa[data-resposta="${resposta}"]`);
    if (alt) alt.classList.add('selecionada');

    respostasUsuario[idQuestao] = resposta; // Armazena a resposta do usuário

    // Limpa resultado anterior e reabilita o botão "Verificar"
    const resEl = document.getElementById(`r_${idQuestao}`);
    resEl.classList.remove('mostrar', 'acertou', 'errou');
    resEl.textContent = '';

    const verificarButton = questaoEl.querySelector('.btn-verificar');
    if (verificarButton) {
        verificarButton.disabled = false;
        verificarButton.textContent = 'Verificar Questão';
    }
}

/**
 * Verifica a resposta de uma única questão.
 * @param {string} idQuestao - ID da questão (ex: 'q2023_1').
 * @param {string} ano - Ano da prova ou 'DESAFIO'.
 */
function verificarQuestao(idQuestao, ano) {
    const questaoEl = document.getElementById(idQuestao);
    const respostaUsuario = respostasUsuario[idQuestao];
    const resultadoEl = document.getElementById(`r_${idQuestao}`);

    if (!respostaUsuario) {
        resultadoEl.classList.add('errou');
        resultadoEl.textContent = 'Por favor, selecione uma alternativa.';
        resultadoEl.classList.add('mostrar');
        return;
    }

    // Encontra o índice da questão na lista ORIGINAL do ano para pegar o gabarito correto
    const numero = parseInt(idQuestao.split('_')[1]);
    const questoesDoAnoOriginal = ano === '2023' ? QUESTOES_2023 :
                                  ano === '2024' ? QUESTOES_2024 :
                                  ano === '2025' ? QUESTOES_2025 : QUESTOES_DESAFIO;
    // Filtra apenas os objetos que são questões reais (têm número) para corresponder ao gabarito
    const questoesNumeradasOriginal = questoesDoAnoOriginal.filter(item => item.numero);
    const indexQuestaoOriginal = questoesNumeradasOriginal.findIndex(q => q.numero === numero);

    if (indexQuestaoOriginal === -1) {
        console.error(`Questão número ${numero} não encontrada no gabarito para o ano ${ano}.`);
        resultadoEl.classList.add('errou');
        resultadoEl.textContent = 'Erro ao verificar questão: Gabarito não encontrado.';
        resultadoEl.classList.add('mostrar');
        return;
    }

    const respostaCorreta = GABARITOS[ano][indexQuestaoOriginal];

    // Marca as alternativas corretas/incorretas visualmente
    questaoEl.querySelectorAll('.alternativa').forEach(alt => {
        alt.classList.remove('selecionada', 'correta', 'incorreta');
        const letra = alt.getAttribute('data-resposta');
        if (letra === respostaCorreta) alt.classList.add('correta');
        else if (letra === respostaUsuario) alt.classList.add('incorreta');
    });

    // Mostra o feedback
    resultadoEl.classList.add('mostrar');
    if (respostaUsuario === respostaCorreta) {
        resultadoEl.classList.add('acertou');
        resultadoEl.textContent = '✅ Correto! Parabéns!';
    } else {
        resultadoEl.classList.add('errou');
        resultadoEl.textContent = `❌ Resposta correta: ${respostaCorreta}`;
    }

    // Desabilita o botão "Verificar"
    questaoEl.querySelector('.btn-verificar').disabled = true;
    questaoEl.querySelector('.btn-verificar').textContent = '✓ Respondido';
}

/**
 * Corrige a prova completa e exibe o resultado final.
 * @param {string} ano - Ano da prova ou 'DESAFIO'.
 */
function corrigirProva(ano) {
    // A correção deve considerar as questões ORIGINAIS do ano, não as filtradas
    const questoesOriginaisDoAno = ano === '2023' ? QUESTOES_2023 :
                                  ano === '2024' ? QUESTOES_2024 :
                                  ano === '2025' ? QUESTOES_2025 : QUESTOES_DESAFIO;
    let acertos = 0;
    const gabarito = GABARITOS[ano];

    // Filtra apenas os objetos que são questões reais (têm número) para corresponder ao gabarito
    const questoesNumeradasOriginal = questoesOriginaisDoAno.filter(item => item.numero);

    questoesNumeradasOriginal.forEach((questao, index) => {
        const id = `q${ano}_${questao.numero}`;
        const respostaUsuario = respostasUsuario[id];
        const respostaCorreta = gabarito[index]; // O índice do gabarito corresponde às questões numeradas

        // Contabiliza acertos para todas as questões, mesmo as não visíveis
        if (respostaUsuario && respostaUsuario === respostaCorreta) {
            acertos++;
        }

        // Se a questão estiver visível na tela, atualiza o UI
        const elementoQuestao = document.getElementById(id);
        const elementoResultado = document.getElementById(`r_${id}`);

        if (elementoQuestao && elementoResultado) {
            const alternativas = elementoQuestao.querySelectorAll('.alternativa');
            alternativas.forEach(alt => {
                alt.classList.remove('selecionada', 'correta', 'incorreta'); // Limpa estados anteriores
                const letra = alt.getAttribute('data-resposta');
                if(letra === respostaCorreta) alt.classList.add('correta');
                else if(letra === respostaUsuario) alt.classList.add('incorreta');
            });

            elementoResultado.classList.add('mostrar');
            if(respostaUsuario === respostaCorreta) {
                elementoResultado.classList.add('acertou');
                elementoResultado.textContent = '✅ Correto!';
            } else if (respostaUsuario) { // Se respondeu, mas errou
                elementoResultado.classList.add('errou');
                elementoResultado.textContent = `❌ Correta: ${respostaCorreta}`;
            } else { // Se não respondeu
                elementoResultado.classList.add('errou');
                elementoResultado.textContent = `⚠️ Não respondida. Correta: ${respostaCorreta}`;
            }
            elementoQuestao.querySelector('.btn-verificar').disabled = true;
            elementoQuestao.querySelector('.btn-verificar').textContent = '✓ Respondido';
        }
    });

    const totalQuestoes = questoesNumeradasOriginal.length; // Total de questões reais
    const nota = (acertos / totalQuestoes * 100).toFixed(1);

    document.getElementById('resultado-final').innerHTML = `
        <div class="nota-final">
            <h2>🎯 RESULTADO - ${ano === 'DESAFIO' ? 'QUESTÕES DESAFIO' : `PROVA ${ano}`}</h2>
            <h1>${acertos}/${totalQuestoes}</h1>
            <h2>Nota: ${nota}%</h2>
            <p style="font-size: 1.3em; margin-top: 20px;">
                ${nota >= 70 ? '✅ APROVADO! 🎉' : '📚 Continue estudando! 💪'}
            </p>
        </div>
    `;
    document.getElementById('resultado-final').scrollIntoView({ behavior: 'smooth' });
}

// ==================== SEÇÃO DE ESTRATÉGIA DE ESTUDOS ====================

/**
 * Renderiza a página de Estratégia de Estudos.
 * @param {HTMLElement} app - O elemento onde o conteúdo será renderizado.
 */
function renderEstrategia(app) {
    const html = `
    <div class="estrategia-content">
        <h2>📚 Estratégia de Estudos para o CEDAF 2026</h2>
        <p>Aqui você encontra um guia completo para otimizar seus estudos, com os tópicos mais importantes, resumos práticos e técnicas de memorização.</p>

        <section class="secao-estrategia">
            <h3>🎯 Tópicos Prioritários</h3>
            <p>Foque nestes temas que são recorrentes e essenciais para a sua aprovação. Eles foram extraídos do conteúdo programático e de análises de provas anteriores:</p>
            <div class="topicos-grid">
                <div class="topico-card">
                    <h4>Língua Portuguesa</h4>
                    <ul>
                        <li>
                            <strong>Interpretação de Texto:</strong>
                            <p>Foco: Ideia central, tipo textual, inferências (o que o texto *sugere* vs. o que ele *diz*).</p>
                            <p class="relembrar-dica">**Relembrar:** Leia com atenção, identifique o tema principal e a intenção do autor.</p>
                        </li>
                        <li>
                            <strong>Gramática Essencial:</strong>
                            <p>Classes de Palavras (substantivo, adjetivo, verbo, pronome, advérbio, preposição, conjunção), Ortografia, Acentuação, Pontuação, Concordância (verbal e nominal), Regência (verbal e nominal).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Verbo:** Flexão (tempo, modo, pessoa, número).</li>
                                <li>**Concordância:** Sujeito-verbo, substantivo-adjetivo.</li>
                                <li>**Pontuação:** Vírgula (separar termos, aposto, vocativo), ponto final, ponto e vírgula.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="topico-card">
                    <h4>Matemática</h4>
                    <ul>
                        <li>
                            <strong>Aritmética e Conjuntos Numéricos:</strong>
                            <p>Operações básicas, Frações, Decimais, Porcentagem, Razão e Proporção, Regra de Três (simples e composta), Múltiplos e Divisores (MMC, MDC).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Porcentagem:** <code>X% de Y = (X/100) * Y</code></li>
                                <li>**Regra de Três:** Identificar grandezas diretas/inversas.</li>
                                <li>**MMC/MDC:** Para problemas de "encontro" ou "divisão em partes iguais".</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Álgebra:</strong>
                            <p>Expressões Algébricas, Equações de 1º e 2º Grau, Sistemas de Equações, Funções (1º e 2º Grau).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Equação 1º Grau:** <code>ax + b = 0</code></li>
                                <li>**Equação 2º Grau:** <code>ax² + bx + c = 0</code> (Bhaskara: <code>x = [-b ± sqrt(b² - 4ac)] / 2a</code>)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Geometria:</strong>
                            <p>Geometria Plana (Áreas e Perímetros de figuras básicas: quadrado, retângulo, triângulo, círculo), Teorema de Pitágoras, Relações Métricas no Triângulo Retângulo.</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Retângulo:** Área = <code>base * altura</code>; Perímetro = <code>2 * (base + altura)</code></li>
                                <li>**Triângulo:** Área = <code>(base * altura) / 2</code></li>
                                <li>**Círculo:** Área = <code>π * r²</code>; Circunferência = <code>2 * π * r</code></li>
                                <li>**Pitágoras:** <code>a² = b² + c²</code> (hipotenusa² = cateto² + cateto²)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="topico-card">
                    <h4>Ciências</h4>
                    <ul>
                        <li>
                            <strong>QUÍMICA:</strong>
                            <p>Matéria e suas propriedades (estados físicos, transformações), Misturas (homogêneas e heterogêneas, métodos de separação), Átomos (estrutura, tabela periódica básica), Ligações Químicas (iônica, covalente), Funções Inorgânicas (ácidos, bases, sais, óxidos).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Estados da Matéria:** Sólido, Líquido, Gasoso.</li>
                                <li>**Átomo:** Prótons (+), Nêutrons (neutro), Elétrons (-).</li>
                                <li>**Misturas:** Homogênea (uma fase), Heterogênea (duas ou mais fases).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>FÍSICA:</strong>
                            <p>Cinemática (velocidade, aceleração, movimento uniforme e variado), Leis de Newton, Trabalho e Energia (cinética, potencial), Calor e Temperatura, Ondas (som, luz).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Velocidade Média:** <code>ΔS / ΔT</code> (distância / tempo)</li>
                                <li>**1ª Lei de Newton (Inércia):** Corpo em repouso tende a ficar em repouso; em movimento, tende a continuar em movimento retilíneo uniforme, a menos que uma força atue sobre ele.</li>
                                <li>**Energia Cinética:** <code>Ec = (m * v²) / 2</code></li>
                                <li>**Calor:** Energia térmica em trânsito.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>BIOLOGIA:</strong>
                            <p>Célula (animal e vegetal), Classificação dos Seres vivos, Morfologia e Fisiologia Humanas (sistemas), Ecologia (cadeias alimentares, relações ecológicas, problemas ambientais).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Célula Animal:** Sem parede celular, sem cloroplastos.</li>
                                <li>**Célula Vegetal:** Com parede celular, com cloroplastos.</li>
                                <li>**Cadeia Alimentar:** Produtor → Consumidor Primário → Consumidor Secundário → Decompositor.</li>
                                <li>**Sistemas Humanos:** Entender a função básica de cada um.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="topico-card">
                    <h4>História</h4>
                    <ul>
                        <li>
                            <strong>História Geral:</strong>
                            <p>Feudalismo (características sociais, econômicas, políticas), Expansão Ultramarina, Revoluções Burguesas (Industrial, Francesa), Guerras Mundiais (causas e consequências).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Feudalismo:** Sociedade estamental, economia agrária, poder descentralizado.</li>
                                <li>**Revolução Industrial:** Mudança da produção artesanal para a maquinofatura.</li>
                                <li>**Guerras Mundiais:** Conflitos de grande escala com impacto global.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>História do Brasil:</strong>
                            <p>Brasil Colonial (economia açucareira, escravidão, mineração, revoltas), Independência, Brasil Império (café, abolicionismo, Guerra do Paraguai), Era Vargas, Regime Militar.</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Colonial:** Exploração, trabalho escravo, ciclo do açúcar e do ouro.</li>
                                <li>**Império:** Período de monarquia, com grandes debates sobre a escravidão.</li>
                                <li>**República:** Da Proclamação à redemocratização, com fases de autoritarismo e democracia.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="topico-card">
                    <h4>Geografia</h4>
                    <ul>
                        <li>
                            <strong>Cartografia:</strong>
                            <p>Escala, Coordenadas Geográficas (latitude e longitude), Fusos Horários.</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Escala:** Relação entre a distância no mapa e a distância real.</li>
                                <li>**Latitude:** Distância em relação à Linha do Equador (Norte/Sul).</li>
                                <li>**Longitude:** Distância em relação ao Meridiano de Greenwich (Leste/Oeste).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Globalização e Mundo Atual:</strong>
                            <p>Migrações, Urbanização (megacidades, problemas urbanos).</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Globalização:** Interconexão mundial (econômica, cultural, social).</li>
                                <li>**Migrações:** Movimento de pessoas (internas, externas, refugiados).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Espaço Geográfico Brasileiro:</strong>
                            <p>Biomas Brasileiros, Questões Socioambientais (desmatamento, poluição), Dinâmica Populacional.</p>
                            <p class="relembrar-dica">**Relembrar:**</p>
                            <ul>
                                <li>**Biomas:** Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa, Pantanal.</li>
                                <li>**Problemas Ambientais:** Impactos da ação humana no meio ambiente.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="secao-estrategia">
            <h3>📝 Resumos dos Temas que Caem</h3>
            <p>Resumos diretos e práticos para os temas mais importantes, com fórmulas e exemplos para você fixar o conteúdo rapidamente. Clique para expandir!</p>
            <div class="resumos-grid">
                <div class="resumo-card" onclick="toggleResumo('resumo-matematica-geometria')">
                    <h4>Resumo: Geometria Plana (Áreas e Perímetros)</h4>
                    <p>Fórmulas essenciais para as principais figuras.</p>
                    <div id="resumo-matematica-geometria" class="resumo-conteudo">
                        <h5>Retângulo:</h5>
                        <ul>
                            <li>**Área:** <code>Base × Altura</code></li>
                            <li>**Perímetro:** <code>2 × (Base + Altura)</code></li>
                        </ul>
                        <h5>Quadrado:</h5>
                        <ul>
                            <li>**Área:** <code>Lado²</code></li>
                            <li>**Perímetro:** <code>4 × Lado</code></li>
                        </ul>
                        <h5>Triângulo:</h5>
                        <ul>
                            <li>**Área:** <code>(Base × Altura) / 2</code></li>
                            <li>**Perímetro:** <code>Soma dos lados</code></li>
                        </ul>
                        <h5>Círculo:</h5>
                        <ul>
                            <li>**Área:** <code>π × Raio²</code></li>
                            <li>**Circunferência (Perímetro):** <code>2 × π × Raio</code></li>
                        </ul>
                        <p>Exemplo: Um retângulo com 5cm de base e 3cm de altura tem Área = 15cm² e Perímetro = 16cm.</p>
                    </div>
                </div>
                <div class="resumo-card" onclick="toggleResumo('resumo-portugues-ortografia-acentuacao')">
                    <h4>Resumo: Ortografia e Acentuação</h4>
                    <p>Conhecimento das regras de escrita correta das palavras.</p>
                    <div id="resumo-portugues-ortografia-acentuacao" class="resumo-conteudo">
                        <h5>Ortografia:</h5>
                        <ul>
                            <li>**Uso de "S" ou "Z":** Ex: "casa" (s), "cozinha" (z).</li>
                            <li>**Uso de "X" ou "CH":** Ex: "enxame" (x), "chave" (ch).</li>
                            <li>**Uso de "SS" ou "Ç":** Ex: "exceção" (ç), "excessiva" (ss).</li>
                            <li>**Hífen:** Usado em compostos (couve-flor), prefixos (ex-aluno), etc.</li>
                        </ul>
                        <h5>Acentuação:</h5>
                        <ul>
                            <li>**Oxítonas:** Última sílaba tônica. Acentuadas se terminam em A(s), E(s), O(s), EM/ENS.
                                <ul>
                                    <li>Ex: café, cipó, armazém.</li>
                                </ul>
                            </li>
                            <li>**Paroxítonas:** Penúltima sílaba tônica. Acentuadas se NÃO terminam em A(s), E(s), O(s), EM/ENS.
                                <ul>
                                    <li>Ex: táxi, álbum, tórax. (A maioria das palavras em português é paroxítona e não acentuada).</li>
                                </ul>
                            </li>
                            <li>**Proparoxítonas:** Antepenúltima sílaba tônica. TODAS são acentuadas.
                                <ul>
                                    <li>Ex: matemática, lâmpada, médico.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="resumo-card" onclick="toggleResumo('resumo-matematica-equacoes')">
                    <h4>Resumo: Equações de 1º e 2º Grau</h4>
                    <p>Fórmulas, exemplos e como resolver.</p>
                    <div id="resumo-matematica-equacoes" class="resumo-conteudo">
                        <h5>Equações de 1º Grau (ax + b = 0)</h5>
                        <p>Para resolver, isole a variável 'x'.</p>
                        <p>Exemplo: 2x + 4 = 0 => 2x = -4 => x = -2.</p>
                        <h5>Equações de 2º Grau (ax² + bx + c = 0)</h5>
                        <p>Use a Fórmula de Bhaskara: x = [-b ± sqrt(b² - 4ac)] / 2a. Lembre-se do discriminante (Δ = b² - 4ac):</p>
                        <ul>
                            <li>Δ > 0: Duas raízes reais e distintas.</li>
                            <li>Δ = 0: Uma raiz real (ou duas iguais).</li>
                            <li>Δ < 0: Nenhuma raiz real.</li>
                        </ul>
                    </div>
                </div>
                <div class="resumo-card" onclick="toggleResumo('resumo-ciencias-materia')">
                    <h4>Resumo: Propriedades e Estados da Matéria</h4>
                    <p>Conceitos fundamentais de Química.</p>
                    <div id="resumo-ciencias-materia" class="resumo-conteudo">
                        <h5>Matéria e Suas Propriedades:</h5>
                        <ul>
                            <li>**Matéria:** Tudo que tem massa e ocupa lugar no espaço.</li>
                            <li>**Propriedades Gerais:** Massa, volume, inércia, impenetrabilidade, divisibilidade, compressibilidade, elasticidade.</li>
                            <li>**Propriedades Específicas:** Densidade, ponto de fusão, ponto de ebulição, solubilidade, dureza, maleabilidade, ductilidade.</li>
                        </ul>
                        <h5>Estados Físicos da Matéria:</h5>
                        <ul>
                            <li>**Sólido:** Forma e volume definidos. Partículas muito próximas e organizadas.</li>
                            <li>**Líquido:** Volume definido, forma variável (assume a forma do recipiente). Partículas próximas, mas com alguma liberdade de movimento.</li>
                            <li>**Gasoso:** Forma e volume variáveis (ocupa todo o volume do recipiente). Partículas muito afastadas e em movimento caótico.</li>
                        </ul>
                        <h5>Mudanças de Estado Físico:</h5>
                        <ul>
                            <li>Sólido -> Líquido: Fusão</li>
                            <li>Líquido -> Gasoso: Vaporização (evaporação, ebulição, calefação)</li>
                            <li>Gasoso -> Líquido: Condensação (ou liquefação)</li>
                            <li>Líquido -> Sólido: Solidificação</li>
                            <li>Sólido -> Gasoso: Sublimação</li>
                            <li>Gasoso -> Sólido: Ressublimação (ou deposição)</li>
                        </ul>
                    </div>
                </div>
                <div class="resumo-card" onclick="toggleResumo('resumo-historia-feudalismo')">
                    <h4>Resumo: Feudalismo na Europa Medieval</h4>
                    <p>Características sociais, econômicas e políticas.</p>
                    <div id="resumo-historia-feudalismo" class="resumo-conteudo">
                        <h5>Características do Feudalismo:</h5>
                        <ul>
                            <li>**Economia:** Agrária e de subsistência, com pouca circulação de moedas. O feudo era a unidade produtiva.</li>
                            <li>**Sociedade:** Estamental (pouca mobilidade social), dividida em:
                                <ul>
                                    <li>**Clero:** Oratores (os que oram) - Igreja Católica.</li>
                                    <li>**Nobreza:** Bellatores (os que guerreiam) - Senhores feudais, cavaleiros.</li>
                                    <li>**Servos:** Laboratores (os que trabalham) - Camponeses, presos à terra.</li>
                                </ul>
                            </li>
                            <li>**Política:** Descentralizada. O poder estava nas mãos dos senhores feudais, com o rei tendo autoridade simbólica. Relações de suserania e vassalagem.</li>
                            <li>**Cultura:** Forte influência da Igreja Católica, que controlava o conhecimento e a moral.</li>
                        </ul>
                        <h5>Relações de Suserania e Vassalagem:</h5>
                        <p>Contrato de fidelidade entre nobres (suserano concedia um feudo ao vassalo em troca de apoio militar e lealdade).</p>
                        <h5>Relações de Servidão:</h5>
                        <p>Vínculo entre o senhor feudal e o servo, que trabalhava na terra do senhor em troca de proteção e do direito de usar uma parte da terra para sua subsistência, pagando impostos e obrigações (talha, corveia, banalidades).</p>
                    </div>
                </div>
                <!-- Adicione mais cards de resumo aqui, seguindo o o conteúdo e não esquecer na hora da prova. Experimente estas técnicas:</p>
            <div class="tecnicas-grid">
                <div class="tecnica-card">
                    <h4>Mapas Mentais</h4>
                    <p>Organize ideias de forma visual, conectando conceitos com imagens e cores. Ideal para matérias com muitos tópicos interligados, como Biologia (ciclos, sistemas) e História (eventos, causas e consequências).</p>
                </div>
                <div class="tecnica-card">
                    <h4>Flashcards</h4>
                    <p>Cartões com pergunta de um lado e resposta do outro. Ótimos para revisar definições, fórmulas (Matemática, Física), datas (História) e vocabulário (Português) rapidamente.</p>
                </div>
                <div class="tecnica-card">
                    <h4>Mnemônicos</h4>
                    <p>Crie frases ou palavras-chave para lembrar sequências ou listas. Ex: "LiNa Cama" para Lítio, Sódio, Potássio (Química). Útil para decorar classificações e ordens.</p>
                </div>
                <div class="tecnica-card">
                    <h4>Técnica Pomodoro</h4>
                    <p>Estude em blocos de 25 minutos com 5 minutos de descanso. Ajuda a manter o foco e evitar a fadiga mental, especialmente em sessões longas de estudo de matérias densas.</p>
                </div>
                <div class="tecnica-card">
                    <h4>Ensine a Alguém</h4>
                    <p>Explicar um conteúdo para outra pessoa (ou até para si mesmo em voz alta) é uma das melhores formas de fixar o aprendizado. Se você consegue ensinar, você realmente aprendeu. Ótimo para todas as disciplinas.</p>
                </div>
                <div class="tecnica-card">
                    <h4>Resolução de Exercícios</h4>
                    <p>A prática leva à perfeição. Resolver questões de provas anteriores e exercícios variados ajuda a fixar o conteúdo, identificar pontos fracos e se familiarizar com o estilo das perguntas. Use a seção de Provas do site!</p>
                </div>
                <div class="tecnica-card">
                    <h4>Revisão Espaçada</h4>
                    <p>Revise o conteúdo em intervalos crescentes (dia 1, dia 3, semana 1, mês 1). Isso fortalece a memória de longo prazo e evita que você esqueça o que estudou.</p>
                </div>
            </div>
        </section>
    </div>
    `;
    app.innerHTML = html;
}

/**
 * Alterna a visibilidade do conteúdo de um resumo.
 * @param {string} idResumo - ID do elemento de conteúdo do resumo.
 */
function toggleResumo(idResumo) {
    const resumoConteudo = document.getElementById(idResumo);
    if (resumoConteudo) {
        resumoConteudo.classList.toggle('mostrar-resumo');
        const card = resumoConteudo.closest('.resumo-card');
        if (card) {
            card.classList.toggle('expandido');
        }
    }
}

// ==================== INICIALIZAÇÃO ====================
window.addEventListener('DOMContentLoaded', function() {
    // Chama mostrarPagina com 'null' para o evento e 'home' para a página
    // Isso garante que a página inicial seja carregada e o botão 'Home' ativado.
    mostrarPagina(null, 'home');
});
