// 1 tính điểm trung bình với switch case
// 2 tính điểm trung bình với if else

const tbWithSwitchCase = () => {
    let diemTrungBinh = tinhDiemTrungBinh();
    switch (true) {
        case diemTrungBinh >= 9 && diemTrungBinh <= 10:
            alert("học lực : giỏi");
            break;
        case diemTrungBinh >= 7 && diemTrungBinh <= 8:
            alert("học lực : khá");
            break;
        case diemTrungBinh >= 5 && diemTrungBinh < 7:
            alert("học lực : trung bình");
            break;
        default:
    }
};

const tbWithIfElse = () => {
    let diemTrungBinh = tinhDiemTrungBinh();
    if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
        alert("học lực : giỏi");
    } else if (diemTrungBinh >= 7 && diemTrungBinh <= 8) {
        alert("học lực : khá");
    } else {
        alert("học lực : trung bình");
    }
};

const tinhDiemTrungBinh = () => {
    let toan = prompt("mời bạn nhập điểm toán");
    checkValidNumber(toan)
        ? parseFloat(toan)
        : (toan = inputAgainPoint("toán"));

    let ly = prompt("mời bạn nhập điểm lý");
    checkValidNumber(ly)
        ? parseFloat(ly)
        : (ly = inputAgainPoint("ly"));

    let hoa = prompt("mời bạn nhập điểm hoa");
    checkValidNumber(hoa)
        ? parseFloat(hoa)
        : (hoa = inputAgainPoint("hóa"));

    let sinh = prompt("mời bạn nhập điểm sinh");
    checkValidNumber(sinh)
        ? parseFloat(sinh)
        : (sinh = inputAgainPoint("sinh"));
        
    let tong =
        parseFloat(toan) + parseFloat(ly) + parseFloat(hoa) + parseFloat(sinh);
    let tb = tong / 4;
    return tb;
};

let inputAgainPoint = (mon) => {
    return prompt(`mời bạn nhập lại điểm môn ${mon}`);
}

let checkValidNumber = (number) => {
    let isRun = true;
    do {
        if (number > 0 && number <= 10) {
            return true;
        } else {
            return false;
        }
    } while (isRun);
};

let choice = prompt("mời bạn chon chương trình: 1 - tính điểm tb với sw 2 - tính điểm tb với if", 0);

switch (parseInt(choice)) {
    case 1:
        tbWithSwitchCase();
        break;
    case 2:
        tbWithIfElse();
        break;
    case 0:
        isRun = false;
        break;
    default:
}
