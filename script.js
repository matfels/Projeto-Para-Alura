// Função para carregar os dados do JSON uma única vez.
let dados = []; 
async function carregarDados() {
    try {
        const resposta = await fetch("data.json"); // Está recebendo o arquivo .json e não sómente os seus dados.
        dados = await resposta.json(); // Está recebendo apenas os dados do arquivo .json.
        renderizarCards(dados); // Exibe todos os cards inicialmente.
        console.log(dados)
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

// ".card-container" está declarado no HTML, estamos utilizando esse container para inserir os dados.  
const cardcontainer = document.querySelector(".card-container")

// Obtém todos os botões com a classe 'opcao-btn'
const botoes = document.querySelectorAll('.opcao-btn');


// Obtém o elemento onde o resultado será exibido
const resultado = document.getElementById('mensagem-resultado');

// Adiciona um "ouvinte de evento" (event listener) para cada botão
botoes.forEach(button => {
    button.addEventListener('click', (event) => {
        // Pega o ID do botão clicado (ex: 'btn1', 'btn2', etc.)
        const botaoId = event.target.id;
        
        let mensagem = '';
        let texto;
        let botao1;
        let botao2;
        
        // Usa uma estrutura switch para definir a mensagem de acordo com o botão
        switch (botaoId) {
                case 'btn1':
                mensagem = 'Você escolheu a opção quero construir websites 💻🌐.';
                texto = "teste 1 "
                botao1 = "A1. A parte visual do site (o que o usuário vê). (Front-end)"
                
                carregarDados() 
                renderizarCards(texto)

                break;
                
                case 'btn2':
                    mensagem = 'Você escolheu a opção quero criar aplicativos para celulares 📱🤳🏼';
                    texto = 'teste 2';
                    renderizarCards(texto);

                break;
                case 'btn3':
                    mensagem = 'Você escolheu a opção quero trabalhar com análise de dados, inteligência artificial (IA) ou aprendizado de máquina (ML). 📊🤖';
                    texto = 'teste 3';
                    renderizarCards(texto);
                    break;
                case 'btn4':
                    mensagem = 'Você escolheu a opção quero desenvolver jogos, ou sistemas que exigem alta performance e controle de hardware. 🎮🖥';
                break;
                case 'btn5':
                mensagem = 'Você escolheu a opção quero uma linguagem fácil de aprender e versátil. 👨🏽‍💻📚';
                break;
                default:
                    mensagem = 'Você escolheu a opção quero';
                }
                
                // Atualiza o texto do elemento de resultado com a mensagem definida
                resultado.innerHTML = `<h2>${mensagem}<h2>
                `
            });
        });

function renderizarCards(texto){
    cardcontainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards.

    
    let article = document.createElement("article"); // A variável está recebendo a TAG <article></article>
    article.classList.add("card"); // Adicionando um "card" dentro da tag <article>
    // esse innerHTML diz qual dado será inserido, no caso HTML
    article.innerHTML = `
        <div class="botoes-container">
            <button id="btn5" class="opcao-btn">${texto}</button>

            
        </div>
        `
        cardcontainer.appendChild(article); // Dizendo que vamos anexar um filho dentro desse container.
}

