import { GameDisc } from "../console/GameDisc";
import { PlayStationGameDisc } from "../devices/PlaystationGameDisc";

export class PlaystationGameDiscAdapter implements GameDisc {
  constructor(private readonly playStationGameDisc: PlayStationGameDisc) {}

  read(): void {
    this.playStationGameDisc.loadDisc()
    this.playStationGameDisc.readDisc()
  }
}