import { Command } from "./Command";

export class SleepCommand extends Command {
  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  execute(): void {
    this.scene.events.emit("sleep");
  }
}