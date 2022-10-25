// Here writing the function of calculation and exporting using modularity and module
// which are produce by ES6 which helps in keeping the codebase neat and easy to debug

let add = (a,b) => console.log(a+b);

let sub = (a,b) => console.log(a-b);

let mul = (a,b) => console.log(a*b);

let div = (a,b) => console.log(a/b);


// function add(a, b){
//     console.log(a+b);
// }


// module syntax to export
module.exports = {
    addition : add,
    subtraction : sub, 
    multiplication : mul,
    division : div
};

