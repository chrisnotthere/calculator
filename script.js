const addBtn = document.querySelector('button[id="add"]');
const numberBtn = document.querySelectorAll('button[class="button number"]');
const clearBtn = document.querySelector('button[id="clear"]');
const operatorBtn = document.querySelectorAll('button[class="button operand"]');
const equalsBtn = document.querySelector('button[id="equals"]');
const display = document.querySelector('div[id=display]');

let a = '';
let b = '';
let initialNumber = '';
let total = 0;
let currentNumber = 0;
let displayValue = 0;

display.innerText = displayValue;

let previousOperatorSelected = null;
let operatorSelected = null;


//number buttons
numberBtn.forEach((button) => {
    button.addEventListener('click', (e) => {

        if(!initialNumber){
            display.innerText = e.target.innerText
            displayValue = display.innerText;
            currentNumber = displayValue;
            initialNumber = 1;
            return;
        }

        display.innerText = currentNumber + e.target.innerText
        displayValue = display.innerText;
        currentNumber = displayValue;
        initialNumber = 1;
    })
});


//operand buttons 
operatorBtn.forEach((button) => {
    button.addEventListener('click', function operandClick(e) {
        //first number for calculation is stored if it doesnt already exist
        if (!a){
            a = parseInt(display.innerText);
            console.log('a is: ' + a);
            operatorSelected = e.target.id;
            console.log('operator selected: ' + operatorSelected);
            currentNumber = '';
            return;
        }

        //store second number
        b = parseInt(displayValue);
        console.log('b is: ' + b);
        currentNumber += b;

        //check if dividing by 0
        if(operatorSelected === 'divide' && b == 0){
            display.innerText = 'CANNOT DIVIDE BY 0!!!!';
            return;
        }

        //set operators Selected
        previousOperatorSelected = operatorSelected;
        operatorSelected = e.target.id;
        console.log('operator selected: ' + operatorSelected);
        console.log('previous operator selected: ' + previousOperatorSelected);
        
        total = operate(previousOperatorSelected, a, b);
        display.innerText = total;

        console.log('total is: ' + total);
        currentNumber = '';
        a = total;
    })
});


//equals brn
equalsBtn.addEventListener('click', function equalsClick(e) {
    //save last number user enters
    b = parseInt(displayValue);
    console.log('b is: ' + b);

    //check if dividing by zero
    if(operatorSelected === 'divide' && b == 0){
        display.innerText = 'CANNOT DIVIDE BY 0!!';
        return;
    }

    total = operate(operatorSelected, a, b);
    console.log('total is: ' + total);
    displayValue = total;
    display.innerText = total;
    a = null;
});


//clear button resets display and values
clearBtn.addEventListener('click', () => {
    display.innerText = 0
    displayValue = display.innerText;
    console.log(displayValue);
    a = '';
    b = '';
    initialNumber = '';
    total = 0;
    currentNumber = 0;
    displayValue = 0;
    previousOperatorSelected = null;
    operatorSelected = null;
});


//operation functions
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


//takes operator and two numbers, then calls the appropriate function
function operate(operator, num1, num2){
    console.log('operate');
    switch (operator){
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
}
