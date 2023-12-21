import { Position } from "../classes/Position";

export interface IMap {
  x: number;
  y: number;
  getSize(): { x: number; y: number };
  getToroidalCoordinates(position: Position): { x: number; y: number };
}
