import Phaser from "phaser";
import { normalize } from "../../utilities/utilities";
import type { PetState } from "../../pet-states/PetState";

//Pet: Pet sprite that is the main "player" in the game
export class Pet extends Phaser.GameObjects.Sprite {
  //Has state
  private _petState: PetState;
  private _age: number = 0;
  private _health: number = 6;
  private _hunger: number = 10;
  private _happiness: number = 10;
  private _hungerTimer: number = 0;
  
  constructor(scene: Phaser.Scene, x: number, y: number, petState: PetState) {
    
    super(scene, x, y, "noxi_larva");
    this.scene.add.existing(this);
    this.scale = normalize(this.scale);
    this._petState = petState;
  }
  
  
  
  public eat(): void {
    console.log("eat");
  }
  
  public plays(): void {
    console.log("Playing");
  }
  
  public discipline(): void {
    console.log("I'm being disciplined");
  }
  
  public eatTreat(): void {
    console.log("eating treat");
  }
  
  //GETTERS AND SETTERS
  get age(): number {
    return this._age;
  }
  
  set age(a: number) {
    this._age = a;
  }
  
  get health(): number {
    return this._health; 
  }
  
  set health(health: number) {
    this._health = health;
  }
  
  get hunger(): number {
    return this._hunger;
  }
  
  set hunger(hunger: number) {
    this._hunger = hunger;
  }
  
  get happiness(): number {
    return this._happiness;
  }
  
  set happiness(happiness: number) {
    this._happiness = happiness;
  }
  
  get petState(): PetState {
    return this._petState;
  }
  
  set petState(ps: PetState) {
    this._petState = ps;
  }

  get hungerTimer(): number {
    return this._hungerTimer;
  }
  set hungerTimer(ht: number) {
    this._hungerTimer = ht;
  }

  
}