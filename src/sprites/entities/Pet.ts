import Phaser from "phaser";
import { normalize } from "../../utilities/normalizing";

export class Pet extends Phaser.GameObjects.Sprite {
  private health: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "noxi_larva");
    this.scene.add.existing(this);
    this.scale = normalize(this.scale);
    this.health = 100;
  }

  
  public setHealth(health:number){
    this.health = health;
  }

  public getHealth() : number {
    return this.health;
  }
  
  
}