import { Position } from "../classes/Position";
import { Orientation } from "../classes/Orientation";

export interface IRover {
  orientation: Orientation;
  position: Position;

  TournerADroite(): void;
  TournerAGauche(): void;
  Avancer(): void;
  Reculer(): void;
}
