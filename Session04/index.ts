/* 
    OOP: Object Oriented Programing - Lập trình hướng đối tượng
        Là một mô hình lập trình quy về các đối tượng
        Các đối tượng sẽ gồm có thuộc tính và phương thức

        VD: đối tượng là con mèo
            thuộc tính: màu mắt, màu lông, cân nặng,...
            phương thức: bắt chuột, chạy,...

        Bằng việc tổ chức code OOP giúp code gọn gàng, mạch lạc, cụ thể, rõ ràng
        
        ********************************

        Tính chất của OOP
            1. Tính đóng gói hoặc bao đóng(encapsulation)
                Là tính chất dùng để ngăn chặn các thuộc tính và phương thức khi mà để trạng thái
            truy cập là private trong 1 đối tượng không bị truy cập hoặc tác động từ bên ngoài không
            nằm trong đối tượng đó

            2. Tính trừu tượng(abstraction)
            3. Tính kế thừa(inheritance)
            4. Tính đa hình(polymorphism)

        *********************************
        access modifier: phạm vi truy cập nó thể hiện bởi tính bao đóng hay đóng gói(encapsulation)
        nó được thể hiện bởi 3 từ khóa truy cập phạm vi 
            1.public
                - Khi khai báo thuộc tính và phương thức nếu không thêm từ truy cập thì mặc định là public
            2.private
                - Chỉ được sử dụng bên trong class đó thôi
                - Bên ngoài không truy cập được, muốn truy cập phải thông qua các phương thức
                (get, set) bên trong đối tượng đó.
            3.protected
                - Chỉ được sử dụng bên trong class và subclass(class con kế thừa class cha)
*/

// Cách khởi tạo đối tượng
class Preson{
    // các thuộc tính
    private lastName: string;
    private firstName: string
    // hàm tạo contructor
    constructor(lastName:string, firstName:string){
        this.lastName = lastName;
        this.firstName = firstName;
    }
    // nơi khai báo các phương thức cho lớp Person
    // phương thức để lấy thông tin của đối tượng
    getFullName():void {
        console.log(`họ và tên: ${this.lastName + this.firstName}`);  
    }
    setFirstName(firstName:string):void{
        this.firstName = firstName;
    }
    getFirstName():string{
        return this.firstName;
    }
    set setLastName(lastName:string){
        this.lastName = lastName;
    }
} 
// đi khởi tạo đối tượng từ lớp Person
let person1 = new Preson("Nguyễn", "Minh Thu");

person1.setFirstName("Minh Hà");
person1.setLastName = "Lê";
person1.getFullName();

// console.log("đối tượng được khởi tạo từ lớp Person", person1);
