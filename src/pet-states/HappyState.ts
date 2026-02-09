import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";

export class HappyState extends PetState {

  onTick() {
    throw new Error("Method not implemented.");
  }

  onFeed() {
    throw new Error("Method not implemented.");
  }

  onPlay() {
    throw new Error("Method not implemented.");
  }

  onSleep() {
    throw new Error("Method not implemented.");
  }
  
  onScold() {
    throw new Error("Method not implemented.");
  }
  
  constructor(pet: Pet) {
    super(pet);
  }

}