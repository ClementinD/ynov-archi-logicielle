import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Map } from "./classes/Map";

const map = new Map(4, 4);

const rover = new Rover(Orientation.South, { x: 0, y: 0 }, map);

rover.Avancer();
rover.TournerADroite();
console.log(rover.getPosition());
console.log(rover.getOrientation());
rover.Reculer();
console.log(rover.getPosition());
console.log(rover.getOrientation());
rover.TournerADroite();
console.log(rover.getPosition());
console.log(rover.getOrientation());
rover.Avancer();
console.log(rover.getPosition());
console.log(rover.getOrientation());
rover.TournerADroite();
rover.Avancer();
console.log(rover.getPosition());
