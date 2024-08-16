"use strict";
/* This is a simple program that exposes the Basic Typescript Datatypes */
function main() {
    console.log(" Program Started ");
    printNumberTypes();
    printStringTypes();
    printBooleanTypes();
    printAnyTypes();
    console.log("Program Ended ");
    return;
}
function printNumberTypes() {
    let myInt = 10;
    let myFloat = 10.1;
    let myNegativeInt = -2001;
    console.log(` Interger: ${myInt}`);
    console.log(` Float: ${myFloat}`);
    console.log(` Negative: ${myNegativeInt}`);
    return;
}
function printStringTypes() {
    let myString = "This is my special string";
    console.log(` ${myString}`);
    return;
}
function printBooleanTypes() {
    let thisIsATypescriptProgram = true;
    let thisIsAJavascriptProgram = false;
    console.log(`Code Written In Typescript: ${thisIsATypescriptProgram}`);
    console.log(`Code written In Javascript: ${thisIsAJavascriptProgram}`);
    return;
}
function printAnyTypes() {
    let anyTypedValue = JSON.parse("55");
    console.log(anyTypedValue);
    console.log(`anyTypedValue is of type: ${typeof anyTypedValue}`);
}
main();
