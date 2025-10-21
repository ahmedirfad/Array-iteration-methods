const person = {
    name: "Irfad",
    age: 20,
    education: "BCA"
};
console.log(person.name)

const person1 = new Object({
    fname:"Nuha",
    lname:"Fathima",
    eyeColor: "brown",
    age: 20
});
console.log(person1.fname);

function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello,my name is " + this.name + " age is " + this.age);
    }
}

const person3 = new Person("Irfad", 20);
const person4 = new Person("adil", 21);

console.log(person3.age);
console.log(person4.name);
person3.greet();
person4.greet();