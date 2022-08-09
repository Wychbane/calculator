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
*/

function operate() {
    const first = Number(prompt('what number? :'));
    const operator = prompt('what operater? +-*/: ');
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

//operate()


const container = document.querySelector('.container');
//Display

