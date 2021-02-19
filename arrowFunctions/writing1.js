

// Using only arrow functions, 
//create a multiplication, division, 
//addition and subtraction function 
//and pass each of those functions 
//into another function that calls 
//the function and logs the results.

var x = 1
var y = 1

var addition = (x, y) => x + y;
var subtraction = (x, y) => x - y;
var multiplication = (x, y) => x * y;
var division = (x, y) => x / y;

addition(x,y)

var ourFunction = (x,y) => {
     console.log(addition(x,y)) ;
        console.log(subtraction(x,y));
            console.log(multiplication(x,y)); 
                console.log(division(x,y));
            };

console.log(ourFunction(x,y))