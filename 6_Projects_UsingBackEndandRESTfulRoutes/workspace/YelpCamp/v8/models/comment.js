var mongoose= require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id:{
            type: mongoose.Schema.Types.ObjectId, ///// cheeeeekkkkkkkkkkkk
            ref:"User"
        },
        username: String /////checkkkkkkk
    }
});


module.exports= mongoose.model("Comment", commentSchema )