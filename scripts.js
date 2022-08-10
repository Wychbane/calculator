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
    return a/b;
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
    if (operator === '+') {
        return (add(first, second));
    } else if (operator === '-'){
        return (subtraction(first, second));
    } else if (operator === '*'){
        return (multiply(first, second));
    } else if (operator === '/'){
        return (divide(first, second));
    }
}
//operate()


const container = document.querySelector('.container');
//Display
const display = document.querySelector('#main');

display.textContent = '0'

let total = [];

// function to allow number to appear on the display when pressed
let newNumber = true
const numbers = document.querySelectorAll('.number');
numbers.forEach (number => {
    number.addEventListener('click' , (e) => {
        if (newNumber) {
            display.textContent = '';
            newNumber = false;
        } 
        display.textContent += `${e.target.innerText}`;
    })
});

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
            newNumber = true;
        }
    })
});


// Clear function
const func = document.querySelectorAll('.func');
func.forEach (operator => {
    operator.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            clear();
        }
    });
});

function clear() {
    total = [];
    display.textContent = '0';
}
