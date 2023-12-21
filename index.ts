import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Position } from "./classes/Position";
import { Map } from "./classes/Map";
import { Interpreter } from "./classes/Interpreter";

const map = new Map(4, 4);

const rover = new Rover(Orientation.South, new Position(0, 0), map);

const commandes = ["A", "D", "R", "D", "A", "D", "A"];

const interpreter = new Interpreter(rover);

commandes.forEach((commande) => {
  interpreter.interpretCommand(commande);
});
