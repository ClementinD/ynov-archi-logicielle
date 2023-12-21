import { Point } from "./classes/Point";

const point1 = new Point(1, 2);
const point2 = new Point(4, 6);

const distance = point1.calculateDistance(point2);
console.log("Distance :", distance);
