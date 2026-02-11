import type { Pet } from "../sprites/entities/Pet";
import { HappyState } from "./HappyState";
import { PetState } from "./PetState";

export class BoredState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  onTick(delta: number) {
    this.timer += delta;

    if(this.timer >= this.ticker) {
      this.pet.happiness -= 2;
      this.pet.satiety -= 2;
      this.rollNextTick();
    }
  }

  onFeed() {
    console.log("TOO BORED TO EAT");
  }

  onPlay() {
    //play mini game
    this.pet.happiness += 2;
    if(this.pet.happiness >= 15) {
      this.pet.changeState(new HappyState(this.pet));
      //play happy animation
    }
  }

  onSleep() {
    console.log("TOO BORED TO SLEEP");
  }

  onScold() {
    this.pet.happiness -= 4;
  }

  rollNextTick(): void {
    this.ticker = Phaser.Math.Between(80000, 120000);
  }
}