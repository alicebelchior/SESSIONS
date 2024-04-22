const express = require("express");
const Services = require("../services/services");
const router = express.Router();

//rota principal
router.get("/", (req, res) =>{
    res.send("Seja bem vindo ao Sistema de Tarefas.")
});

//rota cadastrar
router.get("/tarefas/cadastrar", (req, res) =>{
    res.render("tarefas/cadastrar");
});

//rota para serviço de create
router.post("/tarefas/Create", Services.TarefaCreate);

//rota listar
router.get("tarefas/listar", Services.TarefaListar);

//rota update
router.get("/tarefas/Atualizar/:id_tarefa/:titulo/:descricao", (req, res) =>{
    let tarefas = {
        id_tarefa: req.params.id_tarefa,
        titulo: req.params.titulo,
        descricao: req.params.descricao
    }
    res.render("tarefa/update", {tarefas})
});

//rota delete
router.post("/tarefas/Delete", Services.TarefaDelete);

module.exports = router;