
var calculater = {
operate : function(a,b, callback) {
    return callback(a,b);
    
    }   
}

var result = calculator.operate(2,3, function(num1,num2){

    return num1+num2;

});

console.log(result);


var myfunction = function(num1, num2) {
    return num1 * num1 * num2 * num2;
}

var result = calculator.operate(7,2, function(num1,num2){
return (num1+num2)%2;
});

