// Square the given elements in an array

var arr = [2, 8, 4, 6, 9, 7, 10];

console.log('Before Squaring the Array');
console.log(arr);

for(var i=0; i<arr.length; i++){
    arr[i] = arr[i] * arr[i];
}

console.log('After Squaring the Array');
console.log(arr);

