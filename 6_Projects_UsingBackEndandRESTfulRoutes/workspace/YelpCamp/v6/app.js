var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground"); // need module.exports for this to work
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds"); // the function will be stored in seedDB




mongoose.connect("mongodb://localhost/yelp_camp_v6");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"))
seedDB() ; // this will execute the seedDB function 

//passport confituration
app.use(require("express-session")({
    secret:"asfasdf asdfsf",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


app.get("/", function(req,res){
    res.render("landing");
});
        
//INDEX - show all campgrounds       
app.get('/campgrounds', function(req,res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds})
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
    res.render("campgrounds/new");
});


// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            // console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
})
///=================
//comments routes
//==================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req,res){ //add middleware 
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    })
})

app.post("/campgrounds/:id/comments", isLoggedIn, function(req,res){  //middleware inserted here as well incase someone uses postman and sends a comment without logging in
    //look up campground using id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/'+campground._id);
                }
            })
        }
    });
})

// ==========
// Auth routes

//show register form

app.get("/register", function(req,res){
    res.render("register");
});

//handle sign up logic
app.post("/register", function(req,res){
    var newUser = new User({username: req.body.username})
   User.register(newUser, req.body.password, function(err,user){
       if(err){
           console.log(err);
           return res.render('register'); //return helps to short circute 
       }
       passport.authenticate("local")(req,res,function(){ //////
       res.redirect("/campgrounds")});
            
       
   } )
});

//show log in form
app.get("/login", function(req,res){
    res.render("login");
})
//handle log in logic
app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req,res){
        
});

//logic route
app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});