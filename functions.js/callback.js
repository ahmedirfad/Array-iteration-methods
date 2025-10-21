function greet(name,callback){
    console.log("Hello" + name);
    callback();
}
function sayBye(){
    console.log("GoodBye");
}
greet("irfad", sayBye)