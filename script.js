const addBtn = document.querySelector('button[id="add"]');
const numberBtn = document.querySelectorAll('button[class="button number"]');
const clearBtn = document.querySelector('button[id="clear"]');
const operatorBtn = document.querySelectorAll('button[class="button operand"]');
const equalsBtn = document.querySelector('button[id="equals"]');

let a = '';
let b = '';
let initialNumber = '';
let total = 0;
let currentNumber = 0;

let displayValue = 0;
const display = document.querySelector('div[id=display]');
display.innerText = displayValue;

let previousOperatorSelected = null;
let operatorSelected = null;

//let operatorSign = null;

//number buttons display number to screen
numberBtn.forEach((button) => {
    button.addEventListener('click', (e) => {

        if(!initialNumber){
            //display.innerText = '';
            //debugger;
            console.log('initial number');
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

        //console.log(displayValue);

    })
});


//operand buttons 
operatorBtn.forEach((button) => {
    button.addEventListener('click', function operandClick(e) {



        //first number for calculation is stored if it doesnt already exist
        if (!a){

            //set a to current display number
            a = parseInt(display.innerText);
            console.log('a is: ' + a);
            //display.innerText = '';

            //console.log('storing a');
            //set operators Selected
            previousOperatorSelected = operatorSelected;
            operatorSelected = e.target.id;
            console.log('operator selected: ' + operatorSelected);
            console.log('previous operator selected: ' + previousOperatorSelected);
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
        //display.innerText = '';
        //display.innerText = b;

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


//clear button resets display
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
        case 'add':
            // console.log('adding...');
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
    }

}

