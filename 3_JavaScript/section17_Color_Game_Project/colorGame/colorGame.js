var numsquares = 6
var colors = randColor(numsquares)

var colorDisplay = document.getElementById("colorDisplay")
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var newColor = document.querySelector("#newColor");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var header = document.querySelector("h1");
var container = document.querySelector("#container")
var hardMode = true;

easyButton.addEventListener("click",function(){
	hardMode = false;
	numsquares = 3;
	newStart(numsquares);})


hardButton.addEventListener("click",function(){
	hardMode = true;
	numsquares = 6;
	newStart(numsquares);})




newColor.addEventListener("click",function(){
	messageDisplay.textContent=""
	for (var i =0 ; i < squares.length; i++){ 
	squares[i].style.backgroundColor = "#232323"}
	if (hardMode== false){
		colors = randColor(3);
	}
	else {
		colors = randColor(6);
	}
	pickedColor = pickColor();
	header.style.backgroundColor = "steelblue";
	newColor.textContent = "New Colors"
	startGame()})


function startGame(){

colorDisplay.textContent = pickedColor;
for (var i =0 ; i < colors.length; i++){ 
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor != pickedColor){
			// console.log(this.style.backgroundColor, pickedColor)
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		else{ 
			messageDisplay.textContent = "Correct!"
			changeColor(pickedColor);
			header.style.backgroundColor = pickedColor;
			newColor.textContent = "Play Again?"




		}})
	}

			
}

function changeColor(color){
	for (var i =0 ; i < colors.length; i++){
			squares[i].style.backgroundColor = pickedColor;
		}

}

function pickColor(){
	var a = Math.floor(Math.random()*(colors.length));
	return colors[a]


}

function randColor(x){
	var colorsRand = []
	for (var i = 0; i < x ; i++ ){
		var a = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var c = Math.floor(Math.random()*256);
		colorsRand.push("rgb(" + a+", "+b+", "+c+")")
	
	}
	return colorsRand

}

function newStart(numsquare){

	if (hardMode != true){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	for (var i =3 ; i < squares.length; i++){ 
	squares[i].style.display = "none";}}
	else {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	for (var i =3 ; i < squares.length; i++){ 
	squares[i].style.display = "block";}		
	}
	colors = randColor(numsquares);
	pickedColor = pickColor();
	header.style.backgroundColor = "steelblue";
	newColor.textContent = "New Colors"
	startGame()}

startGame()

