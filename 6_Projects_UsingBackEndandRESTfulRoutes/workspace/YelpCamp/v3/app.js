var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground"); // need module.exports for this to work
var seedDB = require("./seeds") // the function will be stored in seedDB


seedDB() ; // this will execute the seedDB function 

mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");



app.get("/", function(req,res){
    res.render("landing");
});


// Campground.create(
//      {
//          name: "Granite Hill", 
//          image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//          description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"
         
//      },
//      function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATED CAMPGROUND: ");
//           console.log(campground);
//       }
//     });

// var campgrounds = [
//             {name: "Salmon Creek", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//             {name:"Granite Hill", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//             {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//                         {name: "Salmon Creek", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//             {name:"Granite Hill", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//             {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//                         {name: "Salmon Creek", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//             {name:"Granite Hill", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"},
//             {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f0c578a2e8b3bb_340.jpg"}
//         ];
        
        
        
//INDEX - show all campgrounds       
app.get('/campgrounds', function(req,res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index",{campgrounds:allCampgrounds})
        }
        
    })
    // res.render("campgrounds", {campgrounds:campgrounds});
    
    
});

//CREATE - add new campground to DB

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var img = req.body.image;
    var desc = req.body.description;
    var newCampground = {name:name, image:img, description:desc};
    Campground.create(newCampground, function(err,newlyCreated ){
        if(err){
            console.log(err);
        }else{
        res.redirect('/campgrounds');
            
        }
        
    });
      //why can't i use render?
    // get data from form and add to camground array
    // rediret back to camground oage
    
});


//NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});


// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});