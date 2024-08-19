"use strict";
/* This typescript program makes use of type aliases and interfaces */
function program7() {
    typeAliases();
    typeInterfaces();
}
function typeAliases() {
    var person1 = { name: "Roy James", id: "8293289r2hfh" };
    var car1 = { color: "green", weight: 77.5, activeStatus: true, deactivationDate: undefined, owner: person1 };
    console.log(` ${person1.name} has a ${car1.color} coloured car that weighs ${car1.weight} pounds  `);
}
function typeInterfaces() {
    // Type interfaces are used to type objects 
    var toy1 = { id: "382rfoqh3" };
    var toy2 = { id: "360vxyyoprsQ", color: "red" };
    console.log(` Toy1 has an id of ${toy1.id}`);
    console.log(` Toy2 has a ${toy2.color} color `);
    // Extending Interfaces
}
program7();
