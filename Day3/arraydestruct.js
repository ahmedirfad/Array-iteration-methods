//1. Basic
let numbers = [10,20,30,40];
let [a,b,c,d]= numbers;
console.log(a,b,c,d);

//2. Skipping
let colors =["red", "blue", "green"];
let[first, , third] = colors;
console.log(first,third);

//3. adding default
let fruits = ["apple"];
let [fruit1, fruit2 = "banana"] = fruits;
console.log(fruit1, fruit2);

//4. exchanging
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x, y); 

//5. nested array destructuring
let numberss = [1, [2, 3]];
let [one, [two, three]] = numberss;
console.log(one, two, three); 



