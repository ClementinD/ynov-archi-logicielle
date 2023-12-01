export interface IMap {
  x: number;
  y: number;
  getSize(): { x: number; y: number };
  getToroidalCoordinates(x: number, y: number): { x: number; y: number };
}
