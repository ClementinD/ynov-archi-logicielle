import { IMap } from "../interfaces/IMap";
import { Position } from "../classes/Position";
import { Entier } from "./Entier";

export class Map implements IMap {
  constructor(public x: Entier, public y: Entier) {}

  getSize(): { x: Entier; y: Entier } {
    return { x: this.x, y: this.y };
  }

  // Méthode pour obtenir les coordonnées toroïdales
  getToroidalCoordinates(position: Position): Position {
    const xToroidal = position.x.modulo(this.x);
    const yToroidal = position.y.modulo(this.y);

    return new Position(xToroidal, yToroidal);
  }
}
