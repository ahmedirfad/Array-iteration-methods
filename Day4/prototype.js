function Person(name){
    this.name = name;
}
Person.prototype.greet = function () {
    console.log ("Hello "+ this.name);
};

let user1 = new Person("Irfad");
let user2 = new Person("Sulaif");
user1.greet();
user2.greet();