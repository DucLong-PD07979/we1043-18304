let hoTen = prompt("moi ban nhap ho ten : ",);
let gioiTinh = prompt("moi ban nhap gioi tinh :",);

let ho = hoTen.substring(0, hoTen.indexOf(" "));
let tenDem = hoTen.substring(hoTen.indexOf(" "), hoTen.lastIndexOf(" "));
let ten = hoTen.substring(hoTen.lastIndexOf(" "));

console.log("họ :" + ho);
console.log("tenDem :" + tenDem);
console.log("ten :" + ten);

if(gioiTinh == "nam"){
    let result = ho + " văn" + ten;
    console.log(result);
} else {
    let result = ho + " vẽ" + ten;
    console.log(result);
}