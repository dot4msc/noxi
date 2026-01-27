import type { Pet } from "../sprites/entities/Pet";
import { Command } from "./Command";

export class FeedCommand extends Command {
  constructor(pet: Pet) {
    super(pet);

  }
  public execute(): void {
    this.pet.eat();
  }
}