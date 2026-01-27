import Phaser from "phaser";
import type { PetState } from "../states/PetState";

//GameManagerScene: Scene that manages states and change
export class GameManagerScene extends Phaser.Scene {
  //Add PetState that stores current state of the pet
  private _petState! : PetState
;
  constructor(){
    super({key: "game-manager-scene"});
  }

  //get the state
  get petState(): PetState {
    return this._petState;
  }

  //set the state (PROBABLY GOING TO DELETE THIS IF ITS NOT NECESSARY)
  set petState(ps: PetState) {
    this.petState = ps;
  }
}