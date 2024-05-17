/* 
    9. union: 
    let ourUnion:number|string = 5;
        ourUnion = "5";
    
    function statusCode(code:string|number) {
        console.log(`status code is ${code}`);
    }
    
    statusCode(404);
    statusCode("404");
*/

/* 
    10. type alias(kiểu bí danh)
    type Code = string|number;
    function statusCode(code:Code) {
        console.log(`status code is ${code}`);
    }
    statusCode(404);
    statusCode("404");
*/

/* 
    11. unknow: kiểu không xác định
    
    function test(params:any) {
        console.log("1111", params);
    }
    test("hello")
*/

/* 
    12. never: dùng trong các function xử lý các vòng lặp vô tận, dùng để đếm
    function never():never {
        let count = 0;
        while(true){
            count++;
            console.log("giá trị biến đếm count: ", count);
        }
    }
    never()
*/

/* 
    13. type tuples: bộ dữ liệu(bộ chọn) 
    
    let ourTuples:(number|string)[] = ["1", 1];
    let ourTuples1:[number,string,boolean] = [1, "1", true];
    ourTuples1.push(5)
    console.log("1111", ourTuples1);
*/

/* 
    14. type enum - liệt kê
    
    enum ROLE{
        ADMIN,
        USER
    }
    
    type Student = {
        name:string,
        age:number,
        role:ROLE.ADMIN
    }
    let student:Student = {
        name: "minh thu",
        age: 25,
        role: 0
    }
*/

/* 
    15. type intersection: kiểu kết hợp 
*/

type A = {
    name: string,
    id: number
}
type B = {
    address:string
}
type C = A&B;

let person:C = {
    name: "hoa",
    id: 5,
    address:"HN"
}

