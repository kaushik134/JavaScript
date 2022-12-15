// This :- current object
// const stud={
//     name:"kaushik",
//     age:20,
//     course:"BCA",
//     getStudName:function(){
//         console.log(this)
//     }
// }
// stud.getStudName();
// console.log(typeof stud)


// Call
// let stud={
//     name:"kaushik",
//     age:20,
//     course:"BCA"
// }
// let stud1={
//     name:"bhautik",
//     age:19,
//     course:"BCA"
// }
// let getStudName= function(city,state){
//     console.log(this.name+" - "+city+" - "+state)
// }
// console.log(typeof getStudName)
// getStudName.call(stud);
// getStudName.call(stud1);
// getStudName.call(stud,"surat","gujarat");


// apply
// let stud={
//     name:"kaushik",
//     age:20,
//     course:"BCA"
// }
// let stud1={
//     name:"bhautik",
//     age:19,
//     course:"BCA"
// }
// let getStudName= function(city,state){
//     console.log(this.name+" - "+city+" - "+state)
// }
// getStudName.apply(stud,["surat","gujarat"]);


// Bind
// let stud={
//     name:"kaushik",
//     age:20,
//     course:"BCA"
// }
// let stud1={
//     name:"bhautik",
//     age:19,
//     course:"BCA"
// }
// let getStudName= function(){
//     console.log(this.name)
// }
// let user = getStudName.bind(stud);
// console.log(typeof user)
// console.log(user)
// user()