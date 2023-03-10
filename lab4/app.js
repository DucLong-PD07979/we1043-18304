// bài 1
const mainArr = ["iphone-13", "samsung", "iphone-14"];
const inventor = [];

const items1 = {
    name: "iphone-xs",
    model: "",
    cost: 1500,
    quanity: 5,
};

const items2 = {
    name: "iphone-xs-2",
    model: "",
    cost: 1500,
    quanity: 5,
};

const items3 = {
    name: "iphone-xs-3",
    model: "null",
    cost: 1500,
    quanity: 5,
};

inventor.push(items1);
inventor.push(items2);
inventor.push(items3);
console.log(inventor);
console.log(inventor[2].quanity);
console.log(inventor[2].cost);
console.log(inventor[2].model);

// bài 2

// var sv = new Object();
// sv.name = prompt("mời bạn nhập họ tên");
// sv.point = prompt("mời bạn nhập điểm : ");
// sv.setHocLuc = () => {
//     if (sv.point > 9) {
//         sv.hocLuc = "giỏi";
//     } else if (sv.point > 7) {
//         sv.hocLuc = "khá";
//     } else if (sv.point > 5) {
//         sv.hocLuc = "trung bình";
//     } else {
//         sv.hocLuc = "yếu";
//     }
// };
// sv.hienThi = function (){
//     sv.setHocLuc();
//     document.write(`<h3>họ và tên : ${this.name}</h3>`);
//     document.write(`<h3>điểm : ${this.point}</h3>`);
//     document.write(`<h3>học lực: ${this.hocLuc}</h3>`);
// };

// bài 4

// const getTimeCurrent = () => {
//     let currentDateTime = new Date();
//     var h = currentDateTime.getHours();
//     var m = currentDateTime.getMinutes();
//     var s = currentDateTime.getSeconds();
//     document.body.innerHTML = `${h} : giời - ${m}: phú - ${s}: giây`;
// };
// getTimeCurrent();

// setInterval(() => {
//     getTimeCurrent();
// },1000);

// bài 5

const browserName = navigator.appName; // Lấy tên trình duyệt
const browserVersion = navigator.appVersion; // Lấy phiên bản trình duyệt
const userAgent = navigator.userAgent; // Lấy chuỗi user agent
const platform = navigator.platform; // Lấy thông tin về nền tảng (hệ điều hành)
console.log(browserName);
console.log(browserVersion);
console.log(userAgent);
console.log(platform);

let newWindow;
function openNewWindow() {
    let width = 250;
    let height = 250;

    if (userAgent.includes("IE")) {
        width = 100;
        height = 100;
    }

    newWindow = window.open(
        `https://github.com/DucLong-PD07979/we1043-18304`,
        "_blank",
        `width=${width},
            heigth=${height}`
    );
}

function closeNewWindow() {
    newWindow.close();
}

function checkNewWindowOpen() {
    if (newWindow.closed) {
        alert("cửa sổ mới đã được đống");
    } else {
        alert("cửa sổ mới chưa được đống");
    }
}
