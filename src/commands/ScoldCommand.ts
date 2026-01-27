import { Command } from "./Command";
import { Pet } from "../sprites/entities/Pet";
export class ScoldCommand extends Command {
  constructor(pet: Pet) {
    super(pet);
  }
  
  execute(): void {
    this.pet.discipline();
  }
}