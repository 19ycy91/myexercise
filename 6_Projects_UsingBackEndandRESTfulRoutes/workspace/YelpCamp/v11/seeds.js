var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc1d3146d02fdb7b805d1316df75a417&auto=format&fit=crop&w=1950&q=80",
        description: "blah bah blah"
    },
    {
        name: "Cloud's Best",
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aaf08554d638e2690a4383bf1c632d93&auto=format&fit=crop&w=800&q=60",
        description: "Blah blah blah"
        
    },
    {
        name: "Cloud's Breast",
        image: "https://images.unsplash.com/photo-1531097517181-3de20fd3f05c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21e8b8882ebe52dd2cea9022b73b9861&auto=format&fit=crop&w=1950&q=80",
        description: "Blah blah blah"
        
    }
    ]



function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
     if(err){
         console.log(err);
      }
      console.log("removed campgrounds!");
      
        data.forEach(function(seed){
        Campground.create(seed, function(err,campground){
            if(err){
                console.log(err)
            } else {
                console.log("added a campoground");
                //create a comment
                Comment.create(
                    {
                        text: "This place is dope but i wish there was internet",
                        author: "homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
            }
        });
    });
    });
    //add a few campgrounds


}

module.exports = seedDB; //exports this function out