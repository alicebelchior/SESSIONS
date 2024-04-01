var express = require('express');
var router = express.Router();

// rotas
router.get('/clientes', function(req, res){
    res.send('Lista de clientes')
});
router.get('/', function(req, res){ //rota principal
    res.send('Bem vindo ao sistema')
});
router.post('/', function(req, res){ //msm rota, metodo diferente
    res.send('inserir registro')
});

//rota com parâmetro dinâmico
router.get('/clientes/:nome/:sobrenome?', function(req, res){ 
    //':' é o parametro passado, '?' dps do parametro o torna não obrigatorio
    res.send('Seja bem vindo(a) <h1>' + req.params.nome + ' ' +req.params.sobrenome + "</h1>");
});

// exportação do modulo
module.exports = router;