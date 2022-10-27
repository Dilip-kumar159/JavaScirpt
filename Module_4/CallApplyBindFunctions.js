// Call method is used to call the functions with the object 

let obj = {
    name: 'Dilip',
    age : 22
}

let obj1 = {
    name : 'Rahul',
    age : 25
}

let print = function(city, state){
    console.log(`My name is ${this.name} and age is ${this.age}
    and city is ${city} and state is ${state}`)
}

print.call(obj, 'New York', 'America') // this is the call method

print.call(obj1, 'London', 'England')

// Apply works same but it uses arrays to store the arguments

print.apply(obj, ['Bangalore', 'Karnataka']); // This is the only difference in call and apply method.

// Bind works same as call and apply but it can stores the function and can be used later 

let myFunc = print.bind(obj1, 'chennai', 'Tamil Nadu');

myFunc(); // here myFunc stores the function and can be used later time

// let myFunc = print.call(obj1, 'chennai', 'Tamil Nadu');
// If i use call method instead of bind it throws an error 