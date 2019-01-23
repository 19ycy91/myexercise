var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");

setInterval( function(){
	if (body.style.background == "white"){
		body.style.background = "blue";
	}
	else{
		body.style.background = "white";
	}
}, 1000);
