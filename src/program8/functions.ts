



function program8()
{
    var ans: number = myCalc() 
    console.log( ans ) 

    functionTyping() 
}



function myCalc( num1: number = 2, num2: number = 2, num3?: number ): number 
{
    if( num3 )
    {
        return num1 + num2 + num3 
    }

    return num1 + num2 
}


function functionTyping()
{
        type SayHi = ( name: string ) => void 

        const greeter: SayHi = function userGreeter( name )
        {
            console.log(` Hi ${ name }`)
        }   

        greeter('FranK') 
}


program8() 