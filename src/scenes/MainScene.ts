import Phaser from "phaser";
import { Pet } from "../sprites/entities/Pet";
import { FeedButton } from "../sprites/buttons/FeedButton";
import type { GameManagerScene } from "./GameManager";

export class MainScene extends Phaser.Scene {
  private pet!: Pet;
  private feedButton!: FeedButton;

  constructor() {
    super({key: "main-scene"});
  }

  public create(){
    const manager = this.scene.get("game-manager-scene") as GameManagerScene;

    this.pet = manager.getPet();
    this.pet.x = this.game.config.width as number / 2;
    this.pet.y = this.game.config.height as number / 2;
    
    this.feedButton = manager.getFeedButton();

    this.feedButton.setOrigin(0,0);

    this.feedButton.x = 8;
    this.feedButton.y = 3 * (this.game.config.width as number) / 4;
  }
}