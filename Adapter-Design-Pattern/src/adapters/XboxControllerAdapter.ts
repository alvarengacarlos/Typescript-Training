import { Controller } from "../console/Controller";
import { XboxController } from "../devices/XboxController";

export class XboxControllerAdapter implements Controller {
  constructor(private readonly xboxController: XboxController) {}
  
  pause(): void {
    this.xboxController.pause()
  }

  red(): void {
    this.xboxController.b()
  }

  blue(): void {
    this.xboxController.x()
  }
}