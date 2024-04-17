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
let usuario2 = {
    nome: "Rafael",
    idade: "27"
}
let usuario3 = {
    nome: "Édipo",
    idade: "25"
}

//rota de teste
//ao entrar nessa rota, ele vai add um cookie
app.get("/adicionarUsuario", (req, res) =>{
    res.cookie("usuarioDados", usuario);
    // res.cookie("usuarioDados", usuario2); // usuario2 substitui usuario
    //tempo para expirar o cookie
    // res.cookie("usuarioDados", usuario3, {expires: 300000 + Date.now()}); // na data de hj mais 300000ms = 5 min, o cookie vai expirar. usuario3 substitui usuario2
    res.send("Dados do usuário adicionado com sucesso!");
});
//essa rota vai mostrar os dados coletados pelo cookie no servidor
app.get("/usuarios", (req, res) =>{
    res.send(req.cookies);
    //cookie de um usuario específico
    // res.send(req.cookies.usuarioDados);
});

//rota principal
app.get("/", (req, res) =>{
    res.send("Seja bem vindo ao teste de cookies.");
});

//rota para destruir os cookies
app.get("/logout", (req, res) =>{
    // res.clearCookie("usuarioDados"); // exclui o cookie de um só usuário passado como parâmetro
    res.clearCookie(); //exclui td
    res.send("Usuário desconectado com sucesso");
});

app.listen(3000);