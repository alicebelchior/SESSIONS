const Usuario = require("../model/usuarioModel");

//criação da classe
module.exports = class usuarioController{
    //Create
    static async UsuarioCreate(req, res){
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        //criação do objeto recebendo os valores das variaveis da classe acima
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        await Usuario.create(usuario);
        res.json({
            message: "Usuário cadastrado com sucesso!"
        });
    }

    //Read
    static async UsuarioRead(req, res){
        //essa const vai receber como paramento o id_usuario
        const id_usuario = req.params.id_usuario;
        if(id_usuario){
            //se o id estiver certo, vai pegar o usuario desse id
            const usuario = await Usuario.findOne({
                where: {id_usuario: id_usuario}
            });
            res.json(usuario);
        }
        //senao, vai listar todos
        else {
            const usuario = await Usuario.findAll({
                raw: true
            });
            res.json(usuario);
        }
    }

    //Update
    static async UsuarioUpdate(req, res){
        //o sist. vai pegar o id do parametro
        const id_usuario = req.params.id_usuario;
        //desse id_usuario, vai pegar todas as lets
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        //e vai gerar esse objeto
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        //e vai pedir um update
        await Usuario.update(usuario, {
            where: {id_usuario: id_usuario}
        });
        res.json({
            message: "Cadastro atualizado! Foram atualizados as seguintes informações: ", dados: usuario
        });
    }

    //Delete
    static async UsuarioDelete(req, res){
        const id_usuario = req.params.id_usuario;
        await Usuario.destroy({
            where: {id_usuario: id_usuario}
        });
        res.json({
            message: "Usuário excluído com sucesso!"
        });
    }
}