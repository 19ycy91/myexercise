
function isEven (x) {
	return x%2===0;
}


function factorial(x){
	var result =1;
	for (var i=1; i<=x ;i+=1){
		result *=i;
	}
	return result;
}


function kebabToSnake(x){
	return(x.replace(/-/g,"_"))
}


function factorial2(x){
	if (x === 0){
		return 1;
	}
	var result =x;
	for (var i=x-1; i>=1 ;i-=1){
		result *=i;
	}
	return result;
}

