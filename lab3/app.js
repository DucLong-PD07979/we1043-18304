// bai-1 : Tạo trang web lab31.html và viết mã javascript để thực hiện các phép tính số học.

// let a = prompt("toán hạng a:",);
// let b = prompt("toán hạng b:",);
// let c = prompt("toán tử :",);
// let result;
// switch(c){
//     case "+":
//          result = +a + +b;
//         alert("Tổng: "+ result);
//         break;
//     case "-":
//          result = +a - +b;
//          alert("Hiệu: " + result);
//          break;
//     case "*":
//         result = +a * +b;
//         alert("Nhân:" + result);
//         break;
//     case "/":
//         result = +a / +b;
//         alert("Chia:" + result);
//         break;
//     default:
//         alert("toán tử bạn nhập không đúng mời bạn nhập lại");
// }

// bài 2 : tạo bảng cửu chương bằng cách sử dụng vòng lặp

for (let i = 1; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
}

//bài - 3: Viết mã Javascript để thực hiện các phép tính số học đơn giản
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

// bài - 5
let arr = ["Rock", "Paper", "Scissors"];
let userPlay = null;
let serverPlay;
let resultGame = document.querySelector(".result-game");

function getValue(x) {
    userPlay = arr[x];
}

function getValueServer() {
    return arr[Math.floor(Math.random() * 3)];
}

function play() {
    serverPlay = getValueServer();

    if (userPlay == serverPlay) {
        resultGame.innerHTML = `người play: ${userPlay} && máy play : ${serverPlay} => hòa`;
    } else if (userPlay == "Rock" && serverPlay == "Scissors") {
        resultGame.innerHTML = `người play: ${userPlay} && máy play : ${serverPlay} => bạn thắng máy`;
    } else if (userPlay == "Paper" && serverPlay == "Rock") {
        resultGame.innerHTML = `người play: ${userPlay} && máy play : ${serverPlay} => bạn thắng máy`;
    } else if (userPlay == "Scissors" && serverPlay == "Paper") {
        resultGame.innerHTML = `người play: ${userPlay} && máy play : ${serverPlay} => bạn thắng máy`;
    } else {
        resultGame.innerHTML = `người play: ${userPlay} && máy play : ${serverPlay} => bạn thua máy`;
    }
}

function reset(){
    resultGame.innerHTML = ""
}