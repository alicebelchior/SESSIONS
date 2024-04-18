//modulos e bibliotecas
const express = require("express");
const app = express();
const database = require("./db/db");
const routes = require("./routes/routes");

//importação dos models
const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefaModel");

//codificação json
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

//rota principal
app.use("/", routes);

//sincronismo com o BD
try {
    database.sync().then(() =>{})
} catch (erro) {
    console.log("Houve uma falha no sincronismo com o banco de dados.")
}

//saida de dados
app.listen(3000);