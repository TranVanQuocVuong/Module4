console.log("Hello world 1111");

// kiểu number
let age: number = 5;
// kiểu string
let fullName: string = "Minh thu";
// kiểu null
let nullVariable: null = null;
// kiểu undefiend
let undefiendVariable: undefined = undefined;
// Trong TS không có kiểu dữ liệu NaN
// kiểu boolean
let isCheck: boolean = true;
// array
// giả sử muốn khai báo một mảng các số
let numbers: number[] = [1, 3, 5, 7];
// giả sử muốn khai báo mảng sinh viên
let students: string[] = ["hoa", "minh", "hồng"];
/* 
    kiểu object
    khai báo kiểu dữ liệu cho object 
*/
/* cách 1
type Student = {
    name: string,
    address: string,
    age: number
}  */
// Cách 2
interface Student {
    name: string,
    address: string,
    age: number
}
let student: Student = {
    name: "hoa",
    address: "Hà Nội",
    age: 25
}

// Giả sử tạo 1 mảng chứa các sinh viên
let student1: Student[] = [
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
]

// kiểu any(bất kỳ)
// làm việc với ts nên hạn chế dùng any
let a: any = 5;
a = "hoa";

/*
    function
        1. Kiểu dữ liệu cho tham số
        2. Kiểu dữ liệu trả về của hàm
*/
//    Đối với những function mà không cần giá trị trả về thì  
function sayHello(): void {
    console.log("Xin chào");
}
sayHello();

// function cần giá trị trả về
function tinhTong(a:number, b:number):number {
    return a + b;
}
tinhTong(1,5);