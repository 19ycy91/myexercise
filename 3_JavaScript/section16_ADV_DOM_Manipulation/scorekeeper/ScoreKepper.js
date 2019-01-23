
var p1S = document.querySelector("#p1Score")
var p2S = document.querySelector("#p2Score")
var p1Button = document.querySelector("#p1")
var p2Button = document.querySelector("#p2")
var reset = document.querySelector("#res")
var val = document.querySelector("h2 span")
var gVal = document.querySelector("#gameVal")
var p1Score = 0;
var p2Score = 0;
var uptoVal = 5;
// var buttonclicked = false;
var gameOver = false;


// gVal.addEventListener('keydown', function(){
// 	if (buttonclicked == true){
// 		this.value = uptoVal;
// 	}
// })


function resetF(){
	p1Score = 0;
	p2Score = 0;
	
	// buttonclicked = false;
	gameOver = false;
	p1S.classList.remove("winner");
	p2S.classList.remove("winner");
	// gVal.value = "";
	// val.textContent = uptoVal;
	p1S.textContent = p1Score;
	p2S.textContent = p2Score;}

gVal.addEventListener('input', function(){
	// if (buttonclicked == false){
	uptoVal = Number(this.value);
	val.textContent = uptoVal;
	resetF()}
// }
)



p1Button.addEventListener("click", function() {
	// buttonclicked = true;
	if (gameOver == false ){
		p1Score+=1;	
		p1S.textContent = p1Score;
		if (p1Score === uptoVal){
			// p1S.style.color = "green";
			p1S.classList.add("winner");
			gameOver=true;
			return "P1 Wins!"			
		}
	}

});


p2Button.addEventListener("click", function() {
	// buttonclicked = true;
	if (gameOver == false ){
		p2Score+=1;	
		p2S.textContent = p2Score;
		if (p2Score === uptoVal){
			// p2S.style.color = "green";
			p2S.classList.add("winner");
			gameOver= true;
			return "P2 Wins!"			
		}
	}

});

reset.addEventListener("click", function() {
	uptoVal = 5;
	val.textContent = uptoVal;
	resetF();
})










