// 1. Write a JS function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223
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


// 2. Write a JS function that checks whether a passed string is palindrome or not? 
    // let str = "madam";
    // let len = str.length;
    // // console.log(len);
    // for(let i=0 ; i<=len/2 ; i++){
    //         // console.log(i);
    //         if(str[i]==str[len-i]){
    //             console.log("palindrone number");
    //         }else{
    //             console.log("not palindrone number");
    //         }
    // }


// 3. Write a JS function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
    // let a="dog"
    // let b=Array.from(a)
    // // console.log("b",b);cl
    //  let c=[]
    // for(let i = 0 ; i<b.length ;i++){
    //     for(let j=i+1;j<b.length+1;j++){
    //         c.push(b.slice(i,j).join(""))
            
    //     }
    // }
    // // console.log(c);
    // console.log(c.toString())


// 4. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
    // let a = "webmaster"
    // let b = Array.from(a)
    // console.log(b)
    // console.log(b.sort())
    // console.log(b.join("").toString())


// 5. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
    // let str = "the quick brown fox"
    // let arr = str.split(" ")
    // let b = [];
    // for(let i=0;i<arr.length;i++){
    //     b[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // }
    // let ans = b.join(" ")
    // console.log(ans);


// let b = "Web Development Tutorial"
// let ans = b.split(" ")
// a= [0]
// console.log(ans);
// for (let i=0;i<ans.length;i++){
//     if(ans[i].length>a){
//         a=ans[i].length;
//     }
// }
// console.log(a)