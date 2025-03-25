/*
    Promises in JS are like promises in they life, I make a promise that something will happen and there are chances that It will happen
    and not happen

    Lets check this example of promising to make someone a cup of coffee below
*/

//start by creating a Promise object anmd store it in a var
   function getCoffee()
   {
    let coffeePromise = new Promise(function(resolve, reject)
    {
        let coffeeReady = false;   //we assume they are waiting for the coffee
    
        if(coffeeReady)
        {
            resolve('Coffee is read');
        }
        else
        {
            reject('Coffee is NOT ready');
        }
    })
    
    coffeePromise
    .then(function(message)
    {
        alert(message);
    })
    .catch(function(error)
    {
        alert(error);
    });
    
   }
