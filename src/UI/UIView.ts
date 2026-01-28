import Phaser from "phaser";
import { Button } from "./Button";
import { FeedCommand } from "../commands/FeedCommand";
import { ScoldCommand } from "../commands/ScoldCommand";

export class UIView extends Phaser.Scene {
  private scoldButton!: Button;
  private feedButton!: Button;

  constructor() {
    super({key: "UIView", active: true});
  }

  create() {
    this.scoldButton = new Button(this, 0, 0, "scold-button", new FeedCommand(this.game.scene.getScene("main-scene")));
    this.feedButton = new Button(this, 0, 0, "feed-button", new ScoldCommand(this.game.scene.getScene("main-scene")));
  }


}