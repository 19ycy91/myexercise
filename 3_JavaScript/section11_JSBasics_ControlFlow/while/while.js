
console.log("Print all numbers between -10 and 19")
// var x = -10;

// while (x<=19){
// 	console.log(x);
// 	x+=1;
// }

for(var i= -10; i<=19; i++){
	console.log(i);
}



console.log("Print all even numbers between 10 and 40")
// var y = 10;

// while (y<=40){
// 	console.log(y);
// 	y+=2;
// }

for(var i =10; i<=40; i++){
	if (i%2 ==0 ){
	console.log(i);
	}
}




console.log("Print all odd numbers between 300 and 333 ")
// var z = 301;

// while (z<=333){
// 	console.log(z);
// 	z+=2;
// }



for (var i = 301; i<= 333; i+=2){
	console.log(i);
	i+=2;
}



console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
// var zz = 5;

// while (zz<=50){
// 	if (zz%5 == 0 && zz%3 ==0){
// 		console.log(zz);
// 	}
// 	zz+=1;
// }


for (var i=5; i<=50; i+=1){
	if (i%5 == 0 && i%3 ==0){
	console.log(i);
}
}
