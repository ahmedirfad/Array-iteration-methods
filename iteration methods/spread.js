//1. copy 
let arr1 =[1,2,3];
let arr2 = [...arr1];
console.log(arr2);
arr2.push(4);
console.log(arr1);
console.log(arr2);

//2. merge 
let fruits = ["apple", "banana"];
let veggies = ["carrot","spinach"];
let food =[...fruits,...veggies];
console.log(food);

//3. copy and add
let fruitss = ["apple", "banana", "mango"];
let newFruits = [...fruitss];
console.log(newFruits);

newFruits.push("orange");
console.log(newFruits);

