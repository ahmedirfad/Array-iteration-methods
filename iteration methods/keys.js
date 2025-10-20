let fruits = { apple: 2, mango: 5, banana: 3 };
let keys = Object.keys(fruits);
console.log(keys);


let student = { name: "Irfad", age: 20, course: "BCA" };
let keys1 = Object.keys(student);

for (let key of keys1) {
  console.log(key);
}


let car = { brand: "BMW", model: "X5", year: 2022 };
console.log(Object.keys(car).length);
