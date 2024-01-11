import { Orientation } from "../classes/Orientation";
import { Position } from "../classes/Position";
import { IRover } from "../interfaces/IRover";
import { Map } from "../classes/Map";
import { Deplacement } from "../classes/Deplacement";

export class Rover implements IRover {
  public gestionDeplacement: Deplacement;

  public orientation: Orientation;
  public position: Position;

  constructor(orientation: Orientation, position: Position, map: Map, obstacles: Position[]) {
    this.orientation = orientation;
    this.position = position;
    this.gestionDeplacement = new Deplacement(this, map, obstacles);
  }

  TournerADroite(): void {
    this.gestionDeplacement.TournerADroite();
    this.orientation = this.gestionDeplacement.getOrientation();
  }

  TournerAGauche(): void {
    this.gestionDeplacement.TournerAGauche();
    this.orientation = this.gestionDeplacement.getOrientation();
  }

  Avancer(): void {
    this.gestionDeplacement.Avancer();
    this.mettreAJourEtat();
  }

  Reculer(): void {
    this.gestionDeplacement.Reculer();
    this.mettreAJourEtat();
  }

  private mettreAJourEtat(): void {
    this.position = this.gestionDeplacement.getPosition();
    this.orientation = this.gestionDeplacement.getOrientation();
  }
}
