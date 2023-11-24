import { IMap } from "../interfaces/IMaps";

export class Map implements IMap {
  constructor(public x: number, public y: number) {}

  getSize(): { x: number; y: number } | null {
    return this;
  }
}
