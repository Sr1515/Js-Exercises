window.addEventListener("load", function () {
    const banco = [];
    const botao = document.querySelector("button");


    class ClienteBanco {

        constructor(nome, cpf, saldo) {
          this.nome = nome;
          this.cpf = cpf;
          this.saldo = saldo;
        }

        get nomeConta(){
            return this.nome;
        }

        get saldoConta(){
            return this.saldo;
        }
    
        set setSacar(setSaldo){
            this.saldo -= setSaldo;
        }

        set setDepositar(setSaldo){
            this.saldo += setSaldo;
        }
    }

    function render() {
        console.log(banco)
        const lista = document.getElementById("resultado");
        lista.innerHTML = null;

        banco.forEach(cliente =>  {

            const novoCliente = document.createElement("li");
            const botaoSacar = document.createElement("button");
            const botaoDepositar = document.createElement("button");

            const espaco = " ";
            botaoSacar.textContent = "Sacar100";
            botaoDepositar.textContent = "Depositar100";

            novoCliente.textContent = `${cliente.nomeConta}, saldo: ${cliente.saldoConta}`;

            novoCliente.append(espaco);
            novoCliente.appendChild(botaoSacar);
            novoCliente.appendChild(botaoDepositar);

            lista.appendChild(novoCliente);

            botaoSacar.addEventListener("click", function () {
                cliente.setSacar = 100;
                render();
            }); 

            botaoDepositar.addEventListener("click", function () {
                cliente.setDepositar = 100;
                render();
            }); 

        });
    };

    botao.addEventListener("click", () => {
    
        const name = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const saldo = document.getElementById("saldo").value;
        

        function adicionarCliente(name, cpf, saldo) {
            let cliente = new ClienteBanco(name, cpf, parseInt(saldo));
            banco.push(cliente);
            render();
        }

        adicionarCliente(name, cpf, saldo);  
    });
}); 
