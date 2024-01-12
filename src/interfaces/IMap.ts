import { Entier } from "../classes/Entier";
import { Position } from "../classes/Position";

export interface IMap {
  x: Entier;
  y: Entier;
  getSize(): { x: Entier; y: Entier };
  getToroidalCoordinates(position: Position): { x: Entier; y: Entier };
}
