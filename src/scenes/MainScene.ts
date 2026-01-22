import Phaser from "phaser";
import { Pet } from "../sprites/entities/Pet";
import { FeedButton } from "../sprites/buttons/FeedButton";
import type { GameManagerScene } from "./GameManager";
import { InteractButton } from "../sprites/buttons/InteractButton";

export class MainScene extends Phaser.Scene {
  private _pet!: Pet;
  private _feedButton!: FeedButton;
  private _interactButton!: InteractButton;

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
    
    //Generate feedButton
    this.feedButton = new FeedButton(this, 0, 0);

    //Change origin to left corner
    this.feedButton.setOrigin(0,0);

    //Change position of feedButton
    this.feedButton.x = 8;
    this.feedButton.y = 3 * (this.game.config.height as number) / 4;

    //Create event on "feed-pet": set state first, apply state to pet
    this.events.on("feed-pet", () => {
      manager.petState.health = this.pet.petState.health + 1;
      this.pet.applyState(manager.petState); 
      console.log(this.pet.petState);
    });

    //Generate interactButton
    this.interactButton = new InteractButton(this, 0, 0);

    //Change origin to right corner
    this.interactButton.setOrigin(1,0);

    //Change position of interactButton
    this.interactButton.x = (this.game.config.width as number) - 8;
    this.interactButton.y = 3 * (this.game.config.height as number) / 4;

    this.events.on("interact-toggle", () => {
      console.log("clicked interaction page");
    });
  }

  //get pet
  get pet(): Pet {
    return this._pet;
  }
  
  //set pet
  set pet(p: Pet) {
    this._pet = p;
  }

  //get feedButton
  get feedButton(): FeedButton {
    return this._feedButton;
  }
  
  //set feedButton
  set feedButton(fb: FeedButton) {
    this._feedButton = fb;
  }

  //get interactButton
  get interactButton(): InteractButton {
    return this._interactButton;
  }

  //set interactButton
  set interactButton(ib: InteractButton) {
    this._interactButton = ib;
  }
}