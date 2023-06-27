import express from "express";
import { Partida, jogador, lerArquivos, escreverArquivos} from "./utils/functions.js";
import moment from "moment";
moment.locale("pt-br");
const port = 3000; 
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Rotas da aplicação 

// Home page router
app.get("/", (req, res) => {
    res.redirect("index.html");
});

// criar um partida e salvar no JSON
app.post("/", (req, res) => {
    let {titulo, local, dataHora} = req.body;
    dataHora = moment(dataHora).format("LLL");
    const partidaCriar = new Partida(titulo, local, dataHora);
    escreverArquivos(req, res, partidaCriar);
    res.redirect("/lista");
});

// Rota para a lista de jogadores da partida
app.get("/lista", (req, res) => {
    res.redirect("lista.html");
});


// adicionar um jogador na partida
app.post("/lista", (req, res) => {
    lerArquivos()
    .then((arquivo) => {
        const {nomeJogador, telefoneJogador} = req.body;
        arquivo.jogadores.push(jogador(nomeJogador, telefoneJogador));
        escreverArquivos(req, res, arquivo);
        res.redirect('/lista');
    });
});


// Rota que envia um json com todos os dados para ser utilizado na pagina /lista
app.get("/listaObjeto", (req, res) => {
    lerArquivos()
    .then((data) => {
        res.json(data);
    });
});


// Rota para deletar partida do JSON
app.delete("/lista/:titulo", (req, res) => {
    const novoArquivo = " ";
    const {titulo} = req.params;
    lerArquivos()
    .then((arquivo) => {
       if (arquivo.titulo == titulo){
        escreverArquivos(req, res, novoArquivo);
       } 
       res.json({
        "status": "ok"
       });
    });
});

// Rota para alterar o status de presença de um jogador pra true ou false
app.patch("/jogador/:telefone", (req, res) => {
    const novoArray = [];
    const {telefone} = req.params;
    lerArquivos()
    .then((arquivo) => {
        const copy = arquivo;
        arquivo.jogadores.forEach(element => {
            if (element.telefone == telefone){
                element.presenca = !element.presenca;
            }
            novoArray.push(element);
        });
        copy.jogadores = novoArray;
        escreverArquivos(req, res, copy);
        res.json({
            "status": "ok"
        });
    });
});


// Rota para deletar um jogador da lista pelo o numero de telefone
app.delete("/jogador/:telefone", (req, res) => {
    const novoArray = [];
    const {telefone} = req.params;
    lerArquivos()
    .then((arquivo) => {
        const copy = arquivo;
        arquivo.jogadores.forEach(element => {
            if (element.telefone != telefone){
                novoArray.push(element);
            }
        });
        copy.jogadores = novoArray;
        escreverArquivos(req, res, copy);
        res.json({
            "status": "ok"
        });
    });
});


app.listen(port, () => {
    console.log(`Executando em http://localhost: ${port}`);
});

