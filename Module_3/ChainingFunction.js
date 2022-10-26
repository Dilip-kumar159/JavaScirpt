let person = [

    {name : 'A', Age : 44, gender : 'Male'},
    {name : 'B', Age : 30, gender : 'Female'},
    {name : 'C', Age : 26, gender : 'Male'},
    {name : 'D', Age : 22, gender : 'Female'},
    {name : 'E', Age : 19, gender : 'Male'},
    {name : 'F', Age : 36, gender : 'Female'},
    {name : 'G', Age : 34, gender : 'Male'},
    {name : 'H', Age : 20, gender : 'Male'}
]

// In the given array take out all the male gender age.
// Inorder to achieve this we use two higher order function we can do this using chaining.
// let males = person.filter((obj)=>{
//         return obj.gender == 'Male';
// });

// let maleAge = males.map((m)=>{
//     return m.Age;
// })

// console.log(males);
// console.log(maleAge);

let maleAge = person.filter((male)=>{
    return male.gender == 'Male';
}).map((m)=>{
    return m.Age;
});

console.log(maleAge);

// Given The transaction find out all the postive number and sum it up and console it.

let transaction = [1000, 3000, -200, 7000, -9232, -3436, 5000];

let postiveAmount = transaction.filter((amt)=>{
    return amt > 0;
}).reduce((acc, val)=>{
    return acc + val;
}, 0);

console.log(`Amount is ${postiveAmount}`);