/* Módulo com as funções para operar em uma lista*/


/* classe que cria objetos com um contrutor que recebe parametros
obrigatórios*/ 
class Item {
    constructor(nome, preco, comprado = false){
        this.nome = nome;
        this.preco = preco;
        this.comprado = comprado;
    }
}

/* função responsável por recebe um objeto e adiciona ele no localStorage
o primeiro parametro define o nome da chave e o JSON.stringify converte o objeto
para string*/
const adicionarItem = item => {
    localStorage.setItem(item.nome, JSON.stringify(item));
}

/* função responsável por receber o nome da chave e buscar no localStorage e
apagar ela*/
const removerItem = item => {
    localStorage.removeItem(item);
}

/* pega uma chave do localStorage passada pra ela e retorna seus valores */
const retornaElemento = item => {
    return JSON.parse(localStorage.getItem(item));
 }

/* função responsável por modificar o estado do item pra false */ 
const desmarcarItem = item => {
    item.comprado = false;
    adicionarItem(item);
}

/* função responsável por receber o nome de uma chave pega esse objeto do localStorage
e converter para ser modificado, depois verifica se o campo produto.comprado está falso ou true
trocando seus valores cada vez que a função é chamada, depois chama a função adicionarItem que joga o 
resultado no localStorage novamente*/
const marcarItem = item => {
    let produto = retornaElemento(item);
    if (produto.comprado == false){
        produto.comprado = true;
        adicionarItem(produto);
    } else {
        desmarcarItem(produto);
    }
}


/* função responsável por adicionar e retornar uma lista de keys presentes no localStorage*/ 
const listar = () => {
    const lista = [];
    const objetos = Object.keys(localStorage);
    objetos.forEach(element => {
        lista.push(element);
    });
    return lista;
};




// responsável por exportar as funções implementadas
export {Item, adicionarItem, removerItem, marcarItem, listar, retornaElemento};



