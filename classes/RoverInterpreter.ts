import { Rover } from "./Rover";

export class RoverInterpreter {
  constructor(private rover: Rover) {}

  // Méthode pour interpréter et exécuter une suite de commandes
  interpreterCommandes(commandes: string[]): void {
    for (const commande of commandes) {
      if (!this.executerCommande(commande)) {
        console.log(`Exécution interrompue suite à un obstacle à la position: (${this.rover.position.getPosition().x}, ${this.rover.position.getPosition().y})}`);
        break; // Arrêt de l'exécution des commandes si un obstacle est rencontré
      }
    }
  }

  // Méthode pour exécuter une commande unique
  private executerCommande(commande: string): boolean {
    switch (commande) {
      case 'Avancer':
        const result_avancer = this.rover.Avancer();
        console.log(`Avancer Orientation : ${this.rover.orientation} Position : (${this.rover.position.getPosition().x}, ${this.rover.position.getPosition().y})`)
        return result_avancer;
      case 'Reculer':
        const result_reculer = this.rover.Reculer();
        console.log(`Reculer Orientation : ${this.rover.orientation} Position : (${this.rover.position.getPosition().x}, ${this.rover.position.getPosition().y})`)
        return result_reculer;
      case 'TournerADroite':
        this.rover.TournerADroite();
        console.log(`TournerADroite Orientation : ${this.rover.orientation} Position : (${this.rover.position.getPosition().x}, ${this.rover.position.getPosition().y})`)
        break;
      case 'TournerAGauche':
        this.rover.TournerAGauche();
        console.log(`TournerAGauche Orientation : ${this.rover.orientation} Position : (${this.rover.position.getPosition().x}, ${this.rover.position.getPosition().y})`)
        break;
      // Ajoutez d'autres commandes si nécessaire
      default:
        console.log(`Commande non reconnue: ${commande}`);
        return false; // Commande non reconnue
    }
    return true; // Retourne true si la commande a été exécutée sans rencontrer d'obstacle
  }
}
