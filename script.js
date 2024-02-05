import quizData from './data/quiz_data.js'

function exibirPergunta(perguntaObj) {
    const respostaUsuario = prompt(perguntaObj.questao + '\n' + perguntaObj.opcoes.join('\n'));
    
    if (respostaUsuario === perguntaObj.resposta) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta. A resposta correta é: ' + perguntaObj.resposta);
    }
}

quizData.forEach((pergunta) => {
    exibirPergunta(pergunta);
});