// Curring is basically an application of closures as it breaks the complex codes into 
// smaller chuncks as we know function inside the function as the lexical scope so it can easily acces.

// Without Curring
let add = (x, y, z)=>{
    console.log(x + y + z)
}

add(2,3,5)// This is normal function

// Using Function Curring

let funCurry = (x)=>{

    return (y)=>{
        
        return (z) =>{
            console.log(x + y + z)
        }
    }
}

let sum = funCurry(10)

console.log(sum) // This return the anonyms function of parameter(x)

let inFun = sum(20)

console.log(inFun) // This return the anonyms function of parameter(y)

inFun(30) // This prints the sum of the function(x+y+z)

