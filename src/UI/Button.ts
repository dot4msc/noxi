import Phaser from "phaser";
import { normalize } from "../utilities/normalizing";
import type { Command } from "../commands/Command";

//Button: abstract class that all interactive buttons inherit
export class Button extends Phaser.GameObjects.Image {
  //Basic constructor that prepares the button for rendering
  private _command: Command;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, command: Command){
    super(scene, x, y, texture);
    scene.add.existing(this);

    this._command = command;
    this.setInteractive({useHandCursor: true});
    
    this.scale = normalize(this.scale);

    //run command on every button click
    this.on("pointerdown", () => {
      this.command.execute();
    });
  }
  
  get command(): Command {
    return this._command;
  }

  set command(c: Command){
    this._command = c;
  }
}