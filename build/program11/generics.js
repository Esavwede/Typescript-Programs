"use strict";
function program11() {
    genericFunctions();
    genericTypes();
    genericClasses();
}
function genericFunctions() {
    // Receives a single Type 
    function arrayPrinter(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(` Array ${i}  value:  ${array[i]}`);
        }
    }
    // Example 
    arrayPrinter(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
    arrayPrinter([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]);
}
function genericTypes() {
    var wrappedValue1 = { value: 10 };
    console.log('wrapped value ');
    console.dir(wrappedValue1);
}
function genericClasses() {
    class Store {
        constructor(id = 'somerandomid', items) {
            this.id = id;
            this.items = items;
        }
        getItems() {
            return this.items;
        }
        addItem(item) {
            this.items.push(item);
        }
    }
    var myItems = [{ name: 'basket', color: "blue " }, { name: 'mop', color: "red" }];
    var myStore = new Store('fafdadfafd', myItems);
    console.dir(myStore);
}
program11();
