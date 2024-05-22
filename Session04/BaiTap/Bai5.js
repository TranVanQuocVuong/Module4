"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.employee = employee;
        this.name = name;
    }
    describe() {
        console.log(`id:${this.id}, phòng ban:${this.name}`);
    }
}
