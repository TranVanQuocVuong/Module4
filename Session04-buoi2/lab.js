"use strict";
// Bài tập
/*
    1. Tạo 1 Class User có các thuộc tính: Email, Pass, UserName, Address.
        Các Phương thức: login, logout, viewProfile
    2. Tạo 1 Class Admin kế thừa từ User và thêm thuộc tính: ID
        Thêm phương thức: addUser, deleteUser
        => Sau mỗi phương thức thì in ra màn hình console
*/
const userArr = [
    {
        id: '001',
        email: 'a@gmail.com',
        password: 'abc123',
        userName: 'Anh',
        address: 'Đà Nẵng'
    },
    {
        id: '002',
        email: 'b@gmail.com',
        password: 'abc123',
        userName: 'Bình',
        address: 'TP HCM'
    },
    {
        id: '003',
        email: 'v@gmail.com',
        password: 'abc123',
        userName: 'Vương',
        address: 'Hà Nội'
    }
];
let check = false;
let logInUser = {};
class User {
    constructor(email, password, userName, address) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.address = address;
    }
    logIn(email, password) {
        const checkLogIn = userArr.findIndex((item) => item.email === email && item.password === password);
        console.log("check", email);
        if (checkLogIn >= 0) {
            check = true;
            logInUser = userArr[checkLogIn];
            return console.log(`Đăng nhập thành công - chào mừng ${user.userName}`);
        }
        else {
            return console.log('Tài khoản hoặc mật khẩu không đúng');
        }
    }
    logOut() {
        if (check) {
            check = false;
            return console.log("Bạn đã logOut");
        }
        return ` Bạn phải login`;
    }
    viewProfile() {
        return logInUser;
    }
}
const user = new User('a@gmail.com', 'abc123', 'Anh', 'Đà Nẵng');
user.logIn('a@gmail.com', 'abc123');
user.logOut();
console.log(user.viewProfile());
class Admin extends User {
    constructor(email, password, userName, address, id) {
        super(email, password, userName, address);
        this.id = id;
    }
    addUser(id, email, password, userName, address) {
        const newUser = { id, email, password, userName, address };
        const checkEmail = userArr.findIndex((item) => item.email === email);
        if (checkEmail < 0) {
            userArr.push(newUser);
            console.log('Mảng sau khi thêm: ', userArr);
        }
        else
            (console.log('Tài khoản Email đã tồn tại'));
    }
    updateUser(id, email, password, userName, address) {
        const newUser = { id, email, password, userName, address };
        const checkUpdate = userArr.findIndex((item) => item.id == id);
        userArr.splice(checkUpdate, 1, newUser);
        console.log('user sau update', userArr[checkUpdate]);
    }
    deleteUser(id) {
        const checkDelete = userArr.findIndex((item) => item.id == id);
        if (checkDelete >= 0) {
            userArr.splice(checkDelete, 1);
            console.log('Mảng sau khi xóa: ', userArr);
        }
        else {
            console.log('Không tìm thấy id cần xóa');
        }
    }
    readUser() {
        console.log('Mảng user', userArr);
    }
}
const admin = new Admin(user.email, user.password, user.userName, user.address, "001");
admin.addUser('004', 'quan@gmail.com', '123', 'Quân', 'ĐN');
admin.updateUser('004', 'quanAnh@gmail.com', '123', 'Quân', 'ĐN');
admin.deleteUser('0015');
admin.readUser();
