/* simple promise */
// let promise1 = new Promise((resolve, reject) => {
//     resolve("welcome")
// })
// promise1.then((posres)=>{
//     console.log("then :",posres)
// },(erres)=>{
//     console.log("error :",erres)
// })



/* settimeout function */
// console.log("before")
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("welcome")
//     },5000)
// })
// console.log("after")
// promise1.then((posres)=>{
//     console.log("then :",posres)
// },(erres)=>{
//     console.log("error :",erres)
// })



/* multiple promise */
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("welcome")
//     },2000)
// })
// let promise2 = new Promise((resolve, reject) => {
//     resolve("kaushik")
// })
// promise1.then((posres)=>{
//     console.log(posres)
// },(erres)=>{
//     console.log(erres)
// })
// promise2.then((posres)=>{
//     console.log(posres)
// },(erres)=>{
//     console.log(erres)
// })



/* resolve promise all */
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("welcome")
//     },2000)
// })
// let promise2 = new Promise((resolve, reject) => {
//     resolve("kaushik")
// })
// let promise3 = new Promise((resolve, reject) => {
//     resolve("how are you")
// })
// Promise.all([promise1,promise2,promise3]).then((posres)=>{
//     console.log(posres)
// },(erres)=>{
//     console.log(erres)
// })



/* reject promise all */
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("welcome")
//     },2000)
// })
// let promise2 = new Promise((resolve, reject) => {
//     reject("kaushik")
// })
// let promise3 = new Promise((resolve, reject) => {
//     resolve("how are you")
// })
// Promise.all([promise1,promise2,promise3]).then((posres)=>{
//     console.log(posres)
// },(erres)=>{
//     console.log(erres)
// })



/* race promise */
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("welcome")
//     },2000)
// })
// let promise2 = new Promise((resolve, reject) => {
//     resolve("kaushik")
// })
// let promise3 = new Promise((resolve, reject) => {
//     resolve("how are you")
// })
// Promise.race([promise1,promise2,promise3]).then((posres)=>{
//     console.log(posres)
// },(erres)=>{
//     console.log(erres)
// })
// only first print race function



/* AllSetteled promise*/
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("welcome")
//     },2000)
// })
// let promise2 = new Promise((resolve, reject) => {
//     resolve("kaushik")
// })
// let promise3 = new Promise((resolve, reject) => {
//     reject("how are you")
// })
// Promise.allSettled([promise1,promise2,promise3]).then((posres)=>{
//     console.log(posres)
// },(erres)=>{
//     console.log(erres)
// })
// reject reason with key value pair output


