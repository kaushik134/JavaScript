// let n= 32243;
// let reminder;
// let r=0;
// function reverse(){
//     while(n!=0){
//     reminder = n%10;
//     r = r * 10 + reminder;
//     n= Math.floor(n/=10);
//     }
//     console.log(r);
// }
// reverse();



let str = "madam";
let len = str.length;
// console.log(len);
for(let i=0 ; i<=len/2 ; i++){
        // console.log(i);
        if(str[i]==str[len-i]){
            console.log("palindrone number");
        }else{
            console.log("not palindrone number");
        }
}