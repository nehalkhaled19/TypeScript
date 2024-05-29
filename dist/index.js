"use strict";
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
// function printInConsole(...x: number[] | string[] | boolean[]) {
//     x.forEach(e => {
//         console.log(`The Value Is ${e} And Type Is ${typeof(x)}`)
//     });
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));
// type buttons = {
//     name : string,
//     age : number
// }
// function moves (x: buttons){
//     console.log(x);
// }
// moves({name : 'nono', age : 23})
// type nums = true | false
// function compare(num1: number, num2: number): nums {
//     return num1 > num2
// }
// compare (10, 5)
// compare (15, 35)
// -------------------------------enum-----------------------------------
// enum years {
//     newEmploye = 0 ,
//     expert = 5
// }
// function getMoreExerpeince() : number{
//     return 5
// }
// const junior = 2
// const entrylevel = 1
// const senior = 3
// const teamLeader = 5
// enum level {
//     junior = 2,
//     entrylevel = years.newEmploye,
//     senior = 3,
//     teamLeader = getMoreExerpeince()
// }
// console.log(`Your level is entey level, Your experinece is ${level.entrylevel}`)
// let x = "200"
// console.log((x as string).repeat(2));
// // ------------------------------intersection type -------------------------
// type a = {
//     one: string,
//     two: number
// }
// type b = a & {
//     three: boolean
// }
// function tryTypes (x: b){
//     console.log(x.one);
//     console.log(x.three);
//     console.log(x.two);
// }
// tryTypes({one:"nehal", two : 23,three: true})
// // ------------------------------object type -------------------------
// const myObject: {
//     id: number,
//     name: string,
//     age: number,
//     state?: "string"
//     gender: string
// } = {
//     id: 1,
//     name: "nono",
//     age: 23,
//     gender: "female"
// }
// console.log(`Her id is ${myObject.id}, Her name is ${myObject.name}, Her age is ${myObject.age}, Her gender is ${myObject.gender}`);
// // ------------------------------Assignment 2-------------------------
// 1--
// // Wtrite Your Code Here
// type n = number
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here
// console.log(myData);
// 2--
// Write Your Code Here
// type mix = number | boolean
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here
// 3--
// Write Your Code Here
// type Info = {
//     theName: string,
//     theAge: number,
// }
// type Full = Info & {
//     country:string
// }
// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//   }
//   console.log(showInfo({ theName: "Elzero", theAge: 40 }));
//   function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
//   }
//   console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// 4--
function yesOrNo(val) {
    if (typeof (val) == "number") {
        return val > 10;
    }
    else {
        return "error";
    }
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
