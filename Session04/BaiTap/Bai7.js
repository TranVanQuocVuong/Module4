"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    perimeter() {
        return this.radius * 2 * 3.14;
    }
    area() {
        return this.radius * this.radius * 3.14;
    }
    getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        this.radius = radius;
    }
}
let cri = new Circle(2);
cri.setRadius = 4;
console.log(cri.perimeter());
console.log(cri.area());
