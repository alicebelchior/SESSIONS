// modulos
const express = require("express");
const app = express();

//Bibiotecas
var cookie = require("cookie-parser");
app.use(cookie());

//criação do objeto
let usuario = {
    nome: "Alice",
    idade: "28"
}

//rota de teste
//ao entrar nessa rota, ele vai add um cookie
app.get("/adicionarUsuario", (req, res) =>{
    res.cookie("usuarioDados", usuario);
    res.send("Dados do usuário adicionado com sucesso!");
});
//essa rota vai mostrar os dados coletados pelo cookie no servidor
app.get("/usuarios", (req, res) =>{
    res.send(req.cookies);
});

//rota pricipal
app.get("/", (req, res) =>{
    res.send("Seja bem vindo ao teste de cookies.");
});

app.listen(3000);