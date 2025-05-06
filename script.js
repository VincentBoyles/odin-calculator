const point = document.querySelector(".point");
point.addEventListener("click", () => {
    const number = Number(content.textContent);
    content.textContent = decimal(number);
    decimal(num1);
})

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    numbers(0)
})


const one = document.querySelector(".one");
one.addEventListener("click", () => {
    numbers(1)
})


const two = document.querySelector(".two");
two.addEventListener("click", () => {
    numbers(2)

})


const three = document.querySelector(".three");
three.addEventListener("click", () => {
    numbers(3)
})


const four = document.querySelector(".four");
four.addEventListener("click", () => {
    numbers(4)
})


const five = document.querySelector(".five");
five.addEventListener("click", () => {
    numbers(5)
})


const six = document.querySelector(".six");
six.addEventListener("click", () => {
    numbers(6)
})


const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    numbers(7)
})


const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    numbers(8)
})


const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    numbers(9)
})



const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
    operatorFunction(divide);
})

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
    operatorFunction(multiply);
})

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", () => {
    operatorFunction(subtract);
})

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
    operatorFunction(add);
})


const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
    const result = operate(operator, num1, num2);
    content.textContent = result;
    num1 = result;
    input1 = "";
    input2 = "";
    num2 = 0;
})


const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    content.textContent = "";
    num1 = 0;
    num2 = 0;
    result = 0;
    input1 = "";
    input2 = "";
    operator = '';
    counter = 0;
})

const posneg = document.querySelector(".posneg");
posneg.addEventListener("click", () => {
    content.textContent *= -1;
})

const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
    const number = Number(content.textContent);
    content.textContent = percentage(number);
    num1 = percentage(num1);
})

const display = document.querySelector(".display");
const content = document.querySelector(".content");


content.textContent = '';
display.appendChild(content);


let num1 = 0;
let num2 = 0;
let input1 = "";
let input2 = "";
let counter = 0;
let result = 0;
let operator;


function operate(operator, num1, num2) {
    return operator(num1, num2);
}


function add(a, b) {
    return a += b;
}


function subtract(a, b) {
    return a -= b;
}


function multiply(a, b) {
    return a *= b;
}


function divide(a, b) {
    if (b === 0) {
         num1 = 1;
         num2 = 1;
         result = 1;
         input1 = "";
         input2 = "";
         operator;
         counter = 0;
        return content.textContent = "Math Error";
    } else {
        return a /= b;
    }
}


function percentage(a) {
    return a /= 100;
}

function decimal(a) {
    return a.toFixed(1);
}


function numbers(a) {
    if (counter > 0) {
        input2 += `${a}`;
        content.textContent = input2;
        num2 = Number(input2);
    } else {
        input1 += `${a}`;
        content.textContent = input1;
        num1 = Number(input1);
    }
}


function operatorFunction(a) {
    counter++;
    operator = a;
    if (counter > 1) {
        result = operate(operator, num1, num2);
        content.textContent = result;
        num1 = result;
        input1 = "";
        input2 = "";
        num2 = 0;
    }
}
