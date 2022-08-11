// The basic math functions

function add (a, b) {
    return a+b;
}

function subtraction (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return (b === 0) ? "Error" : a/b;
}

/* 
Create a operate function to take 2 numnbers and calls one of the basic 
mathamatical functions

function operate() {
    const first = Number(prompt('what number? :'));
    const operator = prompt('what operater? +*-/');
    const second = Number(prompt('what number:' ));
    if (operator === '+') {
        console.log(add(first, second));
    } else if (operator === '-'){
        console.log(subtraction(first, second));
    } else if (operator === '*'){
        console.log(multiply(first, second));
    } else if (operator === '/'){
        console.log(divide(first, second));
    }
}
*/
function operate() {
    const first = total[0];
    const operator = total[1];
    const second = total[2];
    let result = 0
    if (operator === '+') {
        result = (add(first, second));
    } else if (operator === '-'){
        result = (subtraction(first, second));
    } else if (operator === 'x'){
        result = (multiply(first, second));
    } else if (operator === '÷'){
        result = (divide(first, second));
    }
    if (result === 'Error') {
        return "Error"
    }
    result = Math.round(result*10000) / 10000;
    if (result.toString().length > 10){
        result = result.toExponential(3);
    }
    return result


}

const container = document.querySelector('.container');
//Display

const display = document.querySelector('#main');
display.textContent = '0'

// Array to store the inputed values and operator
let total = [];

// function to allow number to appear on the display when pressed
let newNumber = true
const numbers = document.querySelectorAll('.number');
    numbers.forEach (number => {
        number.addEventListener('click' , (e) => {
            if (newNumber || display.textContent === 'Error') {
                display.textContent = '';
                newNumber = false;
            }
            // To stop more then 9 digits being entered
            enterDigit(e.target.innerText);
        });
    });


function enterDigit(digit) {
    (display.textContent.length < 10) ? display.textContent += digit: false;
}
    
      

//funtion for using operators
const operators = document.querySelectorAll('.operator');
operators.forEach (operator => {
    operator.addEventListener('click', (e) => {
        if (total.length === 0) {
            total[0] = Number(display.textContent);
            total[1] = e.target.innerText;
            newNumber = true;
        } else {
            total[2] = Number(display.textContent);
            display.textContent = operate();
            total[0] = Number(display.textContent);
            total[1] = e.target.innerText;
            newNumber = true;
        }
    })
});

//Equals function
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (total.length === 2) {
        total[2] = Number(display.textContent);
        display.textContent = operate();
        total = []
    }
})


// function for the functions keys clear, percent and negative 
const func = document.querySelectorAll('.func');
func.forEach (operator => {
    operator.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            clear();
        } else if (e.target.innerText === '%') {
            percent();
        } else if (e.target.innerText === '(-)') {
            negative();
        }
    });
});

function clear() {
    total = [];
    display.textContent = '0';
    newNumber = true;
}

function percent() {
   total[0] = Number(display.textContent);
   total[1] = '÷';
   total[2] = 10;
   console.log(total);
   display.textContent = operate();
   console.log(display.textContent);
}


function negative() {
    display.textContent = Number(display.textContent)*-1;
}

// add decimal point
const decimal = document.querySelector('#decimal')
decimal.addEventListener('click', () => {
    const substring = '.';
    if ((display.textContent).indexOf(substring) === -1) {
        display.textContent += '.';
        newNumber = false;
    }
});
