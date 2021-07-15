const addBtn = document.querySelector('button[id="add"]');
const numberBtn = document.querySelectorAll('button[class="button number"]');
const clearBtn = document.querySelector('button[id="clear"]');
const operatorBtn = document.querySelectorAll('button[class="button operand"]');

//set default display to 0
let displayValue = 0;
const display = document.querySelector('div[id=display]');
display.innerText = displayValue;

let firstNumber = 0;
let secondNumber = 0;


// addBtn.addEventListener('click', () => console.log('add btn') );


//number buttons display number to screen
numberBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.innerText += e.target.innerText
        displayValue = display.innerText;
        console.log(displayValue);
    })
});

//TODO
//when operand clicked, store first number
//record which operand was clicked
//then save second number when = is clicked
//and then perform the function
//

//operand buttons 
operatorBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        firstNumber = displayValue;
        console.log('first number: ' + firstNumber);

    })
});


//clear button resets display
clearBtn.addEventListener('click', () => {
    display.innerText = 0
    displayValue = display.innerText;
    console.log(displayValue);
});




function add(a, b){
     return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//takes operator and two numbers, then calls a function
function operate(operator, num1, num2){
    console.log('operate');

    switch (operator){
        case add:
            return add(num1, num2);
            break;
        case subtract:
            return subtract(num1, num2);
            break;
        case multiply:
            return multiply(num1, num2);
            break;
        case divide:
            return divide(num1, num2);
            break;


    }

}

