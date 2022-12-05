// let promise1 = new Promise((resolve, reject) => {
//     resolve("how are you")
// })
// async function my_fun(){
//     let res = await promise1;
//     console.log(res)
// }
// my_fun()



/* math promise_async_await*/
// function add(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num+5)
//     })
// }
// function sub(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num-5)
//     })
// }
// function mul(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num*5)
//     })
// }
// function div(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num/5)
//     })
// }
// async function my_fun(){
//     let address = await add(5);
//     let subress = await sub(address);
//     let mulress = await mul(subress);
//     let divress = await sub(mulress);
//     console.log(address,subress,mulress,divress)
// }
// my_fun()