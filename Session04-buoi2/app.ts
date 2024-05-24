// Cú pháp
/* class Supper {
    // .... your code here
}

class Sub extends Supper {
    // .... your code here
}

// VD
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getUser() {
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}

class Student extends User {
    id: string;

    constructor(name: string, age: number, id: string) {
        super(name, age);
        this.id = id;
    }

    getStudent(){
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age}`;
    }
}

const user = new User('CaoTV', 15);
console.log(user.getUser());

const student = new Student(user.name, user.age, "TT01")
console.log(student.getUser());
 */