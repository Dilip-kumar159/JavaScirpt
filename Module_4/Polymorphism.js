// Polymorphism means one name with many forms or methods

class Animal{

    sound(){
        console.log('Animals makes Different Sound')
    }
}


class Dog{

    sound(){
        console.log('Dog Barks!!!')
    }
}


class Cat{

    sound(){
        console.log('Cat mews!!!')
    }
}

// Here in all the class the sound function has name but it behaves differently
// this called polymorphism

let Animal1 = new Animal()
Animal1.sound()

let tommyDog = new Dog()
tommyDog.sound()

let blackyCat = new Cat()
blackyCat.sound()