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
                    Idbotao =  ['btn6', 'btn7', 'btn8']
                    
                    for (dado in botao1){
                        dadoInserir.push(botao1[dado].texto)
                    }
                    renderizarCards(dadoInserir, botaoId, Idbotao) // Renderiza o card com o texto correto
                    renderizarResultadoFinal(" ",botaoId)

                break;
                
                case 'btn2':
                    mensagem = 'Você escolheu a opção quero criar aplicativos para celulares 📱🤳🏼';
                    proxima = "Você precisa de um app nativo (melhor performance) ou multiplataforma (código único)?";
                    botao1 = dados.passos[2].opcoes;
                    Idbotao =  ['btn9', 'btn10', 'btn11']
                    for (dado in botao1){
                        dadoInserir.push(botao1[dado].texto)        
                    }
                    
                    renderizarCards(dadoInserir, botaoId, Idbotao);
                    renderizarResultadoFinal(" ",botaoId)
                break;
                case 'btn3':
                    proxima = "Qual é o seu foco na área de dados?"
                    mensagem = 'Você escolheu a opção quero trabalhar com análise de dados, inteligência artificial (IA) ou aprendizado de máquina (ML). 📊🤖';
                    botao1 = dados.passos[3].opcoes;
                    Idbotao =  ['btn12', 'btn13']
                    
                    for (dado in botao1){
                        dadoInserir.push(botao1[dado].texto)
                    }
                    
                    renderizarCards(dadoInserir, botaoId, Idbotao);
                    renderizarResultadoFinal(" ",botaoId)
                    break;
                case 'btn4':
                    proxima = 'Seu projeto exige controle de memória e extrema velocidade?'
                    mensagem = 'Você escolheu a opção quero desenvolver jogos, ou sistemas que exigem alta performance e controle de hardware. 🎮🖥';
                    botao1 = dados.passos[4].opcoes;
                    Idbotao =  ['btn14', 'btn15']
                
                    for (dado in botao1){
                    dadoInserir.push(botao1[dado].texto)  
                    }                    
                    
                    renderizarCards(dadoInserir, botaoId, Idbotao)
                    renderizarResultadoFinal(" ",botaoId)
                    break;
                case 'btn5':
                    proxima = 'O que você valoriza mais para começar?'
                    mensagem = 'Você escolheu a opção quero uma linguagem fácil de aprender e versátil. 👨🏽‍💻📚';
                    botao1 = dados.passos[5].opcoes;
                    Idbotao =  ['btn16', 'btn17' ]    
                        
                    for (dado in botao1){
                    dadoInserir.push(botao1[dado].texto)  
                    }                    
                   
                    renderizarCards(dadoInserir, botaoId, Idbotao)
                    renderizarResultadoFinal(" ",botaoId)
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

function renderizarResultadoFinal(texto, botaoId){
    const retornofinal = document.getElementById('retorno-final');
    if (botaoId === 'btn6' || botaoId === 'btn7' || botaoId === 'btn8' || botaoId === 'btn9' || botaoId === 'btn10' || botaoId === 'btn11' || botaoId === 'btn12' || botaoId === 'btn13' || botaoId === 'btn14' || botaoId === 'btn15' || botaoId === 'btn16' || botaoId === 'btn17' || botaoId === 'btn18' || botaoId === 'btn19'){

        retornofinal.innerHTML = `<h2>${texto}<h2>`
        } else {
        texto = " "
        retornofinal.innerHTML = `<h2>${texto}<h2>`
            

        }
    }

function clicarBotao(botaoId){
    switch (botaoId) {
        case 'btn6':
            resposta = (dados.passos[1].opcoes[0].resultado.linguagem) + ". " + (dados.passos[1].opcoes[0].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)
        break;
        case 'btn7':
            console.log("Clicou no botão 'btn7' ");
            resposta = (dados.passos[1].opcoes[1].resultado.linguagem)+ ". " + (dados.passos[1].opcoes[1].resultado.detalhe);
            renderizarResultadoFinal(resposta, botaoId)            
        break;
        case 'btn8':
            resposta = (dados.passos[1].opcoes[2].resultado.linguagem) + ". " + (dados.passos[1].opcoes[2].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn9':
            resposta = (dados.passos[2].opcoes[0].resultado.linguagem) + ". " + (dados.passos[2].opcoes[0].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn10':
            resposta = (dados.passos[2].opcoes[1].resultado.linguagem) + ". " + (dados.passos[2].opcoes[1].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn11':
            resposta = (dados.passos[2].opcoes[2].resultado.linguagem) + ". " + (dados.passos[2].opcoes[2].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn12':
            resposta = (dados.passos[3].opcoes[0].resultado.linguagem) + ". " + (dados.passos[3].opcoes[0].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn13':
            resposta = (dados.passos[3].opcoes[1].resultado.linguagem) + ". " + (dados.passos[3].opcoes[1].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn14':
            resposta = (dados.passos[4].opcoes[0].resultado.linguagem) + ". " + (dados.passos[4].opcoes[0].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn15':
            resposta = (dados.passos[4].opcoes[1].resultado.linguagem) + ". " + (dados.passos[4].opcoes[1].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn16':
            resposta = (dados.passos[5].opcoes[0].resultado.linguagem) + ". " + (dados.passos[5].opcoes[0].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn17':
            resposta = (dados.passos[5].opcoes[1].resultado.linguagem) + ". " + (dados.passos[5].opcoes[1].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn18':
            resposta = (dados.passos[6].opcoes[0].resultado.linguagem) + ". " + (dados.passos[6].opcoes[0].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
        case 'btn19':
            resposta = (dados.passos[6].opcoes[1].resultado.linguagem) + ". " + (dados.passos[6].opcoes[1].resultado.detalhe ) ;
            renderizarResultadoFinal(resposta, botaoId)            

        break;
    }
}



function renderizarCards(texto, botaoId, Idbotao){
    cardcontainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards.
    let article = document.createElement("article"); // A variável está recebendo a TAG <article></article>
    article.classList.add("card"); // Adicionando um "card" dentro da tag <article>
    // esse innerHTML diz qual dado será inserido, no caso HTML
    console.log(Idbotao[0])
    if (botaoId === 'btn1' || botaoId === 'btn2'){

        article.innerHTML = `
        <div class="botoes-container">
        <button id="btn6" class="opcao-btn" onclick="clicarBotao('${Idbotao[0]}')">${texto[0]}</button>
        <button id="btn7" class="opcao-btn" onclick="clicarBotao('${Idbotao[1]}')">${texto[1]}</button>
        <button id="btn8" class="opcao-btn" onclick="clicarBotao('${Idbotao[2]}')">${texto[2]}</button>
        </div>
        `
        cardcontainer.appendChild(article); // Dizendo que vamos anexar um filho dentro desse container.
    }else if (botaoId === 'btn3' || botaoId === 'btn4' || botaoId === 'btn5'){
        article.innerHTML = `
        <div class="botoes-container">
        <button id="btn6" class="opcao-btn" onclick="clicarBotao('${Idbotao[0]}')">${texto[0]}</button>
        <button id="btn7" class="opcao-btn" onclick="clicarBotao('${Idbotao[1]}')">${texto[1]}</button>
        </div>
        `
        cardcontainer.appendChild(article); // Dizendo que vamos anexar um filho dentro desse container.
    }

}