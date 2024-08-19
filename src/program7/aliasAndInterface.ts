
/* This typescript program makes use of type aliases and interfaces */


function program7()
{
    typeAliases() 
    typeInterfaces() 
}


function typeAliases()
{
    type Person = {
        name: string,
        id: string,
        nickname?: string 
    }
    
    
    type CarColor = string 
    type CarWeight = number 
    type CarActiveStatus = boolean
    type CarDeactivationDate = undefined | string 
    type CarOwner = null | Person 
    
    type Car =  {
        color: CarColor,
        weight: CarWeight,
        activeStatus: CarActiveStatus,
        deactivationDate: CarDeactivationDate,
        owner: CarOwner
    }
    
    
    var person1: Person = { name: "Roy James", id:"8293289r2hfh" } 
    var car1: Car = { color:"green", weight: 77.5, activeStatus: true, deactivationDate: undefined, owner: person1  } 
    
    
    console.log(` ${ person1.name } has a ${ car1.color } coloured car that weighs ${ car1.weight } pounds  `)
}


function typeInterfaces()
{
    // Type interfaces are used to type objects 

    interface toy {
        id: string 
    }


    interface colouredToy extends toy 
    {
        color: string 
    }

    var toy1: toy = { id:"382rfoqh3" }
    var toy2: colouredToy = { id: "360vxyyoprsQ", color:"red" }

    console.log(` Toy1 has an id of ${ toy1.id }`)
    console.log(` Toy2 has a ${ toy2.color } color `)
    // Extending Interfaces
}

program7() 