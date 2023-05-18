window.addEventListener("load", function () {
    const list = [];
    const botao = document.querySelector("button");


    class Transacao {

        constructor(descricao, valor) {
          this.descricao = descricao;
          this.valor = valor;
        }

        get pegarDescricao(){
            return this.descricao;
        }

        get pegarValor(){
            return this.valor;
        }
    }

    function render() {
        console.log(list)
        const lista = document.querySelector("table");
        const div = document.querySelector("div");
        lista.innerHTML = null;

        list.forEach(transacao =>  {
            const resultadoSaldo = document.createElement("div");
            const elemento = document.createElement("tr");
            const nomeTransacao = document.createElement("td");
            const valorTransacao = document.createElement("td");

            div.innerHTML = null;

            if (transacao.pegarValor <= 0){
                valorTransacao.style.backgroundColor = "red";
            }
            else {
                valorTransacao.style.backgroundColor = "green";
            }

            let totalSaldo = list.reduce(function (total, saldo) {
                if (saldo < 0) {
                    return total -= saldo.pegarValor;
                }
                else {
                    return total += saldo.pegarValor;
                }
            }, 0);
            
            nomeTransacao.textContent = transacao.pegarDescricao;
            valorTransacao.textContent = transacao.pegarValor;

            elemento.appendChild(nomeTransacao);
            elemento.appendChild(valorTransacao);
            lista.appendChild(elemento);

            resultadoSaldo.textContent = `O saldo total é de: ${totalSaldo}`
            div.appendChild(resultadoSaldo);
        });
    };

    botao.addEventListener("click", () => {
    
        const descricao = document.getElementById("descricao").value;
        const valor = document.getElementById("valor").value;

        function adicionarTransacao(descricao, valor) {
            let cliente = new Transacao(descricao, parseInt(valor));
            list.push(cliente);
            render();
        }

        adicionarTransacao(descricao, valor);  
    });
}); 
