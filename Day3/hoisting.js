// function declaration hoisting
add(5,3);
function add(a,b){
    console.log(a+b); 
}

// function expression hoisting
// console.log(diff(5,2));
// let diff = function(a,b){
//     return a - b;
// }

// var hoisting
console.log(x);
var x = 5;

//let hoisting 
// console.log(y);
// let y = 10;

console.log(z);
const z = 10;