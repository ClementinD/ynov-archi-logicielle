import { Rover } from "./Rover";
import { Position } from "../classes/Position";
import { Map } from "../classes/Map";
import { Obstacle } from "./Obstacle";
import { Entier } from "./Entier";
import { ObstacleDetecteException } from "./ObstacleDetecteException";
import { Orientation } from "./Orientation";

export class Deplacement {
  private readonly rover: Rover;
  private readonly map: Map;
  private readonly obstacles: Obstacle[];

  constructor(rover: Rover, map: Map, obstacles: Position[]) {
    this.rover = rover;
    this.map = map;
    this.obstacles = obstacles.map(obstaclePosition => new Obstacle(obstaclePosition));
  }

  private detecterObstacleAndUpdatePosition(nextPosition: Position) {
    this.obstacles.forEach(obstacle => {
      obstacle.position.equals(nextPosition, () => {
        throw new ObstacleDetecteException(nextPosition);
      });
    });
    this.rover.position = this.map.getToroidalCoordinates(nextPosition);
  }

  TournerADroite(): void {
    this.rover.orientation = this.rover.orientation.orientationSuivante();
  }

  TournerAGauche(): void {
    this.rover.orientation = this.rover.orientation.orientationPrecedente();
  }

  Avancer(): void {
    const deplacement = { x: 0, y: -1 };
    const nextPosition = Position.deplacer(this.rover.position, new Entier(deplacement.x), new Entier(deplacement.y), this.map.x, this.map.y);
    this.detecterObstacleAndUpdatePosition(nextPosition);
  }

  Reculer(): void {
    const deplacement = { x: 0, y: 1 };
    const nextPosition = Position.deplacer(this.rover.position, new Entier(-deplacement.x), new Entier(-deplacement.y), this.map.x, this.map.y);
    this.detecterObstacleAndUpdatePosition(nextPosition);
  }

  getPosition(): Position {
    return this.rover.position;
  }

  getOrientation(): Orientation {
    return this.rover.orientation;
  }
}
