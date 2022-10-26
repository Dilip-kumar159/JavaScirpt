// Some Function return the boolean value 
// if any one elements satisfies the condition then it return true.

let amount = [1000, 9232, 1234, 4827, 2342, 4222, -3242];

let res = amount.some((n) => {
    return n<0;  // here as n < 0 so it returns first element which it encounters 
                    // In this case it is true.
});
console.log(res);

// Every function works same as some function but , 
// in every all the condition should satisfy  then only it returns true or else false.

let res1 = amount.every((n)=>{
    return n<0;  // Here it gives false because all the elements are not less than 0
});

console.log(res1);