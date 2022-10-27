// Set Timeout is a also Asynchronous 

// syntax setTimeout(callbackfunction, 3000) --> 3000 is a mileseconds.

console.log('Before')

function greet(){
    console.log("hello This is setTimeout()")
}

setTimeout(greet, 3000);  // Asychronous function 

console.log('After')