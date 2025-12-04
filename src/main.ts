import Phaser from "phaser";
import { normalize } from "./utilities/normalizing";
import { BootScene } from "./scenes/BootScene";
import { MainScene } from "./scenes/MainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: normalize(160),
  height: normalize(144),
  parent: "main",
  backgroundColor: "#9bbc0f",
  scene: [BootScene, MainScene],
  pixelArt: true,
};

new Phaser.Game(config);
