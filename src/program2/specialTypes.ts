


function program2()
{

    console.log(" Program started")
    printAnyType()
    printNullAndUndefinedTypes()
    printUnknownType() 

    console.log(" Program Ended")
}


function printAnyType()
{
    let myAnyValue: any = 23
    myAnyValue = false 

    console.log( myAnyValue ) 
}


function printNullAndUndefinedTypes()
{
    let rate1Status: undefined = undefined 
    let rate2StatusAdmin: null = null 

    console.log( rate1Status )
    console.log( rate2StatusAdmin ) 
}

function printUnknownType()
{
    let password: unknown = 'fadfafda'
    console.log( password )
}

program2()