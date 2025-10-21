const football = {
    name: "cristiano",
    age: 41,
    greet: function(){
        console.log("Greatest of All Time is " + this.name+ "(" +this.age+")");
    }
}
football.greet();