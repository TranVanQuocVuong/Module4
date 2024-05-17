"use strict";
console.log("Hello world 1111");
// kiểu number
let age = 5;
// kiểu string
let fullName = "Minh thu";
// kiểu null
let nullVariable = null;
// kiểu undefiend
let undefiendVariable = undefined;
// Trong TS không có kiểu dữ liệu NaN
// kiểu boolean
let isCheck = true;
// array
// giả sử muốn khai báo một mảng các số
let numbers = [1, 3, 5, 7];
// giả sử muốn khai báo mảng sinh viên
let students = ["hoa", "minh", "hồng"];
let student = {
    name: "hoa",
    address: "Hà Nội",
    age: 25
};
// Giả sử tạo 1 mảng chứa các sinh viên
let student1 = [
    {
        name: "hoa",
        address: "Hà Nội",
        age: 25
    },
    {
        name: "hùng",
        address: "Đà Nẵng",
        age: 24
    }
];
// kiểu any(bất kỳ)
// làm việc với ts nên hạn chế dùng any
let a = 5;
a = "hoa";
/*
    function
        1. Kiểu dữ liệu cho tham số
        2. Kiểu dữ liệu trả về của hàm
*/
//    Đối với những function mà không cần giá trị trả về thì  
function sayHello() {
    console.log("Xin chào");
}
sayHello();
// function cần giá trị trả về
function tinhTong(a, b) {
    return a + b;
}
tinhTong(1, 5);
