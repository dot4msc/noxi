import Phaser from "phaser";
import { Button } from "./Button";
import { FeedCommand } from "../commands/FeedCommand";
import { ScoldCommand } from "../commands/ScoldCommand";
import { HeartBar } from "./HeartBar";
import type { MainScene } from "../scenes/MainScene";
import { PlayCommand } from "../commands/PlayCommand";
import { SleepCommand } from "../commands/SleepCommand";

export class UIView extends Phaser.Scene {
  private scoldButton!: Button;
  private playButton!: Button;
  private feedButton!: Button;
  private sleepButton!: Button;
  private heartBar!: HeartBar;
  

  constructor() {
    super({key: "ui-view"});
  }

  create() {
    const gameWidth = this.game.config.width as number;
    const gameHeight = this.game.config.height as number;
    const mainScene = this.game.scene.getScene("main-scene") as MainScene;

    this.scoldButton = new Button(this, 0, 0, "scold-button", new ScoldCommand(mainScene));
    this.playButton = new Button(this, 0, 0, "play-button", new PlayCommand(mainScene));
    this.feedButton = new Button(this, 0, 0, "feed-button", new FeedCommand(mainScene));
    this.sleepButton = new Button(this, 0, 0, "sleep-button", new SleepCommand(mainScene));

    this.heartBar = new HeartBar(this, 0, 0);
    
    //Repositioning scoldButton
    this.scoldButton.setOrigin(1,0);
    
    this.scoldButton.setX(gameWidth - 16);
    this.scoldButton.setY(gameHeight * (3 / 4));

    //Repositioning playButton
    this.playButton.setOrigin(1,0);

    this.playButton.setX(gameWidth - 16);
    this.playButton.setY(gameHeight * (3 / 4) + 70);
    console.log(this.scoldButton.scaleY);

    //Repositioning feedButton
    this.feedButton.setOrigin(0,0);
    
    this.feedButton.setX(16);
    this.feedButton.setY(gameHeight * (3 / 4));

    //Repositioning sleepButton
    this.sleepButton.setOrigin(0,0);

    this.sleepButton.setX(16);
    this.sleepButton.setY(gameHeight * (3 / 4) + 70);

    //Repositioning heartBar
    this.heartBar.setX(32);
    this.heartBar.setY(gameHeight * (1 / 8));
    
    this.heartBar.setHealth(0);

  }


}