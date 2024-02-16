const quizData = [
    // DADOS DAS PERGUNTAS HTML
    {
        questao: "Qual é a tag HTML correta para criar um link?",
        opcoes: ["<lnk>", "<anchor>", "<a>", "<link>"],
        resposta: "<link>"
    },

    {
        questao: "Qual é o atributo HTML utilizado para definir o texto alternativo de uma imagem?",
        opcoes: ["altText", "imgAlt", "description", "alt"],
        resposta: "alt"
    }, 

    {
        questao: "Qual é a tag HTML adequada para criar uma lista ordenada?",
        opcoes: ["<ul>", "<li>", "<ol>", "<list>",],
        resposta: "<ol>"
    },

    {
        questao: "Como é possível incluir comentários em um código HTML?",
        opcoes: ["<!-- Este é um comentário -->", "// Este é um comentário", "# Este é um comentário", "/* Este é um comentário */"], 
        resposta: "<!-- Este é um comentário -->"
    },

    {
        questao: "Como incluir um estilo CSS diretamente em uma tag HTML?",
        opcoes: ["<style>tag", "<css>tag", "class atributo", "style atributo"], 
        resposta: "<style>tag"
    },

    // DADOS DAS PERGUNTAS CSS

    { questao: "Qual é a propriedade CSS utilizada para alterar a cor do texto?",
    opcoes: ["text-color", "font-color", "color", "text-style"], 
    resposta: "color"
},

    { questao: "Como podemos selecionar todos os elementos <p> em um documento HTML usando CSS?",
    opcoes: ["p {}", ".p {}", "#p {}", "paragraph {}"], 
    resposta: "p {}"
},

    { questao: "Qual é a propriedade CSS usada para definir a margem interna de um elemento?",
    opcoes: ["padding", "margin", "inner-margin", "spacing"], 
    resposta: "padding"
},

    { questao: "Como podemos centralizar um elemento horizontalmente em CSS?",
    opcoes: ["align: center;", "text-align: center;", "margin: auto;", "horizontal-align: center;"], 
    resposta: "margin: auto;"
},

    { questao: "Qual é a propriedade CSS utilizada para adicionar uma sombra a um texto?",
    opcoes: ["shadow: text;", "text-shadow: 2px 2px 4px #000;", "box-shadow: text;", "text-effect: shadow;"], 
    resposta: "text-shadow: 2px 2px 4px #000;"
},

// DADOS DAS PERGUNTAS JAVASCRIPT-ok
    {
        questao: "Como declarar uma variável em JavaScript?",
        opcoes: ["<variable x>", "<var x>", "<v x>", "<int x>"],
        resposta: "<var x>"
    },

    {
        questao: "Qual é a função do método querySelector em JavaScript?",
        opcoes: ["<Selecionar um elemento pelo seu identificador.>", "<Selecionar um elemento pela sua classe.>", "<Selecionar um elemento pelo nome da tag.>", "<Selecionar múltiplos elementos pela classe.>"],
        resposta: "<Selecionar um elemento pelo seu identificador.>"
    },

    {
        questao: "Como verificar se uma variável é do tipo string em JavaScript?",
        opcoes: ["<if (typeof x == str)>", "<if (typeOf x == string)>", "<if (typeof x === string)>", "<if (x.type === string)>"],
        resposta: "<if (typeof x === string)>"
    },

    {
        questao: "Qual é a forma correta de escrever um loop for em JavaScript?",
        opcoes: ["<for (i = 0; i < 10; i++) {...}>", "<for (i = 0; i < 10) {...}>", "<loop (i = 0; i < 10; i++) {...}>", "<for (i < 10; i++) {...}>"],
        resposta: "<for (i = 0; i < 10; i++) {...}>"
    },

    {
        questao: "Como você declara uma função em JavaScript?",
        opcoes: ["<function minhaFuncao() => {...}>", "<function minhaFuncao(): {...}>", "<minhaFuncao = function() {...}>", "<def minhaFuncao() {...}>"],
        resposta: "<for (i = 0; i < 10; i++) {...}>"
    },
    
        //ADICIONE AS PERGUNTAS De Git 5 PERGUNTAS
    { question: 'Qual comando do git é usado pra incializar um novo repositório?',
    options: ['git init', 'git commit', 'git add', 'git status'],
    correctAnswer: 'git init'},
        
    { question: 'Qual comando do git é usado para verificar o status do repositório?',
    options: ['git add', 'git commit', 'git status', 'git init'],
    correctAnswer: 'git status'},
    
    { question: 'Qual comando do git é usado pra criar um novo commiit com as alterações adicionadas?',
    options: ['git add', 'git commit', 'git init', 'git status'],
    correctAnswer: 'git commit'},
    
    { question: 'Qual comando do git é usado para adicionar arquivos ao índice para prepará-los para serem commitados?',
    options: ['git add', 'git commit', 'git init', 'git status'],
    correctAnswer: 'git add'},
    
    { question: 'Como desfazer as últimas alterações no Git, descartando as modificações no diretório de trabalho??',
    options: ['git revert', 'git reset --hard', 'git branch -d', 'git tag'],
    correctAnswer: 'git reset --hard'},
]
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

export default quizData;