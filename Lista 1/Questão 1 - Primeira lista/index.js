window.addEventListener("load", function () {
    const botao = document.querySelector("button");
    const lista = document.querySelector("ul");

    botao.addEventListener("click", function gerarNumero() {
        const numeroGerado = Math.round(Math.random() * 100);
        const novoItemLista = document.createElement("li");
        novoItemLista.textContent = numeroGerado;
        lista.appendChild(novoItemLista);
    });

});