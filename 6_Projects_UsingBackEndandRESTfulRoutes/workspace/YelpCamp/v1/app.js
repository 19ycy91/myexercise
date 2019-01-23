var express = require("express");
var app = express();


// this are for POST routes 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.get("/", function(req,res){
    res.render("landing");
});


var campgrounds = [
            {name: "Salmon Creek", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
            {name:"Granite Hill", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
            {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
                        {name: "Salmon Creek", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
            {name:"Granite Hill", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
            {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
                        {name: "Salmon Creek", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
            {name:"Granite Hill", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
            {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"}
        ];
        
        
        
        
app.get('/campgrounds', function(req,res){

    res.render("campgrounds", {campgrounds:campgrounds});
    
    
});

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var img = req.body.image;
    campgrounds.push({name:name, image: img});
    res.redirect('/campgrounds');  //why can't i use render?
    // get data from form and add to camground array
    // rediret back to camground oage
    
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});