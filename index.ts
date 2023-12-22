import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Position } from "./classes/Position";
import { Map } from "./classes/Map";
import { Interpreter } from "./classes/Interpreter";

const map = new Map(4, 4);

// Définir les positions des obstacles
const obstaclesPositions = [new Position(2, 1)]; // Remplacer par les positions réelles des obstacles

// Créer une nouvelle instance de Rover en passant les obstacles comme quatrième argument
const rover = new Rover(Orientation.South, new Position(0, 0), map, obstaclesPositions);

const commandes = ["A", "D", "R", "DAGADRGAAADR"];

const interpreter = new Interpreter(rover);

commandes.forEach((commande) => {
  interpreter.interpretCommand(commande);
});
