//servidor
const express = require("express");
const app = express();
const database = require('./db/db');
const Funcionario = require('./model/funcionarioModel')

//sincronismo com o bd
try{
    database.sync().then(() =>{});
}
catch(erro) {
    console.log('Houve uma falha ao sincronizar com o banco de dados', erro);
}

//rota principal
app.get("/", (req, res) =>{
    // return res.send("Olá, mundo!");
    // JSON estruturado
    return res.json({
        message: "Olá, mundo!"
    })
});

app.listen(3000);