//dob == ngày thắng năm sinh
class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
    }

    getFullName = function () {
        return this.first_name + " " + this.last_name;
    };

    getCurrentAge = function () {
        const dob = new Date(this.dob);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let mouth = today.getFullYear() - dob.getFullYear();
        return age;
    };

    static sortByAgeAsc(students) {
        students.sort((a, b) => {
            const aDob = new Date(a.dob);
            const bDob = new Date(b.dob);
            return aDob - bDob;
        });
    }
}

const listStudent = [];
listStudent.push(
    new Student(
        1,
        "hùng",
        "văn",
        "cb1",
        "hungVan@gmail.com",
        "0123456789",
        "2002-1-27"
    )
);
listStudent.push(
    new Student(
        1,
        "hồng",
        "giang",
        "cb1",
        "hungVan@gmail.com",
        "0123456789",
        "2002-11-25"
    )
);
listStudent.push(
    new Student(
        2,
        "long",
        "đức",
        "cb1",
        "ducLong@gmail.com",
        "0123456789",
        "2002-5-25"
    )
);
listStudent.push(
    new Student(
        1,
        "linh",
        "ngoc",
        "cb1",
        "ngocLinh@gmail.com",
        "0123456789",
        "2002-10-25"
    )
);
listStudent.push(
    new Student(
        1,
        "nam",
        "văn",
        "cb1",
        "namVan@gmail.com",
        "0123456789",
        "2002-8-25"
    )
);
listStudent.push(
    new Student(
        1,
        "vinh",
        "đặng",
        "cb1",
        "vinhDang@gmail.com",
        "0123456789",
        "2002-2-25"
    )
);

console.log(
    `Kích thước màn hình: ${window.innerWidth} x ${window.innerHeight}`
);

Student.sortByAgeAsc(listStudent);

console.log("Danh sách sinh viên:");
listStudent.forEach((student) => {
    console.log(
        `- ${student.getFullName()} (${student.getCurrentAge()} tuổi) , (${student.getCurrentAge() * 365} ngày tuổi)`
    );
});