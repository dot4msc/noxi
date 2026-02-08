import Phaser from "phaser";
import { Pet } from "../sprites/entities/Pet";
import { HappyState } from "../pet-states/HappyState";

export class MainScene extends Phaser.Scene {
  private pet!: Pet;

  constructor() {
    super({key: "main-scene"});
  }
  
  public create() {
    

    //Generate pet
    //Apply state on creation
    this.pet = new Pet(this,0,0, new HappyState(this.pet));


    //Change position of pet
    this.pet.x = this.game.config.width as number / 2;
    this.pet.y = this.game.config.height as number / 2;

    this.scene.scene.events.on("feed", () => {
      this.pet.eat();
    });


  }
}