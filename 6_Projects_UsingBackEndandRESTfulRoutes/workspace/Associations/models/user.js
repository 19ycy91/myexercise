var mongoose = require("mongoose");

//user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, //mongoose object id
            ref: "Post" // blonging to Post
        }
    ] // has to be name of schema 
});

module.exports = mongoose.model("User", userSchema);// make collections name same as model you are making 
