"use strict";
let firstName = "Lê";
let lastName = "trung";
function ktra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let fullNamee = ktra(firstName) + " " + ktra(lastName);
console.log(fullNamee);
