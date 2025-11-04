let myMap = new Map();
myMap.set("name","Irfad");
console.log(myMap);
myMap.set("age",20);
myMap.set("place","kasaragod");
myMap.set(true,"Yes");
console.log(myMap);

console.log(myMap.get("age"));
console.log(myMap.get("place"));


console.log(myMap.has("place"));
console.log(myMap.has("gender"));

console.log(myMap.size);

myMap.delete(true);
console.log(myMap.has(true));

for(let key of myMap.keys()) {
    console.log(key);
}

for(let val of myMap.values()) {
    console.log(val);
}

myMap.forEach((value,key) => {
    console.log(key + '=' + value);
    })
    
myMap.clear();
console.log(myMap.size);