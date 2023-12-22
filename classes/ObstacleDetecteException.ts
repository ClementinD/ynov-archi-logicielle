import { Position } from "./Position";

export class ObstacleDetecteException {
  constructor(nextPosition: Position) {
    console.error(`--> Obstacle détecté! Arrêt du rover. Position de l'obstacle: (${nextPosition.x.currentValue()}, ${nextPosition.y.currentValue()})`);
  }
}
