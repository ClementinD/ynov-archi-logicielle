import { MarsRover } from "./MarsRover";

const rover = new MarsRover(0, 0, 'N');
console.log(rover.getState()); // Output: "(0, 0), Orientation: N"
rover.turnLeft();
console.log(rover.getState());

rover.moveBackward();
console.log(rover.getState());

rover.turnLeft();
console.log(rover.getState());

function sayHello(): void {
  console.log("Hello, World!");
}



sayHello();