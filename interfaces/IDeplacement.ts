import { Position } from "../Topologie/Position";
import { Orientation } from "../Topologie/Orientation";

export interface IDeplacement {
  avancer(): void;
  reculer(): void;
  tournerADroite(): void;
  tournerAGauche(): void;
  getPosition(): Position;
  getOrientation(): Orientation;
}
