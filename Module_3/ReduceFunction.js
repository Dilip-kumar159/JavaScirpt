// Reduce method or function 
// It gives resultant single value or element as an output not an array or object 

// Calculate the sum of the every element in an array.

let arr = [1,2,3,4,5];

let sum = arr.reduce((acc, val) =>{
    // let updatedSum = acc * val;
    // console.log(`acc ${acc} and arr ${val}`);
    return acc + val;
}, 0);  // This is an accumulator which stores the value

console.log(sum);
