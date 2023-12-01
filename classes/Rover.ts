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
    switch (this.orientation) {
      case Orientation.North:
        this.orientation = Orientation.East;
        break;
      case Orientation.South:
        this.orientation = Orientation.West;
        break;
      case Orientation.East:
        this.orientation = Orientation.South;
        break;
      case Orientation.West:
        this.orientation = Orientation.North;
        break;
    }
  }

  TournerAGauche(): void {
    switch (this.orientation) {
      case Orientation.North:
        this.orientation = Orientation.West;
        break;
      case Orientation.South:
        this.orientation = Orientation.East;
        break;
      case Orientation.East:
        this.orientation = Orientation.North;
        break;
      case Orientation.West:
        this.orientation = Orientation.South;
        break;
    }
  }

  Avancer(): void {
    switch (this.orientation) {
      case Orientation.North:
        this.position.y =
          this.position.y - 1 < 0 ? this.map.y - 1 : this.position.y - 1;
        break;
      case Orientation.South:
        this.position.y = (this.position.y + 1) % this.map.y;
        break;
      case Orientation.East:
        this.position.x = (this.position.x + 1) % this.map.x;
        break;
      case Orientation.West:
        this.position.x =
          this.position.x - 1 < 0 ? this.map.x - 1 : this.position.x - 1;
        break;
    }
    // Utilisez les coordonnées toroïdales après le déplacement
    const toroidalCoords = this.map.getToroidalCoordinates(
      this.position.x,
      this.position.y
    );
    this.position.x = toroidalCoords.x;
    this.position.y = toroidalCoords.y;
  }

  Reculer(): void {
    switch (this.orientation) {
      case Orientation.North:
        this.position.y = (this.position.y + 1) % this.map.y;
        break;
      case Orientation.South:
        this.position.y =
          this.position.y - 1 < 0 ? this.map.y - 1 : this.position.y - 1;
        break;
      case Orientation.East:
        this.position.x =
          this.position.x - 1 < 0 ? this.map.x - 1 : this.position.x - 1;
        break;
      case Orientation.West:
        this.position.x = (this.position.x + 1) % this.map.x;
        break;
    }
    // Utilisez les coordonnées toroïdales après le déplacement
    const toroidalCoords = this.map.getToroidalCoordinates(
      this.position.x,
      this.position.y
    );
    this.position.x = toroidalCoords.x;
    this.position.y = toroidalCoords.y;
  }

  getPosition(): Position {
    return this.position;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }
}
