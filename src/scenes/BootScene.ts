import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({key: "boot-scene"});
  }

  preload() {
    this.load.image("noxi_larva", "placeholders/noxi-larva.png");
    this.load.image("feed-button", "placeholders/feed-button.png");
  }

  create(){
    this.scene.start("main-scene");
  }
}