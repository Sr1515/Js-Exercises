class Partida {
    constructor(titulo, local, dataHora){
        this.titulo = titulo;
        this.local = local;
        this.dataHora = dataHora;
        this.jogadores = [];
    }
}

const jogador = (nome, telefone, presenca = true) => {
    const obj = {
        "nome": nome,
        "telefone": telefone,
        "presenca": presenca
    }
    return obj;
}


export {Partida, jogador };