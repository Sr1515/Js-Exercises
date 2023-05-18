window.addEventListener("load", function () {
    const tarefas = [];

    function render() {
        const lista = document.getElementById("lista");
        lista.innerHTML = null;

        tarefas.forEach(function (task) {
            const novoItemLista = document.createElement("li");
            const botaoDelete = document.createElement("button");
            const espaco = " ";

            botaoDelete.textContent = "X";
            novoItemLista.innerText = task;

            novoItemLista.append(espaco);
            novoItemLista.appendChild(botaoDelete);
            lista.appendChild(novoItemLista);

            botaoDelete.addEventListener("click", function () {
                lista.removeChild(novoItemLista);
                tarefas.pop(novoItemLista);
            });
        });
    };

    render();

    document.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            const inputText = document.getElementById("input-text").value;

            function adicionarTarefa(tarefa) {
                tarefas.push(tarefa);
                render();
            }

            adicionarTarefa(inputText);
        };
    });
});

