let nums =[1,2,3,4,5];
let[first,...rest]=nums;
console.log(first);
console.log(rest);
console.log(nums);


function sum(...numbers) {
  console.log(numbers);
}

sum(5, 10, 15);



function greet(name, ...messages) {
  console.log("Name:", name);
  console.log("Messages:", messages);
}

greet("Irfad", "Hello", "How are you?", "Good morning");
