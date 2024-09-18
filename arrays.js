// let i = 10 - creating a variable
let array = [1, 2, 3, 4, 5] // Index 0 contains value 
//Array Literal - []
//let arrayName = [value1, value2]

//creation of an array using Array Literals - []

let arr = [] //empty array
console.log(Array.isArray(arr))

let numericArray = [1,2,3,6,7] //Numberic Array
let fruits = ["Apple", "Orange", "Banana"] //String Array
let mixedArray = [1, "Apple", 3.5, true, null, undefined]

console.log(arr)
console.log(numericArray)
console.log(fruits)
console.log(mixedArray)

//Creation of an array using Array Constructor

let arra = new Array(2,4,5,"Tom") //[2,4,5,'Tom']
console.log(arra)

//length - returns size of an array
//syntax - array.length

let array1 = [1,2,3,4,5,6,"Tom","Pink"]
console.log(array1.length)

//push() - add elements to the end of the array
//syntax - array.push(value1, value2) 

array1.push("red","orange","JS","Java")
console.log(array1)

//pop() - Removes last element from an array
//syntax - array.pop() - Removes the last element from an array

let removedElement = array.pop()
console.log(removedElement)
console.log(array1)

//unshift() - add elements to the array at the beginning of the array
//syntax - array.unshift(value1, value2)

array1.unshift(0, "TS")
console.log(array1)

//shift() - Removes the first element of the array
//syntax - array.shift()

let removedElementFromShift = array1.shift()
console.log(removedElementFromShift)
console.log(array1)

//splice() - to remove and add element to an array at the same time.
//syntax - array.splice(startIndex, deleteCount, item1, item2, ....)

let array2 = ["Orange","Banana","Apple","Mango",1,2,3,4]
console.log(array2)

array2.splice(1,2,"Tom","Bob","Pink","Yellow")
console.log(array2)

//slice() - will return an array containing elements from an original array based on start
//          and end index values as parameters
//array.slice(startIndex, endIndex)
//startIndex - index at which to start changing the array. startIndex is Inclusive
//endIndex - index at which to end the changing the array. endIndex is Exclusive

let array3 = [1,2,3,"Java","Pink","Rose","4.5",89]
console.log(array3.slice(1,5))
console.log(array3.slice(-4,-1))

console.log(array3.slice(1))

//toString() - to convert the array to String
//syntax - array.toString

let courses = ["HTML","CSS","JavaScript","React","TS"]
console.log(courses.toString())

//join() - to convert array to string using separator
//syntax - array.join(separator)

console.log(courses.join("|"))

//concat() - it is used to merge two or more arrays
//syntax - array.concat(array1,array2,array3,....)

let arr1 = [1,2,3,4]
let arr2 = ["String","JS","TS"]
let arr3 = [false,true]
console.log(arr1.concat(arr2,arr3))

//indexOf() - returns the first index at which a given element is present
//syntax - array.indexOf(value, fromIndex)

console.log(courses.indexOf("CSS"))     //1
console.log(courses.indexOf("CSS", 2))  //-1

//reverse() - it will reverse the array
//syntax - array.reverse()

let array4 = ["Apple","Orange","TS","JS",2,3,4]
console.log(array4)
console.log(array4.reverse())

//sort() - sort the elements of an array in ascending order
//syntax - array.sort()

console.log(array4.sort())

//foreach(), map(), reduce(), filter(), some(), each()

//foreach() - accepts function as a parameter. Execute a provided function once for each
//            array element

//syntax - array.forEach(function(currentValue, [optional]index, [optional]array){
//      Code to be Executed
//})
//currentValue - the current element being processed in the array
//index - index of the current element being processed in the array
//array - optional parameter

//Example:
let fruitsArray = ["Apple","Banana","Orange","Mango"]

fruitsArray.forEach(function(element, index){
    console.log(element, index)
})

fruitsArray.forEach((element)=>{
    console.log(element)
})

//map() - accepts function as parameter. It creates a new array by iterating through all the 
//        elements of an array. Executes provided function for all the elements of an array

//syntax - array.map(function(currentValue, [optional]index, [optional]array){
//      Code to be Executed
//})
//Example:
let numericalArray = [1,2,3,4,5]

let square = numericalArray.map(function(number){
    return number*number
})

console.log(square)

//filter() - accepts function as parameter. filter the elements of an array based 
//           on the condition inside function. It will return a new array with filtered values

//syntax - array.filter(function(currentValue, [optional]index, [optional]array){
//      Code to be Executed
//})
//Example:
let evenNumber = numericalArray.filter(function(number){
    return number % 2 === 0
})
console.log(evenNumber)

//reduce() - accepts function as parameter and initialValue as parameter. iterate through  
//           all the element of an array and return a single value based on the condition 
//           inside a function or statement inside the function.

//syntax - array.reduce(function(accumulator,currentValue,[op]index,[op]array){
//      Code to be executed
//})
//accumulator - this parameter accumulates all the elements of an array
//initialValue - this is initial value which will be used by accumulator

//Example:
let sum = numericalArray.reduce(function(total,element){
    return total+element
},0)
console.log(sum)

//some() - accepts function as parameter. It will return boolean value based on the statement
//         inside the function. If any 1 element is passing a condition then it will return 
//         true else false

//syntax - array.some(function(currentValue,[op]index,[op]array){
//      Code to be executed
//})

let some = numericalArray.some(function(number){
    return number>5
})
console.log(some)

//every() - accepts function as parameter. It will return boolean value based on the statement
//          inside the function. If all elements is passing the condition then it will return 
//          true else false

//syntax - array.every(function(currentValue,[op]index,[op]array){
//      Code to be executed
//})

let every = numericalArray.every(function(number){
    return number>0
})
console.log(every)

