//inside an objects method
const football = {
    name: "cristiano",
    age: 41,
    greet: function(){
        console.log("Greatest of All Time is " + this.name+ "(" +this.age+")");
    }
}
football.greet();

// In Regular Functions

function show(){
    console.log(this)
}
show()

//arrow functions
const person = {
    name: "Irfad",
    age: 20,
    greet: function (){
        const arrow = () => {
            console.log(this.name + this.age);
        }
        arrow();
    }
}
person.greet();