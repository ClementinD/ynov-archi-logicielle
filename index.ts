import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Position } from "./classes/Position";
import { Map } from "./classes/Map";
import { Interpreter } from "./classes/Interpreter";
import { Entier } from "./classes/Entier";

const map = new Map(new Entier(4), new Entier(4));

// Définir les positions des obstacles
const obstaclesPositions = [new Position(new Entier(3), new Entier(1))]; // Remplacer par les positions réelles des obstacles

// Créer une nouvelle instance de Rover en passant les obstacles comme quatrième argument
const rover = new Rover(Orientation.South, new Position(new Entier(0), new Entier(0)), map, obstaclesPositions);

const commandes = ["A", "D", "R", "DAGADRGAAADR"];

const interpreter = new Interpreter(rover);

commandes.forEach((commande) => {
  interpreter.interpretCommand(commande);
});
