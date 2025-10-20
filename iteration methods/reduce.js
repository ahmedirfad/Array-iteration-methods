let numbers = [10,20,30,40,50];
let sum= numbers.reduce(function(acc,num){
    return acc + num;
})
console.log(sum);

let integers = [2,3,4];
let product = integers.reduce(function(acc,num){
    return acc * num;
})
console.log(product);

let large = [5,10,8,107,17];
let larger = large.reduce((acc, large1) => 
    Math.max(acc, large1));
console.log(larger);

let words =['Hello','World','Js'];
let newwords = words.reduce(function(acc,val){
    return acc.concat(val);
})
console.log(newwords);

let fruits = ['apple','banana','apple','cherry','banana'];
let newfruits = fruits.reduce(function(acc,fru){
    if(acc[fru]){
        acc[fru] +=1;
    }else{
        acc[fru] =1;
    }
    return acc;
}, {})

console.log(newfruits);


