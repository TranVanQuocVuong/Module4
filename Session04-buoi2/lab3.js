"use strict";
class Employee {
    constructor(employeeId, employeeName, age, gen, rate, salary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
        this.salary = salary;
    }
    inputData(employeeId, employeeName, age, gen, rate) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
    }
    displayData() {
        return `EmployeeId: ${this.employeeId} - EmployeeName: ${this.employeeName} - Age: ${this.age} - Gen: ${this.gen} - Rate: ${this.rate} - Salary: ${this.salary}`;
    }
    calSalary() {
        return this.salary = this.rate * 1300000;
    }
}
class Main {
    main() {
        let employee = new Employee(1, "Minh", 25, "Nam", 1000000, 0);
        employee.inputData(1, "Minh", 25, "Nam", 1000000);
        employee.inputData(2, "Hồng", 30, "Nữ", 1200000);
        employee.inputData(3, "Hùng", 28, "Nam", 1300000);
        employee.inputData(4, "Hoa", 35, "Nữ", 1400000);
        console.log(employee.displayData());
        console.log(employee.calSalary());
    }
}
new Main().main();
