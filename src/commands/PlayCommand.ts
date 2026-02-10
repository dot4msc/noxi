import { Command } from "./Command";

export class PlayCommand extends Command {
  
  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  public execute(): void {
    this.scene.events.emit("play");
  }
}