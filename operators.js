// Arithmatic Operator
// Conditional Operator / Comparision Operator
// Logical Operator
// Assignment Operator

// Arithmatic Operator: An operator which performs mathematic operations
// Example: +, -, *, /, %, ** (Exponential Opr), ++ (Increment Opr), -- (Decrement Opr)

let a=9
let b=2
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b) //a to the power of b ex: 9 to the power of 2 || 9^2

console.log("**************************************")
// ++ - Increment Operator

// Post Increment - action will be performed first and then the value will be incremented.

let c=10
console.log(c++)
console.log(c)

console.log("**************************************")

// Pre Increment - Action will be performed after incrementing the value

let d=5
console.log(++d)
console.log(d)

console.log("**************************************")

// -- - Decrement Operator

// Post Decrement - Action will be performed first and then value will be decremented

let e=5
console.log(e--)
console.log(e)

console.log("**************************************")

// Pre Decrement - Action will be performed after the value is decremented.

let f=5
console.log(--f)
console.log(f)

console.log("**************************************")

// Comparision Operator - Compares the two values and return a boolean result(true or false)
// Example: ==, !=, ===, !==, >, <, >=, <=

let g=20
let h=30
let h1='20'

console.log(g==h) //false
console.log(g==h1) //true - JS internally converts the variable datatype and compare when we
//                          use (== - Equality Operator) comparision operator
console.log(g===h1)// false - JS will not convert the variable datatype when we use 
//                          (=== - Strict Equality Operator) comparision operator
console.log("**************************************")

// != - Not Equal To - If both of the values of the variables are not same but datatype can
//                     of any type (numeric or string). It will convert te datatype and 
//                     compare

console.log(g!=h1) //false

// !== - Strict Not Equal to operator - It will not convert the datatype to compare

console.log(g!==h1) //true

console.log("**************************************")

// > - Greater Than - a>b

let i=10
let j=10
console.log(i>j) //false
console.log(i>=j) //true

console.log(i<j) //false
console.log(i<=j) //true

console.log("**************************************")

//Logical Operator - Evaluate a boolean expression (true or false)
//Example: && (AND), || (OR), ! (NOT)

//&& (AND) Operator - Both the condition is true then it will return true else false
//true && true = true
//true && false = false
//false && false = false

console.log((10>5)&&(7>6)) // true && true = true
console.log((10>5)&&(6>7)) // true && false = false
console.log((1>2)&&(3>7)) //false && false = false

console.log("**************************************")

//|| (OR) Operator - Any of the condition is true then it will return true if both the
//                   Conditions are false then it will return false

//true || true = true
//true || false = true
//false || true = true
//false || false = false

console.log((10>5)||(7>6)) // true || true = true
console.log((10>5)||(6>7)) // true || false = true
console.log((10<5)||(6<7)) // false || true = true
console.log((1>2)||(3>7)) //false || false = false

console.log("**************************************")

//! (NOT) Operator - It will reverse the value and this will work with boolean datatype
//!true = false
//!false = true

console.log(!(2>1)) //!true = false
console.log(!(2<1)) //!false = true

console.log("**************************************")

//Assignment Operator - it is used to assign the value to the variable.
//= - Assign the value to the variable
let k=10
// +=, -=, *+, /=, %=

// += - It will add the value to the variable and assign the same value to the variable
k += 5 // k = k + 5 // 10+5 = 15 = K
console.log(k)

// -= - It will subtract the value to the variable and assign the same value to the variable
let l=5
l -= 2 //l = l - 2 // 5-2 = 3 = l
console.log(l)

// *= - It will multiply the value to the variable and assign the same value to the variable
let m=10
m *= 2 //m = m - 2 // 10*2 = 20 = m
console.log(m)

// /= - It will divide the value to the variable and assign the same value to the variable
let n=10
n /= 2 //n = n / 2 // 10/2 = 5 = m
console.log(n)

// %= - It will divide the value to the variable and assign the remainder value to the variable
let o=10
o %= 3 //o = o % 3 // 10%3 = 1 = o
console.log(o)