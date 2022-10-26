// Encapsulation means binding of all the data members into single unit and does not expose to outside world

class MotorBike{
    constructor(_name, topSpeed){
        let name = _name;
        this.topSpeed = topSpeed;

        this.getName = ()=>{
            console.log(name)
            return name
        }
    }
}

   


let motorBike = new MotorBike('Yahama', 250);

motorBike.name = 'Duke' // outside world can change the property of the class inorder to hide we use data encapsulation.

motorBike.getName();
console.log(motorBike);
motorBike.getName();

console.log(motorBike.name)