import { PlaystationGameDiscAdapter } from "./adapters/PlaystationGameDiscAdapter";
import { XboxControllerAdapter } from "./adapters/XboxControllerAdapter";
import { UniversalConsoleImpl } from "./console/UniversalConsoleImpl";
import { PlayStationGameDisc } from "./devices/PlaystationGameDisc";
import { XboxController } from "./devices/XboxController";

const universalConsole = new UniversalConsoleImpl()
const xboxController = new XboxController()
const playstationGameDisc = new PlayStationGameDisc()

const xboxControllerAdapter = new XboxControllerAdapter(xboxController)
const playstationGameDiscAdapter = new PlaystationGameDiscAdapter(playstationGameDisc)

universalConsole.turnOn()
universalConsole.connectControl(xboxControllerAdapter)
universalConsole.loadGame(playstationGameDiscAdapter)
universalConsole.turnOff()