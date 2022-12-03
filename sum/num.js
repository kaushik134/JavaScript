let number = 1234567
let s=0
let n=(num,sumnum)=>{
    Arr = Array.from(String(num), Number);
    sumnum()
}
let exp=()=>{
    console.log(Arr);
    Arr.forEach(x=>{
        s +=x;
    })
    console.log(s)
    setTimeout(()=>{
        if(s<9){
            console.log(s)
        }else{
            // numb=s;
            // console.log("else",number)
            // console.log(typeof s)
            Arr = Array.from(String(s), Number);
            // n()
            console.log("else in",Arr)
            s=0;
            exp()
        }
    },1000)
}
n(number,exp)