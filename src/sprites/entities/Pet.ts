import Phaser from "phaser";
import { normalize } from "../../utilities/utilities";
import type { PetState } from "../../pet-states/PetState";

//Pet: Pet sprite that is the main "player" in the game
export class Pet extends Phaser.GameObjects.Sprite {
  //Has state

  private petState: PetState;
  private _age: number = 0;
  private _health: number = 6;
  private _satiety: number = 0;
  private _happiness: number = 20;
  private _discipline: number = 20;
  private _energy: number = 20;
  
  constructor(scene: Phaser.Scene, x: number, y: number, petState: PetState) {
    
    super(scene, x, y, "noxi_larva");
    this.scene.add.existing(this);
    this.scale = normalize(this.scale);
    this.petState = petState;
  }

  
  preUpdate(_time: number, delta: number){
    this.onTick(delta); //Aqui se lo pido al pet okay?
  }

  public changeState(state: PetState) {
    this.petState = state;
  }

  //Esta funcion onTick(delta: number) es que cada milisegundo que pase, el PET, no el estado
  //Haga algo

  public onTick(delta: number): void {
    this.petState.onTick(delta); //Ahora digamos que el estado del pet es TENGO HAMBRE a bueno
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
    this.petState.onSleep();
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
  
  get satiety(): number {
    return this._satiety;
  }
  
  set satiety(hunger: number) {
    this._satiety = hunger;
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

  get energy(): number {
    return this._energy;
  }

  set energy(e: number) {
    this._energy = e;
  }

}