// ==================== SEÇÃO DE ESTRATÉGIA DE ESTUDOS (Matemática com Imagem Restaurada) ====================

/**
 * Renderiza a página de Estratégia de Estudos.
 * @param {HTMLElement} app - O elemento onde o conteúdo será renderizado.
 */
function renderEstrategia(app) {
    const html = `
    <div class="estrategia-content">
        <h2>📚 Estratégia de Estudos para o CEDAF 2026</h2>
        <p>Aqui você encontra um guia completo para otimizar seus estudos, focando nos temas mais recorrentes do processo seletivo e utilizando técnicas de memorização eficazes.</p>

        <section class="secao-estrategia">
            <h3>🎯 Tópicos Prioritários por Disciplina (Foco total!)</h3>
            <p>Os temas estão organizados por disciplina e importância. Use este guia para direcionar a maior parte do seu tempo de estudo.</p>
            
            <div class="modulo-disciplina">
                <h4>1. 📖 Língua Portuguesa</h4>
                <ul>
                    <li>
                        <strong>Interpretação Textual e Gêneros Textuais:</strong>
                        <p>Foco: Ideia central, inferência, função do texto (argumentativo, narrativo, injuntivo), **Intertextualidade (charge, meme)** e Figuras de Linguagem (metáfora, comparação).</p>
                    </li>
                    <li>
                        <strong>Conhecimento Gramatical Aplicado:</strong>
                        <p>Foco: **Variação Linguística** (norma culta vs. norma popular), **Concordância Verbal e Nominal** (casos de sujeito composto, verbos impessoais como *haver* e *fazer*), Regência e uso da **Crase** (principalmente em locuções femininas), Classes de Palavras (função de pronomes e conectivos).</p>
                    </li>
                    <li>
                        <strong>Semântica:</strong>
                        <p>Foco: Homônimos e Parônimos (diferença de sentido entre palavras semelhantes, ex: *rúbrica/rubrica*).</p>
                    </li>
                </ul>
            </div>

            <div class="modulo-disciplina">
                <h4>2. ✖️ Matemática</h4>
                <ul>
                    <li>
                        <strong>Funções (1º e 2º Grau):</strong>
                        <p>Foco: Cálculo do vértice (máximo ou mínimo), raízes da função, sistemas de equações e resolução de problemas de otimização (máxima renda, máximo lucro).</p>
                    </li>
                    <li>
                        <strong>Geometria Plana e Semelhança:</strong>
                        <p>Foco: Cálculo de áreas (círculo, retângulo, triângulo), **Teorema de Pitágoras** e relações de **semelhança de triângulos** (cálculo de alturas e distâncias indiretas).</p>
                    </li>
                    <li>
                        <strong>Trigonometria (Triângulo Retângulo):</strong>
                        <p>Foco: Uso de seno, cosseno e tangente para resolver problemas de altura/distância (principalmente com ângulos notáveis de 30°, 45° e 60°).</p>
                    </li>
                    <li>
                        <strong>Aritmética e Álgebra:</strong>
                        <p>Foco: Porcentagem (descontos, juros), Razão e Proporção, Operações com Radicais (simplificação e racionalização).</p>
                    </li>
                    <li>
                        <strong>Conjuntos e Análise Combinatória:</strong>
                        <p>Foco: Diagrama de Venn (problemas de intersecção) e **Combinação com Repetição** (problemas de escolha com reposição, como o do açaí).</p>
                    </li>
                </ul>
            </div>
            
            <div class="modulo-disciplina">
                <h4>3. 🔬 Ciências (Física, Química, Biologia)</h4>
                <ul>
                    <li>
                        <strong>Física: Leis de Newton e Energia:</strong>
                        <p>Foco: **Lei da Inércia (1ª Lei de Newton)** e massa corporal. Conservação de energia (montanha-russa, pêndulo) e cálculo de **Velocidade Média**.</p>
                    </li>
                    <li>
                        <strong>Química: Estrutura Atômica e Ligações:</strong>
                        <p>Foco: **Fosforescência** (salto e retorno de elétrons, Teoria de Bohr), **Alotropia** (Fósforo Branco/Vermelho), Reações Químicas (identificação e balanceamento) e **Funções Inorgânicas** (neutralização de ácidos e bases, como no veneno de abelha).</p>
                    </li>
                    <li>
                        <strong>Biologia: Ecologia e Fisiologia:</strong>
                        <p>Foco: Componentes de um ecossistema (produtores: plantas e algas), classificação animal (Filo Arthropoda), Genética (genes recessivos e dominantes) e Fisiologia (visão, sistema ABO, termorregulação - suor).</p>
                    </li>
                </ul>
            </div>

            <div class="modulo-disciplina">
                <h4>4. 🌎 Geografia</h4>
                <ul>
                    <li>
                        <strong>Climatologia e Fenômenos Atmosféricos:</strong>
                        <p>Foco: Efeito estufa e **Aquecimento Global** (consequências no Brasil, como alteração de chuvas), **Inversão Térmica** (problemas em metrópoles como BH), e **Rios Voadores** (influência da Amazônia).</p>
                    </li>
                    <li>
                        <strong>Geopolítica e Globalização:</strong>
                        <p>Foco: Conflitos atuais (**Israel/Palestina**), Blocos Econômicos (**BRICS** - natureza informal e objetivos de cooperação), e as consequências da Guerra da Ucrânia (fertilizantes, commodities).</p>
                    </li>
                    <li>
                        <strong>Geomorfologia e Hidrografia:</strong>
                        <p>Foco: Agentes de transformação do relevo (internos e externos, ex: **intemperismo**), Características da rede hídrica brasileira (potencial hidrelétrico e distribuição desigual) e **Biomas** (características do Pantanal e Cerrado).</p>
                    </li>
                </ul>
            </div>
            
            <div class="modulo-disciplina">
                <h4>5. 🏛️ História</h4>
                <ul>
                    <li>
                        <strong>Brasil Colonial e Imperial:</strong>
                        <p>Foco: Economia (ciclo do ouro, abastecimento e fiscalização), o papel da **escravidão** e a **cultura indígena** (manto tupinambá), e a participação política (voto censitário, Era Vargas).</p>
                    </li>
                    <li>
                        <strong>Idade Média e Moderna:</strong>
                        <p>Foco: **Crise do Feudalismo** (peste, fome), o papel da **Igreja Católica** (mentalidade medieval), e o pioneirismo inglês na **Revolução Industrial** (carvão, estabilidade política, cercamentos).</p>
                    </li>
                    <li>
                        <strong>Século XX (Guerras e Ditadura):</strong>
                        <p>Foco: **Nazismo** (Tratado de Versalhes), **Era Vargas** (criação do rádio e propaganda política), e **Governo JK** (desenvolvimento rodoviário e indústria automobilística).</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="secao-estrategia">
            <h3>📚 Resumos Focados e Macetes para a Prova</h3>
            <p>Concentre-se nas fórmulas e dicas de resolução rápida para os tipos de questões mais comuns do CEDAF. Clique para expandir!</p>
            <div class="resumos-container-disciplina">
                
                <div class="modulo-disciplina">
                    <h4>1. 📖 Português: Macetes de Gramática e Crase</h4>
                    <div class="resumos-grid">
                        <div class="resumo-card" onclick="toggleResumo('resumo-portugues-concordancia')">
                            <h5>Concordância e Verbos Impessoais</h5>
                            <p>Dicas de ouro para concordância verbal.</p>
                            <div id="resumo-portugues-concordancia" class="resumo-conteudo">
                                <h6>Verbos Impessoais:</h6>
                                <ul>
                                    <li>Verbos **HAVER** (no sentido de existir/acontecer) e **FAZER** (indicando tempo decorrido) são impessoais e devem ficar **SEMPRE no singular**.</li>
                                    <li>❌ Incorreto: Fazem anos que não o vejo.</li>
                                    <li>✅ Correto: **Faz** muitos anos que não o vejo. (Questão 9/Desafio)</li>
                                    <li>❌ Incorreto: Haviam bastantes motivos.</li>
                                    <li>✅ Correto: **Havia** bastantes motivos.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="resumo-card" onclick="toggleResumo('resumo-portugues-crase')">
                            <h5>Macetes de Crase Aplicada</h5>
                            <p>Troque "a" para identificar a crase rapidamente.</p>
                            <div id="resumo-portugues-crase" class="resumo-conteudo">
                                <h6>Regras Essenciais:</h6>
                                <ul>
                                    <li><strong>Teste do "A" para "Para":</strong> Se ao trocar o termo regente por **"para"** e for possível usar **"para a"**, há crase. Ex: Vou **à** feira (Vou **para a** feira).</li>
                                    <li><strong>Locuções Femininas:</strong> Use crase em locuções adverbiais, prepositivas e conjuntivas femininas. Ex: **às** vezes, **às** claras, **à moda de** (implícito ou explícito).</li>
                                    <li><strong>Macete da Mão (Questão 9/2023):</strong> A crase em "lavar **à mão**" indica o **modo/instrumento**. Se você puder trocar por **"ao"** quando o termo for masculino, use crase no feminino. Ex: Escrito **à máquina** / Escrito **a lápis** (sem crase).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modulo-disciplina">
                    <h4>2. ✖️ Matemática: Fórmulas de Sucesso</h4>
                    <div class="resumos-grid">
                        
                        <div class="resumo-card" onclick="toggleResumo('resumo-matematica-formulas')">
                            <h5>Fórmulas Essenciais para Cálculo e Geometria</h5>
                            <p>Clique para ver as fórmulas cruciais (Bhaskara, Áreas, Volumes, Trigonometria) em um formato visual. **(Requer formulas_matematicas_essenciais.png)**</p>
                            <div id="resumo-matematica-formulas" class="resumo-conteudo">
                                
                                <div class="imagem-questao">
                                    <img src="imagens/formulas_matematicas_essenciais.png" alt="Tabela com as fórmulas matemáticas essenciais de Geometria, Bhaskara e Trigonometria.">
                                </div>
                                
                                <h6>Macete de Escala (Q20/2024):</h6>
                                <ul>
                                    <li>Se a escala linear é $1:L$, a **escala da área** é $1:L^2$.</li>
                                    <li>Em $1:50$, a área real é a área do desenho multiplicada por $50^2 = 2500$.</li>
                                </ul>
                                <h6>Macete de Semelhança (Q16/2023):</h6>
                                <p>Para sombras e alturas em um mesmo instante, use a proporção: $$\frac{\text{Altura}}{\text{Sombra}} = \text{Constante}$$</p>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="modulo-disciplina">
                    <h4>3. 🔬 Ciências: Fórmulas de Física e Conceitos Químicos</h4>
                    <div class="resumos-stacked"> <div class="resumo-card" onclick="toggleResumo('resumo-ciencias-fisica')">
                            <h5>1. Física: Fórmulas de Eletricidade, Energia e Pressão</h5>
                            <p>Tópicos de Física com fórmulas visuais. **(Requer fisica.png)**</p>
                            <div id="resumo-ciencias-fisica" class="resumo-conteudo">
                                <div class="imagem-questao">
                                    <img src="imagens/fisica.png" alt="Tabela com fórmulas de Eletricidade, Energia, Pressão e Leis de Newton.">
                                </div>
                                <h6>Dica de Conversão de Energia (Q30/2024):</h6>
                                <ul>
                                    <li>Lembre-se: Para obter $E$ em $kWh$ (quiloWatt-hora), a Potência $P$ deve estar em $kW$ (quiloWatt) e o tempo $t$ em $h$ (horas).</li>
                                    <li>**Exemplo:** 4000 W = 4 kW. 240 minutos = 4 horas. $E = 4 \cdot 4 = \mathbf{16 \text{ kWh}}$.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="resumo-card" onclick="toggleResumo('resumo-ciencias-quimica')">
                            <h5>2. Química: pH, Reações e Estrutura Atômica</h5>
                            <p>Tópicos de Química com diagramas e equações visuais. **(Requer quimica.png)**</p>
                            <div id="resumo-ciencias-quimica" class="resumo-conteudo">
                                <div class="imagem-questao">
                                    <img src="imagens/quimica.png" alt="Tabela com fórmulas de pH, Alotropia, Reações de Neutralização e Estrutura Atômica.">
                                </div>
                                <h6>Reação de Neutralização (Q27/2023):</h6>
                                <ul>
                                    <li>O veneno de abelha é **ácido**. Para aliviar, aplique uma substância **básica/alcalina** (ex: Leite de Magnésia).</li>
                                    <li>Fórmula: $$\text{Ácido} + \text{Base} \rightarrow \text{Sal} + \text{Água}$$</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="resumo-card" onclick="toggleResumo('resumo-ciencias-biologia-macete')">
                            <h5>3. Biologia: Macetes de Parasitologia</h5>
                            <p>Teníase vs. Cisticercose.</p>
                            <div id="resumo-ciencias-biologia-macete" class="resumo-conteudo">
                                <h6>Contaminação por *Taenia* (Q22/2024):</h6>
                                <ul>
                                    <li>**Teníase:** Ingestão de **carne mal cozida** (contaminada com a **larva/cisticerco**). O verme adulto vive no intestino.</li>
                                    <li>**Cisticercose:** Ingestão dos **ovos** do parasita. A larva migra e se instala em órgãos (cérebro, músculo), sendo a forma mais grave.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modulo-disciplina">
                    <h4>4. 🌎 História e Geografia: Conceitos Chave</h4>
                    <div class="resumos-grid">
                        <div class="resumo-card" onclick="toggleResumo('resumo-hgeografia-conceitos')">
                            <h5>Conceitos Fundamentais de História e Geo</h5>
                            <p>Diferenciação rápida de conceitos cruciais.</p>
                            <div id="resumo-hgeografia-conceitos" class="resumo-conteudo">
                                <h6>História:</h6>
                                <ul>
                                    <li>**Tratado de Versalhes:** Descumprido por Hitler ao tomar a bacia do Sarre e remilitarizar a Remânia (Q38/2024).</li>
                                    <li>**Era Vargas (1930s):** Uso do Rádio ("A Voz do Brasil") para propaganda e controle social/trabalhista (Q40/2023).</li>
                                    <li>**Feudalismo:** Poder descentralizado, economia de subsistência, sociedade estamental (Clero, Nobreza, Servos) (Q45/Desafio).</li>
                                </ul>
                                <h6>Geografia:</h6>
                                <ul>
                                    <li>**Agentes do Relevo:** **Internos** (Placas, Vulcões) vs. **Externos** (Água, Vento, Intemperismo) (Q31/2024).</li>
                                    <li>**Inversão Térmica:** Agravamento da poluição em grandes cidades (ar frio/pesado fica preso abaixo do ar quente/leve) (Q32/2025).</li>
                                </ul>
                            </div>
                        </div>

                        <div class="resumo-card" onclick="toggleResumo('resumo-geopolitica-brics')">
                            <h5>Geopolítica e Blocos</h5>
                            <p>Natureza e objetivos do grupo BRICS.</p>
                            <div id="resumo-geopolitica-brics" class="resumo-conteudo">
                                <h6>BRICS (Q35/2025):</h6>
                                <ul>
                                    <li>**Natureza:** Agrupamento **informal** de países emergentes (Brasil, Rússia, Índia, China, África do Sul). **NÃO** é um bloco econômico formal (como União Aduaneira ou Mercado Comum).</li>
                                    <li>**Objetivo:** Cooperação econômica, política e desenvolvimento, atuando como contraponto à hegemonia de países desenvolvidos (G7).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="secao-estrategia">
            <h3>🧠 Técnicas de Memorização e Revisão</h3>
            <p>Aprovação não é só estudar, é saber como estudar e não esquecer na hora da prova. Experimente estas técnicas:</p>
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