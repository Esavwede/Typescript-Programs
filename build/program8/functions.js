"use strict";
function program8() {
    var ans = myCalc();
    console.log(ans);
    functionTyping();
}
function myCalc(num1 = 2, num2 = 2, num3) {
    if (num3) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
function functionTyping() {
    const greeter = function userGreeter(name) {
        console.log(` Hi ${name}`);
    };
    greeter('FranK');
}
program8();
