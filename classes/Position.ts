import { IPosition } from "../interfaces/IPosition";

export class Position implements IPosition {
  constructor(public x: number, public y: number) {}

  static deplacer(position: Position, distanceX: number, distanceY: number, mapX: number, mapY: number): Position {
    // Calcul des nouvelles coordonnées en prenant en compte la toroïdalité
    const newPosition = {
      x: (position.x + distanceX + mapX) % mapX,
      y: (position.y + distanceY + mapY) % mapY,
    };
    return new Position(newPosition.x, newPosition.y);
  }
}
