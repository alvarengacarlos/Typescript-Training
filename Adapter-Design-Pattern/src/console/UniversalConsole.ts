import { Controller } from "./Controller"
import { GameDisc } from "./GameDisc"

export interface UniversalConsole {
  turnOn(): void
  turnOff(): void
  connectControl(control: Controller): void
  loadGame(game: GameDisc): void
}