import { Orientation } from "../classes/Orientation";
import { Position } from "../classes/Position";
import { IRover } from "../interfaces/IRover";
import { Map } from "../classes/Map";

// objet valeur
export class Rover implements IRover {
  // Constructeur de la classe Rover
  constructor(
    public orientation: Orientation, // objet valeur
    public position: Position, // objet valeur
    public map: Map // objet valeur
  ) {}

  // Objets de mapping pour les déplacements, les changements d'orientation à droite et à gauche
  private deplacements = {
    [Orientation.North.toString()]: { x: 0, y: -1 },
    [Orientation.South.toString()]: { x: 0, y: 1 },
    [Orientation.East.toString()]: { x: 1, y: 0 },
    [Orientation.West.toString()]: { x: -1, y: 0 },
  };

  // Fonction privée pour déplacer le rover selon les distances spécifiées
  private deplacer(distanceX: number, distanceY: number): void {
    this.position = Position.deplacer(
      this.position,
      distanceX,
      distanceY,
      this.map.x,
      this.map.y
    );
  }

  // Méthode pour tourner le rover à droite
  TournerADroite(): void {
    this.orientation = this.orientation.orientationSuivante();
  }

  // Méthode pour tourner le rover à gauche
  TournerAGauche(): void {
    this.orientation = this.orientation.orientationPrecedente();
  }

  // Méthode pour avancer le rover
  Avancer(): boolean {
    // Simulez le mouvement pour vérifier la présence d'obstacles
    const deplacement = this.deplacements[this.orientation.toString()];
    const newPosition = Position.deplacer(
      this.position,
      deplacement.x,
      deplacement.y,
      this.map.x,
      this.map.y
    );
    if (!this.map.isObstacle(newPosition).isPresent) {
      // Déplacez le rover s'il n'y a pas d'obstacles
      this.position = newPosition;
      return true;
    }
    console.log('Position obstacle : ' , this.map.isObstacle(newPosition).obstacle)
    return false;
  }

  // Méthode pour reculer le rover
  Reculer(): boolean {
    // Obtention du déplacement correspondant à l'orientation actuelle
    const deplacement = this.deplacements[this.orientation.toString()];
    // Calcul de la nouvelle position en appliquant le déplacement inverse
    const newPosition = Position.deplacer(
      this.position,
      -deplacement.x,
      -deplacement.y,
      this.map.x,
      this.map.y
    );
    // Mise à jour de la position avec les coordonnées toroïdales
    // const toroidalPosition = this.map.getToroidalCoordinates(newPosition);

    // Vérification s'il y a un obstacle à la nouvelle position
    if (!this.map.isObstacle(newPosition).isPresent) {
      // Aucun obstacle n'est présent, donc le rover peut reculer
      this.position = newPosition;
      return true; // Retourne true si le rover a pu reculer
    }

    // Un obstacle est détecté, le rover ne peut pas reculer
    console.log('Position obstacle: ' , this.map.isObstacle(newPosition).obstacle)
    return false; // Retourne false si un obstacle empêche le mouvement
  }
}
