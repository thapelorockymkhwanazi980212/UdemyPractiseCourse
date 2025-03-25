/*
    closure is a special feature in javascript where the inner function "remembers" the variable of the outer function
    after the execution of the outer function 
*/

function outerFunction()
{
    var counter = parseInt(prompt('Enter any number to be incremented:'));

    function increment()
    {
        
        alert(' ' + counter);
        counter++;
    }

    increment();
    increment();
   
}

