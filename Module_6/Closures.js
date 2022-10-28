// closures are nothing but having the access to the function which is lexically dependent
// In the example test() is a outer function and it is in lexical scope
// test1() is inner function which has the access to the test() 
// this is what closure is 
function test(){

    let a = 10;

    function test1(){
        console.log(a);
    }
    test1()
}

test()

// Nested functions in Closures

function greet(){

    let name = 'Adam'

    function getName(){
        console.log(`My name is ${name}`)

        let age = 23

        function getAge(){
            console.log(`My age is ${age} and My name is ${name}`)
        }
        // getAge()
        return getAge
    }

    // getName()
    return getName
}

// greet() // This if we are not returning the function we can use this to print the name and age
let g1 = greet()

// console.log(g1) // this returns the whole funtion of getName()

let g2 = g1()
// console.log(g2) // this returns the whole function of getAge()

// g1()
g2()