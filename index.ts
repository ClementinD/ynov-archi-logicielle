import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Position } from "./classes/Position";
import { Map } from "./classes/Map";

const map = new Map(4, 4);

const rover = new Rover(Orientation.South, new Position(0, 0), map);

rover.Avancer();
rover.TournerADroite();
console.log(rover.position.getPosition());
console.log(rover.orientation.getOrientation());
rover.Reculer();
console.log(rover.position.getPosition());
console.log(rover.orientation.getOrientation());
rover.TournerADroite();
console.log(rover.position.getPosition());
console.log(rover.orientation.getOrientation());
rover.Avancer();
console.log(rover.position.getPosition());
console.log(rover.orientation.getOrientation());
rover.TournerADroite();
rover.Avancer();
console.log(rover.position.getPosition());
