//1. uppercase
let fruits=['apple','banana','cherry'];
let upperfruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperfruits);

//2. double

let num=[3,4,5,6,7];
let doubled=num.map(num1 => num1*2);
console.log(doubled);

//3. adds 10 

let add=[5,10,15,20,25];
let added=add.map(add1 => add1 + 10);
console.log(added);

//4. create greetings
let names=["Irfad","Nuha"];
let greet=names.map(names1 => `Hello ${names1}`);
console.log(greet);

// 5. length
let words =['JavaScript','Html','css'];
let newwords = words.map(word => word.length);
console.log(newwords);

