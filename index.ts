import { Rover } from "./classes/Rover";
import { Orientation } from "./enums/Orientation";
import { Map } from "./classes/Map";

const map: Map = {
  x: 4,
  y: 4,
  getSize: function (): { x: number; y: number } | null {
    throw new Error("Function not implemented.");
  },
};

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
