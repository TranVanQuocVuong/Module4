"use strict";
class Student {
    constructor(studentID, fullName, mathScore, englishScore, computerScore) {
        this.studentID = studentID;
        this.fullName = fullName;
        this.mathScore = mathScore;
        this.englishScore = englishScore;
        this.computerScore = computerScore;
    }
    inputStudentInfo() {
        this.studentID = Number(prompt("Enter student ID: "));
        this.fullName = prompt("Enter full name: ") || "";
        this.mathScore = Number(prompt("Enter math score: "));
        this.englishScore = Number(prompt("Enter english score: "));
        this.computerScore = Number(prompt("Enter computer score: "));
        return this.printStudentInfo();
    }
    calculateAverageScore() {
        return (this.mathScore + this.englishScore + this.computerScore) / 3;
    }
    calculateCumulativeScore() {
    }
    printStudentInfo() {
        return `ID: ${this.studentID} - FullName: ${this.fullName} - AverageScore: ${this.calculateAverageScore()}`;
    }
}
