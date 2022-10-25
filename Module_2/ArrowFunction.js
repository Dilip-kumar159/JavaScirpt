// Arrow function is a special feature in ECMA Scipt 6 

// Declaration of Arrow Function

let test = () =>{
    console.log("hi");
}


let test1 = (a) =>{
    console.log(a*a);
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