import type { Pet } from "../sprites/entities/Pet";
import { HappyState } from "./HappyState";
import { PetState } from "./PetState";

export class BoredState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  onTick() {
    this.pet.discipline--;
    this.pet.happiness -= 2;
  }

  onFeed() {
    console.log("TOO BORED TO EAT");
  }

  onPlay() {
    //play mini game
    this.pet.happiness += 2;
    if(this.pet.happiness >= 15) {
      this.pet.changeState(new HappyState(this.pet));
    }
  }

  onSleep() {
    console.log("TOO BORED TO SLEEP");
  }

  onScold() {
    this.pet.happiness -= 4;
  }
}