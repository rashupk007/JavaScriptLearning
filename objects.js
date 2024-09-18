// Objects - It is a collection of key-value pairs in JavaScript. The key-value it can store of
//           any data types, functions and any other object.

// In Java we create object like below:
// className obj = new className()  

// In JavaScript we create object like below:
// 1. Object Literal {} - {key:value}
// 2. Object Constructor - new Object()
// 3. Object Factory Functions - function(){} - returns an Object
// 4. Class - class ClassName{} - returns an Object
// 5. Constructor Function

// 1. Object Literals {} - we have to use {key:value,methods:function()}
// Syntax - 
/*
let obj = {
    key1:value1,
    key2:value2,
    method:function(){CODE TO BE EXECUTED}
}
*/
// Example:
let person = {
    name:"Ahmed",
    age:34,
    city:"Ambur",
    personInfo: function() {
        console.log(this.name, this.age, this.city)
    }
}
console.log(person.name)
console.log(person.age)
console.log(person.city)
person.personInfo()

// 2. Object Constructor - new Object() - Dynamic Object Creation
// Syntax - let obj = new Object();
//          obj.key1 = value1
//          obj.key2 = value2
//          obj.method = function(){CODE TO BE EXECUTED}

// Example:
let obj = new Object();
obj.name = "Rashaad"
obj.age = 34
obj.city = "Vaniyambadi"
obj.personInfo1 = function() {
    console.log(this.name, this.age, this.city)
}
obj.personInfo1()

// 3. Object Factory Functions - function(){}
// Syntax - 
/*
function ConstructorFunction() {
     this.key1 = value1
     this.key2 = value2
     this.method = function(){CODE TO BE EXECUTED}
}
let obj = new ConstructorFunction(arg1,arg2)
let aobj1 = new ConstructorFunction()
*/

// Example:
function Car(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.start = function(){
        console.log(this.model+" Started!")
    }
}
let car1 = new Car("BMW",2004,"Red")
car1.start()

// 4. Class - class ClassName{} - This type started in ES6 (2015) version of JS
// Syntax - 
/*
class ClassName {
    constructor(param1,param2,...){
        this.param1 = param1
        this.param2 = param2
    }
    method() {
        CODE TO BE EXECUTED
    }
}
*/
// Example:
class CarClass {
    constructor(model,year,color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    start() {
        console.log("Car Started")
    }

    static stop() {
        console.log("Car Stopped")
    }
}
let AudiCar = new CarClass("Audi",2010,"Blue")
console.log(AudiCar.model, AudiCar.year, AudiCar.color)
AudiCar.start()
CarClass.stop()

// 5. Object Factory Functions - function(){} - Any functions which returns Object is called 
//                                              Factory Functions
// Syntax - 
/*
function functionName() {
    return {Object}
}
let obj = functionName()
*/
// Example:
function CarInfo(model, year, color) {
    return{
        model : model,
        year : year,
        color : color,
        start : function(){
            console.log(this.model+" Started!")
        }
    }
}
let myCar = CarInfo("VW",2019,"Candy White")
myCar.start()
console.log(myCar.color)