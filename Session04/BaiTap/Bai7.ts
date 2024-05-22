class Circle {
    private radius:number;

    constructor(radius:number){
        this.radius = radius
    }

    perimeter():number{
        return this.radius*2*3.14;
    }
    area():number{
        return this.radius*this.radius*3.14
    }

    getRadius(){
        return this.radius;
    }
    set setRadius(radius:number){
        this.radius = radius;
    }
}

let cri = new Circle(2)

cri.setRadius = 4

console.log(cri.perimeter());
console.log(cri.area());

