const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você utiliza do transporte público?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Você tem conhecimento do transporte público, mas não o utiliza. "
            },
            {
                texto: "Sim",
                afirmacao: "Você tem conhecimento do transporte público e o utiliza."
            }
        ]
    },
    {
        enunciado: "O transporte público é para você um ambiente agradável?",
        alternativas: [
            {
                texto: "Não, o ambiente não é agradável.",
                afirmacao: "Você odeia ou não sabe como é andar de ônibus."
            },
            {
                texto: "Sim, o ambiente é agradável.",
                afirmacao: "Você ama andar de transporte público."
            }
        ]
    },
    {
        enunciado: "Você ainda andaria de ônibus?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: "Você não voltaria mais a andar de ônibus."
            },
            {
                texto: "Sim.",
                afirmacao: "Mesmo com todos pontos positivos e negativo, você ainda andaria de ônibus."
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
    caixaPerguntas.textContent = "Londrina, 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
