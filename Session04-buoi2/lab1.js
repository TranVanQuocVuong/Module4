"use strict";
class Cricle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
    perimeter() {
        return this.radius * 2 * 3.14;
    }
    area() {
        return this.radius * this.radius * 3.14;
    }
    inputData(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    displayData() {
        return `Radius: ${this.radius} - Color: ${this.color}`;
    }
}
const cricle = new Cricle(3, 'red');
cricle.inputData(5, 'blue');
console.log(cricle.displayData());
console.log(cricle.area());
