import { IMap } from "../interfaces/IMaps";
import { Position } from "../classes/Position";

export class Map implements IMap {
  constructor(public x: number, public y: number) {}

  getSize(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  // Ajoutez une méthode pour obtenir les coordonnées toroïdales
  getToroidalCoordinates(position: Position): Position {
    return new Position(
      (position.x + this.x) % this.x,
      (position.y + this.y) % this.y
    );
  }
}
