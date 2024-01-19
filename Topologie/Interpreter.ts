import { Rover } from "../classes/Rover";
import { Map } from "./Map";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Entier } from "./Entier";
import { Deplacement } from "./Deplacement";
import { GestionObstacles } from "./GestionObstacles";

export class Interpreter {
  public rover: Rover;

  constructor(map: Map) {
    const orientationInitiale = new Orientation("NORTH");
    const positionInitiale = new Position(new Entier(0), new Entier(0));

    const gestionObstacle = new GestionObstacles();

    const deplacement = new Deplacement(
      orientationInitiale,
      positionInitiale,
      map,
      gestionObstacle
    );

    this.rover = new Rover(deplacement);
  }

  interpretCommand(command: string): void {
    console.log(command);
    for (const char of command) {
      switch (char) {
        case "A":
          this.rover.Avancer();
          break;
        case "R":
          this.rover.Reculer();
          break;
        case "D":
          this.rover.TournerADroite();
          break;
        case "G":
          this.rover.TournerAGauche();
          break;
        default:
          console.log("Commande inconnue : " + command);
          break;
      }
      console.log(this.rover.position);
    }
  }
}
