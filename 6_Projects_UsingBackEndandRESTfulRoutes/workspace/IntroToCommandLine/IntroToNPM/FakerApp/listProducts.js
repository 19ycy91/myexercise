var faker = require("faker");

console.log("==============================")
console.log("WELCOME TO MY SHOP!")
console.log("==============================")


function shopOpen(a){
    for (var i =0; i<a; i++){
        // console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
         console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}}


shopOpen(10);
