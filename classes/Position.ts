import { IPosition } from "../interfaces/IPosition";

export class Position implements IPosition {
  [x: string]: any;
  constructor(public x: number, public y: number) {}

  static deplacer(position: Position, distanceX: number, distanceY: number, mapX: number, mapY: number): Position {
    // Calcul des nouvelles coordonnées en prenant en compte la toroïdalité
    const newPosition = {
      x: (position.x + distanceX + mapX) % mapX,
      y: (position.y + distanceY + mapY) % mapY,
    };
    return new Position(newPosition.x, newPosition.y);
  }

  // Méthode pour obtenir les coordonnées actuelles du rover
  getPosition(): IPosition {
    return { x: this.x, y: this.y };
  }

  // Ajoutez cette méthode à la classe Position
  equals(other: Position): boolean {
    return this.x === other.x && this.y === other.y;
  }
}
