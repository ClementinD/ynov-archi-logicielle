import { MarsRover } from "./MarsRover";

const rover = new MarsRover(1, 1, 'N');
rover.moveForward();
rover.turnRight();
rover.moveBackward();
rover.turnRight();
rover.moveForward();
rover.turnRight();
rover.moveForward()
console.log(rover.getState()); 


function sayHello(): void {
  console.log("Hello, World!");
}



sayHello();