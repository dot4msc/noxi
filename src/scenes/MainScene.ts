import Phaser from "phaser";
import { Pet } from "../sprites/entities/Pet";

export class MainScene extends Phaser.Scene {
  private pet!: Pet;

  constructor() {
    super({key: "main-scene"});
  }

  public create() {
    
    //Generate manager

    //Generate pet
    this.pet = new Pet(this,0,0);

    //Apply state on creation

    //Change position of pet
    this.pet.x = this.game.config.width as number / 2;
    this.pet.y = this.game.config.height as number / 2;

    this.scene.scene.events.on("feed", () => {
      this.pet.eat();
    });

    this.scene.scene.events.on("scold", () => {
      this.pet.discipline();
    });
  }
}