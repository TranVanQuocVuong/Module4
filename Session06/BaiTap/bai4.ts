class Bill {
    someBill: number;
    dayBill: string;
    nameCustomer: string;
    roomNumber: number;
    priceRoom: number;

    constructor(someBill: number, dayBill: string, nameCustomer: string, roomNumber: number, priceRoom: number) {
        this.someBill = someBill;
        this.dayBill = dayBill;
        this.nameCustomer = nameCustomer;
        this.roomNumber = roomNumber;
        this.priceRoom = priceRoom;
    }
}

class HourlyBill extends Bill {
    rentalHours: number;
    constructor(someBill: number, dayBill: string, nameCustomer: string, roomNumber: number, priceRoom: number, rentalHours: number) {
        super(someBill, dayBill, nameCustomer, roomNumber, priceRoom);
        this.rentalHours = rentalHours;
    }

    totalHourlyBill(rentalHours: number) {
        if (rentalHours > 0 && rentalHours < 24) {
            return rentalHours * this.priceRoom;
        }
        else if (rentalHours > 24 && rentalHours < 30) {
            return 24 * this.priceRoom ;
        }
        else {
            return `Không tính được tính hóa đơn này`
        }
    }
}

class DailyBill extends Bill {
    rentalDays: number;
    constructor(someBill: number, dayBill: string, nameCustomer: string, roomNumber: number, priceRoom: number, rentalDays: number) {
        super(someBill, dayBill, nameCustomer, roomNumber, priceRoom);
        this.rentalDays = rentalDays;
    }

    totalDailyBill(rentalDays: number) {
        if (rentalDays > 0 && rentalDays <= 7) {
            return rentalDays * this.priceRoom;
        }
        else if (rentalDays > 7) {
            return 7 * this.priceRoom + (rentalDays - 7) * this.priceRoom * 0.2;
        }
    }
}