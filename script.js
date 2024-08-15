const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas das mudanças climáticas?",
        alternativas: [
            {
                texto: "A. Desmatamento em larga escala",
                afirmacao: "correta A"
            },
            {
                texto: "B. Uso responsável de recursos naturais",
                afirmacao: "incorreta B"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes práticas ajuda a promover a sustentabilidade ambiental?",
        alternativas: [
            {
                texto: "A. Uso excessivo de plásticos descartáveis",
                afirmacao: "incorreta A"
            },
            {
                texto: "B. Reciclagem e redução de resíduos",
                afirmacao: "correta B"
            }
        ]
    },
    {
        enunciado: "O que é o conceito de pegada ecológica?",
        alternativas: [
            {
                texto: "A. A quantidade de resíduos produzidos por uma pessoa ou empresa",
                afirmacao: "incorreta A"
            },
            {
                texto: "B. A medida do impacto das atividades humanas sobre o meio ambiente",
                afirmacao: "correta B"
            }
        ]
    },
    {
        enunciado: "Qual é uma fonte de energia renovável?",
        alternativas: [
            {
                texto: "A. Energia solar",
                afirmacao: "correta A"
            },
            {
                texto: "B. Energia a carvão",
                afirmacao: "incorreta A"
            }
        ]
    },
    {
        enunciado: "Qual dos seguintes é um benefício da conservação da biodiversidade?",
        alternativas: [
            {
                texto: "A. Aumento da poluição atmosférica",
                afirmacao: "incorreta A"
            },
            {
                texto: "B. Melhoria da resiliência dos ecossistemas",
                afirmacao: "correta B"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "RESPOSTAS";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();