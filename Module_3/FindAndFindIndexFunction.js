// Find Function returns the first element of an array that satisifies the condition

let amount = [-1000, -9232, -1234, 4827, 2342, -4222, 3242];

let res = amount.find((n) => {
    return n>0;  // here as n < 0 so it returns first element which it encounters 
                    // In this case it is -1234.
});

console.log(res);

// FindIndex -> works same as find function but it returns the index of the element.

let resu = amount.findIndex((n)=>{
    return n>0;
});

console.log(resu);
