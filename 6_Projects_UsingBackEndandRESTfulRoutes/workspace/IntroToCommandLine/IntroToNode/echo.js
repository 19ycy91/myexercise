function echo(a,b){
    for (var i = 0; i<b; i++){
        console.log(a);
    }
}



// echo("Echo!!",10);
// echo("tater tos",3);

function average(arr){

    var value = 0
    arr.forEach(function(a) {
        value+=a;
    })
    var avg =value/arr.length;
    return Math.round(avg);
    
}


var scores = [90,98,89,100,100,86,94];
console.log(average(scores));
var scores2= [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));