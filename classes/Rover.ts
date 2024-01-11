import { IRover } from "../interfaces/IRover";
import { IDeplacement } from "../interfaces/IDeplacement";
import { Deplacement } from "./Deplacement";

export class Rover implements IRover {
  private deplacement: Deplacement;

  public get orientation() {
    return this.deplacement.getOrientation();
  }

  public get position() {
    return this.deplacement.getPosition();
  }

  constructor(deplacement: Deplacement) {
    this.deplacement = deplacement;
  }

  Avancer(): void {
    this.deplacement.avancer();
  }

  Reculer(): void {
    this.deplacement.reculer();
  }

  TournerADroite(): void {
    this.deplacement.tournerADroite();
  }

  TournerAGauche(): void {
    this.deplacement.tournerAGauche();
  }
}
