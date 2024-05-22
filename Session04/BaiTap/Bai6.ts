class Song {
    public readonly id:number;
    private name:string;
    private length:number;
    
    constructor(id:number, name:string, length:number){
        this.id = id;
        this.name = name;
        this.length = length;
    }

    getName():string{
        return this.name;
    }
    set setName(name:string){
        this.name = name;
    }

    getLength():number{
        return this.length;
    }
    set setLength(length:number){
        this.length = length;
    }
}