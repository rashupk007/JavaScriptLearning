// // This is a single line comment

// /* 
//  This is milti line comments
//  This is Second Line
// */

// // Data Types in JS:

// // There are 5 types of Data Types in JavaScript.

// /*
// 1. Number
// 2. String
// 3. Booloan
// 4. Undefined
// 5. Null
// */

// //creating a varible using 3 different keywords
// //var, let, const

// // 1. Number - int, float and double\

// var inta = 10              //-   Data Type is Number and Integer value is stored
// var inta1 = 10.3636366     //-   Data Type is Number and Float or Double value is stored
// // typeof - method to find what type of data is stored in a variable
// // typeof - accepts 1 argument which should be declared as variable before using it.
// console.log(typeof(inta))

// // 2. String - char, String
// //value must be enclosed with "" to make it as String data type
// //if we enclose the value with '' then it'll be stored as Char data type
// var str = "String"      //-   Data Type is String and String value is stored
// var str1 = 'c'          //-   Data Type is String and char value is stored
// console.log(typeof(str))

// // 3. Boolean - true(1==1) / false(1<0)
// var bol = true
// console.log(typeof(bol))

// // 4. Undefined - Undefined is a type of variable for which the value is not defined
//                 //until any value is assigned
// var name
// console.log(typeof(name))

// // 5. Null - Any value to which we are assigning Null as value it will be considered as Null 
// //           data type. It will show as Object type when we use typeof method with null value.
// var x = null
// console.log(typeof(x))

// // Variable in JS
// // var was the only option to create a variable in JS till ES5 (ECMASCRIPT 5)
// // let and const was introduced to create a variable in JS from ES6 (ECMASCRIPT 6) onwards.

// var ab = 10;//Global Scope Variable

// function test() {
//     console.log(ab)
// }

// function test1() {
//     var ba = 20;//Function Scope Variable
//     console.log(ab)
//     console.log(ba)
// }
// // console.log(ba)

// test()
// test1()

// // var - Global scope of Function scope
// // we can redeclare var and we redefine it

// var c = 10;     //  -   Redeclare
// var c = 20;
// var c = 20;
// var c = 20;

// var c = 30;
// c = 50;         //  -   Redefine / Reassign

// // let      -   let keyword is used to limit its usage upto a Block {.....}
// //              if declared inside a Block {....}
// //              It has scope only inside a block of code.
// //              We cannot redeclare or but we can redefine / reassign let variable

// let v=10;
// // let v=20;    -   Syntax Error
// v = 30;

// function testing() {
//     let x = 10;
//     if(true) {
//         let y = 20;
//         console.log(x)//10
//         console.log(y)//20
//     }
//     // console.log(y)// ReferenceError - y is not defined
// }

// testing()

// //const     -   it is used to store constant variable
// //          -   its usage upto a Block {.....}. It has scope only inside a block of code.
// //              if declared inside a Block {....}
// //              We cannot redeclare or we cannot redefine / reassigne value to const variable

// const v1 = 20;
// // const v1 = 30;       -   Syntax Error
// // v1 = 40;              //-   Runtime Error
// function testing() {
//     const x = 10;
//     if(true) {
//         const y = 20;
//         console.log(x)//10
//         console.log(y)//20
//     }
//     // console.log(y)// ReferenceError - y is not defined
// }

// testing()

// // It is mandatory to assign value to the const variable where as for var and let variable
// // it is not mandatory to assign value.

// console.log("********************************************")

// var flag = true;
// var t1 = 4;
// if(t1>3) {
//     var flag = false;
// }
// console.log(flag)

// let z
// console.log(z)

// z = 14
// console.log(z)
// console.log(typeof(z))

var abcd
abcd = "String"
console.log(abcd)
console.log(typeof(abcd))

let abcd
abcd = 10
console.log(abcd)
console.log(typeof(abcd))
