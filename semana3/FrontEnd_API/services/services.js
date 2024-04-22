const axios = require("axios");

module.exports = class Services{
    //create
    static async TarefaCreate(req, res){
        //vai receber todos os valores que forem passados pelo formulario
        let valores = req.body; 

        // objeto que vai passar todas as infos pra valores
        const options = {
            url: "https://732c1189-d0e9-4ec3-ad3f-decb56a1a754-00-2cffdju13b70o.picard.replit.dev/tarefas/cadastrar",
            method: "POST",
            data: valores
        }
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", {mensagem});
    }

    //read
    static async TarefaListar(req, res){
        const options = {
            url: "https://732c1189-d0e9-4ec3-ad3f-decb56a1a754-00-2cffdju13b70o.picard.replit.dev/tarefas",
            method: "GET",
            data: {}
        }
        axios(options).then(response =>{
            console.log(response.data);
            const tarefa = response.data;
            res.render("tarefas/listar", {tarefa});
        });
    }

    //update
    static async TarefaUpdate(req, res){
        let valores = req.body; 

        const options = {
            url: "https://732c1189-d0e9-4ec3-ad3f-decb56a1a754-00-2cffdju13b70o.picard.replit.dev/tarefas/" + valores.id_tarefa,
            method: "PUT",
            data: valores
        }
        axios(options);
        const mensagem = "Redgistro atualizado com sucesso!";
        res.render("mensagem", {mensagem});
    }

    //delete
    static async TarefaDelete(req, res){
        let id_tarefa = req.body.id_tarefa;
        const options = {
            url: "https://732c1189-d0e9-4ec3-ad3f-decb56a1a754-00-2cffdju13b70o.picard.replit.dev/tarefas/" + id_tarefa,
            method: "DELETE"
        }
        axios(options);
        const mensagem = "Tarefa deletadacom sucesso!";
        res.render("mensagem", {mensagem});
    }
}