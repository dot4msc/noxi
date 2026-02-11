import type { Pet } from "../sprites/entities/Pet";
import { PetState } from "./PetState";

export class HungryState extends PetState {
  
  constructor(pet: Pet) {
    super(pet);
  }
  
  //
  onTick(delta: number) {
    this.timer += delta; //entonces aqui el temporizador interno aumenta cada milisegundo

    if(this.timer >= this.ticker) {
      this.pet.satiety -= 2;
      this.pet.happiness--;
      this.timer = 0; 
      this.rollNextTick();
    }
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
  
  rollNextTick(): void {
    this.ticker = Phaser.Math.Between(100000, 180000); //Este es el limite al que puede llegar el temporizador para que haga "tick" de que estoy sintiendo hambre! Ah bueno pues
  }
}