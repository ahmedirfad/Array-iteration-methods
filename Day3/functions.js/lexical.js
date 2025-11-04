function outer(){
    let name = "Irfad";
    function inner(){
        console.log("hello "+name)
    }
    inner();
}
outer();


function outer(){
    let x=10;
    function inner(){
        let y = 15;
        console.log("answer is  "+ [x+y]);
    }
    inner();
}
outer();