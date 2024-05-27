"use strict";
class Account {
    constructor(accountNumber, accountName, accountMoney) {
        this.constant = 0.035;
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountMoney = accountMoney;
    }
    deposit(money) {
        if (money > 0) {
            return this.accountMoney += money;
        }
        else {
            return "Số tiền gửi phải lớn hơn 0";
        }
    }
    withdraw(money) {
        if (money < 0) {
            return "Số tiền rút phải lớn hơn 0";
        }
        else if (money > 0 && money <= this.accountMoney) {
            return this.accountMoney -= money;
        }
        else if (money > this.accountMoney) {
            return "Không đủ tiền";
        }
    }
    mature() {
        if (this.accountMoney > 0) {
            return this.accountMoney += this.accountMoney * this.constant;
        }
    }
}
