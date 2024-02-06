import quizData from './data/quiz_data.js';

let tentativas = 0;
let tentativasCorretas = 0;

function mostraTentativas(){
    document.getElementById('tentativas-valor').textContent = tentativas.toString();
    document.getElementById('acertos-valor').textContent = tentativasCorretas.toString();
    document.getElementById('erros-valor').textContent = (tentativas - tentativasCorretas).toString();
}

function exibirPergunta(perguntaObj) {
    const respostaUsuario = prompt(perguntaObj.questao + '\n' + perguntaObj.opcoes.join('\n'));

    if (respostaUsuario === perguntaObj.resposta) {
        alert('Resposta correta!');

        tentativasCorretas += 1;
        console.log(tentativasCorretas);
    } else {
        alert('Resposta incorreta. A resposta correta é: ' + perguntaObj.resposta);
    }

    tentativas += 1;
    console.log(tentativas);
    mostraTentativas();
}

quizData.forEach((pergunta) => {
    exibirPergunta(pergunta);
});