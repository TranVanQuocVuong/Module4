"use strict";
class Bill {
    constructor(someBill, dayBill, nameCustomer, roomNumber, priceRoom) {
        this.someBill = someBill;
        this.dayBill = dayBill;
        this.nameCustomer = nameCustomer;
        this.roomNumber = roomNumber;
        this.priceRoom = priceRoom;
    }
}
class HourlyBill extends Bill {
    constructor(someBill, dayBill, nameCustomer, roomNumber, priceRoom, rentalHours) {
        super(someBill, dayBill, nameCustomer, roomNumber, priceRoom);
        this.rentalHours = rentalHours;
    }
    totalHourlyBill(rentalHours) {
        if (rentalHours > 0 && rentalHours < 24) {
            return rentalHours * this.priceRoom;
        }
        else if (rentalHours > 24 && rentalHours < 30) {
            return 24 * this.priceRoom;
        }
        else {
            return `Không tính được tính hóa đơn này`;
        }
    }
}
class DailyBill extends Bill {
    constructor(someBill, dayBill, nameCustomer, roomNumber, priceRoom, rentalDays) {
        super(someBill, dayBill, nameCustomer, roomNumber, priceRoom);
        this.rentalDays = rentalDays;
    }
    totalDailyBill(rentalDays) {
        if (rentalDays > 0 && rentalDays <= 7) {
            return rentalDays * this.priceRoom;
        }
        else if (rentalDays > 7) {
            return 7 * this.priceRoom + (rentalDays - 7) * this.priceRoom * 0.2;
        }
    }
}
