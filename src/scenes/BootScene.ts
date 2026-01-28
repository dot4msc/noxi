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
    this.load.image("scold-button", "placeholders/scold-button.png");
  }

  create(){
    //Launching GameManagerScene and Starting MainScene
    this.scene.launch("game-manager-scene");
    this.scene.launch("ui-view");
    this.scene.start("main-scene");
  }
}