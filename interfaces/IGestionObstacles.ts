import { Position } from "../classes/Position";

export interface IGestionObstacle {
  detecterObstacle(position: Position): boolean;
}
