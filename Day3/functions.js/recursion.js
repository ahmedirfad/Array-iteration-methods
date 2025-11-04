function printnumbers(n){
    if(n===0){
        return n;
    }else {
    printnumbers(n-1);
}
console.log(n);
}
printnumbers(8)



function factorial(n){
    if(n<=1){
        return 1;
    } else {
    return n*factorial(n-1);
}
}
console.log(factorial(5));