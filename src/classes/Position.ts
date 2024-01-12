import { Entier } from "./Entier";

export class Position {
  constructor(public x: Entier, public y: Entier) {}

  static deplacer(
    position: Position,
    distanceX: Entier,
    distanceY: Entier,
    mapX: Entier,
    mapY: Entier
  ): Position {
    const newX = position.x.add(distanceX).modulo(mapX);
    const newY = position.y.add(distanceY).modulo(mapY);

    return new Position(newX, newY);
  }

  // Méthode pour obtenir les coordonnées actuelles du rover
  value(): { x: Entier; y: Entier } {
    return { x: this.x, y: this.y };
  }

  equals(other: Position, action: () => void): void {
    if (this.x.egalTo(other.x) && this.y.egalTo(other.y)) {
      action();
    }
  }
}
