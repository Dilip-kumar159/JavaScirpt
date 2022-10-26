class Person{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let person1 = new Person('Adam', 23, 'M');
console.log(person1)
person1.welcome()

let person2 = new Person('Monica', 43, 'F');
console.log(person2)
person2.welcome()

let person3 = new Person('Steve', 42, 'M');
console.log(person3)
person3.welcome()

let person4 = new Person('Jenifier', 61, 'F');
console.log(person4)
person4.welcome()
