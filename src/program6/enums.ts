

// Enums 

function program6()
{
    console.log(" This is a simple Enums Program ")
    console.log(" Enums are special objects that hold constants ") 
    enums() 
}



function enums()
{

    enum statusCodes 
    {
      status200 = 200,
      status404 = 404,
      status500 = 500,
    }


    console.log(` If it's not ${ statusCodes.status200 }, then it's not okay :( `)
}


program6() 