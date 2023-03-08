// let  a = prompt("moi ban nhap can a", );
// let b = prompt("mời bạn nhap cận b",);

// let result = Math.pow(Number(a),2) + Math.pow(Number(b),2);
// console.log(result);

// bai 2

// let inputDienTich = prompt("moi ban nhap dien tich đất : ", )
let dienTichRuong = 3600;
let sao = dienTichRuong / 360;
let mau = sao / sao;
console.log("dien tich ruong: ", dienTichRuong, "sao: ", sao, "mau : ", mau);

// bai 3

// let trongLuong = prompt("mời bạn nhập cân nặng", );
// let chieuCao = prompt("mời bạn nhập chiều cao : ", );
// let BIM = Number(trongLuong) / (Number(chieuCao) * Number(chieuCao));

// if (BIM < 18.5) {
//     alert("thiếu cân");
// } else if (BIM >= 18.5 && BIM <= 24.99) {
//     alert("Bình thường");
// } else if (BIM >= 25 && BIM <= 29.99) {
//     alert("thừa cân");
// } else if (BIM >= 30) {
//     alert("béo phì");
// }


// bài 4

// splice(): Xoá y phần tử sau vị trí x, sau đó thêm phần tử vào mảng
// Cú pháp: <arrayname>.splice(x, y, <e1>,<e2>,...,<ex>);

const theList = ["Lauren", "Kevin", true, 35, null, undefined, ["one", "two"]];
      theList.shift();
      theList.pop();
      theList.unshift("First");
      theList.splice(3,0,"hello world"); 
      theList.splice(2,0,"middle");
      theList.push("Last");
      console.log(theList);

// bài 5

let numberRandom = 10 + Math.round(5 * Math.random());

let numberInput = prompt("bạn chọn số : ", );
if(numberInput == numberRandom){
    alert("bạn đã nhận được giải đặt biệt");
}else if(numberInput > numberRandom){
    alert("bạn nhận được giải khuyến khích");
}else{
    alert("chúc bạn may mắn lần sau");
}