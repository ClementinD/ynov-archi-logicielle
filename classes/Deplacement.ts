import { Position } from "../classes/Position";
import { Map } from "../classes/Map";
import { Entier } from "./Entier";
import { Orientation } from "./Orientation";
import { IDeplacement } from "../interfaces/IDeplacement"
import { IGestionObstacle } from "../interfaces/IGestionObstacles";

export class Deplacement implements IDeplacement {
  private position: Position;
  private orientation: Orientation;
  private readonly map: Map;
  private gestionObstacle: IGestionObstacle;

  constructor(orientation: Orientation, position: Position, map: Map, gestionObstacle: IGestionObstacle) {
    this.orientation = orientation;
    this.position = position;
    this.map = map;
    this.gestionObstacle = gestionObstacle;
  }

  private detecterObstacleAndUpdatePosition(nextPosition: Position): boolean {
    if (this.gestionObstacle.detecterObstacle(nextPosition)) {
      this.contournerObstacle();
      return true;
    }
    this.position = this.map.getToroidalCoordinates(nextPosition);
    return false;
  }

  private contournerObstacle(): void {
    this.tournerADroite();
    this.avancer();
  }

  tournerADroite(): void {
    this.orientation = this.orientation.orientationSuivante();
  }

  tournerAGauche(): void {
    this.orientation = this.orientation.orientationPrecedente();
  }

  avancer(): void {
    let deplacement;
    switch (this.orientation.toString()) {
      case "NORTH":
        deplacement = { x: 0, y: -1 };
        break;
      case "SOUTH":
        deplacement = { x: 0, y: 1 };
        break;
      case "EAST":
        deplacement = { x: 1, y: 0 };
        break;
      case "WEST":
        deplacement = { x: -1, y: 0 };
        break;
      default:
        throw new Error("Orientation inconnue");
    }
    const nextPosition = Position.deplacer(this.position, new Entier(deplacement.x), new Entier(deplacement.y), this.map.x, this.map.y);
    this.detecterObstacleAndUpdatePosition(nextPosition);
  }
  
  reculer(): void {
    let deplacement;
    switch (this.orientation.toString()) {
      case "NORTH":
        deplacement = { x: 0, y: 1 };
        break;
      case "SOUTH":
        deplacement = { x: 0, y: -1 };
        break;
      case "EAST":
        deplacement = { x: -1, y: 0 };
        break;
      case "WEST":
        deplacement = { x: 1, y: 0 };
        break;
      default:
        throw new Error("Orientation inconnue");
    }
    const nextPosition = Position.deplacer(this.position, new Entier(-deplacement.x), new Entier(-deplacement.y), this.map.x, this.map.y);
    this.detecterObstacleAndUpdatePosition(nextPosition);
  }
  
  getPosition(): Position {
    return this.position;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }
}
