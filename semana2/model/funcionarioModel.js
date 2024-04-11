//bibliotecas e módulos
const Sequelize = require('sequelize');
const database = require('../db/db')

//criação da tabela e objeto funcionario
const Funcionario = database.define('funcionario', {
    matricula: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type:Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type:Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
        type:Sequelize.STRING
    },
    endereco: {
        type:Sequelize.DATE,
        allowNull: false
    }
}, {
    database, modelname: 'funcionario',
    tableName: 'funcionarios'
})

module.exports = Funcionario;