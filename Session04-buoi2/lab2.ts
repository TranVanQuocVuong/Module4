class QuadraticEquation{
    private a:number
    private b:number
    private c:number
    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA(){
        return this.a;
    }
    getB(){
        return this.b;
    }
    getC(){
        return this.c;
    }

    set setA(a:number){
        this.a = a;
    }
    set setB(b:number){
        this.b = b;
    }
    set setC(c:number){
        this.c = c;
    }

    getDiscriminant(){
        return this.b*this.b - 4*this.a*this.c
    }

    getRoot1() {
        return (-this.b + Math.sqrt(this.getDiscriminant()))/(2*this.a)
    }
    getRoot2() {
        return (-this.b - Math.sqrt(this.getDiscriminant()))/(2*this.a)
    }

    getResult(){
        if(this.getDiscriminant() < 0){
            return "The equation has no roots"
        }
        else if(this.getDiscriminant() >= 0){
            return "Nghiem 1: " + this.getRoot1() + " Nghiem 2: " + this.getRoot2()
        }
    }
}

const quadraticEquation = new QuadraticEquation(1, 2, 1);
console.log(quadraticEquation.getResult());