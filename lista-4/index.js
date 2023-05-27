import {Item, adicionarItem, removerItem, marcarItem, listar, render} from './modulos/lista.js';

window.addEventListener("load", function (){
    const botao = document.getElementById("botao");
    render();
    
   
    botao.addEventListener("click", () => {
    
        const item = document.getElementById("nomeProduto").value;
        const preco = document.getElementById("precoProduto").value;

        const criarItem = (item, preco) => {
            let obj = new Item(item, preco);
            adicionarItem(obj);
            render();
        }

        criarItem(item, preco);
    });

})