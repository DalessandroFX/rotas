const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("isso aparece quando não tem nada na url")
})
// .send so pode ser usado uma vez]

app.get("/isso", function(req,res){
    res.send("isso aparece quando coloca '/isso' na url")
})

app.get("/cadastro/:nome/:profissao", function(req,res){
    res.send("<h1>seu nome é "+ req.params.nome+"<h1>" + "<h2> e tu é "+req.params.profissao+"<h2>")
}) //ai tu coloca na url cadastro/(coloca o seu nome)/(coloca alguma coisa)

app.get("/html", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})//é assim que coloca um html junto

app.listen(5555, function(){
    console.log("ta no ar o servidor")
})