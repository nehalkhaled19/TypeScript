// function calc(num1: number, num2: number): number {
//     return num1 + num2
// }

// console.log(calc(10, 20));

// console.log(calc(+true, +true));


// function printInfo(valueOne: number | string, valueTwo: number | string) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }
// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// // console.log(printInfo(true, [1, 2, 3]));

// let arr: (number | boolean[] | (string | (string | number)[])[])[];
// arr = [20, [true], ["n", ["n", 3]]]


// function reportErrors(username: string, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
// }

// console.log(reportErrors("Elzero", 40));


// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//     return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails("n", "s", "f")); // Elzero


// function showMsg(user?: number | string, age?: boolean | number | string, country?: boolean | string) {
//     return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));


function printInConsole(...x: number[] | string[] | boolean[]) {
    x.forEach(e => {
        console.log(`The Value Is ${e} And Type Is ${typeof(x)}`)
    });
   
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
