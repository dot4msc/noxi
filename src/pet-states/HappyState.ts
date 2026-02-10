import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";
import { SleepingState } from "./SleepingState";

export class HappyState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  onTick() {
    //do nothing
  }

  onFeed() {
    if(this.pet.hunger == 0) {
      console.log("PET IS FULL");
    }
    else {
      this.pet.hunger--;
    }
  }

  onPlay() {
    //play mini game
  }

  onSleep() {
    if(this.pet.energy >= 10){
      console.log("PET IS NOT TIRED");
    }
    else {
      this.pet.changeState(new SleepingState(this.pet));
    }
  }
  
  onScold() {
    if(this.pet.discipline <= 15) {
      this.pet.discipline += 2;
      this.pet.happiness--;
    }
    else {
      this.pet.discipline -= 1;
      this.pet.happiness -= 2;
    }
  }
  

}