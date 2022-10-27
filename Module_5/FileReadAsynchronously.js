// import the fs module to use
const fs = require('fs');

console.log('Start Line');

// let readFile = fs.readFileSync('dummyFile.txt');  This is Synchronously

// let readFile1 = fs.readFileSync('dummyFile1.txt');

// console.log(`${readFile}`);

// console.log(`${readFile1}`);

// Asynchoronously 

fs.readFile('dummyFile.txt', callbackFun); // the second argument is callback function

function callbackFun(err, data){
    if(err){
        console.log(err);
    }
    console.log('first file ----> '+ data);
}

fs.readFile('dummyFile1.txt', callbackFun1);

function callbackFun1(err, data){  // In case if there is no file present it throws an error.
    if(err){
        console.log(err);
    }
    console.log('second file ---> ' + data);

    fs.readFile('dummyFile2.txt', callbackFun2); // this makes the serial order to execute the call back function
}




function callbackFun2(err, data){  // In case if there is no file present it throws an error.
    if(err){
        console.log(err);
    }
    console.log('Third file ---> ' + data);
}

console.log('End Line')