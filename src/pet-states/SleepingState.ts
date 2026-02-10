import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";

export class SleepingState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  onTick(): void {
    throw new Error("Method not implemented.");
  }

  onFeed(): void {
    throw new Error("Method not implemented.");
  }

  onPlay(): void {
    throw new Error("Method not implemented.");
  }

  onSleep(): void {
    throw new Error("Method not implemented.");
  }

  onScold(): void {
    throw new Error("Method not implemented.");
  }

}