// Hoisting is a phenomen in Java Script 

console.log(name); // This is hoisting before declaring the variable or function
sum(20,30);    // If we call then we say it is a function hoisting or variable hoisting.

    // This is not an error , it runs properly

var name = 'Dilip';

function sum(a, b){
    console.log(a+b);
}

add(19,23); // This through's the error because variable is undefined 

var add = function(a, b){
    console.log(a+b);
}
