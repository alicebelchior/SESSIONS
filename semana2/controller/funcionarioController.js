//importação de modulo
const { where } = require("sequelize");
const Funcionario = require("../model/funcionarioModel");

//importação de informações da classe
module.exports = class funcionarioController{ //tudo que estiver aqui dentro será usado pela aplicação
    //Create
    static async FuncionarioCreate(req, res){
        let nome = req.body.nome;
        let endereco = req.body.endereco;
        let telefone = req.body.telefone;
        let email = req.body.email;
        let nascimento = req.body.nascimento;
        const funcionario = { //essa const vai receber os valores que vem da classe
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            email: email,
            nascimento: nascimento
        }
        await Funcionario.create(funcionario);
        //retorno para o usuario/solicitante
        res.json({
          message: "Cadastro realizado com sucesso!",
        });
    }

    //Read
    static async FuncionarioListar(req, res){
        const matricula = req.params.id;
        if(matricula){
            const funcionario = await Funcionario.findOne({
                where: {matricula: matricula}
            });
            res.json(funcionario)
        } else {
            const funcionario = await Funcionario.findAll({ //executa a listagem 
                raw: true //listagem de todo mundo 
            });
            res.json(funcionario) //retorno em via json
        }
    }

    //Update
    static async FuncionarioUpdate(req, res){
        //recebimento do valor do parametro via browser
        const matricula = req.params.id;
        //codigo voltado para as variaveis
        let nome = req.body.nome;
        let endereco = req.body.endereco;
        let telefone = req.body.telefone;
        let email = req.body.email;
        let nascimento = req.body.nascimento;
        const funcionario = { 
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            email: email,
            nascimento: nascimento
        }
        //comparando e verificando se o funcionario possui de fato a matricula igual ao que foi passado
        await Funcionario.update(funcionario, {
            where: {matricula: matricula}
        });
        res.json({
          //retorno se tiver tudo ok
          message: "Cadastro atualizado com sucesso!",
        });
    }

    //Delete
    static async FuncionarioDelete(req, res){
        //recebimento do valor do parametro via browser
        const matricula = req.params.id;
        await Funcionario.destroy({
            where: {matricula: matricula}
        });
        res.json({
          message: "Funcionário excluído com sucesso!",
        });
    }
}