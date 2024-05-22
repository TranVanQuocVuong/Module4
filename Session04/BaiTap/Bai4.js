"use strict";
class Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    getYear() {
        return this.year;
    }
    set setYear(year) {
        this.year = year;
    }
    getCompany() {
        return this.company;
    }
    set setCompany(company) {
        this.company = company;
    }
    fVehicle() {
        return `id: ${this.id}, tên: ${this.name}, năm sản xuất: ${this.year}, hãng xe: ${this.company}`;
    }
}
let vehicle1 = new Vehicle(1, "wave", 2001, "honda");
console.log("product1", vehicle1);
let vehicle2 = new Vehicle(2, "dream", 2018, "honda");
console.log("product1", vehicle2);
