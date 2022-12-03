let number=99;
let s=0
let n=(num)=>{
    s=0;
    Arr = Array.from(String(num), Number);
    Arr.forEach(x=>{
        s +=x;
    })
    console.log(s)
    return check(s)
}
let check =(sum)=>{
    if(sum<=9){
        return sum;
    }else{
        return n(sum);
    }
}
let driver = (numb,call_n)=>{
    call_n(numb);
}
driver(number,n)