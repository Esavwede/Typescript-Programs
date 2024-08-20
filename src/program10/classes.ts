

function program10()
{
        

    // Simple Class Definition 

    interface AnimalType 
    {
        publicId: string,
        getName: ()=> string, 
        changeName: (newName: string)=> string 
    }

    class Animal implements AnimalType
    {
        public readonly publicId: string 

        constructor( private name: string )
        {
            this.name = name 
            this.publicId = 'e32r32rjf9eqo3wiejrw0aj' 
        }

        changeName( newName: string )
        {
            this.name = newName 
            return this.name 
        }

        getName(): string 
        {
            return this.name
        }

    }


    var animal1 = new Animal("Goat")

    console.log( animal1.getName() ) 
    console.log( animal1.publicId ) 
    

}


program10() 