"use strict";
let studentArr = [];
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    set setId(id) {
        this.id = id;
    }
    set setAge(age) {
        this.age = age;
    }
    set setEmail(email) {
        this.email = email;
    }
}
const students = new Student(1, 20, "an@gmail.com");
students.setId = 2;
students.setAge = 20;
students.setEmail = "vuong@gmail.com";
studentArr.push(students);
