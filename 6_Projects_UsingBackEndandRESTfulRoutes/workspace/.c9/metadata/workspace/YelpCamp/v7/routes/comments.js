{"filter":false,"title":"comments.js","tooltip":"/YelpCamp/v7/routes/comments.js","undoManager":{"mark":56,"position":56,"stack":[[{"start":{"row":0,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["///=================","//comments routes","//==================","","app.get(\"/campgrounds/:id/comments/new\", isLoggedIn, function(req,res){ //add middleware ","    //find campground by id","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","            res.render(\"comments/new\", {campground: campground});","        }","    })","})","","app.post(\"/campgrounds/:id/comments\", isLoggedIn, function(req,res){  //middleware inserted here as well incase someone uses postman and sends a comment without logging in","    //look up campground using id","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","            res.redirect(\"/campgrounds\");","        } else {","            Comment.create(req.body.comment, function(err, comment){","                if(err){","                    console.log(err);","                } else {","                    campground.comments.push(comment);","                    campground.save();","                    res.redirect('/campgrounds/'+campground._id);","                }","            })","        }","    });","})",""],"id":1}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"remove","lines":["app"],"id":2},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["r"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["o"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["u"]},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["t"]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["e"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["app"],"id":3},{"start":{"row":15,"column":0},"end":{"row":15,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"insert","lines":["m"]},{"start":{"row":35,"column":1},"end":{"row":35,"column":2},"action":"insert","lines":["o"]},{"start":{"row":35,"column":2},"end":{"row":35,"column":3},"action":"insert","lines":["d"]},{"start":{"row":35,"column":3},"end":{"row":35,"column":4},"action":"insert","lines":["u"]},{"start":{"row":35,"column":4},"end":{"row":35,"column":5},"action":"insert","lines":["l"]},{"start":{"row":35,"column":5},"end":{"row":35,"column":6},"action":"insert","lines":["e"]},{"start":{"row":35,"column":6},"end":{"row":35,"column":7},"action":"insert","lines":[","]},{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"insert","lines":["e"]},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["x"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["p"]},{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["o"]}],[{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"remove","lines":["o"],"id":5},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"remove","lines":["p"]},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":["x"]},{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"remove","lines":["e"]},{"start":{"row":35,"column":6},"end":{"row":35,"column":7},"action":"remove","lines":[","]}],[{"start":{"row":35,"column":6},"end":{"row":35,"column":7},"action":"insert","lines":["."],"id":6},{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"insert","lines":["e"]},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["x"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["p"]},{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["o"]},{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["r"]},{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["s"]}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"remove","lines":["s"],"id":7}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["t"],"id":8},{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["s"]}],[{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":[" "],"id":9},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":[" "],"id":10},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["r"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["o"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["u"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["t"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["e"]},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"insert","lines":["r"]}],[{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"insert","lines":["s"],"id":11}],[{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"remove","lines":["s"],"id":12}],[{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"insert","lines":[";"],"id":13}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":30},"action":"insert","lines":["var express = require(\"express\");","var router = express.Router();"],"id":15}],[{"start":{"row":1,"column":30},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":16}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"],"id":17},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":18},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["C"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["m"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["p"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["g"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["r"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["o"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["u"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["d"],"id":19}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":[" "],"id":20},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["-"]}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[" "],"id":21},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["r"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["e"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["q"]}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"remove","lines":["q"],"id":22},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"remove","lines":["e"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"remove","lines":["r"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":[" "]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["-"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["="],"id":23}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[" "],"id":24},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["r"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["e"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["q"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["u"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["o"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["r"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"remove","lines":["e"],"id":25},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["r"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["o"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["i"],"id":26},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["r"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":26},"action":"insert","lines":["()"],"id":27}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":27},"action":"insert","lines":["\"\""],"id":28}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["."],"id":29},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["."]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["/"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["m"]},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["o"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["d"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["e"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["l"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["s"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["c"],"id":30},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["a"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["m"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["p"]},{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["g"]},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["r"]},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["o"]},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["u"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["n"]},{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"insert","lines":[";"],"id":31}],[{"start":{"row":2,"column":49},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":32}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":48},"action":"insert","lines":["var Campground = require(\"../models/campground\")"],"id":33}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":14},"action":"remove","lines":["Campground"],"id":34},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["C"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["o"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["m"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["m"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["e"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["n"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":43},"action":"remove","lines":["campground"],"id":35},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["c"]},{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["o"]},{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["m"]},{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":["m"]},{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["e"]},{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"insert","lines":["n"]},{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"insert","lines":[";"],"id":36}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":37}],[{"start":{"row":39,"column":0},"end":{"row":45,"column":0},"action":"insert","lines":["function isLoggedIn(req,res,next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}",""],"id":38}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":39}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":37},"action":"remove","lines":["campgrounds/:id/comments"],"id":40},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["/"]}],[{"start":{"row":19,"column":30},"end":{"row":19,"column":38},"action":"remove","lines":["comments"],"id":41},{"start":{"row":19,"column":29},"end":{"row":19,"column":30},"action":"remove","lines":["/"]},{"start":{"row":19,"column":28},"end":{"row":19,"column":29},"action":"remove","lines":["d"]},{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"remove","lines":["i"]},{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"remove","lines":[":"]},{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"remove","lines":["/"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"remove","lines":["s"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"remove","lines":["d"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"remove","lines":["n"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"remove","lines":["u"]},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"remove","lines":["o"]},{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"remove","lines":["r"]},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"remove","lines":["g"]}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"remove","lines":["p"],"id":42},{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"remove","lines":["m"]},{"start":{"row":19,"column":15},"end":{"row":19,"column":16},"action":"remove","lines":["a"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"remove","lines":["c"]}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":30},"action":"insert","lines":["{}"],"id":43}],[{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["m"],"id":44},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["e"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["r"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["g"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["e"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["P"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["a"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["a"],"id":45},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["m"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["s"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":[":"]}],[{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":[" "],"id":46},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["t"]},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":["r"]},{"start":{"row":1,"column":44},"end":{"row":1,"column":45},"action":"insert","lines":["u"]},{"start":{"row":1,"column":45},"end":{"row":1,"column":46},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":0},"end":{"row":6,"column":20},"action":"remove","lines":["///=================","//comments routes","//=================="],"id":47}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":48}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["/"],"id":49},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["/"]},{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["c"]},{"start":{"row":6,"column":3},"end":{"row":6,"column":4},"action":"insert","lines":["o"]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["m"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["m"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["e"]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["n"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["s"],"id":50}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":[" "],"id":51},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["n"]},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["e"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["w"]}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":52}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["/"],"id":53},{"start":{"row":18,"column":1},"end":{"row":18,"column":2},"action":"insert","lines":["/"]},{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":["c"]},{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":["o"]},{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":["m"]},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["m"]},{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["e"]},{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["n"]},{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["t"]},{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":[" "],"id":54},{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":["c"]},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["r"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["e"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["a"]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["t"]},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":55},{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["/"]},{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"insert","lines":["/"]},{"start":{"row":39,"column":2},"end":{"row":39,"column":3},"action":"insert","lines":["m"]},{"start":{"row":39,"column":3},"end":{"row":39,"column":4},"action":"insert","lines":["i"]},{"start":{"row":39,"column":4},"end":{"row":39,"column":5},"action":"insert","lines":["d"]}],[{"start":{"row":39,"column":5},"end":{"row":39,"column":6},"action":"insert","lines":["d"],"id":56},{"start":{"row":39,"column":6},"end":{"row":39,"column":7},"action":"insert","lines":["l"]},{"start":{"row":39,"column":7},"end":{"row":39,"column":8},"action":"insert","lines":["e"]},{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["w"]},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["a"]}],[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["r"],"id":57},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["e"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0.5,"selection":{"start":{"row":23,"column":29},"end":{"row":23,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1541164019339,"hash":"ec3350108aac9abe3bcf57bfd4b0d709b6629cbe"}