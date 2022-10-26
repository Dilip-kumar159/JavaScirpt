class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    welcome(){
        console.log(`Welcome ${this.name}!!`)
    }
}


class Teacher extends Person{
    constructor(name, age, standard){
        super(name, age)
        this.standard = standard
    }
    greet(){
        super.welcome()
    }
}

class Student extends Person{
    constructor(name, age, cgpa){
        super(name, age)
        this.cgpa = cgpa
    }
}

// let person1 = new Person('Adam', 22)
// console.log(person1)

let Teacher1 = new Teacher('Shankar', 42, 12);
console.log(Teacher1)
Teacher1.greet()

let student1 = new Student('Shane', 22, 8.4);
console.log(student1)