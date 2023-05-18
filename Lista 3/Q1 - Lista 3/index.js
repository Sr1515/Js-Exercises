window.addEventListener("load", function () {
    const list = [];
    const botao = document.querySelector("button");

    function render() {
        console.log(list);
        const ul = document.getElementById("resultado");
        ul.innerHTML = null;

        list.sort((evento1, evento2) => {
            if(evento1.data > evento2.data){
                return 1;
            }else if (evento1.data < evento2.data){
                return -1;
            }else {
                return 0
            }
        });

        list.forEach(elemento => {
            let elementoLi = document.createElement("li");
            elementoLi.textContent = `${elemento.nome} : ${elemento.data}`;
            ul.appendChild(elementoLi);
        });
    };

    botao.addEventListener("click", () => {
    
        const evento = document.getElementById("evento").value;
        const dataEvento = document.getElementById("dataEvento").value;
        

        function adicionarTarefa(evento, data) {
            list.push({nome: evento, data: dataEvento});
            render();
        }


        adicionarTarefa(evento, dataEvento);
        
        
    });
});