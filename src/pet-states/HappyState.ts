import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";
import { SleepingState } from "./SleepingState";

export class HappyState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  onTick(delta: number) {
    //do nothing
    this.timer += delta;

    if(this.timer >= this.ticker){
      this.pet.happiness--;
      this.pet.satiety--;
      this.timer = 0;
      this.rollNextTick();
    }
  }

  onFeed() {
    if(this.pet.satiety == 0) {
      console.log("PET IS FULL");
    }
    else {
      this.pet.satiety--;
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

  rollNextTick(): void {
    this.ticker = Phaser.Math.Between(150000, 200000);
  }
  

}