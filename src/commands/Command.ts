import type { Pet } from "../sprites/entities/Pet";

export abstract class Command {
  protected _pet: Pet;
  constructor(pet: Pet) {
    this._pet = pet;
  }
  get pet(): Pet {
    return this._pet;
  }
  set pet(p: Pet) {
    this._pet = p;
  }

  abstract execute(): void;
}