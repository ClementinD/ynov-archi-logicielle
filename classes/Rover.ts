import { Orientation } from "../enums/Orientation";
import { Position } from "../classes/Position";
import { IRover } from "../interfaces/IRover";
import { Map } from "../classes/Map";

export class Rover implements IRover {
  constructor(
    public orientation: Orientation,
    public position: Position,
    public map: Map
  ) {}

  TournerADroite(): void {
    this.orientation = Orientation.East;
  }

  TournerAGauche(): void {
    this.orientation = Orientation.West;
  }

  Avancer(): IRover {
    const newPosition = { ...this.position };

    switch (this.orientation) {
      case Orientation.North:
        newPosition.y = (newPosition.y + 1) % this.map.y;
        break;
      case Orientation.South:
        newPosition.y = (newPosition.y - 1 + this.map.y) % this.map.y;
        break;
      case Orientation.East:
        newPosition.x = (newPosition.x + 1) % this.map.x;
        break;
      case Orientation.West:
        newPosition.x = (newPosition.x - 1 + this.map.x) % this.map.x;
        break;
      default:
        break;
    }

    return new Rover(this.orientation, newPosition, this.map);
  }

  Reculer(): IRover {
    const newPosition = { ...this.position };

    switch (this.orientation) {
      case Orientation.North:
        newPosition.y = (newPosition.y - 1 + this.map.y) % this.map.y;
        break;
      case Orientation.South:
        newPosition.y = (newPosition.y + 1) % this.map.y;
        break;
      case Orientation.East:
        newPosition.x = (newPosition.x - 1 + this.map.x) % this.map.x;
        break;
      case Orientation.West:
        newPosition.x = (newPosition.x + 1) % this.map.x;
        break;
      default:
        break;
    }

    return new Rover(this.orientation, newPosition, this.map);
  }

  getPosition(): Position {
    return this.position;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }
}
