import { Position } from "../classes/Position";
import { IInterpreter } from "../interfaces/IInterpreter";
import { Rover } from "./Rover";

export class Interpreter implements IInterpreter {
  constructor(public rover: Rover) {}

  interpretCommand(command: string): void {
    switch (command) {
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
    console.log(this.rover.getPosition(), this.rover.getOrientation());
  }
}
