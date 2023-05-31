// create const variables for each button

const one = document.getElementById('one').textContent;
const two = document.getElementById('two').textContent;
const three = document.getElementById('three').textContent;
const four = document.getElementById('four').textContent;
const five = document.getElementById('five').textContent;
const six = document.getElementById('six').textContent;
const seven = document.getElementById('seven').textContent;
const eight = document.getElementById('eight').textContent;
const nine = document.getElementById('nine').textContent;
const zero = document.getElementById('zero').textContent;
const decimal = document.getElementById('decimal').textContent;
const divide = document.getElementById('divide').textContent;
const multiply = document.getElementById('multiply').textContent;
const subtract = document.getElementById('subtract').textContent;
const add = document.getElementById('add').textContent;

const equals = document.getElementById('equals').textContent;


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