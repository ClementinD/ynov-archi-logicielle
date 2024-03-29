export class Orientation {
  static readonly North = new Orientation("NORTH");
  static readonly South = new Orientation("SOUTH");
  static readonly East = new Orientation("EAST");
  static readonly West = new Orientation("WEST");

  private static readonly orientations = [
    Orientation.North,
    Orientation.South,
    Orientation.East,
    Orientation.West,
  ];

  constructor(private value: string) {}

  toString(): string {
    return this.value;
  }

  // Méthode pour obtenir l'orientation suivante
  orientationSuivante(): Orientation {
    const currentIndex = Orientation.orientations.indexOf(this);
    const nextIndex = (currentIndex + 1) % Orientation.orientations.length;
    return Orientation.orientations[nextIndex];
  }

  // Méthode pour obtenir l'orientation précédente
  orientationPrecedente(): Orientation {
    const currentIndex = Orientation.orientations.indexOf(this);
    const previousIndex =
      (currentIndex - 1 + Orientation.orientations.length) %
      Orientation.orientations.length;
    return Orientation.orientations[previousIndex];
  }

  // Méthode pour obtenir l'orientation actuelle du rover
  getOrientation(): string {
    return this.toString();
  }
}
