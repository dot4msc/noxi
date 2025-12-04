import Phaser from "phaser";
import { normalize } from "../../utilities/normalizing";

export class FeedButton extends Phaser.GameObjects.Image {

  constructor(scene:Phaser.Scene, x:number, y:number) {
    super(scene, x, y, "feed-button");
    scene.add.existing(this);

    this.setInteractive({useHandCursor: true});
    
    this.scale = normalize(this.scale);
    
    this.on("pointerdown", () => {
      console.log("Eat!");
    });


  }
}