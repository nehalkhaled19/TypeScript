"use strict";
function calc(num1, num2) {
    return num1 + num2;
}
console.log(calc(10, 20));
console.log(calc(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3]));
let arr;
arr = [20, [true], ["n", ["n", 3]],
    function reportErrors(username, age) {
        let rank = "Professor";
        return `Username: ${username}`;
        console.log("We Will Not Reach Here");
    },
    console.log(reportErrors("Elzero", 40))];
