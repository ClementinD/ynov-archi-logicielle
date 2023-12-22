import { Orientation } from "../classes/Orientation";
import { Position } from "../classes/Position";
import { IRover } from "../interfaces/IRover";
import { Map } from "../classes/Map";
import { Obstacle } from "./Obstacle";
import { Entier } from "./Entier";
import { ObstacleDetecteException } from "./ObstacleDetecteException";

export class Rover implements IRover {
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

  // Méthode pour vérifier s'il y a un obstacle et mettre à jour la position du rover
  private detecterObstacleAndUpdatePosition(nextPosition: Position) {
    this.obstacles.forEach(obstacle => {
      obstacle.position.equals(nextPosition, () => {
        throw new ObstacleDetecteException(nextPosition);
      });
    });

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
    try {
      const deplacement = this.deplacements[this.orientation.toString()];
      const nextPosition = Position.deplacer(this.position, new Entier(deplacement.x), new Entier(deplacement.y), this.map.x, this.map.y);
      this.detecterObstacleAndUpdatePosition(nextPosition);
    } catch (e) {}
  }

  // Méthode pour reculer le rover
  Reculer(): void {
    try {
      const deplacement = this.deplacements[this.orientation.toString()];
      const nextPosition = Position.deplacer(this.position, new Entier(-deplacement.x), new Entier(-deplacement.y), this.map.x, this.map.y);
      this.detecterObstacleAndUpdatePosition(nextPosition);
    } catch (e) {}
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
