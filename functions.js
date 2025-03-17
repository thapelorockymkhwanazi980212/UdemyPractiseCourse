function  add(num1, num2)
{
     num1 = parseFloat(prompt('Enter the FIRST number:'));
     num2 = parseFloat(prompt('Enter the SECOND number:'));
    let sum = num1 + num2;
    
     alert('The sum is: '+ sum);
}

/*
     Here was making example of an arrow function, it is a shorter way of writing a function.
*/

const sayHello = () => console.log('Hello, this is Arrow function');
sayHello;
