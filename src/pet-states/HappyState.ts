import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";

export class HappyState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  happy(): void {
    this.pet.happiness++;
  }

  bored(): void {
    throw new Error("Bored not implemented in HappyState");
  }

  hungry(): void {
    console.log("pet is not hungry");

  }

}