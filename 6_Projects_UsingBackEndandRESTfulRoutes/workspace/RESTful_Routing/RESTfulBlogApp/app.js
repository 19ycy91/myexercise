var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),//////////!!!!!!!!
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

//App config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));/////////////!!!!!!!

//Mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} //it is type date and default value if not given is date.now
});

var Blog = mongoose.model("Blog",blogSchema); // give name of the collections singular and pass in schema


//making one object 
// Blog.create(
//     {title:"test Blog",
//     image: "https://images.pexels.com/photos/1331386/pexels-photo-1331386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     body: "Hello this is a blog Post"
// });


//Restful Routes

app.get("/", function(req,res){
    res.redirect("/blogs");
});

//index route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err,blogs){
        if(err){
            console.log("ERRROr");
        }
        else{
            //console.log(blogs);
            res.render("index", {blogs: blogs});
            
            
        }
    })
    
})

//new route
app.get("/blogs/new", function(req,res){
    res.render("new");
})
//create route
app.post("/blogs", function(req, res){
    // req.body.blog.body = req.sanitize(req.body.blog.body);
   var formData = req.body.blog;
   Blog.create(formData, function(err, newBlog){
    //   console.log(newBlog);
      if(err){
          res.render("new");
      } else {
          res.redirect("/blogs");
      }
   });
});

//show route
app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show",{blog: foundBlog});
        }
    })
    
})

//Edit Route
app.get("/blogs/:id/edit", function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
       if(err){
           res.redirect("/blogs");
       } else {
           res.render("edit", {blog: foundBlog});
       } 
    });

})

//update route 
app.put("/blogs/:id", function(req,res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            //res.redirect("/blogs/" + req.params.id);
            console.log("1##############################");
            console.log(req.body.blog);
            console.log("2##############################");
            console.log(updatedBlog);
            res.redirect("/blogs/" + updatedBlog._id);
        }
    });
});

//Delete Route
app.delete("/blogs/:id", function(req,res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, req.params, function(err, deleted){
        if(err){
            res.redirect("/blogs");
            
        }else {
            console.log("3##############################");
            console.log(req.body);
            console.log("4##############################");
            console.log(deleted);
            res.redirect("/blogs");
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING");
})