window.addEventListener("load", function () {
    const botao = document.querySelector("button");
    const pessoas = [];

    function render() {
        let maiorSalario = undefined;
        let salarioNome = "";

        const lista = document.getElementById("lista");
        const resultadoFinal = document.createElement("div");
        const salariosTotal = document.createElement("div");
        lista.innerHTML = null;

        for (const pessoa of pessoas) {
            const novoItemLista = document.createElement("li");
            novoItemLista.innerHTML = `Nome: ${pessoa.nome}<br> Salario: ${pessoa.salario}<br><br>`;
            lista.appendChild(novoItemLista);

            if (maiorSalario === undefined) {
                maiorSalario = pessoa.salario;
                salarioNome = pessoa.nome;
            }
            else if (pessoa.salario > maiorSalario) {
                maiorSalario = pessoa.salario;
                salarioNome = pessoa.nome;
            }
        };

        let total = pessoas.reduce(function (total, numero) {
            if (numero) {
                return total + numero.salario;
            }
        }, 0);

        resultadoFinal.innerHTML = `A pessoa que tem o maior salário é ${salarioNome} com valor de R$: ${maiorSalario} reais`;
        salariosTotal.innerHTML = `O total de salários pagos é de R$: ${total} reais`
        lista.appendChild(resultadoFinal);
        lista.appendChild(salariosTotal);
    };


    botao.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const salario = document.getElementById("salario").value;

        function adicionarSalario(nome, salario) {
            const obj = { "nome": nome, "salario": parseInt(salario) };
            pessoas.push(obj);
            render();
        };

        adicionarSalario(nome, salario);
    });
});

