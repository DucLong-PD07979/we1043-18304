let a = prompt("nhap canh a: ",);
let b = prompt("nhap canh b: ",);
let c = prompt("nhap canh c :",);

let numberA = parseInt(a);
let numberB = parseInt(b);
let numberC = parseInt(c);

if (
    numberA + numberB > numberC &&
    numberA + numberC > numberB &&
    numberB + numberC > numberA
) {
    if (
        numberA * numberA == numberB * numberB + numberC * numberC ||
        numberB * numberB == numberA * numberA + numberC * numberC ||
        numberC * numberC == numberA * numberA + numberB * numberB
    )
        document.write("Day la tam giac vuong");
    else if (numberA == numberB && numberB == numberC) {
        document.write("DnumberAy la tam giac deu");
    } else if (numberA == numberB || numberA == numberC || numberB == numberC) {
        document.write("Day la tam giac can");
    } else if (
        numberA * numberA > numberB * numberB + numberC * numberC ||
        numberB * numberB > numberA * numberA + numberC * numberC ||
        numberC * numberC > numberA * numberA + numberB * numberB
    ) {
        document.write("Day la tam giac tu");
    } else {
        document.write("Day la tam giac nhon");
    }
} else {
    document.write("ba canh ban nhap khong hop thanh mot tam giac");
}
