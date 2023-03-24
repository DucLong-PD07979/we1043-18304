// 1 tính điểm trung bình với switch case
// 2 tính điểm trung bình với if else

const tbWithSwitchCase = () => {
    let diemTrungBinh = tinhDiemTrungBinh();
    switch (true) {
        case diemTrungBinh >= 9 && diemTrungBinh <= 10:
            console.log("giỏi");
            break;
        case diemTrungBinh >= 7 && diemTrungBinh <= 8:
            console.log("khá");
            break;
        case diemTrungBinh >= 5 && diemTrungBinh < 7:
            console.log("trung bình");
            break;
        default:
    }
};

const tbWithIfElse = () => {
    let diemTrungBinh = tinhDiemTrungBinh();
    if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
        console.log("giỏi");
    } else if (diemTrungBinh >= 7 && diemTrungBinh <= 8) {
        console.log("khá");
    } else {
        console.log("trung bình");
    }
};

const tinhDiemTrungBinh = () => {
    let toan = prompt("mời bạn nhập điểm toán");
    checkValidNumber(toan)
        ? parseFloat(toan)
        : (toan = prompt("mời bạn nhập lại điểm toán"));
    let ly = prompt("mời bạn nhập điểm lý");
    checkValidNumber(ly)
        ? parseFloat(ly)
        : (ly = prompt("mời bạn nhập lại điểm ly"));
    let hoa = prompt("mời bạn nhập điểm hoa");
    checkValidNumber(hoa)
        ? parseFloat(hoa)
        : (hoa = prompt("mời bạn nhập lại điểm hoa"));
    let sinh = prompt("mời bạn nhập điểm sinh");
    checkValidNumber(sinh)
        ? parseFloat(sinh)
        : (sinh = prompt("mời bạn nhập lại điểm sinh"));
    let tong =
        parseFloat(toan) + parseFloat(ly) + parseFloat(hoa) + parseFloat(sinh);
    let tb = tong / 4;
    return tb;
};

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
