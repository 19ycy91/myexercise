var express = require("express");

var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});


// "/bye" => goodbye!
app.get("/bye", function(req,res){
   res.send("Goodbye") ;
});
// "/dog" =>meow
app.get("/dog", function(req,res){
    console.log("someone made a request to dog");
   res.send("meow") ;
});

//tell express to liseten for resuqest start servers

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("wecome to the " + subreddit.toUpperCase() + " Subreddit" );
})

app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
    res.send("wecome to a comments page");
    console.log(req.params);
})

//catch all - order of routes matter
app.get("*", function(req,res){
    res.send("you are a star");
})