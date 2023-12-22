import { Orientation } from "../classes/Orientation";
import { Position } from "../classes/Position";
import { IRover } from "../interfaces/IRover";
import { Map } from "../classes/Map";
import { Obstacle } from "./Obstacle";

export class Rover implements IRover {
  [x: string]: any;
  public obstacles: Obstacle[];

  // Constructeur de la classe Rover
  constructor(
    public orientation: Orientation,
    public position: Position,
    public map: Map,
    obstacles: Position[]
  ) {
    this.obstacles = obstacles.map(obstaclePosition => new Obstacle(obstaclePosition));
  }

  // Objets de mapping pour les déplacements, les changements d'orientation à droite et à gauche
  private deplacements = {
    [Orientation.North.toString()]: { x: 0, y: -1 },
    [Orientation.South.toString()]: { x: 0, y: 1 },
    [Orientation.East.toString()]: { x: 1, y: 0 },
    [Orientation.West.toString()]: { x: -1, y: 0 },
  };

  // Méthode pour vérifier s'il y a un obstacle
  private detecterObstacleAndUpdatePosition(nextPosition: Position) {
    if (this.obstacles.some(obstacle => obstacle.position.equals(nextPosition))) {
      console.log("Obstacle détecté! Arrêt du rover.");
      console.log(`Position de l'obstacle: (${nextPosition.x}, ${nextPosition.y})`);
      return;
    }
    // Mise à jour de la position du rover avec nextPosition
    this.position = this.map.getToroidalCoordinates(nextPosition);
  }

  // Méthode pour tourner le rover à droite
  TournerADroite(): void {
    this.orientation = this.orientation.orientationSuivante();
  }

  // Méthode pour tourner le rover à gauche
  TournerAGauche(): void {
    this.orientation = this.orientation.orientationPrecedente();
  }

  // Méthode pour avancer le rover
  Avancer(): void {
    const deplacement = this.deplacements[this.orientation.toString()];
    const nextPosition = Position.deplacer(this.position, deplacement.x, deplacement.y, this.map.x, this.map.y);
    this.detecterObstacleAndUpdatePosition(nextPosition)
  }

  // Méthode pour reculer le rover
  Reculer(): void {
    const deplacement = this.deplacements[this.orientation.toString()];
    const nextPosition = Position.deplacer(this.position, -deplacement.x, -deplacement.y, this.map.x, this.map.y);
    this.detecterObstacleAndUpdatePosition(nextPosition)
  }

  // Méthode pour obtenir les coordonnées actuelles du rover
  getPosition(): Position {
    return this.position;
  }

  // Méthode pour obtenir l'orientation actuelle du rover
  getOrientation(): Orientation {
    return this.orientation;
  }
}
