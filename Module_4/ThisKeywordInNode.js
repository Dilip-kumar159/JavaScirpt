// This keyword in Node Js with non-strict mode

//  this keyword with console.log()
console.log(this); // It gives empty object.

// this keyword in function
function print(){
    console.log(this);
}
// print()  gives the gobal object

// this keyword in object-> function

let obj = {
    name : 'Dilip',
    age : 20,
    fun : function solve(){
        console.log(this);
    }
}
// obj.fun(); // returns the whole object itself

// this keyword in object -> function -> function

let obj2 = {
    name : 'Dilip',
    age : 20,
    fun : function solve(){
            function add(){
                console.log(this)
            }
        add()
    }
}
obj2.fun() // returns the global object 