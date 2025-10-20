let str = "Irfad";
let arr = Array.from(str);
console.log(arr);


let myset = new Set ([1,2,3]);
let arr1 = Array.from(myset);
console.log(arr1);

let arr2 = Array.from({ length: 5}, (v,i) => i+1);
console.log(arr2);
