import { Position } from "../classes/Position";

export interface IRover {
  orientation: string;
  position: Position;

  TournerADroite(): void;
  TournerAGauche(): void;
  Avancer(): void;
  Reculer(): void;
  getPosition(): Position;
}
