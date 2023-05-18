window.addEventListener("load", function () {
    const botao = document.querySelector("button");

    botao.addEventListener("click", function calculaPotencia() {
        const base = document.getElementById("base").value;
        const expoente = document.getElementById("expoente").value;
        const resultado = document.querySelector("div");

        const valorCalculo = Math.pow(base, expoente);
        resultado.textContent = valorCalculo;
    });
});