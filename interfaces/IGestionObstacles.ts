import { Position } from "../Topologie/Position";

export interface IGestionObstacle {
  detecterObstacle(position: Position): boolean;
}
