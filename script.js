// create const variables for each button

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');

const equals = document.getElementById('equals');

// create const variables for screen elements

const equation = document.getElementById('equation');
const solution = document.getElementById('solution');
const clear = document.getElementById('clear');

// add Event Listeners that add textContent to screen element, 'equation'
one.addEventListener('click', function() {
    equation.textContent += '1';
});
two.addEventListener('click', function() {
    equation.textContent += '2';
});
three.addEventListener('click', function() {
    equation.textContent += '3';
});
four.addEventListener('click', function() {
    equation.textContent += '4';
});
five.addEventListener('click', function() {
    equation.textContent += '5';
});
six.addEventListener('click', function() {
    equation.textContent += '6';
});
seven.addEventListener('click', function() {
    equation.textContent += '7';
});
eight.addEventListener('click', function() {
    equation.textContent += '8';
});
nine.addEventListener('click', function() {
    equation.textContent += '9';
});
zero.addEventListener('click', function() {
    equation.textContent += '0';
});
decimal.addEventListener('click', function() {
    equation.textContent += '.';
});
divide.addEventListener('click', function() {
    equation.textContent += '/';
});
multiply.addEventListener('click', function() {
    equation.textContent += '*';
});
subtract.addEventListener('click', function() {
    equation.textContent += '-';
});
add.addEventListener('click', function() {
    equation.textContent += '+';
});

// Event Listener that runs on equals button
equals.addEventListener('click',function() {
    read(equation.textContent)
});

clear.addEventListener('click', function(){
    equation.textContent = '';
    solution.textContent = '';
});

// create functions for eack operation

function addition(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let ans = num1 + num2;
    return ans;
}

function subtraction(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let ans = num1 - num2;
    return ans;
}

function multiplication(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let ans = num1 * num2;
    return ans;
}

function division(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let ans = num1 / num2;
    return ans;
}



// function that takes current element, 'equation', and assigns string to a variable.
// Make that variable into an array, then send through its appropriate operation function.

function read(string) {
    
    if(string.includes('+')) {
        let arr = string.split('+');
        let show = addition(arr[0],arr[1]);
        solution.textContent += show;
    } else if (string.includes('-')) {
        let arr = string.split('-');
        let show = subtraction(arr[0],arr[1]);
        solution.textContent += show;
    } else if (string.includes('*')) {
        let arr = string.split('*');
        let show = multiplication(arr[0],arr[1]);
        solution.textContent += show;
    } else if (string.includes('/')) {
        let arr = string.split('/');
        let show = division(arr[0],arr[1]);
        solution.textContent += show;
    }
}