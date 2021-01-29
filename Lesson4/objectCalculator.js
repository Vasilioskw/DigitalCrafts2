// var object1 = {
// add: add(num1, num2){
//     return num1 + num2;
// },

// sub: sub(num1, num2){
//     return num1 - num2;
// },

// multiply: multiply(num1, num2){
//     return num1*num2;
// },

// divide: divide(num1, num2;
//     ){
//     return num1/num2;
// }

// }



//1.  Start creating an empty object
//2.  Add four functions to the object with the following keys: add, subtract, multiply, divide. Each function should accept two numerical parameters.
//3.  In each of the corresponding, perform an addition, subtraction, multiplication and division of the two parameters. Return the result.
//4.  Outside of the object, create an array of numbers. Try to do 10 random numbers in the array.
//5.  Create another function find ‘largestNumber’. This function will have 1 parameter that will take an array.
//6.  Sort through the array to find the largest number and return it.
//7.  Call each of the functions on the object.

var calc = {
    add : function(num1, num2) {
            return num1 + num2;
    },
    subtract : function(num1, num2) {
            return num1 - num2;
    },
    multiply : function(num1, num2) {
            return num1 * num2;
    },
    divide : function(num1, num2) {
            num1 / num2;
    },
    largestNum : function(arr) {
            var largest = arr[0];
            // We're starting at the first number
            for(var i=0; i<arr.length;i++) {
                // Doing the loop through the array
                    if(arr[i]>largest) {
                            largest=arr[i];
                          // if the next number is larger...
                            // then next nember becomes the largest!
                    }
            }
            return largest;
    }
};
var numbers = [3,4,-3,2,5,3,2];
var numbers2 = [3,20, 2, 4, 12, 4];
console.log(calc.largestNum(numbers));
console.log(calc.largestNum(numbers2));