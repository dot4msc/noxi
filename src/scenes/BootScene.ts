import Phaser from "phaser";

//BootScene: Scene used to load assets
export class BootScene extends Phaser.Scene {
  constructor() {
    super({key: "boot-scene"});
  }

  preload() {
    //loading images
    this.load.image("noxi_larva", "placeholders/noxi-larva.png");
    this.load.image("feed-button", "placeholders/feed-button.png");
    this.load.image("play-button", "placeholders/play-button.png");
    this.load.image("scold-button", "placeholders/scold-button.png");
    this.load.image("sleep-button", "placeholders/sleep-button.png");
    this.load.spritesheet("health", "placeholders/health.png", {frameWidth: 13, frameHeight: 11});
  }

  create(){
    //Launching GameManagerScene and Starting MainScene
    this.scene.launch("ui-view");
    this.scene.start("main-scene");
  }
}