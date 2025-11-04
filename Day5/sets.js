let myset = new Set();
myset.add("Irfad");
myset.add("Nuha");
myset.add("Imad");
console.log(myset);

myset.delete("Nuha");
console.log(myset);

console.log(myset.has("Irfad"));

console.log(myset.entries());

console.log(myset.values());

for(let entry of myset.values()){
    console.log(entry);
}

for(let entr of myset.entries()){
    console.log(entr);
}

myset.forEach((value) => {
    console.log(value+" ahmed");
});

myset.clear();
console.log(myset);