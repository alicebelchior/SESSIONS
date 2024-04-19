//bibliotecas
const express = require("express");
const app = express();
const hand = require("express-handlebars");
const Services = require("./services/services");
const routes = require("./routes/routes");

//configurando o engine
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

//codificação json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//rota principal
app.use("/", routes);

//servidor
app.listen(3000);