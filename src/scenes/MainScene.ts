import Phaser from "phaser";
import type { GameManagerScene } from "./GameManager";
import { Pet } from "../sprites/entities/Pet";

export class MainScene extends Phaser.Scene {
  private pet!: Pet;

  constructor() {
    super({key: "main-scene"});
  }

  public create() {
    
    //Generate manager
    const manager = this.scene.get("game-manager-scene") as GameManagerScene;

    //Generate pet
    this.pet = new Pet(this,0,0);

    //Apply state on creation
    this.pet.applyState(manager.petState);

    //Change position of pet
    this.pet.x = this.game.config.width as number / 2;
    this.pet.y = this.game.config.height as number / 2;

    

    

  }
}