import type { Pet } from "../sprites/entities/Pet";
import { BoredState } from "./BoredState";
import { HappyState } from "./HappyState";
import { HungryState } from "./HungryState";
import { PetState } from "./PetState";

export class SleepingState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }

  onTick(delta: number): void {
    this.timer += delta;

    if(this.timer >= this.ticker){
      this.pet.energy++;
      this.pet.satiety--;
      this.timer = 0;

      if(this.pet.energy === 20) {
        if(this.pet.happiness <= 9) {
          this.pet.changeState(new BoredState(this.pet));
        }
        else if(this.pet.satiety <= 9) {
          this.pet.changeState(new HungryState(this.pet));
        }
        else {
          this.pet.changeState(new HappyState(this.pet));
        }
      }
      this.rollNextTick();
    }
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

  rollNextTick(): void {
    this.ticker = 360000;
  }
}