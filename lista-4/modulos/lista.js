/* Módulo com as funções para operar em uma lista*/

class Item {
    constructor(nome, preco, comprado = false){
        this.nome = nome;
        this.preco = preco;
        this.comprado = comprado;
    }
}


const adicionarItem = item => {
    localStorage.setItem(item.nome, JSON.stringify(item));
}

const removerItem = item => {
    localStorage.removeItem(item);
}

const marcarItem = item => {
    let produto = JSON.parse(localStorage.getItem(item.nome));
    produto.comprado = true;
    adicionarItem(produto);
}

const listar = () => {
    const objetos = Object.keys(localStorage);
    const tabela = document.getElementById("tabela");
    const topo = document.createElement("tr");
    
    tabela.innerHTML = null;

    const nome = document.createElement("td");
    nome.textContent = "Nome";
    const preco = document.createElement("td");
    preco.textContent = "Preço";
    const comprado = document.createElement("td");
    comprado.textContent = "Comprado";
    const acoes = document.createElement("td");
    acoes.textContent = "Ações";

    topo.append(nome);
    topo.append(preco);
    topo.append(comprado);
    topo.append(acoes);
    tabela.appendChild(topo)

    objetos.forEach(element => {
        const item = JSON.parse(localStorage.getItem(element));

        const elemento = document.createElement("tr");

        const nomeItem = document.createElement("td");
        const precoItem = document.createElement("td");
        const compradoItem = document.createElement("td");
        const acoesItem = document.createElement("td");

        const botaoAcoes = document.createElement("button");

        compradoItem.textContent = "X"
        botaoAcoes.textContent = "Remover";

        nomeItem.textContent = item.nome;
        precoItem.textContent = item.preco;
        acoesItem.append(botaoAcoes);

        elemento.append(nomeItem);
        elemento.append(precoItem);
        elemento.append(compradoItem);
        elemento.append(acoesItem);

        tabela.appendChild(elemento);

        botaoAcoes.addEventListener("click", function () {
            removerItem(element);
            render();
        }); 
    }); 
};


const render = () => {
    listar();      
}
    
 
export {Item, adicionarItem, removerItem, marcarItem, listar, render};



