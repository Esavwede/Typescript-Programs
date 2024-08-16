


function program5()
{
    objects() 
}


function objects()
{
    
    let container: { name: string, color: string, weight: number, volume: number, owner?: string } 

    container = { name:"drum", color: "black", weight: 33.5, volume: 135 } 

    let objectWithIndexSignatures: { [index: string]: string | number | boolean } 

    objectWithIndexSignatures = { id:'323r23r2', pin: 23499, isActive: true }

    console.log(` Containers `)
    console.log( container )
    console.log( objectWithIndexSignatures ) 
}   


program5() 