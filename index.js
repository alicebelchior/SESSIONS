const express = require('express');
const app = express();
const porta = 3000;
var Route = require('./routes/Route');

//handlebars
const hand = require('express-handlebars');
app.set('view engines', 'html');
app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars')

// Rota utilizada
app.use(express.urlencoded({
    extended: true
})); // declaração da decodificação do padrao de url que faz com que o express deixe os arquivos de retorno mais organizados

// a codificação deve ser processada antes de se chamar a rota
app.use('/', Route);

// servidor
app.listen(porta, () =>{
    console.log('Exemplo de uso de rotas.')
})