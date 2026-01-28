import Phaser from "phaser";
import { Command } from "./Command";

export class FeedCommand extends Command {
  constructor(scene: Phaser.Scene) {
    super(scene);
  }
  public execute(): void {
    this.scene.events.emit("feed");
  }
}