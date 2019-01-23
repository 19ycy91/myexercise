var button = document.querySelector('button');
var isWhite = true

// var body = document.getElementsByTagName("body");
//above versus using document.body



//uses toggle

// button.addEventListener("click", function(){

// 	document.body.classList.toggle("pink");
// });



//use if statment


button.addEventListener("click", function(){
	if (isWhite){
		document.body.style.background = "pink";

	}
	else {
		document.body.style.background = "white";
		
	}
	isWhite = ! isWhite;
});
