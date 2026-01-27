import Phaser from "phaser";
import { Button } from "../UI/Button";

export class ScoldButton extends Button {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene,x,y,"scold-button");
  }
  emitEvent(): void {
    this.scene.events.emit("scold");
  }
}