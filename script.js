console.log("hello world")

function myAddFunction(num1, num2){
    return num1 + num2;
}

function mySubtractFunction(num1, num2){
    return num1 - num2;
}

function myMultiplyFunction(num1, num2){
    return num1 * num2;
}

function myDivideFunction(num1, num2){
    return num1 / num2;
}

/*
console.log(myAddFunction(3,5))
console.log(mySubtractFunction(8,5))
console.log(myMultiplyFunction(8,5))
console.log(myDivideFunction(10,5))
*/

let num1 = 0;
let num2 = 0;
let operator="";


function operate(operator,num1,num2){
    if (operator==="add"){
        console.log("adding")
        return myAddFunction(num1, num2);
    } else if (operator==="subtract"){
        console.log("subtracting")
        return mySubtractFunction(num1, num2);
    } else if (operator==="multiply"){
        console.log("multiplying")
        return myMultiplyFunction(num1, num2);
    } else if (operator==="divide"){
        console.log("dividing")
        return myDivideFunction(num1, num2);
    }
}

//console.log(operate("add",5,2))
//console.log(operate("subtract",1,2))
//console.log(operate("multiply",10,2))
//console.log(operate("divide",10,2))

//const btn = document.getElementById("button").addEventListener("click", console.log("hello"))

const result = operate("divide",10,2)

const btn = document.getElementById("equals").addEventListener("click", {screen.innerHTML = result()});

//function showResult() = btn.getElementById

