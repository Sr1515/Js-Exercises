import {Item, adicionarItem, removerItem, marcarItem, listar} from './modulos/lista.js';

window.addEventListener("load", function (){
    const botao = document.getElementById("botao");
    
    // função que renderiza a página e adiciona os elementos na tela
    function render() {   
        // recebe uma lista de chaves presentes no localStorage
        const list = listar();

        const tabela = document.getElementById("tabela");
        const topo = document.createElement("tr");
        
        tabela.innerHTML = null;

        // cria e adiciona os nome das colunas da tabela
        const nome = document.createElement("td");
        nome.textContent = "Nome";
        const preco = document.createElement("td");
        preco.textContent = "Preço";
        const comprado = document.createElement("td");
        comprado.textContent = "Comprado";
        const acoes = document.createElement("td");
        acoes.textContent = "Ações";

        // adiciona as colunas na tabela
        topo.append(nome);
        topo.append(preco);
        topo.append(comprado);
        topo.append(acoes);
        tabela.appendChild(topo)  

        // percorre a lista de chaves
        list.forEach(element => {
            /* pega o nome da chave e pega o objeto com o nome e
            retorna o objeto convertido para poder ser utilizado */
            const item = JSON.parse(localStorage.getItem(element));

            // cria os elementos de linha para ser adiciona na tabela
            const elemento = document.createElement("tr");
            const nomeItem = document.createElement("td");
            const precoItem = document.createElement("td");
            const compradoItem = document.createElement("td");
            const acoesItem = document.createElement("td");
            const botaoAcoes = document.createElement("button");

            /* criar um elemento input e define o seu tipo 
            e ao mesmo tempo faz um set de algumas informações*/ 
            const input = document.createElement('input');
            input.type = "checkbox";
            input.name = "name";

            /* por padrão recebe o input.checked igual ao valor booleno do objeto*/
            input.checked = item.comprado;

            /* quando o checkbox for clicado aciona uma função que chama
            a função marcarItem que altera a propriedade do objeto tanto para false quanto para true*/
            input.onclick = function() {
                marcarItem(item.nome);
                render();
            }
            
            // define os valores dos outros tds
            compradoItem.append(input);
            botaoAcoes.textContent = "Remover";
            nomeItem.textContent = item.nome;

            if (item.comprado == true){
                nomeItem.style.textDecoration = "line-through";
            }
            
            precoItem.textContent = `R$: ${item.preco}`;
            acoesItem.append(botaoAcoes);
    
            // adiciona os tds a uma tr chamada elemento e adiciona em tabela
            elemento.append(nomeItem);
            elemento.append(precoItem);
            elemento.append(compradoItem);
            elemento.append(acoesItem);
            tabela.appendChild(elemento);
    
            /* função que quando clicada chama a função removerItem do localStorage
            e renderiza a página para atualizar e ver as modificações*/
            botaoAcoes.addEventListener("click", function () {
                removerItem(element);
                render();
            }); 

        }); 
    }

    // assim que carrega a página já renderiza os elementos
    render();

    // evento que espera se adicionado um elemento novo
    botao.addEventListener("click", () => {
    
        const item = document.getElementById("nomeProduto").value;
        const preco = document.getElementById("precoProduto").value;

        /* função responsável por gerar um um objeto com os parametros passados
        e chamar a função criarItem que adiciona o elemento no localStorage e renderiza a paǵina*/ 
        const criarItem = (item, preco) => {
            let obj = new Item(item, preco);
            adicionarItem(obj);
            render();
        }

        // chamada da função
        criarItem(item, preco);
    });

})