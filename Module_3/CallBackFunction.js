// CallBack Functions

function printFirstName(firstName, callBack){ // CallBAck function
    console.log(firstName);
    callBack('Kumar');     
}

function printLastName(lastName){
    console.log(lastName);
}

printFirstName('Dilip', printLastName); // function passed as argument


const isEven = (n) => {
    return n % 2 == 0;
}

const check = (evenFunction, num) => {
    let checkNum = evenFunction(num);

    console.log(`The number ${num} is a EvenNumber ${checkNum}`);
}

check(isEven, 24);