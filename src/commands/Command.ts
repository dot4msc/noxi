import Phaser, { Scene } from "phaser";

export abstract class Command {
  protected _scene: Scene;
  constructor(scene: Phaser.Scene) {
    this._scene = scene;
  }

  get scene(): Phaser.Scene {
    return this._scene;
  }
  
  abstract execute(): void;
}