const Sequelize = require("sequelize");
const database = require("../db/db");

//campo principal para as tarefas
const Tarefa = database.define("tarefa", {
    id_tarefa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    database, modelname: "tarefa",
    tablename: "tarefas"
});
module.exports = Tarefa;