"use strict";
class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    perimeter() {
        return this.width * this.heigth;
    }
    area() {
        return (this.width + this.heigth) * 2;
    }
    set setWidth(width) {
        this.width = width;
    }
    set setHeigth(heigth) {
        this.heigth = heigth;
    }
}
let rec = new Rectangle(1, 2);
rec.setWidth = 2;
rec.setHeigth = 8;
console.log(rec.perimeter());
console.log(rec.area());
