// inorder to read or write the file we need to import the module called fstream file.

const fs = require('fs');

console.log('Started execution of the program');

let readFile = fs.readFileSync('dummyFile.txt');

console.log(`${readFile}`);

console.log('Ended the execution of the program')