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

  Avancer(): void {
    switch (this.orientation) {
      //haut
      case Orientation.North:
        this.position.y =
          this.position.y == this.map.y ? this.map.y - 1 : this.position.y + 1;
        break;
      //bas
      case Orientation.South:
        this.position.y = this.position.y == this.map.y ? 0 : this.map.y + 1;
        break;
      //droite
      case Orientation.East:
        this.position.x = this.position.x == this.map.x ? 0 : this.map.x + 1;
        break;
      //gauche
      case Orientation.West:
        this.position.x =
          this.position.x == 0 ? this.position.x - 1 : this.map.x - 1;
        break;
    }
  }

  Reculer(): void {
    switch (this.orientation) {
      //haut
      case Orientation.North:
        this.position.y = this.position.y == this.map.y ? 0 : this.map.y - 1;
        break;
      //bas
      case Orientation.South:
        this.position.y =
          this.position.y == 0 ? this.map.y - 1 : this.position.y - 1;
        break;
      //droite
      case Orientation.East:
        this.position.x =
          this.position.x - 1 < 0 ? this.map.x - 1 : this.position.x - 1;
        break;
      //gauche
      case Orientation.West:
        this.position.x =
          this.position.x - 1 < 0 ? this.map.x - 1 : this.position.x - 1;
        break;
    }
  }

  getPosition(): Position {
    return this.position;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }
}
