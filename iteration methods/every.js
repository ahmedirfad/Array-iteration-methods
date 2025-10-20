let numbers = [2,4,6,8];
let alleven = numbers.every(num => num%2==0);
console.log(alleven);

let numbers1 = [1,3,4,5,-7];
let positive = numbers1.every(num1 => num1>0);
console.log(positive);

let words = ["apple","banana","cat","dog"];
let lengthh = words.every(word => word.length>3);
console.log(lengthh);

let values = [1,"hello",true,5];
let truthy = values.every(val => val);
console.log(truthy);
