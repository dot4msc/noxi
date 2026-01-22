import Phaser from "phaser";
import { Button } from "./Button";

export class PlayButton extends Button {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene,x,y,"play-button");
  }
  emitEvent(): void {
    this.scene.events.emit("play");
  }
}