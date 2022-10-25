// Writing Imperative code and Declarative Code
// Check whether the number of a square is even or not.


// Imperative way of writing code
let a = 19;

let square = a*a;

let isEven;

if(square % 2 == 0) isEven = true;
else isEven = false;

console.log(isEven);

// Declarative way of writing code

let squaredNumber = (x) => (x*x % 2 == 0 ? true : false);

console.log(squaredNumber(8));

