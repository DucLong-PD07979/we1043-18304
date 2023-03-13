
let a = prompt("moi ban nhap a :",);
let b = prompt("moi ban nhap b : ",);
let c = prompt("moi ban nhap c :",);

let detal = parseInt(b * b) - 4 * parseInt(a) * parseInt(c);

if(detal < 0){
    document.write("phương trình vô nhiệm");
} else if (detal == 0){
    let result = parseInt(-b) / (2 * parseInt(a));
    document.write("phương trình có nghiệm kép : " + result);
}else{
    let x1 = parseInt(-b) + Math.sqrt(detal) / 2 * parseInt(a);
    let x2 = parseInt(-b) - (Math.sqrt(detal) / 2) * parseInt(a);

    document.write(` phương trình có hai nhiệm x1 = ${x1} , x2 = ${x2}`);
}

