import Phaser from "phaser";
import { normalize } from "../../utilities/normalizing";
import type { State } from "../../pet-states/State";

//Pet: Pet sprite that is the main "player" in the game
export class Pet extends Phaser.GameObjects.Sprite {
  //Has state
  private petState: State;
  private age: number = 0;
  private health: number = 1;
  private hunger: number = 2;
  private happiness: number = 3;
  private boreness: number = 4;
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    
    super(scene, x, y, "noxi_larva");
    this.scene.add.existing(this);
    this.scale = normalize(this.scale);
  }

  public eat(): void {
    console.log("eat");
  }

  public plays(): void {
    console.log("Playing");
  }

  public discipline(): void {
    console.log("I'm being disciplined");
  }

  public eatTreat(): void {
    console.log("eating treat");
  }

}