window.addEventListener("load", function () {
    const botao = document.querySelector("button");
    const resultado = document.getElementById("resultado");

    botao.addEventListener("click", function () {
        const campoUm = document.getElementById("CampoUm").value;
        const campoDois = document.getElementById("CampoDois").value;
        let vetor = campoUm.split(campoDois);

        let maiorNumero = undefined;
        let menorNumero = undefined;

        vetor.forEach(numero => {
            if (maiorNumero === undefined && menorNumero === undefined) {
                maiorNumero = parseInt(numero);
                menorNumero = parseInt(numero);
            }
            else if (numero > maiorNumero) {
                maiorNumero = parseInt(numero);
            }
            else if (numero < menorNumero) {
                menorNumero = parseInt(numero);
            }
        });

        resultado.textContent = `O maior número é ${maiorNumero} e o menor numero é ${menorNumero}`;
    });
});