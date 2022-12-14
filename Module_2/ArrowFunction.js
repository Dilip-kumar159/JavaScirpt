// Arrow function is a special feature in ECMA Scipt 6 

// Declaration of Arrow Function

let test = () =>{
    console.log("hi \nVery good"); // This is one way to write in a sequence order
}


let test1 = (a) =>{
    // console.log(a*a);
    // This below code uses templates which is in form of back tick and dollar symbol
    console.log(`The square of ${a} is ${a*a}`);
}
// For single parameter we can also declare
let test5 = a => console.log(a*a);


let test2 = (a,b) =>{
    console.log(a+b);
}
// For online statment we can also write
let test6 = (a,b) => console.log(a*b);

test();
test1(4);
test5(9);
test2(3,7);
test6(3,7);