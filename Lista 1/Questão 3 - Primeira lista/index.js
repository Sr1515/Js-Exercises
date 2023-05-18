window.addEventListener("load", function () {
    const botao = document.querySelector("button");
    const div = document.getElementById("resultado");

    function calculaMelhorCombustivel(gasolina, alcool) {
        const precoTotalGasolina = gasolina * 0.7;
        if (precoTotalGasolina < alcool) {
            return 0;
        }
        else {
            return 1;
        }
    };

    botao.addEventListener("click", function melhorCombustivel() {
        const gasolinaValor = document.getElementById("gasolina").value;
        const alcoolValor = document.getElementById("alcool").value;
        const resultadoComparacao = calculaMelhorCombustivel(gasolinaValor, alcoolValor);

        if (resultadoComparacao == 0) {
            div.textContent = "Compensa mais abastecer com gasolina";
        }
        else if (resultadoComparacao == 1) {
            div.textContent = "Compensa mais abastecer com alcool";
        }
    });

});