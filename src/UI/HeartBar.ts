import Phaser from "phaser";
import { normalize } from "../utilities/normalizing";

const HeartAmount = {
  FULL: 0,
  HALF: 1,
  EMPTY: 2,
};

export class HeartBar extends Phaser.GameObjects.Container {
  private hearts: Phaser.GameObjects.Sprite[];
  private maxHearts: number;

  constructor(scene: Phaser.Scene, x: number, y: number, maxHearts: number = 3){
    super(scene, x, y);
    
    this.hearts = [];
    this.maxHearts = maxHearts;
    
    const spacing = 52;

    for(let i = 0; i < this.maxHearts; i++){
      const heart = scene.add.sprite(i * spacing, 0, "health", HeartAmount.FULL);
      heart.scale = normalize(heart.scale);
      this.hearts.push(heart);
      this.add(heart);
    }

    this.scene.add.existing(this);
  }

  setHealth(health: number) {
    
    const maxHealth = this.maxHearts * 2;
    health = Phaser.Math.Clamp(health, 0, maxHealth);
    const fullHearts = Math.floor(health / 2);
    const halfHearts = health % 2;
    const emptyHearts = this.maxHearts - fullHearts - halfHearts;

    let lastIndex = 0;

    for(let i = lastIndex; i < fullHearts; i++){
      this.hearts[i].setFrame(HeartAmount.FULL);
      lastIndex++;
    }

    for(let i = lastIndex; i < halfHearts + fullHearts; i++){
      this.hearts[i].setFrame(HeartAmount.HALF);
      lastIndex++;
    }

    for(let i = lastIndex; i < emptyHearts + halfHearts + fullHearts; i++) {
      this.hearts[i].setFrame(HeartAmount.EMPTY);
    }


    
  }
}