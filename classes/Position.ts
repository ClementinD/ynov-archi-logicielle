export class Position {
  [x: string]: any;
  constructor(public x: number, public y: number) {}

  static deplacer(
    position: Position,
    distanceX: number,
    distanceY: number,
    mapX: number,
    mapY: number
  ): Position {
    // Fonction pour gérer correctement le modulo avec des nombres négatifs
    function mod(n: number, m: number): number {
      return ((n % m) + m) % m;
    }

    // Calcul des nouvelles coordonnées en prenant en compte la toroïdalité
    const newPosition = {
      x: mod(position.x + distanceX, mapX),
      y: mod(position.y + distanceY, mapY),
    };
    return new Position(newPosition.x, newPosition.y);
  }

  // Méthode pour obtenir les coordonnées actuelles du rover
  getPosition(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  // Ajoutez cette méthode à la classe Position
  equals(other: Position): boolean {
    return this.x === other.x && this.y === other.y;
  }
}
