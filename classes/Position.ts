import { IPosition } from "../interfaces/IPosition";

export class Position implements IPosition {
  constructor(public x: number, public y: number) {}
}
