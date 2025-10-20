// normal 
let numbers=[1,2,3,4];
numbers.forEach(function(num){
    console.log(num*2);
});

//doubles and creates new array
let values=[2,4,6,8];
let doubled=[];
values.forEach(function(val){
    doubled.push(val*2);
    
})
console.log(doubled);

//3. Print all elements.
let a=[1,2,3,4,5];
a.forEach(function(a1){
    console.log(a1);
})

//4.Print squares

let b= [1,2,3,4,5];
b.forEach(function(b1){
    console.log(b1*b1); 
})

//5. index and value

let fruits=['apple','banana','cherry'];
fruits.forEach(function(fruit,index){
    console.log(`${index}: ${fruit}`);
    
})

//6. sum 

let numb=[10,20,30,40];
let sum=0;
numb.forEach(function(numb1){
    sum+=numb1;
 })
    console.log(sum);

//7. uppercase


let names=['ahmed','irfad','nuha'];
names.forEach(function(nam){
    console.log(nam.toUpperCase());
})
