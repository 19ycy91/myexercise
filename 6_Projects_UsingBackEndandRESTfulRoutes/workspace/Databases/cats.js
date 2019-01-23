var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temper: String
});

var Cat = mongoose.model("Cat", catSchema); // cat object - builds complex model that has all the methods 
// "Cat" singular version of the collection name/model - mongo will take it and pluralize it to make a collection cats -> db.cats

// var george = new Cat({
//     name: "Mrs.Norris",
//     age:7,
//     temper: "evil"
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("where did we go wrong");
//     } else{
//         console.log("we just saved a cat to the DB");
//         console.log(cat);
//     }
// });
// adding a new cat to the DB



Cat.create({
    name:"Snow White",
    age:15,
    temper:"Bland"
}, function(err,cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
})


//retrieva all cats from the DB and console.log each one
// Cat.find({}, function(err,cats){
//     if(err){
//         console.log("O NO errrr");
//         console.log(err);
//     } else {
//         console.log("att eh cats....");
//         console.log(cats);
//     }
// })