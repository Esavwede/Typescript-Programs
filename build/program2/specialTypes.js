"use strict";
function program2() {
    console.log(" Program started");
    printAnyType();
    printNullAndUndefinedTypes();
    printUnknownType();
    console.log(" Program Ended");
}
function printAnyType() {
    let myAnyValue = 23;
    myAnyValue = false;
    console.log(myAnyValue);
}
function printNullAndUndefinedTypes() {
    let rate1Status = undefined;
    let rate2StatusAdmin = null;
    console.log(rate1Status);
    console.log(rate2StatusAdmin);
}
function printUnknownType() {
    let password = 'fadfafda';
    console.log(password);
}
program2();
