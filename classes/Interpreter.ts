import { Rover } from "./Rover";

export class Interpreter {
  constructor(public rover: Rover) {}

  interpretCommand(command: string): void {
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
      console.log(this.rover.getPosition(), this.rover.getOrientation());
    }
  }
}
