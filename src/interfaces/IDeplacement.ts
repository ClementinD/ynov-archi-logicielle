import { Position } from "../classes/Position";
import { Orientation } from "../classes/Orientation";

export interface IDeplacement {
  avancer(): void;
  reculer(): void;
  tournerADroite(): void;
  tournerAGauche(): void;
  getPosition(): Position;
  getOrientation(): Orientation;
}