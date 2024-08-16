"use strict";
/* Tuples */
function program4() {
    tuples();
}
function tuples() {
    let myTuple;
    myTuple = ['0', 0, '0'];
    console.log('Tuple:');
    console.log(myTuple);
    // Named Tuples 
    let cordinates = [200, 50];
    console.log(' Named Tuples ');
    console.log(cordinates);
    // Tuples Destructuring 
    let [x, y] = cordinates;
    console.log(`X cordinate: ${x}`);
    console.log(`Y cordinate: ${y}`);
}
program4();
