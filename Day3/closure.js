function outer(){
    let name = "Irfad";
    function inner() {
        console.log("Hello," + name); 
    }
    return inner;
}
let greet = outer();
greet();