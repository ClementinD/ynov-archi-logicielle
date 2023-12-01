import { Rover } from "../classes/Rover";
import { Orientation } from "../classes/Orientation";
import { Map } from "../classes/Map";

describe("Rover", () => {
  let map: Map;
  let rover: Rover;

  beforeEach(() => {
    // Initialisation de la carte avec une taille de 4x4
    map = new Map(4, 4);
    // Initialisation du rover avec une orientation vers le sud, positionné en (0, 0) sur la carte
    rover = new Rover(Orientation.South, { x: 0, y: 0 }, map);
  });

  // Test pour vérifier le déplacement vers l'avant (Avancer)
  test("should move front", () => {
    // Action : Appel de la méthode Avancer du rover
    rover.Avancer();
    // Vérification : La position du rover devrait être (0, 1) sur la carte
    expect(rover.getPosition()).toEqual({ x: 0, y: 1 });
  });

  // Test pour vérifier le déplacement vers l'arrière (Reculer)
  test("should move backward", () => {
    // Action : Appel de la méthode Reculer du rover
    rover.Reculer();
    // Vérification : La position du rover devrait être (0, 3) sur la carte, en considérant la toroïdalité
    expect(rover.getPosition()).toEqual({ x: 0, y: map.y - 1 });
  });

  // Test pour vérifier la rotation vers la droite (TournerADroite)
  test("should rotate right", () => {
    // Action : Appel de la méthode TournerADroite du rover
    rover.TournerADroite();
    // Vérification : L'orientation du rover devrait être à l'ouest (WEST)
		expect(rover.getOrientation().toString()).toEqual("EAST");
  });

  // Test pour vérifier la rotation vers la gauche (TournerAGauche)
  test("should rotate left", () => {
    // Action : Appel de la méthode TournerAGauche du rover
    rover.TournerAGauche();
    // Vérification : L'orientation du rover devrait être à l'est (EAST)
		expect(rover.getOrientation().toString()).toEqual("NORTH");
  });
});
