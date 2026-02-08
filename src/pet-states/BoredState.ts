import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";

export class BoredState extends PetState {
  constructor(pet: Pet) {
    super(pet);
  }
  happy(): void {
    throw new Error("Method not implemented.");
  }
  bored(): void {
    this.pet.happiness--;
    this.pet.hunger--;
  }
  hungry(): void {
    console.log("Not hungry");
  }

}