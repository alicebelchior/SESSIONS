const express = require('express');
const app = express();
const porta = 3000;
// declaração do modulo cliente
var clienteRouter = require('./routes/clienteRoute'); 

// Rota utilizada
app.use('/', clienteRouter);

// servidor
app.listen(porta, () =>{
    console.log('Exemplo de uso de rotas.')
})