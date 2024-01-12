import { Position } from "./Position";

export class ObstacleDetecteException {
  constructor(nextPosition: Position) {
    console.error(`\n--> Obstacle détecté! Le rover contourne l'obstacle.\nPosition de l'obstacle: (${nextPosition.x.currentValue()}, ${nextPosition.y.currentValue()})\n`);
  }
}
