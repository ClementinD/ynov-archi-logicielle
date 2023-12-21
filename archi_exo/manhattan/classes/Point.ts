export class Point {
  constructor(private readonly x: number, private readonly y: number) {}

  calculateDistance(destination: Point): number {
    return Math.abs(this.x - destination.x) + Math.abs(this.y - destination.y);
  }
}
