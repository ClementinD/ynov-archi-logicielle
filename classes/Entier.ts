export class Entier {
  private  readonly value: number;

  constructor(value: number) {
    this.value = Math.floor(value); // S'assurer que la valeur est un entier
  }

  currentValue(): number {
    return this.value;
  }

  // Méthode pour ajouter un autre Entier
  add(other: Entier): Entier {
    return new Entier(this.value + other.value);
  }

  // Méthode pour le modulo
  modulo(other: Entier): Entier {
    return new Entier(((this.value % other.value) + other.value) % other.value);
  }

  egalTo(other: Entier): boolean {
    return this.value === other.value;
  }
}