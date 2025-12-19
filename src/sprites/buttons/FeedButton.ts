import Phaser from "phaser";
import { Button } from "./Button";

export class FeedButton extends Button {
  constructor(scene:Phaser.Scene, x:number, y:number) {
    super(scene, x, y, "feed-button");
  }

  //emitEvent: emits the "feed-pet" in the event
  public override emitEvent(): void {
    this.scene.events.emit("feed-pet");
  }
}