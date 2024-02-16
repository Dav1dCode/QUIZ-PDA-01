import quizData from './data/quiz_data.js';

let tentativas = 0;
let tentativasCorretas = 0;

function mostraTentativas() {
    document.getElementById('tentativas-valor').textContent = tentativas.toString();
    document.getElementById('acertos-valor').textContent = tentativasCorretas.toString();
    document.getElementById('erros-valor').textContent = (tentativas - tentativasCorretas).toString();
}

function exibirPergunta(perguntaObj) {
    let respostaCorreta = false;

    while (!respostaCorreta) {
        const respostaUsuario = prompt(perguntaObj.questao + '\n' + perguntaObj.opcoes.join('\n'));

        if (respostaUsuario === perguntaObj.resposta) {
            alert('Resposta correta!');
            tentativasCorretas++;
            respostaCorreta = true;
        } else {
            alert('Resposta incorreta. A resposta correta é: ' + perguntaObj.resposta);
            tentativas++;
            mostraTentativas();
        }
    }

    tentativas++;
    mostraTentativas();
}

// Função para embaralhar os arrays
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Criei uma cópia do array original contendo apenas as perguntas
const perguntasArray = quizData.filter(item => 'questao' in item);

// Embaralhei apenas as perguntas
embaralharArray(perguntasArray);

// Itero sobre as perguntas embaralhadas usando forEach
for (let i = 0; i < perguntasArray.length; i++) {
    const pergunta = perguntasArray[i];
    exibirPergunta(pergunta);
}

alert('Você concluiu o quiz!');

function runQuiz() {
    let pontuacao = 0;

    for (let i = 0; i < quizData.length; i++) {
        const respostaUsuario = prompt(quizData[i].questao + "\n" + quizData[i].opcoes.join("\n") + "\nSua resposta: ");
        if (respostaUsuario && respostaUsuario.toLowerCase() === quizData[i].resposta.toLowerCase()) {
            pontuacao++;
        }
    }

    alert("Pontuação final: " + pontuacao);
}

runQuiz();
