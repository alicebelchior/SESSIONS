//servidor
const express = require("express");
const app = express();
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

//bibliotecas e módulos
const database = require('./db/db');
const Funcionario = require('./model/funcionarioModel');
const funcionarioConstroller = require('./controller/funcionarioController');

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
    });
});

//rota de create
app.post('/Cadastrar', funcionarioController.FuncionarioCreate); //essa rota vai chamar a função para criar o objeto funcionario e vai enviar para o controller

//rota de read
app.get('/Funcionarios', funcionarioController.FuncionarioListar);

//rota de update
app.put('/Funcionarios/:id', funcionarioController.FuncionarioUpdate);

//roda de delete
app.delete('/Funcionarios/:id', funcionarioController.FuncionarioDelete)

app.listen(3000);