// Higher Order Function are functions which recieves the function as an
// argument or returns the function as output. best example is map.

// Square the given array elements just a normal way
// This is Imperative way of writing the code.

// let arr = [10,23,98,32,74];

// for(let i=0; i<arr.length; i++){
    //     arr[i] = arr[i]*arr[i];
    // }
    
    // console.log(arr);
    
    
    // Declarative way of writing code and using map

 let arr = [10,23,8,12,7];

 let square = arr.map(function(ele){ // map recives the function 
    return ele * ele;   // returns a new array which is square in this example.
 });

 console.log(square); // now square is an array 

 // Convert the rupees into dollars

 let rupees = [1000, 3000, 3432, 8723, 2342, 5423];

 let dollarRate = 80;

 let conversion = rupees.map((amount) => {
    return Number((amount/dollarRate).toFixed(0)); // toFixed is used to remove the decimal
 });

 console.log(conversion) // now conversion becomes the new array.


 // Same For each loop also works but it won't return anything 

 let rupees1 = [1000, 3000, 3432, 8723, 2342, 5423];

 let dollarRate1 = 80;

 let conversion1 = rupees.forEach((amount) => {
    console.log(Number((amount/dollarRate1).toFixed(0))); // toFixed is used to remove the decimal
 });
 // For each loop that doesn't return any array it just prints the each element.
