// Função para carregar os dados do JSON uma única vez.
let dados = []; 
async function carregarDados() {
    try {
        const resposta = await fetch("data.json"); // Está recebendo o arquivo .json e não sómente os seus dados.
        dados = await resposta.json(); // Está recebendo apenas os dados do arquivo .json.
        // renderizarCards(dados); // Vamos controlar a renderização dentro dos cliques.
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

// ".card-container" está declarado no HTML, estamos utilizando esse container para inserir os dados.  
const cardcontainer = document.querySelector(".card-container")

// Obtém todos os botões com a classe 'opcao-btn'
const botoes = document.querySelectorAll('.opcao-btn');
console.log(botoes)



// Obtém o elemento onde o resultado será exibido
const resultado = document.getElementById('mensagem-resultado');
const proximaPergunta = document.getElementById('proxima-pergunta');

// Adiciona um "ouvinte de evento" (event listener) para cada botão
botoes.forEach(button => {
    
    button.addEventListener('click', (event) => {
        // Pega o ID do botão clicado (ex: 'btn1', 'btn2', etc.)
        const botaoId = event.target.id;
        let proxima = '';
        let mensagem = '';
        let texto;
        let botao1;
        let dadoInserir = [];
        
        // Usa uma estrutura switch para definir a mensagem de acordo com o botão
        switch (botaoId) {
                case 'btn1':
                    mensagem = 'Você escolheu a opção quero construir websites 💻🌐.';
                    proxima = "Qual parte do desenvolvimento web te interessa mais?";
                    botao1 = dados.passos[1].opcoes;
                    
                    for (dado in botao1){
                        dadoInserir.push(botao1[dado].texto)
                    }
                    renderizarCards(dadoInserir, botaoId) // Renderiza o card com o texto correto
                break;
                
                case 'btn2':
                    mensagem = 'Você escolheu a opção quero criar aplicativos para celulares 📱🤳🏼';
                    botao1 = dados.passos[2].opcoes;
                    for (dado in botao1){
                        dadoInserir.push(botao1[dado].texto)        
                    }
                    
                    renderizarCards(dadoInserir, botaoId);
                break;
                case 'btn3':
                    mensagem = 'Você escolheu a opção quero trabalhar com análise de dados, inteligência artificial (IA) ou aprendizado de máquina (ML). 📊🤖';
                    botao1 = dados.passos[3].opcoes;
                    
                    for (dado in botao1){
                        dadoInserir.push(botao1[dado].texto)
                    }
                    
                    renderizarCards(dadoInserir, botaoId);
                    break;
                case 'btn4':
                    mensagem = 'Você escolheu a opção quero desenvolver jogos, ou sistemas que exigem alta performance e controle de hardware. 🎮🖥';
                    botao1 = dados.passos[4].opcoes;
                
                    for (dado in botao1){
                    dadoInserir.push(botao1[dado].texto)  
                    }                    
                    
                    renderizarCards(dadoInserir, botaoId);
                    break;
                case 'btn5':
                    botao1 = dados.passos[2].opcoes;

                    for (dado in botao1){
                    dadoInserir.push(botao1[dado].texto)  
                    }
                    
                    renderizarCards(bodadoInserirtao1), botaoId;
                    mensagem = 'Você escolheu a opção quero uma linguagem fácil de aprender e versátil. 👨🏽‍💻📚';
                break;
                case 'btn6':
                    console.log("==================== case 6 =====================")
                break;
                
                default:
                    mensagem = 'Você escolheu a opção quero';


                }
                
                // Atualiza o texto do elemento de resultado com a mensagem definida
                resultado.innerHTML = `<h2>${mensagem}<h2>
                `
                proximaPergunta.innerHTML = `<h2>${proxima}<h2>`
            });
        });

// Chama a função para carregar os dados assim que o script for executado.
carregarDados();



function renderizarCards(texto, botaoId){
    cardcontainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards.
    let article = document.createElement("article"); // A variável está recebendo a TAG <article></article>
    article.classList.add("card"); // Adicionando um "card" dentro da tag <article>
    // esse innerHTML diz qual dado será inserido, no caso HTML
    if (botaoId === 'btn1' || botaoId === 'btn2'){

        article.innerHTML = `
        <div class="botoes-container">
        <button id="btn6" class="opcao-btn">${texto[0]}</button>
        <button id="btn7" class="opcao-btn">${texto[1]}</button>
        <button id="btn8" class="opcao-btn">${texto[2]}</button>
        </div>
        `
        cardcontainer.appendChild(article); // Dizendo que vamos anexar um filho dentro desse container.
    }else if (botaoId === 'btn3' || botaoId === 'btn4'){
        article.innerHTML = `
        <div class="botoes-container">
        <button id="btn6" class="opcao-btn">${texto[0]}</button>
        <button id="btn7" class="opcao-btn">${texto[1]}</button>
        </div>
        `
        cardcontainer.appendChild(article); // Dizendo que vamos anexar um filho dentro desse container.
    }


}
 
    

