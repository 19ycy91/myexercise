// create secret number

var secretNumber = 4;

// guess
var stringGuess = (prompt("guess a number"));

var guess = Number(stringGuess);

//check guess
if ( guess === secretNumber){
	alert("you got it right");
}

//otherwise, you got it wrong
else if ( secretNumber>guess){
	alert( "too low, guess again")

}
else {
	alert( "too high, guess again")
}

