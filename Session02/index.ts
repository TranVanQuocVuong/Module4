console.log("TypeScript");
/* 
    lọc không trùng rồi tìm chuỗi dài nhất
*/
let arr:string = "hello world apple banana orange pumpkin cucumber"

let arr1 = arr.split(" ");
console.log("arr1", arr1);

let count:string = "";

for (let index = 0; index < arr1.length; index++) {
    let uniqueChars = "";
    for (let char of arr1[index]) {
        if (uniqueChars.indexOf(char) === -1) {
            uniqueChars += char;
        }
    }
    if (arr1[index].length === uniqueChars.length && uniqueChars.length >= count.length) {
        count = uniqueChars
    }
}

console.log("count", count);