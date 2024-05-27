class Vehicle {
    name: string;
    engineCapacity: number;
    value: number;

    constructor(name: string, engineCapacity: number, value: number) {
        this.name = name;
        this.engineCapacity = engineCapacity;
        this.value = value;
    }

    caculateTax() {
        if (this.engineCapacity < 100) {
            return this.value * 0.01;
        } else if (this.engineCapacity > 200) {
            return this.value * 0.05;
        } else {
            return this.value * 0.03;
        }
    }
    displayInfo() {
        return `Name: ${this.name} - EngineCapacity: ${this.engineCapacity} - Value: ${this.value} - Tax: ${this.caculateTax()}`
    }
}

class Main {
    main(choose: number) {
        let car = new Vehicle("Car", 100, 10000000);
        while (choose < 3 || choose > 1) {
            if (choose == 1) {
                const name = prompt("Enter name: ")||"";                
                const engineCapacity = Number(prompt("Enter engineCapacity: "));
                const value = Number(prompt("Enter value: "));
                car = new Vehicle(name, engineCapacity, value);
                return car.displayInfo();
            }
            else if (choose == 2) {
                return car.caculateTax();
            } else {
                break;
            }
        }
    }
}
