import { Orientation } from "../classes/Orientation";
import { Position } from "../classes/Position";
import { IRover } from "../interfaces/IRover";
import { Map } from "../classes/Map";

export class Rover implements IRover {
  // Constructeur de la classe Rover
  constructor(
    public orientation: Orientation,
    public position: Position,
    public map: Map
  ) {}

  // Objets de mapping pour les déplacements, les changements d'orientation à droite et à gauche
  private deplacements = {
    [Orientation.North.toString()]: { x: 0, y: -1 },
    [Orientation.South.toString()]: { x: 0, y: 1 },
    [Orientation.East.toString()]: { x: 1, y: 0 },
    [Orientation.West.toString()]: { x: -1, y: 0 },
  };

  // Fonction privée pour déplacer le rover selon les distances spécifiées
  private deplacer(distanceX: number, distanceY: number): void {
    this.position = Position.deplacer(this.position, distanceX, distanceY, this.map.x, this.map.y);
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
    // Obtention du déplacement correspondant à l'orientation actuelle
    const deplacement = this.deplacements[this.orientation.toString()];
    // Application du déplacement et ajustement des coordonnées selon la toroïdalité
    this.deplacer(deplacement.x, deplacement.y);
    this.position = this.map.getToroidalCoordinates(this.position);
  }

  // Méthode pour reculer le rover
  Reculer(): void {
    // Obtention du déplacement correspondant à l'orientation actuelle
    const deplacement = this.deplacements[this.orientation.toString()];
    // Application du déplacement inverse et ajustement des coordonnées selon la toroïdalité
    this.deplacer(-deplacement.x, -deplacement.y);
    this.position = this.map.getToroidalCoordinates(this.position);
  }
}
