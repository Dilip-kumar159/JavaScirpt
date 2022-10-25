// declaration of the array

// Here the array contains multiple values with different data types.
// but in java or c++ which is statically typed language the data type of the 
// array should be same and checks the data type in compile time.

// Java Script is a Dynamically typed language which checks the data type in runtime.
var arr = [20,39,'Audi', true, 12.323, 'BMW'];

console.log(arr);

// Accessing elements in an array

console.log(arr[4]);


/*  Array Inbuilt methods or functions
-> pop and shift are to remove the elements in an array.
-> pop removes the last elements in an array.
-> shift removes the first or starting elements in an array.

-> push and unshift are to insert the elements in an array.
-> push inserts the element at the end of the array.
-> unshift inserts the elements at the begining or starting of the array.
*/

var popedElement = arr.pop();

console.log('Popped Element :', popedElement);
console.log(arr);

var shiftElement = arr.shift();

console.log('Shift Element', shiftElement);
console.log(arr);

arr.push('Bentley');
console.log('After Pushing :', arr);

arr.unshift(300);
console.log('After Unshift :', arr);


// There is a pre-defined function which tells the length of the array
console.log("The Length of the array is :",arr.length);