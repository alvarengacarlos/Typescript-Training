import { Controller } from "./Controller";
import { GameDisc } from "./GameDisc";
import { UniversalConsole } from "./UniversalConsole";

export class UniversalConsoleImpl implements UniversalConsole {
  turnOn(): void {
    console.info('on')
  }
  
  turnOff(): void {
    console.info('off')
  }

  connectControl(control: Controller): void {
    console.info('controller connected')
  }

  loadGame(game: GameDisc): void {
    console.info('game started')
  }
}