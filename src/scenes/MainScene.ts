import Phaser from "phaser";
import { Pet } from "../sprites/entities/Pet";
import { FeedButton } from "../sprites/buttons/FeedButton";
import { normalize } from "../utilities/normalizing";

export class MainScene extends Phaser.Scene {
  private pet!: Pet;
  private feedButton!: FeedButton;
  constructor() {
    super({key: "main-scene"});
  }

  public create(){
    this.pet = new Pet(this, this.game.config.width as number / 2, this.game.config.width as number / 2);
    console.log(this.pet);

    this.feedButton = new FeedButton(this, normalize(40), normalize(130));
    console.log(this.feedButton);
  }
}