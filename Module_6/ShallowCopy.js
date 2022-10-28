// In shallow copy we use the operator called spread operator -> {...}

let firstPerson = {
    name: 'Adam',
    age : 23,

    address : {
        city : "London",
        country : 'UK'
    }
}

let secondPerson = {...firstPerson}

// if i change the second person name first person name also get changed.
secondPerson.age = 42
secondPerson.name = 'Steve'
secondPerson.address.city = 'America' // Here in the nested object the value will update for both the object.

// Inorder to avoid these we use spread operator.
// which basically takes first properties of the object and creates new reference to it.
console.log(firstPerson)
console.log(secondPerson)