"use strict";
// Enums 
function program6() {
    console.log(" This is a simple Enums Program ");
    console.log(" Enums are special objects that hold constants ");
    enums();
}
function enums() {
    let statusCodes;
    (function (statusCodes) {
        statusCodes[statusCodes["status200"] = 200] = "status200";
        statusCodes[statusCodes["status404"] = 404] = "status404";
        statusCodes[statusCodes["status500"] = 500] = "status500";
    })(statusCodes || (statusCodes = {}));
    console.log(` If it's not ${statusCodes.status200}, then it's not okay :( `);
}
program6();
