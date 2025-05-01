const point = document.querySelector(".point");
point.addEventListener("click", () => {
    if (!(content.textContent.includes('.'))) {
        content.textContent += '.';
    }
})

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    content.textContent += 0;

})

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    content.textContent += 1;
    input = 1;
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    content.textContent += 2;
    input = 2;

})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    content.textContent += 3;
    input = 3;
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    content.textContent += 4;
    input = 4;
})

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    content.textContent += 5;
    input = 5;
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    content.textContent += 6;
    input = 6;
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    content.textContent += 7;
    input = 7;
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    content.textContent += 8;
    input = 8;
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    content.textContent += 9;
    input = 9;
})


const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
    content.textContent += "/";
    operator = divide();
})

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
    content.textContent += "x";
    operator = multiply();
})

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", () => {
    content.textContent += "-";
    operator = subtract();
})

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
    content.textContent += "+"
    operator = add();
})


const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
    operate()
})


const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    content.textContent = "";
})

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    
})

const display = document.querySelector(".display");
const content = document.querySelector(".content");


content.textContent = '';
display.appendChild(content);

let input = 0;
let num1 = 0;
let num2 = 0;
let operator;

function operate(operator, current, previous) {
    return operator(current, previous);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}