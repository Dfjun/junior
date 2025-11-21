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
        // A função renderEstrategia agora está no estrategia.js
        if (typeof renderEstrategia === 'function') {
            renderEstrategia(app);
        } else {
            app.innerHTML = '<h2>Erro: O arquivo estrategia.js não foi carregado corretamente.</h2>';
        }
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

// ==================== INICIALIZAÇÃO ====================
window.addEventListener('DOMContentLoaded', function() {
    // Chama mostrarPagina com 'null' para o evento e 'home' para a página
    // Isso garante que a página inicial seja carregada e o botão 'Home' ativado.
    mostrarPagina(null, 'home');
});