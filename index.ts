import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Position } from "./classes/Position";
import { Map } from "./classes/Map";
import { Interpreter } from "./classes/Interpreter";
import { Entier } from "./classes/Entier";
import { Obstacle } from "./classes/Obstacle";
import { GestionObstacles } from "./classes/GestionObstacles";
import { Deplacement } from "./classes/Deplacement";

// Initialisation de la carte avec une taille de 4x4
const map = new Map(new Entier(6), new Entier(6));
// Définir les positions des obstacles
const obstaclesPositions = [new Position(new Entier(0), new Entier(4)), new Position(new Entier(5), new Entier(4)), new Position(new Entier(1), new Entier(3)), new Position(new Entier(4), new Entier(3))];

// Convertir les positions d'obstacles en instances de Obstacle
const obstacles = obstaclesPositions.map(pos => new Obstacle(pos));
const gestionObstacles = new GestionObstacles(obstacles);

// Créer une instance de Deplacement
const orientationInitiale = new Orientation("NORTH"); // ou une autre orientation si nécessaire
const positionInitiale = new Position(new Entier(0), new Entier(0)); // ou une autre position si nécessaire
const deplacement = new Deplacement(orientationInitiale, positionInitiale, map, gestionObstacles);

// Créer une nouvelle instance de Rover
const rover = new Rover(deplacement);
// Créer une nouvelle instance d'Interpreter
const interpreter = new Interpreter(map, obstaclesPositions);

const commandes = ["ARDDDAAAA", "AAADR"];
commandes.forEach((commande) => {
  interpreter.interpretCommand(commande);
});
