// There are two operators that are == and ===
// == -> loose checking as it only checks the value not the data type
// === -> Strict Checking as it checks both value and data type

let a = 5;
let b = '5';

console.log(a==b) // This gives true
console.log(a===b) // This gives false

// Truthy and falsy in Java Script 
// In Java Script for every variable there is a boolean value

// For some case it produces false they are
/* 0 (zero) , '' , "" , `` (empty String), null, undefined, NaN */

let n = -4;

if(n){
    console.log("I'm truthy!!")
}
else{ console.log("I'm Falsy!!") }

// For following code print the output

(function(){
    if((-100 && 100 && "0") || [] === true || 0){
        console.log(1);

        if([] || (0 && false)) {
            console.log(2)
        }

        if(Infinity && NaN && "false"){
            console.log(3)
            if(""){
                console.log(4)
            }
        }else{
            console.log(5)

            if(({} || false === "") && !(null && undefined)){
                console.log(6);
            }
        }
    }
}) ()

// Output 1,2,5,6