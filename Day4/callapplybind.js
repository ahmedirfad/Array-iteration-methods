//call() method
function greet (greeting,emoji){
    console.log(greeting + ' ' + this.name + ' ' + this.age + ' ' + emoji);
}

let person = {name:"Irfad", age:20};

greet.call(person,"Heyy","🫠");


// apply() method
function greett (greeting,emoji){
    console.log(greeting + ' ' + this.name + ' ' + this.age + ' ' + emoji);
}

let person1 = {name:"Irfad", age:20};

greett.apply(person1,["Heyy","🫠"]);


//bind() method
function greett (greeting,emoji){
    console.log(greeting + ' ' + this.name + ' ' + this.age + ' ' + emoji);
}

let personnn = {name:"irfad",age:20};
let greetPerson = greett.bind(personnn,"hey");
greetPerson('🏃');