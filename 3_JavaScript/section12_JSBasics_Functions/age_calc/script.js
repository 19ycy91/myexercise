// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("What is your age?");
// console.log("Your full name is " +firstName+" "+ lastName);
// console.log("You are "+age+" years old");


// var age = prompt("how old are you?")
// var daysYear = 365.25;
// prompt(age + " years is roughly " + age*daysYear + " days");



var age = prompt("What is your age?");

if (age < 0) {
	console.log("Error");
}


if (age == 21){
	console.log("Happy 21st birthday");
}

if (Number.isInteger(Math.sqrt(age))){
	console.log("perfect square!");
}

if (age%2==1){
	console.log("your age is odd");
}


// else{
// 	console.log("your age is even");}
