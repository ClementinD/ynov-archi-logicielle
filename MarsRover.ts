// Define the size of the planet (toroid)
const planetSizeX = 10;
const planetSizeY = 10;
export class MarsRover {
  private x: number;
  private y: number;
  private orientation: string;

  constructor(x: number, y: number, orientation: string) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  moveForward() {
    switch (this.orientation) {
      case "N":
        this.y = (this.y + 1) % planetSizeY;
        break;
      case "S":
        this.y = (this.y - 1 + planetSizeY) % planetSizeY;
        break;
      case "E":
        this.x = (this.x + 1) % planetSizeX;
        break;
      case "W":
        this.x = (this.x - 1 + planetSizeX) % planetSizeX;
        break;
    }
  }

  moveBackward() {
    // Implement the logic for moving backward based on the current orientation
    switch (this.orientation) {
      case "N":
        this.y = (this.y - 1 + planetSizeY) % planetSizeY;
        break;
      case "S":
        this.y = (this.y + 1) % planetSizeY;
        break;
      case "E":
        this.x = (this.x - 1 + planetSizeX) % planetSizeX;
        break;
      case "W":
        this.x = (this.x + 1) % planetSizeX;
        break;
    }
  }

  turnLeft() {
    // Implement the logic for turning left (rotate 90 degrees counterclockwise)
    switch (this.orientation) {
      case "N":
        this.orientation = "W";
        break;
      case "S":
        this.orientation = "E";
        break;
      case "E":
        this.orientation = "N";
        break;
      case "W":
        this.orientation = "S";
        break;
    }
  }

  turnRight() {
    // Implement the logic for turning right (rotate 90 degrees clockwise)
    switch (this.orientation) {
      case "N":
        this.orientation = "E";
        break;
      case "S":
        this.orientation = "W";
        break;
      case "E":
        this.orientation = "S";
        break;
      case "W":
        this.orientation = "N";
        break;
    }
  }

  getState() {
    return `(${this.x}, ${this.y}), Orientation: ${this.orientation}`;
  }
}
