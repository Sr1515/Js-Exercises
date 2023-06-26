window.addEventListener("load", () => {
    fetch("http://localhost:3000/listaObjeto")
      .then((resposta) => resposta.json())
      .then((arquivoJson) => {
        render(arquivoJson);
      });
  });
  
  
  function carregarInformacoes(PartidaJogo) {
    const menu = document.querySelector("#informacoes");

    const tituloPartida = document.querySelector("#tituloPartida");
    const localPartida = document.querySelector("#localPartida");
    const dataHoraPartida = document.querySelector("#dataHoraPartida");

    tituloPartida.textContent = `Nome da Partida: ${PartidaJogo.titulo}`;

    localPartida.textContent = `Local: ${PartidaJogo.local}`;

    dataHoraPartida.textContent = `Data e Hora: ${PartidaJogo.dataHora}`;

    menu.appendChild(tituloPartida);
    menu.appendChild(localPartida);
    menu.appendChild(dataHoraPartida);
    }


  function render(arquivoJson) {
    carregarInformacoes(arquivoJson);

    const jogadores = [];
    Array.from(arquivoJson.jogadores).forEach(element => {
        jogadores.push(element);
    });

    const tabela = document.getElementById("tabela");
    const topo = document.createElement("tr");
        
    tabela.innerHTML = null;

    // cria e adiciona os nome das colunas da tabela
    const nome = document.createElement("td");
    nome.textContent = "Nome";
    nome.style.width = "300px";
    nome.style.textAlign = "center";

    const telefone = document.createElement("td");
    telefone.textContent = "Telefone";
    telefone.style.width = "300px";
    telefone.style.textAlign = "center";

    const presenca = document.createElement("td");
    presenca.textContent = "Presença";
    presenca.style.width = "300px";
    presenca.style.textAlign = "center";

    const acoes = document.createElement("td");
    acoes.textContent = "Ações";
    acoes.style.width = "300px";
    acoes.style.textAlign = "center";

    // adiciona as colunas na tabela
    topo.append(nome);
    topo.append(telefone);
    topo.append(presenca);
    topo.append(acoes);
    tabela.appendChild(topo);

    jogadores.forEach(element => {
        const elemento = document.createElement("tr");
        const nomeJogador = document.createElement("td");
        nomeJogador.style.width = "300px";

        const telefoneJogador = document.createElement("td");
        telefoneJogador.style.width = "300px";
        const presencaJogador = document.createElement("td");

        const acoes = document.createElement("td");
        acoes.style.width = "300px";
        
        const botaoAcoes = document.createElement("button");


        const input = document.createElement('input');
        input.type = "checkbox";
        input.name = "name";
        input.checked = element.presenca;
        presencaJogador.append(input);

        if (element.presenca) {
          elemento.style.backgroundColor = "green";
        }
        
        botaoAcoes.textContent = "Remover";
        nomeJogador.textContent = `${element.nome}`;

        telefoneJogador.textContent = `${element.telefone}`;
        acoes.append(botaoAcoes);
            
        elemento.append(nomeJogador);
        elemento.append(telefoneJogador);
        elemento.append(presencaJogador);
        elemento.append(acoes);
        tabela.appendChild(elemento);

        
        input.addEventListener("click",  function() {
          fetch(`/jogador/${element.telefone}`, {method: "PATCH"}).then(() => {
            window.location.replace("http://localhost:3000/lista.html");
          })
        })

        botaoAcoes.addEventListener("click", function () {
            fetch(`/jogador/${element.telefone}`, {method: "DELETE"})
            .then( () => {
              window.location.replace("http://localhost:3000/lista.html");
            })
        }); 
      });      
}       
