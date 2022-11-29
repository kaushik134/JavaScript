function one(){
    console.log("I")
}
function two(call_one){
    call_one();
    console.log("Eat")
}
two(one);