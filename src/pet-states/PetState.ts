import type { Pet } from "../sprites/entities/Pet";

//CAN BE Hungry, Bored, Happy
export abstract class PetState {
  protected pet: Pet;

  constructor(pet: Pet) {
    this.pet = pet;
  }

  abstract onTick(delta?: number): void;
  abstract onFeed(): void;
  abstract onPlay(): void;
  abstract onSleep(): void;
  abstract onScold(): void;
}