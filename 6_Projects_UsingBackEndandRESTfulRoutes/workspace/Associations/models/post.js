var mongoose = require("mongoose");


//POST - title,content 
var postSchema = new mongoose.Schema({
    title:String,
    content: String
});
module.exports = mongoose.model("Post", postSchema); //return value for a file like return value for a function
                                                    //nothing is returned if we don't return anything in function
                                                    // Same with files, we can include the file but nothing is exported
                                                    //need to export something in here since we want to export model 