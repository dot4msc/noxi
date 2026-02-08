import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";

export class HungryState extends PetState {
  constructor(pet: Pet) {
    super(pet);
  }

  happy(): void {
    throw new Error("Method not implemented.");
  }
  bored(): void {
    throw new Error("Method not implemented.");
  }
  hungry(): void {
    this.pet.hunger--;
  }
  
}