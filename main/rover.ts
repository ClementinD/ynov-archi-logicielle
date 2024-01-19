import { Map } from "../Topologie/Map";
import { Interpreter } from "../Topologie/Interpreter";
import { Entier } from "../Topologie/Entier";

// Initialisation de la carte avec une taille de 4x4
const map = new Map(new Entier(6), new Entier(6));

// Créer une nouvelle instance d'Interpreter
const interpreter = new Interpreter(map);

const commandes = ["ARDDDAAAA", "AAADR"];
commandes.forEach((commande) => {
  interpreter.interpretCommand(commande);
});
