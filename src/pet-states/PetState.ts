import type { Pet } from "../sprites/entities/Pet";

//CAN BE Hungry, Bored, Happy
export abstract class PetState {
  protected pet: Pet;
  protected ticker: number;
  protected timer: number;

  constructor(pet: Pet) {
    this.pet = pet;
    this.timer = 0;
    this.ticker = 0;
    this.rollNextTick();
  }

  abstract onTick(delta: number): void;
  abstract onFeed(): void;
  abstract onPlay(): void;
  abstract onSleep(): void;
  abstract onScold(): void;
  abstract rollNextTick(): void;
}