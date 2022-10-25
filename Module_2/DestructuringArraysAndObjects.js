// Destructuring is a JS expression that makes it possible to unpack the array and object values.

let arr = [12, 'Bentley', 'Dilip', 98, 64];

// Destructuring the array 

let [a, b, c, d, e] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// creating the Objects

let obj = {
    name : 'Adam',
    age : 40,
    gender : 'Male',
    address:{
        country : 'India',
        state : 'Delhi'
    }
};

// let {x, y, z} = obj; // This won't work because of the obj key should match together

// console.log(x);
// console.log(y);
// console.log(z);

let {name:x, age:y, gender:z, address:{country:co, state:st}} = obj;

console.log(x);
console.log(y);
console.log(z);
console.log(co);
console.log(st);