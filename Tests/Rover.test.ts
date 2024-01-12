import { Rover } from "../classes/Rover";
import { Orientation } from "../Topologie/Orientation";
import { Position } from "../Topologie/Position";
import { Map } from "../Topologie/Map";
import { Interpreter } from "../Topologie/Interpreter";
import { Entier } from "../Topologie/Entier";
import { GestionObstacles } from "../Topologie/GestionObstacles";
import { Obstacle } from "../Topologie/Obstacle";
import { Deplacement } from "../Topologie/Deplacement";

describe("Rover", () => {
  let map: Map;
  let obstaclesPositions: Position[];
  let rover: Rover;
  let interpreter: Interpreter;

  beforeEach(() => {
    // Initialisation de la carte avec une taille de 4x4
    map = new Map(new Entier(6), new Entier(6));
    // Définir les positions des obstacles
    obstaclesPositions = [new Position(new Entier(5), new Entier(4))];

    // Convertir les positions d'obstacles en instances de Obstacle
    const obstacles = obstaclesPositions.map((pos) => new Obstacle(pos));
    const gestionObstacles = new GestionObstacles(obstacles);

    // Créer une instance de Deplacement
    const orientationInitiale = new Orientation("NORTH");
    const positionInitiale = new Position(new Entier(0), new Entier(0));
    const deplacement = new Deplacement(
      orientationInitiale,
      positionInitiale,
      map,
      gestionObstacles
    );

    // Créer une nouvelle instance de Rover
    rover = new Rover(deplacement);
    // Créer une nouvelle instance d'Interpreter
    interpreter = new Interpreter(map, obstaclesPositions);
  });

  // Test pour vérifier le déplacement vers l'avant (Avancer)
  test("should move front", () => {
    // Action : Appel de la méthode Avancer du rover
    rover.Avancer();
    // Vérification : La position du rover devrait être (0, 1) sur la carte
    expect(rover.position.value()).toEqual({
      x: new Entier(0),
      y: new Entier(5),
    });
  });

  // Test pour vérifier le déplacement vers l'arrière (Reculer)
  test("should move backward", () => {
    // Action : Appel de la méthode Reculer du rover
    rover.Reculer();
    // Vérification : La position du rover devrait être (0, 3) sur la carte, en considérant la toroïdalité
    expect(rover.position.value()).toEqual({
      x: new Entier(0),
      y: new Entier(map.y.currentValue() - 1),
    });
  });

  // Test pour vérifier la rotation vers la droite (TournerADroite)
  test("should rotate right", () => {
    // Action : Appel de la méthode TournerADroite du rover
    rover.TournerADroite();
    // Vérification : L'orientation du rover devrait être à l'ouest (WEST)
    expect(rover.orientation.getOrientation().toString()).toEqual("NORTH");
  });

  // Test pour vérifier la rotation vers la gauche (TournerAGauche)
  test("should rotate left", () => {
    // Action : Appel de la méthode TournerAGauche du rover
    rover.TournerAGauche();
    // Vérification : L'orientation du rover devrait être à l'est (EAST)
    expect(rover.orientation.getOrientation().toString()).toEqual("EAST");
  });

  // Test pour vérifier le comportement après une série de commandes
  test("should follow command sequence", () => {
    const commandes = [
      "A",
      "A",
      "R",
      "D",
      "D",
      "D",
      "A",
      "A",
      "D",
      "A",
      "A",
      "A",
      "A",
      "A",
      "D",
      "R",
    ];
    commandes.forEach((commande) => {
      interpreter.interpretCommand(commande);
    });

    // Vérifiez la position et l'orientation finale du rover
    // La position et l'orientation exactes dépendent de la séquence des commandes et de la logique de déplacement
    expect(interpreter.rover.position.value()).toEqual({
      x: new Entier(3),
      y: new Entier(2),
    });
    expect(interpreter.rover.orientation.toString()).toEqual("NORTH");
  });

  // Test pour vérifier le comportement après une série de commandes
  test("should follow multiple chars command sequence", () => {
    const commandes = ["A", "AR", "D", "DDAADAA", "A", "AADR"];
    commandes.forEach((commande) => {
      interpreter.interpretCommand(commande);
    });

    // Vérifiez la position et l'orientation finale du rover
    // La position et l'orientation exactes dépendent de la séquence des commandes et de la logique de déplacement
    expect(interpreter.rover.position.value()).toEqual(
      new Position(new Entier(3), new Entier(2))
    );
    expect(interpreter.rover.orientation.getOrientation().toString()).toEqual(
      "NORTH"
    );
  });

  // Test pour vérifier le comportement avec la détection/contournement d'un obstacle
  test("should follow command sequence with 1 obstacle detection", () => {
    const commandes = ["ARDDDAAAA", "AAADR"];
    commandes.forEach((commande) => {
      interpreter.interpretCommand(commande);
    });

    // Vérifiez la position et l'orientation finale du rover
    // La position et l'orientation exactes dépendent de la séquence des commandes et de la logique de déplacement
    expect(interpreter.rover.position.value()).toEqual({
      x: new Entier(1),
      y: new Entier(3),
    });
    expect(interpreter.rover.orientation.toString()).toEqual("NORTH");
  });

  // Test pour vérifier le comportement avec la détection/contournement de plusieurs obstacles
  test("should follow command sequence with multiple obstacles detection", () => {
    // Modifier les positions des obstacles
    obstaclesPositions = [
      new Position(new Entier(0), new Entier(4)),
      new Position(new Entier(5), new Entier(4)),
      new Position(new Entier(1), new Entier(3)),
      new Position(new Entier(4), new Entier(3)),
    ];

    // Nouvelle configuration des obstacles
    const obstacles = obstaclesPositions.map((pos) => new Obstacle(pos));
    const gestionObstacles = new GestionObstacles(obstacles);

    // Recréer Deplacement et Rover avec la nouvelle configuration
    const orientationInitiale = new Orientation("NORTH");
    const positionInitiale = new Position(new Entier(0), new Entier(0));
    const deplacement = new Deplacement(
      orientationInitiale,
      positionInitiale,
      map,
      gestionObstacles
    );

    rover = new Rover(deplacement);

    // Recréer Interpreter avec le nouveau Rover
    interpreter = new Interpreter(map, obstaclesPositions);

    const commandes = ["ARDDDAAAA", "AAADR"];
    commandes.forEach((commande) => {
      interpreter.interpretCommand(commande);
    });

    // Vérifiez la position et l'orientation finale du rover
    // La position et l'orientation exactes dépendent de la séquence des commandes et de la logique de déplacement
    expect(interpreter.rover.position.value()).toEqual({
      x: new Entier(5),
      y: new Entier(3),
    });
    expect(interpreter.rover.orientation.toString()).toEqual("SOUTH");
  });
});
