import Phaser from "phaser";
import { Button } from "./Button";
import { FeedCommand } from "../commands/FeedCommand";
import { ScoldCommand } from "../commands/ScoldCommand";

export class UIView extends Phaser.Scene {
  private scoldButton!: Button;
  private feedButton!: Button;

  constructor() {
    super({key: "ui-view"});
  }

  create() {
    this.scoldButton = new Button(this, 0, 0, "scold-button", new ScoldCommand(this.game.scene.getScene("main-scene")));
    this.feedButton = new Button(this, 0, 0, "feed-button", new FeedCommand(this.game.scene.getScene("main-scene")));
    
    this.scoldButton.setOrigin(1,0);

    this.scoldButton.setX(this.game.config.width as number-8);
    this.scoldButton.setY(this.game.config.height as number * (3 / 4));

    this.feedButton.setOrigin(0,0);

    this.feedButton.setX(8);
    this.feedButton.setY(this.game.config.height as number * (3 / 4));
  }


}