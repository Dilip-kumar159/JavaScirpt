// This is best way to do because it creates different refernece to the object

let firstPerson = {
    name: 'Adam',
    age : 23,

    address : {
        city : "London",
        country : 'UK'
    }
}

// JSON.pares(JSON.stringify(object_Name)) is used to do a deep copy.

let secondPerson = JSON.parse(JSON.stringify(firstPerson))

secondPerson.address.city = 'America'

console.log(firstPerson)
console.log(secondPerson)