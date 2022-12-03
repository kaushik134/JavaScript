function add(num,callback){
    return callback(num+10)
}
function sub(num,callback){
    return callback(num-5)
}
function mul(num,callback){
    return callback(num*2)
}
function div(num,callback){
    return callback(num/3)
}
add(10,(addres)=>{
    console.log("addres = ",addres)
    sub(addres,(subres)=>{
        console.log("subres = ",subres)
        mul(subres,(mulres)=>{
            console.log("mulres = ",mulres)
            div(mulres,(divres)=>{
                console.log("divres = ",divres)
            })
        })
    }) 
})