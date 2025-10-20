//1. greater than 15 
let num = [10,15,20,25];
let result = num.filter(num => num > 15);
console.log(result);

//2. even numbers 
let numbers = [1,2,3,4,5,6,7,8,9];
let even = numbers.filter(numbers1 => numbers1%2==0);
console.log(even);

//3. starts with I
let names = ["Irfad","Nuha","Imad","Shehza"];
let i = names.filter(names1 => names1.startsWith("I"));
console.log(i);

//4. eject falsy values
let values = [0,1,false,2,'',3,null];
let truthvalues = values.filter(function(val){
    return val;
});
console.log(truthvalues);

//5. length > 4
let words = ["Irfad", "Nuha","Imad","Shehza"];
let long = words.filter (word => word.length > 4);
console.log(long);
