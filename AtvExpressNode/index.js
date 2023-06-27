import express from "express";
import { Partida, jogador } from "./utils/functions.js";
import fs from "fs/promises";
import moment from "moment";
moment.locale("pt-br");

const content = "database.json";
const port = 3000; 
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


async function lerArquivos() {
    try{
        const arquivo = await fs.readFile(content, 'utf-8');
        const arquivoJson = JSON.parse(arquivo);
        return arquivoJson;
    } catch (erro) {
        console.log(erro);
    }
}

async function escreverArquivos(req, res, file){
    try{
        const arquivo = JSON.stringify(file);
        await fs.writeFile(content, arquivo);
    } catch (erro) {
        console.log(erro);
    }
}
    
// Rotas da aplicação

// Home page router
app.get("/", (req, res) => {
    res.redirect("index.html");
})

app.get("/lista", (req, res) => {
    res.redirect("lista.html");
})

app.get("/listaObjeto", (req, res) => {
    lerArquivos()
    .then((data) => {
        res.json(data);
    })
})

// criar um partida e salvar no JSON
app.post("/", (req, res) => {
    let {titulo, local, dataHora} = req.body;
    dataHora = moment(dataHora).format("LLL");
    const partidaCriar = new Partida(titulo, local, dataHora);
    escreverArquivos(req, res, partidaCriar);
    res.redirect("/lista");
})

// adicionar um jogador na partida
app.post("/lista", (req, res) => {
    lerArquivos()
    .then((arquivo) => {
        const {nomeJogador, telefoneJogador} = req.body;
        arquivo.jogadores.push(jogador(nomeJogador, telefoneJogador));
        escreverArquivos(req, res, arquivo);
        res.redirect('/lista');
    })
});


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
       })
    })
})

// alterar o status de presença de um jogador pra true ou false
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
        })
    })
})


// deletar um jogador da lista pelo o numero de telefone
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
    })
})


app.listen(port, () => {
    console.log(`Executando em http://localhost: ${port}`);
})

