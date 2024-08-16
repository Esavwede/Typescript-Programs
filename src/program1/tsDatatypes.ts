


/* This is a simple program that exposes the Basic Typescript Datatypes */

function main(): void 
{

    console.log(" Program Started ")

    printNumberTypes()
    printStringTypes() 
    printBooleanTypes()
    printAnyTypes()  

    console.log("Program Ended ") 
    return 
}


function printNumberTypes(): void
{
    let myInt: number = 10 
    let myFloat: number = 10.1
    let myNegativeInt: number = -2001 

    console.log(` Interger: ${ myInt }`)
    console.log(` Float: ${ myFloat }`)
    console.log(` Negative: ${ myNegativeInt }`)

    return 
}


function printStringTypes(): void 
{
    let myString = "This is my special string"
    console.log(` ${ myString }`)
    return 
}


function printBooleanTypes(): void
{
    let thisIsATypescriptProgram: boolean = true 
    let thisIsAJavascriptProgram: boolean = false 

    console.log(`Code Written In Typescript: ${ thisIsATypescriptProgram }`)
    console.log(`Code written In Javascript: ${ thisIsAJavascriptProgram }`)
    return 
}

function printAnyTypes():void
{
    let anyTypedValue = JSON.parse("55") 
    console.log( anyTypedValue )
    console.log(`anyTypedValue is of type: ${ typeof anyTypedValue }`)
}


main() 