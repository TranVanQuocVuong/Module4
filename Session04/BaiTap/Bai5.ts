class Department {
    readonly id: number;
    private name: string;
    private employee: string[];

    constructor(id: number, name: string, employee: string[]) {
        this.id = id;
        this.employee = employee;
        this.name = name;
    }

    describe(){
        console.log(`id:${this.id}, phòng ban:${this.name}`);
        
    }
}