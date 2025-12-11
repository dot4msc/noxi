import Phaser from "phaser";
import { normalize } from "../../utilities/normalizing";
import type { GameManagerScene } from "../../scenes/GameManager";

export class FeedButton extends Phaser.GameObjects.Image {
  constructor(scene:Phaser.Scene, x:number, y:number) {
    super(scene, x, y, "feed-button");
    scene.add.existing(this);

    this.setInteractive({useHandCursor: true});
    
    this.scale = normalize(this.scale);

    this.on("pointerdown", () => {
      const manager = scene.scene.get("game-manager-scene") as GameManagerScene;
      const pet = manager.getPet();
      
      pet.setHealth(pet.getHealth() + 1);
      console.log(pet.getHealth());
    });
  }
}