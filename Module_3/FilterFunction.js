// Filter method or function
// It returns a new array which the condition satisfies and fileter out that element and put in new array.

// without using filter function
// If there is an even number in array put it in new array

// Imperative way of writing code.

let num = [1,30,23,8,98,32,74,57];

let even = [];

for(var i=0; i<num.length; i++){
    if(num[i] % 2 == 0){
        even.push(num[i]);
    }
}
console.log('Using Normal for loop',even)

// Declarative way of writing code and using Filter Function
let evenNum = num.filter((n) =>{
    return n%2 == 0;
})

console.log('Using Filter function', evenNum)

// Findout all the positive number in the amount array

let amount = [100, -3232, -9002, 4023, 6231, -7235, 1358];

let positive = amount.filter((amt) => {
    return amt > 0;
});

console.log('Postive',positive)