import Phaser from "phaser";
import { Command } from "./Command";
export class ScoldCommand extends Command {
  constructor(scene: Phaser.Scene) {
    super(scene);
  }
  execute(): void {
    this.scene.events.emit("scold");
  }
}