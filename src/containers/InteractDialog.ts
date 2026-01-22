import Phaser from "phaser";
import { PlayButton } from "../sprites/buttons/PlayButton";
import { ScoldButton } from "../sprites/buttons/ScoldButton";

export class InteractDialog extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    const play = new PlayButton(scene, 0, 0);
    play.setOrigin(0,0);

    const scold = new ScoldButton(scene, 0, 100);
    scold.setOrigin(0,0);

    super(scene, x, y);
    scene.add.existing(this);
  }
}