interface StdudentInterface{
    id:number,
    age:number,
    email:string,
}

let studentArr:StdudentInterface[] = []

class Student{
    id:number;
    age:number;
    email:string;

    constructor(id:number, age:number, email:string){
        this.id = id;
        this.age = age;
        this.email = email
    }

    set setId(id:number){
        this.id = id;
    }
    set setAge(age:number){
        this.age = age;
    }
    set setEmail(email:string){
        this.email = email;
    }
}
const students = new Student(1, 20, "an@gmail.com");
students.setId = 2;
students.setAge = 20;
students.setEmail = "vuong@gmail.com";
studentArr.push(students);

