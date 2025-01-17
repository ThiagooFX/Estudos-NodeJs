const express = require("express");
const server = express();

//http://localhost:3000/hello/?nome=Thiago&idade-21
// Query params = ?nome=Thiago&idade-21


server.get("/hello", (req, res) => {

    const nome = req.query.nome
    const idade = req.query.idade

    //const {nome, idade} = req.query       é a mesma coisa


    return res.json({
        title: "hello World",
        message: `Olá ${nome}, tudo bem com você?`,
        idade: idade
    })
})

//http://localhost:3000/hello/nome
// Route Params = /hello/:nome

server.get("/hello/:nome", (req, res) => {

    const nome = req.params.nome;

    return res.json({
        title: "hello World",
        message: `Olá ${nome}, tudo bem?`,
    })
})

server.listen(3000);