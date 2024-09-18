// // Loops will execute same block of code multiple times.

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// //for       -   If we know how many times we have to execute the same statement - ex. 10

// //while     -   If we do not know how many times we have to execute 
// //          -   Execution stops at certain condition

// //do-while  -   This code will be executed 1 time before checking end condition.    

// //for ... of //
// //for ... in //

// //For Loop - Syntax
// // for(initialization;condition;increment/decrement) {
// //  initialization      -   initialize the varaiable to start with. Ex: let i=0
// //  condition           -   it will check for true or false. Ex: i<5 // 0<5
// //  increment/decrement -   i++/i-- || i++ = i=i+1 || i=0+1
// //  Code to be executed
// // }
// console.log("***********************************")
// for(let i=1;i<5;i++) {
//     console.log(i)
// }

// let result = "";
// for(let i=1;i<5;i++) {
//     result += i+" "
// }
// console.log(result)

// //while - syntax
// //while(condition) {
// //  code to be executed
// //}
// console.log("***********************************")

// let j=0
// while(j<5) {
//     console.log(j)
//     j++
// }

// //do .... while - syntax
// //do {
// //  Code t be execuetd
// //}while(condition);
// console.log("***********************************")
// //print 0 to 10
// let k=0
// do{
//     console.log(k)
//     k++
// }while(k<=10);

// // for ... in - it is used to iterate over the properties of the object.
// // for ... in - syntax

// // for(variable in object) {
// //  Code to be executed
// //}
// console.log("***********************************")
// const employee = {name:"Tom",age:30,city:"London"}
// console.log(employee)
// for(let key in employee) {
//     console.log(key+":"+employee[key])
// }

// // for ... of - is used to iterate over the values of any iteratable objects. Ex: Arrays, Strings
// // for ... of - syntax

// // for(varibale of iterable) {
// //  Code to be executed
// //}
console.log("***********************************")
const array = [10,20,30,"Tom",false,4.5]
// console.log(array[0])
for(value of array) {
    console.log(value)
}