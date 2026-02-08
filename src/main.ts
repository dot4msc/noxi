import Phaser from "phaser";
import { normalize } from "./utilities/utilities";
import { BootScene } from "./scenes/BootScene";
import { MainScene } from "./scenes/MainScene";
import { UIView } from "./UI/UIView";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: normalize(160),
  height: normalize(144),
  parent: "main",
  backgroundColor: "#9bbc0f",
  scene: [BootScene, MainScene, UIView],
  pixelArt: true,
};

new Phaser.Game(config);
