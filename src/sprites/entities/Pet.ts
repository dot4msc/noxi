import Phaser from "phaser";
import { normalize } from "../../utilities/utilities";
import type { PetState } from "../../pet-states/PetState";

//Pet: Pet sprite that is the main "player" in the game
export class Pet extends Phaser.GameObjects.Sprite {
  //Has state
  private _petState: PetState;
  private _age: number = 0;
  private _health: number = 6;
  private _hunger: number = 0;
  private _happiness: number = 20;
  private _discipline: number = 0;
  private hungerTimer: number = 0;
  private hungerTicker: number = 0;
  private happinessTimer: number = 0;
  private happinessTicker: number = 0;
  
  constructor(scene: Phaser.Scene, x: number, y: number, petState: PetState) {
    
    super(scene, x, y, "noxi_larva");
    this.scene.add.existing(this);
    this.scale = normalize(this.scale);
    this._petState = petState;

    console.log(this.hungerTimer);

    this.rollNextHungerTick();
    this.rollNextHappinessTick();
  }

  preUpdate(_time: number, delta: number){
    this.hungerTimer += delta;


    if(this.hungerTimer >= this.hungerTicker) {

      this.hunger++;
      this.hungerTimer = 0;
      this.rollNextHungerTick();
    }

    if(this.happinessTimer >= this.happinessTicker) {

      this.happiness--;
      this.happinessTimer = 0;
      this.rollNextHungerTick();
    }
  }

  private rollNextHungerTick() {
    this.hungerTicker = Phaser.Math.Between(100000, 180000);
    console.log(this.hungerTicker);
  }

  private rollNextHappinessTick() {
    this.happinessTicker = Phaser.Math.Between(390000, 480000);
  }

  public changeState(state: PetState) {
    this.petState = state;
  }
  
  public onPlay(): void {
    this.petState.onPlay();
  }
  
  public onScold(): void {
    this.petState.onScold();
  }
  
  public onFeed(): void {
    this.petState.onFeed();
  }

  public onSleep(): void {
    this.petState.onFeed();
  }


  
  //GETTERS AND SETTERS
  get petState(): PetState {
    return this._petState;
  }
  
  private set petState(ps: PetState) {
    this._petState = ps;
  }

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

  get discipline(): number {
    return this._discipline;
  }

  set discipline(d: number) {
    this._discipline = d;
  }

}