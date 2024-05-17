let firstName:string = "Lê"
let lastName:string = "trung"


function ktra(str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

let fullNamee = ktra(firstName) + " " + ktra(lastName)
console.log(fullNamee);

