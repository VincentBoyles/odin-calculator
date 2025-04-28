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
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    content.textContent += 2;
})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    content.textContent += 3;
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    content.textContent += 4;
})

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    content.textContent += 5;
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    content.textContent += 6;
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    content.textContent += 7;
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    content.textContent += 8;
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    content.textContent += 9;
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    content.textContent = "";
})

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    content.textContent = content
})

const display = document.querySelector(".display");
const content = document.querySelector(".content");


content.textContent = '';
display.appendChild(content);



function operate(operator, a, b) {

}


function add(a, b) {

}

function subtract(a, b) {

}

function multiply(a, b) {

}

function divide(a, b) {

}