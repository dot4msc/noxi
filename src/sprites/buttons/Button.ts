import Phaser from "phaser";
import { normalize } from "../../utilities/normalizing";

//Button: abstract class that all interactive buttons inherit
export abstract class Button extends Phaser.GameObjects.Image {
  //Basic constructor that prepares the button for rendering
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string){
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.setInteractive({useHandCursor: true});
    
    this.scale = normalize(this.scale);

    //run emit event on every button click
    this.on("pointerdown", () => {
      this.emitEvent();
    });
  }

  //emitEvent: run a specific function set by the button;
  abstract emitEvent(): void;
}