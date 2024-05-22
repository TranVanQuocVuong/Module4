class Vehicle{
    readonly id:number;
    name:string;
    protected year:number;
    private company:string;

    constructor(id:number, name:string, year:number, company:string){
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    getName():string{
        return this.name;
    }
    set setName(name:string){
        this.name = name;
    }

    getYear():number{
        return this.year;
    }
    set setYear(year:number){
        this.year = year;
    }

    getCompany():string{
        return this.company;
    }
    set setCompany(company:string){
        this.company = company;
    }

    fVehicle(): string {
        return `id: ${this.id}, tên: ${this.name}, năm sản xuất: ${this.year}, hãng xe: ${this.company}`;
    }
}

let vehicle1 = new Vehicle(1,"wave",2001,"honda") 
console.log("product1", vehicle1);

let vehicle2 = new Vehicle(2,"dream",2018,"honda") 
console.log("product1", vehicle2);
