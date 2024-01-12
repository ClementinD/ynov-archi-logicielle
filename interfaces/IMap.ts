import { Entier } from "../Topologie/Entier";
import { Position } from "../Topologie/Position";

export interface IMap {
  x: Entier;
  y: Entier;
  getSize(): { x: Entier; y: Entier };
  getToroidalCoordinates(position: Position): { x: Entier; y: Entier };
}
