import { Rover } from "./classes/Rover";
import { Orientation } from "./enums/Orientation";
import { Map } from "./classes/Map";

const map: Map = {
  x: 4,
  y: 4,
  getSize: function (): { x: number; y: number } {
    return { x: this.x, y: this.y };
  },
	getToroidalCoordinates: function (x: number, y: number): { x: number; y: number } {
    return {
      x: (x + this.x) % this.x,
      y: (y + this.y) % this.y,
    };
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
