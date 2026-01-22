import { Button } from "./Button";
import Phaser from "phaser";

export class InteractButton extends Button {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "interact-button");
  }
  emitEvent(): void {
    this.scene.events.emit("interact-toggle");
  }

}