import { Position } from "../classes/Position";
import { Map } from "./IMaps";

export interface IRover {
  orientation: string;
  position: Position;

  TournerADroite(): void;
  TournerAGauche(): void;
  Avancer(map: Map): IRover;
  Reculer(map: Map): IRover;
  getPosition(): Position;
}
