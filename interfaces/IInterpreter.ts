import { Rover } from "../classes/Rover";

export interface IInterpreter {
  rover: Rover;
  interpretCommand(command: string): void;
}
