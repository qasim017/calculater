// let firstName = "qasim"
// let lastName = "ansari"

// let fullName = firstName +" "+lastName
// console.log(fullName)

// let name = "qasim"
// let greeting = "Hi there"

// function gtr (){
    
// console.log(name +" ,"+ greeting + "!")
// }
// gtr()

// let myPoints = 3

// function add3Points() {
//  myPoints += 3
// }

// function remove1Point (){
//   myPoints -= 1
// }

// add3Points()
// remove1Point()
// add3Points()

// console.log(myPoints)

// 

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent = "sorry somthing went wrong!"
// }

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2

let sumEl = document.getElementById("sum-el")

function add(){
let result = num1 + num2
 sumEl.textContent = "Sum: " + result
}

function sub(){
    let result = num1 - num2
     sumEl.textContent = "Sum: " + result
    }
    
function div(){
    let result = num1 / num2
     sumEl.textContent = "Sum: " + result
    }
    
function mul(){
    let result = num1 * num2
     sumEl.textContent = "Sum: " + result
    }