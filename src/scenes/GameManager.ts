import Phaser from "phaser";
import { FeedButton } from "../sprites/buttons/FeedButton";
import { Pet } from "../sprites/entities/Pet";
import { normalize } from "../utilities/normalizing";

export class GameManagerScene extends Phaser.Scene {
  private pet!: Pet;
  private feedButton!: FeedButton;

  constructor(){
    super({key: "game-manager-scene"});
  }

  create(){
    this.pet = new Pet(this,0,0);
    this.pet.scale = normalize(this.pet.scale) / 2;

    this.feedButton = new FeedButton(this,0,0);
  }

  public getPet(): Pet {
    return this.pet;
  }

  public getFeedButton(): FeedButton {
    return this.feedButton;
  }
}