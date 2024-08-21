

function program11()
{
    genericFunctions() 
    genericTypes() 
    genericClasses() 
}




function genericFunctions()
{

    // Receives a single Type 
    function arrayPrinter<T>( array: T[] ): void 
    {
        for( let i = 0; i < array.length; i++ )
        {
            console.log(` Array ${ i }  value:  ${ array[i]}`)
        }
    }

    // Example 
    arrayPrinter(['a','b','c','d','e','f','g','h','i','j','k'])
    arrayPrinter([100,200,300,400,500,600,700, 800, 900, 1000 ])
    
}

function genericTypes()
{
    type WrappedValue<T> = { value: T } 

    var wrappedValue1: WrappedValue<number> = { value: 10 }

    console.log('wrapped value ')
    console.dir( wrappedValue1 )  
}


function genericClasses()
{


    // A class that stores an array of a particular datatype 
    class Store<T> 
    {
        

        constructor( private readonly id: string = 'somerandomid', private items: T[] )
        {

        }


        getItems(): T[] 
        {
            return this.items 
        }


        addItem( item: T )
        {
            this.items.push( item ) 
        }

    }


    interface Item 
    {
        name: string,
        color: string,
        weight?: number 
    }

    var myItems: Item[] = [ { name: 'basket', color: "blue "}, { name: 'mop', color:"red"  } ]
    var myStore = new Store<Item>('fafdadfafd', myItems ) 

    console.dir( myStore )

    

}

program11() 