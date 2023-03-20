

let numberOne = null;
let numberTwo = null;
let operator = null;
let saveValue = null;
let screen = document.querySelector(".screen");

function thuHien() {
    let result;

    switch (operator) {
        case "+":
            result = +numberOne + +numberTwo;
            screen.innerHTML = result;
            break;
        case "-":
            result = +numberOne - +numberTwo;
            screen.innerHTML = result;
            break;
        case "x":
            result = +numberOne * +numberTwo;
            screen.innerHTML = result;
            break;
        case ":":
            result = +numberOne / +numberTwo;
            screen.innerHTML = result;
            break;
        default:
            screen.innerHTML = "undifine";
    }
}

function toan_hang(x) {
    if (operator == null && numberOne == null) {
        numberOne = x;
        screen.innerHTML = numberOne;
    } else {
        numberTwo = x;
        screen.innerHTML = numberOne + " " + operator + " " + numberTwo;
    }
}

function toan_tu(x) {
    operator = x;
    screen.innerHTML = numberOne + " " + operator;
}

function lam_lai() {
    numberOne = null;
    numberTwo = null;
    operator = null;
    screen.innerHTML = " ";
}

