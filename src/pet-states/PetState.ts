import type { Pet } from "../sprites/entities/Pet";

//CAN BE Hungry, Bored, Happy
export abstract class PetState {
  protected pet: Pet;

  constructor(pet: Pet) {
    this.pet = pet;
  }

  abstract happy(): void;
  abstract bored(): void;
  abstract hungry(): void;
}