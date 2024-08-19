

type Ytype = number | string 

function program9(): void 
{
    var x: unknown = "2" 
    var y: Ytype = 200 

    console.log(" Y is of type ") 
    console.log( typeof y ) 

    if( typeof x == "string" )
    {
        console.log(" X is a string ") 
        x = x as string 
        console.log("Converted X to String ") 
    }
    
}

program9() 