const Sequelize = require("sequelize");

//configuração do BD
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./mercado.sqlite"
});

//tratamento de erros
try {
    sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso");
} catch (erro) {
    console.log("Erro ao cenectar com o banco de dados", erro);
}

module.exports = sequelize;