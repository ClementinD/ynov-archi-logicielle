import { Orientation } from "../enums/Orientation";
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
    [Orientation.North]: { x: 0, y: -1 },
    [Orientation.South]: { x: 0, y: 1 },
    [Orientation.East]: { x: 1, y: 0 },
    [Orientation.West]: { x: -1, y: 0 },
  };

  private changementsOrientationDroite = {
    [Orientation.North]: Orientation.East,
    [Orientation.South]: Orientation.West,
    [Orientation.East]: Orientation.South,
    [Orientation.West]: Orientation.North,
  };

  private changementsOrientationGauche = {
    [Orientation.North]: Orientation.West,
    [Orientation.South]: Orientation.East,
    [Orientation.East]: Orientation.North,
    [Orientation.West]: Orientation.South,
  };

  // Fonction privée pour déplacer le rover selon les distances spécifiées
  private deplacer(distanceX: number, distanceY: number): void {
    // Calcul des nouvelles coordonnées en prenant en compte la toroïdalité
    const newPosition = {
      x: (this.position.x + distanceX + this.map.x) % this.map.x,
      y: (this.position.y + distanceY + this.map.y) % this.map.y,
    };
    this.position = newPosition;
  }

  // Fonction privée pour ajuster les coordonnées selon la toroïdalité de la carte
  private toroidalCoordinates(): void {
    const toroidalCoords = this.map.getToroidalCoordinates(
      this.position.x,
      this.position.y
    );
    this.position.x = toroidalCoords.x;
    this.position.y = toroidalCoords.y;
  }

  // Méthode pour tourner le rover à droite
  TournerADroite(): void {
    this.orientation = this.changementsOrientationDroite[this.orientation];
  }

  // Méthode pour tourner le rover à gauche
  TournerAGauche(): void {
    this.orientation = this.changementsOrientationGauche[this.orientation];
  }

  // Méthode pour avancer le rover
  Avancer(): void {
    // Obtention du déplacement correspondant à l'orientation actuelle
    const deplacement = this.deplacements[this.orientation];
    // Application du déplacement et ajustement des coordonnées selon la toroïdalité
    this.deplacer(deplacement.x, deplacement.y);
    this.toroidalCoordinates();
  }

  // Méthode pour reculer le rover
  Reculer(): void {
    // Obtention du déplacement correspondant à l'orientation actuelle
    const deplacement = this.deplacements[this.orientation];
    // Application du déplacement inverse et ajustement des coordonnées selon la toroïdalité
    this.deplacer(-deplacement.x, -deplacement.y);
    this.toroidalCoordinates();
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
