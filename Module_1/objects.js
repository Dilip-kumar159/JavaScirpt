// In JS objects are key value pairs
// creation and declaration of the object

var cricketer = {
    firstName : 'MS',
    lastName : 'Dhoni',
    age : 44,

    teamMates : ['Virat Kholi', 'Suresh Raina', 'Deepak Chahar'],

    address : {
        country : 'India',
        state : 'Jharakand',
        city : {
            cityName : 'Ranchi',
            pincode : 823232
        }
    }
}

// In order to access objects 
console.log(cricketer);

// console.log('His Team Mates');

// console.log(cricketer.teamMates);

// console.log(cricketer.address.city.pincode);

// Can also modify the object values

cricketer.age = 45;

// console.log(cricketer);

// can also add or delete the object keys and values

cricketer.carCollection = ['Thar', 'Benz', 'BMW', 'Audi'];

// console.log(cricketer);

delete cricketer.address.city.pincode;

console.log(cricketer);