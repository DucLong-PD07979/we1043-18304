let numberOne = null;
let numberTwo = null;
let operator = null;
let saveValue = null;
let screen = document.querySelector(".screen");

function thuHien(x) {
    let result;
    switch (operator) {
        case "+":
            result = +numberOne + +numberTwo;
            saveValue = result;
            numberTwo = null;
            screen.innerHTML = result;
            break;
        case "-":
            result = +numberOne - +numberTwo;
            saveValue = result;
            numberTwo = null;
            screen.innerHTML = result;
            break;
        case "x":
            result = +numberOne * +numberTwo;
            saveValue = result;
            numberTwo = null;
            screen.innerHTML = result;
            break;
        case ":":
            result = +numberOne / +numberTwo;
            saveValue = result;
            numberTwo = null;
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
    } else if (numberOne && operator == null) {
        numberOne += x;
        screen.innerHTML = numberOne;
    } else if (numberTwo == null) {
        numberTwo = x;
        screen.innerHTML = numberOne + " " + operator + " " + numberTwo;
    } else {
        numberTwo += x;
        screen.innerHTML = numberOne + " " + operator + " " + numberTwo;
    }
}

function toan_tu(x) {
    operator = x;
    if (saveValue) {
        numberOne = saveValue;
    }
    screen.innerHTML = numberOne + " " + operator;
}

function lam_lai() {
    numberOne = null;
    numberTwo = null;
    operator = null;
    saveValue = null;
    screen.innerHTML = " ";
}
