/* for in loops
    For in loops are advance version of for loops.
    for in loops basically used to iterate through the objects.
    it is also used to itterate throught the array, as array as also a object in js.
*/

var car = {
    name : 'Range Rover',
    model : 2022,
    color : 'Black',
    type : 'AutoBiography'
};

// in order to loop this car object so we need to use for in loop.
for(var c in car){
    console.log(c ,'->',car[c]);
}

/* For of Loop
    -> For of loop basically used in Arrays and Strings 
    -> It directly access the element in an array and each character in Strings.
    -> Inorder to see the index of the array we use entries function 
*/
console.log("For of Loop");

var scores = [2,39,78,78,23,98];

// Syntax of For of loop
for(var ele of scores){
    console.log(ele);
}

// This entries function prints the index of the element as well
console.log('For of Loop using Entries Function');
for(var [index, ele] of scores.entries()){
    console.log(index,'->',ele);
}

// This for of loop also works in to get the each character in Strings
var str = 'Umbrella';

for(var char of str){
    console.log(char);
}