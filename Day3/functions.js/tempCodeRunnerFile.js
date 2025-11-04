function printnumbers(n){
    if(n===0) return;
    printnumbers(n-1);
    console.log(n);
}
printnumbers(5)