var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title,content 
var postSchema = new mongoose.Schema({
    title:String,
    Content: String
});

var Post = mongoose.model("Post", postSchema);


//user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // has to be name of schema 
});

var User = mongoose.model("User", userSchema);// make collections name same as model you are making 




var newUser = new User({
    email: "hermon@brown.edu",
    name: "hermon Brown"
});

newUser.posts.push({
    title: "how to brew polu juice",
    content:" jk go to class"
})

newUser.save(function(err,user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
})

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

// var newPost = new Post({
//     title:"woooof",
//     content:"a movie about a doggie"
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

User.findOne({name: "hermon Brown"}, function(err,user){
    if(err){
        //console.log(err);
    }else {
        user.posts.push({
            title: "3 thing i no like",
            content: "voldmoert vold vold"
        });
        user.save(function(err,user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
})