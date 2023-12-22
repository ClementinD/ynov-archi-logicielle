import { Rover } from "./classes/Rover";
import { Orientation } from "./classes/Orientation";
import { Position } from "./classes/Position";
import { Map } from "./classes/Map";
import { RoverInterpreter } from "./classes/RoverInterpreter";

// const map = new Map(4, 4);

// const rover = new Rover(Orientation.South, new Position(0, 0), map, new Position(5, 5));

// rover.Avancer();
// rover.TournerADroite();
// console.log(rover.position.getPosition());
// console.log(rover.orientation.getOrientation());
// rover.Reculer();
// console.log(rover.position.getPosition());
// console.log(rover.orientation.getOrientation());
// rover.TournerADroite();
// console.log(rover.position.getPosition());
// console.log(rover.orientation.getOrientation());
// rover.Avancer();
// console.log(rover.position.getPosition());
// console.log(rover.orientation.getOrientation());
// rover.TournerADroite();
// rover.Avancer();
// console.log(rover.position.getPosition());


// suite de commande & obstacles

const obstacles = [new Position(2, 1), new Position(3, 0)]; // Liste des obstacles
const map_1 = new Map(4, 4, obstacles);
const rover_1 = new  Rover(Orientation.South, new Position(0, 0), map_1);

// Instanciation de l'interpréteur avec le rover
const interpreter = new RoverInterpreter(rover_1);

// Liste des commandes à interpréter
const commandes = ['Avancer', 'TournerADroite', 'Reculer', 'TournerADroite', 'Avancer', 'TournerADroite', 'Avancer'];

// Exécution de la suite de commandes
interpreter.interpreterCommandes(commandes);