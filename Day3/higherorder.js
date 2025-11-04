function greet(name,formatter){
    console.log(formatter(name));
}
function lowercase(name){
    return name.toLowerCase();
}
greet("IRFAD",lowercase)