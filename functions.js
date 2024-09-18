// Function - syntax

// function functionName(parameter, a, b) {
        //Code to execute
// }

function welcome() {
    console.log("Welcome to Functions in JavaScript!")
}
welcome()

function welcome1() {
    return "Welcome to Function in JavaScript with Return value!"
}

console.log(welcome1())

// 2 types of functions in JavaScript
// 1. Named Functions
// 2. Anonymous Functions

// 1. Named Function - A function which is having a name is called Named Function

function add(a, b) {
    console.log(a+b)
}

add(2, 3)

function add1(a, b) {
    return a+b
}

let sum = add1(2, 4)
console.log(sum)

function greet() {
    console.log("Hello!")
}

greet()

// 2. Anonymous Function - A function which doesn't have any name is called Anonymous Function

let add2 = function (a, b) {
    return a+b
}

let sum1 = add2(4, 6)
console.log(sum1)

// There are many ways we can declare a function in JavaScript. But when it comes to the 
// test automation we use few types. They are:

// 1. Function Declaration
// we have to use function keyword followed by functionName and arguments if any.
// Example:
function addition(a, b) {
    return a+b
}
let sum2 = addition(10,20)
console.log(sum2)

// 2. Function Expression - It is used for Anonymous Functions. It will not have functionName.
// We have to declare a identifier to store the function and call it whereever is required.
// Example:
let anonymous = function() {
    console.log("Anonymous Function using Function Expression!")
}
anonymous()

// 3. Arrow Function - it is modern way of declaring a function. It will be shorter when it is
// compared to the other 2 types of declaration. It has been introduced in ES6 version of
// JavaScript. We do not have to use the function keyword. instead we have to use (=>) fatpipe
// sumbol.

// Syntax:
// const arrow = (a, b, c, d) => {}

    // Example:
let multiply = (a,b) => {
    return a*b
}

console.log(multiply(2,4))

// 4. IIFE - Immediately Invoked Function Expression
// This can be declared without a functionName. It has to be declared inside () paranthesis
// It has to be called immediately after the function declaration is over.

// (function(parameter1, parameter2,..){
        // Code to be executed
// })(parameter1,parameter2,...)

/*(function() {
    console.log("IIFE - Immediately Invoked Function Expression")
})()*/

// 5. Function Constructor - It is used to create a new function objects. It has be to be
// declared using new operator.

// syntax:
// let varaible = new Function() - Function() is not a function - it is a function constructor
// let variable = new Function('param1','param2','return param1+param2')

// Example:
let variable1 = new Function('a','b','return a+b')
console.log(variable1(100,200))

let variable2 = new Function('console.log("This is Test Function")')
variable2()