let greet = function(){
    console.log("hello world");
}
greet();

let numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
    console.log(num * 2);
});

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);
