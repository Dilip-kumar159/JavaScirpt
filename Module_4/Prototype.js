// empty object
let obj = {} // By default it has prototype object
// console.log(obj)  

let obj1 = {  // This is just an object 
    name: 'a',
    age : 23
}

console.log(obj1)
console.log(obj1.hasOwnProperty('age'))


// Creating object in constructor function

let Person = function(_name, _age){
    this.name = _name;
    this.age = _age;

}


Person.prototype.getName = function(){
    console.log(`My name is ${this.name} and age is ${this.age}`)
}

console.log(Person.prototype);

let person1 = new Person('Adam', 32)  // Now this object has its own prototype along with in-built prototype
console.log(person1)
console.log(person1.getName())
console.log(person1.hasOwnProperty('name'))



let person2 = new Person('Steve', 23) // Here for every object the getName function is defined inorder to overcome that we use prototype 
console.log(person2)
console.log(person2.getName())
