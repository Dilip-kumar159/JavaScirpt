// promises has 4 states pending, fullfilled, rejected, settled

// how to produce a promise

let myPromise = new Promise(function(resolve, reject){

    let a = 10;
    let b = 10;

    setTimeout(()=>{
        if(a===b) {
            resolve('A and B are equal!!')
        }
        else {
            reject('A and B are not equal!!')
        }
    },3000)
})

// It prints pending state of promises
// console.log(myPromise)

// if promise fullfilled we use then() method to take it
myPromise.then(function(result){
    console.log(result)
})

// if promise is rejected we use catch() method to take it
myPromise.catch(function(failedResult){
    console.log(failedResult)
})