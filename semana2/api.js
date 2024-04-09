//servidor
const express = require("express");
const app = express();

//rota principal
app.get("/", (req, res) =>{
    // return res.send("Olá, mundo!");
    // JSON estruturado
    return res.json({
        message: "Olá, mundo!"
    })
});

app.listen(3000);