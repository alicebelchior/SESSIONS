//módulos
const express = require("express");
const router = express.Router();

//controllers
const usuarioController = require("../controller/usuarioController");
const tarefaController = require("../controller/tarefaController");

//requisições http principal
router.get("/", (req, res) => {
    return res.json({
        message: "Sistema de Lista de Tarefas",
    });
});

//Requisições http usuário
//cadastrar
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

//listar
router.get("/usuarios/:id?", usuarioController.UsuarioRead);
// /:id? = o parametro pode ou ser passado

//update
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);
// /:id = o parametro DEVE ser passado

//delete
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

//Requisições http tarefas
//cadastrar
router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);

//listar
router.get("/tarefas/:id?", tarefaController.TarefaListar);

//update
router.put("/tarefas/:id", tarefaController.TarefaUpdate);

//delete
router.delete("/tarefas/:id", tarefaController.TarefaDelete);

module.exports = router;
