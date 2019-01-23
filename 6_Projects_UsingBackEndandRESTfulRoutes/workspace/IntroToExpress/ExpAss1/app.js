var express = require('express');
var app = express()

app.get("/", function(req, res){
    res.send("Hi there, welcome to my ass ;) ");
})

app.get("/speak/:animal", function(req,res){
    var sound = {"pig": "Oink", "cow": "Moo", "dog":"Woof Woof!"};
    var animal = req.params.animal.toLowerCase()
    
    res.send("The " + animal + " says "+ "\"" +sound[animal]+"\"");
    // res.send(sound.pig + "2"); works 
    // res.send(sound.req.params.animal +"3"); doesn't work 
    }
)

app.get("/repeat/:words/:numb", function(req,res){
    var message = "";
    // res.send((req.params.words + " ").repeat(Number(req.params.numb)));
    for (var i=0; i< Number(req.params.numb); i++){
        message+= req.params.words+ " "
    }
    res.send(message);
    }
)


app.get("*", function(req,res){
    res.send("sry page not found dudddeeeeeeeeeeee.. what u doing with yo lyfe");
}
)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});