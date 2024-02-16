import quizData from './data/quiz_data.js';

let tentativas = 0;
let tentativasCorretas = 0;

function mostraTentativas() {
    document.getElementById('tentativas-valor').textContent = tentativas.toString();
    document.getElementById('acertos-valor').textContent = tentativasCorretas.toString();
    document.getElementById('erros-valor').textContent = (tentativas - tentativasCorretas).toString();
}

function exibirPergunta(perguntaObj) {
    while (true) {
        const respostaUsuario = prompt(perguntaObj.questao + '\n' + perguntaObj.opcoes.join('\n'));

        if (respostaUsuario === perguntaObj.resposta) {
            alert('Resposta correta!');
            tentativasCorretas += 1;
            break; // Se a resposta estiver correta, sai do loop
        } else {
            alert('Resposta incorreta. A resposta correta é: ' + perguntaObj.resposta);
            tentativas += 1;
            mostraTentativas();
            return false; // Se a resposta estiver incorreta, retorna false
        }
    }
    tentativas += 1;
    mostraTentativas();
    return true;
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

    if (!exibirPergunta(pergunta)) {
        alert('Você errou! O quiz será encerrado.');
        break; // Encerra o loop se o usuário errar
    }
}

function runQuiz() {
    let pontuacao = 0;
    let i = 0;

    while (i < quizData.length) {
        const respostaUsuario = prompt(quizData[i].questao + "\n" + quizData[i].opcoes.join("\n") + "\nSua resposta: ");
        if (respostaUsuario && respostaUsuario.toLowerCase() === quizData[i].resposta.toLowerCase()) {
            pontuacao++;
            i++;
        } else {
            i = 0; // Retorna para a primeira pergunta
            pontuacao = 0; // Zera a pontuação
        }
    }

    alert("Pontuação final: " + pontuacao);
}

runQuiz();
