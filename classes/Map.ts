import { IMap } from "../interfaces/IMap";
import { Position } from "../classes/Position";

export class Map implements IMap {
  constructor(public x: number, public y: number) {}

  getSize(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  // Méthode pour obtenir les coordonnées toroïdales
  getToroidalCoordinates(position: Position): Position {
    return new Position(
      (position.x + this.x) % this.x,
      (position.y + this.y) % this.y
    );
  }
}
