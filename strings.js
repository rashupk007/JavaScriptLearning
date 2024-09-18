//String - A sequence of character enclosed in single quote ('') or double quotes ("") 

//Declaration of String:
//1. Single Quote:
let variable = 'String' // "String"
console.log(variable.length)

//2. Double Quote:
let str = "String"
console.log(str)

//3. String Constructor - new String("<TEXT>")
let str1 = new String("I am a String")
console.log(str1)

//4. Empty String
let str2 = ""

//5. Multiline String - it should be declared using backtick symbol (``)
let str3 = `This is a 
Multiline 
String`
console.log(str3)

//String methods:
//1. charAt() - Accepts String as parameter and returns a character at specified index
//syntax - string.charAt(index)
//Example:
console.log(str.charAt(1))

for(let i=0;i<str.length;i++) {
    console.log(str.charAt(i))
}

//2. concat() - used to concatenate two or more string into one string
//syntax - string.concat(string2)
//Example:
let str4 = "Hello"
let str5 = " Rashaad"
let newStr = str4.concat(str5)
console.log(newStr)

//3. includes() - used to check whether the expected string is available inside a String and
//                return boolean value
//syntax - string.includes(searchString, [op]position)
//Example:
let greet = "Hello John"
let result = greet.includes("A", 6)
console.log(result)

//4. startsWith() and 5. endsWith() - to check whether the starting and ending string values and
//                              it returns boolean value
//syntax - string.startsWith(searchString,[op]position)
//syntax - string.endsWith(searchString,[op]position)
//Example:
console.log(greet.startsWith("A"))
console.log(greet.endsWith("Ahmed"))

//6. indexOf() - it will return index of the first occurance of the particular value
//syntax - string.indexOf("String",[op]position)
//Example:
console.log(greet.indexOf("o"))
console.log(greet.indexOf("o",5))

//7. lastIndexOf() - it returns the position of the last occurance of the specified value
//syntax - string.lastIndexOf(searchString,[op]position)
//Example:
console.log(greet.lastIndexOf("o"))

//8. slice() - it will return a substring based on startIndex and endIndex
//syntax - string.slice(startIndex, endIndex)
//Example:
console.log(greet.slice(0,5))

//9. split() - it splits string into an array
//syntax - string.split(delimeter)
//Example:
let string3 = "This is String in JS"
console.log(string3.split(" "))

//10. toLowerCase() - to convert the string to lower case
//syntax - string.toLowerCase()
//Example:
console.log(greet.toLowerCase())

//11. toUpperCase() - to convert the string to Upper case
//syntax - string.toUpperCase()
//Example:
console.log(greet.toUpperCase())

let stringReplace = "ahmed<UNIQ>@gmail.com"
console.log(stringReplace.replace("UNIQ", "15092024"))