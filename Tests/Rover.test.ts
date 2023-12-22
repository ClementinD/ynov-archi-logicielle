import { Rover } from "../classes/Rover";
import { Orientation } from "../classes/Orientation";
import { Position } from "../classes/Position";
import { Map } from "../classes/Map";
import { Interpreter } from "../classes/Interpreter";

describe("Rover", () => {
  let map: Map;
  let obstaclesPositions;
  let rover: Rover;
  let interpreter: Interpreter;

  beforeEach(() => {
    // Initialisation de la carte avec une taille de 4x4
    map = new Map(4, 4);
    // Définir les positions des obstacles
    obstaclesPositions = [new Position(2, 1)];
    // Créer une nouvelle instance de Rover en passant les obstacles comme quatrième argument
    rover = new Rover(Orientation.South, new Position(0, 0), map, obstaclesPositions);
    interpreter = new Interpreter(rover);
  });

  // Test pour vérifier le déplacement vers l'avant (Avancer)
  test("should move front", () => {
    // Action : Appel de la méthode Avancer du rover
    rover.Avancer();
    // Vérification : La position du rover devrait être (0, 1) sur la carte
    expect(rover.position.getPosition()).toEqual({ x: 0, y: 1 });
  });

  // Test pour vérifier le déplacement vers l'arrière (Reculer)
  test("should move backward", () => {
    // Action : Appel de la méthode Reculer du rover
    rover.Reculer();
    // Vérification : La position du rover devrait être (0, 3) sur la carte, en considérant la toroïdalité
    expect(rover.position.getPosition()).toEqual({ x: 0, y: map.y - 1 });
  });

  // Test pour vérifier la rotation vers la droite (TournerADroite)
  test("should rotate right", () => {
    // Action : Appel de la méthode TournerADroite du rover
    rover.TournerADroite();
    // Vérification : L'orientation du rover devrait être à l'ouest (WEST)
		expect(rover.orientation.getOrientation().toString()).toEqual("EAST");
  });

  // Test pour vérifier la rotation vers la gauche (TournerAGauche)
  test("should rotate left", () => {
    // Action : Appel de la méthode TournerAGauche du rover
    rover.TournerAGauche();
    // Vérification : L'orientation du rover devrait être à l'est (EAST)
		expect(rover.orientation.getOrientation().toString()).toEqual("NORTH");
  });

  // Test pour vérifier le comportement après une série de commandes
  test("should follow command sequence and barrier", () => {
    const commandes = ["A", "D", "R", "D", "A", "D", "A"];
    commandes.forEach((commande) => {
      interpreter.interpretCommand(commande);
    });

    // Vérifiez la position et l'orientation finale du rover
    // La position et l'orientation exactes dépendent de la séquence des commandes et de la logique de déplacement
    expect(rover.getPosition()).toEqual(new Position(3, 0));
    expect(rover.getOrientation().toString()).toEqual("NORTH");
  });

  // Test pour vérifier le comportement après une série de commandes
  test("should follow double chars command sequence and barrier", () => {
    const commandes = ["AA", "D", "R", "DA", "A", "D", "A"];
    commandes.forEach((commande) => {
      interpreter.interpretCommand(commande);
    });

    // Vérifiez la position et l'orientation finale du rover
    // La position et l'orientation exactes dépendent de la séquence des commandes et de la logique de déplacement
    expect(rover.getPosition()).toEqual(new Position(1, 1));
    expect(rover.getOrientation().toString()).toEqual("NORTH");
  });
});
