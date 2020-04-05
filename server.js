
const express = require("express") //Cria e Configura o Servidor
const server = express()

server.get("/"), function(req, res){ //Rota /
    return res.send("Resposta servidor")
}
server.listen(3000) //Liga o servidor e abre a porta 5500 do computador