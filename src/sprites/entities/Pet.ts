import Phaser from "phaser";
import { normalize } from "../../utilities/normalizing";
import type { PetState } from "../../states/PetState";

//Pet: Pet sprite that is the main "player" in the game
export class Pet extends Phaser.GameObjects.Sprite {
  //Has state
  private _petState: PetState;

  
  constructor(scene: Phaser.Scene, x: number, y: number, petState?: PetState) {
    super(scene, x, y, "noxi_larva");
    this.scene.add.existing(this);
    this.scale = normalize(this.scale);
    this._petState = petState ? petState : {health: 100, age: 0};
  }
  
  //applyState: Modifies the pet's state based on what is given
  public applyState(petPatch: Partial<PetState>) {
    Object.assign(this._petState, petPatch);
  }
  
  //get petState
  get petState(): PetState {
    return this._petState;
  }

  public eat(): void {
    this._petState.health++;
    console.log(this.petState);
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