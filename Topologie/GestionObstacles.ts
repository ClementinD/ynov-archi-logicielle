// GestionObstacles.ts
import { IGestionObstacle } from "../interfaces/IGestionObstacles";
import { Position } from "./Position";
import { ObstacleDetecteException } from "./ObstacleDetecteException";
import { Entier } from "./Entier";

export class GestionObstacles implements IGestionObstacle {
  private obstacles = [
    new Position(new Entier(0), new Entier(4)),
    new Position(new Entier(5), new Entier(4)),
    new Position(new Entier(1), new Entier(3)),
    new Position(new Entier(4), new Entier(3)),
  ];

  detecterObstacle(position: Position): boolean {
    let obstacleTrouve = false;
  
    this.obstacles.forEach(obstacle => {
      obstacle.equals(position, () => {
        new ObstacleDetecteException(position);
        obstacleTrouve = true;
      });
    });
  
    return obstacleTrouve;
  }
}
