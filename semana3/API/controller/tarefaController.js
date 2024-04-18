const Tarefa = require("../model/tarefaModel");

//criação da classe
module.exports = class tarefaController{
    //Create
    static async TarefaCreate(req, res){
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        //criação do objeto recebendo os valores das variaveis da classe acima
        const tarefa = {
            titulo: titulo,
            descricao: descricao
        }
        await Tarefa.create(tarefa);
        res.json({
            message: "Tarefa cadastrada com sucesso!"
        });
    }

    //Read
    static async TarefaRead(req, res){
        //essa const vai receber como paramento o id_tarefa
        const id_tarefa = req.params.id_tarefa;
        if(id_tarefa){
            //se o id estiver certo, vai pegar a tarefa desse id
            const tarefa = await Tarefa.findOne({
                where: {id_tarefa: id_tarefa}
            });
            res.json(tarefa)
        }
        //senao, vai listar todos
        else {
            const tarefa = await Tarefa.findAll({
                raw: true
            });
            res.json(tarefa);
        }
    }

    //Update
    static async TarefaUpdate(req, res){
        //o sist. vai pegar o id do parametro
        const id_tarefa = req.params.id_tarefa;
        //desse id_tarefa, vai pegar todas as lets
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        //e vai gerar esse objeto
        const tarefa = {
            titulo: titulo,
            descricao: descricao
        }
        //e vai pedir um update
        await Tarefa.update(tarefa, {
            where: {id_tarefa: id_tarefa}
        });
        res.json({
            message: "Tarefa atualizada! Foram atualizados as seguintes informações: ", dados: tarefa
        });
    }

    //Delete
    static async TarefaDelete(req, res){
        const id_tarefa = req.params.id_tarefa;
        await Tarefa.destroy({
            where: {id_tarefa: id_tarefa}
        });
        res.json({
            message: "Tarefa excluída com sucesso!"
        });
    }
}