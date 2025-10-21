function printnumbers(n){
    if(n===0) return;
    printnumbers(n-1);
    console.log(n);
}
printnumbers(5)

function factorial(n){
    if(n<=1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));