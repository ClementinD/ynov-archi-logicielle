import { IMap } from "../interfaces/IMaps";

export class Map implements IMap {
  constructor(public x: number, public y: number) {}

  getSize(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  // Ajoutez une méthode pour obtenir les coordonnées toroïdales
  getToroidalCoordinates(x: number, y: number): { x: number; y: number } {
    return {
      x: (x + this.x) % this.x,
      y: (y + this.y) % this.y,
    };
  }
}
