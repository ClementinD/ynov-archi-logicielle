import { IMap } from "../interfaces/IMaps";
import { Position } from "../classes/Position";

// 
export class Map implements IMap {
  private obstacles: Position[];

   constructor(public x: number, public y: number, obstacles?: Position[]) {
    this.obstacles = obstacles || [];
  }

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

  // Méthode pour ajouter un obstacle à la carte
  addObstacle(obstacle: Position): void {
    this.obstacles.push(obstacle);
  }

  // Méthode pour vérifier si une position est un obstacle
  isObstacle(position: Position): {isPresent: boolean, obstacle?: Position} {
    const foundObstacle = this.obstacles.find(obstacle => obstacle.equals(position));
    if (foundObstacle) {
      // Retourner un objet contenant un booléen et l'obstacle
      return { isPresent: true, obstacle: foundObstacle };
    } else {
      // Retourner un objet indiquant qu'aucun obstacle n'est présent
      return { isPresent: false };
    }
  }
}
