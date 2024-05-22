class Employee{
    name:string;
    protected company:string;
    private phone:string;

    constructor(name:string, company:string, phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(){
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
}

let employee1 = new Employee("vương", "aaa", "0333")

employee1.printInfo()