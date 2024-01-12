// GestionObstacles.ts
import { IGestionObstacle } from "../interfaces/IGestionObstacles";
import { Position } from "./Position";
import { Obstacle } from "./Obstacle";
import { ObstacleDetecteException } from "./ObstacleDetecteException";

export class GestionObstacles implements IGestionObstacle {
  private obstacles: Obstacle[];

  constructor(obstacles: Obstacle[]) {
    this.obstacles = obstacles;
  }

  detecterObstacle(position: Position): boolean {
    let obstacleTrouve = false;
  
    this.obstacles.forEach(obstacle => {
      obstacle.position.equals(position, () => {
        new ObstacleDetecteException(position);
        obstacleTrouve = true;
      });
    });
  
    return obstacleTrouve;
  }
  

  /*detecterObstacle(position: Position): void {
    this.obstacles.forEach(obstacle => {
      obstacle.position.equals(position, () => {
        new ObstacleDetecteException(position);
      });
    });
  }*/
}
