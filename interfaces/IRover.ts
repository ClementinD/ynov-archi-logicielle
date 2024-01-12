import { Position } from "../Topologie/Position";
import { Orientation } from "../Topologie/Orientation";

export interface IRover {
  orientation: Orientation;
  position: Position;

  TournerADroite(): void;
  TournerAGauche(): void;
  Avancer(): void;
  Reculer(): void;
}
