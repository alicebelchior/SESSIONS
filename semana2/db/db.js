//bibliotecas e módulos
const Sequelize = require("sequelize");

//configuração do BD
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mercado.sqlite",
});

//tratamento de erros
try{
    sequelize.authenticate(); //tenta autenticar
    console.log("Banco de dados conectado com sucesso!"); //se conseguir, mostra mensagem
}
catch(erro) { //senão, mostra msg de erro
    console.log("Erro ao conectar com o banco", erro);
}

module.exports = sequelize;