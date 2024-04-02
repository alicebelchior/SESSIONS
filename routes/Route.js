var express = require('express');
var router = express.Router();

// Lista de cidades
var cidades = ['Mimoso', 'Cachoeiro', 'Vila Velha'];

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

// rota GET para consultar os dados da lista de cidades
router.get('/cidades/:id', (req, res) =>{
    /*
    se alguem colocar esse endereço e no id = 0,
    ele entra no código, trata e guarda na let id
    o json vai responder para a tela a cidade[0]
    */
    let id = req.params.id;
    return res.json([cidades[id]]);
});

// rota POST para envio de novas cidades
router.post('/cidades/cadastrar', (req, res) =>{
    let nome = req.body.nome;
    cidades[(cidades.length)] = nome;  // o codigo vai percorrer a lista cidades e jogar o nome do formulário pra dentro da lista
    return res.json([cidades[(cidades.length - 1)]]);
});

// rota para o formulário
router.get('/cidades', (req, res) =>{
    res.render('form');
});

// exportação do modulo
module.exports = router;