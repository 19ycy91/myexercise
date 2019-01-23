//printReverse 
//takes an array and prints reverse

function printReverse(x){
 
	for ( var l = x.length-1 ; l>=0 ; l-=1){
		// console.log(l);
		console.log(x[l]);
	}

}

// printReverse(["a","b","c","d","e"])


//isUniform 
// if list is all identical then return true

function isUniform(x){
	
	for (var i = 1; i<x.length; i+=1){
		if(x[0] != x[i]){
			return false
		}
	}
	return true
}




// function isUniform2(x){
// 	x.forEach(function(i){
// 		if (i!=x[0]){
// 			return false
// 		}

// 	})
// 	return true
// }

/// above doesn't work since the return false only exits out of the function
// that is in forEach



// isUniform(["a","b","c","d","e"])


//sumArray
//return something

function sumArray(x){
	var sum = 0;
	x.forEach( function(i){
		sum+=i;
	});
	return sum;
}

// sumArray([1,2,3,4,5])


//max
//get max number

function max(x){
	var num = x[0]
	x.forEach( function(i){
		if (i > num){
			num = i
		}
	})

	return num;
}



function myForEach(arr, func){
	for (var i =0, i< arr.length, i+=1){
		func(arr[i]);
	}
}

Array.prototype.myForEach = function(func){
	for (var i =0; i< this.length; i+=1){
		func(this[i]);
	}
}





