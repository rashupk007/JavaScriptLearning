// Statements or Conditions

// if
// if else
// nested if else

// if or if else statements
if(2>3) {
    console.log("2 is greater than 3")
}
else{
    console.log("2 is not greater than 3")
}

// nested if else
let grade;
function grades(number) {
    if(number>=90) {
        grade = "A"
    }
    else{
        if(number>=80) {
            grade = "B"
        }
        else{
            if(number>=70){
                grade = "C"
            }
            else{
                grade = "D"
            }
        }
    }
    return grade
}
console.log(grades(95))
function grades1() {
    console.log(grade)
}
grades1()



//if else if else
let browser1 = "chrome"
if(browser1 == "chrome") {
    console.log("You are using Chrome")
}
else if(browser1 == "firefox") {
    console.log("You are using Firefox")
}
else if(browser1 == "safari") {
    console.log("You are using Safari")
}
else {
    console.log("You are using something else")
}


//switch case

//syntax
// switch(expression) {
//     case value1:
//         //......
//         break;  //exit this switch case statement once the condition matches and code executed
//     case value2:
//         //......
//         break;
//     default:
//         //......
// }

let browser = "chrome"

switch(browser) {
    case "chrome":
        console.log("You are using Chrome Browser")
        break;
    case "firefox":
        console.log("You are using Firefox Browser")
        break;
    case "safari":
        console.log("You are using Safari Browser")
        break;
    default:
        console.log("You are using something else")
}

let day = 2

switch(day) {
    case 0:
        console.log("Today is Sunday")
        break
    case 1:
        console.log("Today is Monday")
        break
    default:
        console.log("Today is not Sunday or Monday")
}   

//cross browser testing
//cross platform testing
//multiple environment - Dev, QA, Prod

