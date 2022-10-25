/* Functions are very important in java script 
    As Java Script is also called Functional Oriented Programming
*/

// function declaration and definition
function greet(){
    console.log("Good Morning , This is in function !!!");
}

// function call or invoking
greet();

// very important use function keyword

// Parameterized Functions 
function add(a, b){
    return a+b;
}

var res = add(7,8);
console.log('Addition :', res);

// Anonyms functions 
// The function which does not have name is called Anonyms function
// here there is no function just it is assigned to varaible called subtraction.

var subtract = function(a, b){
    return a - b;
}

var res = subtract(254 , 4);
console.log('Subtract :', res);