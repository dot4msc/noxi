import type { Pet } from "../sprites/entities/Pet";

//CAN BE Hungry, Bored, Happy
export abstract class State {
  protected pet: Pet;

  constructor(pet: Pet) {
    this.pet = pet;
  }
}