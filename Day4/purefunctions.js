// pure functions.
function add(a, b) {
  return a + b;
}
console.log(add(2,3));


// impure functions . 
let count = 0;
function increment(){
    count ++;
    return count;
}
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());