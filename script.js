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

const equals = document.getElementById('equals').textContent;

// create const variables for two screen elements

const equation = document.getElementById('equation');
const solution = document.getElementById('solution');


// create function to add textContent to screen element, 'equation'
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

// equals sign function and clear/clear all buttons are missing :(((



// function that takes current element, 'equation', and assigns string to a variable

function read(string) {
    let test = string;
    let arr = test.split('');
    return arr;
}





// create functions for eack operation

function addition(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let ans = num1 + num2;
    return ans;``
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