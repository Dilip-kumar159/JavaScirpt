// Constructor Functions

function createCar(name, topSpeed, color){
    this.name = name
    this.topSpeed = topSpeed
    this.color = color

    this.drive = function(){
        console.log(`I'm Driving ${this.name} car with topSpeed of ${this.topSpeed} 
        and color is ${this.color}`)
    }
}

let car1 = new createCar('BMW', 350, 'Red');
console.log(car1);
car1.drive();

let car2 = new createCar('Range Rover', 300, 'Black');
console.log(car2);
car2.drive();