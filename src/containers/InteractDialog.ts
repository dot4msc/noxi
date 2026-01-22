import Phaser from "phaser";

export class InteractDialog extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
  }
}